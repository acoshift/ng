build: clean
	env NODE_ENV=production ./node_modules/.bin/webpack

clean:
	rm -rf build

dep:
	npm install

dev: clean
	./node_modules/.bin/webpack-dev-server --hot --inline --history-api-fallback
