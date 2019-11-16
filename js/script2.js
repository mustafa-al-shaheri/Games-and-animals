let container = document.querySelector(".container");
class Animals {
    constructor(name, livingPlace, skin, movment, food, color, image) {
        this.name = name;
        (this.livingPlace = livingPlace),
            (this.skin = skin),
            (this.movment = movment),
            (this.food = food),
            (this.color = color),
            (this.image = image);
    }
}
class Reptials extends Animals {
    constructor(
        name,
        livingPlace,
        skin,
        movment,
        food,
        skinThickness,
        numberOfLegs,
        color,
        image
    ) {
        super(name, livingPlace, skin, movment, food, color, image);
        (this.skinThickness = skinThickness),
            (this.numberOfLegs = numberOfLegs);
    }
}
class Birds extends Animals {
    constructor(
        name,
        livingPlace,
        skin,
        movment,
        food,
        featherColor,
        birdNature,
        beak,
        color,
        image
    ) {
        super(name, livingPlace, skin, movment, food, color, image);
        (this.featherColor = featherColor),
            (this.birdNature = birdNature),
            (this.beak = beak);
    }
}
class Mamumals extends Animals {
    constructor(
        name,
        livingPlace,
        skin,
        movment,
        food,
        numberLegs,
        wildness,
        color,
        image
    ) {
        super(name, livingPlace, skin, movment, food, color, image);
        this.numberLegs = numberLegs;
        this.wildness = wildness;
    }
}
let camiliant = new Reptials(
    "chameleon",
    "land",
    "skin",
    "crowl",
    "meat",
    "veryThick",
    "four",
    "green",
    "./images/chameleon.png"
);
let tweet = new Birds(
    "Blue Bird",
    "sky",
    "feathers",
    "flies",
    "wheat",
    "blue",
    "home bird",
    "small",
    "blue",
    "./images/tweet.png"
);
let fox = new Mamumals(
    "Foxy",
    "land",
    "fur",
    "walks",
    "meat",
    "four",
    "wild",
    "Brownish Orange",
    "./images/fox.png"
);

let superCpu = document.createElement("div");
let img2 = document.createElement("img");
img2.src = camiliant.image;
let name2 = document.createElement("h3");
name2.innerHTML = camiliant.name;
let ul = document.createElement("ul");
let strength = document.createElement("li");
let strong = document.createElement("strong");
let spanStrength = document.createElement("span");
strong.innerHTML = "Color : ";
spanStrength.innerHTML = camiliant.color;
strength.appendChild(strong);
strength.appendChild(spanStrength);
let speed = document.createElement("li");
let strong2 = document.createElement("strong");
let spanSpeed = document.createElement("span");
strong2.innerHTML = "Food : ";
spanSpeed.innerHTML = camiliant.food;
speed.appendChild(strong2);
speed.appendChild(spanSpeed);
let weapon = document.createElement("li");
let strong3 = document.createElement("strong");
let spanWeapon = document.createElement("span");
strong3.innerHTML = "Lives in : ";
spanWeapon.innerHTML = camiliant.livingPlace;
weapon.appendChild(strong3);
weapon.appendChild(spanWeapon);
ul.appendChild(weapon);
ul.appendChild(strength);
ul.appendChild(speed);
superCpu.className = "item";
superCpu.appendChild(img2);
superCpu.appendChild(name2);
superCpu.appendChild(ul);
container.appendChild(superCpu);

let superItem = document.createElement("div");
let img = document.createElement("img");
img.src = tweet.image;
let name = document.createElement("h3");
name.innerHTML = tweet.name;
let ul2 = document.createElement("ul");
let strength2 = document.createElement("li");
let strong11 = document.createElement("strong");
let spanStrength2 = document.createElement("span");
strong11.innerHTML = "color : ";
spanStrength2.innerHTML = tweet.color;
strength2.appendChild(strong11);
strength2.appendChild(spanStrength2);
let speed2 = document.createElement("li");
let strong22 = document.createElement("strong");
let spanSpeed2 = document.createElement("span");
let weapon2 = document.createElement("li");
let strong33 = document.createElement("strong");
let spanWeapon2 = document.createElement("span");
strong33.innerHTML = "Food : ";
spanWeapon2.innerHTML = tweet.food;
weapon2.appendChild(strong33);
weapon2.appendChild(spanWeapon2);
strong22.innerHTML = "Lives in : ";
spanSpeed2.innerHTML = tweet.livingPlace;
speed2.appendChild(strong22);
speed2.appendChild(spanSpeed2);
ul2.appendChild(weapon2);
ul2.appendChild(strength2);
ul2.appendChild(speed2);
superItem.className = "item";
superItem.appendChild(img);
superItem.appendChild(name);
superItem.appendChild(ul2);
container.appendChild(superItem);

let superItem2 = document.createElement("div");
let img222 = document.createElement("img");
img222.src = fox.image;
let name222 = document.createElement("h3");
name222.innerHTML = fox.name;
let ul222 = document.createElement("ul");
let strength222 = document.createElement("li");
let strong111 = document.createElement("strong");
let spanStrength222 = document.createElement("span");
strong111.innerHTML = "color : ";
spanStrength222.innerHTML = fox.color;
strength222.appendChild(strong111);
strength222.appendChild(spanStrength222);
let speed222 = document.createElement("li");
let strong222 = document.createElement("strong");
let spanSpeed222 = document.createElement("span");
let weapon222 = document.createElement("li");
let strong333 = document.createElement("strong");
let spanWeapon222 = document.createElement("span");
strong333.innerHTML = "Food : ";
spanWeapon222.innerHTML = fox.food;
weapon222.appendChild(strong333);
weapon222.appendChild(spanWeapon222);
strong222.innerHTML = "Lives in : ";
spanSpeed222.innerHTML = fox.livingPlace;
speed222.appendChild(strong222);
speed222.appendChild(spanSpeed222);
ul222.appendChild(weapon222);
ul222.appendChild(strength222);
ul222.appendChild(speed222);
superItem2.className = "item";
superItem2.appendChild(img222);
superItem2.appendChild(name222);
superItem2.appendChild(ul222);
container.appendChild(superItem2);
