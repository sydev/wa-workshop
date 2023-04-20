mkdir dist

docker run --rm  -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk emcc src/main.cpp -o dist/index.js
