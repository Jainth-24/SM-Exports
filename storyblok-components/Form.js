import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useForm } from "react-hook-form";
export default function Form({ blok, allProducts }) {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();


     const onSubmit = async (data) => {
         // You can perform any additional actions before submitting the form if needed
         console.log("Form data submitted:", data);

         // Call your form submission logic here
         try {
             const response = await fetch(
                 `https://formsubmit.co/${blok.email}`,
                 {
                     method: "POST",
                     headers: {
                         "Content-Type": "application/json"
                     },
                     body: JSON.stringify(data)
                 }
             );

             // Handle the form submission response if needed
             console.log("Form submission response:", response);

         } catch (error) {
             console.error("Error submitting form:", error);
             // Handle errors if needed
         }
     };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500 lg:mx-24"
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
                className="w-full py-3 text-xl rounded-md shadow font-medium cursor-pointer
               bg-secondary-500  hover:bg-secondary-700 text-white focus:outline-none focus:shadow-outline-yellow active:bg-yellow-700"
                type="submit"
            />
        </form>
    );
}
