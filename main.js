const animals = {
    wolf: {
        fact:
            "Wolves are the largest members of the dog family. Wolves can roam large and long distances, sometimes up to 12 miles (20 kilometers) in a single day.",
        music: "./sounds/wolf.mp3"
    },
    lion: {
        fact:
            "Lions are the second largest big cat species in the world (behind tigers).The average male lion weighs around 180 kg (400 lb) while the average female lion weighs around 130 kg (290 lb).",
        music: "./sounds/lion.mp3"
    },
    elephant: {
        fact:
            "Elephants are the world’s largest land animal! Male African elephants can reach 3m tall and weigh between 4,000 -7,500kg. Asian elephants are slightly smaller, reaching 2.7m tall and weighing 3,000– 6,000kg.",
        music: "./sounds/elephant.mp3"
    },
    crocodile: {
        fact:
            "Crocodiles are large reptiles that live in fresh water, lakes, rivers, brackish water (mix between salty and fresh water). They can be found in tropic areas of Australia, Africa, America and Asia.",
        music: "./sounds/crocodile.mp3"
    }
};

let isPlayingJungleMusic = false;
const audio = new Audio("./sounds/junglemusic.mp3");

function showAnimalDetail(animal) {
    const audio = new Audio(animals[animal].music);
    audio.play();
    document.querySelector("#facts").innerHTML = animals[animal].fact;
}

function playJungleMusic() {
    // if (!isPlayingJungleMusic) {
        audio.play();
        isPlayingJungleMusic = true;
    // } else {
    //     audio.pause();
    //     isPlayingJungleMusic = false;
    // }
}

function pauseJungleMusic()
{
    audio.pause();
    isPlayingJungleMusic=false;
}

function display_random_image() {
    var theImages = [{
        src: "./images/1.JPG",
        width: "500",
        height: "500"
    }, {
        src: "./images/wolf.jpeg",
        width: "500",
        height: "500"
    }, {
        src: "./images/2.jpeg",
        width: "500",
        height: "500"
    }, {

        src: "./images/3.jpeg",
        width: "500",
        height: "500"
    },
    {
        src: "./images/4.jpeg",
        width: "500",
        height: "500"
    }, {
        src: "./images/5.jpeg",
        width: "500",
        height: "500"

    }];

    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }

    // create random image number
    function getRandomInt(min, max) {
        //  return Math.floor(Math.random() * (max - min + 1)) + min;

        imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
    }

    // 0 is first image,   preBuffer.length - 1) is  last image

    var newImage = getRandomInt(0, preBuffer.length - 1);

    // remove the previous images
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    // display the image  
    document.getElementById('image').appendChild(newImage);
}


















// function checkimage()
// {
//      var img = document.createElement('img'); 
//             img.src = "./images/wolf.jpeg" ; 
//             document.getElementById('image').appendChild(img); 

// }



// function wolfSpeaking(){
//     const audio = new Audio("./sounds/wolf.mp3");
//     audio.play();
//     alert('clciked')

// }
// function lionSpeaking(){
//     const audio = new Audio("./sounds/lion.mp3");
//     audio.play();
// }
// function elephantSpeaking(){
//     const audio = new Audio("./sounds/elephant.mp3");
//     audio.play();
// }
// function crocoSpeaking(){
//     const audio = new Audio("./sounds/crocodile.mp3");
//     audio.play();
// }

// const audio = new Audio("./sounds/junglemusic.mp3");
// function jungleMusic()
// {

//     audio.play();
// }

// function pausejungleMusic()
// {
//     audio.pause();
// }