
export interface productInterface {
  __v: number;
  _id: string;
  category: string;
  date: number;
  description: string;
  image: string[];
  name: string;
  offerPrice: number;
  price: number;
  rating: number,
  userId: string;
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
