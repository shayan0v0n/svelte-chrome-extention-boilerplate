import App from "src/pages/app.svelte";

const target = document.getElementById("app") as HTMLDivElement;

function render() {
  new App({ target });
}
window.resizeBy(200, 500);

document.addEventListener("DOMContentLoaded", render);
