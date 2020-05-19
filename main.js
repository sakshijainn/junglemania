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
    },

    monkey: {
        fact : 
        "Oh monkeys are naughty creatures, who love to play around and terrorize people and other animals! ",
        music:"./sounds/monkey.mp3"
    },
    gorilla: {
        fact : 
        "While humans walk on two legs, the gorilla carries its weight around on all four limbs. ",
        music:"./sounds/gorilla.wav"
    },
    fox: {
        fact : 
        "Foxes are known to be friendly and curious. They play among themselves, as well as with other animals ",
        music:"./sounds/fox.wav"
    },

    racoon:
    {
        fact:
        "A raccoon eats whatever it can find in its environment – from bugs to plants.",
        music:"./sounds/racoon.mp3"
    },
    cat :
    {
        fact : "Meows are not innate cat language—they developed them to communicate with humans!",
       music :"./sounds/cat.mp3"
    },
    tiger:
    {
        fact:"one swipe from a Tiger’s front hand is enough to kill a person or an animal, or at least break one’s bones.",
        music:"./sounds/tiger.mp3"
    },
    leopard:
    {
        fact:"Leopards don’t like to hang out with their friends…they are lone creatures and have their own territory.",
        music:"./sounds/leopard.mp3"
    },
    horse:
    {
        fact:"horses do sleep standing up! They sleep laying down too, but only for short times.",
        music:"./sounds/horse.mp3"
    },
    unicorn:
    {
        fact:"According to mythology, whoever touches a pure White Unicorn, will find happiness and joy in his entire life.",
        music:"./sounds/unicorn.mp3"
    },
    zebra:
    {
        fact:"Zebras have excellent eyesight and hearing.",
        music:"./sounds/zebra.mp3"
    },
    deer:
    {
        fact:"Deer are known for being calm and gentle animals. Many people even think of Bambi, the young and playful Disney cartoon, when they see a deer out in the wild.",
        music:"./sounds/deer.wav"
    },
    cow:
    {
        fact:"The color red doesn’t make bulls angry. In fact, cows are red-green colorblind!",
        music:"./sounds/cow.mp3"
    },
    pig:
    {
        fact:"Pigs are intelligent animals.",
        music:"./sounds/pig.wav"
    },
    goat:
    {
        fact:"a baby goat is called a kid, but did you know that, because of that, a goat giving birth is said to be “kidding”?",
        music:"./sounds/goat.wav"
    },
    camel:
    {
        fact:"Camels are very social, even though they might seem extremely laid-back and slow",
        music:"./sounds/camel.mp3"
    },
    giraffe:
    {
        fact:"Giraffes spend most of their lives standing up; they even sleep and give birth standing up",
        music:"./sounds/zebra.mp3"
    },
    rat:
    {
        fact:"Mice have a pointed snout, small rounded ears, and a long almost hairless tail.",
        sound:"./sounds/rat.mp3"
    },
    rabbit:
    {
        fact:"Their vision covers nearly 360 degrees, which allows them to see what's coming from behind them, above them, and from the sides without turning their heads.",
        sound:"./sounds/rabbit.mp3"
    },
    bear:
    {
        fact:" They have the largest and most complex brains in comparison to other land mammals their size and they rely on this brain for a number of behaviors. ",
        sound:"./sounds/bear.mp3"
    },
    parrot:
    {
        fact:"Parrot feet are like human hands. They don’t just walk or perch on them. They can pick up objects with them and even pick up food and bring it to their mouths.",
        sound:"./sounds/parrot.mp3"
    }

    
};


function showAnimalDetail(animal) {
    const audio = new Audio(animals[animal].music);
    audio.play();
    document.querySelector("#fact").innerHTML = animals[animal].fact;
}


let isPlayingJungleMusic = false;
const audio = new Audio("./sounds/junglemusic.mp3");

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



function pauseJungleMusic()
{
    audio.pause();
    isPlayingJungleMusic=false;
}











// function display(theImages)
// {
//     const image1 = new Image(animals[animal].music);
// document.getElementById("image").style.backgroundImage = "url('./images/1.jpg')";
// }
   

function display(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('./images/1.jpg')",
                   "url('./images/2.jpg')",
                   "url('./images/3.jpeg')",
                   "url('./images/4.jpeg')",
                   "url('./images/5.jpeg')",
                   "url('./images/6.jpeg')",
                   "url('./images/7.jpeg')",
                   "(url('./images/8.jpeg')"
                   ];
    document.getElementById("image").style.backgroundImage=bigSize[random];
    document.getElementById("image").style.backgroundPosition = "center center";
    document.getElementById("image").style.backgroundSize = "contain";
  }