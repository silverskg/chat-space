json.content @message.content
json.user_name @message.user.name 
json.id  @message.id
json.image @message.image.url
json.date @message.created_at.strftime("%Y年%m月%d日 %H時%M分")


