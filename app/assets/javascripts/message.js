$(function(){
  function createImage(message){
    if(message.image.url == null){
      return ``
    } else {
      return `<img class="lower-message__image" src='${message.image.url}'></img>`
    }
  }
  function buildHTML(message){
     image = (message.image) ? `<img class="lower-message__image" src=${message.image} >` : "";
      var html = 
          `<div class="message" data-message-id="${message.id}">
              <div class="upper-message">
                ${message.user_name}
              </div>
              <div class="upper-message__date">
                ${message.date} 
              </div>
            <div class="lower-message">
             <p class="lower-message__content">
                 ${message.content}
             </p>
            </div>
            ${image}  
          </div>`
          return html;   
         }
    
  $("#new_message").on('submit',function(){
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message)
      $('div').animate({scrollTop: $('.messages').height()})
      $('.messages').append(html)
      $('form')[0].reset();
    })
    .fail(function(){
      alert('ブラックホール')
    })
    return false;
  })

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      last_message_id = $('.message:last').data("message-id");
      console.log(last_message_id)
      $.ajax({
        url: "api/messages",
        type: 'GET',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        console.log(messages)
        var insertHTML = '';
        messages.forEach(function (message) {
        insertHTML = buildHTML(message);
        $('.messages').append(insertHTML); 
        $('div').animate({scrollTop: $('.messages').height()})
        })
      })
      .fail(function() {
        alert('更新に失敗しました');
      });
    }
    };
  setInterval(reloadMessages, 10000);
});
    
