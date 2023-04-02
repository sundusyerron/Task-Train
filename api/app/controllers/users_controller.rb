class UsersController < ApplicationController

    def register 
        user = User.create(user_params)

        if user.valid?
            app_responce( message: 'Regestration was successful',
            status: :created, data: user)
        else
            app_responce( message: 'Something went wrong during regestration',
                status: :unprocessable_entity, data: user.errors)
            end
    end

    private

    def user_params
        params.permit(:username, :email, :password)
    end

end
