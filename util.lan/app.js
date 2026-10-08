import {uLAN}					from './index.js';
import {API as mainAPI}			from './api.js';
import {initRL, includeAPIs}	from '../util.cli/index.js';

const API = {};
includeAPIs([mainAPI], API);

API.uLAN = uLAN;

initRL(API);