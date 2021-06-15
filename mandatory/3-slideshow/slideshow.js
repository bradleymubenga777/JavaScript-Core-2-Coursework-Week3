// Storing DOM Element As Variable
let slideImage = document.getElementById('slideImage');
let fwdBtn = document.getElementById('forwardButton');
let bckwdBtn = document.getElementById('backwardButton');

//Storing Image Links As An Array
let imageArray = ["https://images.unsplash.com/photo-1601758066440-cbfc06a82914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1609156770484-794ca6a3498a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"]

// Creating An Event Listener For The Forward Button
fwdBtn.addEventListener('click', (e) => {
    //
    e.preventDefault();

    //
    for (i = 0; i < imageArray.length; i++) {
        //
        slideImage.setAttribute('src', imageArray[i]);
    }
})