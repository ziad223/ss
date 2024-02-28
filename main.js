// search-nav
document.querySelector(".search-icon").onclick = function(){
   document.querySelector(".nav-search").classList.add("open")
}
document.querySelector(".close-search").onclick = function(){
    document.querySelector(".nav-search").classList.remove("open")
}
// user-nav
document.querySelector(".user-icon").onclick = function(){
    document.querySelector('.user-nav').classList.add('open')
}
document.querySelector(".close-user").onclick = function(){
    document.querySelector('.user-nav').classList.remove('open')
}

// home swiper

const swiper = new Swiper('.home-parent', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay : true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


//   dosplayProduct

let p = ''
    products.map(function(product){
       p += `
       <div class="product">
       <img src=${product.img} alt="">
       <h2>${product.title}</h2>
       <h3>Price : ${product.price}$</h3>
       <button>Add To Cart</button>
    </div>
       ` 
       document.querySelector(".products-content").innerHTML = p
    })

    // Testimonails Slider

    const swiperr = new Swiper('.testimonails-flex', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay : true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    