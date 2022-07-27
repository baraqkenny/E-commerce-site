let boxTwoImage = document.querySelector('#boxTwoImage');





function openSlideMenu(){
   document.getElementById('side-menu').style.width = '250px';
   document.getElementById('main').style.marginLeft = '250px';

}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    
 }

 boxTwoImage .addEventListener('click', () => {
   console.log('added to cart')
})







