var zodiac =[
	{
		name: 'aquarius',
		date: 'January 20 - February 18',
		element: 'Air',
		image: 'img/aquarius.png',
		strengths: 'Progressive, original, independent, humanitarian',

	},
	{
		name: 'pisces',
		date:'February 19 - March 20',
		element: 'Water',
		image:'img/pisces.png',

		strengths:'Compassionate, artistic, intuitive, gentle, wise, musical',

	},
	{
		name: 'aries',
		date:'March 21 - April 19',
		element: 'Fire',
		image:'img/aries.png',
		
		strengths:'Courageous, determined, confident, enthusiastic, optimistic, honest, passionate',
	},
	{
		name: 'taurus',
		date:'April 20 - May 20',
		element: 'Earth',
		image:'img/taurus.png',

		strengths: 'Reliable, patient, practical, devoted, responsible, stable',
	},
	{
		name: 'gemini',
		date:'May 21 - June 20',
		element: 'Air',
		image:'img/gemini.png',
		strengths:'Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas',
	},
	{
		name: 'cancer',
		date:'June 21 - July 22',
		element: 'Water',
		image:'img/cancer.png',
		strengths:'Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive',
	},
	{
		name: 'leo',
		date:'July 23 - August 22',
		element: 'Fire',
		image:'img/leo.png',
		
		strengths:'Strengths: Creative, passionate, generous, warm-hearted, cheerful, humorous',
	},
	{
		name: 'virgo',
		date:'August 23 - September 22',
		element: 'Earth',
		image:'img/virgo.png',
		
		strengths:'Loyal, analytical, kind, hardworking, practical',
	},
	{
		name: 'libra',
		date:'September 23 - October 22',
		element: 'Air',
		image:'img/libra.png',
		
		strengths:'Cooperative,diplomatic, gracious, fair-minded, social',
	},
	{
		name: 'scorpio',
		date: 'October 23 - November 21',
		element: 'Water',
		image:'img/scorpio.png',
		
		strengths:'Resourceful, brave, passionate, stubborn, a true friend',
	},
	{
		name: 'sagittarius',
		date: 'November 22 - December 21',
		element: 'Fire',
		image:'img/sagittarius.png',
		
		strengths:'Generous, Idealistic, Great sense of humor',
	},
	{
		name: 'capricorn',
		date:'December 22 - January 19',
		element: 'Element: Earth',
		image:'img/capricorn.png.png',

		strengths:'Strengths :Responsible, disciplined, self-control, good managers',
	}
];


// fires up the Enter Key to work
var btn = document.getElementById('userData');
btn.addEventListener('keypress', function enterKey(e) {
	if (e.keyCode == 13) {
		myFunction();
	}; 
}, false);

	



	function myFunction() {

		var input = document.getElementById("userData");

		// shows the input
		console.log(userData);
		// shows whats inside the input tag
		console.log("users value is:" + userData.value);
		// // displays zodiac sign in lower case in console log
		// console.log(userData.value.toLowerCase());
		// // displays zodiac sign in upper case in console log
		// console.log(userData.value.toUpperCase());
	
	
		// loops array one zodiac at a time when zodiac sign is typed in input on HTML
		for(var i = 0; i < zodiac.length; i++) {
			
			console.log("users value lowercase is:" + userData.value.toLowerCase());

			var input = document.getElementById("userData");
			//  if the array code ran then if statement would run
			// code also lets zodiac sign be typed lower or upper case
			if(input.value.toLowerCase() === zodiac[i].name)  {

			
				// when if statement is ran Code appears in inner HTML
				
				document.getElementById("sign").innerText = zodiac[i].name;
				document.getElementById("months").innerText = zodiac[i].date;
				document.getElementById("element").innerText = zodiac[i].element;
				document.getElementById("pic").src = zodiac[i].image;
				document.getElementById("info").innerText = zodiac[i].strengths;

				// displays in the console.log shows that the code has ran


				console.log(zodiac[i].name);
				console.log(zodiac[i].date);
				console.log(zodiac[i].element);
				console.log(zodiac[i].image);
				console.log(zodiac[i].strengths);

				return;
			} ;
				
				console.log("No Matches Were Found, Try Again ");

				document.getElementById("sign").innerText = "No Match Were Found,Try Again";
				document.getElementById("months").innerText = "";
				document.getElementById("element").innerText = "";
				document.getElementById("pic").src = "";
				document.getElementById("info").innerText = "";
			
			

	

	}
		
		
	
	
}