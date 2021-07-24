import React from "react";
import { Link, Redirect } from "react-router-dom";

import { getNextPath } from "../helpers";

export default function BookChapter({ match, books }) {
  const { bookId, chapterId } = match.params;
  if (!books[bookId]) return <Redirect to="/" />;

  const { title, author, chapterTitle, chapters } = books[bookId];
  if (!chapters[chapterId]) return <Redirect to="/" />;

  const currentChapter = chapters[chapterId];
  const nextPath = getNextPath(chapters.length, bookId, chapterId);

  return (
    <div className="chapter">
      <Link to="/" className="button back">
        Back
      </Link>

      <span className="title">{title} </span>
      <span className="author">{author}</span>
      <h1>{chapterTitle}</h1>

      {currentChapter.paragraphs.map((textNode, key) => (
        <p key={key}>{textNode}</p>
      ))}

      <Link to={nextPath} className="button next">
        Next
      </Link>
    </div>
  );
}
