import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import SearchInput from './Forms/SearchInput';
import axios from 'axios';

const Navbar = ({ user }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const router = useNavigate();

    useEffect(() => {
        if (searchTerm) {
            axios.get(`products?search=${searchTerm}`)
                .then(res => {
                    // Limit the results to 5
                    const limitedProducts = res.data.slice(0, 3);
                    setProducts(limitedProducts);
                })
                .catch(err => {
                    console.error(err);
                });
        } else {
            setProducts([]);
        }
    }, [searchTerm]);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            router(`/cari?search=${searchTerm}`);
        }
    }
    
    return (
        <>
            <div className="navbar bg-base-100">
                <div className='navbar-start'>
                    <div className='lg:hidden'>
                        <button 
                        className='btn btn-ghost'
                        onClick={() => setShowSearch(!showSearch)}
                        >
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>
                    <Link to={"/"} className="btn btn-ghost normal-case text-xl">Shopyfy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <SearchInput
                        searchTerm={searchTerm}
                        handleSearch={handleSearch}
                        onChangeSearch={e => setSearchTerm(e.target.value)}
                        products={products}
                    />
                </div>
                <div className='navbar-end'>
                    {user ? (
                        <>
                            <UserDropdown info={user?.fullName} />
                        </>
                    ) : (
                        <>
                            <div className="dropdown dropdown-end lg:flex mr-4">
                                <Link to={'/login'} className="btn btn-sm btn-success">
                                    <ArrowLeftOnRectangleIcon strokeWidth={2} className="h-6 w-6" />
                                    Login
                                </Link>
                            </div>
                            <div className="dropdown dropdown-end lg:flex">
                                <Link to={'/register'} className="btn btn-sm btn-neutral">
                                    <UserPlusIcon strokeWidth={2} className="h-6 w-6" />
                                    Register
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='lg:hidden'>
                {showSearch ? (
                    <SearchInput
                        searchTerm={searchTerm}
                        handleSearch={handleSearch}
                        onChangeSearch={e => setSearchTerm(e.target.value)}
                        products={products}
                    />
                ) : null}
            </div>
        </>
    )
}

export default connect(
    (state) => {
        return {
            user: state.user.user
        }
    }
)(Navbar);