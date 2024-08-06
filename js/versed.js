/*! vex.combined.js: vex 4.0.1, vex-dialog 1.0.7 */ ! function(a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.vex = a()
    }
}(function() {
    var a;
    return function b(a, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!a[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {
                    exports: {}
                };
                a[g][0].call(k.exports, function(b) {
                    var c = a[g][1][b];
                    return e(c ? c : b)
                }, k, k.exports, b, a, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? ! function() {
                "use strict";
                var a = document.createElement("_");
                if (a.classList.add("c1", "c2"), !a.classList.contains("c2")) {
                    var b = function(a) {
                        var b = DOMTokenList.prototype[a];
                        DOMTokenList.prototype[a] = function(a) {
                            var c, d = arguments.length;
                            for (c = 0; c < d; c++) a = arguments[c], b.call(this, a)
                        }
                    };
                    b("add"), b("remove")
                }
                if (a.classList.toggle("c3", !1), a.classList.contains("c3")) {
                    var c = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function(a, b) {
                        return 1 in arguments && !this.contains(a) == !b ? b : c.call(this, a)
                    }
                }
                a = null
            }() : ! function(a) {
                "use strict";
                if ("Element" in a) {
                    var b = "classList",
                        c = "prototype",
                        d = a.Element[c],
                        e = Object,
                        f = String[c].trim || function() {
                            return this.replace(/^\s+|\s+$/g, "")
                        },
                        g = Array[c].indexOf || function(a) {
                            for (var b = 0, c = this.length; b < c; b++)
                                if (b in this && this[b] === a) return b;
                            return -1
                        },
                        h = function(a, b) {
                            this.name = a, this.code = DOMException[a], this.message = b
                        },
                        i = function(a, b) {
                            if ("" === b) throw new h("SYNTAX_ERR", "An invalid or illegal string was specified");
                            if (/\s/.test(b)) throw new h("INVALID_CHARACTER_ERR", "String contains an invalid character");
                            return g.call(a, b)
                        },
                        j = function(a) {
                            for (var b = f.call(a.getAttribute("class") || ""), c = b ? b.split(/\s+/) : [], d = 0, e = c.length; d < e; d++) this.push(c[d]);
                            this._updateClassName = function() {
                                a.setAttribute("class", this.toString())
                            }
                        },
                        k = j[c] = [],
                        l = function() {
                            return new j(this)
                        };
                    if (h[c] = Error[c], k.item = function(a) {
                            return this[a] || null
                        }, k.contains = function(a) {
                            return a += "", i(this, a) !== -1
                        }, k.add = function() {
                            var a, b = arguments,
                                c = 0,
                                d = b.length,
                                e = !1;
                            do a = b[c] + "", i(this, a) === -1 && (this.push(a), e = !0); while (++c < d);
                            e && this._updateClassName()
                        }, k.remove = function() {
                            var a, b, c = arguments,
                                d = 0,
                                e = c.length,
                                f = !1;
                            do
                                for (a = c[d] + "", b = i(this, a); b !== -1;) this.splice(b, 1), f = !0, b = i(this, a); while (++d < e);
                            f && this._updateClassName()
                        }, k.toggle = function(a, b) {
                            a += "";
                            var c = this.contains(a),
                                d = c ? b !== !0 && "remove" : b !== !1 && "add";
                            return d && this[d](a), b === !0 || b === !1 ? b : !c
                        }, k.toString = function() {
                            return this.join(" ")
                        }, e.defineProperty) {
                        var m = {
                            get: l,
                            enumerable: !0,
                            configurable: !0
                        };
                        try {
                            e.defineProperty(d, b, m)
                        } catch (n) {
                            n.number === -2146823252 && (m.enumerable = !1, e.defineProperty(d, b, m))
                        }
                    } else e[c].__defineGetter__ && d.__defineGetter__(b, l)
                }
            }(window.self))
        }, {}],
        2: [function(a, b, c) {
            function d(a, b) {
                if ("string" != typeof a) throw new TypeError("String expected");
                b || (b = document);
                var c = /<([\w:]+)/.exec(a);
                if (!c) return b.createTextNode(a);
                a = a.replace(/^\s+|\s+$/g, "");
                var d = c[1];
                if ("body" == d) {
                    var e = b.createElement("html");
                    return e.innerHTML = a, e.removeChild(e.lastChild)
                }
                var f = g[d] || g._default,
                    h = f[0],
                    i = f[1],
                    j = f[2],
                    e = b.createElement("div");
                for (e.innerHTML = i + a + j; h--;) e = e.lastChild;
                if (e.firstChild == e.lastChild) return e.removeChild(e.firstChild);
                for (var k = b.createDocumentFragment(); e.firstChild;) k.appendChild(e.removeChild(e.firstChild));
                return k
            }
            b.exports = d;
            var e, f = !1;
            "undefined" != typeof document && (e = document.createElement("div"), e.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>', f = !e.getElementsByTagName("link").length, e = void 0);
            var g = {
                legend: [1, "<fieldset>", "</fieldset>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                _default: f ? [1, "X<div>", "</div>"] : [0, "", ""]
            };
            g.td = g.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], g.option = g.optgroup = [1, '<select multiple="multiple">', "</select>"], g.thead = g.tbody = g.colgroup = g.caption = g.tfoot = [1, "<table>", "</table>"], g.polyline = g.ellipse = g.polygon = g.circle = g.text = g.line = g.path = g.rect = g.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"]
        }, {}],
        3: [function(a, b, c) {
            "use strict";

            function d(a, b) {
                if (void 0 === a || null === a) throw new TypeError("Cannot convert first argument to object");
                for (var c = Object(a), d = 1; d < arguments.length; d++) {
                    var e = arguments[d];
                    if (void 0 !== e && null !== e)
                        for (var f = Object.keys(Object(e)), g = 0, h = f.length; g < h; g++) {
                            var i = f[g],
                                j = Object.getOwnPropertyDescriptor(e, i);
                            void 0 !== j && j.enumerable && (c[i] = e[i])
                        }
                }
                return c
            }

            function e() {
                Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: d
                })
            }
            b.exports = {
                assign: d,
                polyfill: e
            }
        }, {}],
        4: [function(a, b, c) {
            function d(a, b) {
                "object" != typeof b ? b = {
                    hash: !!b
                } : void 0 === b.hash && (b.hash = !0);
                for (var c = b.hash ? {} : "", d = b.serializer || (b.hash ? g : h), e = a && a.elements ? a.elements : [], f = Object.create(null), k = 0; k < e.length; ++k) {
                    var l = e[k];
                    if ((b.disabled || !l.disabled) && l.name && j.test(l.nodeName) && !i.test(l.type)) {
                        var m = l.name,
                            n = l.value;
                        if ("checkbox" !== l.type && "radio" !== l.type || l.checked || (n = void 0), b.empty) {
                            if ("checkbox" !== l.type || l.checked || (n = ""), "radio" === l.type && (f[l.name] || l.checked ? l.checked && (f[l.name] = !0) : f[l.name] = !1), !n && "radio" == l.type) continue
                        } else if (!n) continue;
                        if ("select-multiple" !== l.type) c = d(c, m, n);
                        else {
                            n = [];
                            for (var o = l.options, p = !1, q = 0; q < o.length; ++q) {
                                var r = o[q],
                                    s = b.empty && !r.value,
                                    t = r.value || s;
                                r.selected && t && (p = !0, c = b.hash && "[]" !== m.slice(m.length - 2) ? d(c, m + "[]", r.value) : d(c, m, r.value))
                            }!p && b.empty && (c = d(c, m, ""))
                        }
                    }
                }
                if (b.empty)
                    for (var m in f) f[m] || (c = d(c, m, ""));
                return c
            }

            function e(a) {
                var b = [],
                    c = /^([^\[\]]*)/,
                    d = new RegExp(k),
                    e = c.exec(a);
                for (e[1] && b.push(e[1]); null !== (e = d.exec(a));) b.push(e[1]);
                return b
            }

            function f(a, b, c) {
                if (0 === b.length) return a = c;
                var d = b.shift(),
                    e = d.match(/^\[(.+?)\]$/);
                if ("[]" === d) return a = a || [], Array.isArray(a) ? a.push(f(null, b, c)) : (a._values = a._values || [], a._values.push(f(null, b, c))), a;
                if (e) {
                    var g = e[1],
                        h = +g;
                    isNaN(h) ? (a = a || {}, a[g] = f(a[g], b, c)) : (a = a || [], a[h] = f(a[h], b, c))
                } else a[d] = f(a[d], b, c);
                return a
            }

            function g(a, b, c) {
                var d = b.match(k);
                if (d) {
                    var g = e(b);
                    f(a, g, c)
                } else {
                    var h = a[b];
                    h ? (Array.isArray(h) || (a[b] = [h]), a[b].push(c)) : a[b] = c
                }
                return a
            }

            function h(a, b, c) {
                return c = c.replace(/(\r)?\n/g, "\r\n"), c = encodeURIComponent(c), c = c.replace(/%20/g, "+"), a + (a ? "&" : "") + encodeURIComponent(b) + "=" + c
            }
            var i = /^(?:submit|button|image|reset|file)$/i,
                j = /^(?:input|select|textarea|keygen)/i,
                k = /(\[[^\[\]]*\])/g;
            b.exports = d
        }, {}],
        5: [function(b, c, d) {
            (function(e) {
                ! function(b) {
                    if ("object" == typeof d && "undefined" != typeof c) c.exports = b();
                    else if ("function" == typeof a && a.amd) a([], b);
                    else {
                        var f;
                        f = "undefined" != typeof window ? window : "undefined" != typeof e ? e : "undefined" != typeof self ? self : this, f.vexDialog = b()
                    }
                }(function() {
                    return function a(c, d, e) {
                        function f(h, i) {
                            if (!d[h]) {
                                if (!c[h]) {
                                    var j = "function" == typeof b && b;
                                    if (!i && j) return j(h, !0);
                                    if (g) return g(h, !0);
                                    var k = new Error("Cannot find module '" + h + "'");
                                    throw k.code = "MODULE_NOT_FOUND", k
                                }
                                var l = d[h] = {
                                    exports: {}
                                };
                                c[h][0].call(l.exports, function(a) {
                                    var b = c[h][1][a];
                                    return f(b ? b : a)
                                }, l, l.exports, a, c, d, e)
                            }
                            return d[h].exports
                        }
                        for (var g = "function" == typeof b && b, h = 0; h < e.length; h++) f(e[h]);
                        return f
                    }({
                        1: [function(a, b, c) {
                            function d(a, b) {
                                if ("string" != typeof a) throw new TypeError("String expected");
                                b || (b = document);
                                var c = /<([\w:]+)/.exec(a);
                                if (!c) return b.createTextNode(a);
                                a = a.replace(/^\s+|\s+$/g, "");
                                var d = c[1];
                                if ("body" == d) {
                                    var e = b.createElement("html");
                                    return e.innerHTML = a, e.removeChild(e.lastChild)
                                }
                                var f = g[d] || g._default,
                                    h = f[0],
                                    i = f[1],
                                    j = f[2],
                                    e = b.createElement("div");
                                for (e.innerHTML = i + a + j; h--;) e = e.lastChild;
                                if (e.firstChild == e.lastChild) return e.removeChild(e.firstChild);
                                for (var k = b.createDocumentFragment(); e.firstChild;) k.appendChild(e.removeChild(e.firstChild));
                                return k
                            }
                            b.exports = d;
                            var e, f = !1;
                            "undefined" != typeof document && (e = document.createElement("div"), e.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>', f = !e.getElementsByTagName("link").length, e = void 0);
                            var g = {
                                legend: [1, "<fieldset>", "</fieldset>"],
                                tr: [2, "<table><tbody>", "</tbody></table>"],
                                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                                _default: f ? [1, "X<div>", "</div>"] : [0, "", ""]
                            };
                            g.td = g.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], g.option = g.optgroup = [1, '<select multiple="multiple">', "</select>"], g.thead = g.tbody = g.colgroup = g.caption = g.tfoot = [1, "<table>", "</table>"], g.polyline = g.ellipse = g.polygon = g.circle = g.text = g.line = g.path = g.rect = g.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"]
                        }, {}],
                        2: [function(a, b, c) {
                            function d(a, b) {
                                "object" != typeof b ? b = {
                                    hash: !!b
                                } : void 0 === b.hash && (b.hash = !0);
                                for (var c = b.hash ? {} : "", d = b.serializer || (b.hash ? g : h), e = a && a.elements ? a.elements : [], f = Object.create(null), k = 0; k < e.length; ++k) {
                                    var l = e[k];
                                    if ((b.disabled || !l.disabled) && l.name && j.test(l.nodeName) && !i.test(l.type)) {
                                        var m = l.name,
                                            n = l.value;
                                        if ("checkbox" !== l.type && "radio" !== l.type || l.checked || (n = void 0), b.empty) {
                                            if ("checkbox" !== l.type || l.checked || (n = ""), "radio" === l.type && (f[l.name] || l.checked ? l.checked && (f[l.name] = !0) : f[l.name] = !1), !n && "radio" == l.type) continue
                                        } else if (!n) continue;
                                        if ("select-multiple" !== l.type) c = d(c, m, n);
                                        else {
                                            n = [];
                                            for (var o = l.options, p = !1, q = 0; q < o.length; ++q) {
                                                var r = o[q],
                                                    s = b.empty && !r.value,
                                                    t = r.value || s;
                                                r.selected && t && (p = !0, c = b.hash && "[]" !== m.slice(m.length - 2) ? d(c, m + "[]", r.value) : d(c, m, r.value))
                                            }!p && b.empty && (c = d(c, m, ""))
                                        }
                                    }
                                }
                                if (b.empty)
                                    for (var m in f) f[m] || (c = d(c, m, ""));
                                return c
                            }

                            function e(a) {
                                var b = [],
                                    c = /^([^\[\]]*)/,
                                    d = new RegExp(k),
                                    e = c.exec(a);
                                for (e[1] && b.push(e[1]); null !== (e = d.exec(a));) b.push(e[1]);
                                return b
                            }

                            function f(a, b, c) {
                                if (0 === b.length) return a = c;
                                var d = b.shift(),
                                    e = d.match(/^\[(.+?)\]$/);
                                if ("[]" === d) return a = a || [], Array.isArray(a) ? a.push(f(null, b, c)) : (a._values = a._values || [], a._values.push(f(null, b, c))), a;
                                if (e) {
                                    var g = e[1],
                                        h = +g;
                                    isNaN(h) ? (a = a || {}, a[g] = f(a[g], b, c)) : (a = a || [], a[h] = f(a[h], b, c))
                                } else a[d] = f(a[d], b, c);
                                return a
                            }

                            function g(a, b, c) {
                                var d = b.match(k);
                                if (d) {
                                    var g = e(b);
                                    f(a, g, c)
                                } else {
                                    var h = a[b];
                                    h ? (Array.isArray(h) || (a[b] = [h]), a[b].push(c)) : a[b] = c
                                }
                                return a
                            }

                            function h(a, b, c) {
                                return c = c.replace(/(\r)?\n/g, "\r\n"), c = encodeURIComponent(c), c = c.replace(/%20/g, "+"), a + (a ? "&" : "") + encodeURIComponent(b) + "=" + c
                            }
                            var i = /^(?:submit|button|image|reset|file)$/i,
                                j = /^(?:input|select|textarea|keygen)/i,
                                k = /(\[[^\[\]]*\])/g;
                            b.exports = d
                        }, {}],
                        3: [function(a, b, c) {
                            var d = a("domify"),
                                e = a("form-serialize"),
                                f = function(a) {
                                    var b = document.createElement("form");
                                    b.classList.add("vex-dialog-form");
                                    var c = document.createElement("div");
                                    c.classList.add("vex-dialog-message"), c.appendChild(a.message instanceof window.Node ? a.message : d(a.message));
                                    var e = document.createElement("div");
                                    return e.classList.add("vex-dialog-input"), e.appendChild(a.input instanceof window.Node ? a.input : d(a.input)), b.appendChild(c), b.appendChild(e), b
                                },
                                g = function(a) {
                                    var b = document.createElement("div");
                                    b.classList.add("vex-dialog-buttons");
                                    for (var c = 0; c < a.length; c++) {
                                        var d = a[c],
                                            e = document.createElement("button");
                                        e.type = d.type, e.textContent = d.text, e.className = d.className, e.classList.add("vex-dialog-button"), 0 === c ? e.classList.add("vex-first") : c === a.length - 1 && e.classList.add("vex-last"),
                                            function(a) {
                                                e.addEventListener("click", function(b) {
                                                    a.click && a.click.call(this, b)
                                                }.bind(this))
                                            }.bind(this)(d), b.appendChild(e)
                                    }
                                    return b
                                },
                                h = function(a) {
                                    var b = {
                                        name: "dialog",
                                        open: function(b) {
                                            var c = Object.assign({}, this.defaultOptions, b);
                                            c.unsafeMessage && !c.message ? c.message = c.unsafeMessage : c.message && (c.message = a._escapeHtml(c.message));
                                            var d = c.unsafeContent = f(c),
                                                e = a.open(c),
                                                h = c.beforeClose && c.beforeClose.bind(e);
                                            if (e.options.beforeClose = function() {
                                                    var a = !h || h();
                                                    return a && c.callback(this.value || !1), a
                                                }.bind(e), d.appendChild(g.call(e, c.buttons)), e.form = d, d.addEventListener("submit", c.onSubmit.bind(e)), c.focusFirstInput) {
                                                var i = e.contentEl.querySelector("button, input, select, textarea");
                                                i && i.focus()
                                            }
                                            return e
                                        },
                                        alert: function(a) {
                                            return "string" == typeof a && (a = {
                                                message: a
                                            }), a = Object.assign({}, this.defaultOptions, this.defaultAlertOptions, a), this.open(a)
                                        },
                                        confirm: function(a) {
                                            if ("object" != typeof a || "function" != typeof a.callback) throw new Error("dialog.confirm(options) requires options.callback.");
                                            return a = Object.assign({}, this.defaultOptions, this.defaultConfirmOptions, a), this.open(a)
                                        },
                                        prompt: function(b) {
                                            if ("object" != typeof b || "function" != typeof b.callback) throw new Error("dialog.prompt(options) requires options.callback.");
                                            var c = Object.assign({}, this.defaultOptions, this.defaultPromptOptions),
                                                d = {
                                                    unsafeMessage: '<label for="vex">' + a._escapeHtml(b.label || c.label) + "</label>",
                                                    input: '<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="' + a._escapeHtml(b.placeholder || c.placeholder) + '" value="' + a._escapeHtml(b.value || c.value) + '" />'
                                                };
                                            b = Object.assign(c, d, b);
                                            var e = b.callback;
                                            return b.callback = function(a) {
                                                if ("object" == typeof a) {
                                                    var b = Object.keys(a);
                                                    a = b.length ? a[b[0]] : ""
                                                }
                                                e(a)
                                            }, this.open(b)
                                        }
                                    };
                                    return b.buttons = {
                                        YES: {
                                            text: "OK",
                                            type: "submit",
                                            className: "vex-dialog-button-primary",
                                            click: function() {
                                                this.value = !0
                                            }
                                        },
                                        NO: {
                                            text: "Cancel",
                                            type: "button",
                                            className: "vex-dialog-button-secondary",
                                            click: function() {
                                                this.value = !1, this.close()
                                            }
                                        }
                                    }, b.defaultOptions = {
                                        callback: function() {},
                                        afterOpen: function() {},
                                        message: "",
                                        input: "",
                                        buttons: [b.buttons.YES, b.buttons.NO],
                                        showCloseButton: !1,
                                        onSubmit: function(a) {
                                            return a.preventDefault(), this.options.input && (this.value = e(this.form, {
                                                hash: !0
                                            })), this.close()
                                        },
                                        focusFirstInput: !0
                                    }, b.defaultAlertOptions = {
                                        buttons: [b.buttons.YES]
                                    }, b.defaultPromptOptions = {
                                        label: "Prompt:",
                                        placeholder: "",
                                        value: ""
                                    }, b.defaultConfirmOptions = {}, b
                                };
                            b.exports = h
                        }, {
                            domify: 1,
                            "form-serialize": 2
                        }]
                    }, {}, [3])(3)
                })
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            domify: 2,
            "form-serialize": 4
        }],
        6: [function(a, b, c) {
            var d = a("./vex");
            d.registerPlugin(a("vex-dialog")), b.exports = d
        }, {
            "./vex": 7,
            "vex-dialog": 5
        }],
        7: [function(a, b, c) {
            a("classlist-polyfill"), a("es6-object-assign").polyfill();
            var d = a("domify"),
                e = function(a) {
                    if ("undefined" != typeof a) {
                        var b = document.createElement("div");
                        return b.appendChild(document.createTextNode(a)), b.innerHTML
                    }
                    return ""
                },
                f = function(a, b) {
                    if ("string" == typeof b && 0 !== b.length)
                        for (var c = b.split(" "), d = 0; d < c.length; d++) {
                            var e = c[d];
                            e.length && a.classList.add(e)
                        }
                },
                g = function() {
                    var a = document.createElement("div"),
                        b = {
                            WebkitAnimation: "webkitAnimationEnd",
                            MozAnimation: "animationend",
                            OAnimation: "oanimationend",
                            msAnimation: "MSAnimationEnd",
                            animation: "animationend"
                        };
                    for (var c in b)
                        if (void 0 !== a.style[c]) return b[c];
                    return !1
                }(),
                h = {
                    vex: "vex",
                    content: "vex-content",
                    overlay: "vex-overlay",
                    close: "vex-close",
                    closing: "vex-closing",
                    open: "vex-open"
                },
                i = {},
                j = 1,
                k = !1,
                l = {
                    open: function(a) {
                        var b = function(a) {
                            console.warn('The "' + a + '" property is deprecated in vex 3. Use CSS classes and the appropriate "ClassName" options, instead.'), console.warn("See http://github.hubspot.com/vex/api/advanced/#options")
                        };
                        a.css && b("css"), a.overlayCSS && b("overlayCSS"), a.contentCSS && b("contentCSS"), a.closeCSS && b("closeCSS");
                        var c = {};
                        c.id = j++, i[c.id] = c, c.isOpen = !0, c.close = function() {
                            function a(a) {
                                return "none" !== d.getPropertyValue(a + "animation-name") && "0s" !== d.getPropertyValue(a + "animation-duration")
                            }
                            if (!this.isOpen) return !0;
                            var b = this.options;
                            if (k && !b.escapeButtonCloses) return !1;
                            var c = function() {
                                return !b.beforeClose || b.beforeClose.call(this)
                            }.bind(this)();
                            if (c === !1) return !1;
                            this.isOpen = !1;
                            var d = window.getComputedStyle(this.contentEl),
                                e = a("") || a("-webkit-") || a("-moz-") || a("-o-"),
                                f = function j() {
                                    this.rootEl.parentNode && (this.rootEl.removeEventListener(g, j), this.overlayEl.removeEventListener(g, j), delete i[this.id], this.rootEl.parentNode.removeChild(this.rootEl), this.bodyEl.removeChild(this.overlayEl), b.afterClose && b.afterClose.call(this), 0 === Object.keys(i).length && document.body.classList.remove(h.open))
                                }.bind(this);
                            return g && e ? (this.rootEl.addEventListener(g, f), this.overlayEl.addEventListener(g, f), this.rootEl.classList.add(h.closing), this.overlayEl.classList.add(h.closing)) : f(), !0
                        }, "string" == typeof a && (a = {
                            content: a
                        }), a.unsafeContent && !a.content ? a.content = a.unsafeContent : a.content && (a.content = e(a.content));
                        var m = c.options = Object.assign({}, l.defaultOptions, a),
                            n = c.bodyEl = document.getElementsByTagName("body")[0],
                            o = c.rootEl = document.createElement("div");
                        o.classList.add(h.vex), f(o, m.className);
                        var p = c.overlayEl = document.createElement("div");
                        p.classList.add(h.overlay), f(p, m.overlayClassName), m.overlayClosesOnClick && o.addEventListener("click", function(a) {
                            a.target === o && c.close()
                        }), n.appendChild(p);
                        var q = c.contentEl = document.createElement("div");
                        if (q.classList.add(h.content), f(q, m.contentClassName), q.appendChild(m.content instanceof window.Node ? m.content : d(m.content)), o.appendChild(q), m.showCloseButton) {
                            var r = c.closeEl = document.createElement("div");
                            r.classList.add(h.close), f(r, m.closeClassName), r.addEventListener("click", c.close.bind(c)), q.appendChild(r)
                        }
                        return document.querySelector(m.appendLocation).appendChild(o), m.afterOpen && m.afterOpen.call(c), document.body.classList.add(h.open), c
                    },
                    close: function(a) {
                        var b;
                        if (a.id) b = a.id;
                        else {
                            if ("string" != typeof a) throw new TypeError("close requires a vex object or id string");
                            b = a
                        }
                        return !!i[b] && i[b].close()
                    },
                    closeTop: function() {
                        var a = Object.keys(i);
                        return !!a.length && i[a[a.length - 1]].close()
                    },
                    closeAll: function() {
                        for (var a in i) this.close(a);
                        return !0
                    },
                    getAll: function() {
                        return i
                    },
                    getById: function(a) {
                        return i[a]
                    }
                };
            window.addEventListener("keyup", function(a) {
                27 === a.keyCode && (k = !0, l.closeTop(), k = !1)
            }), window.addEventListener("popstate", function() {
                l.defaultOptions.closeAllOnPopState && l.closeAll()
            }), l.defaultOptions = {
                content: "",
                showCloseButton: !0,
                escapeButtonCloses: !0,
                overlayClosesOnClick: !0,
                appendLocation: "body",
                className: "",
                overlayClassName: "",
                contentClassName: "",
                closeClassName: "",
                closeAllOnPopState: !0
            }, Object.defineProperty(l, "_escapeHtml", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: e
            }), l.registerPlugin = function(a, b) {
                var c = a(l),
                    d = b || c.name;
                if (l[d]) throw new Error("Plugin " + b + " is already registered.");
                l[d] = c
            }, b.exports = l
        }, {
            "classlist-polyfill": 1,
            domify: 2,
            "es6-object-assign": 3
        }]
    }, {}, [6])(6)
});
