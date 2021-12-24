var time = '01:05:45AM'
var amOrPm = time.slice(time.length-2);
var time = time.substring(0, time.length - 2);

if (amOrPm == "PM"){
    var hour = parseInt(time.slice(0,2));   
    var newHour = hour + 12
    if(newHour == 24){
        newHour = 12;
    }

    var newHourString = newHour.toString();
    if (newHourString.length == 1){
        newHourString = "0" + newHourString;
    }
    
    time = time.slice(3);
    time = newHourString + ":" + time;
    console.log(time)
} else{
    var hour = parseInt(time.slice(0,2));  
    if (hour==12){
        var newHourString = "00";
        time = time.slice(3);
        time = newHourString + ":" + time;
        console.log(time)   
    } else {
        console.log(time)   
    }
     
}
