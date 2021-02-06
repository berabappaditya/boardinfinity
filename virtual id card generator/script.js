function cardShow(){
  document.getElementById("idcard").style.display="flex";
  nam=document.getElementById("stname").value;
  clg=document.getElementById("college").value;
  addrs=document.getElementById("adress").value;
  document.getElementById("nameshow").innerHTML=`Name: ${nam}`;
  document.getElementById("collegeshow").innerHTML=`College: ${clg}`;
  document.getElementById("adressshow").innerHTML=`Adress: ${addrs}`;
}
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#imgPrev').attr('src', e.target.result);
      $('#idCardImg').attr('src', e.target.result);
    }
   
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#imgInp").change(function() {
  readURL(this);
});