import { motion } from "framer-motion"
import { Check } from 'lucide-react'

interface SubscriptionCardProps {
  name: string;
  logo: string;
  selected: boolean;
  onToggle: () => void;
}

export function SubscriptionCard({ name, logo, selected, onToggle }: SubscriptionCardProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="relative p-4 bg-white rounded-xl border hover:border-gray-400 transition-colors"
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col items-center gap-2">
        <img src={logo} alt={name} className="w-8 h-8 rounded" />
        <span className="text-sm">{name}</span>
      </div>
      
      <motion.div
        initial={false}
        animate={{
          opacity: selected ? 1 : 0,
          scale: selected ? 1 : 0.8
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="absolute top-2 right-2 size-5 bg-black rounded-full flex items-center justify-center"
      >
        <Check className="size-3 text-white" />
      </motion.div>
    </motion.button>
  )
}

