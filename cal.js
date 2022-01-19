function calculate() {
  var dob = document.getElementById("dob").value;
  var dop = document.getElementById("dop").value;

  {
    var arr = dob.toString();
    var array = new Array();
    array = arr.split("-");
    console.log(array);
  }

  var birth_date = array[2];
  var birth_month = array[1];
  var birth_year = array[0];

  {
    var arrNow = dop.toString();
    var newArray = new Array();
    newArray = arrNow.split("-");
    console.log(newArray);
  }

  var current_date = newArray[2];
  var current_month = newArray[1];
  var current_year = newArray[0];

  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (current_date < birth_date) {
    current_date = parseInt(current_date) +months[birth_month - 1];
    current_month = current_month - 1;
  }

  if (birth_month > current_month) {
    current_year = current_year - 1;
    current_month = current_month + 12;
  }

  if(current_year<birth_year){
      alert("Not born yet")
  }

  var calculated_date = current_date - birth_date;
  var calculated_month = current_month - birth_month;
  var calculated_year = current_year - birth_year;

  let out= document.getElementById("heading");
  out.innerHTML=calculated_date+" days"+calculated_month+" months"+calculated_year+"year";


}
// calculate();
