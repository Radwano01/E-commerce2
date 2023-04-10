const wrapper = document.querySelector(".sliderwrapper");
const menuitems =document.querySelectorAll(".menuitem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "air.png",
      },
      {
        code: "darkblue",
        img: "air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "jordan.png",
      },
      {
        code: "green",
        img: "jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "blazer.png",
      },
      {
        code: "green",
        img: "blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "crater.png",
      },
      {
        code: "lightgray",
        img: "crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "hippie.png",
      },
      {
        code: "black",
        img: "hippie2.png",
      },
    ],
  },
];

let choosenproduct = products[0]

const currentproductimg = document.querySelector(".productimg");
const currentproducttitle = document.querySelector(".producttitle");
const currentproductprice = document.querySelector(".productprice");
const currentproductcolors = document.querySelectorAll(".color");
const currentproductsizes = document.querySelectorAll(".size");



menuitems.forEach((item,index) => {
    item.addEventListener("click", ()=>{
      //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenproduct = products[index]

        //change texts of currentproduct
        currentproducttitle.textContent = choosenproduct.title;
        currentproductprice.textContent = "$" + choosenproduct.price;
        currentproductimg.src = choosenproduct.colors[0].img;


        //assing the colors
        currentproductcolors.forEach((color, index) => {
          color.style.backgroundColor = choosenproduct.colors[index].code;
        })
    });
});


currentproductcolors.forEach((color,index) =>{
  color.addEventListener("click", () =>{
    currentproductimg.src = choosenproduct.colors[index].img
  })
})


currentproductsizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentproductsizes.forEach((size)=> {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  })
})


const productbutton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbutton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
