import fs from "fs";

const abc = fs.readFileSync("collection.json").toString();

// console.log(abc);

console.log("**********************************");

const jsonObject = JSON.parse(abc);

for (const key in jsonObject.books) {
  console.log(key);
  // var hello = (document.getElementById("author").innerHTML = key);
  // console.log(hello);
}
