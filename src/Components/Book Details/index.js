import React from 'react'
import Footer from '../Reusable Components/Footer'
import ScrollToTop from '../Reusable Components/ScrollToTop'
import Details from './Details'
import Header from './Header'

const BookDetails = () => {
    return (
        <div className="hmpg book-details">
            <Header />
            <Details />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default BookDetails
