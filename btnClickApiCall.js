const btn = document.getElementById("call-api");
const api = "https://jsonplaceholder.typicode.com/todos";

function testCase(value) {
  console.log(val);
  if (value[0].id !== null) {
    alert("Got it");
  }
}

let val;

val = btn.addEventListener("click", () => {
  console.log("Hello API!");
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (data) {
      alert("Api run successfully");
      // This is the JSON from our response
      console.log(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
});
