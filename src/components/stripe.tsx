"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";
import type React from "react";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// Replace "pk_test_TYooMQauvdEDq54NiTgbpRsm" with your actual Stripe Publishable Key
// You can find this in your Stripe Dashboard: https://dashboard.stripe.com/test/apikeys
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_TYooMQauvdEDq54NiTgbpRsm"
);

interface StripeWrapperProps {
  children: React.ReactNode;
  options: StripeElementsOptions;
  className?: string;
}

export function Stripe({ children, options, className }: StripeWrapperProps) {
  return (
    <div className={className}>
      <Elements stripe={stripePromise} options={options}>
        {children}
      </Elements>
    </div>
  );
}
