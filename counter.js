let updatevalue1 = document.getElementById("updatevalue1")
function onincrement() {
	let a = updatevalue.textContent;
	let countervalue = parseInt(a) + 1;
	if(countervalue>0)
	{
		updatevalue.style.color = "green";
	}
	else if(countervalue<0)
	{
		updatevalue.style.color = "red";
	}
	else
	{
		updatevalue.style.color = "black";
	}
	updatevalue.textContent = countervalue;
}
function onset()
{
	let countervalue = 0;
	updatevalue.textContent = countervalue;
	updatevalue.style.color = "black";

}
function ondecrement()
{
	let a = updatevalue.textContent;
	let countervalue = parseInt(a) - 1;
	if(countervalue>0)
	{
		updatevalue.style.color = "blue";
	}
	else if(countervalue<0)
	{
		updatevalue.style.color = "yellow";
	}
	else
	{
		updatevalue.style.color = "black";
	}
	updatevalue.textContent = countervalue;
}