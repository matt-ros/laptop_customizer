import React from 'react';
import './FeatureItem.css';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureItem extends React.Component {
  render() {
    return (
      <div className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.featureName)}
          checked={this.props.item.name === this.props.selected.name}
          onChange={e => this.props.updateFeature(this.props.featureName, this.props.item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}

export default FeatureItem;