var user=prompt("do you want to play a game?");
if(user==="yes");
{
	var name=prompt("enter the name of your character!");
}
var grantHealth=10;
var userHealth=40;
var grantLife=3;
var userwin=0;


while(userwin<3 && grantLife>=0)
{

	userHealth-=Math.floor((Math.random() * 2) + 1);
	console.log(name + " has " + userHealth + " health left");

	grantHealth-=Math.floor((Math.random() * 2) + 1);
	console.log("Grant the Mighty Chicken has  "  + grantHealth +" left");

	if(grantHealth<=0)
	{
		userwin++;
		grantLife--;
		grantHealth=10;
	}
}

	if(userwin>0 && grantLife >=0)
	{
		console.log(name +"  is the winner!!");
	}
	else{
		console.log("Grant Almighty Chicken wins!!");
	}
