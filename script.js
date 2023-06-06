    let l,t;
function possition_top()
{ 
     $('.bug').css("top",$('.bug').position().top+15+'px');
} 
function possition_left()
{  
    $('.bug').css("left",$('.bug').position().left+15);
} 
function possition_right()
{  
    $('.bug').css("left",$('.bug').position().left-15);
} 

function position_bottom()
{
    $('.bug').css("top",$('.bug').position().top-15);
}
function jump()
{
    const prom= new Promise((resolve,reject)=>{
        resolve($('.bug').css('animation','jumping .4s linear'));
        reject();
    })
    prom.then(()=>
    { setTimeout((()=>{$('.bug').removeAttr('style');}),350)})
}

function pause()
{ 
    if( $('.setting').hasClass('visible') === true) 
    {
        $('.setting').removeClass('visible');    
    }
    else if ($('.setting').hasClass('visible') === false)
    {
        $('.setting').addClass('visible');
        $('.bug').removeClass('visible'); 
    }    
}
$('#start').on('click', function(event)
{   
     (event).preventDefault();
     $('.bug').addClass('visible');
     $('.setting').removeClass('visible');
})

$(document).on('keydown',(event)=>
{
    let code= event.code;
switch (code)
{
    case 'KeyQ':case 'Escape':pause();break;
    case 'ArrowRight':possition_left();break;
    case 'ArrowLeft':possition_right();break;
    case 'ArrowUp':position_bottom();break;
    case 'ArrowDown':possition_top();break;
    case 'Space':jump();break;
    default:console.warn(code);
}  
});
$(document).on('dblclick',(event)=>
{
    let code= event.code;
switch (code)
{
     case 'Space':console.log("Superr");break;
    default:console.warn(code);
}  
});