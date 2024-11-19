import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <h1>nav</h1>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    );
};

export default Root;