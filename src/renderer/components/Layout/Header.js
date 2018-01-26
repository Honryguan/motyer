import React from 'react';
import { Menu, Icon, Popover } from 'antd';
import styles from './main.less';
import Menus from './Menus';
import logo from '../../assets/logo.png'

import { Link } from 'dva/router';

const SubMenu = Menu.SubMenu;

function Header ({changeTheme,darkTheme,menulist,user,cookie,loginUser, logout, tokenUrl,switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover}) {
	let handleClickMenu = e =>{
		e.key === 'logout' && logout();
		e.key === 'switch' && logout();
	}

	const menusProps = {
		menulist,
		user,
		cookie,
		darkTheme,
		location
	};
	return (
		<div className='header'>
			<div className='header-box fn-clear'>
				<div className="header-brand fn-left">
			        <a href="/" className="brand-img">
						<img className={styles.logo} src={logo} />
					</a>
			    </div>
				<div className="header-nav">
					<div className="nav-menu fn-clear">
						<div className="nav-list">
				            <a href="/" className="nav-list-a">首页</a>
				        </div>
				        <div className="nav-list">
				            <a href="#/solution" className="nav-list-a">解决方案</a>
				        </div>
				        <div className="nav-list">
				            <a href="/" className="nav-list-a">产品中心</a>
				        </div>
				        <div className="nav-list">
				            <a href="/" className="nav-list-a">新闻资讯</a>
				        </div>
				        <div className="nav-list">
				            <a href="/" className="nav-list-a">联系方式</a>
				        </div>
				        <div className="nav-list">
				            <a href="/" className="nav-list-a">关于我们</a>
				        </div>		
					</div>
				</div>
			</div>
		</div>
	);
}
export default Header;


