var zodiac =[
	{
		name: 'Aquarius',
		date: 'January 20 - February 18',
		element: 'Air',
		image: 'img/aquarius.png',
		strengths: 'Progressive, original, independent, humanitarian',

	},
	{
		name: 'Pisces',
		date:'February 19 - March 20',
		element: 'Water',
		image:'img/pisces.png',

		strengths:'Compassionate, artistic, intuitive, gentle, wise, musical',

	},
	{
		name: 'Aries',
		date:'March 21 - April 19',
		element: 'Fire',
		image:'img/aries.png',
		
		strengths:'Courageous, determined, confident, enthusiastic, optimistic, honest, passionate',
	},
	{
		name: 'Taurus',
		date:'April 20 - May 20',
		element: 'Earth',
		image:'img/taurus.png',

		strengths: 'Reliable, patient, practical, devoted, responsible, stable',
	},
	{
		name: 'Gemni',
		date:'May 21 - June 20',
		element: 'Air',
		image:'img/',
		strengths:'Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas',
	},
	{
		name: 'Cancer',
		date:'June 21 - July 22',
		element: 'Water',
		image:'img/cancer.png',
		strengths:'Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive',
	},
	{
		name: 'Leo',
		date:'July 23 - August 22',
		element: 'Fire',
		image:'img/leo.png',
		
		strengths:'Strengths: Creative, passionate, generous, warm-hearted, cheerful, humorous',
	},
	{
		name: 'Virgo',
		date:'August 23 - September 22',
		element: 'Earth',
		image:'img/virgo.png',
		
		strengths:'Loyal, analytical, kind, hardworking, practical',
	},
	{
		name: 'Libra',
		date:'September 23 - October 22',
		element: 'Air',
		image:'img/libra.png',
		
		strengths:'Cooperative,diplomatic, gracious, fair-minded, social',
	},
	{
		name: 'Scorpio',
		date: 'October 23 - November 21',
		element: 'Water',
		image:'img/scorpio.png',
		
		strengths:'Resourceful, brave, passionate, stubborn, a true friend',
	},
	{
		name: 'Sagittarius',
		date: 'November 22 - December 21',
		element: 'Fire',
		image:'img/sagittarius.png',
		
		strengths:'Generous, idealistic, great sense of humor',
	},
	{
		name: 'Capricorn',
		date:'December 22 - January 19',
		element: 'Earth',
		image:'img/capricorn.png',

		strengths:'Responsible, disciplined, self-control, good managers',
	}
];


	var input = document.getElementById("userData");
	var myH1 = document.getElementById("sign");
	var myH2 = document.getElementById("months");
	var myImg = document.getElementById("pic");
	var myP = document.getElementById("info");

	function myFunction() {
	
	
		
		for(var i = 0; i < zodiac.length; i++) {
		if(input.value == zodiac[i].name) {
			myH1.innerText = zodiac[i].name;
			myH2.innerText = zodiac[i].date;
			document.getElementById("pic").src = zodiac[i].image;
			myP.innerText = zodiac[i].strengths;

			console.log(zodiac[i].name);
			console.log(zodiac[i].date);
			console.log(zodiac[i].image);
			console.log(zodiac[i].strengths);

			return;
		}
			

	};
	
	
}