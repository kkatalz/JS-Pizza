function createPizzaCart(pizza) {
  const pizzaList = document.getElementById("pizza_list");

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
          <h3>${pizza.title}</h3>
          <h4>${pizza.type}</h4>
          <p>${getAllValuesSeparatedByComma(pizza.content)}</p>
          <div class="pizza-price-info">
          ${
            pizza.small_size
              ? `<div class="pizza-price-container">
            <p><img src="./assets/images/size-icon.svg" alt="size" /> ${pizza.small_size.size}</p>
            <p><img src="./assets/images/weight.svg" alt="weight" /> ${pizza.small_size.weight}</p>
            <h2>${pizza.small_size.price}</h2>
            <p>грн.</p>
            <button class="btn btn-warning btn-colorized">Купити</button>
          </div>`
              : ``
          }
            ${
              pizza.big_size
                ? `<div class="pizza-price-container">
              <p><img src="./assets/images/size-icon.svg" alt="size" /> ${pizza.big_size.size}</p>
              <p><img src="./assets/images/weight.svg" alt="weight" /> ${pizza.big_size.weight}</p>
              <h2>${pizza.big_size.price}</h2>
              <p>грн.</p>
              <button class="btn btn-warning btn-colorized">Купити</button>
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

function getAllValuesSeparatedByComma(obj) {
  const values = Object.values(obj).flat();
  console.log(values);
  return values.join(", ");
}
var pizza_info = [
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
    is_new: true,
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

pizza_info.forEach((pizza) => createPizzaCart(pizza));
