export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const DeleteProduct = (prodId) => {
  return { type: DELETE_PRODUCT, pid: prodId };
};

export const createProduct = (title, description, imageUrl, price) =>{
  return {type:CREATE_PRODUCT, productData:{
   title:title,
   description: description,
   imageUrl: imageUrl,
   price:price 
  }};
};

export const updateProduct =  (id, title, description, imageUrl) =>{
  return {
    type:UPDATE_PRODUCT, 
    pid: id,  
    productData:{
    title:title,
    description: description,
    imageUrl: imageUrl,
    },
  };
};