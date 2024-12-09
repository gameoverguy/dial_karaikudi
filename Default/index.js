

function LightSwitch()
{
    let lightActive;

    if(lightActive == false)
    {
        document.getElementById('myImage').src='pic_bulbon.gif';
    }
    else
    {
        document.getElementById('myImage').src='pic_bulboff.gif'
    }
}