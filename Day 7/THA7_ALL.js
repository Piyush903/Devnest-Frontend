//1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno
var student = { 
    name : "David Rayy",
     sclass : "VI", 
     rollno : 12 };
     console.log(student);
     //Q2 Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
     var student = { 
        name : "David Rayy",
         sclass : "VI", 
         rollno : 12 };
         console.log(student);
         delete student.rollno;
          console.log(student);
     //Q3 Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
     var student = { 
        name : "David Rayy",
         sclass : "VI", 
         rollno : 12 };
         var  count = 0;
        for (key in student) {
            if (student.hasOwnProperty(key))
                      count++;}
           console.log(count);      
    //Q4  Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
    var library = [ { author: 'Bill Gates',
     title: 'The Road Ahead',
      readingStatus: true },

       { author: 'Steve Jobs',
        title: 'Walter Isaacson',
         readingStatus: true },

          { author: 'Suzanne Collins',
           title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false }];
  for(let todo of library)
{
    console.log(todo.author);
    console.log(todo.title);
    console.log(todo.readingStatus);
}
//Q5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.
class Cylinder {
    constructor(cylHeight, cylDiameter) {
      this.cylHeight = cylHeight;
      this.cylDiameter = cylDiameter;
    }
    Volume() {
      var radius = this.cylDiameter / 2;
      return this.cylHeight * Math.PI * radius * radius;
    }
  }
  
  var cyl = new Cylinder(7, 4);
  console.log("Volume =", cyl.Volume().toFixed(2));
  //Q6Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
  var library = [ { title: 'The Road Ahead',
   author: 'Bill Gates',
    libraryID: 1254 },

     { title: 'Walter Isaacson',
      author: 'Steve Jobs',
       libraryID: 4264 },

        { title: 'Mockingjay: The Final Book of The Hunger Games',
         author: 'Suzanne Collins', 
         libraryID: 3245 }];

         var sortable = [];
       for(var id in library){
       sortable.push(library[id]['libraryID']);
        }

        sortable.sort((a,b) => a-b);

        for (const j in sortable) {
        for (var k in library) {
        if (sortable[j] == (library[k].libraryID)) {
            console.log(library[k]);
        }
    }
}