document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function (tabs) {
        // and use that tab to fill in out title and url
        var tab = tabs[0];
        fetch('https://rdr.fyi/s.php?a=&u=' + encodeURIComponent(tab.url))
            .then((response) => response.text())
            .then((text) => {
                document.getElementById('shortlink').value = text;
            });
    });
    setTimeout(function() {
        document.getElementById('shortlink').select();
    }, 100);
}, false);
document.getElementById('shortlink').onclick = function() {
    document.getElementById('shortlink').select();
    document.execCommand('copy');
    document.getElementById('shortlink').style.border = '2px solid #008BFF';
}