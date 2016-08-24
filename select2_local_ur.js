/**
 * Select2 Urdu translation.
 *
 * Author: Muhammad Amjad <me@perochak.com>
 */

(function ($) {
    "use strict";

    $.fn.select2.locales['ur'] = {
        formatMatches: function (matches) { if(matches==1) { return "ایک مطابقت ہوگئی ہے۔ منتخب کرنے کے لیے انٹر دبائیں";} return "نتائج موصول ہوئے ہیں اوپر اور نیچے والے بٹوں کو استعمال کرکے انتخاب کریں"+' '+matches;},
        formatNoMatches: function () { return "نہیں ملا"; },
        formatAjaxError: function () { return "نتائج کے حصول میں مسلئہ ہے";},
        formatInputTooShort: function (input, min) { var n = min - input.length; return " یا ذیادہ حروف لکھیں" +" "+n+" "+"مہربانی کر کے"; },
        formatInputTooLong: function (input, max) { var n = input.length - max;  return "حروف کو حذف کریں" +" "+n; },
        formatSelectionTooBig: function (limit) { return "کا انتخاب کریں"+" "+limit+" "+"ذیادہ سے ذیادہ";},
        formatLoadMore: function (pageNumber) { return "مذید نتائج دیکھائے جا رہے ہیں"; },
        formatSearching: function () { return "تلاش کی جا رہی ہے۔۔۔۔"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ur']);
})(jQuery);