// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] 

const newCats = [...cats] 

const newCatsOne = [...cats] 

const newCatsRlc = [...cats] 

const newCatsRfc = [...cats]    

function destructivelyAppendCat(name) {
    cats.push(name) 
}


function destructivelyPrependCat(name) {
    cats.unshift(name)
} 

function destructivelyRemoveLastCat(name) {
    cats.pop(name) 

} 

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
} 

function appendCat(name) { 
   newCats.push(name) 
   return newCats 
}  

function prependCat(name) {
    newCatsOne.unshift(name) 
    return newCatsOne 
} 

function removeLastCat(name) {
    newCatsRlc.pop(name) 
    return newCatsRlc
}  

function removeFirstCat(name) {
    newCatsRfc.shift(name)
    return newCatsRfc
}