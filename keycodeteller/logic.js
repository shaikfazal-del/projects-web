let insert = document.querySelector(".insert")


window.addEventListener("keydown", function (e) {
    insert.innerHTML = `
    <table border="1">
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    `
})