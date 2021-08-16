import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistoryItem({ item }) {
  const { type, amount, currency } = item;

  return (
    <tr>
      <td className={s.typecell}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  item: PropTypes.object,
};
