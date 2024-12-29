const AllCont = document.querySelector(".Content");
const inpt = document.querySelector("#Search-Input");

const products = [
  { name: "Laptop", price: 45000 },
  { name: "Smartphone", price: 15000 },
  { name: "Headphones", price: 2000 },
  { name: "Tablet", price: 25000 },
  { name: "Smartwatch", price: 8000 },
  { name: "Gaming Console", price: 30000 },
  { name: "Bluetooth Speaker", price: 4000 },
  { name: "External Hard Drive", price: 5000 },
  { name: "Monitor", price: 12000 },
  { name: "Keyboard", price: 1500 },
];

inpt.addEventListener("input", () => {
  const searchValue = inpt.value.toLowerCase();
  const filterProduct = products.filter((elem) => {
    return elem.name.toLowerCase().startsWith(searchValue);
  });
  loadProduct(filterProduct);
});

function loadProduct(Prod) {
  let prods = "";
  Prod.forEach((elem) => {
    prods += `
        <div class="prod1">
        <h1>${elem.name}</h1>
        <p>${elem.price}</p>
      </div>
        `;
  });
  AllCont.innerHTML = prods;
}
loadProduct(products);
