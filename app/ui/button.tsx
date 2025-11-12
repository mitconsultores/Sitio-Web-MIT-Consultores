import { Link } from "react-router";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({ 
  children, 
  variant = "primary", 
  href, 
  onClick, 
  className = "",
  type = "button"
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-block text-center";
  
  const variants = {
    primary: "bg-[#171b0b] text-white hover:bg-[#57512F] hover:scale-105 shadow-lg hover:shadow-xl",
    secondary: "border-2 border-[#171b0b] text-[#171b0b] hover:bg-[#171b0b] hover:text-white hover:scale-105"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

