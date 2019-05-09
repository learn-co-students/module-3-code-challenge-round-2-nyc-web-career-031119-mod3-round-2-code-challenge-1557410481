document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2586 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const imageContainer = document.getElementById("image_content")
  fetch(imageURL)
  .then(res => res.json())
  .then(image =>{

    renderImage(image)
  })

 function renderImage(image){
   imageContainer.innerHTML = ``
   imageContainer.innerHTML += `
   <div id="image_card" class="card col-md-4">
       <img src=${image.url} id="image" data-id=""/>
       <h4 id="name">${image.name}</h4>
       <span>Likes:
         <span id="likes">${image.like_count}</span>
       </span>
       <button id="like_button">Like</button>
       <form id="comment_form">
         <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
         <input type="submit" value="Submit"/>
       </form>
       <ul id="comments">
          <li>${image.comments}</li>
       </ul>
      </div>
   `
 }
 imageContainer.addEventListener('click', (e)=>{
  if(e.target.id == "like_button"){
    let count = e.target.previousElementSibling.firstElementChild.innerText
    let likeCount = ++count
    likeCount = count.innertext
    console.log(likeCount)
    fetch(likeURL, {
      method: "POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: imageId
      })
    })
  
  }
 })

})
