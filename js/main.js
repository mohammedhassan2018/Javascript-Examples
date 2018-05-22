//calculate textarea characters while writting
// onkeyup, this, textcontent, If condition

var myTextarea = document.getElementById('my-text'),
    mySpan = document.getElementById('my-span');

myTextarea.onkeyup = function () {
    
    'use strict';
    
    mySpan.textContent = 50 - this.value.length;
    
    mySpan.textContent < 0 ? mySpan.style.color = '#F00' : mySpan.style.color = '#000';

};


// Check if url Hash contains Text with Two methods
// Window.Location.Hash, indexOf, Substring

// Method 1

if (window.location.hash) {
    
    if (window.location.hash.indexOf('mohammed') === 1) { // 0 === #
        
        console.log('Good mohammed is found');
        
    } else {
        
        console.log('Bad mohammed is not found');
        
    }
}

// Method 2

if (window.location.hash) {
    
    var hash = window.location.hash.substring(1);
    
    if (hash === 'mohammed') {
        
        console.log('Good mohammed is found');
    }
        
    } else {
        
        console.log('Bad mohammed is not found');
        
    }


// clear input placeholder on focus
// onfocus, onblur, this

var ourInput = document.getElementById('ourinput');

ourInput.onfocus = function () {
    
    'use strict';
    
    if (this.placeholder === 'Type your name') {
        
        this.placeholder = '';
    }
}

ourInput.onblur = function () {
    
    'use strict';
    
    if (this.placeholder === '') {
        
        this.placeholder = 'Type your name';
    }
}

// create countdown timer
// setInterval(), clearInterval(), math.floor(), innerHTML

var seconds = 20, // Number of seconds
    
    countDiv = document.getElementById('countdown'),
    
    secondPass,
    
    countDown = setInterval(function () {
        
        'use strict';
        
        secondPass();
        
    }, 1000);

function secondPass() {
    
    'use strict';
    
    var minutes = Math.floor(seconds / 60),
        
        remSeconds = seconds % 60;
    
    if (seconds < 10) {
        
        remSeconds = "0" +remSeconds;
    }
    
    countDiv.innerHTML = minutes + ":" + remSeconds;
    
    if (seconds > 0) {
        
        seconds = seconds - 1; // Decrease one second every 1000 millsecond
    
    } else {
        
        clearInterval(countDown);
        
        countDiv.innerHTML = "Done";
        
    }
    
}


// Create simple dynamic clock
// Date

function showTime() {
    
    'use strict';
    
    var now = new Date(),
        
        hours = now.getHours(),
        
        minutes = now.getMinutes(),
        
        seconds = now.getSeconds();
    
    if (hours < 10) {
        
        hours = '0' + hours;
    }
    
    if (minutes < 10) {
        
        minutes = '0' + minutes;
    }
    
    if (seconds < 10) {
        
        seconds = '0' + seconds;
    }
    
    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
    
}

window.onload = function () {
    
    'use strict';
    
    setInterval(showTime, 500);
    
}


// Disable Right click on page
// addEventListener

document.addEventListener('contextmenu', function (e) {
    
    'use strict';
    
    e.preventDefault();
    
});


// Live change text on input
// onKeyup, textContent

var myTitle = document.getElementById('title'),
    
    myContent = document.getElementById('content'),
    
    myTitleLive = document.getElementById('title-live'),
    
    myContentLive = document.getElementById('content-live');

myTitle.onkeyup = function () {
    
    'use strict';
    
    myTitleLive.textContent = this.value;
    
};

myContent.onkeyup = function () {
    
    'use strict';
    
    myContentLive.textContent = this.value;
    
};


// Generate random serial number
// For, Math.floor, Math.random, substring

function generateSerial() {
    
    'use strict';
    
    var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        
        serialLength = 20,
        
        randomSerial = '',
        
        i,
        
        randomNumber;
    
    for (i = 0; i < serialLength; i = i + 1) {
        
        randomNumber = Math.floor(Math.random() * chars.length);
        
        randomSerial += chars.substring(randomNumber, randomNumber + 1);
        
    }
    
    document.getElementById('serial').innerHTML = randomSerial;
    
}


// Hide placeholder on input focus
// setAttribute, getAttribute

var myInput = document.getElementById('my-input');

myInput.onfocus = function () {
    
    'use strict';
    
    // store placeholder Attr In Backup Attr
    
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    
    // empty placeholder Attr
    
    this.setAttribute('placeholder', '');
    
};

myInput.onblur = function () {
    
    'use strict';
    
    // Get placeholder Attr From Backup Attr
    
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    
    // empty Backup Attr
    
    this.setAttribute('data-place', '');
    
};


// Redirect to Url
// Fumction, Window.Location, onClick

function redirectMe(url) {
    
    'use strict';
    
    if (url !== '') {
        
        window.location = url;
    }
}


// Type writter Effect on Text
// setInterval, i++

var myText = document.getElementById('type').getAttribute('data-text');
    
    i = 0,
    
    myButton = document.getElementById('button');

myButton.onclick = function () {
    
    'use strict';
    
    var typeWriter = setInterval(function () {
       
        document.getElementById('type').textContent += myText[i];
        
        i = i + 1;
        
        if (i > myText.length - 1) {
            
            clearInterval(typeWriter);
        }
        
    }, 100);
    
};



// Random class on Body
// Array, Math.floor, Math.random, setAttribute

var classList = ["class-one", "class-two", "class-three", "class-four"],
    
    randomKey = Math.floor(Math.random() * classList.length);

document.body.setAttribute('class', classList[randomKey]);


// scroll to top button
// pageYOffset, scrollTo, onscroll

var myButton = document.getElementById('goup');

window.onscroll = function () {
    
    'use strict';
    
    if (window.pageYOffset >= 700) {
        
        myButton.style.display = 'block';
        
    } else {
        
        myButton.style.display = 'none';
        
    }
};

myButton.onclick = function () {
    
    'use strict';
    
    window.scrollTo(0,0);
}


// show/hide password on click
// If condition, setArrtibute, This

var myButtonpass = document.getElementById('my-buttonpass'),
    
    myInputpass = document.getElementById('my-inputpass');

myButtonpass.onclick = function () {  
    
    'use strict';
    
    if (this.textContent === 'show password') {
        
        myInputpass.setAttribute('type','text');
        
        this.textContent = 'hide password';
        
    } else { 
        
        myInputpass.setAttribute('type','password');
        
        this.textContent = 'show password';
        
    }
    
};


// Show random image every X second
// Function, Math.random, Math.floor, setInterval

var myElement = document.getElementById('myImg'),
    
    myImg = [
        
        'images/01.jpg',
        'images/03.jpg'
    ];

function changeImage(myElement, myImg) {
    
    'use strict';
    
    setInterval(function () {
        
        var myRandomNum = Math.floor(Math.random() * myImg.length);
        
        myElement.src = myImg[myRandomNum];
        
    }, 1000);
}

changeImage(myElement, myImg);















































