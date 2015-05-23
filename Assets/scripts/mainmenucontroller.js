var quit = false;
var intro:AudioClip;
var ball:GameObject;
static var ballonscreen:boolean = false;

function Start () {
	GetComponent.<Renderer>().material.color = Color.blue;
	GetComponent.<AudioSource>().PlayOneShot(intro);
}

function OnMouseEnter(){
	ballonscreen = true;
	createballs();
	GetComponent.<Renderer>().material.color = Color.red;
}

function OnMouseExit(){
	ballonscreen = false;
	GetComponent.<Renderer>().material.color = Color.blue;
}

function OnMouseUp(){
	if(quit == true)
	{
		Application.Quit();
	}
	else
	{
		Application.LoadLevel("game");
	}
}

function createballs()
{
	Instantiate(ball, Vector3(-81.5, 204.3, -6.1), Quaternion.identity);
	Instantiate(ball, Vector3(81.5, 70, -6.1), Quaternion.identity);
}
	
