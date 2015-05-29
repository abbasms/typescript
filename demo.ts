
//Unions and TypeGuards

function listNames(names: string | string[]) {
	if (typeof names == "string")
		console.log(names);
	else
		for (name of names)
			listNames(name);
}

listNames("Vegeta");
listNames(["Goku", "Gohan", "Piccollo"]);


class Saiyan {
	name: string;
	powerLevel: number;

	constructor(myName: string, myPower: number) {
		this.name = myName;
		this.powerLevel = myPower;
	}

	capturePlanets() {
		console.log("captured!");
	}
}

class Human {
	name: string;
	occupation: string;

	constructor(myName: string, myOccupation: string) {
		this.name = myName;
		this.occupation = myOccupation;
	}

	doNothing() {
		console.log("Nothing here to see");
	}
}


function saiyanTest(sentient: Human|Saiyan) {
	//Properties common to Saiyan and human accessible here
	console.log(sentient.name);
	if (sentient instanceof Saiyan) {
		//Properties of Saiyan accessible here
		sentient.capturePlanets();
	}
	else if (sentient instanceof Human) {
		//Properties of Human accessible here
		sentient.doNothing();
	}
}

saiyanTest(new Human("Goku", "Warrior"));


//Type Inference
//Array<string|number>

var thisIsAVeryBadVariableName = ['Goku', 34];
//var thisIsAVeryBadVariableName = ['Goku', 34, false];
thisIsAVeryBadVariableName[0] = false;



//Type Aliases

//type NgScope = ng.IScope;
type Callback = () => {};
type MixedArray = Array<string|number|boolean>

