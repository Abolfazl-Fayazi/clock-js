//we must make a function which gets the time online, and breaks it into pieces as hour, minute and second.
//all of the variables and also 'new Date' function must be defined inside of the 'clock' function; so the 'clock' function can rich the variables and 'new Date' data.
const clock = function () {
  //the 'new Date()' function brings us the full date and time, so we get what we want by methods, as you see below.
  const time = new Date();

  //we must define the variables 'hour', 'minute' and 'second' by the keyword 'let;, because it is time and it is changing; if we define them by 'const' we gonna get assignment error.
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let ampm = " AM";

  //we have 'AM' and 'PM', so it is a 12-hours clock; so we must pay attention to the 'hour' number and change it into 12-hours.(when we have am & pm, then we wont have the hour 21 !).
  //we should change 1-digit numbers into 2-digit numbers by adding '0' before them to make them  more beautiful. eg. (1 : 2 : 3 am) => (01 : 02 : 03 am).
  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    ampm = " PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let now = hour + " : " + minute + " : " + second + ampm;

  document.querySelector(".time").innerHTML = now;

  //we use the command 'setTimeout' to repeat the function running to get the time online agin and again to update the time every second.
  //(the 'setTimeout' repeat time must not be more than 1 sec, to update the time every 1 second.)
  setTimeout(clock, 100);
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//at last we call the function we have made.
clock();
