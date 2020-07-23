var favMovie = {
    title: [], 
    releaseDate: [],
};




function movieDetails(title, movie){
    var result = `The title of this movie is ${favMovie.title} the release date is ${favMovie.releaseDate}`;
    return result;
};

console.log(movieDetails('Harry Potter', 6));

var o = document.getElementById('para');
console.log(o);



var heading = document.createElement('h1');
heading.innerText = 'Mayas page with javascript';
heading.style.color ='red';
document.body.appendChild(heading);


var paragraph = document.createElement('p');
document.body.appendChild(paragraph);
paragraph.innerText = 'yoooooooooo';
paragraph.style.color = 'pink';




