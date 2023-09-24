setup-compose:
	docker build -t setup-compose .
	docker-compose up -d

	# make-setup-compose

start -compose:
	docker-compose up -d

	# make start-compose

setup-dockerfile:
	docker build -t setup-dockerfile .
	docker run --name setup-dockerfile -d -p 3310:3306 setup-dockerfile
	# make setup-dockerfile

start-dockerfile:
	docker start setup-dockerfile
	# make start-dockerfile

stop-dockerfile:
	docker stop setup-dockerfile
	# make stop-dockerfile