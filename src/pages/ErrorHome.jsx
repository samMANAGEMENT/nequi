import React from 'react';
import HeaderWhite from '../components/header/HeaderWhite';
import Footer from '../components/footer/Footer';
import ErrorLogin from '../components/home/ErrorLogin';

export default function ErrorHome() {
    return (
        <div className="">
            <HeaderWhite />
            <ErrorLogin />
            <Footer />
        </div>
    )
}