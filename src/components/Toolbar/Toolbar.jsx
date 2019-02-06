import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.scss';

const toolbar = props => (
<header className="toolbar">
    <div className="toolbar__background">
        <div className="toolbar_top-items">
            <ul>
                <li>Bem Vindo!</li>
                <li><a href="/Login">Já é Cadastrado?</a></li>
                <li><a href="/Pedidos">Meus Pedidos</a></li>
                <li><a href="/CentralAtendimento">Central de Atendimento</a></li>
            </ul>
        </div>
        <div className="separator">
            <ul>
                <li>
                    <hr />
                </li>
                <li>
                    <hr />
                </li>
            </ul>
        </div>

        <div className="toolbar__mid-items">
            <ul>
                <li><a href="/#">
                        <div className="toolbar__icon-search"></div>
                    </a>
                </li>
                <li><a href="/Logout">
                        <div className="toolbar__icon-logout"></div>
                    </a>
                </li>
                <li><a href="/Carrinho">
                        <div className="toolbar__icon-cart">
                            <span className="toolbar__icon-cart-text">07</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    </div>
    <nav className="toolbar__navigation">

        <div className="toolbar__toggle-button">

            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo-mobile"> </div>
        <div className="toolbar__mobile-icons">
            <ul>
                <li><a href="/#">
                        <div className="toolbar__icon-search"></div>
                    </a>
                </li>
                <li><a href="/Logout">
                        <div className="toolbar__icon-logout"></div>
                    </a>
                </li>
                <li><a href="/Carrinho">
                        <div className="toolbar__icon-cart">
                            <span className="toolbar__icon-cart-text">07</span>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
        <div className="toolbar__container">
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/Rosto">Rosto</a></li>
                    <li><a href="/Cabelo">Cabelo</a></li>
                    <li><a href="/CorpoBanho">Corpo e Banho</a></li>
                    <li><a href="/Barba">Barba</a></li>
                    <li><a href="/Acessorios">Acessórios</a></li>
                    <li><a href="/KitsPresentes">Kits e Presentes</a></li>
                </ul>
                <div className="toolbar__logo"> </div>
            </div>
        </div>
    </nav>
</header>
);
export default toolbar;