//choosing a random element inside an array
Array.prototype.sample = function()
{
    return this[Math.floor(Math.random()*this.length)];
}
let winner;
let sayac = 0;
let lastClicked;


export function shuffleCards ()
{
    /*shuffling cards we choose a winner here between  img0 img1 img2
    *we can make it so that winner doesnt repeat but that way player would always know
    * 1 of the cards aren't cat  */
    const win = ['img0','img1','img2'].sample(); //select 1 of them randomly
    winner = win;   //assign it to winner
    sayac=0;    //reset counter
    //make cards a blue picture
    document.getElementById("img0").src ="mavi.png";
    document.getElementById("img1").src ="mavi.png";
    document.getElementById("img2").src ="mavi.png";
    console.log(win);
    //reset messages
    document.getElementById("alanId").style.display ="visible";
    document.getElementById("kazandiId").style.display ="none";
    document.getElementById("yenildiId").style.display ="none";


}

export const imgClick = (imgId) =>
{   //if same card is clicked don't do anything else flip the card
    if(lastClicked === imgId)
    {}  //same card do nothing
    else
    {   //different card send it to flipCard and change lastClicked
        flipCard(imgId);
        lastClicked = imgId;
        sayac++;
    }

}


const flipCard = (card1) =>
{
    if(sayac < 2)
    {//first and 2nd guess happens inside this if
        if(winner == card1) //correct guesses are here
        { document.getElementById(card1).src ="cat.jpg"; win(); sayac=3; }
        else //wrong guesses are here
        {
            if(sayac == 0)
            {document.getElementById(card1).src ="dog.jpg";}//first wrong guess
                else
                {document.getElementById(card1).src ="dog.jpg";lose();}//2nd wrong guess meaning lose
        }
    }
    else //3rd and more clicks they dont mean anything
    {console.log(sayac);}

}


const win = () =>
{
    //win condition makes alanId message disappear and kazandiId appear
    console.log("win");
    document.getElementById("alanId").style.display ="none";
    document.getElementById("kazandiId").style.display ="inline";

}


const lose = () => {
    //lose condition makes alanId message disappear and yenildiId appear
    console.log("lose");
    document.getElementById("alanId").style.display ="none";
    document.getElementById("yenildiId").style.display ="inline";
    document.querySelector(".mesaj").style.backgroundColor = "red";
    /* ^ same thing but shorter
    makes the background of lost red
    var elements = document.getElementsByClassName('mesaj')
    for(var i = 0; i<elements.length;i++)
    {elements[i].style.backgroundColor = "red";}*/

}
