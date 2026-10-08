import {__cmd} from '../util.console/index.js';


export const API = {
	commands:{
	//	============================
	//	<<<<<<<< importTest >>>>>>>>
	//	============================
		importTest:{
			description: 'Test function to see if this gets imported correctly',
			syntax:[
				`${__cmd('importTest')}`,
			],
			execute(){
				console.br();
				console.line();
				console.log('Command was imported successfully');
				console.line();
				console.br();
			}
		},
	}
};


export default API;