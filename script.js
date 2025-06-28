document.addEventListener('DOMContentLoaded', function() {
    const environment = document.body.className;
    const appTitle = document.getElementById('app-title');

    if (environment === 'dev') {
        appTitle.textContent = 'Fancy (Dev) Application! Full of magic!';
    } else if (environment === 'preprod') {
        appTitle.textContent = 'Fancy (Pre-Production) Application! Full of magic!';
    } else {
        appTitle.textContent = 'Fancy Application! Full of magic!';
    }

});
