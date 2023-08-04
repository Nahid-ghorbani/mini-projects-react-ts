type imageProps = {
  url: string;
  width: number;
  height: number;
};

type productProps = {
  id: number;
  title: string;
  price: number;
  image: imageProps;
};

const product = ({ id, title, price, image }: productProps) => {
  return <div></div>;
};

export default product;
