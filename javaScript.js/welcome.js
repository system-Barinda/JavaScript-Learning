
const database = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso"
};


function welcome(language) {
  
  if (typeof language !== "string") {
    return "Welcome";
  }

 
  const lowerLang = language.toLowerCase();

  return database[lowerLang] || "Welcome";
}


console.log(welcome("finnish"));     
console.log(welcome("spanish"));     
console.log(welcome("PORTUGUESE"));  
console.log(welcome(42));            
console.log(welcome("German"));      
