import os	from 'node:os';
import dns	from 'node:dns';

const validInterfaces = [// Heavily incomplete
	'wlan0',
	'Wi-Fi',
	'Wi-Fi 2',
	'wlp2s0',
];

const getCurrentAddress = () => {
	const nets = os.networkInterfaces();
	const results = {};

	for(const name of Object.keys(nets)){
		for(const net of nets[name]){
			// Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
			// 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
			const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
			if(net.family === familyV4Value && !net.internal){
				if(!results[name]) results[name] = [];
				results[name].push(net.address);
			}
		}
	}
	let currentInterface = Object.keys(results).find(interf => validInterfaces.includes(interf));

	return currentInterface ? results[currentInterface][0] : null;
};

const getRouterAddress = () => {
	const servers = dns.getServers();// unless custom DNS servers are set, returns router ip address
	return servers[0];
};

export const getIPByHostname = async(targetHost) => {
	let res = await dns.promises.lookup(`${targetHost}.local`, {family:4});
	if(res.address) return res.address;
};

export const hostname = os.hostname();
export const hostName = hostname;
export const hostAddress = getCurrentAddress();
export const routerAddress = getRouterAddress();

export const uLAN = {
	getIPByHostname,
	hostname,
	hostName,
	hostAddress,
	routerAddress,
};

export default uLAN;