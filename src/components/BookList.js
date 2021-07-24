import Book from "./Book";

export default function BookList({ books = [] }) {
  return (
    <>
      {books.map((book, index) => (
        <Book
          key={index}
          id={index}
          title={book.title}
          author={book.author}
          cover={book.cover}
        />
      ))}
    </>
  );
}
