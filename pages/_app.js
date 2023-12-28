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

storyblokInit({
    accessToken: process.env.SB_ACCESS_TOKEN,
    use: [apiPlugin],
    bridge: true,
    components,
    apiOptions: {
        region: "eu"
    }
});

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
