import React from "react";
import { Wrapper, Header, Main, Logo, Nav, MenuItem } from "./styled";
import { Link, useLocation } from "react-router-dom";
import SelectedMenuContext from "../../context/selectedMenuContext";

const GlobalAppBar: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { pathname } = useLocation();
  const menu = React.useMemo(() => pathname.replace("/", ""), [pathname]);
  const { setSelectedMenuId } = React.useContext(SelectedMenuContext);
  const photographyRef = React.useRef<HTMLAnchorElement>(null);
  const editorialRef = React.useRef<HTMLAnchorElement>(null);
  const moreRef = React.useRef<HTMLAnchorElement>(null);
  const mainPosition = React.useMemo(() => {
    switch (menu) {
      case "photography":
        return photographyRef.current?.offsetLeft;
      case "editorial":
        return editorialRef.current?.offsetLeft;
      case "more":
        return moreRef.current?.offsetLeft;
    }
  }, [menu]);

  const handleClickPhotography = React.useCallback(() => {
    if (menu === "photography") {
      setSelectedMenuId("");
    }
  }, [menu, setSelectedMenuId]);
  const handleClickEditorial = React.useCallback(() => {
    if (menu === "editorial") {
      setSelectedMenuId("");
    }
  }, [menu, setSelectedMenuId]);

  return (
    <Wrapper>
      <Header>
        <Logo>
          <Link to="/">Eun Ko</Link>
        </Logo>
        <Nav>
          <MenuItem
            selected={menu === "photography"}
            onClick={handleClickPhotography}
          >
            <Link ref={photographyRef} to="/photography">
              Photography
            </Link>
          </MenuItem>
          <MenuItem
            selected={menu === "editorial"}
            onClick={handleClickEditorial}
          >
            <Link ref={editorialRef} to="/editorial">
              Editorial Design
            </Link>
          </MenuItem>
          <MenuItem selected={menu === "more"}>
            <Link ref={moreRef} to="/more">
              And More
            </Link>
          </MenuItem>
        </Nav>
      </Header>
      <Main margin={mainPosition || 16}>{children}</Main>
    </Wrapper>
  );
};

export default GlobalAppBar;
