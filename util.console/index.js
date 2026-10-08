export const codes = {
	//	terms should always be imperativem', not descriptive
	//	e.g.	'underline' not		'underlined'
	//			'blink'		not		'blinking'
	//			'hide'		not		'hidden'
	//	abbreviations for 'un_' should be 'x_' rather than 'u_'

	r:					'\x1b[0m',		reset:					'\x1b[0m',
		x:				'\x1b[0m',
		res:			'\x1b[0m',
	b:					'\x1b[1m',		bold:					'\x1b[1m',
											bright:				'\x1b[1m',// not a good idea to think of this code as bright because it leads to messy format interactions, but most terminals implement it as this
		'**':			'\x1b[1m',
	f:					'\x1b[2m',		faint:					'\x1b[2m',
		d:				'\x1b[2m',			dim:				'\x1b[2m',
	i:					'\x1b[3m',		italic:					'\x1b[3m',
		'*':			'\x1b[3m',
	u:					'\x1b[4m',		underline:				'\x1b[4m',
		'_':			'\x1b[4m',
	blnk:				'\x1b[5m',		blink:					'\x1b[5m',
		sblnk:			'\x1b[5m',			slowblink:			'\x1b[5m',
	fblnk:				'\x1b[6m',		fastblink:				'\x1b[6m',
		rblnk:			'\x1b[6m',			rapidblink:			'\x1b[6m',
	rev:				'\x1b[7m',		reverse:				'\x1b[7m',
	hid:				'\x1b[8m',		hide:					'\x1b[8m',
	str:				'\x1b[9m',		strikethrough:			'\x1b[9m',
		stt:			'\x1b[9m',
		stk:			'\x1b[9m',			strike:				'\x1b[9m',
		co:				'\x1b[9m',			crossout:			'\x1b[9m',
											cross:				'\x1b[9m',
	f0:					'\x1b[10m',		defaultfont:			'\x1b[10m',// reverts 11-20
		fx:				'\x1b[10m',			revertfont:			'\x1b[10m',
		xfx:			'\x1b[10m',
	f1:					'\x1b[11m',		font1:					'\x1b[11m',
	f2:					'\x1b[12m',		font2:					'\x1b[12m',
	f3:					'\x1b[13m',		font3:					'\x1b[13m',
	f4:					'\x1b[14m',		font4:					'\x1b[14m',
	f5:					'\x1b[15m',		font5:					'\x1b[15m',
	f6:					'\x1b[16m',		font6:					'\x1b[16m',
	f7:					'\x1b[17m',		font7:					'\x1b[17m',
	f8:					'\x1b[18m',		font8:					'\x1b[18m',
	f9:					'\x1b[19m',		font9:					'\x1b[19m',
	f10:				'\x1b[20m',		fraktur:				'\x1b[20m',
		ff:				'\x1b[20m',			fontfraktur:		'\x1b[20m',
											gothic:				'\x1b[20m',
		fg:				'\x1b[20m',			fontgothic:			'\x1b[20m',
	du:					'\x1b[21m',		doubleunderline:		'\x1b[21m',// * some terminals incorrectly use this to revert 1
		uu:				'\x1b[21m',
	nrm:				'\x1b[22m',		normal:					'\x1b[22m',// reverts 1 and 2
		xb:				'\x1b[22m',			unbold:				'\x1b[22m',
		xf:				'\x1b[22m',			unfaint:			'\x1b[22m',
			xd:			'\x1b[22m',				undim:			'\x1b[22m',
		reg:			'\x1b[22m',			regular:			'\x1b[22m',
	xi:					'\x1b[23m',		unitalic:				'\x1b[23m',// reverts 3
	xu:					'\x1b[24m',		ununderline:			'\x1b[24m',// reverts 4 and 21 (* see note by 21)
	xblnk:				'\x1b[25m',		unblink:				'\x1b[25m',// reverts 5 and 6
//	?:					'\x1b[26m',		unused:					'\x1b[26m',
	xrev:				'\x1b[27m',		unreverse:				'\x1b[27m',// reverts 7
	rvl:				'\x1b[28m',		reveal:					'\x1b[28m',// reverts 8
		xhid:			'\x1b[28m',			unhide:				'\x1b[28m',
	xstr:				'\x1b[29m',		unstrikethrough:		'\x1b[29m',// reverts 9
	xstt:				'\x1b[29m',
		xstk:			'\x1b[29m',			unstrike:			'\x1b[29m',
		xco:			'\x1b[29m',			uncrossout:			'\x1b[29m',
											uncross:			'\x1b[29m',
	blk:				'\x1b[30m',		black:					'\x1b[30m',
										red:					'\x1b[31m',
	grn:				'\x1b[32m',		green:					'\x1b[32m',
	ylw:				'\x1b[33m',		yellow: 				'\x1b[33m',
	blu:				'\x1b[34m',		blue:					'\x1b[34m',
	mgt:				'\x1b[35m',		magenta:				'\x1b[35m',
		ppl:			'\x1b[35m',			purple:				'\x1b[35m',
	cyn:				'\x1b[36m',		cyan:					'\x1b[36m',
	wht:				'\x1b[37m',		white:					'\x1b[37m',
//	#					'\x1b[38m',		customcolor				'\x1b[38m',
	for:				'\x1b[39m',		foreground:				'\x1b[39m',// reverts 30-38 & 90-97
	bgblk:				'\x1b[40m',		bgblack:				'\x1b[40m',
	bgred:				'\x1b[41m',		bgred:					'\x1b[41m',
	bggrn:				'\x1b[42m',		bggreen:				'\x1b[42m',
	bgylw:				'\x1b[43m',		bgyellow:				'\x1b[43m',
	bgblu:				'\x1b[44m',		bgblue:					'\x1b[44m',
	bgmgt:				'\x1b[45m',		bgmagenta:				'\x1b[45m',
		bgppl:			'\x1b[45m',			bgpurple:			'\x1b[45m',
	bgcyn:				'\x1b[46m',		bgcyan:					'\x1b[46m',
	bgwht:				'\x1b[47m',		bgwhite:				'\x1b[47m',
//	bg#					'\x1b[48m',		custombgcolor			'\x1b[48m',

//	u#					'\x1b[58m',		customunderlinecolor	'\x1b[58m',


	lblk:				'\x1b[90m',		lightblack:				'\x1b[90m',
	lred:				'\x1b[91m',		lightred:				'\x1b[91m',
	lgrn:				'\x1b[92m',		lightgreen:				'\x1b[92m',
	lylw:				'\x1b[93m',		lightyellow: 			'\x1b[93m',
	lblu:				'\x1b[94m',		lightblue:				'\x1b[94m',
	lmgt:				'\x1b[95m',		lightmagenta:			'\x1b[95m',
		lppl:			'\x1b[95m',			lightpurple:		'\x1b[95m',
	lcyn:				'\x1b[96m',		lightcyan:				'\x1b[96m',
	lwht:				'\x1b[97m',		lightwhite:				'\x1b[97m',

	bglblk:				'\x1b[100m',	bglightblack:			'\x1b[100m',
	bglred:				'\x1b[101m',	bglightred:				'\x1b[101m',
	bglgrn:				'\x1b[102m',	bglightgreen:			'\x1b[102m',
	bglylw:				'\x1b[103m',	bglightyellow:			'\x1b[103m',
	bglblu:				'\x1b[104m',	bglightblue:			'\x1b[104m',
	bglmgt:				'\x1b[105m',	bglightmagenta:			'\x1b[105m',
		bglppl:			'\x1b[105m',		bglightpurple:		'\x1b[105m',
	bglcyn:				'\x1b[106m',	bglightcyan:			'\x1b[106m',
	bglwht:				'\x1b[107m',	bglightwhite:			'\x1b[107m',

		bblk:			'\x1b[90m',			brightblack:		'\x1b[90m',
		bred:			'\x1b[91m',			brightred:			'\x1b[91m',
		bgrn:			'\x1b[92m',			brightgreen:		'\x1b[92m',
		bylw:			'\x1b[93m',			brightyellow: 		'\x1b[93m',
		bblu:			'\x1b[94m',			brightblue:			'\x1b[94m',
		bmgt:			'\x1b[95m',			brightmagenta:		'\x1b[95m',
			bppl:		'\x1b[95m',				brightpurple:	'\x1b[95m',
		bcyn:			'\x1b[96m',			brightcyan:			'\x1b[96m',
		bwht:			'\x1b[97m',			brightwhite:		'\x1b[97m',

		bgbblk:			'\x1b[100m',		bgbrightblack:		'\x1b[100m',
		bgbred:			'\x1b[101m',		bgbrightred:		'\x1b[101m',
		bgbgrn:			'\x1b[102m',		bgbrightgreen:		'\x1b[102m',
		bgbylw:			'\x1b[103m',		bgbrightyellow:		'\x1b[103m',
		bgbblu:			'\x1b[104m',		bgbrightblue:		'\x1b[104m',
		bgbmgt:			'\x1b[105m',		bgbrightmagenta:	'\x1b[105m',
			bgbppl:		'\x1b[105m',			bgbrightpurple:	'\x1b[105m',
		bgbcyn:			'\x1b[106m',		bgbrightcyan:		'\x1b[106m',
		bgbwht:			'\x1b[107m',		bgbrightwhite:		'\x1b[107m',



// Temp for compatibility with older things because I haven't added the toLowerCase thing in this version
			BGblk:				'\x1b[40m',		BGblack:				'\x1b[40m',
			BGred:				'\x1b[41m',		BGred:					'\x1b[41m',
			BGgrn:				'\x1b[42m',		BGgreen:				'\x1b[42m',
			BGylw:				'\x1b[43m',		BGyellow:				'\x1b[43m',
			BGblu:				'\x1b[44m',		BGblue:					'\x1b[44m',
			BGmgt:				'\x1b[45m',		BGmagenta:				'\x1b[45m',
				BGppl:			'\x1b[45m',			BGpurple:			'\x1b[45m',
			BGcyn:				'\x1b[46m',		BGcyan:					'\x1b[46m',
			BGwht:				'\x1b[47m',		BGwhite:				'\x1b[47m',
				BGbblk:			'\x1b[100m',		BGbrightblack:		'\x1b[100m',
				BGbred:			'\x1b[101m',		BGbrightred:		'\x1b[101m',
				BGbgrn:			'\x1b[102m',		BGbrightgreen:		'\x1b[102m',
				BGbylw:			'\x1b[103m',		BGbrightyellow:		'\x1b[103m',
				BGbblu:			'\x1b[104m',		BGbrightblue:		'\x1b[104m',
				BGbmgt:			'\x1b[105m',		BGbrightmagenta:	'\x1b[105m',
					BGbppl:		'\x1b[105m',			BGbrightpurple:	'\x1b[105m',
				BGbcyn:			'\x1b[106m',		BGbrightcyan:		'\x1b[106m',
				BGbwht:			'\x1b[107m',		BGbrightwhite:		'\x1b[107m',
};

const r = codes.r;// Don't manually export this. It gets exported in '...codes'

export const br = () => console.log(`${r}\n`);
export const hr = (a,b) => {
	let color = codes.cyan;
	let char = '-';
	if(a){
		if(codes[a] && typeof codes[a]==='string') color = codes[a];
		if(typeof a==='string' && a.length<=2) char = a;
	}
	if(b){
		if(codes[b] && typeof codes[b]==='string') color = codes[b];
		if(typeof b==='string' && b.length<=2) char = b;
	}
	let str = `${r}${color}--------------------------------${r}`.replaceAll('-', char);

	console.log(str);
};

export const __desc = (str) => `${r}  ${codes.brightmagenta}${str}${r}`;
export const __sntx = (str) => `${r}  ${codes.blue}>${codes.yellow} ${str}${r}`;
export const __cmd = (str) => `${r}${codes.brightgreen}${str}${r}`;
export const __arg = (str) => `${r}${codes.brightyellow}<${r}${codes.yellow}${str}${r}${codes.brightyellow}>${r}`;

// These shouldn't need to be exported
console.br = console.break = console.newline = console.n = console.nl = console.enter = br;
console.hr = console.line = console.break = console.bar = console.divider = console.div = hr;

// Default Methods: White text on dark background
console.info = (str) => console.log(`${r}${codes.f}${codes.bglightwhite}${codes.blue}${codes.rev}  `, str, ` ${r}`);//
console.warn = (str) => console.log(`${r}${codes.f}${codes.bglightwhite}${codes.yellow}${codes.rev}  `, str, ` ${r}`);//
console.error = (str) => console.log(`${r}${codes.bglightwhite}${codes.red}${codes.rev}  `, str, ` ${r}`);//
console.debug = (str) => console.log(`${r}${codes.f}${codes.bglightwhite}${codes.magenta}${codes.rev}  `, str, ` ${r}`);//

// Custom Methods: Light text on no background
console.alert = (str) => console.log(`${r}${codes.b}${codes.lightyellow}  `, str, ` ${r}`);//
console.danger = (str) => console.log(`${r}${codes.b}${codes.lightred}  `, str, ` ${r}`);//
console.success = (str) => console.log(`${r}${codes.b}${codes.lightgreen}  `, str, ` ${r}`);//
console.help = (str) => console.log(`${r}${codes.b}${codes.lightmagenta}  `, str, ` ${r}`);//

// Custom Methods: Black text on light background
// console.alert = (str) => console.log(`${r}${codes.black}${codes.bglightyellow}  `, str, ` ${r}`);//
// console.danger = (str) => console.log(`${r}${codes.black}${codes.bglightred}  `, str, ` ${r}`);//
// console.success = (str) => console.log(`${r}${codes.black}${codes.bglightgreen}  `, str, ` ${r}`);//
// console.help = (str) => console.log(`${r}${codes.black}${codes.bglightmagenta}  `, str, ` ${r}`);//

// let errorfg = '255, 0, 0'
// let errorbg = '252, 235, 235'
// let warnfg = '92, 60, 0'
// let warnbg = '254, 243, 220'

console.warning = console.alert;
	// No this isn't a typo. The Bootstrap name is 'warning'.
	// It should reflect the format of the custom method, not the default method.

export default{
	codes,
	...codes,
	br,
	hr,
	__desc,
	__sntx,
	__cmd,
	__arg,
};