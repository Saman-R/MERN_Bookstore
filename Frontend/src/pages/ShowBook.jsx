import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <BackButton />
      <h1 className='text-4xl font-bold my-6 text-center'>Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit mx-auto p-6 bg-white shadow-md'>
          <div className='my-4 flex'>
            <span className='text-xl font-semibold mr-4'>ID :</span>
            <span className='text-lg'>{book._id}</span>
          </div>
          <div className='my-4 flex'>
            <span className='text-xl font-semibold mr-4'>Title :</span>
            <span className='text-lg'>{book.title}</span>
          </div>
          <div className='my-4 flex'>
            <span className='text-xl font-semibold mr-4'>Author :</span>
            <span className='text-lg'>{book.author}</span>
          </div>
          <div className='my-4 flex'>
            <span className='text-xl font-semibold mr-4'>Publish Year :</span>
            <span className='text-lg'>{book.publishYear}</span>
          </div>
          <div className='my-4 flex'>
            <span className='text-xl font-semibold mr-4'>Create Time :</span>
            <span className='text-lg'>{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className='my-4 flex'>
            <span className='text-xl font-semibold mr-4'>Last Update Time :</span>
            <span className='text-lg'>{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
