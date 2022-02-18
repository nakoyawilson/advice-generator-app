const adviceID = document.querySelector("#advice-id"),
  advice = document.querySelector("#advice"),
  adviceButton = document.querySelector("#advice-btn");

const startingAdvice = async (slip_id) => {
  try {
    const response = await axios.get(
      `https://api.adviceslip.com/advice/${slip_id}`
    );
    adviceID.innerHTML = response.data.slip.id;
    advice.innerHTML = response.data.slip.advice;
  } catch (err) {
    advice.innerHTML = "Something went wrong. Try again later.";
  }
};

startingAdvice("71");

const getAdvice = async () => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    adviceID.innerHTML = response.data.slip.id;
    advice.innerHTML = response.data.slip.advice;
  } catch (err) {
    advice.innerHTML = "Something went wrong. Try again later.";
  }
};

adviceButton.addEventListener("click", getAdvice);
