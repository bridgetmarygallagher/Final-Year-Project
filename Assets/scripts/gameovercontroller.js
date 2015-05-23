var gameoversound:AudioClip;

  // Declaring audio clip


function Start () {
	GetComponent.<AudioSource>().PlayOneShot(gameoversound); // want music to play on prompt
	gamecontroller.score = 0; 
	gamecontroller.lives = 3;
}



