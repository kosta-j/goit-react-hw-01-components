// import './App.css';
import user from './user.json';
import friendList from '../src/friends.json';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';

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
        <Statistics title="Upload stats" />
      </Container>
      <Container>
        <FriendList friends={friendList} />
      </Container>
    </div>
  );
}

export default App;
