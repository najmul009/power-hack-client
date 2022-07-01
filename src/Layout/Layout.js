import React from 'react';
import Header from '../Pages/Common/Header';

const Layout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <body>
                {children}
            </body>
        </div>
    );
};

export default Layout;