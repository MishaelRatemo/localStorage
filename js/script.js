$(document).ready(function () {
    $("#form-data").submit(function (e) { 
        e.preventDefault();
         
        var username = $("#name").val();
        // var feeling = $('#mood').val();
        // var user ={
        //     'username': username,
        //     'mood': feeling
        // }
        // check if user fills the fields and then store
        username.trim() ?  ( alert(`Thank you ${username}`), localStorage.setItem('user', username ), welcome() ) :   ( alert("Please fill all fields")  );
        
       //reset from after submit
       $(this)[0].reset();
       // reload page after submit
    //    setTimeout(function(){
    //        window.location.reload();
    //    },0)
    });

    var welcome = ()=>{
        $('#form-data').hide();
        $('#welcome-user').html(`<h1>Hi <strong>${localStorage.user}</strong>, Welcome back!!</h1>`);
        $('#welcome-user').show();
        $('#not-user').show();
        $('#not-user').html(`Not <strong> ${localStorage.user}</strong> ?? <a href=""> Change</a>`) ;  
    }

    if (localStorage.user){
        welcome()    
    }
    // click on not < user> to change username
    $('#not-user').click(function () { 
        localStorage.removeItem('user');
        $('#form-data').show();
        $('#welcome-user').hide();        
    });
});