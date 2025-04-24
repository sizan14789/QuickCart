
export interface productsInterface {
  _id: string;
  title: string,
  desc: string;
  image: string;
  offerPrice: number;
  rating: number,
}

export interface singleProductInterface {
  title: string;
  image: string;
  rating: number;
  desc: string;
  offerPrice: number;
  price: number;
  info: {
    brand?: string;
    color?: string;
    category: string;
  };
  username?: string;
  _id?: string; 
  createdAt?: Date;
  updatedAt?: Date;
}

export interface featuredCard{
  id: number;
  image: any;
  description: string;
  title: string;
}

export interface sliderInfoInterface {
  id: number;
  offer: string;
  headline: string;
  primaryButton: string;
  secondaryButton: string;
  image: any;
}
