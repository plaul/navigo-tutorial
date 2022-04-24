import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import {
  renderText,
  setActiveLink,
  adjustForMissingHash, loadTemplateFromDom,
} from "./utils.js"

window.addEventListener("load", async () => {

  const router = new Navigo("/", { hash: true });
  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url)
        done()
      }
    })
    .on({
      "/": () => renderText("Home", "content"),
      "/about": () => renderText(`
      <p>See <a href="https://getbootstrap.com/docs/5.0/components/navbar/" target="_blank">here</a> for details about the responsive Bootstrap navbar used in this example</p>
      `, "content"),
      "/products": (match) => {
        renderText("<h1>TODO</h1>", "content")
      },
      "/joke": () => renderText("Joke", "content"),
      "/product/:id": (match) => {
        renderText(`Product ID: ${match.data.id}`, "content")
      },
      "/show-match": (match) => renderText(`<pre>${JSON.stringify(match, null, 2)}</pre>`, "content")
    })
    .notFound(() => renderText("No page for this route found", "content"))
    .resolve()
});


window.onerror = (e) => alert(e)