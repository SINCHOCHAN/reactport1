import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import Footer from './src/components/Footer';


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render([<App key="1" />, <Footer key="2" />], document.getElementById("root"));
