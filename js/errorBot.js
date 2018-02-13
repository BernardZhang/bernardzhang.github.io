var rwatgs;
rwatgs || (rwatgs = {}),
rwatgs.error || (rwatgs.error = {}),
rwatgs.error.bot = {
    SERVICE_URL: "https://services.rwatgg.dk/handlers/clienterror.ashx",
    ERROR_EXCEPTIONS: ["Error: Error calling method on NPObject!", "Script error.", "Script error", "ReferenceError: Can't find variable: $B", "TypeError: undefined is not a function (evaluating 'this.wrapper.hammer({drag_lock_to_axis:!0})')", "Uncaught ReferenceError: google is not defined", "Uncaught TypeError: undefined is not a function"],
    PARTIAL_ERROR_EXCEPTIONS: ["<?xml version="],
    EMOJIS: {
        error: ":cop:"
    },
    _reporting: !1,
    _errorDTO: null ,
    report: function(r) {
        var e, o, t, n, i;
        if (r && (r.error || (r.error = {}),
        -1 === window.location.href.indexOf("211.52.108.74"))) {
            if (r.error.sourceUrl || (r.error.sourceUrl = window.location.href),
            r.error.type || (r.error.type = "manual"),
            "manual" === r.error.type)
                try {
                    r.error.callee = arguments.callee.caller.toString()
                } catch (a) {
                    e = a,
                    r.error.callee = "Not defined"
                }
            if (r.error.sourceUrl || (r.error.sourceUrl = "Internal error, no Source URL defined."),
            o = this._errorDTO ? this._errorDTO.error.message === r.error.message : !1,
            !this._reporting && !o) {
                this._reporting = !0,
                this._errorDTO = r,
                this._errorDTO.error || (this._errorDTO.error = {}),
                this._errorDTO.error.website = window.location.href,
                n = void 0 === window.scrollY ? document.documentElement && document.documentElement.scrollTop || document.body.scrollTop : window.scrollY,
                this._errorDTO.user = {
                    devicePixelRatio: window.devicePixelRatio ? window.devicePixelRatio : void 0,
                    browerHeight: window.innerHeight,
                    browerWidth: window.innerWidth,
                    userAgent: window.navigator.userAgent,
                    platform: window.navigator.platform,
                    language: window.navigator.language,
                    scrollY: n,
                    vendor: window.navigator.vendor
                },
                window.self !== window.top && (this._errorDTO.iframe = {
                    origin: window.top.location.origin,
                    pathname: window.top.location.pathname,
                    href: window.top.location.href
                }),
                this._errorDTO.timestamp = (new Date).getTime(),
                this._errorDTO["----------------------------"] = "";
                try {
                    t = "text=" + encodeURIComponent(JSON.stringify(this._errorDTO)) + "&emoji=" + this.EMOJIS.error,
                    i = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
                    i.open("POST", this.SERVICE_URL, !0),
                    window.XMLHttpRequest && i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    i.onreadystatechange = function(r) {
                        return function() {
                            return r._reporting = !1
                        }
                    }
                    (this),
                    i.send(t)
                } catch (a) {}
                return {
                    "catch": function() {}
                }
            }
        }
    }
},
window.onerror = function(r, e, o, t, n) {
    var i, a, s, l, d, c, w, g;
    if (t = t || window.event && window.event.errorCharacter,
    l = !1,
    e && (window.location.origin.split(".").length >= 4 ? l = !0 : -1 !== e.indexOf("file://") ? l = !0 : -1 !== e.indexOf("localhost") && (l = !0)),
    l)
        return alert("( ͡° ͜ʖ ͡°)"),
        void 0;
    if (void 0 !== r && null  !== r && "" !== r && -1 === rwatgs.error.bot.ERROR_EXCEPTIONS.indexOf(r)) {
        for (w = rwatgs.error.bot.PARTIAL_ERROR_EXCEPTIONS,
        s = 0,
        d = w.length; d > s; s++)
            if (c = w[s],
            -1 !== r.indexOf(c))
                return;
        if (i = {},
        i.error = {
            message: r,
            type: "window"
        },
        void 0 !== n && (i.error.stackMessage = n.stack.toString()),
        !i.error.stackMessage) {
            for (g = [],
            a = arguments.callee.caller; a; )
                g.push(a.name),
                a = a.caller;
            g.length > 0 && (i.error.stackMessage = g.toString())
        }
        return void 0 !== e && null  !== e && "" !== e && "undefined" !== e && (i.error.sourceUrl = e + ":" + o + ":" + t),
        rwatgs.error.bot.report(i)
    }
}
;
