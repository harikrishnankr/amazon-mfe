import { globalLogin, RootState } from "@amazon-mfe/shared-store";
import { useDispatch, useSelector } from "react-redux";

export default function ProductList() {
  const dispatch = useDispatch();
  const shellState = useSelector((state: RootState) => state.shell);

  console.log(shellState);

  const onLogin = () => {
    dispatch(globalLogin());
  };

  return (
    <>
      <h1>ProductList</h1>
      <button onClick={onLogin}>Login</button>
    </>
  );
}
