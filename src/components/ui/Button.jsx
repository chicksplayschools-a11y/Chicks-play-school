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
  const baseStyles = "inline-flex items-center justify-center font-heading font-semibold rounded-full transition-all duration-300 transform outline-none focus:ring-4";
  
  const variants = {
    primary: "bg-primary text-text shadow-soft hover:shadow-float hover:-translate-y-1 focus:ring-primary/50",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-primary/5 focus:ring-primary/50",
    accent: "bg-accent text-white shadow-soft hover:shadow-float hover:-translate-y-1 focus:ring-accent/50",
    highlight: "bg-highlight text-white shadow-soft hover:shadow-float hover:-translate-y-1 focus:ring-highlight/50",
    ghost: "bg-transparent text-text hover:bg-black/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-lg leading-none",
    lg: "px-8 py-4 text-xl leading-none"
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
