import { list } from "@chakra-ui/react";

//import {difficulty} from "./Components/Droyhetsskala"
const questions = [
  {
    header: " ", 
    value: "1.0", 
    content:"Alle fra omega kan dele ut en slurk til en fra smørekoppen",
   }, 
   {
    header: " ", 
    value: "1.0", 
    content:"Alle fra smørekoppen kan dele ut en slurk til en fra omega",
   }, 
   {
    header: " ", 
    value: "5.0", 
    content:"Alle som drikker Dahls kan dele ut 4 slurker. ",
   }, 
   {
    header: "Drikk hvis", 
    value: "1.0", 
    content:"Drikk hvis du liker betong",
   }, 
   {
    header: "Drikk hvis", 
    value: "1.0", 
    content:"Drikk hvis du har hatt Skau",
   }, 
   {
    header: "Drikk hvis", 
    value: "1.0", 
    content:"Drikk hvis du har A-snitt",
   }, 
   {
    header: "Drikk hvis", 
    value: "1.0", 
    content:"Drikk hvis du mener du er blant de 5 mest attraktive i rommet",
   }, 
   {
    header: "Drikk hvis", 
    value: "1.0", 
    content:"Drikk hvis du tror du er blant de 5 smarteste i rommet",
   }, 
   {
    header: "Drikk hvis", 
    value: "2.0", 
    content:"Alle «hetero» indøkere må ta en shot",
   }, 
   {
    header: "Drikk hvis", 
    value: "3.0", 
    content:"Drikk hvis du er keen på en i rommet",
   }, 
   {
    header: "Drikk hvis", 
    value: "4.0", 
    content:"Drikk hvis du er nyshava",
   }, 
   {
    header: "Drikk hvis", 
    value: "5.0", 
    content:"Drikk hvis du har pult noen i rommet",
   }, 
   {
    header: "Drikk hvis", 
    value: "5.0", 
    content:"Drikk hvis du skal pule en i rommet",
   }, 
   {
    header: "Drikk hvis", 
    value: "6.0", 
    content:"Drikk hvis du har pult de siste 24 timene",
   }, 
   {
    header: "Drikk hvis", 
    value: "7.0", 
    content:"Drikk hvis du har pult noen av samme kjønn",
   }, 
   {
    header: "Drikk hvis", 
    value: "8.0", 
    content:"Drikk hvis du har/har blitt rimma",
   }, 
   {
    header: "Drikk hvis", 
    value: "8.0", 
    content:"Drikk hvis du har hatt trekant",
   }, 
   {
    header: "Drikk hvis", 
    value: "8.0", 
    content:"Drikk hvis du har hatt anal",
   }, 
   {
    header: "Jeg har aldri", 
    value: "1.0", 
    content:"Jeg har aldri vært på pendelnasj",
   }, 
   {
    header: "Jeg har aldri", 
    value: "1.0", 
    content:"Jeg har aldri tatt en taktisk kont",
   }, 
   {
    header: "Jeg har aldri", 
    value: "1.0", 
    content:"Jeg har aldri latet som at en kont var taktisk",
   }, 
   {
    header: "Jeg har aldri", 
    value: "2.0", 
    content:"Jeg har aldri stjålet et flagg",
   }, 
   {
    header: "Jeg har aldri", 
    value: "2.0", 
    content:"Jeg har aldri løyet om hva jeg studerer på fylla",
   }, 
   {
    header: "Jeg har aldri", 
    value: "2.0", 
    content:"Jeg har aldri vært på DT-torsdag",
   }, 
   {
    header: "Jeg har aldri", 
    value: "2.0", 
    content:"Jeg har aldri crusha på en professor",
   }, 
   {
    header: "Jeg har aldri", 
    value: "2.0", 
    content:"Jeg har aldri blitt avvist på byen",
   }, 
   {
    header: "Jeg har aldri", 
    value: "2.0", 
    content:"Jeg har aldri brukt fake leg",
   }, 
   {
    header: "Jeg har aldri", 
    value: "3.0", 
    content:"Jeg har aldri blitt drita på gløs",
   }, 
   {
    header: "Jeg har aldri", 
    value: "3.0", 
    content:"Jeg har aldri vært på samf til stengetid",
   }, 
   {
    header: "Jeg har aldri", 
    value: "3.0", 
    content:"Jeg har aldri tilbrakt en hel kveld i bodegaen",
   }, 
   {
    header: "Jeg har aldri", 
    value: "3.0", 
    content:"Jeg har aldri dumpet noen",
   }, 
   {
    header: "Jeg har aldri", 
    value: "3.0", 
    content:"Jeg har aldri blitt dumpa",
   }, 
   {
    header: "Jeg har aldri", 
    value: "3.0", 
    content:"Jeg har aldri blacka ut",
   }, 
   {
    header: "Jeg har aldri", 
    value: "4.0", 
    content:"Jeg har aldri måttet chugge til lambo",
   }, 
   {
    header: "Jeg har aldri", 
    value: "4.0", 
    content:"Jeg har aldri pult en studass",
   }, 
   {
    header: "Jeg har aldri", 
    value: "4.0", 
    content:"Jeg har aldri løyet for å få meg noe",
   }, 
   {
    header: "Jeg har aldri", 
    value: "4.0", 
    content:"Jeg har aldri pult en fadder",
   }, 
   {
    header: "Jeg har aldri", 
    value: "4.0", 
    content:"Jeg har aldri pult et fadderbarn",
   }, 
   {
    header: "Jeg har aldri", 
    value: "4.0", 
    content:"Jeg har aldri pult på gløs",
   }, 
   {
    header: "Jeg har aldri", 
    value: "4.0", 
    content:"Jeg har aldri pult en fra BI",
   }, 
   {
    header: "Jeg har aldri", 
    value: "4.0", 
    content:"Jeg har aldri funnet ligg på bodegaen",
   }, 
   {
    header: "Jeg har aldri", 
    value: "4.0", 
    content:"Jeg har aldri blitt glad for å få mensen",
   }, 
   {
    header: "Jeg har aldri", 
    value: "4.0", 
    content:"Jeg har aldri kjørt brannbil",
   }, 
   {
    header: "Jeg har aldri ", 
    value: "3.0", 
    content:"Jeg ha aldri vært drita med familien",
   }, 
   {
    header: "Jeg har aldri ", 
    value: "3.0", 
    content:"jeg har aldri havnet på legevakten på fylla",
   }, 
   {
    header: "Jeg har aldri ", 
    value: "4.0", 
    content:"Jeg har aldri hatt en penis",
   }, 
   {
    header: "Jeg har aldri ", 
    value: "4.0", 
    content:"Jeg har aldri sett på porno",
   }, 
   {
    header: "Jeg har aldri ", 
    value: "5.0", 
    content:"Jeg har aldri pult noen med en kjønnssykdom ",
   }, 
   {
    header: "Jeg har aldri ", 
    value: "7.0", 
    content:"Jeg har aldri tatt noe sterkere enn hasj",
   }, 
   {
    header: "Jeg har aldri ", 
    value: "5.0", 
    content:"Jeg har aldri fått noe for å ligge med noen",
   }, 
   {
    header: "Jeg har aldri ", 
    value: "6.0", 
    content:"Jeg har aldri røyket hasj",
   }, 
   {
    header: "Jeg har aldri ", 
    value: "6.0", 
    content:"Jeg har aldri onanert på gløs",
   }, 
   {
    header: "Jeg har aldri ", 
    value: "6.0", 
    content:"Jeg har aldri hatt sex med bind for øynene",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb, hvem er mest attraktiv i rommet?",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb kan velge seg en drikkepartner",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb kan dele ut 4 slurker til den som stråler mest",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb  kan dele ut 4 slurker til den peneste i rommet",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb  kan dele ut 4 slurker til den som lukter best",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "2.0", 
    content:"memb og memb2 må ha øyekontakt de neste fem spørsmålene",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "4.0", 
    content:"Drikk en slurk for hver pulbare person i rommet",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "4.0", 
    content:"memb må si sin største fetish, eller ta 4 slurker ",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "4.0", 
    content:"memb må chugge drikken sin",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "4.0", 
    content:"memb må sitte på fanget til memb2 de neste 3 spørsmålene, eller chugge drikken sin. ",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "4.0", 
    content:"memb kan dele ut 2 slurker til den som ser mest på porno",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "5.0", 
    content:"memb og memb2 må bytte drikke ",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "6.0", 
    content:"memb kan dele ut 2 slurker til den som er mest kinky",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "9.0", 
    content:"memb må ta av tre klesplagg, og ha dem av de neste 3 rundene",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "9.0", 
    content:"memb skal ta av seg buksene, og kan ta dem på etter minst 3 runder. ",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "9.0", 
    content:"memb må hooke noen i rommet",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "10.0", 
    content:"memb velger 3 plagg memb2 skal ta av seg. memb2 kan kle på seg igjen etter 2 runder. ",
   }, 
   {
    header: "Ok, red flag eller dealbreaker:", 
    value: "1.0", 
    content:"Personen studerer på Dragvoll",
   }, 
   {
    header: "Ok, red flag eller dealbreaker:", 
    value: "1.0", 
    content:"Personen går fysmat",
   }, 
   {
    header: "Ok, red flag eller dealbreaker:", 
    value: "1.0", 
    content:"Personen er fra trondheim ",
   }, 
   {
    header: "Ok, red flag eller dealbreaker:", 
    value: "1.0", 
    content:"Personen bor på Moholt",
   }, 
   {
    header: "Ok, red flag eller dealbreaker:", 
    value: "2.0", 
    content:"Bodegaen er favorittstedet hans/hennes på Samf",
   }, 
   {
    header: "Ok, red flag eller dealbreaker:", 
    value: "2.0", 
    content:"Personen liker å stjele ting på fylla ",
   }, 
   {
    header: "Pekelek", 
    value: "1.0", 
    content:"Hvem har størst baller?",
   }, 
   {
    header: "Pekelek", 
    value: "1.0", 
    content:"Hvem er mest fornøyd med eget utseende?",
   }, 
   {
    header: "Pekelek", 
    value: "1.0", 
    content:"Hvem har best kropp?",
   }, 
   {
    header: "Pekelek", 
    value: "1.0", 
    content:"Hvem har finest smil?",
   }, 
   {
    header: "Pekelek", 
    value: "2.0", 
    content:"Hvem har den sjukeste historien?",
   }, 
   {
    header: "Pekelek", 
    value: "3.0", 
    content:"Hvem er den beste kysseren",
   }, 
   {
    header: "Pekelek", 
    value: "3.0", 
    content:"Hvem ender på st. Olavs i kveld?",
   }, 
   {
    header: "Pekelek", 
    value: "4.0", 
    content:"Hvem er kåtest?",
   }, 
   {
    header: "Pekelek", 
    value: "4.0", 
    content:"Hvem har hatt sex med flest i dette rommet",
   }, 
   {
    header: "Pekelek", 
    value: "5.0", 
    content:"Hvem er best i senga?",
   }, 
   {
    header: "Pekelek", 
    value: "5.0", 
    content:"Hvem har tatt flest angrepiller?",
   }, 
   {
    header: "Pekelek", 
    value: "9.0", 
    content:"Hvem ville gitt den beste lap dancen?",
   }, 
   {
    header: "legge til utfordring", 
    value: "1.0", 
    content:"memb kan legge til 3 utfordringer",
   }, 
   {
    header: "legge til utfordring", 
    value: "1.0", 
    content:"memb kan legge til 3 utfordringer",
   }, 
   {
    header: "legge til utfordring", 
    value: "1.0", 
    content:"memb kan legge til 2 utfordringer",
   }, 
   {
    header: "legge til utfordring", 
    value: "1.0", 
    content:"memb kan legge til 2 utfordringer",
   }, 
   {
    header: "legge til utfordring", 
    value: "1.0", 
    content:"memb kan legge til en utfordring",
   }, 
   {
    header: "legge til utfordring", 
    value: "1.0", 
    content:"memb kan legge til en utfordring",
   }, 
   {
    header: "legge til utfordring", 
    value: "1.0", 
    content:"send telefonen rundt, så alle som vil kan legge til utfordringer",
   }, 
   {
    header: "legge til utfordring", 
    value: "1.0", 
    content:"send telefonen rundt, så alle som vil kan legge til utfordringer",
   }, 
   {
    header: "legge til utfordring", 
    value: "1.0", 
    content:"memb kan legge til 2 utfordringer",
   }, 
   {
    header: "legge til utfordring", 
    value: "1.0", 
    content:"memb kan legge til 2 utfordringer",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "6.0", 
    content:"memb: fortell om ditt siste ligg, og ranger opplevelsen fra 1-10",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb: beskriv hver person i rommet med ett ord, og del ut 5 slurker. ",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb: gi et kompliment til hver person i rommet. Skål for komplimentene!",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "4.0", 
    content:"memb: hold en tale og takk alle for å ha kommet i kveld. Del ut 5 slurker. ",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "8.0", 
    content:"Karaoke!! memb må synge et vers av sin yndlingssang, eller chugge hele drikken sin. ",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "6.0", 
    content:"memb, legg ut på instastory: \"Det er på samfundet det skjer i kveld!\" eller chugg hele drikken din",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "7.0", 
    content:"memb: legg ut en selfie på instastory, eller chugg hele drikken din",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "5.0", 
    content:"memb, legg ut en boomerang på instastory, eller chiúgg hele drikken din",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "6.0", 
    content:"memb, legg ut på mystory: \"Noen som vet hvor folk drar ut i kveld?\" eller chugg hele drikken din",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "5.0", 
    content:"memb, hvem i rommet har den beste drikken? Bytt drikke med denne personen. ",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "4.0", 
    content:"memb, gå inn på insta og lik et gammelt bilde hos den første personen som dukker opp på feeden din. Eller ta 5 slurker.",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb, gi 2 slurker til den som lukter best",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb, gi to slurker til den som snakker mest",
   }, 
   {
    header: "Ok, red flag eller dealbreaker:", 
    value: "nan", 
    content:" Personen liker trøndersk kebab",
   }, 
   {
    header: "Chuggekonkurranse!!", 
    value: "1.0", 
    content:"memb mot memb2",
   }, 
   {
    header: "Chuggekonkurranse!!", 
    value: "1.0", 
    content:"memb mot memb3",
   }, 
   {
    header: "Chuggekonkurranse!!", 
    value: "1.0", 
    content:"memb mot memb4",
   }, 
   {
    header: "Chuggekonkurranse!!", 
    value: "1.0", 
    content:"memb mot memb5",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "6.0", 
    content:"memb, finn frem et glass, og la alle helle litt av drikken sin i det. Chugg glasset!",
   }, 
   {
    header: "Pekelek", 
    value: "1.0", 
    content:"Hvem har finest outfit?",
   }, 
   {
    header: "Pekelek", 
    value: "1.0", 
    content:"Hvem har finest øyne?",
   }, 
   {
    header: "Pekelek", 
    value: "1.0", 
    content:"Hvem hadde vært den beste ektefellen?",
   }, 
   {
    header: "Pekelek", 
    value: "1.0", 
    content:"Hvem kommer ikke inn på utested i kveld?",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb kan velge seg en drikkepartner",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb, del ut 4 slurker til den keegeste i rommet",
   }, 
   {
    header: "Ok, red flag eller dealbreaker:", 
    value: "1.0", 
    content:"Personen går med siving-ringen til vanlig",
   }, 
   {
    header: "Jeg har aldri", 
    value: "2.0", 
    content:"Jeg har aldri blitt drita på bedpress",
   }, 
   {
    header: "Jeg har aldri", 
    value: "1.0", 
    content:"Jeg har aldri gått meg vill på stripa",
   }, 
   {
    header: "Drikk hvis", 
    value: "1.0", 
    content:"Drikk hvis du har vært keen på en fadder",
   }, 
   {
    header: "Drikk hvis", 
    value: "1.0", 
    content:"Drikk hvis du har vært på et midtsidebilde",
   }, 
   {
    header: "Jeg har aldri", 
    value: "1.0", 
    content:"Jeg har aldri spandert drikke på en random på byen",
   }, 
   {
    header: "Drikk hvis", 
    value: "1.0", 
    content:"Drikk hvis du har vært drita på festningen",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "4.0", 
    content:"memb, hvem ville du laget frokost til? Personen får tre slurker. ",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "5.0", 
    content:"memb, hva er din beste pulesang? Spill av sangen!",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "5.0", 
    content:"memb, hvem ville du invitert på overnatting? Personen får 2 slurker. ",
   }, 
   {
    header: "Pekelek", 
    value: "1.0", 
    content:"Hvem har best musikksmak? Personen kan queue tre sanger.",
   }, 
   {
    header: "Drikk hvis", 
    value: "1.0", 
    content:"Drikk hvis du flyttet til trondheim i år",
   }, 
   {
    header: "Pekelek", 
    value: "1.0", 
    content:"Hvem koker mest?",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "1.0", 
    content:"memb og memb2 skal ta håndbak",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "6.0", 
    content:"memb, beskriv ditt beste ligg med tre ord. Ta en skål for hvert ord.",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "3.0", 
    content:"memb: la alle på vorset signere armen din, eller chugg drikken din",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "2.0", 
    content:"memb, lag en drink til memb2 av ting du finner på vorset",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "10.0", 
    content:"memb, hva er oddsen for at du lar memb2 klippe håret ditt?",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "2.0", 
    content:"memb, drikk 3 slurker",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "2.0", 
    content:"memb, drikk 3 slurker",
   }, 
   {
    header: "Navn-spesifikt", 
    value: "2.0", 
    content:"memb, drikk 3 slurker",
   }, 
];

/*
function allowedDifficulties(){
const i= parseInt(difficulty);
const allowedDifficulties= [10,2,3,4,5,6,7,8,9,100]
var filtered = allowedDifficulties.filter(function(value, index, arr){
  const list= value > i;
});
return list;

}


/*
function filter(array){
  
  array.forEach(element => {
    
    
    if( Object.keys(element).includes("value")){

      if (Number(Object.values(element)[10])>Number(difficulty)) {
        const index = array.indexOf(element);
        console.log(array.length);
        array.splice(index, 1);
        console.log(array.length);

        
       }}});
  
  return array;
}
*/



function shuffle(array) { //hentet fra: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  if (Object.values(array[0])[0].includes("Navn-spesifikt") === true) {
    array.splice(0, 1);
    console.log("1. element fjernet pga det var navn-spesifikt");
  };
  array = array.filter(n => n);

  console.log("test");
  
  return array;
}


//filter(questions);
shuffle(questions);




export default shuffle(questions);
