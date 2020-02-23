document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("input").value;

  if (value === "") {
    return;
  }
  const url = "https://dictionaryapi.com/api/v3/references/collegiate/json/" + value + "?key=b0263db5-f9a6-46fe-b3ff-a2b9896b01a5"

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "<div class='def'>";

      if (typeof(json[0]) != "object") {
        results += "<p>Word not found, enter another word</p>";
      } else {

        let temp = json[0].fl;
        temp = temp.charAt(0).toUpperCase() + temp.slice(1, temp.length);
        results += "<h2>" + temp + " Definition</h2>";
        results += "<p>" + json[0].shortdef + "</p>";

        temp = json[1].fl;
        temp = temp.charAt(0).toUpperCase() + temp.slice(1, temp.length);
        results += "<h2>" + temp + " Definition</h2>";
        results += "<p>" + json[1].shortdef + "</p>";
      }
      results += "</div>";
      document.getElementById("results").innerHTML = results;
    });
});