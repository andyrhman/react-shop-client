import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "src/redux/actions/setUserAction";
import { setProducts } from "src/redux/actions/setProductsAction";
import Layout from "./Layout";
import Navbar from './Navbar';
import axios from "axios";

const Wrapper = (props) => {
    const { setUser } = props;
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
            }
        )()

    }, [setUser])
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