import React from 'react';

import { Container } from './styles';

import brandIcon from '../../images/icon-brand-recognition.svg';
import detailedIcon from '../../images/icon-detailed-records.svg';
import fullyIcon from '../../images/icon-fully-customizable.svg';

function AdvancedStatistics() {
  return (
    <Container>
      <h1>Advanced Statistics</h1>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <section>
        <div className="c1">
          <div className="circle">
            <img src={brandIcon} alt="" />
          </div>
        </div>
        <div className="c1">
          <div className="circle">
            <img src={detailedIcon} alt="" />
          </div>
        </div>
        <div className="c1">
          <div className="circle">
            <img src={fullyIcon} alt="" />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default AdvancedStatistics;
