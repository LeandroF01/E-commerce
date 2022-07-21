import { $renderProducts } from "../js/components/products.js";
import {
  $renderShoppinCart,
  $addElement,
  $removeElement,
  $clearAll,
  $clearShopping,
  $buyElements,
  $shpingCart,
} from "../js/components/carrito.js";
import { $barsShop } from "./components/card-shop.js";

const $productsContainer = document.getElementById("container_products");
const $productsShoppin = document.getElementById("section_shoppin");
const $buttonsAccion = document.getElementById("btnsAccion");

document.addEventListener("DOMContentLoaded", () => {
  $renderProducts();
  $renderShoppinCart();
  $barsShop();

  $productsContainer.addEventListener("click", (e) => {
    const $target = e.target;
    if ($target.classList.contains("btn_card")) {
      const id = $target.dataset.id;
      $addElement(+id, 1);
    }
    $renderShoppinCart();
  });

  $productsShoppin.addEventListener("click", (e) => {
    const $target = e.target;
    if ($target.classList.contains("btn_shop-add")) {
      const id = $target.dataset.id;
      $addElement(+id, 1);
    }
    if ($target.classList.contains("btn_shop-remove")) {
      const id = $target.dataset.id;
      $removeElement(+id, 1);
    }
    if ($target.classList.contains("fa-trash-can")) {
      const id = $target.dataset.id;
      $clearAll(+id);
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
        Swal.fire({
          icon: "error",
          text: "There are no items in the cart, please add a few",
        });
      }
    }
    $renderShoppinCart();
  });
});
