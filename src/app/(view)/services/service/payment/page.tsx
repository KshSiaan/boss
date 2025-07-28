"use client";
import React, { useState } from "react";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, CheckCircle2Icon } from "lucide-react";
import Link from "next/link";
export default function Page() {
  const [paid, setPaid] = useState(false);
  const stripePromise = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM");
  return (
    <main className="min-h-[70dvh] p-6 flex justify-center items-center">
      <div className="w-full lg:w-1/2 h-auto">
        {paid ? (
          renderSuccess()
        ) : (
          <Elements
            stripe={stripePromise}
            options={{ mode: "payment", amount: 50, currency: "usd" }}
          >
            <PaymentElement />
            <Button
              className="w-full mt-12!"
              onClick={() => {
                setPaid(true);
              }}
            >
              Confirm Payment
            </Button>
          </Elements>
        )}
      </div>
    </main>
  );
}

const renderSuccess = () => {
  return (
    <>
      <div className="h-[50dvh] lg:w-[50dvw] flex flex-col justify-center items-center gap-6 border rounded-xl">
        <CheckCircle2Icon className="size-[100px] text-green-600" />
        <h1 className="text-3xl">Payment successful</h1>
        <p>Thank you for your payment. Your Order is proceed</p>
      </div>
      <div className="w-full flex items-center justify-center mt-6">
        <Button className="lg:text-lg" size={"xlg"} variant={"outline"} asChild>
          <Link href={"/services"}>
            Discover Other Services <ArrowUpRightIcon className="size-6" />
          </Link>
        </Button>
      </div>
    </>
  );
};
