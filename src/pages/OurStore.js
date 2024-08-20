import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import {Helmet} from "react-helmet";

const OurStore = () => {
    return (
        <>  
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
            </Helmet>
            <BreadCrumb title="our store" />
        </>
    )
};

export default OurStore;