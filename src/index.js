document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2588 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const image = document.getElementById("image")
  const title = document.getElementById("name")
  const likes = document.getElementById("likes")
  const comments = document.getElementById("comments")
  const form = document.getElementById("comment_form")
  const button = document.getElementById("submit")
//
// console.log(form)
//page load //
//1. see image
//2. any comments that image has
//3. number of likes image has
function renderPage(){
fetch(`https://randopic.herokuapp.com/images/${imageId}`)
.then(res => res.json())
.then(likes.innerHTML = "")
.then(res => {
  // console.log(res)
  image.src = res.url
  title.innerHTML = res.name
  likes.innerHTML = res.like_count
  res.comments.forEach(comment => {
    comments.innerHTML += `<li><ul>${comment.content}</ul></li>`
  })
})
}
renderPage()

//click button//
//1.number of likes for image increase by 1

document.addEventListener("click", function(e){
  e.preventDefault()

  if (e.target.id === "like_button"){
    fetch(likeURL, {
      method: "POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({image_id: `${imageId}`})
    }).then(res => res.json())
      .then(renderPage)

  }
})

//form//
form.addEventListener("click", function(e){
  e.preventDefault()
  const comment = document.getElementById("comment_input")
  if (e.target.id = submit){
    debugger
  // console.log("Getit ")
  // form.addEventListener("submit", function(e){
  fetch(commentsURL, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({image_id: imageId, content: comment})
}).then(res => res.json())
console.log(comments)
}
})
//1. enter text in input field
//2. submit form
//3. render input below previous comments
//4. page does not refresh

//refresh//
//1. should not change anything rendered to page
})
