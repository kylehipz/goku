dev:
	docker compose -f infra/docker-compose.dev.yml up

down:
	docker compose -f infra/docker-compose.dev.yml down

clean:
	docker compose -f infra/docker-compose.dev.yml down --remove-orphans -v

