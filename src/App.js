import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { endpoint } from "./api/endpoint";
import { useFetch } from "./store/customHooks";

import Header from "./components/Header";
import BookShelf from "./components/BookShelf";

const BookDetails = lazy(() => import("./components/BookDetails"));
const BookChapter = lazy(() => import("./components/BookChapter"));

export default function App() {
  const [books, loading] = useFetch(endpoint);

  if (loading) return <p>loading...</p>;
  if (!books.length) return <Redirect to="/" />;

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route
            path="/books/:bookId/chapters/:chapterId"
            component={(props) => <BookChapter books={books} {...props} />}
          ></Route>
          <Route
            path="/books/:bookId"
            component={(props) => <BookDetails books={books} {...props} />}
          ></Route>
          <Route
            path="/"
            component={(props) => <BookShelf books={books} {...props} />}
          ></Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
