import React from "react";

const Fragment = () =>
    <React.Fragment>
        <h2>We're using React.Fragment to return more than one tag.</h2>
        <h3>WIth React.Fragment, we can add two or more tags with an enclosing tag like a div.</h3>
    </React.Fragment>

export default Fragment

//If we want to use Fragment without calling React, we just need to use destructuring
// import {Fragment} from 'react'
