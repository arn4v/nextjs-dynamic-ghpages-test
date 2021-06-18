import "../styles/globals.css";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";

const ArticlePage = () => {
  const { slug } = useParams();

  return <>Slug: {slug}</>;
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      {typeof window !== "undefined" && (
        <BrowserRouter>
          <Switch>
            <Route exact path="/blog/:slug">
              <ArticlePage />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
