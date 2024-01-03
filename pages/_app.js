// Import necessary libraries and styles
import "@styles/globals.scss";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "storyblok-components/Page";
import Form from "storyblok-components/Form";
import FormInputs from "storyblok-components/FormInputs";
import Email from "storyblok-components/validators/Email";
import Required from "storyblok-components/validators/Required";
import MaxLength from "storyblok-components/validators/MaximumLength";
import MinLength from "storyblok-components/validators/MinimumLength";
import Numeric from "storyblok-components/validators/Numeric";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import React, { useEffect } from "react";

const components = {
    "page": Page,
    "Form": Form,
    "Form Inputs": FormInputs,
    "Email": Email,
    "Required": Required,
    "Maximum Length": MaxLength,
    "Minimum Length": MinLength,
    "Numeric": Numeric
};

const App = ({ Component, pageProps }) => {
    // Initialize AOS inside the component using useEffect
    useEffect(() => {
        AOS.init({
            // You can customize AOS options here
            duration: 800,
            easing: "ease-in-out"
        });
    }, []);

    return <Component {...pageProps} />;
};

// Initialize Storyblok
storyblokInit({
    accessToken: process.env.SB_ACCESS_TOKEN,
    use: [apiPlugin],
    bridge: true,
    components,
    apiOptions: {
        region: "eu"
    }
});

export default App;
