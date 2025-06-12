"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import FormInput from "@/src/components/FormInput";

// Schema including "remember" field
const loginSchema = z.object({
  userEmail: z.string().email({ message: "Invalid email address" }),
  userPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  remember: z.boolean().optional(), // Add checkbox
});

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userEmail: "",
      userPassword: "",
      remember: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Login data:", data); // includes remember
    form.reset();
  };

  return (
    <div className="max-w-md mx-auto space-y-6 p-6 shadow-md rounded-xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-center">Log In</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormInput
            form={form}
            name="userEmail"
            label="Email"
            placeholder={"Enter your Email"}
          />
          <FormInput
            form={form}
            name="userPassword"
            label="Password"
            placeholder={"******"}
          />

          <div className="flex justify-between w-full">
            {/* Remember Me Checkbox */}
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="remember"
                      className="data-[state=checked]:bg-[#550948] data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-[#550948] data-[state=checked]:border-[#550948]"
                    />
                  </FormControl>
                  <FormLabel htmlFor="remember" className="mb-0">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />

            <small>Forgot Password?</small>
          </div>

          <Button type="submit" className="w-full bg-[#550948] cursor-pointer">
            Log In
          </Button>
        </form>
      </Form>
    </div>
  );
}
