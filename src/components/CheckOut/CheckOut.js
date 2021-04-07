import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const checkOutStyle = {
        textAlign: 'center',
        margin: '20px 20px',
        color: 'navy',
        fontSize: '20px',
        backgroundColor: 'lightsalmon',
        height: '300px'
    }
    const { name } = useParams();
    const [logInUser, setLogInUser] = useContext(UserContext);
    const [checkout, setCheckout] = useState([]);
    const { price, author } = checkout;
    const [selectedDate, setSelectedDate] = useState({ orderTime: new Date() });
    useEffect(() => {
        fetch(`https://afternoon-waters-82558.herokuapp.com/books/${name}`)
            .then(res => res.json())
            .then(data => setCheckout(data))
    }, [name])

    const orderConfirm = () => {
        const newOrder = { ...logInUser, ...checkout, ...selectedDate }
        fetch('https://afternoon-waters-82558.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order placed successfully')
                }

            })
    }
    return (

        <div style={checkOutStyle}>
            <p>{name}</p>
            <p>{author}</p>
            <p>${price}</p>
            <button onClick={orderConfirm} style={{ backgroundColor: 'midnightblue', color: 'white', border: 'none' }}>Check Out</button>
        </div>

    );
};

export default CheckOut;