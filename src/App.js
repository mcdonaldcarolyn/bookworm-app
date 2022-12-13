
import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import Favorites from './Favorites';
import BookInfo from './BookInfo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello Bookworms 
        <BookList />
        <Favorites />
        <BookInfo/>
      </header>
    </div>
  );
}

export default App;
