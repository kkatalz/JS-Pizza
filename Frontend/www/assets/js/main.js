const pizza_info = [
  {
    id: 1,
    icon: "assets/images/pizza_7.jpg",
    title: "Імпреза",
    type: "М’ясна піца",
    content: {
      meat: ["балик", "салямі"],
      chicken: ["куриця"],
      cheese: ["сир моцарелла", "сир рокфорд"],
      pineapple: ["ананаси"],
      additional: ["томатна паста", "петрушка"],
    },
    small_size: {
      weight: 370,
      size: 30,
      price: 99,
    },
    big_size: {
      weight: 660,
      size: 40,
      price: 169,
    },
    is_new: true,
    is_popular: true,
  },
  {
    id: 2,
    icon: "assets/images/pizza_2.jpg",
    title: "BBQ",
    type: "М’ясна піца",
    content: {
      meat: ["мисливські ковбаски", "ковбаски папероні", "шинка"],
      cheese: ["сир домашній"],
      mushroom: ["шампінйони"],
      additional: ["петрушка", "оливки"],
    },
    small_size: {
      weight: 460,
      size: 30,
      price: 139,
    },
    big_size: {
      weight: 840,
      size: 40,
      price: 199,
    },
    is_popular: true,
  },
  {
    id: 3,
    icon: "assets/images/pizza_1.jpg",
    title: "Міксовий поло",
    type: "М’ясна піца",
    content: {
      meat: ["вітчина", "куриця копчена"],
      cheese: ["сир моцарелла"],
      pineapple: ["ананаси"],
      additional: ["кукурудза", "петрушка", "соус томатний"],
    },
    small_size: {
      weight: 430,
      size: 30,
      price: 115,
    },
    big_size: {
      weight: 780,
      size: 40,
      price: 179,
    },
  },
  {
    id: 4,
    icon: "assets/images/pizza_5.jpg",
    title: "Сициліано",
    type: "М’ясна піца",
    content: {
      meat: ["вітчина", "салямі"],
      cheese: ["сир моцарелла"],
      mushroom: ["шампінйони"],
      additional: ["перець болгарський", "соус томатний"],
    },
    small_size: {
      weight: 450,
      size: 30,
      price: 111,
    },
    big_size: {
      weight: 790,
      size: 40,
      price: 169,
    },
  },
  {
    id: 17,
    icon: "assets/images/pizza_3.jpg",
    title: "Маргарита",
    type: "Вега піца",
    content: {
      cheese: ["сир моцарелла", "сир домашній"],
      tomato: ["помідори"],
      additional: ["базилік", "оливкова олія", "соус томатний"],
    },
    small_size: {
      weight: 370,
      size: 30,
      price: 89,
    },
  },
  {
    id: 43,
    icon: "assets/images/pizza_6.jpg",
    title: "Мікс смаків",
    type: "М’ясна піца",
    content: {
      meat: ["ковбаски"],
      cheese: ["сир моцарелла"],
      mushroom: ["шампінйони"],
      pineapple: ["ананаси"],
      additional: ["цибуля кримська", "огірки квашені", "соус гірчичний"],
    },
    small_size: {
      weight: 470,
      size: 30,
      price: 115,
    },
    big_size: {
      weight: 780,
      size: 40,
      price: 180,
    },
  },
  {
    id: 90,
    icon: "assets/images/pizza_8.jpg",
    title: "Дольче Маре",
    type: "Морська піца",
    content: {
      ocean: [
        "криветки тигрові",
        "мідії",
        "ікра червона",
        "філе червоної риби",
      ],
      cheese: ["сир моцарелла"],
      additional: ["оливкова олія", "вершки"],
    },
    big_size: {
      weight: 845,
      size: 40,
      price: 399,
    },
  },
  {
    id: 6,
    icon: "assets/images/pizza_4.jpg",
    title: "Россо Густо",
    type: "Морська піца",
    content: {
      ocean: ["ікра червона", "лосось копчений"],
      cheese: ["сир моцарелла"],
      additional: ["оливкова олія", "вершки"],
    },
    small_size: {
      weight: 400,
      size: 30,
      price: 189,
    },
    big_size: {
      weight: 700,
      size: 40,
      price: 299,
    },
  },
];
// local storage
let storedOrderList = JSON.parse(localStorage.getItem("orderList"));
let storedFilterPosition = JSON.parse(localStorage.getItem("filter"));

let orderListItems = storedOrderList ? [...storedOrderList] : [];

function saveToLocalStorage() {
  localStorage.setItem("orderList", JSON.stringify(orderListItems));
}
function saveFilterToLocalStorage(filter) {
  localStorage.setItem("filter", JSON.stringify(filter));
}
// filters
const filterElements = document.querySelector(".main-pizza-filters");
filterElements.addEventListener("click", filterPizza);

function filterPizza(event) {
  const filters = document.querySelectorAll(".main-pizza-filter");
  filters.forEach((element) => {
    element.classList.remove("active");
  });
  event.target.classList.add("active");
  const filterText = event.target.innerText;
  pizzaList.innerHTML = "";

  if (filterText === "М'ясні") {
    addPizzasToPanel(
      pizza_info.filter((pizza) => pizza.type === "М’ясна піца")
    );
    saveFilterToLocalStorage("М'ясні");
  } else if (filterText === "З ананасами") {
    addPizzasToPanel(pizza_info.filter((pizza) => pizza.content.pineapple));
    saveFilterToLocalStorage("З ананасами");
  } else if (filterText === "З грибами") {
    addPizzasToPanel(pizza_info.filter((pizza) => pizza.content.mushroom));
    saveFilterToLocalStorage("З грибами");
  } else if (filterText === "З морепродуктами") {
    addPizzasToPanel(
      pizza_info.filter((pizza) => pizza.type === "Морська піца")
    );
    saveFilterToLocalStorage("З морепродуктами");
  } else if (filterText === "Вега") {
    addPizzasToPanel(pizza_info.filter((pizza) => pizza.type === "Вега піца"));
    saveFilterToLocalStorage("Вега");
  } else {
    addPizzasToPanel(pizza_info);
    saveFilterToLocalStorage("");
  }
}

const handleFilterAmount = (number) => {
  const filtersAmount = document.querySelector(".pizza-title-amount");

  filtersAmount.innerHTML = number;
};

// panel with pizza
const pizzaList = document.getElementById("pizza_list");
function createPizzaCart(pizza) {
  const cartItem = `
    <div class="col-sm-6 col-md-4">
      <div class="thumbnail pizza-card">
        <img src="${pizza.icon}" class="pizza-card-img" />
        ${
          pizza.is_popular
            ? `<div class="pizza-badge green-badge">Популярна</div>`
            : ``
        }
        ${
          pizza.is_new && !pizza.is_popular
            ? `<div class="pizza-badge ">Нова</div>`
            : ``
        }
        ${
          pizza.is_new && pizza.is_popular
            ? `<div class="pizza-badge second-badge">Нова</div> `
            : ``
        }
        <div class="caption">
          <h3 class="pizza-title">${pizza.title}</h3>
          <h4>${pizza.type}</h4>
          <p>${getAllValuesSeparatedByComma(pizza.content)}</p>
          <div class="pizza-price-info">
          ${
            pizza.small_size
              ? `<div class="pizza-price-container">
            <p id="pizza-small-size"><img src="./assets/images/size-icon.svg" alt="size"  /> ${pizza.small_size.size}</p>
            <p id="pizza-small-weight"><img src="./assets/images/weight.svg" alt="weight"  /> ${pizza.small_size.weight}</p>
            <h2 id="pizza-small-price">${pizza.small_size.price}</h2>
            <p>грн.</p>
            <button id="buy-small-pizza" class="btn btn-warning btn-colorized">Купити</button>
          </div>`
              : ``
          }
            ${
              pizza.big_size
                ? `<div class="pizza-price-container">
              <p id="pizza-big-size" ><img src="./assets/images/size-icon.svg" alt="size" /> ${pizza.big_size.size}</p>
              <p id="pizza-big-weight"><img src="./assets/images/weight.svg" alt="weight" /> ${pizza.big_size.weight}</p>
              <h2 id="pizza-big-price">${pizza.big_size.price}</h2>
              <p>грн.</p>
              <button id="buy-big-pizza" class="btn btn-warning btn-colorized">Купити</button>
            </div>`
                : ``
            }
          </div>
        </div>
      </div>
    </div>
  `;

  pizzaList.innerHTML += cartItem;
}
// add pizza to basket
function addToBasket() {
  document.addEventListener("click", (event) => {
    if (
      (event.target && event.target.id === "buy-small-pizza") ||
      event.target.id === "buy-big-pizza"
    ) {
      const id = event.target.id;

      const pizzaTitles = document.querySelectorAll(".pizza-list-item-title");
      pizzaTitles.forEach((titleElement) => {
        titleElement.innerText;
      });

      const parentNode = event.target.closest(".col-sm-6");
      const pizzaImgElement = parentNode.querySelector(".pizza-card-img");
      const pizzaTitleElement = parentNode.querySelector(".pizza-title");
      const pizzaSizeElement =
        id === "buy-small-pizza"
          ? parentNode.querySelector("#pizza-small-size")
          : parentNode.querySelector("#pizza-big-size");

      const pizzaWeightElement =
        id === "buy-small-pizza"
          ? parentNode.querySelector("#pizza-small-weight")
          : parentNode.querySelector("#pizza-big-weight");

      const pizzaPriceElement =
        id === "buy-small-pizza"
          ? parentNode.querySelector("#pizza-small-price")
          : parentNode.querySelector("#pizza-big-price");

      const imageSrc = pizzaImgElement.getAttribute("src");
      const pizzaTitle = pizzaTitleElement.innerText;
      const pizzaSize = pizzaSizeElement.innerText;
      const pizzaWeight = pizzaWeightElement.innerText;
      const pizzaPrice = pizzaPriceElement.innerText;

      const wholePizzaTitle = `${pizzaTitle} (${
        id === "buy-small-pizza" ? "Мала" : "Велика"
      })`;

      const pizzaTitlesArray = document.querySelectorAll(
        ".pizza-list-item-title"
      );

      let isAlreadyInOrder = false;

      pizzaTitlesArray.forEach((titleElement) => {
        if (titleElement.innerText === wholePizzaTitle) {
          isAlreadyInOrder = true;
          const amountContainer =
            titleElement.nextElementSibling.nextElementSibling;
          const amountElement = amountContainer.querySelector("#pizza-amount");

          //recalculate single pizza price
          const pizzaPriceContainer =
            amountElement.previousElementSibling.previousElementSibling;
          const pizzaPriceText = pizzaPriceContainer.querySelector("span");

          console.log(pizzaPriceText);
          pizzaPriceText.innerText =
            parseInt(pizzaPriceText.innerText) +
            parseInt(pizzaPriceText.innerText) /
              parseInt(amountElement.innerText);

          amountElement.innerText = parseInt(amountElement.innerText) + 1;

          orderListItems = orderListItems.map((item) =>
            item.title === wholePizzaTitle
              ? { ...item, amount: item.amount + 1 }
              : item
          );
          saveToLocalStorage();
        }
      });

      const pizzaAmount = 1;

      const pizzaReceipt = document.getElementById("receipt-to-pay");
      pizzaReceipt.innerText =
        parseInt(pizzaReceipt.innerText) + parseInt(pizzaPrice);

      if (!isAlreadyInOrder) {
        orderListItems.push({
          title: wholePizzaTitle,
          size: pizzaSize,
          weight: parseInt(pizzaWeight),
          amount: parseInt(pizzaAmount),
          price: parseInt(pizzaPrice),
          imageSrc: imageSrc,
        });

        saveToLocalStorage();
        //count pizzas in order list
        const pizzasAmount = document.getElementById("order-list-pizza-amount");
        pizzasAmount.innerText++;

        const pizzaCardInOrder = `
        <div class="pizza-list-item">
            <img class="pizza-list-item-image" src="${imageSrc}" />
            <h4 class="pizza-list-item-title">${wholePizzaTitle}</h4>
            <div class="pizza-list-item-icons">
            <p><img src="./assets//images//size-icon.svg" alt="size" />${pizzaSize}</p>
              <p><img src="./assets/images/weight.svg" alt="weight" />${pizzaWeight}</p>
            </div>
            <div class="pizza-list-item-price_amount">
            <h3><span id="pizza-item-price">${pizzaPrice}</span>грн</h3>
              <button class="pizza-list-item-add_delete" id="decrease-pizza" type="button">-</button>
              <h3 id="pizza-amount">${pizzaAmount}</h3>
              <button class="pizza-list-item-add_delete green" id="increase-pizza" type="button">
                +
              </button>
              <button class="pizza-list-item-add_delete delete" id="remove-pizza" type="button">
              +
              </button>
              </div>
      </div>
      `;
        const pizzaListOrder = document.getElementById("pizza-list-order");
        pizzaListOrder.innerHTML += pizzaCardInOrder;
      }
    }
  });
}

function getAllValuesSeparatedByComma(obj) {
  const values = Object.values(obj).flat();
  console.log(values);
  return values.join(", ");
}

// increase / decrease amount in pizza list order
function handlePizzaAmount() {
  document.addEventListener("click", (event) => {
    if (
      (event.target && event.target.id === "increase-pizza") ||
      event.target.id === "decrease-pizza"
    ) {
      const parentNode = event.target.closest(".pizza-list-item");

      const pizzaTitle = parentNode.querySelector(
        ".pizza-list-item-title"
      ).innerText;

      if (event.target && event.target.id === "decrease-pizza") {
        const pizzaAmount = event.target.nextElementSibling.innerText;

        //recalculate pizza's receipt
        const pizzaPriceContainer = event.target.previousElementSibling;
        console.log(pizzaPriceContainer);
        const pizzaPrice = pizzaPriceContainer.querySelector("span");

        const pizzaReceipt = document.getElementById("receipt-to-pay");
        pizzaReceipt.innerText =
          parseInt(pizzaReceipt.innerText) -
          parseInt(pizzaPrice.innerText) / parseInt(pizzaAmount);

        if (pizzaAmount != 1) {
          event.target.nextElementSibling.innerText = parseInt(pizzaAmount) - 1;

          orderListItems = orderListItems.map((item) =>
            item.title === pizzaTitle
              ? { ...item, amount: parseInt(item.amount) - 1 }
              : item
          );
          saveToLocalStorage();
        } else {
          parentNode.remove();

          orderListItems = orderListItems.filter(
            (item) => item.title !== pizzaTitle
          );
          saveToLocalStorage();
          const pizzasAmount = document.getElementById(
            "order-list-pizza-amount"
          );
          pizzasAmount.innerText--;
        }

        //calculate single pizza's price (189*3)

        pizzaPrice.innerText =
          parseInt(pizzaPrice.innerText) -
          parseInt(pizzaPrice.innerText) / parseInt(pizzaAmount);
      } else {
        const pizzaAmount = event.target.previousElementSibling.innerText;
        event.target.previousElementSibling.innerText =
          parseInt(pizzaAmount) + 1;

        //calculate single pizza's price (189*3)
        const pizzaPriceContainer =
          event.target.previousElementSibling.previousElementSibling
            .previousElementSibling;
        console.log(pizzaPriceContainer);
        const pizzaPrice = pizzaPriceContainer.querySelector("span");

        //recalculate pizza's receipt
        const pizzaReceipt = document.getElementById("receipt-to-pay");
        pizzaReceipt.innerText =
          parseInt(pizzaReceipt.innerText) +
          parseInt(pizzaPrice.innerText) / parseInt(pizzaAmount);

        console.log(parseInt(pizzaAmount));
        console.log(parseInt(pizzaPrice.innerText));
        pizzaPrice.innerText =
          parseInt(pizzaPrice.innerText) +
          parseInt(pizzaPrice.innerText) / parseInt(pizzaAmount);

        //save to local storage
        orderListItems = orderListItems.map((item) =>
          item.title === pizzaTitle
            ? { ...item, amount: parseInt(item.amount) + 1 }
            : item
        );
        saveToLocalStorage();
      }
    }
  });
}

// remove pizza from order list
function handleRemovingPizza() {
  document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "remove-pizza") {
      const parentNode = event.target.closest(".pizza-list-item");
      const pizzaTitle = parentNode.querySelector(
        ".pizza-list-item-title"
      ).innerText;
      console.log(pizzaTitle);
      parentNode.remove();
      const pizzasAmount = document.getElementById("order-list-pizza-amount");
      pizzasAmount.innerText--;

      //recalculate pizza's receipt
      const pizzaPrice =
        event.target.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling.innerText;
      const pizzaAmount =
        event.target.previousElementSibling.previousElementSibling.innerText;
      const pizzaReceipt = document.getElementById("receipt-to-pay");

      pizzaReceipt.innerText =
        parseInt(pizzaReceipt.innerText) - parseInt(pizzaPrice);

      orderListItems = orderListItems.filter(
        (item) => item.title !== pizzaTitle
      );
      saveToLocalStorage();
    }
  });
}

// to add and count pizzas
function addPizzasToPanel(pizzaList) {
  pizzaList.forEach((pizza) => createPizzaCart(pizza));
  handleFilterAmount(pizzaList.length);
}

//clear order list
function clearOrderList() {
  const clearOrderList = document.querySelector(".clear");
  clearOrderList.addEventListener("click", () => {
    const parentElement = document.getElementById("pizza-list-order");
    while (parentElement.hasChildNodes()) {
      parentElement.removeChild(parentElement.firstChild);
    }
    const pizzasAmount = document.getElementById("order-list-pizza-amount");
    pizzasAmount.innerText = 0;

    //recalculate pizza's receipt
    const pizzaReceipt = document.getElementById("receipt-to-pay");
    pizzaReceipt.innerText = 0;

    orderListItems = [];
    saveToLocalStorage();
  });
}

function initialCardRender() {
  const pizzaListOrder = document.getElementById("pizza-list-order");
  const pizzaOrderAmount = document.getElementById("order-list-pizza-amount");

  const pizzaReceipt = document.getElementById("receipt-to-pay");

  orderListItems.forEach((pizza) => {
    const pizzaCardInOrder = `
        <div class="pizza-list-item">
            <img class="pizza-list-item-image" src="${pizza.imageSrc}" />
            <h4 class="pizza-list-item-title">${pizza.title}</h4>
            <div class="pizza-list-item-icons">
            <p><img src="./assets//images//size-icon.svg" alt="size" />${
              pizza.size
            }</p>
              <p><img src="./assets/images/weight.svg" alt="weight" /> ${
                pizza.weight
              }</p>
            </div>
            <div class="pizza-list-item-price_amount">
            <h3><span id="pizza-item-price">${
              pizza.price * pizza.amount
            }</span>грн</h3>
              <button class="pizza-list-item-add_delete" id="decrease-pizza" type="button">-</button>
              <h3 id="pizza-amount">${pizza.amount}</h3>
              <button class="pizza-list-item-add_delete green" id="increase-pizza" type="button">
                +
              </button>
              <button class="pizza-list-item-add_delete delete" id="remove-pizza" type="button">
              +
              </button>
              </div>
      </div>
      `;
    pizzaListOrder.innerHTML += pizzaCardInOrder;

    pizzaReceipt.innerText =
      parseInt(pizzaReceipt.innerText) + pizza.price * pizza.amount;
  });
  pizzaOrderAmount.innerText = orderListItems.length;
}

function initialFilterRender() {
  const filters = document.querySelectorAll(".main-pizza-filter");
  filters.forEach((element) => {
    element.classList.remove("active");
  });

  filterText = storedFilterPosition || "";

  if (filterText === "М'ясні") {
    addPizzasToPanel(
      pizza_info.filter((pizza) => pizza.type === "М’ясна піца")
    );
    filters[1].classList.add("active");
  } else if (filterText === "З ананасами") {
    addPizzasToPanel(pizza_info.filter((pizza) => pizza.content.pineapple));
    filters[2].classList.add("active");
  } else if (filterText === "З грибами") {
    addPizzasToPanel(pizza_info.filter((pizza) => pizza.content.mushroom));
    filters[3].classList.add("active");
  } else if (filterText === "З морепродуктами") {
    addPizzasToPanel(
      pizza_info.filter((pizza) => pizza.type === "Морська піца")
    );
    filters[4].classList.add("active");
  } else if (filterText === "Вега") {
    addPizzasToPanel(pizza_info.filter((pizza) => pizza.type === "Вега піца"));
    filters[5].classList.add("active");
  } else {
    addPizzasToPanel(pizza_info);
    filters[0].classList.add("active");
  }
}

initialCardRender();

addToBasket();
handlePizzaAmount();
handleRemovingPizza();
clearOrderList();

initialFilterRender();
