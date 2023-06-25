export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function FilterAllProducts(data, sorted) {
  let str = "";

  for (let key in data) {
    const categoryvalue = data[key];

    if (categoryvalue.length) {
      const lastcategoryValue = categoryvalue[categoryvalue.length - 1];
      str += `${key}=${lastcategoryValue}&`;
    }
  }

  for (let key in sorted) {
    str += `${key}=${sorted[key]}&`;
  }
  console.log(str);

  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/products?` + str);
    const data = await response.json();
    resolve({ data });
  });
}
