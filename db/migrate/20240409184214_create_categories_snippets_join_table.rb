class CreateCategoriesSnippetsJoinTable < ActiveRecord::Migration[7.0]
  def change
    create_join_table :categories, :snippets
  end
end
