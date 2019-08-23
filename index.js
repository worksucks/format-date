const formatDate = (timeInSeconds) => {
  var seconds = Number(timeInSeconds);
  var h = Math.floor(seconds / 3600);
  var min = Math.floor(seconds % 3600 / 60);
  var sec = Math.floor(seconds % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = min > 0 ? min + (min == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = sec > 0 ? sec + (sec == 1 ? " second" : " seconds") : "";

}

module.exports = formatDate;
