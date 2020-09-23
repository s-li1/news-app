let number = 0

let i = 0

let newsArray = [];

var topicArray = [];

let numberr = 0

const apiKEY = 'a66afa0ac1cc42d484989eca31f4dbff';

const apiURL = `https://newsapi.org/v2/top-headlines?country=us&${apiKEY}`;

async function grabNews() {
  try {
    const response = await fetch(apiURL);
    
    newsArray = await response.json();
    
    console.log(newsArray);      
  } catch (error) {
    //catch error
  }
}

grabNews();
function progress(){
  let articletitle = "json.whatever"
  let articletext = "also that ^"
  for (var i = 1; i <= 18; i++){
  document.getElementById(i).style.display = "none"
  }
  numberr++
  if (numberr < 5 ){
  document.getElementById("dontshowtext").innerHTML = articletext
  document.getElementById("title").innerHTML = articletitle
  } else {
  document.getElementById("dontshowtext").innerHTML = "STOP READING NOW"
  document.getElementById("title").innerHTML = "RELAX"
  }
}


function addToList(id){
//two dimensional array, first entry is id, holds name of topic in second
  let topicName = document.getElementById(id).innerHTML
  if (typeof(topicArray[id]) == "string"){
    topicArray[id] = false
    for (var i = 0; i <= topicArray.length; i++){
      if (topicArray[i] == topicName){
      topicArray.splice(i)   
      }
    document.getElementById(id).style.color = "white"
    }
  } else {
    topicArray[id] = topicName
    document.getElementById(id).style.color = "blue"
    topicArray.push(topicName)
  }
  console.log(`${id} ${topicArray}`)
}

/*
  for (var i = 0; i <= topicArray.length; i++){
    if (topicArray[i] = topicName){
      topicBool = true
      break
  } else {
    continue
  }
  */