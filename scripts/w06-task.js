
/* Warning, what follows is a list from wikipedia of english swear words.
Scroll past to the rest of the code if you so desire. */
const bad_words = [
    `arse`,
    `arsehead`,
    `arsehole`,
    `ass`,
    `asshole`,
    `bastard`,
    `bitch`,
    `bloody`,
    `bollocks`,
    `brotherfucker`,
    `bugger`,
    `bullshit`,
    `child-fucker`,
    `Christ on a bike`,
    `Christ on a cracker`,
    `cock`,
    `cocksucker`,
    `crap`,
    `cunt`,
    `damn`,
    `damnit`,
    `damn it`,
    `dick`,
    `dickhead`,
    `dyke`,
    `fatherfucker`,
    `frigger`,
    `fuck`,
    `fucker`,
    `goddamn`,
    `godsdamn`,
    `hell`,
    `holy shit`,
    `horseshit`,
    `Jesus Christ`,
    `Jesus fuck`,
    `Jesus H. Christ`,
    `Jesus Harold Christ`,
    `Jesus, Mary and Joseph`,
    `Jesus Mary and Joseph`,
    `Jesus and Mary and Joseph`,
    `kike`,
    `motherfucker`,
    `nigga`,
    `nigger`,
    `nigra`,
    `piss`,
    `prick`,
    `pussy`,
    `shit`,
    `shite`,
    `sisterfucker`,
    `slut`,
    `son of a whore`,
    `son of a bitch`,
    `sunova`,
    `sonuva`,
    `sweet Jesus`,
    `twat`,
    `wanker`,
    `poop`
]




var div = document.getElementById('button'); 

function censor_check(event) {
event.preventDefault();

var user_word = document.querySelector(`#cone_of_silence`);

console.log(user_word.value);
console.log("hi");

if (bad_words.includes(user_word.value)) {
    console.log(user_word.value)

const Thes = `https://dictionaryapi.com/api/v3/references/thesaurus/json/`.value
//user word here
const Aurus =  `?key=4374a1f1-034f-4ce7-8fa5-341e429800ad`.value
const ThesAurus = `${Thes}${user_word.value}${Aurus}`

const alt_words = []

const getThesaurus = async () => {
    const response = await fetch(ThesAurus);
    synonym_array = await response.json();
    alt_words.push(synonym_array);
};

console.log(alt_words);

getThesaurus();
let alt_word = alt_words.at(0); // <------ at is my array method
console.log(alt_word);

const Dict = `https://dictionaryapi.com/api/v3/references/collegiate/json/`;
//alt word here
const Ionary = `?key=45061386-1028-4cea-95fa-b7393a2cc18b`;
const DictIonary = `${Dict}${alt_word}${Ionary}`;

const getDictionary = async () => {
    const Response = await fetch(DictIonary);
    word_definition = await Response.json();
}
console.log(word_definition.value);

getDictionary(word_definition.value, alt_word.value);

    document.querySelector(`#cone_of_silence`).innerHTML = `What you entered registers as a bad word. Before you get your mouth washed out with soap, here is an alternative.`;
    document.querySelector(`#response_to_user`).innerHTML = alt_word.value;
    document.querySelector(`#definition`).innerHTML = word_definition.value;

} else {
    document.querySelector(`#response_to_user`).innerHTML = `The word you entered is not found in our list of bad words. Try another word!`;
    /* If the word is not in the dictionary of bad words, inform user their word is not found in this list of bad words and invite user to check other words. */
}
}

div.addEventListener('click', censor_check);