var array = [
    
    {pfp:"https://scontent.cdninstagram.com/v/t51.2885-19/403956065_919627366168195_5638499600121903480_n.jpg?stp=dst-jpg_s100x100&_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=ohDLn6lS668AX_o_yxb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfDP_-dHQGH5iyRoczFNpJ9tw34iFVZbuMuaVBF6sFaCdQ&oe=6580B04C",
      story:"vampee.png"}, 
    {pfp:"https://scontent.cdninstagram.com/v/t51.2885-19/364969120_848723483288130_1773828846174349274_n.jpg?stp=dst-jpg_s100x100&_nc_cat=105&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=a1eONaX-Gg0AX8yuDcz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAErSLoiv5XFD8FQp5QN1_J7mGeyldDJ3JusvlrSuDoXw&oe=6580C2F4",
    story:"https://i.pinimg.com/236x/c1/9e/61/c19e610e21724f39bf4bf12172c141b6.jpg"},
    
    {pfp:"https://i.pinimg.com/236x/85/f7/ea/85f7ea7c05c313e9192cd1461295d469.jpg",story:"https://i.pinimg.com/236x/3c/c4/bd/3cc4bdf6d828c581ac7d61ac028bdb2e.jpg"},

    {pfp:"https://i.pinimg.com/236x/04/e0/01/04e0013505ab328e38a4ca180dfe3e53.jpg",story:"https://i.pinimg.com/236x/00/20/ff/0020fffecaf18b6f0ef80fba9cbbb699.jpg"}

] 
 var temp = "";
var stories = document.querySelector("#stories");
var dikhao = document.querySelector("#show");

array.forEach(function(elem,ind){
      temp += ` <div id="story" class="story"><img  id="${ind}" src="${elem.pfp}" alt=""> </div>`
})

stories.innerHTML=temp;

stories.addEventListener("click",function(info){
   dikhao.style.display= "block";
   dikhao.style.backgroundImage = `url(${array[info.target.id].story})`;

    
   setTimeout(function(){
    dikhao.style.display= "none";
   },3000)
});