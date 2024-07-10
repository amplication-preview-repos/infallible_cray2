import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  productName?: string | null;
  description?: string | null;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};
