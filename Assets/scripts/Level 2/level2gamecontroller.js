var block:GameObject;
var ball:GameObject;
var timeRemaining : float = 80;

function Start () {
	createBlocks();
}

function Update () {
	timeRemaining -= Time.deltaTime;
	
}

function OnGUI()
{
	GUI.color = Color.white;
	GUI.Label (Rect(700,75,100,100),"Score:" + gamecontroller.score);
	
	GUI.color = Color.white;
	GUI.Label (Rect(60,75,100,100),"Lives:" + gamecontroller.lives);
	
	if(timeRemaining > 0){
       GUI.Label(new Rect(320, 75, 200, 100), "Time Remaining : "+timeRemaining);
    }
    else{
		Application.LoadLevel("gameover");
	}
}

function createBlocks()
{
	for (var i:int = -5;i<5;i++)
	{
		Instantiate(block, Vector3(i*21, 15, 0), Quaternion.identity);
	}
	
	for (var b:int = -4;b<4;b++)
	{
		Instantiate(block, Vector3(b*21, 25, 0), Quaternion.identity);
	}
	
	for (var l:int = -3;l<3;l++)
	{
		Instantiate(block, Vector3(l*21, 35, 0), Quaternion.identity);
	}
	
	for (var o:int = -2;o<2;o++)
	{
		Instantiate(block, Vector3(o*21, 45, 0), Quaternion.identity);
	}
	
	for (var c:int = -1;o<1;c++)
	{
		Instantiate(block, Vector3(c*21, 45, 0), Quaternion.identity);
	}
		
}