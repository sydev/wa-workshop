#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int addNums(int a, int b) {
  return a + b;
}

EMSCRIPTEN_KEEPALIVE
int subNums(int a, int b) {
  return a - b;
}
