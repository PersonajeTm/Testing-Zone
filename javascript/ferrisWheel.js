// Textbox Variables
let greeting = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
let description = "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
const box = "#narration"
var textTime;
let nextClicks = 0;
// Story Variables
const story1 = "";
const story2 = "";
const story3 = "";
// When the document is ready
$("document").ready(function() {
hideHolder();
// Textbox Functions
  function clear() {
    $(box).text("");
  }
  function type(text, target) {
    clear();
    // seperate into an array
    let length = text.length;
    let array = [];
    let i = 0;
    let x = 0;
    while (i < (length)) {
      array.push(text.charAt(i))
      i++;
    }
    //append
    array.forEach((item, x) => {
      setTimeout(function() {
        $(target).append(item);
      }, (x * 10));
    });
    // FUNCTION END
  }
  function hideHolder(){
    $("#holder").hide();
  }

  $("#next").click(function() {
    nextClicks++;
    if (nextClicks === 1) {
      clear();
      type(greeting, box);
    }
    if (nextClicks === 2) {
      clear();
      type(description, box);
    }
    if (nextClicks === 3){
      clear();
      hideHolder();
    }
  });

});
