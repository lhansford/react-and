import e from "react";
const l = ({ children: t, conjuction: a = "and", oxfordComma: r = !0 }) => {
  if (!t)
    return /* @__PURE__ */ e.createElement(e.Fragment, null);
  if (!Array.isArray(t) || t.length === 1)
    return /* @__PURE__ */ e.createElement(e.Fragment, null, t);
  if (t.length === 2)
    return /* @__PURE__ */ e.createElement(e.Fragment, null, [t[t.length - 2], ` ${a} `, t[t.length - 1]]);
  const m = t.slice(0, t.length - 2).reduce((g, n) => [...g, n, ", "], []);
  return /* @__PURE__ */ e.createElement(e.Fragment, null, [
    ...m,
    t[t.length - 2],
    r ? `, ${a} ` : ` ${a} `,
    t[t.length - 1]
  ]);
};
export {
  l as default
};
