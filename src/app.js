import "styles/_app.scss";
import "bootstrap";

$(function () {
  console.log("Ready!");

  require("scripts/demo");
});

//E-mail Ajax Send

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".contact-page__form, .main__form")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      let phone = document.querySelector(".phone-input").value;
      let service = document.querySelector(".form__select").value;
      let name = document.querySelector(".name-input").value;
      let message = document.querySelector(".message-input").value;

      console.log(name);

      phone = phone.replace(/[\s\-\(\)]/g, "");
      console.log(phone);
      console.log(service);

      if (phone.match(/^((\+?3)?8)?0\d{9}$/) != null) {
        sendEmail(phone, service, name, message);
      } else {
        alert("Пожалуйста, введите корректный номер телефона");
      }
    });

  //Send Email Data
  function sendEmail(phone, service, name, message) {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "master.nav.vse.ruki@gmail.com",
      Password: "riexuxwdxziiqjnd",
      To: "master.nav.vse.ruki@gmail.com",
      From: "master.nav.vse.ruki@gmail.com",
      Subject: `Новый заказ: ${service}`,
      Body: `
            Имя: ${name}<br/>
            Телефон: ${phone}<br/>
            Услуга: ${service}<br/>
            Детали: ${message}
            `,
    }).then((message) =>
      alert("Спасибо, мы перезвоним вам в течение 10 минут")
    );
  }
});
