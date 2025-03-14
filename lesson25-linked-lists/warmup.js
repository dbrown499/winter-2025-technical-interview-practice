// given an array of book objects return an array made up of the book titles
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    yearPublished: 1960,
    pages: 281,
    isbn: "978-0061120084",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    yearPublished: 1949,
    pages: 328,
    isbn: "978-0451524935",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    yearPublished: 1813,
    pages: 279,
    isbn: "978-1503290563",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    yearPublished: 1925,
    pages: 180,
    isbn: "978-0743273565",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    yearPublished: 1851,
    pages: 635,
    isbn: "978-1503280786",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    yearPublished: 1951,
    pages: 277,
    isbn: "978-0316769488",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    yearPublished: 1937,
    pages: 310,
    isbn: "978-0547928227",
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    yearPublished: 1869,
    pages: 1225,
    isbn: "978-0199232765",
  },
  {
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic",
    yearPublished: -800, // Approximate year
    pages: 541,
    isbn: "978-0140268867",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    yearPublished: 1988,
    pages: 208,
    isbn: "978-0062315007",
  },
];


// Given an array of books, return an array with books that are fiction.

const bookTitles = books.map(book => book.title);
console.log(bookTitles);
