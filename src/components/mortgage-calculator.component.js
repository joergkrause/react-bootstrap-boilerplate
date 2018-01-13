const React = require('react');
const PropTypes = require('prop-types');

import { AmortizationChart } from './index';

export class MortgageCalculator extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      principal: this.props.principal,
      years: this.props.years,
      rate: this.props.rate
    };
  }

  principalChange = (event) => {
    this.setState({ principal: event.target.value });
  }

  yearsChange = (event) =>  {
    this.setState({ years: event.target.value });
  }

  rateChange = (event) =>  {
    this.setState({ rate: event.target.value });
  }

  calculatePayment(principal, years, rate) {
    var monthlyRate = rate / 100 / 12;
    var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    var balance = principal;
    var amortization = [];
    for (var y = 0; y < years; y++) {
      var interestY = 0;  //Interest payment for year y
      var principalY = 0; //Principal payment for year y
      for (var m = 0; m < 12; m++) {
        var interestM = balance * monthlyRate;       //Interest payment for month m
        var principalM = monthlyPayment - interestM; //Principal payment for month m
        interestY = interestY + interestM;
        principalY = principalY + principalM;
        balance = balance - principalM;
      }
      amortization.push({ principalY: principalY, interestY: interestY, balance: balance });
    }
    return { monthlyPayment: monthlyPayment, amortization: amortization };
  }

  render() {
    var payment = this.calculatePayment(this.state.principal, this.state.years, this.state.rate);
    var monthlyPayment = payment.monthlyPayment;
    var amortization = payment.amortization;
    return (
      <div className="content">
        <div className="form">
          <div>
            <label>Kaufpreis:</label>
            <input type="text" value={this.state.principal} onChange={this.principalChange} />
          </div>
          <div>
            <label>Jahre:</label>
            <input type="text" value={this.state.years} onChange={this.yearsChange} />
          </div>
          <div>
            <label htmlFor="rate">Zinssatz:</label>
            <input type="text" value={this.state.rate} onChange={this.rateChange} />
          </div>
        </div>
        <h2>Monatsrate: <span className="currency">{Number(monthlyPayment.toFixed(2)).toLocaleString()}</span></h2>
        <AmortizationChart data={amortization} />
      </div>
    );
  }
}

MortgageCalculator.propTypes = {
  principal: PropTypes.number,
  years: PropTypes.number,
  rate: PropTypes.number
}
