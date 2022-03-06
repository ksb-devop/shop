

import React from 'react';
import Header from './Header';
import Footer from './Footer.tsx' 

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
 
    <Footer />
  </>
);

export default Layout;