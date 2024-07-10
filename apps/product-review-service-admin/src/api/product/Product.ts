import { Review } from "../review/Review";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  productName: string | null;
  description: string | null;
  price: number | null;
  reviews?: Array<Review>;
};
