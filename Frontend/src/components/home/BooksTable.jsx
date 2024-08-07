import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-100 rounded-md  hover:shadow-l'>No</th>
                    <th className='border border-slate-100 rounded-md hover:shadow-l'>Title</th>
                    <th className='border border-slate-100 rounded-md max-md:hidden hover:shadow-l'>
                        Author
                    </th>
                    <th className='border border-slate-100 rounded-md max-md:hidden hover:shadow-l'>
                        Publish Year
                    </th>
                    <th className='border border-slate-100 rounded-md hover:shadow-l'>Operations</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className='h-12'>
                        <td className='border border-gray-100 rounded-md text-center hover:shadow-xl'>
                            {index + 1}
                        </td>
                        <td className='border border-gray-100 rounded-md text-center hover:shadow-xl'>
                            {book.title}
                        </td>
                        <td className='border border-gray-100 rounded-md text-center max-md:hidden hover:shadow-xl'>
                            {book.author}
                        </td>
                        <td className='border border-gray-100 rounded-md text-center max-md:hidden hover:shadow-xl'>
                            {book.publishYear}
                        </td>
                        <td className='border border-slate-100 rounded-md text-center hover:shadow-xl'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className='text-2xl text-green-800' />
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-600' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BooksTable;