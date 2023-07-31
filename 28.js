const data = prompt('Type any words.');

for (let i=0; i<data.length-1; i++){
  console.log(data[i], data[i+1]);
}