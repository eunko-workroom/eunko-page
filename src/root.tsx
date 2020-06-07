import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory, History } from "history";
import GlobalStyle from "./globalStyle";
import GlobalAppBar from "./common/components/globalHeader";
import Main from "./pages/main";
import Photography from "./pages/photography";
import Editorial from "./pages/editorial";
import More from "./pages/more";

import useGetAlbumsFromS3 from "./common/hooks/useGetAlbumsFromS3";

function RootComponent() {
  const history: History = createBrowserHistory();

  // TODO: CORS ERROR 해결후 주석제거
  // const contents: Common.TabContent = useGetAlbumsFromS3();

  const contents: Common.TabContent = {
    Photography: [
      {
        category: "category",
        id: 0,
        menuTitle: "SubMenu",
        images: [
          {
            type: "image",
            id: 0,
            src: "string",
            title: "Photography Image 1",
            subTitle: "string",
            menuTitle: "sub Menu 1",
            date: "string",
            size: "string",
            feature: "string",
          },
          {
            type: "image",
            id: 1,
            src: "string",
            title: "Photography Image 2",
            subTitle: "string",
            menuTitle: "sub Menu 2",
            date: "string",
            size: "string",
            feature: "string",
          },
          {
            type: "image",
            id: 2,
            src: "string",
            title: "Photography Image 3",
            subTitle: "string",
            menuTitle: "sub Menu 3",
            date: "string",
            size: "string",
            feature: "string",
          },
        ],
      },

      {
        category: "category",
        id: 1,
        menuTitle: "SubMenu2",
        images: [],
      },
      {
        category: "category",
        id: 2,
        menuTitle: "SubMenu3",
        images: [],
      },
      {
        category: "category",
        id: 3,
        menuTitle: "SubMenu4",
        images: [],
      },
      {
        category: "category",
        id: 4,
        menuTitle: "SubMenu5",
        images: [],
      },
    ],
    Editorial: [],
    More: [],
  };

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
          <Route path="/">
            <Main images={[]} />
          </Route>
        </Switch>
      </GlobalAppBar>
    </Router>
  );
}

export default RootComponent;
