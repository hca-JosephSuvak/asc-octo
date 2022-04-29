function test() {
    console.log(window.location)
    //Global variable 
    let winLoc = window.location;

    //Test 1
    if(winLoc.pathname === '/kiosk-home.html'){
        console.log('Pathname test was successful')
    }
    else {
        console.error('Pathname has been changed. Please update test or revert code.')
    }

    let isModalRenderable = document.querySelector('.modal-body');
    if (isModalRenderable === null || undefined) {
        console.error('The Modal Body for Octo Did Not Load. Please check to ensure Bootstrap CDN for v4 is Present and on the page. Also, ensure not commented in kiosk-home.html')
    }
    if (isModalRenderable!== null || undefined) {
        console.log('Modal is enabled on the page.')
    }

    
    let isInputRendering = document.querySelector('#email-input');
    if (isInputRendering === null || undefined) {
        console.error('The Email Input Field for Octo Did Not Load. Please check to ensure Bootstrap CDN for v4 is Present and on the page. Also, ensure not commented in kiosk-home.html')
    }
    if (isInputRendering !== null || undefined) {
        console.log('Email Input Field is enabled on the page.')
    }
}

test();