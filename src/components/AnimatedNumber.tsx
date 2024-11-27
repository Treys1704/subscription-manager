import { motion, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"
import { AnimatedNumberProps } from "../types"

export function AnimatedNumber({ value, total }: AnimatedNumberProps) {
  const spring = useSpring(0, {
    damping: 30,
    stiffness: 300
  })

  const display = useTransform(spring, (current) => 
    `$${Math.max(0, Math.round(current)).toLocaleString()}`
  )

  useEffect(() => {
    spring.set(value)
  }, [value, spring])

  return (
    <div className="flex items-baseline gap-1 text-2xl font-medium">
      <motion.span>{display}</motion.span>
      <span className="text-gray-400">/${total.toLocaleString()}</span>
    </div>
  )
}

