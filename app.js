document.getElementById("uploadBtn").onclick = function() {
    document.getElementById("uploadInput").click();
};

document.getElementById("uploadInput").onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const area = document.getElementById('preview-area');
    area.innerHTML = "<p>Image loading...</p>";
    const fr = new FileReader();
    fr.onload = () => {
        area.innerHTML = `<img src="${fr.result}" alt="Preview" style="max-width:330px;max-height:330px;border-radius:12px;box-shadow:0 0 12px #aaa;" />`;
    };
    fr.readAsDataURL(file);
};

document.getElementById('lang-switcher').onchange = function(e) {
    const lang = e.target.value;
    alert("Future support for: " + lang);
};