export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const DeleteProduct = (prodId) => {
  return { type: DELETE_PRODUCT, pid: prodId };
};

export const createProduct = (title, imageUrl, description, price) =>{
  return {type:CREATE_PRODUCT, productData:{
   title:title,
   description: description,
   imageUrl: imageUrl,
   price:price 
  }};
};

export const updateProduct =  (id, title, imageUrl, description) =>{
  return {type:UPDATE_PRODUCT, productData:{
    pid: id,
    title:title,
    description: description,
    mageUrl: imageUrl,
    // price:price 
  }};
};