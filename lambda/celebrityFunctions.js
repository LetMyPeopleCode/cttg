// This is a set of helper functions that provide
// the necessary retrieving of celebrity data

const celebs = import('./documents/birthdays.json');

const exports = (module.exports = {});

exports.getRandomCeleb = function (celeb_list = []) {
  //handle running out of questions by returning a fake celebrity
  if (celebs.length === celeb_list.length) return { name: 'Alan Smithee' };

  // filter picked celebs out of the list
  var celeb_map = celebs.filter(function(val){
    if(celeb_list.indexOf(val.name) < 0) return true;
    return false;
  });

  // shuffle the deck of remaining celebrities
  celeb_map = shuffle_celebs(celebs.map);

  // return the top card in the deck
  return celeb_map[0];
};

exports.getCelebByName = function(name){
  for(var i = 0; i <= celebs.length; i++){
    if(celebs[i].name === name) return celebs[i];
  }
}

shuffle_celebs(my_arr){
  // from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  var currentIndex = my_arr.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = my_arr[currentIndex];
    my_arr[currentIndex] = my_arr[randomIndex];
    my_arr[randomIndex] = temporaryValue;
  }

  return my_arr;
}