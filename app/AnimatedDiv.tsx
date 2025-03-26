// components/AnimatedDiv.tsx
import { motion } from "framer-motion";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, className, ...props }) => {
  return (
    <motion.div
      className={`${className}`}
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
