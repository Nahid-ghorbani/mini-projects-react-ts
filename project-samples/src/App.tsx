import "./App.css";

function App() {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.defaultPrevented;
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.altKey;
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} />
        <button onClick={clickHandler}>Click</button>
      </form>
    </>
  );
}

export default App;
