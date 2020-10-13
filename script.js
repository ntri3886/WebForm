// P5 JAVASCRIPT FUNCTIONS
///////////////////////////////////////////////////////////////////
var al = [];
function setup() {
  createCanvas( windowWidth, windowHeight );
}

function draw() {
  background( '#ffffff' );
  
  /*
  * Creation of dotted background
  */
  stroke( '#bdbdbd' ) // Dot color
  strokeWeight( 3 );  // Dot thickness
  for( var i = 0; i < width; i = i + 80 ) {
    for( var j = 0; j < height; j = j + 80 ) {
      point(i, j);
    }                         
  }
  
  strokeWeight( 1 ); // Restore strokeWeight 
  
  /*
  * Array to store reference to each Rays() object 
  */
  al.push( new Rays() );
  
  for( var i = 0; i < al.length; i++ ) {
    var r = al[i];
    r.applyForce( new p5.Vector( random( -0.5, 0.5 ), random( 0.01, 0.05 ) ) );
    r.update();
    r.render();
    if( r.isDead() )
      al.shift();
  }
}

function windowResized() {
  resizeCanvas( windowWidth, windowHeight );
}

function Rays() {
  this.counter = 0;
  this.position = new p5.Vector( mouseX, mouseY );
  this.velocity = new p5.Vector( 0, 0 );
  this.acceleration = new p5.Vector( 0, 0 );
  this.lifeSpan = 1;
}

/*
* Takes p5.Vector object as the initial force 
* This force provides the required acceleration
*/
Rays.prototype.applyForce = function( force ) {
  acceleration = force;
}

/*
* Calculates and updates
*
* 1. Velocity
* 2. Position
*/
Rays.prototype.update = function() {
  this.velocity.add( this.acceleration );
  this.position.add( this.velocity );
  this.lifeSpan -= 0.04;
}

/*
* Displays line on the document
*/
Rays.prototype.render = function() {
  var c = color( 'rgba(237, 34, 93, ' + this.lifeSpan + ')' );
  stroke( c ); 
  line( this.position.x, this.position.y, pmouseX, pmouseY );
}

/*
* Helps in determining whether the shift()
* method should be called or not
*
* [This method is important, if not used the array will
* be filled infinitely]
*/
Rays.prototype.isDead = function() {
  if( this.lifeSpan < 0.1 )
    return true;
  else
    return false;
}

// Insert your setup and draw functions here


// REGULAR JAVASCRIPT FUNCTIONS
///////////////////////////////////////////////////////////////////

// Sets the form element as a variable for easy reference
var form = document.querySelector("form");
// Adds the event listener for when the form is submitted
form.addEventListener("submit", (event) => {
  // Stops the form from trying to load another page
  event.preventDefault();
  // Creates an array from all the elements inside the form element and loops through the array
  Array.from(form.elements).forEach((element) => {
    // Finds any input which is not the submit button
    if (element.type != "submit") {
      // Logs the 'name' attribute from the HTML element
      console.log(element.name + ':');
      // Logs the 'value' attribute from the HTML element
      console.log(element.value);
    }
  }); 
});


