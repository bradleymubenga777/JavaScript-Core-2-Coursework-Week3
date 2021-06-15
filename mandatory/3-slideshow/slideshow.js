// Storing DOM Element As Variable
let slideImage = document.getElementById('slideImage');
let fwdBtn = document.getElementById('forwardButton');
let bckwdBtn = document.getElementById('backwardButton');

//Storing Image Links As An Array
let imageArray = ["https://images.unsplash.com/photo-1601758066440-cbfc06a82914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1550414485-9f22b971dbf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1534803359379-964dadf6c290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1606509779095-de8fd5187049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1486530555807-11f29d0dff36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"]

// Creating An Event Listener For The Forward Button
fwdBtn.addEventListener('click', (e) => {
    //
    e.preventDefault();
    
    //
    let theIndex = Math.floor(Math.random(0 * 5));

    //
    slideImage.setAttribute('src', imageArray[theIndex]);
})