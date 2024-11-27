export interface Subscription {
  id: string;
  name: string;
  logo: string;
  amount: number;
  selected: boolean;
}

export interface AnimatedNumberProps {
  value: number;
  total: number;
}

export interface CreditCardProps {
  progress: number;
}
