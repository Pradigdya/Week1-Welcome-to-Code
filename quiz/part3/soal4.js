// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("Looping Counter + 2");

for (let i = 1; i < 101; i += 2) {
  if (i % 3 === 0) {
    console.log(i, "adalah kelipatan 3");
  } else {
    console.log(i);
  }
}

console.log("\nLooping Counter + 5");
for (let i = 0; i < 101; i += 5) {
  if (i % 6 === 0) {
    console.log(i, "adalah kelipatan 5");
  } else {
    console.log(i);
  }
}

console.log("\nLooping Counter + 9");
for (let i = 0; i < 101; i += 9) {
  if (i % 10 === 0) {
    console.log(i, "adalah kelipatan 9");
  } else {
    console.log(i);
  }
}
