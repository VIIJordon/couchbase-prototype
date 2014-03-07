class StatConfiguration < Couchbase::Model
	attribute :name
	attribute :description
	attribute :active

	belongs_to :stat_configuration_type
	
	before_save do |doc|
		doc.active = doc.active.to_bool
	end
end