class Api::StatConfigurationTypesController < ApplicationController
	def index
		filter = params.extract!(:start_key, :end_key).reject{|_, v| v.blank?}
		results = StatConfigurationType.all(filter).to_a

		render json: results
	end

	def create
		type = StatConfigurationType.create(params[:stat_configuration_type])
		render json: type
	end
end