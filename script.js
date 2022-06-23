const fillers = {
    people: ["friend", "son","partner", "citizens", "brother", "sister","homie","$people and $people"],
    place: ["Pandora","the golden age", " the Universe", "Lucias", "Demon grave"],
    treasure:["money", "gold", "diamond", "ruby", "pearl", "Elder Ring"],
    weapon: ["Epic weapon", "Legendary weapon", "Legendary skin", "Ak-47"],
    first:["Uwu", "Www", "Ahha","Boba", "Gugu", "Prprpr", "Jzuci"],
    last:["Oooooo", "Guugi", "Peter", "Ben", "Dragon", "Asdfghjkl"],
    adj:["gorgeous", "beautiful", "handsome", "brilliant", "fantastic", "dangrous", "stupid", "XXXX"],
    verb:["eat", "drink", "sleep", "dig", "play", "have sex", "skip a day", "$verb and $verb"],
    place2:["Jail", "Elementary school", "UCSC", "Landfill", "crematorium","cemetery"],
  };
  
  const template = `Welcome, my best $people!
  
  Welcome to the world of $place. You can find whatever you wants here, $treasure, $weapon or everthing that you want.

  However, you have to follow some rules.

  Base on our $adj president $first $last, every people who live in here, can not $verb.

  If anyone who break the rules, they will be send it to the $place2, and learn the rule there.

  I wish there are no one will break the rule, and wish you all have a $adj day. 
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
