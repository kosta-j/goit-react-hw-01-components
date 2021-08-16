import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
          <TransactionHistoryItem key={el.id} item={el} />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
