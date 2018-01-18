import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LogoSvg from '../../img/logo-cn.svg'
import './css/global.css'

class Logo extends Component {
    render () {
        return (
            <a href="/">
                <img src={LogoSvg} alt="Binance" />
            </a>
        )
    }
}

class OuterLink extends Component {
    render () {
        return (
            <ul className="main-nav exchange">
                <li>
                    <a href="javascript:;"><i className="iconfont icon-exchange"></i>交易中心</a>
                    <ul className="subNav">
                        <li><a href="javascript:;">标准版</a></li>
                        <li><a href="javascript:;">专业版</a></li>
                    </ul>
                </li>
            </ul>
        )
    }
}

class BnbHeader extends Component {
    render () {
        return (
            <div className="header">
                <Logo/>
                <OuterLink/>
                
            </div>
        )
    }
}