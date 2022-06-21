

function minConvert(minNum){
    if (minNum = parseInt(minNum)){
      document.getElementById('outputMin'). innerHTML = "<p style=\"color: red;\"><strong>" + minNum  * 60 + "</strong></p>" + " seconds";
      setTimeout(function(){
        window.location.reload();
          },8000)
        };
    } 
  