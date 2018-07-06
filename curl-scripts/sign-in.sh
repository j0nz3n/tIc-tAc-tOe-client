# sh curl-scripts/sign-in.sh

EMAIL="jon@email.com" 
PASSWORD="12"

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email":"'"${EMAIL}"'",
      "password":"'"${PASSWORD}"'"
    }
  }'

echo
