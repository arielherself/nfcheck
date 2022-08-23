function wget() {
    var result = "";
    var status = 0;
    var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', "https://www.netflix.com/tw-en/title/81616946", true);
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState == 4 && (httpRequest.status == 200 || httpRequest.status ==301)) {
                    var json = httpRequest.responseText;
                    result += ("Unblocked(TW): Yes\n");
                    status ++;
                } else if (httpRequest.readyState == 4 && httpRequest.status == 403) {
                    result += ("Unblocked(TW): No\n");
                    status ++;
                } else if (httpRequest.readyState == 4 && httpRequest.status == 404) {
                    result += ("Unblocked(TW): Originals-only\n");
                    status ++;
                }
        };
    var httpRequest1 = new XMLHttpRequest();
        httpRequest1.open('GET', "https://www.netflix.com/sg-zh/title/70143836", true);
        httpRequest1.send();
        httpRequest1.onreadystatechange = function () {
                if (httpRequest1.readyState == 4 && (httpRequest1.status == 200 || httpRequest1.status == 301)) {
                    var json = httpRequest1.responseText;
                    result += ("Unblocked(SG): Yes");
                    status ++;
                    alert(result);
                } else if (httpRequest1.readyState == 4 && httpRequest1.status == 403) {
                    result += ("Unblocked(SG): No");
                    status ++;
                    alert(result);
                } else if (httpRequest1.readyState == 4 && httpRequest1.status == 404) {
                    result += ("Unblocked(SG): Originals-only");
                    status ++;
                    alert(result);
                }
        };
}
