const $toggle = document.getElementById("shoppimg_cart-a");
const $shopOpen = document.getElementById("section-container_open");
const $shopClose = document.getElementById("section-container_close");

export const $barsShop = () => {
  if ($shopOpen) {
    $shopOpen.addEventListener("click", () => {
      $toggle.classList.toggle("containerShop");
    });
  }

  if ($shopClose) {
    $shopClose.addEventListener("click", () => {
      $toggle.classList.remove("containerShop");
    });
  }
};
