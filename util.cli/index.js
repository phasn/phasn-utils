import readline			from 'node:readline';
import process			from 'node:process';
import fs				from 'node:fs';
import path				from 'node:path';
import uC				from '../util.console/index.js';
import {API}			from './api.js';
import {resolveCommand}	from './resolveCommand.js';

const tabSize = 4;



const tab = () => ''.padStart(tabSize, ' ');

const getPackageJSON = () => {
	let cwd = process.cwd();
	let filePath = path.join(cwd, 'package.json');
	if(fs.existsSync(filePath)){
		let packageJSON = JSON.parse(fs.readFileSync(filePath, 'utf8'));
		if(packageJSON.config){
			if(packageJSON.config.cli_name)		packageJSON.cli_name = packageJSON.config.cli_name;
			if(packageJSON.config.cli_prefix)	packageJSON.cli_prefix = packageJSON.config.cli_prefix;
		}
		return packageJSON;
	}
	return {};
};

const getContexts = () => {
	let packageJSON = getPackageJSON();

	let moduleName =	process.env.CLI_NAME	|| process.env.npm_package_config_cli_name		|| process.env.npm_package_name	|| packageJSON.cli_name		|| packageJSON.name	|| 'Name not found';
	let prefix =		process.env.CLI_PREFIX	|| process.env.npm_package_config_cli_prefix									|| packageJSON.cli_prefix						|| '/';// || undefined;
	if(prefix==='help') throw new Error(`ERROR: API prefixes cannot be ${uC.u}'help'${uC.xu}`);

	return {moduleName, prefix};
};



export const initRL = (ImportedAPI) => {
	console.log(uC.r);
	if(ImportedAPI.commands.help || ImportedAPI.commands.clear || ImportedAPI.commands['-h'] || ImportedAPI.commands['--help']) throw new Error(`ERROR: Test API commands cannot be named ${uC.u}'help'${uC.xu} or ${uC.u}'clear'${uC.xu} or share their aliases`);

	let {moduleName, prefix} = getContexts();

	API.tab = tab;
	API.moduleName = moduleName;
	API.commands = {
		...API.commands,
		...ImportedAPI.commands,
	};


	const rl = readline.createInterface({input: process.stdin, output: process.stdout, terminal: true, tabSize});
	rl.setPrompt(`${uC.r}${uC.lgrn}${moduleName}${uC.wht}:${uC.blu}~${uC.r}${uC.for}$ `);

	rl.on('line', (line) => {
		//	If there is a prefix, but the user does not use it (possibly because they don't know it), this will return a fallback message
		if(prefix && line.startsWith('help'))	console.info(`Prefix lines with '${prefix}' to execute a command`);
		resolveCommand(line, API.commands, prefix);
		rl.prompt();
	})
	.on('close', () => {
		rl.prompt();
		console.log(`Closing CLI...${uC.r}`);
		if(ImportedAPI.overrideProcessExit != false) process.exit(0);
	});

	rl.prompt();

	return rl;
};



export const includeAPIs = (APIsToInclude, compiledAPI) => {
	if(!Array.isArray(APIsToInclude)) APIsToInclude = [APIsToInclude];

	Object.assign(compiledAPI, ...APIsToInclude);
	for(let API of APIsToInclude){
		if(API.commands!==undefined) Object.assign(compiledAPI.commands, API.commands);
	}

	for(let cmdName in compiledAPI.commands){
		let cmd = compiledAPI.commands[cmdName];
		cmd.execute = cmd.execute.bind(compiledAPI);
	};
};


export default initRL;