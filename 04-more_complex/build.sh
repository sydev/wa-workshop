rm -rf dist && mkdir dist && cp src/index.html dist/index.html

docker run --rm  -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk emcc -o dist/complex.js -s EXPORTED_RUNTIME_METHODS=cwrap -O3 -s WASM=1 -I libwebp src/complex.c libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c libwebp/sharpyuv/*.c -sASSERTIONS -s ALLOW_MEMORY_GROWTH=1
npm run build
