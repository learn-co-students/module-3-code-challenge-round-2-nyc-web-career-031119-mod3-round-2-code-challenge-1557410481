document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2589 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageTag = document.getElementById('image')

  const imageDiv = document.getElementById('image_card')

  const imageTitle = document.getElementById('name')

  const likes = document.getElementById('likes')

  const comments = document.getElementById('comments')

  const likeBtn = document.getElementById('like_button')

  const commentForm = document.getElementById('comment_form')

  const formBtn = document.getElementById('form_submit')

//on load i should see an image, any comments and number of likes on the image
//fetch the image


fetch(`${imageURL}`)
.then(res => res.json())
.then(image => {
  imageTag.src = `${image.url}`
  imageTitle.textContent = `${image.name}`
  likes.textContent = `${image.like_count}`
  image.comments.forEach(content => {
    comments.textContent += `${content.content}`
  })
})


//as a user i can click a button to like an image and the number will increase
  imageDiv.addEventListener('click', e => {
    if (e.target === likeBtn) {
    let foo = parseInt(likes.innerText)
    foo += 1
    fetch(`${imageURL}`)
    .then(res => res.json())
    .then(image => {
      likes.textContent = `${foo}`
    })
    postLikes()
    }
  })
//as a user i can enter text in an input field and submit the form to add a comment to the image

  commentForm.addEventListener('click', e => {
    if (e.target === form_submit) {
      fetch(`${imageURL}`)
      .then(res => res.json())
      .then(image => {
        imageTag.src = `${image.url}`
        imageTitle.textContent = `${image.name}`
        likes.textContent = `${image.like_count}`
          comments.textContent += document.getElementById('comment_input').value
      })

    }
  })



  function postLikes() {

  fetch(`${likeURL}`, {
    method: 'POST',
    headers: {  'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
    body: JSON.stringify(
      {
        image_id: imageId
      }
    )
  })
}
})
//
