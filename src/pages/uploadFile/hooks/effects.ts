import React from "react";
import { PASSWORD } from "../../../common/constants/admin";
import { useHistory } from "react-router";

export default function useEffects() {
  const history = useHistory();
  React.useEffect(() => {
    const password = prompt(
      "관리자 권한이 있어야됩니다 패스워드를 입력해주세요"
    );

    if (password !== PASSWORD) {
      alert("비밀번호가 다릅니다");
      history.push("/");
    }
  }, []);
}
