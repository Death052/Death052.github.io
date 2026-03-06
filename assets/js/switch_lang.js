const btn = document.getElementById('lang-switch');
const ageEn = document.getElementById('age-en');
const ageZh = document.getElementById('age-zh');
const labelEn = document.getElementById('age-label-en');
const labelZh = document.getElementById('age-label-zh');
let lang = 1; // 1 for english, 2 for chinese T, 3 for chinese S

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

// Call the function when page loads
detectLanguageFromUrl();

btn.addEventListener('click', function() {
    // if in english page, find /en/ and replace with /zh/
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
        }

        if (lang === 1) {
            window.location.href = base + "/" + targetPage;
        }else if (lang === 2) {
            window.location.href = base + "/" + targetPage;
        }else if (lang === 3) {
            window.location.href = base + "/" + targetPage;
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