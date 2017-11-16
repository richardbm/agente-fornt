import React, { Component } from 'react';

const Header = (props) => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="javascript:void(0);" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
                    <a href="javascript:void(0);" className="bars"></a>
                    <a className="navbar-brand" href="/">Agence</a>
                </div>
                <div className="collapse navbar-collapse" id="navbar-collapse">

                </div>
            </div>
        </nav>
    );
};

export default Header;

