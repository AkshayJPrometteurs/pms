import React, {useState} from 'react';
import {Input} from "@heroui/react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const MyComponent = ({label, name, placeholder, type, onChange}) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <Input
            isRequired
            endContent={
                <button type="button" onClick={toggleVisibility}>
                    {isVisible ? (<RiEyeOffFill className="text-xl" />) : (<RiEyeFill className="text-xl" />)}
                </button>
            }
            label={label}
            name={name}
            placeholder={placeholder}
            type={isVisible ? "text" : "password"}
            variant="bordered"
            validate={(value) => {
                const inputValue = value.trim();
                if(!inputValue.trim()) return `Please enter a ${type === 'confirm' ? 'confirm' : ''} password.`;
                if(inputValue.length < 6) return "Password must be 6 characters or more.";
                if((inputValue.match(/[A-Z]/g) || []).length < 1) return "Password must include at least 1 upper case letter";
                if((inputValue.match(/[^a-z]/gi) || []).length < 1) return "Password must include at least 1 symbol.";
            }}
            onChange={onChange}
        />
    );
};

export default MyComponent;
