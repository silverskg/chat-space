## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :comments
- has_many :group
- has_many  :uses,  through:  :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groups_name|string|null: false|

### Association
- has_many :groups_users
- has_many  :groups,  through:  :groups_users




## messageテーブル
|Column|Type|Options|
|------|----|-------|
|image|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group