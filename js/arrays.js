let ar=[10,20,30,40,50];
console.log(ar);
let remove=ar.splice(2,2,60,70);
console.log(ar);

let array=[2,3,4,5,6];
array.push(9);
console.log(array);

let arrr=[10,20,30,40,50];
arrr.pop(40);
console.log(arrr);

let aa=[3,6,9,5];
aa.unshift(2);
console.log(aa);

let rr=[23,57,83,56];
rr.shift();
console.log(rr);

let a=[3,4,2,4];
console.log(a.lastIndexOf(4));

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let num = 7;

if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}