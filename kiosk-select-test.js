function test() {
    console.log(window.location)
    //Global variable 
    let winLoc = window.location;

    //Test 1
    if(winLoc.pathname === '/kiosk-select.html'){
        console.log('Pathname test was successful')
    }
    else {
        console.error('Pathname has been changed. Please update test or revert code.')
    }


    let emailParam = winLoc.search.substring(0,7)
    //Email
    if( emailParam === "?email="){
        console.log('Search test was successful')
    }
    else {
        console.error('Error: PathName has been changed. Please revert code or write a new test.')
    }

    let isCardRendering = document.querySelector('.card');
    if (isCardRendering === null || undefined) {
        console.error('The Cards for OctoPrint Did Not Load. Please check to ensure Bootstrap CDN for v4 is Present and on the page. Also, ensure not commented in kiosk.js')
    }
    if (isCardRendering[0] !== null || undefined) {
        console.log('Bootstrap cards are enabled on the page.')
    }
}

test();