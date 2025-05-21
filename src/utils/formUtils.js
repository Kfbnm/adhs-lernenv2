function addHiddenField(formID, name, value) {
  const input = document.createElement("input");
  input.setAttribute("type", "hidden");
  input.setAttribute("name", name);
  input.setAttribute("value", value);
  document.getElementById(formID).appendChild(input);
}

function GetCookie(cookie_name) {
  if (document.cookie.length > 0) {
    const cookie_start = document.cookie.indexOf(cookie_name + "=");
    if (cookie_start !== -1) { 
      const start = cookie_start + cookie_name.length + 1; 
      const cookie_end = document.cookie.indexOf(";", start);
      return unescape(document.cookie.substring(
        start, 
        cookie_end === -1 ? document.cookie.length : cookie_end
      ));
    } 
  }
  return "";
}

function str_replace(search, replace, subject) {
  return subject.split(search).join(replace);
}

function SetCookieValues() {
  // Cookie-Werte setzen
}

function SetCookies() {
  // Cookies setzen
}

function chkFormular() {
  return true;
}

export {
  addHiddenField,
  GetCookie,
  str_replace,
  SetCookieValues,
  SetCookies,
  chkFormular
};