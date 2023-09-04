export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-1fcdcab9","v-768efd00","v-2d0a8eae","v-4d2a090a","v-98f611de","v-782a4b38","v-b0877d50","v-3e4a50f9","v-466f2678","v-4e683551","v-445c2c6f","v-9db53098","v-340fdd96","v-4591f22e","v-706d7867","v-00e276a8","v-09a7986e","v-e8953d40","v-0fb1418e","v-767bdf0f","v-3528ce46","v-6525cd15","v-02a951f2","v-17110fd2","v-0d3b0ef3","v-32ecd860","v-d63f6f14","v-0d3b56c2"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

