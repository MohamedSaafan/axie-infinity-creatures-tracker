import { executionAsyncResource } from "async_hooks";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changePassword } from "./withAuthSlice";

interface Props {}

const WithAuth: React.FC<Props> = (props) => {
  const globalState = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmitClick = () => {
    dispatch(changePassword(password));
  };
  if (globalState.password === "password") return <>{props.children}</>;

  return (
    <div>
      <input value={password} onChange={handlePasswordChange} />{" "}
      <button onClick={handleSubmitClick}>Submit</button>
    </div>
  );
};

export default WithAuth;
