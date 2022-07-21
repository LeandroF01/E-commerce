import { $productsElements } from "../database/index.js";

const $productsShoppin = document.getElementById("section_shoppin");
const $priceTotal = document.getElementById("priceTotal");
const $countCart = document.querySelector(".counter-shoper_cart");
let $shpingCart = [];
const badge = "$";

const $renderShoppinCart = () => {
  $productsShoppin.textContent = "";

  for (const article of $shpingCart) {
    const $productFilter = $productsElements.find(
      (products) => products.id === article.id
    );
    console.log($productFilter);

    const { id, name, img, price, cant } = $productFilter;

    const $container = document.createElement("article");
    $container.classList.add("container_shop");

    const $containerImage = document.createElement("div");
    $containerImage.classList.add("container_image-shop");

    const $image = document.createElement("img");
    $image.classList.add("image_shop");
    $image.setAttribute("src", img);

    const $containerElement = document.createElement("div");
    $containerElement.classList.add("container_element-shop");

    const $titled = document.createElement("h4");
    $titled.classList.add("title_shop");
    $titled.textContent = name;

    const $price = document.createElement("h5");
    $price.classList.add("price_shop");
    $price.textContent = `${badge} ${article.cant * price}`;

    const $stock = document.createElement("span");
    $stock.classList.add("cant_shop");
    $stock.textContent = article.cant;

    const $buttonClear = document.createElement("button");
    $buttonClear.classList.add("btn_shop-clear");
    $buttonClear.setAttribute("type", "button");
    $buttonClear.setAttribute("data-id", id);

    const $iconButton = document.createElement("i");
    $iconButton.classList.add("fa-regular");
    $iconButton.classList.add("fa-trash-can");
    $iconButton.setAttribute("data-id", id);

    const $buttonRemoveOneElement = document.createElement("button");
    $buttonRemoveOneElement.classList.add("btn_shop-remove");
    $buttonRemoveOneElement.setAttribute("type", "button");
    $buttonRemoveOneElement.setAttribute("data-id", id);

    const $iconButtonMinus = document.createElement("i");
    $iconButtonMinus.classList.add("fa-solid");
    $iconButtonMinus.classList.add("fa-minus");
    $iconButtonMinus.setAttribute("data-id", id);

    const $buttonAddElement = document.createElement("button");
    $buttonAddElement.classList.add("btn_shop-add");
    $buttonAddElement.setAttribute("type", "button");
    $buttonAddElement.setAttribute("data-id", id);

    const $iconButtonPlus = document.createElement("i");
    $iconButtonPlus.classList.add("fa-solid");
    $iconButtonPlus.classList.add("fa-plus");
    $iconButtonPlus.setAttribute("data-id", id);

    $buttonClear.appendChild($iconButton);
    $buttonRemoveOneElement.appendChild($iconButtonMinus);
    $buttonAddElement.appendChild($iconButtonPlus);
    $containerImage.appendChild($image);
    $container.appendChild($containerImage);
    $containerElement.appendChild($titled);
    $containerElement.appendChild($price);
    $containerElement.appendChild($stock);
    $containerElement.appendChild($buttonClear);
    $containerElement.appendChild($buttonRemoveOneElement);
    $containerElement.appendChild($buttonAddElement);
    $container.appendChild($containerElement);
    $productsShoppin.appendChild($container);

    $priceTotal.innerHTML = $totalPrice();
    $countCart.innerHTML = $totalShop();
  }
};

const $addElement = (id, cant) => {
  const $elementFilter = $productsElements.find((product) => product.id === id);

  if ($elementFilter && $elementFilter.cant > 0) {
    const $articleFilter = $shpingCart.find((article) => article.id === id);

    if ($articleFilter) {
      if ($Inventory(id, cant + $articleFilter.cant)) {
        $articleFilter.cant += cant;
      } else {
        Swal.fire({
          icon: "info",
          text: "Not enough in stock",
        });
      }
    } else {
      $shpingCart.push({ id, cant });
    }
  } else {
    Swal.fire({
      icon: "info",
      text: "Sorry, out of stock",
    });
  }
};

const $removeElement = (id, cant) => {
  const $articleFilter = $shpingCart.find((product) => product.id === id);

  if ($articleFilter.cant - cant > 0) {
    $articleFilter.cant -= cant;
  } else {
    const $confirm = Swal.fire({
      icon: "question",
      text: "Are you sure you want to remove the item?",
    });
    if ($confirm) {
      $shpingCart = $shpingCart.filter((article) => article.id !== id);
    }
  }
};

const $clearAll = (id) => {
  $shpingCart = $shpingCart.filter((article) => article.id !== id);
};

const $Inventory = (id, cant) => {
  const $elementFilter = $productsElements.find((product) => product.id === id);

  return $elementFilter.cant - cant >= 0;
};

const $totalPrice = () => {
  let $total = 0;
  for (const article of $shpingCart) {
    const $productFilter = $productsElements.find(
      (products) => products.id === article.id
    );
    $total += article.cant * $productFilter.price;
  }
  return `${$total}`;
};
const $totalShop = () => {
  let $total = 0;
  for (const article of $shpingCart) {
    const $productFilter = $productsElements.find(
      (products) => products.id === article.id
    );
    $total += article.cant;
  }
  return $total;
};

const $clearShopping = () => {
  $shpingCart = [];
};

const $buyElements = () => {
  for (const article of $shpingCart) {
    const $productFilter = $productsElements.find(
      (products) => products.id === article.id
    );
    $productFilter.cant -= article.cant;
  }
  $clearShopping();
  Swal.fire({
    icon: "success",
    text: "Thanks for your purchase",
  });
};

export {
  $renderShoppinCart,
  $addElement,
  $removeElement,
  $clearAll,
  $clearShopping,
  $buyElements,
  $shpingCart,
};
