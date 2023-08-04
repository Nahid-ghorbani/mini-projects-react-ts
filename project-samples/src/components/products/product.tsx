type productProps = {
  id: number;
  title: string;
  price: number;
  image: {
    url: string;
    width: number;
    height: number;
  };
};

const product = ({ id, title, price, image }: productProps) => {
  return <div></div>;
};

export default product;
