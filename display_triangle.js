//Can view results by entering 'node display_triangle.js' into your terminal (from the root directory)

// Using the fewest lines of code in the language of your choice, display a triangle of 3x4. State any assumptions in the comments.
// Bonus: create a second function that accepts any M x N, where M and N are positive integers, and display the triangle with the specified dimension.

//I'm assuming a 3 by 4 triangle should look like
// *
// **
// ****
//or some version of that

//left-aligned triangle
const displayTriangle = () => {
  for (let i = 1; i <= 3; i++) {
    console.log("*".repeat(i < 3 ? i : 4));
  }
};

console.log("Left Aligned:");
displayTriangle();

//right-aligned
const displayRightAlignedTriangle = () => {
  for (let i = 1; i <= 3; i++) {
    console.log(" ".repeat(4 - (i < 3 ? i : 4)) + "*".repeat(i < 3 ? i : 4));
  }
};
console.log("\nRight Aligned:");
displayRightAlignedTriangle();

//center aligned triangle
const displayCenterAlignedTriangle = () => {
  for (let i = 1; i <= 3; i++) {
    const stars = "*".repeat(i < 3 ? i : 4);
    const padding = " ".repeat((4 - stars.length) / 2);
    console.log(padding + stars);
  }
};
console.log("\nCenter Aligned:");
displayCenterAlignedTriangle();

const displayAnyTriangle = (M, N) => {
  for (let i = 1; i <= M; i++) {
    console.log("*".repeat(i < M ? i : N));
  }
};

console.log("\n5x7 Triangle (passing in values):");
displayAnyTriangle(5, 7);

console.log("\n4x6 Triangle (passing in values):");
displayAnyTriangle(4, 6);
