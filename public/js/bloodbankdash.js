// let list = [{
//     Name: "Hegde ",
//     Email: "Hegde",
//     Group: "O+",
//     PhNo: "7349376269"
// },
// {
//     Name: "Hency ",
//     Email: "Hegde",
//     Group: "O+",
//     PhNo: "7349376269"
// },
// {
//     Name: "Pushpa ",
//     Email: "Hegde",
//     Group: "O+",
//     PhNo: "7349376269"
// },
// {
//     Name: "Pushpa ",
//     Email: "Sumanth",
//     Group: "O+",
//     PhNo: "7349376269"
// }
// ];
// console.log(list.length);

//   function addItems(no, name, link){
//     list.push({
//       moduleNo: no,
//       moduleName: name,
//       moduleLink: link
//       });
//   }

//   async function FetchAllData( _callback){

//     const dbRef = ref(getDatabase());
//     // for(var i=0;i<2;i++){
//     await get(child(dbRef, "OOC/Notes")).then((snapshot) => {
//       if (snapshot.exists()) {
//         list = (snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
//   // }
//   console.log(list);
//   _callback();
//   }

  // function insertLists(){
  //   if(list.length>0)
  //   {
  //       console.log("Entered")
  //       for(var i=0 ; i<list.length ; i++){
  //           console.log(i+1)
  //       //   var no = document.createTextNode("Module "+list[i].No);
  //         var name = document.createTextNode(list[i].Name);
  //         var email = document.createTextNode(list[i].Email);
  //         var group = document.createTextNode(list[i].Group);
  //         var no = document.createTextNode(list[i].PhNo);
  //         var content = document.createElement("div");
  //         content.classList.add("content");

          
  //         var tag1 = document.createElement("h4");
  //         var tag2 = document.createElement("h4"); 
  //         var tag3 = document.createElement("h4"); 
  //         var tag4 = document.createElement("h4"); 

  //         tag1.classList.add("name");
  //         tag2.classList.add("email");
  //         tag3.classList.add("grp");
  //         tag4.classList.add("no");

  //       //   var url = document.createElement("a");
  //       //   url.href = list[i].Link;

          
  //         tag1.appendChild(name);
  //         tag2.appendChild(email);
  //         tag3.appendChild(group);
  //         tag4.appendChild(no);
  //         content.append(tag1, tag2, tag3,tag4);

  //         var element = document.getElementById("list");
  //       //   element.style.backgroundColor = "red";
  //         element.appendChild(content);
  //       }
  //       // document.getElementById("notesloading").style.display = "none";
  //       // document.getElementById("noteslistHeader").style.display = "block";
  //     }
  //     else{
  //       // document.getElementById("notesloading").style.display = "none";
  //       // document.getElementById("notescomingsoon").style.display = "block";
  //     }
  // }


//   FetchAllData( function () {
//       console.log(list);
//       insertLists();
//     });

// insertLists();