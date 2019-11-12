// window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreLoader'));

// Special Cars
const CreateCars = (() => {
    const cars = [];

    // Car Class
    class Car {
        constructor(make, country, img, special, model, price, type, trans, gas) {
            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.trans = trans;
            this.gas = gas;
        }
    }

    // car create func
    function makeCar(make, country, img = 'img/special1935.jpg', special = true, model = 'new model', price = 50000, type = 'sports', trans = 'manual', gas = '15') {
        const car = new Car(make, country, img, special, model, price, type, trans, gas);
        cars.push(car);
    }

    // makeCar('chevy','American');
    // console.log(cars);
    function produceCars() {
        makeCar('ss100', 'Britain', 'img/special1935.jpg', true, '1935', '1,000,000', 'sports', 'manual', '5');
        makeCar('xk120', 'Britain', 'img/special1949.jpg', true, '1949', '500,000', 'sports', 'manual', '10');
        makeCar('c-type', 'Britain', 'img/special1952.jpg', true, '1952', '6,000,000', 'sports', 'manual', '5');
        makeCar('e-type', 'Britain', 'img/special1961.jpg', true, '1961', '3,000,000', 'sports', 'manual', '5');
        makeCar('e-type', 'Britain', 'img/special1972.jpg', true, '1972', '4,000,000', 'sports', 'manual', '5');
        makeCar('xj-type', 'Britain', 'jaguarxj', false, '2019', '75,000', 'sports', 'manual', '18');
        makeCar('f-type', 'Britain', 'jaguarf2020', false, '2020', '62,000', 'sports', 'auto', '23');
        makeCar('f-type', 'Britain', 'jaguarfpace', false, '2020', '46,000', 'offroad', 'manual', '27');
        makeCar('i-type', 'Britain', 'jaguaripace', false, '2020', '70,000', 'electric', 'auto', '234');
        makeCar('xf-type', 'Britain', 'jaguarxf', false, '2019', '65,000', 'offroad', 'manual', '25');
        makeCar('xe-type', 'Britain', 'jaguarxe', false, '2020', '40,000', 'sports', 'auto', '25');

    }
    produceCars();
    // Filter for specials
    const regCars = cars.filter(car => car.special === false);
    const specialCars = cars.filter(car => car.special === true);




    return {
        cars,
        specialCars,
        regCars
    }

})();

const displaySpecialCars = ((CreateCars) => {
    const specialCars = CreateCars.specialCars;



    const info = document.querySelector('.featured-info');
    //Document loaded
    document.addEventListener('DOMContentLoaded', () => {

        info.innerHTML = '';
        let data = '';
        specialCars.forEach(item => {
            data += `  <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap"
        id="${item.make}-${item.model}">
        <span data-img="${item.img}" class="featured-icon mr-2"><i class="fas fa-car"></i></span>
        <h5 class="font-weight-bold mx-1 head-text">${item.make}</h5>
        <h5 class="mx-1 head-text">${item.model}</h5>
        <h5 class="head-text ml-auto">${item.price} $</h5>
    </div>`
        });
        info.innerHTML = data;
    });

    // Change the image
    info.addEventListener('click', (event) => {

        
       
        // if clicked within a div
        if (event.target.classList.contains('featured-item')) {
            const img = event.target.firstElementChild.dataset.img;
            
            // console.log(event.target.firstElementChild.dataset);

            $('#picture').attr('src', img);
        } else if (event.target.classList.contains('head-text')) {
            const img = event.target.parentElement.firstElementChild.dataset.img;
            
            $('#picture').attr('src', img);
            // console.log('yey');
        } else {
            const img = event.target.parentElement.dataset.img;
            $('#picture').attr('src', img);
        }
        
 
    $('.featured-link').magnificPopup({
        items: {
          src: $('.special-car-img img').attr('src')
        },
        type: 'image' // this is default type
    });



    })



})(CreateCars);



const displayCars = ((CreateCars) => {
    const cars = CreateCars.cars;
    const regCar = CreateCars.regCars;
   
    // car container
    const inventory = document.querySelector('.inventory-container');

    const inventorySort = document.querySelector('.filter-button-group');
    // console.log(inventory);

    document.addEventListener('DOMContentLoaded', () => {





        inventory.innerHTML = '';
        let output = '';
        regCar.forEach((car) => {
            output += `<div class="col-12 mx-auto my-3 col-md-6 col-lg-4 ${car.trans} single-car">
        <div class="card car-card">
            <img src="img/jaguarbg-1920.jpg" data-src="img/${car.img}.jpg" alt="jag1" class="lazy card-img-top car-img popup-img" data-srcset="img/${car.img}.jpg 1920w, img/${car.img}-1500.jpg 1500w, img/${car.img}-1000.jpg 1000w, img/${car.img}-500.jpg 500w  ">
            <div class="card-body">
                <div class="car-info d-flex justify-content-between">
                    <!-- 1st child -->
                    <div class="car-text text-uppercase">
                        <h6 class="font-weight-bold">${car.make}</h6>
                        <h6>${car.model}</h6>
                    </div>
                    <!-- 2nd child -->
                    <h5 class="car-value align-self-center py-2 px-3">
                        $<span class="car-price">${car.price}</span>
                    </h5>
                </div>
            </div>
            <!-- card footer -->
            <div class="card-footer text-capitalize d-flex justify-content-between">
                <p><span><i class="fas fa-car"></i></span> ${car.type}</p>
                <p><span><i class="fas fa-cogs"></i></span> ${car.trans}</p>
                <p><span><i class="fas fa-gas-pump"></i></span> ${car.gas}</p>
            </div>
        </div>
    </div>`

        });


        // 
        inventorySort.addEventListener('click', (event) => {



            // if clicked within a div
            const filt = event.target.getAttribute('data-filter')


            $grid.isotope({
                filter: filt
            });
            


        })


        // 

        inventory.innerHTML = output;

        var $grid = $('.gridCars').isotope({
       

        });







    });



})(CreateCars);

// 
$(function () {
    $('div.gallery-container').magnificPopup({
        delegate: 'a',
        type: 'image'
    });
});
$('.gallery-item').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});

$('.featured-link').magnificPopup({
    items: {
      src: $('.special-car-img img').attr('src')
    },
    type: 'image' // this is default type
});









// 
    // Smooth Scroll
    $('.nav-item a,.header-link').click(function(link){
        link.preventDefault();
        let target = $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop:$(target).offset().top - 50
        },1500);
    });
// 

window.onload = function () {

    var $grid = $('.gridCars').isotope({

    });
};

// document.addEventListener("DOMContentLoaded", () => {
//     console.log('hello!')
    
//     const images = document.querySelectorAll("[data-src]");
  
//   const imgOptions ={
//       threshold: 0,
//       rootMargin:"0px 0px 300px 0px"
//   };
  
//   function preloadImage(img){
//      const src = img.getAttribute("data-src");
//      if(!src){
//          return;
//      }
//      img.src = src;
//   }
  
//   const imgObserver = new IntersectionObserver((entries,imgObserver)=>{
//   entries.forEach(entry => {
//       if(!entry.isIntersecting){
//           return;
//       }else{
//           preloadImage(entry.target);
//           imgObserver.unobserve(entry.target);
//       }
//   })
//   },imgOptions);
  
//   images.forEach(image => {
//       imgObserver.observe(image);
//   });
   
  
  
  
//   });
document.addEventListener("DOMContentLoaded", () => {
    const options = {
      root:null,// its the viewport
      threshold: 0, //if 1 then 100% of item needs to be on the page
      rootMargin: "-50px" 
  };
      var lazyImages =[].slice.call(
       document.querySelectorAll("img.lazy")
      )
      
      if ("IntersectionObserver" in window) {
         let lazyImageObserver = 
           new IntersectionObserver((entries, observer) => {
             entries.forEach(function(entry) {
               if (entry.isIntersecting) {
                 let lazyImage = entry.target;
                 lazyImage.src = lazyImage.dataset.src;
                 lazyImage.srcset = lazyImage.dataset.srcset;
                 lazyImage.classList.remove("lazy");
                 lazyImage.classList.add("appear");
                 lazyImageObserver.unobserve(lazyImage);
                 //console.log(lazyImages);
               }
             });
           },options);
     
         lazyImages.forEach(function(lazyImage) {
           lazyImageObserver.observe(lazyImage);
         });
       } else {
         // Possibly fall back to a more compatible method here
       }
     });


