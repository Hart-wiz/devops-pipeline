console.log("Starting test ...");
console.log("This is a test file to verify the CI/CD pipeline.");
console.log("If you see this message, the pipeline is working correctly.");
// sum.test.js
test("adds 1 + 2", () => {
  expect(1 + 2).toBe(3);
});
setTimeout(() => {
  console.log("waiting 3 seconds before finishing the test...");
}, 2000);
