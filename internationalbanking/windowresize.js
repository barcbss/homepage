function getWindowHeight() {
    var windowHeight = 0;
    if (typeof (window.innerHeight) == 'number') {
        windowHeight = window.innerHeight;
    }
    else {
        if (document.documentElement && document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        }
        else {
            if (document.body && document.body.clientHeight) {
                windowHeight = document.body.clientHeight;
            }
        }
    }
    return windowHeight;
}
function setFooter() {
    if (document.getElementById) {
        var windowHeight = getWindowHeight();
        if (windowHeight > 0) {
            if (document.getElementById('pageWrap')) {
                var contentHeight = document.getElementById('pageWrap').offsetHeight;
            }
            else if (document.getElementById('pageRoot')) {
                var contentHeight = document.getElementById('pageRoot').offsetHeight;
            }
                if (document.getElementById('m09b')){

                    var footerElement = document.getElementById('m09b');
                    var footerHeight = footerElement.offsetHeight;
                    if (windowHeight - (contentHeight + footerHeight) >= 0) {
                    footerElement.style.position = 'relative';
                    footerElement.style.top = (windowHeight - (contentHeight + footerHeight)) + 'px';                                            
                    }
                    else {
                    footerElement.style.position = 'static';
             
                }
            }
        }
    }    
}
window.onload = function() {
    setFooter();
}
window.onresize = function() {
    setFooter();
}