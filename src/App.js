
import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import Favorites from './Favorites';
import BookInfo from './BookInfo';
import { AddBook } from './add-book/components';
import { Book } from './book/components';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello Bookworms 
        <AddBook />
        <Book/>
        <BookList />
        <Favorites />
        <BookInfo/>
      </header>
    </div>
  );
}

export default App;
