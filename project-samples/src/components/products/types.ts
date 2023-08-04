export type imageProps = {
  url: string;
  width: number;
  height: number;
};

export type productProps = {
  id: number;
  title: string;
  price: number;
  image: imageProps;
};
