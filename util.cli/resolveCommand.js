import uC from '../util.console/index.js';

export const resolveCommand = (line, commands, prefix='') => {
	//	If there is a prefix, remove it from the input before continuing
	if(line.startsWith(prefix)){
		let [cmd, ...args] = line.trim().substring(prefix.length).split(/\s+/);

		// If cmd is blank, but there are args (i.e. if someone puts a space after the prefix), set cmd to the first arg and shift all args down one
		if(cmd === '' && args.length){
			cmd = args[0];
			args.shift();
		}

		if(cmd){
			let match = commands[
				Object.keys(commands)
				.find(key => {
					return(
						key.toLowerCase() === cmd.toLowerCase() ||
						( commands[key].aliases && commands[key].aliases.find(alias => alias.toLowerCase() === cmd.toLowerCase()) )
					)
				})
			];

			if(match)	match.execute(...args);
			else		console.error(`ERROR: '${uC.u}${cmd}${uC.xu}' is not a known command.`);
		}
	}
};

export default resolveCommand;