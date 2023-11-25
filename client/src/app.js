const form = document.querySelector(".form-main");
const mainInput = document.querySelector(".input-main");

const p = document.createElement("p");
p.innerHTML = "";
p.className = "main-wrong";
document.body.append(p);

const div = document.createElement("div");
div.className = "numbers-list";

async function getData(key) {
  const res = await fetch(`http://localhost:5000/api/numbers?key=${key}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (res.status === 403) {
    p.innerHTML = "<p>Неверный пароль!</p>";
    document.body.append(p);
  } else {
    const pWrong = document.querySelector(".main-wrong");
    pWrong.remove();
    div.innerHTML = `<p> ${data}</p>`;
    document.body.append(div);
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(mainInput.value);
  mainInput.remove();
  const addForm = document.createElement("form");
  addForm.className = "form-add";

  const addInput = document.createElement("input");
  addInput.className = "input-add";
  addForm.append(addInput);
  document.body.append(addForm);
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
  });
});
