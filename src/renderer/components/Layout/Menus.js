import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

class Menus extends Component{
	constructor(props){
		super(props);
		this.state = {
			openKeys: [],
		};
	}
	onOpenChange = (openKeys) => {
		let rootSubmenuKeys=this._getSubmenuKeys();
	    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
	    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
	      this.setState({ openKeys });
	    } else {
	      this.setState({
	        openKeys: latestOpenKey ? [latestOpenKey] : [],
	      });
	    }
	}

	_getSubmenuKeys(){
	    let rootSubmenuKeys=[];
	    const MList = this.props.menulist;
	    for(let i = 0;i<MList.length;i++){
	        rootSubmenuKeys.push(MList[i].id);
	    }
	    return rootSubmenuKeys;
	 }
	 
	componentWillMount(){
	}

	componentDidMount(){
    }

    toPms = (pmsurl) =>{
    	window.location.href=pmsurl;
  //   	console.info(pmsurl);
  //   	let jsonpurl="";
  //   	let rePath=pmsurl.split("//")[1];
  //   	let domain=rePath.split("/")[0];
  //   	//角色管理
  //   	if(pmsurl.indexOf("role") > 0) jsonpurl='http://'+ domain + '/alog-pms-web/pms/roleRest/listTree?appCode=alog-oss-web';
  //   	this._getJsonp(jsonpurl,pmsurl);
		// }

		/*_getJsonp(jsonpurl,pmsurl){//jsonp的调用
			fetchJsonp(jsonpurl,{
		    timeout: 3000,
		    jsonpCallback: 'callback',
		    jsonpCallbackFunction: 'pmstest'//回调函数名
		  	}).then((response) => {
	        	response.json();
	        	return response.json();
	        }).then(
	        	(data) => {
	          if(data.code=='3'){//后台访问认证中心不成功继续回调
	          	this._getJsonp(data.url,pmsurl);
	          }
	          if(data.code=='0'){//后台访问认证中心成功，单点登录成功，跳转页面
	          	if(data.msg){
	          		fetchJsonp(data.msg,{
					    timeout: 3000,
					    jsonpCallback: 'callback',
					    jsonpCallbackFunction: 'pmstest'
					  }).then((response) => {
			        	response.json(); 
			        	return response.json();
			        }).then((data)=>{
			        	window.location.href=pmsurl; //跳转
			        })
	          	}else{
	          		 window.location.href=pmsurl;
	          	}
	                    
	          }
	    	});*/
		}

   render(){

    	const {siderFold, darkTheme, Location, isNavbar } = this.props;
    	const menu=this.props.menulist;
    	const topMenus = menu.map(item => item.id);
    	const theToPms = this.toPms;
		return (
			<Menu
			mode='horizontal'
				
				theme={darkTheme ? 'dark' : 'light'}
				openKeys={this.state.openKeys}
        		onOpenChange={this.onOpenChange}
        	>
					<Menu.Item key='switch'>
						<a onClick={() => theToPms('/')}>首页</a>
					</Menu.Item>
					<Menu.Item key='logout'>
						<a onClick={() => theToPms('#/orders')}>解决方案</a>
					</Menu.Item>
					<Menu.Item key='1'>
						<a onClick={() => theToPms('#/orders')}>产品中心</a>
					</Menu.Item>
					<Menu.Item key='2'>
						<a onClick={() => theToPms('#/orders')}>新闻资讯</a>
					</Menu.Item>
					<Menu.Item key='3'>
						<a onClick={() => theToPms('#/orders')}>联系方式</a>
					</Menu.Item>
					<Menu.Item key='4'>
						<a onClick={() => theToPms('#/orders')}>关于我们</a>
					</Menu.Item>

			</Menu>
		);
    }
}

export default Menus;



