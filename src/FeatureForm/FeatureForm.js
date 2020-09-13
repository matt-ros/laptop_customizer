import React from 'react';
import './FeatureForm.css';
import FeatureType from '../FeatureType/FeatureType';

class FeatureForm extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature];
      const selected = this.props.selected[feature];
      return <FeatureType key={featureHash} featureName={feature} selected={selected} options={options} updateFeature={this.props.updateFeature} />
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}

export default FeatureForm;