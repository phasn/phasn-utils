import uC, {__cmd}	from '../util.console/index.js';


export const API = {
	commands:{
	//	=============================
	//	<<<<<<<< getHostName >>>>>>>>
	//	=============================
		getHostName:{
			description: 'Returns the host name of the current device',
			syntax:[`${__cmd('getHostName')}`],
			aliases:['hostName',],
			execute(){
				console.log(this.uLAN.hostName);
				return this.uLAN.hostName;
			}
		},

	//	================================
	//	<<<<<<<< getHostAddress >>>>>>>>
	//	================================
		getHostAddress:{
			description: 'Returns the IP address of the current device',
			syntax:[`${__cmd('getHostAddress')}`],
			aliases:[
				'getHostIP',
				'hostAddress',
				'hostIP',
			],
			execute(){
				console.log(this.uLAN.hostAddress);
				return this.uLAN.hostAddress;
			}
		},

	//	==================================
	//	<<<<<<<< getRouterAddress >>>>>>>>
	//	==================================
		getRouterAddress:{
			description: 'Returns the IP address of the router',
			syntax:[`${__cmd('getRouterAddress')}`],
			aliases:[
				'getRouterIP',
				'routerAddress',
				'routerIP',
			],
			execute(){
				console.log(this.uLAN.routerAddress);
				return this.uLAN.routerAddress;
			}
		},

	//	==================================
	//	<<<<<<<< getServerAddress >>>>>>>>
	//	==================================
		getServerAddress:{
			description: 'Returns the IP address of the server if defined in the env variables',
			syntax:[`${__cmd('getServerAddress')}`],
			aliases:[
				'getServerIP',
				'serverAddress',
				'serverIP',
			],
			execute(){
				console.log(this.uLAN.serverAddress);
				return this.uLAN.serverAddress;
			}
		},
	}
};


export default API;