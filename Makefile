
build:
	@webpack example/index.js example/bundle.js --module-bind "css=style!css" -d -w

doc:
	@webpack example/index.js example/bundle.js --module-bind "css=style!css"
	@ghp-import example -n -p

.PHONY: clean doc build
