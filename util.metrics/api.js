import uC, {__cmd}	from '../util.console/index.js';


export const API = {
	commands:{
	//	============================
	//	<<<<<<<< getMetrics >>>>>>>>
	//	============================
		getMetrics:{
			description: 'Returns the current system metrics',
			syntax:[`${__cmd('getMetrics')}`],
			aliases:[
				'readMetrics',
				'get',
				'read',
				'metrics',
			],
			execute(){
				if(!this.getMetrics)	return this.Terminal?.error('ERROR: Metrics utility was not loaded properly') || console.error('ERROR: Metrics utility was not loaded properly');
				let dat = this.getMetrics();
				let report = `${uC.r}
	${uC.cyn}CPU Usage:       ${uC.lmgt}${dat.cpu} ${uC.lylw}%${uC.r}
	${uC.cyn}CPU Temperature: ${uC.lmgt}${dat.cpuTemperature} ${uC.lylw}°${dat.cpuTempUseMetricUnits===true ? 'C' : 'F'}${uC.r}
	${uC.cyn}Memory Usage:    ${uC.lmgt}${dat.memory} ${uC.lylw}%${uC.r}
	${uC.cyn}Disk Usage:      ${uC.lmgt}${dat.disk} ${uC.lylw}%${uC.r}
	${uC.cyn}Uptime:          ${uC.lmgt}${dat.uptime.replace(' ', ` ${uC.lylw}`)}${uC.r}
`;
				console.log(report);
				return dat;
			}
		},
	}
};


export default API;