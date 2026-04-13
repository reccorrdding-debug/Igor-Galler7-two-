const igorImages = [
    "https://i.postimg.cc/KzcWJgv7/IMG-20260414-001343-123.jpg",
    "https://i.postimg.cc/d1WxXtLr/IMG-20260414-001343-247.jpg",
    "https://i.postimg.cc/SsQPDzND/IMG-20260414-001343-397.jpg",
    "https://i.postimg.cc/G2M5NhHY/IMG-20260414-001343-402.jpg",
    "https://i.postimg.cc/LX4WNZ6x/IMG-20260414-001343-647.jpg",
    "https://i.postimg.cc/j58F9dL6/IMG-20260414-001343-673.jpg",
    "https://i.postimg.cc/HxWNB7st/IMG-20260414-001343-739.jpg",
    "https://i.postimg.cc/Tw2sCWYQ/IMG-20260414-001343-806.jpg",
    "https://i.postimg.cc/MTZLdjKm/IMG-20260414-001343-867.jpg",
    "https://i.postimg.cc/Tw2sCWYV/IMG-20260414-001346-329.jpg",
    "https://i.postimg.cc/9MXkJqFZ/IMG-20260414-001348-425.jpg",
    "https://i.postimg.cc/hj4Yp7PQ/IMG-20260414-001348-473.jpg",
    "https://i.postimg.cc/xCjZtbTH/IMG-20260414-001348-592.jpg",
    "https://i.postimg.cc/fLWPB0TY/IMG-20260414-001348-847.jpg",
    "https://i.postimg.cc/SsQPDzNJ/IMG-20260414-001348-878.jpg",
    "https://i.postimg.cc/26jt2B81/IMG-20260414-001348-892.jpg",
    "https://i.postimg.cc/mDZn8F2z/IMG-20260414-001348-939.jpg",
    "https://i.postimg.cc/4d40BhNc/IMG-20260414-001348-990.jpg",
    "https://i.postimg.cc/yd6GvSYS/IMG-20260414-001349-051.jpg",
    "https://i.postimg.cc/RFCYXnV3/IMG-20260414-001349-110.jpg",
    "https://i.postimg.cc/G23fqsh9/IMG-20260414-001351-311.jpg",
    "https://i.postimg.cc/9MXkJqFQ/IMG-20260414-001353-303.jpg",
    "https://i.postimg.cc/3RrqnDJR/IMG-20260414-001354-551.jpg",
    "https://i.postimg.cc/26jt2B88/IMG-20260414-001356-503.jpg",
    "https://i.postimg.cc/rmyHQtFy/IMG-20260414-001357-767.jpg",
    "https://i.postimg.cc/Jn7FPB4r/IMG-20260414-001359-541.jpg",
    "https://i.postimg.cc/rmyHQtFM/IMG-20240202-WA0006.jpg",
    "https://i.postimg.cc/jj49HhKD/IMG-20260414-001404-548.jpg",
    "https://i.postimg.cc/Jh5gNQmy/IMG-20260414-001405-186.jpg",
    "https://i.postimg.cc/FKVqyxm7/IMG-20260414-001406-901.jpg",
    "https://i.postimg.cc/zfFMCk5f/IMG-20260414-001409-166.jpg",
    "https://i.postimg.cc/rpNb19cs/IMG-20260414-001410-943.jpg",
    "https://i.postimg.cc/yNy5mTBd/IMG-20260414-001412-851.jpg",
    "https://i.postimg.cc/YSzV6xkq/IMG-20260414-001414-197.jpg",
    "https://i.postimg.cc/s248YJyj/IMG-20260414-001417-016.jpg",
    "https://i.postimg.cc/R0L87T9v/IMG-20260414-001419-648.jpg",
    "https://i.postimg.cc/TPJSVcGG/IMG-20260414-001421-137.jpg",
    "https://i.postimg.cc/s248YJyz/IMG-20260414-001422-962.jpg",
    "https://i.postimg.cc/9fYSdBVj/IMG-20260414-001424-050.jpg",
    "https://i.postimg.cc/yNy5mTB4/IMG-20240202-WA0006.jpg",
    "https://i.postimg.cc/MGm47Yxk/IMG-20260414-001428-243.jpg",
    "https://i.postimg.cc/hG1wL0nw/IMG-20260414-001430-305.jpg",
    "https://i.postimg.cc/Jh5gNQ8f/IMG-20260414-001432-683.jpg",
    "https://i.postimg.cc/Ls37tVSG/IMG-20260414-001434-226.jpg",
    "https://i.postimg.cc/d0jX29FN/IMG-20260414-001436-791.jpg",
    "https://i.postimg.cc/257JQxY0/IMG-20260414-001439-282.jpg",
    "https://i.postimg.cc/1zrTGKSW/IMG-20260414-001441-435.jpg",
    "https://i.postimg.cc/KY2w3H6V/IMG-20260414-001443-732.jpg",
    "https://i.postimg.cc/GpCVT5W6/IMG-20260414-001446-035.jpg",
    "https://i.postimg.cc/tgjwnMKc/IMG-20260414-001447-216.jpg",
    "https://i.postimg.cc/s2rqGNk6/IMG-20260414-001449-315.jpg",
    "https://i.postimg.cc/9fhKwn6J/IMG-20260414-001451-682.jpg",
    "https://i.postimg.cc/XvbmBzRx/IMG-20260414-001453-322.jpg",
    "https://i.postimg.cc/HLgR8hqt/IMG-20260414-001455-175.jpg",
    "https://i.postimg.cc/7LkdJWFg/IMG-20260414-001457-560.jpg",
    "https://i.postimg.cc/ydfb5YkX/Screenshot-20260413-220248-Tik-Tok.jpg",
    "https://i.postimg.cc/d1WxXtLG/wataoggy-2026-04-13-23-16-43-1776111403042.jpg"
];

const imgEl = document.getElementById('igorImage');
const nextBtn = document.getElementById('nextBtn');
const favBtn = document.getElementById('favBtn');
const favGrid = document.getElementById('favGrid');
const spinSound = document.getElementById('spinSound');

let favImages = JSON.parse(localStorage.getItem('igor_vision_favs')) || [];

function renderFavs() {
    favGrid.innerHTML = '';
    favImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        favGrid.appendChild(img);
    });
}

renderFavs();

nextBtn.addEventListener('click', () => {
    // 1. Запуск звука
    spinSound.currentTime = 0;
    spinSound.play().catch(e => console.log("Нужно кликнуть по странице для активации звука"));

    // 2. Анимация прокрутки
    imgEl.classList.add('slot-spin');

    // 3. Через 800мс останавливаем и меняем фото
    setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * igorImages.length);
        imgEl.src = igorImages[randomIndex];
        imgEl.classList.remove('slot-spin');
    }, 800);
});

favBtn.addEventListener('click', () => {
    const currentSrc = imgEl.src;
    if (!favImages.includes(currentSrc)) {
        favImages.push(currentSrc);
        localStorage.setItem('igor_vision_favs', JSON.stringify(favImages));
        renderFavs();
    }
});
