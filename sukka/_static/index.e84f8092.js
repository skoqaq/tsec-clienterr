function e(e, t, n, r) {
	Object.defineProperty(e, t, {
		get: n,
		set: r,
		enumerable: !0,
		configurable: !0
	})
}
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
	n = {},
	r = {},
	o = t.parcelRequireb5eb;
null == o && ((o = function(e) {
	if (e in n) return n[e].exports;
	if (e in r) {
		var t = r[e];
		delete r[e];
		var o = {
			id: e,
			exports: {}
		};
		return n[e] = o, t.call(o.exports, o, o.exports), o.exports
	}
	var i = new Error("Cannot find module '" + e + "'");
	throw i.code = "MODULE_NOT_FOUND", i
}).register = function(e, t) {
	r[e] = t
}, t.parcelRequireb5eb = o), o.register("h67ns", (function(t, n) {
	var r, o;
	e(t.exports, "register", (function() {
		return r
	}), (function(e) {
		return r = e
	})), e(t.exports, "resolve", (function() {
		return o
	}), (function(e) {
		return o = e
	}));
	var i = {};
	r = function(e) {
		for (var t = Object.keys(e), n = 0; n < t.length; n++) i[t[n]] = e[t[n]]
	}, o = function(e) {
		var t = i[e];
		if (null == t) throw new Error("Could not resolve bundle with id " + e);
		return t
	}
})), o.register("HnoUg", (function(t, n) {
	e(t.exports, "jsx", (function() {
		return a
	})), e(t.exports, "jsxs", (function() {
		return a
	})), e(t.exports, "Fragment", (function() {
		return o("kHuLW").Fragment
	}));
	var r = o("kHuLW"),
		i = (r = o("kHuLW"), 0);

	function a(e, t, n, o, a) {
		var l, s, u = {};
		for (s in t) "ref" == s ? l = t[s] : u[s] = t[s];
		var c = {
			type: e,
			props: u,
			key: n,
			ref: l,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: --i,
			__source: a,
			__self: o
		};
		if ("function" == typeof e && (l = e.defaultProps))
			for (s in l) void 0 === u[s] && (u[s] = l[s]);
		return r.options.vnode && r.options.vnode(c), c
	}
})), o.register("kHuLW", (function(t, n) {
	e(t.exports, "options", (function() {
		return o
	})), e(t.exports, "isValidElement", (function() {
		return a
	})), e(t.exports, "createElement", (function() {
		return m
	})), e(t.exports, "createRef", (function() {
		return b
	})), e(t.exports, "Fragment", (function() {
		return x
	})), e(t.exports, "Component", (function() {
		return y
	})), e(t.exports, "toChildArray", (function() {
		return A
	})), e(t.exports, "render", (function() {
		return W
	})), e(t.exports, "hydrate", (function() {
		return D
	})), e(t.exports, "cloneElement", (function() {
		return z
	})), e(t.exports, "createContext", (function() {
		return N
	}));
	var r, o, i, a, l, s, u, c, f = {},
		p = [],
		d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

	function _(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}

	function h(e) {
		var t = e.parentNode;
		t && t.removeChild(e)
	}

	function m(e, t, n) {
		var o, i, a, l = {};
		for (a in t) "key" == a ? o = t[a] : "ref" == a ? i = t[a] : l[a] = t[a];
		if (arguments.length > 2 && (l.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
			for (a in e.defaultProps) void 0 === l[a] && (l[a] = e.defaultProps[a]);
		return g(e, l, o, i, null)
	}

	function g(e, t, n, r, a) {
		var l = {
			type: e,
			props: t,
			key: n,
			ref: r,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: null == a ? ++i : a
		};
		return null == a && null != o.vnode && o.vnode(l), l
	}

	function b() {
		return {
			current: null
		}
	}

	function x(e) {
		return e.children
	}

	function y(e, t) {
		this.props = e, this.context = t
	}

	function v(e, t) {
		if (null == t) return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;
		for (var n; t < e.__k.length; t++)
			if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
		return "function" == typeof e.type ? v(e) : null
	}

	function w(e) {
		var t, n;
		if (null != (e = e.__) && null != e.__c) {
			for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
				if (null != (n = e.__k[t]) && null != n.__e) {
					e.__e = e.__c.base = n.__e;
					break
				} return w(e)
		}
	}

	function k(e) {
		(!e.__d && (e.__d = !0) && l.push(e) && !S.__r++ || u !== o.debounceRendering) && ((u = o.debounceRendering) || s)(S)
	}

	function S() {
		for (var e; S.__r = l.length;) e = l.sort((function(e, t) {
			return e.__v.__b - t.__v.__b
		})), l = [], e.some((function(e) {
			var t, n, r, o, i, a;
			e.__d && (i = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = _({}, o)).__v = o.__v + 1, F(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? v(o) : i, o.__h), T(n, o), o.__e != i && w(o)))
		}))
	}

	function C(e, t, n, r, o, i, a, l, s, u) {
		var c, d, _, h, m, b, y, w = r && r.__k || p,
			k = w.length;
		for (n.__k = [], c = 0; c < t.length; c++)
			if (null != (h = n.__k[c] = null == (h = t[c]) || "boolean" == typeof h ? null : "string" == typeof h || "number" == typeof h || "bigint" == typeof h ? g(null, h, null, null, h) : Array.isArray(h) ? g(x, {
					children: h
				}, null, null, null) : h.__b > 0 ? g(h.type, h.props, h.key, null, h.__v) : h)) {
				if (h.__ = n, h.__b = n.__b + 1, null === (_ = w[c]) || _ && h.key == _.key && h.type === _.type) w[c] = void 0;
				else
					for (d = 0; d < k; d++) {
						if ((_ = w[d]) && h.key == _.key && h.type === _.type) {
							w[d] = void 0;
							break
						}
						_ = null
					}
				F(e, h, _ = _ || f, o, i, a, l, s, u), m = h.__e, (d = h.ref) && _.ref != d && (y || (y = []), _.ref && y.push(_.ref, null, h), y.push(d, h.__c || m, h)), null != m ? (null == b && (b = m), "function" == typeof h.type && h.__k === _.__k ? h.__d = s = E(h, s, e) : s = j(e, h, _, w, m, s), "function" == typeof n.type && (n.__d = s)) : s && _.__e == s && s.parentNode != e && (s = v(_))
			} for (n.__e = b, c = k; c--;) null != w[c] && ("function" == typeof n.type && null != w[c].__e && w[c].__e == n.__d && (n.__d = v(r, c + 1)), H(w[c], w[c]));
		if (y)
			for (c = 0; c < y.length; c++) P(y[c], y[++c], y[++c])
	}

	function E(e, t, n) {
		for (var r, o = e.__k, i = 0; o && i < o.length; i++)(r = o[i]) && (r.__ = e, t = "function" == typeof r.type ? E(r, t, n) : j(n, r, r, o, r.__e, t));
		return t
	}

	function A(e, t) {
		return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
			A(e, t)
		})) : t.push(e)), t
	}

	function j(e, t, n, r, o, i) {
		var a, l, s;
		if (void 0 !== t.__d) a = t.__d, t.__d = void 0;
		else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(o), a = null;
			else {
				for (l = i, s = 0;
					(l = l.nextSibling) && s < r.length; s += 2)
					if (l == o) break e;
				e.insertBefore(o, i), a = i
			} return void 0 !== a ? a : o.nextSibling
	}

	function $(e, t, n) {
		"-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || d.test(t) ? n : n + "px"
	}

	function L(e, t, n, r, o) {
		var i;
		e: if ("style" === t)
			if ("string" == typeof n) e.style.cssText = n;
			else {
				if ("string" == typeof r && (e.style.cssText = r = ""), r)
					for (t in r) n && t in n || $(e.style, t, "");
				if (n)
					for (t in n) r && n[t] === r[t] || $(e.style, t, n[t])
			}
		else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? R : O, i) : e.removeEventListener(t, i ? R : O, i);
		else if ("dangerouslySetInnerHTML" !== t) {
			if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
			else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
				e[t] = null == n ? "" : n;
				break e
			} catch (e) {}
			"function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
		}
	}

	function O(e) {
		this.l[e.type + !1](o.event ? o.event(e) : e)
	}

	function R(e) {
		this.l[e.type + !0](o.event ? o.event(e) : e)
	}

	function F(e, t, n, i, a, l, s, u, c) {
		var p, d, m, g, b, w, k, S, E, A, j, $ = t.type;
		if (void 0 !== t.constructor) return null;
		null != n.__h && (c = n.__h, u = t.__e = n.__e, t.__h = null, l = [u]), (p = o.__b) && p(t);
		try {
			e: if ("function" == typeof $) {
				if (S = t.props, E = (p = $.contextType) && i[p.__c], A = p ? E ? E.props.value : p.__ : i, n.__c ? k = (d = t.__c = n.__c).__ = d.__E : ("prototype" in $ && $.prototype.render ? t.__c = d = new $(S, A) : (t.__c = d = new y(S, A), d.constructor = $, d.render = U), E && E.sub(d), d.props = S, d.state || (d.state = {}), d.context = A, d.__n = i, m = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != $.getDerivedStateFromProps && (d.__s == d.state && (d.__s = _({}, d.__s)), _(d.__s, $.getDerivedStateFromProps(S, d.__s))), g = d.props, b = d.state, m) null == $.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
				else {
					if (null == $.getDerivedStateFromProps && S !== g && null != d.componentWillReceiveProps && d.componentWillReceiveProps(S, A), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(S, d.__s, A) || t.__v === n.__v) {
						d.props = S, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
							e && (e.__ = t)
						})), d.__h.length && s.push(d);
						break e
					}
					null != d.componentWillUpdate && d.componentWillUpdate(S, d.__s, A), null != d.componentDidUpdate && d.__h.push((function() {
						d.componentDidUpdate(g, b, w)
					}))
				}
				d.context = A, d.props = S, d.state = d.__s, (p = o.__r) && p(t), d.__d = !1, d.__v = t, d.__P = e, p = d.render(d.props, d.state, d.context), d.state = d.__s, null != d.getChildContext && (i = _(_({}, i), d.getChildContext())), m || null == d.getSnapshotBeforeUpdate || (w = d.getSnapshotBeforeUpdate(g, b)), j = null != p && p.type === x && null == p.key ? p.props.children : p, C(e, Array.isArray(j) ? j : [j], t, n, i, a, l, s, u, c), d.base = t.__e, t.__h = null, d.__h.length && s.push(d), k && (d.__E = d.__ = null), d.__e = !1
			} else null == l && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function(e, t, n, o, i, a, l, s) {
				var u, c, p, d = n.props,
					_ = t.props,
					m = t.type,
					g = 0;
				if ("svg" === m && (i = !0), null != a)
					for (; g < a.length; g++)
						if ((u = a[g]) && "setAttribute" in u == !!m && (m ? u.localName === m : 3 === u.nodeType)) {
							e = u, a[g] = null;
							break
						} if (null == e) {
					if (null === m) return document.createTextNode(_);
					e = i ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, _.is && _), a = null, s = !1
				}
				if (null === m) d === _ || s && e.data === _ || (e.data = _);
				else {
					if (a = a && r.call(e.childNodes), c = (d = n.props || f).dangerouslySetInnerHTML, p = _.dangerouslySetInnerHTML, !s) {
						if (null != a)
							for (d = {}, g = 0; g < e.attributes.length; g++) d[e.attributes[g].name] = e.attributes[g].value;
						(p || c) && (p && (c && p.__html == c.__html || p.__html === e.innerHTML) || (e.innerHTML = p && p.__html || ""))
					}
					if (function(e, t, n, r, o) {
							var i;
							for (i in n) "children" === i || "key" === i || i in t || L(e, i, null, n[i], r);
							for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || L(e, i, t[i], n[i], r)
						}(e, _, d, i, s), p) t.__k = [];
					else if (g = t.props.children, C(e, Array.isArray(g) ? g : [g], t, n, o, i && "foreignObject" !== m, a, l, a ? a[0] : n.__k && v(n, 0), s), null != a)
						for (g = a.length; g--;) null != a[g] && h(a[g]);
					s || ("value" in _ && void 0 !== (g = _.value) && (g !== e.value || "progress" === m && !g || "option" === m && g !== d.value) && L(e, "value", g, d.value, !1), "checked" in _ && void 0 !== (g = _.checked) && g !== e.checked && L(e, "checked", g, d.checked, !1))
				}
				return e
			}(n.__e, t, n, i, a, l, s, c);
			(p = o.diffed) && p(t)
		}
		catch (e) {
			t.__v = null, (c || null != l) && (t.__e = u, t.__h = !!c, l[l.indexOf(u)] = null), o.__e(e, t, n)
		}
	}

	function T(e, t) {
		o.__c && o.__c(t, e), e.some((function(t) {
			try {
				e = t.__h, t.__h = [], e.some((function(e) {
					e.call(t)
				}))
			} catch (e) {
				o.__e(e, t.__v)
			}
		}))
	}

	function P(e, t, n) {
		try {
			"function" == typeof e ? e(t) : e.current = t
		} catch (e) {
			o.__e(e, n)
		}
	}

	function H(e, t, n) {
		var r, i;
		if (o.unmount && o.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || P(r, null, t)), null != (r = e.__c)) {
			if (r.componentWillUnmount) try {
				r.componentWillUnmount()
			} catch (e) {
				o.__e(e, t)
			}
			r.base = r.__P = null
		}
		if (r = e.__k)
			for (i = 0; i < r.length; i++) r[i] && H(r[i], t, "function" != typeof e.type);
		n || null == e.__e || h(e.__e), e.__e = e.__d = void 0
	}

	function U(e, t, n) {
		return this.constructor(e, n)
	}

	function W(e, t, n) {
		var i, a, l;
		o.__ && o.__(e, t), a = (i = "function" == typeof n) ? null : n && n.__k || t.__k, l = [], F(t, e = (!i && n || t).__k = m(x, null, [e]), a || f, f, void 0 !== t.ownerSVGElement, !i && n ? [n] : a ? null : t.firstChild ? r.call(t.childNodes) : null, l, !i && n ? n : a ? a.__e : t.firstChild, i), T(l, e)
	}

	function D(e, t) {
		W(e, t, D)
	}

	function z(e, t, n) {
		var o, i, a, l = _({}, e.props);
		for (a in t) "key" == a ? o = t[a] : "ref" == a ? i = t[a] : l[a] = t[a];
		return arguments.length > 2 && (l.children = arguments.length > 3 ? r.call(arguments, 2) : n), g(e.type, l, o || e.key, i || e.ref, null)
	}

	function N(e, t) {
		var n = {
			__c: t = "__cC" + c++,
			__: e,
			Consumer: function(e, t) {
				return e.children(t)
			},
			Provider: function(e) {
				var n, r;
				return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
					return r
				}, this.shouldComponentUpdate = function(e) {
					this.props.value !== e.value && n.some(k)
				}, this.sub = function(e) {
					n.push(e);
					var t = e.componentWillUnmount;
					e.componentWillUnmount = function() {
						n.splice(n.indexOf(e), 1), t && t.call(e)
					}
				}), e.children
			}
		};
		return n.Provider.__ = n.Consumer.contextType = n
	}
	r = p.slice, o = {
		__e: function(e, t, n, r) {
			for (var o, i, a; t = t.__;)
				if ((o = t.__c) && !o.__) try {
					if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o
				} catch (t) {
					e = t
				}
			throw e
		}
	}, i = 0, a = function(e) {
		return null != e && void 0 === e.constructor
	}, y.prototype.setState = function(e, t) {
		var n;
		n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof e && (e = e(_({}, n), this.props)), e && _(n, e), null != e && this.__v && (t && this.__h.push(t), k(this))
	}, y.prototype.forceUpdate = function(e) {
		this.__v && (this.__e = !0, e && this.__h.push(e), k(this))
	}, y.prototype.render = x, l = [], s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, S.__r = 0, c = 0
})), o.register("im1kx", (function(t, n) {
	e(t.exports, "memo", (function() {
		return u
	})), e(t.exports, "Suspense", (function() {
		return _
	})), e(t.exports, "lazy", (function() {
		return m
	})), e(t.exports, "useState", (function() {
		return o("cGpfb").useState
	})), e(t.exports, "useReducer", (function() {
		return o("cGpfb").useReducer
	})), e(t.exports, "useEffect", (function() {
		return o("cGpfb").useEffect
	})), e(t.exports, "useLayoutEffect", (function() {
		return o("cGpfb").useLayoutEffect
	})), e(t.exports, "useRef", (function() {
		return o("cGpfb").useRef
	})), e(t.exports, "useImperativeHandle", (function() {
		return o("cGpfb").useImperativeHandle
	})), e(t.exports, "useMemo", (function() {
		return o("cGpfb").useMemo
	})), e(t.exports, "useCallback", (function() {
		return o("cGpfb").useCallback
	})), e(t.exports, "useContext", (function() {
		return o("cGpfb").useContext
	})), e(t.exports, "useDebugValue", (function() {
		return o("cGpfb").useDebugValue
	}));
	var r = o("cGpfb"),
		i = o("kHuLW");
	r = o("cGpfb"), i = o("kHuLW");

	function a(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}

	function l(e, t) {
		for (var n in e)
			if ("__source" !== n && !(n in t)) return !0;
		for (var r in t)
			if ("__source" !== r && e[r] !== t[r]) return !0;
		return !1
	}

	function s(e) {
		this.props = e
	}

	function u(e, t) {
		function n(e) {
			var n = this.props.ref,
				r = n == e.ref;
			return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : l(this.props, e)
		}

		function r(t) {
			return this.shouldComponentUpdate = n, i.createElement(e, t)
		}
		return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
	}(s.prototype = new i.Component).isPureReactComponent = !0, s.prototype.shouldComponentUpdate = function(e, t) {
		return l(this.props, e) || l(this.state, t)
	};
	var c = i.options.__b;
	i.options.__b = function(e) {
		e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), c && c(e)
	};
	"undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref");
	var f = function(e, t) {
			return null == e ? null : i.toChildArray(i.toChildArray(e).map(t))
		},
		p = (i.toChildArray, i.options.__e);
	i.options.__e = function(e, t, n, r) {
		if (e.then)
			for (var o, i = t; i = i.__;)
				if ((o = i.__c) && o.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
		p(e, t, n, r)
	};
	var d = i.options.unmount;

	function _() {
		this.__u = 0, this.t = null, this.__b = null
	}

	function h(e) {
		var t = e.__.__c;
		return t && t.__e && t.__e(e)
	}

	function m(e) {
		var t, n, r;

		function o(o) {
			if (t || (t = e()).then((function(e) {
					n = e.default || e
				}), (function(e) {
					r = e
				})), r) throw r;
			if (!n) throw t;
			return i.createElement(n, o)
		}
		return o.displayName = "Lazy", o.__f = !0, o
	}

	function g() {
		this.u = null, this.o = null
	}
	i.options.unmount = function(e) {
		var t = e.__c;
		t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), d && d(e)
	}, (_.prototype = new i.Component).__c = function(e, t) {
		var n = t.__c,
			r = this;
		null == r.t && (r.t = []), r.t.push(n);
		var o = h(r.__v),
			i = !1,
			a = function() {
				i || (i = !0, n.__R = null, o ? o(l) : l())
			};
		n.__R = a;
		var l = function() {
				if (!--r.__u) {
					if (r.state.__e) {
						var e = r.state.__e;
						r.__v.__k[0] = function e(t, n, r) {
							return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
								return e(t, n, r)
							})), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
						}(e, e.__c.__P, e.__c.__O)
					}
					var t;
					for (r.setState({
							__e: r.__b = null
						}); t = r.t.pop();) t.forceUpdate()
				}
			},
			s = !0 === t.__h;
		r.__u++ || s || r.setState({
			__e: r.__b = r.__v.__k[0]
		}), e.then(a, a)
	}, _.prototype.componentWillUnmount = function() {
		this.t = []
	}, _.prototype.render = function(e, t) {
		if (this.__b) {
			if (this.__v.__k) {
				var n = document.createElement("div"),
					r = this.__v.__k[0].__c;
				this.__v.__k[0] = function e(t, n, r) {
					return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
						"function" == typeof e.__c && e.__c()
					})), t.__c.__H = null), null != (t = a({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
						return e(t, n, r)
					}))), t
				}(this.__b, n, r.__O = r.__P)
			}
			this.__b = null
		}
		var o = t.__e && i.createElement(i.Fragment, null, e.fallback);
		return o && (o.__h = null), [i.createElement(i.Fragment, null, t.__e ? null : e.children), o]
	};
	var b = function(e, t, n) {
		if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
			for (n = e.u; n;) {
				for (; n.length > 3;) n.pop()();
				if (n[1] < n[0]) break;
				e.u = n = n[2]
			}
	};
	(g.prototype = new i.Component).__e = function(e) {
		var t = this,
			n = h(t.__v),
			r = t.o.get(e);
		return r[0]++,
			function(o) {
				var i = function() {
					t.props.revealOrder ? (r.push(o), b(t, e, r)) : o()
				};
				n ? n(i) : i()
			}
	}, g.prototype.render = function(e) {
		this.u = null, this.o = new Map;
		var t = i.toChildArray(e.children);
		e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
		for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
		return e.children
	}, g.prototype.componentDidUpdate = g.prototype.componentDidMount = function() {
		var e = this;
		this.o.forEach((function(t, n) {
			b(e, n, t)
		}))
	};
	var x = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
		y = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
		v = "undefined" != typeof document;
	i.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
		Object.defineProperty(i.Component.prototype, e, {
			configurable: !0,
			get: function() {
				return this["UNSAFE_" + e]
			},
			set: function(t) {
				Object.defineProperty(this, e, {
					configurable: !0,
					writable: !0,
					value: t
				})
			}
		})
	}));
	var w = i.options.event;

	function k() {}

	function S() {
		return this.cancelBubble
	}

	function C() {
		return this.defaultPrevented
	}
	i.options.event = function(e) {
		return w && (e = w(e)), e.persist = k, e.isPropagationStopped = S, e.isDefaultPrevented = C, e.nativeEvent = e
	};
	var E = {
			configurable: !0,
			get: function() {
				return this.class
			}
		},
		A = i.options.vnode;
	i.options.vnode = function(e) {
		var t, n = e.type,
			r = e.props,
			o = r;
		if ("string" == typeof n) {
			var a = -1 === n.indexOf("-");
			for (var l in o = {}, r) {
				var s = r[l];
				v && "children" === l && "noscript" === n || "value" === l && "defaultValue" in r && null == s || ("defaultValue" === l && "value" in r && null == r.value ? l = "value" : "download" === l && !0 === s ? s = "" : /ondoubleclick/i.test(l) ? l = "ondblclick" : /^onchange(textarea|input)/i.test(l + n) && (t = r.type, !("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(t)) ? l = "oninput" : /^onfocus$/i.test(l) ? l = "onfocusin" : /^onblur$/i.test(l) ? l = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(l) ? l = l.toLowerCase() : a && y.test(l) ? l = l.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === s && (s = void 0), o[l] = s)
			}
			"select" == n && o.multiple && Array.isArray(o.value) && (o.value = i.toChildArray(r.children).forEach((function(e) {
				e.props.selected = -1 != o.value.indexOf(e.props.value)
			}))), "select" == n && null != o.defaultValue && (o.value = i.toChildArray(r.children).forEach((function(e) {
				e.props.selected = o.multiple ? -1 != o.defaultValue.indexOf(e.props.value) : o.defaultValue == e.props.value
			}))), e.props = o, r.class != r.className && (E.enumerable = "className" in r, null != r.className && (o.class = r.className), Object.defineProperty(o, "className", E))
		}
		e.$$typeof = x, A && A(e)
	};
	var j = i.options.__r;
	i.options.__r = function(e) {
		j && j(e), e.__c
	};
	i.Fragment, r.useState, r.useReducer, r.useEffect, r.useLayoutEffect, r.useRef, r.useImperativeHandle, r.useMemo, r.useCallback, r.useContext, r.useDebugValue, i.createElement, i.createContext, i.createRef, i.Fragment, i.Component, i.Fragment
})), o.register("cGpfb", (function(t, n) {
	e(t.exports, "useState", (function() {
		return m
	})), e(t.exports, "useReducer", (function() {
		return g
	})), e(t.exports, "useEffect", (function() {
		return b
	})), e(t.exports, "useLayoutEffect", (function() {
		return x
	})), e(t.exports, "useRef", (function() {
		return y
	})), e(t.exports, "useMemo", (function() {
		return w
	})), e(t.exports, "useImperativeHandle", (function() {
		return v
	})), e(t.exports, "useCallback", (function() {
		return k
	})), e(t.exports, "useContext", (function() {
		return S
	})), e(t.exports, "useDebugValue", (function() {
		return C
	}));
	var r, i, a, l = o("kHuLW"),
		s = 0,
		u = [],
		c = l.options.__b,
		f = l.options.__r,
		p = l.options.diffed,
		d = l.options.__c,
		_ = l.options.unmount;

	function h(e, t) {
		l.options.__h && l.options.__h(i, e, s || t), s = 0;
		var n = i.__H || (i.__H = {
			__: [],
			__h: []
		});
		return e >= n.__.length && n.__.push({}), n.__[e]
	}

	function m(e) {
		return s = 1, g(O, e)
	}

	function g(e, t, n) {
		var o = h(r++, 2);
		return o.t = e, o.__c || (o.__ = [n ? n(t) : O(void 0, t), function(e) {
			var t = o.t(o.__[0], e);
			o.__[0] !== t && (o.__ = [t, o.__[1]], o.__c.setState({}))
		}], o.__c = i), o.__
	}

	function b(e, t) {
		var n = h(r++, 3);
		!l.options.__s && L(n.__H, t) && (n.__ = e, n.__H = t, i.__H.__h.push(n))
	}

	function x(e, t) {
		var n = h(r++, 4);
		!l.options.__s && L(n.__H, t) && (n.__ = e, n.__H = t, i.__h.push(n))
	}

	function y(e) {
		return s = 5, w((function() {
			return {
				current: e
			}
		}), [])
	}

	function v(e, t, n) {
		s = 6, x((function() {
			return "function" == typeof e ? (e(t()), function() {
				return e(null)
			}) : e ? (e.current = t(), function() {
				return e.current = null
			}) : void 0
		}), null == n ? n : n.concat(e))
	}

	function w(e, t) {
		var n = h(r++, 7);
		return L(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
	}

	function k(e, t) {
		return s = 8, w((function() {
			return e
		}), t)
	}

	function S(e) {
		var t = i.context[e.__c],
			n = h(r++, 9);
		return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(i)), t.props.value) : e.__
	}

	function C(e, t) {
		l.options.useDebugValue && l.options.useDebugValue(t ? t(e) : e)
	}

	function E() {
		for (var e; e = u.shift();)
			if (e.__P) try {
				e.__H.__h.forEach(j), e.__H.__h.forEach($), e.__H.__h = []
			} catch (t) {
				e.__H.__h = [], l.options.__e(t, e.__v)
			}
	}
	l.options.__b = function(e) {
		i = null, c && c(e)
	}, l.options.__r = function(e) {
		f && f(e), r = 0;
		var t = (i = e.__c).__H;
		t && (t.__h.forEach(j), t.__h.forEach($), t.__h = [])
	}, l.options.diffed = function(e) {
		p && p(e);
		var t = e.__c;
		t && t.__H && t.__H.__h.length && (1 !== u.push(t) && a === l.options.requestAnimationFrame || ((a = l.options.requestAnimationFrame) || function(e) {
			var t, n = function() {
					clearTimeout(r), A && cancelAnimationFrame(t), setTimeout(e)
				},
				r = setTimeout(n, 100);
			A && (t = requestAnimationFrame(n))
		})(E)), i = null
	}, l.options.__c = function(e, t) {
		t.some((function(e) {
			try {
				e.__h.forEach(j), e.__h = e.__h.filter((function(e) {
					return !e.__ || $(e)
				}))
			} catch (n) {
				t.some((function(e) {
					e.__h && (e.__h = [])
				})), t = [], l.options.__e(n, e.__v)
			}
		})), d && d(e, t)
	}, l.options.unmount = function(e) {
		_ && _(e);
		var t, n = e.__c;
		n && n.__H && (n.__H.__.forEach((function(e) {
			try {
				j(e)
			} catch (e) {
				t = e
			}
		})), t && l.options.__e(t, n.__v))
	};
	var A = "function" == typeof requestAnimationFrame;

	function j(e) {
		var t = i,
			n = e.__c;
		"function" == typeof n && (e.__c = void 0, n()), i = t
	}

	function $(e) {
		var t = i;
		e.__c = e.__(), i = t
	}

	function L(e, t) {
		return !e || e.length !== t.length || t.some((function(t, n) {
			return t !== e[n]
		}))
	}

	function O(e, t) {
		return "function" == typeof t ? t(e) : t
	}
})), o.register("bh4jq", (function(t, n) {
	e(t.exports, "tw", (function() {
		return it
	})), e(t.exports, "setup", (function() {
		return at
	})), o("fXRaV");
	var r, i, a, l, s, u, c, f, p = o("dTkVo"),
		d = o("jer2Z"),
		_ = o("amyQ5"),
		h = (e, t) => !!~e.indexOf(t),
		m = (e, t = "-") => e.join(t),
		g = (e, t) => m(e.filter(Boolean), t),
		b = (e, t = 1) => e.slice(t),
		x = e => e,
		y = () => {},
		v = e => e[0].toUpperCase() + b(e),
		w = e => e.replace(/[A-Z]/g, "-$&").toLowerCase(),
		k = (e, t) => {
			for (;
				"function" == typeof e;) e = e(t);
			return e
		},
		S = (e, t) => {
			e.size > t && e.delete(e.keys().next().value)
		},
		C = (e, t) => !h("@:&", e[0]) && (h("rg", (typeof t)[5]) || Array.isArray(t)),
		E = (e, t, n) => t ? Object.keys(t).reduce(((e, r) => {
			const o = k(t[r], n);
			return C(r, o) ? e[w(r)] = o : e[r] = "@" == r[0] && h("figa", r[1]) ? (e[r] || []).concat(o) : E(e[r] || {}, o, n), e
		}), e) : e,
		A = "undefined" != typeof CSS && CSS.escape || (e => e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")),
		j = e => (Array.isArray(e) || (e = [e]), "@media " + m(e.map((e => ("string" == typeof e && (e = {
			min: e
		}), e.raw || m(Object.keys(e).map((t => `(${t}-width:${e[t]})`)), " and ")))), ",")),
		$ = e => {
			for (var t = 9, n = e.length; n--;) t = Math.imul(t ^ e.charCodeAt(n), 1597334677);
			return "tw-" + ((t ^ t >>> 9) >>> 0).toString(36)
		},
		L = (e = "") => (r.push(e), ""),
		O = e => {
			r.length = Math.max(r.lastIndexOf("") + ~~e, 0)
		},
		R = e => e && !h("!:", e[0]),
		F = e => ":" == e[0],
		T = (e, t) => {
			i.push({
				v: r.filter(F),
				d: e,
				n: t,
				i: h(r, "!"),
				$: ""
			})
		},
		P = e => {
			const t = "-" == e[0];
			t && (e = b(e));
			const n = m(r.filter(R));
			return T("&" == e ? n : (n && n + "-") + e, t), ""
		},
		H = (e, t) => {
			let n = "";
			for (let t, r = !1, o = 0; t = e[o++];)
				if (r || "[" == t) n += t, r = "]" != t;
				else switch (t) {
					case ":":
						n = n && L(":" + (e[o] == t ? e[o++] : "") + n);
						break;
					case "(":
						n = n && L(n), L();
						break;
					case "!":
						L(t);
						break;
					case ")":
					case " ":
					case "\t":
					case "\n":
					case "\r":
						n = n && P(n), O(")" !== t);
						break;
					default:
						n += t
				}
			n && (t ? L(":" + n) : "-" == n.slice(-1) ? L(n.slice(0, -1)) : P(n))
		},
		U = e => {
			L(), W(e), O()
		},
		W = e => {
			switch (typeof e) {
				case "string":
					H(e);
					break;
				case "function":
					T(e);
					break;
				case "object":
					Array.isArray(e) ? e.forEach(U) : e && Object.keys(e).forEach((t => {
						((e, t) => {
							if (t) {
								L();
								const n = h("tbu", (typeof t)[1]);
								H(e, n), n && U(t), O()
							}
						})(t, e[t])
					}))
			}
		},
		D = new WeakMap,
		z = e => (r = [], i = [], Array.isArray(e[0]) && Array.isArray(e[0].raw) ? (e => {
			let t = D.get(e);
			if (!t) {
				let n = NaN,
					o = "";
				t = e.map(((t, a) => {
					if (n == n || "[" != t.slice(-1) && !h(":-(", (e[a + 1] || "")[0]) || (n = a), a >= n) return r => {
						a == n && (o = ""), o += t, h("rg", (typeof r)[5]) ? o += r : r && (H(o), o = "", W(r)), a == e.length - 1 && H(o)
					};
					const l = i = [];
					H(t);
					const s = [...r];
					return i = [], e => {
						i.push(...l), r = [...s], e && W(e)
					}
				})), D.set(e, t)
			}
			return t
		})(e[0]).forEach(((t, n) => t(e[n + 1]))) : W(e), i),
		N = (e, t) => ("function" == typeof t && (a = !1), t),
		M = new WeakMap,
		B = (e, t) => {
			const n = (e => {
				a = !0;
				const t = JSON.stringify(e, N);
				return a && t
			})(t);
			let r;
			if (n) {
				var o = M.get(e);
				o || M.set(e, o = new Map), r = o.get(n)
			}
			return r || (r = Object.defineProperty(((n, r) => (r = Array.isArray(n) ? r : n, k(e(t, r), r))), "toJSON", {
				value: () => n || t
			}), o && (o.set(n, r), S(o, 1e4))), r
		},
		V = (e, {
			css: t
		}) => t(z(e)),
		G = e => (t, n, r, o) => {
			if (t) {
				const i = n && e(n);
				if (i && i.length > 0) return i.reduce(((e, n) => (e[g([r, n, o])] = t, e)), {})
			}
		},
		I = G((e => ({
			t: ["top-left", "top-right"],
			r: ["top-right", "bottom-right"],
			b: ["bottom-left", "bottom-right"],
			l: ["bottom-left", "top-left"],
			tl: ["top-left"],
			tr: ["top-right"],
			bl: ["bottom-left"],
			br: ["bottom-right"]
		} [e]))),
		K = e => {
			const t = ({
				x: "lr",
				y: "tb"
			} [e] || e || "").split("").sort();
			for (let e = t.length; e--;)
				if (!(t[e] = {
						t: "top",
						r: "right",
						b: "bottom",
						l: "left"
					} [t[e]])) return;
			if (t.length) return t
		},
		q = G(K),
		Z = (e, t) => e + (":" == t[1] ? b(t, 2) + ":" : b(t)) + ":",
		J = (e, t = e.d) => "function" == typeof t ? "" : e.v.reduce(Z, "") + (e.i ? "!" : "") + (e.n ? "-" : "") + t,
		Q = e => "cols" == e ? "columns" : "rows",
		X = e => (t, n, r) => ({
			[e]: r + ((l = m(t)) && "-" + l)
		}),
		Y = (e, t) => (n, r, o) => (l = m(n, t)) && {
			[e || o]: l
		},
		ee = e => (t, {
			theme: n
		}, r) => (l = n(e || r, t)) && {
			[e || r]: l
		},
		te = (e, t) => (n, {
			theme: r
		}, o) => (l = r(e || o, n, m(n, t))) && {
			[e || o]: l
		},
		ne = (e, t) => (n, r) => e(n, r, t),
		re = X("display"),
		oe = X("position"),
		ie = X("textTransform"),
		ae = X("textDecoration"),
		le = X("fontStyle"),
		se = e => (t, n, r) => ({
			["--tw-" + e]: r,
			fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
		}),
		ue = (e, {
			theme: t
		}, n) => (l = t("inset", e)) && {
			[n]: l
		},
		ce = (e, t, n, r = n) => (l = t(r + "Opacity", b(e))) && {
			[`--tw-${n}-opacity`]: l
		},
		fe = (e, t) => Math.round(parseInt(e, 16) * t),
		pe = (e, t, n) => e && "#" == e[0] && (l = (e.length - 1) / 3) && (u = [17, 1, .062272][l - 1]) ? `rgba(${fe(e.substr(1,l),u)},${fe(e.substr(1+l,l),u)},${fe(e.substr(1+2*l,l),u)},${t?`var(--tw-${t}${n?","+n:""})`:n||1})` : e,
		de = (e, t, n) => n && "string" == typeof n ? (l = pe(n, t + "-opacity")) && l !== n ? {
			[`--tw-${t}-opacity`]: "1",
			[e]: [n, l]
		} : {
			[e]: n
		} : void 0,
		_e = e => (u = pe(e, "", "0")) == l ? "transparent" : u,
		he = (e, {
			theme: t
		}, n, r, o, i) => (l = {
			x: ["right", "left"],
			y: ["bottom", "top"]
		} [e[0]]) && (u = `--tw-${n}-${e[0]}-reverse`) ? "reverse" == e[1] ? {
			[u]: "1"
		} : {
			[u]: "0",
			[g([o, l[0], i])]: (s = t(r, b(e))) && `calc(${s} * var(${u}))`,
			[g([o, l[1], i])]: s && [s, `calc(${s} * calc(1 - var(${u})))`]
		} : void 0,
		me = (e, t) => t[0] && {
			[e]: (h("wun", (t[0] || "")[3]) ? "space-" : "") + t[0]
		},
		ge = e => t => h(["start", "end"], t[0]) ? {
			[e]: "flex-" + t[0]
		} : me(e, t),
		be = e => (t, {
			theme: n
		}) => {
			if (l = n("grid" + v(e), t, "")) return {
				["grid-" + e]: l
			};
			switch (t[0]) {
				case "span":
					return t[1] && {
						["grid-" + e]: `span ${t[1]} / span ${t[1]}`
					};
				case "start":
				case "end":
					return (l = n("grid" + v(e) + v(t[0]), b(t), m(b(t)))) && {
						[`grid-${e}-${t[0]}`]: l
					}
			}
		},
		xe = (e, {
			theme: t
		}, n) => {
			switch (e[0]) {
				case "solid":
				case "dashed":
				case "dotted":
				case "double":
				case "none":
					return Y("borderStyle")(e);
				case "collapse":
				case "separate":
					return Y("borderCollapse")(e);
				case "opacity":
					return ce(e, t, n)
			}
			return (l = t(n + "Width", e, "")) ? {
				borderWidth: l
			} : de("borderColor", n, t(n + "Color", e))
		},
		ye = e => (e ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))",
		ve = (e, t, n) => e[0] && (l = t.theme(n, e[1] || e[0])) && {
			[`--tw-${n}-x`]: "y" !== e[0] && l,
			[`--tw-${n}-y`]: "x" !== e[0] && l,
			transform: [`${n}${e[1]?e[0].toUpperCase():""}(${l})`, ye()]
		},
		we = e => (t, n, r) => r[1] ? q(n.theme(e, t), r[1], e) : ee(e)(t, n, r),
		ke = we("padding"),
		Se = we("margin"),
		Ce = (e, {
			theme: t
		}, n) => (l = {
			w: "width",
			h: "height"
		} [e[0]]) && {
			[l = `${n}${v(l)}`]: t(l, b(e))
		},
		Ee = (e, {
			theme: t
		}, n) => {
			const r = n.split("-"),
				o = "backdrop" == r[0] ? r[0] + "-" : "";
			if (o || e.unshift(...r), "filter" == e[0]) {
				const t = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", o && "opacity", "saturate", "sepia", !o && "drop-shadow"].filter(Boolean);
				return "none" == e[1] ? {
					[o + "filter"]: "none"
				} : t.reduce(((e, t) => (e["--tw-" + o + t] = "var(--tw-empty,/*!*/ /*!*/)", e)), {
					[o + "filter"]: t.map((e => `var(--tw-${o}${e})`)).join(" ")
				})
			}
			return u = e.shift(), h(["hue", "drop"], u) && (u += v(e.shift())), (l = t(o ? "backdrop" + v(u) : u, e)) && {
				["--tw-" + o + u]: (Array.isArray(l) ? l : [l]).map((e => `${w(u)}(${e})`)).join(" ")
			}
		},
		Ae = {
			group: (e, {
				tag: t
			}, n) => t(m([n, ...e])),
			hidden: ne(re, "none"),
			inline: re,
			block: re,
			contents: re,
			flow: re,
			table: (e, t, n) => h(["auto", "fixed"], e[0]) ? {
				tableLayout: e[0]
			} : re(e, t, n),
			flex(e, t, n) {
				switch (e[0]) {
					case "row":
					case "col":
						return {
							flexDirection: m("col" == e[0] ? ["column", ...b(e)] : e)
						};
					case "nowrap":
					case "wrap":
						return {
							flexWrap: m(e)
						};
					case "grow":
					case "shrink":
						return null != (l = t.theme("flex" + v(e[0]), b(e), e[1] || 1)) && {
							["flex-" + e[0]]: "" + l
						}
				}
				return (l = t.theme("flex", e, "")) ? {
					flex: l
				} : re(e, t, n)
			},
			grid(e, t, n) {
				switch (e[0]) {
					case "cols":
					case "rows":
						return (l = t.theme("gridTemplate" + v(Q(e[0])), b(e), 2 == e.length && Number(e[1]) ? `repeat(${e[1]},minmax(0,1fr))` : m(b(e)))) && {
							["gridTemplate-" + Q(e[0])]: l
						};
					case "flow":
						return e.length > 1 && {
							gridAutoFlow: m("col" == e[1] ? ["column", ...b(e, 2)] : b(e), " ")
						}
				}
				return re(e, t, n)
			},
			auto: (e, {
				theme: t
			}) => h(["cols", "rows"], e[0]) && (l = t("gridAuto" + v(Q(e[0])), b(e), m(b(e)))) && {
				["gridAuto-" + Q(e[0])]: l
			},
			static: oe,
			fixed: oe,
			absolute: oe,
			relative: oe,
			sticky: oe,
			visible: {
				visibility: "visible"
			},
			invisible: {
				visibility: "hidden"
			},
			antialiased: {
				WebkitFontSmoothing: "antialiased",
				MozOsxFontSmoothing: "grayscale"
			},
			"subpixel-antialiased": {
				WebkitFontSmoothing: "auto",
				MozOsxFontSmoothing: "auto"
			},
			truncate: {
				overflow: "hidden",
				whiteSpace: "nowrap",
				textOverflow: "ellipsis"
			},
			"sr-only": {
				position: "absolute",
				width: "1px",
				height: "1px",
				padding: "0",
				margin: "-1px",
				overflow: "hidden",
				whiteSpace: "nowrap",
				clip: "rect(0,0,0,0)",
				borderWidth: "0"
			},
			"not-sr-only": {
				position: "static",
				width: "auto",
				height: "auto",
				padding: "0",
				margin: "0",
				overflow: "visible",
				whiteSpace: "normal",
				clip: "auto"
			},
			resize: e => ({
				resize: {
					x: "horizontal",
					y: "vertical"
				} [e[0]] || e[0] || "both"
			}),
			box: e => e[0] && {
				boxSizing: e[0] + "-box"
			},
			appearance: Y(),
			cursor: te(),
			float: Y(),
			clear: Y(),
			decoration: Y("boxDecorationBreak"),
			isolate: {
				isolation: "isolate"
			},
			isolation: Y(),
			"mix-blend": Y("mixBlendMode"),
			top: ue,
			right: ue,
			bottom: ue,
			left: ue,
			inset: (e, {
				theme: t
			}) => (l = K(e[0])) ? q(t("inset", b(e)), e[0]) : (l = t("inset", e)) && {
				top: l,
				right: l,
				bottom: l,
				left: l
			},
			underline: ae,
			"line-through": ae,
			"no-underline": ne(ae, "none"),
			"text-underline": ne(ae, "underline"),
			"text-no-underline": ne(ae, "none"),
			"text-line-through": ne(ae, "line-through"),
			uppercase: ie,
			lowercase: ie,
			capitalize: ie,
			"normal-case": ne(ie, "none"),
			"text-normal-case": ne(ie, "none"),
			italic: le,
			"not-italic": ne(le, "normal"),
			"font-italic": ne(le, "italic"),
			"font-not-italic": ne(le, "normal"),
			font: (e, t, n) => (l = t.theme("fontFamily", e, "")) ? {
				fontFamily: l
			} : ee("fontWeight")(e, t, n),
			items: e => e[0] && {
				alignItems: h(["start", "end"], e[0]) ? "flex-" + e[0] : m(e)
			},
			"justify-self": Y(),
			"justify-items": Y(),
			justify: ge("justifyContent"),
			content: ge("alignContent"),
			self: ge("alignSelf"),
			place: e => e[0] && me("place-" + e[0], b(e)),
			overscroll: e => e[0] && {
				["overscrollBehavior" + (e[1] ? "-" + e[0] : "")]: e[1] || e[0]
			},
			col: be("column"),
			row: be("row"),
			duration: ee("transitionDuration"),
			delay: ee("transitionDelay"),
			tracking: ee("letterSpacing"),
			leading: ee("lineHeight"),
			z: ee("zIndex"),
			opacity: ee(),
			ease: ee("transitionTimingFunction"),
			p: ke,
			py: ke,
			px: ke,
			pt: ke,
			pr: ke,
			pb: ke,
			pl: ke,
			m: Se,
			my: Se,
			mx: Se,
			mt: Se,
			mr: Se,
			mb: Se,
			ml: Se,
			w: ee("width"),
			h: ee("height"),
			min: Ce,
			max: Ce,
			fill: ee(),
			order: ee(),
			origin: te("transformOrigin", " "),
			select: Y("userSelect"),
			"pointer-events": Y(),
			align: Y("verticalAlign"),
			whitespace: Y("whiteSpace"),
			"normal-nums": {
				fontVariantNumeric: "normal"
			},
			ordinal: se("ordinal"),
			"slashed-zero": se("slashed-zero"),
			"lining-nums": se("numeric-figure"),
			"oldstyle-nums": se("numeric-figure"),
			"proportional-nums": se("numeric-spacing"),
			"tabular-nums": se("numeric-spacing"),
			"diagonal-fractions": se("numeric-fraction"),
			"stacked-fractions": se("numeric-fraction"),
			overflow: (e, t, n) => h(["ellipsis", "clip"], e[0]) ? Y("textOverflow")(e) : e[1] ? {
				["overflow-" + e[0]]: e[1]
			} : Y()(e, t, n),
			transform: e => "none" == e[0] ? {
				transform: "none"
			} : {
				"--tw-translate-x": "0",
				"--tw-translate-y": "0",
				"--tw-rotate": "0",
				"--tw-skew-x": "0",
				"--tw-skew-y": "0",
				"--tw-scale-x": "1",
				"--tw-scale-y": "1",
				transform: ye("gpu" == e[0])
			},
			rotate: (e, {
				theme: t
			}) => (l = t("rotate", e)) && {
				"--tw-rotate": l,
				transform: [`rotate(${l})`, ye()]
			},
			scale: ve,
			translate: ve,
			skew: ve,
			gap: (e, t, n) => (l = {
				x: "column",
				y: "row"
			} [e[0]]) ? {
				[l + "Gap"]: t.theme("gap", b(e))
			} : ee("gap")(e, t, n),
			stroke: (e, t, n) => (l = t.theme("stroke", e, "")) ? {
				stroke: l
			} : ee("strokeWidth")(e, t, n),
			outline: (e, {
				theme: t
			}) => (l = t("outline", e)) && {
				outline: l[0],
				outlineOffset: l[1]
			},
			"break-normal": {
				wordBreak: "normal",
				overflowWrap: "normal"
			},
			"break-words": {
				overflowWrap: "break-word"
			},
			"break-all": {
				wordBreak: "break-all"
			},
			text(e, {
				theme: t
			}, n) {
				switch (e[0]) {
					case "left":
					case "center":
					case "right":
					case "justify":
						return {
							textAlign: e[0]
						};
					case "uppercase":
					case "lowercase":
					case "capitalize":
						return ie([], l, e[0]);
					case "opacity":
						return ce(e, t, n)
				}
				const r = t("fontSize", e, "");
				return r ? "string" == typeof r ? {
					fontSize: r
				} : p.default({
					fontSize: r[0]
				}, "string" == typeof r[1] ? {
					lineHeight: r[1]
				} : r[1]) : de("color", "text", t("textColor", e))
			},
			bg(e, {
				theme: t
			}, n) {
				switch (e[0]) {
					case "fixed":
					case "local":
					case "scroll":
						return Y("backgroundAttachment", ",")(e);
					case "bottom":
					case "center":
					case "left":
					case "right":
					case "top":
						return Y("backgroundPosition", " ")(e);
					case "no":
						return "repeat" == e[1] && Y("backgroundRepeat")(e);
					case "repeat":
						return h("xy", e[1]) ? Y("backgroundRepeat")(e) : {
							backgroundRepeat: e[1] || e[0]
						};
					case "opacity":
						return ce(e, t, n, "background");
					case "clip":
					case "origin":
						return e[1] && {
							["background-" + e[0]]: e[1] + ("text" == e[1] ? "" : "-box")
						};
					case "blend":
						return Y("background-blend-mode")(b(e));
					case "gradient":
						if ("to" == e[1] && (l = K(e[2]))) return {
							backgroundImage: `linear-gradient(to ${m(l," ")},var(--tw-gradient-stops))`
						}
				}
				return (l = t("backgroundPosition", e, "")) ? {
					backgroundPosition: l
				} : (l = t("backgroundSize", e, "")) ? {
					backgroundSize: l
				} : (l = t("backgroundImage", e, "")) ? {
					backgroundImage: l
				} : de("backgroundColor", "bg", t("backgroundColor", e))
			},
			from: (e, {
				theme: t
			}) => (l = t("gradientColorStops", e)) && {
				"--tw-gradient-from": l,
				"--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${_e(l)})`
			},
			via: (e, {
				theme: t
			}) => (l = t("gradientColorStops", e)) && {
				"--tw-gradient-stops": `var(--tw-gradient-from),${l},var(--tw-gradient-to,${_e(l)})`
			},
			to: (e, {
				theme: t
			}) => (l = t("gradientColorStops", e)) && {
				"--tw-gradient-to": l
			},
			border: (e, t, n) => K(e[0]) ? q(t.theme("borderWidth", b(e)), e[0], "border", "width") : xe(e, t, n),
			divide: (e, t, n) => (l = he(e, t, n, "divideWidth", "border", "width") || xe(e, t, n)) && {
				"&>:not([hidden])~:not([hidden])": l
			},
			space: (e, t, n) => (l = he(e, t, n, "space", "margin")) && {
				"&>:not([hidden])~:not([hidden])": l
			},
			placeholder: (e, {
				theme: t
			}, n) => (l = "opacity" == e[0] ? ce(e, t, n) : de("color", "placeholder", t("placeholderColor", e))) && {
				"&::placeholder": l
			},
			shadow: (e, {
				theme: t
			}) => (l = t("boxShadow", e)) && {
				":global": {
					"*": {
						"--tw-shadow": "0 0 transparent"
					}
				},
				"--tw-shadow": "none" == l ? "0 0 transparent" : l,
				boxShadow: [l, "var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"]
			},
			animate: (e, {
				theme: t,
				tag: n
			}) => {
				if (u = t("animation", e)) {
					const e = u.split(" ");
					return (l = t("keyframes", e[0], s = {})) !== s ? (u = n(e[0])) && {
						animation: u + " " + m(b(e), " "),
						["@keyframes " + u]: l
					} : {
						animation: u
					}
				}
			},
			ring(e, {
				theme: t
			}, n) {
				switch (e[0]) {
					case "inset":
						return {
							"--tw-ring-inset": "inset"
						};
					case "opacity":
						return ce(e, t, n);
					case "offset":
						return (l = t("ringOffsetWidth", b(e), "")) ? {
							"--tw-ring-offset-width": l
						} : {
							"--tw-ring-offset-color": t("ringOffsetColor", b(e))
						}
				}
				return (l = t("ringWidth", e, "")) ? {
					"--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
					"--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${l} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
					boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)",
					":global": {
						"*": {
							"--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
							"--tw-ring-offset-width": t("ringOffsetWidth", "", "0px"),
							"--tw-ring-offset-color": t("ringOffsetColor", "", "#fff"),
							"--tw-ring-color": pe(t("ringColor", "", "#93c5fd"), "ring-opacity", t("ringOpacity", "", "0.5")),
							"--tw-ring-offset-shadow": "0 0 transparent",
							"--tw-ring-shadow": "0 0 transparent"
						}
					}
				} : {
					"--tw-ring-opacity": "1",
					"--tw-ring-color": pe(t("ringColor", e), "ring-opacity")
				}
			},
			object: (e, t, n) => h(["contain", "cover", "fill", "none", "scale-down"], m(e)) ? {
				objectFit: m(e)
			} : te("objectPosition", " ")(e, t, n),
			list: (e, t, n) => "item" == m(e) ? re(e, t, n) : h(["inside", "outside"], m(e)) ? {
				listStylePosition: e[0]
			} : te("listStyleType")(e, t, n),
			rounded: (e, t, n) => I(t.theme("borderRadius", b(e), ""), e[0], "border", "radius") || ee("borderRadius")(e, t, n),
			"transition-none": {
				transitionProperty: "none"
			},
			transition: (e, {
				theme: t
			}) => ({
				transitionProperty: t("transitionProperty", e),
				transitionTimingFunction: t("transitionTimingFunction", ""),
				transitionDuration: t("transitionDuration", "")
			}),
			container: (e, {
				theme: t
			}) => {
				const {
					screens: n = t("screens"),
					center: r,
					padding: o
				} = t("container"), i = e => (l = o && ("string" == typeof o ? o : o[e] || o.DEFAULT)) ? {
					paddingRight: l,
					paddingLeft: l
				} : {};
				return Object.keys(n).reduce(((e, t) => ((u = n[t]) && "string" == typeof u && (e[j(u)] = {
					"&": p.default({
						"max-width": u
					}, i(t))
				}), e)), p.default({
					width: "100%"
				}, r ? {
					marginRight: "auto",
					marginLeft: "auto"
				} : {}, i("xs")))
			},
			filter: Ee,
			blur: Ee,
			brightness: Ee,
			contrast: Ee,
			grayscale: Ee,
			"hue-rotate": Ee,
			invert: Ee,
			saturate: Ee,
			sepia: Ee,
			"drop-shadow": Ee,
			backdrop: Ee
		},
		je = {
			dark: "@media (prefers-color-scheme:dark)",
			sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
			"motion-reduce": "@media (prefers-reduced-motion:reduce)",
			"motion-safe": "@media (prefers-reduced-motion:no-preference)",
			first: "&:first-child",
			last: "&:last-child",
			even: "&:nth-child(2n)",
			odd: "&:nth-child(odd)",
			children: "&>*",
			siblings: "&~*",
			sibling: "&+*",
			override: "&&"
		},
		$e = "__twind",
		Le = e => {
			let t = self.__twind;
			return t || (t = document.head.appendChild(document.createElement("style")), t.id = $e, e && (t.nonce = e), t.appendChild(document.createTextNode(""))), t
		},
		Oe = e => ({
			unknown(e, t = [], n, r) {
				n || this.report({
					id: "UNKNOWN_THEME_VALUE",
					key: e + "." + m(t)
				}, r)
			},
			report(t) {
				var {
					id: n
				} = t, r = d.default(t, ["id"]);
				return e(`[${n}] ${JSON.stringify(r)}`)
			}
		}),
		Re = Oe((e => console.warn(e))),
		Fe = Oe((e => {
			throw new Error(e)
		})),
		Te = Oe(y),
		Pe = (e, t, n) => `${e}:${t}${n?" !important":""}`,
		He = (e, t, n) => {
			let r = "";
			const o = _.cssPropertyAlias(e);
			o && (r += `${Pe(o,t,n)};`);
			let i = _.cssPropertyPrefixFlags(e);
			return 1 & i && (r += `-webkit-${Pe(e,t,n)};`), 2 & i && (r += `-moz-${Pe(e,t,n)};`), 4 & i && (r += `-ms-${Pe(e,t,n)};`), i = _.cssValuePrefixFlags(e, t), 1 & i && (r += `${Pe(e,`-webkit-${t}`,n)};`), 2 & i && (r += `${Pe(e,`-moz-${t}`,n)};`), 4 & i && (r += `${Pe(e,`-ms-${t}`,n)};`), r += Pe(e, t, n), r
		},
		Ue = (e, t) => {
			const n = {};
			do {
				for (let t = 1; t < e; t++) n[`${t}/${e}`] = Number((t / e * 100).toFixed(6)) + "%"
			} while (++e <= t);
			return n
		},
		We = (e, t, n = 0) => {
			const r = {};
			for (; n <= e; n = 2 * n || 1) r[n] = n + t;
			return r
		},
		De = (e, t = "", n = 1, r = 0, o = 1, i = {}) => {
			for (; r <= e; r += o) i[r] = r / n + t;
			return i
		},
		ze = e => t => t(e),
		Ne = {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px"
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				black: "#000",
				white: "#fff",
				gray: {
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280",
					600: "#4b5563",
					700: "#374151",
					800: "#1f2937",
					900: "#111827"
				},
				red: {
					50: "#fef2f2",
					100: "#fee2e2",
					200: "#fecaca",
					300: "#fca5a5",
					400: "#f87171",
					500: "#ef4444",
					600: "#dc2626",
					700: "#b91c1c",
					800: "#991b1b",
					900: "#7f1d1d"
				},
				yellow: {
					50: "#fffbeb",
					100: "#fef3c7",
					200: "#fde68a",
					300: "#fcd34d",
					400: "#fbbf24",
					500: "#f59e0b",
					600: "#d97706",
					700: "#b45309",
					800: "#92400e",
					900: "#78350f"
				},
				green: {
					50: "#ecfdf5",
					100: "#d1fae5",
					200: "#a7f3d0",
					300: "#6ee7b7",
					400: "#34d399",
					500: "#10b981",
					600: "#059669",
					700: "#047857",
					800: "#065f46",
					900: "#064e3b"
				},
				blue: {
					50: "#eff6ff",
					100: "#dbeafe",
					200: "#bfdbfe",
					300: "#93c5fd",
					400: "#60a5fa",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
					800: "#1e40af",
					900: "#1e3a8a"
				},
				indigo: {
					50: "#eef2ff",
					100: "#e0e7ff",
					200: "#c7d2fe",
					300: "#a5b4fc",
					400: "#818cf8",
					500: "#6366f1",
					600: "#4f46e5",
					700: "#4338ca",
					800: "#3730a3",
					900: "#312e81"
				},
				purple: {
					50: "#f5f3ff",
					100: "#ede9fe",
					200: "#ddd6fe",
					300: "#c4b5fd",
					400: "#a78bfa",
					500: "#8b5cf6",
					600: "#7c3aed",
					700: "#6d28d9",
					800: "#5b21b6",
					900: "#4c1d95"
				},
				pink: {
					50: "#fdf2f8",
					100: "#fce7f3",
					200: "#fbcfe8",
					300: "#f9a8d4",
					400: "#f472b6",
					500: "#ec4899",
					600: "#db2777",
					700: "#be185d",
					800: "#9d174d",
					900: "#831843"
				}
			},
			spacing: p.default({
				px: "1px",
				0: "0px"
			}, De(4, "rem", 4, .5, .5), De(12, "rem", 4, 5), {
				14: "3.5rem"
			}, De(64, "rem", 4, 16, 4), {
				72: "18rem",
				80: "20rem",
				96: "24rem"
			}),
			durations: {
				75: "75ms",
				100: "100ms",
				150: "150ms",
				200: "200ms",
				300: "300ms",
				500: "500ms",
				700: "700ms",
				1e3: "1000ms"
			},
			animation: {
				none: "none",
				spin: "spin 1s linear infinite",
				ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
				pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				bounce: "bounce 1s infinite"
			},
			backdropBlur: ze("blur"),
			backdropBrightness: ze("brightness"),
			backdropContrast: ze("contrast"),
			backdropGrayscale: ze("grayscale"),
			backdropHueRotate: ze("hueRotate"),
			backdropInvert: ze("invert"),
			backdropOpacity: ze("opacity"),
			backdropSaturate: ze("saturate"),
			backdropSepia: ze("sepia"),
			backgroundColor: ze("colors"),
			backgroundImage: {
				none: "none"
			},
			backgroundOpacity: ze("opacity"),
			backgroundSize: {
				auto: "auto",
				cover: "cover",
				contain: "contain"
			},
			blur: {
				0: "0",
				sm: "4px",
				DEFAULT: "8px",
				md: "12px",
				lg: "16px",
				xl: "24px",
				"2xl": "40px",
				"3xl": "64px"
			},
			brightness: p.default({}, De(200, "", 100, 0, 50), De(110, "", 100, 90, 5), {
				75: "0.75",
				125: "1.25"
			}),
			borderColor: e => p.default({}, e("colors"), {
				DEFAULT: e("colors.gray.200", "currentColor")
			}),
			borderOpacity: ze("opacity"),
			borderRadius: {
				none: "0px",
				sm: "0.125rem",
				DEFAULT: "0.25rem",
				md: "0.375rem",
				lg: "0.5rem",
				xl: "0.75rem",
				"2xl": "1rem",
				"3xl": "1.5rem",
				"1/2": "50%",
				full: "9999px"
			},
			borderWidth: p.default({
				DEFAULT: "1px"
			}, We(8, "px")),
			boxShadow: {
				sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
				DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
				md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
				lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
				xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
				"2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
				inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
				none: "none"
			},
			contrast: p.default({}, De(200, "", 100, 0, 50), {
				75: "0.75",
				125: "1.25"
			}),
			divideColor: ze("borderColor"),
			divideOpacity: ze("borderOpacity"),
			divideWidth: ze("borderWidth"),
			dropShadow: {
				sm: "0 1px 1px rgba(0,0,0,0.05)",
				DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"],
				md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"],
				lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"],
				xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"],
				"2xl": "0 25px 25px rgba(0,0,0,0.15)",
				none: "0 0 #0000"
			},
			fill: {
				current: "currentColor"
			},
			grayscale: {
				0: "0",
				DEFAULT: "100%"
			},
			hueRotate: {
				0: "0deg",
				15: "15deg",
				30: "30deg",
				60: "60deg",
				90: "90deg",
				180: "180deg"
			},
			invert: {
				0: "0",
				DEFAULT: "100%"
			},
			flex: {
				1: "1 1 0%",
				auto: "1 1 auto",
				initial: "0 1 auto",
				none: "none"
			},
			fontFamily: {
				sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
				serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
				mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
			},
			fontSize: {
				xs: ["0.75rem", "1rem"],
				sm: ["0.875rem", "1.25rem"],
				base: ["1rem", "1.5rem"],
				lg: ["1.125rem", "1.75rem"],
				xl: ["1.25rem", "1.75rem"],
				"2xl": ["1.5rem", "2rem"],
				"3xl": ["1.875rem", "2.25rem"],
				"4xl": ["2.25rem", "2.5rem"],
				"5xl": ["3rem", "1"],
				"6xl": ["3.75rem", "1"],
				"7xl": ["4.5rem", "1"],
				"8xl": ["6rem", "1"],
				"9xl": ["8rem", "1"]
			},
			fontWeight: {
				thin: "100",
				extralight: "200",
				light: "300",
				normal: "400",
				medium: "500",
				semibold: "600",
				bold: "700",
				extrabold: "800",
				black: "900"
			},
			gridTemplateColumns: {},
			gridTemplateRows: {},
			gridAutoColumns: {
				min: "min-content",
				max: "max-content",
				fr: "minmax(0,1fr)"
			},
			gridAutoRows: {
				min: "min-content",
				max: "max-content",
				fr: "minmax(0,1fr)"
			},
			gridColumn: {
				auto: "auto",
				"span-full": "1 / -1"
			},
			gridRow: {
				auto: "auto",
				"span-full": "1 / -1"
			},
			gap: ze("spacing"),
			gradientColorStops: ze("colors"),
			height: e => p.default({
				auto: "auto"
			}, e("spacing"), Ue(2, 6), {
				full: "100%",
				screen: "100vh"
			}),
			inset: e => p.default({
				auto: "auto"
			}, e("spacing"), Ue(2, 4), {
				full: "100%"
			}),
			keyframes: {
				spin: {
					from: {
						transform: "rotate(0deg)"
					},
					to: {
						transform: "rotate(360deg)"
					}
				},
				ping: {
					"0%": {
						transform: "scale(1)",
						opacity: "1"
					},
					"75%,100%": {
						transform: "scale(2)",
						opacity: "0"
					}
				},
				pulse: {
					"0%,100%": {
						opacity: "1"
					},
					"50%": {
						opacity: ".5"
					}
				},
				bounce: {
					"0%, 100%": {
						transform: "translateY(-25%)",
						animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
					},
					"50%": {
						transform: "none",
						animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
					}
				}
			},
			letterSpacing: {
				tighter: "-0.05em",
				tight: "-0.025em",
				normal: "0em",
				wide: "0.025em",
				wider: "0.05em",
				widest: "0.1em"
			},
			lineHeight: p.default({
				none: "1",
				tight: "1.25",
				snug: "1.375",
				normal: "1.5",
				relaxed: "1.625",
				loose: "2"
			}, De(10, "rem", 4, 3)),
			margin: e => p.default({
				auto: "auto"
			}, e("spacing")),
			maxHeight: e => p.default({}, e("spacing"), {
				full: "100%",
				screen: "100vh"
			}),
			maxWidth: (e, {
				breakpoints: t
			}) => p.default({
				none: "none",
				0: "0rem",
				xs: "20rem",
				sm: "24rem",
				md: "28rem",
				lg: "32rem",
				xl: "36rem",
				"2xl": "42rem",
				"3xl": "48rem",
				"4xl": "56rem",
				"5xl": "64rem",
				"6xl": "72rem",
				"7xl": "80rem",
				full: "100%",
				min: "min-content",
				max: "max-content",
				prose: "65ch"
			}, t(e("screens"))),
			minHeight: {
				0: "0px",
				full: "100%",
				screen: "100vh"
			},
			minWidth: {
				0: "0px",
				full: "100%",
				min: "min-content",
				max: "max-content"
			},
			opacity: p.default({}, De(100, "", 100, 0, 10), {
				5: "0.05",
				25: "0.25",
				75: "0.75",
				95: "0.95"
			}),
			order: p.default({
				first: "-9999",
				last: "9999",
				none: "0"
			}, De(12, "", 1, 1)),
			outline: {
				none: ["2px solid transparent", "2px"],
				white: ["2px dotted white", "2px"],
				black: ["2px dotted black", "2px"]
			},
			padding: ze("spacing"),
			placeholderColor: ze("colors"),
			placeholderOpacity: ze("opacity"),
			ringColor: e => p.default({
				DEFAULT: e("colors.blue.500", "#3b82f6")
			}, e("colors")),
			ringOffsetColor: ze("colors"),
			ringOffsetWidth: We(8, "px"),
			ringOpacity: e => p.default({
				DEFAULT: "0.5"
			}, e("opacity")),
			ringWidth: p.default({
				DEFAULT: "3px"
			}, We(8, "px")),
			rotate: p.default({}, We(2, "deg"), We(12, "deg", 3), We(180, "deg", 45)),
			saturate: De(200, "", 100, 0, 50),
			scale: p.default({}, De(150, "", 100, 0, 50), De(110, "", 100, 90, 5), {
				75: "0.75",
				125: "1.25"
			}),
			sepia: {
				0: "0",
				DEFAULT: "100%"
			},
			skew: p.default({}, We(2, "deg"), We(12, "deg", 3)),
			space: ze("spacing"),
			stroke: {
				current: "currentColor"
			},
			strokeWidth: De(2),
			textColor: ze("colors"),
			textOpacity: ze("opacity"),
			transitionDuration: e => p.default({
				DEFAULT: "150ms"
			}, e("durations")),
			transitionDelay: ze("durations"),
			transitionProperty: {
				none: "none",
				all: "all",
				DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
				colors: "background-color,border-color,color,fill,stroke",
				opacity: "opacity",
				shadow: "box-shadow",
				transform: "transform"
			},
			transitionTimingFunction: {
				DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
				linear: "linear",
				in: "cubic-bezier(0.4,0,1,1)",
				out: "cubic-bezier(0,0,0.2,1)",
				"in-out": "cubic-bezier(0.4,0,0.2,1)"
			},
			translate: e => p.default({}, e("spacing"), Ue(2, 4), {
				full: "100%"
			}),
			width: e => p.default({
				auto: "auto"
			}, e("spacing"), Ue(2, 6), Ue(12, 12), {
				screen: "100vw",
				full: "100%",
				min: "min-content",
				max: "max-content"
			}),
			zIndex: p.default({
				auto: "auto"
			}, De(50, "", 1, 0, 10))
		},
		Me = (e, t = {}, n = []) => (Object.keys(e).forEach((r => {
			const o = e[r];
			"DEFAULT" == r && (t[m(n)] = o, t[m(n, ".")] = o);
			const i = [...n, r];
			t[m(i)] = o, t[m(i, ".")] = o, o && "object" == typeof o && Me(o, t, i)
		}), t), t),
		Be = {
			negative: () => ({}),
			breakpoints: e => Object.keys(e).filter((t => "string" == typeof e[t])).reduce(((t, n) => (t["screen-" + n] = e[n], t)), {})
		},
		Ve = e => {
			const t = new Map,
				n = p.default({}, Ne, e),
				r = (e, t) => {
					const n = e && e[t],
						r = "function" == typeof n ? n(o, Be) : n;
					return r && "colors" == t ? Me(r) : r
				},
				o = (e, o, i) => {
					const a = e.split(".");
					e = a[0], a.length > 1 && (i = o, o = m(b(a), "."));
					let l = t.get(e);
					if (l || (t.set(e, l = p.default({}, r(n, e))), Object.assign(l, r(n.extend, e))), null != o) {
						const t = ((e, t) => (t = "[" == t[0] && "]" == t.slice(-1) && t.slice(1, -1)) && h(e, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(t) && (h(t, "calc(") ? t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : t))(e, o = (Array.isArray(o) ? m(o) : o) || "DEFAULT") || l[o];
						return null == t ? i : Array.isArray(t) && !h(["fontSize", "outline", "dropShadow"], e) ? m(t, ",") : t
					}
					return l
				};
			return o
		},
		Ge = /^:(group(?:(?!-focus).+?)*)-(.+)$/,
		Ie = /^(:not)-(.+)/,
		Ke = e => "[" == e[1] ? b(e) : e,
		qe = e => (31 & ((f = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(e)) ? +f[1] / (f[2] ? 15 : 1) / 10 : 0)) << 22,
		Ze = e => {
			f = 0;
			for (let t = e.length; t--;) f += h("-:,", e[t]);
			return f
		},
		Je = e => (15 & Ze(e)) << 18,
		Qe = ["rst", "st", "en", "d", "nk", "sited", "pty", "ecked", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "ad-on", "tiona", "quire"],
		Xe = (e, t) => (n, r) => {
			return n | ((f = e("screens", b(r), "")) ? 134217728 | qe(j(f)) : ":dark" == r ? 1073741824 : "@" == (f = t[r] || r.replace(Ie, ":$2"))[0] ? Je(f) : (o = r, 1 << (~(f = Qe.indexOf(o.replace(Ge, ":$2").slice(3, 8))) ? f : 17)));
			var o
		},
		Ye = (e, t) => t + "{" + e + "}",
		et = (e, t, n) => {
			const {
				theme: r,
				tag: o
			} = n, i = (e, t) => "--" + o(t), a = e => `${e}`.replace(/--(tw-[\w-]+)\b/g, i);
			let l;
			const s = (t, r, o, i, u) => {
					if (Array.isArray(i)) return void i.forEach((e => e && s(t, r, o, e, u)));
					let c = "",
						d = 0,
						_ = 0;
					i["@apply"] && (i = E(k(((...e) => B(V, e))(i["@apply"]), n), p.default({}, i, {
						"@apply": void 0
					}), n)), Object.keys(i).forEach((p => {
						const g = k(i[p], n);
						if (C(p, g)) {
							if ("" !== g && p.length > 1) {
								const t = w(p);
								_ += 1, d = Math.max(d, (e => "-" == e[0] ? 0 : Ze(e) + ((f = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(e)) ? +!!f[1] || -!!f[2] : 0) + 1)(t)), c = (c && c + ";") + ((t, n, r) => (t = a(t), Array.isArray(n) ? m(n.filter(Boolean).map((n => e(t, a(n), r))), ";") : e(t, a(n), r)))(t, g, u)
							}
						} else if (g)
							if (":global" == p && (p = "@global"), "@" == p[0])
								if ("g" == p[1]) s([], "", 0, g, u);
								else if ("f" == p[1]) s([], p, 0, g, u);
						else if ("k" == p[1]) {
							const e = l.length;
							s([], "", 0, g, u);
							const t = l.splice(e, l.length - e);
							l.push({
								r: Ye(m(t.map((e => e.r)), ""), p),
								p: t.reduce(((e, t) => e + t.p), 0)
							})
						} else "i" == p[1] ? (Array.isArray(g) ? g : [g]).forEach((e => e && l.push({
							p: 0,
							r: `${p} ${e};`
						}))) : ("c" == p[2] && (p = j(n.theme("screens", b(p, 8).trim()))), s([...t, p], r, o | qe(p) | Je(p), g, u));
						else s(t, r ? r.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, ((e, t, n) => p.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, ((e, n, r) => (h(n, "&") ? n.replace(/&/g, t) : (t && t + " ") + n) + r)) + n)) : p, o, g, u)
					})), _ && l.push({
						r: t.reduceRight(Ye, Ye(c, r)),
						p: 256 * o + ((15 & Math.max(0, 15 - _)) << 4 | 15 & (d || 15))
					})
				},
				u = Xe(r, t);
			return (e, t, n, r = 0) => (r <<= 28, l = [], s([], t ? "." + A(t) : "", n ? n.v.reduceRight(u, r) : r, e, n && n.i), l)
		},
		tt = (e, t, n, r = t) => !1 === e ? n : !0 === e ? r : e || t,
		nt = {
			_: {
				value: "",
				writable: !0
			}
		},
		rt = (e = {}) => {
			const t = Ve(e.theme),
				n = (e => ("string" == typeof e ? {
					t: Fe,
					a: Re,
					i: Te
				} [e[1]] : e) || Re)(e.mode),
				r = tt(e.hash, !1, !1, $),
				o = e.important;
			let i = {
					v: []
				},
				a = 0;
			const l = [],
				s = {
					tw: (...e) => F(e),
					theme: (e, r, o) => {
						var a;
						const l = null != (a = t(e, r, o)) ? a : n.unknown(e, null == r || Array.isArray(r) ? r : r.split("."), null != o, s);
						return i.n && l && h("rg", (typeof l)[5]) ? `calc(${l} * -1)` : l
					},
					tag: e => r ? r(e) : e,
					css: e => {
						a++;
						const t = l.length;
						try {
							("string" == typeof e ? z([e]) : e).forEach(R);
							const n = Object.create(null, nt);
							for (let e = t; e < l.length; e++) {
								const t = l[e];
								if (t) switch (typeof t) {
									case "object":
										E(n, t, s);
										break;
									case "string":
										n._ += (n._ && " ") + t
								}
							}
							return n
						} finally {
							l.length = t, a--
						}
					}
				},
				u = ((e, t) => (n, r) => {
					if ("function" == typeof n.d) return n.d(t);
					const o = n.d.split(/-(?![^[]*])/g);
					if (!r && "tw" == o[0] && n.$ == n.d) return n.$;
					for (let n = o.length; n; n--) {
						const i = m(o.slice(0, n));
						if (Object.prototype.hasOwnProperty.call(e, i)) {
							const a = e[i];
							return "function" == typeof a ? a(b(o, n), t, i) : "string" == typeof a ? t[r ? "css" : "tw"](a) : a
						}
					}
				})(p.default({}, Ae, e.plugins), s),
				f = p.default({}, je, e.variants),
				d = ((e, t, {
					theme: n,
					tag: r
				}) => {
					const o = (o, i) => (c = n("screens", b(i), "")) ? {
						[j(c)]: o
					} : ":dark" == i && "class" == e ? {
						".dark &": o
					} : (c = Ge.exec(i)) ? {
						[`.${A(r(c[1]))}:${c[2]} &`]: o
					} : {
						[t[b(i)] || "&" + i.replace(Ie, ((e, t, n) => t + "(" + Ke(":" + n) + ")"))]: o
					};
					return (e, t) => t.v.reduceRight(o, e)
				})(e.darkMode || "media", f, s),
				_ = et(tt(e.prefix, He, Pe), f, s),
				g = e.sheet || ("undefined" == typeof window ? {
					target: null,
					insert: y
				} : (({
					nonce: e,
					target: t = Le(e).sheet
				} = {}) => {
					const n = t.cssRules.length;
					return {
						target: t,
						insert: (e, r) => t.insertRule(e, n + r)
					}
				})(e)),
				{
					init: v = (e => e())
				} = g,
				w = ((e, t, n, r) => {
					let o, i;
					return n(((e = []) => o = e)), n(((e = new Set) => i = e)), ({
						r: n,
						p: a
					}) => {
						if (!i.has(n)) {
							i.add(n);
							const l = ((e, t) => {
								for (var n = 0, r = e.length; n < r;) {
									const o = r + n >> 1;
									e[o] <= t ? n = o + 1 : r = o
								}
								return r
							})(o, a);
							try {
								e.insert(n, l), o.splice(l, 0, a)
							} catch (e) {
								/:-[mwo]/.test(n) || t.report({
									id: "INJECT_CSS_ERROR",
									css: n,
									error: e
								}, r)
							}
						}
					}
				})(g, n, v, s);
			let C;
			v(((e = new Map) => C = e));
			const L = new WeakMap,
				O = (e, t) => "_" == e ? void 0 : "function" == typeof t ? JSON.stringify(k(t, s), O) : t,
				R = e => {
					!a && i.v.length && (e = p.default({}, e, {
						v: [...i.v, ...e.v],
						$: ""
					})), e.$ || (e.$ = J(e, L.get(e.d)));
					let t = a ? null : C.get(e.$);
					if (null == t) {
						let c = (e => {
							const t = i;
							i = e;
							try {
								return k(u(e), s)
							} finally {
								i = t
							}
						})(e);
						if (e.$ || (e.$ = $(JSON.stringify(c, O)), L.set(e.d, e.$), e.$ = J(e, e.$)), c && "object" == typeof c)
							if (e.v = e.v.map(Ke), o && (e.i = o), c = d(c, e), a) l.push(c);
							else {
								const n = "function" == typeof e.d ? "string" == typeof c._ ? 1 : 3 : 2;
								t = r || "function" == typeof e.d ? (r || $)(n + e.$) : e.$, _(c, t, e, n).forEach(w), c._ && (t += " " + c._)
							}
						else "string" == typeof c ? t = c : (t = e.$, n.report({
							id: "UNKNOWN_DIRECTIVE",
							rule: t
						}, s)), a && "function" != typeof e.d && l.push(t);
						a || (C.set(e.$, t), S(C, 3e4))
					}
					return t
				},
				F = e => m(z(e).map(R).filter(Boolean), " "),
				T = tt(e.preflight, x, !1);
			if (T) {
				const e = (e => ({
						":root": {
							tabSize: 4
						},
						"body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": {
							margin: "0"
						},
						button: {
							backgroundColor: "transparent",
							backgroundImage: "none"
						},
						'button,[type="button"],[type="reset"],[type="submit"]': {
							WebkitAppearance: "button"
						},
						"button:focus": {
							outline: ["1px dotted", "5px auto -webkit-focus-ring-color"]
						},
						"fieldset,ol,ul,legend": {
							padding: "0"
						},
						"ol,ul": {
							listStyle: "none"
						},
						html: {
							lineHeight: "1.5",
							WebkitTextSizeAdjust: "100%",
							fontFamily: e("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
						},
						body: {
							fontFamily: "inherit",
							lineHeight: "inherit"
						},
						"*,::before,::after": {
							boxSizing: "border-box",
							border: `0 solid ${e("borderColor.DEFAULT","currentColor")}`
						},
						hr: {
							height: "0",
							color: "inherit",
							borderTopWidth: "1px"
						},
						img: {
							borderStyle: "solid"
						},
						textarea: {
							resize: "vertical"
						},
						"input::placeholder,textarea::placeholder": {
							opacity: "1",
							color: e("placeholderColor.DEFAULT", e("colors.gray.400", "#a1a1aa"))
						},
						'button,[role="button"]': {
							cursor: "pointer"
						},
						table: {
							textIndent: "0",
							borderColor: "inherit",
							borderCollapse: "collapse"
						},
						"h1,h2,h3,h4,h5,h6": {
							fontSize: "inherit",
							fontWeight: "inherit"
						},
						a: {
							color: "inherit",
							textDecoration: "inherit"
						},
						"button,input,optgroup,select,textarea": {
							fontFamily: "inherit",
							fontSize: "100%",
							margin: "0",
							padding: "0",
							lineHeight: "inherit",
							color: "inherit"
						},
						"button,select": {
							textTransform: "none"
						},
						"::-moz-focus-inner": {
							borderStyle: "none",
							padding: "0"
						},
						":-moz-focusring": {
							outline: "1px dotted ButtonText"
						},
						":-moz-ui-invalid": {
							boxShadow: "none"
						},
						progress: {
							verticalAlign: "baseline"
						},
						"::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
							height: "auto"
						},
						'[type="search"]': {
							WebkitAppearance: "textfield",
							outlineOffset: "-2px"
						},
						"::-webkit-search-decoration": {
							WebkitAppearance: "none"
						},
						"::-webkit-file-upload-button": {
							WebkitAppearance: "button",
							font: "inherit"
						},
						summary: {
							display: "list-item"
						},
						"abbr[title]": {
							textDecoration: "underline dotted"
						},
						"b,strong": {
							fontWeight: "bolder"
						},
						"pre,code,kbd,samp": {
							fontFamily: e("fontFamily", "mono", "ui-monospace,monospace"),
							fontSize: "1em"
						},
						"sub,sup": {
							fontSize: "75%",
							lineHeight: "0",
							position: "relative",
							verticalAlign: "baseline"
						},
						sub: {
							bottom: "-0.25em"
						},
						sup: {
							top: "-0.5em"
						},
						"img,svg,video,canvas,audio,iframe,embed,object": {
							display: "block",
							verticalAlign: "middle"
						},
						"img,video": {
							maxWidth: "100%",
							height: "auto"
						}
					}))(t),
					n = _("function" == typeof T ? k(T(e, s), s) || e : p.default({}, e, T));
				v(((e = (n.forEach(w), !0)) => e))
			}
			return {
				init: () => n.report({
					id: "LATE_SETUP_CALL"
				}, s),
				process: F
			}
		},
		ot = e => {
			let t, n = e => (r(), n(e)),
				r = e => {
					({
						process: n,
						init: r
					} = rt(e))
				};
			e && r(e);
			return {
				tw: Object.defineProperties(((...e) => n(e)), {
					theme: {
						get: (o = "theme", () => (t || n([e => (t = e, "")]), t[o]))
					}
				}),
				setup: e => r(e)
			};
			var o
		},
		{
			tw: it,
			setup: at
		} = ot()
})), o.register("fXRaV", (function(t, n) {
	e(t.exports, "classPrivateFieldGet", (function() {
		return o("9rqWZ").default
	})), e(t.exports, "classPrivateFieldInit", (function() {
		return o("dW4Qq").default
	})), e(t.exports, "classPrivateFieldSet", (function() {
		return o("h5cau").default
	})), e(t.exports, "defineProperty", (function() {
		return o("8Lcwv").default
	})), e(t.exports, "objectSpread", (function() {
		return o("dTkVo").default
	})), e(t.exports, "objectWithoutProperties", (function() {
		return o("jer2Z").default
	}));
	o("9rqWZ"), o("dW4Qq"), o("h5cau"), o("8Lcwv"), o("dTkVo"), o("jer2Z")
})), o.register("9rqWZ", (function(t, n) {
	e(t.exports, "default", (function() {
		return a
	}));
	var r = o("lRnrh"),
		i = o("iSUO2");

	function a(e, t) {
		var n = r.default(e, t, "get");
		return i.default(e, n)
	}
})), o.register("lRnrh", (function(t, n) {
	function r(e, t, n) {
		if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
		return t.get(e)
	}
	e(t.exports, "default", (function() {
		return r
	}))
})), o.register("iSUO2", (function(t, n) {
	function r(e, t) {
		return t.get ? t.get.call(e) : t.value
	}
	e(t.exports, "default", (function() {
		return r
	}))
})), o.register("dW4Qq", (function(t, n) {
	e(t.exports, "default", (function() {
		return i
	}));
	var r = o("jUhKo");

	function i(e, t, n) {
		r.default(e, t), t.set(e, n)
	}
})), o.register("jUhKo", (function(t, n) {
	function r(e, t) {
		if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
	}
	e(t.exports, "default", (function() {
		return r
	}))
})), o.register("h5cau", (function(t, n) {
	e(t.exports, "default", (function() {
		return a
	}));
	var r = o("lRnrh"),
		i = o("as4U8");

	function a(e, t, n) {
		var o = r.default(e, t, "set");
		return i.default(e, o, n), n
	}
})), o.register("as4U8", (function(t, n) {
	function r(e, t, n) {
		if (t.set) t.set.call(e, n);
		else {
			if (!t.writable) throw new TypeError("attempted to set read only private field");
			t.value = n
		}
	}
	e(t.exports, "default", (function() {
		return r
	}))
})), o.register("8Lcwv", (function(t, n) {
	function r(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
	e(t.exports, "default", (function() {
		return r
	}))
})), o.register("dTkVo", (function(t, n) {
	e(t.exports, "default", (function() {
		return i
	}));
	var r = o("8Lcwv");

	function i(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {},
				o = Object.keys(n);
			"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
				return Object.getOwnPropertyDescriptor(n, e).enumerable
			})))), o.forEach((function(t) {
				r.default(e, t, n[t])
			}))
		}
		return e
	}
})), o.register("jer2Z", (function(t, n) {
	e(t.exports, "default", (function() {
		return i
	}));
	var r = o("dXeVA");

	function i(e, t) {
		if (null == e) return {};
		var n, o, i = r.default(e, t);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
		}
		return i
	}
})), o.register("dXeVA", (function(t, n) {
	function r(e, t) {
		if (null == e) return {};
		var n, r, o = {},
			i = Object.keys(e);
		for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
		return o
	}
	e(t.exports, "default", (function() {
		return r
	}))
})), o.register("amyQ5", (function(t, n) {
	e(t.exports, "cssPropertyAlias", (function() {
		return o
	})), e(t.exports, "cssPropertyPrefixFlags", (function() {
		return i
	})), e(t.exports, "cssValuePrefixFlags", (function() {
		return a
	}));
	var r = new Map([
		["align-self", "-ms-grid-row-align"],
		["color-adjust", "-webkit-print-color-adjust"],
		["column-gap", "grid-column-gap"],
		["forced-color-adjust", "-ms-high-contrast-adjust"],
		["gap", "grid-gap"],
		["grid-template-columns", "-ms-grid-columns"],
		["grid-template-rows", "-ms-grid-rows"],
		["justify-self", "-ms-grid-column-align"],
		["margin-inline-end", "-webkit-margin-end"],
		["margin-inline-start", "-webkit-margin-start"],
		["mask-border", "-webkit-mask-box-image"],
		["mask-border-outset", "-webkit-mask-box-image-outset"],
		["mask-border-slice", "-webkit-mask-box-image-slice"],
		["mask-border-source", "-webkit-mask-box-image-source"],
		["mask-border-repeat", "-webkit-mask-box-image-repeat"],
		["mask-border-width", "-webkit-mask-box-image-width"],
		["overflow-wrap", "word-wrap"],
		["padding-inline-end", "-webkit-padding-end"],
		["padding-inline-start", "-webkit-padding-start"],
		["row-gap", "grid-row-gap"],
		["scroll-margin-bottom", "scroll-snap-margin-bottom"],
		["scroll-margin-left", "scroll-snap-margin-left"],
		["scroll-margin-right", "scroll-snap-margin-right"],
		["scroll-margin-top", "scroll-snap-margin-top"],
		["scroll-margin", "scroll-snap-margin"],
		["text-combine-upright", "-ms-text-combine-horizontal"]
	]);

	function o(e) {
		return r.get(e)
	}

	function i(e) {
		var t = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(e);
		return t ? t[1] ? 1 : t[2] ? 2 : t[3] ? 3 : 5 : 0
	}

	function a(e, t) {
		var n = /^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(e);
		return n ? n[1] ? /^sti/i.test(t) ? 1 : 0 : n[2] ? /^pat/i.test(t) ? 1 : 0 : n[3] ? /^image-/i.test(t) ? 1 : 0 : n[4] ? "-" === t[3] ? 2 : 0 : /^(?:inline-)?grid$/i.test(t) ? 4 : 0 : 0
	}
})), o.register("d2jix", (function(t, n) {
	e(t.exports, "Route", (function() {
		return _
	})), e(t.exports, "Link", (function() {
		return h
	})), e(t.exports, "Switch", (function() {
		return g
	}));
	var r = o("6ewcp"),
		i = o("9w4Zk");
	o("jgKG3");
	var a = o("kHuLW"),
		l = o("cGpfb");
	const s = a.createContext({}),
		u = ({
			hook: e = r.default,
			base: t = "",
			matcher: n = i.default()
		} = {}) => ({
			hook: e,
			base: t,
			matcher: n
		}),
		c = () => {
			const e = l.useContext(s);
			return e.v || (e.v = u())
		},
		f = () => {
			const e = c();
			return e.hook(e)
		},
		p = e => {
			const [t] = f();
			return c().matcher(e, t)
		},
		d = e => {
			const t = l.useRef(),
				[, n] = f();
			return t.current = () => n(e.to || e.href, e), t
		},
		_ = ({
			path: e,
			match: t,
			component: n,
			children: r
		}) => {
			const o = p(e),
				[i, l] = t || o;
			return i ? n ? a.createElement(n, {
				params: l
			}) : "function" == typeof r ? r(l) : r : null
		},
		h = e => {
			const t = d(e),
				{
					base: n
				} = c();
			let {
				to: r,
				href: o = r,
				children: i,
				onClick: s
			} = e;
			const u = l.useCallback((e => {
					e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), t.current(), s && s(e))
				}), [s]),
				f = {
					href: "~" === o[0] ? o.slice(1) : n + o,
					onClick: u,
					to: null
				},
				p = a.isValidElement(i) ? i : a.createElement("a", e);
			return a.cloneElement(p, f)
		},
		m = e => Array.isArray(e) ? [].concat(...e.map((e => e && e.type === a.Fragment ? m(e.props.children) : m(e)))) : [e],
		g = ({
			children: e,
			location: t
		}) => {
			const {
				matcher: n
			} = c(), [r] = f();
			for (const o of m(e)) {
				let e = 0;
				if (a.isValidElement(o) && (e = o.props.path ? n(o.props.path, t || r) : [!0, {}])[0]) return a.cloneElement(o, {
					match: e
				})
			}
			return null
		}
})), o.register("6ewcp", (function(t, n) {
	e(t.exports, "default", (function() {
		return s
	})), o("jgKG3");
	var r = o("cGpfb");
	const i = "pushState",
		a = "replaceState",
		l = ["popstate", i, a];
	var s = ({
		base: e = ""
	} = {}) => {
		const [{
			path: t,
			search: n
		}, o] = r.useState((() => ({
			path: u(e),
			search: location.search
		}))), s = r.useRef(t + n);
		r.useEffect((() => {
			const t = () => {
				const t = u(e),
					n = location.search,
					r = t + n;
				s.current !== r && (s.current = r, o({
					path: t,
					search: n
				}))
			};
			return l.forEach((e => addEventListener(e, t))), t(), () => l.forEach((e => removeEventListener(e, t)))
		}), [e]);
		return [t, r.useCallback(((t, {
			replace: n = !1
		} = {}) => history[n ? a : i](null, "", "~" === t[0] ? t.slice(1) : e + t)), [e])]
	};
	if ("undefined" != typeof history)
		for (const e of [i, a]) {
			const t = history[e];
			history[e] = function() {
				const n = t.apply(this, arguments),
					r = new Event(e);
				return r.arguments = arguments, dispatchEvent(r), n
			}
		}
	const u = (e, t = location.pathname) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/"
})), o.register("jgKG3", (function(t, n) {
	e(t.exports, "isValidElement", (function() {
		return o("kHuLW").isValidElement
	})), e(t.exports, "createContext", (function() {
		return o("kHuLW").createContext
	})), e(t.exports, "cloneElement", (function() {
		return o("kHuLW").cloneElement
	})), e(t.exports, "createElement", (function() {
		return o("kHuLW").createElement
	})), e(t.exports, "Fragment", (function() {
		return o("kHuLW").Fragment
	})), e(t.exports, "useRef", (function() {
		return o("cGpfb").useRef
	})), e(t.exports, "useEffect", (function() {
		return o("cGpfb").useEffect
	})), e(t.exports, "useLayoutEffect", (function() {
		return o("cGpfb").useLayoutEffect
	})), e(t.exports, "useState", (function() {
		return o("cGpfb").useState
	})), e(t.exports, "useContext", (function() {
		return o("cGpfb").useContext
	})), e(t.exports, "useCallback", (function() {
		return o("cGpfb").useCallback
	}));
	o("kHuLW"), o("cGpfb")
})), o.register("9w4Zk", (function(t, n) {
	function r(e = a) {
		let t = {};
		return (n, r) => {
			const {
				regexp: o,
				keys: i
			} = (n => t[n] || (t[n] = e(n)))(n || ""), a = o.exec(r);
			if (!a) return [!1, null];
			return [!0, i.reduce(((e, t, n) => (e[t.name] = a[n + 1], e)), {})]
		}
	}
	e(t.exports, "default", (function() {
		return r
	}));
	const o = e => e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
		i = (e, t, n) => {
			let r = e ? "((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)" : "([^\\/]+?)";
			return t && n && (r = "(?:\\/" + r + ")"), r + (t ? "?" : "")
		},
		a = e => {
			const t = /:([A-Za-z0-9_]+)([?+*]?)/g;
			let n = null,
				r = 0,
				a = [],
				l = "";
			for (; null !== (n = t.exec(e));) {
				const [s, u, c] = n, f = "+" === c || "*" === c, p = "?" === c || "*" === c, d = p && "/" === e[n.index - 1] ? 1 : 0, _ = e.substring(r, n.index - d);
				a.push({
					name: u
				}), r = t.lastIndex, l += o(_) + i(f, p, d)
			}
			return l += o(e.substring(r)), {
				keys: a,
				regexp: new RegExp("^" + l + "(?:\\/)?$", "i")
			}
		}
})), o.register("TnLfu", (function(e, t) {
	e.exports = Promise.all([o("hDgi1")(o("8dbT5").getBundleURL("eBPKK") + o("h67ns").resolve("7R4Ha")), o("hDgi1")(o("8dbT5").getBundleURL("eBPKK") + o("h67ns").resolve("fAeUJ"))]).then((() => o("hclcA")))
})), o.register("hDgi1", (function(e, n) {
	var r = o("d60wG");
	e.exports = r((function(e) {
		return new Promise((function(n, r) {
			var o = "i".concat(("" + Math.random()).slice(2));
			t[o] = function(e) {
				n(e), i()
			};
			var i = function() {
					delete t[o], a.onerror = null, a.remove()
				},
				a = document.createElement("script");
			a.async = !0, a.type = "module", a.charset = "utf-8", a.textContent = "import * as m from '".concat(e, "'; ").concat(o, "(m);"), a.onerror = function(e) {
				r(e), i()
			}, document.head.appendChild(a)
		}))
	}))
})), o.register("d60wG", (function(e, t) {
	var n = {},
		r = {},
		o = {};

	function i(e) {
		switch (e) {
			case "preload":
				return r;
			case "prefetch":
				return o;
			default:
				return n
		}
	}
	e.exports = function(e, t) {
		return function(n) {
			var r = i(t);
			return r[n] ? r[n] : r[n] = e.apply(null, arguments).catch((function(e) {
				throw delete r[n], e
			}))
		}
	}
})), o.register("8dbT5", (function(t, n) {
	var r;
	e(t.exports, "getBundleURL", (function() {
		return r
	}), (function(e) {
		return r = e
	}));
	var o = {};

	function i(e) {
		return ("" + e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, "$1") + "/"
	}
	r = function(e) {
		var t = o[e];
		return t || (t = function() {
			try {
				throw new Error
			} catch (t) {
				var e = ("" + t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
				if (e) return i(e[2])
			}
			return "/"
		}(), o[e] = t), t
	}
})), o.register("6FjUk", (function(e, t) {
	e.exports = Promise.all([o("hDgi1")(o("8dbT5").getBundleURL("eBPKK") + o("h67ns").resolve("5uVQj")), o("hDgi1")(o("8dbT5").getBundleURL("eBPKK") + o("h67ns").resolve("7R4Ha")), o("hDgi1")(o("8dbT5").getBundleURL("eBPKK") + o("h67ns").resolve("fypve"))]).then((() => o("89UXp")))
})), o.register("dvDcB", (function(e, t) {
	e.exports = Promise.all([o("hDgi1")(o("8dbT5").getBundleURL("eBPKK") + o("h67ns").resolve("5uVQj")), o("hDgi1")(o("8dbT5").getBundleURL("eBPKK") + o("h67ns").resolve("7R4Ha")), o("hDgi1")(o("8dbT5").getBundleURL("eBPKK") + o("h67ns").resolve("blhMM"))]).then((() => o("ie13L")))
})), o("h67ns").register(JSON.parse('{"eBPKK":"index.e84f8092.js","fAeUJ":"simple.a882bd27.js","7R4Ha":"simple.1d055ed1.js","fypve":"main.0d3f29a3.js","5uVQj":"main.e70b8201.js","blhMM":"multi.f6f37ce1.js"}'));
var i = o("HnoUg"),
	a = o("kHuLW"),
	l = o("im1kx"),
	s = o("bh4jq"),
	u = (i = o("HnoUg"), o("cGpfb"));
s = o("bh4jq");
const c = () => (u.useEffect((() => {
	document.title = "404 | Sukka"
}), []), i.jsx("div", {
	className: s.tw("m-0 select-none absolute top-0 left-0 right-0 bottom-0 flex(& col) px-5"),
	children: i.jsxs("div", {
		className: s.tw("h-full flex(& col) justify-center items-center"),
		children: [i.jsxs("div", {
			className: s.tw("flex(& row) justify-center items-center h-10"),
			children: [i.jsx("span", {
				className: s.tw("text([28px] center) font-medium block border-r px-5 w-auto h-full leading-10"),
				children: "404"
			}), i.jsx("p", {
				className: s.tw("h-full leading-10 text-sm font-normal m-0 pl-5"),
				children: "Not Found"
			})]
		}), i.jsx("div", {
			className: s.tw("text-center"),
			children: i.jsx("p", {
				className: s.tw("my-3"),
				children: "The requested resources is not available"
			})
		})]
	})
}));
var f = o("d2jix");
const p = l.lazy((() => o("TnLfu").then((e => ({
		default: e.Simple
	}))))),
	d = l.lazy((() => o("6FjUk").then((e => ({
		default: e.Main
	}))))),
	_ = l.lazy((() => o("dvDcB").then((e => ({
		default: e.MultiIP
	})))));
s.setup({
	hash: !0
}), Math.imul || (Math.imul = function(e, t) {
	let n = (4194303 & e) * (t |= 0);
	return 4290772992 /*!== 0*/ & e && (n += (4290772992 & e) * t | 0), 0 | n
});
const h = () => i.jsxs(f.Switch, {
	children: [i.jsx(f.Route, {
		path: "/simple",
		children: i.jsx(l.Suspense, {
			fallback: i.jsx("div", {
				children: "Loading..."
			}),
			children: i.jsx(p, {})
		})
	}), i.jsx(f.Route, {
		path: "/multi",
		children: i.jsx(l.Suspense, {
			fallback: i.jsx("div", {
				children: "Loading..."
			}),
			children: i.jsx(_, {})
		})
	}), i.jsx(f.Route, {
		path: "/",
		children: i.jsx(l.Suspense, {
			fallback: i.jsx("div", {
				children: "Loading..."
			}),
			children: i.jsx(d, {})
		})
	}), i.jsx(f.Route, {
		children: i.jsx(l.Suspense, {
			fallback: i.jsx("div", {
				children: "Loading..."
			}),
			children: i.jsx(c, {})
		})
	})]
});
a.render(i.jsx(h, {}), document.getElementById("app"));