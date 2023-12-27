import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function BackToProductButton() {
  return (
      <Link href="/products" passHref legacyBehavior>
          <a
              aria-label="back-to-products"
              className="btn btn--primary mx-auto"
          >
              <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="w-4 mr-2 inline-flex"
              />
              Back To All Products
          </a>
      </Link>
  );
}

export default BackToProductButton
