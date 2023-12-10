# docker run -p 3000:3000 react(front image 이름)으로 실행해야 열림

DOCKER_COMPOSE_FILE = ./docker-compose.yml
DOCKER_COMPOSE = docker compose --file $(DOCKER_COMPOSE_FILE)

all: up

up:
	$(DOCKER_COMPOSE) up -d
# --build	# 컨테이너 시작 시에 Dockerfile을 빌드하고 싶을 때는 --build 옵션을 지정한다.

down:
	$(DOCKER_COMPOSE) down --volumes	# Compose 정의 파일의 데이터 볼륨을 삭제

clean:
	$(DOCKER_COMPOSE) down --rmi all --volumes	# 모든 이미지를 삭제

fclean: clean
	docker system prune -af	# 사용하지 않는 컨테이너 리소스를 모두 삭제

re:
	make fclean
	make all

.PHONY: all up down clean fclean re