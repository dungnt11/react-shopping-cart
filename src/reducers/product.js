let listProduct = [
  {
    id: createKey(),
    name: "Iphone X",
    img: "https://picsum.photos/500/300/?image=654",
    decription: "Sản phẩm do Apple cung cấp",
    price: 500,
    inventory: 50
  },
  {
    id: createKey(),
    name: "Samsung S7",
    img: "https://picsum.photos/500/300/?image=654",
    decription: "Sản phẩm do Apple cung cấp",
    price: 500,
    inventory: 50
  },
  {
    id: createKey(),
    name: "I porn",
    img: "https://picsum.photos/500/300/?image=654",
    decription: "Sản phẩm do Apple cung cấp",
    price: 500,
    inventory: 50
  }
];
function createKey() {
  let ls = ((1 + Math.random()) * 0x1000).toString(16).substring(1);
  return ls + ls + "-" + ls + "-" + ls;
}

const product = (state = listProduct, action) => {
  switch (action.type) {
    default:
      return state;
  }
  return state;
};

export default product;
