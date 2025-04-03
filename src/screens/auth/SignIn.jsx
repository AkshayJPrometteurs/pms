"use client"

import React from 'react';
import GuestLayout from "@/layouts/GuestLayout";
import {Button, Input, Checkbox, Link, Form, Divider} from "@heroui/react";
import PasswordInput from "@/components/PasswordInput";

const SignIn = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
    };
    return (
        <GuestLayout>
            <div className="flex flex-col gap-4 rounded-large w-full max-w-md p-6 border border-gray-200 shadow-md">
                <div className="flex flex-col items-center pb-6">
                    <p className="text-xl font-medium">Welcome Back</p>
                    <p className="text-small text-default-500">Sign in to your account to continue</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Button
                        startContent={
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" focusable="false" viewBox="0 0 48 48" width="24" height="24">
                                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"></path>
                                <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"></path>
                                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"></path>
                                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"></path>
                            </svg>
                        }
                        variant="bordered"
                    >
                        Continue with Google
                    </Button>
                </div>
                <div className="flex items-center gap-4 py-2">
                    <Divider className="flex-1" />
                    <p className="shrink-0 text-tiny text-default-500">OR</p>
                    <Divider className="flex-1" />
                </div>
                <Form className="flex flex-col gap-3" validationBehavior="native" onSubmit={handleSubmit}>
                    <Input
                        isRequired
                        label="Email Address"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        variant="bordered"
                    />
                    <PasswordInput label="Password" name="password" placeholder="Enter your password" />
                    <div className="flex w-full items-center justify-between px-1 py-2">
                        <Checkbox name="remember">
                            Remember me
                        </Checkbox>
                        <Link className="text-default-500" href="#">
                            Forgot password?
                        </Link>
                    </div>
                    <Button className="w-full" color="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
                <p className="text-center text-small">
                    Need to create an account?&nbsp;
                    <Link href="/sign-up">
                        Sign Up
                    </Link>
                </p>
            </div>
        </GuestLayout>
    );
};

export default SignIn;
