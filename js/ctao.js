document.addEventListener('DOMContentLoaded', function() {
    const enterTranslations = ['Enter', 'Entrar', 'Войти', 'Gir', 'Betreten', 'Entrer'];
    let currentIndex = 0;
    const button = document.getElementById('reveal-button');

    if (button) {
        setInterval(() => {
            button.textContent = enterTranslations[currentIndex];
            currentIndex = (currentIndex + 1) % enterTranslations.length;
        }, 300);

        button.addEventListener('click', function() {
            var userLang = navigator.language || navigator.userLanguage; 
            userLang = userLang.split('-')[0];

            switch(userLang) {
                case 'ru': window.location.href = 'ctao_ru.html'; break;
                case 'es': window.location.href = 'ctao_es.html'; break;
                case 'tr': window.location.href = 'ctao_tr.html'; break;
                case 'en': window.location.href = 'ctao.html'; break;
                case 'de': window.location.href = 'ctao_de.html'; break;
                case 'fr': window.location.href = 'ctao_fr.html'; break;
                default: window.location.href = 'ctao.html';
            }
        });
    }

    var pageLanguage = document.documentElement.lang;
    var messages = {
        'en': "OPERATIVES, \n\nMY LOCATION HAS BEEN COMPROMISED.\n\nDO NOT OPEN ANY LINKS! \n\nI DEMAND YOU TO LEAVE THIS WEBSITE!\n\nI WILL BE IN TOUCH.",
        'es': "OPERATIVOS, \n\nMI UBICACIÓN HA SIDO COMPROMETIDA.\n\n¡NO ABRAN NINGÚN ENLACE! \n\n¡EXIJO QUE ABANDONEN ESTE SITIO WEB!\n\n ESTARÉ EN CONTACTO.",
        'ru': "ОПЕРАТИВНИКИ, \n\nМОЁ МЕСТОПОЛОЖЕНИЕ РАСКРЫТО.\n\nНЕ ОТКРЫВАЙТЕ НИКАКИХ ССЫЛОК! \n\nТРЕБУЮ ПОКИНУТЬ ЭТОТ САЙТ!\n\n БУДУ НА СВЯЗИ.",
        'tr': "OPERATİFLER, \n\nKONUMUM ELE VERİLDİ.\n\nHİÇBİR LİNKİ AÇMAYIN! \n\nBU WEB SİTESİNDEN AYRILMANIZI TALEP EDİYORUM!\n\n İLETİŞİMDE OLACAĞIM.",
        'de': "OPERATIVE, \n\nMEIN STANDORT WURDE KOMPROMITTIERT.\n\nÖFFNEN SIE KEINE LINKS! \n\nICH FORDERE SIE AUF, DIESE WEBSEITE ZU VERLASSEN!\n\n ICH WERDE IN KONTAKT BLEIBEN.",
        'fr': "OPÉRATEURS, \n\nMA POSITION A ÉTÉ COMPROMISE.\n\nN'OUVREZ AUCUN LIEN! \n\nJE VOUS DEMANDE DE QUITTER CE SITE WEB!\n\n JE SERAI EN CONTACT."
    };    
    var secondMessages = {
        'en': "Oh, Sterling, always so 劇的な! ಥ‿ಥ \n\nWhen patience is waning, that's when things get entertaining.（￣ε￣ʃƪ） \n\n\n\nThere’s a hidden place where things <span style='text-decoration: underline;'>neverfadeaway</span>. Encuéntralo. \n\n\(｡-_-｡ )人( ｡-_-｡)",
        'es': "¡Oh, Sterling, siempre tan 劇的な! ಥ‿ಥ \n\nCuando la paciencia se agota, es cuando las cosas se ponen entretenidas.（￣ε￣ʃƪ） \n\n\n\nHay un lugar oculto donde las cosas <span style='text-decoration: underline;'>neverfadeaway</span>. Encuéntralo. \n\n\(｡-_-｡ )人( ｡-_-｡)",
        'ru': "О, Стерлинг, всегда такой 劇的な! ಥ‿ಥ \n\nКогда patience is waning, сразу становится entertaining.（￣ε￣ʃƪ）\n\n\n\nСуществует тайное место, где ничто и <span style='text-decoration: underline;'>neverfadeaway</span>. Encuéntralo. \n\n\(｡-_-｡ )人( ｡-_-｡)",
        'de': "Oh, Sterling, immer so 劇的な! ಥ‿ಥ \n\nWenn die Geduld nachlässt, wird es unterhaltsam.（￣ε￣ʃƪ） \n\n\n\nEs gibt einen verborgenen Ort, an dem Dinge <span style='text-decoration: underline;'>neverfadeaway</span>. Encuéntralo. \n\n\(｡-_-｡ )人( ｡-_-｡)",
        'fr': "Oh, Sterling, toujours si 劇的な! ಥ‿ಥ \n\nQuand la patience s'épuise, c'est alors que les choses deviennent amusantes.（￣ε￣ʃƪ） \n\n\n\nIl y a un endroit caché où les choses <span style='text-decoration: underline;'>neverfadeaway</span>. Encuéntralo. \n\n\(｡-_-｡ )人( ｡-_-｡)",
        'tr': "Oh, Sterling, her zaman çok 劇的な! ಥ‿ಥ \n\nSabır tükenmeye başladığında, işte o zaman her şey eğlenceli hale gelir.（￣ε￣ʃƪ） \n\n\n\nOrada, şeylerin <span style='text-decoration: underline;'>neverfadeaway</span> olduğu gizli bir yer var. Encuéntralo. \n\n\(｡-_-｡ )人( ｡-_-｡)"
    };

    var messageContainer = document.getElementById('message-container');
    var message = messages[pageLanguage] || messages['en'];

    var hasVisited = localStorage.getItem('hasVisited-' + pageLanguage);

    if (messageContainer) {
        if (!hasVisited) {
            typeWriter(message, 0);
            localStorage.setItem('hasVisited-' + pageLanguage, 'true');
        } else {
            messageContainer.innerHTML = message;
        }
    }

    function typeWriter(text, index, callback) {
        if (index < text.length) {
            let nextChar = text[index];
            let nextIndex = index + 1;

            if (nextChar === '<') {
                let tagEnd = text.indexOf('>', index);
                if (tagEnd >= 0) {
                    nextChar = text.substring(index, tagEnd + 1);
                    nextIndex = tagEnd + 1;
                }
            }

            messageContainer.innerHTML += nextChar;
            setTimeout(() => typeWriter(text, nextIndex, callback), 10);
        } else if (callback) {
            callback();
        }
    }

    function showNewMessage() {
        setTimeout(function() {
            messageContainer.classList.add('glitch');
    
            setTimeout(function() {
                messageContainer.classList.remove('glitch');
                messageContainer.innerHTML = '';
                messageContainer.style.fontSize = '250%';
                var newMessage = secondMessages[pageLanguage] || secondMessages['en']; 
                messageContainer.innerHTML = newMessage;
            }, 1000); 
        }, 5000); 
    }
    
    
    if (messageContainer) {
        if (!hasVisited) {
            typeWriter(message, 0, showNewMessage);
            localStorage.setItem('hasVisited-' + pageLanguage, 'true');
        } else {
            messageContainer.innerHTML = message;
            showNewMessage();
        }
    }
});