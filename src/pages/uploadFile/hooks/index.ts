import useHandlers from "./handlers";
import useProps from "./props";
import useEffects from "./effects";

export type IHookHandlers = ReturnType<typeof useHandlers>;
export type IHookProps = ReturnType<typeof useProps>;

export { useHandlers, useProps, useEffects };
