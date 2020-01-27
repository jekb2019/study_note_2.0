function showHideList(id){
  var list = document.getElementById(id+"_sublist");
  if(list.style.display == "none"){
    $("#"+id).next().next().css("display","block");
    $("#"+id).children("div").text("-");
  }else{
    $("#"+id).next().next().css("display","none");
    $("#"+id).children("div").text("+");
  }
}
