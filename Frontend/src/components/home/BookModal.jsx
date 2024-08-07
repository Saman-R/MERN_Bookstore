import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onclose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onclose}>
            <div
                onClick={(event) => event.stopPropagation()}
                className=' py-10 px-8 w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative '>
                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-auto'
                    onClick={onclose}
                />
                <h2 className='w-fit px-5 py-1 bg-sky-300 rounded-xl'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2  text-gray-500 '> ID: {book._id}</h4>
                <div className='flex justify-start item-center gap-x-2'>
                    <PiBookOpenTextLight className='text-sky-300 text-3xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-sky-300 text-2xl' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p className='m-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius placerat sem nec molestie. Curabitur est sapien, faucibus sit amet bibendum nec, dignissim non quam. Integer viverra maximus massa, ut dignissim nibh eleifend in. Pellentesque libero nisl, cursus eu ligula lacinia, euismod mollis turpis. Aliquam fermentum mauris sit amet quam semper ultricies.</p>
            </div>
        </div>
    )
}

export default BookModal