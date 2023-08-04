export type imageProps = {
  url: string;
  width: number;
  height: number;
};

export type product = {
  id: number;
  title: string;
  price: number;
  image: imageProps;
};

export type productProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & product;
