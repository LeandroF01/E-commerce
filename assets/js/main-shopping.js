import {
  $renderShoppinCart,
  $addElement,
  $removeElement,
  $clearAll,
  $clearShopping,
  $buyElements,
  $shpingCart,
} from "./components/carrito.js";

const $productsShoppin = document.getElementById("section_shoppin");
const $buttonsAccion = document.getElementById("btnsAccion");
document.addEventListener("DOMContentLoaded", () => {
  $renderShoppinCart();

  $productsShoppin.addEventListener("click", (e) => {
    const $target = e.target;
    if ($target.classList.contains("btn_card-add")) {
      const id = $target.dataset.id;
      $addElement(+id, 1);
    }
    if ($target.classList.contains("btn_card-remove")) {
      const id = $target.dataset.id;
      $removeElement(+id, 1);
    }
    if ($target.classList.contains("btn_card-clear")) {
      const id = $target.dataset.id;
      $clearAll(+id, 1);
    }

    $renderShoppinCart();
  });

  $buttonsAccion.addEventListener("click", (e) => {
    const $target = e.target;
    if ($target.classList.contains("clear")) {
      $clearShopping();
    }

    if ($target.classList.contains("buy")) {
      if ($shpingCart.length > 0) {
        $buyElements();
        $renderProducts();
      } else {
        window.alert("There are no items in the cart, please add a few");
      }
    }
    $renderShoppinCart();
  });
});
