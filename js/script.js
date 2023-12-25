document.getElementById('reveal-button').addEventListener('click', function() {
    window.location.href = 'ctao.html';
});

document.getElementById('reveal-button').addEventListener('click', function() {
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
            window.location.href = 'ctao_en.html';
            break;
        case 'de': // German
            window.location.href = 'ctao_de.html';
            break;
        case 'fr': // French
            window.location.href = 'ctao_fr.html';
            break;
        default: // Default to English
            window.location.href = 'ctao_en.html';
    }
});
