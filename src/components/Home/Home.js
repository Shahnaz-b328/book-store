import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Home.css';
const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-waters-82558.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (


        <div>
            <div style={{ textAlign: 'center' }}>
                {
                    books.length === 0 && <CircularProgress />
                }
            </div>
            <div className="card-design mt-5">
                {
                    books.map(book => <Book book={book} key={book._id}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;