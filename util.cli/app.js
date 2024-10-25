// import {API as mainAPI}			from './api.js';
import {API as exampleAPI}		from './api.example.js';//from './api.js';
import {initRL, includeAPIs}	from './index.js';//from '../util.cli/index.js';

const API = {};
includeAPIs([exampleAPI], API);

initRL(API);