document.addEventListener('DOMContentLoaded', function() {
    const unicorn = document.querySelector('.unicorn');
    const environment = document.body.className;

    if (environment === 'dev') {
unicorn.src = 'unicorn-dev.png';
unicorn.alt = 'Dev Unicorn';
    } else if (environment === 'preprod') {
unicorn.src = 'unicorn-preprod.png';
unicorn.alt = 'Staging Unicorn';
    } else if (environment === 'prod') {
unicorn.src = 'unicorn-prod.png';
unicorn.alt = 'Prod Unicorn';
    }
});
