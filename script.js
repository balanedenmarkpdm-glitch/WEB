const $ = (id) => document.getElementById(id);

const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");
const setUsers = (users) => localStorage.setItem("users", JSON.stringify(users));
const getSession = () => JSON.parse(localStorage.getItem("session") || "null");

async function hash(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function showMsg(text, ok = false) {
  $("msg").textContent = text;
  $("msg").className = ok ? "ok" : "err";
}

function showTab(tab) {
  const isLogin = tab === "login";
  $("loginForm").classList.toggle("hidden", !isLogin);
  $("regForm").classList.toggle("hidden", isLogin);
  $("tabLogin").classList.toggle("active", isLogin);
  $("tabReg").classList.toggle("active", !isLogin);
  showMsg("");
}

async function register(e) {
  e.preventDefault();

  const name = $("rName").value.trim();
  const email = $("rEmail").value.trim().toLowerCase();
  const pass = $("rPass").value;

  if (pass !== $("rPass2").value) return showMsg("Passwords do not match.");

  const users = getUsers();
  if (users.some((u) => u.email === email)) return showMsg("Email already registered.");

  users.push({ name, email, password: await hash(pass) });
  setUsers(users);

  $("regForm").reset();
  showTab("login");
  showMsg("Registered! You can sign in now.", true);
}

async function login(e) {
  e.preventDefault();

  const email = $("lEmail").value.trim().toLowerCase();
  const passHash = await hash($("lPass").value);

  const user = getUsers().find((u) => u.email === email && u.password === passHash);
  if (!user) return showMsg("Invalid email or password.");

  localStorage.setItem("session", JSON.stringify({ name: user.name, email: user.email }));
  render();
}

function logout() {
  localStorage.removeItem("session");
  render();
}

function render() {
  const session = getSession();
  $("auth").classList.toggle("hidden", !!session);
  $("dash").classList.toggle("hidden", !session);

  if (session) {
    $("welcome").textContent = "Welcome, " + session.name + "!";
  } else {
    $("loginForm").reset();
    showMsg("");
  }
}

$("tabLogin").addEventListener("click", () => showTab("login"));
$("tabReg").addEventListener("click", () => showTab("register"));
$("loginForm").addEventListener("submit", login);
$("regForm").addEventListener("submit", register);
$("logoutBtn").addEventListener("click", logout);

render();