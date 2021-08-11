cd "$(dirname "$0")"

docker run -p 8080:3000 --rm --name crafty_backend -d crafty/server

# docker container logs -f crafty_backend