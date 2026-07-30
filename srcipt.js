// ১. আপনার ৪ ডিজিটের সিক্রেট পিন এখানে সেট করুন:
const SECRET_PIN = "1234"; 

// ২. পিংক পেপারে লেখার মেসেজটি এখানে লিখুন:
const letterMessage = `Hey Beautiful ❤️,

You are the most special person in my life. Every single moment with you feels like a dream.

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
        errorMsg.innerText = "Incorrect PIN! Try again ❤️";
    }
}

// Enter Key Press Support for PIN
document.getElementById('pin-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPin();
    }
});

// Typewriter Effect Function
function startTypewriter() {
    let i = 0;
    const speed = 40; // টাইপিং স্পিড
    const target = document.getElementById("typewriter-text");

    function type() {
        if (i < letterMessage.length) {
            target.innerHTML += letterMessage.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            document.getElementById("show-flower-btn").classList.remove("hidden-btn");
            document.getElementById("show-flower-btn").style.display = "block";
        }
    }
    type();
}

// Scroll to Bouquet
function scrollToBouquet() {
    document.getElementById('bouquet-section').scrollIntoView({ behavior: 'smooth' });
}
