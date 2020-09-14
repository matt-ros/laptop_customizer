import React from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';
import './Summary.css';

class Summary extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];
      return <SummaryOption
        key={featureHash}
        feature={feature}
        selectedOption={selectedOption}
      />
    });

    return (
      <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <SummaryTotal selected={this.props.selected} />
          </section>
    )
  }
}

export default Summary;