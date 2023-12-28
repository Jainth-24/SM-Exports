import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useForm } from "react-hook-form";
export default function Form({ blok, allProducts }) {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    return (
        <form
            action={`https://formsubmit.co/${blok.email}`}
            method="POST"
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
            {...storyblokEditable(blok)}
        >
            <h1 className="text-2xl font-bold dark:text-gray-50">
                Send us a message
            </h1>
            <div className="lg:grid lg:grid-cols-2 gap-5">
                {blok.Inputs.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok._uid}
                        register={register}
                        errors={errors}
                        allProducts={allProducts}
                    />
                ))}
            </div>
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New submission!" />
            <input
                type="hidden"
                name="_next"
                value="https://smexports-eta.vercel.app/thanks"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input
                className="w-full flex justify-center py-2 px-4 rounded-md shadow text-sm font-medium  cursor-pointer btn btn--secondary mx-auto"
                type="submit"
            />
        </form>
    );
}
