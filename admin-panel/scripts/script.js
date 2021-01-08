
  var firestore = firebase.firestore();
  const docRef = firestore.collection("orders");

 

$('.orders').on('click', function () { 


    firestore
    .collection("orders")
    .where("status", "==", 0)
    .onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("All data in 'orders' collection", data);
      var state =  "";
      for(var i=0; i<data.length;i++){

        state = state + "<tr><td scope='row'>"+data[i]['id']+"</td><td>"+ data[i]['merchant'] +"</td><td>"+ data[i]['customer'] + "</td><td>"+ data[i]['scheduled-time'].toDate() +"</td><td>"+ data[i]['payment-method'] +"</td><td>"+ data[i]['address'] +"</td><td>"+ data[i]['amount'] +"</td><td>"+ data[i]['delivery-mode'] +"</td><td class = 'clickable'>"+ data[i]['status'] +"</td></tr>";
    }
    $('.orders-content').html(state);
    $('.clickable').on('click', function () { 
        console.log(data[i]['merchant']);
     })
});


    firestore
    .collection("orders")
    .where("status", "==", 1)
    .onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("All data in 'orders' collection", data);
      var state1 =  "";
      for(var i=0; i<data.length;i++){

        state1 = state1 + "<tr><td scope='row'>"+data[i]['id']+"</td><td>"+ data[i]['merchant'] +"</td><td>"+ data[i]['customer'] + "</td><td>"+ data[i]['scheduled-time'].toDate() +"</td><td>"+ data[i]['payment-method'] +"</td><td>"+ data[i]['address'] +"</td><td>"+ data[i]['amount'] +"</td><td>"+ data[i]['delivery-mode'] +"</td><td>"+ data[i]['status'] +"</td></tr>";
    }
    $('.orders-content2').html(state1);
    });


    firestore
    .collection("orders")
    .where("status", "==", 2)
    .onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("All data in 'orders' collection", data);
      var state2 =  "";
      for(var i=0; i<data.length;i++){

        state2 = state2 + "<tr><td scope='row'>"+data[i]['id']+"</td><td>"+ data[i]['merchant'] +"</td><td>"+ data[i]['customer'] + "</td><td>"+ data[i]['scheduled-time'].toDate() +"</td><td>"+ data[i]['payment-method'] +"</td><td>"+ data[i]['address'] +"</td><td>"+ data[i]['amount'] +"</td><td>"+ data[i]['delivery-mode'] +"</td><td>"+ data[i]['status'] +"</td></tr>";
    }
    $('.orders-content3').html(state2);
    });

    firestore
    .collection("orders")
    .where("status", "==", 3)
    .onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("All data in 'orders' collection", data);
      var state3 =  "";
      for(var i=0; i<data.length;i++){

        state3 = state3 + "<tr><td scope='row'>"+data[i]['id']+"</td><td>"+ data[i]['merchant'] +"</td><td>"+ data[i]['customer'] + "</td><td>"+ data[i]['scheduled-time'].toDate() +"</td><td>"+ data[i]['payment-method'] +"</td><td>"+ data[i]['address'] +"</td><td>"+ data[i]['amount'] +"</td><td>"+ data[i]['delivery-mode'] +"</td><td>"+ data[i]['status'] +"</td></tr>";
    }
    $('.orders-content4').html(state3);
});

$('#main-content').load('orders.html');
});


 $('.home').on('click', function () { 
    $('#main-content').load('home.html');
 });



 function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
