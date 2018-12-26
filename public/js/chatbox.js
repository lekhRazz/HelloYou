

var socket = io.connect('http://192.168.10.36:3000');

//Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

$(".messages").animate({ scrollTop: $(document).height() }, "fast");

    $("#profile-img").click(function () {
      $("#status-options").toggleClass("active");
    });

    $(".expand-button").click(function () {
      $("#profile").toggleClass("expanded");
      $("#contacts").toggleClass("expanded");
    });

    $("#status-options ul li").click(function () {
      $("#profile-img").removeClass();
      $("#status-online").removeClass("active");
      $("#status-away").removeClass("active");
      $("#status-busy").removeClass("active");
      $("#status-offline").removeClass("active");
      $(this).addClass("active");

      if ($("#status-online").hasClass("active")) {
        $("#profile-img").addClass("online");
      } else if ($("#status-away").hasClass("active")) {
        $("#profile-img").addClass("away");
      } else if ($("#status-busy").hasClass("active")) {
        $("#profile-img").addClass("busy");
      } else if ($("#status-offline").hasClass("active")) {
        $("#profile-img").addClass("offline");
      } else {
        $("#profile-img").removeClass();
      };

      $("#status-options").removeClass("active");
    });

    function newMessage() {
      message = $(".message-input input").val();
      if ($.trim(message) == '') {
        return false;
      }
      socket.emit('chat', {
        message: message,
        handle: handle.value
    });
      $('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
      $('.message-input input').val(null);
      $('.contact.active .preview').html('<span>You: </span>' + message);
      $(".messages").animate({ scrollTop: $(document).height() }, "fast");
    };

    $('.submit').click(function () {
      newMessage();
    });

    $(window).on('keydown', function (e) {
      if (e.which == 13) {
        newMessage();
        return false;
      }
    });


//Emit typing event
// message.addEventListener('keypress', function () {
//   socket.emit('typing', handle.value);
// });


$(".message-input input").on('keypress', function () {
  socket.emit('typing', handle.value);
});

//Listen for events
socket.on('chat', function (data) {
  document.getElementById('feedback').innerHTML='     ';
  $('<li class="replies"><img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" /><p>' + data.message + '</p></li>').appendTo($('.messages ul'));
  $('.contact.active .preview').html('<span>You: </span>' + data.message);
  $(".messages").animate({ scrollTop: $(document).height() }, "fast");
});

//Listen typing event
socket.on('typing', function (data) {
  document.getElementById('feedback').innerHTML='<p>typing message...........</p>';
});