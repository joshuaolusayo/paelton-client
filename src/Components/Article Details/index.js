import React from 'react'
import Footer from '../Reusable Components/Footer'
import ScrollToTop from '../Reusable Components/ScrollToTop'
import Details from './Details'
import Header from './Header'

const ArticleDetails = () => {
    return (
        <div className="hmpg article-details">
            <Header />
            <Details />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default ArticleDetails
