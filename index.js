
var name = "Aki"
function introduction (name){
    return `Hi, my name is ${name}.`
}
console.log(introduction(name))

var name = "Aki"
var language = "Ember.js"

function introductionWithLanguage (name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguage(name, language))

var name = "Gracie"
var language;

function introductionWithLanguageOptional (name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional(name))