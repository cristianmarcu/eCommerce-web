import { loadStripe, Stripe } from "@stripe/stripe-js";

export type StripePromise = Promise<Stripe | null>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const REACT_APP_STRIPE_PUBLISHABLE_KEY: string;

export const stripePromise: StripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || ""
);
