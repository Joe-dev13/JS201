// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"

var str = 'leet'
var speek = {
    A : '4',
    E : '3',
    G : '6',
    L : '1',
    O : '0',
    S : '5',
    T : '7',
}

function leetSpeak (str){
    var arr = str.toUpperCase().split('');
    for (var i in arr){
      arr[i] = obj[arr[i]];
    }
    return arr.join('');
  }
  
  leetSpeak();
