window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreLoader'));

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
        makeCar('e-type', 'Britain', 'img/testjag.jpg', false, '2015', '1,000,000', 'sports', 'manual', '15');
        makeCar('e-type', 'Britain', 'img/testjag.jpg', false, '2016', '2,000,000', 'sports', 'auto', '20');
        makeCar('e-type', 'Britain', 'img/testjag.jpg', false, '2018', '3,000,000', 'sports', 'manual', '30');
        makeCar('e-type', 'Britain', 'img/testjag.jpg', false, '2017', '4,000,000', 'sports', 'auto', '17');
        makeCar('e-type', 'Britain', 'img/testjag.jpg', false, '2019', '5,000,000', 'sports', 'manual', '16');
        makeCar('e-type', 'Britain', 'img/testjag.jpg', false, '2020', '6,000,000', 'sports', 'auto', '19');

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


        console.log(event.target);
        // if clicked within a div
        if (event.target.classList.contains('featured-item')) {
            const img = event.target.firstElementChild.dataset.img;

            $('#picture').attr('src', img);
        } else if (event.target.classList.contains('head-text')) {
            const img = event.target.parentElement.firstElementChild.dataset.img;
            console.log(img);
            $('#picture').attr('src', img);
            // console.log('yey');
        } else {
            const img = event.target.parentElement.dataset.img;
            $('#picture').attr('src', img);
        }


    })




})(CreateCars);



const displayCars = ((CreateCars) => {
    const cars = CreateCars.cars;
    const regCar = CreateCars.regCars;
    console.log(regCar);
    // car container
    const inventory = document.querySelector('.inventory-container');

    const inventorySort = document.querySelector('.filter-button-group');
    // console.log(inventory);

    document.addEventListener('DOMContentLoaded', () => {





        inventory.innerHTML = '';
        let output = '';
        regCar.forEach((car) => {
            output += `     <div class="col-12 mx-auto my-3 col-md-6 col-lg-4 ${car.trans} single-car">
        <div class="card car-card">
            <img src="${car.img}" alt="jag1" class="card-img-top car-img">
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
            console.log($grid);


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
