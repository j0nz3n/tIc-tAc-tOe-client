# sh curl-scripts/json/sign-up.sh
# EMAIL="jonathan_dejesus@me.com" PASSWORD="123456" PASSWORD_CONFIRMATION="123456"

curl "http://tic-tac-toe.wdibos.com" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email":"'"${EMAIL}"'",
      "password":"'"${PASSWORD}"'",
      "password_confirmation":"'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo
