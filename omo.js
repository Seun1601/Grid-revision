// let X = Number(prompt("What is X?"));
// let ans = (Math.pow(X, 2) + (5*X) - 10) 
// alert(`X^2 + 5X - 10 is ${ans}`);

//methods are functions inside objects 

let a1 = Number(prompt('Enter a1'));
let b1 = Number(prompt('Enter b1'));
let C1 = Number(prompt('Enter C1'));
let a2 = Number(prompt('Enter a2'));
let b2 = Number(prompt('Enter b2'));
let C2 = Number(prompt('Enter C2'));

alert("Solving a1x + b1y = C1 and a2x + b2y = C2")

let delta = (a1*b2)-(a2*b1);
let xdelta = (C1*b2)-(C2*b1);
let ydelta = (a1*C2)-(a2*C1);
let Xval = xdelta/delta;
let Yval = ydelta/delta;
if (delta===0){
    alert("Wetin be this???")
}else{
    alert(`X is ${Xval} and Y is ${Yval}`);
}




