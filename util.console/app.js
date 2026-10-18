// import * as uC					from './index.js';
import {API as mainAPI}			from './api.js';
import {initRL, includeAPIs}	from '../util.cli/index.js';

const API = {moduleName:'Console Utils'};
includeAPIs([mainAPI], API);

initRL(API);