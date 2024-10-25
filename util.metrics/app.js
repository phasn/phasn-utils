import {getMetrics}				from './index.js';
import {API as mainAPI}			from './api.js';
import {initRL, includeAPIs}	from '../util.cli/index.js';

const API = {};
includeAPIs([mainAPI], API);
API.getMetrics = getMetrics;

initRL(API);