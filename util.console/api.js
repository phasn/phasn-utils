import uC, {__cmd} from './index.js';// import uC, {__cmd} from '../util.console/index.js';


export const API = {
	commands:{
	//	=========================
	//	<<<<<<<< methods >>>>>>>>
	//	=========================
		methods:{
			description: 'Displays each type of console logging method',
			syntax:[`${__cmd('methods')}`],
			execute(){
				console.log('\n\t Modified Console Methods:');
				console.info('console.info()');
				console.warn('console.warn()');
				console.error('console.error()');
				console.debug('console.debug()');

				console.log('\n\t New Console Methods:')
				console.alert('console.alert()');
				console.danger('console.danger()');
				console.success('console.success()');
				console.help('console.help()');

				return console.br();
			}
		},

	//	======================
	//	<<<<<<<< ansi >>>>>>>>
	//	======================
		ansi:{
			description: 'Display how each ANSI code from 0-130 is rendered in the current terminal',
			syntax:[`${__cmd('ansi')}`],
			execute(){
				for(let i=0; i<11; i++){
					let str = '';
					for(let j=0; j<10; j++){
						let n = 10 * i + j;
						if(n>130) break;
						str += `\x1b[0\;${n}m${n.toString().padStart(3)}`;
					}
					console.log(str);
					str = '';
				}
				return console.br();
			}
		},

	//	==========================
	//	<<<<<<<< keywords >>>>>>>>
	//	==========================
		keywords:{
			description: 'Lists all available formatting and color keywords',
			syntax:[`${__cmd('keywords')}`],
			execute(){
				for(let col in uC.colors){
					console.log(`${uC.r}${col.padEnd(16,' ')}${uC.colors[col]}${col.padEnd(16,' ')}\\x1b${uC.colors[col].substring(1)}${uC.r}`);
				}
				return console.br();
			}
		},
	//	=========================
	//	<<<<<<<< formats >>>>>>>>
	//	=========================
		formats:{
			description: 'Displays the effects of each formatting code',
			syntax:[`${__cmd('formats')}`],
			execute(){
				//	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				let testStr = `${uC.r}
	${uC.b}bold/bright${uC.r}
	${uC.f}faint/dim${uC.r}
	${uC.i}italicized${uC.r}
	${uC.u}underscore${uC.r}
	${uC.blnk}blink${uC.r}
	${uC.fblnk}fast blink${uC.r}
	${uC.rev}reverse${uC.r}
	${uC.hid}hidden${uC.r}<--(hidden)
	${uC.str}strikethrough${uC.r}
	${uC.du}double underscore${uC.r}\n`;
				//	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				return console.log(testStr);
			}
		},

	//	========================
	//	<<<<<<<< colors >>>>>>>>
	//	========================
		colors:{
			description: 'Misc. color test 1',
			syntax:[`${__cmd('colors')}`],
			execute(){
				//	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				let testStr = `${uC.r}
	${uC.b}${uC.red}red${uC.r}       ${uC.red}red${uC.r}       ${uC.f}${uC.red}red${uC.r}
	${uC.b}${uC.yellow}yellow${uC.r}    ${uC.yellow}yellow${uC.r}    ${uC.f}${uC.yellow}yellow${uC.r}
	${uC.b}${uC.green}green${uC.r}     ${uC.green}green${uC.r}     ${uC.f}${uC.green}green${uC.r}
	${uC.b}${uC.cyan}cyan${uC.r}      ${uC.cyan}cyan${uC.r}      ${uC.f}${uC.cyan}cyan${uC.r}
	${uC.b}${uC.blue}blue${uC.r}      ${uC.blue}blue${uC.r}      ${uC.f}${uC.blue}blue${uC.r}
	${uC.b}${uC.magenta}magenta${uC.r}   ${uC.magenta}magenta${uC.r}   ${uC.f}${uC.magenta}magenta${uC.r}
	${uC.b}${uC.black}black${uC.r}     ${uC.black}black${uC.r}     ${uC.f}${uC.black}black${uC.r}
	${uC.b}${uC.white}white${uC.r}     ${uC.white}white${uC.r}     ${uC.f}${uC.white}white${uC.r}

	${uC.b}${uC.bgred}BGred${uC.r}     ${uC.bgred}BGred${uC.r}     ${uC.f}${uC.bgred}BGred${uC.r}
	${uC.b}${uC.bgyellow}BGyellow${uC.r}  ${uC.bgyellow}BGyellow${uC.r}  ${uC.f}${uC.bgyellow}BGyellow${uC.r}
	${uC.b}${uC.bggreen}BGgreen${uC.r}   ${uC.bggreen}BGgreen${uC.r}   ${uC.f}${uC.bggreen}BGgreen${uC.r}
	${uC.b}${uC.bgcyan}BGcyan${uC.r}    ${uC.bgcyan}BGcyan${uC.r}    ${uC.f}${uC.bgcyan}BGcyan${uC.r}
	${uC.b}${uC.bgblue}BGblue${uC.r}    ${uC.bgblue}BGblue${uC.r}    ${uC.f}${uC.bgblue}BGblue${uC.r}
	${uC.b}${uC.bgmagenta}BGmagenta${uC.r} ${uC.bgmagenta}BGmagenta${uC.r} ${uC.f}${uC.bgmagenta}BGmagenta${uC.r}
	${uC.b}${uC.bgblack}BGblack${uC.r}   ${uC.bgblack}BGblack${uC.r}   ${uC.f}${uC.bgblack}BGblack${uC.r}
	${uC.b}${uC.bgwhite}BGwhite${uC.r}   ${uC.bgwhite}BGwhite${uC.r}   ${uC.f}${uC.bgwhite}BGwhite${uC.r}\n`;
				//	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				return console.log(testStr);
			}
		},

	//	=========================
	//	<<<<<<<< colors2 >>>>>>>>
	//	=========================
		colors2:{
			description: 'Misc. color test 2',
			syntax:[`${__cmd('colors2')}`],
			execute(){
				//	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				let testStr = `${uC.r}
	${uC.b}${uC.red}░${uC.r}${uC.red}░${uC.r}${uC.f}${uC.red}░${uC.r}${uC.b}${uC.bgred}░${uC.r}${uC.bgred}░${uC.r}${uC.f}${uC.bgred}░${uC.r}${uC.b}${uC.reverse}${uC.red}░${uC.r}${uC.reverse}${uC.red}░${uC.r}${uC.f}${uC.reverse}${uC.red}░${uC.r}${uC.b}${uC.reverse}${uC.bgred}░${uC.r}${uC.reverse}${uC.bgred}░${uC.r}${uC.f}${uC.reverse}${uC.bgred}░${uC.r}
	${uC.b}${uC.yellow}░${uC.r}${uC.yellow}░${uC.r}${uC.f}${uC.yellow}░${uC.r}${uC.b}${uC.bgyellow}░${uC.r}${uC.bgyellow}░${uC.r}${uC.f}${uC.bgyellow}░${uC.r}${uC.b}${uC.reverse}${uC.yellow}░${uC.r}${uC.reverse}${uC.yellow}░${uC.r}${uC.f}${uC.reverse}${uC.yellow}░${uC.r}${uC.b}${uC.reverse}${uC.bgyellow}░${uC.r}${uC.reverse}${uC.bgyellow}░${uC.r}${uC.f}${uC.reverse}${uC.bgyellow}░${uC.r}
	${uC.b}${uC.green}░${uC.r}${uC.green}░${uC.r}${uC.f}${uC.green}░${uC.r}${uC.b}${uC.bggreen}░${uC.r}${uC.bggreen}░${uC.r}${uC.f}${uC.bggreen}░${uC.r}${uC.b}${uC.reverse}${uC.green}░${uC.r}${uC.reverse}${uC.green}░${uC.r}${uC.f}${uC.reverse}${uC.green}░${uC.r}${uC.b}${uC.reverse}${uC.bggreen}░${uC.r}${uC.reverse}${uC.bggreen}░${uC.r}${uC.f}${uC.reverse}${uC.bggreen}░${uC.r}
	${uC.b}${uC.cyan}░${uC.r}${uC.cyan}░${uC.r}${uC.f}${uC.cyan}░${uC.r}${uC.b}${uC.bgcyan}░${uC.r}${uC.bgcyan}░${uC.r}${uC.f}${uC.bgcyan}░${uC.r}${uC.b}${uC.reverse}${uC.cyan}░${uC.r}${uC.reverse}${uC.cyan}░${uC.r}${uC.f}${uC.reverse}${uC.cyan}░${uC.r}${uC.b}${uC.reverse}${uC.bgcyan}░${uC.r}${uC.reverse}${uC.bgcyan}░${uC.r}${uC.f}${uC.reverse}${uC.bgcyan}░${uC.r}
	${uC.b}${uC.blue}░${uC.r}${uC.blue}░${uC.r}${uC.f}${uC.blue}░${uC.r}${uC.b}${uC.bgblue}░${uC.r}${uC.bgblue}░${uC.r}${uC.f}${uC.bgblue}░${uC.r}${uC.b}${uC.reverse}${uC.blue}░${uC.r}${uC.reverse}${uC.blue}░${uC.r}${uC.f}${uC.reverse}${uC.blue}░${uC.r}${uC.b}${uC.reverse}${uC.bgblue}░${uC.r}${uC.reverse}${uC.bgblue}░${uC.r}${uC.f}${uC.reverse}${uC.bgblue}░${uC.r}
	${uC.b}${uC.magenta}░${uC.r}${uC.magenta}░${uC.r}${uC.f}${uC.magenta}░${uC.r}${uC.b}${uC.bgmagenta}░${uC.r}${uC.bgmagenta}░${uC.r}${uC.f}${uC.bgmagenta}░${uC.r}${uC.b}${uC.reverse}${uC.magenta}░${uC.r}${uC.reverse}${uC.magenta}░${uC.r}${uC.f}${uC.reverse}${uC.magenta}░${uC.r}${uC.b}${uC.reverse}${uC.bgmagenta}░${uC.r}${uC.reverse}${uC.bgmagenta}░${uC.r}${uC.f}${uC.reverse}${uC.bgmagenta}░${uC.r}
	${uC.b}${uC.black}░${uC.r}${uC.black}░${uC.r}${uC.f}${uC.black}░${uC.r}${uC.b}${uC.bgblack}░${uC.r}${uC.bgblack}░${uC.r}${uC.f}${uC.bgblack}░${uC.r}${uC.b}${uC.reverse}${uC.black}░${uC.r}${uC.reverse}${uC.black}░${uC.r}${uC.f}${uC.reverse}${uC.black}░${uC.r}${uC.b}${uC.reverse}${uC.bgblack}░${uC.r}${uC.reverse}${uC.bgblack}░${uC.r}${uC.f}${uC.reverse}${uC.bgblack}░${uC.r}
	${uC.b}${uC.white}░${uC.r}${uC.white}░${uC.r}${uC.f}${uC.white}░${uC.r}${uC.b}${uC.bgwhite}░${uC.r}${uC.bgwhite}░${uC.r}${uC.f}${uC.bgwhite}░${uC.r}${uC.b}${uC.reverse}${uC.white}░${uC.r}${uC.reverse}${uC.white}░${uC.r}${uC.f}${uC.reverse}${uC.white}░${uC.r}${uC.b}${uC.reverse}${uC.bgwhite}░${uC.r}${uC.reverse}${uC.bgwhite}░${uC.r}${uC.f}${uC.reverse}${uC.bgwhite}░${uC.r}\n`;
				//	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				return console.log(testStr);
			}
		},
	}
};


export default API;