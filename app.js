const btn = document.querySelector(".dice");

async function getAdvice() {
  let obj;
  const response = await fetch("https://api.adviceslip.com/advice");
  obj = await response.json();
  console.log(obj);
  document.querySelector(".advice-id").innerHTML = obj.slip.id;
  document.querySelector(".quotation").innerHTML = obj.slip.advice;
}

btn.addEventListener("click", getAdvice);
