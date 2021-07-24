import { Link, Redirect } from "react-router-dom";

export default function BookDetails({ match, books }) {
  const { bookId } = match.params;

  if (!books[bookId]) return <Redirect to="/" />;

  const { author, title, cover, description } = books[bookId];

  return (
    <>
      <Link to="/" className="button back">
        Back
      </Link>
      <div className="book-detail">
        <img
          alt={`${author} - ${title}`}
          src={`${document.location.origin}/${cover}`}
        />
        <h3 className="title">{title}</h3>
        <p className="author">{author}</p>
        <p className="description">{description}</p>
        <Link to={`${match.url}/chapters/0`} className="button">
          Read
        </Link>
      </div>
    </>
  );
}
