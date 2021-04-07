import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Book.css';
export default function Book(props) {
    const { imageURL, name, author, price } = props.book;
    const history = useHistory();
    const BuyNow = (name) => {
        history.push(`/book/${name}`);
    }
    return (
        <div className="card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ height: '200px', width: '200px' }} src={imageURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {author}
                    </Card.Text>
                    <p className="text-design">${price}</p>
                    <Button onClick={() => BuyNow(name)} className="buy-now" variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};
