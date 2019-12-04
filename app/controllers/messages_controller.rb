class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    # @members = @group.users
    
  end

  def create
    # binding.pry
     @message = @group.messages.new(message_params)
       if @message.save
      # redirect_to group_messages_path(@group), notice: 'カードが送信されました'
    
     respond_to do |format|
      format.html { redirect_to group_messages_path(@group), notice: 'カードを送信しました' }
      format.json 
     end
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = '効果を入力してください'
      render :index
    end
  end




  private

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
    @members = @group.users
      # params.require(:post).permit(:title, :content).merge(user_id: current_user.id)
  end  
end