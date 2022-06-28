let age: number = 20;

function double(m: number): number {
    return 2 * m;
}
let y = double(2)
console.log(y)

const add1 = (n: number): number => n + 1;
let x = add1(2)
console.log(x)

function pluralize(word: string): string {
    return word + 's';
}

function addOrSubtract(b: number, c: boolean): number {
    if (c){return b+1}
    else{return b-1}
}
// same thing as
//function addOrSubtract(n: number, add: boolean): number{
//     return add ? n + 1 : n - 1;
// }

function add(t: number, r: number): number {
    return t + r;
}