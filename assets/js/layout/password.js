export default function() {
    
    const containerEl = document.querySelector('.section-password');
    const passwordOverlayContainerEl = document.querySelector('.password-overlay-container');
    const passwordOverlayActionShowEl = containerEl.querySelector('#password-overlay-action-show');
    const passwordOverlayActionHideEl = containerEl.querySelector('#password-overlay-action-hide');

    if (passwordOverlayActionShowEl) {
        passwordOverlayActionShowEl.addEventListener('click', (e) => {
            passwordOverlayContainerEl.classList.add('active');
        });
    }

    if (passwordOverlayActionHideEl) {
        passwordOverlayActionHideEl.addEventListener('click', (e) => {
            passwordOverlayContainerEl.classList.remove('active');
        });
    }
}