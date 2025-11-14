document.getElementById("load-btn").addEventListener("click", function () {
  document.querySelector(".btn-text").textContent = "Loading...";
  document.querySelector(".spinner").style.display = "inline-block";
  document.getElementById("load-btn").disabled = true;

  setTimeout(function(){
    document.querySelector(".btn-text").textContent = "Submitted";
  document.querySelector(".spinner").style.display = "none";
  document.getElementById("load-btn").disabled = true;
  },2000);
});
