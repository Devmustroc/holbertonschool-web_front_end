function setCookies() {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;
  document.cookie = 'firstname=' + firstname + '; path=/';
  document.cookie = 'email=' + email + '; path=/';
}
function showCookies() {
    const p = document.createComment("p");
    p.innerHTML = 'Cookies: ' + document.cookie;
    document.body.appendChild(p);
}