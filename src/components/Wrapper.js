import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "src/redux/actions/setUserAction";
import { setProducts } from "src/redux/actions/setProductsAction";
import Layout from "./Layout";
import Navbar from './Navbar';
import axios from "axios";

const Wrapper = (props) => {
    const { setUser, setProducts } = props;
    const perPage = 10;
    useEffect(() => {
        (
            async () => {
                try {
                    const { data: userData } = await axios.get('user');
                    setUser(userData);
                } catch (error) {
                    if (error.response && [401, 403, 404].includes(error.response.status)) {
                        console.log(error)
                    }
                }
                try {
                    // ? https://www.phind.com/search?cache=g1op1bxyan4knygpnirea0ou
                    const { data: productsData } = await axios.get('products');
                    const lastPage = Math.ceil(productsData.length / perPage);
                    setProducts(productsData.slice(0, perPage), lastPage);
                } catch (error) {
                    if (error.response && [401, 403, 404].includes(error.response.status)) {
                        console.log(error)
                    }
                }
            }
        )()

    }, [setUser, setProducts])
    return (
        <Layout>
            <Navbar />
            {props.children}
        </Layout>
    )
}

const mapStateToProps = (state) => {
    // console.log(state.user); // * Always console log first for showing the response data
    return {
        user: state.user.user,
        products: state.products.products,
        lastPage: state.products.lastPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(setUser(user)),
        setProducts: (products, lastPage) => dispatch(setProducts(products, lastPage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);