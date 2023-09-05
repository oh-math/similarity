"use client";

import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import Button from "./ui/Button";
import { toast } from "./ui/Toast";


const SignInButton: FC = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    } catch (error) {}
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
