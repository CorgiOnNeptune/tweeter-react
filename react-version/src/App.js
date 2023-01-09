import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';

const user = {
  firstName: 'Amy',
  lastName: 'Mansell',
  avatar: './assets/profile-hex.png'
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile {...user} />
      <main class="container">
        <TweetForm />
        <TweetList />
      </main>
    </div>
  );
}

export default App;
