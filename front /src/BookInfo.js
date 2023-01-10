import React, {useEffect, useEffects, useState} from 'react';

export default function BookInfo() {
  const [posts, seePosts] = useState(null);
  const [getBookData, bookData] = useState();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books?key=${process.env.REACT_APP_KEYID}`)
      .then(res => res.json())
      .then(response => {
        bookData(response.items);
        seePosts(false);
      })
      .catch(error => console.log(error));
  })


  

  return (
    <div>
      {bookData.length}
      {bookData.item}
    </div>
  );
}