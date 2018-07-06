# ID=2 sh curl-scripts/json/change-password.sh

TOKEN="BAhJIiUzZmEwMTc0OWY4NzNmMzQ0MjU0NDViMmU1MWM4YjRhNwY6BkVG--cc7cb240de430a5b9ef7451d52666d23d0c7ddd7"
OLD_PASSWORD="123456"
NEW_PASSWORD="12"


curl --include --request PATCH https://tic-tac-toe-wdi.herokuapp.com/change-password/ \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'
