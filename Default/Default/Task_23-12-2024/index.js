
const array = [10,20,20,40,50,60,60] ;

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      array.splice(j, 1);
      j--;
    }
  }

//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }

}

console.log(array);

////////////////////////////

let array01 = [1,2,3,4,5];

array01.reverse();

console.log(array01);

//////////////////////////////

let array02 = [10,20,30,40,50];

array02.splice(0, array02.length);

console.log(array02);

//////////////////////////////


let array03 = [1,2,3,4,5,6,7,8,9,10];
array03.toString();

console.log(array03);


//////////////////////////

let array04 = [22,65,1,39];

array04.sort((a,b) => {
    return a-b;
})


console.log(array04[array04.length-1]);

/////////////////////////////

let array05 = [21,12,13,45,54];

let exists = array05.includes(12);

console.log(exists);

////////////////////////////

let array06 = [1,2,3,4,5];

array06.splice(2,1,8);

console.log(array06);

////////////////////////////