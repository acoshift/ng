build: clean
	env NODE_ENV=production ./node_modules/.bin/webpack

clean:
	rm -rf build

dep:
	npm install

dev:
	./node_modules/.bin/webpack-dev-server
