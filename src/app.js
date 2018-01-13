const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');

import { Header, MortgageCalculator } from './components/index';

class App  extends React.Component {
  render () {
    return (
      <div>
        <Header title="Hypothekenrechner" />
        <MortgageCalculator principal={200000} years={30} rate={5} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));