function showHideList(id){
  var list = document.getElementById(id+"_sublist");
  var text = document.getElementById(id+"_txt");
  if(list.style.display == "none"){
    list.style.display = "block";
    text.innerHTML = "-";
  }else{
    list.style.display = "none";
    text.innerHTML = "+";
  }
}
