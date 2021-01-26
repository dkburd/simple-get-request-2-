let numberDogs=$('#number')
let number=3

$('#number').bind('change', function() {
  number= numberDogs.val();
});

function getDogImages() {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
console.log(responseJson);  

$('.results').append(`<h2>Results</h2>`);
var i;
for (i = 0; i < number; i++) {
$('.results').append(`<img src='${responseJson.message[i]}' class='results-img'>`);

}  
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
    $( ".results").empty();
    $( ".results").removeClass('hidden');
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});