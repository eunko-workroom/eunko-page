import React from "react";
import { Wrapper, Header, Main, Logo, Nav, MenuItem } from "./styled";
import { Link } from "react-router-dom";

const GlobalAppBar: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  // TODO: with Router 연결후 location 보고 확인하는 걸로 변경
  const [menu, setMenu] = React.useState<Common.MenuType | "">("");
  const handleLogoClick = React.useCallback(() => {
    setMenu("");
  }, []);
  const handlePhotographyMenuClick = React.useCallback(() => {
    setMenu("Photography");
  }, []);
  const handleEditorialMenuClick = React.useCallback(() => {
    setMenu("Editorial");
  }, []);
  const handleMoreMenuClick = React.useCallback(() => {
    setMenu("More");
  }, []);

  const photographyRef = React.useRef<HTMLAnchorElement>(null);
  const editorialRef = React.useRef<HTMLAnchorElement>(null);
  const moreRef = React.useRef<HTMLAnchorElement>(null);

  const getMainPosition = React.useCallback(() => {
    switch (menu) {
      case "Photography":
        return photographyRef.current?.offsetLeft;
      case "Editorial":
        return editorialRef.current?.offsetLeft;
      case "More":
        return moreRef.current?.offsetLeft;
    }
    return 16;
  }, [menu, photographyRef, editorialRef, moreRef]);

  return (
    <Wrapper>
      <Header>
        <Logo onClick={handleLogoClick}>
          <Link to="/">Eun Ko</Link>
        </Logo>
        <Nav>
          <MenuItem
            onClick={handlePhotographyMenuClick}
            selected={menu === "Photography"}
          >
            <Link ref={photographyRef} to="/photography">
              Photography
            </Link>
          </MenuItem>
          <MenuItem
            onClick={handleEditorialMenuClick}
            selected={menu === "Editorial"}
          >
            <Link ref={editorialRef} to="/editorial">
              Editorial
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMoreMenuClick} selected={menu === "More"}>
            <Link ref={moreRef} to="/more">
              And More
            </Link>
          </MenuItem>
        </Nav>
      </Header>
      <Main margin={getMainPosition()}>{children}</Main>
    </Wrapper>
  );
};

export default GlobalAppBar;
