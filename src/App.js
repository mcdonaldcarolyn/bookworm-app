
import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import Favorites from './Favorites';
import BookInfo from './BookInfo';
import { AddBook } from './add-book/components';
import { Bookshelf } from './book-shelf/components';
import {deleteBook, }

function App() {
  const [unfinishedList, setUnfinishedList] = useState([]);
  const [finshedList, setFinishedList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let unfinishedList = await getUnfinishedList()
      setUnfinishedList(unfinishedList)

      letFinishedList = await getUnfinishedList()
      setFinishedList(finishedList)
    }
    fetchData()
  }, [])

  const handleAddBook = async (book) => {
    let savedBook = await saveBook(book)
  }
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
