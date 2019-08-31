$(function(){
    redirect();
});
function redirect(){
    $("#randomButton").on('click',function(e){
        var sitios=["lago","registro","fuente","acacias","almendros","saman"];
        var min=1; 
        var max=6;  
        var random = Math.floor(Math.random() * (+max - +min)) + +min; 
        var urlVista = "http://vista.andersonlaverde.com/"+"#"+sitios[random];
        window.location.assign(urlVista);
    });

    
}