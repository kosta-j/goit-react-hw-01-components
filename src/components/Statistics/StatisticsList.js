import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function StatisticsList(props) {
  const { id, label, percentage } = props;
  return (
    <li className={s.item} key={id}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsList.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
