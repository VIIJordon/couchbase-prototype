class StatConfiguration < Couchbase::Model
	attribute :name
	attribute :key_name
	attribute :description
	attribute :active
	attribute :stats
		
  view :all
	
	before_save do |doc|
		doc.stats=[] unless doc.stats
	end
end