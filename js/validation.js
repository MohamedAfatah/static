function validateUrl() {
    var urlInput = document.getElementById('url');
    var url = urlInput.value;
    var urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

    if (!url.match(urlPattern)) {
        urlInput.setCustomValidity('Please enter a valid URL');
    } else {
        urlInput.setCustomValidity('');
    }
}

