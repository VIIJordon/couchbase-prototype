class Api::StatConfigurationsController < ApplicationController
	def index
		results = StatConfiguration.all.to_a

		render json: results
	end
	def create
		config = StatConfiguration.create(params[:stat_configuration])
		render json: config
	end	
	def show
		config = StatConfiguration.find(params[:id])
		render json: config

	end
	def update
		config = StatConfiguration.find(params[:id])
		config.update(params[:stat_configuration])
		render json: config
	end
end