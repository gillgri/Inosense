const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});

document.getElementById("header__znak").onclick = function () {
    document.getElementById("love").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("menu__link1").onclick = function () {
    document.getElementById("love").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("menu__link2").onclick = function () {
    document.getElementById("section__products").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("menu__link3").onclick = function () {
    document.getElementById("rew").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("menu__link4").onclick = function () {
    document.getElementById("market__ow").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("products__sell").onclick = function () {
    document.getElementById("market__ow").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("products__sell").onclick = function () {
    document.getElementById("market__ow").scrollIntoView({ behavior: "smooth" });
}


// При нажатии на кнопку открывать всплывающее окно
document.addEventListener('click', (event)=>{
    console.log(event);

})


let swiper1 = new Swiper('.swiper1', {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      let windowWidth = window.innerWidth;
      let direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }


let swiper = new Swiper('.swiper', {
      slidesPerView: 4,
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      let windowWidth = window.innerWidth;
      let direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }



// При нажатии на кнопку открывать всплывающее окно
document.getElementById("info__say").addEventListener("click", function() {
    const popupModal = document.getElementById("popup");
    popupModal.style.display = "flex";
    popupModal.addEventListener('click',(event)=>{
        if (event.target.className === 'popup' )
            popupModal.style.display = "none";
    });
});


// При нажатии на крестик или вне всплывающего окна закрывать его
document.getElementById("close2").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});





// Получение ссылок на элементы формы
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const textarea = document.getElementById('textarea');
const ratingInputs = document.querySelectorAll('input[name="rating"]');
const submitButton = document.getElementById('submit');
let isValid = true;

// Обработчик события отправки формы
function submitForm(event) {
    event.preventDefault(); // Предотвращение перезагрузки страницы

    let nameFeedback= nameInput.value.trim();
    let textFeedback= textarea.value.trim();

    // Проверка заполненности всех полей
    if (!!textFeedback && !!nameFeedback && textFeedback.length>10 && isRatingSelected()) {
        // Отправка данных формы
        // Здесь можно добавить код для отправки данных на сервер

        // Очистка полей формы
        nameInput.value = '';
        textarea.value = '';
        clearRating();

        // Вывод сообщения об успешной отправке
        alert('Отзыв успешно отправлен!');

        // Закрытие окна
        popup.style.display = "none";
    }


    if (nameInput.value === '') {
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }

    if (textarea.value === '') {
        textarea.classList.add('error');
        isValid = false;
    } else {
        textarea.classList.remove('error');
    }

}

// Проверка выбрана ли оценка
function isRatingSelected() {
    return Array.from(ratingInputs).some(input => input.checked);
}

// Очистка выбора оценки
function clearRating() {
    ratingInputs.forEach(input => {
        input.checked = false;
    });
}


// Назначение обработчика события отправки формы
form.addEventListener('submit', submitForm);





