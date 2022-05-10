
(function()
{
  //drop event to allow the element to be dropped into valid targets
  let count = 0;
  let creditDisplay = document.querySelector('.counter-display')
  let myEle = document.getElementById("spring");

  document.addEventListener('dragstart', function(e)
  {
    //set the item reference to this element
    item = e.target;
    
    //we don't need the transfer data, but we have to define something
    //otherwise the drop action won't work at all in firefox
    //most browsers support the proper mime-type syntax, eg. "text/plain"
    //but we have to use this incorrect syntax for the benefit of IE10+
    e.dataTransfer.setData('text', '');
  
  }, false);




  document.addEventListener('drop', function(e)
  {
    
    console.log("HEREHEHEH")
    count = count + 3;
    updateDisplay();
    
    if(e.target.getAttribute('data-draggable') == 'home' )
        {
        console.log("sidebar")
        count = count - 6;
        updateDisplay();
        }
  
  }, false);



  function updateDisplay(){
    creditDisplay.innerHTML = "Credits: " + count;
};
  
  //dragend event to clean-up after drop or abort
  //which fires whether or not the drop target was valid
  

})(); 