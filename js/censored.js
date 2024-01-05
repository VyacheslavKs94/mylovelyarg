document.addEventListener('DOMContentLoaded', function() {
    const greetings = ["Hello!", "Привет!", "你好!", "你好!", "Bonjour!", "Hallo!", "Ciao!", "Olá!", "¡Hola!", "こんにちは!", "안녕하세요!", "Merhaba!", "مرحبا!", "สวัสดี!", "Xin chào!", "Selamat datang!", "Selamat datang!", "नमस्ते!", "Cześć!", "Привiт!"];
    let index = 0;
    let greetingInterval;

    const showGreeting = function() {
        const tempMessage = document.createElement('div');
        tempMessage.innerHTML = greetings[index];
        positionElementRandomly(tempMessage);
        tempMessage.style.fontSize = '48px';
        tempMessage.style.color = 'white';
        tempMessage.style.zIndex = '999';
        document.body.appendChild(tempMessage);

        setTimeout(function() {
            document.body.removeChild(tempMessage);
        }, 200); // Greeting appears for 0.2 seconds

        index = (index + 1) % greetings.length;
    };

    // Start showing greetings 5 seconds after page loads
    setTimeout(function() {
        greetingInterval = setInterval(showGreeting, 200); // Change greeting every 0.2 seconds
    }, 5000);

    // Stop showing greetings and show the first message after 12 seconds
    setTimeout(function() {
        clearInterval(greetingInterval);
        document.getElementById('message').innerHTML = "Hey! <br> Look at this grim, gray, and corporate Life Inc. website. <br> Pretty #$*!, right?";
        document.getElementById('message').style.display = 'block';
        document.querySelector('.background').classList.add('blur-background'); 
    }, 12000);

    setTimeout(function() {
        document.getElementById('message').innerHTML = "Luckily, their security is laughable. <br> Wanna see what I did to their real website page?";
        document.getElementById('buttons').style.display = 'flex';
    }, 17000);

    document.getElementById('yesButton').addEventListener('click', function() {
        window.location.href = 'https://mrsterling.quest/neverfadeaway.html';
    });

    function positionElementRandomly(element) {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        element.style.position = 'absolute';
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    }

    document.getElementById('noButton').addEventListener('click', function() {
        document.querySelector('.background').classList.remove('blur-background'); 
        document.getElementById('message').style.display = 'none';
        document.getElementById('buttons').style.display = 'none'; 

        showBriefMessage('(ಥ﹏ಥ)', 1000); 
    });
});

function showBriefMessage(message, duration) {
    var tempMessage = document.createElement('div');
    tempMessage.innerHTML = message;
    tempMessage.style.position = 'absolute';
    tempMessage.style.top = '50%';
    tempMessage.style.left = '50%';
    tempMessage.style.transform = 'translate(-50%, -50%)';
    tempMessage.style.fontSize = '48px';
    tempMessage.style.color = 'white'; 
    tempMessage.style.zIndex = '999';
    document.body.appendChild(tempMessage);

    setTimeout(function() {
        document.body.removeChild(tempMessage);
    }, duration);
}