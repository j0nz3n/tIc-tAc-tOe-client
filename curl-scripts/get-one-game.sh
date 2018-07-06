# sh curl-scripts/json/new-game.sh

# Alternatively
# API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
# URL_PATH="/games"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \

# echo


TOKEN="BAhJIiU0ZWFlMDM3ZDc1NjE4MTIwNGM3ZTQzYTM5NmIwN2IxZgY6BkVG--e524b86267992e9b4ddd1e07bea833cb627393a5"



curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
  # --data ''

echo
