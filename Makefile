BINPATH ?= lib

BUILD_TIME=$(shell date +%s)
GIT_COMMIT=$(shell git rev-parse HEAD)
VERSION ?= $(shell git tag --points-at HEAD | grep ^v | head -n 1)

.PHONY: analyze
analyze:
	npm run build:analyze

.PHONY: lint
lint:
	npm run lint

.PHONY: build
build:
	npm run build:prod

.PHONY: debug
debug:
	npm run build:dev

.PHONY: test
test:
	npm run test

.PHONY: docs
docs:
	npm run docs

.PHONY: release
release:
	npm run release
