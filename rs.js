
var mydetails = {
"Name":"K.sujith",
"Age":29,
"Degree":"Bsc (computer science)",
"Address":"Ooty, The niligiris",
"Number":"+918148263138",
};

for (var i in mydetails){
console.log(i,mydetails[i]);
}
/************************************************/
//2nd loop
//for loop
var mydetails1 = [{
"Name":"K.sujith",
"Age":29,
"Degree":"Bsc (computer science)",
"Address":"ooty, The niligiris",
"Number":"+918148263138"

}]
for(var i=0;i<mydetails1.length;i++){
    console.log(mydetails1[i]);

}

/*******************************************/
//3rd for of loop:

const result23 = [10,20,30,40,50]
for(var newresult23 of result23){
    console.log(newresult23);
}
/*******************************************/
//4th for each loop
var result24 = [100,101,102,103,104,105]
result24.forEach(numbers=>{console.log(numbers)});


//Q.2.
const myResume={
    "basics": {
        "name": "K. Sujith ",
        "email": "sujikn73@gamil.com",
        "phone": 8148263138,
        "degree": "Bsc(computer science)",
        "location": {
          "address": "9/81 ketti",
          "postalCode": 643215,
          "city": "coonoor",
          "state": "Tamilnadu",
          "country": "India"
        },
        "profiles": [
          {
            
            "github":"https://github.com/sujiprince"
          }
        ]
      },

      "education": [
        {
          "institution": "Maharaja arts and science College",
          "department": "Bsc computer science",
          "studyType": "fulltime",
          "batch start year": 2012,
          "batch end year": 2015,
          
        }
      ],
      "skills": [
        {
          "name": "javascript",
          "level": "beginer",

        }
      ],
      "languages": [
        {
          "language": "Tamil,English, malayalam, frence(basic)",
        }
      ],
      "interests": [
        {
          "name": "Playing chess,online games,watching playing cricket,watching movies in theatres",
        }
      ]
    }
    console.log(myResume);