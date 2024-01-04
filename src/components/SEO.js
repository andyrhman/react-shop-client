import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = ({ title }) => {

    const description = process.env.REACT_APP_SITE_DESCRIPTION
    const keywords = process.env.REACT_APP_SITE_KEYWORDS
    const siteURL = process.env.REACT_APP_SITE_URL
    const imagePreview = `${siteURL}/icons8-cart-96.png`

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />

                {/* Open Graph */}
                <meta property="og:url" content={siteURL} key="ogurl" />
                <meta property="og:image" content={imagePreview} key="ogimage" />
                <meta property="og:site_name" content={siteURL} key="ogsitename" />
                <meta property="og:title" content={title} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />
                <title>{title}</title>

                <link
                    href="/icons/icons8-cart-sapphire-16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    purpose="any maskable"
                />
                <link
                    href="/icons/icons8-cart-sapphire-32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    purpose="any maskable"
                />
            </Helmet>
        </HelmetProvider>
    )
}

export default SEO;