import { motion } from "framer-motion"
import { CreditCardProps } from "../types"

export function CreditCard({ progress }: CreditCardProps) {
  return (
    <div className="relative w-[120px] h-[75px] rounded-xl bg-gray-200 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ scaleY: 1 }}
        animate={{ 
          scaleY: progress,
          transformOrigin: "bottom"
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      />
    </div>
  )
}

