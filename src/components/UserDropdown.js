import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/solid';

const UserDropdown = ({ info }) => {
    const logout = async () => {
        await axios.post('user/logout', {});
        window.location.reload();
    }
    const [totalCart, setTotalCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        (
            async () => {
                try {
                    const { data } = await axios.get('cart-total');
                    setTotalCart(data.totalItems);
                    setTotalPrice(data.totalPrice);
                } catch (error) {
                    if (error.response && error.response.status === 500) {
                        console.log(error);
                    }
                    if (error.response && error.response.status === 400) {
                        console.log(error);
                    }
                    if (error.response && error.response.status === 401) {
                        console.log(error);
                    }
                }
            }
        )()
    }, [])
    return (
        <>
            <div className="dropdown dropdown-end">
                {totalCart === 0 ? (
                    <>
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <Link to={"/cart"}>
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                            </Link>
                        </label>
                    </>
                ) : (
                    <>
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{totalCart}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{totalCart} Items</span>
                                <span className="text-info">Subtotal: Rp{new Intl.NumberFormat('id-ID').format(totalPrice)}</span>
                                <div className="card-actions">
                                    <Link to={"/cart"} className="btn btn-primary btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="dropdown dropdown-end">
                <button tabIndex={0} className="btn btn-ghost">
                    <UserIcon strokeWidth={2} className="h-6 w-6" />
                    <div className="lg:dropdown lg:dropdown-end hidden">
                        <div>{info}</div>
                    </div>
                </button>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/address">My Address</Link></li>
                    <li><div onClick={logout}>Logout</div></li>
                </ul>
            </div>
        </>
    )
}

export default UserDropdown