import sqlite3
DATABASE = "member.db"

try:
    connect = sqlite3.connect(DATABASE)
    query = connect.cursor()
    member_sql = "CREATE TABLE member(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        created INTEGER NOT NULL,\
        updated INTEGER NOT NULL);"
    query.execute(member_sql)
    connect.commit()
except Exception as err:
    print(err)
finally:
    connect.close()