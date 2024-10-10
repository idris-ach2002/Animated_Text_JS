const target = document.getElementById("target");
let array = [ "créatif",
    "photographe",
    "passionné",
    "organisé",
    "rigoureux",
    "motivé",
    "curieux",
    "responsable",
    "persévérant",
    "polyvalent",
    "autonome",
    "collaboratif",
    "dynamique",
    "patient",
    "innovant",
    "ingénieux",
    "sociable",
    "empathique",
    "attentif",
    "méthodique",
    "réactif",
    "précis",
    "dévoué",
    "flexible",
    "optimiste",
    "enthousiaste",
    "perfectionniste",
    "audacieux",
    "perspicace",
    "ambitieux",
    "respectueux",
    "réfléchi",
    "ouvert d'esprit",
    "confiant",
    "humble",
    "déterminé",
    "observateur",
    "visionnaire",
    "communicatif",
    "adaptable",
    "inspiré",
    "compétitif",
    "résilient",
    "à l'écoute",
    "inventif",
    "proactif",
    "minutieux",
    "analytique",
    "stratégique",
    "honnête",
    "fidèle",
    "généreux",
    "fiable",
    "productif",
    "discipliné",
    "volontaire",
    "intègre",
    "pragmatique",
    "rapide",
    "efficace",
    "visionnaire",
    "compétent"];
wordIndex = 0;
letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);
    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
        letter.remove();
    },2800);
};


const loop = () => {
    setTimeout( () => {
        if(wordIndex >= array.length){
            wordIndex = 0;
            letterIndex = 0;
        }
        if(letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
        }else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
            },2800);
        }
    },66);
};

loop();



