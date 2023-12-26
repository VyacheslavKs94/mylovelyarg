document.addEventListener('DOMContentLoaded', function() {
    var revealButton = document.getElementById('reveal-button');
    if (revealButton) {
        revealButton.addEventListener('click', function() {
            var userLang = navigator.language || navigator.userLanguage; 
            userLang = userLang.split('-')[0]; 

            // Mr. Sterling loves localized texts
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
                default: // English
                    window.location.href = 'ctao.html';
            }
        });
    }

    var pageLanguage = document.documentElement.lang;
    var messages = {
        'en': "<strong>Confidential Transmission to All Operatives</strong>\n\nAttention <strong><em>Operatives</em></strong>,\n\nThis is <strong>Sterling</strong>. A situation is unfolding that demands your keen observation. It's a pivotal moment requiring your insight and readiness. Someone new is about to step into the light, their expertise in ███████ and █████ ███████████ is unlike anything we've seen.\n\nI will try to share more information on <strong>Friday, 29th</strong>. My sources have unearthed a hint that will lead us to the next phase of our operation. This is just a fragment, but it's vital to our larger agenda.\n\nRemember, discretion is our backbone. Stay sharp and ready. I count on your vigilance.\n\nSterling out.\n\nEnd of Transmission.",
        'es': "<strong>Transmisión confidencial a todos los Operativos</strong>\n\nAtención <strong><em>Operativos</em></strong>,\n\nAquí <strong>Sterling</strong>. Se está desarrollando una situación que requiere vuestra aguda observación. Es un momento crucial que exige vuestra perspicacia y preparación. Alguien nuevo está a punto de salir a la luz, su experiencia en ███████ y █████ ███████████ es diferente a todo lo que hemos visto.\n\nIntentaré compartir más información el <strong>viernes, 29</strong>. Mis fuentes han desenterrado una pista que nos llevará a la próxima fase de nuestra operación. Esto es solo un fragmento, pero es vital para nuestra agenda más amplia.\n\nRecuerden, la discreción es nuestra columna vertebral. Manténganse atentos y listos. Cuento con vuestra vigilancia.\n\nSterling fuera.\n\nFin de la Transmisión.",
        'ru': "<strong>Конфиденциальная передача всем оперативникам</strong>\n\nВнимание <strong><em>оперативникам</em></strong>,\n\nЭто <strong>Стерлинг</strong>. Разворачивается ситуация, требующая вашего пристального внимания. Это ключевой момент, требующий вашего понимания и готовности. Кто-то новый собирается выйти на свет, его специализация в ███████ и █████ ███████████ не похожа ни на что, что мы видели ранее.\n\nЯ постараюсь поделиться большей информацией в <strong>пятницу, 29-го</strong>. Мои источники нашли подсказку, которая приведет нас к следующей фазе нашей операции. Это всего лишь фрагмент, но он жизненно важен для нашей более широкой агенды.\n\nПомните, дискреция - это наш костяк. Оставайтесь бдительными и готовыми. Я рассчитываю на вашу бдительность.\n\nСтерлинг вышел.\n\nКонец передачи.",
        'tr': "<strong>Tüm Operatiflere Gizli İletişim</strong>\n\nDikkat <strong><em>Operatifler</em></strong>,\n\nBurada <strong>Sterling</strong>. Dikkatinizi gerektiren bir durum gelişiyor. Bu, içgörünüzü ve hazırlığınızı gerektiren kritik bir an. Işığa adım atmak üzere olan yeni biri var, onların ███████ ve █████ ███████████ konusundaki uzmanlığı daha önce hiç karşılaşmadığımız bir şey.\n\n<strong>Cuma, 29'u</strong> takviminize işaretleyin. Kaynaklarım operasyonumuzun bir sonraki aşamasına bizi götürecek bir ipucu ortaya çıkardı. Bu sadece bir parça, ancak geniş çaplı planımız için hayati önem taşıyor.\n\nUnutmayın, gizlilik bizim temelimiz. Tetikte ve hazır olun. Uyanıklığınıza güveniyorum.\n\nSterling dışarıda.\n\nİletişimin Sonu.",
        'de': "<strong>Vertrauliche Übermittlung an alle Operative</strong>\n\nAchtung <strong><em>Operative</em></strong>,\n\nHier ist <strong>Sterling</strong>. Es entfaltet sich eine Situation, die eure scharfe Beobachtung erfordert. Es ist ein entscheidender Moment, der eure Einsicht und Bereitschaft verlangt. Jemand Neues tritt ins Rampenlicht, dessen Fachwissen in ███████ und █████ ███████████ ist wie nichts, was wir bisher gesehen haben.\n\nMarkiert <strong>Freitag, den 29.</strong> in euren Kalendern. Meine Quellen haben einen Hinweis aufgedeckt, der uns in die nächste Phase unserer Operation führen wird. Dies ist nur ein Bruchstück, aber von entscheidender Bedeutung für unsere umfassendere Agenda.\n\nDenkt daran, Diskretion ist unser Rückgrat. Bleibt scharf und bereit. Ich zähle auf eure Wachsamkeit.\n\nSterling raus.\n\nEnde der Übertragung.",
        'fr': "<strong>Transmission confidentielle à tous les Opérateurs</strong>\n\nAttention <strong><em>Opérateurs</em></strong>,\n\nIci <strong>Sterling</strong>. Une situation se déroule qui demande votre observation aiguë. C'est un moment crucial qui nécessite votre perspicacité et votre préparation. Quelqu'un de nouveau est sur le point de faire son apparition, son expertise en ███████ et █████ ███████████ est sans précédent.\n\nJe vais essayer de partager plus d'informations le <strong>vendredi 29</strong>. Mes sources ont déterré un indice qui nous mènera à la prochaine phase de notre opération. Ce n'est qu'un fragment, mais il est vital pour notre plan plus large.\n\nRappelez-vous, la discrétion est notre pilier. Restez affûtés et prêts. Je compte sur votre vigilance.\n\nSterling terminé.\n\nFin de la Transmission."
    };

    var hasVisited = localStorage.getItem('hasVisited-' + pageLanguage);
    var messageContainer = document.getElementById('message-container');
    var message = messages[pageLanguage] || messages['en']; 

    if (!hasVisited) {
        var i = 0;

        function typeWriter() {
            if (i < message.length) {
                messageContainer.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, 50); 
            }
        }

        typeWriter();
        localStorage.setItem('hasVisited-' + pageLanguage, 'true');
    } else {
        messageContainer.innerText = message;
    }
});
