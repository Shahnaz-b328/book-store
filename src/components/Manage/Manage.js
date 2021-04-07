import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Manage = () => {
  const classes = useStyles();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://afternoon-waters-82558.herokuapp.com/books')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  return (

    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book._id}>
                <TableCell component="th" scope="row">
                  {book.name}
                </TableCell>
                <TableCell align="right">{book.author}</TableCell>
                <TableCell align="right">{book.price}</TableCell>
                <TableCell align="right"><button>Delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Manage;