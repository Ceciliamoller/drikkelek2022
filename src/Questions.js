
import { glostema } from "./Components/MainPage";

//import {difficulty} from "./Components/Droyhetsskala"
const questions = [ // er const bedre?
{
  header: " ", 
  value: "0", 
  content:"Alle som drikker Dahls kan dele ut 4 slurker. ",
  glos:"1", 
 }, 
 {
  header: "Drikk hvis", 
  value: "0", 
  content:"Drikk hvis du har hatt Skau",
  glos:"1", 
 }, 
 {
  header: "Drikk hvis", 
  value: "0", 
  content:"Drikk hvis du har A-snitt",
  glos:"1", 
 }, 
 {
  header: "Drikk hvis", 
  value: "0", 
  content:"Drikk hvis du flyttet til trondheim i år",
  glos:"1", 
 }, 
 {
  header: "Drikk hvis", 
  value: "0", 
  content:"Drikk hvis du har vært i milla",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "0", 
  content:"Drikk hvis du har kjørt elsparkesykkel på fylla. ",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "0", 
  content:"Drikk hvis du har vært drita på festningen",
  glos:"1", 
 }, 
 {
  header: "Drikk hvis", 
  value: "0", 
  content:"Drikk hvis du holder drikken din nå",
  glos:"1", 
 }, 
 {
  header: "Drikk hvis", 
  value: "1", 
  content:"Drikk hvis du mener du er blant de 5 mest attraktive i rommet",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "1", 
  content:"Drikk hvis du tror du er blant de 5 smarteste i rommet",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "1", 
  content:"Drikk hvis du har vært keen på en fadder",
  glos:"1", 
 }, 
 {
  header: "Drikk hvis", 
  value: "1", 
  content:"Alle «hetero» indøkere må ta en shot",
  glos:"1", 
 }, 
 {
  header: "Drikk hvis", 
  value: "1", 
  content:"Drikk hvis du er keen på en i rommet",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "1", 
  content:"Drikk hvis du har kjæreste ",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "2", 
  content:"Drikk hvis du har vært på et midtsidebilde",
  glos:"1", 
 }, 
 {
  header: "Drikk hvis", 
  value: "2", 
  content:"Drikk hvis du er nyshava",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "2", 
  content:"Drikk hvis du har pult noen i rommet",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "2", 
  content:"Drikk hvis du har pult de siste 24 timene",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "2", 
  content:"Drikk hvis du har pult noen av samme kjønn",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "3", 
  content:"Drikk hvis du har/har blitt rimma",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "3", 
  content:"Drikk hvis du har hatt trekant",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "3", 
  content:"Drikk hvis du har hatt anal",
  glos:"0", 
 }, 
 {
  header: "Drikk hvis", 
  value: "3", 
  content:"Drikk hvis du skal pule noen i rommet",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "0", 
  content:"Jeg har aldri blitt dumpa",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "0", 
  content:"Jeg har aldri måttet chugge til lambo",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "0", 
  content:"Jeg har aldri vært på pendelnasj",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "0", 
  content:"Jeg har aldri tatt en taktisk kont",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "0", 
  content:"Jeg har aldri gått meg vill på stripa",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "0", 
  content:"Jeg har aldri crusha på en professor",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri latet som at en kont var taktisk",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri spandert drikke på en random på byen",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri blitt avvist på byen",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri brukt fake leg",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri stjålet et flagg",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri løyet om hva jeg studerer på fylla",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri vært på DT-torsdag",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri blitt drita på bedpress",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri vært på cava-søndag",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri dumpet noen",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri blacka ut",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri blitt drita på gløs",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri vært på samf til stengetid",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "1", 
  content:"Jeg har aldri tilbrakt en hel kveld i bodegaen",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "2", 
  content:"Jeg har aldri løyet for å få meg noe",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "2", 
  content:"Jeg har aldri blitt glad for å få mensen",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "2", 
  content:"Jeg har aldri kjørt brannbil",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "2", 
  content:"Jeg har aldri pult en studass",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "2", 
  content:"Jeg har aldri pult en fadder",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "2", 
  content:"Jeg har aldri pult et fadderbarn",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "2", 
  content:"Jeg har aldri pult på gløs",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "2", 
  content:"Jeg har aldri pult en fra BI",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "2", 
  content:"Jeg har aldri funnet ligg på bodegaen",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri", 
  value: "2", 
  content:"Jeg har aldri blitt kjørt hjem av politiet",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri ", 
  value: "0", 
  content:"Jeg har aldri hatt en penis",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri ", 
  value: "2", 
  content:"Jeg har aldri vært drita med familien",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri ", 
  value: "2", 
  content:"jeg har aldri havnet på legevakten på fylla",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri ", 
  value: "2", 
  content:"Jeg har aldri sett på porno",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri ", 
  value: "2", 
  content:"Jeg har aldri pult noen med en kjønnssykdom ",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri ", 
  value: "2", 
  content:"Jeg har aldri røyket hasj",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri ", 
  value: "2", 
  content:"Jeg har aldri hatt sex med bind for øynene",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri ", 
  value: "3", 
  content:"Jeg har aldri fått noe for å ligge med noen",
  glos:"0", 
 }, 
 {
  header: "Jeg har aldri ", 
  value: "3", 
  content:"Jeg har aldri onanert på gløs",
  glos:"1", 
 }, 
 {
  header: "Jeg har aldri ", 
  value: "3", 
  content:"Jeg har aldri tatt noe sterkere enn hasj",
  glos:"0", 
 }, 
 {
  header: "legg til utfordring", 
  value: "1", 
  content:"memb kan legge til 3 utfordringer",
  glos:"0", 
 }, 
 {
  header: "legg til utfordring", 
  value: "1", 
  content:"memb kan legge til 3 utfordringer",
  glos:"0", 
 }, 
 {
  header: "legg til utfordring", 
  value: "1", 
  content:"memb kan legge til 2 utfordringer",
  glos:"0", 
 }, 
 {
  header: "legg til utfordring", 
  value: "1", 
  content:"memb kan legge til 2 utfordringer",
  glos:"0", 
 }, 
 {
  header: "legg til utfordring", 
  value: "1", 
  content:"memb kan legge til en utfordring",
  glos:"0", 
 }, 
 {
  header: "legg til utfordring", 
  value: "1", 
  content:"memb kan legge til en utfordring",
  glos:"0", 
 }, 
 {
  header: "legg til utfordring", 
  value: "1", 
  content:"send telefonen rundt, så alle som vil kan legge til utfordringer",
  glos:"0", 
 }, 
 {
  header: "legg til utfordring", 
  value: "1", 
  content:"send telefonen rundt, så alle som vil kan legge til utfordringer",
  glos:"0", 
 }, 
 {
  header: "legg til utfordring", 
  value: "1", 
  content:"memb kan legge til 2 utfordringer",
  glos:"0", 
 }, 
 {
  header: "legg til utfordring", 
  value: "1", 
  content:"memb kan legge til 2 utfordringer",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "0", 
  content:"memb  kan dele ut 4 slurker til den peneste i rommet",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "0", 
  content:"memb: gi et kompliment til hver person i rommet. Skål for komplimentene!",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "0", 
  content:"memb, hva er de 3 viktigste egenskapene du ser etter i en partner?",
  glos:"1", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "0", 
  content:"memb, gi en slurk til den med høyest standard",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "0", 
  content:"memb kan dele ut 4 slurker til den som stråler mest",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "0", 
  content:"memb, gi 2 slurker til den smarteste i rommet",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "0", 
  content:"memb, hvem ville du byttet liv med? Personen får 3 slurker. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, hvem er mest attraktiv i rommet?",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb kan velge seg en drikkepartner",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb  kan dele ut 4 slurker til den som lukter best",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb: beskriv hver person i rommet med ett ord, og del ut 5 slurker. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, gi to slurker til den som snakker mest",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb kan velge seg en drikkepartner",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, del ut 4 slurker til den keegeste i rommet",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"Stirrekonkurranse mellom memb1 og memb2. Vinneren deler ut 6 slurker. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, drikk 3 slurker",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, drikk 3 slurker",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, drikk 3 slurker",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, drikk.",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, drikk 2 slurker",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb kan velge seg en drikkepartner",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb kan velge seg en drikkepartner",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, bytt plass med memb2 og ta en skål",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, bytt plass med memb2 og ta en skål",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, bytt plass med memb2 og ta en skål",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, ta en selfie med alle i rommet og sett det som bakgrunnsbilde. ",
  glos:"2", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, fra nå av må du drikke hver gang memb2 stiller et spørsmål. ",
  glos:"1", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"memb, gi en slurk til den med lavest standard",
  glos:"1", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "1", 
  content:"Waterfall! memb starter. ",
  glos:"1", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"Chuggekonkurranse! memb mot memb2",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"Chuggekonkurranse! memb mot memb2",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"Chuggekonkurranse! memb mot memb2",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"Chuggekonkurranse! memb mot memb2",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, ta håndbak med memb2. Vinneren deler ut 4 slurker. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, lag en drink til memb2 av ting du finner på vorset",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb: la alle på vorset signere armen din, eller chugg drikken din",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, alle kan stille deg et spørsmål hver. Svar ærlig, eller drikk 5 slurker. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"Drikk en slurk for hver pulbare person i rommet",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb må si sin største fetish, eller ta 4 slurker ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb må chugge drikken sin",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb må sitte på fanget til memb2 de neste 3 spørsmålene, eller chugge drikken sin. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb kan dele ut 2 slurker til den som ser mest på porno",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, gå inn på insta og lik et gammelt bilde hos den første personen som dukker opp på feeden din. Eller ta 5 slurker.",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, hvem ville du laget frokost til? Personen får tre slurker. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb og memb2 må bytte drikke ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, hvem i rommet har den beste drikken? Bytt drikke med denne personen. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, hva er din beste pulesang? Spill av sangen!",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, hvem ville du invitert på overnatting? Personen får 2 slurker. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb kan dele ut 2 slurker til den som er mest kinky",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb: fortell om ditt siste ligg, og ranger opplevelsen fra 1-10",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, legg ut på instastory: \"Det er på samfundet det skjer i kveld!\" eller chugg hele drikken din",
  glos:"1", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, legg ut på mystory: \"Noen som vet hvor folk drar ut i kveld?\" eller chugg hele drikken din",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, finn frem et glass, og la alle helle litt av drikken sin i det. Chugg glasset!",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, beskriv ditt beste ligg med tre ord. Ta en skål for hvert ord.",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb: legg ut en selfie på instastory, eller chugg hele drikken din",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, velg hvem som skal spise en teskje kanel",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, bytt overdel med en valgfri person, eller drikk 4 slurker. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "2", 
  content:"memb, gjett hvem i rommet som har med kondomer. Ta en slurk for hver gang du gjetter feil.",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"Karaoke!! memb må synge et vers av sin yndlingssang, eller chugge hele drikken sin. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb, send melding til ditt siste ligg og si at du har fått klamma. Eller drikk 5 slurker. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb må ta av tre klesplagg, og ha dem av de neste 3 rundene",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb skal ta av seg buksene, og kan ta dem på etter minst 3 runder. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb må hooke noen i rommet, eller ta 5 slurker. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb velger 3 plagg memb2 skal ta av seg. memb2 kan kle på seg igjen etter 2 runder. ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb, hva er oddsen for at du lar memb2 klippe håret ditt?",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb, spis et rått egg. Eller chugg.",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb, la memb2 gå igjennom telefonen din i 30 sek ",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb, vis memb2 "my eyes only"-bildene dine på snap",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb, stå på hendene og ta en shot",
  glos:"0", 
 }, 
 {
  header: "Navn-spesifikt", 
  value: "3", 
  content:"memb, illustrer din favoritt-sexstilling med memb2. Eller drikk 4 slurker. ",
  glos:"0", 
 }, 
 {
  header: "Ok, red flag eller dealbreaker:", 
  value: "0", 
  content:"Personen studerer på Dragvoll",
  glos:"1", 
 }, 
 {
  header: "Ok, red flag eller dealbreaker:", 
  value: "0", 
  content:"Personen går fysmat",
  glos:"1", 
 }, 
 {
  header: "Ok, red flag eller dealbreaker:", 
  value: "0", 
  content:"Personen er fra trondheim ",
  glos:"1", 
 }, 
 {
  header: "Ok, red flag eller dealbreaker:", 
  value: "0", 
  content:"Personen bor på Moholt",
  glos:"1", 
 }, 
 {
  header: "Ok, red flag eller dealbreaker:", 
  value: "0", 
  content:"Personen går med siving-ringen til vanlig",
  glos:"1", 
 }, 
 {
  header: "Ok, red flag eller dealbreaker:", 
  value: "0", 
  content:" Personen liker trøndersk kebab",
  glos:"1", 
 }, 
 {
  header: "Ok, red flag eller dealbreaker:", 
  value: "0", 
  content:"Personen har gått på folkehøyskole",
  glos:"0", 
 }, 
 {
  header: "Ok, red flag eller dealbreaker:", 
  value: "0", 
  content:"Bodegaen er favorittstedet hans/hennes på Samf",
  glos:"1", 
 }, 
 {
  header: "Ok, red flag eller dealbreaker:", 
  value: "1", 
  content:"Personen liker å stjele ting på fylla ",
  glos:"1", 
 }, 
 {
  header: "Pekelek", 
  value: "0", 
  content:"Hvem har finest outfit?",
  glos:"0", 
 }, 
 {
  header: "Pekelek", 
  value: "0", 
  content:"Hvem hadde vært den beste ektefellen?",
  glos:"0", 
 }, 
 {
  header: "Pekelek", 
  value: "0", 
  content:"Hvem har mest kontroll på livet?",
  glos:"0", 
 }, 
 {
  header: "Pekelek", 
  value: "0", 
  content:"Hvem kommer til å tjene mest?",
  glos:"0", 
 }, 
 {
  header: "Pekelek", 
  value: "0", 
  content:"Hvem får flest superlikes på Tinder?",
  glos:"0", 
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
  let currentIndex = array.length;
  let randomIndex;
  var arrayCopy=[...array];

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex], arrayCopy[currentIndex]];
  }
/*
  if (Object.values(array[0])[0].includes("Navn-spesifikt") === true) {
    arrayCopy.splice(0, 1);
    console.log("1. element fjernet pga det var navn-spesifikt");
  };
  */
  //array = array.filter(n => n);
  return arrayCopy;
}


//filter(questions)shuffle(questions);



export default shuffle(questions);
