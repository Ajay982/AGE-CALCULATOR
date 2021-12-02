function age() {
    var d1 = document.getElementById('bdate').value;
    var m1 = document.getElementById('bmonth').value;
    var y1 = document.getElementById('byear').value;
  
    var date = new Date();
    var d2 = document.getElementById('cdate').value;
    var m2 = document.getElementById('cmonth').value;
    var y2 = document.getElementById('cyear').value;
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if(d1 > d2){
      let days=month[m2-2];
      d2 = d2 + days;   
      m2 = m2 - 1;
    }
    else if(m1 > m2){
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;  

  
    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
  }