all: build run
run:
	cd _site; \
	python -m SimpleHTTPServer 8001
build:
	/var/lib/gems/1.8/bin/jekyll
