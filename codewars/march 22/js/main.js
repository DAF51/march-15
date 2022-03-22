
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000


function past(h, m, s){
  const miliHour= h*3600000
  const miliMinute = m*60000
  const miliSecond = s*1000

  return miliHour+miliMinute+miliSecond
}