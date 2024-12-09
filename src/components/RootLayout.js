import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';

import MainNavigation from './MainNavigation';

const RootLayout = () => {
    return (
        <Fragment>
            <MainNavigation />
            <Outlet />
        </Fragment>
    );
};

export default RootLayout;