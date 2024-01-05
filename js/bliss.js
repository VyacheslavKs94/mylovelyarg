const colors = ["darkred", "darkblue", "darkred", "darkblue", "darkred"]; 

const messages = [
    ["ТРЕТЬОГО СІЧНЯ", "ТРЕТЬЕГО ЯНВАРЯ"],
    ["Zaufanie do tej witryny zostało cofnięte przez sieć Life Inc.", "Proszę czekać."],
    ["Kepuasan pelanggan adalah prioritas kami.", "Hidup. Cinta. Tertawa."], 
    ["过上幸福的生活。", "充分利用Life Inc.！"], 
    ["सतर्क रहें।", "DISCUSS."]
];

let currentIndex = 0;
const transitionTime = 1300; 

function updateMessage() {
    const messageElements = [document.getElementById('message-line1'), document.getElementById('message-line2')];
    const nextIndex = (currentIndex + 1) % messages.length;

    decipheringCipheringEffect(messageElements, messages[currentIndex], messages[nextIndex], transitionTime, colors[currentIndex]);

    currentIndex = nextIndex;
}

function decipheringCipheringEffect(elements, oldMsg, newMsg, duration, color) {
    let startTime = null;
    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = applyEffect(oldMsg[i], newMsg[i], progress); 
        }

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            for (let i = 0; i < elements.length; i++) {
                elements[i].innerHTML = newMsg[i];
                elements[i].style.color = color; 
                if (currentIndex === 3 && newMsg[i].includes("DISCUSS")) {
                    addLinkToDiscuss(elements[i]);
                }
            }
        }
    };
    requestAnimationFrame(step);
}

function addLinkToDiscuss(element) {
    element.innerHTML = element.innerHTML.replace(
        "DISCUSS", 
        "<a href='https://discord.gg/bulletecho' style='color: inherit; text-decoration: none;'>DISCUSS</a>"
    );
}
function applyEffect(oldText, newText, progress) {
    let result = '';
    const maxLength = Math.max(oldText.length, newText.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < oldText.length * progress) {
            result += newText.charAt(i) || '';
        } else {
            result += randomChar();
        }
    }
    return result;
}

function randomChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}
