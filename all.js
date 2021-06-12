let star = document.querySelector('.star')
let moon = document.querySelector('.moon')

window.addEventListener('scroll', debounce(move, 12))

function move() {
    let value = window.scrollY;

    star.style.top = value * 0.5 + 'px';
    moon.style.top = value * 0.6 + 'px';
}

function debounce(func, delay) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(context, args)
        }, delay);
    }
}

// 打字效果
const text = ['25號宇宙嗎？    ', 'Universe 25嗎？   '];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === text.length) {
        count = 0
    }

    //將text[count]擷取出,存入letter
    currentText = text[count]
    letter = currentText.slice(0, index++)

    document.querySelector('.title_hear').textContent = '你聽過 ' + letter;

    //如果長度一樣,歸零重來(index)
    if (letter.length === currentText.length) {
        count++
        index = 0
    }
    setTimeout(type, 300)
})()

function appear() {
    let introductionText = document.querySelector('.introductionText');
    let contentPosition = introductionText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.6;

    if (contentPosition < screenPosition) {
        introductionText.classList.add('appear')
    }
}

window.addEventListener('scroll', debounce(appear, 12))

//介紹圖片_圖片滾動
window.addEventListener('scroll',imgMove)

function imgMove() {
    let img_01 = document.querySelector('.img_01')
    let img_02 = document.querySelector('.img_02')
    let img_03 = document.querySelector('.img_03')
    let img_04 = document.querySelector('.img_04')

    let img_01Position = img_01.getBoundingClientRect().top;
    let img_02Position = img_02.getBoundingClientRect().top;
    let img_03Position = img_03.getBoundingClientRect().top;
    let img_04Position = img_04.getBoundingClientRect().top;

    let screenPosition = window.innerHeight / 1.6;

    if (img_01Position < screenPosition) {
        img_01.classList.add('imgAnimation')
    }
    if (img_02Position < screenPosition) {
        img_02.classList.add('imgAnimation')
    }
    if (img_03Position < screenPosition) {
        img_03.classList.add('imgAnimation')
    }
    if (img_04Position < screenPosition) {
        img_04.classList.add('imgAnimation')
    }
}

//游標改變事件
// let cursor = document.querySelector('.cursor')
// let amount = document.querySelector('.amount');

// amount.addEventListener('mouseleave', function (e) {
//     cursor.style.display = 'none'
//     console.log('d');
// })

// amount.addEventListener('mousemove', function (e) {
//     cursor.style.display = 'flex';
//     cursor.style.top = e.pageY + 'px'
//     cursor.style.left = e.pageX + 'px'
//     console.log(e.pageY );
// })