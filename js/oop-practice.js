// STEP 1

// function Cat() {
//     
// }

// const Dog = function(breed) {
//    
// }

// STEP 2
// const tiger = new Cat()
// const daisy = new Dog()

// STEP 3

// function Animal() {
//     this.displayText = function(){
//         console.log('The Animal has been created')
//     }
// }
// const lion = new Animal()
// lion.displayText()

// STEP 4

// function Animal(kind) {
//     this.kind = kind
//     this.displayText = function(){
//         console.log(`${this.kind}`)
//     }
// }
// const cat = new Animal('Siamese')
// cat.displayText()

// STEP 5

// function Animal(type,breed,color,height,length) {
//     this.type   = type
//     this.breed  = breed
//     this.color  = color
//     this.height = height
//     this.length = length
// }
// const dog = new Animal('dog','German shepherd','black','26 inches','25 inches')

// STEP 6
//Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
// for (let i in dog) {
//     console.log(`${i}: ${dog[i]}`)
// }

// STEP 7

// function Animal(type,breed,color,height,length) {
//     this.type   = type
//     this.breed  = breed
//     this.height = height
//     this.color  = color
//     this.length = length
    
//     this.speak = function() {
//         if (this.type === 'dog') {
//             return `The ${this.color} dog is barking!`
//         } else if (this.type === 'cat') {
//             return `The ${this.color} cat is meowing!`
//         }
//     }
// }
// const dog = new Animal('dog','German shepherd','black','26 inches','25 inches')
// console.log(dog.speak())


// STEP 8

// function Animal(type,breed,color,height,length) {
//     let _type   = type
//     let _breed  = breed
//     let _height = height
//     let _color  = color
//     let _length = length
    
//     let checkType = function() {
//         if (_type === 'dog') {
//             return 'dog'
//         } else {
//             return 'cat'
//         }
//     }

//     this.speak = function() {
//         return checkType()
//     }
// }
// const dog = new Animal('dog','German shepherd','black','26 inches','25 inches')
// console.log(`The ${dog.speak()} has made a noise!`)

// STEP 9

String.prototype.findWords = function(word) {
    let wordCount = 0

    paragraph = paragraph.toLowerCase().replace(/[^\p{L}\s]/gu,'')
    paragraph = paragraph.split(' ')

    for (let i = 0; i < paragraph.length; i++){
        if (paragraph[i] === word) {
            wordCount++
        }
    }
    
    return wordCount 
}
let paragraph = 'The Asiatic lion is the last surviving population of this clade. Once also found in the Middle East, it is nowadays confined in the wild to Gujarat in India. Genetically, the extinct lions from Northern Africa, formally termed as Barbary lions, fall into the same clade as the Asiatic lion. Therefore, the range of this lion clade encompassed historically North Africa, southeastern Europe, the Arabian Peninsula, the Middle East and the Indian subcontinent'
let word = 'lion'
console.log(`The word '${word}' has been found ${paragraph.findWords(word)} times in the paragraph.`)
