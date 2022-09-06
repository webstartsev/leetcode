const getCanonicalPath = (path) => {
  const arrPath = path.split("/").filter((item) => item);
  const result = [];
  for (let i = 0; i < arrPath.length; i++) {
    if (arrPath[i] === ".." && arrPath[i - 1]) {
      result.pop();
    } else if (arrPath[i] !== ".." && arrPath[i] !== ".") {
      result.push(arrPath[i]);
    }
  }

  return "/" + result.join("/");
};

console.log(getCanonicalPath("../"));
console.log(getCanonicalPath("/"));
console.log(getCanonicalPath("/home/"));
console.log(getCanonicalPath("/../"));
console.log(getCanonicalPath("/home//foo/"));
console.log(getCanonicalPath("/home/../foo/"));
console.log(getCanonicalPath("/home/../foo/bar/../baz/"));
console.log(getCanonicalPath("/home/./foo/"));
console.log(getCanonicalPath("/home/...../...../foo/"));
