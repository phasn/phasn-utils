// import * as uC					from './index.js';
import {API as mainAPI}			from './api.js';
import {initRL, includeAPIs}	from '../util.cli/index.js';

const API = {};
includeAPIs([mainAPI], API);

initRL(API);