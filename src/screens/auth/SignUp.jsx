"use client"

import React, {useState} from 'react';
import GuestLayout from "@/layouts/GuestLayout";
import {Button, Input, Link, Form, Select, SelectItem, Alert} from "@heroui/react";
import PasswordInput from "@/components/PasswordInput";
import { formatOnlyNumber, formatOnlyAlphabetsAndSpace } from "@/utils/FormatContent";
import axios from "axios";

const SignUp = () => {
    const [formValues, setFormValues] = useState({ full_name :'', phone: '' });
    const [errors, setErrors] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;
        name === "full_name" && (formattedValue = formatOnlyAlphabetsAndSpace(value));
        name === "phone" && (formattedValue = formatOnlyNumber(value));
        setFormValues({...formValues, [name] : formattedValue});
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        setErrors(data.password !== data.confirm_password ? 'Password and confirm password do not match!' : '');
        try {
            const res = await axios.post("/api/signup", data, {
                headers: { "Content-Type": "application/json" },
            });
            console.log(res);
        }catch (err){
            console.log(err);
        }
    };
    return (
        <GuestLayout>
            <div className="flex flex-col gap-4 rounded-large w-full max-w-xl p-6 border border-gray-200 shadow-md">
                <div className="flex flex-col items-center">
                    <p className="text-xl font-medium">Welcome</p>
                    <p className="text-small text-default-500">Sign up to your account</p>
                </div>
                {errors && (<Alert color="danger" title={errors} />)}
                <Form className="flex flex-col gap-3" validationBehavior="native" onSubmit={handleSubmit}>
                    <Select
                        label="Select user type"
                        variant="bordered"
                        isRequired
                        errorMessage="Please select user type"
                        name="user_type"
                    >
                        <SelectItem key="candidate">Candidate</SelectItem>
                        <SelectItem key="recruiter">Recruiter</SelectItem>
                    </Select>
                    <Input
                        isRequired
                        label="Full Name"
                        name="full_name"
                        type="text"
                        variant="bordered"
                        errorMessage="Please enter your full name"
                        onChange={handleChange}
                        value={formValues.full_name}
                    />
                    <Input
                        isRequired
                        label="Email Address"
                        name="email"
                        type="email"
                        variant="bordered"
                        validate={(value) => {
                            const inputValue = value.trim();
                            if(!inputValue.trim()) return `Please enter email address`;
                            const emailRegex = /^[A-Za-z0-9._-]+@[a-z0-9-]+\.[a-z]{2,}$/i;
                            if(!emailRegex.test(inputValue)) return `Please enter a valid email address`;
                        }}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <PasswordInput type="normal" label="Password" name="password"/>
                        <PasswordInput type="confirm" label="Confirm Password" name="confirm_password" />
                    </div>
                    <Input
                        isRequired
                        label="Phone number"
                        name="phone"
                        type="text"
                        variant="bordered"
                        maxLength={10}
                        validate={(value) => {
                            const inputValue = value.trim();
                            if(!inputValue.trim()) return `Please enter phone number`;
                            const inputLength = inputValue.length;
                            if(inputLength >= 1 && inputLength < 10) return `Please enter 10 digits phone number`;
                        }}
                        onChange={handleChange}
                        value={formValues.phone}
                    />
                    <Button className="w-full mt-2" color="primary" type="submit">Sign Up</Button>
                </Form>
                <p className="text-center text-small">
                    Already have an account?&nbsp;
                    <Link href="/sign-in">Sign In</Link>
                </p>
            </div>
        </GuestLayout>
    );
};

export default SignUp;
