import React from 'react';
import SignIn from "@/screens/auth/SignIn";

export const metadata = {
    title: process.env.NEXT_PUBLIC_APP_NAME + " : Sign In",
    description: "Generated by create next app",
};

const page = () => <SignIn/>

export default page;
