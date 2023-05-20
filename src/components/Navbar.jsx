import React, { useState } from 'react';
import { Link } from 'react-scroll';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Navbar = () => {
    return (
        <>
            <NavDesktop/>
            <NavMobile/>
        </>

    );
};

export default Navbar;
