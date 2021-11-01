import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import {
  renderText,
  adjustForMissingHash, loadTemplateFromDom,
} from "./utils.js"

window.addEventListener("load", async () => {

  const router = new Navigo("/", { hash: true });
  adjustForMissingHash()
  router
    .on({
      "/": () => renderText("Home", "content"),
      "/about": () => renderText("About", "content"),
      "/products": (match) => {
        renderText("<h1>TODO</h1>", "content")
      },
      "/joke": () => renderText("Joke","content"),
      "/product/:id": (match) => {
        renderText(`Product ID: ${match.data.id}`, "content")
      },
      "/showMatch": (match) => renderText(`<pre>${JSON.stringify(match, null, 2)}</pre>`, "content")
    })
    .notFound(() => renderText("No page for this route found", "content"))
    .resolve()
});


window.onerror = (e) => alert(e)