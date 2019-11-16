let container = document.querySelector(".container");

class Human {
    constructor(name, strength, talent) {
        this.name = name;
        this.strength = strength;
        this.talent = talent;
    }
}

class Male extends Human {
    constructor(name, strength, talent, facialhair) {
        super(name, strength, talent);
        this.facialhair = facialhair;
    }
    planting() {
        console.log(`${this.name} loves planting`);
    }
}
class MaleSuperHero extends Male {
    constructor(
        name,
        strength,
        talent,
        facialhair,
        nickname,
        weapon,
        speed,
        aggression,
        image
    ) {
        super(name, strength, talent, facialhair);
        this.nickname = nickname;
        this.weapon = weapon;
        this.speed = speed;
        this.aggression = aggression;
        this.image = image;
    }
}
class CpuMHero extends Male {
    constructor(
        name,
        strength,
        talent,
        facialhair,
        nickname,
        weapon,
        speed,
        aggression,
        hardness
    ) {
        super(name, strength, talent, facialhair);
        this.nickname = nickname;
        this.weapon = weapon;
        this.speed = speed;
        this.aggression = aggression;
        this.hardness = hardness;
    }
}

class Female extends Human {
    constructor(name, strength, talent, hairColor, hairLength) {
        super(name, strength, talent);
        this.hairColor = hairColor;
        this.hairLength = hairLength;
    }
    Cooking() {
        console.log(`${this.name} loves Cooking`);
    }
}
class FemaleSuperHero extends Female {
    constructor(
        name,
        strength,
        talent,
        hairColor,
        hairLength,
        nickname,
        weapon,
        speed,
        aggression,
        image
    ) {
        super(name, strength, talent, hairColor, hairLength);
        this.nickname = nickname;
        this.weapon = weapon;
        this.speed = speed;
        this.aggression = aggression;
        this.image = image;
    }
}
class CpuFHero extends Female {
    constructor(
        name,
        strength,
        talent,
        hairColor,
        hairLength,
        nickname,
        weapon,
        speed,
        aggression,
        hardness
    ) {
        super(name, strength, talent, hairColor, hairLength);
        this.nickname = nickname;
        this.weapon = weapon;
        this.speed = speed;
        this.aggression = aggression;
        this.hardness = hardness;
    }
}

let catWoman = new FemaleSuperHero(
    "Taghreed",
    100,
    "flexibility",
    "black",
    "10 meters",
    "Cat Woman",
    "nails",
    80,
    50,
    "./images/catwoman.png"
);
let batMan = new MaleSuperHero(
    "Maher",
    150,
    "Smart",
    true,
    "Batman",
    "Money",
    220,
    100,
    "./images/batman.png"
);

console.log(catWoman);
console.log(batMan);
let superCpu = document.createElement("div");
let img2 = document.createElement("img");
img2.src = catWoman.image;
let name2 = document.createElement("h3");
name2.innerHTML = catWoman.nickname;
let ul = document.createElement("ul");
let strength = document.createElement("li");
let strong = document.createElement("strong");
let spanStrength = document.createElement("span");
strong.innerHTML = "Strength : ";
spanStrength.innerHTML = catWoman.strength;
strength.appendChild(strong);
strength.appendChild(spanStrength);
let speed = document.createElement("li");
let strong2 = document.createElement("strong");
let spanSpeed = document.createElement("span");
strong2.innerHTML = "Speed : ";
spanSpeed.innerHTML = catWoman.speed.toString();
speed.appendChild(strong2);
speed.appendChild(spanSpeed);
let weapon = document.createElement("li");
let strong3 = document.createElement("strong");
let spanWeapon = document.createElement("span");
strong3.innerHTML = "Weapon : ";
spanWeapon.innerHTML = catWoman.weapon.toString();
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

let h1 = document.createElement("h1");
h1.innerHTML = "VS";
container.appendChild(h1);

let superItem = document.createElement("div");
let img = document.createElement("img");
img.src = batMan.image;
let name = document.createElement("h3");
name.innerHTML = batMan.nickname;
let ul2 = document.createElement("ul");
let strength2 = document.createElement("li");
let strong11 = document.createElement("strong");
let spanStrength2 = document.createElement("span");
strong11.innerHTML = "Strength : ";
spanStrength2.innerHTML = batMan.strength;
strength2.appendChild(strong11);
strength2.appendChild(spanStrength2);
let speed2 = document.createElement("li");
let strong22 = document.createElement("strong");
let spanSpeed2 = document.createElement("span");
let weapon2 = document.createElement("li");
let strong33 = document.createElement("strong");
let spanWeapon2 = document.createElement("span");
strong33.innerHTML = "Weapon : ";
spanWeapon2.innerHTML = batMan.weapon.toString();
weapon2.appendChild(strong33);
weapon2.appendChild(spanWeapon2);
strong22.innerHTML = "Speed : ";
spanSpeed2.innerHTML = batMan.speed.toString();
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
