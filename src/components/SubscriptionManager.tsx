import { useState } from "react"
import { AnimatedNumber } from "./AnimatedNumber"
import { CreditCard } from "./CreditCard"
import { SubscriptionCard } from "./SubscriptionCard"
import { Button } from "@/components/ui/button"
import { Subscription } from "../types"

const initialSubscriptions: Subscription[] = [
  { id: "adobe", name: "Adobe", logo: "/images/adobe.png", amount: 1200, selected: true },
  { id: "amazon", name: "Amazon", logo: "/images/amazon.jpeg", amount: 800, selected: true },
  { id: "apple", name: "Apple App Store", logo: "/images/apple.png", amount: 600, selected: true },
  { id: "booking", name: "Booking.com", logo: "/images/booking.png", amount: 1500, selected: true },
  { id: "figma", name: "Figma", logo: "/images/figma.webp", amount: 400, selected: true },
  { id: "github", name: "GitHub", logo: "/images/github.png", amount: 500, selected: true },
  { id: "linear", name: "Linear", logo: "/images/linear.avif", amount: 900, selected: true },
  { id: "slack", name: "Slack", logo: "/images/slack.png", amount: 800, selected: true },
]

export default function SubscriptionManager() {
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions)
  
  const totalAmount = initialSubscriptions.reduce((sum, sub) => sum + sub.amount, 0)
  const selectedAmount = subscriptions
    .filter(sub => sub.selected)
    .reduce((sum, sub) => sum + sub.amount, 0)
  
  const progress = selectedAmount / totalAmount
  const allSelected = subscriptions.every(sub => sub.selected)
  const noneSelected = subscriptions.every(sub => !sub.selected)

  const toggleSubscription = (id: string) => {
    setSubscriptions(subs => 
      subs.map(sub => 
        sub.id === id ? { ...sub, selected: !sub.selected } : sub
      )
    )
  }

  const toggleAll = () => {
    setSubscriptions(subs =>
      subs.map(sub => ({ ...sub, selected: !allSelected }))
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          Select the sites you want to change your card on
        </h3>
        <Button
          variant="ghost"
          onClick={toggleAll}
        >
          {allSelected ? 'Unselect All' : 'Select All'}
        </Button>
      </div>

      <p className="text-gray-500">
        We found {subscriptions.length} sites based on your browser history
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {subscriptions.map(sub => (
          <SubscriptionCard
            key={sub.id}
            name={sub.name}
            logo={sub.logo}
            selected={sub.selected}
            onToggle={() => toggleSubscription(sub.id)}
          />
        ))}
      </div>

      <div className="flex items-center justify-between pt-4">
        <div className="space-y-1">
          <div className="text-gray-500 flex items-center gap-2">
            Estimated yearly spend
            <span className="size-4 rounded-full border flex items-center justify-center text-xs">?</span>
          </div>
          <AnimatedNumber value={selectedAmount} total={totalAmount} />
        </div>
        <CreditCard progress={progress} />
      </div>

      <Button 
        className={`w-full ${noneSelected ? 'cursor-not-allowed bg-gray-400 hover:bg-gray-400' : ''}`}
        size="lg"
      >
        Migrate my spend  &nbsp;→
      </Button>
    </div>
  )
}

