var $iA2ta$reactjsxdevruntime = require("react/jsx-dev-runtime");
require("react");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $9233cea927cb9637$export$2e2bcd8739ae039);


const $9233cea927cb9637$var$ReactAnd = ({ children: children , conjuction: conjuction = "and" , oxfordComma: oxfordComma = true  })=>{
    if (!children) return /*#__PURE__*/ (0, $iA2ta$reactjsxdevruntime.jsxDEV)((0, $iA2ta$reactjsxdevruntime.Fragment), {}, void 0, false);
    if (!Array.isArray(children) || children.length === 1) return /*#__PURE__*/ (0, $iA2ta$reactjsxdevruntime.jsxDEV)((0, $iA2ta$reactjsxdevruntime.Fragment), {
        children: children
    }, void 0, false);
    if (children.length === 2) return /*#__PURE__*/ (0, $iA2ta$reactjsxdevruntime.jsxDEV)((0, $iA2ta$reactjsxdevruntime.Fragment), {
        children: [
            children[children.length - 2],
            ` ${conjuction} `,
            children[children.length - 1]
        ]
    }, void 0, false);
    const commaSeparatedItems = children.slice(0, children.length - 2).reduce((previous, current)=>{
        return [
            ...previous,
            current,
            ", "
        ];
    }, []);
    return /*#__PURE__*/ (0, $iA2ta$reactjsxdevruntime.jsxDEV)((0, $iA2ta$reactjsxdevruntime.Fragment), {
        children: [
            ...commaSeparatedItems,
            children[children.length - 2],
            oxfordComma ? `, ${conjuction} ` : ` ${conjuction} `,
            children[children.length - 1], 
        ]
    }, void 0, false);
};
var $9233cea927cb9637$export$2e2bcd8739ae039 = $9233cea927cb9637$var$ReactAnd;


//# sourceMappingURL=index.js.map
