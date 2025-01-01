import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById, addReview } from '../api';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [review, setReview] = useState({
    user: '',
    rating: 1,
    comment: ''
  });

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getBookById(id);
      setBook(bookData);
    };
    fetchBook();
  }, [id]);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const updatedBook = await addReview(id, review);
    setBook(updatedBook);
    setReview({ user: '', rating: 1, comment: '' });
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>

      <h3>Reviews</h3>
      <ul>
        {book.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.user}:</strong> {review.rating} stars
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>

      <h3>Submit a Review</h3>
      <form onSubmit={handleReviewSubmit}>
        <input
          type="text"
          name="user"
          value={review.user}
          placeholder="Your name"
          onChange={handleReviewChange}
        />
        <input
          type="number"
          name="rating"
          value={review.rating}
          min="1"
          max="5"
          onChange={handleReviewChange}
        />
        <textarea
          name="comment"
          value={review.comment}
          placeholder="Your review"
          onChange={handleReviewChange}
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default BookDetail;
