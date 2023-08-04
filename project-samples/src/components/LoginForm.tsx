import { useState } from "react";

type User = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    setUser({ username: username, password: password });
  };

  return (
    <form>
      <input type="text" value={username} onChange={onUsernameChange} />
      <input type="password" value={password} onChange={onPasswordChange} />

      <button onClick={onClickHandle}>Submit</button>

      {user && <div>Welcome {user.username}</div>}
    </form>
  );
};

export default LoginForm;
