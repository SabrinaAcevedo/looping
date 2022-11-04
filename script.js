for(let i = 1000; i >= 0; i -= 2) {
    console.log(i);
  }
for(i = 0; i <= 10000; i++){
    if(i === 2500) alert("A quarter of the way there!");
    else if(i === 5000) alert("Halway there!");
    else if(i === 10000) alert("The loop is done!");
}

const shows = ["Arrow", "Manifest", "The 100", "Love is Blind", "Sweet Magnolias"];

for(let i = 0; i <= 4; i++) {
  console.log("My # " + [i + 1] + " favorite show is " + shows[i])
}
