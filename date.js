var moment = require('moment');
// const date = new Date();
// const dayOfWeek = moment(date).day();
// const dayOfWeekLabel = moment.weekdays(dayOfWeek).toLowerCase();
// console.log(dayOfWeek, "sss",dayOfWeekLabel,new Date())
let timeObj = {
  startHour:5,
  startMinute:0,
  endHour:5,
  endMinute:1
}
let timeObj2 = {
  startHour:5,
  startMinute:0,
  endHour:7,
  endMinute:0
}

const st = moment({hour:timeObj.startHour,minute:timeObj.startMinute})
const end = moment({hour:timeObj.endHour,minute:timeObj.endMinute})
console.log(end.isAfter(st))


// const event = new Date('2022-09-23T15:30:00.000+00:00');
// const options = {  year: 'numeric', month: 'numeric', day: 'numeric' };
// console.log(event.toLocaleDateString('ar-EG', options));

// const bookingDate = moment('2022-09-23T17:30:00.000+00:00').format(
//     'DD MMMM YYYY',
//   );
//   const bookingTime = moment('2022-09-23T15:30:00.000+00:00').format('LT');
//   console.log(bookingDate,bookingTime)
//   console.log(new Date(bookingDate).toLocaleString('ar-EG', options))
//   console.log(new Date('2022-09-23T15:30:00.000+00:00').getTime())
//   console.log(new Date('2022-09-23T23:30:00.000+00:00').toLocaleTimeString('ar-EG',{hour: '2-digit', minute:'2-digit'}));
//   console.log(new Date('2022-09-23T23:30:00.000+00:00').toLocaleTimeString({hour: '2-digit', minute:'2-digit'}));
  // function gettime(date) {
  //   var hours = date.getHours().toLocaleTimeString('er-EG');
  //   var minutes = date.getMinutes();
  //   var ampm = hours >= 12 ? 'pm' : 'am';
  //   hours = hours % 12;
  //   hours = hours ? hours : 12; // the hour '0' should be '12'
  //   minutes = minutes < 10 ? '0'+minutes : minutes;
  //   return  hours + ':' + minutes + ' ' + ampm;
  // }
  // console.log(gettime(new Date()))
  

  
  
// // 2020-05-08T22:57:42+05:30
// console.log(moment().format());
  
// // May 8th 2020, 10:56:31 pm
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  
// // Friday
// console.log(moment().format('dddd'));
  
// // May 8th 20
// console.log(moment().format("MMM Do YY"));
  
// // 2020 escaped 2020 
// console.log(moment().format('YYYY [escaped] YYYY'));