import useHandlers from "./handlers";
import useProps from "./props";

export type IHookHandlers = ReturnType<typeof useHandlers>;
export type IHookProps = ReturnType<typeof useProps>;

export { useHandlers, useProps };
