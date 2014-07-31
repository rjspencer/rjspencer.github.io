## SQL Query Basics
SELECT field1, field2,... FROM table JOIN other_table on table.id = other_table.table_id  WHERE field = "" GROUP BY field ORDER BY field ASC|DESC

## Using SQL in Ruby
include '?' <- <em>pg, sqlite3, mysql2, ...</em>

## Active Record in Ruby
Every migration requires a new unique number.

validates :email, :uniqueness => true