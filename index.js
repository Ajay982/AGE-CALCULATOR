function calculate() {
  var dob = document.getElementById("dob").value;
  var dop = document.getElementById("dop").value;

  {
    var arr = dob.toString();
    var array = new Array();
    array = arr.split("-");
  }

  var birth_date = array[2];
  var birth_month = array[1];
  var birth_year = array[0];

  {
    var arrNow = dop.toString();
    var newArray = new Array();
    newArray = arrNow.split("-");
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
    current_month =  parseInt(current_month) + 12;
  }

  if(isNaN(dob)==false )
  { 
    alert("Enter the value ");
    var out= document.getElementById("heading");
    out.innerHTML= "You have not entered any  Value";
  }

  else if(current_year<birth_year){
      alert("Not born yet")
      var out= document.getElementById("heading");
      out.innerHTML= "Not born yet";
  }

  else if(current_year<=birth_year && current_month<birth_month){
    alert("Not born yet")
    var out= document.getElementById("heading");
    out.innerHTML= "Not born yet";
}
  else{

  var calculated_date = current_date - birth_date;
  var calculated_month = current_month - birth_month;
  var calculated_year = current_year - birth_year;

  var out= document.getElementById("heading");
  out.innerHTML=calculated_date +" days"+" "+ calculated_month+ " months"+" "+ calculated_year+ " "+"year";

  var year= document.getElementById("year")
  year.innerHTML= calculated_year +" "+ "year"

  var month=calculated_year*12+calculated_month;
  document.getElementById("month").innerHTML= month +" "+  "months";

  if(calculated_year>0){
    var week=(calculated_year*52) + (calculated_month*4.34524)+ (calculated_date/7);
  }

  else{
    week= (calculated_date/7) + calculated_month*4.34524 ; 
  }

  document.getElementById("weeks").innerHTML=week.toFixed(0) + " " + "week";

  var days=(calculated_date+(calculated_month*30.4167));
  document.getElementById("days").innerHTML=days.toFixed(0) +" " + "days";

  document.getElementById("hours").innerHTML=(days*24).toFixed(0) +" " +"Hours";

  document.getElementById("minute").innerHTML=(days*24*60).toFixed(0) +" " +"Minutes";

  document.getElementById("second").innerHTML=(days*24*3600).toFixed(0) +" " +"Seconds";
  }

 



}

