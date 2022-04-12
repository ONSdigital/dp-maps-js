.PHONY: node-modules
node-modules:
	npm install --unsafe-perm

.PHONY: analyze
analyze: node-modules
	npm run build:analyze

.PHONY: audit
audit: node-modules
	npm run audit

.PHONY: lint
lint: node-modules
	npm run lint

.PHONY: build
build: node-modules
	npm run build:prod

.PHONY: debug
debug: node-modules
	npm run build:dev

.PHONY: test
test: node-modules
	npm run test

.PHONY: docs
docs: node-modules
	npm run docs

.PHONY: release
release: node-modules
	npm run release
