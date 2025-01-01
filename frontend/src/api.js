import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books';

// Get all books
export const getBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get a book by ID
export const getBookById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Add a new book (Admin)
export const addBook = async (book) => {
  const response = await axios.post(API_URL, book);
  return response.data;
};

// Delete a book (Admin)
export const deleteBook = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// Add review to a book
export const addReview = async (bookId, review) => {
  const response = await axios.put(`${API_URL}/${bookId}`, review);
  return response.data;
};
