import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button, ButtonGroup } from "./Button";
import Price from "./Price";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

function ProductInfo({ title, description, price }) {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a delay for demonstration purposes (replace with actual data fetching logic)
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    return (
        <div className="font-primary">
            {isLoading ? (
                <>
                    <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
                        <Skeleton className="h-10 w-[250px]" />
                    </h1>
                    <div className="font-medium text-lg w-100%">
                        <Skeleton className="h-10 w-[250px]" />
                    </div>
                    <div className="text-xl text-palette-primary font-medium py-4 px-1">
                        <Skeleton className="h-10 w-[250px]" />
                    </div>
                    <div className="mt-6 mb-16 text-center">
                        <Skeleton className="h-10 w-[250px]" />
                    </div>
                </>
            ) : (
                <>
                    <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
                        {title}
                    </h1>
                    <p className="font-medium text-lg w-100%">{description}</p>
                    <div className="text-xl text-palette-primary font-medium py-4 px-1">
                        <Price currency="Rs." num={price} numSize="text-2xl" />
                    </div>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="left">
                            <Link
                                role="button"
                                href="/contact"
                                className="btn btn--secondary py-2"
                            >
                                Buy Now
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </Link>
                        </ButtonGroup>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductInfo;
