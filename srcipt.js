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

// Scroll to Bouquet
function scrollToBouquet() {
    const bouquetSection = document.getElementById('bouquet-section');
    if (bouquetSection) {
        bouquetSection.scrollIntoView({ behavior: 'smooth' });
    }
}
