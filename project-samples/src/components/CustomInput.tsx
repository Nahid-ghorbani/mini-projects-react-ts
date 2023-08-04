type customInputType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  value: string;
};

const CustomInput = ({ onChange, value }: customInputType) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event, 5);
  };

  return <input type="text" onChange={changeHandler} value={value} />;
};

export default CustomInput;
