cd "$(dirname "$0")"

docker container run -p 27017:27017 -v  /Users/amirnamdar/GitRepos/crafty/config/docker/mongodb:/data/db -d --rm --name crafty_mongo mongo:5-focal

#docker exec -it crafty_mongo bash

#show databases
#use food
#db.fruits.find().pretty()

# as shown in https://www.bmc.com/blogs/mongodb-docker-container/