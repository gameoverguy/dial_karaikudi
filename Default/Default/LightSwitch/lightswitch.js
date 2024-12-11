let lightActive = false;

function LightSwitch()
{
    if(lightActive == false)
    {
        document.getElementById('myImage').src='on.gif';
        lightActive = true;
    }
    else
    {
        document.getElementById('myImage').src='off.gif';
        lightActive = false;
    }
}