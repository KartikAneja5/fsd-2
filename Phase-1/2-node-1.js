//setInterval


function updateTime() {
 // Get the current time in HH:MM:SS format for India timezone
 const timeString = new Date().toLocaleTimeString();
 console.log(timeString);
}
updateTime();
// Call updateTime every second (1000 milliseconds)
setInterval(updateTime, 1000);

// setTimeout
setTimeout(function() {
 console.log("This message is shown after 3 seconds");
}, 3000);

setTimeout(() => {
console.log("hello".toUpperCase())
}, 5000);