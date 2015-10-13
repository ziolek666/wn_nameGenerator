var maleAnimals = [
"Łoś", "Żubr", "Bóbr", "Niedźwiedź", "Miś", "Wąż", "Żółw", "Kogut", "Krurczak", "Żuczek", "Gronostaj", "Hipopotam", "Lew"
]

var femaleAnimals = [
"Anakonda", "Wydra", "Kuna", "Ryjówka", "Łania", "Sarna", "Łasiczka", "Kura", "Koza", "Gęś", "Jaskółka", "Żyrafa", "Lwica"
]

var maleAdjectives = ["Zwinny", "Szybki", "Srebrny", "Różowy", "Złoty", "Zielonkawy", "Incognito", "Ospały", "Opieszały", "Zasapany"]

var femaleAdjectives = ["Miła", "Zgrabna", "Nieśmiała", "Złota", "Różowa", "Zielonkawa", "Szybka", "Sprytna"]

var generate = function () {
	if (Math.random() < 0.5){
		var secondPart = maleAnimals[Math.floor(Math.random()*maleAnimals.length)];
		var firstPart = maleAdjectives[Math.floor(Math.random()*maleAdjectives.length)];
		console.log(firstPart+ " " +secondPart);
	}else{
		var secondPart = femaleAnimals[Math.floor(Math.random()*femaleAnimals.length)];
		var firstPart = femaleAdjectives[Math.floor(Math.random()*femaleAdjectives.length)];
		console.log(firstPart+" "+secondPart);
	}
	
}

generate()