var RaindropFX = (() => {
	debugger
	var mc = Object.create,
		Tr = Object.defineProperty,
		gc = Object.getPrototypeOf,
		Mc = Object.prototype.hasOwnProperty,
		yc = Object.getOwnPropertyNames,
		Ln = Object.getOwnPropertyDescriptor;
	var xc = e => Tr(e, "__esModule", {
		value: !0
	});
	var R = (e, t) => () => (t || (t = {
		exports: {}
	}, e(t.exports, t)), t.exports);
	var _c = (e, t, r) => {
			if (t && typeof t == "object" || typeof t == "function")
				for (let i of yc(t)) !Mc.call(e, i) && i !== "default" && Tr(e, i, {
					get: () => t[i],
					enumerable: !(r = Ln(t, i)) || r.enumerable
				});
			return e
		},
		Qt = e => e && e.__esModule ? e : _c(xc(Tr(e != null ? mc(gc(e)) : {}, "default", {
			value: e,
			enumerable: !0
		})), e),
		ie = (e, t, r, i) => {
			for (var n = i > 1 ? void 0 : i ? Ln(t, r) : t, s = e.length - 1, a; s >= 0; s--)(a = e[s]) && (n =
				(i ? a(t, r, n) : a(n)) || n);
			return i && n && Tr(t, r, n), n
		};
	var Bn = (() => {
		for (var e = new Uint8Array(128), t = 0; t < 64; t++) e[t < 26 ? t + 65 : t < 52 ? t + 71 : t <
			62 ? t - 4 : t * 4 - 205] = t;
		return r => {
			for (var i = r.length, n = new Uint8Array((i - (r[i - 1] == "=") - (r[i - 2] == "=")) *
					3 / 4 | 0), s = 0, a = 0; s < i;) {
				var o = e[r.charCodeAt(s++)],
					c = e[r.charCodeAt(s++)],
					l = e[r.charCodeAt(s++)],
					h = e[r.charCodeAt(s++)];
				n[a++] = o << 2 | c >> 4, n[a++] = c << 4 | l >> 2, n[a++] = l << 6 | h
			}
			return n
		}
	})();
	var Xe = R(Ge => {
		"use strict";
		Object.defineProperty(Ge, "__esModule", {
			value: !0
		});
		Ge.setMatrixArrayType = bc;
		Ge.toRadian = Rc;
		Ge.equals = wc;
		Ge.RANDOM = Ge.ARRAY_TYPE = Ge.EPSILON = void 0;
		var Cn = 1e-6;
		Ge.EPSILON = Cn;
		var qn = typeof Float32Array != "undefined" ? Float32Array : Array;
		Ge.ARRAY_TYPE = qn;
		var Tc = Math.random;
		Ge.RANDOM = Tc;

		function bc(e) {
			Ge.ARRAY_TYPE = qn = e
		}
		var Pc = Math.PI / 180;

		function Rc(e) {
			return e * Pc
		}

		function wc(e, t) {
			return Math.abs(e - t) <= Cn * Math.max(1, Math.abs(e), Math.abs(t))
		}
		Math.hypot || (Math.hypot = function() {
			for (var e = 0, t = arguments.length; t--;) e += arguments[t] * arguments[t];
			return Math.sqrt(e)
		})
	});
	var Nn = R(H => {
		"use strict";

		function Pr(e) {
			return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pr = function(
			r) {
				return typeof r
			} : Pr = function(r) {
				return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol
					.prototype ? "symbol" : typeof r
			}, Pr(e)
		}
		Object.defineProperty(H, "__esModule", {
			value: !0
		});
		H.create = Ac;
		H.clone = Ec;
		H.copy = Sc;
		H.identity = Oc;
		H.fromValues = Dc;
		H.set = Lc;
		H.transpose = Bc;
		H.invert = Cc;
		H.adjoint = qc;
		H.determinant = Ic;
		H.multiply = In;
		H.rotate = zc;
		H.scale = Fc;
		H.fromRotation = Nc;
		H.fromScaling = Gc;
		H.str = Uc;
		H.frob = Vc;
		H.LDU = kc;
		H.add = Yc;
		H.subtract = zn;
		H.exactEquals = Wc;
		H.equals = jc;
		H.multiplyScalar = Hc;
		H.multiplyScalarAndAdd = Xc;
		H.sub = H.mul = void 0;
		var pt = Qc(Xe());

		function Fn() {
			if (typeof WeakMap != "function") return null;
			var e = new WeakMap;
			return Fn = function() {
				return e
			}, e
		}

		function Qc(e) {
			if (e && e.__esModule) return e;
			if (e === null || Pr(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var t = Fn();
			if (t && t.has(e)) return t.get(e);
			var r = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
					s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n]
				} return r.default = e, t && t.set(e, r), r
		}

		function Ac() {
			var e = new pt.ARRAY_TYPE(4);
			return pt.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0), e[0] = 1, e[3] = 1, e
		}

		function Ec(e) {
			var t = new pt.ARRAY_TYPE(4);
			return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
		}

		function Sc(e, t) {
			return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
		}

		function Oc(e) {
			return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e
		}

		function Dc(e, t, r, i) {
			var n = new pt.ARRAY_TYPE(4);
			return n[0] = e, n[1] = t, n[2] = r, n[3] = i, n
		}

		function Lc(e, t, r, i, n) {
			return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e
		}

		function Bc(e, t) {
			if (e === t) {
				var r = t[1];
				e[1] = t[2], e[2] = r
			} else e[0] = t[0], e[1] = t[2], e[2] = t[1], e[3] = t[3];
			return e
		}

		function Cc(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = r * s - n * i;
			return a ? (a = 1 / a, e[0] = s * a, e[1] = -i * a, e[2] = -n * a, e[3] = r * a, e) : null
		}

		function qc(e, t) {
			var r = t[0];
			return e[0] = t[3], e[1] = -t[1], e[2] = -t[2], e[3] = r, e
		}

		function Ic(e) {
			return e[0] * e[3] - e[2] * e[1]
		}

		function In(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = r[0],
				c = r[1],
				l = r[2],
				h = r[3];
			return e[0] = i * o + s * c, e[1] = n * o + a * c, e[2] = i * l + s * h, e[3] = n * l + a *
				h, e
		}

		function zc(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = Math.sin(r),
				c = Math.cos(r);
			return e[0] = i * c + s * o, e[1] = n * c + a * o, e[2] = i * -o + s * c, e[3] = n * -o +
				a * c, e
		}

		function Fc(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = r[0],
				c = r[1];
			return e[0] = i * o, e[1] = n * o, e[2] = s * c, e[3] = a * c, e
		}

		function Nc(e, t) {
			var r = Math.sin(t),
				i = Math.cos(t);
			return e[0] = i, e[1] = r, e[2] = -r, e[3] = i, e
		}

		function Gc(e, t) {
			return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e
		}

		function Uc(e) {
			return "mat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
		}

		function Vc(e) {
			return Math.hypot(e[0], e[1], e[2], e[3])
		}

		function kc(e, t, r, i) {
			return e[2] = i[2] / i[0], r[0] = i[0], r[1] = i[1], r[3] = i[3] - e[2] * r[1], [e, t, r]
		}

		function Yc(e, t, r) {
			return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e
		}

		function zn(e, t, r) {
			return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e
		}

		function Wc(e, t) {
			return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]
		}

		function jc(e, t) {
			var r = e[0],
				i = e[1],
				n = e[2],
				s = e[3],
				a = t[0],
				o = t[1],
				c = t[2],
				l = t[3];
			return Math.abs(r - a) <= pt.EPSILON * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(i -
					o) <= pt.EPSILON * Math.max(1, Math.abs(i), Math.abs(o)) && Math.abs(n - c) <= pt
				.EPSILON * Math.max(1, Math.abs(n), Math.abs(c)) && Math.abs(s - l) <= pt.EPSILON * Math
				.max(1, Math.abs(s), Math.abs(l))
		}

		function Hc(e, t, r) {
			return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e
		}

		function Xc(e, t, r, i) {
			return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e[3] = t[3] +
				r[3] * i, e
		}
		var $c = In;
		H.mul = $c;
		var Zc = zn;
		H.sub = Zc
	});
	var kn = R($ => {
		"use strict";

		function Ar(e) {
			return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ar = function(
			r) {
				return typeof r
			} : Ar = function(r) {
				return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol
					.prototype ? "symbol" : typeof r
			}, Ar(e)
		}
		Object.defineProperty($, "__esModule", {
			value: !0
		});
		$.create = Jc;
		$.clone = Kc;
		$.copy = el;
		$.identity = tl;
		$.fromValues = rl;
		$.set = il;
		$.invert = nl;
		$.determinant = sl;
		$.multiply = Gn;
		$.rotate = al;
		$.scale = ol;
		$.translate = cl;
		$.fromRotation = ll;
		$.fromScaling = hl;
		$.fromTranslation = ul;
		$.str = fl;
		$.frob = dl;
		$.add = vl;
		$.subtract = Un;
		$.multiplyScalar = pl;
		$.multiplyScalarAndAdd = ml;
		$.exactEquals = gl;
		$.equals = Ml;
		$.sub = $.mul = void 0;
		var Je = yl(Xe());

		function Vn() {
			if (typeof WeakMap != "function") return null;
			var e = new WeakMap;
			return Vn = function() {
				return e
			}, e
		}

		function yl(e) {
			if (e && e.__esModule) return e;
			if (e === null || Ar(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var t = Vn();
			if (t && t.has(e)) return t.get(e);
			var r = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
					s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n]
				} return r.default = e, t && t.set(e, r), r
		}

		function Jc() {
			var e = new Je.ARRAY_TYPE(6);
			return Je.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0, e[4] = 0, e[5] = 0), e[0] = 1,
				e[3] = 1, e
		}

		function Kc(e) {
			var t = new Je.ARRAY_TYPE(6);
			return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
		}

		function el(e, t) {
			return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
		}

		function tl(e) {
			return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
		}

		function rl(e, t, r, i, n, s) {
			var a = new Je.ARRAY_TYPE(6);
			return a[0] = e, a[1] = t, a[2] = r, a[3] = i, a[4] = n, a[5] = s, a
		}

		function il(e, t, r, i, n, s, a) {
			return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e[4] = s, e[5] = a, e
		}

		function nl(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = t[4],
				o = t[5],
				c = r * s - i * n;
			return c ? (c = 1 / c, e[0] = s * c, e[1] = -i * c, e[2] = -n * c, e[3] = r * c, e[4] = (n *
				o - s * a) * c, e[5] = (i * a - r * o) * c, e) : null
		}

		function sl(e) {
			return e[0] * e[3] - e[1] * e[2]
		}

		function Gn(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = r[0],
				h = r[1],
				u = r[2],
				d = r[3],
				f = r[4],
				m = r[5];
			return e[0] = i * l + s * h, e[1] = n * l + a * h, e[2] = i * u + s * d, e[3] = n * u + a *
				d, e[4] = i * f + s * m + o, e[5] = n * f + a * m + c, e
		}

		function al(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = Math.sin(r),
				h = Math.cos(r);
			return e[0] = i * h + s * l, e[1] = n * h + a * l, e[2] = i * -l + s * h, e[3] = n * -l +
				a * h, e[4] = o, e[5] = c, e
		}

		function ol(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = r[0],
				h = r[1];
			return e[0] = i * l, e[1] = n * l, e[2] = s * h, e[3] = a * h, e[4] = o, e[5] = c, e
		}

		function cl(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = r[0],
				h = r[1];
			return e[0] = i, e[1] = n, e[2] = s, e[3] = a, e[4] = i * l + s * h + o, e[5] = n * l + a *
				h + c, e
		}

		function ll(e, t) {
			var r = Math.sin(t),
				i = Math.cos(t);
			return e[0] = i, e[1] = r, e[2] = -r, e[3] = i, e[4] = 0, e[5] = 0, e
		}

		function hl(e, t) {
			return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e[4] = 0, e[5] = 0, e
		}

		function ul(e, t) {
			return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = t[0], e[5] = t[1], e
		}

		function fl(e) {
			return "mat2d(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[
				5] + ")"
		}

		function dl(e) {
			return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], 1)
		}

		function vl(e, t, r) {
			return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e[
				4] = t[4] + r[4], e[5] = t[5] + r[5], e
		}

		function Un(e, t, r) {
			return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e[
				4] = t[4] - r[4], e[5] = t[5] - r[5], e
		}

		function pl(e, t, r) {
			return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * r,
				e[5] = t[5] * r, e
		}

		function ml(e, t, r, i) {
			return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e[3] = t[3] +
				r[3] * i, e[4] = t[4] + r[4] * i, e[5] = t[5] + r[5] * i, e
		}

		function gl(e, t) {
			return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] &&
				e[5] === t[5]
		}

		function Ml(e, t) {
			var r = e[0],
				i = e[1],
				n = e[2],
				s = e[3],
				a = e[4],
				o = e[5],
				c = t[0],
				l = t[1],
				h = t[2],
				u = t[3],
				d = t[4],
				f = t[5];
			return Math.abs(r - c) <= Je.EPSILON * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(i -
					l) <= Je.EPSILON * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(n - h) <= Je
				.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(s - u) <= Je.EPSILON * Math
				.max(1, Math.abs(s), Math.abs(u)) && Math.abs(a - d) <= Je.EPSILON * Math.max(1, Math
					.abs(a), Math.abs(d)) && Math.abs(o - f) <= Je.EPSILON * Math.max(1, Math.abs(o),
					Math.abs(f))
		}
		var xl = Gn;
		$.mul = xl;
		var _l = Un;
		$.sub = _l
	});
	var Oi = R(G => {
		"use strict";

		function Er(e) {
			return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Er = function(
			r) {
				return typeof r
			} : Er = function(r) {
				return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol
					.prototype ? "symbol" : typeof r
			}, Er(e)
		}
		Object.defineProperty(G, "__esModule", {
			value: !0
		});
		G.create = bl;
		G.fromMat4 = Rl;
		G.clone = wl;
		G.copy = Tl;
		G.fromValues = Pl;
		G.set = Al;
		G.identity = El;
		G.transpose = Sl;
		G.invert = Ol;
		G.adjoint = Dl;
		G.determinant = Ll;
		G.multiply = Yn;
		G.translate = Bl;
		G.rotate = Cl;
		G.scale = ql;
		G.fromTranslation = Il;
		G.fromRotation = zl;
		G.fromScaling = Fl;
		G.fromMat2d = Nl;
		G.fromQuat = Gl;
		G.normalFromMat4 = Ul;
		G.projection = Vl;
		G.str = kl;
		G.frob = Yl;
		G.add = Wl;
		G.subtract = Wn;
		G.multiplyScalar = jl;
		G.multiplyScalarAndAdd = Hl;
		G.exactEquals = Xl;
		G.equals = Ql;
		G.sub = G.mul = void 0;
		var qe = $l(Xe());

		function jn() {
			if (typeof WeakMap != "function") return null;
			var e = new WeakMap;
			return jn = function() {
				return e
			}, e
		}

		function $l(e) {
			if (e && e.__esModule) return e;
			if (e === null || Er(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var t = jn();
			if (t && t.has(e)) return t.get(e);
			var r = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
					s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n]
				} return r.default = e, t && t.set(e, r), r
		}

		function bl() {
			var e = new qe.ARRAY_TYPE(9);
			return qe.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[5] = 0, e[6] = 0,
				e[7] = 0), e[0] = 1, e[4] = 1, e[8] = 1, e
		}

		function Rl(e, t) {
			return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] =
				t[8], e[7] = t[9], e[8] = t[10], e
		}

		function wl(e) {
			var t = new qe.ARRAY_TYPE(9);
			return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] =
				e[6], t[7] = e[7], t[8] = e[8], t
		}

		function Tl(e, t) {
			return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] =
				t[6], e[7] = t[7], e[8] = t[8], e
		}

		function Pl(e, t, r, i, n, s, a, o, c) {
			var l = new qe.ARRAY_TYPE(9);
			return l[0] = e, l[1] = t, l[2] = r, l[3] = i, l[4] = n, l[5] = s, l[6] = a, l[7] = o, l[
				8] = c, l
		}

		function Al(e, t, r, i, n, s, a, o, c, l) {
			return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e[4] = s, e[5] = a, e[6] = o, e[7] = c, e[
				8] = l, e
		}

		function El(e) {
			return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[
				8] = 1, e
		}

		function Sl(e, t) {
			if (e === t) {
				var r = t[1],
					i = t[2],
					n = t[5];
				e[1] = t[3], e[2] = t[6], e[3] = r, e[5] = t[7], e[6] = i, e[7] = n
			} else e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] =
				t[2], e[7] = t[5], e[8] = t[8];
			return e
		}

		function Ol(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = t[4],
				o = t[5],
				c = t[6],
				l = t[7],
				h = t[8],
				u = h * a - o * l,
				d = -h * s + o * c,
				f = l * s - a * c,
				m = r * u + i * d + n * f;
			return m ? (m = 1 / m, e[0] = u * m, e[1] = (-h * i + n * l) * m, e[2] = (o * i - n * a) *
				m, e[3] = d * m, e[4] = (h * r - n * c) * m, e[5] = (-o * r + n * s) * m, e[6] = f *
				m, e[7] = (-l * r + i * c) * m, e[8] = (a * r - i * s) * m, e) : null
		}

		function Dl(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = t[4],
				o = t[5],
				c = t[6],
				l = t[7],
				h = t[8];
			return e[0] = a * h - o * l, e[1] = n * l - i * h, e[2] = i * o - n * a, e[3] = o * c - s *
				h, e[4] = r * h - n * c, e[5] = n * s - r * o, e[6] = s * l - a * c, e[7] = i * c - r *
				l, e[8] = r * a - i * s, e
		}

		function Ll(e) {
			var t = e[0],
				r = e[1],
				i = e[2],
				n = e[3],
				s = e[4],
				a = e[5],
				o = e[6],
				c = e[7],
				l = e[8];
			return t * (l * s - a * c) + r * (-l * n + a * o) + i * (c * n - s * o)
		}

		function Yn(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = t[6],
				h = t[7],
				u = t[8],
				d = r[0],
				f = r[1],
				m = r[2],
				M = r[3],
				v = r[4],
				x = r[5],
				A = r[6],
				T = r[7],
				E = r[8];
			return e[0] = d * i + f * a + m * l, e[1] = d * n + f * o + m * h, e[2] = d * s + f * c +
				m * u, e[3] = M * i + v * a + x * l, e[4] = M * n + v * o + x * h, e[5] = M * s + v *
				c + x * u, e[6] = A * i + T * a + E * l, e[7] = A * n + T * o + E * h, e[8] = A * s +
				T * c + E * u, e
		}

		function Bl(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = t[6],
				h = t[7],
				u = t[8],
				d = r[0],
				f = r[1];
			return e[0] = i, e[1] = n, e[2] = s, e[3] = a, e[4] = o, e[5] = c, e[6] = d * i + f * a + l,
				e[7] = d * n + f * o + h, e[8] = d * s + f * c + u, e
		}

		function Cl(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = t[6],
				h = t[7],
				u = t[8],
				d = Math.sin(r),
				f = Math.cos(r);
			return e[0] = f * i + d * a, e[1] = f * n + d * o, e[2] = f * s + d * c, e[3] = f * a - d *
				i, e[4] = f * o - d * n, e[5] = f * c - d * s, e[6] = l, e[7] = h, e[8] = u, e
		}

		function ql(e, t, r) {
			var i = r[0],
				n = r[1];
			return e[0] = i * t[0], e[1] = i * t[1], e[2] = i * t[2], e[3] = n * t[3], e[4] = n * t[4],
				e[5] = n * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
		}

		function Il(e, t) {
			return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = t[0], e[7] = t[1],
				e[8] = 1, e
		}

		function zl(e, t) {
			var r = Math.sin(t),
				i = Math.cos(t);
			return e[0] = i, e[1] = r, e[2] = 0, e[3] = -r, e[4] = i, e[5] = 0, e[6] = 0, e[7] = 0, e[
				8] = 1, e
		}

		function Fl(e, t) {
			return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = t[1], e[5] = 0, e[6] = 0, e[7] = 0,
				e[8] = 1, e
		}

		function Nl(e, t) {
			return e[0] = t[0], e[1] = t[1], e[2] = 0, e[3] = t[2], e[4] = t[3], e[5] = 0, e[6] = t[4],
				e[7] = t[5], e[8] = 1, e
		}

		function Gl(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = r + r,
				o = i + i,
				c = n + n,
				l = r * a,
				h = i * a,
				u = i * o,
				d = n * a,
				f = n * o,
				m = n * c,
				M = s * a,
				v = s * o,
				x = s * c;
			return e[0] = 1 - u - m, e[3] = h - x, e[6] = d + v, e[1] = h + x, e[4] = 1 - l - m, e[7] =
				f - M, e[2] = d - v, e[5] = f + M, e[8] = 1 - l - u, e
		}

		function Ul(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = t[4],
				o = t[5],
				c = t[6],
				l = t[7],
				h = t[8],
				u = t[9],
				d = t[10],
				f = t[11],
				m = t[12],
				M = t[13],
				v = t[14],
				x = t[15],
				A = r * o - i * a,
				T = r * c - n * a,
				E = r * l - s * a,
				L = i * c - n * o,
				D = i * l - s * o,
				ee = n * l - s * c,
				Z = h * M - u * m,
				J = h * v - d * m,
				Q = h * x - f * m,
				re = u * v - d * M,
				j = u * x - f * M,
				te = d * x - f * v,
				z = A * te - T * j + E * re + L * Q - D * J + ee * Z;
			return z ? (z = 1 / z, e[0] = (o * te - c * j + l * re) * z, e[1] = (c * Q - a * te - l *
				J) * z, e[2] = (a * j - o * Q + l * Z) * z, e[3] = (n * j - i * te - s * re) * z, e[
					4] = (r * te - n * Q + s * J) * z, e[5] = (i * Q - r * j - s * Z) * z, e[6] = (
					M * ee - v * D + x * L) * z, e[7] = (v * E - m * ee - x * T) * z, e[8] = (m *
					D - M * E + x * A) * z, e) : null
		}

		function Vl(e, t, r) {
			return e[0] = 2 / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = -2 / r, e[5] = 0, e[6] = -1, e[
				7] = 1, e[8] = 1, e
		}

		function kl(e) {
			return "mat3(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[
				5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ")"
		}

		function Yl(e) {
			return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8])
		}

		function Wl(e, t, r) {
			return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e[
				4] = t[4] + r[4], e[5] = t[5] + r[5], e[6] = t[6] + r[6], e[7] = t[7] + r[7], e[8] = t[
					8] + r[8], e
		}

		function Wn(e, t, r) {
			return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e[
				4] = t[4] - r[4], e[5] = t[5] - r[5], e[6] = t[6] - r[6], e[7] = t[7] - r[7], e[8] = t[
					8] - r[8], e
		}

		function jl(e, t, r) {
			return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * r,
				e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * r, e
		}

		function Hl(e, t, r, i) {
			return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e[3] = t[3] +
				r[3] * i, e[4] = t[4] + r[4] * i, e[5] = t[5] + r[5] * i, e[6] = t[6] + r[6] * i, e[7] =
				t[7] + r[7] * i, e[8] = t[8] + r[8] * i, e
		}

		function Xl(e, t) {
			return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] &&
				e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8]
		}

		function Ql(e, t) {
			var r = e[0],
				i = e[1],
				n = e[2],
				s = e[3],
				a = e[4],
				o = e[5],
				c = e[6],
				l = e[7],
				h = e[8],
				u = t[0],
				d = t[1],
				f = t[2],
				m = t[3],
				M = t[4],
				v = t[5],
				x = t[6],
				A = t[7],
				T = t[8];
			return Math.abs(r - u) <= qe.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(i -
					d) <= qe.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(n - f) <= qe
				.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(s - m) <= qe.EPSILON * Math
				.max(1, Math.abs(s), Math.abs(m)) && Math.abs(a - M) <= qe.EPSILON * Math.max(1, Math
					.abs(a), Math.abs(M)) && Math.abs(o - v) <= qe.EPSILON * Math.max(1, Math.abs(o),
					Math.abs(v)) && Math.abs(c - x) <= qe.EPSILON * Math.max(1, Math.abs(c), Math.abs(
					x)) && Math.abs(l - A) <= qe.EPSILON * Math.max(1, Math.abs(l), Math.abs(A)) && Math
				.abs(h - T) <= qe.EPSILON * Math.max(1, Math.abs(h), Math.abs(T))
		}
		var Zl = Yn;
		G.mul = Zl;
		var Jl = Wn;
		G.sub = Jl
	});
	var Di = R(B => {
		"use strict";

		function Sr(e) {
			return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Sr = function(
			r) {
				return typeof r
			} : Sr = function(r) {
				return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol
					.prototype ? "symbol" : typeof r
			}, Sr(e)
		}
		Object.defineProperty(B, "__esModule", {
			value: !0
		});
		B.create = Kl;
		B.clone = eh;
		B.copy = th;
		B.fromValues = rh;
		B.set = ih;
		B.identity = Hn;
		B.transpose = nh;
		B.invert = sh;
		B.adjoint = ah;
		B.determinant = oh;
		B.multiply = Xn;
		B.translate = ch;
		B.scale = lh;
		B.rotate = hh;
		B.rotateX = uh;
		B.rotateY = fh;
		B.rotateZ = dh;
		B.fromTranslation = vh;
		B.fromScaling = ph;
		B.fromRotation = mh;
		B.fromXRotation = gh;
		B.fromYRotation = Mh;
		B.fromZRotation = yh;
		B.fromRotationTranslation = Qn;
		B.fromQuat2 = xh;
		B.getTranslation = _h;
		B.getScaling = $n;
		B.getRotation = bh;
		B.fromRotationTranslationScale = Rh;
		B.fromRotationTranslationScaleOrigin = wh;
		B.fromQuat = Th;
		B.frustum = Ph;
		B.perspective = Ah;
		B.perspectiveFromFieldOfView = Eh;
		B.ortho = Sh;
		B.lookAt = Oh;
		B.targetTo = Dh;
		B.str = Lh;
		B.frob = Bh;
		B.add = Ch;
		B.subtract = Zn;
		B.multiplyScalar = qh;
		B.multiplyScalarAndAdd = Ih;
		B.exactEquals = zh;
		B.equals = Fh;
		B.sub = B.mul = void 0;
		var K = Nh(Xe());

		function Jn() {
			if (typeof WeakMap != "function") return null;
			var e = new WeakMap;
			return Jn = function() {
				return e
			}, e
		}

		function Nh(e) {
			if (e && e.__esModule) return e;
			if (e === null || Sr(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var t = Jn();
			if (t && t.has(e)) return t.get(e);
			var r = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
					s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n]
				} return r.default = e, t && t.set(e, r), r
		}

		function Kl() {
			var e = new K.ARRAY_TYPE(16);
			return K.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[
					7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1,
				e[5] = 1, e[10] = 1, e[15] = 1, e
		}

		function eh(e) {
			var t = new K.ARRAY_TYPE(16);
			return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] =
				e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[
				12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
		}

		function th(e, t) {
			return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] =
				t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[
				12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
		}

		function rh(e, t, r, i, n, s, a, o, c, l, h, u, d, f, m, M) {
			var v = new K.ARRAY_TYPE(16);
			return v[0] = e, v[1] = t, v[2] = r, v[3] = i, v[4] = n, v[5] = s, v[6] = a, v[7] = o, v[
				8] = c, v[9] = l, v[10] = h, v[11] = u, v[12] = d, v[13] = f, v[14] = m, v[15] = M, v
		}

		function ih(e, t, r, i, n, s, a, o, c, l, h, u, d, f, m, M, v) {
			return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e[4] = s, e[5] = a, e[6] = o, e[7] = c, e[
				8] = l, e[9] = h, e[10] = u, e[11] = d, e[12] = f, e[13] = m, e[14] = M, e[15] = v, e
		}

		function Hn(e) {
			return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[
				8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
		}

		function nh(e, t) {
			if (e === t) {
				var r = t[1],
					i = t[2],
					n = t[3],
					s = t[6],
					a = t[7],
					o = t[11];
				e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = r, e[6] = t[9], e[7] = t[13], e[8] = i,
					e[9] = s, e[11] = t[14], e[12] = n, e[13] = a, e[14] = o
			} else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] =
				t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[
				3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
			return e
		}

		function sh(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = t[4],
				o = t[5],
				c = t[6],
				l = t[7],
				h = t[8],
				u = t[9],
				d = t[10],
				f = t[11],
				m = t[12],
				M = t[13],
				v = t[14],
				x = t[15],
				A = r * o - i * a,
				T = r * c - n * a,
				E = r * l - s * a,
				L = i * c - n * o,
				D = i * l - s * o,
				ee = n * l - s * c,
				Z = h * M - u * m,
				J = h * v - d * m,
				Q = h * x - f * m,
				re = u * v - d * M,
				j = u * x - f * M,
				te = d * x - f * v,
				z = A * te - T * j + E * re + L * Q - D * J + ee * Z;
			return z ? (z = 1 / z, e[0] = (o * te - c * j + l * re) * z, e[1] = (n * j - i * te - s *
					re) * z, e[2] = (M * ee - v * D + x * L) * z, e[3] = (d * D - u * ee - f * L) *
				z, e[4] = (c * Q - a * te - l * J) * z, e[5] = (r * te - n * Q + s * J) * z, e[6] =
				(v * E - m * ee - x * T) * z, e[7] = (h * ee - d * E + f * T) * z, e[8] = (a * j -
					o * Q + l * Z) * z, e[9] = (i * Q - r * j - s * Z) * z, e[10] = (m * D - M * E +
					x * A) * z, e[11] = (u * E - h * D - f * A) * z, e[12] = (o * J - a * re - c *
					Z) * z, e[13] = (r * re - i * J + n * Z) * z, e[14] = (M * T - m * L - v * A) *
				z, e[15] = (h * L - u * T + d * A) * z, e) : null
		}

		function ah(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = t[4],
				o = t[5],
				c = t[6],
				l = t[7],
				h = t[8],
				u = t[9],
				d = t[10],
				f = t[11],
				m = t[12],
				M = t[13],
				v = t[14],
				x = t[15];
			return e[0] = o * (d * x - f * v) - u * (c * x - l * v) + M * (c * f - l * d), e[1] = -(i *
					(d * x - f * v) - u * (n * x - s * v) + M * (n * f - s * d)), e[2] = i * (c * x -
					l * v) - o * (n * x - s * v) + M * (n * l - s * c), e[3] = -(i * (c * f - l * d) -
					o * (n * f - s * d) + u * (n * l - s * c)), e[4] = -(a * (d * x - f * v) - h * (c *
					x - l * v) + m * (c * f - l * d)), e[5] = r * (d * x - f * v) - h * (n * x - s *
				v) + m * (n * f - s * d), e[6] = -(r * (c * x - l * v) - a * (n * x - s * v) + m * (n *
					l - s * c)), e[7] = r * (c * f - l * d) - a * (n * f - s * d) + h * (n * l - s * c),
				e[8] = a * (u * x - f * M) - h * (o * x - l * M) + m * (o * f - l * u), e[9] = -(r * (
					u * x - f * M) - h * (i * x - s * M) + m * (i * f - s * u)), e[10] = r * (o * x -
					l * M) - a * (i * x - s * M) + m * (i * l - s * o), e[11] = -(r * (o * f - l * u) -
					a * (i * f - s * u) + h * (i * l - s * o)), e[12] = -(a * (u * v - d * M) - h * (o *
					v - c * M) + m * (o * d - c * u)), e[13] = r * (u * v - d * M) - h * (i * v - n *
				M) + m * (i * d - n * u), e[14] = -(r * (o * v - c * M) - a * (i * v - n * M) + m * (i *
					c - n * o)), e[15] = r * (o * d - c * u) - a * (i * d - n * u) + h * (i * c - n *
				o), e
		}

		function oh(e) {
			var t = e[0],
				r = e[1],
				i = e[2],
				n = e[3],
				s = e[4],
				a = e[5],
				o = e[6],
				c = e[7],
				l = e[8],
				h = e[9],
				u = e[10],
				d = e[11],
				f = e[12],
				m = e[13],
				M = e[14],
				v = e[15],
				x = t * a - r * s,
				A = t * o - i * s,
				T = t * c - n * s,
				E = r * o - i * a,
				L = r * c - n * a,
				D = i * c - n * o,
				ee = l * m - h * f,
				Z = l * M - u * f,
				J = l * v - d * f,
				Q = h * M - u * m,
				re = h * v - d * m,
				j = u * v - d * M;
			return x * j - A * re + T * Q + E * J - L * Z + D * ee
		}

		function Xn(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = t[6],
				h = t[7],
				u = t[8],
				d = t[9],
				f = t[10],
				m = t[11],
				M = t[12],
				v = t[13],
				x = t[14],
				A = t[15],
				T = r[0],
				E = r[1],
				L = r[2],
				D = r[3];
			return e[0] = T * i + E * o + L * u + D * M, e[1] = T * n + E * c + L * d + D * v, e[2] =
				T * s + E * l + L * f + D * x, e[3] = T * a + E * h + L * m + D * A, T = r[4], E = r[5],
				L = r[6], D = r[7], e[4] = T * i + E * o + L * u + D * M, e[5] = T * n + E * c + L * d +
				D * v, e[6] = T * s + E * l + L * f + D * x, e[7] = T * a + E * h + L * m + D * A, T =
				r[8], E = r[9], L = r[10], D = r[11], e[8] = T * i + E * o + L * u + D * M, e[9] = T *
				n + E * c + L * d + D * v, e[10] = T * s + E * l + L * f + D * x, e[11] = T * a + E *
				h + L * m + D * A, T = r[12], E = r[13], L = r[14], D = r[15], e[12] = T * i + E * o +
				L * u + D * M, e[13] = T * n + E * c + L * d + D * v, e[14] = T * s + E * l + L * f +
				D * x, e[15] = T * a + E * h + L * m + D * A, e
		}

		function ch(e, t, r) {
			var i = r[0],
				n = r[1],
				s = r[2],
				a, o, c, l, h, u, d, f, m, M, v, x;
			return t === e ? (e[12] = t[0] * i + t[4] * n + t[8] * s + t[12], e[13] = t[1] * i + t[5] *
				n + t[9] * s + t[13], e[14] = t[2] * i + t[6] * n + t[10] * s + t[14], e[15] = t[
				3] * i + t[7] * n + t[11] * s + t[15]) : (a = t[0], o = t[1], c = t[2], l = t[3],
				h = t[4], u = t[5], d = t[6], f = t[7], m = t[8], M = t[9], v = t[10], x = t[11], e[
					0] = a, e[1] = o, e[2] = c, e[3] = l, e[4] = h, e[5] = u, e[6] = d, e[7] = f, e[
					8] = m, e[9] = M, e[10] = v, e[11] = x, e[12] = a * i + h * n + m * s + t[12],
				e[13] = o * i + u * n + M * s + t[13], e[14] = c * i + d * n + v * s + t[14], e[
				15] = l * i + f * n + x * s + t[15]), e
		}

		function lh(e, t, r) {
			var i = r[0],
				n = r[1],
				s = r[2];
			return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e[3] = t[3] * i, e[4] = t[4] * n,
				e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * s, e[9] = t[9] * s, e[
					10] = t[10] * s, e[11] = t[11] * s, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[
					15] = t[15], e
		}

		function hh(e, t, r, i) {
			var n = i[0],
				s = i[1],
				a = i[2],
				o = Math.hypot(n, s, a),
				c, l, h, u, d, f, m, M, v, x, A, T, E, L, D, ee, Z, J, Q, re, j, te, z, Se;
			return o < K.EPSILON ? null : (o = 1 / o, n *= o, s *= o, a *= o, c = Math.sin(r), l = Math
				.cos(r), h = 1 - l, u = t[0], d = t[1], f = t[2], m = t[3], M = t[4], v = t[5], x =
				t[6], A = t[7], T = t[8], E = t[9], L = t[10], D = t[11], ee = n * n * h + l, Z =
				s * n * h + a * c, J = a * n * h - s * c, Q = n * s * h - a * c, re = s * s * h + l,
				j = a * s * h + n * c, te = n * a * h + s * c, z = s * a * h - n * c, Se = a * a *
				h + l, e[0] = u * ee + M * Z + T * J, e[1] = d * ee + v * Z + E * J, e[2] = f * ee +
				x * Z + L * J, e[3] = m * ee + A * Z + D * J, e[4] = u * Q + M * re + T * j, e[5] =
				d * Q + v * re + E * j, e[6] = f * Q + x * re + L * j, e[7] = m * Q + A * re + D *
				j, e[8] = u * te + M * z + T * Se, e[9] = d * te + v * z + E * Se, e[10] = f * te +
				x * z + L * Se, e[11] = m * te + A * z + D * Se, t !== e && (e[12] = t[12], e[13] =
					t[13], e[14] = t[14], e[15] = t[15]), e)
		}

		function uh(e, t, r) {
			var i = Math.sin(r),
				n = Math.cos(r),
				s = t[4],
				a = t[5],
				o = t[6],
				c = t[7],
				l = t[8],
				h = t[9],
				u = t[10],
				d = t[11];
			return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[
					13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = s * n + l * i, e[5] = a * n + h *
				i, e[6] = o * n + u * i, e[7] = c * n + d * i, e[8] = l * n - s * i, e[9] = h * n - a *
				i, e[10] = u * n - o * i, e[11] = d * n - c * i, e
		}

		function fh(e, t, r) {
			var i = Math.sin(r),
				n = Math.cos(r),
				s = t[0],
				a = t[1],
				o = t[2],
				c = t[3],
				l = t[8],
				h = t[9],
				u = t[10],
				d = t[11];
			return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[
					13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = s * n - l * i, e[1] = a * n - h *
				i, e[2] = o * n - u * i, e[3] = c * n - d * i, e[8] = s * i + l * n, e[9] = a * i + h *
				n, e[10] = o * i + u * n, e[11] = c * i + d * n, e
		}

		function dh(e, t, r) {
			var i = Math.sin(r),
				n = Math.cos(r),
				s = t[0],
				a = t[1],
				o = t[2],
				c = t[3],
				l = t[4],
				h = t[5],
				u = t[6],
				d = t[7];
			return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[
					13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = s * n + l * i, e[1] = a * n + h *
				i, e[2] = o * n + u * i, e[3] = c * n + d * i, e[4] = l * n - s * i, e[5] = h * n - a *
				i, e[6] = u * n - o * i, e[7] = d * n - c * i, e
		}

		function vh(e, t) {
			return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[
				8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[
				15] = 1, e
		}

		function ph(e, t) {
			return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0,
				e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1,
				e
		}

		function mh(e, t, r) {
			var i = r[0],
				n = r[1],
				s = r[2],
				a = Math.hypot(i, n, s),
				o, c, l;
			return a < K.EPSILON ? null : (a = 1 / a, i *= a, n *= a, s *= a, o = Math.sin(t), c = Math
				.cos(t), l = 1 - c, e[0] = i * i * l + c, e[1] = n * i * l + s * o, e[2] = s * i *
				l - n * o, e[3] = 0, e[4] = i * n * l - s * o, e[5] = n * n * l + c, e[6] = s * n *
				l + i * o, e[7] = 0, e[8] = i * s * l + n * o, e[9] = n * s * l - i * o, e[10] = s *
				s * l + c, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e)
		}

		function gh(e, t) {
			var r = Math.sin(t),
				i = Math.cos(t);
			return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = i, e[6] = r, e[7] = 0, e[
				8] = 0, e[9] = -r, e[10] = i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
		}

		function Mh(e, t) {
			var r = Math.sin(t),
				i = Math.cos(t);
			return e[0] = i, e[1] = 0, e[2] = -r, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[
				8] = r, e[9] = 0, e[10] = i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
		}

		function yh(e, t) {
			var r = Math.sin(t),
				i = Math.cos(t);
			return e[0] = i, e[1] = r, e[2] = 0, e[3] = 0, e[4] = -r, e[5] = i, e[6] = 0, e[7] = 0, e[
				8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
		}

		function Qn(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = i + i,
				c = n + n,
				l = s + s,
				h = i * o,
				u = i * c,
				d = i * l,
				f = n * c,
				m = n * l,
				M = s * l,
				v = a * o,
				x = a * c,
				A = a * l;
			return e[0] = 1 - (f + M), e[1] = u + A, e[2] = d - x, e[3] = 0, e[4] = u - A, e[5] = 1 - (
				h + M), e[6] = m + v, e[7] = 0, e[8] = d + x, e[9] = m - v, e[10] = 1 - (h + f), e[
				11] = 0, e[12] = r[0], e[13] = r[1], e[14] = r[2], e[15] = 1, e
		}

		function xh(e, t) {
			var r = new K.ARRAY_TYPE(3),
				i = -t[0],
				n = -t[1],
				s = -t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = t[6],
				h = t[7],
				u = i * i + n * n + s * s + a * a;
			return u > 0 ? (r[0] = (o * a + h * i + c * s - l * n) * 2 / u, r[1] = (c * a + h * n + l *
				i - o * s) * 2 / u, r[2] = (l * a + h * s + o * n - c * i) * 2 / u) : (r[0] = (o *
					a + h * i + c * s - l * n) * 2, r[1] = (c * a + h * n + l * i - o * s) * 2, r[
				2] = (l * a + h * s + o * n - c * i) * 2), Qn(e, t, r), e
		}

		function _h(e, t) {
			return e[0] = t[12], e[1] = t[13], e[2] = t[14], e
		}

		function $n(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[4],
				a = t[5],
				o = t[6],
				c = t[8],
				l = t[9],
				h = t[10];
			return e[0] = Math.hypot(r, i, n), e[1] = Math.hypot(s, a, o), e[2] = Math.hypot(c, l, h), e
		}

		function bh(e, t) {
			var r = new K.ARRAY_TYPE(3);
			$n(r, t);
			var i = 1 / r[0],
				n = 1 / r[1],
				s = 1 / r[2],
				a = t[0] * i,
				o = t[1] * n,
				c = t[2] * s,
				l = t[4] * i,
				h = t[5] * n,
				u = t[6] * s,
				d = t[8] * i,
				f = t[9] * n,
				m = t[10] * s,
				M = a + h + m,
				v = 0;
			return M > 0 ? (v = Math.sqrt(M + 1) * 2, e[3] = .25 * v, e[0] = (u - f) / v, e[1] = (d -
					c) / v, e[2] = (o - l) / v) : a > h && a > m ? (v = Math.sqrt(1 + a - h - m) * 2, e[
					3] = (u - f) / v, e[0] = .25 * v, e[1] = (o + l) / v, e[2] = (d + c) / v) : h > m ?
				(v = Math.sqrt(1 + h - a - m) * 2, e[3] = (d - c) / v, e[0] = (o + l) / v, e[1] = .25 *
					v, e[2] = (u + f) / v) : (v = Math.sqrt(1 + m - a - h) * 2, e[3] = (o - l) / v, e[
					0] = (d + c) / v, e[1] = (u + f) / v, e[2] = .25 * v), e
		}

		function Rh(e, t, r, i) {
			var n = t[0],
				s = t[1],
				a = t[2],
				o = t[3],
				c = n + n,
				l = s + s,
				h = a + a,
				u = n * c,
				d = n * l,
				f = n * h,
				m = s * l,
				M = s * h,
				v = a * h,
				x = o * c,
				A = o * l,
				T = o * h,
				E = i[0],
				L = i[1],
				D = i[2];
			return e[0] = (1 - (m + v)) * E, e[1] = (d + T) * E, e[2] = (f - A) * E, e[3] = 0, e[4] = (
					d - T) * L, e[5] = (1 - (u + v)) * L, e[6] = (M + x) * L, e[7] = 0, e[8] = (f + A) *
				D, e[9] = (M - x) * D, e[10] = (1 - (u + m)) * D, e[11] = 0, e[12] = r[0], e[13] = r[1],
				e[14] = r[2], e[15] = 1, e
		}

		function wh(e, t, r, i, n) {
			var s = t[0],
				a = t[1],
				o = t[2],
				c = t[3],
				l = s + s,
				h = a + a,
				u = o + o,
				d = s * l,
				f = s * h,
				m = s * u,
				M = a * h,
				v = a * u,
				x = o * u,
				A = c * l,
				T = c * h,
				E = c * u,
				L = i[0],
				D = i[1],
				ee = i[2],
				Z = n[0],
				J = n[1],
				Q = n[2],
				re = (1 - (M + x)) * L,
				j = (f + E) * L,
				te = (m - T) * L,
				z = (f - E) * D,
				Se = (1 - (d + x)) * D,
				ft = (v + A) * D,
				dt = (m + T) * ee,
				gr = (v - A) * ee,
				Mr = (1 - (d + M)) * ee;
			return e[0] = re, e[1] = j, e[2] = te, e[3] = 0, e[4] = z, e[5] = Se, e[6] = ft, e[7] = 0,
				e[8] = dt, e[9] = gr, e[10] = Mr, e[11] = 0, e[12] = r[0] + Z - (re * Z + z * J + dt *
					Q), e[13] = r[1] + J - (j * Z + Se * J + gr * Q), e[14] = r[2] + Q - (te * Z + ft *
					J + Mr * Q), e[15] = 1, e
		}

		function Th(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = r + r,
				o = i + i,
				c = n + n,
				l = r * a,
				h = i * a,
				u = i * o,
				d = n * a,
				f = n * o,
				m = n * c,
				M = s * a,
				v = s * o,
				x = s * c;
			return e[0] = 1 - u - m, e[1] = h + x, e[2] = d - v, e[3] = 0, e[4] = h - x, e[5] = 1 - l -
				m, e[6] = f + M, e[7] = 0, e[8] = d + v, e[9] = f - M, e[10] = 1 - l - u, e[11] = 0, e[
					12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
		}

		function Ph(e, t, r, i, n, s, a) {
			var o = 1 / (r - t),
				c = 1 / (n - i),
				l = 1 / (s - a);
			return e[0] = s * 2 * o, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s * 2 * c, e[6] = 0,
				e[7] = 0, e[8] = (r + t) * o, e[9] = (n + i) * c, e[10] = (a + s) * l, e[11] = -1, e[
				12] = 0, e[13] = 0, e[14] = a * s * 2 * l, e[15] = 0, e
		}

		function Ah(e, t, r, i, n) {
			var s = 1 / Math.tan(t / 2),
				a;
			return e[0] = s / r, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s, e[6] = 0, e[7] = 0,
				e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, n != null && n !==
				Infinity ? (a = 1 / (i - n), e[10] = (n + i) * a, e[14] = 2 * n * i * a) : (e[10] = -1,
					e[14] = -2 * i), e
		}

		function Eh(e, t, r, i) {
			var n = Math.tan(t.upDegrees * Math.PI / 180),
				s = Math.tan(t.downDegrees * Math.PI / 180),
				a = Math.tan(t.leftDegrees * Math.PI / 180),
				o = Math.tan(t.rightDegrees * Math.PI / 180),
				c = 2 / (a + o),
				l = 2 / (n + s);
			return e[0] = c, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = l, e[6] = 0, e[7] = 0, e[
				8] = -((a - o) * c * .5), e[9] = (n - s) * l * .5, e[10] = i / (r - i), e[11] = -1, e[
					12] = 0, e[13] = 0, e[14] = i * r / (r - i), e[15] = 0, e
		}

		function Sh(e, t, r, i, n, s, a) {
			var o = 1 / (t - r),
				c = 1 / (i - n),
				l = 1 / (s - a);
			return e[0] = -2 * o, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[
				7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * l, e[11] = 0, e[12] = (t + r) * o, e[13] = (n +
					i) * c, e[14] = (a + s) * l, e[15] = 1, e
		}

		function Oh(e, t, r, i) {
			var n, s, a, o, c, l, h, u, d, f, m = t[0],
				M = t[1],
				v = t[2],
				x = i[0],
				A = i[1],
				T = i[2],
				E = r[0],
				L = r[1],
				D = r[2];
			return Math.abs(m - E) < K.EPSILON && Math.abs(M - L) < K.EPSILON && Math.abs(v - D) < K
				.EPSILON ? Hn(e) : (h = m - E, u = M - L, d = v - D, f = 1 / Math.hypot(h, u, d), h *=
					f, u *= f, d *= f, n = A * d - T * u, s = T * h - x * d, a = x * u - A * h, f = Math
					.hypot(n, s, a), f ? (f = 1 / f, n *= f, s *= f, a *= f) : (n = 0, s = 0, a = 0),
					o = u * a - d * s, c = d * n - h * a, l = h * s - u * n, f = Math.hypot(o, c, l),
					f ? (f = 1 / f, o *= f, c *= f, l *= f) : (o = 0, c = 0, l = 0), e[0] = n, e[1] = o,
					e[2] = h, e[3] = 0, e[4] = s, e[5] = c, e[6] = u, e[7] = 0, e[8] = a, e[9] = l, e[
						10] = d, e[11] = 0, e[12] = -(n * m + s * M + a * v), e[13] = -(o * m + c * M +
						l * v), e[14] = -(h * m + u * M + d * v), e[15] = 1, e)
		}

		function Dh(e, t, r, i) {
			var n = t[0],
				s = t[1],
				a = t[2],
				o = i[0],
				c = i[1],
				l = i[2],
				h = n - r[0],
				u = s - r[1],
				d = a - r[2],
				f = h * h + u * u + d * d;
			f > 0 && (f = 1 / Math.sqrt(f), h *= f, u *= f, d *= f);
			var m = c * d - l * u,
				M = l * h - o * d,
				v = o * u - c * h;
			return f = m * m + M * M + v * v, f > 0 && (f = 1 / Math.sqrt(f), m *= f, M *= f, v *= f),
				e[0] = m, e[1] = M, e[2] = v, e[3] = 0, e[4] = u * v - d * M, e[5] = d * m - h * v, e[
				6] = h * M - u * m, e[7] = 0, e[8] = h, e[9] = u, e[10] = d, e[11] = 0, e[12] = n, e[
				13] = s, e[14] = a, e[15] = 1, e
		}

		function Lh(e) {
			return "mat4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[
				5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[
				11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + ")"
		}

		function Bh(e) {
			return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11],
				e[12], e[13], e[14], e[15])
		}

		function Ch(e, t, r) {
			return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e[
				4] = t[4] + r[4], e[5] = t[5] + r[5], e[6] = t[6] + r[6], e[7] = t[7] + r[7], e[8] = t[
					8] + r[8], e[9] = t[9] + r[9], e[10] = t[10] + r[10], e[11] = t[11] + r[11], e[12] =
				t[12] + r[12], e[13] = t[13] + r[13], e[14] = t[14] + r[14], e[15] = t[15] + r[15], e
		}

		function Zn(e, t, r) {
			return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e[
				4] = t[4] - r[4], e[5] = t[5] - r[5], e[6] = t[6] - r[6], e[7] = t[7] - r[7], e[8] = t[
					8] - r[8], e[9] = t[9] - r[9], e[10] = t[10] - r[10], e[11] = t[11] - r[11], e[12] =
				t[12] - r[12], e[13] = t[13] - r[13], e[14] = t[14] - r[14], e[15] = t[15] - r[15], e
		}

		function qh(e, t, r) {
			return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * r,
				e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * r, e[9] = t[9] * r, e[
					10] = t[10] * r, e[11] = t[11] * r, e[12] = t[12] * r, e[13] = t[13] * r, e[14] = t[
					14] * r, e[15] = t[15] * r, e
		}

		function Ih(e, t, r, i) {
			return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e[3] = t[3] +
				r[3] * i, e[4] = t[4] + r[4] * i, e[5] = t[5] + r[5] * i, e[6] = t[6] + r[6] * i, e[7] =
				t[7] + r[7] * i, e[8] = t[8] + r[8] * i, e[9] = t[9] + r[9] * i, e[10] = t[10] + r[10] *
				i, e[11] = t[11] + r[11] * i, e[12] = t[12] + r[12] * i, e[13] = t[13] + r[13] * i, e[
					14] = t[14] + r[14] * i, e[15] = t[15] + r[15] * i, e
		}

		function zh(e, t) {
			return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] &&
				e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] && e[9] === t[9] && e[
					10] === t[10] && e[11] === t[11] && e[12] === t[12] && e[13] === t[13] && e[14] ===
				t[14] && e[15] === t[15]
		}

		function Fh(e, t) {
			var r = e[0],
				i = e[1],
				n = e[2],
				s = e[3],
				a = e[4],
				o = e[5],
				c = e[6],
				l = e[7],
				h = e[8],
				u = e[9],
				d = e[10],
				f = e[11],
				m = e[12],
				M = e[13],
				v = e[14],
				x = e[15],
				A = t[0],
				T = t[1],
				E = t[2],
				L = t[3],
				D = t[4],
				ee = t[5],
				Z = t[6],
				J = t[7],
				Q = t[8],
				re = t[9],
				j = t[10],
				te = t[11],
				z = t[12],
				Se = t[13],
				ft = t[14],
				dt = t[15];
			return Math.abs(r - A) <= K.EPSILON * Math.max(1, Math.abs(r), Math.abs(A)) && Math.abs(i -
					T) <= K.EPSILON * Math.max(1, Math.abs(i), Math.abs(T)) && Math.abs(n - E) <= K
				.EPSILON * Math.max(1, Math.abs(n), Math.abs(E)) && Math.abs(s - L) <= K.EPSILON * Math
				.max(1, Math.abs(s), Math.abs(L)) && Math.abs(a - D) <= K.EPSILON * Math.max(1, Math
					.abs(a), Math.abs(D)) && Math.abs(o - ee) <= K.EPSILON * Math.max(1, Math.abs(o),
					Math.abs(ee)) && Math.abs(c - Z) <= K.EPSILON * Math.max(1, Math.abs(c), Math.abs(
					Z)) && Math.abs(l - J) <= K.EPSILON * Math.max(1, Math.abs(l), Math.abs(J)) && Math
				.abs(h - Q) <= K.EPSILON * Math.max(1, Math.abs(h), Math.abs(Q)) && Math.abs(u - re) <=
				K.EPSILON * Math.max(1, Math.abs(u), Math.abs(re)) && Math.abs(d - j) <= K.EPSILON *
				Math.max(1, Math.abs(d), Math.abs(j)) && Math.abs(f - te) <= K.EPSILON * Math.max(1,
					Math.abs(f), Math.abs(te)) && Math.abs(m - z) <= K.EPSILON * Math.max(1, Math.abs(
					m), Math.abs(z)) && Math.abs(M - Se) <= K.EPSILON * Math.max(1, Math.abs(M), Math
					.abs(Se)) && Math.abs(v - ft) <= K.EPSILON * Math.max(1, Math.abs(v), Math.abs(
				ft)) && Math.abs(x - dt) <= K.EPSILON * Math.max(1, Math.abs(x), Math.abs(dt))
		}
		var Gh = Xn;
		B.mul = Gh;
		var Uh = Zn;
		B.sub = Uh
	});
	var Li = R(P => {
		"use strict";

		function Or(e) {
			return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Or = function(
			r) {
				return typeof r
			} : Or = function(r) {
				return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol
					.prototype ? "symbol" : typeof r
			}, Or(e)
		}
		Object.defineProperty(P, "__esModule", {
			value: !0
		});
		P.create = Kn;
		P.clone = Vh;
		P.length = es;
		P.fromValues = kh;
		P.copy = Yh;
		P.set = Wh;
		P.add = jh;
		P.subtract = ts;
		P.multiply = rs;
		P.divide = is;
		P.ceil = Hh;
		P.floor = Xh;
		P.min = Qh;
		P.max = $h;
		P.round = Zh;
		P.scale = Jh;
		P.scaleAndAdd = Kh;
		P.distance = ns;
		P.squaredDistance = ss;
		P.squaredLength = as;
		P.negate = eu;
		P.inverse = tu;
		P.normalize = ru;
		P.dot = os;
		P.cross = iu;
		P.lerp = nu;
		P.hermite = su;
		P.bezier = au;
		P.random = ou;
		P.transformMat4 = cu;
		P.transformMat3 = lu;
		P.transformQuat = hu;
		P.rotateX = uu;
		P.rotateY = fu;
		P.rotateZ = du;
		P.angle = vu;
		P.zero = pu;
		P.str = mu;
		P.exactEquals = gu;
		P.equals = Mu;
		P.forEach = P.sqrLen = P.len = P.sqrDist = P.dist = P.div = P.mul = P.sub = void 0;
		var st = yu(Xe());

		function cs() {
			if (typeof WeakMap != "function") return null;
			var e = new WeakMap;
			return cs = function() {
				return e
			}, e
		}

		function yu(e) {
			if (e && e.__esModule) return e;
			if (e === null || Or(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var t = cs();
			if (t && t.has(e)) return t.get(e);
			var r = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
					s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n]
				} return r.default = e, t && t.set(e, r), r
		}

		function Kn() {
			var e = new st.ARRAY_TYPE(3);
			return st.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e
		}

		function Vh(e) {
			var t = new st.ARRAY_TYPE(3);
			return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
		}

		function es(e) {
			var t = e[0],
				r = e[1],
				i = e[2];
			return Math.hypot(t, r, i)
		}

		function kh(e, t, r) {
			var i = new st.ARRAY_TYPE(3);
			return i[0] = e, i[1] = t, i[2] = r, i
		}

		function Yh(e, t) {
			return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
		}

		function Wh(e, t, r, i) {
			return e[0] = t, e[1] = r, e[2] = i, e
		}

		function jh(e, t, r) {
			return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e
		}

		function ts(e, t, r) {
			return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e
		}

		function rs(e, t, r) {
			return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e[2] = t[2] * r[2], e
		}

		function is(e, t, r) {
			return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e[2] = t[2] / r[2], e
		}

		function Hh(e, t) {
			return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e
		}

		function Xh(e, t) {
			return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e
		}

		function Qh(e, t, r) {
			return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e[2] = Math.min(t[2], r[
				2]), e
		}

		function $h(e, t, r) {
			return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e[2] = Math.max(t[2], r[
				2]), e
		}

		function Zh(e, t) {
			return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e
		}

		function Jh(e, t, r) {
			return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e
		}

		function Kh(e, t, r, i) {
			return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e
		}

		function ns(e, t) {
			var r = t[0] - e[0],
				i = t[1] - e[1],
				n = t[2] - e[2];
			return Math.hypot(r, i, n)
		}

		function ss(e, t) {
			var r = t[0] - e[0],
				i = t[1] - e[1],
				n = t[2] - e[2];
			return r * r + i * i + n * n
		}

		function as(e) {
			var t = e[0],
				r = e[1],
				i = e[2];
			return t * t + r * r + i * i
		}

		function eu(e, t) {
			return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
		}

		function tu(e, t) {
			return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e
		}

		function ru(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = r * r + i * i + n * n;
			return s > 0 && (s = 1 / Math.sqrt(s)), e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s, e
		}

		function os(e, t) {
			return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
		}

		function iu(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = r[0],
				o = r[1],
				c = r[2];
			return e[0] = n * c - s * o, e[1] = s * a - i * c, e[2] = i * o - n * a, e
		}

		function nu(e, t, r, i) {
			var n = t[0],
				s = t[1],
				a = t[2];
			return e[0] = n + i * (r[0] - n), e[1] = s + i * (r[1] - s), e[2] = a + i * (r[2] - a), e
		}

		function su(e, t, r, i, n, s) {
			var a = s * s,
				o = a * (2 * s - 3) + 1,
				c = a * (s - 2) + s,
				l = a * (s - 1),
				h = a * (3 - 2 * s);
			return e[0] = t[0] * o + r[0] * c + i[0] * l + n[0] * h, e[1] = t[1] * o + r[1] * c + i[1] *
				l + n[1] * h, e[2] = t[2] * o + r[2] * c + i[2] * l + n[2] * h, e
		}

		function au(e, t, r, i, n, s) {
			var a = 1 - s,
				o = a * a,
				c = s * s,
				l = o * a,
				h = 3 * s * o,
				u = 3 * c * a,
				d = c * s;
			return e[0] = t[0] * l + r[0] * h + i[0] * u + n[0] * d, e[1] = t[1] * l + r[1] * h + i[1] *
				u + n[1] * d, e[2] = t[2] * l + r[2] * h + i[2] * u + n[2] * d, e
		}

		function ou(e, t) {
			t = t || 1;
			var r = st.RANDOM() * 2 * Math.PI,
				i = st.RANDOM() * 2 - 1,
				n = Math.sqrt(1 - i * i) * t;
			return e[0] = Math.cos(r) * n, e[1] = Math.sin(r) * n, e[2] = i * t, e
		}

		function cu(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = r[3] * i + r[7] * n + r[11] * s + r[15];
			return a = a || 1, e[0] = (r[0] * i + r[4] * n + r[8] * s + r[12]) / a, e[1] = (r[1] * i +
					r[5] * n + r[9] * s + r[13]) / a, e[2] = (r[2] * i + r[6] * n + r[10] * s + r[14]) /
				a, e
		}

		function lu(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2];
			return e[0] = i * r[0] + n * r[3] + s * r[6], e[1] = i * r[1] + n * r[4] + s * r[7], e[2] =
				i * r[2] + n * r[5] + s * r[8], e
		}

		function hu(e, t, r) {
			var i = r[0],
				n = r[1],
				s = r[2],
				a = r[3],
				o = t[0],
				c = t[1],
				l = t[2],
				h = n * l - s * c,
				u = s * o - i * l,
				d = i * c - n * o,
				f = n * d - s * u,
				m = s * h - i * d,
				M = i * u - n * h,
				v = a * 2;
			return h *= v, u *= v, d *= v, f *= 2, m *= 2, M *= 2, e[0] = o + h + f, e[1] = c + u + m,
				e[2] = l + d + M, e
		}

		function uu(e, t, r, i) {
			var n = [],
				s = [];
			return n[0] = t[0] - r[0], n[1] = t[1] - r[1], n[2] = t[2] - r[2], s[0] = n[0], s[1] = n[
				1] * Math.cos(i) - n[2] * Math.sin(i), s[2] = n[1] * Math.sin(i) + n[2] * Math.cos(i),
				e[0] = s[0] + r[0], e[1] = s[1] + r[1], e[2] = s[2] + r[2], e
		}

		function fu(e, t, r, i) {
			var n = [],
				s = [];
			return n[0] = t[0] - r[0], n[1] = t[1] - r[1], n[2] = t[2] - r[2], s[0] = n[2] * Math.sin(
				i) + n[0] * Math.cos(i), s[1] = n[1], s[2] = n[2] * Math.cos(i) - n[0] * Math.sin(i), e[
					0] = s[0] + r[0], e[1] = s[1] + r[1], e[2] = s[2] + r[2], e
		}

		function du(e, t, r, i) {
			var n = [],
				s = [];
			return n[0] = t[0] - r[0], n[1] = t[1] - r[1], n[2] = t[2] - r[2], s[0] = n[0] * Math.cos(
				i) - n[1] * Math.sin(i), s[1] = n[0] * Math.sin(i) + n[1] * Math.cos(i), s[2] = n[2], e[
					0] = s[0] + r[0], e[1] = s[1] + r[1], e[2] = s[2] + r[2], e
		}

		function vu(e, t) {
			var r = e[0],
				i = e[1],
				n = e[2],
				s = t[0],
				a = t[1],
				o = t[2],
				c = Math.sqrt(r * r + i * i + n * n),
				l = Math.sqrt(s * s + a * a + o * o),
				h = c * l,
				u = h && os(e, t) / h;
			return Math.acos(Math.min(Math.max(u, -1), 1))
		}

		function pu(e) {
			return e[0] = 0, e[1] = 0, e[2] = 0, e
		}

		function mu(e) {
			return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
		}

		function gu(e, t) {
			return e[0] === t[0] && e[1] === t[1] && e[2] === t[2]
		}

		function Mu(e, t) {
			var r = e[0],
				i = e[1],
				n = e[2],
				s = t[0],
				a = t[1],
				o = t[2];
			return Math.abs(r - s) <= st.EPSILON * Math.max(1, Math.abs(r), Math.abs(s)) && Math.abs(i -
					a) <= st.EPSILON * Math.max(1, Math.abs(i), Math.abs(a)) && Math.abs(n - o) <= st
				.EPSILON * Math.max(1, Math.abs(n), Math.abs(o))
		}
		var xu = ts;
		P.sub = xu;
		var _u = rs;
		P.mul = _u;
		var bu = is;
		P.div = bu;
		var Ru = ns;
		P.dist = Ru;
		var wu = ss;
		P.sqrDist = wu;
		var Tu = es;
		P.len = Tu;
		var Pu = as;
		P.sqrLen = Pu;
		var Au = function() {
			var e = Kn();
			return function(t, r, i, n, s, a) {
				var o, c;
				for (r || (r = 3), i || (i = 0), n ? c = Math.min(n * r + i, t.length) : c = t
					.length, o = i; o < c; o += r) e[0] = t[o], e[1] = t[o + 1], e[2] = t[o +
					2], s(e, e, a), t[o] = e[0], t[o + 1] = e[1], t[o + 2] = e[2];
				return t
			}
		}();
		P.forEach = Au
	});
	var Bi = R(C => {
		"use strict";

		function Dr(e) {
			return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dr = function(
			r) {
				return typeof r
			} : Dr = function(r) {
				return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol
					.prototype ? "symbol" : typeof r
			}, Dr(e)
		}
		Object.defineProperty(C, "__esModule", {
			value: !0
		});
		C.create = ls;
		C.clone = Eu;
		C.fromValues = Su;
		C.copy = Ou;
		C.set = Du;
		C.add = Lu;
		C.subtract = hs;
		C.multiply = us;
		C.divide = fs;
		C.ceil = Bu;
		C.floor = Cu;
		C.min = qu;
		C.max = Iu;
		C.round = zu;
		C.scale = Fu;
		C.scaleAndAdd = Nu;
		C.distance = ds;
		C.squaredDistance = vs;
		C.length = ps;
		C.squaredLength = ms;
		C.negate = Gu;
		C.inverse = Uu;
		C.normalize = Vu;
		C.dot = ku;
		C.cross = Yu;
		C.lerp = Wu;
		C.random = ju;
		C.transformMat4 = Hu;
		C.transformQuat = Xu;
		C.zero = Qu;
		C.str = $u;
		C.exactEquals = Zu;
		C.equals = Ju;
		C.forEach = C.sqrLen = C.len = C.sqrDist = C.dist = C.div = C.mul = C.sub = void 0;
		var Ue = Ku(Xe());

		function gs() {
			if (typeof WeakMap != "function") return null;
			var e = new WeakMap;
			return gs = function() {
				return e
			}, e
		}

		function Ku(e) {
			if (e && e.__esModule) return e;
			if (e === null || Dr(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var t = gs();
			if (t && t.has(e)) return t.get(e);
			var r = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
					s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n]
				} return r.default = e, t && t.set(e, r), r
		}

		function ls() {
			var e = new Ue.ARRAY_TYPE(4);
			return Ue.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e
		}

		function Eu(e) {
			var t = new Ue.ARRAY_TYPE(4);
			return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
		}

		function Su(e, t, r, i) {
			var n = new Ue.ARRAY_TYPE(4);
			return n[0] = e, n[1] = t, n[2] = r, n[3] = i, n
		}

		function Ou(e, t) {
			return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
		}

		function Du(e, t, r, i, n) {
			return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e
		}

		function Lu(e, t, r) {
			return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e
		}

		function hs(e, t, r) {
			return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e
		}

		function us(e, t, r) {
			return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e[2] = t[2] * r[2], e[3] = t[3] * r[3], e
		}

		function fs(e, t, r) {
			return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e[2] = t[2] / r[2], e[3] = t[3] / r[3], e
		}

		function Bu(e, t) {
			return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e[3] = Math
				.ceil(t[3]), e
		}

		function Cu(e, t) {
			return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e[3] =
				Math.floor(t[3]), e
		}

		function qu(e, t, r) {
			return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e[2] = Math.min(t[2], r[
				2]), e[3] = Math.min(t[3], r[3]), e
		}

		function Iu(e, t, r) {
			return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e[2] = Math.max(t[2], r[
				2]), e[3] = Math.max(t[3], r[3]), e
		}

		function zu(e, t) {
			return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e[3] =
				Math.round(t[3]), e
		}

		function Fu(e, t, r) {
			return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e
		}

		function Nu(e, t, r, i) {
			return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e[3] = t[3] +
				r[3] * i, e
		}

		function ds(e, t) {
			var r = t[0] - e[0],
				i = t[1] - e[1],
				n = t[2] - e[2],
				s = t[3] - e[3];
			return Math.hypot(r, i, n, s)
		}

		function vs(e, t) {
			var r = t[0] - e[0],
				i = t[1] - e[1],
				n = t[2] - e[2],
				s = t[3] - e[3];
			return r * r + i * i + n * n + s * s
		}

		function ps(e) {
			var t = e[0],
				r = e[1],
				i = e[2],
				n = e[3];
			return Math.hypot(t, r, i, n)
		}

		function ms(e) {
			var t = e[0],
				r = e[1],
				i = e[2],
				n = e[3];
			return t * t + r * r + i * i + n * n
		}

		function Gu(e, t) {
			return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e
		}

		function Uu(e, t) {
			return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e[3] = 1 / t[3], e
		}

		function Vu(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = r * r + i * i + n * n + s * s;
			return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = r * a, e[1] = i * a, e[2] = n * a, e[3] = s *
				a, e
		}

		function ku(e, t) {
			return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
		}

		function Yu(e, t, r, i) {
			var n = r[0] * i[1] - r[1] * i[0],
				s = r[0] * i[2] - r[2] * i[0],
				a = r[0] * i[3] - r[3] * i[0],
				o = r[1] * i[2] - r[2] * i[1],
				c = r[1] * i[3] - r[3] * i[1],
				l = r[2] * i[3] - r[3] * i[2],
				h = t[0],
				u = t[1],
				d = t[2],
				f = t[3];
			return e[0] = u * l - d * c + f * o, e[1] = -(h * l) + d * a - f * s, e[2] = h * c - u * a +
				f * n, e[3] = -(h * o) + u * s - d * n, e
		}

		function Wu(e, t, r, i) {
			var n = t[0],
				s = t[1],
				a = t[2],
				o = t[3];
			return e[0] = n + i * (r[0] - n), e[1] = s + i * (r[1] - s), e[2] = a + i * (r[2] - a), e[
				3] = o + i * (r[3] - o), e
		}

		function ju(e, t) {
			t = t || 1;
			var r, i, n, s, a, o;
			do r = Ue.RANDOM() * 2 - 1, i = Ue.RANDOM() * 2 - 1, a = r * r + i * i; while (a >= 1);
			do n = Ue.RANDOM() * 2 - 1, s = Ue.RANDOM() * 2 - 1, o = n * n + s * s; while (o >= 1);
			var c = Math.sqrt((1 - a) / o);
			return e[0] = t * r, e[1] = t * i, e[2] = t * n * c, e[3] = t * s * c, e
		}

		function Hu(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3];
			return e[0] = r[0] * i + r[4] * n + r[8] * s + r[12] * a, e[1] = r[1] * i + r[5] * n + r[
				9] * s + r[13] * a, e[2] = r[2] * i + r[6] * n + r[10] * s + r[14] * a, e[3] = r[3] *
				i + r[7] * n + r[11] * s + r[15] * a, e
		}

		function Xu(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = r[0],
				o = r[1],
				c = r[2],
				l = r[3],
				h = l * i + o * s - c * n,
				u = l * n + c * i - a * s,
				d = l * s + a * n - o * i,
				f = -a * i - o * n - c * s;
			return e[0] = h * l + f * -a + u * -c - d * -o, e[1] = u * l + f * -o + d * -a - h * -c, e[
				2] = d * l + f * -c + h * -o - u * -a, e[3] = t[3], e
		}

		function Qu(e) {
			return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e
		}

		function $u(e) {
			return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
		}

		function Zu(e, t) {
			return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]
		}

		function Ju(e, t) {
			var r = e[0],
				i = e[1],
				n = e[2],
				s = e[3],
				a = t[0],
				o = t[1],
				c = t[2],
				l = t[3];
			return Math.abs(r - a) <= Ue.EPSILON * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(i -
					o) <= Ue.EPSILON * Math.max(1, Math.abs(i), Math.abs(o)) && Math.abs(n - c) <= Ue
				.EPSILON * Math.max(1, Math.abs(n), Math.abs(c)) && Math.abs(s - l) <= Ue.EPSILON * Math
				.max(1, Math.abs(s), Math.abs(l))
		}
		var ef = hs;
		C.sub = ef;
		var tf = us;
		C.mul = tf;
		var rf = fs;
		C.div = rf;
		var nf = ds;
		C.dist = nf;
		var sf = vs;
		C.sqrDist = sf;
		var af = ps;
		C.len = af;
		var of = ms;
		C.sqrLen = of ;
		var cf = function() {
			var e = ls();
			return function(t, r, i, n, s, a) {
				var o, c;
				for (r || (r = 4), i || (i = 0), n ? c = Math.min(n * r + i, t.length) : c = t
					.length, o = i; o < c; o += r) e[0] = t[o], e[1] = t[o + 1], e[2] = t[o +
					2], e[3] = t[o + 3], s(e, e, a), t[o] = e[0], t[o + 1] = e[1], t[o + 2] = e[
						2], t[o + 3] = e[3];
				return t
			}
		}();
		C.forEach = cf
	});
	var Ii = R(w => {
		"use strict";

		function Lr(e) {
			return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Lr = function(
			r) {
				return typeof r
			} : Lr = function(r) {
				return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol
					.prototype ? "symbol" : typeof r
			}, Lr(e)
		}
		Object.defineProperty(w, "__esModule", {
			value: !0
		});
		w.create = Ci;
		w.identity = lf;
		w.setAxisAngle = Ms;
		w.getAxisAngle = hf;
		w.getAngle = uf;
		w.multiply = ys;
		w.rotateX = ff;
		w.rotateY = df;
		w.rotateZ = vf;
		w.calculateW = pf;
		w.exp = xs;
		w.ln = _s;
		w.pow = mf;
		w.slerp = Br;
		w.random = gf;
		w.invert = Mf;
		w.conjugate = yf;
		w.fromMat3 = bs;
		w.fromEuler = xf;
		w.str = _f;
		w.setAxes = w.sqlerp = w.rotationTo = w.equals = w.exactEquals = w.normalize = w.sqrLen = w
			.squaredLength = w.len = w.length = w.lerp = w.dot = w.scale = w.mul = w.add = w.set = w
			.copy = w.fromValues = w.clone = void 0;
		var St = Cr(Xe()),
			bf = Cr(Oi()),
			at = Cr(Li()),
			Ie = Cr(Bi());

		function Rs() {
			if (typeof WeakMap != "function") return null;
			var e = new WeakMap;
			return Rs = function() {
				return e
			}, e
		}

		function Cr(e) {
			if (e && e.__esModule) return e;
			if (e === null || Lr(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var t = Rs();
			if (t && t.has(e)) return t.get(e);
			var r = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
					s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n]
				} return r.default = e, t && t.set(e, r), r
		}

		function Ci() {
			var e = new St.ARRAY_TYPE(4);
			return St.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e[3] = 1, e
		}

		function lf(e) {
			return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
		}

		function Ms(e, t, r) {
			r = r * .5;
			var i = Math.sin(r);
			return e[0] = i * t[0], e[1] = i * t[1], e[2] = i * t[2], e[3] = Math.cos(r), e
		}

		function hf(e, t) {
			var r = Math.acos(t[3]) * 2,
				i = Math.sin(r / 2);
			return i > St.EPSILON ? (e[0] = t[0] / i, e[1] = t[1] / i, e[2] = t[2] / i) : (e[0] = 1, e[
				1] = 0, e[2] = 0), r
		}

		function uf(e, t) {
			var r = ws(e, t);
			return Math.acos(2 * r * r - 1)
		}

		function ys(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = r[0],
				c = r[1],
				l = r[2],
				h = r[3];
			return e[0] = i * h + a * o + n * l - s * c, e[1] = n * h + a * c + s * o - i * l, e[2] =
				s * h + a * l + i * c - n * o, e[3] = a * h - i * o - n * c - s * l, e
		}

		function ff(e, t, r) {
			r *= .5;
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = Math.sin(r),
				c = Math.cos(r);
			return e[0] = i * c + a * o, e[1] = n * c + s * o, e[2] = s * c - n * o, e[3] = a * c - i *
				o, e
		}

		function df(e, t, r) {
			r *= .5;
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = Math.sin(r),
				c = Math.cos(r);
			return e[0] = i * c - s * o, e[1] = n * c + a * o, e[2] = s * c + i * o, e[3] = a * c - n *
				o, e
		}

		function vf(e, t, r) {
			r *= .5;
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = Math.sin(r),
				c = Math.cos(r);
			return e[0] = i * c + n * o, e[1] = n * c - i * o, e[2] = s * c + a * o, e[3] = a * c - s *
				o, e
		}

		function pf(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2];
			return e[0] = r, e[1] = i, e[2] = n, e[3] = Math.sqrt(Math.abs(1 - r * r - i * i - n * n)),
				e
		}

		function xs(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = Math.sqrt(r * r + i * i + n * n),
				o = Math.exp(s),
				c = a > 0 ? o * Math.sin(a) / a : 0;
			return e[0] = r * c, e[1] = i * c, e[2] = n * c, e[3] = o * Math.cos(a), e
		}

		function _s(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = Math.sqrt(r * r + i * i + n * n),
				o = a > 0 ? Math.atan2(a, s) / a : 0;
			return e[0] = r * o, e[1] = i * o, e[2] = n * o, e[3] = .5 * Math.log(r * r + i * i + n *
				n + s * s), e
		}

		function mf(e, t, r) {
			return _s(e, t), Ts(e, e, r), xs(e, e), e
		}

		function Br(e, t, r, i) {
			var n = t[0],
				s = t[1],
				a = t[2],
				o = t[3],
				c = r[0],
				l = r[1],
				h = r[2],
				u = r[3],
				d, f, m, M, v;
			return f = n * c + s * l + a * h + o * u, f < 0 && (f = -f, c = -c, l = -l, h = -h, u = -u),
				1 - f > St.EPSILON ? (d = Math.acos(f), m = Math.sin(d), M = Math.sin((1 - i) * d) / m,
					v = Math.sin(i * d) / m) : (M = 1 - i, v = i), e[0] = M * n + v * c, e[1] = M * s +
				v * l, e[2] = M * a + v * h, e[3] = M * o + v * u, e
		}

		function gf(e) {
			var t = St.RANDOM(),
				r = St.RANDOM(),
				i = St.RANDOM(),
				n = Math.sqrt(1 - t),
				s = Math.sqrt(t);
			return e[0] = n * Math.sin(2 * Math.PI * r), e[1] = n * Math.cos(2 * Math.PI * r), e[2] =
				s * Math.sin(2 * Math.PI * i), e[3] = s * Math.cos(2 * Math.PI * i), e
		}

		function Mf(e, t) {
			var r = t[0],
				i = t[1],
				n = t[2],
				s = t[3],
				a = r * r + i * i + n * n + s * s,
				o = a ? 1 / a : 0;
			return e[0] = -r * o, e[1] = -i * o, e[2] = -n * o, e[3] = s * o, e
		}

		function yf(e, t) {
			return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e
		}

		function bs(e, t) {
			var r = t[0] + t[4] + t[8],
				i;
			if (r > 0) i = Math.sqrt(r + 1), e[3] = .5 * i, i = .5 / i, e[0] = (t[5] - t[7]) * i, e[1] =
				(t[6] - t[2]) * i, e[2] = (t[1] - t[3]) * i;
			else {
				var n = 0;
				t[4] > t[0] && (n = 1), t[8] > t[n * 3 + n] && (n = 2);
				var s = (n + 1) % 3,
					a = (n + 2) % 3;
				i = Math.sqrt(t[n * 3 + n] - t[s * 3 + s] - t[a * 3 + a] + 1), e[n] = .5 * i, i = .5 /
					i, e[3] = (t[s * 3 + a] - t[a * 3 + s]) * i, e[s] = (t[s * 3 + n] + t[n * 3 + s]) *
					i, e[a] = (t[a * 3 + n] + t[n * 3 + a]) * i
			}
			return e
		}

		function xf(e, t, r, i) {
			var n = .5 * Math.PI / 180;
			t *= n, r *= n, i *= n;
			var s = Math.sin(t),
				a = Math.cos(t),
				o = Math.sin(r),
				c = Math.cos(r),
				l = Math.sin(i),
				h = Math.cos(i);
			return e[0] = s * c * h - a * o * l, e[1] = a * o * h + s * c * l, e[2] = a * c * l - s *
				o * h, e[3] = a * c * h + s * o * l, e
		}

		function _f(e) {
			return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
		}
		var Rf = Ie.clone;
		w.clone = Rf;
		var wf = Ie.fromValues;
		w.fromValues = wf;
		var Tf = Ie.copy;
		w.copy = Tf;
		var Pf = Ie.set;
		w.set = Pf;
		var Af = Ie.add;
		w.add = Af;
		var Ef = ys;
		w.mul = Ef;
		var Ts = Ie.scale;
		w.scale = Ts;
		var ws = Ie.dot;
		w.dot = ws;
		var Sf = Ie.lerp;
		w.lerp = Sf;
		var Ps = Ie.length;
		w.length = Ps;
		var Of = Ps;
		w.len = Of;
		var As = Ie.squaredLength;
		w.squaredLength = As;
		var Df = As;
		w.sqrLen = Df;
		var qi = Ie.normalize;
		w.normalize = qi;
		var Lf = Ie.exactEquals;
		w.exactEquals = Lf;
		var Bf = Ie.equals;
		w.equals = Bf;
		var Cf = function() {
			var e = at.create(),
				t = at.fromValues(1, 0, 0),
				r = at.fromValues(0, 1, 0);
			return function(i, n, s) {
				var a = at.dot(n, s);
				return a < -.999999 ? (at.cross(e, t, n), at.len(e) < 1e-6 && at.cross(e, r, n),
					at.normalize(e, e), Ms(i, e, Math.PI), i) : a > .999999 ? (i[0] = 0, i[
					1] = 0, i[2] = 0, i[3] = 1, i) : (at.cross(e, n, s), i[0] = e[0], i[1] =
					e[1], i[2] = e[2], i[3] = 1 + a, qi(i, i))
			}
		}();
		w.rotationTo = Cf;
		var qf = function() {
			var e = Ci(),
				t = Ci();
			return function(r, i, n, s, a, o) {
				return Br(e, i, a, o), Br(t, n, s, o), Br(r, e, t, 2 * o * (1 - o)), r
			}
		}();
		w.sqlerp = qf;
		var If = function() {
			var e = bf.create();
			return function(t, r, i, n) {
				return e[0] = i[0], e[3] = i[1], e[6] = i[2], e[1] = n[0], e[4] = n[1], e[7] =
					n[2], e[2] = -r[0], e[5] = -r[1], e[8] = -r[2], qi(t, bs(t, e))
			}
		}();
		w.setAxes = If
	});
	var qs = R(I => {
		"use strict";

		function qr(e) {
			return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qr = function(
			r) {
				return typeof r
			} : qr = function(r) {
				return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol
					.prototype ? "symbol" : typeof r
			}, qr(e)
		}
		Object.defineProperty(I, "__esModule", {
			value: !0
		});
		I.create = zf;
		I.clone = Ff;
		I.fromValues = Nf;
		I.fromRotationTranslationValues = Gf;
		I.fromRotationTranslation = Es;
		I.fromTranslation = Uf;
		I.fromRotation = Vf;
		I.fromMat4 = kf;
		I.copy = Ss;
		I.identity = Yf;
		I.set = Wf;
		I.getDual = jf;
		I.setDual = Hf;
		I.getTranslation = Xf;
		I.translate = Qf;
		I.rotateX = $f;
		I.rotateY = Zf;
		I.rotateZ = Jf;
		I.rotateByQuatAppend = Kf;
		I.rotateByQuatPrepend = ed;
		I.rotateAroundAxis = td;
		I.add = rd;
		I.multiply = Os;
		I.scale = id;
		I.lerp = nd;
		I.invert = sd;
		I.conjugate = ad;
		I.normalize = od;
		I.str = cd;
		I.exactEquals = ld;
		I.equals = hd;
		I.sqrLen = I.squaredLength = I.len = I.length = I.dot = I.mul = I.setReal = I.getReal = void 0;
		var Re = zi(Xe()),
			ot = zi(Ii()),
			Ds = zi(Di());

		function Ls() {
			if (typeof WeakMap != "function") return null;
			var e = new WeakMap;
			return Ls = function() {
				return e
			}, e
		}

		function zi(e) {
			if (e && e.__esModule) return e;
			if (e === null || qr(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var t = Ls();
			if (t && t.has(e)) return t.get(e);
			var r = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
					s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n]
				} return r.default = e, t && t.set(e, r), r
		}

		function zf() {
			var e = new Re.ARRAY_TYPE(8);
			return Re.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[4] = 0, e[5] = 0,
				e[6] = 0, e[7] = 0), e[3] = 1, e
		}

		function Ff(e) {
			var t = new Re.ARRAY_TYPE(8);
			return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] =
				e[6], t[7] = e[7], t
		}

		function Nf(e, t, r, i, n, s, a, o) {
			var c = new Re.ARRAY_TYPE(8);
			return c[0] = e, c[1] = t, c[2] = r, c[3] = i, c[4] = n, c[5] = s, c[6] = a, c[7] = o, c
		}

		function Gf(e, t, r, i, n, s, a) {
			var o = new Re.ARRAY_TYPE(8);
			o[0] = e, o[1] = t, o[2] = r, o[3] = i;
			var c = n * .5,
				l = s * .5,
				h = a * .5;
			return o[4] = c * i + l * r - h * t, o[5] = l * i + h * e - c * r, o[6] = h * i + c * t -
				l * e, o[7] = -c * e - l * t - h * r, o
		}

		function Es(e, t, r) {
			var i = r[0] * .5,
				n = r[1] * .5,
				s = r[2] * .5,
				a = t[0],
				o = t[1],
				c = t[2],
				l = t[3];
			return e[0] = a, e[1] = o, e[2] = c, e[3] = l, e[4] = i * l + n * c - s * o, e[5] = n * l +
				s * a - i * c, e[6] = s * l + i * o - n * a, e[7] = -i * a - n * o - s * c, e
		}

		function Uf(e, t) {
			return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = t[0] * .5, e[5] = t[1] * .5, e[6] = t[
				2] * .5, e[7] = 0, e
		}

		function Vf(e, t) {
			return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = 0, e[5] = 0, e[6] = 0, e[
				7] = 0, e
		}

		function kf(e, t) {
			var r = ot.create();
			Ds.getRotation(r, t);
			var i = new Re.ARRAY_TYPE(3);
			return Ds.getTranslation(i, t), Es(e, r, i), e
		}

		function Ss(e, t) {
			return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] =
				t[6], e[7] = t[7], e
		}

		function Yf(e) {
			return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e
		}

		function Wf(e, t, r, i, n, s, a, o, c) {
			return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e[4] = s, e[5] = a, e[6] = o, e[7] = c, e
		}
		var ud = ot.copy;
		I.getReal = ud;

		function jf(e, t) {
			return e[0] = t[4], e[1] = t[5], e[2] = t[6], e[3] = t[7], e
		}
		var fd = ot.copy;
		I.setReal = fd;

		function Hf(e, t) {
			return e[4] = t[0], e[5] = t[1], e[6] = t[2], e[7] = t[3], e
		}

		function Xf(e, t) {
			var r = t[4],
				i = t[5],
				n = t[6],
				s = t[7],
				a = -t[0],
				o = -t[1],
				c = -t[2],
				l = t[3];
			return e[0] = (r * l + s * a + i * c - n * o) * 2, e[1] = (i * l + s * o + n * a - r * c) *
				2, e[2] = (n * l + s * c + r * o - i * a) * 2, e
		}

		function Qf(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = r[0] * .5,
				c = r[1] * .5,
				l = r[2] * .5,
				h = t[4],
				u = t[5],
				d = t[6],
				f = t[7];
			return e[0] = i, e[1] = n, e[2] = s, e[3] = a, e[4] = a * o + n * l - s * c + h, e[5] = a *
				c + s * o - i * l + u, e[6] = a * l + i * c - n * o + d, e[7] = -i * o - n * c - s * l +
				f, e
		}

		function $f(e, t, r) {
			var i = -t[0],
				n = -t[1],
				s = -t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = t[6],
				h = t[7],
				u = o * a + h * i + c * s - l * n,
				d = c * a + h * n + l * i - o * s,
				f = l * a + h * s + o * n - c * i,
				m = h * a - o * i - c * n - l * s;
			return ot.rotateX(e, t, r), i = e[0], n = e[1], s = e[2], a = e[3], e[4] = u * a + m * i +
				d * s - f * n, e[5] = d * a + m * n + f * i - u * s, e[6] = f * a + m * s + u * n - d *
				i, e[7] = m * a - u * i - d * n - f * s, e
		}

		function Zf(e, t, r) {
			var i = -t[0],
				n = -t[1],
				s = -t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = t[6],
				h = t[7],
				u = o * a + h * i + c * s - l * n,
				d = c * a + h * n + l * i - o * s,
				f = l * a + h * s + o * n - c * i,
				m = h * a - o * i - c * n - l * s;
			return ot.rotateY(e, t, r), i = e[0], n = e[1], s = e[2], a = e[3], e[4] = u * a + m * i +
				d * s - f * n, e[5] = d * a + m * n + f * i - u * s, e[6] = f * a + m * s + u * n - d *
				i, e[7] = m * a - u * i - d * n - f * s, e
		}

		function Jf(e, t, r) {
			var i = -t[0],
				n = -t[1],
				s = -t[2],
				a = t[3],
				o = t[4],
				c = t[5],
				l = t[6],
				h = t[7],
				u = o * a + h * i + c * s - l * n,
				d = c * a + h * n + l * i - o * s,
				f = l * a + h * s + o * n - c * i,
				m = h * a - o * i - c * n - l * s;
			return ot.rotateZ(e, t, r), i = e[0], n = e[1], s = e[2], a = e[3], e[4] = u * a + m * i +
				d * s - f * n, e[5] = d * a + m * n + f * i - u * s, e[6] = f * a + m * s + u * n - d *
				i, e[7] = m * a - u * i - d * n - f * s, e
		}

		function Kf(e, t, r) {
			var i = r[0],
				n = r[1],
				s = r[2],
				a = r[3],
				o = t[0],
				c = t[1],
				l = t[2],
				h = t[3];
			return e[0] = o * a + h * i + c * s - l * n, e[1] = c * a + h * n + l * i - o * s, e[2] =
				l * a + h * s + o * n - c * i, e[3] = h * a - o * i - c * n - l * s, o = t[4], c = t[5],
				l = t[6], h = t[7], e[4] = o * a + h * i + c * s - l * n, e[5] = c * a + h * n + l * i -
				o * s, e[6] = l * a + h * s + o * n - c * i, e[7] = h * a - o * i - c * n - l * s, e
		}

		function ed(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = r[0],
				c = r[1],
				l = r[2],
				h = r[3];
			return e[0] = i * h + a * o + n * l - s * c, e[1] = n * h + a * c + s * o - i * l, e[2] =
				s * h + a * l + i * c - n * o, e[3] = a * h - i * o - n * c - s * l, o = r[4], c = r[5],
				l = r[6], h = r[7], e[4] = i * h + a * o + n * l - s * c, e[5] = n * h + a * c + s * o -
				i * l, e[6] = s * h + a * l + i * c - n * o, e[7] = a * h - i * o - n * c - s * l, e
		}

		function td(e, t, r, i) {
			if (Math.abs(i) < Re.EPSILON) return Ss(e, t);
			var n = Math.hypot(r[0], r[1], r[2]);
			i = i * .5;
			var s = Math.sin(i),
				a = s * r[0] / n,
				o = s * r[1] / n,
				c = s * r[2] / n,
				l = Math.cos(i),
				h = t[0],
				u = t[1],
				d = t[2],
				f = t[3];
			e[0] = h * l + f * a + u * c - d * o, e[1] = u * l + f * o + d * a - h * c, e[2] = d * l +
				f * c + h * o - u * a, e[3] = f * l - h * a - u * o - d * c;
			var m = t[4],
				M = t[5],
				v = t[6],
				x = t[7];
			return e[4] = m * l + x * a + M * c - v * o, e[5] = M * l + x * o + v * a - m * c, e[6] =
				v * l + x * c + m * o - M * a, e[7] = x * l - m * a - M * o - v * c, e
		}

		function rd(e, t, r) {
			return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e[
				4] = t[4] + r[4], e[5] = t[5] + r[5], e[6] = t[6] + r[6], e[7] = t[7] + r[7], e
		}

		function Os(e, t, r) {
			var i = t[0],
				n = t[1],
				s = t[2],
				a = t[3],
				o = r[4],
				c = r[5],
				l = r[6],
				h = r[7],
				u = t[4],
				d = t[5],
				f = t[6],
				m = t[7],
				M = r[0],
				v = r[1],
				x = r[2],
				A = r[3];
			return e[0] = i * A + a * M + n * x - s * v, e[1] = n * A + a * v + s * M - i * x, e[2] =
				s * A + a * x + i * v - n * M, e[3] = a * A - i * M - n * v - s * x, e[4] = i * h + a *
				o + n * l - s * c + u * A + m * M + d * x - f * v, e[5] = n * h + a * c + s * o - i *
				l + d * A + m * v + f * M - u * x, e[6] = s * h + a * l + i * c - n * o + f * A + m *
				x + u * v - d * M, e[7] = a * h - i * o - n * c - s * l + m * A - u * M - d * v - f * x,
				e
		}
		var dd = Os;
		I.mul = dd;

		function id(e, t, r) {
			return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * r,
				e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e
		}
		var Bs = ot.dot;
		I.dot = Bs;

		function nd(e, t, r, i) {
			var n = 1 - i;
			return Bs(t, r) < 0 && (i = -i), e[0] = t[0] * n + r[0] * i, e[1] = t[1] * n + r[1] * i, e[
				2] = t[2] * n + r[2] * i, e[3] = t[3] * n + r[3] * i, e[4] = t[4] * n + r[4] * i, e[
				5] = t[5] * n + r[5] * i, e[6] = t[6] * n + r[6] * i, e[7] = t[7] * n + r[7] * i, e
		}

		function sd(e, t) {
			var r = Ir(t);
			return e[0] = -t[0] / r, e[1] = -t[1] / r, e[2] = -t[2] / r, e[3] = t[3] / r, e[4] = -t[4] /
				r, e[5] = -t[5] / r, e[6] = -t[6] / r, e[7] = t[7] / r, e
		}

		function ad(e, t) {
			return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e[4] = -t[4], e[5] = -t[5], e[
				6] = -t[6], e[7] = t[7], e
		}
		var Cs = ot.length;
		I.length = Cs;
		var vd = Cs;
		I.len = vd;
		var Ir = ot.squaredLength;
		I.squaredLength = Ir;
		var pd = Ir;
		I.sqrLen = pd;

		function od(e, t) {
			var r = Ir(t);
			if (r > 0) {
				r = Math.sqrt(r);
				var i = t[0] / r,
					n = t[1] / r,
					s = t[2] / r,
					a = t[3] / r,
					o = t[4],
					c = t[5],
					l = t[6],
					h = t[7],
					u = i * o + n * c + s * l + a * h;
				e[0] = i, e[1] = n, e[2] = s, e[3] = a, e[4] = (o - i * u) / r, e[5] = (c - n * u) / r,
					e[6] = (l - s * u) / r, e[7] = (h - a * u) / r
			}
			return e
		}

		function cd(e) {
			return "quat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[
				5] + ", " + e[6] + ", " + e[7] + ")"
		}

		function ld(e, t) {
			return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] &&
				e[5] === t[5] && e[6] === t[6] && e[7] === t[7]
		}

		function hd(e, t) {
			var r = e[0],
				i = e[1],
				n = e[2],
				s = e[3],
				a = e[4],
				o = e[5],
				c = e[6],
				l = e[7],
				h = t[0],
				u = t[1],
				d = t[2],
				f = t[3],
				m = t[4],
				M = t[5],
				v = t[6],
				x = t[7];
			return Math.abs(r - h) <= Re.EPSILON * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(i -
					u) <= Re.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(n - d) <= Re
				.EPSILON * Math.max(1, Math.abs(n), Math.abs(d)) && Math.abs(s - f) <= Re.EPSILON * Math
				.max(1, Math.abs(s), Math.abs(f)) && Math.abs(a - m) <= Re.EPSILON * Math.max(1, Math
					.abs(a), Math.abs(m)) && Math.abs(o - M) <= Re.EPSILON * Math.max(1, Math.abs(o),
					Math.abs(M)) && Math.abs(c - v) <= Re.EPSILON * Math.max(1, Math.abs(c), Math.abs(
					v)) && Math.abs(l - x) <= Re.EPSILON * Math.max(1, Math.abs(l), Math.abs(x))
		}
	});
	var Ws = R(S => {
		"use strict";

		function zr(e) {
			return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zr = function(
			r) {
				return typeof r
			} : zr = function(r) {
				return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol
					.prototype ? "symbol" : typeof r
			}, zr(e)
		}
		Object.defineProperty(S, "__esModule", {
			value: !0
		});
		S.create = Is;
		S.clone = md;
		S.fromValues = gd;
		S.copy = Md;
		S.set = yd;
		S.add = xd;
		S.subtract = zs;
		S.multiply = Fs;
		S.divide = Ns;
		S.ceil = _d;
		S.floor = bd;
		S.min = Rd;
		S.max = wd;
		S.round = Td;
		S.scale = Pd;
		S.scaleAndAdd = Ad;
		S.distance = Gs;
		S.squaredDistance = Us;
		S.length = Vs;
		S.squaredLength = ks;
		S.negate = Ed;
		S.inverse = Sd;
		S.normalize = Od;
		S.dot = Dd;
		S.cross = Ld;
		S.lerp = Bd;
		S.random = Cd;
		S.transformMat2 = qd;
		S.transformMat2d = Id;
		S.transformMat3 = zd;
		S.transformMat4 = Fd;
		S.rotate = Nd;
		S.angle = Gd;
		S.zero = Ud;
		S.str = Vd;
		S.exactEquals = kd;
		S.equals = Yd;
		S.forEach = S.sqrLen = S.sqrDist = S.dist = S.div = S.mul = S.sub = S.len = void 0;
		var Ot = Wd(Xe());

		function Ys() {
			if (typeof WeakMap != "function") return null;
			var e = new WeakMap;
			return Ys = function() {
				return e
			}, e
		}

		function Wd(e) {
			if (e && e.__esModule) return e;
			if (e === null || zr(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var t = Ys();
			if (t && t.has(e)) return t.get(e);
			var r = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
					s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n]
				} return r.default = e, t && t.set(e, r), r
		}

		function Is() {
			var e = new Ot.ARRAY_TYPE(2);
			return Ot.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0), e
		}

		function md(e) {
			var t = new Ot.ARRAY_TYPE(2);
			return t[0] = e[0], t[1] = e[1], t
		}

		function gd(e, t) {
			var r = new Ot.ARRAY_TYPE(2);
			return r[0] = e, r[1] = t, r
		}

		function Md(e, t) {
			return e[0] = t[0], e[1] = t[1], e
		}

		function yd(e, t, r) {
			return e[0] = t, e[1] = r, e
		}

		function xd(e, t, r) {
			return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e
		}

		function zs(e, t, r) {
			return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e
		}

		function Fs(e, t, r) {
			return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e
		}

		function Ns(e, t, r) {
			return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e
		}

		function _d(e, t) {
			return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e
		}

		function bd(e, t) {
			return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e
		}

		function Rd(e, t, r) {
			return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e
		}

		function wd(e, t, r) {
			return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e
		}

		function Td(e, t) {
			return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e
		}

		function Pd(e, t, r) {
			return e[0] = t[0] * r, e[1] = t[1] * r, e
		}

		function Ad(e, t, r, i) {
			return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e
		}

		function Gs(e, t) {
			var r = t[0] - e[0],
				i = t[1] - e[1];
			return Math.hypot(r, i)
		}

		function Us(e, t) {
			var r = t[0] - e[0],
				i = t[1] - e[1];
			return r * r + i * i
		}

		function Vs(e) {
			var t = e[0],
				r = e[1];
			return Math.hypot(t, r)
		}

		function ks(e) {
			var t = e[0],
				r = e[1];
			return t * t + r * r
		}

		function Ed(e, t) {
			return e[0] = -t[0], e[1] = -t[1], e
		}

		function Sd(e, t) {
			return e[0] = 1 / t[0], e[1] = 1 / t[1], e
		}

		function Od(e, t) {
			var r = t[0],
				i = t[1],
				n = r * r + i * i;
			return n > 0 && (n = 1 / Math.sqrt(n)), e[0] = t[0] * n, e[1] = t[1] * n, e
		}

		function Dd(e, t) {
			return e[0] * t[0] + e[1] * t[1]
		}

		function Ld(e, t, r) {
			var i = t[0] * r[1] - t[1] * r[0];
			return e[0] = e[1] = 0, e[2] = i, e
		}

		function Bd(e, t, r, i) {
			var n = t[0],
				s = t[1];
			return e[0] = n + i * (r[0] - n), e[1] = s + i * (r[1] - s), e
		}

		function Cd(e, t) {
			t = t || 1;
			var r = Ot.RANDOM() * 2 * Math.PI;
			return e[0] = Math.cos(r) * t, e[1] = Math.sin(r) * t, e
		}

		function qd(e, t, r) {
			var i = t[0],
				n = t[1];
			return e[0] = r[0] * i + r[2] * n, e[1] = r[1] * i + r[3] * n, e
		}

		function Id(e, t, r) {
			var i = t[0],
				n = t[1];
			return e[0] = r[0] * i + r[2] * n + r[4], e[1] = r[1] * i + r[3] * n + r[5], e
		}

		function zd(e, t, r) {
			var i = t[0],
				n = t[1];
			return e[0] = r[0] * i + r[3] * n + r[6], e[1] = r[1] * i + r[4] * n + r[7], e
		}

		function Fd(e, t, r) {
			var i = t[0],
				n = t[1];
			return e[0] = r[0] * i + r[4] * n + r[12], e[1] = r[1] * i + r[5] * n + r[13], e
		}

		function Nd(e, t, r, i) {
			var n = t[0] - r[0],
				s = t[1] - r[1],
				a = Math.sin(i),
				o = Math.cos(i);
			return e[0] = n * o - s * a + r[0], e[1] = n * a + s * o + r[1], e
		}

		function Gd(e, t) {
			var r = e[0],
				i = e[1],
				n = t[0],
				s = t[1],
				a = Math.sqrt(r * r + i * i) * Math.sqrt(n * n + s * s),
				o = a && (r * n + i * s) / a;
			return Math.acos(Math.min(Math.max(o, -1), 1))
		}

		function Ud(e) {
			return e[0] = 0, e[1] = 0, e
		}

		function Vd(e) {
			return "vec2(" + e[0] + ", " + e[1] + ")"
		}

		function kd(e, t) {
			return e[0] === t[0] && e[1] === t[1]
		}

		function Yd(e, t) {
			var r = e[0],
				i = e[1],
				n = t[0],
				s = t[1];
			return Math.abs(r - n) <= Ot.EPSILON * Math.max(1, Math.abs(r), Math.abs(n)) && Math.abs(i -
				s) <= Ot.EPSILON * Math.max(1, Math.abs(i), Math.abs(s))
		}
		var jd = Vs;
		S.len = jd;
		var Hd = zs;
		S.sub = Hd;
		var Xd = Fs;
		S.mul = Xd;
		var Qd = Ns;
		S.div = Qd;
		var $d = Gs;
		S.dist = $d;
		var Zd = Us;
		S.sqrDist = Zd;
		var Jd = ks;
		S.sqrLen = Jd;
		var Kd = function() {
			var e = Is();
			return function(t, r, i, n, s, a) {
				var o, c;
				for (r || (r = 2), i || (i = 0), n ? c = Math.min(n * r + i, t.length) : c = t
					.length, o = i; o < c; o += r) e[0] = t[o], e[1] = t[o + 1], s(e, e, a), t[
					o] = e[0], t[o + 1] = e[1];
				return t
			}
		}();
		S.forEach = Kd
	});
	var Nr = R(ne => {
		"use strict";

		function Fr(e) {
			return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fr = function(
			r) {
				return typeof r
			} : Fr = function(r) {
				return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol
					.prototype ? "symbol" : typeof r
			}, Fr(e)
		}
		Object.defineProperty(ne, "__esModule", {
			value: !0
		});
		ne.vec4 = ne.vec3 = ne.vec2 = ne.quat2 = ne.quat = ne.mat4 = ne.mat3 = ne.mat2d = ne.mat2 = ne
			.glMatrix = void 0;
		var e1 = Ke(Xe());
		ne.glMatrix = e1;
		var t1 = Ke(Nn());
		ne.mat2 = t1;
		var r1 = Ke(kn());
		ne.mat2d = r1;
		var i1 = Ke(Oi());
		ne.mat3 = i1;
		var n1 = Ke(Di());
		ne.mat4 = n1;
		var s1 = Ke(Ii());
		ne.quat = s1;
		var a1 = Ke(qs());
		ne.quat2 = a1;
		var o1 = Ke(Ws());
		ne.vec2 = o1;
		var c1 = Ke(Li());
		ne.vec3 = c1;
		var l1 = Ke(Bi());
		ne.vec4 = l1;

		function js() {
			if (typeof WeakMap != "function") return null;
			var e = new WeakMap;
			return js = function() {
				return e
			}, e
		}

		function Ke(e) {
			if (e && e.__esModule) return e;
			if (e === null || Fr(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var t = js();
			if (t && t.has(e)) return t.get(e);
			var r = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var n in e)
				if (Object.prototype.hasOwnProperty.call(e, n)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
					s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n]
				} return r.default = e, t && t.set(e, r), r
		}
	});
	var Ve = R($t => {
		"use strict";
		Object.defineProperty($t, "__esModule", {
			value: !0
		});
		$t.vec3 = $t.Vector3 = void 0;
		var Hs = mt(),
			Fi = pe(),
			h1 = Array,
			gt = class extends h1 {
				get x() {
					return this[0]
				}
				set x(t) {
					this[0] = t
				}
				get y() {
					return this[1]
				}
				set y(t) {
					this[1] = t
				}
				get z() {
					return this[2]
				}
				set z(t) {
					this[2] = t
				}
				get magnitude() {
					return Math.hypot(...this)
				}
				get normalized() {
					let t = this.magnitude;
					return t == 0 ? ze.zero() : this.clone().div(ze(t, t, t))
				}
				get negative() {
					return this.clone().negate()
				}
				get inversed() {
					return this.clone().inverse()
				}
				constructor(t, r, i) {
					super(t, r, i)
				}
				static zero() {
					return new gt(0, 0, 0)
				}
				static one() {
					return new gt(1, 1, 1)
				}
				plus(t) {
					return this[0] += t[0], this[1] += t[1], this[2] += t[2], this
				}
				minus(t) {
					return this[0] -= t[0], this[1] -= t[1], this[2] -= t[2], this
				}
				mul(t) {
					return this[0] *= t[0], this[1] *= t[1], this[2] *= t[2], this
				}
				div(t) {
					return this[0] /= t[0], this[1] /= t[1], this[2] /= t[2], this
				}
				dot(t) {
					return this[0] * t[0] + this[1] * t[1] + this[2] * t[2]
				}
				normalize() {
					let t = this.magnitude;
					return t == 0 ? ze.zero() : this.clone().div(ze(t, t, t))
				}
				inverse() {
					return this[0] = 1 / this[0], this[1] = 1 / this[1], this[2] = 1 / this[2], this
				}
				negate() {
					return this[0] = -this[0], this[1] = -this[1], this[2] = -this[2], this
				}
				cross(t) {
					return ze(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y -
						this.y * t.x)
				}
				clone() {
					return ze(this[0], this[1], this[2])
				}
				toVec2() {
					return Fi.vec2(this[0], this[1])
				}
				equals(t) {
					return t === void 0 ? !1 : t[0] === this[0] && t[1] === this[1] && t[2] === this[2]
				}
				__to(t) {
					switch (t) {
						case Hs.Vector4:
							return Hs.vec4(this[0], this[1], this[2], 0);
						case Fi.Vector2:
							return Fi.vec2(this[0], this[1])
					}
					return this.clone()
				}
			};
		$t.Vector3 = gt;

		function ze(e, t = e, r = e) {
			return new gt(e, t, r)
		}
		$t.vec3 = ze;
		ze.from = e => {
			let [t = 0, r = 0, i = 0] = e;
			return ze(t, r, i)
		};
		ze.floor = e => ze(Math.floor(e.x), Math.floor(e.y), Math.floor(e.z));
		ze.zero = gt.zero;
		ze.one = gt.one
	});
	var mt = R(Zt => {
		"use strict";
		Object.defineProperty(Zt, "__esModule", {
			value: !0
		});
		Zt.vec4 = Zt.Vector4 = void 0;
		var Xs = Ve(),
			Qs = pe(),
			u1 = Array,
			ct = class extends u1 {
				get x() {
					return this[0]
				}
				set x(t) {
					this[0] = t
				}
				get y() {
					return this[1]
				}
				set y(t) {
					this[1] = t
				}
				get z() {
					return this[2]
				}
				set z(t) {
					this[2] = t
				}
				get w() {
					return this[3]
				}
				set w(t) {
					this[3] = t
				}
				get magnitude() {
					return Math.hypot(...this)
				}
				get normalized() {
					let t = this.magnitude;
					return t == 0 ? ke.zero() : this.clone().div(ke(t, t, t, t))
				}
				get negative() {
					return this.clone().negate()
				}
				get inversed() {
					return this.clone().inverse()
				}
				constructor(t, r, i = 0, n = 0) {
					super(t, r, i || 0, n || 0)
				}
				static zero() {
					return new ct(0, 0, 0, 0)
				}
				static one() {
					return new ct(1, 1, 1, 1)
				}
				plus(t) {
					return this[0] += t[0], this[1] += t[1], this[2] += t[2], this[3] += t[3], this
				}
				minus(t) {
					return this[0] -= t[0], this[1] -= t[1], this[2] -= t[2], this[3] -= t[3], this
				}
				mul(t) {
					return this[0] *= t[0], this[1] *= t[1], this[2] *= t[2], this[3] *= t[3], this
				}
				div(t) {
					return this[0] /= t[0], this[1] /= t[1], this[2] /= t[2], this[3] /= t[3], this
				}
				dot(t) {
					return this[0] * t[0] + this[1] * t[1] + this[2] * t[2] + this[3] * t[3]
				}
				normalize() {
					let t = this.magnitude;
					return t == 0 ? ke.zero() : this.clone().div(ke(t, t, t, t))
				}
				inverse() {
					return this[0] = 1 / this[0], this[1] = 1 / this[1], this[2] = 1 / this[2], this[
						3] = 1 / this[3], this
				}
				negate() {
					return this[0] = -this[0], this[1] = -this[1], this[2] = -this[2], this[3] = -this[
						3], this
				}
				clone() {
					return ke(this[0], this[1], this[2], this[3])
				}
				equals(t) {
					return t === void 0 ? !1 : t[0] === this[0] && t[1] === this[1] && t[2] === this[
						2] && t[3] === this[3]
				}
				__to(t) {
					switch (t) {
						case ct:
							return this.clone();
						case Xs.Vector3:
							return Xs.vec3(this[0], this[1], this[2]);
						case Qs.Vector2:
							return Qs.vec2(this[0], this[1])
					}
					return this.clone()
				}
			};
		Zt.Vector4 = ct;

		function ke(e, t = e, r = e, i = e) {
			return new ct(e, t, r, i)
		}
		Zt.vec4 = ke;
		ke.from = e => {
			let [t = 0, r = 0, i = 0, n = 0] = e;
			return ke(t, r, i, n)
		};
		ke.floor = e => ke(Math.floor(e.x), Math.floor(e.y), Math.floor(e.z), Math.floor(e.w));
		ke.zero = ct.zero;
		ke.one = ct.one
	});
	var pe = R(Jt => {
		"use strict";
		Object.defineProperty(Jt, "__esModule", {
			value: !0
		});
		Jt.vec2 = Jt.Vector2 = void 0;
		var $s = mt(),
			Ni = Ve(),
			f1 = Array,
			me = class extends f1 {
				get x() {
					return this[0]
				}
				set x(t) {
					this[0] = t
				}
				get y() {
					return this[1]
				}
				set y(t) {
					this[1] = t
				}
				get magnitude() {
					return Math.hypot(...this)
				}
				get normalized() {
					let t = this.magnitude;
					return t == 0 ? ge.zero() : this.clone().div(ge(t, t))
				}
				get negative() {
					return this.clone().negate()
				}
				get inversed() {
					return this.clone().inverse()
				}
				constructor(t, r) {
					super(t, r)
				}
				static zero() {
					return new me(0, 0)
				}
				static one() {
					return new me(1, 1)
				}
				static up() {
					return new me(0, 1)
				}
				static down() {
					return new me(0, -1)
				}
				static left() {
					return new me(-1, 0)
				}
				static right() {
					return new me(1, 0)
				}
				static distance(t, r) {
					return Math.sqrt((t.x - r.x) * (t.x - r.x) + (t.y - r.y) * (t.y - r.y))
				}
				static distanceSquared(t, r) {
					return (t.x - r.x) * (t.x - r.x) + (t.y - r.y) * (t.y - r.y)
				}
				plus(t) {
					return this[0] += t[0], this[1] += t[1], this
				}
				minus(t) {
					return this[0] -= t[0], this[1] -= t[1], this
				}
				mul(t) {
					return this[0] *= t[0], this[1] *= t[1], this
				}
				div(t) {
					return this[0] /= t[0], this[1] /= t[1], this
				}
				dot(t) {
					return this[0] * t[0] + this[1] * t[1]
				}
				normalize() {
					let t = this.magnitude;
					return t == 0 ? ge.zero() : this.clone().div(ge(t, t))
				}
				inverse() {
					return this[0] = 1 / this[0], this[1] = 1 / this[1], this
				}
				negate() {
					return this[0] = -this[0], this[1] = -this[1], this
				}
				cross(t) {
					return this.x * t.y - this.y * t.x
				}
				clone() {
					return ge(this[0], this[1])
				}
				toVec3(t = 0) {
					return Ni.vec3(this[0], this[1], t)
				}
				__to(t) {
					switch (t) {
						case $s.Vector4:
							return $s.vec4(this[0], this[1], 0, 0);
						case Ni.Vector3:
							return Ni.vec3(this[0], this[1], 0)
					}
					return this.clone()
				}
				equals(t) {
					return t === void 0 ? !1 : t[0] === this[0] && t[1] === this[1]
				}
			};
		Jt.Vector2 = me;

		function ge(e, t = e) {
			return new me(e, t)
		}
		Jt.vec2 = ge;
		ge.from = e => {
			let [t = 0, r = 0] = e;
			return ge(t, r)
		};
		ge.floor = e => ge(Math.floor(e.x), Math.floor(e.y));
		ge.zero = me.zero;
		ge.one = me.one;
		ge.left = me.left;
		ge.right = me.right;
		ge.down = me.down;
		ge.up = me.up
	});
	var Qe = R(Mt => {
		"use strict";
		Object.defineProperty(Mt, "__esModule", {
			value: !0
		});
		Mt.rgb = Mt.rgba = Mt.Color = void 0;
		var d1 = mt(),
			Me = class extends d1.Vector4 {
				get r() {
					return this[0]
				}
				set r(t) {
					this[0] = t
				}
				get g() {
					return this[1]
				}
				set g(t) {
					this[1] = t
				}
				get b() {
					return this[2]
				}
				set b(t) {
					this[2] = t
				}
				get a() {
					return this[3]
				}
				set a(t) {
					this[3] = t
				}
				constructor(t, r, i, n = 1) {
					super(t, r, i, n)
				}
				static get white() {
					return new Me(1, 1, 1)
				}
				static get transparent() {
					return new Me(1, 1, 1, 0)
				}
				static get black() {
					return new Me(0, 0, 0)
				}
				static get red() {
					return new Me(1, 0, 0)
				}
				static get green() {
					return new Me(0, 1, 0)
				}
				static get blue() {
					return new Me(0, 0, 1)
				}
				static get cyan() {
					return new Me(0, 1, 1)
				}
				static get yellow() {
					return new Me(1, 1, 0)
				}
				static get magenta() {
					return new Me(1, 0, 1)
				}
				static get gray() {
					return new Me(.5, .5, .5)
				}
				transparent() {
					return new Me(this.r, this.g, this.b, 0)
				}
			};
		Mt.Color = Me;
		var v1 = (e, t, r, i = 1) => new Me(e, t, r, i);
		Mt.rgba = v1;
		var p1 = (e, t, r) => new Me(e, t, r, 1);
		Mt.rgb = p1
	});
	var yt = R(oe => {
		"use strict";
		Object.defineProperty(oe, "__esModule", {
			value: !0
		});
		oe.Rad2Deg = oe.Deg2Rad = oe.distance = oe.cross = oe.dot = oe.div = oe.mul = oe.minus = oe
			.plus = void 0;
		var Zs = Ve(),
			Js = mt(),
			Ks = pe();
		Number.prototype.__to = function(e) {
			switch (e) {
				case Js.Vector4:
					return Js.vec4(this.valueOf(), this.valueOf(), this.valueOf(), this.valueOf());
				case Zs.Vector3:
					return Zs.vec3(this.valueOf(), this.valueOf(), this.valueOf());
				case Ks.Vector2:
					return Ks.vec2(this.valueOf(), this.valueOf())
			}
			return this.valueOf()
		};

		function Gr(e, t) {
			return typeof e == "number" ? [t, e, !0] : typeof t == "number" ? [e, t, !1] : t.length > e
				.length ? [t, e, !0] : [e, t, !1]
		}

		function m1(e, t) {
			let [r, i] = Gr(e, t);
			return i.__to(r.constructor).plus(r)
		}
		oe.plus = m1;

		function ea(e, t) {
			let [r, i, n] = Gr(e, t);
			return n ? i.__to(r.constructor).minus(r) : i.__to(r.constructor).minus(r).negate()
		}
		oe.minus = ea;

		function g1(e, t) {
			let [r, i] = Gr(e, t);
			return i.__to(r.constructor).mul(r)
		}
		oe.mul = g1;

		function M1(e, t) {
			let [r, i, n] = Gr(e, t);
			return n ? i.__to(r.constructor).div(r) : i.__to(r.constructor).div(r).inversed
		}
		oe.div = M1;

		function y1(e, t) {
			return e.dot(t)
		}
		oe.dot = y1;

		function x1(e, t) {
			return e.cross(t)
		}
		oe.cross = x1;

		function _1(e, t) {
			return ea(t, e).magnitude
		}
		oe.distance = _1;
		oe.Deg2Rad = Math.PI / 180;
		oe.Rad2Deg = 180 / Math.PI
	});
	var _t = R(xt => {
		"use strict";
		Object.defineProperty(xt, "__esModule", {
			value: !0
		});
		xt.mat4 = xt.Matrix4x4 = void 0;
		var V = Nr(),
			Ur = Ve(),
			yr = mt();

		function ae(e) {
			return V.mat4.clone(e)
		}
		xt.Matrix4x4 = ae;
		ae.identity = () => {
			let e = V.mat4.create();
			return V.mat4.identity(e)
		};
		ae.rts = (e, t, r) => {
			let i = xt.mat4.identity();
			return V.mat4.fromRotationTranslationScale(i, e, t, r), i
		};
		ae.translate = e => {
			let t = xt.mat4.identity();
			return V.mat4.translate(t, V.mat4.identity(t), e)
		};
		ae.invert = e => {
			let t = V.mat4.create();
			return V.mat4.invert(t, e), t
		};
		ae.getTranslation = e => {
			let t = Ur.vec3(0, 0, 0);
			return V.mat4.getTranslation(t, e), t
		};
		ae.getRotation = e => {
			let t = V.quat.create();
			return V.mat4.getRotation(t, e), t
		};
		ae.getScaling = e => {
			let t = Ur.vec3(0, 0, 0);
			return V.mat4.getScaling(t, e), t
		};
		ae.mulPoint = (e, t) => {
			let r = yr.vec4(t.x, t.y, t.z, 1),
				i = yr.vec4.zero();
			return V.vec4.transformMat4(i, r, e), Ur.vec3(i.x, i.y, i.z)
		};
		ae.mulVector = (e, t) => {
			let r = yr.vec4(t.x, t.y, t.z, 0),
				i = yr.vec4.zero();
			return V.vec4.transformMat4(i, r, e), Ur.vec3(i.x, i.y, i.z)
		};
		ae.mulVec4 = (e, t) => {
			let r = yr.vec4.zero();
			return V.vec4.transformMat4(r, t, e), r
		};
		ae.perspective = (e, t, r, i) => {
			let n = V.mat4.create();
			return V.mat4.perspective(n, e, t, r, i)
		};
		ae.transpose = e => V.mat4.transpose(V.mat4.create(), e);

		function b1(e, t, r, i) {
			let n = V.mat4.create();
			return V.mat4.ortho(n, -t * e, t * e, -e, e, r, i), n
		}

		function R1(...e) {
			if (e.length === 4) return b1(...e);
			let t = V.mat4.create();
			return V.mat4.ortho(t, ...e), t
		}
		ae.ortho = R1;
		ae.rotate = (e, t, r) => V.mat4.rotate(V.mat4.create(), e, r, t);
		ae.scale = (e, t) => V.mat4.scale(V.mat4.create(), e, t);
		ae.fromRotation = (e, t) => V.mat4.fromRotation(V.mat4.create(), t, e);
		ae.fromScaling = e => V.mat4.fromScaling(V.mat4.create(), e);
		ae.equal = (e, t) => e === void 0 || t === void 0 || !(e instanceof Array ||
				e instanceof Float32Array) || !(t instanceof Array || t instanceof Float32Array) ? !1 :
			V.mat4.exactEquals(e, t);
		ae.mul = (e, t, r) => (r || (r = t, t = e, e = V.mat4.create()), V.mat4.mul(e, t, r));
		xt.mat4 = ae
	});
	var Ui = R(Dt => {
		"use strict";
		Object.defineProperty(Dt, "__esModule", {
			value: !0
		});
		Dt.quat = Dt.Quaternion = void 0;
		var we = Nr(),
			ta = Ve(),
			Gi = yt();

		function Ye() {
			return we.quat.create()
		}
		Dt.Quaternion = Ye;
		Ye.identity = () => {
			let e = we.quat.create();
			return we.quat.identity(e), e
		};
		Ye.axis = (e, t) => we.quat.setAxisAngle(we.quat.create(), e, t);
		Ye.mul = (e, t) => {
			let r = we.quat.create();
			return we.quat.mul(r, e, t)
		};
		Ye.invert = e => {
			let t = we.quat.create();
			return we.quat.invert(t, e)
		};
		Ye.normalize = e => we.quat.normalize(we.quat.create(), e);
		Ye.euler = e => ta.vec3(Math.atan2(2 * (e[3] * e[0] + e[1] * e[2]), 1 - 2 * (e[0] ** 2 + e[1] **
				2)) * Gi.Rad2Deg, Math.asin(2 * (e[3] * e[1] - e[2] * e[0])) * Gi.Rad2Deg, Math
			.atan2(2 * (e[3] * e[2] + e[0] * e[1]), 1 - 2 * (e[1] ** 2, e[2] ** 2)) * Gi.Rad2Deg);
		Ye.fromEuler = e => we.quat.fromEuler(we.quat.create(), e[0], e[1], e[2]);
		Ye.rotate = (e, t) => we.vec3.transformQuat(ta.vec3(0, 0, 0), t, e);
		Ye.equals = (e, t) => we.quat.exactEquals(e, t);
		Dt.quat = Ye;
		Dt.quat.identity = Ye.identity
	});
	var Vi = R(Vr => {
		"use strict";
		Object.defineProperty(Vr, "__esModule", {
			value: !0
		});
		Vr.ray = void 0;

		function w1(e, t) {
			return {
				origin: e,
				direction: t.normalized
			}
		}
		Vr.ray = w1
	});
	var Yr = R(kr => {
		"use strict";
		Object.defineProperty(kr, "__esModule", {
			value: !0
		});
		kr.Rect = void 0;
		var Lt = yt(),
			Bt = pe(),
			Kt = class {
				constructor(t, r) {
					this.min = t, this.max = Lt.plus(t, r)
				}
				get xMin() {
					return this.min.x
				}
				get yMin() {
					return this.min.y
				}
				get xMax() {
					return this.max.x
				}
				get yMax() {
					return this.max.y
				}
				get size() {
					return Lt.minus(this.max, this.min)
				}
				get center() {
					return Lt.plus(this.min, this.max).mul(Bt.vec2(.5))
				}
				shrink(t) {
					let r = Lt.plus(this.min, Bt.vec2(t)),
						i = Lt.minus(this.max, Bt.vec2(t));
					return r.x > i.x && (r.x = i.x = (r.x + i.x) / 2), r.y > i.y && (r.y = i.y = (r
						.y + i.y) / 2), new Kt(r, i.minus(r))
				}
				expand(t) {
					return new Kt(Lt.minus(this.min, Bt.vec2(t)), Lt.plus(this.size, Bt.vec2(2 *
						t)))
				}
				static box01() {
					return new Kt(Bt.vec2.zero(), Bt.vec2.one())
				}
			};
		kr.Rect = Kt
	});
	var ki = R(Te => {
		"use strict";
		var T1 = Te && Te.__createBinding || (Object.create ? function(e, t, r, i) {
				i === void 0 && (i = r), Object.defineProperty(e, i, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, i) {
				i === void 0 && (i = r), e[i] = t[r]
			}),
			lt = Te && Te.__exportStar || function(e, t) {
				for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && T1(t,
					e, r)
			};
		Object.defineProperty(Te, "__esModule", {
			value: !0
		});
		var P1 = Nr();
		P1.glMatrix.setMatrixArrayType(Array);
		lt(pe(), Te);
		lt(Ve(), Te);
		lt(mt(), Te);
		lt(Qe(), Te);
		lt(yt(), Te);
		lt(_t(), Te);
		lt(Ui(), Te);
		lt(Vi(), Te);
		lt(Yr(), Te)
	});
	var Wr = R(() => {
		var ra;
		(function(e) {
			(function(t) {
				var r = typeof global == "object" ? global : typeof self == "object" ? self :
					typeof this == "object" ? this : Function("return this;")(),
					i = n(e);
				typeof r.Reflect == "undefined" ? r.Reflect = e : i = n(r.Reflect, i), t(i);

				function n(s, a) {
					return function(o, c) {
						typeof s[o] != "function" && Object.defineProperty(s, o, {
							configurable: !0,
							writable: !0,
							value: c
						}), a && a(o, c)
					}
				}
			})(function(t) {
				var r = Object.prototype.hasOwnProperty,
					i = typeof Symbol == "function",
					n = i && typeof Symbol.toPrimitive != "undefined" ? Symbol.toPrimitive :
					"@@toPrimitive",
					s = i && typeof Symbol.iterator != "undefined" ? Symbol.iterator :
					"@@iterator",
					a = typeof Object.create == "function",
					o = {
						__proto__: []
					}
				instanceof Array, c = !a && !o, l = {
						create: a ? function() {
							return Si(Object.create(null))
						} : o ? function() {
							return Si({
								__proto__: null
							})
						} : function() {
							return Si({})
						},
						has: c ? function(p, y) {
							return r.call(p, y)
						} : function(p, y) {
							return y in p
						},
						get: c ? function(p, y) {
							return r.call(p, y) ? p[y] : void 0
						} : function(p, y) {
							return p[y]
						}
					}, h = Object.getPrototypeOf(Function), u = typeof process == "object" &&
					process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true",
					d = !u && typeof Map == "function" && typeof Map.prototype.entries ==
					"function" ? Map : dc(), f = !u && typeof Set == "function" && typeof Set
					.prototype.entries == "function" ? Set : vc(), m = !u && typeof WeakMap ==
					"function" ? WeakMap : pc(), M = new m;

				function v(p, y, _, b) {
					if (le(_)) {
						if (!En(p)) throw new TypeError;
						if (!Sn(y)) throw new TypeError;
						return Q(p, y)
					} else {
						if (!En(p)) throw new TypeError;
						if (!fe(y)) throw new TypeError;
						if (!fe(b) && !le(b) && !Ht(b)) throw new TypeError;
						return Ht(b) && (b = void 0), _ = nt(_), re(p, y, _, b)
					}
				}
				t("decorate", v);

				function x(p, y) {
					function _(b, O) {
						if (!fe(b)) throw new TypeError;
						if (!le(O) && !cc(O)) throw new TypeError;
						dt(p, y, b, O)
					}
					return _
				}
				t("metadata", x);

				function A(p, y, _, b) {
					if (!fe(_)) throw new TypeError;
					return le(b) || (b = nt(b)), dt(p, y, _, b)
				}
				t("defineMetadata", A);

				function T(p, y, _) {
					if (!fe(y)) throw new TypeError;
					return le(_) || (_ = nt(_)), te(p, y, _)
				}
				t("hasMetadata", T);

				function E(p, y, _) {
					if (!fe(y)) throw new TypeError;
					return le(_) || (_ = nt(_)), z(p, y, _)
				}
				t("hasOwnMetadata", E);

				function L(p, y, _) {
					if (!fe(y)) throw new TypeError;
					return le(_) || (_ = nt(_)), Se(p, y, _)
				}
				t("getMetadata", L);

				function D(p, y, _) {
					if (!fe(y)) throw new TypeError;
					return le(_) || (_ = nt(_)), ft(p, y, _)
				}
				t("getOwnMetadata", D);

				function ee(p, y) {
					if (!fe(p)) throw new TypeError;
					return le(y) || (y = nt(y)), gr(p, y)
				}
				t("getMetadataKeys", ee);

				function Z(p, y) {
					if (!fe(p)) throw new TypeError;
					return le(y) || (y = nt(y)), Mr(p, y)
				}
				t("getOwnMetadataKeys", Z);

				function J(p, y, _) {
					if (!fe(y)) throw new TypeError;
					le(_) || (_ = nt(_));
					var b = j(y, _, !1);
					if (le(b) || !b.delete(p)) return !1;
					if (b.size > 0) return !0;
					var O = M.get(y);
					return O.delete(_), O.size > 0 || M.delete(y), !0
				}
				t("deleteMetadata", J);

				function Q(p, y) {
					for (var _ = p.length - 1; _ >= 0; --_) {
						var b = p[_],
							O = b(y);
						if (!le(O) && !Ht(O)) {
							if (!Sn(O)) throw new TypeError;
							y = O
						}
					}
					return y
				}

				function re(p, y, _, b) {
					for (var O = p.length - 1; O >= 0; --O) {
						var ve = p[O],
							F = ve(y, _, b);
						if (!le(F) && !Ht(F)) {
							if (!fe(F)) throw new TypeError;
							b = F
						}
					}
					return b
				}

				function j(p, y, _) {
					var b = M.get(p);
					if (le(b)) {
						if (!_) return;
						b = new d, M.set(p, b)
					}
					var O = b.get(y);
					if (le(O)) {
						if (!_) return;
						O = new d, b.set(y, O)
					}
					return O
				}

				function te(p, y, _) {
					var b = z(p, y, _);
					if (b) return !0;
					var O = Ei(y);
					return Ht(O) ? !1 : te(p, O, _)
				}

				function z(p, y, _) {
					var b = j(y, _, !1);
					return le(b) ? !1 : ac(b.has(p))
				}

				function Se(p, y, _) {
					var b = z(p, y, _);
					if (b) return ft(p, y, _);
					var O = Ei(y);
					if (!Ht(O)) return Se(p, O, _)
				}

				function ft(p, y, _) {
					var b = j(y, _, !1);
					if (!le(b)) return b.get(p)
				}

				function dt(p, y, _, b) {
					var O = j(_, b, !0);
					O.set(p, y)
				}

				function gr(p, y) {
					var _ = Mr(p, y),
						b = Ei(p);
					if (b === null) return _;
					var O = gr(b, y);
					if (O.length <= 0) return _;
					if (_.length <= 0) return O;
					for (var ve = new f, F = [], N = 0, q = _; N < q.length; N++) {
						var k = q[N],
							Y = ve.has(k);
						Y || (ve.add(k), F.push(k))
					}
					for (var vt = 0, Dn = O; vt < Dn.length; vt++) {
						var k = Dn[vt],
							Y = ve.has(k);
						Y || (ve.add(k), F.push(k))
					}
					return F
				}

				function Mr(p, y) {
					var _ = [],
						b = j(p, y, !1);
					if (le(b)) return _;
					for (var O = b.keys(), ve = lc(O), F = 0;;) {
						var N = uc(ve);
						if (!N) return _.length = F, _;
						var q = hc(N);
						try {
							_[F] = q
						} catch (k) {
							try {
								fc(ve)
							} finally {
								throw k
							}
						}
						F++
					}
				}

				function An(p) {
					if (p === null) return 1;
					switch (typeof p) {
						case "undefined":
							return 0;
						case "boolean":
							return 2;
						case "string":
							return 3;
						case "symbol":
							return 4;
						case "number":
							return 5;
						case "object":
							return p === null ? 1 : 6;
						default:
							return 6
					}
				}

				function le(p) {
					return p === void 0
				}

				function Ht(p) {
					return p === null
				}

				function ic(p) {
					return typeof p == "symbol"
				}

				function fe(p) {
					return typeof p == "object" ? p !== null : typeof p == "function"
				}

				function nc(p, y) {
					switch (An(p)) {
						case 0:
							return p;
						case 1:
							return p;
						case 2:
							return p;
						case 3:
							return p;
						case 4:
							return p;
						case 5:
							return p
					}
					var _ = y === 3 ? "string" : y === 5 ? "number" : "default",
						b = On(p, n);
					if (b !== void 0) {
						var O = b.call(p, _);
						if (fe(O)) throw new TypeError;
						return O
					}
					return sc(p, _ === "default" ? "number" : _)
				}

				function sc(p, y) {
					if (y === "string") {
						var _ = p.toString;
						if (Xt(_)) {
							var b = _.call(p);
							if (!fe(b)) return b
						}
						var O = p.valueOf;
						if (Xt(O)) {
							var b = O.call(p);
							if (!fe(b)) return b
						}
					} else {
						var O = p.valueOf;
						if (Xt(O)) {
							var b = O.call(p);
							if (!fe(b)) return b
						}
						var ve = p.toString;
						if (Xt(ve)) {
							var b = ve.call(p);
							if (!fe(b)) return b
						}
					}
					throw new TypeError
				}

				function ac(p) {
					return !!p
				}

				function oc(p) {
					return "" + p
				}

				function nt(p) {
					var y = nc(p, 3);
					return ic(y) ? y : oc(y)
				}

				function En(p) {
					return Array.isArray ? Array.isArray(p) : p instanceof Object ?
						p instanceof Array : Object.prototype.toString.call(p) ===
						"[object Array]"
				}

				function Xt(p) {
					return typeof p == "function"
				}

				function Sn(p) {
					return typeof p == "function"
				}

				function cc(p) {
					switch (An(p)) {
						case 3:
							return !0;
						case 4:
							return !0;
						default:
							return !1
					}
				}

				function On(p, y) {
					var _ = p[y];
					if (_ != null) {
						if (!Xt(_)) throw new TypeError;
						return _
					}
				}

				function lc(p) {
					var y = On(p, s);
					if (!Xt(y)) throw new TypeError;
					var _ = y.call(p);
					if (!fe(_)) throw new TypeError;
					return _
				}

				function hc(p) {
					return p.value
				}

				function uc(p) {
					var y = p.next();
					return y.done ? !1 : y
				}

				function fc(p) {
					var y = p.return;
					y && y.call(p)
				}

				function Ei(p) {
					var y = Object.getPrototypeOf(p);
					if (typeof p != "function" || p === h || y !== h) return y;
					var _ = p.prototype,
						b = _ && Object.getPrototypeOf(_);
					if (b == null || b === Object.prototype) return y;
					var O = b.constructor;
					return typeof O != "function" || O === p ? y : O
				}

				function dc() {
					var p = {},
						y = [],
						_ = function() {
							function F(N, q, k) {
								this._index = 0, this._keys = N, this._values = q, this
									._selector = k
							}
							return F.prototype["@@iterator"] = function() {
								return this
							}, F.prototype[s] = function() {
								return this
							}, F.prototype.next = function() {
								var N = this._index;
								if (N >= 0 && N < this._keys.length) {
									var q = this._selector(this._keys[N], this._values[N]);
									return N + 1 >= this._keys.length ? (this._index = -1,
											this._keys = y, this._values = y) : this
										._index++, {
											value: q,
											done: !1
										}
								}
								return {
									value: void 0,
									done: !0
								}
							}, F.prototype.throw = function(N) {
								throw this._index >= 0 && (this._index = -1, this._keys = y,
									this._values = y), N
							}, F.prototype.return = function(N) {
								return this._index >= 0 && (this._index = -1, this._keys =
									y, this._values = y), {
									value: N,
									done: !0
								}
							}, F
						}();
					return function() {
						function F() {
							this._keys = [], this._values = [], this._cacheKey = p, this
								._cacheIndex = -2
						}
						return Object.defineProperty(F.prototype, "size", {
							get: function() {
								return this._keys.length
							},
							enumerable: !0,
							configurable: !0
						}), F.prototype.has = function(N) {
							return this._find(N, !1) >= 0
						}, F.prototype.get = function(N) {
							var q = this._find(N, !1);
							return q >= 0 ? this._values[q] : void 0
						}, F.prototype.set = function(N, q) {
							var k = this._find(N, !0);
							return this._values[k] = q, this
						}, F.prototype.delete = function(N) {
							var q = this._find(N, !1);
							if (q >= 0) {
								for (var k = this._keys.length, Y = q + 1; Y < k; Y++)
									this._keys[Y - 1] = this._keys[Y], this._values[Y -
										1] = this._values[Y];
								return this._keys.length--, this._values.length--, N ===
									this._cacheKey && (this._cacheKey = p, this
										._cacheIndex = -2), !0
							}
							return !1
						}, F.prototype.clear = function() {
							this._keys.length = 0, this._values.length = 0, this
								._cacheKey = p, this._cacheIndex = -2
						}, F.prototype.keys = function() {
							return new _(this._keys, this._values, b)
						}, F.prototype.values = function() {
							return new _(this._keys, this._values, O)
						}, F.prototype.entries = function() {
							return new _(this._keys, this._values, ve)
						}, F.prototype["@@iterator"] = function() {
							return this.entries()
						}, F.prototype[s] = function() {
							return this.entries()
						}, F.prototype._find = function(N, q) {
							return this._cacheKey !== N && (this._cacheIndex = this
									._keys.indexOf(this._cacheKey = N)), this
								._cacheIndex < 0 && q && (this._cacheIndex = this._keys
									.length, this._keys.push(N), this._values.push(
										void 0)), this._cacheIndex
						}, F
					}();

					function b(F, N) {
						return F
					}

					function O(F, N) {
						return N
					}

					function ve(F, N) {
						return [F, N]
					}
				}

				function vc() {
					return function() {
						function p() {
							this._map = new d
						}
						return Object.defineProperty(p.prototype, "size", {
							get: function() {
								return this._map.size
							},
							enumerable: !0,
							configurable: !0
						}), p.prototype.has = function(y) {
							return this._map.has(y)
						}, p.prototype.add = function(y) {
							return this._map.set(y, y), this
						}, p.prototype.delete = function(y) {
							return this._map.delete(y)
						}, p.prototype.clear = function() {
							this._map.clear()
						}, p.prototype.keys = function() {
							return this._map.keys()
						}, p.prototype.values = function() {
							return this._map.values()
						}, p.prototype.entries = function() {
							return this._map.entries()
						}, p.prototype["@@iterator"] = function() {
							return this.keys()
						}, p.prototype[s] = function() {
							return this.keys()
						}, p
					}()
				}

				function pc() {
					var p = 16,
						y = l.create(),
						_ = b();
					return function() {
						function q() {
							this._key = b()
						}
						return q.prototype.has = function(k) {
							var Y = O(k, !1);
							return Y !== void 0 ? l.has(Y, this._key) : !1
						}, q.prototype.get = function(k) {
							var Y = O(k, !1);
							return Y !== void 0 ? l.get(Y, this._key) : void 0
						}, q.prototype.set = function(k, Y) {
							var vt = O(k, !0);
							return vt[this._key] = Y, this
						}, q.prototype.delete = function(k) {
							var Y = O(k, !1);
							return Y !== void 0 ? delete Y[this._key] : !1
						}, q.prototype.clear = function() {
							this._key = b()
						}, q
					}();

					function b() {
						var q;
						do q = "@@WeakMap@@" + N(); while (l.has(y, q));
						return y[q] = !0, q
					}

					function O(q, k) {
						if (!r.call(q, _)) {
							if (!k) return;
							Object.defineProperty(q, _, {
								value: l.create()
							})
						}
						return q[_]
					}

					function ve(q, k) {
						for (var Y = 0; Y < k; ++Y) q[Y] = Math.random() * 255 | 0;
						return q
					}

					function F(q) {
						return typeof Uint8Array == "function" ? typeof crypto != "undefined" ?
							crypto.getRandomValues(new Uint8Array(q)) : typeof msCrypto !=
							"undefined" ? msCrypto.getRandomValues(new Uint8Array(q)) : ve(
								new Uint8Array(q), q) : ve(new Array(q), q)
					}

					function N() {
						var q = F(p);
						q[6] = q[6] & 79 | 64, q[8] = q[8] & 191 | 128;
						for (var k = "", Y = 0; Y < p; ++Y) {
							var vt = q[Y];
							(Y === 4 || Y === 6 || Y === 8) && (k += "-"), vt < 16 && (k +=
								"0"), k += vt.toString(16).toLowerCase()
						}
						return k
					}
				}

				function Si(p) {
					return p.__ = void 0, delete p.__, p
				}
			})
		})(ra || (ra = {}))
	});
	var ye = R(ht => {
		"use strict";
		Object.defineProperty(ht, "__esModule", {
			value: !0
		});
		ht.GL = ht.GlobalContext = ht.setGlobalContext = void 0;
		var ia, A1 = e => ia = e;
		ht.setGlobalContext = A1;
		var E1 = () => ia;
		ht.GlobalContext = E1;
		var S1 = () => {
			var e;
			return (e = ht.GlobalContext()) === null || e === void 0 ? void 0 : e.gl
		};
		ht.GL = S1
	});
	var er = R(Ct => {
		"use strict";
		Object.defineProperty(Ct, "__esModule", {
			value: !0
		});
		Ct.mapGLFormat = Ct.TextureFormat = void 0;
		var W;
		(function(e) {
			e[e.RGB = 1] = "RGB", e[e.RGBA = 2] = "RGBA", e[e.LUMINANCE_ALPHA = 3] =
				"LUMINANCE_ALPHA", e[e.LUMINANCE = 4] = "LUMINANCE", e[e.ALPHA = 5] = "ALPHA", e[e
					.R8 = 6] = "R8", e[e.R16F = 7] = "R16F", e[e.R32F = 8] = "R32F", e[e.R8UI = 9] =
				"R8UI", e[e.RG8 = 10] = "RG8", e[e.RG16F = 11] = "RG16F", e[e.RG32F = 12] = "RG32F",
				e[e.RG8UI = 13] = "RG8UI", e[e.RGB8 = 14] = "RGB8", e[e.SRGB8 = 15] = "SRGB8", e[e
					.RGB565 = 16] = "RGB565", e[e.R11F_G11F_B10F = 17] = "R11F_G11F_B10F", e[e
					.RGB9_E5 = 18] = "RGB9_E5", e[e.RGB16F = 19] = "RGB16F", e[e.RGB32F = 20] =
				"RGB32F", e[e.RGB8UI = 21] = "RGB8UI", e[e.RGBA8 = 22] = "RGBA8", e[e.SRGB8_ALPHA8 =
					23] = "SRGB8_ALPHA8", e[e.RGB5_A1 = 24] = "RGB5_A1", e[e.RGB10_A2 = 25] =
				"RGB10_A2", e[e.RGBA4 = 26] = "RGBA4", e[e.RGBA16F = 27] = "RGBA16F", e[e.RGBA32F =
					28] = "RGBA32F", e[e.RGBA8UI = 29] = "RGBA8UI", e[e.DEPTH_COMPONENT = 30] =
				"DEPTH_COMPONENT", e[e.DEPTH_STENCIL = 31] = "DEPTH_STENCIL"
		})(W = Ct.TextureFormat || (Ct.TextureFormat = {}));

		function O1(e, t) {
			return {
				[W.RGB]: [e.RGB, e.RGB, e.UNSIGNED_BYTE],
				[W.RGBA]: [e.RGBA, e.RGBA, e.UNSIGNED_BYTE],
				[W.LUMINANCE_ALPHA]: [e.LUMINANCE_ALPHA, e.LUMINANCE_ALPHA, e.UNSIGNED_BYTE],
				[W.LUMINANCE]: [e.LUMINANCE, e.LUMINANCE, e.UNSIGNED_BYTE],
				[W.ALPHA]: [e.ALPHA, e.ALPHA, e.UNSIGNED_BYTE],
				[W.R8]: [e.R8, e.RED, e.UNSIGNED_BYTE],
				[W.R16F]: [e.R16F, e.RED, e.HALF_FLOAT],
				[W.R32F]: [e.R32F, e.RED, e.FLOAT],
				[W.R8UI]: [e.R8UI, e.RED_INTEGER, e.UNSIGNED_BYTE],
				[W.RG8]: [e.RG8, e.RG, e.UNSIGNED_BYTE],
				[W.RG16F]: [e.RG16F, e.RG, e.HALF_FLOAT],
				[W.RG32F]: [e.RG32F, e.RG, e.FLOAT],
				[W.RG8UI]: [e.RG8UI, e.RG_INTEGER, e.UNSIGNED_BYTE],
				[W.RGB8]: [e.RGB8, e.RGB, e.UNSIGNED_BYTE],
				[W.SRGB8]: [e.SRGB8, e.RGB, e.UNSIGNED_BYTE],
				[W.RGB565]: [e.RGB565, e.RGB, e.UNSIGNED_BYTE],
				[W.R11F_G11F_B10F]: [e.R11F_G11F_B10F, e.RGB, e.UNSIGNED_INT_10F_11F_11F_REV],
				[W.RGB9_E5]: [e.RGB9_E5, e.RGB, e.HALF_FLOAT],
				[W.RGB16F]: [e.RGB16F, e.RGB, e.HALF_FLOAT],
				[W.RGB32F]: [e.RGB32F, e.RGB, e.FLOAT],
				[W.RGB8UI]: [e.RGB8UI, e.RGB_INTEGER, e.UNSIGNED_BYTE],
				[W.RGBA8]: [e.RGBA8, e.RGBA, e.UNSIGNED_BYTE],
				[W.SRGB8_ALPHA8]: [e.SRGB8_ALPHA8, e.RGBA, e.UNSIGNED_BYTE],
				[W.RGB5_A1]: [e.RGB5_A1, e.RGBA, e.UNSIGNED_BYTE],
				[W.RGB10_A2]: [e.RGB10_A2, e.RGBA, e.UNSIGNED_INT_2_10_10_10_REV],
				[W.RGBA4]: [e.RGBA4, e.RGBA, e.UNSIGNED_BYTE],
				[W.RGBA16F]: [e.RGBA16F, e.RGBA, e.HALF_FLOAT],
				[W.RGBA32F]: [e.RGBA32F, e.RGBA, e.FLOAT],
				[W.RGBA8UI]: [e.RGBA8UI, e.RGBA_INTEGER, e.UNSIGNED_BYTE],
				[W.DEPTH_COMPONENT]: [e.DEPTH_COMPONENT, e.DEPTH_COMPONENT, e.UNSIGNED_INT],
				[W.DEPTH_STENCIL]: [e.DEPTH_STENCIL, e.DEPTH_COMPONENT, e.UNSIGNED_INT]
			} [t]
		}
		Ct.mapGLFormat = O1
	});
	var We = R(de => {
		"use strict";
		Object.defineProperty(de, "__esModule", {
			value: !0
		});
		de.setImmediate = de.DoubleBuffer = de.fillArray = de.getUniformsLocation = de.decorator = de
			.warn = de.panic = de.panicNull = void 0;
		Wr();

		function D1(e, t) {
			if (e === null) throw new Error(t);
			return e
		}
		de.panicNull = D1;

		function L1(e) {
			throw new Error(e)
		}
		de.panic = L1;

		function B1(e) {
			return console.warn(e), null
		}
		de.warn = B1;

		function C1(e, t = void 0, r = i => i) {
			let i = Symbol(e);
			return [n => (n === void 0 && (n = t), Reflect.metadata(i, r(n))), (n, s) => s === void 0 ?
				Reflect.getMetadata(i, n) : Reflect.getMetadata(i, n, s)
			]
		}
		de.decorator = C1;

		function q1(e, t, r) {
			let i = {};
			for (let n in r) i[n] = e.getUniformLocation(t, r[n]);
			return i
		}
		de.getUniformsLocation = q1;

		function I1(e, t) {
			let r = new Array(t);
			for (let i = 0; i < t; i++) r[i] = typeof e == "function" ? e(i) : e;
			return r
		}
		de.fillArray = I1;
		var na = class {
			constructor(t) {
				this.currentIdx = 0, this.buffers = [t(), t()]
			}
			get current() {
				return this.buffers[this.currentIdx % 2]
			}
			set current(t) {
				this.buffers[this.currentIdx % 2] = t
			}
			get back() {
				return this.buffers[(this.currentIdx + 1) % 2]
			}
			set back(t) {
				this.buffers[(this.currentIdx + 1) % 2] = t
			}
			update() {
				this.currentIdx++
			}
		};
		de.DoubleBuffer = na;

		function z1(e) {
			setTimeout(e, 0)
		}
		de.setImmediate = z1
	});
	var tr = R(jr => {
		"use strict";
		Object.defineProperty(jr, "__esModule", {
			value: !0
		});
		jr.EventEmitter = void 0;
		var sa = class {
			constructor() {
				this.listeners = new Map
			}
			on(t, r) {
				var i;
				this.listeners.has(t) || this.listeners.set(t, []), (i = this.listeners.get(
					t)) === null || i === void 0 || i.push(r)
			}
			off(t, r) {
				var i, n;
				this.listeners.has(t) && this.listeners.set(t, (n = (i = this.listeners.get(
						t)) === null || i === void 0 ? void 0 : i.filter(s => s !== r)) !==
					null && n !== void 0 ? n : [])
			}
			emit(t, ...r) {
				var i;
				(i = this.listeners.get(t)) === null || i === void 0 || i.forEach(n => n(...r))
			}
		};
		jr.EventEmitter = sa
	});
	var bt = R(et => {
		"use strict";
		Object.defineProperty(et, "__esModule", {
			value: !0
		});
		et.AssetManager = et.LazyInitAsset = et.Asset = void 0;
		var aa = We(),
			F1 = tr(),
			oa = ye(),
			Yi = class {
				constructor(t) {
					this.destroyed = !1, this.assetID = et.AssetManager.newAssetID(this), this
						.name = t || `Asset_${this.assetID}`
				}
				destroy() {
					this.destroyed = !0, et.AssetManager.destroy(this.assetID)
				}
			};
		et.Asset = Yi;
		var ca = class extends Yi {
			constructor(t = oa.GlobalContext()) {
				super();
				this.initialzed = !1, this.ctx = t
			}
			tryInit(t = !1) {
				if (this.initialzed) return !0;
				let r = this.ctx || oa.GlobalContext();
				if (!r) {
					if (t) throw new Error(
						"Failed to initialize GPU resource withou a global GL context.");
					return !1
				}
				if (this.ctx = r, this.init()) return this.initialzed = !0, !0;
				if (t) throw new Error("Failed to initialize required GPU resource.");
				return !1
			}
		};
		et.LazyInitAsset = ca;
		var la = class {
			constructor() {
				this.assetsMap = new Map, this.id = 1, this.eventEmitter = new F1.EventEmitter
			}
			newAssetID(t) {
				let r = ++this.id;
				return this.assetsMap.set(r, t), aa.setImmediate(() => this.eventEmitter.emit(
					"asset-created", t)), t.assetID = r
			}
			find(t) {
				if (typeof t == "number") return this.assetsMap.get(t);
				if (typeof t == "string") {
					for (let r of this.assetsMap.values())
						if (r.name === t) return r
				}
			}
			destroy(t) {
				let r = this.assetsMap.get(t);
				!r || (this.assetsMap.delete(t), aa.setImmediate(() => this.eventEmitter.emit(
					"asset-destroyed", r)))
			}
			findAssetsOfType(t) {
				return Array.from(this.assetsMap.values()).filter(r => r instanceof t)
			}
			on(t, r) {
				return this.eventEmitter.on(t, r)
			}
			off(t, r) {
				return this.eventEmitter.off(t, r)
			}
		};
		et.AssetManager = new la
	});
	var Hi = R(xe => {
		"use strict";
		Object.defineProperty(xe, "__esModule", {
			value: !0
		});
		xe.Shader = xe.DefaultShaderAttributeNames = xe.Culling = xe.Blending = xe.DepthTest = void 0;
		var Hr = We(),
			ha = ye(),
			N1 = rr(),
			G1 = We(),
			U1 = bt(),
			Wi;
		(function(e) {
			e[e.Disable = -1] = "Disable", e[e.Always = WebGL2RenderingContext.ALWAYS] = "Always",
				e[e.Never = WebGL2RenderingContext.NEVER] = "Never", e[e.Less =
					WebGL2RenderingContext.LESS] = "Less", e[e.Equal = WebGL2RenderingContext
				.EQUAL] = "Equal", e[e.LEqual = WebGL2RenderingContext.LEQUAL] = "LEqual", e[e
					.Greater = WebGL2RenderingContext.GREATER] = "Greater", e[e.NotEqual =
					WebGL2RenderingContext.NOTEQUAL] = "NotEqual", e[e.GEqual =
					WebGL2RenderingContext.GEQUAL] = "GEqual"
		})(Wi = xe.DepthTest || (xe.DepthTest = {}));
		var Rt;
		(function(e) {
			e[e.Disable = -1] = "Disable", e[e.Zero = WebGL2RenderingContext.ZERO] = "Zero", e[e
				.One = WebGL2RenderingContext.ONE] = "One", e[e.SrcColor =
				WebGL2RenderingContext.SRC_COLOR] = "SrcColor", e[e.OneMinusSrcColor =
				WebGL2RenderingContext.ONE_MINUS_SRC_COLOR] = "OneMinusSrcColor", e[e.DstColor =
				WebGL2RenderingContext.DST_COLOR] = "DstColor", e[e.OneMinusDstColor =
				WebGL2RenderingContext.ONE_MINUS_DST_COLOR] = "OneMinusDstColor", e[e.SrcAlpha =
				WebGL2RenderingContext.SRC_ALPHA] = "SrcAlpha", e[e.OneMinusSrcAlpha =
				WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA] = "OneMinusSrcAlpha", e[e.DstAlpha =
				WebGL2RenderingContext.DST_ALPHA] = "DstAlpha", e[e.OneMinusDstAlpha =
				WebGL2RenderingContext.ONE_MINUS_DST_ALPHA] = "OneMinusDstAlpha"
		})(Rt = xe.Blending || (xe.Blending = {}));
		var ji;
		(function(e) {
			e[e.Disable = -1] = "Disable", e[e.Back = WebGL2RenderingContext.BACK] = "Back", e[e
				.Front = WebGL2RenderingContext.FRONT] = "Front", e[e.Both =
				WebGL2RenderingContext.FRONT_AND_BACK] = "Both"
		})(ji = xe.Culling || (xe.Culling = {}));
		xe.DefaultShaderAttributeNames = {
			vert: "aPos",
			color: "aColor",
			uv: "aUV",
			uv2: "aUV2",
			normal: "aNormal"
		};
		var ua = class extends U1.Asset {
			constructor(t, r, i = {}, n = ha.GL()) {
				super(i.name);
				this.attributes = null, this.initialized = !1, this.gl = null, this.program =
					null, this.vertexShader = null, this.fragmentShader = null, this
					.pipelineStates = null, this.builtinUniformLocations = null, this
					._compiled = !1, i.name || (this.name = `Shader_${this.assetID}`), this
					.vertexShaderSource = t, this.fragmentShaderSouce = r, this.options = i,
					this.gl = n, this.tryInit()
			}
			get compiled() {
				return this._compiled
			}
			uniformLocation(t) {
				return this.tryInit(!0), this.gl.getUniformLocation(this.program, t)
			}
			use() {
				this.tryInit(!0), this.gl.useProgram(this.program)
			}
			setupPipelineStates() {
				let t = this.gl;
				if (this.pipelineStates.depth === Wi.Disable ? t.disable(t.DEPTH_TEST) : (t
						.enable(t.DEPTH_TEST), t.depthMask(this.pipelineStates.zWrite), t
						.depthFunc(this.pipelineStates.depth)), !this.pipelineStates.blend) t
					.disable(t.BLEND);
				else {
					let [r, i] = this.pipelineStates.blendRGB, [n, s] = this.pipelineStates
						.blendAlpha;
					t.enable(t.BLEND), t.blendFuncSeparate(r, i, n, s)
				}
				this.pipelineStates.cull === ji.Disable ? t.disable(t.CULL_FACE) : (t.enable(t
					.CULL_FACE), t.cullFace(this.pipelineStates.cull), t.frontFace(t
					.CCW))
			}
			setupBuiltinUniform(t) {
				this.tryInit(!0);
				let r = this.gl;
				this.builtinUniformLocations.matM && r.uniformMatrix4fv(this
						.builtinUniformLocations.matM, !1, t.matM), this.builtinUniformLocations
					.matVP && r.uniformMatrix4fv(this.builtinUniformLocations.matVP, !1, t
						.matVP), this.builtinUniformLocations.matMVP && r.uniformMatrix4fv(this
						.builtinUniformLocations.matMVP, !1, t.matMVP), this
					.builtinUniformLocations.matM_IT && r.uniformMatrix4fv(this
						.builtinUniformLocations.matM_IT, !1, t.matM_IT), this
					.builtinUniformLocations.matMV_IT && r.uniformMatrix4fv(this
						.builtinUniformLocations.matMV_IT, !1, t.matMV_IT)
			}
			setPipelineStates(t) {
				this.initialized ? this.setPipelineStateInternal(t) : this.options = Object
					.assign(Object.assign({}, this.options), t)
			}
			setPipelineStateInternal(t) {
				let r = !1,
					i = [Rt.One, Rt.Zero],
					n = [Rt.One, Rt.OneMinusSrcAlpha];
				typeof t.blend == "number" && t.blend !== Rt.Disable ? (r = !0, i = [t.blend, t
					.blend
				], n = [t.blend, t.blend]) : t.blend instanceof Array && (r = !0, i = t
					.blend), t.blendRGB && (r = t.blend !== !1 && t.blend !== Rt.Disable,
					i = t.blendRGB), t.blendAlpha && (r = t.blend !== !1 && t.blend !== Rt
					.Disable, n = t.blendAlpha), this.pipelineStates = {
					depth: t.depth || Wi.Less,
					blend: r,
					blendRGB: i,
					blendAlpha: n,
					zWrite: t.zWrite !== !1,
					cull: t.cull || ji.Back
				}
			}
			_internal() {
				return this.tryInit(!0), {
					attributes: this.attributes
				}
			}
			tryInit(t = !1) {
				if (this.initialized) return !0;
				let r = this.gl || ha.GL();
				if (!r) return t ? Hr.panic(
					"Failed to init shader without a global GL context") : !1;
				this.gl = r, this.program = Hr.panicNull(r.createProgram(),
						"Failed to create shader program"), this.vertexShader = Hr.panicNull(r
						.createShader(r.VERTEX_SHADER), "Failed to create vertex shader"), this
					.fragmentShader = Hr.panicNull(r.createShader(r.FRAGMENT_SHADER),
						"Failed to create fragment shader"), this.compile(), r.useProgram(this
						.program);
				let i = Object.assign(Object.assign({}, xe.DefaultShaderAttributeNames), this
					.options.attributes);
				this.attributes = {};
				for (let n in i) this.attributes[n] = r.getAttribLocation(this.program, i[n]);
				return this.setPipelineStateInternal(this.options), this
					.builtinUniformLocations = G1.getUniformsLocation(r, this.program, N1
						.BuiltinUniformNames), this.initialized = !0, !0
			}
			compile() {
				if (this.gl.shaderSource(this.vertexShader, this.vertexShaderSource), this.gl
					.compileShader(this.vertexShader), !this.gl.getShaderParameter(this
						.vertexShader, this.gl.COMPILE_STATUS)) throw new Error(`Failed to compile vertex shader:\r
` + this.gl.getShaderInfoLog(this.vertexShader));
				if (this.gl.shaderSource(this.fragmentShader, this.fragmentShaderSouce), this.gl
					.compileShader(this.fragmentShader), !this.gl.getShaderParameter(this
						.fragmentShader, this.gl.COMPILE_STATUS)) throw new Error(`Failed to compile fragment shader:\r
` + this.gl.getShaderInfoLog(this.fragmentShader));
				if (this.gl.attachShader(this.program, this.vertexShader), this.gl.attachShader(
						this.program, this.fragmentShader), this.gl.linkProgram(this.program), !
					this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
				throw new Error(`Failed to link shader program:\r
` + this.gl.getProgramInfoLog(this.program))
			}
		};
		xe.Shader = ua
	});
	var rr = R(Oe => {
		"use strict";
		Object.defineProperty(Oe, "__esModule", {
			value: !0
		});
		Oe.compileBuiltinShaders = Oe.BuiltinUniformNames = Oe.BuiltinShaderSources = void 0;
		var tt = Hi(),
			fa = `#version 300 es
precision mediump float;

in vec3 aPos;
in vec4 aColor;
in vec2 aUV;
in vec3 aNormal;

uniform mat4 uTransformM;
uniform mat4 uTransformVP;
uniform mat4 uTransformMVP;

out vec4 vColor;
out vec4 vPos;
out vec2 vUV;
out vec3 vNormal;

void main()
{
    gl_Position = uTransformMVP * vec4(aPos, 1);
    vColor = aColor;
    vUV = aUV;
    vNormal = aNormal;
}
`,
			V1 = `#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;
in vec2 vUV;

uniform sampler2D uMainTex;
uniform vec4 uColor;

out vec4 fragColor;

void main()
{
    vec4 color = texture(uMainTex, vUV.xy).rgba;
    color = color * vColor * uColor;
    fragColor = color;
}
`,
			k1 = `#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;
in vec2 vUV;
in vec3 vNormal;

uniform sampler2D uMainTex;

out vec4 fragColor;

void main()
{
    fragColor = texture(uMainTex, vUV).rgba;
}
`,
			Y1 = `#version 300 es
precision mediump float;

in vec3 aPos;
in vec2 aUV;

out vec2 vUV;

void main()
{
    gl_Position = vec4(aPos, 1);
    vUV = vec2(aUV.x, vec2(1) - aUV.y);
}`,
			W1 = `#version 300 es
precision mediump float;

in vec3 aPos;
in vec4 aColor;

uniform mat4 uTransformM;
uniform mat4 uTransformVP;
uniform mat4 uTransformMVP;

out vec4 vColor;
out vec4 vPos;

void main()
{
    gl_Position = uTransformMVP * vec4(aPos, 1);
    vColor = aColor;
}
`,
			j1 = `#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;

out vec4 fragColor;

void main()
{
    fragColor = vColor;
}
`,
			H1 = `#version 300 es
precision mediump float;

in vec4 vPos;
in vec2 vUV;

uniform sampler2D uMainTex;

out vec4 fragColor;

void main()
{
    fragColor = texture(uMainTex, vUV).rgba;
}
`;
		Oe.BuiltinShaderSources = {
			DefaultVert: fa,
			DefaultFrag: V1,
			BlitCopyFrag: k1,
			FlipTexVert: Y1
		};
		Oe.BuiltinUniformNames = {
			matM: "uTransformM",
			matM_IT: "uTransformM_IT",
			matMInv: "uTransformMInv",
			matVP: "uTransformVP",
			matMVP: "uTransformMVP",
			matMV_IT: "uTransformMV_IT",
			flipUV: "uFlipUV",
			mainTex: "uMainTex",
			color: "uColor"
		};

		function X1(e) {
			return {
				DefaultShader: new tt.Shader(Oe.BuiltinShaderSources.DefaultVert, Oe
					.BuiltinShaderSources.DefaultFrag, {
						name: "DefaultShader"
					}, e),
				BlitCopy: new tt.Shader(Oe.BuiltinShaderSources.DefaultVert, Oe.BuiltinShaderSources
					.BlitCopyFrag, {
						name: "BlitCopy",
						depth: tt.DepthTest.Always,
						blend: tt.Blending.Disable,
						zWrite: !1
					}, e),
				FlipTexture: new tt.Shader(Oe.BuiltinShaderSources.FlipTexVert, Oe.BuiltinShaderSources
					.BlitCopyFrag, {}, e),
				ColoredLine: new tt.Shader(W1, j1, {
					blend: [tt.Blending.SrcAlpha, tt.Blending.OneMinusSrcAlpha],
					depth: tt.DepthTest.Disable,
					zWrite: !1
				}, e),
				ErrorShader: new tt.Shader(fa, H1, {
					name: "Error"
				}, e)
			}
		}
		Oe.compileBuiltinShaders = X1
	});
	var Xi = R(qt => {
		"use strict";
		Object.defineProperty(qt, "__esModule", {
			value: !0
		});
		qt.imageResize = qt.ImageSizing = void 0;
		var da = Yr(),
			va = pe(),
			Pe;
		(function(e) {
			e[e.Stretch = 1] = "Stretch", e[e.Cover = 2] = "Cover", e[e.Contain = 3] = "Contain", e[
				e.KeepLower = 4] = "KeepLower", e[e.KeepHigher = 5] = "KeepHigher", e[e.Center =
				6] = "Center"
		})(Pe = qt.ImageSizing || (qt.ImageSizing = {}));

		function Q1(e, t, r) {
			let i = new da.Rect(va.vec2.zero(), e),
				n = new da.Rect(va.vec2.zero(), t);
			if (r === Pe.Contain) {
				let s = e.x / e.y,
					a = t.x / t.y;
				if (s > a) {
					let o = t.y - e.y * (t.x / e.x);
					n.min.y += o / 2, n.max.y -= o / 2
				} else {
					let o = t.x - e.x * (t.y / e.y);
					n.min.x += o / 2, n.max.x -= o / 2
				}
			} else if (r === Pe.Cover) {
				let s = e.x / e.y,
					a = t.x / t.y;
				if (s > a) {
					let o = e.x - t.x * (e.y / t.y);
					i.min.x += o / 2, i.max.x -= o / 2
				} else {
					let o = e.y - t.y * (e.x / t.x);
					i.min.y += o / 2, i.max.y -= o / 2
				}
			} else {
				if (e.x < t.x) switch (r) {
					case Pe.Center:
						let s = t.x - e.x;
						n.min.x += s / 2, n.max.x -= s / 2;
						break;
					case Pe.KeepHigher:
						n.min.x = t.x - e.x;
						break;
					case Pe.KeepLower:
						n.max.x = e.x;
						break
				} else if (e.x > t.x) switch (r) {
					case Pe.Center:
						let s = e.x - t.x;
						i.min.x += s / 2, i.max.x -= s / 2;
						break;
					case Pe.KeepHigher:
						i.min.x = e.x - t.x;
						break;
					case Pe.KeepLower:
						i.max.x = t.x;
						break
				}
				if (e.y < t.y) switch (r) {
					case Pe.Center:
						let s = t.y - e.y;
						n.min.y += s / 2, n.max.y -= s / 2;
						break;
					case Pe.KeepHigher:
						n.min.y = t.y - e.y;
						break;
					case Pe.KeepLower:
						n.max.y = e.y;
						break
				} else if (e.y > t.y) switch (r) {
					case Pe.Center:
						let s = e.y - t.y;
						i.min.y += s / 2, i.max.y -= s / 2;
						break;
					case Pe.KeepHigher:
						i.min.y = e.y - t.y;
						break;
					case Pe.KeepLower:
						i.max.y = t.y;
						break
				}
			}
			return [i, n]
		}
		qt.imageResize = Q1
	});
	var sr = R(he => {
		"use strict";
		Object.defineProperty(he, "__esModule", {
			value: !0
		});
		he.RenderTexture = he.DepthTexture = he.Texture2D = he.TextureResizing = he.Texture = he
			.WrapMode = he.FilterMode = void 0;
		var ir = ye(),
			It = er(),
			Qi = We(),
			pa = bt(),
			$1 = rr(),
			Z1 = pe(),
			J1 = Xi(),
			nr;
		(function(e) {
			e[e.Linear = WebGL2RenderingContext.LINEAR] = "Linear", e[e.Nearest =
				WebGL2RenderingContext.NEAREST] = "Nearest"
		})(nr = he.FilterMode || (he.FilterMode = {}));
		var ma;
		(function(e) {
			e[e.Repeat = WebGL2RenderingContext.REPEAT] = "Repeat", e[e.Clamp =
				WebGL2RenderingContext.CLAMP_TO_EDGE] = "Clamp", e[e.Mirror =
				WebGL2RenderingContext.MIRRORED_REPEAT] = "Mirror"
		})(ma = he.WrapMode || (he.WrapMode = {}));
		var ga = class extends pa.Asset {};
		he.Texture = ga;
		var $i;
		(function(e) {
			e[e.Discard = 0] = "Discard", e[e.Stretch = 1] = "Stretch", e[e.Cover = 2] = "Cover", e[
				e.Contain = 3] = "Contain", e[e.KeepLower = 4] = "KeepLower", e[e.KeepHigher =
				5] = "KeepHigher", e[e.Center = 6] = "Center"
		})($i = he.TextureResizing || (he.TextureResizing = {}));
		var zt = class extends pa.Asset {
				constructor(t, r, i = It.TextureFormat.RGBA, n = nr.Linear, s = ir.GlobalContext()) {
					super();
					this.autoMipmap = !0, this.wrapMode = ma.Repeat, this._glTex = null, this
						.initialized = !1, this.created = !1, this.name = `Texture_${this.assetID}`,
						this.ctx = s, this.format = i, this.width = t, this.height = r, this
						.filterMode = n, this.tryInit(!1)
				}
				get size() {
					return Z1.vec2(this.width, this.height)
				}
				glTex() {
					return this.create(), this._glTex
				}
				bind(t) {
					this.create();
					let r = this.ctx.gl;
					r.activeTexture(r.TEXTURE0 + t), r.bindTexture(r.TEXTURE_2D, this._glTex)
				}
				unbind(t) {
					this.create();
					let r = this.ctx.gl;
					r.activeTexture(r.TEXTURE0 + t), r.bindTexture(r.TEXTURE_2D, null)
				}
				destroy() {
					if (!this.initialized || this.destroyed) return;
					this.ctx.gl.deleteTexture(this._glTex), super.destroy()
				}
				resize(t, r, i = $i.Discard) {
					this.tryInit(!0);
					let n = this.ctx.gl,
						s = zt.wrapGlTex(this._glTex, this.width, this.height, this.format, this
							.filterMode, this.ctx),
						a = new Xr(t, r, !1, this.format, this.filterMode, this.ctx);
					a.wrapMode = this.wrapMode, a.autoMipmap = this.autoMipmap, a.create(), a
						.updateParameters();
					let o = this.size;
					switch (this.width = t, this.height = r, i) {
						case $i.Discard:
							break;
						default:
							let [c, l] = J1.imageResize(o, a.size, i);
							this.ctx.renderer.blit(s, a, this.ctx.assets.materials.blitCopy, c, l);
							break
					}
					this.autoMipmap && a.generateMipmap(), this._glTex = a._glTex, n.deleteTexture(s
						._glTex)
				}
				generateMipmap() {
					this.create();
					let t = this.ctx.gl;
					t.bindTexture(t.TEXTURE_2D, this._glTex), t.generateMipmap(t.TEXTURE_2D)
				}
				updateParameters() {
					this.create();
					let t = this.ctx.gl;
					t.bindTexture(t.TEXTURE_2D, this._glTex), t.texParameteri(t.TEXTURE_2D, t
						.TEXTURE_MIN_FILTER, this.filterMode), t.texParameteri(t.TEXTURE_2D, t
						.TEXTURE_MAG_FILTER, this.filterMode), t.texParameteri(t.TEXTURE_2D, t
						.TEXTURE_WRAP_S, this.wrapMode), t.texParameteri(t.TEXTURE_2D, t
						.TEXTURE_WRAP_T, this.wrapMode)
				}
				create() {
					if (this.created) return;
					this.tryInit(!0);
					let t = this.ctx.gl;
					t.bindTexture(t.TEXTURE_2D, this._glTex);
					let [r, i, n] = It.mapGLFormat(t, this.format);
					t.texImage2D(t.TEXTURE_2D, 0, r, this.width, this.height, 0, i, n, null), this
						.created = !0, this.updateParameters()
				}
				setData(t) {
					this.create();
					let r = this.ctx.gl;
					r.bindTexture(r.TEXTURE_2D, this._glTex), K1(this.ctx, this._glTex, t, this
						.width, this.height, this.format, this.filterMode, this.wrapMode, 0)
				}
				tryInit(t = !1) {
					var r;
					if (this.initialized) return !0;
					let i = this.ctx || ir.GlobalContext();
					if (!i) {
						if (t) throw new Error(
							"Failed to initialize texture without a global GL context");
						return !1
					}
					let n = i.gl;
					return this._glTex = (r = n.createTexture()) !== null && r !== void 0 ? r : Qi
						.panic("Failed to create texture."), this.initialized = !0, !0
				}
				static wrapGlTex(t, r, i, n = It.TextureFormat.RGBA, s = nr.Linear, a = ir
					.GlobalContext()) {
					var o = new zt(r, i, n, s, a);
					return o._glTex = t, o.initialized = !0, o.created = !0, o
				}
			},
			Qr = class extends zt {
				constructor(t = 0, r = 0, i = It.TextureFormat.RGBA, n = nr.Linear, s = ir
					.GlobalContext()) {
					super(t, r, i, n, s)
				}
				setData(t) {
					t.width !== void 0 && t.height !== void 0 && (t = t, this.width = t.width, this
						.height = t.height), super.setData(t)
				}
				clone() {
					this.created || this.create();
					let t = new Xr(this.width, this.height, !1, this.format, this.filterMode, this
						.ctx);
					this.ctx.renderer.blit(this, t);
					let r = new Qr(this.width, this.height, this.format, this.filterMode, this.ctx);
					return r._glTex = t.glTex(), r.initialized = !0, r.created = !0, r
				}
			};
		he.Texture2D = Qr;
		var Zi = class extends zt {
			constructor(t, r, i = ir.GlobalContext()) {
				super(t, r, It.TextureFormat.DEPTH_COMPONENT, nr.Nearest, i)
			}
			create() {
				super.create()
			}
		};
		he.DepthTexture = Zi;
		var Xr = class extends zt {
			constructor(t, r, i = !1, n = It.TextureFormat.RGBA, s = nr.Linear, a = ir
				.GlobalContext()) {
				super(t, r, n, s, a);
				this.depthTexture = null, i && (this.depthTexture = new Zi(t, r, a))
			}
			setData(t) {
				super.setData(t)
			}
			destroy() {
				var t;
				!this.initialized || this.destroyed || ((t = this.depthTexture) === null ||
					t === void 0 || t.destroy(), super.destroy())
			}
		};
		he.RenderTexture = Xr;

		function K1(e, t, r, i, n, s, a, o, c) {
			var l, h;
			let u = e.gl,
				d = e.renderer,
				f = (l = u.createTexture()) !== null && l !== void 0 ? l : Qi.panic(
					"Failed to create texture."),
				[m, M, v] = It.mapGLFormat(u, s);
			u.bindTexture(u.TEXTURE_2D, f), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u
					.NEAREST), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.NEAREST), u
				.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, o), u.texParameteri(u.TEXTURE_2D, u
					.TEXTURE_WRAP_T, o), r.width !== void 0 && r.height !== void 0 ? (r = r, u
					.texImage2D(u.TEXTURE_2D, c, m, M, v, r)) : (r = r, u.texImage2D(u.TEXTURE_2D, c, m,
					i, n, 0, M, v, r));
			let x = (h = u.createFramebuffer()) !== null && h !== void 0 ? h : Qi.panic(
				"Failed to create frame buffer");
			u.bindFramebuffer(u.FRAMEBUFFER, x), u.framebufferTexture2D(u.FRAMEBUFFER, u
				.COLOR_ATTACHMENT0, u.TEXTURE_2D, t, 0), u.viewport(0, 0, i, n), u.drawBuffers([u
				.COLOR_ATTACHMENT0
			]);
			let A = e.assets.shaders.FlipTexture;
			A.use(), u.activeTexture(u.TEXTURE0), u.bindTexture(u.TEXTURE_2D, f), u.uniform1i(A
				.uniformLocation($1.BuiltinUniformNames.mainTex), 0);
			let T = e.assets.meshes.screenQuad;
			T.bind(A), u.drawElements(u.TRIANGLE_STRIP, T.triangles.length, u.UNSIGNED_INT, 0), u
				.activeTexture(u.TEXTURE0), u.bindTexture(u.TEXTURE_2D, null), u.deleteFramebuffer(x), u
				.bindFramebuffer(u.FRAMEBUFFER, null), u.deleteTexture(f)
		}
	});
	var Zr = R(De => {
		"use strict";
		var Ma = De && De.__decorate || function(e, t, r, i) {
			var n = arguments.length,
				s = n < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, r) : i,
				a;
			if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect
				.decorate(e, t, r, i);
			else
				for (var o = e.length - 1; o >= 0; o--)(a = e[o]) && (s = (n < 3 ? a(s) : n > 3 ? a(
					t, r, s) : a(t, r)) || s);
			return n > 3 && s && Object.defineProperty(t, r, s), s
		};
		Object.defineProperty(De, "__esModule", {
			value: !0
		});
		De.materialDefine = De.SimpleTexturedMaterial = De.MaterialFromShader = De.shaderProp = De
			.Material = void 0;
		var e0 = Qe();
		Wr();
		var $r = ye();
		Wr();
		var t0 = sr(),
			r0 = bt(),
			ya = rr(),
			xa;
		(function(e) {
			e[e.Field = 0] = "Field", e[e.Dynamic = 1] = "Dynamic"
		})(xa || (xa = {}));
		var Ji = class extends r0.Asset {
			constructor(t, r = $r.GL()) {
				super();
				this.properties = {}, this.textureCount = 0, this.initialized = !1, this.name =
					`Material_${this.assetID}`, this.gl = r, this._shader = t
			}
			get shader() {
				return this._shader
			}
			upload(t) {
				this.tryInit(!0);
				for (let r in this.properties) {
					let i = this.properties[r],
						n = i.key ? this[i.key] : i.value;
					this.uploadUniform(i, n)
				}
			}
			setProp(t, r, i) {
				this.tryInit(!0);
				let n = this.getOrCreatePropInfo(t, r);
				if (r !== n.type) {
					console.warn("Uniform type missmatch");
					return
				}
				n.key ? this[n.key] = i : n.value = i
			}
			unbindRenderTextures() {
				this.tryInit(!0);
				let t = this.gl;
				for (let r in this.properties) {
					let i = this.properties[r];
					i.uploaded instanceof t0.RenderTexture && (i.uploaded.unbind(i.textureUnit),
						i.uploaded = null)
				}
			}
			tryInit(t = !1) {
				if (this.initialized) return !0;
				let r = this.gl || $r.GL();
				if (!r) {
					if (t) throw new Error(
						"Failed to intialize material without global GL context");
					return !1
				}
				this.gl = r;
				for (let i in this) {
					let n = i0(this, i);
					if (!n) continue;
					let s = this.getOrCreatePropInfo(n.name, n.type);
					s.key = i
				}
				return this.initialized = !0, !0
			}
			setUniformDirectly(t, r, i) {
				this.tryInit(!0);
				let n = this.getOrCreatePropInfo(t, r);
				!n.location || this.uploadUniform(n, i)
			}
			getOrCreatePropInfo(t, r) {
				let i = this.properties[t];
				if (i) return i;
				switch (r) {
					case "tex2d":
						i = {
							type: r,
							uploaded: void 0,
							location: this.shader.uniformLocation(t),
							textureUnit: this.textureCount++
						};
						break;
					default:
						i = {
							type: r,
							location: this.shader.uniformLocation(t),
							uploaded: void 0
						}
				}
				return this.properties[t] = i, i
			}
			uploadUniform(t, r) {
				let i = this.gl,
					n = $r.GlobalContext();
				if (!t.location) return !1;
				let s = !1;
				if (t.uploaded === null && r === null) return !1;
				switch (t.type) {
					case "float":
						i.uniform1f(t.location, r);
						break;
					case "vec2":
						i.uniform2fv(t.location, r);
						break;
					case "vec3":
						i.uniform3fv(t.location, r);
						break;
					case "vec4":
						i.uniform4fv(t.location, r);
						break;
					case "color":
						i.uniform4fv(t.location, r);
						break;
					case "mat4":
						i.uniformMatrix4fv(t.location, !1, r);
						break;
					case "tex2d":
						r = r || n.renderer.assets.textures.default, r.bind(t.textureUnit), t
							.uniformSet || (i.uniform1i(t.location, t.textureUnit), t
								.uniformSet = !0);
						break
				}
				t.uploaded = r
			}
		};
		De.Material = Ji;
		var _a = Symbol("shaderProp");

		function Ki(e, t) {
			return Reflect.metadata(_a, {
				name: e,
				type: t
			})
		}
		De.shaderProp = Ki;

		function i0(e, t) {
			return Reflect.getMetadata(_a, e, t)
		}

		function ba(e) {
			return class extends Ji {
				constructor(r = $r.GL()) {
					super(e, r)
				}
			}
		}
		De.MaterialFromShader = ba;

		function n0(e) {
			class t extends ba(e) {
				constructor() {
					super(...arguments);
					this.texture = null, this.color = new e0.Color(1, 1, 1, 1)
				}
			}
			return Ma([Ki(ya.BuiltinUniformNames.mainTex, "tex2d")], t.prototype, "texture", void 0),
				Ma([Ki(ya.BuiltinUniformNames.color, "color")], t.prototype, "color", void 0), t
		}
		De.SimpleTexturedMaterial = n0;

		function s0(e) {
			return class extends e {
				constructor(...t) {
					super(...t)
				}
			}
		}
		De.materialDefine = s0
	});
	var en = R(Ra => {
		"use strict";
		Object.defineProperty(Ra, "__esModule", {
			value: !0
		});
		var sp = Zr()
	});
	var Kr = R(Jr => {
		"use strict";
		Object.defineProperty(Jr, "__esModule", {
			value: !0
		});
		Jr.Mesh = void 0;
		var wa = Ve(),
			Ta = pe(),
			a0 = Qe(),
			Pa = ye(),
			Ft = We(),
			tn = yt(),
			o0 = bt(),
			Aa = 14,
			Ea = class extends o0.Asset {
				constructor(t = Pa.GL()) {
					super();
					this._verts = [], this._triangles = [], this._uvs = [], this._uv2 = [], this
						._colors = [], this._normals = [], this.dirty = !0, this.uploaded = !1, this
						.vertices = new Float32Array(0), this.indices = new Uint32Array(0), this
						.VBO = null, this.EBO = null, this.initialized = !1, this.name =
						`Mesh_${this.assetID}`, this.gl = t, this.tryInit(!1)
				}
				get verts() {
					return this._verts
				}
				set verts(t) {
					this._verts = t, this.dirty = !0
				}
				get triangles() {
					return this._triangles
				}
				set triangles(t) {
					this._triangles = t, this.dirty = !0
				}
				get uvs() {
					return this._uvs
				}
				set uvs(t) {
					this._uvs = t, this.dirty = !0
				}
				get uv2() {
					return this._uv2
				}
				set uv2(t) {
					this._uv2 = t, this.dirty = !0
				}
				get colors() {
					return this._colors
				}
				set colors(t) {
					this._colors = t, this.dirty = !0
				}
				get normals() {
					return this._normals
				}
				set normals(t) {
					this._normals = t, this.dirty = !0
				}
				clear() {
					this.verts = [], this.uvs = [], this.triangles = [], this.colors = [], this
						.normals = []
				}
				calculateNormals(t = 0) {
					if (this.triangles.length % 3 != 0) throw new Error("Invalid triangles.");
					this.normals = Ft.fillArray(() => wa.vec3(0, 0, 0), this.verts.length);
					for (let r = 0; r < this.triangles.length; r += 3) {
						let i = this.verts[this.triangles[r]],
							n = this.verts[this.triangles[r + 1]],
							s = this.verts[this.triangles[r + 2]],
							a = tn.minus(n, i),
							o = tn.minus(s, i),
							c = tn.cross(a, o).normalize();
						this.normals[this.triangles[r + 0]].plus(c), this.normals[this.triangles[r +
							1]].plus(c), this.normals[this.triangles[r + 2]].plus(c)
					}
					for (let r = 0; r < this.normals.length; r++) this.normals[r] = this.normals[r]
						.normalize()
				}
				update() {
					if (this.dirty) {
						if (this.triangles.length % 3 != 0) throw new Error("Invalid triangles.");
						if (this.colors.length !== this.verts.length && (this.colors = [...this
								.colors, ...Ft.fillArray(a0.Color.white, this.verts.length -
									this.colors.length)
							]), this.uvs.length !== this.verts.length && (this.uvs = [...this.uvs,
								...Ft.fillArray(Ta.vec2(0, 0), this.verts.length - this.uvs
									.length)
							]), this.uv2.length !== this.verts.length && (this.uv2 = [...this.uv2,
								...Ft.fillArray(Ta.vec2(0, 0), this.verts.length - this.uv2
									.length)
							]), this.normals.length !== this.verts.length && (this.normals = [...
								this.normals, ...Ft.fillArray(wa.vec3(0, 0, 0), this.verts
									.length - this.normals.length)
							]), this.vertices = new Float32Array(this.verts.flatMap((t, r) => [...t,
								...this.colors[r], ...this.uvs[r], ...this.uv2[r], ...this
								.normals[r]
							])), this.vertices.length != this.verts.length * Aa) throw new Error(
							"Buffer with invalid length.");
						this.indices = new Uint32Array(this.triangles.flat()), this.dirty = !1, this
							.uploaded = !1
					}
				}
				setup() {
					this.update(), this.tryInit(!0);
					let t = this.gl;
					return this.uploaded || (t.bindBuffer(t.ARRAY_BUFFER, this.VBO), t.bufferData(t
							.ARRAY_BUFFER, this.vertices, t.STATIC_DRAW), t.bindBuffer(t
							.ELEMENT_ARRAY_BUFFER, this.EBO), t.bufferData(t
							.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this
						.uploaded = !0), [this.VBO, this.EBO]
				}
				bind(t) {
					this.setup();
					let r = this.gl,
						i = t._internal().attributes,
						n = Aa * 4;
					r.bindBuffer(r.ARRAY_BUFFER, this.VBO), i.vert >= 0 && (r.vertexAttribPointer(i
							.vert, 3, r.FLOAT, !1, n, 0), r.enableVertexAttribArray(i.vert)), i
						.color >= 0 && (r.vertexAttribPointer(i.color, 4, r.FLOAT, !1, n, 3 * 4), r
							.enableVertexAttribArray(i.color)), i.uv >= 0 && (r.vertexAttribPointer(
							i.uv, 2, r.FLOAT, !1, n, 7 * 4), r.enableVertexAttribArray(i.uv)), i
						.uv2 >= 0 && (r.vertexAttribPointer(i.uv2, 2, r.FLOAT, !1, n, 9 * 4), r
							.enableVertexAttribArray(i.uv2)), i.uv && i.normal >= 0 && (r
							.vertexAttribPointer(i.normal, 3, r.FLOAT, !0, n, 11 * 4), r
							.enableVertexAttribArray(i.normal)), r.bindBuffer(r
							.ELEMENT_ARRAY_BUFFER, this.EBO)
				}
				destroy() {
					!this.initialized || this.destroyed || (this.gl.deleteBuffer(this.VBO), this.gl
						.deleteBuffer(this.EBO), super.destroy())
				}
				tryInit(t = !1) {
					var r, i;
					if (this.initialized) return !0;
					let n = this.gl || Pa.GL();
					if (!n) {
						if (t) throw new Error("Failed to init mesh without global GL context");
						return !1
					}
					return this.gl = n, this.VBO = (r = n.createBuffer()) !== null && r !== void 0 ?
						r : Ft.panic("Failed to create vertex buffer."), this.EBO = (i = n
							.createBuffer()) !== null && i !== void 0 ? i : Ft.panic(
							"Failed to create element buffer."), this.initialized = !0, !0
				}
			};
		Jr.Mesh = Ea
	});
	var ar = R(ei => {
		"use strict";
		Object.defineProperty(ei, "__esModule", {
			value: !0
		});
		ei.RenderTarget = void 0;
		var rn = ye(),
			c0 = We(),
			l0 = pe(),
			Sa = {
				canvasOutput: {
					tex: null,
					attachPoint: WebGL2RenderingContext.BACK
				},
				fromRenderTexture: e => ({
					tex: e.glTex()
				})
			},
			ti = class {
				constructor(t = 0, r = 0, i = rn.GlobalContext()) {
					var n;
					this.colorAttachments = [], this.depthAttachment = Sa.canvasOutput, this
						.isCanvasTarget = !0, this.width = t, this.height = r, i ? this
						.frameBuffer = (n = i.gl.createFramebuffer()) !== null && n !== void 0 ? n :
						c0.panic("Failed to create frame buffer") : this.frameBuffer = null
				}
				get size() {
					return l0.vec2(this.width, this.height)
				}
				addColorAttachment(t) {
					if (t !== null) {
						if (this.isCanvasTarget = !1, this.width == 0 && this.height == 0 && (this
								.width = t.width, this.height = t.height), this.width != t.width ||
							this.height != t.height) throw new Error(
							"Framebuffer attachments must in same resolution.");
						this.colorAttachments.push(Sa.fromRenderTexture(t))
					}
				}
				setDepthAttachment(t) {
					var r;
					if (this.width == 0 && this.height == 0 && (this.width = t.width, this.height =
							t.height), this.width != t.width || this.height != t.height)
					throw new Error("Framebuffer attachments must in same resolution.");
					this.depthAttachment = {
						tex: (r = t == null ? void 0 : t.glTex) !== null && r !== void 0 ? r :
							null,
						attachPoint: WebGL2RenderingContext.DEPTH_ATTACHMENT
					}
				}
				bind(t = rn.GlobalContext()) {
					let r = t.gl;
					if (this.isCanvasTarget) r.bindFramebuffer(r.FRAMEBUFFER, null), r.viewport(0,
						0, t.width, t.height);
					else {
						r.bindFramebuffer(r.FRAMEBUFFER, this.frameBuffer);
						let i = 0;
						for (let s = 0; s < this.colorAttachments.length; s++) this
							.colorAttachments[s].tex && (this.colorAttachments[s].attachPoint = r
								.COLOR_ATTACHMENT0 + i++, r.framebufferTexture2D(r.FRAMEBUFFER, this
									.colorAttachments[s].attachPoint, r.TEXTURE_2D, this
									.colorAttachments[s].tex, 0));
						r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, this
							.depthAttachment.tex, 0), r.viewport(0, 0, this.width, this.height);
						let n = this.colorAttachments.map(s => s.attachPoint);
						r.drawBuffers(n)
					}
				}
				release(t = rn.GlobalContext()) {
					if (this.isCanvasTarget) return;
					t.gl.deleteFramebuffer(this.frameBuffer)
				}
			};
		ei.RenderTarget = ti;
		ti.CanvasTarget = Object.freeze(new ti)
	});
	var Oa = R(wt => {
		"use strict";
		var Ae = wt && wt.__decorate || function(e, t, r, i) {
			var n = arguments.length,
				s = n < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, r) : i,
				a;
			if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect
				.decorate(e, t, r, i);
			else
				for (var o = e.length - 1; o >= 0; o--)(a = e[o]) && (s = (n < 3 ? a(s) : n > 3 ? a(
					t, r, s) : a(t, r)) || s);
			return n > 3 && s && Object.defineProperty(t, r, s), s
		};
		Object.defineProperty(wt, "__esModule", {
			value: !0
		});
		wt.createBuiltinMaterialTypes = wt.createBuiltinMaterial = void 0;
		var ce = Zr(),
			ri = Qe(),
			lp = en(),
			h0 = pe();

		function u0(e, t, r, i) {
			let n = new ce.Material(r.ErrorShader, e);
			return n.setProp("uMainTex", "tex2d", i.error), {
				error: n,
				default: new t.DefaultMaterial(e),
				blitCopy: new t.BlitCopy(e),
				ColoredLine: new ce.Material(r.ColoredLine, e)
			}
		}
		wt.createBuiltinMaterial = u0;

		function f0(e, t, r) {
			let i = class extends ce.MaterialFromShader(r.DefaultShader) {
				constructor() {
					super(...arguments);
					this.color = ri.Color.white, this.mainTexture = t.default
				}
			};
			Ae([ce.shaderProp("uColor", "color")], i.prototype, "color", void 0), Ae([ce.shaderProp(
				"uMainTex", "tex2d")], i.prototype, "mainTexture", void 0), i = Ae([ce
				.materialDefine
			], i);
			let n = class extends ce.MaterialFromShader(r.BlitCopy) {
				constructor() {
					super(...arguments);
					this.source = null, this.flip = h0.vec2(0, 0)
				}
			};
			Ae([ce.shaderProp("uMainTex", "tex2d")], n.prototype, "source", void 0), Ae([ce.shaderProp(
				"uFlip", "vec2")], n.prototype, "flip", void 0), n = Ae([ce.materialDefine], n);
			let s = class extends ce.MaterialFromShader(r.DefaultShader) {
				constructor() {
					super(...arguments);
					this.color = ri.Color.white, this.mainTexture = t.default, this
						.normalTexture = t.defaultNormal, this.emission = ri.Color.black, this
						.specular = ri.Color.white, this.metiallic = .023, this.smoothness = .5,
						this.fresnel = 5
				}
			};
			return Ae([ce.shaderProp("uColor", "color")], s.prototype, "color", void 0), Ae([ce
				.shaderProp("uMainTex", "tex2d")
			], s.prototype, "mainTexture", void 0), Ae([ce.shaderProp("uNormalTex", "tex2d")], s
				.prototype, "normalTexture", void 0), Ae([ce.shaderProp("uEmission", "color")], s
				.prototype, "emission", void 0), Ae([ce.shaderProp("uSpecular", "color")], s
				.prototype, "specular", void 0), Ae([ce.shaderProp("uMetallic", "float")], s
				.prototype, "metiallic", void 0), Ae([ce.shaderProp("uSmoothness", "float")], s
				.prototype, "smoothness", void 0), Ae([ce.shaderProp("uFresnel", "float")], s
				.prototype, "fresnel", void 0), s = Ae([ce.materialDefine], s), {
				DefaultMaterial: i,
				BlitCopy: n,
				DefaultLit: s
			}
		}
		wt.createBuiltinMaterialTypes = f0
	});
	var Da = R(ii => {
		"use strict";
		Object.defineProperty(ii, "__esModule", {
			value: !0
		});
		ii.createDefaultTextures = void 0;
		var d0 = We(),
			or = sr(),
			nn = er();

		function v0(e) {
			var t;
			let r = 64,
				i = document.createElement("canvas");
			i.width = i.height = r;
			let n = (t = i.getContext("2d")) !== null && t !== void 0 ? t : d0.panic(
				"Failed to create default texture.");
			n.fillStyle = "black", n.fillRect(0, 0, r, r), n.fillStyle = "cyan", n.fillRect(0, 0, r / 2,
				r / 2), n.fillRect(r / 2, r / 2, r / 2, r / 2);
			let s = new or.Texture2D(r, r, nn.TextureFormat.RGBA, or.FilterMode.Linear, e);
			s.setData(i), s.name = "Texture-Error", n.fillStyle = "blue", n.fillRect(0, 0, r, r);
			let a = new or.Texture2D(r, r, nn.TextureFormat.RGBA, or.FilterMode.Linear, e);
			a.setData(i), a.name = "Default-Normal", n.fillStyle = "white", n.fillRect(0, 0, r, r);
			let o = new or.Texture2D(r, r, nn.TextureFormat.RGBA, or.FilterMode.Linear, e);
			return o.setData(i), o.name = "Default-White", {
				default: o,
				defaultNormal: a,
				error: s
			}
		}
		ii.createDefaultTextures = v0
	});
	var si = R(ni => {
		"use strict";
		Object.defineProperty(ni, "__esModule", {
			value: !0
		});
		ni.MeshBuilder = void 0;
		var X = ki(),
			p0 = ye(),
			sn = Kr(),
			La = class {
				constructor(t = 0, r = p0.GlobalContext().gl) {
					this.verts = [], this.triangles = [], this.uvs = [], this.colors = [], this.gl =
						r
				}
				addPolygon(t, r) {
					let i = this.verts.length;
					for (let n = 0; n < t.length; n++) this.verts.push(t[n]), this.uvs.push(r[n]),
						this.colors.push(X.Color.white);
					for (let n = 2; n < t.length; n++) this.triangles.push(i + 0, i + n - 1, i + n)
				}
				addSubMesh(t, r, i = [X.Color.white], n = [X.vec2(0, 0)]) {
					let s = this.verts.length;
					if (r.length % 3 != 0) throw new Error("Invalid number of triangles.");
					for (let a = 0; a < t.length; a++) this.verts.push(t[a]), this.uvs.push(a >= n
						.length ? n[n.length - 1] : n[a]), this.colors.push(a >= i.length ? i[i
						.length - 1] : i[a]);
					for (let a = 0; a < r.length; a++) this.triangles.push(s + r[a])
				}
				toMesh() {
					let t = new sn.Mesh(this.gl);
					return t.verts = this.verts, t.triangles = this.triangles, t.colors = this
						.colors, t.uvs = this.uvs, t.calculateNormals(), t
				}
				static quad(t = X.vec2.zero(), r = X.vec2.one()) {
					let i = X.mul(r, X.vec2(.5)),
						n = new sn.Mesh;
					return n.verts = [X.vec3(t.x - i.x, t.y - i.y, 0), X.vec3(t.x + i.x, t.y - i.y,
							0), X.vec3(t.x + i.x, t.y + i.y, 0), X.vec3(t.x - i.x, t.y + i.y,
						0)], n.triangles = [0, 1, 3, 1, 2, 3], n.uvs = [X.vec2(0, 0), X.vec2(1,
						0), X.vec2(1, 1), X.vec2(0, 1)], n.normals = [X.vec3(0, 0, 1), X.vec3(0,
						0, 1), X.vec3(0, 0, 1), X.vec3(0, 0, 1)], n.name = "mesh_quad", n
				}
				static ndcQuad() {
					return this.quad(X.vec2.zero(), X.vec2(2, 2))
				}
				static ndcTriangle() {
					let t = new sn.Mesh;
					return t.verts = [X.vec3(-1, -1, 0), X.vec3(3, -1, 0), X.vec3(-1, 3, 0)], t
						.triangles = [0, 1, 2], t.uvs = [X.vec2(0, 0), X.vec2(2, 0), X.vec2(0, 2)],
						t.normals = [X.vec3(0, 0, 1), X.vec3(0, 0, 1), X.vec3(0, 0, 1)], t.name =
						"mesh_ndc_triangle", t
				}
			};
		ni.MeshBuilder = La
	});
	var Ca = R(ai => {
		"use strict";
		Object.defineProperty(ai, "__esModule", {
			value: !0
		});
		ai.createBuiltinMesh = void 0;
		var Ba = Kr(),
			_e = Ve(),
			je = pe(),
			m0 = si();

		function x0(e) {
			return {
				quad: g0(e),
				screenQuad: M0(e),
				cube: y0(e)
			}
		}
		ai.createBuiltinMesh = x0;

		function g0(e) {
			let t = new Ba.Mesh(e);
			return t.verts = [_e.vec3(-.5, -.5, 0), _e.vec3(.5, -.5, 0), _e.vec3(.5, .5, 0), _e.vec3(-
				.5, .5, 0)], t.triangles = [0, 1, 3, 1, 2, 3], t.uvs = [je.vec2(0, 0), je.vec2(1,
				0), je.vec2(1, 1), je.vec2(0, 1)
			], t.calculateNormals(), t.name = "mesh_quad", t
		}

		function M0(e) {
			let t = new Ba.Mesh(e);
			return t.verts = [_e.vec3(-1, -1, 0), _e.vec3(1, -1, 0), _e.vec3(1, 1, 0), _e.vec3(-1, 1,
				0)], t.triangles = [0, 1, 3, 1, 2, 3], t.uvs = [je.vec2(0, 0), je.vec2(1, 0), je
				.vec2(1, 1), je.vec2(0, 1)
			], t.calculateNormals(), t.name = "mesh_screen_quad", t
		}

		function y0(e) {
			let t = [_e.vec3(-.5, -.5, -.5), _e.vec3(.5, -.5, -.5), _e.vec3(.5, .5, -.5), _e.vec3(-.5,
						.5, -.5), _e.vec3(-.5, -.5, .5), _e.vec3(.5, -.5, .5), _e.vec3(.5, .5, .5), _e
					.vec3(-.5, .5, .5)
				],
				r = [je.vec2(0, 0), je.vec2(1, 0), je.vec2(1, 1), je.vec2(0, 1)],
				i = new m0.MeshBuilder(24, e);
			i.addPolygon([t[1], t[0], t[3], t[2]], [r[0], r[1], r[2], r[3]]), i.addPolygon([t[5], t[1],
				t[2], t[6]
			], [r[0], r[1], r[2], r[3]]), i.addPolygon([t[4], t[5], t[6], t[7]], [r[0], r[1], r[2],
				r[3]
			]), i.addPolygon([t[0], t[4], t[7], t[3]], [r[0], r[1], r[2], r[3]]), i.addPolygon([t[
				7], t[6], t[2], t[3]
			], [r[0], r[1], r[2], r[3]]), i.addPolygon([t[0], t[1], t[5], t[4]], [r[0], r[1], r[2],
				r[3]
			]);
			let n = i.toMesh();
			return n.name = "mesh_cube", n
		}
	});
	var za = R(oi => {
		"use strict";
		Object.defineProperty(oi, "__esModule", {
			value: !0
		});
		oi.BuiltinAssets = void 0;
		var qa = Oa(),
			an = rr(),
			_0 = Da(),
			b0 = Ca(),
			Ia = class {
				constructor(t) {
					let r = {
						assets: this,
						gl: t,
						width: 0,
						height: 0,
						renderer: null
					};
					this.gl = t, this.BuiltinUniforms = an.BuiltinUniformNames, this.shaderSources =
						an.BuiltinShaderSources, this.shaders = an.compileBuiltinShaders(t), this
						.meshes = b0.createBuiltinMesh(t), this.textures = _0.createDefaultTextures(
							r), this.types = qa.createBuiltinMaterialTypes(t, this.textures, this
							.shaders), this.materials = qa.createBuiltinMaterial(t, this.types, this
							.shaders, this.textures)
				}
			};
		oi.BuiltinAssets = Ia
	});
	var ka = R(ci => {
		"use strict";
		Object.defineProperty(ci, "__esModule", {
			value: !0
		});
		ci.ZograRenderer = void 0;
		var R0 = We(),
			Fa = ye(),
			w0 = Qe(),
			Le = _t(),
			Nt = ar(),
			Na = sr(),
			Be = pe(),
			T0 = za(),
			li = Yr(),
			Ga = si(),
			Ua = yt(),
			P0 = rr(),
			Va = class {
				constructor(t, r, i) {
					this.viewProjectionMatrix = Le.mat4.identity(), this.viewMatrix = Le.mat4
						.identity(), this.projectionMatrix = Le.mat4.identity(), this.target = Nt
						.RenderTarget.CanvasTarget, this.shader = null, this.globalUniforms =
						new Map, this.globalTextures = new Map, this.canvas = t, this.width = r ===
						void 0 ? t.width : r, this.height = i === void 0 ? t.height : i, this.canvas
						.width = this.width, this.canvas.height = this.height, this.scissor = new li
						.Rect(Be.vec2.zero(), Be.vec2(this.width, this.height)), this.gl = R0
						.panicNull(this.canvas.getContext("webgl2"),
							"WebGL2 is not support on current device."), this.assets = new T0
						.BuiltinAssets(this.gl), this.ctx = {
							gl: this.gl,
							width: this.width,
							height: this.height,
							assets: this.assets,
							renderer: this
						}, Fa.GlobalContext() || this.use(), this.helperAssets = {
							clipBlitMesh: Ga.MeshBuilder.ndcQuad(),
							blitMesh: Ga.MeshBuilder.ndcTriangle()
						}
				}
				use() {
					Fa.setGlobalContext(this.ctx)
				}
				setSize(t, r) {
					this.canvas.width = t, this.canvas.height = r, this.width = t, this.height = r,
						this.ctx.width = t, this.ctx.height = r
				}
				get canvasSize() {
					return Be.vec2(this.width, this.height)
				}
				setViewProjection(t, r) {
					this.viewProjectionMatrix = Le.mat4.mul(r, t)
				}
				setRenderTarget(t, r) {
					if (t instanceof Nt.RenderTarget) this.target !== t && this.target.release(),
						this.target = t;
					else if (t instanceof Array) {
						this.target.release(), this.target = new Nt.RenderTarget(t[0].width, t[0]
							.height, this.ctx);
						for (let i = 0; i < t.length; i++) this.target.addColorAttachment(t[i])
					} else t instanceof Na.RenderTexture && (this.target.release(), this.target =
						new Nt.RenderTarget(t.width, t.height, this.ctx), this.target
						.addColorAttachment(t));
					r && this.target.setDepthAttachment(r), this.scissor = new li.Rect(Be.vec2
					.zero(), this.target.size), this.target.bind(this.ctx)
				}
				clear(t = w0.Color.black, r = !0) {
					this.gl.clearColor(t.r, t.g, t.b, t.a), this.gl.clear(this.gl.COLOR_BUFFER_BIT |
						(r ? this.gl.DEPTH_BUFFER_BIT : 0))
				}
				blit(t, r, i = this.assets.materials.blitCopy, n, s) {
					if (r instanceof Na.RenderTexture) {
						let h = new Nt.RenderTarget(r.width, r.height, this.ctx);
						h.addColorAttachment(r), r = h
					} else if (r instanceof Array) {
						let h = new Nt.RenderTarget(0, 0, this.ctx);
						for (let u = 0; u < r.length; u++) h.addColorAttachment(r[u]);
						r = h
					}
					let a = this.viewProjectionMatrix,
						o = this.target,
						c = this.helperAssets.blitMesh,
						l = r === Nt.RenderTarget.CanvasTarget ? new li.Rect(Be.vec2.zero(), this
							.canvasSize) : new li.Rect(Be.vec2.zero(), r.size);
					if (t && (n || s) && (l = s || l, n)) {
						c = this.helperAssets.clipBlitMesh;
						let h = Ua.div(n.min, t.size),
							u = Ua.div(n.max, t.size);
						c.uvs = [Be.vec2(h.x, h.y), Be.vec2(u.x, h.y), Be.vec2(u.x, u.y), Be.vec2(h
							.x, u.y)], c.update()
					}
					this.target = r, this.scissor = l, this.viewProjectionMatrix = Le.mat4
						.identity(), t && i.setProp(P0.BuiltinUniformNames.mainTex, "tex2d", t),
						this.drawMesh(c, Le.mat4.identity(), i), this.setRenderTarget(o), this
						.viewProjectionMatrix = a
				}
				useShader(t) {
					let r = this.gl;
					this.shader = t, t.use(), t.setupPipelineStates()
				}
				setupTransforms(t, r) {
					let i = this.gl,
						n = Le.mat4.mul(this.viewProjectionMatrix, r),
						s = Le.mat4.transpose(Le.mat4.invert(r)),
						a = Le.mat4.transpose(Le.mat4.invert(Le.mat4.mul(this.viewMatrix, r)));
					t.setupBuiltinUniform({
						matM: r,
						matVP: this.viewProjectionMatrix,
						matMVP: n,
						matM_IT: s,
						matMV_IT: a
					})
				}
				setupGlobalUniforms(t) {
					for (let r of this.globalUniforms.values()) t.setUniformDirectly(r.name, r.type,
						r.value)
				}
				drawMeshInstance(t, r, i, n) {
					i || (i = this.assets.materials.error);
					let s = this.gl,
						a = {
							assets: this.assets,
							gl: s,
							nextTextureUnit: 0,
							size: Be.vec2(this.width, this.height)
						};
					this.target.bind(this.ctx), this.setupScissor(), this.useShader(i.shader), i
						.upload(a), this.setupTransforms(i.shader, Le.mat4.identity()), t.bind(i
							.shader), r.bindInstanceDraw(i.shader), s.drawElementsInstanced(s
							.TRIANGLES, t.triangles.length, s.UNSIGNED_INT, 0, n), r
						.cleanupInstanceDraw(i.shader), i.unbindRenderTextures()
				}
				drawMeshProceduralInstance(t, r, i) {
					r || (r = this.assets.materials.error);
					let n = this.gl,
						s = {
							assets: this.assets,
							gl: n,
							nextTextureUnit: 0,
							size: Be.vec2(this.width, this.height)
						};
					this.target.bind(this.ctx), this.setupScissor(), this.useShader(r.shader), r
						.upload(s), this.setupTransforms(r.shader, Le.mat4.identity()), t.bind(r
							.shader), n.drawElementsInstanced(n.TRIANGLES, t.triangles.length, n
							.UNSIGNED_INT, 0, i), r.unbindRenderTextures()
				}
				drawMesh(t, r, i) {
					i || (i = this.assets.materials.error);
					let n = this.gl,
						s = {
							assets: this.assets,
							gl: n,
							nextTextureUnit: 0,
							size: Be.vec2(this.width, this.height)
						};
					this.target.bind(this.ctx), this.setupScissor(), this.useShader(i.shader), i
						.upload(s), this.setupTransforms(i.shader, r), t.bind(i.shader), n
						.drawElements(n.TRIANGLES, t.triangles.length, n.UNSIGNED_INT, 0), i
						.unbindRenderTextures()
				}
				drawLines(t, r, i) {
					let n = this.gl,
						s = {
							assets: this.assets,
							gl: n,
							nextTextureUnit: 0,
							size: Be.vec2(this.width, this.height)
						};
					this.target.bind(this.ctx), this.setupScissor(), this.useShader(i.shader), i
						.upload(s), this.setupTransforms(i.shader, r), t.bind(i.shader), n
						.drawElements(n.LINES, t.lines.length, n.UNSIGNED_INT, 0)
				}
				setGlobalUniform(t, r, i) {
					this.globalUniforms.set(t, {
						name: t,
						type: r,
						value: i
					})
				}
				unsetGlobalUniform(t) {
					this.globalUniforms.delete(t)
				}
				setupScissor() {
					this.gl.viewport(this.scissor.xMin, this.scissor.yMin, this.scissor.size.x, this
						.scissor.size.y)
				}
			};
		ci.ZograRenderer = Va
	});
	var ln = R(cr => {
		"use strict";
		Object.defineProperty(cr, "__esModule", {
			value: !0
		});
		cr.LineBuilder = cr.Lines = void 0;
		var Ya = Qe(),
			Wa = ye(),
			on = We(),
			A0 = bt(),
			cn = class extends A0.Asset {
				constructor(t = Wa.GL()) {
					var r, i;
					super();
					this._verts = [], this._colors = [], this._lines = [], this.dirty = !0, this
						.vertices = new Float32Array(0), this.indices = new Uint32Array(0), this
						.name = `Lines_${this.assetID}`, this.gl = t, this.VBO = (r = t
							.createBuffer()) !== null && r !== void 0 ? r : on.panic(
							"Failed to create vertex buffer."), this.EBO = (i = t
					.createBuffer()) !== null && i !== void 0 ? i : on.panic(
							"Failed to create element buffer.")
				}
				get verts() {
					return this._verts
				}
				set verts(t) {
					this._verts = t, this.dirty = !0
				}
				get colors() {
					return this._colors
				}
				set colors(t) {
					this._colors = t, this.dirty = !0
				}
				get lines() {
					return this._lines
				}
				set lines(t) {
					this._lines = t, this.dirty = !0
				}
				clear() {
					this.verts = [], this.colors = [], this.lines = []
				}
				update() {
					if (this.dirty) {
						let t = this.gl;
						if (this.lines.length % 2 != 0) throw new Error("Invalid lines.");
						if (this.colors.length !== this.verts.length && (this.colors = [...this
								.colors, ...on.fillArray(Ya.Color.white, this.verts.length -
									this.colors.length)
							]), this.vertices = new Float32Array(this.verts.flatMap((r, i) => [...r,
								...this.colors[i]
							])), this.vertices.length != this.verts.length * 7) throw new Error(
							"Buffer with invalid length.");
						this.indices = new Uint32Array(this.lines.flat()), t.bindBuffer(t
							.ARRAY_BUFFER, this.VBO), t.bufferData(t.ARRAY_BUFFER, this
							.vertices, t.DYNAMIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,
							this.EBO), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t
							.DYNAMIC_DRAW), this.dirty = !1
					}
				}
				bind(t) {
					let r = this.gl;
					this.update();
					let i = t._internal().attributes,
						n = 7 * 4;
					r.bindBuffer(r.ARRAY_BUFFER, this.VBO), i.vert >= 0 && (r.vertexAttribPointer(i
							.vert, 3, r.FLOAT, !1, n, 0), r.enableVertexAttribArray(i.vert)), i
						.color >= 0 && (r.vertexAttribPointer(i.color, 4, r.FLOAT, !1, n, 3 * 4), r
							.enableVertexAttribArray(i.color)), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,
							this.EBO)
				}
				destroy() {
					this.destroyed || (this.gl.deleteBuffer(this.VBO), this.gl.deleteBuffer(this
						.EBO), super.destroy())
				}
			};
		cr.Lines = cn;
		var ja = class {
			constructor(t = 0, r = Wa.GL()) {
				this.verts = [], this.colors = [], this.lines = [], this.gl = r
			}
			addLine(t, r = Ya.Color.white) {
				let i = this.verts.length,
					[n, s] = t;
				this.verts.push(n, s), this.colors.push(r, r), this.lines.push(i, i + 1)
			}
			toLines() {
				let t = new cn(this.gl);
				return t.verts = this.verts, t.colors = this.colors, t.lines = this.lines, t
					.update(), t
			}
		};
		cr.LineBuilder = ja
	});
	var Qa = R(hi => {
		"use strict";
		Object.defineProperty(hi, "__esModule", {
			value: !0
		});
		hi.RenderBuffer = void 0;
		var E0 = We(),
			Ha = ye(),
			Xa = class extends Array {
				constructor(t, r, i = Ha.GlobalContext()) {
					super(r);
					this.static = !1, this.dirty = !1, this.initialized = !1, this.glBuf = null,
						this.structure = t, this.ctx = i;
					let n = 0;
					for (let a in t) switch (t[a]) {
						case "float":
							n += 1;
							break;
						case "vec2":
							n += 2;
							break;
						case "vec3":
							n += 3;
							break;
						case "vec4":
							n += 4;
							break;
						case "mat4":
							n += 16;
							break
					}
					let s = n * 4;
					this.buffer = null, this.byteSize = s * r, this.elementSize = n, this
						.elementByteSize = s, this.resize(r), this.tryInit(!1)
				}
				tryInit(t = !1) {
					var r;
					if (this.initialized) return !0;
					let i = this.ctx || Ha.GlobalContext();
					if (!i) {
						if (t) throw new Error(
							"Failed to init render buffer without a global GL context.");
						return !1
					}
					this.ctx = i;
					let n = i.gl;
					return this.glBuf = (r = n.createBuffer()) !== null && r !== void 0 ? r : E0
						.panic("Failed to create render buffer"), n.bindBuffer(n.ARRAY_BUFFER, this
							.glBuf), n.bufferData(n.ARRAY_BUFFER, this.byteSize, this.static ? n
							.STATIC_DRAW : n.DYNAMIC_DRAW), this.initialized = !0, !0
				}
				resize(t, r = !0) {
					let i = this.buffer;
					this.buffer = new Float32Array(this.elementSize * t), r && i && this.buffer.set(
						i, 0), this.length = t;
					let n = this.elementByteSize;
					for (let s = 0; s < this.length; s++) {
						let a = {},
							o = 0;
						for (let c in this.structure) switch (this.structure[c]) {
							case "float":
								a[c] = new Float32Array(this.buffer.buffer, s * n + o * 4, 1),
									o += 1;
								break;
							case "vec2":
								a[c] = new Float32Array(this.buffer.buffer, s * n + o * 4, 2),
									o += 2;
								break;
							case "vec3":
								a[c] = new Float32Array(this.buffer.buffer, s * n + o * 4, 3),
									o += 3;
								break;
							case "vec4":
								a[c] = new Float32Array(this.buffer.buffer, s * n + o * 4, 4),
									o += 4;
								break;
							case "mat4":
								a[c] = new Float32Array(this.buffer.buffer, s * n + o * 4, 16),
									o += 16;
								break
						}
						this[s] = a
					}
					this.dirty = !0
				}
				markDirty() {
					this.dirty = !0
				}
				upload(t = !1) {
					if (this.tryInit(!0), !this.dirty && !t && this.static) return !1;
					let r = this.ctx.gl;
					return r.bindBuffer(r.ARRAY_BUFFER, this.glBuf), r.bufferData(r.ARRAY_BUFFER,
							this.buffer, this.static ? r.STATIC_DRAW : r.DYNAMIC_DRAW), this
						.dirty = !1, !0
				}
				bindInstanceDraw(t) {
					this.tryInit(!0);
					let r = this.ctx.gl;
					this.upload() || r.bindBuffer(r.ARRAY_BUFFER, this.glBuf);
					let i = t.attributes,
						n = 0;
					for (let s in this.structure) {
						let a = i[s];
						switch (a >= 0 && r.enableVertexAttribArray(a), this.structure[s]) {
							case "float":
								a >= 0 && r.vertexAttribPointer(a, 1, r.FLOAT, !1, this
									.elementByteSize, n * 4), n += 1;
								break;
							case "vec2":
								a >= 0 && r.vertexAttribPointer(a, 2, r.FLOAT, !1, this
									.elementByteSize, n * 4), n += 2;
								break;
							case "vec3":
								a >= 0 && r.vertexAttribPointer(a, 3, r.FLOAT, !1, this
									.elementByteSize, n * 4), n += 3;
								break;
							case "vec4":
								a >= 0 && r.vertexAttribPointer(a, 4, r.FLOAT, !1, this
									.elementByteSize, n * 4), n += 4;
								break;
							case "mat4":
								a >= 0 && (r.enableVertexAttribArray(a + 0), r
									.enableVertexAttribArray(a + 1), r.enableVertexAttribArray(
										a + 2), r.enableVertexAttribArray(a + 3), r
									.vertexAttribPointer(a + 0, 4, r.FLOAT, !1, this
										.elementByteSize, (n + 0) * 4), r.vertexAttribPointer(
										a + 1, 4, r.FLOAT, !1, this.elementByteSize, (n + 4) * 4
										), r.vertexAttribPointer(a + 2, 4, r.FLOAT, !1, this
										.elementByteSize, (n + 8) * 4), r.vertexAttribPointer(
										a + 3, 4, r.FLOAT, !1, this.elementByteSize, (n + 12) *
										4), r.vertexAttribDivisor(a + 0, 1), r
									.vertexAttribDivisor(a + 1, 1), r.vertexAttribDivisor(a + 2,
										1), r.vertexAttribDivisor(a + 3, 1)), n += 16;
								break
						}
						a >= 0 && r.vertexAttribDivisor(a, 1)
					}
				}
				cleanupInstanceDraw(t) {
					this.tryInit(!0);
					let r = this.ctx.gl,
						i = t.attributes;
					for (let n in this.structure) {
						let s = i[n];
						switch (this.structure[n]) {
							case "float":
							case "vec2":
							case "vec3":
							case "vec4":
								s >= 0 && r.vertexAttribDivisor(s, 0), s >= 0 && r
									.disableVertexAttribArray(s);
								break;
							case "mat4":
								s >= 0 && (r.vertexAttribDivisor(s + 0, 0), r.vertexAttribDivisor(
										s + 1, 0), r.vertexAttribDivisor(s + 2, 0), r
									.vertexAttribDivisor(s + 3, 0), r.disableVertexAttribArray(
										s + 0), r.disableVertexAttribArray(s + 1), r
									.disableVertexAttribArray(s + 2), r
									.disableVertexAttribArray(s + 3));
								break
						}
					}
				}
			};
		hi.RenderBuffer = Xa
	});
	var lr = R(ue => {
		"use strict";
		var S0 = ue && ue.__createBinding || (Object.create ? function(e, t, r, i) {
				i === void 0 && (i = r), Object.defineProperty(e, i, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, i) {
				i === void 0 && (i = r), e[i] = t[r]
			}),
			$e = ue && ue.__exportStar || function(e, t) {
				for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && S0(t,
					e, r)
			};
		Object.defineProperty(ue, "__esModule", {
			value: !0
		});
		ue.TextureFormat = void 0;
		$e(Zr(), ue);
		$e(en(), ue);
		$e(Kr(), ue);
		$e(ka(), ue);
		$e(Hi(), ue);
		$e(sr(), ue);
		$e(bt(), ue);
		$e(ln(), ue);
		$e(tr(), ue);
		$e(Qa(), ue);
		$e(ar(), ue);
		var O0 = er();
		Object.defineProperty(ue, "TextureFormat", {
			enumerable: !0,
			get: function() {
				return O0.TextureFormat
			}
		})
	});
	var hn = R(ui => {
		"use strict";
		Object.defineProperty(ui, "__esModule", {
			value: !0
		});
		ui.Transform = void 0;
		var hr = _t(),
			$a = Ve(),
			ur = Ui(),
			Za = class {
				constructor() {
					this._parent = null, this.children = new Set, this.localPosition = $a.vec3
						.zero(), this.localRotation = ur.quat.identity(), this.localScaling = $a
						.vec3.one()
				}
				get position() {
					return this._parent ? hr.mat4.mulPoint(this._parent.localToWorldMatrix, this
						.localPosition) : this.localPosition
				}
				set position(t) {
					this._parent ? this.localPosition = hr.mat4.mulPoint(this._parent
						.worldToLocalMatrix, t) : this.localPosition = t
				}
				get rotation() {
					return this._parent ? ur.quat.mul(this._parent.rotation, this.localRotation) :
						this.localRotation
				}
				set rotation(t) {
					this._parent ? this.localRotation = ur.quat.normalize(ur.quat.mul(ur.quat
							.invert(this._parent.rotation), t)) : this.localRotation = ur.quat
						.normalize(t)
				}
				get localToWorldMatrix() {
					if (!this._parent) return hr.mat4.rts(this.localRotation, this.localPosition,
						this.localScaling);
					let t = hr.mat4.rts(this.localRotation, this.localPosition, this.localScaling);
					return hr.mat4.mul(t, this._parent.localToWorldMatrix, t)
				}
				get worldToLocalMatrix() {
					return hr.mat4.invert(this.localToWorldMatrix)
				}
				get parent() {
					return this._parent
				}
				set parent(t) {
					this._parent = t, t && t.children.add(this)
				}
			};
		ui.Transform = Za
	});
	var dr = R(fr => {
		"use strict";
		Object.defineProperty(fr, "__esModule", {
			value: !0
		});
		fr.EntityManager = fr.Entity = void 0;
		var D0 = hn(),
			Ja = bt(),
			L0 = tr(),
			Ka = class extends D0.Transform {
				constructor() {
					super(...arguments);
					this.assetID = Ja.AssetManager.newAssetID(this), this.name =
						`Entity_${this.assetID}`, this.eventEmitter = new L0.EventEmitter, this
						.destroyed = !1
				}
				on(t, r) {
					return this.eventEmitter.on(t, r)
				}
				off(t, r) {
					this.eventEmitter.off(t, r)
				}
				__updateRecursive(t) {
					this.eventEmitter.emit("update", this, t);
					for (let r of this.children) r.__updateRecursive(t)
				}
				destroy() {
					this.destroyed = !0, Ja.AssetManager.destroy(this.assetID)
				}
			};
		fr.Entity = Ka;
		var eo = class {
			constructor() {
				this.entityMap = new Map, this._entities = []
			}
			get entities() {
				return this._entities
			}
			add(t) {
				this.entityMap.set(t.assetID, t), this._entities = Array.from(this.entityMap
					.values())
			}
			removeRecursive(t) {
				this.entityMap.delete(t.assetID);
				for (let r of t.children) this.removeRecursive(r)
			}
			remove(t) {
				this.removeRecursive(t), t.parent && t.parent.children.delete(t), this
					._entities = Array.from(this.entityMap.values())
			}
		};
		fr.EntityManager = eo
	});
	var un = R(Gt => {
		"use strict";
		Object.defineProperty(Gt, "__esModule", {
			value: !0
		});
		Gt.Camera = Gt.Projection = void 0;
		var to = sr(),
			ro = ar(),
			B0 = ye(),
			Ut = pe(),
			C0 = dr(),
			xr = _t(),
			_r = yt(),
			q0 = Qe(),
			io = Ve(),
			I0 = Vi(),
			z0 = mt(),
			fi;
		(function(e) {
			e[e.Perspective = 0] = "Perspective", e[e.Orthographic = 1] = "Orthographic"
		})(fi = Gt.Projection || (Gt.Projection = {}));
		var no = class extends C0.Entity {
			constructor(t = B0.GlobalContext()) {
				super();
				this.output = ro.RenderTarget.CanvasTarget, this.FOV = 30, this.near = .3, this
					.far = 1e3, this.viewHeight = 1, this.projection = fi.Perspective, this
					.clearColor = q0.Color.black, this.clearDepth = !0, this.ctx = t
			}
			get pixelSize() {
				return this.output instanceof to.RenderTexture ? Ut.vec2(this.output.width, this
					.output.height) : Ut.vec2(this.ctx.width, this.ctx.height)
			}
			get aspectRatio() {
				return this.pixelSize.x / this.pixelSize.y
			}
			get viewProjectionMatrix() {
				let t = this.worldToLocalMatrix,
					r = this.projectionMatrix;
				return xr.mat4.mul(r, t)
			}
			get projectionMatrix() {
				return this.projection === fi.Perspective ? xr.mat4.perspective(this.FOV * _r
					.Deg2Rad, this.aspectRatio, this.near, this.far) : xr.mat4.ortho(this
					.viewHeight, this.aspectRatio, this.near, this.far)
			}
			on(t, r) {
				this.eventEmitter.on(t, r)
			}
			off(t, r) {
				this.eventEmitter.on(t, r)
			}
			__preRender(t) {
				this.eventEmitter.emit("prerender", this, t)
			}
			__postRender(t) {
				this.eventEmitter.emit("postrender", this, t)
			}
			screenToRay(t) {
				let r = this.screenToWorld(t);
				return I0.ray(this.position, _r.minus(io.vec3(r.x, r.y, r.z), this.position))
			}
			screenToWorld(t) {
				let r = this.projection == fi.Perspective ? this.near : 1,
					i = this.screenToViewport(t).mul(Ut.vec2(2, -2)).minus(Ut.vec2(1, -1)),
					n = _r.mul(z0.vec4(i.x, i.y, -1, 1), r),
					s = xr.mat4.invert(this.viewProjectionMatrix),
					a = xr.mat4.mulVec4(s, n);
				return io.vec3(a[0], a[1], a[2])
			}
			screenToViewport(t) {
				return this.output === ro.RenderTarget.CanvasTarget ? _r.div(t, Ut.vec2(this.ctx
						.width, this.ctx.height)) : this.output instanceof to.RenderTexture ? _r
					.div(t, Ut.vec2(this.output.width, this.output.height)) : Ut.vec2.zero()
			}
		};
		Gt.Camera = no
	});
	var fn = R(di => {
		"use strict";
		Object.defineProperty(di, "__esModule", {
			value: !0
		});
		di.RenderObject = void 0;
		var F0 = ye(),
			N0 = dr(),
			so = class extends N0.Entity {
				constructor(t = F0.GlobalContext()) {
					super();
					this.meshes = [], this.materials = [], this.materials = [t.assets.materials
						.default
					]
				}
				on(t, r) {
					this.eventEmitter.on(t, r)
				}
				off(t, r) {
					this.eventEmitter.off(t, r)
				}
				__onRender(t, r) {
					this.eventEmitter.emit("render", this, t, r)
				}
			};
		di.RenderObject = so
	});
	var dn = R(Vt => {
		"use strict";
		Object.defineProperty(Vt, "__esModule", {
			value: !0
		});
		Vt.Light = Vt.LightType = void 0;
		var G0 = dr(),
			U0 = Qe(),
			ao;
		(function(e) {
			e[e.Directional = 0] = "Directional", e[e.Point = 1] = "Point"
		})(ao = Vt.LightType || (Vt.LightType = {}));
		var oo = class extends G0.Entity {
			constructor(t = ao.Directional) {
				super();
				this.intensity = 1, this.color = U0.Color.white, this.type = t
			}
		};
		Vt.Light = oo
	});
	var vn = R(vi => {
		"use strict";
		Object.defineProperty(vi, "__esModule", {
			value: !0
		});
		vi.Scene = void 0;
		var V0 = dr(),
			k0 = tr(),
			Y0 = lr(),
			co = class extends V0.EntityManager {
				constructor() {
					super();
					this.eventEmitter = new k0.EventEmitter, this.assetID = Y0.AssetManager
						.newAssetID(this), this.name = `Scene_${this.assetID}`
				}
				add(t, r) {
					super.add(t);
					let i = t.constructor;
					r && (t.parent = r);
					for (let n of t.children) this.add(n, t);
					this.eventEmitter.emit("entity-add", t, r || null)
				}
				remove(t) {
					super.remove(t), this.eventEmitter.emit("entity-remove", t, t.parent)
				}
				rootEntities() {
					return this._entities.filter(t => t.parent === null)
				}
				getEntities() {
					return this._entities
				}
				getEntitiesOfType(t) {
					return this.entities.filter(r => r instanceof t)
				}
				on(t, r) {
					this.eventEmitter.on(t, r)
				}
				off(t, r) {
					this.eventEmitter.off(t, r)
				}
				destroy() {
					throw this._entities = [], this.entityMap.clear(), new Error(
						"Method not implemented.")
				}
			};
		vi.Scene = co
	});
	var pi = R(kt => {
		"use strict";
		Object.defineProperty(kt, "__esModule", {
			value: !0
		});
		kt.RenderData = kt.RenderOrder = void 0;
		var W0 = fn(),
			j0 = dn(),
			H0 = _t(),
			pn;
		(function(e) {
			e[e.NearToFar = 0] = "NearToFar", e[e.FarToNear = 1] = "FarToNear"
		})(pn = kt.RenderOrder || (kt.RenderOrder = {}));
		var lo = class {
			constructor(t, r) {
				this.visibleObjects = [], this.visibleLights = [], this.camera = t, this
					.visibleLights = r.getEntitiesOfType(j0.Light), this.visibleObjects = r
					.getEntitiesOfType(W0.RenderObject)
			}
			getVisibleObjects(t = pn.NearToFar) {
				let r = this.camera.worldToLocalMatrix,
					i = this.visibleObjects.map(n => ({
						pos: H0.mat4.mulPoint(r, n.position),
						obj: n
					}));
				return t === pn.NearToFar ? i = i.sort((n, s) => n.pos.z - s.pos.z) : i = i
					.sort((n, s) => s.pos.z - n.pos.z), i.map(n => n.obj)
			}
			getVisibleLights() {
				return this.visibleLights
			}
		};
		kt.RenderData = lo
	});
	var gi = R(mi => {
		"use strict";
		Object.defineProperty(mi, "__esModule", {
			value: !0
		});
		mi.DebugLayerRenderer = void 0;
		var X0 = lr(),
			ho = Qe(),
			Q0 = _t(),
			Tt = pe(),
			uo = class {
				constructor() {
					this.lines = new X0.Lines
				}
				drawLine(t, r, i = ho.Color.white) {
					let n = this.lines.verts,
						s = this.lines.lines,
						a = this.lines.colors,
						o = n.length;
					n.push(t, r), a.push(i, i), s.push(o, o + 1), this.lines.verts = n, this.lines
						.colors = a, this.lines.lines = s
				}
				drawRect(t, r, i = ho.Color.white) {
					this.drawLine(Tt.vec2(t.x, t.y).toVec3(), Tt.vec2(r.x, t.y).toVec3(), i), this
						.drawLine(Tt.vec2(r.x, t.y).toVec3(), Tt.vec2(r.x, r.y).toVec3(), i), this
						.drawLine(Tt.vec2(r.x, r.y).toVec3(), Tt.vec2(t.x, r.y).toVec3(), i), this
						.drawLine(Tt.vec2(t.x, r.y).toVec3(), Tt.vec2(t.x, t.y).toVec3(), i)
				}
				render(t, r) {
					t.renderer.drawLines(this.lines, Q0.mat4.identity(), t.renderer.assets.materials
						.ColoredLine), this.lines.clear()
				}
			};
		mi.DebugLayerRenderer = uo
	});
	var mn = R(Mi => {
		"use strict";
		Object.defineProperty(Mi, "__esModule", {
			value: !0
		});
		Mi.PreviewRenderer = void 0;
		var $0 = _t(),
			fo = pi(),
			yi = Qe(),
			vo = ar(),
			Z0 = ln(),
			br = Ve(),
			J0 = gi(),
			po = class {
				constructor(t) {
					this.materialReplaceMap = new Map, this.debugLayer = new J0.DebugLayerRenderer,
						this.renderer = t;
					let r = yi.rgba(1, 1, 1, .1),
						i = new Z0.LineBuilder(0, t.gl),
						n = 10,
						s = 1;
					for (let a = -n; a <= n; a += s) i.addLine([br.vec3(a, 0, -n), br.vec3(a, 0,
						n)], r), i.addLine([br.vec3(-n, 0, a), br.vec3(n, 0, a)], r);
					this.grid = i.toLines()
				}
				render(t, r) {
					for (let i = 0; i < r.length; i++) {
						let n = new fo.RenderData(r[i], t.scene);
						this.renderCamera(t, n)
					}
				}
				setupLight(t, r) {
					t.renderer.setGlobalUniform("uLightDir", "vec3", br.vec3(-1, 1, 0).normalize()),
						t.renderer.setGlobalUniform("uAmbientSky", "color", yi.rgb(.2, .2, .2)), t
						.renderer.setGlobalUniform("uLightPos", "vec3", r.camera.position), t
						.renderer.setGlobalUniform("uLightColor", "color", yi.rgb(.8, .8, .8))
				}
				renderCamera(t, r) {
					t.renderer.clear(yi.rgb(.3, .3, .3), !0);
					let i = r.camera;
					i.__preRender(t), i.output === vo.RenderTarget.CanvasTarget ? t.renderer
						.setRenderTarget(vo.RenderTarget.CanvasTarget) : t.renderer.setRenderTarget(
							i.output), t.renderer.clear(i.clearColor, i.clearDepth), t.renderer
						.setViewProjection(i.worldToLocalMatrix, i.projectionMatrix), t.renderer
						.setGlobalUniform("uCameraPos", "vec3", i.position), this.setupLight(t, r);
					let n = r.getVisibleObjects(fo.RenderOrder.NearToFar);
					for (let s of n) {
						s.__onRender(t, r);
						let a = s.localToWorldMatrix;
						for (let o = 0; o < s.meshes.length; o++) {
							if (!s.meshes[o]) continue;
							let c = s.materials[o] || t.renderer.assets.materials.default;
							this.drawWithMaterial(s.meshes[o], a, c)
						}
					}
					this.debugLayer.render(t, r), i.__postRender(t)
				}
				renderGrid(t, r) {
					this.renderer.drawLines(this.grid, $0.mat4.identity(), this.renderer.assets
						.materials.ColoredLine)
				}
				drawWithMaterial(t, r, i) {
					this.materialReplaceMap.has(i.constructor) ? this.renderer.drawMesh(t, r, this
						.materialReplaceMap.get(i.constructor)) : this.renderer.drawMesh(t, r,
						i)
				}
				replaceMaterial(t, r) {
					this.materialReplaceMap.set(t, r)
				}
			};
		Mi.PreviewRenderer = po
	});
	var Mo = R(xi => {
		"use strict";
		Object.defineProperty(xi, "__esModule", {
			value: !0
		});
		xi.ZograEngine = void 0;
		var K0 = vn(),
			ev = mn(),
			mo = un(),
			tv = lr(),
			rv = tr(),
			go = class {
				constructor(t, r = ev.PreviewRenderer) {
					this._time = {
							deltaTime: 0,
							time: 0
						}, this.renderer = new tv.ZograRenderer(t, t.width, t.height), this
						.renderPipeline = new r(this.renderer), this._scene = new K0.Scene, this
						.eventEmitter = new rv.EventEmitter
				}
				get time() {
					return this._time
				}
				get scene() {
					return this._scene
				}
				set scene(t) {
					let r = this._scene;
					this._scene = t, this.eventEmitter.emit("scene-change", t, r)
				}
				renderScene() {
					let t = this.scene.getEntitiesOfType(mo.Camera);
					this.renderPipeline.render({
						renderer: this.renderer,
						scene: this.scene
					}, t)
				}
				updateEntities(t) {
					let r = this.scene.rootEntities();
					for (let i of r) i.__updateRecursive(t)
				}
				start() {
					let t = 0,
						r = 0,
						i = n => {
							if (t === 0) {
								r = t = n, requestAnimationFrame(i);
								return
							}
							let s = (n - r) / 1e3,
								a = (n - t) / 1e3;
							t = n;
							let o = {
								time: s,
								deltaTime: a
							};
							this._time = o, this.eventEmitter.emit("update", o), this
								.updateEntities(o), this.eventEmitter.emit("render", this.scene
									.getEntitiesOfType(mo.Camera)), this.renderScene(),
								requestAnimationFrame(i)
						};
					requestAnimationFrame(i)
				}
				on(t, r) {
					this.eventEmitter.on(t, r)
				}
				off(t, r) {
					this.eventEmitter.off(t, r)
				}
			};
		xi.ZograEngine = go
	});
	var _o = R(rt => {
		"use strict";
		Object.defineProperty(rt, "__esModule", {
			value: !0
		});
		rt.Keys = rt.InputManager = rt.KeyState = void 0;
		var it = pe(),
			gn = yt(),
			iv = We(),
			Ee;
		(function(e) {
			e[e.Pressed = 1] = "Pressed", e[e.Released = 0] = "Released"
		})(Ee = rt.KeyState || (rt.KeyState = {}));
		var yo = class {
				constructor() {
					this.keyStates = new Map, this.keyStatesThisFrame = new Map, this.mousePos = it
						.vec2.zero(), this.mouseDelta = it.vec2.zero(), this.wheelDelta = 0
				}
			},
			xo = class {
				constructor(t = {}) {
					var r, i;
					this.preventBrowserShortcut = !0, this.states = new iv.DoubleBuffer(() =>
							new yo), this.eventTarget = t.target || window, t.bound ? this.bound = t
						.bound : ((r = t.target) === null || r === void 0 ? void 0 : r
							.getBoundingClientRect) && (this.bound = t.target), this
						.pointerLockElement = (i = t.pointerLockElement) !== null && i !== void 0 ?
						i : document.body, this.eventTarget.addEventListener("keydown", n => {
							this.states.back.keyStates.set(n.keyCode, Ee.Pressed), this.states
								.back.keyStatesThisFrame.set(n.keyCode, Ee.Pressed), this
								.preventBrowserShortcut && n.ctrlKey && (n.keyCode == He.S || n
									.keyCode == He.W) && (n.preventDefault(), n
								.stopPropagation())
						}), this.eventTarget.addEventListener("keyup", n => {
							this.states.back.keyStates.set(n.keyCode, Ee.Released), this.states
								.back.keyStatesThisFrame.set(n.keyCode, Ee.Released)
						}), this.eventTarget.addEventListener("mousedown", n => {
							var s;
							let a = (s = this.bound) === null || s === void 0 ? void 0 : s
								.getBoundingClientRect();
							if (a) {
								let o = it.vec2(a.left, a == null ? void 0 : a.top),
									c = gn.minus(it.vec2(n.clientX, n.clientY), o);
								if (c.x < 0 || c.y < 0 || c.x > a.width || c.y > a.height)
									return
							}
							this.states.back.keyStates.set(He.Mouse0 + n.button, Ee.Pressed),
								this.states.back.keyStatesThisFrame.set(He.Mouse0 + n.button, Ee
									.Pressed)
						}), this.eventTarget.addEventListener("mouseup", n => {
							var s;
							let a = (s = this.bound) === null || s === void 0 ? void 0 : s
								.getBoundingClientRect();
							if (a) {
								let o = it.vec2(a.left, a == null ? void 0 : a.top),
									c = gn.minus(it.vec2(n.clientX, n.clientY), o);
								if (c.x < 0 || c.y < 0 || c.x > a.width || c.y > a.height)
									return
							}
							this.states.back.keyStates.set(He.Mouse0 + n.button, Ee.Released),
								this.states.back.keyStatesThisFrame.set(He.Mouse0 + n.button, Ee
									.Released)
						}), this.eventTarget.addEventListener("mousemove", n => {
							var s, a, o;
							let c = (s = this.bound) === null || s === void 0 ? void 0 : s
								.getBoundingClientRect(),
								l = it.vec2((a = c == null ? void 0 : c.left) !== null && a !==
									void 0 ? a : 0, (o = c == null ? void 0 : c.top) !== null &&
									o !== void 0 ? o : 0),
								h = gn.minus(it.vec2(n.clientX, n.clientY), l);
							this.states.back.mouseDelta.plus(it.vec2(n.movementX, n.movementY)),
								this.states.back.mousePos = h
						}), this.eventTarget.addEventListener("wheel", n => {
							this.states.back.wheelDelta = n.deltaY
						});
					for (let n in He) !isNaN(n) || He.hasOwnProperty(n) && this.states.back
						.keyStates.set(He[n], Ee.Released);
					window.addEventListener("beforeunload", n => {
						this.preventBrowserShortcut && (this.states.back.keyStates.get(He
							.W) === Ee.Pressed || this.states.back.keyStates.get(He
								.Control) === Ee.Pressed) && (n.preventDefault(), n
							.returnValue = "Really want to quit?")
					})
				}
				get pointerPosition() {
					return this.states.current.mousePos
				}
				get pointerDelta() {
					return this.states.current.mouseDelta
				}
				get wheelDelta() {
					return this.states.current.wheelDelta
				}
				getKey(t) {
					return this.states.current.keyStates.get(t) === Ee.Pressed
				}
				getKeyDown(t) {
					return this.states.current.keyStatesThisFrame.get(t) === Ee.Pressed
				}
				getKeyUp(t) {
					return this.states.current.keyStatesThisFrame.get(t) === Ee.Released
				}
				update() {
					this.states.update(), this.states.back.keyStatesThisFrame.clear(), this.states
						.back.mouseDelta = it.vec2.zero(), this.states.back.wheelDelta = 0;
					for (let [t, r] of this.states.current.keyStates) this.states.back.keyStates
						.set(t, r);
					this.states.back.mousePos = this.states.current.mousePos
				}
				lockPointer() {
					this.pointerLockElement.requestPointerLock()
				}
				releasePointer() {
					document.exitPointerLock()
				}
			};
		rt.InputManager = xo;
		var He;
		(function(e) {
			e[e.BackSpace = 8] = "BackSpace", e[e.Tab = 9] = "Tab", e[e.Clear = 12] = "Clear", e[e
					.Enter = 13] = "Enter", e[e.Shift = 16] = "Shift", e[e.Control = 17] =
				"Control", e[e.Alt = 18] = "Alt", e[e.Pause = 19] = "Pause", e[e.CapsLock = 20] =
				"CapsLock", e[e.Escape = 27] = "Escape", e[e.Space = 32] = "Space", e[e.Prior =
				33] = "Prior", e[e.Next = 34] = "Next", e[e.End = 35] = "End", e[e.Home = 36] =
				"Home", e[e.Left = 37] = "Left", e[e.Up = 38] = "Up", e[e.Right = 39] = "Right", e[e
					.Down = 40] = "Down", e[e.Select = 41] = "Select", e[e.Print = 42] = "Print", e[
					e.Execute = 43] = "Execute", e[e.Insert = 45] = "Insert", e[e.Delete = 46] =
				"Delete", e[e.Help = 47] = "Help", e[e.Num0 = 48] = "Num0", e[e.Num1 = 49] = "Num1",
				e[e.Num2 = 50] = "Num2", e[e.Num3 = 51] = "Num3", e[e.Num4 = 52] = "Num4", e[e
					.Num5 = 53] = "Num5", e[e.Num6 = 54] = "Num6", e[e.Num7 = 55] = "Num7", e[e
					.Num8 = 56] = "Num8", e[e.Num9 = 57] = "Num9", e[e.A = 65] = "A", e[e.B = 66] =
				"B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e
					.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K =
					75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O =
				79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] =
				"S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e
					.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.KP0 = 96] = "KP0", e[e
					.KP1 = 97] = "KP1", e[e.KP2 = 98] = "KP2", e[e.KP3 = 99] = "KP3", e[e.KP4 =
				100] = "KP4", e[e.KP5 = 101] = "KP5", e[e.KP6 = 102] = "KP6", e[e.KP7 = 103] =
				"KP7", e[e.KP8 = 104] = "KP8", e[e.KP9 = 105] = "KP9", e[e.KPMultiply = 106] =
				"KPMultiply", e[e.KPAdd = 107] = "KPAdd", e[e.KPSeparator = 108] = "KPSeparator", e[
					e.KPSubtract = 109] = "KPSubtract", e[e.KPDecimal = 110] = "KPDecimal", e[e
					.KPDivide = 111] = "KPDivide", e[e.F1 = 112] = "F1", e[e.F2 = 113] = "F2", e[e
					.F3 = 114] = "F3", e[e.F4 = 115] = "F4", e[e.F5 = 116] = "F5", e[e.F6 = 117] =
				"F6", e[e.F7 = 118] = "F7", e[e.F8 = 119] = "F8", e[e.F9 = 120] = "F9", e[e.F10 =
					121] = "F10", e[e.F11 = 122] = "F11", e[e.F12 = 123] = "F12", e[e.F13 = 124] =
				"F13", e[e.F14 = 125] = "F14", e[e.F15 = 126] = "F15", e[e.F16 = 127] = "F16", e[e
					.F17 = 128] = "F17", e[e.F18 = 129] = "F18", e[e.F19 = 130] = "F19", e[e.F20 =
					131] = "F20", e[e.F21 = 132] = "F21", e[e.F22 = 133] = "F22", e[e.F23 = 134] =
				"F23", e[e.F24 = 135] = "F24", e[e.NumLock = 136] = "NumLock", e[e.ScrollLock =
				137] = "ScrollLock", e[e.Mouse0 = 256] = "Mouse0", e[e.Mouse1 = 257] = "Mouse1", e[e
					.Mouse2 = 258] = "Mouse2", e[e.Mouse3 = 259] = "Mouse3", e[e.Mouse4 = 260] =
				"Mouse4", e[e.Mouse5 = 261] = "Mouse5", e[e.Mouse6 = 262] = "Mouse6"
		})(He = rt.Keys || (rt.Keys = {}))
	});
	var bo = R(Ce => {
		"use strict";
		var nv = Ce && Ce.__createBinding || (Object.create ? function(e, t, r, i) {
				i === void 0 && (i = r), Object.defineProperty(e, i, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, i) {
				i === void 0 && (i = r), e[i] = t[r]
			}),
			Pt = Ce && Ce.__exportStar || function(e, t) {
				for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && nv(t,
					e, r)
			};
		Object.defineProperty(Ce, "__esModule", {
			value: !0
		});
		Pt(un(), Ce);
		Pt(fn(), Ce);
		Pt(dn(), Ce);
		Pt(dr(), Ce);
		Pt(vn(), Ce);
		Pt(hn(), Ce);
		Pt(Mo(), Ce);
		Pt(_o(), Ce)
	});
	var wo = R(Ro => {
		"use strict";
		Object.defineProperty(Ro, "__esModule", {
			value: !0
		})
	});
	var Eo = R(_i => {
		"use strict";
		Object.defineProperty(_i, "__esModule", {
			value: !0
		});
		_i.Default2DRenderPipeline = void 0;
		var To = pi(),
			Po = ar(),
			sv = gi(),
			Ao = class {
				constructor() {
					this.debuglayer = new sv.DebugLayerRenderer
				}
				render(t, r) {
					for (let i of r) {
						let n = new To.RenderData(i, t.scene);
						this.renderCamera(t, n)
					}
				}
				replaceMaterial(t, r) {
					throw new Error("Method not implemented.")
				}
				renderCamera(t, r) {
					let i = r.camera;
					i.__preRender(t), i.output === Po.RenderTarget.CanvasTarget ? t.renderer
						.setRenderTarget(Po.RenderTarget.CanvasTarget) : t.renderer.setRenderTarget(
							i.output), t.renderer.clear(i.clearColor, i.clearDepth), t.renderer
						.setViewProjection(i.worldToLocalMatrix, i.projectionMatrix);
					let n = r.getVisibleObjects(To.RenderOrder.FarToNear);
					for (let s of n) {
						s.__onRender(t, r);
						let a = s.localToWorldMatrix;
						for (let o = 0; o < s.meshes.length; o++) {
							if (!s.meshes[o]) continue;
							let c = s.materials[o] || t.renderer.assets.materials.default;
							c.setProp("uCameraPos", "vec3", i.position), t.renderer.drawMesh(s
								.meshes[o], a, c)
						}
					}
					this.debuglayer.render(t, r), i.__postRender(t)
				}
			};
		_i.Default2DRenderPipeline = Ao
	});
	var So = R(Ze => {
		"use strict";
		var av = Ze && Ze.__createBinding || (Object.create ? function(e, t, r, i) {
				i === void 0 && (i = r), Object.defineProperty(e, i, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, i) {
				i === void 0 && (i = r), e[i] = t[r]
			}),
			Rr = Ze && Ze.__exportStar || function(e, t) {
				for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && av(t,
					e, r)
			};
		Object.defineProperty(Ze, "__esModule", {
			value: !0
		});
		Rr(mn(), Ze);
		Rr(pi(), Ze);
		Rr(wo(), Ze);
		Rr(gi(), Ze);
		Rr(Eo(), Ze)
	});
	var Do = R(bi => {
		"use strict";
		Object.defineProperty(bi, "__esModule", {
			value: !0
		});
		bi.AssetsPack = void 0;
		var Oo = class {
			constructor() {
				this.mainAsset = null, this.assets = new Map
			}
			add(t, r) {
				r.name = t, this.assets.set(t, r)
			}
			setMain(t) {
				this.mainAsset = t
			}
			get(t) {
				for (let [r, i] of this.assets)
					if (i instanceof t) return i;
				return null
			}
			getAll(t) {
				return Array.from(this.assets.values()).filter(r => r instanceof t)
			}
		};
		bi.AssetsPack = Oo
	});
	var Mn = R(ut => {
		"use strict";
		var ov = ut && ut.__createBinding || (Object.create ? function(e, t, r, i) {
				i === void 0 && (i = r), Object.defineProperty(e, i, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, i) {
				i === void 0 && (i = r), e[i] = t[r]
			}),
			cv = ut && ut.__exportStar || function(e, t) {
				for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && ov(t,
					e, r)
			};
		Object.defineProperty(ut, "__esModule", {
			value: !0
		});
		ut.AssetsImporter = void 0;
		var Lo = ye();
		cv(Do(), ut);
		var Bo = class {
			constructor(t) {
				this.importers = t
			}
			async url(t, r = Lo.GlobalContext()) {
				let i = await fetch(t).then(n => n.arrayBuffer());
				return await this.buffer(i, r)
			}
			async buffer(t, r = Lo.GlobalContext()) {
				let i = {};
				for (let n in this.importers) i[n] = s => this.importers[n].import(t, s, r);
				return i
			}
		};
		ut.AssetsImporter = Bo
	});
	var Co = R(Ri => {
		"use strict";
		Object.defineProperty(Ri, "__esModule", {
			value: !0
		});
		Ri.TextureImporter = void 0;
		var yn = lr(),
			lv = ye(),
			hv = er(),
			uv = Mn(),
			fv = {
				import(e, t, r = lv.GlobalContext()) {
					return new Promise((i, n) => {
						let s = new Blob([e]),
							a = new Image;
						a.src = URL.createObjectURL(s);
						let o = () => {
							let c = {
									width: a.width,
									height: a.height,
									filterMode: yn.FilterMode.Linear,
									format: hv.TextureFormat.RGBA,
									mipmap: !0,
									wrapMpde: yn.WrapMode.Repeat
								},
								l = Object.assign(Object.assign({}, c), t),
								h = new yn.Texture2D(l.width, l.height, l.format, l
									.filterMode, r);
							h.autoMipmap = l.mipmap, h.wrapMode = l.wrapMpde, h
								.updateParameters(), h.setData(a), i(h)
						};
						a.complete ? o() : a.onload = o
					})
				}
			},
			dv = {
				tex2d: fv
			};
		Ri.TextureImporter = new uv.AssetsImporter(dv)
	});
	var xn = R(At => {
		"use strict";
		var vv = At && At.__createBinding || (Object.create ? function(e, t, r, i) {
				i === void 0 && (i = r), Object.defineProperty(e, i, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, i) {
				i === void 0 && (i = r), e[i] = t[r]
			}),
			qo = At && At.__exportStar || function(e, t) {
				for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && vv(t,
					e, r)
			};
		Object.defineProperty(At, "__esModule", {
			value: !0
		});
		qo(Mn(), At);
		qo(Co(), At)
	});
	var Io = R(Yt => {
		"use strict";
		var pv = Yt && Yt.__createBinding || (Object.create ? function(e, t, r, i) {
				i === void 0 && (i = r), Object.defineProperty(e, i, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, i) {
				i === void 0 && (i = r), e[i] = t[r]
			}),
			mv = Yt && Yt.__exportStar || function(e, t) {
				for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && pv(t,
					e, r)
			};
		Object.defineProperty(Yt, "__esModule", {
			value: !0
		});
		mv(si(), Yt)
	});
	var zo = R(Wt => {
		"use strict";
		var gv = Wt && Wt.__createBinding || (Object.create ? function(e, t, r, i) {
				i === void 0 && (i = r), Object.defineProperty(e, i, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, i) {
				i === void 0 && (i = r), e[i] = t[r]
			}),
			Mv = Wt && Wt.__exportStar || function(e, t) {
				for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && gv(t,
					e, r)
			};
		Object.defineProperty(Wt, "__esModule", {
			value: !0
		});
		Mv(Xi(), Wt)
	});
	var pr = R(se => {
		"use strict";
		var Fo = se && se.__createBinding || (Object.create ? function(e, t, r, i) {
				i === void 0 && (i = r), Object.defineProperty(e, i, {
					enumerable: !0,
					get: function() {
						return t[r]
					}
				})
			} : function(e, t, r, i) {
				i === void 0 && (i = r), e[i] = t[r]
			}),
			yv = se && se.__setModuleDefault || (Object.create ? function(e, t) {
				Object.defineProperty(e, "default", {
					enumerable: !0,
					value: t
				})
			} : function(e, t) {
				e.default = t
			}),
			vr = se && se.__exportStar || function(e, t) {
				for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Fo(t,
					e, r)
			},
			No = se && se.__importStar || function(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (e != null)
					for (var r in e) r !== "default" && Object.prototype.hasOwnProperty.call(e, r) &&
						Fo(t, e, r);
				return yv(t, e), t
			};
		Object.defineProperty(se, "__esModule", {
			value: !0
		});
		se.Utils = se.GlobalContext = se.plugins = void 0;
		vr(ki(), se);
		vr(lr(), se);
		vr(bo(), se);
		vr(So(), se);
		var xv = No(xn());
		se.plugins = xv;
		vr(xn(), se);
		vr(Io(), se);
		var _v = ye();
		Object.defineProperty(se, "GlobalContext", {
			enumerable: !0,
			get: function() {
				return _v.GlobalContext
			}
		});
		var bv = No(zo());
		se.Utils = bv
	});
	var rc = R((e2, ec) => {
		var Et = Qt(pr()),
			tc = class {
				constructor(t) {
					this.animHandle = 0;
					let r = t.canvas,
						i = {
							spawnInterval: [.1, .1],
							spawnSize: [60, 100],
							spawnLimit: 2e3,
							viewport: new Et.Rect(Et.vec2.zero(), Et.vec2(r.width, r.height)),
							canvas: r,
							width: r.width,
							height: r.height,
							background: "",
							gravity: 2400,
							slipRate: 0,
							motionInterval: [.1, .4],
							colliderSize: 1,
							trailDropDensity: .2,
							trailDistance: [20, 30],
							trailDropSize: [.3, .5],
							trailSpread: .6,
							initialSpread: .5,
							shrinkRate: .01,
							velocitySpread: .3,
							evaporate: 10,
							xShifting: [0, .1],
							backgroundBlurSteps: 3,
							mist: !0,
							mistColor: [.01, .01, .01, 1],
							mistBlurStep: 4,
							mistTime: 10,
							dropletsPerSeconds: 500,
							dropletSize: [10, 30],
							smoothRaindrop: [.96, .99],
							refractBase: .4,
							refractScale: .6,
							raindropCompose: "smoother",
							raindropLightPos: [-1, 1, 2, 0],
							raindropDiffuseLight: [.2, .2, .2],
							raindropShadowOffset: .8,
							raindropEraserSize: [.93, 1],
							raindropSpecularLight: [0, 0, 0],
							raindropSpecularShininess: 256,
							raindropLightBump: 1
						};
					this.options = {
						...i,
						...t
					}, this.simulator = new Pn(this.options), this.renderer = new wn(this
						.options)
				}
				async start() {
					await this.renderer.loadAssets();
					let t = 0,
						r = i => {
							let n = (i - t) / 1e3;
							t = i;
							let s = {
								dt: .03,
								total: i / 1e3
							};
							this.update(s), this.animHandle = requestAnimationFrame(r)
						};
					this.animHandle = requestAnimationFrame(r)
				}
				stop() {
					cancelAnimationFrame(this.animHandle)
				}
				resize(t, r) {
					this.options.width = t, this.options.height = r, this.options.viewport = new Et
						.Rect(Et.vec2.zero(), Et.vec2(t, r)), this.renderer.resize()
				}
				async setBackground(t) {
					this.renderer.options.background = t, await this.renderer.reloadBackground()
				}
				update(t) {
					this.simulator.update(t), this.renderer.render(this.simulator.raindrops, t)
				}
			};
		ec.exports = tc
	});
	var g = Qt(pr());
	var Go = Bn(
		"iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QIZBzY36WJJGwAAABJ0RVh0RmlsZSBOYW1lAM60serM4i0xjMwnJwAAOd9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMS0wMi0yNVQxNTo1NDo1MyswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjEtMDItMjVUMTU6NTQ6NTMrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDIxLTAyLTI1VDE1OjU0OjUzKzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo4MjdmMjExZi1iNjczLWVlNDktYTc5NC05YTVjMWJmY2EzZmU8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxNTVhOWVmYy1kMmYwLTBkNDItYTcwYS02ZGY5M2UwNjljYWE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo2NjBiMDZmYi0xZjczLWFkNDQtYWQwMS1kNGU5ZDlhOTE4NDM8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjYwYjA2ZmItMWY3My1hZDQ0LWFkMDEtZDRlOWQ5YTkxODQzPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIxLTAyLTI1VDE1OjU0OjUzKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo4MjdmMjExZi1iNjczLWVlNDktYTc5NC05YTVjMWJmY2EzZmU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjEtMDItMjVUMTU6NTQ6NTMrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI1NjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PsD6WFoAAAAYdEVYdFNvZnR3YXJlAEFkb2JlIFBob3Rvc2hvcDTLjmcAAAAPdEVYdFdyaXRlcgBTdXBlclBOR8XEr90AACAASURBVHja7V3pduPMCgTZz32f/LO4P6KFpllb7YyTKOfMxIvseFEVRUHT+L//wf1z/9w/f/RnuT+C++f++bs/z/sj+DU/+M1/j+6P/CaA++d3gnvWa7pJ4iaA++eHA/0d7+cmhpsA7p9fCPjR930Twk0AN+B/KInQTQg3Adw/7wUn/tD3SDch3ARwg/4zwF59XnrT36SLz3OTwU0Avwr4+A/+5uznpgvPS4Ov6yaCmwD+FOi/W1nQxeemgceO/s2bDG4C+Hjg4xuO/WQFMEIKV8ngJoKbAD4K+DOBjG98nVdVAQ6SAk0mg5sIbgL4McDHN98/gxCo8Dw0AHYsksFNBDcBfCzwr4L+Hfd9x/unpArAAmFklAbdRHATwE8H/qzb300Eo8DHJCHQAHDxJoKbAP4l+HEi6N917L/4IQf4mduzJDFKBDcJ3ATwscDHCySAHwz+CPiUADROIoJbDdwE8Ba5j5NAP5MoRt8rfSMhkBHpI1VAF6P8TQQ3AUyJ+jNAPvv6VVWQdfDpIiFUySBLBHdacBPAFPC/E/jvuO9dKQEmSaACJg/8FvDfRQR/lgSeN/C/JZfHSZdHyWCEELJlOpwgxyX430EEtzdwE8D0qD8CTvwGYsi810pdPgI9CnDOANGIQojUyq0G/jABzKzXz4rwV++PSGGG4rFMOQ2MdJEQCOy+gqsKoaoG6CaAG/gRoEajPF68710kkAGkB0Z5WZLAjJQAA+DPKCn+mZTgeYN/atSv3oaTiOEdJDAD/B4JVKNs1E8wmhb8aTXwvMFfBv/M6D7r97sIwLtNu0wTgJ4loUxacJPAHyWAUfC/E/gVUF9RCBn1MkoCHujlbdZvjyQs0qDAo8iokigl+JMk8PyD4J8V9bMRvnrfyHNZt1XVABVIgJzbIqBnFYJFBJ4KyBiReMEXoJsAfjf4K8beDHBnLl9RBrNSgAjwGgF4pFAxCiPgZQnBSxGyf+tXkcDzj4N/NOpXCWDk8iipXPEDRvP+CgFYJEAwr5/AIgSA2DD8UyTwvME/BfxXAZ65PpsEqipgFPwaAXiEAFDrKch6CSMpwa8ngecN/rdHe+169rZRQngnAcwAvLwuSYDeADK6SeD3EcBM8M+M+hbAvdsrj8kQwVUSqEb/LNCj2zUiyIItW2EAw2/4cyTw/MPgH5H8o6CP7rtCEtZrtMhN+zwoIAFJAF5+b4E7ui8igplkAEmP4NeTwPMGvxk5RwhgBOxXSOEdSmBG5K+APSICCJTBSBoQpQR/hgSeN/hLkr8a9b/j3zu8gNHc/93/qsDTpD8MGoW/kgT+Qh/ATHd/NuCXNyiDiAQ8IoiafqqSP/tvfQMxjPgDM0jgVgD/KPp/B/irBLAUbl/g+5RARQW8K/Jz0GNABOuFcyZaqDSbBH4UQTxv8A/l+FeifPW6dR8UiWBGCpB19tcE8NEggnWCn3BVEfwZEnj+AvDDB4G/Au7M5ao6mKUCrkb/xSECFGSACjGsAQFUFUFl6fKMwSY/hgR+YyPQDPBnCSACa3Q5e1v0d71UpaoCMot8PGBGRIAG+NEhAakuljcQwqwOwtsD+IfSfxb4PQIYAf1SuK+iDEaVwIgCqER+C/QayFbntjV4DTvwlwEy+A4S+HiCeP5S8MNF8I9I/uXNv0fTgXekABlzbxERew2AxkFv/eavYxV/AxQyiLyBCgl4wP6xJPD8JeCvgH5mnp8lgCu3jZKAZwZq170SYJYAViUaL8ZvDWwa6KuexLvSgSs9AB9LAr+lEQi/AfwWCCvgto6pksA7VcCM6J8Bv0YEkgwgQQj8ecFQBe8ggV/RI/D8QSCvOP7vBH8W+BH4s+SQUQRVEhj1ALIEUAG/JIBVvP7VIATrdXIi+Bck8KOqAk9CAGQvi8QpIu9D5S3st/P79+fht8v75WXt+fnz8BN4OxblZe2D3+8n/DpmOxYJAffLJvAREEi5fF5vgYvbdWqA/XUbwqLeDuI23G4j9jfO25D9jfZ1nrcBe60n+M9TGNUMFoHYqb1fpu3y/sz7ZQLaAH/ev26P2m/n108SQAbyr/e2Nu/n63Hn9/B1fX/da0dU+2v9Oq71HpCRgji3kJ0xRACIQEQ9CSB+3d88dPsEib4us/vl9f6E7J/PvF87dn/d2nPIx3ZYFfc9NdBrALSuy9ut47X7tcs7SJXnR+e1Ib+sKQNx7HFy7Zdxv75dpg2c+HXMIoDWghpgYY9Z8CSCHuDYEYBNBnj8Te3vY3P5BAu/3KueyBFAAaz+Mh2XsQE7beBulQA20V8qgJYMUICeKTXELfLjgWPEDdi0gZS9zuNvbijeiccF3fZbdf6327vozx6nEoSlAjDQYvx+69jq7d3z7gpgeBJbVug4Q5hwjvSHq5Kf2stLcxmbiH6CkqkBYkAlUsCtR/8FxXXaCYU6xYBCSYx6AScN9N8Jse+rl/97pJfSn0d6rgx2gNMJSERY6ev6QbpCvZy3EZP75zm0P27db0OuXM53tQLCgjQxJcBNbFKnClykyGN3hYAjCcPkROJJ25OiJv+t2zrlKM6lwhgOGgO7mvfv50MEfmSRPp3voxOhNbD7tz8a4tCP3clnJwlNeUSVAb8SgIKOkZ38aLjsaDT94Al6RFhpv3xG+SMVQDzUQPsP4WWqmfP6qpwJPAHcyeYggcgX8AQwnac0Twma35nSoIzKiLWzvmEi7M0adIwcrwXyaQV/a/DaCvYQeLhGTqhdIfFZUa9ijt/kr+1HxeGKwL+nAWquTkoED/49sseSfhn3dKNoCF6tAoTGH7YG4H5d/suolRVAEIHzbyPzVZw7nASIEYNFAubGqBjvbHTESYpIYEIcrzS/WPuk8ftPD0DZeiEzED58wdSqiLQNzV4PiddG1EQvLw1AJe1BYThZKuAAGEEr93k01yI4SqB/GV0P83r+X/t68PQpjvupeU/ArvfxEg3wk+IBCOAfgKcu92+ifeofKdF/J4Ht9W/SW42cSMZ7oUYFQFNJIJEUtSHy9J7Pv0m74WcJc7SmD7yh9JVNXNChrdMDgPEX7M1U0lIISr53RPb68TjodP3BN/1ExO9B3gN/keafZvZlojvJaC/Aju31xwgJ8BSgec1ovs/zM0JVWfJPz4z+KKN/mxLUwQ/wYq/xxSO7uG8HIiqpjPYjgY/49d2sm0m7ds+gkAj7m5pB2Jzi23mJtB2HE7J5Tb4D2JselIrijQnovTTOGrzMR0w9cM1E7LfFGKSAmquFL+ZvzBOSrj4Zph87wbsyX1vKQ26qEQP7YeRtBiBKk+4rCj+a3J7gwYy7/vIGdmIKAAkWQnggMaOQm3/SPBTm4/F+EBbaIiaCqASQUQkAVSMSKwnS9gURi/an49+WA1fmBfDIrl/+AuKLlfZeR45Px2Vgig3Y98ffCYIombGot26f5/5eT/ATSwV2n4DMEtsZg87PqIupeDr8rS2p+AGbuXB+O+QbbZr0R46jqIPBMAWelDTt9j+wsuhrlf6sbBOV+wj8sqDy2tAwG9W8n9CP/ochiF09n9fYpdR/kDD1WOmvATto0f687bETCu2EsP0t5IYhGr0GmiGIisGJTgxARaCdcGsjPiruvzAAGyXwdfsLAVbCzRA8TcEXnG7+q1EAbaQ/btvjD+o6BhsgnL9X9j0CfpUGF8DmVO6I0TDpOPX4uX2hzAdCLpiRvPI8yb2inpSQ/tbWLZW8hnQpE27VhcZxlFvOyx9vlf8WVgbsTED0jTwu+x/itofwA1K/STwf+r0CphlIrZQeMgHRNwFX5Xfr9rN6PH4BWRqCnAi639prxwI8UKYEZ6on+xH0NNT20NSuQYENxIHdiTFw9md7Ck8qgDdrAOKgiWiUMtI78SqCAynoA0Db/ddMvodh9HEQS0A3t6FxnOIFNITgEIG3TkAlRcjNBMxM+1FJwKkAaNeR5egaGYTkVQSKRgRadUBLu3naavkBbqvwrG2rZ5AAegRQivQiT0kSBoL+CWPxTdlmHzY5MTQ5/9aGSgbwzcj/lYN/SXdSo71FBo9D6vPHfTWrRGRgEYHsVeiqHKSpABRWX98LsDvaeuMP6E0/CGZ9f8+5XzzqN4A/vYzX9tpfTGy/WG4NRUVjscbefqypAOEz6+Ygsew9BWz8aiK6UhZEtMFltRijE5ndFIAqjIXXUoMESaAwA9Eo+XUkQFYKgEeNv2uqMcp7CwE8sM/1rWivkUD/ODTTBS3VQEEEugJg7jnpqYD15RLyEiB2amCVJIAy9+cOv2j5RXu9/+n44wb483YtT4/UABnvDdlnyD2CstJANFMBUwWY7buFqpvhgXU5Ejm5zakAFO7B3eyj87eKWHlMItvZnH5rMQpqjidpX9CpOqwqQrsgZu/5FwtoqL1+Nv+0zvtjUwuPJt//Au7u4D+2KsAR4QnO6x0ZnMcvzfGcCFBUFs5qw7KZmwuSWBdAohTIKwCo9Prx0p9cCGQrgPUoCeLh8BN3+GXU3zoCcTt2d/53ExBZ1Ock/hIm3aurb4NfH0Pe5ryVBTdWXHkFZX89iMpnY8SpphOQDke/IQHqO9maGgHyNSqkLLUxWucxUb1bULUvhQJQKIIYCXiWi3mMxU6JygELERj0HiBfGNI5/ni4wiiqAm20RL8nn9XuzXyfdiLAI8I/mhQA4cHUwUkGyMig9w2+iACV9mJGVISiMxC7EiewVMCreQMr+VkKYAXZCCSbgFgZEM+FQK8j0qP4vYMeVdDziteLjEqS+h5QAFe49ofGx6Nn4DQFsemf8YTw0QFoNAjtbNZXB9A8Vv+DqDuG0XG8RmkrgMANUt8Yi/xkMDA6lqrMMVDU/WU/wBaVD/VAGBp7cpFPA3ykdhEKiWYfpPY6tTX/B5KQ8l++wKOR+udxD+W4RRDCst1/lAnpvL4gmesMkPb2YGr6Auw1AdSqKMURIOBdgciWAH/5A175T/MC9vo+MoCtTamP9BItJwS1FGR3Mx7/b4tvFnYsoegyPMB/fu8r+mq7O7VRLqxGsayqLWGaEDt6mEmJ9Hje7+XsmDBJMKoCeK+UrHo+9oA3V/xhrwy0XjXs/yZaJVPVDNSIQURU2e8vQLpgn7c3eT0q4N/q/G3kV45TIv5D9AAshO66A9x6B7z2ZlBTAXQLNXLp7y77tfJfXAFA1QNo8v5MPoz+awdULE4B/kV5/Mp8IStWU2BE67k+6uU+D25o1fI9ka1E/+hzfK7OMA7pnFi5VvNYkZt1PoJgBaQNsIrHgHKRD+v8Qk36933veER62kBPrAGIsb9l+u2dfMTycNyi+ObePzqJ/3X7s/EFdqBTkwI8WDfhg7ifwDsLt8vH6kASQ0P294CdxwH8czlSJ2O+DfJ41Ub9ry46FMNAWN6PbUfg3tm38siPfNgHsqhvtTHz+w1bDfsuN65e+FJhOTzklPet+lh2f+AriT+bA4/2Hx6UqEk59vtPI5CgdRXEsmAg28hT/IPO8ZcdgHJ1XOch8IEhuwLYX+2KzqRIazlv4BNQu9QYQ68gXuTTKYCmzNJH+mOgBOv44w03fJVdX3pDVvfHNqofuX8b0Z9N1D8vP1WyEOkAVxaIwoiERg1oy5R3Umt7ATAYCoLCDGyj/172anv/xfJfkG3A5ym19+S/GtNvIwO01Zp7bqBzHiEIMkDR4HReX6AvM61i/UHbhIQtNHZJj621ag3+6DsI0VYBizQgUDECnZqilfcjKo1A1f2UtFds3bc6HiE5SoYMammXEjQtvSDy/qbd17ivkdGCDNR1+6KZhwP6ib28f3bmn/JYtJuI+tWF51Jk2RW4qxlZDrXhbrdu8I5AswyIdirQ1f1F049m+LkDYoLIYI4CF/fvI8MWbE9pLV3UPjdCIzXQKnAsUJPWOhNVz5dkb4MUSJh4XGcCIth9kd4URAK/+096ghYpOPVXbP3C/EBPFBN+QKz0I9EEhD3gO/CKtl/tvgcy4B/KIEcEanuwQQJaH8MC9V2CKrsByUpARwAIote/FZhr5M8owEfLgmKv8eGQBF/NKN+bRQSyUxCDUj7PiPt83srz7X4fqvYLZMmC/zytrr1o0siVPmWrUKCYuzyVQXLeGCOFJhWyOv2g7fdHJ9J3hCCjtQLsp6MKPCL4ajRSGoLoJAe9AmCrgOZcM5bUaw00EjDN3H/sN/yQJiBv/eXm3ysCPsY+lzxVH6iDXVvOvIOUoB0asog/2EwtRmNtnbpKT5sd6HTHZMEeEE8q6svjn6v2aZNPpVAlBbeS2jr/zafLB39Qk8viMeWX2BJR2QCDyol2Tgc+pv0QtMtv8Wy20VTAotb0W9Dvtz8ZQZjpQZdSbOafjPpEjS/QqBhmDPqTgchwWUgUCTU5vU3cRW4Cnst8F2w7AJERQhv5iXX6YTucA33p3/fVU9O2Q9tn1pIBHR4GL1DRYRKeaYFFSrIyQG55kJo5AnHrL+kLWbLRHCG/fkDKmWdEPTns2rdt9GeXcPtPpTGrDtmvTBvGtrDVTPbVlvxuxzUlv6MtFJulvk25DtsVek3fvwP6Z4EIWjWA55JjbAeLaGPI+mnB0K0DkAagsci6lf/YD//kLcAL/43KPH/UV/v1TT9ns0w15z9MS2RpAIv2DwV58v0sTWnw9M/MNAoDFQBYUwFitqA7SMTK3zABfA2vz4zs94BOydu0pJ5qhNcCWsy9x3ZIyBchUN8MhMCafqjp8V/kbSCAj6yNd2sMsvJ/Lco/xXFPtDwAPJqGdsf/wVuBiZS+BW1lI6qDNCozAUmR1XJPvhXbef9nKkDHWv51W5T1cnJ/L+dvOxS18h5r+tlKq0cpE5WWZgRWISDgxTCLCMBKBxDVEt2+pqIp9lleQFfeq0R/hBBMaKQCzxXtbgccJIeUD4CuCZha7+0N+0A4+uWbXJ/E5F2UeT92q+/UNf+Ibf7Pga+A/klCDTiEIYmADwjZewaQ/AVB+kgwDJvDMgNBm403UJn3j+cQj2PNv4z62ZH2qBFBO9mQR3vaCJqQXd6jPYJJAotQPcjTAhQ7GWGv2kmb+ttM/DFUgPY5LAl33FAdpTRAVQARwDXH35s6pPUkgLGWwRkWost59llTS4hI/WRfWeZDzfSjYPgHBuD1FIEoCT6Nx8mlxDwdcKsAigoA0qNsOA8AlXkA2JYAtcEavK6/TwOSPf5ejm2ZfdKMVG9jr/nBAP4AZ64hKuVBRQ3IfgVYlEndihSXKYAHxmgKfytDIBz2kyKRZ/NpattyZTb5UPQ/7x4kZV4yux+F2des9CMtbWg73IAZgZIguC9wjM9CapUAisYftrrvaPndZwDyFmHcu/PONt/T4ac2+gNukp+247YOwb2bkNpW4WMdQKNAztfGZwc2MwGI59hkzATUvkd7SzDeC7DsDT+si44voMEuBds7/rbXgV/Xm0K4WBPSnSzI19xB07FIWyNVA/xN9h+Xt++n2diERX9CYXJuSpD4eQXtRia0nWvEUitCxcnm8wER++Eh+yYjqoTnppjofuTsTqQ3yKif434zaSkA6lNGOxVgFGbREu8IitHbC35lTQCAPckXjnHRotsv7AtAfQbAoQKwqQg0S3ux7dp7WGag1iXYEMHZTfiU1QVsVxE2TUlHF+C5RkDuW9DPAkRzhyAtPLQrAFFNBeQug8g6E9uBn1ufP/J+f2QVAClf2RZf0uxDsUYB+5JlI/uRpwB7Yx02TUz8uye2vr81K7VqEu8ARKMq0K5M1GWtoOWuYQgdmY9KyoC6YQFGM4OZAhg7eXlSX0sXwi3QBnoXpPdhjvwSqQDP95suQOpTgEPui+sdSKNUQBh+T3a/mQKQaAiSPQDU9y400l/KftkTEMhHT1qTyGMXBqQFQGz5da7vl+eeXOXnuf+Z1/PoSEDzBnTJTzzvl/ejbVryScBoNChFEh88TwAds7By3VuxfyoAEgpAWQzdOPe8fYp16qxiBQ9hyk/QmlTa5atiJjxfRMR2/m3BzzfPoNYUxLbO3+T/ghgOMHKDbusdOGQ7aR4BwXNfC0CkqoGGKFA0FyH3AKgpVba7BPPI3/YDgNsN2Js+fAkwr6ODmP+/y9qVmXsk+y2Y7OXmH6p9J62Rxmv0nAiINf5Qs1T53G9hTwEWlhIsR73/TB1aAjgXPu2BgR9/qAFsFyv124NRU7Hgi6/oWFyE7RjxZiGPTI8KYOfVA0Tf/e9NQBSbtAf9l1pKQNg2e2uGYKJqcEipFRqpKEc4d6kB2RUB3vzTynwF/E7Ub8uCyqAPEkt/tWOt6C/LjY38b3sAkJR+BhSfBUatwNboaxS9AKhE/35N4Yr9uDVQGmleENT9UHsNbbRu04D29e3Vk9O3OK8vLD1YGhWBqspp+ks6JYBKg9Dp/oNYIASoDA7BnhWRPY9q+pmRHn2DUPu6n6vwCqw0IFv+I9u7iEp+KD0MZWqY1tKqSjQypuYqJuFCbYrQTP6lVhF0YMe+XdesCKBdHdBSAL4OgFcDeOpi5//2BqGpKoDVBwDQ5dBc9q9KLoyexHfkPhg5PgewlPUkDMuFpQDyeN7SLKP7pVQA9UnATUwUi4QM++t8iiVRDZBfNiUqB08Ce/5x5jZMXI68AuNM7FbxoSgjUX4xkLqLrxH5NSXw0CoG8hipAEisHfCAr6QAi0EC1loAb8fjKBBopSutCUjzAfhvPiUuXNiDybKfkuNLItDWbzywLVkuwrdYVCXQGp3N54lGq7Dio2vvkay96zItu2bPgHNcYmewbSCI8U2SAuIsoJXbrIU/3dJgDNIDK/rLWriy119zP/Xm4CLMvwbkWIjkpCuFhwC3fMwilIBKAtlVgCy1RLJ7RUwlgL4KWFn0W7UaPzr7Nhjgf0gSQmNZMjqLfhTgc0JYWIRfHSWQVgFoTAR2Nv+JNtPSuwQHSCIimScNRnxLM6Ld/KOVezvzD43Izpt9ZDogG7DI3u3X2mEnVAVGk5BFCgsKM08hC0kC0vxzNw3l8j9QAZERDBDv4aIBDhkJcNsm7PCzwI+94Scl+8MCO2tRXlDfrVkSAo/+K/ZVAU8FSHf/IAFLAWBPrmgoKcu4C6sBmEuz4k7ASMJHt2OQXBreAAbqALTlrSi2waIe+N723wewpbT3oji1BqG6Pbgl75WIvyh5v2YEWkNAFohWAObmQ1Zbgnn076Q/Gl1+SqecBv6HVCFGVLckvyQHUo4n7Lv/PD9ATQeEMiBZy7e2yUS/9JcCswfs7PM8nQEeuuOvhA500gQpPS2vQKsSKJN/QPoBpMt7FBtAdBIatLUBjiJQyoQWyI/L1JuJD88sVI5ZQCcoVEzAKwQAWQKwHHkG/rVy8iom4KMp9bUR3EsDOgVgEIXlB6xc9qNWEbA9gSZzRqMvAGvg7yJ+hQi8BUEcY199AMrW37y2T9APDSWxJhKtzUVEr8BeKyWxNJVOV68d8qnX+tv8n413Pgw/MfYbxF4AHPzi8gn0czVe5wM095+DQ5s+gb31d1vMw03Br/upW+LbkgCv/ZNIX+QsQJ0Igc7BqO18BR/8KEw4FFuDU9MjwMt2ZJb22u4w+XysfXcbpU5bS/Ve7tuHpFKTv+8rI3E7lkt6ZPdD10ex4n4/NuBft5blswUYWbcgBz9vQcejewKRbSHOS2H7+2Zlr1Y1bGsTux1QleGg2tbg2vEonXVRdnsec/iFpibskzet17mZDHyecGDtN8CnBLPefmyIpa9tILVNFRroox4A5BN02cmDvMeeRK8AbkDcavkncLfR4cjWB0g5vzX/nBN/hQI4Jgvj1uizr/nnl3fC2Ft+6Zj+y1cF6nsBMAJVdrvBrv2H723Tzrfn+9nwARttuY71tWPbDNSV+RDFyYrH4x9sYi9tzVJHo87+2ePXWg06tiajBuQPTgKNJ8BIddvfgCuCdTsnVlHrb4INitZgRhaND7AvWVbHHG2fJ4qaIJDu2DbqAUXdXEwHNrdQllKcxEQgOenX7PcXVqYsAnfqALrpwNq6AzQ2AOO8BKy/vGkKUryA3ujD1jhjQzSaDTdQzgRE1v3HtwRjDUWyYWhfwiv9AunqH49HFv1RnQOIbFkw3xHo3OZMjgHD9pM0W7PbvvaW2s8odXa98X56vpS2nThA6kksOg95Aw6iafotbD/GM/qf4H4gNkuU+WPXJgXAk1yF9F+3v3POOzj3PVwYqOVagRPQWkUA274ARAXI0Na4O/CiI/Gxn1aSSr2QNQJZuYPWZGAZhY4ZWFm12EhYq2qgVAHQMfsaUuB5s2biac6/uO1BdnmwVQCKtDcMR9nnL3sN0NkVWK3/K4Gg0gikNbiQ4kJz5xzE/SufsqPUw9V8PuEByIaeFVu3f418AOW2VSEDvr6CjNxfVgGa3YHEbVqMBXFcF1u1BqGs2ZdZG/CkC+5+NIiQbNLAwiCRVgHkjC6tKsBBjxmjLwl+77EaCSyiBOhVIrqqhSj/WSag12sSbRmv7nsvbuOgXRkZrGLnqh1Ii2w0QmVsd9frz8DvAPlxhQTYfatCBlrzDw9EqZ6AJEglEVwCvezpMasAa/Gbt6I/OY/LNgg5VYGmqSXZ+SfbfZvWYBZZu8nBSULowK91CWpNRZYS8BRB1v3XtgK3PCGnZq/NorO6umVTzQ4+q9You/wa91+U+yLwWyQQHS9Bu/A0QJCB2Qno3EeGEjArAiMAz3T+Rcc/ySnPUVD/R719N/1csu1XyP9OwhrPkWkBlvPe0VABYVpgkYTWBhwQQ/o+cEaAE3s/RgtuNvp7ikCWpFB0BIIEEIgx24r1Q9jX+hch9UlEdk4QFcA349OM6I+G/F/RB71awpONQc7GWSmAW8uKE8e7ZKEqAK1mGA0GNe5DJ9Kjt8uQstYftGk/ZERAJS9eWPFhQSPSg9I74EVwEl171jEG0FHI/UbaC3DLY5ag7x+17eIqwMfEfShmBCrRc8HWQ14EwImpiEUoAOkByO6+TvoHZNCoPMMLQEEKiHYTkKUKTAVggBEdxchDmgAAIABJREFUX0DtEMz0BmRUwnM1ZAM5ch4dEkh4Bag1/iTWDlimn5r3yx2B5LoArV1YDAyJIn5GsltNRDx6W8/XpCWMFMLmHwP4w3u5oNvA2RBBY6ZxHwAcHwChW4cvFQBVorxxLIrbLTAvKKYFYT/oBKUPgIYpKAEepAFmO3BV+luNP2i1ApNhHERyXgMvObcrBgWSkg5oW50rXYUHOxPo6wgUIrBW/VkeAHqAHiEKUmSpjPbi76Pn/iuqp+r+Q8bfTTCK5qQvIv/n7bUL6Lv3aKqgA3Ym149uV57LSgc6oAtjUAJYqw6A4/iH0t0Cf/S9LM5zPSmI4tYKQUiSAgXPoZh7EHwGqIy40mT/As66AOz3C1gU6W21CGMEdo840F/UIzf3XBygV9t/r+zoFioEWcpWxmnLrbhkKkCoK4A1m9sbKgANUrBMvUYFoJISCA9ASwVIk/dyWEi0RDizhDgiCk8hHCkABcCNoj7UQgvWzyvVrUaKewGiVYFdZcCJ6OiAHckhEtQlvyvrveifAH91arRWBfamwls/i6gIaOvnF0PmN3392Jbz1mp0tzyAxHGr5/pr8j9w+Tu3HwMf4Lt+dybg6G8QA06xze9RmQKNzvOh8lvdE4Cbg8bvJbhf6w1oFgsF4F00w86I/OrfTTxf5Tcov7sKjVEjRjnIWUj37IklZfKCfSlQgl9biy/l/6qU7rroL8CODvhNgw+FgglIADTDUKkEUAL82vGaiphCFqYHQMlqABnHQK5igIpBaKogxRewIiYWFYHsGuxWDCobi4QyPwD3YpBAZjlzRfpf9QAyPq+n3po0IKkASGnMaSK1sdKvA70GeIMQMCKEpCrQgH38xr78h6CvGiz9Hjn2SwGQ3ggU6UR0DD4v9zfmACAZu6tA66yitmYiAXytGtDsGGREecvky5CACm6pADSgZ6P9pO4/D8Du6MdAzoIhlS0S0JpzVBJQcvhI0lsVARTqAZN5f9MObL1PL+JHvQBYyOk9oEfGYWMCes6/1RUo/xjFYaRritBSAGEOyv4BWXKJqgAy/9cahayGISsV0LYe8+S9avIVwQ4GUQDG/f9VBQCWCsA8OXSOOfpdnM1gDnS68sA39iTIF0Xaowb6jA+gvCd+Lkqgmx2BCn5KTT5ZMlic5+lMwGgfQHQKwl6XYEFXmu9blAxdgmNNP5p/IKU+KmpAI4fFMvucrkJzfp+lDrz0JuiGBHBXkw4pAGt8Ff/Ku+hvfSdKlCVl0c2ipQEJ0y8l/RW/AaM0AJVFewbwvUqASgIZ1z4Celb6p0xAz/0Pavpazt/IJP5UyeYfs2QoVgWqgEF7erDcIajbPFRz6Um/TxvIsQiD0TUng8gO6Hc8quRvVFyy24Ore9xDb1hZ7CG3i7AGajZjt7w0wCGREPzKbd19Ctg9IpApgKYAtOaerilIawhCY7wYFokium9oLYClLy2Zbzz/MThETLA5T9pzgk248g/6YSdgpQP7sAq2WYi1WjC7mEh2+6FDDOX7QN/pV3ZUXpf/7cQgNQ1gm4ICYHuMtgmU5wPwoS6ZFlujrGcC3PAI+H1u9E/m+W66ozn5SlOQRQqAYC8c8r70LEE0JqAl4z0b2Ovrj247xlU59X++3VHCo+ykP3jDQslPDZzo3XQVKmBelHQiUgxqvu94IXLPP62qwjsm09k/Klme2g5M/UYYAgzSO+jBQ31ElwtyxCo9qRwiEGuEYJFLRASolUMV09NdHKSYpTQA4H2MmBn1l0S6YG4OapX4otLejOMy3X+GAujyTUpUCZR+ALVHQCsJasSgPS8UwK91RzrOfxTtM1vFd/If9OIQCbIl5/mkCiDILaWVHkAGkEtC5qNzG2Zv41EejWE+qC8OGnb58YJXsASPaTwAzEXtVDHYMauudP+Z4NeahEh8GZSYHaBUAdSlxdo4clnDTwC9W8KrbeYhRr51fRPa4p/B/B8zPoBmBhpdcCCAT6DvqBMRg+rKO+VFM7pjkOsHUT+bJlilP3N1oCX1K4DO5v9tKzDppTw0GoIgUTLMuP1ReRCU/eSonw6kthhnorLh7ltkIe9fFMm/eKrAivJyD0VnJx+LPADs3ZUhSg+MD1xbHU7omIHKHyQj+pOxb2AG3Ch6ASRJhKC3PIOkEgDD6AOtQiCX9ypkkAJpBdDV+819AbQUIFr1h7nIb3X2dSdqYpebTGdcl04I4Kn+gAfihFJwo72XCoC+axIa6RMmldbIsg2VBDSycCYIAfRr46MInFIFXl5vPc4gBZV8lBw/Sg8AHSNQrv5DPdJjZAyOVgKsxz1Xyi0DBocYgkk/0QYgmEgdvEjXnHDUD1TVFgwB5MaJLZAAdoIwQNvIxIjs6pZpAbGBIBjAEQNQkfHQ7wpPTmOn1uGGFgk4gAcMVIHTv6+lD6H3IPJ30Ew/rjCd7j5ESOfyx66/aC8NluohTQLqUlrNBLTMOXSaeqK8P/IKODhIyChta3EjRUDxPOaW4V401/J0sKOze7nblEMnCgA7smuARuWYzGDVGct/rcgvVQCX/TwtiDbOVNMACFRB5nJEFAnDT/UBDFXQpQNaP4Ai//djqRrFq7frfQDU6rRuJx8SBWDqC8P8mK2+fibpoh7U7T4k4gqdIQ23DTBQbFVxbjxC7FxENo1+exxhu3vL9i0gsWNg23SEbawBrE+gJxNiKgGb3Yvw2BADFXJgfwvZ7kj7phKEHXF8gZ8EkpTdm5rp/RkKiFZ2gdPxBc1nTmgcx6Qfbrv7fAGAurn65+cmSYB9R4gsOtN5ff9O9udqLvOofG5ScpaeUXnsfjsHPtspaGPt/Xr7orf72fs5Ng5pQG9ECSBj4CAdyymb0l/T7IIiXwRl8YyyueZz5baxODcWagCplgeb2zcXrHkuMs4/6k4y7FYJ7TsHcaBT0z/Ad8E5VYWys90BfGj+VrN12AFSAXZT7lO7rRmcfx+VHB63A1pPgASwdSnPtzfrPjPx99vUioyoTmrhj6zjkW36xXYCaqgBWW/AuVdQ8/g2paCunbaV38SiLom0gZrU7/jMUV6W0ZyUyyQkPClDPOl8HSyQyecC9prbZo42khyfZwd86zFaHkvKZRLlIRASWVQTvlIAUW/iez+rEVsCmp3hK9ta7DjB2229GuBTvychNtuNEYs3O/vzM47Yr/NvnwBmUQbk7SwSMMCcgFUeyyPW/hx8+zFs9z481MqGzIOgush/Xm5VFDKQ798nGmVBYdlp5L0/n6EUzh3ulPKEu+8fbwpqo6AkjiayN8Hu/Dylt9PP4cc2OiMde+3hEYm5IqAjGgMDLRzPRS0J8S2/8PybB/A5azEgnioDlAggtgMzwbzn/VIZyCEZoI/Qln9b2xNwv/9IAYyI0JxEi1QIZzdfH9lJieSis49HLhHxkSuQ/cviAX3ZiUvbC09TF+dz8EgMIpJ3e+thG9UBhKznagGE+gIS8p9aaQ9t5G8+iy7C2+06CLpi0Muk5LcAsY1A5XnBI787/kGs2GoahpCpDAl0JDvXFzn4qdq4OuLfEQMui/CNqjjyb9LbfaFvLOlXA9IRTbFxdTlJnHslEovoUT+A2tgibj+fkwzjj4xlpF4rsGUIriIgrBAvHNeeh3LOE65Kq6sI/FbTizQADcLWUybQ6/GoKDV5X/M40A27rtOP+pQP0Fgwld1dKbHQKmX8ZfsGZClQ/m1lSm4Hbq0CIM1C6dArS29VwnBTDY1g2sdq1Ql1NaBoFcZFmQ2AmVbW5OWr93XzALySoNbkswRektc7sEA3PwALJ7RVAgzHiQtSAOH8N8+j9AxIt1qCMkMEaHxWCD34tf3+Sp/PpD6AbItmtw9elwIoew5g/x2pwJcOOyjbdkkCUWr1XfeeRxyid1/W/F1QK9fNsl7k7C9vIIVDAUAAWOsLXwvHG4oCk2ej9EWs6oYWlaWvAoYykClSk67JyAx6SREs4IPyeE0haKrGuD+ozk3/0dqCzUgvOgHl/TL6gxPxAfSlt2qdXjkWjL8la/ey1KepBgiIpXl8AMam2acC3FnXu+XAUSTHAllclKHJXhX7NmyBql1v0lXnuqUAtCYpVwE44I6uQ5IMormL3fFO26AVrSPQg0MC1nUP+Chbjjv/QK/Tg5UqGMQCmpS3avzaiC8sgNB5fsqCOFIJUfvs0Qmolfg0qQ9GirDY0R6LktUEttObqnkDakOURgISqKRsv67I865ZyFAAWkk9Qx4e+DEp/d8qBQKQW/ebKUCCaMBq/nHAH3oKUkUoj0Ev1zfAh5mIH4Bc9Q6SRJI6/kkUj/ICRepbqQAjg8rs/1TL6uH+F1QFdiXneE8FVMxsmUY4bdIo8uE0OUTLozNgfxch4BgppDetANtc6xY4GS2u3ah4NJ5XSHRL2mdAh0mFoAI7E/GZmUjVPH/JmoDWSYQF2Y+OLwCOeWg4TjKig3bdAh5pjSx2hEWDKLR838zhLekNvnw3zT2aRBCjhICDxxQe1223ZQDWk92qh2DcpkVtzX/Q1AOMpAeKskhVAqrSv3KMqQCykWXkhCPFtSXjTwqJjo4haC6MESDEKskY0d8jB8081OQ/ytxdOU5VEJhbNDVjFWBUEnSlvpLTA/ZLidXobzy2GxaL/WRpqRy66K74B5YKkAD2QA1GeqARFQV5P3hrApZBgFtq4egEXEWL71IAvgZ0pbSn3mahewVzy3CEvGLwyAGDx3nRXyMCLcd3b7MM0lFC/U4vQAEtZZUA2qTipg7J28LoboBaVRCKZEfLK0CDrEbBmo3uVcdfI5GzEzCR6xvgcx+Pxm2UfN5C45C+PtV4zgxoQUSQ4FhQonuXIoCtDqrgD43Aq6RQeKw1E6AEbqMagGCkAt4yW9RVgOtFJJ7XncmWAfVyQbpXb4fEa2hSgGyUR+fLpeRJmAU2DJCRQgJNlJRS3trjkOzcFbTynub0eyanB3zQj8d/4fhnicFKEVD5mrDmK6CRMrhegQLQMHUwVEOJEKLpNJXjMwRyRU0cMwGjHy09yBBDBehaujCqDozj0VMJ6ET0RLTPqIMM8EvRfNbtOAb20u1O5M8AHgLvwK0qFCI+Rq91JHKPRPrlImHI59JHglEe6GtwUlUUAA2QhReZNVPROt4y3gwTMAtulwwiWa+phndL/EkRv5Q6oNNinE0ZLGBrj3HUAcJAJI9Ip7qJBQ4+boQIMOMBaED3TsCFAXctgDqK3lBMESxwRvdZf88CaSXSR4+LQDyiCL6TGKoR/8p9qWGP4G+dlc3nK4/JuPRQSAkyBFCtCnj3nROBnMifMf0s6Z7dS5oGbhf3U4UMFOHjgjdxH2UeF9xPVoXhX4M/WgQUARqN76nwuOZtZsHrPHf3nReAQwOpRSmfvxLlK/c3y4HXC6bfOmD2YaLyEMj+atpAyUhNEtgGkcwAfRq8dPHxV13/d92vnJyUjf5gNNcoREFJhUDR68PC/XjhfpwEcu9+NQWYkZdnjL2K5M/m88YxJJYyExnRn4yXgW2U5p8LgV4LJ2VATwXY3UAfdDD+XW3CCZCTx3+YJAp0vlIGaMKADDT1oTXdKK+RMj7DSO4+6uZf9RVKBEAJKZU5sSpVgExUzzxfZq6lNr0YnBOPBIk4NXoSgCXxkokKoHI+24YgvrM8iL7ASZ03GKQHcAKc0LdwIgURkUIY4TOArPoOV6V/JoXIPJdKAJmoXY3i3iZz8rgV+tWGQY4vv3BSjiclwnfKQAOydZxFMIMpgDHCLyRfysxUyJIE1r5vyhwXEUY2fQhIxYvglD0OdY+hISP5nGikERU3v0I2S4G8IqXxpACE2R9KEMf+4bLnRu848jMLTXqTACOB3YDSRHdxYhDpeT6J55ZgaCYiOkYhOWcwB7QpFqK0YaLqpwE5T5KIMUiDGOgoIA0JRPkYC+wS6JRQMAT96yEjFbG29ybNtET979CMfoPKFlqhB5A188iQ1FGUMbaZMTeeVHJwK5fX8npCQwXI5yFdkjZ/X1MbZD+vChJGPqkuv8gInJH7VxmjsnmMPOmVFMnM1dEmmY5EIIj+EER/8KsEVPEYgsekvIBsxaKaBpgEIAG2Js08NmMw5Uux7jxaWbNGBHIKXHpLrpLIKclQC8aJQ4bSAOdxzYlKyZbYGcC/IgG+4zGJ3N0CuOcfEPQSPRv9rRTArDJkyCEgCkqAmEaAf1kBaCRQzSOpcA6yCIuoRFNHXUijiESEVb9sJve1x0vzTzvB9seSlgI4+T8FeNUqALMN/dk/FOTqFNhEFNX+DVLl0plkNAfje0X9cVo6YaYzAegoeo8J8A4DP1sJSJUBrRORBsgAjd76zN8XJECJfNUCHCmOPGFfHiRsVQNpJ5OU/vIY1B+jdk3LDZgSaQQGdw6TBcZpjPs1OrV177rMmYlJego8B+kVdOVCp7JASbBSUL241LMPE6J99vFQ9QCglfjmqPCsouARX5OQ5EQAtL/4Jr/WfAAtkgvAaEAndn/TAwCtCnAjD/QlwWZ/VvSnqmduMz/P0R90FFSCDLqo6Ul8L2ILE5AEOTTHaN8f6mVG0H6D4/MYhqSqKDSfZIFcw1MV/MvA8zxphbgZXplAITcVXencrJ3IWCBubB+MpxanYwsw5XRCuxuH70hH4nUSINBmNFhSnYhYxMbjOn/M10vcnucAfPueSOy6R0xmfBHF/j49aX9u0MXf23nNcFH5PtPi87ZVgN1ZRdaGB3qyclwm2D9LbPYQPL6jbvtlT12R+L74vkVff5+Q3X5sqbXdvl/m38txvd3hUMr83r0nINzOJfb7nBev7Nqy9OvSz+/e27IajP3eresc/N5212K81JcCyHC5MYmTqK/BIYimdq1OZ8UTahm6ycdJRATqThTdBzg3qiSnTNUc3wBcHi//FsG5xSL1vgOK9+Dkl+3GmtYGn+J+/rk731s+FdC2BgNBBO13RoFGIOU6MXBbuXifj1P3eEkU1JDGdhmpSSea67iRgmISNuoOAeSmp83zAxzEc1xuVII2spr0jXb3vy63Cduj/EJOukHBZUpWAbTcX1lHz3cJH3WKpekl9yLtyjeGe0+GD6BGfSN/7K6TfUxnRpFe4nJNwoROclMjtGLxWFGAEreTtaAmelziOEoYfd4/q8RoXQfDP9Dq+t3fwPY+ALt0Gfkg5TxfeiIV8+9QANq23wR9d5tW9tI64OhiRQqZGYaOcad03ZHo9SdsXfqDLNAGteUyQ3BCUXCCQebvSGHNOhJRqXiMpviZFchlf8Drzc8A/OJn1t3vkIUZ5QWoZfQnrYwHPUF4uX22CkDZrkEL+JA8vlEA2bl6jjM/VKeWJ6YzsYfIkPC8pGe8l4YIMD6hsv/ASj0gJg4gpxTIeyRy7kxKBYwAnQr3qW2zwQKbymcWfeaUJWtBWp0prICuMx0Nconcf7rSZ5HpUYi6CAGKnYCTIkwqJZAyWizEoUQZKH0yiC5BIkEk0Nf5ZVpAsmQI+RRAe+4RTv3OvgAqkoiVclnAMeW9YtCpgLa+M8WTKRGGRhJROVMpB19x/elKpSDsA8gs6IFA/nsFBaXdt3vaLeppC1xImt5cygsjnKiX+t1JIZt4lLTBA7tKCpg7kUy/Aszu6NRYwXcQAyWPiaS7VyZMfV4awBWCUO/DxOO1Y6wIb6UHUa+Ach+NABsStwHE49SfWgdLRjdi7mxtmltEFFelauAlNI05st8fe4+AsG/DdSO7+LdOThMy0abCqZlM7AoJUCKae1LeVQAJiU/v/Of1DWBc/9fSg9Dc087ngvka5vbWdTMFgPkpwIizbd3vyueL+bn1PFXQr0UiKBmBMGdY8EV7pn6CFr+zShpX/ezXC98VFM+1DKFBoIaGDdmRn+8igBHvwBugG52M1RNoLZ5o2vX93zLJSMw0WcZtOWMkQIkTkxLkCkmHnyZ8Z+sgMY8QeNUbyZLpt/98NwFkxt5F5teQ2XfhRBs9WbJkAEb0zyqAyIqpeAfZqBT5GJCM7jD4XawTvrd1gKSv9ndkwE+/mQBGCKMqtd4F+rWoGuRzYEEdeO0XngKopFxVJRAu4Bko53mf1wrjqmCdCPysZxFVFj7yZxYBjBpNlDC1qlJrhuyrpAarE/2lClgFuDMk4KkACohgpgfgAf9K/p+N9usgUYymedmUrZqaQuLzm1Wd+WcKoDqk1juRR9h2RF560SOKLOsEHyB6L94+p15TJiblfzX/r1Y3ZvyTnzMlv6OrKu7KOZchTvouwP+LFCCTm1aNwBkn2jrh5Ily0cUhhIwaGNn+IOsDjKYA2TJdhYjXC9F7nUDiK8xLCWZUU+idoP90D8A6iSnJojONvgz4V+PfIn5zD4CDPyICeSKMmoGZ6B+dtBXzb5SEPVCvhgrIksCMXo9MNKd/BeifQACV9ICMCDZiMmWl4wj4swqATzyflQYA6FPXvTTgqgK40kpb8VQiEFdJoJLKVaN+thvyYyoAn6IAsrtmXc3zl+SJlvlnRSxPAXhpgKcCshEkSw5Xpf/sMmtW/q+OBzDr+xtRBpn8H4I09k8pgCjn96QsTDr5PKmZjRyZf1oaIP95JCCHMWc2RfIqCLPy/3eUVj2QjgA76wesE8+nyP0n+LCmoJkEkKlFV5aropIKjKiAjCuflZGrk/9bUhLB7gNYFRLgP8uAjPTSgozSypT8Zrj3mfLemvyMqUAGlQpANhXIVgeumK1vIY1/pQCqPgAmZNTIibgWjT1K3r4UVEAmDZDPkwU+DHoBV6J/1rmnAnjXJOjXid/zVfe/av79EyR+ShUgM/Ciajhpef8yYCZVTzKNBNBJATQFgBfSgNnfx0z5PyrvafCYEfO22noMkFsL8XH5/yeZgF6/OoG9KGaEDK5G98o/TBIAKqVBmQZUVEDFJIxIoJpueQbpqGk3459l/kbGYiX6Z8qDH5P/f0IZMOMDgEIE71QBM09OiwC0sqBUP5IMliQJzJoOlB2eGsl6Snye9A8IIao+jBJBFej0Lwnh3QRwdXlqxgwcWZ13VW6+hMSX1/fbLAKILkvgE/jNRTBAqCMpgHaiR3X7KPpnP+/otteEVGL2gqHR/P/bSGE2AVxdFJQpa0GxJOipgJly/2XI+ogAAOLBr54CkKlF1kR9t/yfHa1f4t/VqJ8B/gr10l/lc4OJWPk1HsA7FIAWPVejLFc5IZcCMXCgvgYIABIKIPpMq/sCZOT/rNz+lbxtvXBcVFLMVDEA5imAP9sIVJWjM3oCLBK4AvqIBDj4pUJ4CaWT8QEgoQAQrvVfzCj/VXL7VyDnX0Xwj6qD6ipBgDny/9eXASs+gLfc1VogNGICziYBbu7J2/j1F9Q3eOWgl7ejoQL4/q3Z8WIjBuDV3N4D9MshiVeCOGaBP2sCggP+aATcPzMFP3kmoCwJWguEoik8qwLQCgm8xGOt2zTgaynAC/w9HbwynkYAVoORRQJgpBreCsBR99+K5q/BaP5yUoXssZWOwTVJAhCo0Y+T/u8kgFHTqTIrcIYXgEUl8AoAvziG4EuA9hWAXAPn4hxnKQpJApBQAdX231Hz72UYe9H1SAVUlEAV7DPdfxrE1o9XAJk59lY1AJIkELXVIujtuhWnfwmqAPK2TBqQ/ckSgPx8s81A73D/XwlwvpTfrwLoX4PgH+kOHJ2BmKm2/DoT8OoWV9pepVkloMljLQXACWU/q8PvpZDAlc9yKRCApywwIf8rBGCRgAVsSwGsDvC9x87I/6+uC4BkifAjTMFP9wA89XBFCVhdehWQLwVygMD9j9If/m8RRLD//hcEUJH/r0S+niGIalrxgrmdgRnwf6Tj/50EMJLTZxxqzwwEqCmBJSCAV6AKIgVgpQCQ8AKiE0WqAIsEvBJjNgXI1v+j6L8Wcv1MClAB+gvGFhJVNnLJKqZR+f9jh4KORPgZZqBWBfC8AAzAn5X8GQBWwR+pAGn4VVTAlfx/JPpnDcAr/7IkEI12zxqDs4H8baj85I1BMmZg5gSN/ADNFMSgtFdRA68iCKPlo9bU4CVJQt7fr1QAKuW/9QLQ1wFZHx2XXRMwa+OQj0XZOwngahpQmX47qgK0Y7TuvQzQrfthIAqDYyYtQgnw35EaqSiAkehPEHf0zYrwWQUQdRVWRsVlu1Azn+s/l///QgGMpAHkmFYju85E6/E18L8SQI+2bc8CnwDgEUThxVABUglA8XVkOgCj2YnV/H//998E8Hudg1eXCY9uA/+x8v+TUoDsLHtrB6GKCohSAWkKVong5UTdmTIcleivKYGqEfjdBmD07z/I5/yzgD8S/SFhElai/q8ggGwaMPK4GamAtUT3BXbzzssBfBVw2snzEEqAlMtySbNnBH4XAUgSiOT/agD8v4uKQCObiAzeKf0zFZ1/pgg+dWOQzAdwxRDUPIHVUAQRCUDB+c/Ifgn+h5D+i5MCfDcBzKoAVNOADBlkQT9jPDjAnDX/f3ZjkKoZOEMFRDP6ojbeqMZ/5fN4KKogWu0oKxoeOVUIgF+P1tHP8gD+c9TAfwHgX1BfUlxdDlyJ/lfMv19BANYqv5Hdg6sqQE7ZnUkCXqSvmG7yn5UCLMk0wHpfV0zAagXgBX4X4HeogBngH9kmLDMZOBv9/9zmoLMGWGgAQYUUrpJAtcaf+WJl1F+CNECbEPTOFKAyAehKFeC/giewTgC/Nx6s0hmYjf4f8fNpVYARFWClAVk1ABB39L3YcS8D8BkioKQC0KL+4vzjCsCbEPROBTDDA/Dk/qgPMDor8Oq251fNv19FAJU0oKoCvNzKOnEhSAU0gskSQfbz8BpuHooKsFKABfxOwBkewLtSgNUB+n/FykBm7UB245DRvQBHo/8/GxryE1YDVlVAJYKhkhKAogrkCr5XYPhh8Yt+KK93McCvRf5/mQJkewCyvQD/JTyB/yBfErReU3UGYGUw6I+I/p9AAO9QAVZVYFVAqqmBKCWokkFW+mvyn0S+L6U/isuWErCUCiad6pkEMGpeoyDYAAAJuElEQVQGjoJ+dOuxWTV/+mQy+CmrAa8OtLRGgGtEAJBbp6+t6MNB4GuR/5HwAT6ZAL67E3BkFkC0GvBqO/Ao4P/UasArKoCSaQAEqYDlCYCjCF7F95jxBGSfP5f3D4cA0CGBmSnA6DqAqF5fAf5/MD4L4GrOX+33/+jo/y8IYLYKwMKHb6UCngoAqM/ri75wL+pHnX9e9JeRfzHUzGgj0ArjKwGjduB39AeMbhM2YgD+yOj/SSZgVgVkJ9tiIRWQpBBJ5hG3P/r3UAhBRn1+HR0lcGUoyNUyIEE83vsdA0BG9wiojACDgir4EdH/XxHArMlAWdNtVAlEzj5O+Bw0FcCB7rn+URpQHQoyYxjIlYagdQLwM6sBrw7/9L7Lq5H9T64FGFEBOPChaq2zkRJYHePsqgp4gF32I8f5/ykeQNQMlFUDmeEf1WXAUeQf7Qf4UdH/0whgRAVUUgEtDVgDlx+S0tkD/sMhhEdAAJb5V6kAvCMFuFIJiMqClZmBldV/o9uCA1zv9f+TI8GuGn0VFVCpv1t+wJpMBbLv75EAfSbySxKI8v9/vRYg2xGYUQKZtf6v4Lmjnv939fpXoz/9JQIYIQrPEKxutiCJABwygCJwtMve8t6M9F+LKUBl49HoZJ65JdhrgAiugP6dMwAoafx9NML+JQFc2cO+mgpYlYFsOjDy3jTwaxN+tL7/KPfP5v/fqQBGzMA1AexXgTxGKgBV2X8F3B/nCXy6AsiogEyTkFQJO/CrvkBFWWhEkIn+1dw/owAA5nUCZseCZ3f+vfq7Cn4L+CvEe/1Vpf/Ho+vT1wJ4x0WpQLThaFQdWAdYPepCrET9Su5fXQk4ow8gu622BcqMOViN9K8i8Ed2AMpuB5adCEx/mQDeRRo0AFw+WAMSRJCNChzo2m1er3+U+2cqALNTgJFKQCUlGInyswd+/vhVfj+JAEZUgJUKZDsFZRqwQr9jMDAiWIPXHzXRANhDPjIDPyotwJVZAJnNQa9uDjJKAldAvwaqZFQJUCLd+zHR/5MUwKxUwForkPkCJAnICsGafB/WgpEH+D0AV8G/QF76V1KArAK4QgJZgFd3+l1hXoNPdpHPjwH/T00BsqRBhUin+QIS+DM6ALUegGWAAN6R/8/0AUYIYBTo2UGfVyL+j+ns+8kEMDsVQKMa4H1xMi3gj9FUwEgeuYA95lsb+T0j+l/tA5ihAuiNwKeL4IfA8MtUen5c9P9JCuCqH1B5l5Y3oJEAJiO/RQRZuX8l+l/ZlmzEB6ALBHBlCa93+UoKMDvvvxXAgArIHvsdJGABiQN7VCWsThUg2/hzpQJQVQDZxqArZHAF9O8E/yjY77Hgk1IBSCoCgHqJ0CMBq5FmMUC/JABkzfqXI7+94R/eLsWzFACA3zyzQr1JiKA2p29E6o8M+ohMPxoA+ceh7aeZgJlUIDIFsUgCCP3U3dUx1izQL+Bv7VUBflb6j2xaMmIEZgigogjoQrR/R9TPEOWPNAQ/lQBGU4HIFJydEqCjBDTQy+sI/lZf2u/R3P9KFaDqBVRJIEMOVZn/rnx/tNWXbgJ4Hzl8FwlYasAiAk0NoHK5Av5q6S9qAooiGUG9JHhFEWQBPwv4M8F/dwJ+kwrIDguZTQIWEUTRVlv4o72mLPhXeE/0n60CsiRw5feMMd5V8Fcj/D0Q5BtIoDpMJCIBMoC1CCKwlEC01j8iKUv2Z8D/LwkgisqZSH4l2leGembBHwH6R4L/p6QAoyTwrl6BNSADTXpboPeIQF5eC67/dxEAJMHngXz0/mr0B5hT4/814P+pHsAnkIBGBl5awElAI4TFIADL9It2AH43AYymA1lgR/J+Vp7/TvDfHsA/qgrMIoEZhCAjsyQBCX40Ug+NCACut/9mIlcW/JAE6Ai43zG66yr4f6Tr/5MVQNUUHCWB7Ouo5OEWCUgiwOD51wHXf2Si8UwVMKoORgngSq5fAT/9dPD/xBTgO0jgqgrwFIEFeiwSy1Xwj0xRfgcJzIrwM3L9Pwf+3+IBvJsEZioCiwjwm8B/NQV4Jwm8A/BZ0M8C/+0BfIAfcJUEQER/jwwyimTWP0iCPwL+lfHmUS5NbyQGmJDjV/r7R8B/NwL9cBK4KvtJAegs7yCz0Mfa/8/6rLITkzJjsapAnQX4d5h8fwL8Pz0FmEECMtJfMQmtcqQEKw0AH74h8r9DCcAEcM8EfWas158B/2/wAK6SgKcA8I1k4BHEVeDjBPBf9QIAanl69rYroB8d4vFrwf9bTMCZJAADJmDl9VFgAo4Cfnb0H1UBswgBBi9fMfj+HPh/CwG8kwSilACNEwmTlyUJZAhgBvixcEKPkgC8AeCzov0N/l9GAFdIAMCfHDRSGsyoAIsEqBDpK7L/igdQSQdGlQEM3nYlxx+d3PNrUPMX+gAy90d7CuAAIVT2MLBIAJzbLMBngD+qALJgmw3uUcC/Y2Lv3QfwC0gAJqUEkEgLMr0CHgmMAP9q9B9RAVeUQfbYUZk/Q/L/OvD/VgLIkEAlJQAYWzBkEUH2t7bVmfab/jEBVCT5jBx+NvD/LPh/MwFcIYGMGoBCWjDqHWQUxgzjr3LC0wUymAX8DAnc4L8J4C0kAJAbNV4FfbSzUWXp8jtI6CoJzI7uVWPvBv8fJQAv58/6ApBUAwBz5gtEJPBd4J9FAqPAniHxb+DfBDBNDQDEuw9nAD+y0jC6rD1v1OePxRO+AjaaTBazgH+D/w8TQIUE4EJaYIGRJr/+aCgqBfn/FSCMgvM7IvzVXXn+FCL+GgFkU4KKGpitECqklQU9Tfzc3kEG7wT+HfVvAnibGphBBFfSgoiocOJndTUteMf1GcD/s+D/6wRQAcksIsiAfyRdiNQKJFXP1YhJE46hwb81Cug/jYC/TgCVlCAjxyEhyavgn70yEd74XPRGosi+hzvq3wTwdm8AikQwohS+gxC+Iy1457E38G8C+Mi0wIr+GVVQJYRPI4AREH9Xvf4+228CeEtaEB0bqQKPJDxCiO77VCKYkcPfwL8J4COJYEQVeKCfAXx8A7hnS/R3lOrus/smgG8ngqoqsI6LHHwqAP5fmIgzAX0D/yaAH00EFTLIEkJWafzrNOA7Zft9Nt8E8JFEUCGDCtgr3x5+M5i+E8D3WXwTwD8lgneSwYgC+G6Q0D947H3m3gTw41VBVv7PAAF+CMDoHz/+/rkJ4CNVwaxI/0nA+cQOxvvnJoB/BoB3lOPww97jDfibAO6fNxPCbwPLfRbeBHATwgdE8xvwNwHcPx8IDLyBfv/cBHATA3yQF3CfOTcB3D93tL1/fvLPcn8E98/983d//g882+sbXKqwqgAAAABJRU5ErkJggg=="
		);
	var U = Qt(pr()),
		_n = Qt(er());
	var jt = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec4 aColor;\r
in vec2 aUV;\r
in vec3 aNormal;\r
\r
uniform mat4 uTransformM;\r
uniform mat4 uTransformVP;\r
uniform mat4 uTransformMVP;\r
uniform mat4 uTransformM_IT;\r
\r
out vec4 vColor;\r
out vec4 vPos;\r
out vec2 vUV;\r
out vec3 vNormal;\r
out vec3 vWorldPos;\r
\r
void main()\r
{\r
    gl_Position = uTransformMVP * vec4(aPos, 1);\r
    vPos = gl_Position;\r
    vColor = aColor;\r
    vUV = aUV;\r
    vNormal = (uTransformM_IT *  vec4(aNormal, 0)).xyz;\r
    vWorldPos = (uTransformM * vec4(aPos, 1)).xyz;\r
    \r
}`;
	var Uo = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uTexSize; // (w, h, 1/w, 1/h)\r
uniform float uSampleOffset;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec2 delta = vec2(-uSampleOffset, uSampleOffset);\r
    vec4 color = \r
      texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xx, vec2(0), vec2(1)))\r
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yx, vec2(0), vec2(1)))\r
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yy, vec2(0), vec2(1)))\r
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xy, vec2(0), vec2(1)));\r
\r
    color /= vec4(4.0);\r
\r
    fragColor = color.rgba;\r
}`;
	var wr = class extends U.MaterialFromShader(new U.Shader(jt, Uo)) {
		constructor() {
			super(...arguments);
			this.texture = null;
			this.textureSize = U.vec4.one();
			this.sampleOffset = 1
		}
	};
	ie([U.shaderProp("uMainTex", "tex2d")], wr.prototype, "texture", 2), ie([U.shaderProp("uTexSize", "vec4")],
		wr.prototype, "textureSize", 2), ie([U.shaderProp("uSampleOffset", "float")], wr.prototype,
		"sampleOffset", 2);
	var bn = class {
		constructor(t) {
			this.steps = [];
			this.mateiralBlur = new wr;
			this.renderer = t
		}
		init(t) {
			this.steps[0] || (this.steps[0] = new U.RenderTexture(t.width, t.height, !1, t.format, t
					.filterMode), this.steps[0].wrapMode = U.WrapMode.Clamp, this.steps[0]
				.updateParameters()), (this.steps[0].width !== t.width || this.steps[0].height !== t
				.height) && this.steps[0].resize(t.width, t.height, U.TextureResizing.Discard)
		}
		blur(t, r = 4, i = this.steps[0]) {
			return this.steps[0] || (this.steps[0] = new U.RenderTexture(t.width, t.height, !1, t
				.format, t.filterMode)), i = i || this.steps[0], (this.steps[0].width !== t.width ||
				this.steps[0].height !== t.height) && this.steps[0].resize(t.width, t.height, U
				.TextureResizing.Discard), this.downSample(t, r), this.upSample(r, i)
		}
		downSample(t, r) {
			for (let i = 1; i <= r; i++) {
				let n = U.vec2.floor(U.div(t.size, U.vec2(2)));
				this.steps[i] || (this.steps[i] = new U.RenderTexture(n.x, n.y, !1, _n.TextureFormat
						.RGBA, U.FilterMode.Linear), this.steps[i].wrapMode = U.WrapMode.Clamp, this
					.steps[i].updateParameters());
				let s = this.steps[i];
				(s.width !== n.x || s.height !== n.y) && s.resize(n.x, n.y, U.TextureResizing.Discard),
					this.mateiralBlur.texture = t, this.mateiralBlur.textureSize = U.vec4(t.width, t
						.height, 1 / t.width, 1 / t.height), this.mateiralBlur.sampleOffset = 1, this
					.renderer.blit(t, s, this.mateiralBlur), t = s
			}
		}
		upSample(t, r = this.steps[0]) {
			let i = this.steps[t];
			for (let n = t - 1; n >= 0; n--) {
				let s = U.mul(i.size, U.vec2(2));
				this.steps[n] || (this.steps[n] = new U.RenderTexture(s.x, s.y, !1, _n.TextureFormat
						.RGBA, U.FilterMode.Linear), this.steps[n].wrapMode = U.WrapMode.Clamp, this
					.steps[n].updateParameters());
				let a = n === 0 ? r : this.steps[n];
				this.mateiralBlur.texture = i, this.mateiralBlur.textureSize = U.vec4(i.width, i.height,
						1 / i.width, 1 / i.height), this.mateiralBlur.sampleOffset = 1, this.renderer
					.blit(i, a, this.mateiralBlur), i = a
			}
			return i
		}
	};
	var wi = Qt(pr());

	function Vo(e) {
		return wi.vec2(Math.random(), Math.random()).mul(e.size).plus(e.min)
	}

	function ko() {
		return Math.random() * 2 - 1
	}

	function Fe(e, t) {
		return Math.random() * (t - e) + e
	}
	var Yo = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uColor;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.rgba = color * uColor;\r
    fragColor = color.rgba;\r
}`;
	var Wo = `#version 300 es\r
precision mediump float;\r
\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform sampler2D uMistTex;\r
uniform vec4 uMistColor;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.rgb += vec3(uMistColor);\r
    color.a = texture(uMistTex, vUV.xy).r * uMistColor.a;\r
    fragColor = color.rgba;\r
}`;
	var jo = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uBackgroundSize; // (x, y, 1/x, 1/y)\r
uniform sampler2D uRaindropTex;\r
uniform sampler2D uDropletTex;\r
uniform sampler2D uMistTex;\r
uniform vec4 uColor;\r
uniform vec2 uSmoothRaindrop;\r
uniform vec2 uRefractParams; // (refractBase, refractScale)\r
uniform vec4 uLightPos;\r
uniform vec4 uDiffuseColor; // (color.rgb, shadowOffset)\r
uniform vec4 uSpecularParams; // (color.rgb, exponent)\r
uniform float uBump;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    // vec3 lightPos = vec3(0.5, 1, 1);\r
\r
    vec4 raindrop = texture(uRaindropTex, vUV.xy).rgba;\r
    vec4 droplet = texture(uDropletTex, vUV.xy).rgba;\r
    float mist = texture(uMistTex, vUV.xy).r;\r
\r
    vec4 compose = vec4(raindrop.rgb + droplet.rgb - vec3(2.0) * raindrop.rgb * droplet.rgb, max(droplet.a, raindrop.a));\r
\r
    float mask = smoothstep(uSmoothRaindrop.x, uSmoothRaindrop.y, compose.a);\r
    \r
    vec2 uv = vUV.xy + -(compose.xy - vec2(0.5)) * vec2(compose.b * uRefractParams.y + uRefractParams.x);\r
    vec3 normal = normalize(vec3((compose.xy - vec2(0.5)) * vec2(2), 1.0));\r
\r
    // vec3 lightDir = lightPos - vec3(vUV, 0);\r
    vec3 lightDir = uLightPos.xyz - uLightPos.w * vec3(vUV.xy, 0.0);\r
    vec3 viewDir = vec3(0, 0, 1);\r
    vec3 halfDir = normalize(lightDir + viewDir);\r
    float lambertian = clamp(dot(normalize(lightDir), normal), 0.0, 1.0);\r
    float blinnPhon = pow(max(dot(normal, halfDir), 0.0), uSpecularParams.a);\r
\r
\r
    // offset = pow(offset, vec2(2));\r
    vec4 color = texture(uMainTex, uv.xy).rgba;\r
    vec3 diffuse = vec3((lambertian - uDiffuseColor.a) * uDiffuseColor.rgb);\r
\r
    color.rgb += vec3((lambertian - uDiffuseColor.a) * uDiffuseColor.rgb);\r
    color.rgb += vec3(blinnPhon) * uSpecularParams.rgb;\r
    \r
\r
    // fragColor = vec4(mask, mask, mask, 1);\r
    // color = color * vec3(uColor);\r
\r
    fragColor = vec4(color.rgb, mask);// vec4(color.rgb, mask);\r
}`;
	var Ho = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec2 aUV;\r
\r
uniform mat4 uTransformVP;\r
\r
uniform float uSeed;\r
uniform vec4 uSpawnRect; // (xmin, ymin, xsize, ysize)\r
uniform vec2 uSizeRange; \r
\r
out vec2 vUV;\r
\r
// Gold Noise \xA92015 dcerisano@standard3d.com\r
// - based on the Golden Ratio\r
// - uniform normalized distribution\r
// - fastest static noise generator function (also runs at low precision)\r
// Ref: https://www.shadertoy.com/view/ltB3zD\r
const float PHI = 1.61803398874989484820459; // \u03A6 = Golden Ratio \r
\r
float gold_noise(in vec2 xy, in float seed)\r
{\r
    return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);\r
}\r
\r
vec2 lerp(vec2 a, vec2 b, vec2 t)\r
{\r
    return a + (b - a) * t;\r
}\r
\r
void main()\r
{\r
    int id = gl_InstanceID + 1;\r
    vec2 pos = uSpawnRect.xy + uSpawnRect.zw * vec2(\r
        gold_noise(vec2(1, id), uSeed + 1.0),\r
        gold_noise(vec2(id, 1), uSeed + 2.0));\r
\r
    vec2 size = vec2(\r
        gold_noise(vec2(1, id), uSeed + 3.0),\r
        gold_noise(vec2(id, 1), uSeed + 4.0));\r
    size = lerp(vec2(uSizeRange.x), vec2(uSizeRange.y), size);\r
    \r
    mat4 model = mat4(size.x, 0.0, 0.0, 0.0,  \r
                      0.0, size.x, 0.0, 0.0,  \r
                      0.0, 0.0, 1, 0.0,  \r
                      pos.x, pos.y, 0.0, 1.0); \r
    mat4 mvp = uTransformVP * model;\r
    gl_Position = mvp * vec4(aPos, 1);\r
    vUV = aUV;\r
}`;
	var Xo = `#version 300 es\r
precision mediump float;\r
\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uColor;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.rgb *= color.a;\r
    fragColor = vec4(color.rg, 0.0, color.a);\r
}`;
	var Qo = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uColor;\r
uniform vec2 uEraserSmooth;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.a = smoothstep(uEraserSmooth.x, uEraserSmooth.y, color.a);\r
    fragColor = color.rgba;\r
}`;
	var $o = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
in float vSize;\r
\r
uniform sampler2D uMainTex;\r
uniform float uSize;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    \r
    fragColor = vec4(color.rg * color.a, vSize * color.a, color.a);\r
}`;
	var Zo = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec4 aColor;\r
in vec2 aUV;\r
in vec3 aNormal;\r
\r
in float aSize;\r
in mat4 aModelMatrix;\r
\r
uniform mat4 uTransformM;\r
uniform mat4 uTransformVP;\r
uniform mat4 uTransformMVP;\r
uniform mat4 uTransformM_IT;\r
\r
out vec4 vColor;\r
out vec4 vPos;\r
out vec2 vUV;\r
out vec3 vNormal;\r
out vec3 vWorldPos;\r
out float vSize;\r
\r
void main()\r
{\r
    mat4 mvp = uTransformVP * aModelMatrix;\r
    gl_Position = mvp * vec4(aPos, 1);\r
    vPos = gl_Position;\r
    vColor = aColor;\r
    vUV = aUV;\r
    vNormal = (uTransformM_IT *  vec4(aNormal, 0)).xyz;\r
    vWorldPos = (uTransformM * vec4(aPos, 1)).xyz;\r
    vSize = aSize;\r
}`;
	var Ti = class extends g.MaterialFromShader(new g.Shader(Zo, $o, {
		blendRGB: [g.Blending.OneMinusDstColor, g.Blending.OneMinusSrcColor],
		depth: g.DepthTest.Disable,
		zWrite: !1,
		attributes: {
			size: "aSize",
			modelMatrix: "aModelMatrix"
		}
	})) {
		constructor() {
			super(...arguments);
			this.texture = null;
			this.size = 0
		}
	};
	ie([g.shaderProp("uMainTex", "tex2d")], Ti.prototype, "texture", 2), ie([g.shaderProp("uSize", "float")], Ti
		.prototype, "size", 2);
	var mr = class extends g.MaterialFromShader(new g.Shader(Ho, Xo, {
		blendRGB: [g.Blending.OneMinusDstColor, g.Blending.OneMinusSrcColor],
		depth: g.DepthTest.Disable,
		zWrite: !1,
		attributes: {
			size: "aSize",
			modelMatrix: "aModelMatrix"
		}
	})) {
		constructor() {
			super(...arguments);
			this.texture = null;
			this.spawnRect = g.vec4(0, 0, 1, 1);
			this.sizeRange = g.vec2(10, 20);
			this.seed = 1
		}
	};
	ie([g.shaderProp("uMainTex", "tex2d")], mr.prototype, "texture", 2), ie([g.shaderProp("uSpawnRect",
		"vec4")], mr.prototype, "spawnRect", 2), ie([g.shaderProp("uSizeRange", "vec2")], mr.prototype,
		"sizeRange", 2), ie([g.shaderProp("uSeed", "float")], mr.prototype, "seed", 2);
	var Ne = class extends g.MaterialFromShader(new g.Shader(jt, jo, {
		blend: [g.Blending.SrcAlpha, g.Blending.OneMinusSrcAlpha],
		depth: g.DepthTest.Disable,
		zWrite: !1
	})) {
		constructor() {
			super(...arguments);
			this.background = null;
			this.backgroundSize = g.vec4.one();
			this.raindropTex = null;
			this.dropletTex = null;
			this.mistTex = null;
			this.smoothRaindrop = g.vec2(.95, 1);
			this.refractParams = g.vec2(.4, .6);
			this.lightPos = g.vec4(.5, .5, 2, 1);
			this.diffuseLight = new g.Color(.3, .3, .3, .8);
			this.specularParams = g.vec4(1, 1, 1, 32);
			this.bump = 1
		}
	};
	ie([g.shaderProp("uMainTex", "tex2d")], Ne.prototype, "background", 2), ie([g.shaderProp("uBackgroundSize",
		"vec4")], Ne.prototype, "backgroundSize", 2), ie([g.shaderProp("uRaindropTex", "tex2d")], Ne
		.prototype, "raindropTex", 2), ie([g.shaderProp("uDropletTex", "tex2d")], Ne.prototype,
		"dropletTex", 2), ie([g.shaderProp("uMistTex", "tex2d")], Ne.prototype, "mistTex", 2), ie([g
		.shaderProp("uSmoothRaindrop", "vec2")
	], Ne.prototype, "smoothRaindrop", 2), ie([g.shaderProp("uRefractParams", "vec2")], Ne.prototype,
		"refractParams", 2), ie([g.shaderProp("uLightPos", "vec4")], Ne.prototype, "lightPos", 2), ie([g
		.shaderProp("uDiffuseColor", "color")
	], Ne.prototype, "diffuseLight", 2), ie([g.shaderProp("uSpecularParams", "vec4")], Ne.prototype,
		"specularParams", 2), ie([g.shaderProp("uBump", "float")], Ne.prototype, "bump", 2);
	var Rn = class extends g.SimpleTexturedMaterial(new g.Shader(jt, Qo, {
		blendRGB: [g.Blending.Zero, g.Blending.OneMinusSrcAlpha],
		blendAlpha: [g.Blending.Zero, g.Blending.OneMinusSrcAlpha]
	})) {
		constructor() {
			super(...arguments);
			this.eraserSize = g.vec2(.93, 1)
		}
	};
	ie([g.shaderProp("uEraserSmooth", "vec2")], Rn.prototype, "eraserSize", 2);
	var Rv = g.SimpleTexturedMaterial(new g.Shader(jt, Yo, {
			blend: [g.Blending.One, g.Blending.One]
		})),
		Pi = class extends g.SimpleTexturedMaterial(new g.Shader(jt, Wo, {
			blend: [g.Blending.SrcAlpha, g.Blending.OneMinusSrcAlpha]
		})) {
			constructor() {
				super(...arguments);
				this.mistColor = new g.Color(.01, .01, .01, 1);
				this.mistTex = null
			}
		};
	ie([g.shaderProp("uMistColor", "color")], Pi.prototype, "mistColor", 2), ie([g.shaderProp("uMistTex",
		"tex2d")], Pi.prototype, "mistTex", 2);
	var wn = class {
		constructor(t) {
			this.raindropTex = null;
			this.originalBackground = null;
			this.matrlCompose = new Ne;
			this.matrlRaindrop = new Ti;
			this.matrlDroplet = new mr;
			this.matrlErase = new Rn;
			this.matrlMist = new Rv;
			this.matrlMistCompose = new Pi;
			this.mesh = g.MeshBuilder.quad();
			this.raindropBuffer = new g.RenderBuffer({
				size: "float",
				modelMatrix: "mat4"
			}, 3e3);
			this.renderer = new g.ZograRenderer(t.canvas), this.renderer.gl.getExtension(
					"EXT_color_buffer_float"), this.options = t, this.projectionMatrix = g.mat4.ortho(0,
					t.width, 0, t.height, 1, -1), this.raindropComposeTex = new g.RenderTexture(t.width,
					t.height, !1), this.background = new g.RenderTexture(t.width, t.height, !1), this
				.dropletTexture = new g.RenderTexture(t.width, t.height, !1), this.blurryBackground =
				new g.RenderTexture(t.width, t.height, !1), this.mistBackground = new g.RenderTexture(t
					.width, t.height, !1), this.mistTexture = new g.RenderTexture(t.width, t.height, !1,
					g.TextureFormat.R16F), this.blurRenderer = new bn(this.renderer), this.renderer
				.setViewProjection(g.mat4.identity(), this.projectionMatrix)
		}
		async loadAssets() {
			this.raindropTex = await g.TextureImporter.buffer(Go).then(t => t.tex2d()), this
				.matrlRaindrop.texture = this.raindropTex, this.matrlDroplet.texture = this.raindropTex,
				await this.reloadBackground()
		}
		async reloadBackground() {
			this.originalBackground?.destroy(), typeof this.options.background == "string" ? (this
				.originalBackground = await g.TextureImporter.url(this.options.background).then(i =>
					i.tex2d({
						wrapMpde: g.WrapMode.Clamp
					})), this.originalBackground.wrapMode = g.WrapMode.Clamp, this
				.originalBackground.updateParameters()) : (this.originalBackground = new g
				.Texture2D, this.originalBackground.setData(this.options.background), this
				.originalBackground.updateParameters());
			let [t, r] = g.Utils.imageResize(this.originalBackground.size, this.background.size, g.Utils
				.ImageSizing.Cover);
			this.renderer.blit(this.originalBackground, this.background, this.renderer.assets.materials
				.blitCopy, t, r), this.background.generateMipmap(), this.blurBackground()
		}
		resize() {
			this.renderer.setSize(this.options.width, this.options.height), this.projectionMatrix = g
				.mat4.ortho(0, this.options.width, 0, this.options.height, 1, -1), this.renderer
				.setViewProjection(g.mat4.identity(), this.projectionMatrix), this.raindropComposeTex
				.resize(this.options.width, this.options.height), this.background.resize(this.options
					.width, this.options.height), this.dropletTexture.resize(this.options.width, this
					.options.height), this.blurryBackground.resize(this.options.width, this.options
					.height), this.mistBackground.resize(this.options.width, this.options.height), this
				.mistTexture.resize(this.options.width, this.options.height);
			let [t, r] = g.Utils.imageResize(this.originalBackground.size, this.background.size, g.Utils
				.ImageSizing.Cover);
			this.renderer.blit(this.originalBackground, this.background, this.renderer.assets.materials
				.blitCopy, t, r), this.background.generateMipmap(), this.blurBackground()
		}
		render(t, r) {
			this.drawDroplet(r), this.drawMist(r.dt), this.drawRaindrops(t), this.renderer
				.setRenderTarget(g.RenderTarget.CanvasTarget), this.renderer.clear(g.Color.black), this
				.drawBackground(), this.matrlCompose.background = this.blurryBackground, this
				.matrlCompose.backgroundSize = g.vec4(this.options.width, this.options.height, 1 / this
					.options.width, 1 / this.options.height), this.matrlCompose.raindropTex = this
				.raindropComposeTex, this.matrlCompose.dropletTex = this.dropletTexture, this
				.matrlCompose.mistTex = this.mistTexture, this.matrlCompose.smoothRaindrop = g.vec2(...
					this.options.smoothRaindrop), this.matrlCompose.refractParams = g.vec2(this.options
					.refractBase, this.options.refractScale), this.matrlCompose.lightPos = g.vec4(...
					this.options.raindropLightPos), this.matrlCompose.diffuseLight = new g.Color(...this
					.options.raindropDiffuseLight, this.options.raindropShadowOffset), this.matrlCompose
				.specularParams = g.vec4(...this.options.raindropSpecularLight, this.options
					.raindropSpecularShininess), this.matrlCompose.bump = this.options
				.raindropLightBump, this.renderer.blit(null, g.RenderTarget.CanvasTarget, this
					.matrlCompose)
		}
		blurBackground() {
			this.options.mist ? (this.blurRenderer.init(this.background), this.blurRenderer.downSample(
					this.background, Math.max(this.options.backgroundBlurSteps, this.options
						.mistBlurStep)), this.options.backgroundBlurSteps === this.options
				.mistBlurStep ? (this.blurRenderer.upSample(this.options.backgroundBlurSteps, this
					.blurryBackground), this.renderer.blit(this.blurryBackground, this
					.mistBackground)) : this.options.mistBlurStep > this.options
				.backgroundBlurSteps ? (this.blurRenderer.upSample(this.options.backgroundBlurSteps,
					this.blurryBackground), this.blurRenderer.upSample(this.options
					.mistBlurStep, this.mistBackground)) : (this.blurRenderer.upSample(this.options
					.mistBlurStep, this.mistBackground), this.blurRenderer.upSample(this.options
					.backgroundBlurSteps, this.blurryBackground))) : this.blurRenderer.blur(this
				.background, this.options.backgroundBlurSteps, this.blurryBackground)
		}
		drawMist(t) {
			!this.options.mist || (this.matrlMist.color.r = t / this.options.mistTime, this.renderer
				.blit(this.renderer.assets.textures.default, this.mistTexture, this.matrlMist))
		}
		drawBackground() {
			this.renderer.blit(this.blurryBackground, g.RenderTarget.CanvasTarget), this.options.mist &&
				(this.matrlMistCompose.mistTex = this.mistTexture, this.matrlMistCompose.texture = this
					.mistBackground, this.matrlMistCompose.mistColor = new g.Color(...this.options
						.mistColor), this.renderer.blit(this.mistBackground, g.RenderTarget
						.CanvasTarget, this.matrlMistCompose))
		}
		drawRaindrops(t) {
			t.length > this.raindropBuffer.length && this.raindropBuffer.resize(this.raindropBuffer
					.length * 2), this.renderer.setRenderTarget(this.raindropComposeTex), this.renderer
				.clear(g.Color.black.transparent());
			for (let r = 0; r < t.length; r++) {
				let i = t[r],
					n = g.mat4.rts(g.quat.identity(), i.pos.toVec3(), i.size.toVec3(1));
				this.raindropBuffer[r].modelMatrix.set(n), this.raindropBuffer[r].size[0] = i.size.x /
					100
			}
			switch (this.options.raindropCompose) {
				case "smoother":
					this.matrlRaindrop.shader.setPipelineStates({
						blendRGB: [g.Blending.OneMinusDstColor, g.Blending.OneMinusSrcColor]
					}), this.matrlDroplet.shader.setPipelineStates({
						blendRGB: [g.Blending.OneMinusDstColor, g.Blending.OneMinusSrcColor]
					});
					break;
				case "harder":
					this.matrlRaindrop.shader.setPipelineStates({
						blendRGB: [g.Blending.One, g.Blending.OneMinusSrcAlpha]
					}), this.matrlDroplet.shader.setPipelineStates({
						blendRGB: [g.Blending.One, g.Blending.OneMinusSrcAlpha]
					});
					break
			}
			this.renderer.drawMeshInstance(this.mesh, this.raindropBuffer, this.matrlRaindrop, t
				.length), this.matrlErase.eraserSize = g.vec2(...this.options.raindropEraserSize), this
				.renderer.blit(this.raindropComposeTex, this.dropletTexture, this.matrlErase), this
				.options.mist && this.renderer.blit(this.raindropComposeTex, this.mistTexture, this
					.matrlErase)
		}
		drawDroplet(t) {
			this.renderer.setRenderTarget(this.dropletTexture);
			let r = this.options.dropletsPerSeconds * t.dt;
			this.matrlDroplet.spawnRect = g.vec4(0, 0, this.options.width, this.options.height), this
				.matrlDroplet.sizeRange = g.vec2(...this.options.dropletSize), this.matrlDroplet.seed =
				Fe(0, 133), this.renderer.drawMeshProceduralInstance(this.mesh, this.matrlDroplet, r)
		}
	};
	var be = Qt(pr());

	function Jo(e, t, r) {
		return e + (t - e) * r
	}
	var Ai = class {
		constructor(t, r, i, n = 1) {
			this.density = 1;
			this.velocity = be.vec2.zero();
			this.destroied = !1;
			this._mass = 0;
			this._size = be.vec2.zero();
			this.resistance = 0;
			this.shifting = 0;
			this.nextRandomTime = 0;
			this.pos = r, this.simulator = t, this.density = n, this.lastTrailPos = r.clone(), this
				.nextTrailDistance = Fe(...t.options.trailDistance), this.spread = be.vec2(t.options
					.initialSpread), this.mass = (i * n) ** 2
		}
		get mass() {
			return this._mass
		}
		set mass(t) {
			this._mass = t;
			let r = Math.sqrt(t) / this.density;
			this._size.x = (this.spread.x + 1) * r, this._size.y = (this.spread.y + 1) * r
		}
		get size() {
			return this._size
		}
		get mergeDistance() {
			return this.size.x * (1 + this.spread.x) * .16 * this.simulator.options.colliderSize
		}
		get options() {
			return this.simulator.options
		}
		updateRaindrop(t) {
			this.nextRandomTime <= t.total && (this.nextRandomTime = t.total + Fe(...this.simulator
					.options.motionInterval), this.randomMotion()), this.mass -= this.simulator.options
				.evaporate * t.dt;
			let i = (this.options.gravity * this.mass - this.resistance) / this.mass;
			this.velocity.y -= i * t.dt, this.velocity.y > 0 && (this.velocity.y = 0), this.velocity.x =
				Math.abs(this.velocity.y) * this.shifting, this.pos.x += this.velocity.x * t.dt, this
				.pos.y += this.velocity.y * t.dt;
			let n = this.simulator.options.velocitySpread * 2 * Math.atan(Math.abs(this.velocity.y *
				.005)) / Math.PI;
			this.spread.y = Math.max(this.spread.y, n), this.spread.x *= Math.pow(this.simulator.options
					.shrinkRate, t.dt), this.spread.y *= Math.pow(this.simulator.options.shrinkRate, t
					.dt), be.Vector2.distanceSquared(this.lastTrailPos, this.pos) > this
				.nextTrailDistance * this.nextTrailDistance && this.split()
		}
		split() {
			if (this.mass < 1e3) return;
			let t = this.size.x * Fe(...this.simulator.options.trailDropSize),
				r = be.plus(be.vec2(Fe(-5, 5), this.size.y / 4), this.pos),
				i = this.simulator.spawner.spawn(r.clone(), t, this.simulator.options.trailDropDensity);
			i.spread = be.vec2(.1, Math.abs(this.velocity.y) * .01 * this.options.trailSpread), i
				.parent = this, this.mass -= i.mass, this.simulator.add(i), this.lastTrailPos = this.pos
				.clone(), this.nextTrailDistance = Fe(...this.simulator.options.trailDistance)
		}
		randomMotion() {
			let t = Jo(...this.simulator.options.spawnSize, 1 - this.simulator.options.slipRate) ** 2 *
				4;
			this.resistance = Fe(0, 1) * this.options.gravity * t, this.shifting = ko() * Fe(...this
				.simulator.options.xShifting)
		}
		merge(t) {
			let r = be.mul(this.velocity, this.mass),
				i = be.mul(t.velocity, t.mass),
				n = be.plus(r, i);
			this.mass += t.mass, this.velocity = be.div(n, this.mass)
		}
	};
	var Tn = class {
		constructor(t, r) {
			this.currentTime = 0;
			this.nextSpawn = 0;
			this.simulator = t
		}
		get interval() {
			return this.simulator.options.spawnInterval
		}
		get size() {
			return this.simulator.options.spawnSize
		}
		get spawnRect() {
			return this.simulator.options.viewport
		}
		update(t) {
			return this.currentTime += t, this
		}* trySpawn() {
			for (; this.currentTime >= this.nextSpawn;) {
				let t = Fe(...this.size),
					r = Vo(this.spawnRect);
				this.nextSpawn += Fe(...this.interval), yield new Ai(this.simulator, r, t)
			}
			this.currentTime >= this.nextSpawn
		}
		spawn(t, r, i = 1) {
			return new Ai(this.simulator, t, r, i)
		}
	};
	var Ko = class extends Array {
			push(...t) {
				return super.push(...t)
			}
			add(t) {
				let r = super.push(t);
				t.gridIdx = r - 1, t.grid = this
			}
			delete(t) {
				this[t.gridIdx] = this[this.length - 1], this[t.gridIdx].gridIdx = t.gridIdx, this.length--,
					t.gridIdx = -1, t.grid = void 0
			}
		},
		Pn = class {
			constructor(t) {
				this.raindrops = [];
				this.grid = [];
				this.options = t, this.spawner = new Tn(this, t), this.resize()
			}
			get gridSize() {
				return this.options.spawnSize[1] * .3
			}
			resize() {
				let t = Math.ceil(this.options.viewport.size.x / this.gridSize),
					r = Math.ceil(this.options.viewport.size.y / this.gridSize),
					i = 0;
				this.grid.length < t * r && (i = this.grid.length, this.grid.length = t * r);
				for (let n = i; n < this.grid.length; n++) this.grid[n] = new Ko
			}
			gridAt(t, r) {
				if (t < 0 || r < 0) return;
				let i = Math.ceil((this.options.viewport.xMax - this.options.viewport.xMin) / this
					.gridSize),
					n = r * i + t;
				if (!(n >= this.grid.length)) return this.grid[n]
			}
			gridAtWorldPos(t, r) {
				return this.gridAt(...this.worldToGrid(t, r))
			}
			worldToGrid(t, r) {
				let i = Math.floor(t / this.gridSize),
					n = Math.floor(r / this.gridSize);
				return [i, n]
			}
			add(t) {
				this.raindrops.push(t);
				let r = this.gridAtWorldPos(t.pos.x, t.pos.y);
				r && (r.add(t), t.gridIdx = r.length - 1)
			}
			update(t) {
				if (this.raindrops.length <= this.options.spawnLimit)
					for (let r of this.spawner.update(t.dt).trySpawn()) this.raindrops.push(r);
				this.raindropUpdate(t), this.collisionUpdate();
				for (let r = 0; r < this.raindrops.length; r++) this.raindrops[r].destroied && (this
					.raindrops[r].grid?.delete(this.raindrops[r]), this.raindrops[r] = this.raindrops[
						this.raindrops.length - 1], this.raindrops.length--)
			}
			raindropUpdate(t) {
				for (let r = 0; r < this.raindrops.length; r++) {
					let i = this.raindrops[r];
					if (i.destroied || (i.updateRaindrop(t), i.pos.y < -100 && (i.destroied = !0), i
							.destroied)) continue;
					let [n, s] = this.worldToGrid(i.pos.x, i.pos.y), a = this.gridAt(n, s);
					a !== i.grid && (i.grid?.delete(i), a?.add(i), i.grid = a)
				}
			}
			collisionUpdate() {
				for (let t = 0; t < this.raindrops.length; t++) {
					let r = this.raindrops[t];
					if (r.destroied) continue;
					let [i, n] = this.worldToGrid(r.pos.x, r.pos.y);
					for (let s = -1; s <= 1; s++)
						for (let a = -1; a <= 1; a++) {
							let o = this.gridAt(i + s, n + a);
							if (!!o)
								for (let c of o) {
									let l = c === r,
										h = c.parent === r || r.parent === c,
										u = r.parent && r.parent === c.parent;
									if (c.destroied || h || u || l) continue;
									let d = r.pos.x - c.pos.x,
										f = r.pos.y - c.pos.y;
									Math.sqrt(d * d + f * f) - r.mergeDistance - c.mergeDistance < 0 && (r
										.mass >= c.mass ? (r.merge(c), c.destroied = !0) : (c.merge(r),
											r.destroied = !0))
								}
						}
				}
			}
		};
	return rc();
})();
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
//# sourceMappingURL=index.js.map
