document.addEventListener('DOMContentLoaded', function() {
    // Redirection based on language
    var revealButton = document.getElementById('reveal-button');
    if (revealButton) {
        revealButton.addEventListener('click', function() {
            var userLang = navigator.language || navigator.userLanguage; 
            userLang = userLang.split('-')[0]; // Extract the language code

            // Redirect based on language code
            switch(userLang) {
                case 'ru': // Russian
                    window.location.href = 'ctao_ru.html';
                    break;
                case 'es': // Spanish
                    window.location.href = 'ctao_es.html';
                    break;
                case 'tr': // Turkish
                    window.location.href = 'ctao_tr.html';
                    break;
                case 'en': // English
                    window.location.href = 'ctao.html';
                    break;
                case 'de': // German
                    window.location.href = 'ctao_de.html';
                    break;
                case 'fr': // French
                    window.location.href = 'ctao_fr.html';
                    break;
                default: // Default to English
                    window.location.href = 'ctao.html';
            }
        });
    }

    // Typing effect for message
    var pageLanguage = document.documentElement.lang; // Get page language
    var messages = {
        'en': "Confidential Transmission to All Operatives\n\nAttention Operatives, ... [English text here]",
        'es': "Transmisión confidencial a todos los operativos\n\nAtención operativos, ... [Spanish text here]",
        'ru': "Абоба",
        'tr': "... [Turkish text here]",
        'de': "... [German text here]",
        'fr': "... [French text here]"
        // Add other languages as needed
    };

    var hasVisited = localStorage.getItem('hasVisited-' + pageLanguage);
    var messageContainer = document.getElementById('message-container');
    var message = messages[pageLanguage] || messages['en']; // Default to English if not found

    if (!hasVisited) {
        var i = 0;

        function typeWriter() {
            if (i < message.length) {
                messageContainer.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, 50); // Adjust typing speed here
            }
        }

        typeWriter();
        localStorage.setItem('hasVisited-' + pageLanguage, 'true');
    } else {
        messageContainer.innerText = message;
    }
});
