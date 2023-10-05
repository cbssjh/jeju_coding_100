const n = prompt('type your heights');
let sorted = "";

sorted = n.split(" ").sort(function(a, b){
  return a - b;
})
.join(" ");

if (n === sorted){
  console.log("Yes");
} else{
  console.log("No");
}
