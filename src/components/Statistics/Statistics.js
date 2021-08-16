import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticsListItem from './StatisticsList';
import statisticalData from '../../statistical-data.json';

export default function Statistics(props) {
  const { title } = props;

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {statisticalData.map(el => (
          <StatisticsListItem
            key={el.id}
            label={el.label}
            percentage={el.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
