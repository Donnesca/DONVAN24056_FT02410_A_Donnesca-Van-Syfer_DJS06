// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// Log each name to the console
console.log("Names:");
names.forEach((name) => {
  console.log(name);
});

// Log each province to the console
console.log("\nProvinces:");
provinces.forEach((province) => {
  console.log(province);
});

// Log each name with its matching province
console.log("\nNames with Provinces:");
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Used map to create a new array of province names in all uppercase.
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());

// Log the new array to the console.
console.log("\nUppercase Provinces:");
console.log(uppercaseProvinces);

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
