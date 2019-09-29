/*document.addEventListener("DOMContentLoaded",function(){*/


    class Modal {
        constructor(overlay) {
            this.overlay = overlay;
            const closeButton = overlay.querySelector('.j2-modal-footer__button-close')
            closeButton.addEventListener('click', this.close.bind(this));
            overlay.addEventListener('click', e => {
                if (e.srcElement.id === this.overlay.id) {
                    this.close();
                }
            });
        }
        open() {
            this.overlay.classList.remove('j2-hidden');
        }

        close() {
            this.overlay.classList.add('j2-hidden');
        }
    }

    const modal = new Modal(document.querySelector('.j2-modal-overlay'));
    window.openModal = modal.open.bind(modal);
    const modal2 = new Modal(document.querySelector('.j2-modal-overlay-secondary'));
    window.openModal2 = modal.open.bind(modal2);


/*
});*/
