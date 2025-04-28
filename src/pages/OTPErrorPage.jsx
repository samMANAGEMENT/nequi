import React from 'react';
import HeaderWhite from '../components/header/HeaderWhite';
import ErrOtp from '../components/OTP/ErrOTP';
import Footer from '../components/footer/Footer';

export default function OTPErrorPage() {
    return (
        <div>
            <HeaderWhite />
            <ErrOtp />
            <Footer />
        </div>
    )
}