import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddBook.css';

const AddBook = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        console.log(data)
        const eventData = {
            name: data.name,
            author: data.author,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://afternoon-waters-82558.herokuapp.com/addBook`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server connect', res))
    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        console.log(event.target.files[0])
        imageData.set('key', 'a68051547e5c105cf6cb5cee8b67d4bd')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url)
            });

    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" placeholder="Book Name" ref={register} />
                <input type="text" name="author" placeholder="Author Name" ref={register} />
                <input type="text" name="price" placeholder="Price" ref={register} />

                <input name="exampleRequired" type="file" onChange={handleImageUpload} />

                <input type="submit" value="save" />
            </form>
        </div>
    );
};

export default AddBook;