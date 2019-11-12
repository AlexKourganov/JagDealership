





// const sections = document.querySelectorAll(".watch-me");

// const options = {
//     root:null,// its the viewport
//     threshold: 0.7 //if 1 then 100% of item needs to be on the page
    
// };
// const observer = new IntersectionObserver((entries,observer)=>{
   
//     entries.forEach(entry => {
//         console.log("Called before if statements!");
//         console.log(!entry.isIntersecting);
//         if(!entry.isIntersecting){
           
//             if(entry.target.classList.contains("header")){
               
//                 document.getElementById("nav-home").classList.remove("nav-active");
               
                
//             }else if(entry.target.classList.contains("skills")){
                
//                 document.getElementById("nav-benefits").classList.remove("nav-active");
                
//             }else if(entry.target.classList.contains("inventory")){
                
//                 document.getElementById("nav-inventory").classList.remove("nav-active");
                
//             }else if(entry.target.classList.contains("featured")){
                
//                 document.getElementById("nav-featured").classList.remove("nav-active");
                
//             }else if(entry.target.classList.contains("gallery")){
                
//                 document.getElementById("nav-gallery").classList.remove("nav-active");
                
//             }else if(entry.target.classList.contains("services")){
                
//                 document.getElementById("nav-services").classList.remove("nav-active");
                
//             }else if(entry.target.classList.contains("reviews")){
                
//                 document.getElementById("nav-reviews").classList.remove("nav-active");
                
//             }
//             console.log(entry.target);
//             return;

//         }else if(entry.target.classList.contains("header")){
//             // document.querySelectorAll('.nav-active').classList.remove("nav-active");
//             document.getElementById("nav-home").classList.add("nav-active");
//             // entry.target.classList.add("nav-active");
           
//         }else if(entry.target.classList.contains("skills")){
            
//             document.getElementById("nav-benefits").classList.add("nav-active");
           
//         }else if(entry.target.classList.contains("inventory")){
            
//             document.getElementById("nav-inventory").classList.add("nav-active");
           
//         }else if(entry.target.classList.contains("featured")){
            
//             document.getElementById("nav-featured").classList.add("nav-active");
           
//         }else if(entry.target.classList.contains("gallery")){
            
//             document.getElementById("nav-gallery").classList.add("nav-active");
           
//         }else if(entry.target.classList.contains("services")){
            
//             document.getElementById("nav-services").classList.add("nav-active");
           
//         }else if(entry.target.classList.contains("reviews")){
            
//             document.getElementById("nav-reviews").classList.add("nav-active");
           
//         }
   
    
//     });
//     }, options); 
// sections.forEach(section => {
//     observer.observe(section);
// });

// Version v2



////////////////////////////
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