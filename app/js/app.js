var d = document;

d.getElementById("uploadBtn").onchange = function () {
    d.getElementById("uploadFile").value = this.value;
};

function clearUpload () {
    d.getElementById("uploadFile").value = "";
};