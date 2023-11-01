const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let c = [];

a.forEach(function(e, i){
  if (i%2 === 0){
    c.push([e, b[i]]);
  } else {
    c.push([b[i], e]);
  }
});

console.log(c);