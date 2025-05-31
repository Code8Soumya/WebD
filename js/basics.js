console.log(50 + 5);
console.log(50 / 5);
console.log(5 ** 9);
console.log(0 / 0);
console.log(typeof 5);

function counter() {
  let count = 0; // declare block‑scoped variable
  if (true) {
    let count = 5; // a different `count` in this block
    console.log(count); // 5 :contentReference[oaicite:0]{index=0}
  }
  console.log(count); // 0 :contentReference[oaicite:1]{index=1}
}
counter();

const PI = 3.14159; // must be initialized
// PI = 3;                        // TypeError: Assignment to constant variable. :contentReference[oaicite:4]{index=4}

const obj = { a: 1 };
obj.a = 2; // allowed: modifying object property :contentReference[oaicite:5]{index=5}

function showVar() {
  var x = 1;
  if (true) {
    var x = 2; // same variable, not block‑scoped
    console.log(x); // 2 :contentReference[oaicite:8]{index=8}
  }
  console.log(x); // 2 :contentReference[oaicite:9]{index=9}
}
showVar();

console.log(1 === "1"); // false: no type coercion :contentReference[oaicite:19]{index=19}
console.log(1 == "1"); // true: '1' coerced to number :contentReference[oaicite:20]{index=20}

console.log(true && "hello"); // 'hello' (last truthy operand) :contentReference[oaicite:24]{index=24}
console.log(false || 0); // 0 (first falsy operand)      :contentReference[oaicite:25]{index=25}
console.log(!0); // true                         :contentReference[oaicite:26]{index=26}

const name = "Alice",
  items = 3;
console.log(`Hello, ${name}! You have ${items + 1} new messages.`);
// Hello, Alice! You have 4 new messages. :contentReference[oaicite:30]{index=30}

console.log(`
  Shopping list:
  - Apples
  - Bananas
  - Oranges
`); // multi‑line string :contentReference[oaicite:31]{index=31}

let num = 42;
let str = "Hello";
let bool = true;
let undef;
let nul = null;
let sym = Symbol("id");
let big = 9007199254740991n;

const person = {
  name: "Alice",
  age: 30,
};

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}
// Outputs "Grade: B"

for (let i = 0; i < 3; i++) {
  console.log(i);
}
// 0, 1, 2

let n = 0;
while (n < 3) {
  console.log(n);
  n++;
}
// 0, 1, 2

for (const ch of "hi") {
  console.log(ch);
}
// 'h', 'i'

function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function print(number) {
  console.log(`My number is ${number} `);
}
nums.forEach(print);

nums.forEach(function (number) {
  console.log(`My number is ${number} `);
});

console.log(nums.length);

const qube = nums.map(function (number) {
  return number ** 3;
});

qube.forEach(print);

const add1 = function(x, y){
    return x + y
}
console.log(add1(9, 9))

const add2 = (x, y) => {
    return x + y
}
console.log(add2(9, 9))

const rollDie = () => (
    console.log(Math.floor(Math.random() * 6) + 1)
)

rollDie()

// console.log("Hello!!")
// setTimeout(() => {
//     console.log("Are you still there ?")
// }, 5000)
// console.log("GoodBye!!")

// setInterval(() => {
//     console.log(Math.random())
// }, 1000)

const smallNums = nums.filter((x) => {
    return x <= 5
})
smallNums.forEach(print)