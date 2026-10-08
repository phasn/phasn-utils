import process		from 'node:process';
import os			from 'node:os';
import fs			from 'node:fs';
import {execSync}	from 'node:child_process';
import uC			from '../util.console/index.js';

const roundTo = (value, decPlace) => Math.round(value * (10 ** decPlace)) / (10 ** decPlace);
const getShellOutput = (command) => execSync(command).toString('utf8');



const getCpuUsage = () => {
	let minuteLoad = (os.loadavg()[0] * 100);// / os.cpus().length;
	return roundTo(minuteLoad, 2);
};



let cpuTempFilePath			= os.platform()==='linux'	?	'/sys/class/thermal/thermal_zone0/temp'
							: os.platform()==='win32'	?	null
							: os.platform()==='darwin'	?	null
							: null;

let cpuTempUseMetricUnits	= false;

const getCpuTemperature = () => {
	if(cpuTempFilePath===null) return 0;

	let raw = fs.readFileSync(cpuTempFilePath);

	let celsius = raw / 1000;
	let fahrenheit = (celsius * (9/5)) + 32;

	return cpuTempUseMetricUnits===true ? roundTo(celsius, 2) : roundTo(fahrenheit, 2);
};

export const changeCpuTempLookup = (opts={}) => {
	if(opts.filePath){
		if(fs.existsSync(opts.filePath)){
			cpuTempFilePath = opts.filePath;
			console.success(`CPU temperature will now be retrieved from ${opts.filePath}`);
		}else{
			console.error(`ERROR: File "${opts.filePath}" does not exists or is inaccessable`);
		}
	}

	if(opts.useMetricUnits===true){
		cpuTempUseMetricUnits = true;
		console.success('CPU temperature will now be returned in Celsius');
	}

	if(opts.useMetricUnits===false){
		cpuTempUseMetricUnits = false;
		console.success('CPU temperature will now be returned in Fahrenheit');
	}
};



const getMemoryUsage = () => {
	let free = os.freemem();
	let total = os.totalmem();
	let used = total - free;

	let percent = (used / total) * 100;

	return roundTo(percent, 2);
};



const getDiskUsage = () => {
	const cmd = `df -h | awk '$NF=="/"{printf "%d", $5}'`;
	return parseInt( getShellOutput(cmd) );
};



const getUptime = () => {
	let time = process.uptime();

	if(time <= 60) return `${Math.floor(time)} sec`;
	time = time / 60;

	if(time <= 60) return `${Math.floor(time)} min`;
	time = time / 60;

	if(time <= 24) return `${roundTo(time, 1)} hrs`;
	time = time / 24;

	return `${roundTo(time, 1)} days`;
};



export const getMetrics = () => {
	return{
		//hostname:		os.hostname(),
		cpu:			getCpuUsage(),
		memory:			getMemoryUsage(),
		disk:			getDiskUsage(),
		cpuTemperature:	getCpuTemperature(),
		cpuTempUseMetricUnits,
		uptime:			getUptime(),
	};
};

export default getMetrics;