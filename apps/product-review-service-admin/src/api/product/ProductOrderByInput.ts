import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  productName?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
};
