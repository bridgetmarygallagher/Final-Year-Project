var block:GameObject;
var ball:GameObject;
static var score:int = 0;
static var lives:int = 3;
var timeRemaining : float = 120;


function Start () {
	createBlocks();
}

function Update () {
	timeRemaining -= Time.deltaTime;
	
}


function OnGUI()
{
	GUI.color = Color.white;
	GUI.Label (Rect(700,75,100,100),"Score:" + score);
	
	GUI.color = Color.white;
	GUI.Label (Rect(60,75,100,100),"Lives:" + lives);
	
	if(timeRemaining > 0){
       GUI.Label(new Rect(320, 75, 200, 100), "Time Remaining : "+timeRemaining);
    }
    else{
		Application.LoadLevel("gameover");
	}
}

function createBlocks()
{
	for (var i:int = -5;i<6;i++)
	{
		Instantiate(block, Vector3(i*21, 15, 0), Quaternion.identity);
	}
	
	for (var b:int = -5;b<6;b++)
	{
		Instantiate(block, Vector3(b*21, 25, 0), Quaternion.identity);
	}
	
	for (var l:int = -5;l<6;l++)
	{
		Instantiate(block, Vector3(l*21, 35, 0), Quaternion.identity);
	}
	
	for (var o:int = -5;o<6;o++)
	{
		Instantiate(block, Vector3(o*21, 45, 0), Quaternion.identity);
	}
		
}


	