const age = 20;
console.log(Number(age), Boolean(age), String(age));

let names = "Иван";
console.log(Number(names), Boolean(names), String(names));

let isGreater = 4 > 1;
console.log(Number(isGreater), Boolean(isGreater), String(isGreater));

let nulls = null;
console.log(Number(nulls), Boolean(nulls), String(nulls));

let under = undefined;
console.log(Number(under), Boolean(under), String(under));

let obj = new Object();
console.log(Number(obj), Boolean(obj), String(obj));

let bigi = 1n;
console.log(Number(bigi), Boolean(bigi), String(bigi));

let sym = Symbol("id");
console.log("Нельзя преобразовать в Number", Boolean(sym), String(sym));