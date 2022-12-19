function redirectbtn_s() {
  window.location.href = "/vishal/html/workspace-page-1.html"
}
function redirectbtn() {
  window.location.href = '/vishal/html/workspace-page-1.html'
}


document.querySelectorAll(".sk_carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".sk_carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="sk_carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
          <div class="sk_carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
  );

  const buttons = carousel.querySelectorAll(".sk_carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("sk_carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("sk_carousel__button--selected")
      );

      items[i].classList.add("sk_carousel__item--selected");
      button.classList.add("sk_carousel__button--selected");
    });
  });


  items[0].classList.add("sk_carousel__item--selected");
  buttons[0].classList.add("sk_carousel__button--selected");
});


