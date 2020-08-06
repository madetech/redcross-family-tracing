.PHONY: build
build: install lint
	npm run build

.PHONY: install
install:
	npm install

.PHONY: lint
lint: install
	./node_modules/.bin/eslint --fix --ignore-path .gitignore .

.PHONY: run
run:
	npm run dev
