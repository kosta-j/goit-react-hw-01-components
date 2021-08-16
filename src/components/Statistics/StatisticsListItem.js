import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function StatisticsListItem(stats) {
  const { label, percentage } = stats;
  return (
    <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
