console.log('Demo!');



$('.header-btn div').click(()=>{
  if($('.header-sidebar').hasClass('active-sidebar')){
    $('.header-sidebar').removeClass('active-sidebar');
  } else{
    $('.header-sidebar').addClass('active-sidebar');
  }
});