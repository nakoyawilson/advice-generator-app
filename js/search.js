const search = document.querySelector("#search"),
  searchForm = document.querySelector("#search-form"),
  searchResults = document.querySelector("#search-results");

const searchAdvice = async (query) => {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice/search/${query}`
    );
    const data = await response.json();
    const adviceSlips = data.slips;
    searchResults.innerHTML = "";
    adviceSlips.forEach((slip) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const adviceTitle = document.createElement("span");
      adviceTitle.classList.add("advice-title");
      adviceTitle.innerHTML = `Advice #${slip.id}`;
      card.append(adviceTitle);
      const divider = document.createElement("picture");
      divider.classList.add("divider-wrapper");
      divider.innerHTML = `<source media="(max-width: 719px)"
      srcset="images/pattern-divider-mobile.svg"/><source
      media="(min-width: 720px)" srcset="images/pattern-divider-desktop.svg" /><img src="images/pattern-divider-mobile.svg" alt="" class="divider" />`;
      card.append(divider);
      const adviceText = document.createElement("p");
      adviceText.classList.add("advice-text");
      adviceText.innerHTML = `&ldquo;${slip.advice}&rdquo;`;
      card.append(adviceText);
      searchResults.append(card);
    });
  } catch (err) {
    console.log(err);
    searchResults.innerHTML = "";
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-2");
    const adviceText = document.createElement("p");
    adviceText.classList.add("advice-text");
    adviceText.innerHTML = "No advice found";
    card.append(adviceText);
    const divider = document.createElement("picture");
    divider.classList.add("divider-wrapper");
    divider.innerHTML = `<source media="(max-width: 719px)"
    srcset="images/pattern-divider-mobile.svg"/><source
    media="(min-width: 720px)" srcset="images/pattern-divider-desktop.svg" /><img src="images/pattern-divider-mobile.svg" alt="" class="divider" />`;
    card.append(divider);
    searchResults.append(card);
  }
};

searchForm.addEventListener("submit", (e) => {
  const searchQuery = search.value;
  searchAdvice(searchQuery);
  e.preventDefault();
});
