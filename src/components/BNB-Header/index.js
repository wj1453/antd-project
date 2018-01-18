import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LogoSvg from '../../img/logo-cn.svg'
import '../../css/global.css'

class Logo extends Component {
    render () {
        return (
            <a href="/" className="logo">
                <img src={LogoSvg} alt="Binance" />
            </a>
        )
    }
}

class OuterLink extends Component {
    render () {
        return (
            <div>
            <ul className="main-nav exchange">
                <li>
                    <a href="javascript:;"><i className="iconfont icon-exchange"></i>交易中心</a>
                    <ul className="subNav">
                        <li><a href="javascript:;">标准版</a></li>
                        <li><a href="javascript:;">专业版</a></li>
                    </ul>
                </li>
            </ul>

            <ul className="main-nav exchange">
                <li>
                    <a target="_blank"  href="https://labs.binance.com"><i className="iconfont icon-lab"></i>Labs</a>
                </li>
            </ul>
        
            <ul className="main-nav exchange">
                <li>
                    <a href="https://launchpad.binance.com/"  target="_blank"><i className="iconfont icon-launchPad"></i>LaunchPad</a>
                </li>
            </ul>
            </div>
        )
    }
}

class Nav extends Component {
    render () {
        return (
            <ul className="main-nav">
					<li>
						<a href="javascript:;">资产管理</a>
						<ul className="subNav">
							<li><a href="">充值提现</a></li>
							<li><a href="">历史记录</a></li>
						</ul>
					</li>
					<li>
						<a href="javascript:;">订单管理</a>
						<ul className="subNav">
							<li><a href="">当前委托</a></li>
							<li><a href="">历史委托</a></li>
							<li><a href="">历史成交</a></li>							
						</ul>
					</li>
					<li><a ng-href="/Careers.html" target="_blank" className="yellow">加入我们</a></li>
					<li><a href="" target="_blank">帮助中心</a></li>
					<li><a href="" target="_blank">公告中心</a></li>
				</ul>
        )
    }
}

class LoginRegiser extends Component {
    render () {
        return (
            <div className="login-register f-fr">
				<a href="">登录</a>&nbsp;&nbsp;
                <span>|</span>&nbsp;&nbsp;
				<a href="">注册</a>
			</div>
        )
    }
}

class BnbHeader extends Component {
    render () {
        return (
            <div className="header">
                <Logo/>
                <OuterLink/>
                <LoginRegiser/>
                <Nav/>
                
                
            </div>
        )
    }
}

export default BnbHeader;