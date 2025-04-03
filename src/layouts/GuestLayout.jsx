import React from 'react';
import {HeroUIProvider} from "@heroui/react";

const GuestLayout = ({children}) => {
    return (
        <HeroUIProvider>
            <main>
                <section className="flex justify-center items-center h-screen w-full">
                    {children}
                </section>
            </main>
        </HeroUIProvider>
    );
};

export default GuestLayout;
