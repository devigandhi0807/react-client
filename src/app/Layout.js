import React from "react";
import Header  from "./layouts/Header";
import Footer from "./layouts/Footer";
import Menu from "./layouts/Menu";
import Main from './layouts/Main';

const Layout = ({pTitle,brcrumsName,children}) => {
  return (
    <div className="wrapper">

<Header />
<Menu />
  <Main content={children} pageTitle={pTitle} breadcrumsName={brcrumsName} />
<Footer />

    </div>
  );
};
export default Layout;
