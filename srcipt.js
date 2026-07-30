// ==========================================
// PART 1: PIN Lock & Letter Control (New)
// ==========================================

// ১. আপনার ৬ ডিজিটের পিন
const SECRET_PIN = "200610"; 

// ২. আপনার চিঠির বার্তা
const letterMessage = `Hey Beautiful Beva ❤️,

You are the most special and the sweetest person I've ever met❤️. Every single moment with you feels like a dream.❤️

I created this little space just for you to bring a smile to your face today.

Click the button below to see your special flowers... 🌸`;


// PIN Check Function
function checkPin() {
    const inputField = document.getElementById('pin-input');
    if (!inputField) return;
    
    const input = inputField.value.trim();
    const errorMsg = document.getElementById('error-msg');

    if (input === SECRET_PIN) {
        document.getElementById('pin-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        startTypewriter();
    } else {
        if (errorMsg) errorMsg.innerText = "Incorrect PIN! Try again ❤️";
        inputField.value = "";
    }
}

// Enter Key Support
document.addEventListener('DOMContentLoaded', () => {
    const pinInput = document.getElementById('pin-input');
    if (pinInput) {
        pinInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                checkPin();
            }
        });
    }
});

// Typewriter Effect Function
function startTypewriter() {
    let i = 0;
    const speed = 40;
    const target = document.getElementById("typewriter-text");
    if (!target) return;

    function type() {
        if (i < letterMessage.length) {
            target.innerHTML += letterMessage.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            const btn = document.getElementById("show-flower-btn");
            if (btn) btn.style.display = "block";
        }
    }
    type();
}

// Scroll to Bouquet and Trigger Flower Animation
function scrollToBouquet() {
    const bouquetSection = document.getElementById('bouquet-section');
    if (bouquetSection) {
        bouquetSection.scrollIntoView({ behavior: 'smooth' });
        // বাটন ক্লিক করার পরেই ফুল ফোটানোর অ্যানিমেশন শুরু হবে।
        startFlowerAnimation(); 
    }
}


// ==========================================
// PART 2: FLOWER ANIMATION ENGINE (Original)
// ==========================================
// নিচে পুরোনো কোডটুকু পুরোটা জুড়ে দেওয়া হলো:

const bouquet = {
    // bouquet-section এর ভেতরে bouquet-container তৈরি করে ফুলগুলো রাখবে।
    init: function () {
        const container = document.querySelector('.bouquet-section');
        if (!container) return; // container না থাকলে কিছু করবে না।

        this.flowerContainer = document.createElement('div');
        this.flowerContainer.className = 'bouquet-container';
        container.appendChild(this.flowerContainer);
        
        // এখানে bouquet-এর ভেতর ফুলের ডিজাইন তৈরির কোড।
        this.flowerContainer.innerHTML = '<div class="bouquet_flowers"><div class="flower flower--1"><div class="flower__leafs flower__leafs--1"><div class="flower__leaf flower__leaf--1"></div><div class="flower__leaf flower__leaf--2"></div><div class="flower__leaf flower__leaf--3"></div><div class="flower__leaf flower__leaf--4"></div><div class="flower__white-circle"></div><div class="flower__light flower__light--1"></div><div class="flower__light flower__light--2"></div><div class="flower__light flower__light--3"></div><div class="flower__light flower__light--4"></div><div class="flower__light flower__light--5"></div><div class="flower__light flower__light--6"></div><div class="flower__light flower__light--7"></div><div class="flower__light flower__light--8"></div></div><div class="flower__line"><div class="flower__line__leaf flower__line__leaf--1"></div><div class="flower__line__leaf flower__line__leaf--2"></div><div class="flower__line__leaf flower__line__leaf--3"></div><div class="flower__line__leaf flower__line__leaf--4"></div><div class="flower__line__leaf flower__line__leaf--5"></div><div class="flower__line__leaf flower__line__leaf--6"></div></div></div><div class="flower flower--2"><div class="flower__leafs flower__leafs--2"><div class="flower__leaf flower__leaf--1"></div><div class="flower__leaf flower__leaf--2"></div><div class="flower__leaf flower__leaf--3"></div><div class="flower__leaf flower__leaf--4"></div><div class="flower__white-circle"></div><div class="flower__light flower__light--1"></div><div class="flower__light flower__light--2"></div><div class="flower__light flower__light--3"></div><div class="flower__light flower__light--4"></div><div class="flower__light flower__light--5"></div><div class="flower__light flower__light--6"></div><div class="flower__light flower__light--7"></div><div class="flower__light flower__light--8"></div></div><div class="flower__line"><div class="flower__line__leaf flower__line__leaf--1"></div><div class="flower__line__leaf flower__line__leaf--2"></div><div class="flower__line__leaf flower__line__leaf--3"></div><div class="flower__line__leaf flower__line__leaf--4"></div></div></div><div class="flower flower--3"><div class="flower__leafs flower__leafs--3"><div class="flower__leaf flower__leaf--1"></div><div class="flower__leaf flower__leaf--2"></div><div class="flower__leaf flower__leaf--3"></div><div class="flower__leaf flower__leaf--4"></div><div class="flower__white-circle"></div><div class="flower__light flower__light--1"></div><div class="flower__light flower__light--2"></div><div class="flower__light flower__light--3"></div><div class="flower__light flower__light--4"></div><div class="flower__light flower__light--5"></div><div class="flower__light flower__light--6"></div><div class="flower__light flower__light--7"></div><div class="flower__light flower__light--8"></div></div><div class="flower__line"><div class="flower__line__leaf flower__line__leaf--1"></div><div class="flower__line__leaf flower__line__leaf--2"></div></div></div><div class="growing-grass"><div class="growing-grass__leaf growing-grass__leaf--1"><div class="growing-grass__leaf--inner"></div></div><div class="growing-grass__leaf growing-grass__leaf--2"><div class="growing-grass__leaf--inner"></div></div><div class="growing-grass__leaf growing-grass__leaf--3"><div class="growing-grass__leaf--inner"></div></div><div class="growing-grass__leaf growing-grass__leaf--4"><div class="growing-grass__leaf--inner"></div></div><div class="growing-grass__leaf growing-grass__leaf--5"><div class="growing-grass__leaf--inner"></div></div><div class="growing-grass__leaf growing-grass__leaf--6"><div class="growing-grass__leaf--inner"></div></div><div class="growing-grass__leaf growing-grass__leaf--7"><div class="growing-grass__leaf--inner"></div></div><div class="growing-grass__leaf growing-grass__leaf--8"><div class="growing-grass__leaf--inner"></div></div></div><div class="long-g long-g--1"><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div></div><div class="long-g long-g--2"><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div></div><div class="long-g long-g--3"><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div></div><div class="long-g long-g--4"><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div></div><div class="long-g long-g--5"><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div></div><div class="long-g long-g--6"><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div></div><div class="long-g long-g--7"><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div><div class="long-g__item"><div class="long-g__leaf long-g__leaf--1"></div><div class="long-g__leaf long-g__leaf--2"></div><div class="long-g__leaf long-g__leaf--3"></div></div></div></div>';
    }
};

// এই ফাংশনটি বাটন প্রেস করলে কল করা হবে (PART 1 থেকে)
function startFlowerAnimation() {
    bouquet.init();
    setTimeout(() => {
        const bouquetContainer = document.querySelector('.bouquet-container');
        if (bouquetContainer) {
            bouquetContainer.classList.add('loaded');
        }
    }, 100);
}
