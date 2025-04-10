(function() {
    'use strict';

    const currentUrl = window.location.href;
    const pattern = /^https?:\/\/(www\.)?(x\.com|twitter\.com)(\/.*)?$/i;

    if (pattern.test(currentUrl)) {
        const newUrl = currentUrl.replace(/^https?:\/\/(www\.)?(x\.com|twitter\.com)/i, 'https://xcancel.com');
        if (currentUrl !== newUrl) {
            window.location.replace(newUrl);
        }
    }
})();
