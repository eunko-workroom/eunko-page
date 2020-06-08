import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory, History } from "history";
import GlobalStyle from "./globalStyle";
import GlobalAppBar from "./common/components/globalHeader";
import Main from "./pages/main";
import Photography from "./pages/photography";
import Editorial from "./pages/editorial";
import More from "./pages/more";
import UploadFile from "./pages/uploadFile";
import { useGetAlbumsFromS3 } from "./common/hooks/useS3";

function RootComponent() {
  const history: History = createBrowserHistory();

  const contents = useGetAlbumsFromS3();

  return (
    <Router history={history}>
      <GlobalStyle />
      <GlobalAppBar>
        <Switch>
          <Route path="/photography">
            <Photography menu={contents.Photography} />
          </Route>
          <Route path="/editorial">
            <Editorial menu={contents.Editorial} />
          </Route>
          <Route path="/more">
            <More menu={contents.More} />
          </Route>
          <Route path="/upload/file">
            <UploadFile contents={contents} />
          </Route>
          <Route path="/">
            <Main images={[]} />
          </Route>
        </Switch>
      </GlobalAppBar>
    </Router>
  );
}

export default RootComponent;
