import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function FormInputs({ blok, register, errors, allProducts }) {
    return (
        <div {...storyblokEditable(blok)} className="mb-5">
            <label className="text-gray-500 font-light mt-8 dark:text-gray-50">
                {blok.Label}
            </label>
            {blok.Type === "dropdown" ? (
                <select
                    name={blok.Name}
                    multiple 
                    required
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                    {...register(blok.Name, {
                        required: true
                    })}
                >
                    {allProducts.map((option) => (
                        <option key={option.uuid} value={option.name}>
                            {option.content.title}
                        </option>
                    ))}
                </select>
            ) : blok.Type !== "textarea" ? (
                <input
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                    type={blok.Type}
                    name={blok.Name}
                    placeholder={blok.Placeholder}
                    required
                    {...register(blok.Name, {
                        required: blok.Type === "tel" ? false : true,
                        pattern:
                            (blok.Type === "email" &&
                                /^[a-z0-9,_%+-]+@[a-z0-9,-]+\.[a-z{2,4}$]/) ||
                            (blok.Type === "tel" &&
                                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,8}$/),
                        maxLength:
                            blok.Type === "tel" &&
                            blok.Validators.find((findMax) => findMax.maxLength)
                                .maxLength,
                        minLength:
                            blok.Type === "tel" &&
                            blok.Validators.find((findMin) => findMin.minLength)
                                .minLength
                    })}
                />
            ) : (
                <textarea
                    name={blok.Name}
                    rows={5}
                    required
                    placeholder={blok.Placeholder}
                    className="bg-transparent border-b p-4 w-full focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500 block"
                    {...register(blok.Name, {
                        required: blok.Type === "tel" ? false : true,
                        pattern:
                            (blok.Type === "email" &&
                                /^[a-z0-9,_%+-]+@[a-z0-9,-]+\.[a-z{2,4}$]/) ||
                            (blok.Type === "tel" &&
                                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,8}$/),
                        maxLength:
                            blok.Type === "tel" &&
                            blok.Validators.find((findMax) => findMax.maxLength)
                                .maxLength,
                        minLength:
                            blok.Type === "tel" &&
                            blok.Validators.find((findMin) => findMin.minLength)
                                .minLength
                    })}
                />
            )}
            <div className="text-red-500">
                {blok.Validators.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok._uid}
                        errors={errors}
                        inputName={blok.Name}
                    />
                ))}
            </div>
        </div>
    );
}
