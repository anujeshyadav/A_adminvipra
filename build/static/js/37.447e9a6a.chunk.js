(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [37],
  {
    1096: function (e, t, n) {
      "use strict";
      var a = n(6),
        l = n(10),
        o = n(1),
        c = n.n(o),
        r = n(2),
        i = n.n(r),
        s = n(5),
        p = n.n(s),
        u = n(4),
        m = [
          "className",
          "listClassName",
          "cssModule",
          "children",
          "tag",
          "listTag",
          "aria-label",
        ],
        b = {
          tag: u.tagPropType,
          listTag: u.tagPropType,
          className: i.a.string,
          listClassName: i.a.string,
          cssModule: i.a.object,
          children: i.a.node,
          "aria-label": i.a.string,
        },
        d = function (e) {
          var t = e.className,
            n = e.listClassName,
            o = e.cssModule,
            r = e.children,
            i = e.tag,
            s = e.listTag,
            b = e["aria-label"],
            d = Object(l.a)(e, m),
            h = Object(u.mapToCssModules)(p()(t), o),
            g = Object(u.mapToCssModules)(p()("breadcrumb", n), o);
          return c.a.createElement(
            i,
            Object(a.a)({}, d, { className: h, "aria-label": b }),
            c.a.createElement(s, { className: g }, r)
          );
        };
      (d.propTypes = b),
        (d.defaultProps = {
          tag: "nav",
          listTag: "ol",
          "aria-label": "breadcrumb",
        }),
        (t.a = d);
    },
    1097: function (e, t, n) {
      "use strict";
      var a = n(6),
        l = n(10),
        o = n(1),
        c = n.n(o),
        r = n(2),
        i = n.n(r),
        s = n(5),
        p = n.n(s),
        u = n(4),
        m = ["className", "cssModule", "active", "tag"],
        b = {
          tag: u.tagPropType,
          active: i.a.bool,
          className: i.a.string,
          cssModule: i.a.object,
        },
        d = function (e) {
          var t = e.className,
            n = e.cssModule,
            o = e.active,
            r = e.tag,
            i = Object(l.a)(e, m),
            s = Object(u.mapToCssModules)(
              p()(t, !!o && "active", "breadcrumb-item"),
              n
            );
          return c.a.createElement(
            r,
            Object(a.a)({}, i, {
              className: s,
              "aria-current": o ? "page" : void 0,
            })
          );
        };
      (d.propTypes = b), (d.defaultProps = { tag: "li" }), (t.a = d);
    },
    1098: function (e, t, n) {
      "use strict";
      var a = n(6),
        l = n(10),
        o = n(1),
        c = n.n(o),
        r = n(2),
        i = n.n(r),
        s = n(5),
        p = n.n(s),
        u = n(4),
        m = ["className", "cssModule", "noGutters", "tag", "form", "widths"],
        b = i.a.oneOfType([i.a.number, i.a.string]),
        d = {
          tag: u.tagPropType,
          noGutters: i.a.bool,
          className: i.a.string,
          cssModule: i.a.object,
          form: i.a.bool,
          xs: b,
          sm: b,
          md: b,
          lg: b,
          xl: b,
        },
        h = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        g = function (e) {
          var t = e.className,
            n = e.cssModule,
            o = e.noGutters,
            r = e.tag,
            i = e.form,
            s = e.widths,
            b = Object(l.a)(e, m),
            d = [];
          s.forEach(function (t, n) {
            var a = e[t];
            if ((delete b[t], a)) {
              var l = !n;
              d.push(l ? "row-cols-" + a : "row-cols-" + t + "-" + a);
            }
          });
          var h = Object(u.mapToCssModules)(
            p()(t, o ? "no-gutters" : null, i ? "form-row" : "row", d),
            n
          );
          return c.a.createElement(r, Object(a.a)({}, b, { className: h }));
        };
      (g.propTypes = d), (g.defaultProps = h), (t.a = g);
    },
    1099: function (e, t, n) {
      "use strict";
      var a = n(6),
        l = n(10),
        o = n(1),
        c = n.n(o),
        r = n(2),
        i = n.n(r),
        s = n(5),
        p = n.n(s),
        u = n(4),
        m = ["className", "cssModule", "widths", "tag"],
        b = i.a.oneOfType([i.a.number, i.a.string]),
        d = i.a.oneOfType([
          i.a.bool,
          i.a.number,
          i.a.string,
          i.a.shape({
            size: i.a.oneOfType([i.a.bool, i.a.number, i.a.string]),
            order: b,
            offset: b,
          }),
        ]),
        h = {
          tag: u.tagPropType,
          xs: d,
          sm: d,
          md: d,
          lg: d,
          xl: d,
          className: i.a.string,
          cssModule: i.a.object,
          widths: i.a.array,
        },
        g = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        f = function (e, t, n) {
          return !0 === n || "" === n
            ? e
              ? "col"
              : "col-" + t
            : "auto" === n
            ? e
              ? "col-auto"
              : "col-" + t + "-auto"
            : e
            ? "col-" + n
            : "col-" + t + "-" + n;
        },
        y = function (e) {
          var t = e.className,
            n = e.cssModule,
            o = e.widths,
            r = e.tag,
            i = Object(l.a)(e, m),
            s = [];
          o.forEach(function (t, a) {
            var l = e[t];
            if ((delete i[t], l || "" === l)) {
              var o = !a;
              if (Object(u.isObject)(l)) {
                var c,
                  r = o ? "-" : "-" + t + "-",
                  m = f(o, t, l.size);
                s.push(
                  Object(u.mapToCssModules)(
                    p()(
                      (((c = {})[m] = l.size || "" === l.size),
                      (c["order" + r + l.order] = l.order || 0 === l.order),
                      (c["offset" + r + l.offset] = l.offset || 0 === l.offset),
                      c)
                    ),
                    n
                  )
                );
              } else {
                var b = f(o, t, l);
                s.push(b);
              }
            }
          }),
            s.length || s.push("col");
          var b = Object(u.mapToCssModules)(p()(t, s), n);
          return c.a.createElement(r, Object(a.a)({}, i, { className: b }));
        };
      (y.propTypes = h), (y.defaultProps = g), (t.a = y);
    },
    1100: function (e, t, n) {
      "use strict";
      var a = n(6),
        l = n(10),
        o = n(1),
        c = n.n(o),
        r = n(2),
        i = n.n(r),
        s = n(5),
        p = n.n(s),
        u = n(4),
        m = [
          "className",
          "cssModule",
          "color",
          "body",
          "inverse",
          "outline",
          "tag",
          "innerRef",
        ],
        b = {
          tag: u.tagPropType,
          inverse: i.a.bool,
          color: i.a.string,
          body: i.a.bool,
          outline: i.a.bool,
          className: i.a.string,
          cssModule: i.a.object,
          innerRef: i.a.oneOfType([i.a.object, i.a.string, i.a.func]),
        },
        d = function (e) {
          var t = e.className,
            n = e.cssModule,
            o = e.color,
            r = e.body,
            i = e.inverse,
            s = e.outline,
            b = e.tag,
            d = e.innerRef,
            h = Object(l.a)(e, m),
            g = Object(u.mapToCssModules)(
              p()(
                t,
                "card",
                !!i && "text-white",
                !!r && "card-body",
                !!o && (s ? "border" : "bg") + "-" + o
              ),
              n
            );
          return c.a.createElement(
            b,
            Object(a.a)({}, h, { className: g, ref: d })
          );
        };
      (d.propTypes = b), (d.defaultProps = { tag: "div" }), (t.a = d);
    },
    1101: function (e, t, n) {
      "use strict";
      var a = n(6),
        l = n(10),
        o = n(1),
        c = n.n(o),
        r = n(2),
        i = n.n(r),
        s = n(5),
        p = n.n(s),
        u = n(4),
        m = ["className", "cssModule", "tag"],
        b = {
          tag: u.tagPropType,
          className: i.a.string,
          cssModule: i.a.object,
        },
        d = function (e) {
          var t = e.className,
            n = e.cssModule,
            o = e.tag,
            r = Object(l.a)(e, m),
            i = Object(u.mapToCssModules)(p()(t, "card-header"), n);
          return c.a.createElement(o, Object(a.a)({}, r, { className: i }));
        };
      (d.propTypes = b), (d.defaultProps = { tag: "div" }), (t.a = d);
    },
    1102: function (e, t, n) {
      "use strict";
      var a = n(6),
        l = n(10),
        o = n(1),
        c = n.n(o),
        r = n(2),
        i = n.n(r),
        s = n(5),
        p = n.n(s),
        u = n(4),
        m = ["className", "cssModule", "tag"],
        b = {
          tag: u.tagPropType,
          className: i.a.string,
          cssModule: i.a.object,
        },
        d = function (e) {
          var t = e.className,
            n = e.cssModule,
            o = e.tag,
            r = Object(l.a)(e, m),
            i = Object(u.mapToCssModules)(p()(t, "card-title"), n);
          return c.a.createElement(o, Object(a.a)({}, r, { className: i }));
        };
      (d.propTypes = b), (d.defaultProps = { tag: "div" }), (t.a = d);
    },
    1103: function (e, t, n) {
      "use strict";
      var a = n(6),
        l = n(10),
        o = n(1),
        c = n.n(o),
        r = n(2),
        i = n.n(r),
        s = n(5),
        p = n.n(s),
        u = n(4),
        m = ["className", "cssModule", "innerRef", "tag"],
        b = {
          tag: u.tagPropType,
          className: i.a.string,
          cssModule: i.a.object,
          innerRef: i.a.oneOfType([i.a.object, i.a.string, i.a.func]),
        },
        d = function (e) {
          var t = e.className,
            n = e.cssModule,
            o = e.innerRef,
            r = e.tag,
            i = Object(l.a)(e, m),
            s = Object(u.mapToCssModules)(p()(t, "card-body"), n);
          return c.a.createElement(
            r,
            Object(a.a)({}, i, { className: s, ref: o })
          );
        };
      (d.propTypes = b), (d.defaultProps = { tag: "div" }), (t.a = d);
    },
    1104: function (e, t, n) {
      "use strict";
      var a = n(6),
        l = n(10),
        o = n(1),
        c = n.n(o),
        r = n(2),
        i = n.n(r),
        s = n(5),
        p = n.n(s),
        u = n(4),
        m = ["className", "cssModule", "tag", "flush", "horizontal"],
        b = {
          tag: u.tagPropType,
          flush: i.a.bool,
          className: i.a.string,
          cssModule: i.a.object,
          horizontal: i.a.oneOfType([i.a.bool, i.a.string]),
        },
        d = function (e) {
          var t = e.className,
            n = e.cssModule,
            o = e.tag,
            r = e.flush,
            i = e.horizontal,
            s = Object(l.a)(e, m),
            b = Object(u.mapToCssModules)(
              p()(
                t,
                "list-group",
                r
                  ? "list-group-flush"
                  : (function (e) {
                      return (
                        !1 !== e &&
                        (!0 === e || "xs" === e
                          ? "list-group-horizontal"
                          : "list-group-horizontal-" + e)
                      );
                    })(i)
              ),
              n
            );
          return c.a.createElement(o, Object(a.a)({}, s, { className: b }));
        };
      (d.propTypes = b),
        (d.defaultProps = { tag: "ul", horizontal: !1 }),
        (t.a = d);
    },
    1105: function (e, t, n) {
      "use strict";
      var a = n(6),
        l = n(10),
        o = n(1),
        c = n.n(o),
        r = n(2),
        i = n.n(r),
        s = n(5),
        p = n.n(s),
        u = n(4),
        m = [
          "className",
          "cssModule",
          "tag",
          "active",
          "disabled",
          "action",
          "color",
        ],
        b = {
          tag: u.tagPropType,
          active: i.a.bool,
          disabled: i.a.bool,
          color: i.a.string,
          action: i.a.bool,
          className: i.a.any,
          cssModule: i.a.object,
        },
        d = function (e) {
          e.preventDefault();
        },
        h = function (e) {
          var t = e.className,
            n = e.cssModule,
            o = e.tag,
            r = e.active,
            i = e.disabled,
            s = e.action,
            b = e.color,
            h = Object(l.a)(e, m),
            g = Object(u.mapToCssModules)(
              p()(
                t,
                !!r && "active",
                !!i && "disabled",
                !!s && "list-group-item-action",
                !!b && "list-group-item-" + b,
                "list-group-item"
              ),
              n
            );
          return (
            i && (h.onClick = d),
            c.a.createElement(o, Object(a.a)({}, h, { className: g }))
          );
        };
      (h.propTypes = b), (h.defaultProps = { tag: "li" }), (t.a = h);
    },
    1148: function (e, t, n) {},
    1508: function (e, t, n) {
      e.exports = n.p + "static/media/kb-article.034f99d6.jpg";
    },
    1509: function (e, t, n) {},
    1510: function (e, t, n) {},
    2196: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        l = n.n(a),
        o = n(14),
        c = n(15),
        r = n(17),
        i = n(16),
        s = n(97),
        p = n(57),
        u = n(43),
        m = n(28),
        b = n(27),
        d =
          (n(580),
          (function (e) {
            Object(r.a)(n, e);
            var t = Object(i.a)(n);
            function n() {
              return Object(o.a)(this, n), t.apply(this, arguments);
            }
            return (
              Object(c.a)(n, [
                {
                  key: "render",
                  value: function () {
                    return l.a.createElement(
                      "div",
                      { className: "fallback-spinner" },
                      l.a.createElement(
                        "div",
                        { className: "loading component-loader" },
                        l.a.createElement("div", {
                          className: "effect-1 effects",
                        }),
                        l.a.createElement("div", {
                          className: "effect-2 effects",
                        }),
                        l.a.createElement("div", {
                          className: "effect-3 effects",
                        })
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(l.a.Component)),
        h = d,
        g = n(1098),
        f = n(1099),
        y = n(1100),
        E = n(1101),
        j = n(1102),
        O = n(1103),
        z = n(1104),
        P = n(1105),
        v = n(799),
        k =
          (n(1148),
          (function (e) {
            Object(r.a)(n, e);
            var t = Object(i.a)(n);
            function n() {
              return Object(o.a)(this, n), t.apply(this, arguments);
            }
            return (
              Object(c.a)(n, [
                {
                  key: "render",
                  value: function () {
                    return l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(v.a, {
                        breadCrumbTitle: "Category",
                        breadCrumbParent: "Pages",
                        breadCrumbParent2: "Knowledge Base",
                        breadCrumbActive: "Category",
                      }),
                      l.a.createElement(
                        g.a,
                        null,
                        l.a.createElement(
                          f.a,
                          { sm: "12" },
                          l.a.createElement(
                            "p",
                            null,
                            "petiole antimasquer nonenduring hoofish unbed anergic sweetwood ailsyte."
                          )
                        ),
                        l.a.createElement(
                          f.a,
                          { lg: "4", md: "6", sm: "12" },
                          l.a.createElement(
                            y.a,
                            null,
                            l.a.createElement(
                              E.a,
                              null,
                              l.a.createElement(j.a, null, "Buying")
                            ),
                            l.a.createElement(
                              O.a,
                              { className: "knowledge-base-category" },
                              l.a.createElement(
                                z.a,
                                { flush: !0 },
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Cake icing gummi bears?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Jelly souffl\xe9 apple pie?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Souffl\xe9 apple pie ice cream cotton?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Powder wafer brownie?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Toffee donut drag\xe9e cotton candy?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Souffl\xe9 chupa chups chocolate bar?"
                                  )
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          f.a,
                          { lg: "4", md: "6", sm: "12" },
                          l.a.createElement(
                            y.a,
                            null,
                            l.a.createElement(
                              E.a,
                              null,
                              l.a.createElement(j.a, null, "Item Support")
                            ),
                            l.a.createElement(
                              O.a,
                              { className: "knowledge-base-category" },
                              l.a.createElement(
                                z.a,
                                { flush: !0 },
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Dessert halvah carrot cake sweet?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Jelly beans bonbon marshmallow?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Marzipan chocolate gummi bears bonbon powder?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Chupa chups lemon drops caramels?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Cake icing gummi bears?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Souffl\xe9 apple pie ice cream cotton?"
                                  )
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          f.a,
                          { lg: "4", md: "6", sm: "12" },
                          l.a.createElement(
                            y.a,
                            null,
                            l.a.createElement(
                              E.a,
                              null,
                              l.a.createElement(j.a, null, "Payments")
                            ),
                            l.a.createElement(
                              O.a,
                              { className: "knowledge-base-category" },
                              l.a.createElement(
                                z.a,
                                { flush: !0 },
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Oat cake lemon drops sweet sweet?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Cotton candy brownie ice cream wafer roll?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Chocolate bonbon cake sugar plum?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Cake fruitcake chupa chups?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Chupa chups lemon drops caramels?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Fruitcake bonbon dessert gingerbread powder?"
                                  )
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          f.a,
                          { lg: "4", md: "6", sm: "12" },
                          l.a.createElement(
                            y.a,
                            null,
                            l.a.createElement(
                              E.a,
                              null,
                              l.a.createElement(j.a, null, "Downloads")
                            ),
                            l.a.createElement(
                              O.a,
                              { className: "knowledge-base-category" },
                              l.a.createElement(
                                z.a,
                                { flush: !0 },
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Marshmallow jelly beans oat cake?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Cake ice cream jujubes cookie?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Sesame snaps tart cake pie chocolate?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Chocolate cake chocolate tootsi?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Caramels lemon drops tiramisu cake?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Brownie dessert gummies. Tiramisu bear claw apple?"
                                  )
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          f.a,
                          { lg: "4", md: "6", sm: "12" },
                          l.a.createElement(
                            y.a,
                            null,
                            l.a.createElement(
                              E.a,
                              null,
                              l.a.createElement(j.a, null, "Licenses")
                            ),
                            l.a.createElement(
                              O.a,
                              { className: "knowledge-base-category" },
                              l.a.createElement(
                                z.a,
                                { flush: !0 },
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Macaroon tootsie roll?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Cheesecake sweet souffl\xe9 jelly tiramisu chocolate?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Carrot cake topping tiramisu oat?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Ice cream souffl\xe9 marshmallow?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Drag\xe9e liquorice drag\xe9e jelly beans?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Lemon drops gingerbread chupa chups tiramisu?"
                                  )
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          f.a,
                          { lg: "4", md: "6", sm: "12" },
                          l.a.createElement(
                            y.a,
                            null,
                            l.a.createElement(
                              E.a,
                              null,
                              l.a.createElement(j.a, null, "Documents")
                            ),
                            l.a.createElement(
                              O.a,
                              { className: "knowledge-base-category" },
                              l.a.createElement(
                                z.a,
                                { flush: !0 },
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Brownie dessert gummies?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Cookie tiramisu lollipop?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Bonbon sugar plum jelly-o?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Ice cream souffl\xe9 marshmallow?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Halvah chupa chups chupa chups?"
                                  )
                                ),
                                l.a.createElement(
                                  P.a,
                                  null,
                                  l.a.createElement(
                                    u.b,
                                    {
                                      to: "/pages/knowledge-base/category/questions",
                                    },
                                    "Cheesecake sweet souffl\xe9 jelly tiramisu chocolate?"
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(l.a.Component)),
        x = k,
        w = n(280),
        C = n(279),
        N = n(1508),
        T = n.n(N),
        L = (function (e) {
          Object(r.a)(n, e);
          var t = Object(i.a)(n);
          function n() {
            return Object(o.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(c.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(v.a, {
                      breadCrumbTitle: "Question",
                      breadCrumbParent: "Pages",
                      breadCrumbParent2: "Knowledge Base",
                      breadCrumbParent3: "Content",
                      breadCrumbActive: "Question",
                    }),
                    l.a.createElement(
                      g.a,
                      null,
                      l.a.createElement(
                        f.a,
                        { lg: "3", md: "5", sm: "12" },
                        l.a.createElement(
                          y.a,
                          null,
                          l.a.createElement(
                            E.a,
                            null,
                            l.a.createElement(j.a, null, "Related Questions")
                          ),
                          l.a.createElement(
                            O.a,
                            { className: "knowledge-base-category" },
                            l.a.createElement(
                              z.a,
                              { flush: !0 },
                              l.a.createElement(
                                P.a,
                                { tag: "a", href: "#" },
                                "Cake icing gummi bears?"
                              ),
                              l.a.createElement(
                                P.a,
                                { tag: "a", href: "#" },
                                "Jelly souffl\xe9 apple pie?"
                              ),
                              l.a.createElement(
                                P.a,
                                { tag: "a", href: "#" },
                                "Souffl\xe9 apple pie ice cream cotton?"
                              ),
                              l.a.createElement(
                                P.a,
                                { tag: "a", href: "#" },
                                "Powder wafer brownie?"
                              ),
                              l.a.createElement(
                                P.a,
                                { tag: "a", href: "#" },
                                "Toffee donut drag\xe9e cotton candy?"
                              ),
                              l.a.createElement(
                                P.a,
                                { tag: "a", href: "#" },
                                "Souffl\xe9 chupa chups chocolate bar?"
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        f.a,
                        { lg: "9", md: "7", sm: "12" },
                        l.a.createElement(
                          y.a,
                          null,
                          l.a.createElement(
                            E.a,
                            null,
                            l.a.createElement(
                              "h1",
                              null,
                              "Dessert halvah carrot cake sweet?"
                            ),
                            l.a.createElement(
                              "p",
                              null,
                              "Last updated on 10 Dec 2018"
                            )
                          ),
                          l.a.createElement(
                            O.a,
                            null,
                            l.a.createElement(
                              "p",
                              null,
                              "Pastry jelly chocolate bar caramels fruitcake gummies marshmallow lemon drops. Powder cupcake topping muffin carrot cake croissant souffl\xe9 sugar plum sweet roll. Cotton candy ice cream gummies biscuit bonbon biscuit. Icing pastry bonbon. Sweet roll chocolate cake liquorice jelly beans caramels jelly cookie caramels. Pastry candy canes cake powder lollipop tootsie roll sugar plum. Cake cotton candy drag\xe9e danish. Muffin croissant sweet roll candy wafer marzipan cheesecake. Carrot cake toffee gummi bears gingerbread donut biscuit. Donut chupa chups oat cake cheesecake apple pie gummies marzipan icing cake. Macaroon jelly beans gummi bears carrot cake tiramisu liquorice. Sweet tootsie roll cookie marzipan brownie icing cookie jelly tart. Lollipop cookie tootsie roll candy canes."
                            ),
                            l.a.createElement("img", {
                              src: T.a,
                              alt: "article img",
                              className: "img-fluid rounded-sm mb-1 w-100",
                            }),
                            l.a.createElement(
                              "p",
                              null,
                              "Candy canes oat cake biscuit halvah ice cream. Marshmallow icing topping toffee caramels dessert carrot cake. Liquorice souffl\xe9 brownie sugar plum dessert cotton candy. Cupcake halvah topping oat cake souffl\xe9 pastry drag\xe9e pudding cotton candy."
                            ),
                            l.a.createElement(
                              "h5",
                              { className: "mb-1" },
                              "Topics:"
                            ),
                            l.a.createElement(
                              "ul",
                              {
                                className: "article-question p-0 list-unstyled",
                              },
                              l.a.createElement(
                                "li",
                                null,
                                l.a.createElement(w.a, { size: 16 }),
                                l.a.createElement(
                                  "span",
                                  { className: "align-middle" },
                                  "Pastry jelly chocolate bar caramels"
                                )
                              ),
                              l.a.createElement(
                                "li",
                                null,
                                l.a.createElement(w.a, { size: 16 }),
                                l.a.createElement(
                                  "span",
                                  { className: "align-middle" },
                                  "Donut chupa chups oat cake"
                                )
                              ),
                              l.a.createElement(
                                "li",
                                null,
                                l.a.createElement(w.a, { size: 16 }),
                                l.a.createElement(
                                  "span",
                                  { className: "align-middle" },
                                  "Marshmallow icing topping toffee caramels dessert carrot cake"
                                )
                              )
                            ),
                            l.a.createElement(
                              "p",
                              { className: "mt-2" },
                              "Chocolate cake powder I love jelly beans lemon drops candy fruitcake. Sesame snaps sugar plum chocolate candy canes muffin. Wafer pastry topping croissant pudding dessert I love. Bonbon apple pie fruitcake candy canes I love. Lollipop sweet gingerbread I love I love dessert. I love halvah marshmallow pie jelly beans macaroon candy. Bonbon ice cream lollipop pie fruitcake oat cake. Topping marshmallow I love sesame snaps drag\xe9e. I love sesame snaps jelly. Chocolate sesame snaps jelly I love I love powder jelly-o."
                            ),
                            l.a.createElement(
                              "div",
                              {
                                className:
                                  "d-flex justify-content-between mt-2",
                              },
                              l.a.createElement(
                                u.b,
                                { to: "#" },
                                l.a.createElement(C.a, { size: 15 }),
                                l.a.createElement(
                                  "span",
                                  { className: "align-middle" },
                                  "Previous Article"
                                )
                              ),
                              l.a.createElement(
                                u.b,
                                { to: "#" },
                                l.a.createElement(
                                  "span",
                                  { className: "align-middle" },
                                  "Next Article"
                                ),
                                l.a.createElement(w.a, { size: 15 })
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component),
        M = L,
        q = n(173),
        B = ["component", "fullLayout"],
        S = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(222)]).then(
            n.bind(null, 2009)
          );
        }),
        R = Object(a.lazy)(function () {
          return Promise.all([n.e(75), n.e(292)]).then(n.bind(null, 2010));
        }),
        I = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(179)]).then(
            n.bind(null, 2011)
          );
        }),
        A = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(89), n.e(238)]).then(
            n.bind(null, 2012)
          );
        }),
        H = Object(a.lazy)(function () {
          return Promise.all([n.e(4), n.e(119), n.e(231)]).then(
            n.bind(null, 2013)
          );
        }),
        D = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(132)]).then(
            n.bind(null, 2014)
          );
        }),
        U = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(189)]).then(
            n.bind(null, 2015)
          );
        }),
        _ = Object(a.lazy)(function () {
          return Promise.all([n.e(6), n.e(56)]).then(n.bind(null, 2235));
        }),
        F = Object(a.lazy)(function () {
          return Promise.all([n.e(11), n.e(38)]).then(n.bind(null, 2016));
        }),
        J = Object(a.lazy)(function () {
          return Promise.all([n.e(6), n.e(7), n.e(8), n.e(12), n.e(28)]).then(
            n.bind(null, 2246)
          );
        }),
        G = Object(a.lazy)(function () {
          return Promise.all([n.e(21), n.e(136)]).then(n.bind(null, 2017));
        }),
        Q = Object(a.lazy)(function () {
          return Promise.all([n.e(7), n.e(10), n.e(13), n.e(17), n.e(34)]).then(
            n.bind(null, 2224)
          );
        }),
        W = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(63)]).then(
            n.bind(null, 2018)
          );
        }),
        K = Object(a.lazy)(function () {
          return n.e(224).then(n.bind(null, 2019));
        }),
        V = Object(a.lazy)(function () {
          return n.e(153).then(n.bind(null, 2020));
        }),
        X = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(85)]).then(n.bind(null, 2021));
        }),
        Y = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(208)]).then(
            n.bind(null, 2022)
          );
        }),
        Z = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(211)]).then(
            n.bind(null, 2023)
          );
        }),
        $ = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(209)]).then(
            n.bind(null, 2024)
          );
        }),
        ee = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(95), n.e(252)]).then(
            n.bind(null, 2025)
          );
        }),
        te = Object(a.lazy)(function () {
          return n.e(210).then(n.bind(null, 2026));
        }),
        ne = Object(a.lazy)(function () {
          return n.e(289).then(n.t.bind(null, 2027, 7));
        }),
        ae = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(178)]).then(
            n.bind(null, 2028)
          );
        }),
        le = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(96), n.e(237)]).then(
            n.bind(null, 2029)
          );
        }),
        oe = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(137)]).then(
            n.bind(null, 2030)
          );
        }),
        ce = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(5), n.e(120), n.e(180)]).then(
            n.bind(null, 2031)
          );
        }),
        re = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(9), n.e(280)]).then(
            n.bind(null, 2032)
          );
        }),
        ie = Object(a.lazy)(function () {
          return Promise.all([n.e(5), n.e(181)]).then(n.bind(null, 2033));
        }),
        se = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(186)]).then(
            n.bind(null, 2034)
          );
        }),
        pe = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(226)]).then(
            n.bind(null, 2035)
          );
        }),
        ue = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(225)]).then(
            n.bind(null, 2036)
          );
        }),
        me = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(166)]).then(
            n.bind(null, 2037)
          );
        }),
        be = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(223)]).then(
            n.bind(null, 2038)
          );
        }),
        de = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(185)]).then(
            n.bind(null, 2039)
          );
        }),
        he = Object(a.lazy)(function () {
          return n.e(284).then(n.t.bind(null, 2040, 7));
        }),
        ge = Object(a.lazy)(function () {
          return n.e(285).then(n.t.bind(null, 2041, 7));
        }),
        fe = Object(a.lazy)(function () {
          return Promise.all([n.e(6), n.e(264)]).then(n.bind(null, 1404));
        }),
        ye = Object(a.lazy)(function () {
          return Promise.all([n.e(6), n.e(266)]).then(n.bind(null, 1405));
        }),
        Ee = Object(a.lazy)(function () {
          return Promise.all([n.e(6), n.e(267)]).then(n.bind(null, 1406));
        }),
        je = Object(a.lazy)(function () {
          return Promise.all([n.e(6), n.e(265)]).then(n.bind(null, 1407));
        }),
        Oe = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(172)]).then(
            n.bind(null, 2042)
          );
        }),
        ze = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(170)]).then(
            n.bind(null, 2043)
          );
        }),
        Pe = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(171)]).then(
            n.bind(null, 2044)
          );
        }),
        ve = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(203)]).then(
            n.bind(null, 2045)
          );
        }),
        ke = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(114)]).then(n.bind(null, 2046));
        }),
        xe = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(115)]).then(n.bind(null, 2047));
        }),
        we = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(174)]).then(
            n.bind(null, 2048)
          );
        }),
        Ce = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(213)]).then(
            n.bind(null, 2049)
          );
        }),
        Ne = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(212)]).then(n.bind(null, 2050));
        }),
        Te = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(188)]).then(
            n.bind(null, 2051)
          );
        }),
        Le = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(187)]).then(n.bind(null, 2052));
        }),
        Me = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(193)]).then(n.bind(null, 2053));
        }),
        qe = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(194)]).then(
            n.bind(null, 2054)
          );
        }),
        Be = Object(a.lazy)(function () {
          return Promise.all([n.e(5), n.e(195)]).then(n.bind(null, 2055));
        }),
        Se = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(196)]).then(
            n.bind(null, 2056)
          );
        }),
        Re = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(190)]).then(
            n.bind(null, 2057)
          );
        }),
        Ie = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(192)]).then(
            n.bind(null, 2058)
          );
        }),
        Ae = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(191)]).then(n.bind(null, 2059));
        }),
        He = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(97), n.e(286)]).then(
            n.bind(null, 2060)
          );
        }),
        De = Object(a.lazy)(function () {
          return n.e(140).then(n.bind(null, 2061));
        }),
        Ue = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(147)]).then(n.bind(null, 2062));
        }),
        _e = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(148)]).then(n.bind(null, 2063));
        }),
        Fe = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(202)]).then(
            n.bind(null, 2064)
          );
        }),
        Je = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(150)]).then(
            n.bind(null, 2065)
          );
        }),
        Ge = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(9), n.e(206)]).then(
            n.bind(null, 2066)
          );
        }),
        Qe = Object(a.lazy)(function () {
          return Promise.all([n.e(4), n.e(9), n.e(207)]).then(
            n.bind(null, 2067)
          );
        }),
        We = Object(a.lazy)(function () {
          return Promise.all([n.e(5), n.e(84)]).then(n.bind(null, 2068));
        }),
        Ke = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(183)]).then(
            n.bind(null, 2069)
          );
        }),
        Ve = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(184)]).then(
            n.bind(null, 2070)
          );
        }),
        Xe = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(165)]).then(
            n.bind(null, 2071)
          );
        }),
        Ye = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(138)]).then(
            n.bind(null, 2072)
          );
        }),
        Ze = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(121), n.e(239)]).then(
            n.bind(null, 2073)
          );
        }),
        $e = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(122), n.e(281)]).then(
            n.bind(null, 2074)
          );
        }),
        et = Object(a.lazy)(function () {
          return Promise.all([n.e(5), n.e(182)]).then(n.bind(null, 2075));
        }),
        tt = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(139)]).then(
            n.bind(null, 2076)
          );
        }),
        nt = Object(a.lazy)(function () {
          return n.e(282).then(n.t.bind(null, 2077, 7));
        }),
        at = Object(a.lazy)(function () {
          return n.e(283).then(n.t.bind(null, 2078, 7));
        }),
        lt = Object(a.lazy)(function () {
          return Promise.all([n.e(5), n.e(113)]).then(n.bind(null, 2079));
        }),
        ot =
          (Object(a.lazy)(function () {
            return Promise.all([n.e(1), n.e(0), n.e(173)]).then(
              n.bind(null, 2080)
            );
          }),
          Object(a.lazy)(function () {
            return Promise.all([n.e(2), n.e(0), n.e(22), n.e(236)]).then(
              n.bind(null, 2081)
            );
          })),
        ct = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(22)]).then(n.bind(null, 2001));
        }),
        rt = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(204)]).then(
            n.bind(null, 2082)
          );
        }),
        it = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(149)]).then(
            n.bind(null, 2083)
          );
        }),
        st = Object(a.lazy)(function () {
          return Promise.all([n.e(4), n.e(90), n.e(246)]).then(
            n.bind(null, 2084)
          );
        }),
        pt = Object(a.lazy)(function () {
          return Promise.all([n.e(4), n.e(9), n.e(205)]).then(
            n.bind(null, 2085)
          );
        }),
        ut = Object(a.lazy)(function () {
          return Promise.all([n.e(5), n.e(83)]).then(n.bind(null, 2086));
        }),
        mt = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(2), n.e(0), n.e(168)]).then(
            n.bind(null, 2087)
          );
        }),
        bt = Object(a.lazy)(function () {
          return n.e(167).then(n.bind(null, 2088));
        }),
        dt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(232)]).then(n.bind(null, 2089));
        }),
        ht = Object(a.lazy)(function () {
          return n.e(278).then(n.t.bind(null, 2090, 7));
        }),
        gt = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(176)]).then(
            n.bind(null, 2091)
          );
        }),
        ft = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(175)]).then(n.bind(null, 2092));
        }),
        yt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(177)]).then(n.bind(null, 2093));
        }),
        Et = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(199)]).then(
            n.bind(null, 2094)
          );
        }),
        jt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(141)]).then(n.bind(null, 2095));
        }),
        Ot = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(142)]).then(n.bind(null, 2096));
        }),
        zt = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(145)]).then(
            n.bind(null, 2097)
          );
        }),
        Pt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(123), n.e(241)]).then(
            n.bind(null, 2098)
          );
        }),
        vt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(144)]).then(n.bind(null, 2099));
        }),
        kt = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(197)]).then(
            n.bind(null, 2100)
          );
        }),
        xt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(198)]).then(n.bind(null, 2101));
        }),
        wt = Object(a.lazy)(function () {
          return n.e(287).then(n.t.bind(null, 2102, 7));
        }),
        Ct = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(201)]).then(
            n.bind(null, 2103)
          );
        }),
        Nt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(200)]).then(n.bind(null, 2104));
        }),
        Tt = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(245)]).then(
            n.bind(null, 2105)
          );
        }),
        Lt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(156), n.e(243)]).then(
            n.bind(null, 2106)
          );
        }),
        Mt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(157), n.e(244)]).then(
            n.bind(null, 2107)
          );
        }),
        qt = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(143)]).then(
            n.bind(null, 2108)
          );
        }),
        Bt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(124), n.e(240)]).then(
            n.bind(null, 2109)
          );
        }),
        St = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(146)]).then(
            n.bind(null, 2110)
          );
        }),
        Rt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(125), n.e(242)]).then(
            n.bind(null, 2111)
          );
        }),
        It = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(82)]).then(
            n.bind(null, 2112)
          );
        }),
        At = Object(a.lazy)(function () {
          return n.e(288).then(n.t.bind(null, 2113, 7));
        }),
        Ht = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(134)]).then(
            n.bind(null, 2114)
          );
        }),
        Dt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(91), n.e(233)]).then(
            n.bind(null, 2115)
          );
        }),
        Ut = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(5), n.e(92), n.e(169)]).then(
            n.bind(null, 2116)
          );
        }),
        _t = Object(a.lazy)(function () {
          return n.e(263).then(n.bind(null, 2117));
        }),
        Ft = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(135)]).then(
            n.bind(null, 2118)
          );
        }),
        Jt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(93), n.e(234)]).then(
            n.bind(null, 2119)
          );
        }),
        Gt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(94), n.e(235)]).then(
            n.bind(null, 2120)
          );
        }),
        Qt = Object(a.lazy)(function () {
          return n.e(279).then(n.t.bind(null, 2121, 7));
        }),
        Wt = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(151)]).then(
            n.bind(null, 2122)
          );
        }),
        Kt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(126), n.e(247)]).then(
            n.bind(null, 2123)
          );
        }),
        Vt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(127), n.e(248)]).then(
            n.bind(null, 2124)
          );
        }),
        Xt = Object(a.lazy)(function () {
          return n.e(249).then(n.bind(null, 2125));
        }),
        Yt = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(5), n.e(0), n.e(152)]).then(
            n.bind(null, 2126)
          );
        }),
        Zt = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(128), n.e(250)]).then(
            n.bind(null, 2127)
          );
        }),
        $t = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(4), n.e(9), n.e(251)]).then(
            n.bind(null, 2128)
          );
        }),
        en = Object(a.lazy)(function () {
          return Promise.all([n.e(5), n.e(116)]).then(n.bind(null, 2129));
        }),
        tn = Object(a.lazy)(function () {
          return n.e(214).then(n.bind(null, 2130));
        }),
        nn = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(215)]).then(
            n.bind(null, 2131)
          );
        }),
        an = Object(a.lazy)(function () {
          return n.e(216).then(n.bind(null, 2132));
        }),
        ln = Object(a.lazy)(function () {
          return n.e(253).then(n.bind(null, 2133));
        }),
        on = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(220)]).then(
            n.bind(null, 2134)
          );
        }),
        cn = Object(a.lazy)(function () {
          return n.e(219).then(n.bind(null, 2135));
        }),
        rn = Object(a.lazy)(function () {
          return n.e(290).then(n.t.bind(null, 2136, 7));
        }),
        sn = Object(a.lazy)(function () {
          return n.e(291).then(n.t.bind(null, 2137, 7));
        }),
        pn = Object(a.lazy)(function () {
          return n.e(221).then(n.bind(null, 2138));
        }),
        un = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(218)]).then(
            n.bind(null, 2139)
          );
        }),
        mn = Object(a.lazy)(function () {
          return n.e(217).then(n.bind(null, 2140));
        }),
        bn = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(268)]).then(
            n.bind(null, 2141)
          );
        }),
        dn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(261)]).then(n.bind(null, 2181));
        }),
        hn = Object(a.lazy)(function () {
          return n.e(262).then(n.bind(null, 2178));
        }),
        gn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(276)]).then(n.bind(null, 2225));
        }),
        fn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(88)]).then(n.bind(null, 2226));
        }),
        yn = Object(a.lazy)(function () {
          return n.e(260).then(n.bind(null, 2244));
        }),
        En = Object(a.lazy)(function () {
          return n.e(296).then(n.bind(null, 2142));
        }),
        jn = Object(a.lazy)(function () {
          return n.e(49).then(n.bind(null, 2219));
        }),
        On = Object(a.lazy)(function () {
          return Promise.all([n.e(11), n.e(77)]).then(n.bind(null, 2247));
        }),
        zn = Object(a.lazy)(function () {
          return Promise.all([n.e(11), n.e(58)]).then(n.bind(null, 2203));
        }),
        Pn = Object(a.lazy)(function () {
          return n.e(228).then(n.bind(null, 2143));
        }),
        vn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(52)]).then(n.bind(null, 2197));
        }),
        kn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(78)]).then(n.bind(null, 2179));
        }),
        xn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(105)]).then(n.bind(null, 2227));
        }),
        wn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(54), n.e(79)]).then(
            n.bind(null, 2204)
          );
        }),
        Cn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(68)]).then(n.bind(null, 2198));
        }),
        Nn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(51)]).then(n.bind(null, 2184));
        }),
        Tn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(106)]).then(n.bind(null, 2185));
        }),
        Ln = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(43), n.e(277)]).then(
            n.bind(null, 2187)
          );
        }),
        Mn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(60)]).then(n.bind(null, 2186));
        }),
        qn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(107)]).then(n.bind(null, 2192));
        }),
        Bn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(59)]).then(n.bind(null, 2220));
        }),
        Sn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(109)]).then(n.bind(null, 2199));
        }),
        Rn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(108)]).then(n.bind(null, 2193));
        }),
        In = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(110)]).then(n.bind(null, 2228));
        }),
        An = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(55)]).then(n.bind(null, 2221));
        }),
        Hn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(104)]).then(n.bind(null, 2188));
        }),
        Dn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(103)]).then(n.bind(null, 2194));
        }),
        Un = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(80)]).then(n.bind(null, 2205));
        }),
        _n = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(69)]).then(n.bind(null, 2206));
        }),
        Fn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(81)]).then(n.bind(null, 2189));
        }),
        Jn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(99)]).then(n.bind(null, 2200));
        }),
        Gn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(98)]).then(n.bind(null, 2201));
        }),
        Qn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(76)]).then(n.bind(null, 2207));
        }),
        Wn = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(102)]).then(n.bind(null, 2208));
        }),
        Kn = Object(a.lazy)(function () {
          return Promise.all([n.e(6), n.e(7), n.e(12), n.e(29), n.e(229)]).then(
            n.bind(null, 2236)
          );
        }),
        Vn = Object(a.lazy)(function () {
          return Promise.all([n.e(14), n.e(19), n.e(20), n.e(294)]).then(
            n.bind(null, 2144)
          );
        }),
        Xn = Object(a.lazy)(function () {
          return Promise.all([n.e(14), n.e(19), n.e(20), n.e(295)]).then(
            n.bind(null, 2145)
          );
        }),
        Yn = Object(a.lazy)(function () {
          return Promise.all([
            n.e(10),
            n.e(13),
            n.e(16),
            n.e(66),
            n.e(257),
          ]).then(n.bind(null, 2237));
        }),
        Zn = Object(a.lazy)(function () {
          return n.e(57).then(n.bind(null, 2202));
        }),
        $n = Object(a.lazy)(function () {
          return n.e(100).then(n.bind(null, 2212));
        }),
        ea = Object(a.lazy)(function () {
          return n.e(154).then(n.bind(null, 2222));
        }),
        ta = Object(a.lazy)(function () {
          return n.e(86).then(n.bind(null, 2190));
        }),
        na = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(50)]).then(n.bind(null, 2213));
        }),
        aa = Object(a.lazy)(function () {
          return Promise.all([n.e(297), n.e(269)]).then(n.bind(null, 2214));
        }),
        la = Object(a.lazy)(function () {
          return n.e(258).then(n.bind(null, 2238));
        }),
        oa = Object(a.lazy)(function () {
          return Promise.all([n.e(23), n.e(255)]).then(n.bind(null, 2245));
        }),
        ca = Object(a.lazy)(function () {
          return n.e(256).then(n.bind(null, 2215));
        }),
        ra = Object(a.lazy)(function () {
          return n.e(101).then(n.bind(null, 2209));
        }),
        ia = Object(a.lazy)(function () {
          return Promise.all([n.e(8), n.e(18), n.e(270)]).then(
            n.bind(null, 2239)
          );
        }),
        sa = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(87)]).then(n.bind(null, 2183));
        }),
        pa = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(41), n.e(259)]).then(
            n.bind(null, 2216)
          );
        }),
        ua = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(0), n.e(275)]).then(
            n.bind(null, 2146)
          );
        }),
        ma = Object(a.lazy)(function () {
          return Promise.all([n.e(14), n.e(130)]).then(n.bind(null, 2210));
        }),
        ba = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(67)]).then(n.bind(null, 2147));
        }),
        da = Object(a.lazy)(function () {
          return n.e(118).then(n.bind(null, 2240));
        }),
        ha = Object(a.lazy)(function () {
          return n.e(65).then(n.bind(null, 2241));
        }),
        ga = Object(a.lazy)(function () {
          return n.e(40).then(n.bind(null, 2242));
        }),
        fa = Object(a.lazy)(function () {
          return Promise.all([
            n.e(10),
            n.e(13),
            n.e(18),
            n.e(23),
            n.e(47),
          ]).then(n.bind(null, 2217));
        }),
        ya = Object(a.lazy)(function () {
          return n.e(64).then(n.bind(null, 2148));
        }),
        Ea = Object(a.lazy)(function () {
          return Promise.all([n.e(129), n.e(227)]).then(n.bind(null, 2149));
        }),
        ja = Object(a.lazy)(function () {
          return n.e(273).then(n.bind(null, 2150));
        }),
        Oa = Object(a.lazy)(function () {
          return n.e(274).then(n.bind(null, 2151));
        }),
        za = Object(a.lazy)(function () {
          return n.e(272).then(n.bind(null, 2152));
        }),
        Pa = Object(a.lazy)(function () {
          return n.e(271).then(n.bind(null, 2153));
        }),
        va = Object(a.lazy)(function () {
          return Promise.all([n.e(11), n.e(254)]).then(n.bind(null, 2182));
        }),
        ka = Object(a.lazy)(function () {
          return Promise.all([n.e(6), n.e(7), n.e(32), n.e(293)]).then(
            n.bind(null, 2195)
          );
        }),
        xa = Object(a.lazy)(function () {
          return Promise.all([n.e(7), n.e(12), n.e(16), n.e(17), n.e(30)]).then(
            n.bind(null, 2177)
          );
        }),
        wa = Object(a.lazy)(function () {
          return Promise.all([n.e(35), n.e(155)]).then(n.bind(null, 2211));
        }),
        Ca = Object(a.lazy)(function () {
          return Promise.all([n.e(8), n.e(163)]).then(n.bind(null, 2229));
        }),
        Na = Object(a.lazy)(function () {
          return Promise.all([n.e(39), n.e(162)]).then(n.bind(null, 2230));
        }),
        Ta = Object(a.lazy)(function () {
          return Promise.all([n.e(7), n.e(17), n.e(36), n.e(161)]).then(
            n.bind(null, 2223)
          );
        }),
        La = Object(a.lazy)(function () {
          return Promise.all([n.e(24), n.e(159)]).then(n.bind(null, 2231));
        }),
        Ma = Object(a.lazy)(function () {
          return Promise.all([n.e(4), n.e(160)]).then(n.bind(null, 2232));
        }),
        qa = Object(a.lazy)(function () {
          return n.e(112).then(n.bind(null, 2243));
        }),
        Ba = Object(a.lazy)(function () {
          return Promise.all([n.e(48), n.e(164)]).then(n.bind(null, 2163));
        }),
        Sa = Object(a.lazy)(function () {
          return Promise.all([n.e(8), n.e(61)]).then(n.bind(null, 2164));
        }),
        Ra = Object(a.lazy)(function () {
          return Promise.all([n.e(8), n.e(42), n.e(111)]).then(
            n.bind(null, 2218)
          );
        }),
        Ia = Object(a.lazy)(function () {
          return Promise.all([n.e(21), n.e(33)]).then(n.bind(null, 2180));
        }),
        Aa = Object(a.lazy)(function () {
          return n.e(230).then(n.bind(null, 2165));
        }),
        Ha = Object(a.lazy)(function () {
          return n.e(70).then(n.bind(null, 2191));
        }),
        Da = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(7), n.e(10), n.e(16), n.e(31)]).then(
            n.bind(null, 2233)
          );
        }),
        Ua = Object(a.lazy)(function () {
          return Promise.all([n.e(8), n.e(15), n.e(24), n.e(62)]).then(
            n.bind(null, 2166)
          );
        }),
        _a = Object(a.lazy)(function () {
          return Promise.all([n.e(15), n.e(53)]).then(n.bind(null, 2167));
        }),
        Fa = Object(a.lazy)(function () {
          return Promise.all([n.e(15), n.e(44)]).then(n.bind(null, 2168));
        }),
        Ja = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(3), n.e(45)]).then(
            n.bind(null, 2248)
          );
        }),
        Ga = Object(a.lazy)(function () {
          return n.e(71).then(n.bind(null, 2169));
        }),
        Qa = Object(a.lazy)(function () {
          return n.e(72).then(n.bind(null, 2170));
        }),
        Wa = Object(a.lazy)(function () {
          return Promise.all([n.e(3), n.e(74)]).then(n.bind(null, 2171));
        }),
        Ka = Object(a.lazy)(function () {
          return n.e(46).then(n.bind(null, 2234));
        }),
        Va = Object(a.lazy)(function () {
          return n.e(158).then(n.bind(null, 2172));
        }),
        Xa = Object(a.lazy)(function () {
          return n.e(73).then(n.bind(null, 2173));
        }),
        Ya = Object(a.lazy)(function () {
          return n.e(117).then(n.bind(null, 2174));
        }),
        Za = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(2), n.e(0), n.e(131)]).then(
            n.bind(null, 2175)
          );
        }),
        $a = Object(a.lazy)(function () {
          return Promise.all([n.e(1), n.e(2), n.e(0), n.e(133)]).then(
            n.bind(null, 2176)
          );
        }),
        el = Object(b.b)(function (e) {
          return { user: e.auth.login.userRole };
        })(function (e) {
          var t = e.component,
            n = e.fullLayout,
            o = Object(s.a)(e, B);
          return l.a.createElement(
            p.b,
            Object.assign({}, o, {
              render: function (e) {
                return l.a.createElement(q.a.Consumer, null, function (o) {
                  var c =
                    !0 === n
                      ? o.fullLayout
                      : "horizontal" === o.state.activeLayout
                      ? o.horizontalLayout
                      : o.VerticalLayout;
                  return l.a.createElement(
                    c,
                    Object.assign({}, e, { permission: e.user }),
                    l.a.createElement(
                      a.Suspense,
                      { fallback: l.a.createElement(h, null) },
                      l.a.createElement(t, e)
                    )
                  );
                });
              },
            })
          );
        }),
        tl = (function (e) {
          Object(r.a)(n, e);
          var t = Object(i.a)(n);
          function n() {
            return Object(o.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(c.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = localStorage.getItem("ad-token");
                  console.log("token data", e),
                    sessionStorage.clear(),
                    (void 0 !== e && null !== e) ||
                      window.location.replace("/#/pages/login");
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    p.c,
                    { history: m.a },
                    l.a.createElement(
                      u.a,
                      null,
                      l.a.createElement(
                        p.d,
                        null,
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/",
                          component: _,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/ecommerce-dashboard",
                          component: F,
                        }),
                        l.a.createElement(el, {
                          path: "/app/user/userList",
                          component: W,
                        }),
                        l.a.createElement(el, {
                          path: "/app/user/addUser",
                          component: K,
                        }),
                        l.a.createElement(el, {
                          path: "/app/user/editUser/:id",
                          component: X,
                        }),
                        l.a.createElement(el, {
                          path: "/app/user/viewUser/:id",
                          component: V,
                        }),
                        l.a.createElement(el, {
                          path: "/app/user/addpackage",
                          component: Za,
                        }),
                        l.a.createElement(el, {
                          path: "/app/dashboardlist/todayastrologerlist",
                          component: fe,
                        }),
                        l.a.createElement(el, {
                          path: "/app/dashboardlist/todaycustomerlist",
                          component: ye,
                        }),
                        l.a.createElement(el, {
                          path: "/app/dashboardlist/todayrechargelist",
                          component: Ee,
                        }),
                        l.a.createElement(el, {
                          path: "/app/dashboardlist/todaycallhistory",
                          component: je,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/bennerPooja/bannerPoojaList",
                          component: I,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/bennerPooja/addBannerPooja",
                          component: A,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/addEvent/EventList",
                          component: ae,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/addEvent/AddEvent",
                          component: le,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/bookEvent/bookEventList",
                          component: oe,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/bookEvent/addBookEvent",
                          component: ce,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/bookEvent/editBookEvent/:id",
                          component: re,
                        }),
                        l.a.createElement(el, {
                          path: "/app/media/socialmedia",
                          component: S,
                        }),
                        l.a.createElement(el, {
                          path: "/app/media/editsocialmedia/:id",
                          component: R,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/bookEvent/viewBookEvent/:id",
                          component: ie,
                        }),
                        l.a.createElement(el, {
                          path: "/app/productmanager/productlist",
                          component: Je,
                        }),
                        l.a.createElement(el, {
                          path: "/app/kundlimanage/kundlimatchlist",
                          component: Ke,
                        }),
                        l.a.createElement(el, {
                          path: "/app/Astrologer/Earningreport",
                          component: U,
                        }),
                        l.a.createElement(el, {
                          path: "/app/kundlimanage/kundliuserdetail",
                          component: Ve,
                        }),
                        l.a.createElement(el, {
                          path: "/app/youtubevideoadd",
                          component: $a,
                        }),
                        l.a.createElement(el, {
                          path: "/app/horoscopes/horoscopesList",
                          component: tt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/horoscopes/addHoroscopes",
                          component: nt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/horoscopes/editHoroscopes/:id",
                          component: at,
                        }),
                        l.a.createElement(el, {
                          path: "/app/horoscopes/viewHoroscopes/:id",
                          component: lt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/chat/chatList",
                          component: ot,
                        }),
                        l.a.createElement(el, {
                          path: "/app/chat/Chathistory",
                          component: ct,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          path: "/app/horoscopecategory/horoscopeCategoryList",
                          component: Ye,
                        }),
                        l.a.createElement(el, {
                          path: "/app/horoscopecategory/addHoroscopeCategory",
                          component: Ze,
                        }),
                        l.a.createElement(el, {
                          path: "/app/horoscopecategory/editHoroscopeCategory/:id",
                          component: $e,
                        }),
                        l.a.createElement(el, {
                          path: "/app/horoscopecategory/viewHoroscopeCategory/:id",
                          component: et,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pageslist",
                          component: D,
                        }),
                        l.a.createElement(el, {
                          path: "/app/Addnewpage",
                          component: H,
                        }),
                        l.a.createElement(el, {
                          path: "/app/rashimanagement/rashi/rashiList",
                          component: Wt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/rashimanagement/rashi/addRashi",
                          component: Kt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/rashimanagement/rashi/editRashi/:id",
                          component: Vt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/rashimanagement/rashi/viewRashi/:id",
                          component: Xt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/productmanager/astrologerProduct",
                          component: rt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/productmanager/product/productList",
                          component: Je,
                        }),
                        l.a.createElement(el, {
                          path: "/app/productmanager/product/addProduct",
                          component: Ge,
                        }),
                        l.a.createElement(el, {
                          path: "/app/productmanager/product/editProduct/:id",
                          component: Qe,
                        }),
                        l.a.createElement(el, {
                          path: "/app/productmanager/product/viewProduct/:id",
                          component: We,
                        }),
                        l.a.createElement(el, {
                          path: "/app/productmanager/category/categoryList",
                          component: it,
                        }),
                        l.a.createElement(el, {
                          path: "/app/productmanager/category/addCategory",
                          component: st,
                        }),
                        l.a.createElement(el, {
                          path: "/app/productmanager/category/editCategory/:id",
                          component: pt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/productmanager/category/viewCategory/:id",
                          component: ut,
                        }),
                        l.a.createElement(el, {
                          path: "/app/astrology/astrologerList",
                          component: mt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/astrology/addAstrologer",
                          component: bt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/astrology/editAstrologer/:id",
                          component: dt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/astrology/viewAstrologer",
                          component: ht,
                        }),
                        l.a.createElement(el, {
                          path: "/app/callmanagement/callhistory",
                          component: ze,
                        }),
                        l.a.createElement(el, {
                          path: "/app/callmanagement/completecall",
                          component: Oe,
                        }),
                        l.a.createElement(el, {
                          path: "/app/callmanagement/videocall",
                          component: Pe,
                        }),
                        l.a.createElement(el, {
                          path: "/app/coupons/couponslist",
                          component: gt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/coupons/addcoup",
                          component: ft,
                        }),
                        l.a.createElement(el, {
                          path: "/app/coupons/editcoup",
                          component: yt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/packagemanager/allPlan",
                          component: Te,
                        }),
                        l.a.createElement(el, {
                          path: "/app/packagemanager/addPlan",
                          component: Le,
                        }),
                        l.a.createElement(el, {
                          path: "/app/packagemanager/editPlan/:id",
                          component: Me,
                        }),
                        l.a.createElement(el, {
                          path: "/app/packagemanager/userrecharge",
                          component: Se,
                        }),
                        l.a.createElement(el, {
                          path: "/app/packagemanager/commission",
                          component: Re,
                        }),
                        l.a.createElement(el, {
                          path: "/app/packagemanager/commissioncall",
                          component: Ie,
                        }),
                        l.a.createElement(el, {
                          path: "/app/packagemanager/commissionadd",
                          component: Ae,
                        }),
                        l.a.createElement(el, {
                          path: "/app/packagemanager/commissionedit/:id",
                          component: He,
                        }),
                        l.a.createElement(el, {
                          path: "/app/packagemanager/commissionview/:id",
                          component: De,
                        }),
                        l.a.createElement(el, {
                          path: "/app/packagemanager/packageoffer",
                          component: qe,
                        }),
                        l.a.createElement(el, {
                          path: "/app/packagemanager/packageofferViewOne/:id",
                          component: Be,
                        }),
                        l.a.createElement(el, {
                          path: "/app/poojapackage/packageList",
                          component: Fe,
                        }),
                        l.a.createElement(el, {
                          path: "/app/poojapackage/editPackage/:id",
                          component: _e,
                        }),
                        l.a.createElement(el, {
                          path: "/app/poojapackage/addPackage",
                          component: Ue,
                        }),
                        l.a.createElement(el, {
                          path: "/app/prediction/predictionList",
                          component: ve,
                        }),
                        l.a.createElement(el, {
                          path: "/app/prediction/addPrediction",
                          component: ke,
                        }),
                        l.a.createElement(el, {
                          path: "/app/prediction/editPrediction/:id",
                          component: xe,
                        }),
                        l.a.createElement(el, {
                          path: "/app/reviewrating/ratinglist",
                          component: Ce,
                        }),
                        l.a.createElement(el, {
                          path: "/app/chatintakeform/chatintakelist",
                          component: we,
                        }),
                        l.a.createElement(el, {
                          path: "/app/reviewrating/ratingedit/:id",
                          component: Ne,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/bank/bankList",
                          component: nn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/bank/addBank",
                          component: tn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/bank/editBank/:id",
                          component: an,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/bank/viewBank/:id",
                          component: ln,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/moc/mOCList",
                          component: on,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/moc/editMOC",
                          component: rn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/moc/addMOC",
                          component: cn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/moc/viewMOC",
                          component: sn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/enquiryForm",
                          component: bn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/tank/addTank",
                          component: pn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/bay/bayList",
                          component: un,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/setting/bay/addBay",
                          component: mn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/email",
                          component: function () {
                            return l.a.createElement(p.a, {
                              to: "/email/inbox",
                            });
                          },
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/banner/bannerList",
                          component: Et,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/banner/addBanner",
                          component: jt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/banner/editBanner/:id",
                          component: Ot,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/notification/notifiList",
                          component: zt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/notification/addNotifi",
                          component: Pt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/notification/editNotifi/:id",
                          component: vt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/aboutus/aboutUsList",
                          component: kt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/aboutus/addAboutUs",
                          component: xt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/aboutus/EditAboutUs/:id",
                          component: wt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/contactus/contactUsList",
                          component: Ct,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/contactus/addContactUs",
                          component: Nt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/termscondition/termConditionList",
                          component: Tt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/termscondition/addTermsCondition",
                          component: Lt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/termscondition/editTermCondition/:id",
                          component: Mt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/faq/faqList",
                          component: qt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/faq/addFaq",
                          component: Bt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/privacypolicy/privacyPolicyList",
                          component: St,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/privacypolicy/addPrivacyPolicy",
                          component: Rt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/privacypolicy/editPrivacyPolicy/:id",
                          component: It,
                        }),
                        l.a.createElement(el, {
                          path: "/app/pagesetup/privacypolicy/viewPrivacyPolicy/:id",
                          component: At,
                        }),
                        l.a.createElement(el, {
                          path: "/app/blogmngment/blog/blogList",
                          component: Ht,
                        }),
                        l.a.createElement(el, {
                          path: "/app/blogmngment/blog/addBlog",
                          component: Dt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/blogmngment/blog/editBlog/:id",
                          component: Ut,
                        }),
                        l.a.createElement(el, {
                          path: "/app/blogmngment/blog/viewBlog",
                          component: _t,
                        }),
                        l.a.createElement(el, {
                          path: "/app/blogmngment/blogCategory/blogCateList",
                          component: Ft,
                        }),
                        l.a.createElement(el, {
                          path: "/app/blogmngment/blogCategory/addBlogCate",
                          component: Jt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/blogmngment/blogCategory/editBlogCate/:id",
                          component: Gt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/blogmngment/blogCategory/viewBlogCate",
                          component: Qt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/rashimanagement/rashihoroscope/rashiHoroscopeList",
                          component: Yt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/rashimanagement/rashihoroscope/addRashiHoroscope",
                          component: Zt,
                        }),
                        l.a.createElement(el, {
                          path: "/app/rashimanagement/rashihoroscope/editRashiHoroscope/:id",
                          component: $t,
                        }),
                        l.a.createElement(el, {
                          path: "/app/rashimanagement/rashihoroscope/viewRashiHoroscope/:id",
                          component: en,
                        }),
                        l.a.createElement(el, {
                          path: "/app/askQuestionList",
                          component: Xe,
                        }),
                        l.a.createElement(el, {
                          path: "/app/report/rechargeReport",
                          component: Z,
                        }),
                        l.a.createElement(el, {
                          path: "/app/report/callDetails",
                          component: Y,
                        }),
                        l.a.createElement(el, {
                          path: "/app/report/payoutlist",
                          component: $,
                        }),
                        l.a.createElement(el, {
                          path: "/app/report/editpayout/:id",
                          component: ee,
                        }),
                        l.a.createElement(el, {
                          path: "/app/report/payoutadd",
                          component: te,
                        }),
                        l.a.createElement(el, {
                          path: "/app/report/payoutedit",
                          component: ne,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/addEvent/EventList",
                          component: ae,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/addEvent/AddEvent",
                          component: le,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/bookEvent/bookEventList",
                          component: oe,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/bookEvent/addBookEvent",
                          component: ce,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/bookEvent/editBookEvent/:id",
                          component: re,
                        }),
                        l.a.createElement(el, {
                          path: "/app/event/bookEvent/viewBookEvent/:id",
                          component: ie,
                        }),
                        l.a.createElement(el, {
                          path: "/app/ordermanage/allorderlist",
                          component: se,
                        }),
                        l.a.createElement(el, {
                          path: "/app/wallet/wallettransaction",
                          component: pe,
                        }),
                        l.a.createElement(el, {
                          path: "/app/wallet/walletcustom",
                          component: ue,
                        }),
                        l.a.createElement(el, {
                          path: "/app/withdraw/WithdrawRequest",
                          component: me,
                        }),
                        l.a.createElement(el, {
                          path: "/app/transaction/transactionHistory",
                          component: be,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/membership/memberShipList",
                          component: de,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/membership/addMemberShip",
                          component: he,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/app/membership/editMemberShip",
                          component: ge,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/todo",
                          component: function () {
                            return l.a.createElement(p.a, { to: "/todo/all" });
                          },
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/ecommerce/shop",
                          component: Q,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/ecommerce/product-detail",
                          component: G,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/ecommerce/checkout",
                          component: J,
                          permission: "admin",
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/data-list/list-view",
                          component: Vn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/data-list/thumb-view",
                          component: Xn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/ui-element/grid",
                          component: dn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/ui-element/typography",
                          component: hn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/ui-element/textutilities",
                          component: gn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/ui-element/syntaxhighlighter",
                          component: fn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/colors/colors",
                          component: yn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/icons/reactfeather",
                          component: En,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/cards/basic",
                          component: jn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/cards/statistics",
                          component: On,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/cards/analytics",
                          component: zn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/cards/action",
                          component: Pn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/alerts",
                          component: vn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/buttons",
                          component: kn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/breadcrumbs",
                          component: xn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/carousel",
                          component: wn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/collapse",
                          component: Cn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/dropdowns",
                          component: Nn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/list-group",
                          component: Tn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/modals",
                          component: Ln,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/pagination",
                          component: Mn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/nav-component",
                          component: qn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/navbar",
                          component: Bn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/tabs-component",
                          component: Sn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/pills-component",
                          component: Rn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/tooltips",
                          component: In,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/popovers",
                          component: An,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/badges",
                          component: Hn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/pill-badges",
                          component: Dn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/progress",
                          component: Un,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/media-objects",
                          component: _n,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/components/spinners",
                          component: Fn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extra-components/auto-complete",
                          component: Gn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extra-components/avatar",
                          component: Jn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extra-components/chips",
                          component: Qn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extra-components/divider",
                          component: Wn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/wizard",
                          component: Kn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/elements/select",
                          component: Yn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/elements/switch",
                          component: Zn,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/elements/checkbox",
                          component: $n,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/elements/radio",
                          component: ea,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/elements/input",
                          component: ta,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/elements/input-group",
                          component: na,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/elements/number-input",
                          component: aa,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/elements/textarea",
                          component: la,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/elements/pickers",
                          component: oa,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/elements/input-mask",
                          component: ca,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/layout/form-layout",
                          component: ra,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/forms/formik",
                          component: ia,
                        }),
                        " ",
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/tables/reactstrap",
                          component: sa,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/tables/react-tables",
                          component: pa,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/tables/agGrid",
                          component: ua,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/tables/data-tables",
                          component: ma,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/profile",
                          component: ba,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/faq",
                          component: da,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/knowledge-base",
                          component: ha,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/knowledge-base/category",
                          component: x,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/knowledge-base/category/questions",
                          component: M,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/search",
                          component: ga,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/account-settings",
                          component: fa,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/invoice",
                          component: ya,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/misc/coming-soon",
                          component: Ea,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/misc/error/404",
                          component: ja,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/login",
                          component: Ja,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/register",
                          component: Ka,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/forgot-password",
                          component: Ga,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/lock-screen",
                          component: Qa,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/reset-password/:id",
                          component: Wa,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/otp-verify",
                          component: Xa,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/pages/otp-Screen",
                          component: Ya,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/misc/error/500",
                          component: Oa,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/misc/not-authorized",
                          component: za,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/misc/maintenance",
                          component: Pa,
                          fullLayout: !0,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/charts/apex",
                          component: va,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/charts/chartjs",
                          component: ka,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/charts/recharts",
                          component: xa,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/maps/leaflet",
                          component: wa,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/sweet-alert",
                          component: Na,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/toastr",
                          component: Ca,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/slider",
                          component: Ta,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/file-uploader",
                          component: La,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/wysiwyg-editor",
                          component: Ma,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/drag-and-drop",
                          component: qa,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/tour",
                          component: Ba,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/clipboard",
                          component: Sa,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/context-menu",
                          component: Ra,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/swiper",
                          component: Ia,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/access-control",
                          component: Va,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/i18n",
                          component: Aa,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/tree",
                          component: Da,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/import",
                          component: Ua,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/export",
                          component: _a,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/export-selected",
                          component: Fa,
                        }),
                        l.a.createElement(el, {
                          exact: !0,
                          path: "/extensions/pagination",
                          component: Ha,
                        }),
                        l.a.createElement(el, { component: ja, fullLayout: !0 })
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component),
        nl = n(175),
        al = n(2),
        ll = n.n(al),
        ol = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function a() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((a.prototype = n.prototype), new a()));
          };
        })(),
        cl = function () {
          return (cl =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var l in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              return e;
            }).apply(this, arguments);
        },
        rl = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var l = 0;
            for (a = Object.getOwnPropertySymbols(e); l < a.length; l++)
              t.indexOf(a[l]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[l]) &&
                (n[a[l]] = e[a[l]]);
          }
          return n;
        },
        il = {
          position: "relative",
          display: "inline-flex",
          overflow: "hidden",
        },
        sl = function () {
          return (sl =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var l in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              return e;
            }).apply(this, arguments);
        },
        pl = (function (e) {
          return function (t) {
            return l.a.createElement(e, sl({}, t));
          };
        })(
          (function (e) {
            var t;
            return (
              void 0 === e && (e = {}),
              ((t = (function (e) {
                function t(t) {
                  var n = e.call(this, t) || this;
                  return (
                    (n.timer = 0),
                    (n.onClick = function (e) {
                      var t = n.props,
                        a = t.during,
                        l = t.onClick,
                        o = t.color;
                      e.stopPropagation();
                      var c = e.pageX,
                        r = e.pageY,
                        i = e.currentTarget.getBoundingClientRect(),
                        s = c - (i.left + window.scrollX),
                        p = r - (i.top + window.scrollY),
                        u = Math.max(i.width, i.height);
                      n.setState(
                        function (e) {
                          return {
                            rippleStyle: cl({}, e.rippleStyle, {
                              left: s,
                              top: p,
                              opacity: 1,
                              transform: "translate(-50%, -50%)",
                              transition: "initial",
                              backgroundColor: o,
                            }),
                          };
                        },
                        function () {
                          n.timer = setTimeout(function () {
                            n.setState(function (e) {
                              return {
                                rippleStyle: cl({}, e.rippleStyle, {
                                  opacity: 0,
                                  transform: "scale(" + u / 9 + ")",
                                  transition: "all " + a + "ms",
                                }),
                              };
                            });
                          }, 50);
                        }
                      ),
                        l && l(e);
                    }),
                    (n.state = {
                      rippleStyle: {
                        position: "absolute",
                        borderRadius: "50%",
                        opacity: 0,
                        width: 35,
                        height: 35,
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                      },
                    }),
                    n
                  );
                }
                return (
                  ol(t, e),
                  (t.prototype.componentWillUnmount = function () {
                    clearTimeout(this.timer);
                  }),
                  (t.prototype.render = function () {
                    var e = this.props,
                      t = e.children,
                      n = (e.during, e.color, e.onClick, e.className),
                      a = rl(e, [
                        "children",
                        "during",
                        "color",
                        "onClick",
                        "className",
                      ]),
                      o = this.state.rippleStyle;
                    return l.a.createElement(
                      "div",
                      cl({}, a, {
                        className: ("react-ripples " + n).trim(),
                        style: il,
                        onClick: this.onClick,
                      }),
                      t,
                      l.a.createElement("s", { style: o })
                    );
                  }),
                  t
                );
              })(l.a.PureComponent)).displayName = "Ripples"),
              (t.propTypes = {
                during: ll.a.number,
                color: ll.a.string,
                onClick: ll.a.func,
                className: ll.a.string,
              }),
              (t.defaultProps = cl(
                {
                  during: 600,
                  color: "rgba(0, 0, 0, .3)",
                  className: "",
                  onClick: function () {},
                },
                e
              )),
              t
            );
          })()
        ),
        ul = ["rippleColor", "during", "block"];
      nl.a.Ripple = function (e) {
        var t = e.rippleColor,
          n = e.during,
          a = e.block,
          o = Object(s.a)(e, ul);
        return l.a.createElement(
          pl,
          {
            color: t || "rgba(255, 255, 255, .5)",
            during: n,
            className: "".concat(a ? "d-block" : ""),
          },
          l.a.createElement(nl.a, o)
        );
      };
      n(1509),
        n(1510),
        (t.default = function (e) {
          return l.a.createElement(tl, null);
        });
    },
    799: function (e, t, n) {
      "use strict";
      var a = n(14),
        l = n(15),
        o = n(17),
        c = n(16),
        r = n(1),
        i = n.n(r),
        s = n(1096),
        p = n(1097),
        u = n(193),
        m = n(43),
        b = (function (e) {
          Object(o.a)(n, e);
          var t = Object(c.a)(n);
          function n() {
            return Object(a.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(l.a)(n, [
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    { className: "content-header row" },
                    i.a.createElement(
                      "div",
                      { className: "content-header-left col-md-9 col-12 mb-2" },
                      i.a.createElement(
                        "div",
                        { className: "row breadcrumbs-top" },
                        i.a.createElement(
                          "div",
                          { className: "col-12" },
                          this.props.breadCrumbTitle
                            ? i.a.createElement(
                                "h2",
                                {
                                  className:
                                    "content-header-title float-left mb-0",
                                },
                                this.props.breadCrumbTitle
                              )
                            : "",
                          i.a.createElement(
                            "div",
                            {
                              className:
                                "breadcrumb-wrapper vx-breadcrumbs d-sm-block d-none col-12",
                            },
                            i.a.createElement(
                              s.a,
                              { tag: "ol" },
                              i.a.createElement(
                                p.a,
                                { tag: "li" },
                                i.a.createElement(
                                  m.c,
                                  { to: "/" },
                                  i.a.createElement(u.a, {
                                    className: "align-top",
                                    size: 15,
                                  })
                                )
                              ),
                              i.a.createElement(
                                p.a,
                                { tag: "li", className: "text-primary" },
                                this.props.breadCrumbParent
                              ),
                              this.props.breadCrumbParent2
                                ? i.a.createElement(
                                    p.a,
                                    { tag: "li", className: "text-primary" },
                                    this.props.breadCrumbParent2
                                  )
                                : "",
                              this.props.breadCrumbParent3
                                ? i.a.createElement(
                                    p.a,
                                    { tag: "li", className: "text-primary" },
                                    this.props.breadCrumbParent3
                                  )
                                : "",
                              i.a.createElement(
                                p.a,
                                { tag: "li", active: !0 },
                                this.props.breadCrumbActive
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(i.a.Component);
      t.a = b;
    },
  },
]);
//# sourceMappingURL=37.447e9a6a.chunk.js.map
