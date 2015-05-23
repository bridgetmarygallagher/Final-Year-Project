var speed:float = 5000;
var ball:GameObject;
var bricksound:AudioClip;
var wallsound:AudioClip;
var block:GameObject;



function Start () {

}

function Update () {
	if (transform.position.y < - 100)
	{
		gamecontroller.lives--;
		
		transform.position.y = GameObject.FindGameObjectWithTag("paddle").transform.position.y+5.5;
		transform.position.x = GameObject.FindGameObjectWithTag("paddle").transform.position.x;
		ball.GetComponent.<Rigidbody>().Sleep();
		var pcontroller:paddlecontroller;
		pcontroller = GameObject.FindGameObjectWithTag("paddle").GetComponent(paddlecontroller);
		pcontroller.attachedBall = this.gameObject;
	}
	
	if(gamecontroller.lives == 0)
	{
		Application.LoadLevel("gameover");
	}
	
	if(GameObject.FindGameObjectsWithTag("block").Length < 1)
	{
		Application.LoadLevel("level2");
	}

}

function OnCollisionEnter(col:Collision)
{
	if (col.gameObject.tag == "block")
	{
		GetComponent.<AudioSource>().PlayOneShot(bricksound,0.5);
		Destroy(col.gameObject);
		
		if (gamecontroller.score >=0)
		{
		gamecontroller.score = gamecontroller.score + 5;
		}
	}
	if (col.gameObject.tag == "wall")
	{
		GetComponent.<AudioSource>().PlayOneShot(wallsound,0.5);
	}
}