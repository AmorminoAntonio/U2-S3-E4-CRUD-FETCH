const url = "https://api.pexels.com/v1/search?query=labrador";
const apiKey = "1GxaNR444AeSSnsbnvvqEu2NOEPkNX6v6vfvKioZnhMR9zUGVxWQc44s";

fetch(url, {
  method: "GET",
  headers: {
    Authorization: apiKey,
  },
})
  .then((res) => {
    console.log(response);

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("callError");
    }
  })
  .then((img) => {
    console.log("images", img);
    const loadBtn=document.querySelector(".loadBtn");
    loadBtn.addEventListener("click", function(e){
    e.preventDefault()
    })

    


    
  })
  .catch((error) => {
    console.log("error", error);




  });


















// Authorization: "Bearer [YOUR API KEY]",  // dentro le quadre ci vuole il nsotro API url