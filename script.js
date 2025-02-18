const menu_toggle=document.querySelector('.menu-toggle');
const addToCart=document.querySelector('.Add-To-Cart');
  menu_toggle.addEventListener('click',function () {
    document.querySelector('.active').classList.toggle('header');
   
   
     })
  
  addToCart.addEventListener('click',function () {
      alert("Succefully Added To Cart");
  })   
     
document.addEventListener('copy',function () {
    alert("Stop stealing my content😂😂\nam talking to you😡");
})

