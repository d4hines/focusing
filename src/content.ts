const whitelist = [
  // Learning
  "andymatuschak.org",
  "gwern.net",
  "astralcodexten.com",
  "scottaaronson.blog",
  "lesswrong.com",
  "wikipedia.org",
  "ankiweb.net",
  "michaelnotebook.com/",
  "supermemo.guru",
  "super-memory.com",
  "bewelltuned.com",
  "techinterviewhandbook.org",
  "leetcode.com",

  // Reference
  "crates.io",
  "nixos.org",
  "github.com",
  "gitlab.com",
  "sourcegraph.com",
  "npmjs.com",
  "plasmo.com",
  "man7.org/",
  "visualstudio.com",
  "doc.rust-lang.org/",
  "stackoverflow.com",
  "stackexchange.com/",
  "react.dev",

  // Coms
  "slack.com",
  "google.com",
  "gmail.com",
  "live.com",
  "microsoft.com",
  "office.com",
  "jira.com",
  "notion.com",
  "atlassian",

  // Infra
  "namecheap.com",
  "cloudlfare.com",
  "amazon",
  "aws",

  // Tools
  "openai.com",
  "chatgpt.com",
  "excalidraw.com",
  "roamresearch.com",

  // Punishment
  "https://blocked.freedom.to/",
];

let navigateAway = true;
for (const allowed of whitelist) {
  if (window.location.href.includes(allowed)) {
    navigateAway = false;
    break;
  }
}

if (navigateAway) {
  alert("Reflect on the pain of clicking this alert button.");
  window.location.href = "https://blocked.freedom.to/";
}
