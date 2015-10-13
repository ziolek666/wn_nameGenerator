var maleAnimals = [
"Łoś", "Żubr", "Bóbr", "Niedźwiedź", "Miś", "Wąż", "Żółw", "Kogut", "Krurczak", "Żuczek", "Gronostaj", "Hipopotam", "Lew",
"Pelikan", "Szop", "Orangutan", "Pawian", "Paw", "Opos", "Mrówkojad", "Struś", "Troll"
]

var femaleAnimals = [
"Anakonda", "Wydra", "Kuna", "Ryjówka", "Łania", "Sarna", "Łasiczka", "Kura", "Koza", "Gęś", "Jaskółka", "Żyrafa", "Lwica", "Małpa", "Kotka", "Żółwica", "Niedźwiedzica",
"Żaba", "Żabka", "Mysz", 
]

var maleAdjectives = ["Zwinny", "Szybki", "Srebrny", "Różowy", "Złoty", "Zielonkawy", "Inkrustowany", "Ospały", "Opieszały", "Zasapany", "Zbzikowany", "Beztroski",
"Wysportowany", "Zgrabny", "Dumny", "Wyjustowany", "Zdegustowany", "Zagubiona", "Szlachetny", "Nietuzinkowy", "Pomocny", "Spóźniony", "Zaspany", "Niewyspany",
"Radioaktywny", "Szczery"
]

var femaleAdjectives = ["Miła", "Zgrabna", "Nieśmiała", "Złota", "Różowa", "Zielonkawa", "Szybka", "Sprytna", "Beztroska", "Uważna", "Ostrożna", "Skupiona", "Duża",
"Zwarta", "Pędząca", "Znudzona", "Niecierpliwa", "Skoncentrowana", "Zagubiona", "Nietuzinkowa", "Szlachetna", "Pomocna", "Zdolna", "Zaspana", "Spóźniona", "Niewyspana",
"Tańcząca", "Pogodna", "Promieniująca", "Szczera"
]

var generate = function () {
	if (Math.random() < 0.4){
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