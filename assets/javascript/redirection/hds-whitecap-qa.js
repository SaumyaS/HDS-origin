var Redirector = {
    regExUA: /ip(hone|od)|android.*(mobile)|blackberry.*applewebkit/i,
    location: window.location,
    mapProxyToOrigin: {
        "http://mqa.qa-whitecap.ecom.hdsupply.com": "http://qa-whitecap.ecom.hdsupply.com",
        "https://mqa.qa-whitecap.ecom.hdsupply.com": "https://qa-whitecap.ecom.hdsupply.com",
        "http://mqa.stg-whitecap.ecom.hdsupply.com": "http://stg-whitecap.ecom.hdsupply.com",
        "https://mqa.stg-whitecap.ecom.hdsupply.com": "https://stg-whitecap.ecom.hdsupply.com",
        "http://mqa.whitecap.com": "http://www.whitecap.com",
        "https://mqa.whitecap.com": "https://www.whitecap.com",
        "http://mqa.blog.whitecap.com": "http://blog.whitecap.com",
        "https://mqa.blog.whitecap.com": "https://blog.whitecap.com"
    },
    mapOriginToProxy: {
        "http://qa-whitecap.ecom.hdsupply.com": "http://mqa.qa-whitecap.ecom.hdsupply.com",
        "https://qa-whitecap.ecom.hdsupply.com": "https://mqa.qa-whitecap.ecom.hdsupply.com",
        "http://stg-whitecap.ecom.hdsupply.com": "http://mqa.stg-whitecap.ecom.hdsupply.com",
        "https://stg-whitecap.ecom.hdsupply.com": "https://mqa.stg-whitecap.ecom.hdsupply.com",
        "http://www.whitecap.com": "http://mqa.whitecap.com",
        "https://www.whitecap.com": "https://mqa.whitecap.com",
        "http://whitecap.com": "http://mqa.whitecap.com",
        "https://whitecap.com": "https://mqa.whitecap.com",
        "http://blog.whitecap.com": "http://mqa.blog.whitecap.com",
        "https://blog.whitecap.com": "https://mqa.blog.whitecap.com"
    },
    isMobileBrowser: function(t) {
        return t = t || navigator.userAgent, null !== t.match(this.regExUA)
    },
    currentHost: function() {
        var t = window.location;
        return t.protocol + "//" + t.host
    },
    constructNewLocation: function(t) {
        var e = window.location;
        return t + e.pathname + this.queryParameters() + e.hash
    },
    redirectTo: function(t) {
        window.location.replace(t)
    },
    onMobile: function() {
        var t = this.currentHost();
        return this.mapProxyToOrigin.hasOwnProperty(t)
    },
    redirectToMobile: function() {
        var t = this.currentHost(),
            e = this.mapOriginToProxy[t];
        if (void 0 != e) {
            var o = this.constructNewLocation(e);
            this.redirectTo(o)
        }
    },
    queryParameters: function() {
        return window.location.search
    },
    documentReferrer: function() {
        return document.referrer
    },
    redirectToOrigin: function() {
        var t = this.currentHost(),
            e = this.mapProxyToOrigin[t];
        if (void 0 != e) {
            var o = this.constructNewLocation(e);
            this.redirectTo(o)
        }
    },
    readCookie: function(t) {
        for (var e = t + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
            for (var c = o[i];
                " " == c.charAt(0);) c = c.substring(1, c.length);
            if (0 == c.indexOf(e)) return c.substring(e.length, c.length)
        }
        return null
    },
    mobileCookie: function() {
        return this.readCookie("mw_mobile_site")
    },
    execute: function() {
        forceMobile = "true" === this.mobileCookie(), forceOrigin = "false" === this.mobileCookie(), this.onMobile() ? this.onMobile() && window.navigator && (this.isMobileBrowser() || forceMobile || this.redirectToOrigin()) : window.navigator && this.isMobileBrowser() && !forceOrigin && this.redirectToMobile()
    }
};
Redirector.execute();