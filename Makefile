build:
	docker-compose -f ./docker/docker-compose.yml build

up:
	docker-compose -f ./docker/docker-compose.yml up -d --remove-orphans

down:
	docker-compose -f ./docker/docker-compose.yml down -v

docker-start:
	make build
	make down
	make up

