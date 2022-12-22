
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BookList from './BookList';
import Favorites from './Favorites';
import BookInfo from './BookInfo';
import { AddBook } from './add-book/components';
import { Bookshelf } from './book-shelf/components';
import { deleteBook, getFinishedList, getUnfinishedList, saveBook, setFinished } from './repository';

function App() {
  const [unfinishedList, setUnfinishedList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let unfinishedList = await getUnfinishedList()
      setUnfinishedList(unfinishedList)

      let FinishedList = await getUnfinishedList()
      setFinishedList(finishedList)
    }
    fetchData()
  }, [])

  const handleAddBook = async (book) => {
    let savedBook = await saveBook(book)
    if (savedBook.finished) {
      setFinishedList([[]])
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        Hello Bookworms 
        <AddBook />
        <Bookshelf/>
        <BookList />
        <Favorites />
        <BookInfo/>
      </header>
    </div>
  );
}

export default App;
