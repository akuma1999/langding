const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const data_menu = [
  {
    name: 'Bánh tráng trộn',
    url: 'img/menu/banhtrang.jpg',
  },
  {
    name: 'Bò viên',
    url: 'img/menu/bovien.jpg',
  },
  {
    name: 'Mì xào bò',
    url: 'img/menu/mixaobo.jpg',
  },
  {
    name: 'Buger',
    url: 'img/menu/buger.jpg',
  },
  {
    name: 'Trái cây dĩa',
    url: 'img/menu/traicay.jpg',
  },
  {
    name: 'Cafe americano',
    url: 'img/menu/americano.jpg',
  },
  {
    name: 'Bạc xĩu',
    url: 'img/menu/bacxiu.jpg',
  },
  {
    name: 'Cafe sữa',
    url: 'img/menu/cafesua.jpg',
  },
  {
    name: 'Cafe cappuccino',
    url: 'img/menu/cappuccino.jpg',
  },
  {
    name: 'Cafe mocha',
    url: 'img/menu/mocha.jpg',
  },
  {
    name: 'Sinh tố bơ',
    url: 'img/menu/sinh-to-bo.jpg',
  },
  {
    name: 'Sinh tố chuối',
    url: 'img/menu/sinh-to-chuoi.jpg',
  },
  {
    name: 'Sinh tố chuối<br/>socola',
    url: 'img/menu/sinh-to-chuoi-socola.png',
  },
  {
    name: 'Sinh tố mít',
    url: 'img/menu/sinh-to-mit.jpg',
  },
  {
    name: 'Sinh tố nho',
    url: 'img/menu/sinh-to-nho.jpg',
  },
];

const menu = $('.menu__box');

data_menu.forEach((value) => {
  menu.innerHTML += `<div class="menu__box__item">
                        <span>${value.name}</span>
                        <img
                        src=${value.url}
                        alt="eat"
                        />
                    </div>`;
});

const quote = $$('.quote');

const quote1 = $('.quote__item0');
const quote2 = $('.quote__item1');
const quote3 = $('.quote__item2');

function render(num) {
  if (quote1 && quote2 && quote3) {
    quote1.innerHTML = `      <img src="img/quote/${num}.jpg " alt="" srcset="" />
    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Necessitatibus enim, facere laborum, nam vitae quam sapiente adipisci
      deserunt tenetur, at quibusdam qui saepe velit delectus quidem eos
      repellendus voluptatibus cumque?</span>`;
    quote2.innerHTML = `      <img src="img/quote/${
      num + 1
    }.jpg " alt="" srcset="" />
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Necessitatibus enim, facere laborum, nam vitae quam sapiente adipisci
        deserunt tenetur, at quibusdam qui saepe velit delectus quidem eos
        repellendus voluptatibus cumque?</span>`;
    quote3.innerHTML = `      <img src="img/quote/${
      num + 2
    }.jpg " alt="" srcset="" />
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus enim, facere laborum, nam vitae quam sapiente adipisci
          deserunt tenetur, at quibusdam qui saepe velit delectus quidem eos
          repellendus voluptatibus cumque?</span>`;
  }
}

let current = 1;
window.onload = render(current);

$('.fa-chevron-left').onclick = () => {
  if (current > 1) {
    current -= 1;
    render(current);
  }
};

$('.fa-chevron-right').onclick = () => {
  if (current < 7 - 2) {
    current += 1;
    render(current);
  }
};
console.log(current);
