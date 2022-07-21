import { $productsElements } from "../database/index.js";

const $productsContainer = document.getElementById("container_products");

const badge = "$";

export const $renderProducts = () => {
  $productsContainer.textContent = "";
  for (const { id, name, img, price, cant, cat } of $productsElements) {
    const $struct = document.createElement("div");
    $struct.classList.add("struct_card");

    const $container = document.createElement("article");
    $container.classList.add("container_card");
    $container.classList.add(cat);

    const $containerImage = document.createElement("div");
    $containerImage.classList.add("container_image");

    const $image = document.createElement("img");
    $image.classList.add("image_card");
    $image.setAttribute("src", img);

    const $containerElement = document.createElement("div");
    $containerElement.classList.add("container_element");

    const $titled = document.createElement("h4");
    $titled.classList.add("title_card");
    $titled.textContent = name;

    const $price = document.createElement("h5");
    $price.classList.add("price_card");
    $price.textContent = `${badge} ${price}`;

    const $stock = document.createElement("span");
    $stock.classList.add("stock_card");
    $stock.textContent = "Stock " + cant;

    const $button = document.createElement("button");
    $button.classList.add("btn_card");
    $button.setAttribute("type", "button");
    $button.setAttribute("data-id", id);
    $button.textContent = "Add";

    $containerImage.appendChild($image);
    $container.appendChild($containerImage);
    $containerElement.appendChild($titled);
    $containerElement.appendChild($price);
    $containerElement.appendChild($stock);
    $containerElement.appendChild($button);
    $container.appendChild($containerElement);
    $struct.appendChild($container);
    $productsContainer.appendChild($struct);
  }
};
