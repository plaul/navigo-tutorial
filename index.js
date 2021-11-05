import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import {
  renderText, adjustForMissingHash, loadTemplate, renderTemplate,
} from "./utils.js"

window.addEventListener("load", async () => {
  const templateHome = await loadTemplate("./pages/home/home.html")
  const router = new Navigo("/", { hash: true });
  adjustForMissingHash()
  router
    .on({
      "/": () => renderTemplate(templateHome, "content"),
    })
    .notFound(() => renderText("No page for this route found", "content"))
    .resolve()
});


window.onerror = (e) => alert(e)