import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  animate = true,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-body font-bold rounded-full px-[28px] py-[14px] transition-all duration-300 transform outline-none focus:ring-4";
  
  const variants = {
    primary: "bg-accent text-text shadow-soft hover:shadow-[0_12px_40px_rgba(255,179,0,0.25)] hover:-translate-y-1 hover:scale-105 hover:bg-[#E6A100] focus:ring-accent/50",
    secondary: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white hover:shadow-[0_12px_40px_rgba(150,115,166,0.25)] hover:-translate-y-1 focus:ring-primary/50",
    accent: "bg-accent text-text shadow-soft hover:shadow-float hover:-translate-y-1 focus:ring-accent/50",
    highlight: "bg-highlight text-white shadow-soft hover:shadow-float hover:-translate-y-1 focus:ring-highlight/50",
    ghost: "bg-transparent text-text hover:bg-black/5"
  };

  const sizes = {
    sm: "px-[20px] py-[10px] text-sm",
    md: "text-lg leading-none",
    lg: "text-xl leading-none"
  };

  const Component = animate ? motion.button : 'button';
  const motionProps = animate ? { whileTap: { scale: 0.95 } } : {};

  return (
    <Component
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
