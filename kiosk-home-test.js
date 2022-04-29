function test() {
    console.log(window.location)
    //Global variable 
    let winLoc = window.location;

    //Test 1
    if(winLoc.pathname !== '/index.html'){
        console.log('Pathname test was successful')
    }
    else {
        console.error('Pathname has been changed. Please update test or revert code.')
    }

    let isModalRenderable = document.querySelector('#terms');
    if (isModalRenderable === null || undefined) {
        console.error('The Terms and Conditions for Octo Did Not Load. Ensure not overriden or commented in index.html')
    }
    if (isModalRenderable!== null || undefined) {
        console.log('Terms and Conditions Loaded.')
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