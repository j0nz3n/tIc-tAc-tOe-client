TOKEN="BAhJIiUxMjc3NDc0MWUyYjczYmFkODkzMzkxZDE1ZDFiYWY3MAY6BkVG--79548c1e9064f93ea719d317004b569c063ccdf0"

curl --include --request DELETE "https://tic-tac-toe-wdi.herokuapp.com/sign-out" \
  --header "Authorization: Token token=${TOKEN}"