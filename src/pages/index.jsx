import React from 'react';
import Layout from 'src/components/Layout';
import Footer from 'src/components/Footer';
import Card from 'src/components/Cards/Card';
import Wrapper from 'src/components/Wrapper';
import StoreHeading from 'src/components/StoreHeading';
import SEO from 'src/components/SEO';
import ButtonForPaginate from 'src/components/Cards/ButtonForPaginate';

const HomePage = () => {
  const pageTitle = `Home | ${process.env.REACT_APP_SITE_TITLE}`
  return (
    <Layout>
      <SEO title={pageTitle} />
      <Wrapper>
        <StoreHeading />
        <Card />
        {/* <ButtonForPaginate /> */}
        <Footer />
      </Wrapper>
    </Layout>
  )
}

export default HomePage;