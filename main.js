// 1. HARRY POTTER TITLES

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for(let i = 0; i < harryPotterTitles.length; i++){
 console.log(`Harry Potter ${harryPotterTitles[i]}`);
}


/////////////////////////////////////////////////////////////////////////////////////

// 2. STUDENT GRADES PART 2

grades= [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;
let fCount = 0;
let largestSoFar = 0;
let mostCommon
let average = 0;

for(var i = 0; i < grades.length; i++){
  
  if(grades[i] > 92){
    aCount++;
    average = average + grades[i];
  }
  
  else if(grades[i] > 84){
    bCount++;
    average = average + grades[i];
  }
  
 else if(grades[i] > 76){
    cCount++;
    average = average + grades[i];
  }
  
   else if(grades[i] > 64){
    dCount++;
    average = average + grades[i];
  }

  else {
    fCount++;
    average = average + grades[i];
  }
}

for(var i = 0; i < 5; i++){

if(aCount>largestSoFar){
  mostCommon = 'A';
  largestSoFar = aCount;
}
  
  else if(bCount>largestSoFar){
  mostCommon = 'B';
  largestSoFar = bCount;
}

else if(cCount>largestSoFar){
  mostCommon = 'C';
  largestSoFar = cCount;
}

else if(dCount>largestSoFar){
  mostCommon = 'D';
  largestSoFar = dCount;
}

else if(fCount>largestSoFar){
  mostCommon = 'F';
  largestSoFar = fCount;
}
  
else{}
}


average = (average / grades.length).toFixed(0);

//How many students got A's?
console.log('There were ' + aCount + ' As');

//How many students got B's?
console.log('There were ' + bCount + ' Bs');

//Which was the most common letter grade?
console.log('The most common grade in the class was ' + mostCommon + '. There were ' + largestSoFar);

//What was the average percentage grade in the class?
console.log('The average grade in the class was ' + average);


/////////////////////////////////////////////////////////////////////////////////////
// 3. Two, Four, Six, Eight - Who do we appreciate?! CHEER

for(var i = 2; i < 11; i = i + 2){
  
    if(i < 9){
      console.log(i);
    }
    
    else{
      console.log('Who do we Appreciate!?');
    }
  }



/////////////////////////////////////////////////////////////////////////////////////
// 4. INTERRUPTING COW

  var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

  let sentence = "";
  
  for(let i = 0; i < sentenceArray.length; i++){
    
    if( (i % 3 == 0) 
       && (i != 0) //added so sentence doesn't start with a moo
      ){
      sentence = (sentence + ' MOOOOOO ' + sentenceArray[i]);
      
    }
    
    else{
      sentence = sentence + " " + sentenceArray[i] ;
    }
  }
      
      console.log(sentence);


      

/////////////////////////////////////////////////////////////////////////////////////
// 5. THE BEATLES

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

let albums = ''
for(let i = 0; i < beatles.albums.length; i++){

    if(i === beatles.albums.length - 1){
        albums += `and ${beatles.albums[i]}`
    }
    
    else{
    albums += `${beatles.albums[i]}, `
    }
}

for(let i = 0; i < beatles.members.length; i++){

console.log(
`${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[i].birth} . He contributed heavily to the albums ${albums}.
`)};