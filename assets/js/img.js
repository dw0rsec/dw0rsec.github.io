const links = {
  git: "https://git-scm.com/",
  docker: "https://www.docker.com/",
  python: "https://www.python.org/",
  vim: "https://www.vim.org/",
  fedora: "https://fedoraproject.org/",
  bash: "https://tiswww.case.edu/php/chet/bash/bashtop.html"
};

for (const [id, url] of Object.entries(links)) {
  document.getElementById(id).onclick = function() {
    window.open(url, "_blank");
  }
}