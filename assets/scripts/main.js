/********************************************************************************

 TABLE OF CONTENTS

 WINDOW
 Open window
 Close window
 FLOATING LABEL
 CHECK VIEWPORT
 SCROLL FUNCTIONS
 ONCLICK
 TESTIMONIAL SLIDER

 ********************************************************************************/

/********************************************************************************

 Preloader

 ********************************************************************************/

/*! pace 1.0.0 */
(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
        Y = {}.hasOwnProperty,
        Z = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) Y.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        },
        $ = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
    for (u = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
            checkInterval: 100,
            selectors: ["body"]
        },
        eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        },
        ajax: {
            trackMethods: ["GET"],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    }, C = function() {
        var a;
        return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
    }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) {
        return setTimeout(a, 50)
    }, t = function(a) {
        return clearTimeout(a)
    }), G = function(a) {
        var b, c;
        return b = C(), (c = function() {
            var d;
            return d = C() - b, d >= 33 ? (b = C(), a(d, function() {
                    return E(c)
                })) : setTimeout(c, 33 - d)
        })()
    }, F = function() {
        var a, b, c;
        return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
    }, v = function() {
        var a, b, c, d, e, f, g;
        for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
            if (c = d[f])
                for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
        return b
    }, q = function(a) {
        var b, c, d, e, f;
        for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
        return c / b
    }, x = function(a, b) {
        var c, d, e;
        if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
            if (c = e.getAttribute("data-pace-" + a), !b) return c;
            try {
                return JSON.parse(c)
            } catch (f) {
                return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
            }
        }
    }, g = function() {
        function a() {}
        return a.prototype.on = function(a, b, c, d) {
            var e;
            return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                handler: b,
                ctx: c,
                once: d
            })
        }, a.prototype.once = function(a, b, c) {
            return this.on(a, b, c, !0)
        }, a.prototype.off = function(a, b) {
            var c, d, e;
            if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b) return delete this.bindings[a];
                for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                return e
            }
        }, a.prototype.trigger = function() {
            var a, b, c, d, e, f, g, h, i;
            if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                return i
            }
        }, a
    }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
    i = function(a) {
        function b() {
            return V = b.__super__.constructor.apply(this, arguments)
        }
        return Z(b, a), b
    }(Error), b = function() {
        function a() {
            this.progress = 0
        }
        return a.prototype.getElement = function() {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(D.target), !a) throw new i;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
            }
            return this.el
        }, a.prototype.finish = function() {
            document.documentElement.classList.remove("preloader");
            var a;
            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";

        }, a.prototype.update = function(a) {
            return this.progress = a, this.render()
        }, a.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (a) {
                i = a
            }
            return this.el = void 0
        }, a.prototype.render = function() {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
        }, a.prototype.done = function() {
            return this.progress >= 100
        }, a
    }(), h = function() {
        function a() {
            this.bindings = {}
        }
        return a.prototype.trigger = function(a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
                return g
            }
        }, a.prototype.on = function(a, b) {
            var c;
            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
        }, a
    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function(a, b) {
        var c, d, e, f;
        f = [];
        for (d in b.prototype) try {
            e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0)
        } catch (g) {
            c = g
        }
        return f
    }, A = [], j.ignore = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
    }, j.track = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
    }, J = function(a) {
        var b;
        if (null == a && (a = "GET"), "track" === A[0]) return "force";
        if (!A.length && D.ajax) {
            if ("socket" === a && D.ajax.trackWebSockets) return !0;
            if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
        }
        return !1
    }, k = function(a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function(a) {
                var b;
                return b = a.open, a.open = function(d, e) {
                    return J(d) && c.trigger("request", {
                        type: d,
                        url: e,
                        request: a
                    }), b.apply(a, arguments)
                }
            }, window.XMLHttpRequest = function(b) {
                var c;
                return c = new P(b), a(c), c
            };
            try {
                w(window.XMLHttpRequest, P)
            } catch (d) {}
            if (null != O) {
                window.XDomainRequest = function() {
                    var b;
                    return b = new O, a(b), b
                };
                try {
                    w(window.XDomainRequest, O)
                } catch (d) {}
            }
            if (null != N && D.ajax.trackWebSockets) {
                window.WebSocket = function(a, b) {
                    var d;
                    return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                        type: "socket",
                        url: a,
                        protocols: b,
                        request: d
                    }), d
                };
                try {
                    w(window.WebSocket, N)
                } catch (d) {}
            }
        }
        return Z(b, a), b
    }(h), R = null, y = function() {
        return null == R && (R = new k), R
    }, I = function(a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
            if (b = e[c], "string" == typeof b) {
                if (-1 !== a.indexOf(b)) return !0
            } else if (b.test(a)) return !0;
        return !1
    }, y().on("request", function(b) {
        var c, d, e, f, g;
        return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
                    var b, c, g, h, i, k;
                    if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                        for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                            if (K = i[c], K instanceof a) {
                                K.watch.apply(K, d);
                                break
                            }
                            k.push(void 0)
                        }
                        return k
                    }
                }, c))
    }), a = function() {
        function a() {
            var a = this;
            this.elements = [], y().on("request", function() {
                return a.watch.apply(a, arguments)
            })
        }
        return a.prototype.watch = function(a) {
            var b, c, d, e;
            return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
        }, a
    }(), o = function() {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (c = null, a.addEventListener("progress", function(a) {
                    return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2
                }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function() {
                    return h.progress = 100
                }, !1);
            else f = a.onreadystatechange, a.onreadystatechange = function() {
                var b;
                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
            }
        }
        return a
    }(), n = function() {
        function a(a) {
            var b, c, d, e, f = this;
            for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function() {
                return f.progress = 100
            }, !1)
        }
        return a
    }(), d = function() {
        function a(a) {
            var b, c, d, f;
            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
        }
        return a
    }(), e = function() {
        function a(a) {
            this.selector = a, this.progress = 0, this.check()
        }
        return a.prototype.check = function() {
            var a = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                    return a.check()
                }, D.elements.checkInterval)
        }, a.prototype.done = function() {
            return this.progress = 100
        }, a
    }(), c = function() {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
            }
        }
        return a.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, a
    }(), f = function() {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() {
                var g;
                return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
            }, 50)
        }
        return a
    }(), m = function() {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
        }
        return a.prototype.tick = function(a, b) {
            var c;
            return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, a
    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function() {
        return D.restartOnPushState ? j.restart() : void 0
    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() {
        return z(), T.apply(window.history, arguments)
    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() {
        return z(), W.apply(window.history, arguments)
    }), l = {
        ajax: a,
        elements: d,
        document: c,
        eventLag: f
    }, (B = function() {
        var a, c, d, e, f, g, h, i;
        for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
        for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
        return j.bar = r = new b, H = [], M = new m
    })(), j.stop = function() {
        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
    }, j.restart = function() {
        return j.trigger("restart"), j.stop(), j.start()
    }, j.go = function() {
        var a;
        return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
                for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
            return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function() {
                    return r.finish(), j.running = !1, j.trigger("hide")
                }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
        })
    }, j.start = function(a) {
        v(D, a), j.running = !0;
        try {
            r.render()
        } catch (b) {
            i = b
        }
        return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
    }, "function" == typeof define && define.amd ? define(function() {
            return j
        }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
}).call(this);
/********************************************************************************
 Global Vars
 ********************************************************************************/

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

/********************************************************************************
 Open window
 ********************************************************************************/
$(document).on('click', '.btn-wdw', function(){
    //set all windows to close
    $('.wdw').removeClass('open');
    //open the target window
    var wdwClassToOpen = this.id; //get the id
    console.log(wdwClassToOpen);
    var wdwSelector = $('.'+wdwClassToOpen);
    //open matching window
    wdwSelector.addClass('open');

    //if there is a halfwidth image, animate it
    $('.'+wdwClassToOpen + ' .image-half-width').addClass('animated slideInLeft');
});

/********************************************************************************
 Close window
 ********************************************************************************/

$(document).on('click', '.btn-close', function(){
    // //get the parent class which is not wdw
    // var wdwClassList = this.parentNode.classList;
    // var wdwClassToClose ="";
    //
    // for(var i = 0; i < wdwClassList.length; i++){
    //     if (wdwClassList[i].match("^wdw-")) { // class begins with wdw-
    //         wdwClassToClose = wdwClassList[i]; //save this class
    //     }
    // }
    //
    // //close wdw with matching class
    // $('.'+wdwClassToClose).removeClass('open');

    // $(this).parent().removeClass('open');
    $(this).parent().fadeOut();
    $('body, html').removeClass('no-scroll');
    // $('html').removeClass('no-scroll');

});

/********************************************************************************

 FLOATING LABEL

 ********************************************************************************/
//add active class to label on focus of input
$(document).on('click', '.floating-label-input', function(){
    $( this ).siblings( "label" ).addClass('active');
});

$(document).on('click', '.floating-label', function(){
    $( this ).addClass('active');
    $( this ).siblings( ".floating-label-input" ).focus();
});



/* FORM LABELS FLOAT WHEN INPUT != EMPTY */
//check once immediately, then setInterval
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

function fnCheckInputEmpty() {
    var sAllLabels = $(".floating-label");
    //loop through every element with class .floating-label
    sAllLabels.each(function() {
        var hasValue = $(this).val().length > 0;//Normal
        if(!hasValue){
            if(is_chrome)
            {
                hasValue = $(":-webkit-autofill", this).length > 0;//Chrome
            }

        }
        if (hasValue) {
            $(this).siblings( "label" ).addClass('active');
        }
    });
}

fnCheckInputEmpty();
setInterval(fnCheckInputEmpty, 1000);

$('.floating-label-input').blur(function()
{
    if( !$(this).val() ) {
        $(this).siblings( "label" ).removeClass('active');
    }else{
        $(this).siblings( "label" ).addClass('active');
    }
});


/********************************************************************************

 CHECK VIEWPORT

 ********************************************************************************/

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

/********************************************************************************

 Skills bar animation

 ********************************************************************************/

function fnAnimateSkills(){
    $( ".skill-bar" ).each(function() {
        var singleElement = $(this);
        if(singleElement.isInViewport()){

            //only if class is not added yet
            if(!singleElement.hasClass('bar-animation')){
                var sMarker = singleElement.siblings('.marker');
                var sMarkerPercentageElement = sMarker.find('.marker-percentage');
                var iPercentage = parseInt(singleElement.data("percentage"));
                var sPercentage = iPercentage + '%';
                //100% duration = 2000ms
                var iDuration = (iPercentage / 100)*2000;

                //animate bar width
                singleElement.animate({
                        width: sPercentage
                },
                    {
                        duration: iDuration
                    });

                sMarker.show();
                sMarker.animate({
                        left: sPercentage
                    },
                    {
                        duration: iDuration,
                        step: function(now, fx){
                            var data = Math.round(now);
                            if(data>0){
                                sMarkerPercentageElement.text(data + '%');
                            }

                        }
                    });

                //add bar animation class to  element, so animation will run once
                singleElement.addClass('bar-animation');
            }

        }
    });
}

/********************************************************************************

 SCROLL FUNCTIONS

 ********************************************************************************/

var windowHeight = $(window).height();   // Get the window height.


var sUpBlueprint = '<div id="up-button"><img src="dist/images/upretina.png"></div>';
var bUpAdded = false;

function fnUpButton(that) {
    if ($(that).scrollTop() > (windowHeight) ) {
        if(!bUpAdded){
            // add blue print, only once
            $('body').append(sUpBlueprint);

            bUpAdded=true;
        }
        // fade in up
        $('#up-button').fadeIn();
    }else{
        // fade out up
        $('#up-button').fadeOut();
    }
}

function fnManipulateScrollSpeed(that) {
    //for the ones that aren't transformed to start with
    var elementToAnimate = $('[data-scroll-speed]'),
        sWindow = $(that);

    var scrollTop = sWindow.scrollTop();

    elementToAnimate.each(function() {
        var singleElement = $(this),
            scrollspeed = parseInt(singleElement.data("scroll-speed")),
            val = -scrollTop / scrollspeed;

        // var sOriginalTransformVal = singleElement.css('transform').split(",");
        // console.log(sOriginalTransformVal);

        singleElement.css("transform", "translateY(" + val + "px)");

    });



    //for elements that have transform
    var topElements = $('[data-scroll]');
    var i = 0;
    topElements.each(function(){

       var topElement = $(this),
           scrollVal = parseInt(topElement.data("scroll")),
           val = (-scrollTop / scrollVal);

        if (!bArrayFilled){
            var sInitialTopValPx = topElement.css('top');
            var sInitialTopVal = sInitialTopValPx.replace('px','');
            var iInitialTopVal = parseInt(sInitialTopVal);
            aInitialTopVal.push(iInitialTopVal);
            bArrayFilled = true;
        }

        var iOldTopVal = aInitialTopVal[i];
        var iNewTopVal = iOldTopVal + val;
        var sNewTopVal = iNewTopVal + 'px';
        topElement.css("top", sNewTopVal);

    });


}

var bArrayFilled = false;
var aInitialTopVal = [];

var bArrowGone = false;

function fnAnimateArrow(that) {
    var sWindow = $(that);

    var iScrollTop = sWindow.scrollTop();
    var sArrow = $('#front-arrow');

    if(iScrollTop > (windowHeight/10) ){

        if(!bArrowGone){
            sArrow.removeClass('animate-bounce');
            setTimeout(function(){
                sArrow.addClass('arrow-animation');
            },100);
            bArrowGone = true;
        }

    }else{

        if(bArrowGone){
            sArrow.removeClass('arrow-animation');
            bArrowGone = false;
        }
    }
}


$(document).on("scroll", function () { // Do this on scroll in .wdw
    fnUpButton(this);
    fnAnimateSkills();
    fnAnimateArrow(this);
    if(!isMobile){
        fnManipulateScrollSpeed(this);
    }
}).on("resize", function(){ // If the user resizes the window
    windowHeight = $(this).height(); // you'll need the new height value
});

// $('.wdw').on("scroll", function () { // Do this on scroll in .wdw
//     fnUpButton(this);
//
//     fnManipulateScrollSpeed();
//     fnAnimateArrow(this);
//     fnAnimateSkills();
// });


/********************************************************************************
 Smooth scrolling
 ********************************************************************************/

$(document).on('click', 'a', function(event){
    console.log("click");
    var attr = $(this).attr('data-smooth-scroll');
    this.blur();

// For some browsers, `attr` is undefined; for others,
// `attr` is false.  Check for both.
    if (typeof attr !== typeof undefined && attr !== false) {
        event.preventDefault();

        $('body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top-100
        }, 500);

    }

});



/********************************************************************************

 ON CLICK

 ********************************************************************************/

function fnCloseMenu(){
    $('nav.main').removeClass('open');
    $('.nav-bg').removeClass('open');
    $('#btn-menu').removeClass('open');
}

function fnOpenMenu(){
    $('nav.main').addClass('open');
    $('#btn-menu').addClass('open');
}

function fnOpenCloseMenu(){
    $('.nav-bg').toggleClass('open');
    $('nav.main').toggleClass('open');
    $('#btn-menu').toggleClass('open');

    if($('nav.main').hasClass('open')){
        $('#up-button').hide();
    }
}

function fnAnimateUpButton(){

    var bottomValue = "110vh";
    $('#up-button').animate({
        bottom: bottomValue
    },500);

    setTimeout(function(){
        $('body').stop().animate({
            scrollTop: 0
        }, 500);
    },300);

    //put it back in position
    setTimeout(function(){
        $('#up-button').css( "bottom","5px");
    },1000);
}


$('#send-btn').click(function() {
    $(this).addClass('clicked');
    $('#send-txt').text('Sent!');

});

$(document).on('click', '.btn-home', function(){
    //close all windows
    $('.wdw').removeClass('open');
    $('.wdw-home').addClass('open');
});

$(document).on('click', '#btn-menu', function(){
   fnOpenCloseMenu();

});

$(document).on('click', '.menu-item', function(){
    fnCloseMenu();
});

/* UP BUTTON */
$(document).on('click', '#up-button', function(){
    fnAnimateUpButton();
});


/********************************************************************************

 WORK ITEMS

 ********************************************************************************/

$(document).on('click', '.work-item', function(){
    var workId = $(this).attr('id');
    var wdwToOpen = 'wdw-' + workId;
    fnOpenWorkItem(wdwToOpen);
});

function fnOpenWorkItem(wdwToOpen){
    console.log(wdwToOpen);
    // $('.wdw').removeClass('open');
    $('body, html').addClass('no-scroll');
    // $('html').addClass('no-scroll');
    // $('#'+wdwToOpen).addClass('open');
    $('#'+wdwToOpen).fadeIn();
}
/********************************************************************************

 TESTIMONIAL SLIDER

 ********************************************************************************/



 $(document).on('mouseover', '.person-img', function(){
     $(this).css('opacity', '1');
    if (!$(this).hasClass('active')){
        $('.testimonial-quote.active').css('opacity', '0.3');
        $('.person-img.active').css('opacity', '0.3');
        $('.testimonial-person.active').css('opacity', '0.3');
    }
 });

$(document).on('mouseout', '.person-img', function(){
    $(this).css('opacity', '0.3');

        $('.testimonial-quote.active').css('opacity', '1');
        $('.testimonial-person.active').css('opacity', '1');
        $('.person-img.active').css('opacity', '1');
});

$(document).on('click', '.person-img', function(){

    var i = $('.person-img').index(this);

    var sQuoteActive =  $('.testimonial-quote.active');
    var sQuote = $('.testimonial-quote')[i];

    var sPersonActive =  $('.testimonial-person.active');
    var sPerson = $('.testimonial-person')[i];

    var sImgActive =  $('.person-img.active');
    var sImg =  $(this);

    if (!$(this).hasClass('active')){

        //change quote
        sQuoteActive.animate({
            opacity: 0
        },5, function(){
            sQuoteActive.removeClass('active');
            sQuote.style.opacity = "1";
            sQuote.className += ' active';

        });

        //change person + title
        sPersonActive.animate({
            opacity: 0
        },5, function(){
            sPersonActive.removeClass('active');
            sPerson.style.opacity = "1";
            sPerson.className += ' active';

        });

        //set image on active

        sImgActive.removeClass('active');
        sImg.addClass('active');
        sImg.css('opacity','1');
    }
});




/********************************************************************************

REMOVE SVG IMAGE WITH INLINE SVG

 ********************************************************************************/

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});



//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               Buddha bless the code
//

