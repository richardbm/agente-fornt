import React, { Component } from 'react';

const Loader = (props) => {
    return (
        <div className="page-loader-wrapper">
            <div className="loader">
                <div className="preloader">
                    <div className="spinner-layer pl-red">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <p>Cargando...</p>
            </div>
        </div>
    );
};

export default Loader;

