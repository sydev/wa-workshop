rm -rf dist && mkdir dist #&& cp src/index.html dist/index.html

docker run --rm  -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk emcc src/main.c -o dist/index.html --shell-file src/index.html -s NO_EXIT_RUNTIME=1 -s EXPORTED_RUNTIME_METHODS=[ccall]
