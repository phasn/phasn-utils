import {fileURLToPath}	from 'node:url';
import process			from 'node:process';
import uC				from '../util.console/index.js';

const __filename = fileURLToPath(import.meta.url);
const debug = (process.env.NODE_ENV==='development') ? true : false;



export const safeInit = (initScript, label, ...args) => {
	if(!label) throw new Error('ERROR: safeInit() requires a name/ID/label to be passed as the second parameter');

	setup();
	label = label.toLowerCase();

	if(!global.safeInits[label]){
		global.safeInits[label] = true;

		if(debug) console.log(`Initializing ${label} from ${__filename.replace(process.cwd(),'root:')}`);
		return initScript(...args);
	}
};

export const addExitScript = (script, ...args) => {
	setup();

	global.exitScripts.unshift({
		execute: script,
		args
	});
};

export const addEndScript = (script, ...args) => {
	setup();

	global.exitScripts.push({
		execute: script,
		args
	});
};

// const pigpioModule = (pigpio) => {
// 	if(!pigpio) throw new Error(`${uC.red}You must pass the pigpio import object into safeInit.pigpioModule()${uC.r}`);

// 	if(!global.pigpioInitialized){
// 		global.pigpioInitialized = true;
// 		if(debug) console.log(`Initializing pigpio C library from ${__filename.replace(process.cwd(),'root:')}`);
// 		return pigpio.initialize();
// 	}
// };

const setup = () => {
	if(!global.safeInits)		createSafeInitObj();
	if(!global.exitScripts)		createExitScriptList();
	if(!process._events.SIGINT)	createTerminationListener();
};

const createSafeInitObj = () => {
	global.safeInits = [];
	if(debug) console.log(`Initializing safeInits array from ${__filename.replace(process.cwd(),'root:')}`);
};

const createExitScriptList = () => {
	global.exitScripts = [];
	if(debug) console.log(`Initializing exitScripts array from ${__filename.replace(process.cwd(),'root:')}`);
};

const createTerminationListener = () => {
	process.on('SIGINT', () => {
		if(global.exitScripts.length){
			for(let script of global.exitScripts){
				if(debug) console.log(script.toString());
				script.execute(...script.args);
			}
		}

		console.log('\nTerminating from util.safeinit...');
		process.exit();
	});

	if(debug) console.log(`Initializing process termination listener from ${__filename.replace(process.cwd(),'root:')}`);
};



export default{
	safeInit,
	addExitScript,
	addEndScript,
};