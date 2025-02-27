import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFunc = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  return (
    <>
      <h1>UseCallback Kook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFunc} />
    </>
  );
};
