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
import FormInput from "@/src/components/forms/FormInput";
import FormContainer from "./FormContainer";
import { accentClassNames } from "@/lib/utils";
import GoogleOption from "./GoogleOption";

// Schema including "remember" field
const loginSchema = z.object({
  userEmail: z.string().email({ message: "Invalid email address" }),
  userPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  remember: z.boolean().optional(), // Add checkbox
});

export default function LoginForm() {
  const { accent, accentHover } = accentClassNames;

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
    <FormContainer
      title={"Welcome Back"}
      subtitle={"Please enter your details to sign in"}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      className={`data-[state=checked]:${accent} data-[state=checked]:text-primary-foreground dark:data-[state=checked]:${accent} data-[state=checked]:border-white`}
                    />
                  </FormControl>
                  <FormLabel htmlFor="remember" className="mb-0">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />

            <small className="font-medium">Forgot Password?</small>
          </div>

          <Button
            type="submit"
            className={`w-full ${accent} ${accentHover} cursor-pointer`}
          >
            Sign In
          </Button>
        </form>
      </Form>
      <GoogleOption buttonText={'Sign In With Google'} bottomText={"Don't you have an account?"} ctaText={'Sign Up'} /> 
    </FormContainer>
  );
}
