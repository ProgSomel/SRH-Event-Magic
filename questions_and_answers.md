<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i>We have declared a variable name greetign and thene assign an empty object. Which has no value. So it will console a empty object </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12"

<i>we are calling sum function with 2 values first one is integer and second one is string. And the sum function returns sum of thses two values. As second one is string value so it will return 12 as a string type. Beacaue We know if add something with string the sum value will be string</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔']

<i>We have taken the value from array index 0 a,d then assign the value to the key favouriteFood of info object. ANd then changing the value of key favouriteFood of object info. But we didn't change the value of actual array food. That's why it will console the same value as it was</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined

<i>sayHi function returning a message as template string with the provided paramter. But when we are calling the sayHi function we didn,t give any parameter in sayHi function . That's why it is saying Hi there, undefined. As the parameter is undefined from calling side </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>The forEach loop will loop through every elements of nums array. And there is also a condition if any item of nums array is true then it will increase the value of count. But at first num will be 0 as the first element of nums is 0 . So the if condition will be false So the count value will not increase. At second time it will have 1 which is true so the count value will be 0+1 = 1, at third time it will get 2 which is true So the value of count will be increased as 1+1= 2, and at last it will get 3 which is also true so the count will be 2+1=3</i>

</p>
</details>
