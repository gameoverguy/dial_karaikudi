
//Array length
let array01 = ["one", "two", "three", "four"];
document.getElementById("arraylength").innerHTML = array01.length;
//Array length

//Array toString()
let array02 = ["one", "two", "three", "four"];

document.getElementById("arraytostring").innerHTML = array02.toString();
//Array toString()

//Array at()
let array03 = ["one", "two", "three", "four"];
document.getElementById("arrayat").innerHTML = array03.at(3);
//Array at()

//Array join()
let array04 = ["one", "two", "three", "four"];
document.getElementById("arrayjoin").innerHTML = array04.join(" / ");
//Array join()

//Array pop()
let array05 = ["one", "two", "three", "four"];
array05.pop();

document.getElementById("arraypop").innerHTML = array05;
//Array pop()

//Array push()
let array06 = ["one", "two", "three", "four"];
array06.push("five");

document.getElementById("arraypush").innerHTML = array06;
//Array push()

//Array shift()
let array07 = ["one", "two", "three", "four"];
array07.shift();

document.getElementById("arrayshift").innerHTML = array07;
//Array shift()

//Array unshift()
let array08 = ["one", "two", "three", "four"];
array08.unshift("zero");

document.getElementById("arrayunshift").innerHTML = array08;
//Array unshift()


//Array concat()
let array09_01 = ["one", "two", "three", "four"];
let array09_02 = ["five", "six", "seven", "eight"];

document.getElementById("arrayconcat").innerHTML = array09_01.concat(array09_02);
//Array concat()


//copyWithin()
let array10 = ["one", "two", "three", "four"];

document.getElementById("copywithin").innerHTML = array10.copyWithin(3, 0);
//copyWithin()

//Array flat()
let array11 = [["one", "two"], [3, 4], ["V", "VI"]];

document.getElementById("arrayflat").innerHTML = array11.flat();
//Array flat()


//Array splice() add
let array12 = ["one", "two", "three", "four"];
let added = array12.splice(2, 0, "five", "six");

document.getElementById("arrayspliceadd").innerHTML = array12;
//Array splice() add

//Array splice() overwrite
let array13 = ["one", "two", "three", "four"];
let overwritten = array13.splice(2, 2, "five", "six")

document.getElementById("arrayspliceoverwrite").innerHTML = array13;
//Array splice() overwrite

//Array toSpliced()
let array14 = ["one", "two", "three", "four"];
const tosplicedarray = array14.toSpliced(2, 1);

document.getElementById("tospliced").innerHTML = tosplicedarray;
//Array toSpliced()

//Array slice()
let array15 = ["one", "two", "three", "four"];
const slicearray = array15.slice(2);

document.getElementById("arrayslice").innerHTML = slicearray;
//Array slice()

//Array RangedSlice()
let array16 = ["one", "two", "three", "four"];
const rangedslicearray = array16.slice(1, 3);
document.getElementById("rangedslice").innerHTML = rangedslicearray;
//Array RangedSlice()



function calci() {
    let num1 = parseFloat(document.getElementById("num01").value);
    let num2 = parseFloat(document.getElementById("num02").value);

    let total = num1 + num2;
    document.getElementById("result").innerHTML = total;
}





