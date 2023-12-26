document.addEventListener('DOMContentLoaded', function() {
    const enterTranslations = ['Enter', 'Entrar', 'Войти', 'Gir', 'Betreten', 'Entrer'];
    let currentIndex = 0;
    const button = document.getElementById('reveal-button');

    if (button) {
        setInterval(() => {
            button.textContent = enterTranslations[currentIndex];
            currentIndex = (currentIndex + 1) % enterTranslations.length;
        }, 300);
    }

    // Language redirection on reveal-button click
    const revealButton = document.getElementById('reveal-button');
    if (revealButton) {
        revealButton.addEventListener('click', function() {
            var userLang = navigator.language || navigator.userLanguage; 
            userLang = userLang.split('-')[0];

            // ... existing switch statement ...
        });
    }

    if (window.location.pathname.includes('cctv.html')) {
        const phrases = [
            'Can <strong>anyone</strong> see the truth?', 
            'Is <strong>trust</strong> ever justified?',
            'What lies <strong>in</strong> the shadows?',
            'Who really controls <strong>Sterling</strong>?',
            'Why <strong>conceal</strong> your doubts?',
            'Are <strong>the</strong> secrets safe?',
            'What\'s <strong>hidden</strong> beneath the surface?',
            'Do <strong>truths</strong> ever emerge?'
        ];
    
        const mosaicBackground = document.querySelector('.mosaic-background');
        if (mosaicBackground) {
            for (let i = 0; i < 100; i++) {
                const textItem = document.createElement('div');
                textItem.classList.add('text-item');
                textItem.innerHTML = phrases[Math.floor(Math.random() * phrases.length)];
                textItem.style.left = `${Math.random() * 100}vw`;
                textItem.style.top = `${Math.random() * 100}vh`;
                mosaicBackground.appendChild(textItem);
            }
        }

        // Attach click event listener to images
        const images = document.querySelectorAll('.gallery-img');
        images.forEach(img => {
            img.addEventListener('click', function() {
                window.open(this.src, '_blank');
            });
        });
    }

    // Typewriter effect for the message
    var pageLanguage = document.documentElement.lang;
    var messages = {
            'en': "<strong>Confidential Message to All Echo Operatives</strong>\n\nOperatives,\n\nThis is <strong>Sterling</strong>. I've managed to intercept some intriguing information from <strong>Life Inc.</strong> through our secure communication channels. It appears they were planning something, and that something soon will be revealed to us.\n\nI also received <strong><a href='https://mrsterling.quest/cctv.html' target='_blank'>four images</a></strong> from CCTV, but they were all corrupted. Still, I managed to recreate them using JidMourney. Check them out. What are these mysterious stripes flying through? And why are these people so afraid of something? The significance of this is yet unknown, but rest assured, I am working to uncover more.\n\nAdditionally, I've tapped into a radio frequency and caught two phrases: \"<strong>My .--. .- - .. . -. -.-. . is .-- .- -. .. -. --. ,\" and \"Is this . -. - . .-. - .- .. -. .. -. --. ?</strong>\" \n\nI advise you to decode these messages and grasp their deeper meaning, if they have one.\n\nHopefully, I will get back on <strong>December 30th</strong> with some new information. We must be prepared for what can be unveiled.\n\nSterling out.",
            'es': "<strong>Mensaje confidencial para todos los operativos Echo</strong>\n\nOperativos,\n\nAquí <strong>Sterling</strong>. He logrado interceptar información intrigante de <strong>Life Inc.</strong> a través de nuestros canales de comunicación seguros.\n\nRecibí <a href='https://mrsterling.quest/cctv.html' target='_blank'>cuatro imágenes</a> del <strong>CCTV</strong>, pero todas estaban corruptas. Sin embargo, logré recrearlas usando <strong>JidMourney</strong>. Échenles un vistazo. ¿Qué son esas misteriosas franjas voladoras? ¿Y por qué esta gente tiene tanto miedo de algo? El significado de esto aún se desconoce, pero pueden estar seguros de que estoy trabajando para descubrir más.\n\nAdemás, me conecté a una frecuencia de radio y capté dos frases: \"<strong>My .--. .- - .. . -. -.-. . is .-- .- -. .. -. --. ,\" y \"Is this . -. - . .-. - .- .. -. .. -. --. ?</strong>\" \n\nLes aconsejo que descifren estos mensajes y comprendan su significado más profundo, si lo tienen.\n\nEspero volver el <strong>30 de diciembre</strong> con nueva información. Debemos estar preparados para lo que se pueda revelar.\n\nSterling. Fin de la comunicación.",
            'ru': "<strong>Конфиденциальное сообщение всем эхо-оперативникам</strong>\n\nОперативники,\n\nЭто <strong>Стерлинг</strong>. \n\nМне удалось перехватить интересную информацию от <strong>Life Inc.</strong> через наши защищенные каналы связи.\n\nЯ получил <a href='https://mrsterling.quest/cctv.html' target='_blank'>четыре изображения</a> с <strong>камер видеонаблюдения</strong>, но все они были повреждены. Тем не менее, мне удалось воссоздать их с помощью <strong>JidMourney</strong>. Посмотрите на них. Что это за загадочные полосы, пролетающие сквозь воздух? И почему эти люди так боятся чего-то? Значение этого пока неизвестно, но можете быть уверены, я работаю над тем, чтобы узнать больше.\n\nКроме того, мне удалось подключиться к радиочастоте и услышать две фразы: \"<strong>My .--. .- - .. . -. -.-. . is .-- .- -. .. -. --. ,\" и \"Is this . -. - . .-. - .- .. -. .. -. --. ?</strong>\" \n\nЯ советую вам расшифровать эти сообщения и понять их более глубокий смысл, если он есть.\n\nНадеюсь, <strong>30 декабря</strong> я смогу вернуться с новой информацией. Мы должны быть готовы ко всему.\n\nСтерлинг. Конец связи.",
            'tr': "<strong>Tüm Echo Operatiflerine Gizli Mesaj</strong>\n\nOperatifler,\n\nBurada <strong>Sterling</strong>.\n\nGüvenli iletişim kanallarımız aracılığıyla Life Inc.'ten ilgi çekici bazı bilgiler ele geçirdim. Anlaşılan bir şeyler planlıyorlar ve bu, yakında bizlere açıklanacak.\n\n<strong>CCTV</strong>'den <a href='https://mrsterling.quest/cctv.html' target='_blank'>dört görüntü</a> aldım, ancak hepsi bozulmuştu. Yine de, <strong>JidMourney</strong> kullanarak onları yeniden oluşturmayı başardım. Bir göz atın. Bu uçan gizemli çizgiler nedir? Ve bu insanlar neden bir şeyden bu kadar korkuyorlar? Bunun anlamı henüz bilinmiyor, ancak daha fazlasını ortaya çıkarmak için çalıştığımdan emin olabilirsiniz.\n\nAyrıca, bir radyo frekansına bağlanarak iki ifade yakaladım: \"<strong>My .--. .- - .. . -. -.-. . is .-- .- -. .. -. --. ,\" ve \"Is this . -. - . .-. - .- .. -. .. -. --. ?</strong>\" \n\nBu mesajları çözmenizi ve varsa daha derin anlamlarını anlamanızı tavsiye ederim.\n\nUmarım <strong>30 Aralık</strong>'ta yeni bilgilerle geri döneceğim. Açığa çıkabilecek şeylere karşı hazırlıklı olmalıyız.\n\nSterling. İletişim sona erdi.",
            'de': "<strong>Vertrauliche Nachricht an alle Echo-Operative</strong>\n\nOperative,\n\nHier spricht <strong>Sterling</strong>.\n\nIch habe einige faszinierende Informationen von <strong>Life Inc.</strong> über unsere sicheren Kommunikationskanäle abgefangen.\n\nIch erhielt <a href='https://mrsterling.quest/cctv.html' target='_blank'>vier Bilder</a> vom <strong>CCTV</strong>, aber alle waren beschädigt. Dennoch ist es mir gelungen, sie mit <strong>JidMourney</strong> zu rekonstruieren. Schauen Sie sie sich an. Was sind das für mysteriöse Streifen, die durch die Luft fliegen? Und warum haben diese Menschen so große Angst vor etwas? Die Bedeutung davon ist noch unbekannt, aber seien Sie versichert, ich arbeite daran, mehr herauszufinden.\n\nAußerdem habe ich eine Radiofrequenz abgehört und zwei Phrasen aufgefangen: \"<strong>My .--. .- - .. . -. -.-. . is .-- .- -. .. -. --. ,\" und \"Is this . -. - . .-. - .- .. -. .. -. --. ?</strong>\" \n\nIch rate Ihnen, diese Nachrichten zu entschlüsseln und ihre tiefere Bedeutung zu verstehen, falls sie eine haben.\n\nIch hoffe, am <strong>30. Dezember</strong> mit neuen Informationen zurückzukehren. Wir müssen auf das vorbereitet sein, was enthüllt werden könnte.\n\nSterling. Ende der Übertragung.",
            'fr': "<strong>Message confidentiel pour tous les opérateurs Echo</strong>\n\nOpérateurs,\n\nC'est <strong>Sterling</strong>.\n\nJ'ai réussi à intercepter des informations intrigantes de <strong>Life Inc.</strong> via nos canaux de communication sécurisés.\n\nJ'ai reçu <a href='https://mrsterling.quest/cctv.html' target='_blank'>quatre images</a> du <strong>CCTV</strong>, mais elles étaient toutes corrompues. Néanmoins, j'ai réussi à les recréer en utilisant <strong>JidMourney</strong>. Regardez-les. Quelles sont ces mystérieuses rayures volantes ? Et pourquoi ces personnes ont-elles si peur de quelque chose ? La signification de cela est encore inconnue, mais soyez assurés que je travaille pour en découvrir davantage.\n\nDe plus, j'ai capté une fréquence radio et intercepté deux phrases : \"<strong>My .--. .- - .. . -. -.-. . is .-- .- -. .. -. --. ,\" et \"Is this . -. - . .-. - .- .. -. .. -. --. ?</strong>\" \n\nJe vous conseille de décoder ces messages et de comprendre leur sens plus profond, s'ils en ont un.\n\nJ'espère revenir le <strong>30 décembre</strong> avec de nouvelles informations. Nous devons être prêts à tout ce qui peut être révélé.\n\nSterling. Fin de la communication."
    };

    var messageContainer = document.getElementById('message-container');
    var message = messages[pageLanguage] || messages['en'];

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

            // Check if the current character is the start of an HTML tag
            if (nextChar === '<') {
                let tagEnd = text.indexOf('>', index);
                if (tagEnd >= 0) {
                    nextChar = text.substring(index, tagEnd + 1); // Include entire tag
                    nextIndex = tagEnd + 1;
                }
            }

            messageContainer.innerHTML += nextChar;
            setTimeout(() => typeWriter(text, nextIndex), 50);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const phrases = [
            'Can <strong>anyone</strong> see the truth?', 
            'Is <strong>trust</strong> ever justified?',
            'What lies <strong>in</strong> the shadows?',
            'Who really controls <strong>Sterling</strong>?',
            'Why <strong>conceal</strong> your doubts?',
            'Are <strong>the</strong> secrets safe?',
            'What\'s <strong>hidden</strong> beneath the surface?',
            'Do <strong>truths</strong> ever emerge?'
        ];
    
        const mosaicBackground = document.querySelector('.mosaic-background');
    
        for (let i = 0; i < 100; i++) {
            const textItem = document.createElement('div');
            textItem.classList.add('text-item');
            textItem.innerHTML = phrases[Math.floor(Math.random() * phrases.length)];
            textItem.style.left = `${Math.random() * 100}%`;
            textItem.style.top = `${Math.random() * 100}%`;
    
            mosaicBackground.appendChild(textItem);
        }
    });
    
    // Handling image clicks to open in new window
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.gallery-img');
        images.forEach(img => {
            img.addEventListener('click', function() {
                window.open(this.src, '_blank');
            });
        });
    });
});