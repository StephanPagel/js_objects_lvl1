// Lvl 1_2

// const person = {
//     name: 'Mickey Mouse',
//     alter: 66,
//     sagNameAlter: () => {
//         alert(person.name, person.alter);
//     }
// }

// console.log(person.name, person.alter);
// person.sagNameAlter();

// Lvl 1_4

// let unsereHaustiere = [
//     {
//         tiertyp: "Katze",

//         names: [
//             "Gipsy",
//             "Nala",
//             "Dinky"
//         ]
//     },
//     {
//         tiertyp: "Hunde",
//         names: [
//             "Knöpfchen",
//             "Pinselchen",
//             "Droopy"
//         ]
//     }
// ];

// console.log(unsereHaustiere[0].names[1]);
// console.log(unsereHaustiere[1].names[2]);
// console.log(unsereHaustiere[1].names);
// const valuesArr = Object.values(unsereHaustiere[1].names);
// console.log(valuesArr);

// unsereHaustiere[1].names2 = ["Balu", "Snoopy"];
// console.log(unsereHaustiere[1]);

// Lvl 1_5

// let unserLager = {
//     schreibtisch: {
//         schublade: "Hefter"
//     },
//     schrank: {
//         "Obere Schublade": {
//             Ordner1: "Dokumente",
//             Ordner2: "Geheimnisse"
//         },
//         "Untere Schublade": "Cola"
//     }
// };

// console.log(unserLager.schrank["Obere Schublade"].Ordner2);
// console.log(unserLager.schrank["Untere Schublade"]);
// console.log(unserLager.schreibtisch.schublade);

// Lvl 1_6

// let myMusic = [
//     {
//         artist: "The Beatles",
//         title: "Abbey Road",
//         release_year: 1969,
//         medium: ["LP", "CD", "MC", "Download"],
//         gold: true
//     },
//     {
//         artist: "Pink Floyd",
//         title: "Dark Side of the Moon",
//         release_year: 1978,
//         medium: ["CS", "CD", "LP", "Download"],
//         gold: true
//     },
//     {
//         artist: "Led Zeppelin",
//         title: "Led Zeppelin IV",
//         release_year: 1971,
//         medium: ["CS", "LP", "Download"],
//         gold: true
//     },
//     {
//         artist: "Metallica",
//         title: "Kill ’Em All und Ride the Lightning",
//         release_year: 1983,
//         medium: ["LP", "CD", "MC", "Download"],
//         gold: true
//     }
// ];

// myMusic[4] = {
//     artist: 'Deftones',
//     title: 'White Pony',
//     release_year: 2000,
//     medium: ["CD", "LP", "Download"],
//     gold: true
// }

// console.log(myMusic[0].artist);
// console.log(myMusic[1].medium[3]);
// console.log(myMusic[1].gold);
// console.log(myMusic[2].release_year, myMusic[3].release_year);
// console.log(myMusic[3].medium[2]);
// console.log(myMusic[3].title.slice(17, 21));
// console.log(myMusic[2].title.slice(13, 15));
// console.log(myMusic[1].artist.slice(5, 11));

// Lvl 1_7

// myMusic.forEach(elt => {
//     console.log(elt.artist);
//     console.log(elt.title);
//     console.log(elt.medium);
// });

// myMusic.forEach(elt => {
//     if (elt.release_year < 1975) {
//         console.log(elt.release_year);
//     }
// })

// Lvl 1_8

// let studentData = [
//     {
//         name: "Alex",
//         age: 23,
//         coop: false,
//         address: {
//             street: "Don Valley Business Park",
//             city: "Toronto",
//             postalCode: "ONM3C3E5"
//         },
//         emails: ["alex69@gmail.com", "alex123@yahoo.com"]
//     },
//     {
//         name: "Sandra",
//         age: 22,
//         coop: true,
//         address: {
//             street: "34 Lawrence Ave",
//             city: "Toronto",
//             postalCode: "ONM3C0E5"
//         },
//         emails: ["sandra@gmail.com", "sandra@yahoo.com"]
//     }
// ];

// studentData.forEach(elt => {
//     console.log(elt.name);
//     console.log(elt.coop);
//     console.log(elt.emails);
// })

// cityArr = studentData.map(elt => {
//     return (elt.address.city);
// })

// console.log(cityArr);
