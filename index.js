document.addEventListener("DOMContentLoaded", () => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Kenyan")
      .then((res) => res.json())
      .then((data) => {
        displayMeals(data.meals);
      })
      .catch((error) => console.error("Error fetching meals:", error));
  });
  
  function displayMeals(meals) {
    const container = document.getElementById("meal-container");
  
    meals.forEach((meal) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <button class="like-btn">❤️ Like</button>
        <div class="comments">
          <input type="text" placeholder="Add comment" class="comment-input"/>
          <button class="comment-btn">Post</button>
          <ul class="comment-list"></ul>
        </div>
      `;
  
      container.appendChild(card);
  
      const likeBtn = card.querySelector(".like-btn");
      const commentBtn = card.querySelector(".comment-btn");
      const commentInput = card.querySelector(".comment-input");
      const commentList = card.querySelector(".comment-list");
  
      likeBtn.addEventListener("click", () => {
        likeBtn.textContent = likeBtn.textContent === "❤️ Like" ? "✅ Liked" : "❤️ Like";
      });
  
      commentBtn.addEventListener("click", () => {
        const comment = commentInput.value.trim();
        if (comment) {
          const li = document.createElement("li");
          li.textContent = comment;
          commentList.appendChild(li);
          commentInput.value = "";
        }
      });
    });
  }
  