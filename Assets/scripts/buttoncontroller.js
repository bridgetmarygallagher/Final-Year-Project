var quit = false;

function Start () {
	GetComponent.<Renderer>().material.color = Color.blue;
}

function OnMouseEnter(){
	GetComponent.<Renderer>().material.color = Color.red;
}

function OnMouseExit(){
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