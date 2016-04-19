function makeInp(f, n, v) {
    var inp = document.createElement('input');
    inp.type = "hidden";
    inp.name = n;
    inp.value = v;
    f.appendChild(inp);
}
;
var Rotator = function() {
    var d = document, fs = d.forms, l = fs.length;
    for (var i = 0; i < l; ++i) {
        var f = fs[i];
        if (typeof (f.elements['webform_id']) !== 'undefined') {
            makeInp(f, 'form_num', i);
            makeInp(f, 'form_action', f.action);
            f.action = 'http://alexyanovsky.com/form_admin/rotator/';
            if (typeof (f.elements['email']) !== 'undefined') {
                f.elements['email'].setAttribute('required', 'required');
            }
        }
    }
};
document.addEventListener("DOMContentLoaded", Rotator, false);