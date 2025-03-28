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

// Created a new array using map that contains the length of each name.
const nameLengths = names.map((name) => name.length);

// Log the new array to the console.
console.log("\nName Lengths:");
console.log(nameLengths);

// Use sort to alphabetically sort the provinces.
const sortedProvinces = [...provinces].sort(); // Create a copy to avoid mutating the original array

// Log the sorted array to the console.
console.log("\nSorted Provinces:");
console.log(sortedProvinces);

// Used filter to remove provinces containing "Cape" and log the count of remaining provinces.
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
const remainingProvinceCount = filteredProvinces.length;

console.log("\nProvinces without 'Cape':");
console.log(filteredProvinces);
console.log("\nCount of remaining provinces:", remainingProvinceCount);

// Created a boolean array using map and some to determine if a name contains the letter 'S'.
const containsS = names.map((name) => {
  return name.split("").some((letter) => letter.toUpperCase() === "S");
});

console.log("\nNames containing 'S':");
console.log(containsS);

// Used reduce to transform the names array into an object mapping names to their respective provinces.
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log("\nName to Province Mapping:");
console.log(nameProvinceMap);

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
