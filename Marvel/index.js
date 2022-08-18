let json = `[{
    "name": "Бэтмен",
    "img": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
    "universe": "DC Comics",
    "alter_ego" : "Брюс Уэйн",
    "type_of_activity": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "superpowers": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "like_number": 0
}, {
    "name": "Супермен",
    "img": "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
    "universe": "DC Comics",
    "alter_ego" : "Кларк Кент",
    "type_of_activity": "борец за справедливость",
    "friends": "собака Крипто",
    "superpowers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "like_number": 0
}, {
    "name": "Спайдер-мен/Человек-паук",
    "img": "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
    "universe": "Marvel Comics",
    "alter_ego" : "Питер Паркер",
    "type_of_activity": "борец за справедливость, студент, фотограф",
    "friends": "Мстители, Фантастическая четверка, Люди Икс",
    "superpowers": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    "like_number": 0
}, {
    "name": "Капитан Америка",
    "img": "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg",
    "universe": "Marvel Comics",
    "alter_ego": "Стивен Роджерс",
    "type_of_activity": "супер-солдат",
    "friends": "Мстители",
    "superpowers": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    "like_number": 0
}, {
    "name": "Тор",
    "img": "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
    "universe": "Marvel Comics",
    "alter_ego" : "Тор Одинсон",
    "type_of_activity": "борец за справедливость, скандинавский бог",
    "friends": "Мстители",
    "superpowers": "все, что может бог, плюс молот Мьелнир",
    "like_number": 0
}, {
    "name": "Железный человек",
    "img": "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
    "universe": "Marvel Comics",
    "alter_ego" : "Тони Старк",
    "type_of_activity": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "like_number": 0
}
]`;

let heroes = JSON.parse(json);

document.addEventListener("DOMContentLoaded", function (event) {
  console.log(heroes);

  let heroesContent = "";
  for (let i = 0; i < heroes.length; i++) {
    let heroe = heroes[i];

    let likes = 0;
    let savedLike = localStorage.getItem(`heroe_${i}`);
    if (savedLike != null) {
      likes = savedLike;
    } else {
      likes = heroe.like_number;
    }

    heroesContent += `
    <div class="heroe">
        <h2>${heroe.name}</h2>
        <img src="${heroe.img}" />
        <div class="title">Вселенная:</div><div>${heroe.universe}</div> 
        <div class="title">Альтер Эго:</div><div>${heroe.alter_ego}</div>
        <div class="title">Род деятельности:</div><div>${heroe.type_of_activity}</div>
        <div class="title">Друзья:</div><div>${heroe.friends}</div>
        <div class="title">Суперсилы:</div><div>${heroe.superpowers}</div>
        <div>
            <button class="like" onclick="like(${i})">Нравится</button>
            <div id="heroe_${i}">Лайки: ${likes}</div>
        </div>
    </div>`;
  }
  document.getElementById("heroesContainer").innerHTML = heroesContent;
});

function like(heroeIdx) {
  heroes[heroeIdx].like_number++;
  let heroeDiv = document.getElementById(`heroe_${heroeIdx}`);
  heroeDiv.innerHTML = `Лайки: ${heroes[heroeIdx].like_number}`;

  localStorage.setItem(`heroe_${heroeIdx}`, `${heroes[heroeIdx].like_number}`);
}
