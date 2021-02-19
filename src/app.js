import 'styles/_app.scss';
import 'bootstrap';

$(function() {
  console.log('Ready!');

  require('scripts/demo');
})


//E-mail Ajax Send
$(".contact-page__form, .main__form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});





