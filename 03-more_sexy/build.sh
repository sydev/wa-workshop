rm -rf dist && mkdir dist && cp src/index.html dist/index.html

docker run --rm  -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk emcc src/sexy.c -o dist/sexy.js -s EXPORTED_RUNTIME_METHODS=ccall,cwrap
npm run build
