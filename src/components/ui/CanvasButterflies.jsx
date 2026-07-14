import React, { useEffect, useRef } from 'react';

export default function CanvasButterflies() {
  const canvasRef = useRef(null);
  
  const butterfliesRef = useRef(
    Array.from({ length: 2 }).map((_, i) => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
      y: Math.random() * 300 + 100,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 1.5,
      angle: 0,
      wingPhase: Math.random() * Math.PI * 2,
      targetX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
      targetY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
      changeTimer: Math.random() * 100,
      trail: [],
      // Butterfly 1: Monarch Orange, Butterfly 2: Morpho Blue
      colorStops: i === 0 
        ? ['#FF4500', '#FF8C00', '#FFA500'] // Monarch Orange
        : ['#0EA5E9', '#38BDF8', '#7DD3FC'] // Morpho Blue
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let animId;
    const butterflies = butterfliesRef.current;

    const drawWing = (ctx, x, y, angle, wingAngle, side, scale, colors) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.scale(side, 1);

      // Wing flap perspective
      const flapScale = Math.cos(wingAngle) * 0.5 + 0.5;
      ctx.scale(flapScale, 1);

      // Outer wing
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-12 * scale, -20 * scale, -28 * scale, -18 * scale, -22 * scale, 2 * scale);
      ctx.bezierCurveTo(-28 * scale, 14 * scale, -10 * scale, 20 * scale, 0, 4 * scale);
      ctx.closePath();

      const grad = ctx.createRadialGradient(
        -10 * scale, -4 * scale, 0, -10 * scale, -4 * scale, 25 * scale
      );
      grad.addColorStop(0, colors[0]);
      grad.addColorStop(0.5, colors[1]);
      grad.addColorStop(1, colors[2]);
      ctx.fillStyle = grad;
      ctx.fill();

      // Inner pattern circles
      ctx.globalAlpha = 0.4;
      ctx.beginPath();
      ctx.ellipse(-14 * scale, -6 * scale, 5 * scale, 7 * scale, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(-10 * scale, 8 * scale, 3 * scale, 4 * scale, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.globalAlpha = 1;

      // Wing edge
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-12 * scale, -20 * scale, -28 * scale, -18 * scale, -22 * scale, 2 * scale);
      ctx.bezierCurveTo(-28 * scale, 14 * scale, -10 * scale, 20 * scale, 0, 4 * scale);
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.3)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
    };

    const drawBody = (ctx, x, y, angle, scale) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      // Body
      ctx.beginPath();
      ctx.ellipse(0, 0, 1.5 * scale, 8 * scale, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#1E293B';
      ctx.fill();

      // Head
      ctx.beginPath();
      ctx.arc(0, -9 * scale, 2.5 * scale, 0, Math.PI * 2);
      ctx.fillStyle = '#0F172A';
      ctx.fill();

      // Antennae
      ctx.beginPath();
      ctx.moveTo(-1 * scale, -11 * scale);
      ctx.quadraticCurveTo(-6 * scale, -20 * scale, -4 * scale, -22 * scale);
      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(-4 * scale, -22 * scale, 1.2 * scale, 0, Math.PI * 2);
      ctx.fillStyle = '#1E293B';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(1 * scale, -11 * scale);
      ctx.quadraticCurveTo(6 * scale, -20 * scale, 4 * scale, -22 * scale);
      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(4 * scale, -22 * scale, 1.2 * scale, 0, Math.PI * 2);
      ctx.fillStyle = '#1E293B';
      ctx.fill();

      ctx.restore();
    };

    const drawSparkle = (ctx, x, y, opacity, size, color) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      butterflies.forEach(b => {
        // Update target more frequently so they fly all over
        b.changeTimer++;
        if (b.changeTimer > 60 + Math.random() * 60) {
          b.changeTimer = 0;
          b.targetX = Math.random() * canvas.width;
          b.targetY = Math.random() * canvas.height;
        }

        // Steer toward target faster
        const dx = b.targetX - b.x;
        const dy = b.targetY - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        b.vx += (dx / dist) * 0.2;
        b.vy += (dy / dist) * 0.2;

        // Add subtle sine wave wobble
        b.vx += Math.sin(Date.now() * 0.002) * 0.1;
        b.vy += Math.cos(Date.now() * 0.0015) * 0.1;

        // Damping
        b.vx *= 0.98;
        b.vy *= 0.98;

        // Higher speed limit so they cover ground fast
        const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        if (speed > 6) {
          b.vx = (b.vx / speed) * 6;
          b.vy = (b.vy / speed) * 6;
        }

        b.x += b.vx;
        b.y += b.vy;

        // Bounce off edges with larger margin to keep them fully visible
        if (b.x < 30) { b.x = 30; b.vx = Math.abs(b.vx); }
        if (b.x > canvas.width - 30) { b.x = canvas.width - 30; b.vx = -Math.abs(b.vx); }
        if (b.y < 30) { b.y = 30; b.vy = Math.abs(b.vy); }
        if (b.y > canvas.height - 30) { b.y = canvas.height - 30; b.vy = -Math.abs(b.vy); }

        // Movement angle
        b.angle = Math.atan2(b.vy, b.vx) + Math.PI / 2;

        // Wing phase
        b.wingPhase += 0.18;

        const wingAngle = Math.sin(b.wingPhase) * Math.PI * 0.6;
        const scale = 1.3;

        // Particle trail
        b.trail.push({
          x: b.x + (Math.random() - 0.5) * 10,
          y: b.y + (Math.random() - 0.5) * 10,
          life: 1,
          size: Math.random() * 2 + 1,
        });
        if (b.trail.length > 25) b.trail.shift();

        // Draw trail
        b.trail.forEach((p) => {
          p.life -= 0.025;
          if (p.life > 0) {
            drawSparkle(ctx, p.x, p.y, p.life * 0.5, p.size * p.life, b.colorStops[1]);
          }
        });
        b.trail = b.trail.filter(p => p.life > 0);

        // Draw butterfly
        drawWing(ctx, b.x, b.y, b.angle, wingAngle, 1, scale, b.colorStops);
        drawWing(ctx, b.x, b.y, b.angle, wingAngle, -1, scale, b.colorStops);
        drawBody(ctx, b.x, b.y, b.angle, scale);
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'normal' }}
    />
  );
}
