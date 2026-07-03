let btn = null;
let lang = 1; // 1 for english, 2 for chinese T, 3 for chinese S

let imageLightbox;

function ensureImageLightbox() {
    if (imageLightbox) {
        return imageLightbox;
    }

    imageLightbox = document.createElement('div');
    imageLightbox.className = 'image-lightbox';
    imageLightbox.innerHTML = [
        '<div class="image-lightbox__backdrop" aria-hidden="true"></div>',
        '<figure class="image-lightbox__figure" role="dialog" aria-modal="true" aria-label="Image preview">',
        '<button type="button" class="image-lightbox__close" aria-label="Close image preview">&times;</button>',
        '<img class="image-lightbox__image" alt="">',
        '<figcaption class="image-lightbox__caption"></figcaption>',
        '</figure>'
    ].join('');

    document.body.appendChild(imageLightbox);

    const closeLightbox = function () {
        imageLightbox.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    imageLightbox.addEventListener('click', function (event) {
        if (event.target.closest('.image-lightbox__figure') && !event.target.classList.contains('image-lightbox__backdrop')) {
            return;
        }
        closeLightbox();
    });

    imageLightbox.querySelector('.image-lightbox__close').addEventListener('click', closeLightbox);
    imageLightbox.closeLightbox = closeLightbox;

    return imageLightbox;
}

function openImageLightbox(imageElement) {
    const lightbox = ensureImageLightbox();
    const previewImage = lightbox.querySelector('.image-lightbox__image');
    const caption = lightbox.querySelector('.image-lightbox__caption');

    previewImage.src = imageElement.src;
    previewImage.alt = imageElement.alt || '';
    caption.textContent = imageElement.alt || imageElement.getAttribute('data-caption') || '';

    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function initImageLightbox() {
    const images = document.querySelectorAll('.SE-imgContainer img');

    images.forEach(function (image) {
        if (image.dataset.lightboxBound === 'true') {
            return;
        }

        image.dataset.lightboxBound = 'true';
        image.addEventListener('click', function (event) {
            event.preventDefault();
            openImageLightbox(image);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape' || !imageLightbox || !imageLightbox.classList.contains('is-open')) {
            return;
        }

        imageLightbox.closeLightbox();
    });
}

// Function to detect and set language based on URL
function detectLanguageFromUrl() {
    var page_url = window.location.href;
    if (page_url.includes('/en/')) {
        lang = 1;
    } else if (page_url.includes('/zh/')) {
        lang = 2;
    } else if (page_url.includes('/ch/')) {
        lang = 3;
    }
}

function initLanguageSwitch() {
    btn = document.getElementById('lang-switch');
    if (!btn) {
        return;
    }

    btn.addEventListener('click', function() {
        var page_url = window.location.href;
        if (lang === 1) {
            if (page_url.includes('/en/')) {
                var new_url = page_url.replace('/en/', '/zh/');
                window.location.href = new_url;
            }
        } else if (lang === 2) {
            if (page_url.includes('/zh/')) {
                var new_url = page_url.replace('/zh/', '/ch/');
                window.location.href = new_url;
            }
        } else if (lang === 3) {
            lang = 1;
            if (page_url.includes('/ch/')) {
                var new_url = page_url.replace('/ch/', '/en/');
                window.location.href = new_url;
            }
        }
        lang++;
    });
}

function initPageScripts() {
    detectLanguageFromUrl();
    initImageLightbox();
    initLanguageSwitch();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPageScripts, { once: true });
} else {
    initPageScripts();
}




function onChangePageClick(event, targetPage, currentPage) {
		event.preventDefault();
        // set up the base URL
        var page_url = window.location.href;
        
        // remove the sections # from the page URL
        page_url = page_url.split('#')[0];
        
        const base = page_url.split('/'+currentPage)[0];
        console.log(base);
        
        // check if going back to index
        if (targetPage === 'index.html#three'){
            targetPage = '#three';
           clearInterval
        }else{
            console.log("targetPage is ", targetPage);
        }
        
        // Add separator if base doesn't already end with /
        const separator = base.endsWith('/') ? '' : '/';

        if (lang === 1) {
            console.log("Navigating to: ", base + separator + targetPage);
            window.location.href = base + separator + targetPage;
        }else if (lang === 2) {
            console.log("Navigating to: ", base + separator + targetPage);
            window.location.href = base + separator + targetPage;
        }else if (lang === 3) {
            console.log("Navigating to: ", base + separator + targetPage);
            window.location.href = base + separator + targetPage;
        }
    }


// function onChangePageClick(event, targetPage, currentPage) {
// 		event.preventDefault();
//         // set up the base URL
//         var page_url = window.location.href;
//         const base = page_url.split('/'+currentPage)[0];
//         console.log(base);
        
//         // in english page
//         if (lang === 1) {
//             window.location.href = base + "/" + targetPage;
//         }else if (lang === 2) {
//             window.location.href = base + "/" + targetPage;
//         }else if (lang === 3) {
//             window.location.href = base + "/" + targetPage;
//         }
// 	}