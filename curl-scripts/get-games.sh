# sh curl-scripts/json/new-game.sh

# Alternatively
# API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
# URL_PATH="/games"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \

# echo


TOKEN="BAhJIiU4ZDBjZjBlNjNlOWVjYjQ3NWQ5Y2I0YWZlZmU1NzA4NgY6BkVG--e4dc31317cb1a9dddcf61545359d0b410aa54081"

curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
