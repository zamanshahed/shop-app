export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const DeleteProduct = (prodId) => {
  return { type: DELETE_PRODUCT, pid: prodId };
};
