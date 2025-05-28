document.addEventListener("DOMContentLoaded", async function () {
  console.log("Employee Records");

  const test = document.querySelector("#test_button");

  const content = document.querySelector(".content");
  // test.innerHTML = "Hello";
  
  

  test.addEventListener("click", () => displaystuff());

  async function displaystuff() {
    content.innerHTML = `<p>Hello</p>`;
  }
});
