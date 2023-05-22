// const _ = require("lodash");

const obj1 = { name: "Arun Sharma", age: 24, email: "arun.sharma@tectoro.com" };
const obj2 = { name: "Arun Sharma", age: 24, email: "arun.sharma@tectoro.com" };

// console.log(JSON.stringify(obj1) == JSON.stringify(obj2));

// console.log(_.isEqual(obj1, obj2));

const matches = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

const result = matches(
  { hair: "long", beard: true },
  { age: 23, hair: "long", beard: true }
);

console.log(result);

const result2 = matches(obj1, obj2);
console.log(result2);

const isPropertyContains = matches(
  { hair: "long", beard: true },
  { age: 30, hair: "long", beard: true }
);

console.log(isPropertyContains);
