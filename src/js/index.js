// // src/index.js

// import Log from './log';
// import Calc from './calc';

// import '../scss/index.scss';
// import '../css/main.css';
// import '../index.html';

// const calc = new Calc();
// const log = new Log();

// log.log(calc.add(1, 2, 3));

//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/index.scss';
import '../css/main.css';

const App = () => (
  <p>Проверка перезагрузки. Проверка работоспоссобности React проиложения</p>
);

ReactDOM.render(<App />, document.getElementById('root'));
