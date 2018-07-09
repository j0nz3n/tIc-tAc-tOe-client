# sh curl-scripts/json/new-game.sh



TOKEN="BAhJIiUxMjc3NDc0MWUyYjczYmFkODkzMzkxZDE1ZDFiYWY3MAY6BkVG--79548c1e9064f93ea719d317004b569c063ccdf0"
ID=9215

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
    "cell": {
      "index": 2,
      "value": "x"
    },
    "over": true
    }
  }'


  
# Alternatively
# API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
# URL_PATH="/games"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \

# echo