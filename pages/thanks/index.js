// pages/thanks.js
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const ThanksPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
                <p className="text-lg text-gray-600">
                    Your message has been received. We appreciate your effort.
                </p>
                <Link
                    role="button"
                    href="/"
                    className="btn btn--secondary ml-4"
                >
                    Home
                    <Icon icon="material-symbols:arrow-forward-rounded" />
                </Link>
            </div>
        </div>
    );
};

export default ThanksPage;
