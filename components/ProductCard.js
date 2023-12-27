import Image from "next/image";
import Link from "next/link";
import Price from "./Price";

function ProductCard({ product }) {
    const handle = product.full_slug;
    const title = product.content.title;
    const short_description = product.content.short_description;
    const price = product.content.price;

    const imageNode = product?.content?.image?.[0];

    console.log({ handle });

    return (
        <Link href={`/${handle}`} passHref legacyBehavior>
            <a className="h-120 w-80 rounded-lg shadow-lg mx-auto border border-palette-lighter transform duration-500 ease-in-out hover:scale-105 ">
                <div className="h-52 border-b-2 border-palette-lighter relative">
                    <Image
                        src={imageNode.filename}
                        alt={""}
                        layout="fill"
                        className="rounded-t-md"
                    />
                </div>
                <div className="h-80 relative">
                    <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                        {title}
                    </div>
                    <div className="text-lg text-gray-600 p-4 font-primary font-light">
                        {short_description}
                    </div>
                    <div
                        className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
                    >
                        <Price currency="Rs." num={price} numSize="text-lg" />
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default ProductCard;
