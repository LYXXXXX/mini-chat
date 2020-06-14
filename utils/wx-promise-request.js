! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t["wx-promise-request"] = t["wx-promise-request"] || {})
}(this, function (t) {
  "use strict";

  function e() {
    throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
  }

  function n(t, e) {
    return e = {
      exports: {}
    }, t(e, e.exports), e.exports
  }

  function r(t, e, n, r) {
    for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o;)
      if (e(t[i], i, t)) return i;
    return -1
  }

  function o(t) {
    return t !== t
  }

  function i(t, e, n) {
    for (var r = n - 1, o = t.length; ++r < o;)
      if (t[r] === e) return r;
    return -1
  }

  function u(t, e, n) {
    return e === e ? p(t, e, n) : d(t, h, n)
  }

  function s() {}

  function c(t) {
    var e = void 0 === t ? "undefined" : f(t);
    return null != t && ("object" == e || "function" == e)
  }
  var a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    l = n(function (t, n) {
      ! function (n, r) {
        t.exports = function () {
          function t(t) {
            return "function" == typeof t || "object" === (void 0 === t ? "undefined" : f(t)) && null !== t
          }

          function n(t) {
            return "function" == typeof t
          }

          function r(t) {
            G = t
          }

          function o(t) {
            H = t
          }

          function i() {
            return void 0 !== W ? function () {
              W(s)
            } : u()
          }

          function u() {
            var t = setTimeout;
            return function () {
              return t(s, 1)
            }
          }

          function s() {
            for (var t = 0; t < U; t += 2) {
              (0, Z[t])(Z[t + 1]), Z[t] = void 0, Z[t + 1] = void 0
            }
            U = 0
          }

          function c(t, e) {
            var n = arguments,
              r = this,
              o = new this.constructor(d);
            void 0 === o[tt] && T(o);
            var i = r._state;
            return i ? function () {
              var t = n[i - 1];
              H(function () {
                return P(i, o, t, r._result)
              })
            }() : A(r, o, t, e), o
          }

          function l(t) {
            var e = this;
            if (t && "object" === (void 0 === t ? "undefined" : f(t)) && t.constructor === e) return t;
            var n = new e(d);
            return g(n, t), n
          }

          function d() {}

          function h() {
            return new TypeError("You cannot resolve a promise with itself")
          }

          function p() {
            return new TypeError("A promises callback cannot return that same promise.")
          }

          function v(t) {
            try {
              return t.then
            } catch (t) {
              return ot.error = t, ot
            }
          }

          function y(t, e, n, r) {
            try {
              t.call(e, n, r)
            } catch (t) {
              return t
            }
          }

          function _(t, e, n) {
            H(function (t) {
              var r = !1,
                o = y(n, e, function (n) {
                  r || (r = !0, e !== n ? g(t, n) : x(t, n))
                }, function (e) {
                  r || (r = !0, k(t, e))
                }, "Settle: " + (t._label || " unknown promise"));
              !r && o && (r = !0, k(t, o))
            }, t)
          }

          function m(t, e) {
            e._state === nt ? x(t, e._result) : e._state === rt ? k(t, e._result) : A(e, void 0, function (e) {
              return g(t, e)
            }, function (e) {
              return k(t, e)
            })
          }

          function b(t, e, r) {
            e.constructor === t.constructor && r === c && e.constructor.resolve === l ? m(t, e) : r === ot ? (k(t, ot.error), ot.error = null) : void 0 === r ? x(t, e) : n(r) ? _(t, e, r) : x(t, e)
          }

          function g(e, n) {
            e === n ? k(e, h()) : t(n) ? b(e, n, v(n)) : x(e, n)
          }

          function w(t) {
            t._onerror && t._onerror(t._result), j(t)
          }

          function x(t, e) {
            t._state === et && (t._result = e, t._state = nt, 0 !== t._subscribers.length && H(j, t))
          }

          function k(t, e) {
            t._state === et && (t._state = rt, t._result = e, H(w, t))
          }

          function A(t, e, n, r) {
            var o = t._subscribers,
              i = o.length;
            t._onerror = null, o[i] = e, o[i + nt] = n, o[i + rt] = r, 0 === i && t._state && H(j, t)
          }

          function j(t) {
            var e = t._subscribers,
              n = t._state;
            if (0 !== e.length) {
              for (var r = void 0, o = void 0, i = t._result, u = 0; u < e.length; u += 3) r = e[u], o = e[u + n], r ? P(n, r, o, i) : o(i);
              t._subscribers.length = 0
            }
          }

          function M() {
            this.error = null
          }

          function S(t, e) {
            try {
              return t(e)
            } catch (t) {
              return it.error = t, it
            }
          }

          function P(t, e, r, o) {
            var i = n(r),
              u = void 0,
              s = void 0,
              c = void 0,
              a = void 0;
            if (i) {
              if (u = S(r, o), u === it ? (a = !0, s = u.error, u.error = null) : c = !0, e === u) return void k(e, p())
            } else u = o, c = !0;
            e._state !== et || (i && c ? g(e, u) : a ? k(e, s) : t === nt ? x(e, u) : t === rt && k(e, u))
          }

          function O(t, e) {
            try {
              e(function (e) {
                g(t, e)
              }, function (e) {
                k(t, e)
              })
            } catch (e) {
              k(t, e)
            }
          }

          function E() {
            return ut++
          }

          function T(t) {
            t[tt] = ut++, t._state = void 0, t._result = void 0, t._subscribers = []
          }

          function C(t, e) {
            this._instanceConstructor = t, this.promise = new t(d), this.promise[tt] || T(this.promise), K(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? x(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && x(this.promise, this._result))) : k(this.promise, q())
          }

          function q() {
            return new Error("Array Methods must be provided an Array")
          }

          function L(t) {
            return new C(this, t).promise
          }

          function I(t) {
            var e = this;
            return new e(K(t) ? function (n, r) {
              for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
            } : function (t, e) {
              return e(new TypeError("You must pass an array to race."))
            })
          }

          function F(t) {
            var e = this,
              n = new e(d);
            return k(n, t), n
          }

          function N() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
          }

          function Y() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
          }

          function B(t) {
            this[tt] = E(), this._result = this._state = void 0, this._subscribers = [], d !== t && ("function" != typeof t && N(), this instanceof B ? O(this, t) : Y())
          }

          function D() {
            var t = void 0;
            if (void 0 !== a) t = a;
            else if ("undefined" != typeof self) t = self;
            else try {
              t = Function("return this")()
            } catch (t) {
              throw new Error("polyfill failed because global object is unavailable in this environment")
            }
            var e = t.Promise;
            if (e) {
              var n = null;
              try {
                n = Object.prototype.toString.call(e.resolve())
              } catch (t) {}
              if ("[object Promise]" === n && !e.cast) return
            }
            t.Promise = B
          }
          var z = void 0;
          z = Array.isArray ? Array.isArray : function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
          };
          var K = z,
            U = 0,
            W = void 0,
            G = void 0,
            H = function (t, e) {
              Z[U] = t, Z[U + 1] = e, 2 === (U += 2) && (G ? G(s) : $())
            },
            J = "undefined" != typeof window ? window : void 0,
            Q = J || {},
            R = Q.MutationObserver || Q.WebKitMutationObserver,
            V = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            X = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            Z = new Array(1e3),
            $ = void 0;
          $ = V ? function () {
            return function () {
              return process.nextTick(s)
            }
          }() : R ? function () {
            var t = 0,
              e = new R(s),
              n = document.createTextNode("");
            return e.observe(n, {
                characterData: !0
              }),
              function () {
                n.data = t = ++t % 2
              }
          }() : X ? function () {
            var t = new MessageChannel;
            return t.port1.onmessage = s,
              function () {
                return t.port2.postMessage(0)
              }
          }() : void 0 === J && "function" == typeof e ? function () {
            try {
              var t = e,
                n = t("vertx");
              return W = n.runOnLoop || n.runOnContext, i()
            } catch (t) {
              return u()
            }
          }() : u();
          var tt = Math.random().toString(36).substring(16),
            et = void 0,
            nt = 1,
            rt = 2,
            ot = new M,
            it = new M,
            ut = 0;
          return C.prototype._enumerate = function () {
            for (var t = this.length, e = this._input, n = 0; this._state === et && n < t; n++) this._eachEntry(e[n], n)
          }, C.prototype._eachEntry = function (t, e) {
            var n = this._instanceConstructor,
              r = n.resolve;
            if (r === l) {
              var o = v(t);
              if (o === c && t._state !== et) this._settledAt(t._state, e, t._result);
              else if ("function" != typeof o) this._remaining--, this._result[e] = t;
              else if (n === B) {
                var i = new n(d);
                b(i, t, o), this._willSettleAt(i, e)
              } else this._willSettleAt(new n(function (e) {
                return e(t)
              }), e)
            } else this._willSettleAt(r(t), e)
          }, C.prototype._settledAt = function (t, e, n) {
            var r = this.promise;
            r._state === et && (this._remaining--, t === rt ? k(r, n) : this._result[e] = n), 0 === this._remaining && x(r, this._result)
          }, C.prototype._willSettleAt = function (t, e) {
            var n = this;
            A(t, void 0, function (t) {
              return n._settledAt(nt, e, t)
            }, function (t) {
              return n._settledAt(rt, e, t)
            })
          }, B.all = L, B.race = I, B.resolve = l, B.reject = F, B._setScheduler = r, B._setAsap = o, B._asap = H, B.prototype = {
            constructor: B,
            then: c,
            catch: function (t) {
              return this.then(null, t)
            }
          }, B.polyfill = D, B.Promise = B, B
        }()
      }()
    }),
    d = r,
    h = o,
    p = i,
    v = u,
    y = Array.isArray,
    _ = y,
    m = s,
    b = n(function (t, e) {
      function n(t) {
        return function () {
          if (null === t) throw new Error("Callback was already called.");
          var e = t;
          t = null, e.apply(this, arguments)
        }
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = n, t.exports = e.default
    }),
    g = n(function (t, e) {
      function n(t, e) {
        e |= 0;
        for (var n = Math.max(t.length - e, 0), r = Array(n), o = 0; o < n; o++) r[o] = t[e + o];
        return r
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = n, t.exports = e.default
    }),
    w = n(function (t, e) {
      function n(t) {
        setTimeout(t, 0)
      }

      function r(t) {
        return function (e) {
          var n = (0, i.default)(arguments, 1);
          t(function () {
            e.apply(null, n)
          })
        }
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.hasNextTick = e.hasSetImmediate = void 0, e.fallback = n, e.wrap = r;
      var o, i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(g),
        u = e.hasSetImmediate = "function" == typeof setImmediate && setImmediate,
        s = e.hasNextTick = "object" === ("undefined" == typeof process ? "undefined" : f(process)) && "function" == typeof process.nextTick;
      o = u ? setImmediate : s ? process.nextTick : n, e.default = r(o)
    }),
    x = n(function (t, e) {
      function n() {
        this.head = this.tail = null, this.length = 0
      }

      function r(t, e) {
        t.length = 1, t.head = t.tail = e
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = n, n.prototype.removeLink = function (t) {
        return t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev, t.prev = t.next = null, this.length -= 1, t
      }, n.prototype.empty = function () {
        for (; this.head;) this.shift();
        return this
      }, n.prototype.insertAfter = function (t, e) {
        e.prev = t, e.next = t.next, t.next ? t.next.prev = e : this.tail = e, t.next = e, this.length += 1
      }, n.prototype.insertBefore = function (t, e) {
        e.prev = t.prev, e.next = t, t.prev ? t.prev.next = e : this.head = e, t.prev = e, this.length += 1
      }, n.prototype.unshift = function (t) {
        this.head ? this.insertBefore(this.head, t) : r(this, t)
      }, n.prototype.push = function (t) {
        this.tail ? this.insertAfter(this.tail, t) : r(this, t)
      }, n.prototype.shift = function () {
        return this.head && this.removeLink(this.head)
      }, n.prototype.pop = function () {
        return this.tail && this.removeLink(this.tail)
      }, n.prototype.toArray = function () {
        for (var t = Array(this.length), e = this.head, n = 0; n < this.length; n++) t[n] = e.data, e = e.next;
        return t
      }, n.prototype.remove = function (t) {
        for (var e = this.head; e;) {
          var n = e.next;
          t(e) && this.removeLink(e), e = n
        }
        return this
      }, t.exports = e.default
    }),
    k = c,
    A = n(function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function (t) {
        return function () {
          var e = (0, n.default)(arguments),
            r = e.pop();
          t.call(this, e, r)
        }
      };
      var n = function (t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(g);
      t.exports = e.default
    }),
    j = n(function (t, e) {
      function n(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function r(t) {
        return (0, s.default)(function (e, n) {
          var r;
          try {
            r = t.apply(this, e)
          } catch (t) {
            return n(t)
          }(0, u.default)(r) && "function" == typeof r.then ? r.then(function (t) {
            o(n, null, t)
          }, function (t) {
            o(n, t.message ? t : new Error(t))
          }) : n(null, r)
        })
      }

      function o(t, e, n) {
        try {
          t(e, n)
        } catch (t) {
          (0, c.default)(i, t)
        }
      }

      function i(t) {
        throw t
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = r;
      var u = n(k),
        s = n(A),
        c = n(w);
      t.exports = e.default
    }),
    M = n(function (t, e) {
      function n(t) {
        return i && "AsyncFunction" === t[Symbol.toStringTag]
      }

      function r(t) {
        return n(t) ? (0, o.default)(t) : t
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.isAsync = void 0;
      var o = function (t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(j),
        i = "function" == typeof Symbol;
      e.default = r, e.isAsync = n
    }),
    S = n(function (t, e) {
      function n(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function r(t, e, n) {
        function r(t, e, n) {
          if (null != n && "function" != typeof n) throw new Error("task callback must be a function");
          if (y.started = !0, (0, i.default)(t) || (t = [t]), 0 === t.length && y.idle()) return (0, c.default)(function () {
            y.drain()
          });
          for (var r = 0, o = t.length; r < o; r++) {
            var s = {
              data: t[r],
              callback: n || u.default
            };
            e ? y._tasks.unshift(s) : y._tasks.push(s)
          }(0, c.default)(y.process)
        }

        function l(t) {
          return function (e) {
            h -= 1;
            for (var n = 0, r = t.length; n < r; n++) {
              var i = t[n],
                u = (0, o.default)(p, i, 0);
              u >= 0 && p.splice(u), i.callback.apply(i, arguments), null != e && y.error(e, i.data)
            }
            h <= y.concurrency - y.buffer && y.unsaturated(), y.idle() && y.drain(), y.process()
          }
        }
        if (null == e) e = 1;
        else if (0 === e) throw new Error("Concurrency must not be zero");
        var d = (0, f.default)(t),
          h = 0,
          p = [],
          v = !1,
          y = {
            _tasks: new a.default,
            concurrency: e,
            payload: n,
            saturated: u.default,
            unsaturated: u.default,
            buffer: e / 4,
            empty: u.default,
            drain: u.default,
            error: u.default,
            started: !1,
            paused: !1,
            push: function (t, e) {
              r(t, !1, e)
            },
            kill: function () {
              y.drain = u.default, y._tasks.empty()
            },
            unshift: function (t, e) {
              r(t, !0, e)
            },
            remove: function (t) {
              y._tasks.remove(t)
            },
            process: function () {
              if (!v) {
                for (v = !0; !y.paused && h < y.concurrency && y._tasks.length;) {
                  var t = [],
                    e = [],
                    n = y._tasks.length;
                  y.payload && (n = Math.min(n, y.payload));
                  for (var r = 0; r < n; r++) {
                    var o = y._tasks.shift();
                    t.push(o), e.push(o.data)
                  }
                  h += 1, p.push(t[0]), 0 === y._tasks.length && y.empty(), h === y.concurrency && y.saturated();
                  var i = (0, s.default)(l(t));
                  d(e, i)
                }
                v = !1
              }
            },
            length: function () {
              return y._tasks.length
            },
            running: function () {
              return h
            },
            workersList: function () {
              return p
            },
            idle: function () {
              return y._tasks.length + h === 0
            },
            pause: function () {
              y.paused = !0
            },
            resume: function () {
              !1 !== y.paused && (y.paused = !1, (0, c.default)(y.process))
            }
          };
        return y
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = r;
      var o = n(v),
        i = n(_),
        u = n(m),
        s = n(b),
        c = n(w),
        a = n(x),
        f = n(M);
      t.exports = e.default
    }),
    P = n(function (t, e) {
      function n(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function (t, e) {
        var n = (0, o.default)(t);
        return (0, r.default)(function (t, e) {
          n(t[0], e)
        }, e, 1)
      };
      var r = n(S),
        o = n(M);
      t.exports = e.default
    }),
    O = function (t) {
      return t && t.__esModule ? t.default : t
    }(P),
    E = {
      request: wx.request,
      Promise: l,
      concurrency: 10
    },
    T = O(function (t, e) {
      return t(e)
    }, E.concurrency),
    C = function (t) {
      return new E.Promise(function (e, n) {
        T.push(function (r) {
          E.request(Object.assign({}, t, {
            success: e,
            fail: n,
            complete: r
          }))
        })
      })
    },
    q = function (t) {
      var e = t.concurrency !== E.concurrency;
      E = Object.assign({}, E, t), e && (T.concurrency = E.concurrency)
    };
  t.request = C, t.setConfig = q, t.Promise = l, Object.defineProperty(t, "__esModule", {
    value: !0
  })
});