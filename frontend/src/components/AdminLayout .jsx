import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'


const AdminLayout = ({ children }) => {
  return (
    <div className= 'Layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AdminLayout;
