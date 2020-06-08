import React from "react";
import { Wrapper, Header, Main, Logo, Nav, MenuItem } from "./styled";
import { Link, useLocation } from "react-router-dom";

const GlobalAppBar: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { pathname } = useLocation();
  const menu = React.useMemo(() => pathname.replace("/", ""), [pathname]);

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

  return (
    <Wrapper>
      <Header>
        <Logo>
          <Link to="/">Eun Ko</Link>
        </Logo>
        <Nav>
          <MenuItem selected={menu === "photography"}>
            <Link ref={photographyRef} to="/photography">
              Photography
            </Link>
          </MenuItem>
          <MenuItem selected={menu === "editorial"}>
            <Link ref={editorialRef} to="/editorial">
              Editorial
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
