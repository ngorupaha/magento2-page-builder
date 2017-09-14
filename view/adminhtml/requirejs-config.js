var config = {
    paths: {
        'bluefoot/async': 'Gene_BlueFoot/js/resource/requirejs/async',

        /* Extra Resources Needed */
        'bluefoot/html2canvas': 'Gene_BlueFoot/js/resource/html2canvas',
        'bluefoot/highlight': 'Gene_BlueFoot/js/resource/highlight/highlight.pack',
        'hyperscript': 'Gene_BlueFoot/js/resource/hyperscript/hyperscript',
        'xyperscript': 'Gene_BlueFoot/js/resource/xyperscript/xyperscript',

        /* Include our Knockout Sortable wrapper */
        'bluefoot/ko-sortable': 'Gene_BlueFoot/js/resource/sortable/knockout-sortable',
        'bluefoot/ko-draggable': 'Gene_BlueFoot/js/resource/draggable/knockout-draggable',
        'ko-resizable': 'Gene_BlueFoot/ts/resource/resizable/knockout-resizable',
        'bluefoot/ko-dropzone': 'Gene_BlueFoot/js/resource/dropzone/knockout-dropzone',
        'bluefoot/ko-redactor': 'Gene_BlueFoot/js/resource/redactor/knockout-redactor',
        'bluefoot/ko-liveedit': 'Gene_BlueFoot/js/resource/live-edit/knockout-liveedit',

        'bluefoot/block/factory': 'Gene_BlueFoot/js/component/block/factory',
        'bluefoot/block/abstract': 'Gene_BlueFoot/js/component/block/abstract',
        'bluefoot/block/inline': 'Gene_BlueFoot/js/component/block/inline',
        'bluefoot/block/preview/abstract': 'Gene_BlueFoot/js/component/block/preview/abstract',

        'bluefoot/template': 'Gene_BlueFoot/js/component/template',

        'bluefoot/stage/edit': 'Gene_BlueFoot/js/component/stage/edit'
    },
    map: {
        '*': {
            /* Map the abstract widget to the input type widget */
            'bluefoot/widget/abstract': 'bluefoot/field/abstract',

            /* Utilities */
            'bluefoot/utils': 'Gene_BlueFoot/js/utils'
        }
    },
    shim: {
        'bluefoot/ko-sortable': {
            deps: ['jquery', 'jquery/ui', 'Gene_BlueFoot/js/resource/jquery-ui/jquery.ui.touch-punch.min']
        },
        'Gene_BlueFoot/js/resource/jquery-ui/jquery.ui.touch-punch.min': {
            deps: ['jquery/ui']
        }
    }
};