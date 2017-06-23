	var	animal = document.getElementById("animal-list");
	var pg = 1;
function doIt() {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET','https://learnwebcode.github.io/json-example/pets-data.json');
	ourRequest.onload = function() {
		console.log(ourRequest.responseText);
		var ourData = JSON.parse(ourRequest.responseText);

		renderHTML(ourData);
	};
	ourRequest.send();
	pg++;

	if(pg > 3)
	{
		document.getElementById('btn').style.visibility = "hidden";		
	}
}

	Handlebars.registerHelper("calcAge",function(birthYear)
	{
		var age = new Date().getFullYear() - birthYear;
		if (age > 0) {
			return age + ' years old';
		}

		else
		{
			return "less than a year old";
		}
	});

function renderHTML(data) {

		var raw = document.getElementById('petScript').innerHTML;
		var processed = Handlebars.compile(raw);
		var generateHTML = processed(data);
		animal.innerHTML = generateHTML;
		// var string = "";
		
		// for (var i = 0; i < data.length; i++) 
		// {
		// 	string += "<p>" + data[i].name +" is a "+ data[i].species + " who likes to eat ";

		// 	for (var j = 0; j < data[i].foods.likes.length; j++) {
		// 		string += data[i].foods.likes[j];
		// 	}

		// 	string += "</p>";
		// }
		
		// animal.insertAdjacentHTML('beforeend',string);
	}
