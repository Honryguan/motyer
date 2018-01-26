import React, { PropTypes } from 'react';
import { connect } from 'dva';
import Login from './Login';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Sider from '../components/Layout/Sider';

import styles from '../components/Layout/main.less';
import { Spin,Icon } from 'antd';
import classnames from 'classnames';
import '../components/Layout/common.less';

function App({children, location, dispatch, app}) {
	const {menulist,errMessages,login, loading,tokenUrl,loginButtonLoading, loginUser, siderFold, darkTheme, isNavbar, menuPopoverVisible} = app;

	const headerProps = {
		menulist,	
		siderFold,
		darkTheme,
		changeTheme () {
			dispatch({type: 'app/changeTheme'});
		},
		tokenUrl,
		loginUser,
		siderFold,
		location,
		isNavbar,
		menuPopoverVisible,
		switchMenuPopover () {
			dispatch({type: 'app/switchMenuPopover'});
		},
		logout () {
			dispatch({type: 'app/logout'});
		},
		switchSider () {
			dispatch({type: 'app/switchSider'});
		}
	};
 
	const menusProps = {
		siderFold: false,
		darkTheme: false,
		isNavbar,
		handleClickNavMenu(){
			dispatch({type: 'app/switchMenuPopover'});
		},
		location
	};

	const tabProps={
		menulist,
		children
	}

	const pathName=location.pathname;

	function switchSider () {
			dispatch({type: 'app/switchSider'});
		}

	return (
		<div>
          	<Header {...headerProps} />
          	<div className='ui-container'>           	
	            	{children}
          	</div>
          	<Footer/>
	    </div>
	);
}

App.propTypes = {
	children: PropTypes.element.isRequired,
	location: PropTypes.object,
	dispatch: PropTypes.func,
	loading: PropTypes.object,
	loginButtonLoading: PropTypes.bool,
	login: PropTypes.bool,
	user: PropTypes.object,
	siderFold: PropTypes.bool,
	darkTheme: PropTypes.bool
};

export default connect(({app}) => ({app}))(App);
