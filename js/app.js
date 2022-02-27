const adviceID = document.querySelector("#advice-id"),
  advice = document.querySelector("#advice"),
  adviceButton = document.querySelector("#advice-btn");

const startingAdvice = async (slip_id) => {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice/${slip_id}`
    );
    const data = await response.json();
    adviceID.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
  } catch (err) {
    advice.innerHTML = "Something went wrong. Try again later.";
  }
};

startingAdvice("71");

const getAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-store",
    });
    const data = await response.json();
    adviceID.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
  } catch (err) {
    adviceID.innerHTML = "";
    advice.innerHTML = "Something went wrong. Try again later.";
  }
};

adviceButton.addEventListener("click", getAdvice);
