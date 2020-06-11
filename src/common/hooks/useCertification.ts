import React from "react";
import { useHistory } from "react-router";
import { PASSWORD } from "../constants/admin";

export default function useCertification() {
  const history = useHistory();
  React.useEffect(() => {
    const password = prompt(
      "관리자 권한이 있어야됩니다 패스워드를 입력해주세요"
    );

    if (password !== PASSWORD) {
      alert("비밀번호가 다릅니다");
      history.push("/");
    }
  }, [history]);
}
