import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory, History } from "history";
import GlobalStyle from "./globalStyle";
import GlobalAppBar from "./common/components/globalHeader";
import PageTemplate from "./common/components/pageTemplate";
import MainContents from "./pages/main";
import styled from "styled-components";

// TODO 컴포넌트 분리 필요
// ASIS: 여기서 필요없는 데이터들을 다 선언함
// TOBE: 컴포넌트를 분리시켜서 현재 탭의 데이터만 선언 하도록 함
function RootComponent() {
  const history: History = createBrowserHistory();

  // TODO: s3에서 받아올 타입
  const contents: Common.TabContent = {
    Photography: [],
    Editorial: [],
    More: [],
  };
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<
    number | undefined
  >(undefined);
  const handleNextImageClick = React.useCallback(() => {
    if (selectedImageIndex) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  }, [selectedImageIndex]);
  const handlePrevImageClick = React.useCallback(() => {
    if (selectedImageIndex) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  }, [selectedImageIndex]);
  const handleBackButtonClick = React.useCallback(() => {
    setSelectedImageIndex(undefined);
  }, []);
  const photographySelectedImage = React.useMemo(
    () =>
      selectedImageIndex !== undefined
        ? [
            contents.Photography.reduce(
              (result, current) => result.concat(current),
              []
            )[selectedImageIndex],
          ]
        : [],
    [contents.Photography, selectedImageIndex]
  );
  const editorialSelectedImage = React.useMemo(
    () =>
      selectedImageIndex !== undefined
        ? [
            contents.Editorial.reduce(
              (result, current) => result.concat(current),
              []
            )[selectedImageIndex],
          ]
        : [],
    [contents.Editorial, selectedImageIndex]
  );
  const moreSelectedImage = React.useMemo(
    () => contents.More.reduce((result, current) => result.concat(current), []),
    [contents.More]
  );

  // TODO image s3에서 받아오면
  const visibleNextButton = true;
  const visiblePrevButton = true;

  return (
    <Router history={history}>
      <GlobalStyle />
      <GlobalAppBar>
        <Switch>
          <Route path="/photography">
            <PageTemplate
              selectedImages={photographySelectedImage}
              visibleNextButton={visibleNextButton}
              visiblePrevButton={visiblePrevButton}
              handleBackButtonClick={handleBackButtonClick}
              handleNextImageClick={handleNextImageClick}
              handlePrevImageClick={handlePrevImageClick}
            >
              {() => (
                <SubMenu>
                  {contents.Photography.map((category) => (
                    <Category>
                      {category.map((image) => (
                        <SubMenuItem>{image.menuTitle}</SubMenuItem>
                      ))}
                    </Category>
                  ))}
                </SubMenu>
              )}
            </PageTemplate>
          </Route>
          <Route path="/editorial">
            <PageTemplate
              selectedImages={editorialSelectedImage}
              visibleNextButton={visibleNextButton}
              visiblePrevButton={visiblePrevButton}
              handleBackButtonClick={handleBackButtonClick}
              handleNextImageClick={handleNextImageClick}
              handlePrevImageClick={handlePrevImageClick}
            >
              {() => (
                <SubMenu>
                  {contents.Editorial.map((category) => (
                    <Category>
                      {category.map((image) => (
                        <SubMenuItem>{image.menuTitle}</SubMenuItem>
                      ))}
                    </Category>
                  ))}
                </SubMenu>
              )}
            </PageTemplate>
          </Route>
          <Route path="/more">
            <PageTemplate
              selectedImages={moreSelectedImage}
              visibleNextButton={visibleNextButton}
              visiblePrevButton={visiblePrevButton}
              visibleBackButton={false}
              handleBackButtonClick={handleBackButtonClick}
              handleNextImageClick={handleNextImageClick}
              handlePrevImageClick={handlePrevImageClick}
            ></PageTemplate>
          </Route>
          <Route path="/">
            <PageTemplate
              selectedImages={[]}
              visibleNextButton={false}
              visiblePrevButton={false}
              visibleBackButton={false}
              handleBackButtonClick={handleBackButtonClick}
            >
              <MainContents />
            </PageTemplate>
          </Route>
        </Switch>
      </GlobalAppBar>
    </Router>
  );
}

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  margin-bottom: 16px;
`;

const SubMenuItem = styled.div<{ selected?: boolean }>`
  font-size: 15px;
  line-height: 1.35;
  letter-spacing: 0.65px;
  color: grey;
`;

export default RootComponent;
