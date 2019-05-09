document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 1 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/2585`
  //${imageId}

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`


})

const picHolder = document.getElementById("image")
const nameHolder = document.getElementById("name")
const likesHolder = document.getElementById("likes")
const commentsHolder = document.getElementById("comments")
const likeBtn = document.getElementById("like_button")


//obtain data needed to manipulate the DOM
fetch('https://randopic.herokuapp.com/images/2585')
  .then(function(response) {
    return response.json();
  })
  .then(function(picInfo) {
  //console.log(info) all info is present
  picHolder.src = `${picInfo.url}`
  nameHolder.innerText = `${picInfo.name}`
  likesHolder.innerText = `${picInfo.like_count}`
  commentsHolder.innerText = `${picInfo.comments[0].content}`
  })

  //like buttong increments only on the frontend
  document.addEventListener("click", function(e){
    if( e.target.id === "like_button") {
      likes.innerText++;
    }

  //working on the backend to persist the like button
fetch('https://randopic.herokuapp.com/likes', {
  method: "POST",
  headers: { "Content-Type": "application/json",
              "Accept": "application/json"
           },
  body: JSON.stringify({
    //working on finding the value of image_id
    image_id: picInfo.image_id
  })
})
})
