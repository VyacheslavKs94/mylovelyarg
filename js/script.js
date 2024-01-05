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

    if (window.location.pathname.includes('cache.html')) {
        const phrases = [
            'Таємниці старого замку <strong class="color-class">більше</strong> не такі вже й таємні.',
            'Màu sắc của bình minh <strong class="color-class">còn</strong> đẹp hơn mỗi ngày.',
            'La montaña <strong class="color-class">ha</strong> ocultado el sol al amanecer.',
            'Zmieniające się pory roku <strong class="color-class">zawiódł</strong> oczekiwania.',
            'In the garden, <strong class="color-class">Sterling</strong> roses bloom late.', 
            'Les étoiles <strong class="color-class">devenu</strong> plus lumineuses cette nuit.',
            'Забытые истории <strong class="color-class">нельзя</strong> оставить без внимания.',
            'Klänge des Waldes <strong class="color-class">verraten</strong> eine verborgene Welt.'
        ];

        const colorClasses = ['strong-white', 'strong-darkpurple', 'strong-grey', 'strong-lightblue', 'strong-yellow', 'strong-red', 'strong-color', 'strong-color2'];

        const mosaicBackground = document.querySelector('.mosaic-background');
        if (mosaicBackground) {
            for (let i = 0; i < 25; i++) {
                const textItem = document.createElement('div');
                textItem.classList.add('text-item');
                let phrase = phrases[Math.floor(Math.random() * phrases.length)];
                let colorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
                phrase = phrase.replace('color-class', colorClass);
                textItem.innerHTML = phrase;
                textItem.style.left = `${Math.random() * 100}vw`;
                textItem.style.top = `${Math.random() * 100}vh`;
                mosaicBackground.appendChild(textItem);
            }
        }

        const images = document.querySelectorAll('.gallery-img');
        images.forEach(img => {
            img.addEventListener('click', function() {
                window.open(this.src, '_blank');
            });
        });

        // New code for randomizing the position of the "donotlook" link
        var randomLink = document.querySelector('.random-link');
        if (randomLink) {
            randomLink.style.setProperty('--random-top', Math.random());
            randomLink.style.setProperty('--random-left', Math.random());
        }
    }

    var pageLanguage = document.documentElement.lang;
    var messages = {
            'en': "CENSOREDMESSAGECENSOREDMESSAGE",
            'es': "CENSOREDMESSAGECENSOREDMESSAGE",
            'ru': "CENSOREDMESSAGECENSOREDMESSAGE",
            'tr': "CENSOREDMESSAGECENSOREDMESSAGE",
            'de': "CENSOREDMESSAGECENSOREDMESSAGE",
            'fr': "CENSOREDMESSAGECENSOREDMESSAGE",
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
    
        function typeWriter(text, index) {
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
                setTimeout(() => typeWriter(text, nextIndex), 10);
            }
        }
    });