import { motion } from "framer-motion"
import { CreditCardProps } from "../types"

export function CreditCard({ progress }: CreditCardProps) {
  return (
    <div className="relative w-[120px] h-[75px] rounded-sm overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            rgba(255,255,255,0.1) 0px,
            rgba(255,255,255,0.1) 1px,
            transparent 1px,
            transparent 12px
          )`
        }} />
      </div>

      {/* Progress overlays */}
      <motion.div 
        className="absolute inset-0 bg-gray-400"
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: 1 - progress,
          transformOrigin: "right"
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      />
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: progress,
          transformOrigin: "left"
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      />

      {/* Card content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-2 text-white">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1">
            <div className="text-[6px]">MJR</div>
            <div className="w-2 h-2 rounded-full border border-white/30 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full border border-white/30" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-[8px] tracking-[0.1em]">1234 4567 7890 1234</div>
          <div className="flex justify-between items-end text-[6px]">
            <div>
              <div className="text-[5px] text-white/70">VALID THRU</div>
              <div>01/25</div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase">VISA</span>
            </div>
          </div>
        </div>
      </div>

      {/* <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ scaleY: 1 }}
        animate={{ 
          scaleY: progress,
          transformOrigin: "bottom"
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      /> */}
    </div>
  )
}

