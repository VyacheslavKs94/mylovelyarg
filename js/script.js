document.addEventListener('DOMContentLoaded', function() {
    const enterTranslations = ['Enter', 'Entrar', 'Войти', 'Gir', 'Betreten', 'Entrer']; // English, Spanish, Russian, Turkish, German, French
    let currentIndex = 0;
    const button = document.getElementById('reveal-button');

    setInterval(() => {
        button.textContent = enterTranslations[currentIndex];
        currentIndex = (currentIndex + 1) % enterTranslations.length;
    }, 300); // Change text every second
});

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
        'es': "<strong>Mensaje confidencial para todos los operativos Echo</strong>\n\nOperativos,\n\nAquí Sterling. He logrado interceptar información intrigante de Life Inc. a través de nuestros canales de comunicación seguros. Parece que estaban planeando algo, y eso pronto se nos revelará.\n\nTambién recibí tres imágenes de CCTV, pero todas estaban corruptas. Sin embargo, logré recrearlas usando JidMourney. Echad un vistazo. ¿Qué es esa misteriosa franja negra? ¿Y por qué esta gente tiene tanto miedo de algo? El significado de esto aún se desconoce, pero os aseguro que estoy trabajando para descubrir más.\n\nAdemás, me conecté a una frecuencia de radio y capté dos frases: \"My .--. .- - .. . -. -.-. . is .-- .- -. .. -. --. ,\" y \"Is this . -. - . .-. - .- .. -. .. -. --. ?\" Os aconsejo que descifréis estos mensajes y comprendáis su significado más profundo, si lo hay.\n\nEspero volver el 30 de diciembre con nueva información. Debemos estar preparados para lo que se pueda revelar.\n\nSterling. Fin de la comunicación.",
        'ru': "<strong>Конфиденциальное сообщение всем эхо-оперативникам</strong>\n\nОперативники,\n\nЭто Стерлинг. Мне удалось перехватить интересную информацию от Life Inc. через наши защищенные каналы связи. Похоже, они что-то планировали, и скоро это что-то станет известно нам.\n\nЯ также получил три изображения с камер видеонаблюдения, но все они были повреждены. Тем не менее, мне удалось воссоздать их с помощью JidMourney. Посмотрите на них. Что это за загадочная черная полоса? И почему эти люди так боятся чего-то? Значение этого пока неизвестно, но можете быть уверены, я работаю над тем, чтобы узнать больше.\n\nКроме того, мне удалось подключиться к радиочастоте и услышать две фразы: \"My .--. .- - .. . -. -.-. . is .-- .- -. .. -. --. ,\" и \"Is this . -. - . .-. - .- .. -. .. -. --. ?\" Я советую вам расшифровать эти сообщения и понять их более глубокий смысл, если он есть.\n\nНадеюсь, 30 декабря я смогу вернуться с новой информацией. Мы должны быть готовы к тому, что может быть раскрыто.\n\nСтерлинг. Конец связи.",
        'tr': "<strong>Tüm Echo Operatiflerine Gizli Mesaj</strong>\n\nOperatifler,\n\nBurada Sterling. Güvenli iletişim kanallarımız aracılığıyla Life Inc.'ten ilgi çekici bazı bilgiler ele geçirdim. Anlaşılan bir şeyler planlıyorlar ve bu, yakında bizlere açıklanacak.\n\nAyrıca CCTV'den üç görüntü aldım, ancak hepsi bozulmuştu. Yine de, JidMourney kullanarak onları yeniden oluşturmayı başardım. Bir göz atın. Bu gizemli siyah şerit ne? Ve bu insanlar neyden bu kadar korkuyorlar? Bunun anlamı henüz bilinmiyor, ancak daha fazlasını ortaya çıkarmak için çalıştığımdan emin olabilirsiniz.\n\nBunun yanı sıra, bir radyo frekansına bağlanarak iki ifade yakaladım: \"My .--. .- - .. . -. -.-. . is .-- .- -. .. -. --. ,\" ve \"Is this . -. - . .-. - .- .. -. .. -. --. ?\" Bu mesajları çözmenizi ve varsa daha derin anlamlarını anlamanızı tavsiye ederim.\n\nUmarım 30 Aralık'ta yeni bilgilerle geri döneceğim. Açığa çıkabilecek şeylere karşı hazırlıklı olmalıyız.\n\nSterling. İletişim sona erdi.",
        'de': "<strong>Vertrauliche Nachricht an alle Echo-Operative</strong>\n\nOperative,\n\nHier spricht Sterling. Ich habe einige faszinierende Informationen von Life Inc. über unsere sicheren Kommunikationskanäle abgefangen. Es scheint, dass sie etwas planen, und dieses Etwas wird uns bald offenbart.\n\nIch habe auch drei Bilder von der Überwachungskamera erhalten, aber sie waren alle beschädigt. Dennoch ist es mir gelungen, sie mit JidMourney zu rekonstruieren. Schauen Sie sie sich an. Was ist dieser mysteriöse schwarze Streifen? Und warum fürchten sich diese Menschen so sehr vor etwas? Die Bedeutung davon ist noch unbekannt, aber seien Sie versichert, ich arbeite daran, mehr herauszufinden.\n\nAußerdem habe ich eine Radiofrequenz abgehört und zwei Phrasen aufgefangen: 'My .--. .- - .. . -. -.-. . is .-- .- -. .. -. --. ,' und 'Is this . -. - . .-. - .- .. -. .. -. --.?' Ich rate Ihnen, diese Nachrichten zu entschlüsseln und ihre tiefere Bedeutung zu verstehen, falls sie eine haben.\n\nIch hoffe, am 30. Dezember mit neuen Informationen zurückzukehren. Wir müssen auf das vorbereitet sein, was enthüllt werden könnte.\n\nSterling. Ende der Übertragung.",
        'fr': "<strong>Message confidentiel pour tous les opérateurs Echo</strong>\n\nOpérateurs,\n\nC'est Sterling. J'ai réussi à intercepter des informations intrigantes de Life Inc. via nos canaux de communication sécurisés. Il semble qu'ils planifiaient quelque chose, et ce quelque chose sera bientôt révélé.\n\nJ'ai également reçu trois images de CCTV, mais elles étaient toutes corrompues. Néanmoins, j'ai réussi à les recréer en utilisant JidMourney. Regardez-les. Qu'est-ce que cette mystérieuse bande noire ? Et pourquoi ces personnes ont-elles si peur de quelque chose ? La signification de cela est encore inconnue, mais soyez assurés que je travaille pour en découvrir davantage.\n\nDe plus, j'ai capté une fréquence radio et attrapé deux phrases : 'My .--. .- - .. . -. -.-. . is .-- .- -. .. -. --. ,' et 'Is this . -. - . .-. - .- .. -. .. -. --.?' Je vous conseille de décoder ces messages et de comprendre leur sens plus profond, s'ils en ont un.\n\nJ'espère revenir le 30 décembre avec de nouvelles informations. Nous devons être prêts pour ce qui pourrait être révélé.\n\nSterling. Fin de la communication."
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
    messageContainer.innerHTML = message;
}

});
