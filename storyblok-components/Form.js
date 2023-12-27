import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useForm } from "react-hook-form";
export default function Form({ blok, allProducts }) {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    function submitForm(data) {
        console.log(data, blok.Endpoint);
    }
    return (
        <form
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
            {...storyblokEditable(blok)}
            onSubmit={handleSubmit(submitForm)}
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
            <input
                className="w-full flex justify-center py-2 px-4 rounded-md shadow text-sm font-medium  cursor-pointer btn btn--secondary mx-auto"
                type="submit"
            />
        </form>
    );
}
