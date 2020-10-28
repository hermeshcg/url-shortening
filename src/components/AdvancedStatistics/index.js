import React from 'react';

import { Container } from './styles';

import brandIcon from '../../images/icon-brand-recognition.svg';
import detailedIcon from '../../images/icon-detailed-records.svg';
import fullyIcon from '../../images/icon-fully-customizable.svg';

function AdvancedStatistics() {
  const stats = getStats();

  return (
    <Container>
      <h1>Advanced Statistics</h1>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <section>
        {stats.map((stat) => (
          <div className="window">
            <div className="window-icon-container ">
              <img src={stat.img} alt="" />
            </div>
            <h3>{stat.title}</h3>
            <p className="window-text">{stat.description}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
function getStats() {
  return [
    {
      title: 'Brand Recognition',
      img: brandIcon,
      description:
        'Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instil confidence in your content.',
    },
    {
      title: 'Detailed Records',
      img: detailedIcon,
      description:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
      title: 'Fully Customizable',
      img: fullyIcon,
      description:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
  ];
}

export default AdvancedStatistics;
