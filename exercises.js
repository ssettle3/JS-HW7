/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x , y){
    if(x > y){
        return x;
    } else{
        return y;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x , y , z){
    if(x >= y && x >= z){
      return x;
    } else {
      if(y >= x && y >= z){
        return y;
      } else {
        return z;
      }
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var vow = ["A", "E", "I", "O", "U", "Y", "a", "e", "i", "o", "u", "y"];
    if(char = vow.indexOf(char) > -1){
      return true;
    } else{
      return false;
    }
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    var isCon = false;
    var string1 = "";

    for (i = 0; i < cons.length; i++) {
        if (phrase == cons[i]) {
            isCon = true;
        }
    }
    return isCon;


    for (var i = 0; i < phrase.length; i++) {
        if (checkConsonants(phrase[i])) {
            string1 += phrase[i] + "o" + phrase[i];
        } else {
            string1 += phrase[i];
        }
    }
};
  




// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    var total = array.reduce(function(num1, num2){
      return num1 + num2;
    });
    return total;
};

function multiply(array){
    var total = array.reduce(function(num1, num2){
      return num1 * num2;
    });
    return total;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    var rev = string.split("").reverse(string).join("");

    return rev;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  var wordLength = 0;

  words.forEach(function(wrd){
    if(wrd.length > wordLength){
      wordLength = wrdlength;
      }
  });
    return wordLength;

};
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    var filt = words.filter(function(word){
      return word.length > i
    });

    return filt;
  };

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var freq = {};
    for (var i = 0; i < string.length; i++){
      var letter = string.charAt(i);
      if(freq[letter]){
        freq[letter]++;
       } else {
          freq[letter] = 1;
        }
      }
      return freq;
};
