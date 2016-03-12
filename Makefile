
build: components index.js overlay.css
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

doc:
	@webpack example/index.js example/bundle.js --module-bind "css=style!css"
	@ghp-import example -n -p

.PHONY: clean doc
