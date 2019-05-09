document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2590 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageCard = document.getElementsByClassName("container")[0]
  const likeButton = document.getElementById('like_button')
  const likeId = document.getElementById('likes')

    function render() {
        fetch(imageURL)
            .then(response => response.json())
            .then(json => {
            	// console.log(json)
            	
            	imageCard.innerHTML = 
            							` 
				<div class="row" id="image_content">
			      <div class="card col-md-4"></div>
			      <div id="image_card" class="card col-md-4">
			          <img src="${json.url}" id="image" data-id=""/>
			          <h4 id="name">${json.name}</h4>
			          <span>Likes:
			            <span id="likes">${json.like_count}</span>
			          </span>
			          <button id="like_button">Like</button>
			          <form id="comment_form">
			            <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
			            <input type="submit" value="Submit"/>
			          </form>
			          <ul id="comments">
			             <li></li>  
			          </ul>
			        </div>
			      <div class="card col-md-4"></div>
			    </div>

     			 `
     			

            })
    }

   
 

  imageCard.addEventListener('click',() => {
  		debugger
  		
  		const likes = document.getElementById('likes')
      likes.innerText = parseFloat(likes.innerHTML)+1
     
      })













render()














})
