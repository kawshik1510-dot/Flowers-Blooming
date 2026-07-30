// ১. আপনার ৬ ডিজিটের পিন (এখানে আপনার পিন দিন, কোনো স্পেস রাখবেন না)
const SECRET_PIN = "200610"; 

// ২. আপনার চিঠি
const letterMessage = `Hey Beautiful Beautiful Beva ❤️,

You are the most special and the sweetest person I've ever met❤️. Every single moment with you feels like a dream.❤️

I created this little space just for you to bring a smile to your face today.

Click the button below to see your special flowers... 🌸`;


// PIN Check Function (Trim ব্যবহার করা হয়েছে যাতে ভুল করে স্পেস পড়লেও কাজ করে)
function checkPin() {
    const inputField = document.getElementById('pin-input');
    const input = inputField.value.trim();
    const errorMsg = document.getElementById('error-msg');

    if (input === SECRET_PIN) {
        document.getElementById('pin-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        startTypewriter();
    } else {
        errorMsg.innerText = "Incorrect PIN! Try again ❤️";
        inputField.value = ""; // ভুল হলে বক্স খালি হয়ে যাবে
    }
}

// Enter Key Support
document.getElementById('pin-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPin();
    }
});

// Typewriter Effect
function startTypewriter() {
    let i = 0;
    const speed = 40;
    const target = document.getElementById("typewriter-text");

    function type() {
        if (i < letterMessage.length) {
            target.innerHTML += letterMessage.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            document.getElementById("show-flower-btn").style.display = "block";
        }
    }
    type();
}

// Scroll to Bouquet
function scrollToBouquet() {
    document.getElementById('bouquet-section').scrollIntoView({ behavior: 'smooth' });
}
