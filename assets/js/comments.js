/*
 * Disqus comments, shared by every writing on the site.
 *
 * Each post embeds an empty <div id="disqus_thread"></div> plus a deferred
 * <script src="/assets/js/comments.js">. This file renders the thread only
 * on pages that have that mount, so listing pages stay untouched.
 *
 * The thread is keyed by the post's path (page.identifier), so a thread
 * survives title or query-string changes. To point comments at a different
 * Disqus site, edit SHORTNAME below; to turn comments off everywhere, blank
 * it (the script then renders nothing).
 */
(function () {
  var SHORTNAME = "arazm"; // Disqus shortname (from disqus.com)

  var mount = document.getElementById("disqus_thread");
  if (!mount || !SHORTNAME || SHORTNAME === "DISQUS_SHORTNAME") return;

  var css = document.createElement("style");
  css.textContent =
    "#disqus_thread{margin-top:8px}" +
    ".comments-h{font-family:'Martian Mono',monospace;font-size:13px;letter-spacing:2px;" +
    "text-transform:uppercase;color:#ff8a3d;font-weight:500;margin:56px 0 18px;" +
    "padding-top:28px;border-top:1px solid rgba(255,255,255,0.09)}";
  document.head.appendChild(css);

  var heading = document.createElement("h4");
  heading.className = "comments-h";
  heading.textContent = "Comments";
  mount.parentNode.insertBefore(heading, mount);

  window.disqus_config = function () {
    this.page.url = location.origin + location.pathname;
    this.page.identifier = location.pathname.replace(/\/+$/, "") || "/";
  };

  var s = document.createElement("script");
  s.src = "https://" + SHORTNAME + ".disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (document.head || document.body).appendChild(s);
})();
