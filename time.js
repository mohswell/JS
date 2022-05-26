function showTime(){
    // creating a date object using Date() method
    var date = new Date();
    var hour = date.getHours(); // 0 - 23
    var minute = date.getMinutes(); // 0 - 59
    var second = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(hour == 0){
        hour = 12;
    }
    
    if(hour > 12){
        // if hr is more than 12 eg 13, take 13 - 12 giving 1 and session is made pm
        hour = hour - 12;
        session = "PM";
    }
    
    //if hours and minutes and seconds is less than 10: 
    //if true return string concatenation of hour or minutes or seconds with 0, e.g 9.0
    // if not return the hour or minutes or seconds e.g 11
    hour = (hour < 10) ? ("0" + hour) : hour;
    minute = (minute < 10) ? ("0" + minute) : minute;
    second = (second < 10) ? ("0" + second) : second;
    
    var time = hour + ":" + minute + ":" + second + " " + session;

   //using DOM manipulation to use div element and set its contents to the 'time' variable 
    document.getElementById("displayClock").innerText = time;
    document.getElementById("displayClock").textContent = time;
    
    //calling function after 1000 milliseconds
    setTimeout(showTime, 1000);
    
}

showTime();