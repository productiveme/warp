import os

DATABASE = "sqlite:///../../data/db.sqlite"
DATABASE_ARGS = {"pragmas": {"foreign_keys": "ON"}}
#DATABASE = "postgresql://warp@localhost:5432/warp"

DATABASE_INIT_SCRIPT = "sql/schema_sqlite.sql"
#DATABASE_INIT_SCRIPT = "sql/schema_postgres.sql"
DATABASE_SAMPLEDATA_SCRIPT = "sql/sample_data.sql"

SECRET_KEY = os.environ.get('SECRET_KEY', '')

# use mellon (Apache SAML module) for authentication
#AUTH_MELLON = False
#MELLON_ENDPOINT = "/sp"

# after how many days force user to re-login (note that it is not a session timeout)
SESSION_LIFETIME = 1

# for how many weeks in advance users can book a seat
# (after the current week)
WEEKS_IN_ADVANCE = 1
