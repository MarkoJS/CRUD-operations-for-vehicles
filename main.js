const api_url = 'http://192.168.9.105/LprWebApiCore/api/Vehicle/get';
async function getData(){
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data.value);

  var table= document.getElementById('teloTabele');

  for (var i = 0; i<data.value.length; i++){
    var row = `<tr>
                  <td>${data.value[i].id}</td>
                  <td>${data.value[i].registrationPlates}</td>
                  <td>${data.value[i].colourOfCar}</td>
                  <td>${data.value[i].modelOfCar}</td>
                  <td>${data.value[i].timeCreated}</td>
                  <td><a data-toggle="modal" href="#myModal" id="modalbtn" onclick="openModal(`+i+`)">Edit</a></td> 
               </tr>`
      table.innerHTML +=row ;
      }
}

getData();

// Filter za pretragu prvi
// $("#searchPolje").on('keyup', function(){
//   var vrednost = $(this).val();
//   console.log('Value:', vrednost);
  // var data = searchFilter(vrednost, data);
  // getData(data);

// })

// function searchFilter(value, data){
//   var filtrirandata = [];
  
//   for (var i=0; i<data.value.length; i++){
//     value = value.toLowerCase()
//     var filtriranoIme = data[i].registrationPlates.toLowerCase()

//     if (filtriranoIme.includes(value)){
//       filtrirandata.push(data[i])
//     }
//   }
//   return filtrirandata
// };

//drugi primer search/a
$("#searchPolje").on('keyup', function(){
    searchTable($(this).val());
});

function searchTable(value){
  $('#vozila_table tr').each(function(){
    var found = 'false';
    $(this).each(function(){
      if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)
      {
        found = 'true';
      }
    });
    if (found == 'true'){
      $(this).show();
    } else {
      $(this).hide();
    }

  });
}


// modal
function openModal (id){
  $('#myModal').modal("show");   
}

