import BookList from "./BookList";

export default function BookShelf({ books }) {
  return (
    <div role="main" className="main">
      <div className="container">
        <div className="bookshelf">
          <BookList books={books} />
        </div>
      </div>
    </div>
  );
}
