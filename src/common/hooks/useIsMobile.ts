import useMedia from "./useMedia";
import { MEDIA_QUERY } from "../constants/responsive";

function useIsMobile() {
  return Boolean(useMedia([MEDIA_QUERY.EXCEPT_DESKTOP], [true], false));
}

export default useIsMobile;
