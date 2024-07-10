import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  productName?: string | null;
  description?: string | null;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
