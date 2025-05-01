export interface productsInterface {
  _id: string;
  name: string;
  description: string;
  image: [any];
  offerPrice: number;
  rating: number;
}

export interface singleProductInterface {
  name: string;
  image: [any];
  rating: number;
  description: string;
  offerPrice: number;
  price: number;
  category: string;
  userId?: string;
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface featuredCard {
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
