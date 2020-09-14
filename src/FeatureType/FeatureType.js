import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import './FeatureType.css';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class FeatureType extends React.Component {
  render() {
    const items = this.props.options.map(item => {
      const itemHash = slugify(JSON.stringify(item))
      return <FeatureItem
        key={itemHash}
        itemHash={itemHash}
        featureName={this.props.featureName}
        selected={this.props.selected}
        item={item}
        updateFeature={this.props.updateFeature}
      />
    });

    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{this.props.featureName}</h3>
        </legend>
        {items}
      </fieldset>
    );
  }
}

export default FeatureType;