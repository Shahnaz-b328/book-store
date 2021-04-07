import React, { useEffect, useState } from 'react';
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

const Order = () => {
  const classes = useStyles();
  const [orderDetails, setOrderDetails] = useState([]);
  useEffect(() => {
    fetch('https://afternoon-waters-82558.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrderDetails(data))
  }, [])
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="right">Book Name</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderDetails.map((order) => (
              <TableRow key={order._id}>
                <TableCell component="th" scope="row">
                  {order.email}
                </TableCell>
                <TableCell align="right">{order.name}</TableCell>
                <TableCell align="right">{order.author}</TableCell>
                <TableCell align="right">{order.price}</TableCell>
                <TableCell align="right">{order.orderTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Order;