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
            window.location.href = 'cctv.html'; 
        });
    }

    if (window.location.pathname.includes('cctv.html')) {
        const imageGalleryButton = document.querySelector('.image-gallery a');

        if (imageGalleryButton) {
            imageGalleryButton.addEventListener('click', redirectToLanguageSpecificPage);
        }
    }

    function redirectToLanguageSpecificPage(e) {
        if (e) e.preventDefault(); 
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
    }

    var pageLanguage = document.documentElement.lang;
    var messages = {
        'en': "OPERATIVES, \n\nMY LOCATION HAS BEEN COMPROMISED AND MY WEBSITE IS HACKED.\n\nDO NOT OPEN ANY LINKS! \n\nI DEMAND YOU TO LEAVE THIS WEBSITE!\n\nI WILL BE IN TOUCH.",
        'es': "OPERATIVOS, \n\nMI UBICACIÓN HA SIDO COMPROMETIDA Y MI SITIO WEB HA SIDO HACKEADO.\n\n¡NO ABRAN NINGÚN ENLACE! \n\n¡EXIJO QUE ABANDONEN ESTE SITIO WEB!\n\nESTARÉ EN CONTACTO.",
        'ru': "ОПЕРАТИВНИКИ, \n\nМОЁ МЕСТОПОЛОЖЕНИЕ РАСКРЫТО И МОЙ САЙТ ВЗЛОМАН.\n\nНЕ ОТКРЫВАЙТЕ НИКАКИХ ССЫЛОК! \n\nТРЕБУЮ СЕЙЧАС ЖЕ ПОКИНУТЬ ЭТОТ САЙТ!\n\nБУДУ НА СВЯЗИ.",
        'tr': "OPERATİFLER, \n\nKONUMUM ELE VERİLDİ VE WEB SİTEM HACKLENDİ.\n\nHİÇBİR LİNKİ AÇMAYIN! \n\nBU WEB SİTESİNDEN AYRILMANIZI TALEP EDİYORUM!\n\nİLETİŞİMDE OLACAĞIM.",
        'de': "OPERATIVE, \n\nMEIN STANDORT WURDE KOMPROMITTIERT UND MEINE WEBSEITE IST GEHACKT.\n\nÖFFNEN SIE KEINE LINKS! \n\nICH FORDERE SIE AUF, DIESE WEBSEITE ZU VERLASSEN!\n\nICH WERDE IN KONTAKT BLEIBEN.",
        'fr': "OPÉRATEURS, \n\nMA POSITION A ÉTÉ COMPROMISE ET MON SITE WEB A ÉTÉ PIRATÉ.\n\nN'OUVREZ AUCUN LIEN! \n\nJE VOUS DEMANDE DE QUITTER CE SITE WEB!\n\nJE SERAI EN CONTACT."
    };      
    var secondMessages = {
        'en': "Oh, Sterling, always so 劇的な! ಥ‿ಥ \n\nWhen patience is waning, that's when things get entertaining.\n\n（￣ε￣ʃƪ） \n\n\n\nTruth seeker, wanna see a place where things <a href='https://mrsterling.quest/censored.html' class='gradient-link'>[never fade away]</a>? \n\n\(｡-_-｡ )人( ｡-_-｡)",
        'es': "¡Oh, Sterling, siempre tan 劇的な! ಥ‿ಥ \n\nCuando la paciencia se agota, es cuando las cosas se ponen entretenidas.\n\n（￣ε￣ʃƪ） \n\n\n\nBuscador de la verdad, ¿quieres ver un lugar donde las cosas <a href='https://mrsterling.quest/censored.html' class='gradient-link'>nunca se desvanecen</a>? \n\n\(｡-_-｡ )人( ｡-_-｡)",
        'ru': "О, Стерлинг, всегда такой 劇的な! ಥ‿ಥ \n\nТерпение кончается, забава начинается.\n\n（￣ε￣ʃƪ）\n\n\n\nИскатель истины, хочешь увидеть место, где вещи <a href='https://mrsterling.quest/censored.html' class='gradient-link'>[never fade away]</a>? \n\n\(｡-_-｡ )人( ｡-_-｡)",
        'de': "Oh, Sterling, immer so 劇的な! ಥ‿ಥ \n\nWenn die Geduld nachlässt, wird es unterhaltsam.\n\n（￣ε￣ʃƪ） \n\n\n\nWahrheitssucher, möchtest du einen Ort sehen, an dem Dinge <a href='https://mrsterling.quest/censored.html' class='gradient-link'>niemals vergehen</a>? \n\n\(｡-_-｡ )人( ｡-_-｡)",
        'fr': "Oh, Sterling, toujours si 劇的な! ಥ‿ಥ \n\nQuand la patience s'épuise, c'est alors que les choses deviennent amusantes.\n\n（￣ε￣ʃƪ） \n\n\n\nChercheur de vérité, veux-tu voir un endroit où les choses <a href='https://mrsterling.quest/censored.html' class='gradient-link'>ne s'estompent jamais</a>? \n\n\(｡-_-｡ )人( ｡-_-｡)",
        'tr': "Oh, Sterling, her zaman çok 劇的な! ಥ‿ಥ \n\nSabır tükenmeye başladığında, işte o zaman her şey eğlenceli hale gelir.\n\n（￣ε￣ʃƪ） \n\n\n\nGerçeği arayan, hiç solmayan şeylerin olduğu bir yeri görmek ister misin? <a href='https://mrsterling.quest/censored.html' class='gradient-link'>Asla solmayan</a> \n\n\(｡-_-｡ )人( ｡-_-｡)"
    };   

    var messageContainer = document.getElementById('message-container');
    var message = messages[pageLanguage] || messages['en'];
    var hasVisited = localStorage.getItem('hasVisited-' + pageLanguage);

    if (messageContainer) {
        if (!hasVisited) {
            typeWriter(message, 0, showNewMessage);
            localStorage.setItem('hasVisited-' + pageLanguage, 'true');
        } else {
            messageContainer.innerHTML = message;
            showNewMessage();
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
    
                var phrasesToReplace = ['[never fade away]'];
    
                phrasesToReplace.forEach(function(phrase) {
                    newMessage = newMessage.replace(phrase, `<svg height="80px" width="240px" viewBox="0 0 180 40" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:violet;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:lightcoral;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        <text fill="url(#text-gradient)" x="0" y="34" font-family="'Yanone Kaffeesatz', sans-serif" font-size="22">${phrase.slice(1, -1)}</text> <!-- Adjust font-size as needed -->
                    </svg>`);
                });
    
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
