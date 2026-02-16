🧠 Algorithm Checkpoint – Arrays & Vectors

This project contains solutions to two algorithmic problems using arrays and vector operations.

📌 Problem 1: Sum of Distinct Elements
🔎 Description

Given two sets of elements, find the sum of all distinct elements from the sets.

In other words, calculate the sum of elements that are present in one set but not both.

🧾 Example
Set 1: [3, 1, 7, 9]
Set 2: [2, 4, 1, 9, 3]

Output: 13


Explanation:
Distinct elements are: 4, 7, 2
Sum = 4 + 7 + 2 = 13

✅ Algorithm Approach (Using Arrays)

Initialize sum = 0

Loop through Set 1

If the element does not exist in Set 2, add it to sum

Loop through Set 2

If the element does not exist in Set 1, add it to sum

Return sum

💻 JavaScript Implementation
function sumOfDistinct(set1, set2) {
  let sum = 0;

  // Elements in set1 but not in set2
  for (let i = 0; i < set1.length; i++) {
    if (!set2.includes(set1[i])) {
      sum += set1[i];
    }
  }

  // Elements in set2 but not in set1
  for (let j = 0; j < set2.length; j++) {
    if (!set1.includes(set2[j])) {
      sum += set2[j];
    }
  }

  return sum;
}

// Example
console.log(sumOfDistinct([3, 1, 7, 9], [2, 4, 1, 9, 3])); // 13

📌 Problem 2: Dot Product & Orthogonality
🔎 Description
Part 1: Dot Product

Write a procedure dot_product that calculates the scalar (dot) product of two vectors v1 and v2.

The dot product formula is:

v1 · v2 = (v1[0] * v2[0]) + (v1[1] * v2[1]) + ... + (v1[n] * v2[n])

Part 2: Orthogonal Vectors

Two vectors are orthogonal if their dot product equals zero.

You are required to:

Use arrays to represent vectors

Use nested loops

Use different parameter passing methods

Determine for n pairs of vectors whether they are orthogonal

✅ Algorithm (Procedure Version Concept)

Create a procedure dot_product(v1, v2, ps)

Initialize ps = 0

Loop through vector elements

Multiply corresponding elements

Add result to ps

If ps === 0, vectors are orthogonal

💻 JavaScript Implementation (Function Version)
Dot Product Function
function dotProduct(v1, v2) {
  let ps = 0;

  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }

  return ps;
}

Checking Orthogonality for n Pairs
function checkOrthogonality(vectorPairs) {
  for (let i = 0; i < vectorPairs.length; i++) {
    let v1 = vectorPairs[i][0];
    let v2 = vectorPairs[i][1];

    let result = dotProduct(v1, v2);

    if (result === 0) {
      console.log(`Pair ${i + 1}: Orthogonal`);
    } else {
      console.log(`Pair ${i + 1}: Not Orthogonal`);
    }
  }
}

// Example
checkOrthogonality([
  [[1, 2], [2, -1]],   // Orthogonal
  [[1, 2, 3], [4, 5, 6]] // Not Orthogonal
]);

🧩 Concepts Practiced

Arrays

Nested loops

Algorithm design

Parameter passing

Vector mathematics

Dot product calculation

Orthogonality check

🚀 Conclusion

This checkpoint demonstrates:

How to compare arrays and extract distinct values

How to compute scalar (dot) products

How to determine vector orthogonality using algorithmic logic
