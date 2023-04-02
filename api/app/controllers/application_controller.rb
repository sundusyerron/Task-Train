class ApplicationController < ActionController::API

    def app_responce(message: 'sucess', status: 200, data: nill)
        render json: {
            message: message,
            data: data
        }, status: status

    end
end
