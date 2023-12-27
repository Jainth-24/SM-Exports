import { Icon } from "@iconify/react";
import { Button, ButtonGroup } from "./Button";
import Price from "./Price"
import Link from "next/link";

function ProductInfo({ title, description, price }) {
  return (
      <div className="font-primary">
          <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
              {title}
          </h1>
          <p className="font-medium text-lg w-100%">{description}</p>
          <div className="text-xl text-palette-primary font-medium py-4 px-1">
              <Price currency="$" num={price} numSize="text-2xl" />
          </div>
          <div className="mt-6 mb-16 text-center">
              <ButtonGroup alignment="left">
                  
                  <Link
                      role="button"
                      href="/contact"
                      className="btn btn--secondary py-4"
                  >
                      Buy Now
                      <Icon icon="material-symbols:arrow-forward-rounded" />
                  </Link>
              </ButtonGroup>
          </div>
      </div>
  );
}

export default ProductInfo
