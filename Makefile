build: clean
	env NODE_ENV=production ./node_modules/.bin/webpack

clean:
	rm -rf build

setup:
	rm -rf .git/
	git init
	git add -A
	git commit -m "Initial commit"
	npm install

dev:
	./node_modules/.bin/webpack-dev-server
