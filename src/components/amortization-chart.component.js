const React = require('react');
const PropTypes = require('prop-types');

export class AmortizationChart extends React.Component {

  render() {
    var items = this.props.data.map((year, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td className="currency principal">{Math.round(year.principalY).toLocaleString()}</td>
          <td className="stretch">
            <div className="flex">
              <div className="bar principal" style={{ flex: year.principalY, WebkitFlex: year.principalY }}></div>
              <div className="bar interest" style={{ flex: year.interestY, WebkitFlex: year.interestY }}></div>
            </div>
          </td>
          <td className="currency interest">{Math.round(year.interestY).toLocaleString()}</td>
          <td className="currency">{Math.round(year.balance).toLocaleString()}</td>
        </tr>
      );
    });
    let principal = 0;
    let interest = 0;
    this.props.data.map((year) => {
      principal += year.principalY;
      interest += year.interestY;
    });
    let sum = <tr>
      <td></td>
      <td className="currency">{Math.round(principal)}</td>
      <td></td>
      <td className="currency">{Math.round(interest)}</td>
      <td className="currency">{Math.round(principal + interest)}</td>
    </tr>;
    let head = <tr>
      <th>Jahr</th>
      <th className="principal">Kapital</th>
      <th className="stretch"></th>
      <th className="interest">Zinsen</th>
      <th>Restkapital</th>
    </tr>;
    return (
      <table>
        <thead>{head}</thead>
        <tbody>{items}</tbody>
        <tfoot>{sum}</tfoot>
      </table>
    );
  }
}

