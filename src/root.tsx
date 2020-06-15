import React from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import GlobalStyle from "./globalStyle";
import GlobalAppBar from "./common/components/globalHeader";
import Main from "./pages/main";
import Photography from "./pages/photography";
import Editorial from "./pages/editorial";
import More from "./pages/more";
import UploadFile from "./pages/uploadFile";
import DeleteFile from "./pages/deleteFile";
import UploadMainImage from "./pages/uploadMainImage";
import { useGetAlbumsFromS3 } from "./common/hooks/useS3";

function RootComponent() {
  const contents = useGetAlbumsFromS3();
  return (
    <HashRouter>
      <Helmet title="Eunko" />
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
          <Route path="/upload/main">
            <UploadMainImage contents={contents} />
          </Route>
          <Route path="/delete/file">
            <DeleteFile contents={contents} />
          </Route>
          <Route path="/">
            <Main images={[]} />
          </Route>
        </Switch>
      </GlobalAppBar>
    </HashRouter>
  );
}

export default RootComponent;
