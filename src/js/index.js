// src/index.js

import Log from './log';
import Calc from './calc';

import '../scss/index.scss';
import '../css/main.css';

const calc = new Calc();
const log = new Log();

log.log(calc.add(1, 2, 3));
