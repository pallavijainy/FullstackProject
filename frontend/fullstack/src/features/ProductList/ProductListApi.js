export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function FilterAllProducts(data, sorted, Pagination) {
  let str = "";

  for (let key in data) {
    const categoryvalue = data[key];

    categoryvalue.forEach((el) => {
      str += `${key}=${el}&`;
    });
  }

  for (let key in sorted) {
    str += `${key}=${sorted[key]}&`;
  }
  console.log(str);

  for (let key in Pagination) {
    str += `${key}=${Pagination[key]}&`;
  }
  console.log(str);

  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/products?` + str);
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

//fetch category

export function fetchCategory() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/category");
    const data = await response.json();
    resolve({ data });
  });
}

//fetch brand

export function fetchBrand() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data });
  });
}
