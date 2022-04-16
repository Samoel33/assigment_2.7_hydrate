const stringDisplay = document.querySelector('.stringDisplay');
var timeInt = 2000;
var delayTime = 6000;
var HydrateFn = setInterval(function() {
    const stringText = document.createElement('p');
    stringText.innerHTML = 'Hello!';
    stringDisplay.appendChild(stringText);
}, timeInt);
var StopFn = setTimeout(() => {
    clearInterval(HydrateFn);
}, delayTime);