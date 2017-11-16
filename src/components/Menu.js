import React, { Component } from 'react';

const Menu = (props) => {
    return (
        <section>

            <aside id="leftsidebar" className="sidebar">

                <div className="menu">
                    <ul className="list">
                        <li>
                            <a href="">
                                <i className="material-icons">home</i>
                                <span>Agence</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="material-icons">playlist_add_check</i>
                                <span>Proyectos</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="material-icons">chrome_reader_mode</i>
                                <span>Administrativos</span>
                            </a>
                        </li>

                        <li className="active">
                            <a href="">
                                <i className="material-icons">add_shopping_cart</i>
                                <span>Comercial</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="material-icons">layers</i>
                                <span>Financiero</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="material-icons">person</i>
                                <span>Usuario</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="material-icons">clear</i>
                                <span>Salir</span>
                            </a>
                        </li>
                    </ul>
                </div>


                <div className="legal">
                    <div className="copyright">
                        <a href="javascript:void(0);">SALIR</a>
                    </div>
                </div>

            </aside>

        </section>
    );
};

export default Menu;

