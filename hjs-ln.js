(function (w, d) {
    if (w.hljs) {
        w.hljs.initLineNumbersOnLoad = initLineNumbersOnLoad;
        w.hljs.addLineNumbersForCode = addLineNumbersForCode;
    } else {
        w.console.error('highlight.js not detected!');
    }

    function initLineNumbersOnLoad() {
        if (d.readyState === 'interactive' || d.readyState === 'complete') {
            documentReady();
        } else {
            w.addEventListener('DOMContentLoaded', function () {
                documentReady();
            });
        }
    }

    function addLineNumbersForCode(html) {
        var num = 1;
        html = '<span class="ln-num" data-num="' + num + '"></span>' + html;
        html = html.replace(/\r\n|\r|\n/g, function (a) {
            num++;
            return a + '<span class="ln-num" data-num="' + num + '"></span>';
        });
        html = '<span class="ln-bg"></span>' + html;
        return html;
    }

    function documentReady() {
        var elements = d.querySelectorAll('.hljs');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].className.indexOf('hljs-ln') == -1) {
                var html = elements[i].innerHTML;
                html = addLineNumbersForCode(html);
                elements[i].innerHTML = html;
                elements[i].classList.add('hljs-ln');
            }
        }
    }
}(window, document));
