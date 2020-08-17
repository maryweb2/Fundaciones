
var eventos1 = document.getElementById('event')
db.collection("eventos").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().nombre}`);
      eventos1.innerHTML += `<tr>
      <th scope="row">${doc.data().numero}</th>
      <td>${doc.data().nombre}</td>
      <td>${doc.data().hora}</td>
      <td>${doc.data().fecha}</td>
     
      <td>${doc.data().descripcion}</td>`
  });
});