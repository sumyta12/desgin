// <div class="col-3">
//   <div class="cards_el">
//     <div class="top_info d-flex justify-content-between">
//       <span>
//         <i class="fas fa-heart"></i>
//         <small class="text-white"> 14</small>
//       </span>
//       <span>
//         <i class="fas fa-sort"></i>
//         <small class="text-white"> 1.00</small>
//       </span>
//     </div>
//     <div class="img_cover">
//       <img src="https://iteck-html.themescamp.com/assets/img/projects/nf1.png" />
//     </div>
//     <div class="info">
//       <small>
//         Highest bid
//         <span>6/50</span>
//       </small>
//       <h5>Pakora Vision #190</h5>
//       <div class="btm-inf d-flex justify-content-between mt-3">
//         <p>
//           <i class="fa-solid fa-users"></i>
//           <span>10+ Place Bit</span>
//         </p>
//         <p>
//           <i class="fa-solid fa-clock-rotate-left"></i>
//           <span>History</span>
//         </p>
//       </div>
//     </div>
//   </div>
// </div>;

const cards_items = [
  {
    id: 1,
    img: "https://iteck-html.themescamp.com/assets/img/projects/nf1.png",
    name: "Pakora Vision",
    category: "Art",
  },
  {
    id: 2,
    img: "https://iteck-html.themescamp.com/assets/img/projects/nf2.png",
    name: "Cyber Punk",
    category: "Virtual Worlds",
  },
  {
    id: 3,
    img: "https://iteck-html.themescamp.com/assets/img/projects/nf3.png",
    name: "Cyber Hunter",
    category: "Virtual Worlds",
  },
  {
    id: 4,
    img: "https://iteck-html.themescamp.com/assets/img/projects/nf4.png",
    name: "Creed Mirage",
    category: "Photography",
  },
  {
    id: 5,
    img: "https://iteck-html.themescamp.com/assets/img/projects/nf5.png",
    name: "Creed Mirage",
    category: "Photography",
  },
  {
    id: 6,
    img: "https://iteck-html.themescamp.com/assets/img/projects/nf6.png",
    name: "Creed Mirage",
    category: "Virtual Worlds",
  },
  {
    id: 7,
    img: "https://iteck-html.themescamp.com/assets/img/projects/nf7.png",
    name: "Creed Mirage",
    category: "Virtual Worlds",
  },
  {
    id: 8,
    img: "https://iteck-html.themescamp.com/assets/img/projects/nf8.png",
    name: "Creed Mirage",
    category: "Art",
  },
];
const feedbackpeople = [
  {
    id: 1,
    img: "https://iteck-html.themescamp.com/assets/img/team/1.jpeg",
    price: "12,000",
  },
  {
    id: 2,
    img: "https://iteck-html.themescamp.com/assets/img/team/2.jpeg",
    price: "8,000",
  },
  {
    id: 3,
    img: "https://iteck-html.themescamp.com/assets/img/team/1.jpeg",
    price: "1,000",
  },
  {
    id: 4,
    img: "https://iteck-html.themescamp.com/assets/img/team/1.jpeg",
    price: "1,000",
  },
  {
    id: 5,
    img: "https://iteck-html.themescamp.com/assets/img/team/1.jpeg",
    price: "1,000",
  },
  {
    id: 6,
    img: "https://iteck-html.themescamp.com/assets/img/team/1.jpeg",
    price: "1,000",
  },
  {
    id: 7,
    img: "https://iteck-html.themescamp.com/assets/img/team/1.jpeg",
    price: "1,000",
  },
];
window.addEventListener("DOMContentLoaded", function () {
  cardistDisplay(cards_items);
  feedbackpeopleDisplay(feedbackpeople);
});
function feedbackpeopleDisplay(items) {
  const dispay = items
    .map(function (item) {
      return `
      <div class="col-lg-3 col-3">
      <div class="feature-card">
      <div class="img">
       <img src=${item.img}>
      </div>
      <div class="info ms-3">
       <h2> SnoopDogg </h2>
       <p> Rise: <span> ${item.price} </span></p>
      </div>
    </div>
    </div>
    `;
    })
    .join(" ");

  const BestSellerscarts = document.querySelector(".BestSellerscarts");
  BestSellerscarts.innerHTML = dispay;
}
function cardistDisplay(items) {
  const dispay = items
    .map(function (item) {
      return `
    <div class="col-lg-3 mt-3">
     <div class="cards_el">
      <div class="top_info d-flex justify-content-between">
          <span>
          <i class="fas fa-heart"></i>
          <small class="text-white"> 14</small>
         </span>
      <span>
        <i class="fas fa-sort"></i>
        <small class="text-white"> 1.00</small>
      </span>
    </div>
    <div class="img_cover position-relative">
      <img class="position-relative" src=${item.img}>
      <a class=" hover-shadow text-danger"  href="#">
      <span>
      <i class="fa-solid fa-basket-shopping"></i>
      Buy Now
      </span>
      </a>
    </div>
    <div class="info">
      <small>
        Highest bid
        <span>6/50</span>
      </small>
      <h5>${item.name} #190</h5>
      <div class="btm-inf d-flex justify-content-between mt-3">
        <p>
          <i class="fa-solid fa-users"></i>
          <span>10+ Place Bit</span>
        </p>
        <p>
          <i class="fa-solid fa-clock-rotate-left"></i>
          <span>History</span>
        </p>
        </div>
        </div>
    </div>
    </div>
    `;
    })
    .join(" ");

  const card_row = document.querySelector("#card_row");
  card_row.innerHTML = dispay;
}

function buttonDisplay(items) {
  const new_array = ["All Categories"];
  const button_el = items.filter(function (item) {
    if (!new_array.includes(item.category)) {
      new_array.push(item.category);
      return item;
    }
  });

  const btnitems = new_array
    .map(function (item) {
      return `
    <button>
    <i class="fa-sharp fa-solid fa-star"></i>${item}
    </button>
    `;
    })
    .join(" ");
  const button_style = document.querySelector(".button_style");
  button_style.innerHTML = btnitems;
}
buttonDisplay(cards_items);
