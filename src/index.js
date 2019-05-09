document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2587 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageCard = document.getElementById("image_card")
  const imageHolder = document.getElementById("image")
  const imageName = document.getElementById("name")
  let imageLikes = document.getElementById("likes")
  const imageComments = document.getElementById("comments")
  // const likeButton = imageCard.getElementById('like_button')

  fetch(`${imageURL}`)
  .then(resp => resp.json())
  .then(function(image){
    // debugger
    renderImage(image)
  })






//EventListeners
imageCard.addEventListener('click', function(e){

  // let like_count = 0
  const likeButton = e.target.id
  if(likeButton === "like_button"){
    // console.log(parseInt(imageLikes.innerText))
    numLikes = parseInt(imageLikes.innerText)
    ++numLikes
   imageLikes.innerText = numLikes

   // console.log(imageId)

   fetch(`${likeURL}`,{
     method: "POST",
     headers:{
       "Content-Type": "application/json",
       "Accept": "application/json"
     },
     body: JSON.stringify({
        image_id: imageId
     })
   })
  }

})








//helper function===============
// function persistLikes(num){
//
//   num
//
//
//
// }


  //helper function to render image
  function renderImage(image){
    imageHolder.src = `${image.url}`
    imageName.innerText = `${image.name}`
    imageLikes.innerText = `${image.like_count}`
    findAllComments(image.comments)
  }

function findAllComments(comments){
  comments.forEach(function(comment){
    imageComments.innerHTML += `<li>${comment.content}</li>`
  })
}








})
