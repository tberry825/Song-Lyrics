// .then()
// $("form").on("submit", function(e) {
//   e.preventDefault();

//   var artistName = $("#artistName").val();
//   var songName = $("#songName").val();
//   console.log(artistName);
//   console.log(songName);

//   fetch(`https://api.lyrics.ovh/v1/${artistName}/${songName}`)
//     .then((response) => response.json())
//     .then((data) => {
//       $(".songInput").text("Loading . . .");
//       console.log(data);
//       $(".songInput").text(data.lyrics);
//     });
// });

// Refactor async/await
async function getLyrics(e) {
  e.preventDefault();
  var songName = $("#songName").val();
  var artistName = $("#artistName").val();
  console.log(artistName);
  console.log(songName);
  let response = await fetch(
    `https://api.lyrics.ovh/v1/${artistName}/${songName}`
  );
  let data = await response.json();
  console.log(data);
  $(".songInput").text(data.lyrics);
}

$("form").on("submit", function (e) {
  $(".songInput").text("loading...");
  getLyrics(e);
});
