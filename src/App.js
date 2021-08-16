// import './App.css';
import user from './user.json';
import friendList from '../src/friends.json';
import statisticalData from './statistical-data.json';
import transactions from './transactions.json';

import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div>
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={statisticalData} />
      </Container>
      <Container>
        <FriendList friends={friendList} />
      </Container>
      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}

export default App;
