let game_Zona=$('.display');
let map=
[
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
]
for(let p=0;p<map.length;p++)
{
for(let pi=0;pi<map[p].length;pi++)
{
   if(Math.random()*10>8)
   {
    map[p][pi]=1;
   } 
   else if(Math.random()*10<5)
   {
    map[p][pi]=0;
   }
}
}
class pointer
{
    constructor(punct)
    {
        this.punct=document.createElement(punct.tag);
        this.punct.classList=punct.clas;
        document.querySelector('.display').append(this.punct);     
    }
}    

let per=
{   
    clas:"walk",
    tag:"div",    
}

let spa=
{   
    clas:"space",
    tag:"div",    
}
for(let i=0;i<map.length;i++)
{
for(let j=0;j<map[i].length;j++)
{

    if(map[i][j]===1)
    {

        map[i][j]=new pointer(per)
    }
    if(map[i][j]===0)
    {
        map[i][j]=new pointer(spa)
    }
}
}