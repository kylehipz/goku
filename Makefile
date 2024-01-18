dev:
	docker compose -f infra/docker-compose.dev.yml up

clean:
	docker compose -f infra/docker-compose.dev.yml down
