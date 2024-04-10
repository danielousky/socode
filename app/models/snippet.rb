# == Schema Information
#
# Table name: snippets
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Snippet < ApplicationRecord
    validates :title, presence: true
    validates :content, presence: true
    has_rich_text :content
    has_and_belongs_to_many :categories
    accepts_nested_attributes_for :categories, reject_if: ->(attributes){ attributes['name'].blank? }, allow_destroy: true
end
