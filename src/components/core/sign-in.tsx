import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import Link from "next/link";
import { Button } from "../ui/button";
const formSchema = z.object({
  email_or_un: z.string().email().min(2),
  password: z.string().min(2),
});

export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email_or_un: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-full h-auto grid grid-cols-2 gap-6">
      <div
        className="w-full h-full rounded-l-3xl rounded-r-md overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url("/image/signin.jpg")` }}
      >
        <div className="w-full h-full bg-amber-600/30"></div>
      </div>
      <div className="">
        <h1 className="capitalize text-4xl mb-12 font-medium">
          sign in to boss pro
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email_or_un"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter email or username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      className="rounded-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email_or_un"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      className="rounded-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <Checkbox /> <Label>Remember Me</Label>
              </div>
              <Link href="/reset" className="text-sm font-semibold underline">
                Reset Password
              </Link>
            </div>
            <Button className="w-full" size="xlg">
              Sign In
            </Button>
            <div className="w-full text-center">OR</div>
            <Button
              className="w-full bg-foreground hover:bg-foreground/80"
              size="xlg"
            >
              Continue with Google
            </Button>
            <p className="text-center">
              Not a member yet?
              <Button variant="link" className="underline text-primary">
                Join Now
              </Button>
            </p>
          </form>
        </Form>
        <p className="text-muted-foreground mt-12 text-xs">
          * By selecting Agree and Get Started, I agree to Seen&apos;s Terms of
          use and acknowledge Seen’s Privacy policy and Coastal Community Bank’s
          Privacy notice.
          <br />
          <br />I agree that Coastal Community Bank may share my information
          with Seen for marketing, unless I opt out by emailing help@seen.com.
        </p>
      </div>
    </div>
  );
}
