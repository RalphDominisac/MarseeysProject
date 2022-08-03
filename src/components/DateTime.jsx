import React, { useState, useEffect } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

//   var options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
   
//   };
//   var prnDt = new Date().toLocaleTimeString("en", options);

//   console.log(prnDt);
var now = new Date();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var day = days[now.getDay()];
var month = months[now.getMonth()];
var numDay = now.getDay();
var numYear = now.getFullYear();

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  let longMonth = date.toLocaleString("en-us", { month: "long" }); /* June */
  return (
    <div>
      <p> {date.toLocaleTimeString()}</p>
      <p>
        {/* {longMonth + " "} */}
        {/* {prnDt} */}

        {day + ", " + month + " " + numDay + " " + numYear}
      </p>
    </div>
  );
};;

export default DateTime;
