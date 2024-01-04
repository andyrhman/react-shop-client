import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function BackToProductButton() {
    return (
        <Link
            to="/"
            aria-label="back-to-products"
            className="border border-black text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-gray-400 rounded-sm"
        >
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 mr-2 inline-flex" />
            Back To All Products
        </Link>
    )
}

export default BackToProductButton