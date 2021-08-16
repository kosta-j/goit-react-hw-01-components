import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticsListItem from './StatisticsListItem';
// import statisticalData from '../../statistical-data.json';

export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(el => (
          <StatisticsListItem key={el.id} stats={el} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
