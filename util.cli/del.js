const API = {
	commands:{
	//	=======================
	//	<<<<<<<< named >>>>>>>>
	//	=======================
		named:{
			description: 'named description',
			execute: function(arg){
				console.log('\n================');
				console.log(arg);
				console.log('----------------');
				console.log(this);
				console.log('----------------');
				console.log(bla);
				console.log(this.execute.bla);
				console.log('================\n\n\n');
			},
		},
	//	=======================
	//	<<<<<<<< arrow >>>>>>>>
	//	=======================
		arrow:{
			description: 'arrow description',
			execute:(arg) => {
				console.log('\n================');
				console.log(arg);
				console.log('----------------');
				console.log(this);
				console.log('----------------');
				console.log(bla);
				console.log(this.execute.bla);
				console.log('================\n\n\n');
			},
		},
	//	========================
	//	<<<<<<<< method >>>>>>>>
	//	========================
		method:{
			description: 'method description',
			execute(arg){
				console.log('\n================');
				console.log(arg);
				console.log('----------------');
				console.log(this);
				console.log('----------------');
				console.log(bla);
				console.log(this.execute.bla);
				console.log('================\n\n\n');
			},
		},
	//	========================
	//	<<<<<<<< method >>>>>>>>
	//	========================
		method:{
			description: 'method description',
			execute(arg){
				console.log('\n================');
				console.log(arg);
				console.log('----------------');
				console.log(this);
				console.log('----------------');
				console.log(bla);
				console.log(this.execute.bla);
				console.log('================\n\n\n');
			},
		},
	}
};


// API.commands.arrow.execute.this = API;
// API.commands.arrow.API = API;


// console.log(API.commands.arrow.execute.this);


API.commands.named.bla = "named's bla";
API.commands.arrow.bla = "arrow's bla";
API.commands.method.bla = "method's bla";

API.commands.named.execute.bla = "named's execute's bla";
API.commands.arrow.execute.bla = "arrow's execute's bla";
API.commands.method.execute.bla = "method's execute's bla";



API.commands.named.execute();
// API.commands.arrow.execute();
// API.commands.method.execute();






// const rescope = (cmdObj, parentAPI) => {
// 	cmdObj.execute = cmdObj.execute.call(parentAPI);
// 	let newCmdObj = cmdObj;
// 	let newCommandsObj = {
// 		...compiledAPI.commands,
// 		...includedAPI.commands,
// 	};

// 	compiledAPI = {
// 		...compiledAPI,
// 		...includedAPI,
// 		commands: newCommandsObj,
// 	};

// 	for(let cmdName in importedAPI.commands){
// 		cmd =
// 		let unboundExec = cmd.execute
// 		unboundExec = unboundExec.bind(compiledAPI);
// 	};

// 	return compiledAPI;
// };




export const includeAPI = (includedAPI, compiledAPI) => {
	for(let cmdName in includedAPI.commands){
		compiledAPI.commands[cmdName] = includedAPI.commands[cmdName];
		let cmdExec = compiledAPI.commands[cmdName].execute;
		cmdExec = cmdExec.bind(compiledAPI);
	};
	return compiledAPI;
};





export const mergeAPIInto = (includedAPI, compiledAPI) => {
	compiledAPI = {
		...compiledAPI,
		...includedAPI,
		commands:{
			...compiledAPI.commands,
			...includedAPI.commands,
		},
	};

	for(let cmdName in includedAPI.commands){
		compiledAPI.commands[cmdName] = includedAPI.commands[cmdName];
		let cmdExec = compiledAPI.commands[cmdName].execute;
		cmdExec = cmdExec.bind(compiledAPI);
	};
	return compiledAPI;
};







export const mergeAPIInto = (includedAPI, compiledAPI) => {
	const rescope = (commands) => {
		for(let cmdName in commands){
			let cmdExec = commands[cmdName].execute;
			cmdExec = cmdExec.bind(compiledAPI);
		};
		return commands;
	};

	compiledAPI = {
		...compiledAPI,
		...includedAPI,
		commands:{
			...rescope(compiledAPI.commands),
			...rescope(includedAPI.commands),
		},
	};

	return compiledAPI;
};



export const includeAPI = (includedAPI, compiledAPI) => {
	compiledAPI = {
		...compiledAPI,
		...includedAPI,
		commands:{
			...compiledAPI.commands,
			...includedAPI.commands,
		},
	};

	for(let cmdName in compiledAPI.commands){
		let cmd = compiledAPI.commands[cmdName];
		let cmd.execute = cmd.execute.bind(compiledAPI);
	};

	return compiledAPI;
};







const rescope = (commands, compiledAPI) => {
	for(let cmdName in commands){
		cmd = commands[cmdName];
		cmd.execute = cmd.execute.bind(compiledAPI);
	};
	return commands;
};

compiledAPI = {
	...compiledAPI,
	...includedAPI,
	commands:{
		...rescope(compiledAPI.commands, compiledAPI),
		...rescope(includedAPI.commands, compiledAPI),
	},
};