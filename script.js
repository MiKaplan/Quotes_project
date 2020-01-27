var quotes = [
    'Пацаны, хорош шутить, где моя машина? @ Илон Маск',
    'Покупай Xiaomi, нафиг эти понты? а на оставшиеся деньги лучше по пивку @ Стив Джобс',
    'Кто обзывается, тот сам так называется. @ Джейсон Стэтхем',
    'Нельзя так просто взятьи победить Джеки Чана в комнате, полной мебели. @ Неизвестный автор',
    'Вы задолбали, я такого не говорил! @ Омар Хайям',
    'Ты ничего не можешь сказать, кроме слов. @ Виталий Кличко',
    'Главное не победа, а участие. @ Адольф Гитлер',

];

var paragraph = document.getElementById("item__quote");
var author = document.getElementById("item__author");
var button = document.getElementById("item__btn");
var body = document.querySelector("body");

body.style.cssText = "background-image: url(\"img/first.jpg\");\n" +
    "    background-repeat: no-repeat;\n" +
    "    background-size: cover;";

function setRandomQuote() {
    let indexRandom = Math.round(Math.random()*(quotes.length-1));
    paragraph.innerText = quotes[indexRandom].split(" @ ")[0];
    author.innerText = `— ${quotes[indexRandom].split(" @ ")[1]} —`;
    body.style.backgroundImage = `url("img/${indexRandom+1}.jpg")`
}

button.addEventListener("click", setRandomQuote, false);