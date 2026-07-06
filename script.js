let selections = {
    food: "",
    transport: "",
    pay: ""
};

// "Жоқ" батырмасын тышқанмен (немесе саусақпен) түрткенде қашатындай жасау
const noBtn = document.getElementById('no-btn');
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

function moveButton(e) {
    const card = document.getElementById('main-card');
    const cardRect = card.getBoundingClientRect();
    
    // Батырманың карточка ішінде кездейсоқ жаңа орнын есептеу
    const maxX = cardRect.width - noBtn.offsetWidth - 20;
    const maxY = cardRect.height - noBtn.offsetHeight - 60;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Кезеңдерді ауыстыру функциясы
function nextStage(stage) {
    document.getElementById('stage-1').classList.add('hidden');
    document.getElementById('stage-2').classList.add('hidden');
    document.getElementById('stage-3').classList.add('hidden');
    document.getElementById('stage-4').classList.add('hidden');
    document.getElementById('stage-5').classList.add('hidden');

    if(stage === 2) {
        document.getElementById('question-text').innerText = "Не жегің келеді? 🍕🍣";
        document.getElementById('stage-2').classList.remove('hidden');
    } else if(stage === 3) {
        document.getElementById('question-text').innerText = "Қалай барамыз? 🚗";
        document.getElementById('stage-3').classList.remove('hidden');
    } else if(stage === 4) {
        document.getElementById('question-text').innerText = "Маңызды сұрақ: Кім төлейді? 💳";
        document.getElementById('stage-4').classList.remove('hidden');
    } else if(stage === 5) {
        document.getElementById('question-text').innerText = "Кездесуді қаншалықты күтіп жүрсің? (Оңға қарай тарт)";
        document.getElementById('stage-5').classList.remove('hidden');
    }
}

function selectFood(food) {
    selections.food = food;
    nextStage(3);
}

function selectTransport(trans) {
    selections.transport = trans;
    nextStage(4);
}

function selectPay(pay) {
    selections.pay = pay;
    nextStage(5);
}

function updateSlider(val) {
    document.getElementById('slider-val').innerText = val + "%";
    const finalBtn = document.getElementById('final-btn');
    if(parseInt(val) >= 95) {
        finalBtn.removeAttribute('disabled');
        document.getElementById('slider-val').innerText = "100% 🥰";
    } else {
        finalBtn.setAttribute('disabled', 'true');
    }
}

function showResult() {
    document.getElementById('question-text').classList.add('hidden');
    document.getElementById('stage-5').classList.add('hidden');
    
    document.getElementById('res-food').innerText = selections.food;
    document.getElementById('res-trans').innerText = selections.transport;
    
    // Сүйкімді гифті құттықтау гифіне ауыстыру
    document.getElementById('char-img').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW90Z3Yzdnd6bXJmN3R6M3R2M3R2M3R2M3R2M3R2M3R2M3R2JnBzPW铺/KZT3V767E9D61F991G/giphy.gif";
    
    document.getElementById('stage-result').classList.remove('hidden');
}
