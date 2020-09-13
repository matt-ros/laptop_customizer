import React from 'react';
import './SummaryOption.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class SummaryOption extends React.Component {
  render() {
    return (
      <div className="summary__option">
          <div className="summary__option__label">{this.props.feature} </div>
          <div className="summary__option__value">{this.props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(this.props.selectedOption.cost)}
          </div>
        </div>
    );
  }
}

export default SummaryOption;