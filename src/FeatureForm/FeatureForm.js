import React from 'react';
import './FeatureForm.css';
import FeatureType from '../FeatureType/FeatureType';
import FEATURES from '../FEATURES';

class FeatureForm extends React.Component {
  render() {
    const featuresList = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = FEATURES[feature];
      const selected = this.props.selected[feature];
      return <FeatureType
        key={featureHash}
        featureName={feature}
        selected={selected}
        options={options}
        updateFeature={this.props.updateFeature}
      />
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {featuresList}
      </form>
    )
  }
}

export default FeatureForm;