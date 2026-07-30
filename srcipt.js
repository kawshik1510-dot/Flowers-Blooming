// ১. আপনার ৬ ডিজিটের সিক্রেট পিন এখানে বসান:
const SECRET_PIN = "200610"; 

// ২. পিংক পেপারে যে লেখাটি ভেসে উঠবে:
const letterMessage = `Hie my beautiful Beva pakhi ❤️,

You are the sweetest person I've ever met. Every single moment with you feels like a dream .

I created this little space just for you to bring a smile to your face today.

Click the button below to see your special flowers... 🌸`;


// PIN Check Function
function checkPin() {
    const input = document.getElementById('pin-input').value;
    const errorMsg = document.getElementById('error-msg');

    if (input === SECRET_PIN) {
        document.getElementById('pin-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        startTypewriter();
    } else {
        errorMsg.innerText = "aww Hocche na? ";
    }
}

// Enter Key Press Support
document.getElementById('pin-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPin();
    }
});

// Typewriter Effect Function
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
