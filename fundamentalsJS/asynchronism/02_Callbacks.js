//Callbacks

const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

//$GET method:
// 1st param: url,
// 2nd param: tell jquery that this request is in another page(server) using an object

// 3rd param: our callback:
//an anonymous function which will be executed in the future(we dont know when),
// but $.get will call it.  (future-> when the request is done)

const lukeURL = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const options = { crossDomain: true };

$.get(lukeURL, options, function (dataluke) {
  console.log(arguments);
  //arguments: We dont' defined, it's a variable that every function has, 
  //which provides an array with parameters that the function receives.
  
  //This will be executed if the request is successful
  //executed by $.get, and we only indicate the parameter that we will receive
  console.log(`Hi I am ${dataluke.name}`)
});

// Method 2 - pass function as parameter (the callback)
const onPeopleResponse = (character) => {
  console.log(`Hey there, this is ${character.name}`)
}

$.get(lukeURL, options, onPeopleResponse);

//Type: Function( PlainObject data, String textStatus, jqXHR jqXHR )
//A callback function that is executed if the request succeeds. Required if dataType is provided, but you can use null or jQuery.noop as a placeholder.
//documentation: https://api.jquery.com/jQuery.get/