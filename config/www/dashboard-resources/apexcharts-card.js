  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    position: relative;
  }

  .wrapper {
    display: grid;
    grid-template-areas: 'header' 'graph';
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }

  #graph-wrapper {
    height: 100%;
    grid-area: graph;
  }

  #brush {
    margin-top: -30px;
  }

  /* Needed for minimal layout */
  svg:not(:root) {
    overflow: visible !important;
  }

  #header {
    padding: 8px 16px 0px;
    grid-area: header;
  }
  #header.floating {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
  }

  #header__title {
    color: var(--secondary-text-color);
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-bottom: 5px;
  }

  #header__states {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    margin: -5px;
  }

  #header__states > * {
    margin: 5px;
  }

  #states__state {
    flex: 0 0 10%;
    position: relative;
  }

  #header__title {
    position: relative;
  }

  #header__title.actions,
  #states__state.actions {
    cursor: pointer;
  }

  #header__title.disabled,
  #states__state.disabled {
    pointer-events: none;
  }

  #state__value {
    display: table;
    white-space: nowrap;
  }

  #state__value > #state {
    font-size: 1.8em;
    font-weight: 500;
    white-space: nowrap;
  }

  #state__value > #uom {
    font-size: 1em;
    font-weight: 400;
    opacity: 0.8;
    white-space: nowrap;
  }

  #state__name {
    font-size: 0.8em;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  #last_updated {
    font-size: 0.63em;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: absolute;
    bottom: 0px;
    right: 4px;
    opacity: 0.5;
  }

  /* Apex Charts Default CSS */
  .apexcharts-canvas {
    position: relative;
    user-select: none;
    /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */
  }

  /* scrollbar is not visible by default for legend, hence forcing the visibility */
  .apexcharts-canvas ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 6px;
  }

  .apexcharts-canvas ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  .apexcharts-inner {
    position: relative;
  }

  .apexcharts-text tspan {
    font-family: inherit;
  }

  .legend-mouseover-inactive {
    transition: 0.15s ease all;
    opacity: 0.2;
  }

  .apexcharts-series-collapsed {
    opacity: 0;
  }

  .apexcharts-tooltip {
    border-radius: 5px;
    box-shadow: 2px 2px 6px -4px #999;
    cursor: default;
    font-size: 14px;
    left: 62px;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    white-space: nowrap;
    z-index: 12;
    transition: 0.15s ease all;
  }

  .apexcharts-tooltip.apexcharts-active {
    opacity: 0.96;
    transition: 0.15s ease all;
  }

  .apexcharts-tooltip.apexcharts-theme-light {
    border: 1px solid #e3e3e3;
    background: var(--card-background-color);
  }

  .apexcharts-tooltip.apexcharts-theme-dark {
    color: #fff;
    background: rgba(30, 30, 30, 0.8);
  }

  .apexcharts-tooltip * {
    font-family: inherit;
  }

  .apexcharts-tooltip-title {
    padding: 6px;
    font-size: 15px;
    margin-bottom: 4px;
  }

  .apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
    background: var(--primary-background-color);
    border-bottom: 1px solid #ddd;
  }

  .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
    background: rgba(0, 0, 0, 0.7);
    border-bottom: 1px solid #333;
  }

  .apexcharts-tooltip-text-value,
  .apexcharts-tooltip-text-z-value {
    display: inline-block;
    font-weight: 600;
    margin-left: 5px;
  }

  .apexcharts-tooltip-text-z-label:empty,
  .apexcharts-tooltip-text-z-value:empty {
    display: none;
  }

  .apexcharts-tooltip-text-value,
  .apexcharts-tooltip-text-z-value {
    font-weight: 600;
  }

  .apexcharts-tooltip-marker {
    width: 12px;
    height: 12px;
    position: relative;
    top: 0px;
    margin-right: 10px;
    border-radius: 50%;
  }

  .apexcharts-tooltip-series-group {
    padding: 0 10px;
    display: none;
    text-align: left;
    justify-content: left;
    align-items: center;
  }

  .apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
    opacity: 1;
  }

  .apexcharts-tooltip-series-group.apexcharts-active,
  .apexcharts-tooltip-series-group:last-child {
    padding-bottom: 4px;
  }

  .apexcharts-tooltip-series-group-hidden {
    opacity: 0;
    height: 0;
    line-height: 0;
    padding: 0 !important;
  }

  .apexcharts-tooltip-y-group {
    padding: 6px 0 5px;
  }

  .apexcharts-tooltip-candlestick {
    padding: 4px 8px;
  }

  .apexcharts-tooltip-candlestick > div {
    margin: 4px 0;
  }

  .apexcharts-tooltip-candlestick span.value {
    font-weight: bold;
  }

  .apexcharts-tooltip-rangebar {
    padding: 5px 8px;
  }

  .apexcharts-tooltip-rangebar .category {
    font-weight: 600;
    color: #777;
  }

  .apexcharts-tooltip-rangebar .series-name {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }

  .apexcharts-xaxistooltip {
    opacity: 0;
    padding: 9px 10px;
    pointer-events: none;
    color: var(--primary-text-color);
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    background: var(--card-background-color);
    border: 1px solid #90a4ae;
    transition: 0.15s ease all;
  }

  .apexcharts-xaxistooltip.apexcharts-theme-dark {
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  .apexcharts-xaxistooltip:after,
  .apexcharts-xaxistooltip:before {
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .apexcharts-xaxistooltip:after {
    border-color: rgba(236, 239, 241, 0);
    border-width: 6px;
    margin-left: -6px;
  }

  .apexcharts-xaxistooltip:before {
    border-color: rgba(144, 164, 174, 0);
    border-width: 7px;
    margin-left: -7px;
  }

  .apexcharts-xaxistooltip-bottom:after,
  .apexcharts-xaxistooltip-bottom:before {
    bottom: 100%;
  }

  .apexcharts-xaxistooltip-top:after,
  .apexcharts-xaxistooltip-top:before {
    top: 100%;
  }

  .apexcharts-xaxistooltip-bottom:after {
    border-bottom-color: #eceff1;
  }

  .apexcharts-xaxistooltip-bottom:before {
    border-bottom-color: #90a4ae;
  }

  .apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {
    border-bottom-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
    border-bottom-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-xaxistooltip-top:after {
    border-top-color: #eceff1;
  }

  .apexcharts-xaxistooltip-top:before {
    border-top-color: #90a4ae;
  }

  .apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {
    border-top-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
    border-top-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-xaxistooltip.apexcharts-active {
    opacity: 1;
    transition: 0.15s ease all;
  }

  .apexcharts-yaxistooltip {
    opacity: 0;
    padding: 4px 10px;
    pointer-events: none;
    color: var(--primary-text-color);
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    background: var(--card-background-color);
    border: 1px solid #90a4ae;
  }

  .apexcharts-yaxistooltip.apexcharts-theme-dark {
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  .apexcharts-yaxistooltip:after,
  .apexcharts-yaxistooltip:before {
    top: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .apexcharts-yaxistooltip:after {
    border-color: rgba(236, 239, 241, 0);
    border-width: 6px;
    margin-top: -6px;
  }

  .apexcharts-yaxistooltip:before {
    border-color: rgba(144, 164, 174, 0);
    border-width: 7px;
    margin-top: -7px;
  }

  .apexcharts-yaxistooltip-left:after,
  .apexcharts-yaxistooltip-left:before {
    left: 100%;
  }

  .apexcharts-yaxistooltip-right:after,
  .apexcharts-yaxistooltip-right:before {
    right: 100%;
  }

  .apexcharts-yaxistooltip-left:after {
    border-left-color: #eceff1;
  }

  .apexcharts-yaxistooltip-left:before {
    border-left-color: #90a4ae;
  }

  .apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {
    border-left-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
    border-left-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-yaxistooltip-right:after {
    border-right-color: #eceff1;
  }

  .apexcharts-yaxistooltip-right:before {
    border-right-color: #90a4ae;
  }

  .apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {
    border-right-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
    border-right-color: rgba(0, 0, 0, 0.5);
  }

  .apexcharts-yaxistooltip.apexcharts-active {
    opacity: 1;
  }

  .apexcharts-yaxistooltip-hidden {
    display: none;
  }

  .apexcharts-xcrosshairs,
  .apexcharts-ycrosshairs {
    pointer-events: none;
    opacity: 0;
    transition: 0.15s ease all;
  }

  .apexcharts-xcrosshairs.apexcharts-active,
  .apexcharts-ycrosshairs.apexcharts-active {
    opacity: 1;
    transition: 0.15s ease all;
  }

  .apexcharts-ycrosshairs-hidden {
    opacity: 0;
  }

  .apexcharts-selection-rect {
    cursor: move;
  }

  .svg_select_boundingRect,
  .svg_select_points_rot {
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
  }
  .apexcharts-selection-rect + g .svg_select_boundingRect,
  .apexcharts-selection-rect + g .svg_select_points_rot {
    opacity: 0;
    visibility: hidden;
  }

  .apexcharts-selection-rect + g .svg_select_points_l,
  .apexcharts-selection-rect + g .svg_select_points_r {
    cursor: ew-resize;
    opacity: 1;
    visibility: visible;
  }

  .svg_select_points {
    fill: #efefef;
    stroke: #333;
    rx: 2;
  }

  .apexcharts-svg.apexcharts-zoomable.hovering-zoom {
    cursor: crosshair;
  }

  .apexcharts-svg.apexcharts-zoomable.hovering-pan {
    cursor: move;
  }

  .apexcharts-zoom-icon,
  .apexcharts-zoomin-icon,
  .apexcharts-zoomout-icon,
  .apexcharts-reset-icon,
  .apexcharts-pan-icon,
  .apexcharts-selection-icon,
  .apexcharts-menu-icon,
  .apexcharts-toolbar-custom-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    line-height: 24px;
    color: var(--primary-text-color);
    text-align: center;
  }

  .apexcharts-zoom-icon svg,
  .apexcharts-zoomin-icon svg,
  .apexcharts-zoomout-icon svg,
  .apexcharts-reset-icon svg,
  .apexcharts-menu-icon svg {
    fill: var(--primary-text-color);
  }

  .apexcharts-selection-icon svg {
    fill: #444;
    transform: scale(0.76);
  }

  .apexcharts-theme-dark .apexcharts-zoom-icon svg,
  .apexcharts-theme-dark .apexcharts-zoomin-icon svg,
  .apexcharts-theme-dark .apexcharts-zoomout-icon svg,
  .apexcharts-theme-dark .apexcharts-reset-icon svg,
  .apexcharts-theme-dark .apexcharts-pan-icon svg,
  .apexcharts-theme-dark .apexcharts-selection-icon svg,
  .apexcharts-theme-dark .apexcharts-menu-icon svg,
  .apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {
    fill: #f3f4f5;
  }

  .apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,
  .apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
  .apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {
    fill: var(--primary-color);
  }

  .apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
  .apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
  .apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
  .apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,
  .apexcharts-theme-light .apexcharts-reset-icon:hover svg,
  .apexcharts-theme-light .apexcharts-menu-icon:hover svg {
    fill: var(--primary-color);
  }

  .apexcharts-selection-icon,
  .apexcharts-menu-icon {
    position: relative;
  }

  .apexcharts-reset-icon {
    margin-left: 5px;
  }

  .apexcharts-zoom-icon,
  .apexcharts-reset-icon,
  .apexcharts-menu-icon {
    transform: scale(0.85);
  }

  .apexcharts-zoomin-icon,
  .apexcharts-zoomout-icon {
    transform: scale(0.7);
  }

  .apexcharts-zoomout-icon {
    margin-right: 3px;
  }

  .apexcharts-pan-icon {
    transform: scale(0.62);
    position: relative;
    left: 1px;
    top: 0px;
  }

  .apexcharts-pan-icon svg {
    fill: var(--primary-text-color);
    stroke: rgba(0, 0, 0, 0);
    stroke-width: 2;
  }

  .apexcharts-pan-icon.apexcharts-selected svg {
    fill: var(--primary-color);
  }

  .apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
    stroke: var(--primary-color);
  }

  .apexcharts-toolbar {
    position: absolute;
    z-index: 11;
    max-width: 176px;
    text-align: right;
    border-radius: 3px;
    padding: 0px 6px 2px 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.5;
  }

  .apexcharts-menu {
    background: var(--primary-background-color);
    position: absolute;
    top: 100%;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 3px;
    right: 10px;
    opacity: 0;
    min-width: 110px;
    transition: 0.15s ease all;
    pointer-events: none;
  }

  .apexcharts-menu.apexcharts-menu-open {
    opacity: 1;
    pointer-events: all;
    transition: 0.15s ease all;
  }

  .apexcharts-menu-item {
    padding: 6px 7px;
    font-size: 12px;
    cursor: pointer;
  }

  .apexcharts-theme-light .apexcharts-menu-item:hover {
    background: var(--primary-color);
  }

  .apexcharts-theme-dark .apexcharts-menu {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    .apexcharts-canvas:hover .apexcharts-toolbar {
      opacity: 1;
    }
  }

  .apexcharts-datalabel.apexcharts-element-hidden {
    opacity: 0;
  }

  .apexcharts-pie-label,
  .apexcharts-datalabels,
  .apexcharts-datalabel,
  .apexcharts-datalabel-label,
  .apexcharts-datalabel-value {
    cursor: default;
    pointer-events: none;
  }

  .apexcharts-pie-label-delay {
    opacity: 0;
    animation-name: opaque;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }

  .apexcharts-canvas .apexcharts-element-hidden {
    opacity: 0;
  }

  .apexcharts-hide .apexcharts-series-points {
    opacity: 0;
  }

  .apexcharts-gridline,
  .apexcharts-annotation-rect,
  .apexcharts-tooltip .apexcharts-marker,
  .apexcharts-area-series .apexcharts-area,
  .apexcharts-line,
  .apexcharts-zoom-rect,
  .apexcharts-toolbar svg,
  .apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
  .apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
  .apexcharts-radar-series path,
  .apexcharts-radar-series polygon {
    pointer-events: none;
  }

  /* markers */

  .apexcharts-marker {
    transition: 0.15s ease all;
  }

  @keyframes opaque {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Resize generated styles */

  @keyframes resizeanim {
    from {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }

  .resize-triggers {
    animation: 1ms resizeanim;
    visibility: hidden;
    opacity: 0;
  }

  .resize-triggers,
  .resize-triggers > div,
  .contract-trigger:before {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .resize-triggers > div {
    background: #eee;
    overflow: auto;
  }

  .contract-trigger:before {
    width: 200%;
    height: 200%;
  }

  /* spinner */
  #spinner-wrapper {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 20px;
    width: 20px;
    opacity: 0.5;
  }

  #spinner {
    position: relative;
  }

  .lds-ring,
  .lds-ring div {
    box-sizing: border-box;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    margin: 2px;
    border: 2px solid var(--primary-text-color);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--primary-text-color) transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,zo={chart:{offsetY:15,parentHeightOffset:0},grid:{show:!1,padding:{left:0,right:0}},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{show:!0},tooltip:{enabled:!1}},yaxis:{show:!1,showAlways:!0,tooltip:{enabled:!0}},legend:{position:"top"}};var lo={months:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],shortMonths:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],days:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],shortDays:["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],toolbar:{exportToSVG:"تحميل بصيغة SVG",exportToPNG:"تحميل بصيغة PNG",exportToCSV:"تحميل بصيغة CSV",menu:"القائمة",selection:"تحديد",selectionZoom:"تكبير التحديد",zoomIn:"تكبير",zoomOut:"تصغير",pan:"تحريك",reset:"إعادة التعيين"}},Oo={name:"ar",options:lo},Ao=Object.freeze({__proto__:null,name:"ar",options:lo,default:Oo}),ho="be-cyrl",uo={months:["Студзень","Люты","Сакавік","Красавік","Травень","Чэрвень","Ліпень","Жнівень","Верасень","Кастрычнік","Лістапад","Сьнежань"],shortMonths:["Сту","Лют","Сак","Кра","Тра","Чэр","Ліп","Жні","Вер","Кас","Ліс","Сьн"],days:["Нядзеля","Панядзелак","Аўторак","Серада","Чацьвер","Пятніца","Субота"],shortDays:["Нд","Пн","Аў","Ср","Чц","Пт","Сб"],toolbar:{exportToSVG:"Спампаваць SVG",exportToPNG:"Спампаваць PNG",exportToCSV:"Спампаваць CSV",menu:"Мэню",selection:"Вылучэньне",selectionZoom:"Вылучэньне з маштабаваньнем",zoomIn:"Наблізіць",zoomOut:"Аддаліць",pan:"Ссоўваньне",reset:"Скінуць маштабаваньне"}},fo={name:ho,options:uo},qo=Object.freeze({__proto__:null,name:ho,options:uo,default:fo}),go="be-latn",Wo={months:["Studzień","Luty","Sakavik","Krasavik","Travień","Červień","Lipień","Žnivień","Vierasień","Kastryčnik","Listapad","Śniežań"],shortMonths:["Stu","Lut","Sak","Kra","Tra","Čer","Lip","Žni","Vie","Kas","Lis","Śni"],days:["Niadziela","Paniadziełak","Aŭtorak","Sierada","Čaćvier","Piatnica","Subota"],shortDays:["Nd","Pn","Aŭ","Sr","Čć","Pt","Sb"],toolbar:{exportToSVG:"Spampavać SVG",exportToPNG:"Spampavać PNG",exportToCSV:"Spampavać CSV",menu:"Meniu",selection:"Vyłučeńnie",selectionZoom:"Vyłučeńnie z maštabavańniem",zoomIn:"Nablizić",zoomOut:"Addalić",pan:"Ssoŭvańnie",reset:"Skinuć maštabavańnie"}},mo={name:go,options:Wo},xo=Object.freeze({__proto__:null,name:go,options:Wo,default:mo}),vo={months:["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],shortMonths:["Gen.","Febr.","Març","Abr.","Maig","Juny","Jul.","Ag.","Set.","Oct.","Nov.","Des."],days:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"],shortDays:["Dg","Dl","Dt","Dc","Dj","Dv","Ds"],toolbar:{exportToSVG:"Descarregar SVG",exportToPNG:"Descarregar PNG",exportToCSV:"Descarregar CSV",menu:"Menú",selection:"Seleccionar",selectionZoom:"Seleccionar Zoom",zoomIn:"Augmentar",zoomOut:"Disminuir",pan:"Navegació",reset:"Reiniciar Zoom"}},yo={name:"ca",options:vo},Ro=Object.freeze({__proto__:null,name:"ca",options:vo,default:yo}),Lo={months:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],shortMonths:["Led","Úno","Bře","Dub","Kvě","Čvn","Čvc","Srp","Zář","Říj","Lis","Pro"],days:["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"],shortDays:["Ne","Po","Út","St","Čt","Pá","So"],toolbar:{exportToSVG:"Stáhnout SVG",exportToPNG:"Stáhnout PNG",exportToCSV:"Stáhnout CSV",menu:"Menu",selection:"Vybrat",selectionZoom:"Zoom: Vybrat",zoomIn:"Zoom: Přiblížit",zoomOut:"Zoom: Oddálit",pan:"Přesouvat",reset:"Resetovat"}},wo={name:"cs",options:Lo},No=Object.freeze({__proto__:null,name:"cs",options:Lo,default:wo}),Bo={months:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],shortMonths:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],days:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],shortDays:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Valg",selectionZoom:"Zoom til valg",zoomIn:"Zoom ind",zoomOut:"Zoom ud",pan:"Panorér",reset:"Nulstil zoom"}},Xo={name:"da",options:Bo},So=Object.freeze({__proto__:null,name:"da",options:Bo,default:Xo}),ko={months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],shortMonths:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shortDays:["So","Mo","Di","Mi","Do","Fr","Sa"],toolbar:{exportToSVG:"SVG speichern",exportToPNG:"PNG speichern",exportToCSV:"CSV speichern",menu:"Menü",selection:"Auswahl",selectionZoom:"Auswahl vergrößern",zoomIn:"Vergrößern",zoomOut:"Verkleinern",pan:"Verschieben",reset:"Zoom zurücksetzen"}},_o={name:"de",options:ko},Co=Object.freeze({__proto__:null,name:"de",options:ko,default:_o}),To={months:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],shortMonths:["Ιαν","Φευ","Μαρ","Απρ","Μάι","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],days:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],shortDays:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],toolbar:{exportToSVG:"Λήψη SVG",exportToPNG:"Λήψη PNG",exportToCSV:"Λήψη CSV",menu:"Menu",selection:"Επιλογή",selectionZoom:"Μεγένθυση βάση επιλογής",zoomIn:"Μεγένθυνση",zoomOut:"Σμίκρυνση",pan:"Μετατόπιση",reset:"Επαναφορά μεγένθυνσης"}},Eo={name:"el",options:To},Po=Object.freeze({__proto__:null,name:"el",options:To,default:Eo}),Do={months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}},Io={name:"en",options:Do},Fo=Object.freeze({__proto__:null,name:"en",options:Do,default:Io}),Ho={months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],shortMonths:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],days:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],shortDays:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],toolbar:{exportToSVG:"Descargar SVG",exportToPNG:"Descargar PNG",exportToCSV:"Descargar CSV",menu:"Menu",selection:"Seleccionar",selectionZoom:"Seleccionar Zoom",zoomIn:"Aumentar",zoomOut:"Disminuir",pan:"Navegación",reset:"Reiniciar Zoom"}},Yo={name:"es",options:Ho},Go=Object.freeze({__proto__:null,name:"es",options:Ho,default:Yo}),Vo={months:["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"],shortMonths:["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets"],days:["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"],shortDays:["P","E","T","K","N","R","L"],toolbar:{exportToSVG:"Lae alla SVG",exportToPNG:"Lae alla PNG",exportToCSV:"Lae alla CSV",menu:"Menüü",selection:"Valik",selectionZoom:"Valiku suum",zoomIn:"Suurenda",zoomOut:"Vähenda",pan:"Panoraamimine",reset:"Lähtesta suum"}},jo={name:"et",options:Vo},Uo=Object.freeze({__proto__:null,name:"et",options:Vo,default:jo}),$o={months:["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],shortMonths:["فرو","ارد","خرد","تیر","مرد","شهر","مهر","آبا","آذر","دی","بهمـ","اسفـ"],days:["یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],shortDays:["ی","د","س","چ","پ","ج","ش"],toolbar:{exportToSVG:"دانلود SVG",exportToPNG:"دانلود PNG",exportToCSV:"دانلود CSV",menu:"منو",selection:"انتخاب",selectionZoom:"بزرگنمایی انتخابی",zoomIn:"بزرگنمایی",zoomOut:"کوچکنمایی",pan:"پیمایش",reset:"بازنشانی بزرگنمایی"}},Zo={name:"fa",options:$o},Ko=Object.freeze({__proto__:null,name:"fa",options:$o,default:Zo}),Jo={months:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],shortMonths:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"],days:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],shortDays:["Su","Ma","Ti","Ke","To","Pe","La"],toolbar:{exportToSVG:"Lataa SVG",exportToPNG:"Lataa PNG",exportToCSV:"Lataa CSV",menu:"Valikko",selection:"Valinta",selectionZoom:"Valinnan zoomaus",zoomIn:"Lähennä",zoomOut:"Loitonna",pan:"Panoroi",reset:"Nollaa zoomaus"}},Qo={name:"fi",options:Jo},ei=Object.freeze({__proto__:null,name:"fi",options:Jo,default:Qo}),ti={months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],shortMonths:["janv.","févr.","mars","avr.","mai","juin","juill.","août","sept.","oct.","nov.","déc."],days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],shortDays:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],toolbar:{exportToSVG:"Télécharger au format SVG",exportToPNG:"Télécharger au format PNG",exportToCSV:"Télécharger au format CSV",menu:"Menu",selection:"Sélection",selectionZoom:"Sélection et zoom",zoomIn:"Zoomer",zoomOut:"Dézoomer",pan:"Navigation",reset:"Réinitialiser le zoom"}},oi={name:"fr",options:ti},ii=Object.freeze({__proto__:null,name:"fr",options:ti,default:oi}),ai={months:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],shortMonths:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],days:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],shortDays:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],toolbar:{exportToSVG:"הורד SVG",exportToPNG:"הורד PNG",exportToCSV:"הורד CSV",menu:"תפריט",selection:"בחירה",selectionZoom:"זום בחירה",zoomIn:"הגדלה",zoomOut:"הקטנה",pan:"הזזה",reset:"איפוס תצוגה"}},ni={name:"he",options:ai},ri=Object.freeze({__proto__:null,name:"he",options:ai,default:ni}),bi={months:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"],shortMonths:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"],days:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],shortDays:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],toolbar:{exportToSVG:"निर्यात SVG",exportToPNG:"निर्यात PNG",exportToCSV:"निर्यात CSV",menu:"सूची",selection:"चयन",selectionZoom:"ज़ूम करना",zoomIn:"ज़ूम इन",zoomOut:"ज़ूम आउट",pan:"पैनिंग",reset:"फिर से कायम करना"}},pi={name:"hi",options:bi},si=Object.freeze({__proto__:null,name:"hi",options:bi,default:pi}),Mi={months:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],shortMonths:["Sij","Velj","Ožu","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"],days:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],shortDays:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],toolbar:{exportToSVG:"Preuzmi SVG",exportToPNG:"Preuzmi PNG",exportToCSV:"Preuzmi CSV",menu:"Izbornik",selection:"Odabir",selectionZoom:"Odabirno povećanje",zoomIn:"Uvećajte prikaz",zoomOut:"Umanjite prikaz",pan:"Pomicanje",reset:"Povratak na zadani prikaz"}},ci={name:"hr",options:Mi},zi=Object.freeze({__proto__:null,name:"hr",options:Mi,default:ci}),li={months:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],shortMonths:["jan","feb","mar","ápr","máj","jún","júl","aug","szept","okt","nov","dec"],days:["hétfő","kedd","szerda","csütörtök","péntek","szombat","vasárnap"],shortDays:["H","K","Sze","Cs","P","Szo","V"],toolbar:{exportToSVG:"Exportálás SVG-be",exportToPNG:"Exportálás PNG-be",exportToCSV:"Exportálás CSV-be",menu:"Fő ajánlat",download:"SVG letöltése",selection:"Kiválasztás",selectionZoom:"Nagyító kiválasztása",zoomIn:"Nagyítás",zoomOut:"Kicsinyítés",pan:"Képcsúsztatás",reset:"Nagyító visszaállítása"}},Oi={name:"hu",options:li},di=Object.freeze({__proto__:null,name:"hu",options:li,default:Oi}),Ai={months:["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"],shortMonths:["Հնվ","Փտվ","Մրտ","Ապր","Մյս","Հնս","Հլիս","Օգս","Սեպ","Հոկ","Նոյ","Դեկ"],days:["Կիրակի","Երկուշաբթի","Երեքշաբթի","Չորեքշաբթի","Հինգշաբթի","Ուրբաթ","Շաբաթ"],shortDays:["Կիր","Երկ","Երք","Չրք","Հնգ","Ուրբ","Շբթ"],toolbar:{exportToSVG:"Բեռնել SVG",exportToPNG:"Բեռնել PNG",exportToCSV:"Բեռնել CSV",menu:"Մենյու",selection:"Ընտրված",selectionZoom:"Ընտրված հատվածի խոշորացում",zoomIn:"Խոշորացնել",zoomOut:"Մանրացնել",pan:"Տեղափոխում",reset:"Բերել սկզբնական վիճակի"}},hi={name:"hy",options:Ai},ui=Object.freeze({__proto__:null,name:"hy",options:Ai,default:hi}),fi={months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],shortMonths:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],days:["Minggu","Senin","Selasa","Rabu","kamis","Jumat","Sabtu"],shortDays:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],toolbar:{exportToSVG:"Unduh SVG",exportToPNG:"Unduh PNG",exportToCSV:"Unduh CSV",menu:"Menu",selection:"Pilihan",selectionZoom:"Perbesar Pilihan",zoomIn:"Perbesar",zoomOut:"Perkecil",pan:"Geser",reset:"Atur Ulang Zoom"}},qi={name:"id",options:fi},gi=Object.freeze({__proto__:null,name:"id",options:fi,default:qi}),Wi={months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],shortMonths:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],days:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],shortDays:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],toolbar:{exportToSVG:"Scarica SVG",exportToPNG:"Scarica PNG",exportToCSV:"Scarica CSV",menu:"Menu",selection:"Selezione",selectionZoom:"Seleziona Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Sposta",reset:"Reimposta Zoom"}},mi={name:"it",options:Wi},xi=Object.freeze({__proto__:null,name:"it",options:Wi,default:mi}),vi={months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],shortMonths:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],days:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],shortDays:["日","月","火","水","木","金","土"],toolbar:{exportToSVG:"SVGダウンロード",exportToPNG:"PNGダウンロード",exportToCSV:"CSVダウンロード",menu:"メニュー",selection:"選択",selectionZoom:"選択ズーム",zoomIn:"拡大",zoomOut:"縮小",pan:"パン",reset:"ズームリセット"}},yi={name:"ja",options:vi},Ri=Object.freeze({__proto__:null,name:"ja",options:vi,default:yi}),Li={months:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],shortMonths:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],days:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],shortDays:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],toolbar:{exportToSVG:"გადმოქაჩე SVG",exportToPNG:"გადმოქაჩე PNG",exportToCSV:"გადმოქაჩე CSV",menu:"მენიუ",selection:"არჩევა",selectionZoom:"არჩეულის გადიდება",zoomIn:"გადიდება",zoomOut:"დაპატარაება",pan:"გადაჩოჩება",reset:"გადიდების გაუქმება"}},wi={name:"ka",options:Li},Ni=Object.freeze({__proto__:null,name:"ka",options:Li,default:wi}),Bi={months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],shortMonths:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],days:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],shortDays:["일","월","화","수","목","금","토"],toolbar:{exportToSVG:"SVG 다운로드",exportToPNG:"PNG 다운로드",exportToCSV:"CSV 다운로드",menu:"메뉴",selection:"선택",selectionZoom:"선택영역 확대",zoomIn:"확대",zoomOut:"축소",pan:"패닝",reset:"원래대로"}},Xi={name:"ko",options:Bi},Si=Object.freeze({__proto__:null,name:"ko",options:Bi,default:Xi}),ki={months:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],shortMonths:["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rgp","Rgs","Spl","Lap","Grd"],days:["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis"],shortDays:["Sk","Per","An","Tr","Kt","Pn","Št"],toolbar:{exportToSVG:"Atsisiųsti SVG",exportToPNG:"Atsisiųsti PNG",exportToCSV:"Atsisiųsti CSV",menu:"Menu",selection:"Pasirinkimas",selectionZoom:"Zoom: Pasirinkimas",zoomIn:"Zoom: Priartinti",zoomOut:"Zoom: Atitolinti",pan:"Perkėlimas",reset:"Atstatyti"}},_i={name:"lt",options:ki},Ci=Object.freeze({__proto__:null,name:"lt",options:ki,default:_i}),Ti={months:["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris"],shortMonths:["janv","febr","marts","apr","maijs","jūn","jūl","aug","sept","okt","nov","dec"],days:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],shortDays:["Sv","P","O","T","C","P","S"],toolbar:{exportToSVG:"Lejuplādēt SVG",exportToPNG:"Lejuplādēt PNG",exportToCSV:"Lejuplādēt CSV",menu:"Izvēlne",selection:"Atlase",selectionZoom:"Pietuvināt atlasi",zoomIn:"Pietuvināt",zoomOut:"Attālināt",pan:"Pārvietoties diagrammā",reset:"Atiestatīt pietuvinājumu"}},Ei={name:"lv",options:Ti},Pi=Object.freeze({__proto__:null,name:"lv",options:Ti,default:Ei}),Di={months:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],shortMonths:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogos","Sep","Okt","Nov","Dis"],days:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],shortDays:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],toolbar:{exportToSVG:"Muat turun SVG",exportToPNG:"Muat turun PNG",exportToCSV:"Muat turun CSV",menu:"Menu",selection:"Pilihan",selectionZoom:"Zum Pilihan",zoomIn:"Zoom Masuk",zoomOut:"Zoom Keluar",pan:"Pemusingan",reset:"Tetapkan Semula Zum"}},Ii={name:"ms",options:Di},Fi=Object.freeze({__proto__:null,name:"ms",options:Di,default:Ii}),Hi={months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],shortMonths:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],days:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],shortDays:["Sø","Ma","Ti","On","To","Fr","Lø"],toolbar:{exportToSVG:"Last ned SVG",exportToPNG:"Last ned PNG",exportToCSV:"Last ned CSV",menu:"Menu",selection:"Velg",selectionZoom:"Zoom: Velg",zoomIn:"Zoome inn",zoomOut:"Zoome ut",pan:"Skyving",reset:"Start på nytt"}},Yi={name:"nb",options:Hi},Gi=Object.freeze({__proto__:null,name:"nb",options:Hi,default:Yi}),Vi={months:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],shortMonths:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],days:["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"],shortDays:["Zo","Ma","Di","Wo","Do","Vr","Za"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selectie",selectionZoom:"Zoom selectie",zoomIn:"Zoom in",zoomOut:"Zoom out",pan:"Verplaatsen",reset:"Standaardwaarden"}},ji={name:"nl",options:Vi},Ui=Object.freeze({__proto__:null,name:"nl",options:Vi,default:ji}),$i={months:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],shortMonths:["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],days:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],shortDays:["Nd","Pn","Wt","Śr","Cz","Pt","Sb"],toolbar:{exportToSVG:"Pobierz SVG",exportToPNG:"Pobierz PNG",exportToCSV:"Pobierz CSV",menu:"Menu",selection:"Wybieranie",selectionZoom:"Zoom: Wybieranie",zoomIn:"Zoom: Przybliż",zoomOut:"Zoom: Oddal",pan:"Przesuwanie",reset:"Resetuj"}},Zi={name:"pl",options:$i},Ki=Object.freeze({__proto__:null,name:"pl",options:$i,default:Zi}),Ji="pt-br",Qi={months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],days:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],toolbar:{exportToSVG:"Baixar SVG",exportToPNG:"Baixar PNG",exportToCSV:"Baixar CSV",menu:"Menu",selection:"Selecionar",selectionZoom:"Selecionar Zoom",zoomIn:"Aumentar",zoomOut:"Diminuir",pan:"Navegação",reset:"Reiniciar Zoom"}},ea={name:Ji,options:Qi},ta=Object.freeze({__proto__:null,name:Ji,options:Qi,default:ea}),oa={months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ag","Set","Out","Nov","Dez"],days:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],shortDays:["Do","Se","Te","Qa","Qi","Sx","Sa"],toolbar:{exportToSVG:"Transferir SVG",exportToPNG:"Transferir PNG",exportToCSV:"Transferir CSV",menu:"Menu",selection:"Selecionar",selectionZoom:"Zoom: Selecionar",zoomIn:"Zoom: Aumentar",zoomOut:"Zoom: Diminuir",pan:"Deslocamento",reset:"Redefinir"}},ia={name:"pt",options:oa},aa=Object.freeze({__proto__:null,name:"pt",options:oa,default:ia}),na={months:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],shortMonths:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],days:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"],shortDays:["Ned","Pon","Uto","Sre","Čet","Pet","Sub"],toolbar:{exportToSVG:"Preuzmi SVG",exportToPNG:"Preuzmi PNG",exportToCSV:"Preuzmi CSV",menu:"Meni",selection:"Odabir",selectionZoom:"Odabirno povećanje",zoomIn:"Uvećajte prikaz",zoomOut:"Umanjite prikaz",pan:"Pomeranje",reset:"Resetuj prikaz"}},ra={name:"rs",options:na},ba=Object.freeze({__proto__:null,name:"rs",options:na,default:ra}),pa={months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],shortDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],toolbar:{exportToSVG:"Сохранить SVG",exportToPNG:"Сохранить PNG",exportToCSV:"Сохранить CSV",menu:"Меню",selection:"Выбор",selectionZoom:"Выбор с увеличением",zoomIn:"Увеличить",zoomOut:"Уменьшить",pan:"Перемещение",reset:"Сбросить увеличение"}},sa={name:"ru",options:pa},Ma=Object.freeze({__proto__:null,name:"ru",options:pa,default:sa}),ca={months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],shortMonths:["Jan","Feb","Mar","Apr","Maj","Juni","Juli","Aug","Sep","Okt","Nov","Dec"],days:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],shortDays:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],toolbar:{exportToSVG:"Ladda SVG",exportToPNG:"Ladda PNG",exportToCSV:"Ladda CSV",menu:"Meny",selection:"Selektion",selectionZoom:"Val av zoom",zoomIn:"Zooma in",zoomOut:"Zooma ut",pan:"Panorering",reset:"Återställ zoomning"}},za={name:"se",options:ca},la=Object.freeze({__proto__:null,name:"se",options:ca,default:za}),Oa={months:["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],shortMonths:["Jan","Feb","Mar","Apr","Máj","Jún","Júl","Aug","Sep","Okt","Nov","Dec"],days:["Nedeľa","Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota"],shortDays:["Ne","Po","Ut","St","Št","Pi","So"],toolbar:{exportToSVG:"Stiahnuť SVG",exportToPNG:"Stiahnuť PNG",exportToCSV:"Stiahnuť CSV",menu:"Menu",selection:"Vyberanie",selectionZoom:"Zoom: Vyberanie",zoomIn:"Zoom: Priblížiť",zoomOut:"Zoom: Vzdialiť",pan:"Presúvanie",reset:"Resetovať"}},da={name:"sk",options:Oa},Aa=Object.freeze({__proto__:null,name:"sk",options:Oa,default:da}),ha={months:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","Septemer","Oktober","November","December"],shortMonths:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],days:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"],shortDays:["Ne","Po","To","Sr","Če","Pe","So"],toolbar:{exportToSVG:"Prenesi SVG",exportToPNG:"Prenesi PNG",exportToCSV:"Prenesi CSV",menu:"Menu",selection:"Izbiranje",selectionZoom:"Zoom: Izbira",zoomIn:"Zoom: Približaj",zoomOut:"Zoom: Oddalji",pan:"Pomikanje",reset:"Resetiraj"}},ua={name:"sl",options:ha},fa=Object.freeze({__proto__:null,name:"sl",options:ha,default:ua}),qa={months:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],shortMonths:["Jan","Shk","Mar","Pr","Maj","Qer","Korr","Gush","Sht","Tet","Nën","Dhj"],days:["e Dielë","e Hënë","e Martë","e Mërkurë","e Enjte","e Premte","e Shtunë"],shortDays:["Die","Hën","Mar","Mër","Enj","Pre","Sht"],toolbar:{exportToSVG:"Shkarko SVG",exportToPNG:"Shkarko PNG",exportToCSV:"Shkarko CSV",menu:"Menu",selection:"Seleksiono",selectionZoom:"Seleksiono Zmadhim",zoomIn:"Zmadho",zoomOut:"Zvogëlo",pan:"Spostoje",reset:"Rikthe dimensionin"}},ga={name:"sq",options:qa},Wa=Object.freeze({__proto__:null,name:"sq",options:qa,default:ga}),ma={months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],shortMonths:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],days:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],shortDays:["อา","จ","อ","พ","พฤ","ศ","ส"],toolbar:{exportToSVG:"ดาวน์โหลด SVG",exportToPNG:"ดาวน์โหลด PNG",exportToCSV:"ดาวน์โหลด CSV",menu:"เมนู",selection:"เลือก",selectionZoom:"เลือกจุดที่จะซูม",zoomIn:"ซูมเข้า",zoomOut:"ซูมออก",pan:"ปรากฎว่า",reset:"รีเซ็ตการซูม"}},xa={name:"th",options:ma},va=Object.freeze({__proto__:null,name:"th",options:ma,default:xa}),ya={months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],shortMonths:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],days:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],shortDays:["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],toolbar:{exportToSVG:"SVG İndir",exportToPNG:"PNG İndir",exportToCSV:"CSV İndir",menu:"Menü",selection:"Seçim",selectionZoom:"Seçim Yakınlaştır",zoomIn:"Yakınlaştır",zoomOut:"Uzaklaştır",pan:"Kaydır",reset:"Yakınlaştırmayı Sıfırla"}},Ra={name:"tr",options:ya},La=Object.freeze({__proto__:null,name:"tr",options:ya,default:Ra}),wa={months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],shortMonths:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],days:["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"],shortDays:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],toolbar:{exportToSVG:"Зберегти SVG",exportToPNG:"Зберегти PNG",exportToCSV:"Зберегти CSV",menu:"Меню",selection:"Вибір",selectionZoom:"Вибір із збільшенням",zoomIn:"Збільшити",zoomOut:"Зменшити",pan:"Переміщення",reset:"Скинути збільшення"}},Na={name:"ua",options:wa},Ba=Object.freeze({__proto__:null,name:"ua",options:wa,default:Na}),Xa={months:["Tháng 01","Tháng 02","Tháng 03","Tháng 04","Tháng 05","Tháng 06","Tháng 07","Tháng 08","Tháng 09","Tháng 10","Tháng 11","Tháng 12"],shortMonths:["Th01","Th02","Th03","Th04","Th05","Th06","Th07","Th08","Th09","Th10","Th11","Th12"],days:["Chủ nhật","Thứ hai","Thứ ba","Thứ Tư","Thứ năm","Thứ sáu","Thứ bảy"],shortDays:["CN","T2","T3","T4","T5","T6","T7"],toolbar:{exportToSVG:"Tải xuống SVG",exportToPNG:"Tải xuống PNG",exportToCSV:"Tải xuống CSV",menu:"Tuỳ chọn",selection:"Vùng chọn",selectionZoom:"Vùng chọn phóng to",zoomIn:"Phóng to",zoomOut:"Thu nhỏ",pan:"Di chuyển",reset:"Đặt lại thu phóng"}},Sa={name:"vi",options:Xa},ka=Object.freeze({__proto__:null,name:"vi",options:Xa,default:Sa}),_a="zh-cn",Ca={months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],days:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],shortDays:["周日","周一","周二","周三","周四","周五","周六"],toolbar:{exportToSVG:"下载 SVG",exportToPNG:"下载 PNG",exportToCSV:"下载 CSV",menu:"菜单",selection:"选择",selectionZoom:"选择缩放",zoomIn:"放大",zoomOut:"缩小",pan:"平移",reset:"重置缩放"}},Ta={name:_a,options:Ca},Ea=Object.freeze({__proto__:null,name:_a,options:Ca,default:Ta}),Pa="zh-tw",Da={months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],shortDays:["週日","週一","週二","週三","週四","週五","週六"],toolbar:{exportToSVG:"下載 SVG",exportToPNG:"下載 PNG",exportToCSV:"下載 CSV",menu:"選單",selection:"選擇",selectionZoom:"選擇縮放",zoomIn:"放大",zoomOut:"縮小",pan:"平移",reset:"重置縮放"}},Ia={name:Pa,options:Da},Fa=Object.freeze({__proto__:null,name:Pa,options:Da,default:Ia});function Ha(){return{ar:Ao,"be-cyrl":qo,"be-latn":xo,ca:Ro,cs:No,da:So,de:Co,el:Po,en:Fo,es:Go,et:Uo,fa:Ko,fi:ei,fr:ii,he:ri,hi:si,hr:zi,hu:di,hy:ui,id:gi,it:xi,ja:Ri,ka:Ni,ko:Si,lt:Ci,lv:Pi,ms:Fi,nb:Gi,nl:Ui,pl:Ki,"pt-br":ta,pt:aa,rs:ba,ru:Ma,se:la,sk:Aa,sl:fa,sq:Wa,th:va,tr:La,ua:Ba,vi:ka,"zh-cn":Ea,"zh-tw":Fa}}function Ya(){return Fo}function Ga(e,t){return(t?e.series_in_brush:e.series_in_graph).map((e=>void 0!==e.opacity?e.opacity:"area"===e.type?It:1))}function Va(e,t,o){const i=o?e.series_in_brush:e.series_in_graph;return Pt.includes(e.chart_type)?i.map(((o,a)=>({name:Vt(a,i,void 0,null==t?void 0:t.states[o.entity]),group:e.stacked&&"column"===o.type?o.stack_group:void 0,type:o.type,data:[]}))):[]}function ja(e,t){return Pt.includes(e.chart_type)?[]:e.series_in_graph.map(((o,i)=>Vt(i,e.series_in_graph,void 0,null==t?void 0:t.states[o.entity])))}function Ua(e,t){if(Pt.includes(e.chart_type)){return{type:"datetime",labels:{datetimeUTC:!1,datetimeFormatter:Za(ro(e,t))}}}return{}}function $a(e){var t;return Array.isArray(null===(t=e.apex_config)||void 0===t?void 0:t.yaxis)||e.yaxis?void 0:{decimalsInFloat:Ct}}function Za(e){return e?{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"hh:mm tt",minute:"hh:mm:ss tt"}:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss"}}function Ka(e,t){var o,i,a,n;if(null===(a=null===(i=null===(o=e.apex_config)||void 0===o?void 0:o.tooltip)||void 0===i?void 0:i.x)||void 0===a?void 0:a.format)return;let r;const b=e.locale||(null==t?void 0:t.language)||"en";return r=ro(e,t)?{hour12:!0}:{hourCycle:"h23"},ut(e.graph_span)<Rt&&!(null===(n=e.span)||void 0===n?void 0:n.offset)?function(e,t,o,i=r){return new Intl.DateTimeFormat(b,Object.assign({hour:"numeric",minute:"numeric",second:"numeric"},i)).format(e)}:function(e,t,o,i=r){return new Intl.DateTimeFormat(b,Object.assign({year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},i)).format(e)}}function Ja(e,t){return function(o,i,a=e,n=t){var r,b,p;let s=o;(null===(r=a.series_in_graph[i.seriesIndex])||void 0===r?void 0:r.invert)&&s&&(s=-s),(null===(b=a.series_in_graph[i.seriesIndex])||void 0===b?void 0:b.show.as_duration)||(s=po(s,null==t?void 0:t.locale,a.series_in_graph[i.seriesIndex].float_precision));const M=jt(i.seriesIndex,a.series_in_graph,void 0,null==n?void 0:n.states[a.series_in_graph[i.seriesIndex].entity]);return(null===(p=a.series_in_graph[i.seriesIndex])||void 0===p?void 0:p.show.as_duration)?[`<strong>${Qt(s,a.series_in_graph[i.seriesIndex].show.as_duration)}</strong>`]:[`<strong>${s} ${M}</strong>`]}}function Qa(e){return!Pt.includes(e.chart_type)||e.series_in_graph.some((e=>e.show.datalabels))}function en(e,t,o){return"pie"===e.chart_type||"donut"===e.chart_type?function(i,a,n=t,r=e,b=o){var p;return!1!==r.series_in_graph[a.seriesIndex].show.datalabels?"percent"===r.series_in_graph[a.seriesIndex].show.datalabels?po(i,null==b?void 0:b.locale,r.series_in_graph[a.seriesIndex].float_precision):po(null===(p=null==n?void 0:n[r.series_in_graph[a.seriesIndex].index])||void 0===p?void 0:p.lastState,null==b?void 0:b.locale,r.series_in_graph[a.seriesIndex].float_precision):""}:function(t,i,a=e,n=o){var r;if("total"===a.series_in_graph[i.seriesIndex].show.datalabels)return po(i.w.globals.stackedSeriesTotals[i.dataPointIndex],null==n?void 0:n.locale,a.series_in_graph[i.seriesIndex].float_precision);if(null===t)return;let b=t;return(null===(r=a.series_in_graph[i.seriesIndex])||void 0===r?void 0:r.invert)&&b&&(b=-b),po(b,null==n?void 0:n.locale,a.series_in_graph[i.seriesIndex].float_precision)}}function tn(e,t){return"radialBar"===e.chart_type?{track:{background:"rgba(128, 128, 128, 0.2)"},dataLabels:{value:{formatter:function(o,i,a=e,n=t){var r,b;const p=null===(b=null===(r=null==i?void 0:i.config)||void 0===r?void 0:r.series)||void 0===b?void 0:b.findIndex((e=>parseFloat(o)===e));return-1!=p?po(o,null==n?void 0:n.locale,a.series_in_graph[p].float_precision)+"%":o}}}}:{}}function on(e,t){return function(o,i,a=e,n=t){var r,b,p;const s=Vt(i.seriesIndex,a.series_in_graph,void 0,null==n?void 0:n.states[a.series_in_graph[i.seriesIndex].entity]);if(!a.series_in_graph[i.seriesIndex].show.in_legend)return[];if(a.series_in_graph[i.seriesIndex].show.legend_value){let t=Pt.includes(e.chart_type)?i.w.globals.series[i.seriesIndex].slice(-1)[0]:i.w.globals.series[i.seriesIndex];(null===(r=a.series_in_graph[i.seriesIndex])||void 0===r?void 0:r.invert)&&t&&(t=-t),(null===(b=a.series_in_graph[i.seriesIndex])||void 0===b?void 0:b.show.as_duration)||(t=po(t,null==n?void 0:n.locale,a.series_in_graph[i.seriesIndex].float_precision));const o="radialBar"===e.chart_type?"%":jt(i.seriesIndex,a.series_in_graph,void 0,null==n?void 0:n.states[a.series_in_graph[i.seriesIndex].entity]);let M="";return M=null==t?`<strong>${Et} ${o}</strong>`:(null===(p=a.series_in_graph[i.seriesIndex])||void 0===p?void 0:p.show.as_duration)?`<strong>${Qt(t,a.series_in_graph[i.seriesIndex].show.as_duration)}</strong>`:`<strong>${t} ${o}</strong>`,[s+":",M]}return[s]}}function an(e){return{size:e.series_in_graph.map((e=>e.show.in_legend?Ft:0))}}function nn(e,t){return(t?e.series_in_brush:e.series_in_graph).map((e=>e.curve||"smooth"))}function rn(e){return e.series_in_graph.flatMap(((e,t)=>e.show.datalabels?[t]:[]))}function bn(e,t){var o,i,a,n;if(void 0!==e.chart_type&&"line"!==e.chart_type)return void 0===(null===(i=null===(o=e.apex_config)||void 0===o?void 0:o.stroke)||void 0===i?void 0:i.width)?3:null===(n=null===(a=e.apex_config)||void 0===a?void 0:a.stroke)||void 0===n?void 0:n.width;return(t?e.series_in_brush:e.series_in_graph).map((e=>void 0!==e.stroke_width?e.stroke_width:[void 0,"line","area"].includes(e.type)?5:0))}function pn(e,t){return(t?e.series_in_brush:e.series_in_graph).map((e=>e.stroke_dash))}function sn(e,t){var o,i,a,n,r,b;if(null===(o=e.experimental)||void 0===o?void 0:o.color_threshold){return(t?e.series_in_brush:e.series_in_graph).map((t=>!Dt.includes(e.chart_type)&&"column"!==t.type&&t.color_threshold&&t.color_threshold.length>0?"gradient":"solid"))}return t?(null===(n=null===(a=null===(i=e.brush)||void 0===i?void 0:i.apex_config)||void 0===a?void 0:a.fill)||void 0===n?void 0:n.type)||"solid":(null===(b=null===(r=e.apex_config)||void 0===r?void 0:r.fill)||void 0===b?void 0:b.type)||"solid"}function Mn(e){const t=eval;return Object.keys(e).forEach((o=>{"string"==typeof e[o]&&e[o].trim().startsWith("EVAL:")&&(e[o]=t(`(${e[o].trim().slice(5)})`)),"object"==typeof e[o]&&(e[o]=Mn(e[o]))})),e}var cn={exports:{}};cn.exports=function(e){var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function o(e,t){var o=e[0],i=e[1],a=e[2],n=e[3];i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&a|~i&n)+t[0]-680876936|0)<<7|o>>>25)+i|0)&i|~o&a)+t[1]-389564586|0)<<12|n>>>20)+o|0)&o|~n&i)+t[2]+606105819|0)<<17|a>>>15)+n|0)&n|~a&o)+t[3]-1044525330|0)<<22|i>>>10)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&a|~i&n)+t[4]-176418897|0)<<7|o>>>25)+i|0)&i|~o&a)+t[5]+1200080426|0)<<12|n>>>20)+o|0)&o|~n&i)+t[6]-1473231341|0)<<17|a>>>15)+n|0)&n|~a&o)+t[7]-45705983|0)<<22|i>>>10)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&a|~i&n)+t[8]+1770035416|0)<<7|o>>>25)+i|0)&i|~o&a)+t[9]-1958414417|0)<<12|n>>>20)+o|0)&o|~n&i)+t[10]-42063|0)<<17|a>>>15)+n|0)&n|~a&o)+t[11]-1990404162|0)<<22|i>>>10)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&a|~i&n)+t[12]+1804603682|0)<<7|o>>>25)+i|0)&i|~o&a)+t[13]-40341101|0)<<12|n>>>20)+o|0)&o|~n&i)+t[14]-1502002290|0)<<17|a>>>15)+n|0)&n|~a&o)+t[15]+1236535329|0)<<22|i>>>10)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&n|a&~n)+t[1]-165796510|0)<<5|o>>>27)+i|0)&a|i&~a)+t[6]-1069501632|0)<<9|n>>>23)+o|0)&i|o&~i)+t[11]+643717713|0)<<14|a>>>18)+n|0)&o|n&~o)+t[0]-373897302|0)<<20|i>>>12)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&n|a&~n)+t[5]-701558691|0)<<5|o>>>27)+i|0)&a|i&~a)+t[10]+38016083|0)<<9|n>>>23)+o|0)&i|o&~i)+t[15]-660478335|0)<<14|a>>>18)+n|0)&o|n&~o)+t[4]-405537848|0)<<20|i>>>12)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&n|a&~n)+t[9]+568446438|0)<<5|o>>>27)+i|0)&a|i&~a)+t[14]-1019803690|0)<<9|n>>>23)+o|0)&i|o&~i)+t[3]-187363961|0)<<14|a>>>18)+n|0)&o|n&~o)+t[8]+1163531501|0)<<20|i>>>12)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i&n|a&~n)+t[13]-1444681467|0)<<5|o>>>27)+i|0)&a|i&~a)+t[2]-51403784|0)<<9|n>>>23)+o|0)&i|o&~i)+t[7]+1735328473|0)<<14|a>>>18)+n|0)&o|n&~o)+t[12]-1926607734|0)<<20|i>>>12)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i^a^n)+t[5]-378558|0)<<4|o>>>28)+i|0)^i^a)+t[8]-2022574463|0)<<11|n>>>21)+o|0)^o^i)+t[11]+1839030562|0)<<16|a>>>16)+n|0)^n^o)+t[14]-35309556|0)<<23|i>>>9)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i^a^n)+t[1]-1530992060|0)<<4|o>>>28)+i|0)^i^a)+t[4]+1272893353|0)<<11|n>>>21)+o|0)^o^i)+t[7]-155497632|0)<<16|a>>>16)+n|0)^n^o)+t[10]-1094730640|0)<<23|i>>>9)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i^a^n)+t[13]+681279174|0)<<4|o>>>28)+i|0)^i^a)+t[0]-358537222|0)<<11|n>>>21)+o|0)^o^i)+t[3]-722521979|0)<<16|a>>>16)+n|0)^n^o)+t[6]+76029189|0)<<23|i>>>9)+a|0,i=((i+=((a=((a+=((n=((n+=((o=((o+=(i^a^n)+t[9]-640364487|0)<<4|o>>>28)+i|0)^i^a)+t[12]-421815835|0)<<11|n>>>21)+o|0)^o^i)+t[15]+530742520|0)<<16|a>>>16)+n|0)^n^o)+t[2]-995338651|0)<<23|i>>>9)+a|0,i=((i+=((n=((n+=(i^((o=((o+=(a^(i|~n))+t[0]-198630844|0)<<6|o>>>26)+i|0)|~a))+t[7]+1126891415|0)<<10|n>>>22)+o|0)^((a=((a+=(o^(n|~i))+t[14]-1416354905|0)<<15|a>>>17)+n|0)|~o))+t[5]-57434055|0)<<21|i>>>11)+a|0,i=((i+=((n=((n+=(i^((o=((o+=(a^(i|~n))+t[12]+1700485571|0)<<6|o>>>26)+i|0)|~a))+t[3]-1894986606|0)<<10|n>>>22)+o|0)^((a=((a+=(o^(n|~i))+t[10]-1051523|0)<<15|a>>>17)+n|0)|~o))+t[1]-2054922799|0)<<21|i>>>11)+a|0,i=((i+=((n=((n+=(i^((o=((o+=(a^(i|~n))+t[8]+1873313359|0)<<6|o>>>26)+i|0)|~a))+t[15]-30611744|0)<<10|n>>>22)+o|0)^((a=((a+=(o^(n|~i))+t[6]-1560198380|0)<<15|a>>>17)+n|0)|~o))+t[13]+1309151649|0)<<21|i>>>11)+a|0,i=((i+=((n=((n+=(i^((o=((o+=(a^(i|~n))+t[4]-145523070|0)<<6|o>>>26)+i|0)|~a))+t[11]-1120210379|0)<<10|n>>>22)+o|0)^((a=((a+=(o^(n|~i))+t[2]+718787259|0)<<15|a>>>17)+n|0)|~o))+t[9]-343485551|0)<<21|i>>>11)+a|0,e[0]=o+e[0]|0,e[1]=i+e[1]|0,e[2]=a+e[2]|0,e[3]=n+e[3]|0}function i(e){var t,o=[];for(t=0;t<64;t+=4)o[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return o}function a(e){var t,o=[];for(t=0;t<64;t+=4)o[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return o}function n(e){var t,a,n,r,b,p,s=e.length,M=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=s;t+=64)o(M,i(e.substring(t-64,t)));for(a=(e=e.substring(t-64)).length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<a;t+=1)n[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(n[t>>2]|=128<<(t%4<<3),t>55)for(o(M,n),t=0;t<16;t+=1)n[t]=0;return r=(r=8*s).toString(16).match(/(.*?)(.{0,8})$/),b=parseInt(r[2],16),p=parseInt(r[1],16)||0,n[14]=b,n[15]=p,o(M,n),M}function r(e){var t,i,n,r,b,p,s=e.length,M=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=s;t+=64)o(M,a(e.subarray(t-64,t)));for(i=(e=t-64<s?e.subarray(t-64):new Uint8Array(0)).length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<i;t+=1)n[t>>2]|=e[t]<<(t%4<<3);if(n[t>>2]|=128<<(t%4<<3),t>55)for(o(M,n),t=0;t<16;t+=1)n[t]=0;return r=(r=8*s).toString(16).match(/(.*?)(.{0,8})$/),b=parseInt(r[2],16),p=parseInt(r[1],16)||0,n[14]=b,n[15]=p,o(M,n),M}function b(e){var o,i="";for(o=0;o<4;o+=1)i+=t[e>>8*o+4&15]+t[e>>8*o&15];return i}function p(e){var t;for(t=0;t<e.length;t+=1)e[t]=b(e[t]);return e.join("")}function s(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function M(e,t){var o,i=e.length,a=new ArrayBuffer(i),n=new Uint8Array(a);for(o=0;o<i;o+=1)n[o]=e.charCodeAt(o);return t?n:a}function c(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function z(e,t,o){var i=new Uint8Array(e.byteLength+t.byteLength);return i.set(new Uint8Array(e)),i.set(new Uint8Array(t),e.byteLength),o?i:i.buffer}function l(e){var t,o=[],i=e.length;for(t=0;t<i-1;t+=2)o.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,o)}function O(){this.reset()}return p(n("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(o,i){var a,n,r,b,p=this.byteLength,s=t(o,p),M=p;return i!==e&&(M=t(i,p)),s>M?new ArrayBuffer(0):(a=M-s,n=new ArrayBuffer(a),r=new Uint8Array(n),b=new Uint8Array(this,s,a),r.set(b),n)}}(),O.prototype.append=function(e){return this.appendBinary(s(e)),this},O.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,a=this._buff.length;for(t=64;t<=a;t+=64)o(this._hash,i(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},O.prototype.end=function(e){var t,o,i=this._buff,a=i.length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<a;t+=1)n[t>>2]|=i.charCodeAt(t)<<(t%4<<3);return this._finish(n,a),o=p(this._hash),e&&(o=l(o)),this.reset(),o},O.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},O.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},O.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},O.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},O.prototype._finish=function(e,t){var i,a,n,r=t;if(e[r>>2]|=128<<(r%4<<3),r>55)for(o(this._hash,e),r=0;r<16;r+=1)e[r]=0;i=(i=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(i[2],16),n=parseInt(i[1],16)||0,e[14]=a,e[15]=n,o(this._hash,e)},O.hash=function(e,t){return O.hashBinary(s(e),t)},O.hashBinary=function(e,t){var o=p(n(e));return t?l(o):o},O.ArrayBuffer=function(){this.reset()},O.ArrayBuffer.prototype.append=function(e){var t,i=z(this._buff.buffer,e,!0),n=i.length;for(this._length+=e.byteLength,t=64;t<=n;t+=64)o(this._hash,a(i.subarray(t-64,t)));return this._buff=t-64<n?new Uint8Array(i.buffer.slice(t-64)):new Uint8Array(0),this},O.ArrayBuffer.prototype.end=function(e){var t,o,i=this._buff,a=i.length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<a;t+=1)n[t>>2]|=i[t]<<(t%4<<3);return this._finish(n,a),o=p(this._hash),e&&(o=l(o)),this.reset(),o},O.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},O.ArrayBuffer.prototype.getState=function(){var e=O.prototype.getState.call(this);return e.buff=c(e.buff),e},O.ArrayBuffer.prototype.setState=function(e){return e.buff=M(e.buff,!0),O.prototype.setState.call(this,e)},O.ArrayBuffer.prototype.destroy=O.prototype.destroy,O.ArrayBuffer.prototype._finish=O.prototype._finish,O.ArrayBuffer.hash=function(e,t){var o=p(r(new Uint8Array(e)));return t?l(o):o},O}();var zn=cn.exports;class ln{constructor(e,t,o,i,a){this._updating=!1,this._useCompress=!1;const n={avg:this._average,max:this._maximum,min:this._minimum,first:this._first,last:this._last,sum:this._sum,median:this._median,delta:this._delta,diff:this._diff};this._index=e,this._cache=!i.statistics&&o,this._entityID=i.entity,this._graphSpan=t,this._config=i,this._func=n[i.group_by.func],this._realEnd=new Date,this._realStart=new Date,this._groupByDurationMs=ut(this._config.group_by.duration),this._md5Config=zn.hash(`${this._graphSpan}${JSON.stringify(this._config)}${JSON.stringify(a)}`)}set hass(e){this._hass=e,this._entityState=this._hass.states[this._entityID]}get history(){return this._computedHistory||[]}get index(){return this._index}get start(){return this._realStart}get end(){return this._realEnd}set cache(e){this._cache=!this._config.statistics&&e}get lastState(){return this.history.length>0?this.history[this.history.length-1][1]:null}nowValue(e,t){if(0===this.history.length)return null;const o=this.history.findIndex(((o,i,a)=>!t&&o[0]>e||!!(t&&o[0]<e&&a[i+1]&&a[i+1][0]>e)));return-1===o?null:this.history[o][1]}get min(){if(this._computedHistory&&0!==this._computedHistory.length)return Math.min(...this._computedHistory.flatMap((e=>null===e[1]?[]:[e[1]])))}get max(){if(this._computedHistory&&0!==this._computedHistory.length)return Math.max(...this._computedHistory.flatMap((e=>null===e[1]?[]:[e[1]])))}minMaxWithTimestamp(e,t,o){if(!this._computedHistory||0===this._computedHistory.length)return;if(1===this._computedHistory.length)return{min:[e,this._computedHistory[0][1]],max:[t,this._computedHistory[0][1]]};const i=this._computedHistory.reduce(((o,i)=>(null===i[1]||i[0]>t||i[0]<e||((null===o.max[1]||o.max[1]<i[1])&&(o.max=[...i]),(null===o.min[1]||null!==i[1]&&o.min[1]>i[1])&&(o.min=[...i])),o)),{min:[0,null],max:[0,null]});return o&&(i.min[0]&&(i.min[0]-=o),i.max[0]&&(i.max[0]-=o)),i}minMaxWithTimestampForYAxis(e,t){if(!this._computedHistory||0===this._computedHistory.length)return;let o=e;const i=this._computedHistory.findIndex((t=>t[0]>=e))-1;return i>=0&&(o=this._computedHistory[i][0]),this.minMaxWithTimestamp(o,t,0)}async _getCache(e,t){const o=await Ye.getItem(`${e}_${this._md5Config}${t?"":"-raw"}`);return o?t?Ht(o):o:void 0}async _setCache(e,t,o){return o?Ye.setItem(`${e}_${this._md5Config}`,function(e){return Ve.exports.compress(JSON.stringify(e))}(t)):Ye.setItem(`${e}_${this._md5Config}-raw`,t)}async _updateHistory(e,t){var o;let i,a=new Date(e);if("raw"!==this._config.group_by.func){const o=t.getTime()-e.getTime(),i=Math.floor(o/this._groupByDurationMs)+(o%this._groupByDurationMs>0?1:0);a=new Date(t.getTime()-(i+1)*this._groupByDurationMs)}if(!this._entityState||this._updating)return!1;if(this._updating=!0,this._config.ignore_history){let e=null;e=this._config.attribute?null===(o=this._entityState.attributes)||void 0===o?void 0:o[this._config.attribute]:this._entityState.state,this._config.transform&&(e=this._applyTransform(e,this._entityState));let t=parseFloat(e);return t=Number.isNaN(t)?null:t,this._computedHistory=[[new Date(this._entityState.last_updated).getTime(),t]],this._updating=!1,!0}if(this._config.data_generator)i=await this._generateData(e,t);else{this._realStart=new Date(e),this._realEnd=new Date(t);let o=!1;if(i=this._cache?await this._getCache(this._entityID,this._useCompress):void 0,i&&i.span===this._graphSpan){const e=i.data.findIndex((e=>e&&new Date(e[0]).getTime()>a.getTime()));-1!==e&&(o=!0),e>4?i.data=i.data.slice(0===e?0:e-4):-1===e&&(i.data=[])}else i=void 0;const n=!!(i&&i.data&&0!==i.data.length&&i.data[i.data.length-1])?new Date(i.data[i.data.length-1][0]+1):new Date(a.getTime()+("raw"!==this._config.group_by.func?0:-1)),r=t;let b=[],p=!1;if(this._config.statistics){const e=await this._fetchStatistics(n,r,this._config.statistics.period);if(e&&e.length>0){p=!0;let t=null;i&&i.data&&i.data.length>0&&(t=i.data[i.data.length-1][1]),b=e.map((e=>{var o,i,a,n,r;let b=null;[t,b]=this._transformAndFill(e[(null===(o=this._config.statistics)||void 0===o?void 0:o.type)||"mean"],e,t);let p=null;const s=new Date(e.start);return p=(null===(i=this._config.statistics)||void 0===i?void 0:i.align)&&"middle"!==(null===(a=this._config.statistics)||void 0===a?void 0:a.align)?"start"===this._config.statistics.align?new Date(e.start):new Date(e.end):"5minute"===(null===(n=this._config.statistics)||void 0===n?void 0:n.period)?new Date(s.getTime()+15e4):(null===(r=this._config.statistics)||void 0===r?void 0:r.period)&&"hour"!==this._config.statistics.period?"day"===this._config.statistics.period?new Date(s.getTime()+432e5):"week"===this._config.statistics.period?new Date(s.getTime()+2592e5):new Date(s.getTime()+1296e6):new Date(s.getTime()+18e5),[p.getTime(),Number.isNaN(b)?null:b]}))}}else{const e=await this._fetchRecent(n,r,!this._config.attribute&&!this._config.transform&&o);if(e&&e[0]&&e[0].length>0){p=!0,(this._config.attribute||this._config.transform)&&o&&e[0].shift();let t=null;i&&i.data&&i.data.length>0&&(t=i.data[i.data.length-1][1]),b=e[0].map((e=>{let o=null;this._config.attribute?e.attributes&&void 0!==e.attributes[this._config.attribute]&&(o=e.attributes[this._config.attribute]):o=e.state;let i=null;return[t,i]=this._transformAndFill(o,e,t),this._config.attribute?[new Date(e.last_updated).getTime(),Number.isNaN(i)?null:i]:[new Date(e.last_changed).getTime(),Number.isNaN(i)?null:i]}))}}p&&((null==i?void 0:i.data.length)?(i.span=this._graphSpan,i.last_fetched=new Date,i.card_version=Ge,0!==i.data.length&&i.data.push(...b)):i={span:this._graphSpan,card_version:Ge,last_fetched:new Date,data:b},this._cache&&await this._setCache(this._entityID,i,this._useCompress).catch((e=>{Yt(e),Ye.clear()})))}if(!i||0===i.data.length)return this._updating=!1,this._computedHistory=void 0,!1;if("raw"!==this._config.group_by.func){const e=this._dataBucketer(i,yt.range(a,t)).map((e=>[e.timestamp,this._func(e.data)]));if([void 0,"line","area"].includes(this._config.type))for(;e.length>0&&null===e[0][1];)e.shift();this._computedHistory=e}else this._computedHistory=i.data;return this._updating=!1,!0}_transformAndFill(e,t,o){this._config.transform&&(e=this._applyTransform(e,t));let i=parseFloat(e);return i=Number.isNaN(i)?null:i,null===i?"zero"===this._config.fill_raw?i=0:"last"===this._config.fill_raw&&(i=o):o=i,[o,i]}_applyTransform(e,t){return new Function("x","hass","entity",`'use strict'; ${this._config.transform}`).call(this,e,this._hass,t)}async _fetchRecent(e,t,o){var i;let a="history/period";return e&&(a+=`/${e.toISOString()}`),a+=`?filter_entity_id=${this._entityID}`,t&&(a+=`&end_time=${t.toISOString()}`),o&&(a+="&skip_initial_state"),a+="&significant_changes_only=0",null===(i=this._hass)||void 0===i?void 0:i.callApi("GET",a)}async _generateData(e,t){const o=Object.getPrototypeOf((async function(){})).constructor;let i;try{const a=new o("entity","start","end","hass","moment",`'use strict'; ${this._config.data_generator}`);i=await a(this._entityState,e,t,this._hass,yt)}catch(ve){const t=this._config.data_generator.length<=100?this._config.data_generator.trim():`${this._config.data_generator.trim().substring(0,98)}...`;throw ve.message=`${ve.name}: ${ve.message} in '${t}'`,ve.name="Error",ve}return{span:0,card_version:Ge,last_fetched:new Date,data:i}}async _fetchStatistics(e,t,o="hour"){var i;const a=await(null===(i=this._hass)||void 0===i?void 0:i.callWS({type:"recorder/statistics_during_period",start_time:null==e?void 0:e.toISOString(),end_time:null==t?void 0:t.toISOString(),statistic_ids:[this._entityID],period:o}));if(a&&this._entityID in a)return a[this._entityID]}_dataBucketer(e,t){const o=Array.from(t.reverseBy("milliseconds",{step:this._groupByDurationMs})).reverse(),i=[];o.forEach(((e,t)=>{i[t]={timestamp:e.valueOf(),data:[]}})),null==e||e.data.forEach((e=>{i.some(((t,o)=>t.timestamp>e[0]&&o>0&&e[0]>=i[o-1].timestamp&&(i[o-1].data.push(e),!0)))}));let a=null;const n=(new Date).getTime();for(i.forEach(((t,o)=>{if(0===t.data.length?"last"===this._config.group_by.fill&&(t.timestamp<=n||this._config.data_generator)?t.data[0]=[t.timestamp,a]:"zero"===this._config.group_by.fill&&(t.timestamp<=n||this._config.data_generator)?t.data[0]=[t.timestamp,0]:"null"===this._config.group_by.fill&&(t.data[0]=[t.timestamp,null]):a=t.data.slice(-1)[0][1],this._config.group_by.start_with_last)if(o>0){if(0===t.data.length||t.data[0][0]!==t.timestamp){const e=i[o-1].data;t.data.unshift([t.timestamp,e[e.length-1][1]])}}else{const o=e.data.findIndex((e=>e[0]>t.timestamp));o>0&&t.data.unshift([t.timestamp,e.data[o-1][1]])}})),i.shift(),i.pop();i.length>0&&(0===i[i.length-1].data.length||1===i[i.length-1].data.length&&null===i[i.length-1].data[0][1]);)i.pop();return i}_sum(e){if(0===e.length)return 0;let t=0;return e.reduce(((o,i,a)=>{let n=0;return i&&null===i[1]?n=e[t][1]:(n=i[1],t=a),o+n}),0)}_average(e){const t=this._filterNulls(e);return 0===t.length?null:this._sum(t)/t.length}_minimum(e){let t=null;return e.forEach((e=>{null!==e[1]&&(t=null===t?e[1]:Math.min(e[1],t))})),t}_maximum(e){let t=null;return e.forEach((e=>{null!==e[1]&&(t=null===t?e[1]:Math.max(e[1],t))})),t}_last(e){return 0===e.length?null:e.slice(-1)[0][1]}_first(e){return 0===e.length?null:e[0][1]}_median(e){const t=this._filterNulls([...e]).sort(((e,t)=>e[1]-t[1]));if(0===t.length)return null;if(1===t.length)return t[0][1];const o=Math.floor((t.length-1)/2);return t.length%2==1?t[o][1]:(t[o][1]+t[o+1][1])/2}_delta(e){const t=this._maximum(e),o=this._minimum(e);return null===t||null===o?null:t-o}_diff(e){const t=this._filterNulls(e),o=this._first(t),i=this._last(t);return null===o||null===i?null:i-o}_filterNulls(e){return e.filter((e=>null!==e[1]))}}var On,dn={},An={},hn={},un=Pe&&Pe.__extends||(On=function(e,t){return On=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},On(e,t)},function(e,t){function o(){this.constructor=e}On(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),fn=Pe&&Pe.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var i=Array(e),a=0;for(t=0;t<o;t++)for(var n=arguments[t],r=0,b=n.length;r<b;r++,a++)i[a]=n[r];return i};Object.defineProperty(hn,"__esModule",{value:!0}),hn.DetailContext=hn.NoopContext=hn.VError=void 0;var qn=function(e){function t(o,i){var a=e.call(this,i)||this;return a.path=o,Object.setPrototypeOf(a,t.prototype),a}return un(t,e),t}(Error);hn.VError=qn;var gn=function(){function e(){this._failed=!1}return e.prototype.fail=function(e,t,o){return this._failed=!0,!1},e.prototype.fork=function(){return this},e.prototype.completeFork=function(){return!this._failed},e.prototype.failed=function(){return this._failed},e.prototype.unionResolver=function(){return this},e.prototype.createContext=function(){return this._failed=!1,this},e.prototype.resolveUnion=function(e){},e}();hn.NoopContext=gn;var Wn=function(){function e(){this._propNames=[],this._messages=[],this._failedForks=[],this._currentFork=null,this._score=0}return e.prototype.fail=function(e,t,o){return this._propNames.push(e),this._messages.push(t),this._score+=o,!1},e.prototype.unionResolver=function(){return new mn},e.prototype.resolveUnion=function(e){for(var t,o,i,a=null,n=0,r=e.contexts;n<r.length;n++){var b=r[n];(!a||b._score>=a._score)&&(a=b)}a&&a._score>0&&((t=this._propNames).push.apply(t,a._propNames),(o=this._messages).push.apply(o,a._messages),(i=this._failedForks).push.apply(i,a._failedForks))},e.prototype.getError=function(e){var t=vn(this.getErrorDetails(e).map(xn)).join("\n");return new qn(e,t)},e.prototype.getErrorDetails=function(e){for(var t,o=null,i=[],a=this._propNames.length-1;a>=0;a--){var n=this._propNames[a];e+="number"==typeof n?"["+n+"]":n?"."+n:"";var r=this._messages[a];r&&(t={path:e,message:r},o?o.nested=[t]:i.push(t),o=t)}var b=vn(this._failedForks.map((function(t){return t.getErrorDetails(e)})));return o?b.length&&(o.nested=b):i=b,i},e.prototype.fork=function(){return null==this._currentFork&&(this._currentFork=new e),this._currentFork},e.prototype.completeFork=function(){var t=this._currentFork;return t._failed()&&(this._failedForks.push(t),this._currentFork=null,1===this._failedForks.length&&(this._score=t._score)),this._failedForks.length<e.maxForks},e.prototype.failed=function(){return this._failed()},e.prototype._failed=function(){return this._propNames.length+this._failedForks.length>0},e.maxForks=3,e}();hn.DetailContext=Wn;var mn=function(){function e(){this.contexts=[]}return e.prototype.createContext=function(){var e=new Wn;return this.contexts.push(e),e},e}(),xn=function(e){var t=e.path+" "+e.message,o=e.nested||[],i=vn(o.map(xn));if(1==o.length){var a=i[0],n=i.slice(1);return fn([t+"; "+a],n)}return fn([t],i.map((function(e){return"    "+e})))};function vn(e){var t;return(t=[]).concat.apply(t,e)}!function(e){var t=Pe&&Pe.__extends||function(){var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},e(t,o)};return function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.basicTypes=e.BasicType=e.TParamList=e.TParam=e.param=e.TFunc=e.func=e.TProp=e.TOptional=e.opt=e.TIface=e.iface=e.indexKey=e.TEnumLiteral=e.enumlit=e.TEnumType=e.enumtype=e.TIntersection=e.intersection=e.TUnion=e.union=e.TTuple=e.tuple=e.RestType=e.rest=e.TArray=e.array=e.TLiteral=e.lit=e.TName=e.name=e.TType=void 0;var o=hn,i=function(){};function a(e){return"string"==typeof e?r(e):e}function n(e,t){var o=e[t];if(!o)throw new Error("Unknown type "+t);return o}function r(e){return new b(e)}e.TType=i,e.name=r;var b=function(e){function o(t){var o=e.call(this)||this;return o.name=t,o._failMsg="is not a "+t,o}return t(o,e),o.prototype.getChecker=function(e,t,o){var i=this._checkerBeingBuilt;if(!i){this._checkerBeingBuilt=function(e,t){return i(e,t)};try{i=this._getChecker(e,t,o)}finally{this._checkerBeingBuilt=void 0}}return i},o.prototype._getChecker=function(e,t,i){var a=this,r=n(e,this.name),b=r.getChecker(e,t,i);return r instanceof m||r instanceof o?b:function(e,t){return!!b(e,t)||t.fail(null,a._failMsg,0)}},o}(i);e.TName=b,e.lit=function(e){return new p(e)};var p=function(e){function o(t){var o=e.call(this)||this;return o.value=t,o.name=JSON.stringify(t),o._failMsg="is not "+o.name,o}return t(o,e),o.prototype.getChecker=function(e,t){var o=this;return function(e,t){return e===o.value||t.fail(null,o._failMsg,-1)}},o}(i);e.TLiteral=p,e.array=function(e){return new s(a(e))};var s=function(e){function o(t){var o=e.call(this)||this;o.ttype=t;var i=w(t);return i&&(o.name=i+"[]"),o}return t(o,e),o.prototype.getChecker=function(e,t){var o=this.ttype.getChecker(e,t);return function(e,t){if(!Array.isArray(e))return t.fail(null,"is not an array",0);for(var i=0;i<e.length;i++){if(!o(e[i],t))return t.fail(i,null,1)}return!0}},o}(i);e.TArray=s,e.rest=function(e){return new M(e)};var M=function(e){function o(t){var o=e.call(this)||this;return o.typeSpec=t,o}return t(o,e),o.prototype.setStart=function(e){this._start=e},o.prototype.getChecker=function(e,t){var o="string"==typeof this.typeSpec?n(e,this.typeSpec):this.typeSpec;if(!(o instanceof s))throw new Error("Rest type must be an array");var i=o.ttype.getChecker(e,t),a=this._start;return function(e,t){for(var o=a;o<e.length;o++)if(!i(e[o],t))return t.fail(o,null,1);return!0}},o}(i);e.RestType=M,e.tuple=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return new c(e.map((function(e){return a(e)})))};var c=function(e){function o(t){var o=e.call(this)||this;o.ttypes=t;var i=t[t.length-1];return i instanceof M&&(t.pop(),o._restType=i,o._restType.setStart(t.length)),o}return t(o,e),o.prototype.getChecker=function(e,t){var o=this.ttypes.map((function(o){return o.getChecker(e,t)})),i=function(e,t){if(!Array.isArray(e))return t.fail(null,"is not an array",0);for(var i=0;i<o.length;i++){if(!o[i](e[i],t))return t.fail(i,null,1)}return!0};if(this._restType){var a=this._restType.getChecker(e,t);return function(e,t){return i(e,t)&&a(e,t)}}return t?function(e,t){return!!i(e,t)&&(e.length<=o.length||t.fail(o.length,"is extraneous",2))}:i},o}(i);e.TTuple=c,e.union=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return new z(e.map((function(e){return a(e)})))};var z=function(e){function o(t){var o=e.call(this)||this;o.ttypes=t;var i=t.map(w).filter((function(e){return e})),a=t.length-i.length;return i.length?(a>0&&i.push(a+" more"),o._failMsg="is none of "+i.join(", ")):o._failMsg="is none of "+a+" types",o}return t(o,e),o.prototype.getChecker=function(e,t,o){var i=this,a=this.ttypes.map((function(i){return i.getChecker(e,t,o)}));return function(e,t){for(var o=t.unionResolver(),n=0;n<a.length;n++){if(a[n](e,o.createContext()))return!0}return t.resolveUnion(o),t.fail(null,i._failMsg,0)}},o}(i);e.TUnion=z,e.intersection=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return new l(e.map((function(e){return a(e)})))};var l=function(e){function o(t){var o=e.call(this)||this;return o.ttypes=t,o}return t(o,e),o.prototype.getChecker=function(e,t,o){void 0===o&&(o=new Set);var i=this.ttypes.map((function(i){return i.getChecker(e,t,o)}));return function(e,t){return i.every((function(o){return o(e,t.fork()),t.completeFork()}))&&!t.failed()}},o}(i);e.TIntersection=l,e.enumtype=function(e){return new O(e)};var O=function(e){function o(t){var o=e.call(this)||this;return o.members=t,o.validValues=new Set,o._failMsg="is not a valid enum value",o.validValues=new Set(Object.keys(t).map((function(e){return t[e]}))),o}return t(o,e),o.prototype.getChecker=function(e,t){var o=this;return function(e,t){return!!o.validValues.has(e)||t.fail(null,o._failMsg,0)}},o}(i);e.TEnumType=O,e.enumlit=function(e,t){return new d(e,t)};var d=function(e){function o(t,o){var i=e.call(this)||this;return i.enumName=t,i.prop=o,i._failMsg="is not "+t+"."+o,i}return t(o,e),o.prototype.getChecker=function(e,t){var o=this,i=n(e,this.enumName);if(!(i instanceof O))throw new Error("Type "+this.enumName+" used in enumlit is not an enum type");var a=i.members[this.prop];if(!i.members.hasOwnProperty(this.prop))throw new Error("Unknown value "+this.enumName+"."+this.prop+" used in enumlit");return function(e,t){return e===a||t.fail(null,o._failMsg,-1)}},o}(i);function A(t){return Object.keys(t).filter((function(t){return t!==e.indexKey})).map((function(e){return function(e,t){return t instanceof u?new f(e,t.ttype,!0):new f(e,a(t),!1)}(e,t[e])}))}e.TEnumLiteral=d,e.indexKey=Symbol(),e.iface=function(t,o){return new h(t,A(o),o[e.indexKey])};var h=function(e){function i(t,o,i){var n=e.call(this)||this;return n.bases=t,n.props=o,n.indexType=i?a(i):void 0,n.propSet=new Set(o.map((function(e){return e.name}))),n}return t(i,e),i.prototype.getChecker=function(e,t,i){var a,r=this;void 0===i&&(i=new Set),this.propSet.forEach((function(e){return i.add(e)}));var b=this.bases.map((function(o){return n(e,o).getChecker(e,t,i)})),p=this.props.map((function(o){return o.ttype.getChecker(e,t)})),s=null===(a=this.indexType)||void 0===a?void 0:a.getChecker(e,t),M=new o.NoopContext,c=this.props.map((function(e,t){return!e.isOpt&&!p[t](void 0,M)}));return function(e,o){if("object"!=typeof e||null===e)return o.fail(null,"is not an object",0);for(var a=0;a<b.length;a++)if(b[a](e,o.fork()),!o.completeFork())return!1;for(a=0;a<p.length;a++){var n=r.props[a].name,M=e[n];if(void 0===M){if(c[a]&&(o.fork().fail(n,"is missing",1),!o.completeFork()))return!1}else{var z=o.fork();if(p[a](M,z)||z.fail(n,null,1),!o.completeFork())return!1}}if(s)for(var l in e){z=o.fork();if(s(e[l],z)||z.fail(l,null,1),!o.completeFork())return!1}else if(t)for(var l in e)if(!i.has(l)&&(o.fork().fail(l,"is extraneous",2),!o.completeFork()))return!1;return!o.failed()}},i}(i);e.TIface=h,e.opt=function(e){return new u(a(e))};var u=function(e){function o(t){var o=e.call(this)||this;return o.ttype=t,o}return t(o,e),o.prototype.getChecker=function(e,t){var o=this.ttype.getChecker(e,t);return function(e,t){return void 0===e||o(e,t)}},o}(i);e.TOptional=u;var f=function(e,t,o){this.name=e,this.ttype=t,this.isOpt=o};e.TProp=f,e.func=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return new q(new W(t),a(e))};var q=function(e){function o(t,o){var i=e.call(this)||this;return i.paramList=t,i.result=o,i}return t(o,e),o.prototype.getChecker=function(e,t){return function(e,t){return"function"==typeof e||t.fail(null,"is not a function",0)}},o}(i);e.TFunc=q,e.param=function(e,t,o){return new g(e,a(t),Boolean(o))};var g=function(e,t,o){this.name=e,this.ttype=t,this.isOpt=o};e.TParam=g;var W=function(e){function i(t){var o=e.call(this)||this;return o.params=t,o}return t(i,e),i.prototype.getChecker=function(e,t){var i=this,a=this.params.map((function(o){return o.ttype.getChecker(e,t)})),n=new o.NoopContext,r=this.params.map((function(e,t){return!e.isOpt&&!a[t](void 0,n)})),b=function(e,t){if(!Array.isArray(e))return t.fail(null,"is not an array",0);for(var o=0;o<a.length;o++){var n=i.params[o];if(void 0===e[o]){if(r[o])return t.fail(n.name,"is missing",1)}else if(!a[o](e[o],t))return t.fail(n.name,null,1)}return!0};return t?function(e,t){return!!b(e,t)&&(e.length<=a.length||t.fail(a.length,"is extraneous",2))}:b},i}(i);e.TParamList=W;var m=function(e){function o(t,o){var i=e.call(this)||this;return i.validator=t,i.message=o,i}return t(o,e),o.prototype.getChecker=function(e,t){var o=this;return function(e,t){return!!o.validator(e)||t.fail(null,o.message,0)}},o}(i);e.BasicType=m,e.basicTypes={any:new m((function(e){return!0}),"is invalid"),unknown:new m((function(e){return!0}),"is invalid"),number:new m((function(e){return"number"==typeof e}),"is not a number"),object:new m((function(e){return"object"==typeof e&&e}),"is not an object"),boolean:new m((function(e){return"boolean"==typeof e}),"is not a boolean"),string:new m((function(e){return"string"==typeof e}),"is not a string"),symbol:new m((function(e){return"symbol"==typeof e}),"is not a symbol"),void:new m((function(e){return null==e}),"is not void"),undefined:new m((function(e){return void 0===e}),"is not undefined"),null:new m((function(e){return null===e}),"is not null"),never:new m((function(e){return!1}),"is unexpected"),Date:new m(v("[object Date]"),"is not a Date"),RegExp:new m(v("[object RegExp]"),"is not a RegExp")};var x=Object.prototype.toString;function v(e){return function(t){return"object"==typeof t&&t&&x.call(t)===e}}"undefined"!=typeof Buffer&&(e.basicTypes.Buffer=new m((function(e){return Buffer.isBuffer(e)}),"is not a Buffer"));for(var y=function(t){e.basicTypes[t.name]=new m((function(e){return e instanceof t}),"is not a "+t.name)},R=0,L=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,ArrayBuffer];R<L.length;R++){y(L[R])}function w(e){if(e instanceof b||e instanceof p||e instanceof s)return e.name}}(An),function(e){var t=Pe&&Pe.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var i=Array(e),a=0;for(t=0;t<o;t++)for(var n=arguments[t],r=0,b=n.length;r<b;r++,a++)i[a]=n[r];return i};Object.defineProperty(e,"__esModule",{value:!0}),e.Checker=e.createCheckers=void 0;var o=An,i=hn,a=An;Object.defineProperty(e,"TArray",{enumerable:!0,get:function(){return a.TArray}}),Object.defineProperty(e,"TEnumType",{enumerable:!0,get:function(){return a.TEnumType}}),Object.defineProperty(e,"TEnumLiteral",{enumerable:!0,get:function(){return a.TEnumLiteral}}),Object.defineProperty(e,"TFunc",{enumerable:!0,get:function(){return a.TFunc}}),Object.defineProperty(e,"TIface",{enumerable:!0,get:function(){return a.TIface}}),Object.defineProperty(e,"TLiteral",{enumerable:!0,get:function(){return a.TLiteral}}),Object.defineProperty(e,"TName",{enumerable:!0,get:function(){return a.TName}}),Object.defineProperty(e,"TOptional",{enumerable:!0,get:function(){return a.TOptional}}),Object.defineProperty(e,"TParam",{enumerable:!0,get:function(){return a.TParam}}),Object.defineProperty(e,"TParamList",{enumerable:!0,get:function(){return a.TParamList}}),Object.defineProperty(e,"TProp",{enumerable:!0,get:function(){return a.TProp}}),Object.defineProperty(e,"TTuple",{enumerable:!0,get:function(){return a.TTuple}}),Object.defineProperty(e,"TType",{enumerable:!0,get:function(){return a.TType}}),Object.defineProperty(e,"TUnion",{enumerable:!0,get:function(){return a.TUnion}}),Object.defineProperty(e,"TIntersection",{enumerable:!0,get:function(){return a.TIntersection}}),Object.defineProperty(e,"array",{enumerable:!0,get:function(){return a.array}}),Object.defineProperty(e,"enumlit",{enumerable:!0,get:function(){return a.enumlit}}),Object.defineProperty(e,"enumtype",{enumerable:!0,get:function(){return a.enumtype}}),Object.defineProperty(e,"func",{enumerable:!0,get:function(){return a.func}}),Object.defineProperty(e,"iface",{enumerable:!0,get:function(){return a.iface}}),Object.defineProperty(e,"lit",{enumerable:!0,get:function(){return a.lit}}),Object.defineProperty(e,"name",{enumerable:!0,get:function(){return a.name}}),Object.defineProperty(e,"opt",{enumerable:!0,get:function(){return a.opt}}),Object.defineProperty(e,"param",{enumerable:!0,get:function(){return a.param}}),Object.defineProperty(e,"tuple",{enumerable:!0,get:function(){return a.tuple}}),Object.defineProperty(e,"union",{enumerable:!0,get:function(){return a.union}}),Object.defineProperty(e,"intersection",{enumerable:!0,get:function(){return a.intersection}}),Object.defineProperty(e,"rest",{enumerable:!0,get:function(){return a.rest}}),Object.defineProperty(e,"indexKey",{enumerable:!0,get:function(){return a.indexKey}}),Object.defineProperty(e,"BasicType",{enumerable:!0,get:function(){return a.BasicType}});var n=hn;Object.defineProperty(e,"VError",{enumerable:!0,get:function(){return n.VError}}),e.createCheckers=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var a=Object.assign.apply(Object,t([{},o.basicTypes],e)),n={},b=0,p=e;b<p.length;b++)for(var s=p[b],M=0,c=Object.keys(s);M<c.length;M++){var z=c[M];n[z]=new r(a,s[z])}return n};var r=function(){function e(e,t,i){if(void 0===i&&(i="value"),this.suite=e,this.ttype=t,this._path=i,this.props=new Map,t instanceof o.TIface)for(var a=0,n=t.props;a<n.length;a++){var r=n[a];this.props.set(r.name,r.ttype)}this.checkerPlain=this.ttype.getChecker(e,!1),this.checkerStrict=this.ttype.getChecker(e,!0)}return e.prototype.setReportedPath=function(e){this._path=e},e.prototype.check=function(e){return this._doCheck(this.checkerPlain,e)},e.prototype.test=function(e){return this.checkerPlain(e,new i.NoopContext)},e.prototype.validate=function(e){return this._doValidate(this.checkerPlain,e)},e.prototype.strictCheck=function(e){return this._doCheck(this.checkerStrict,e)},e.prototype.strictTest=function(e){return this.checkerStrict(e,new i.NoopContext)},e.prototype.strictValidate=function(e){return this._doValidate(this.checkerStrict,e)},e.prototype.getProp=function(t){var o=this.props.get(t);if(!o)throw new Error("Type has no property "+t);return new e(this.suite,o,this._path+"."+t)},e.prototype.methodArgs=function(t){var o=this._getMethod(t);return new e(this.suite,o.paramList)},e.prototype.methodResult=function(t){var o=this._getMethod(t);return new e(this.suite,o.result)},e.prototype.getArgs=function(){if(!(this.ttype instanceof o.TFunc))throw new Error("getArgs() applied to non-function");return new e(this.suite,this.ttype.paramList)},e.prototype.getResult=function(){if(!(this.ttype instanceof o.TFunc))throw new Error("getResult() applied to non-function");return new e(this.suite,this.ttype.result)},e.prototype.getType=function(){return this.ttype},e.prototype._doCheck=function(e,t){if(!e(t,new i.NoopContext)){var o=new i.DetailContext;throw e(t,o),o.getError(this._path)}},e.prototype._doValidate=function(e,t){if(e(t,new i.NoopContext))return null;var o=new i.DetailContext;return e(t,o),o.getErrorDetails(this._path)},e.prototype._getMethod=function(e){var t=this.props.get(e);if(!t)throw new Error("Type has no property "+e);if(!(t instanceof o.TFunc))throw new Error("Property "+e+" is not a method");return t},e}();e.Checker=r}(dn);const yn={ChartCardExternalConfig:dn.iface([],{type:dn.lit("custom:apexcharts-card"),config_templates:dn.opt(dn.union(dn.array("string"),"string")),color_list:dn.opt(dn.array("string")),locale:dn.opt("string"),experimental:dn.opt(dn.iface([],{color_threshold:dn.opt("boolean"),disable_config_validation:dn.opt("boolean"),hidden_by_default:dn.opt("boolean"),brush:dn.opt("boolean")})),hours_12:dn.opt("boolean"),chart_type:dn.opt("ChartCardChartType"),update_interval:dn.opt("string"),update_delay:dn.opt("string"),all_series_config:dn.opt("ChartCardAllSeriesExternalConfig"),series:dn.array("ChartCardSeriesExternalConfig"),graph_span:dn.opt("string"),span:dn.opt("ChartCardSpanExtConfig"),now:dn.opt(dn.iface([],{show:dn.opt("boolean"),color:dn.opt("string"),label:dn.opt("string")})),show:dn.opt(dn.iface([],{loading:dn.opt("boolean"),last_updated:dn.opt("boolean")})),cache:dn.opt("boolean"),stacked:dn.opt("boolean"),layout:dn.opt("string"),apex_config:dn.opt("any"),header:dn.opt("ChartCardHeaderExternalConfig"),style:dn.opt("any"),card_mod:dn.opt("any"),view_layout:dn.opt("any"),index:dn.opt("number"),view_index:dn.opt("number"),brush:dn.opt("ChartCardBrushExtConfig"),yaxis:dn.opt(dn.array("ChartCardYAxisExternal"))}),ChartCardChartType:dn.union(dn.lit("line"),dn.lit("scatter"),dn.lit("pie"),dn.lit("donut"),dn.lit("radialBar")),ChartCardBrushExtConfig:dn.iface([],{selection_span:dn.opt("string"),apex_config:dn.opt("any")}),ChartCardSpanExtConfig:dn.iface([],{start:dn.opt("ChartCardStartEnd"),end:dn.opt("ChartCardStartEnd"),offset:dn.opt("string")}),ChartCardStartEnd:dn.union(dn.lit("minute"),dn.lit("hour"),dn.lit("day"),dn.lit("week"),dn.lit("month"),dn.lit("year"),dn.lit("isoWeek")),StatisticsPeriod:dn.union(dn.lit("5minute"),dn.lit("hour"),dn.lit("day"),dn.lit("week"),dn.lit("month")),ChartCardAllSeriesExternalConfig:dn.iface([],{entity:dn.opt("string"),attribute:dn.opt("string"),name:dn.opt("string"),type:dn.opt(dn.union(dn.lit("line"),dn.lit("column"),dn.lit("area"))),stack_group:dn.opt("string"),color:dn.opt("string"),opacity:dn.opt("number"),curve:dn.opt(dn.union(dn.lit("smooth"),dn.lit("straight"),dn.lit("stepline"),dn.lit("monotoneCubic"))),stroke_width:dn.opt("number"),stroke_dash:dn.opt("number"),extend_to:dn.opt(dn.union(dn.lit(!1),dn.lit("end"),dn.lit("now"))),unit:dn.opt("string"),invert:dn.opt("boolean"),data_generator:dn.opt("string"),statistics:dn.opt(dn.iface([],{type:dn.opt(dn.union(dn.lit("mean"),dn.lit("max"),dn.lit("min"),dn.lit("sum"),dn.lit("state"),dn.lit("change"))),period:dn.opt("StatisticsPeriod"),align:dn.opt(dn.union(dn.lit("start"),dn.lit("end"),dn.lit("middle")))})),float_precision:dn.opt("number"),min:dn.opt("number"),max:dn.opt("number"),offset:dn.opt("string"),time_delta:dn.opt("string"),fill_raw:dn.opt("GroupByFill"),show:dn.opt("ChartCardSeriesShowConfigExt"),group_by:dn.opt(dn.iface([],{duration:dn.opt("string"),func:dn.opt("GroupByFunc"),fill:dn.opt("GroupByFill"),start_with_last:dn.opt("boolean")})),transform:dn.opt("string"),color_threshold:dn.opt(dn.array("ChartCardColorThreshold")),yaxis_id:dn.opt("string"),header_actions:dn.opt("ActionsConfig")}),ActionsConfig:dn.iface([],{tap_action:dn.opt("ActionConfig"),hold_action:dn.opt("ActionConfig"),double_tap_action:dn.opt("ActionConfig"),entity:dn.opt("string")}),ChartCardSeriesShowConfigExt:dn.iface([],{as_duration:dn.opt("ChartCardPrettyTime"),in_legend:dn.opt("boolean"),legend_value:dn.opt("boolean"),in_header:dn.opt(dn.union("boolean",dn.lit("raw"),dn.lit("before_now"),dn.lit("after_now"))),name_in_header:dn.opt("boolean"),header_color_threshold:dn.opt("boolean"),in_chart:dn.opt("boolean"),datalabels:dn.opt(dn.union("boolean",dn.lit("total"),dn.lit("percent"))),hidden_by_default:dn.opt("boolean"),extremas:dn.opt(dn.union("boolean",dn.lit("time"),dn.lit("min"),dn.lit("max"),dn.lit("min+time"),dn.lit("max+time"))),in_brush:dn.opt("boolean"),offset_in_name:dn.opt("boolean")}),ChartCardSeriesExternalConfig:dn.iface(["ChartCardAllSeriesExternalConfig"],{entity:"string"}),ChartCardPrettyTime:dn.union(dn.lit("millisecond"),dn.lit("second"),dn.lit("minute"),dn.lit("hour"),dn.lit("day"),dn.lit("week"),dn.lit("month"),dn.lit("year")),GroupByFill:dn.union(dn.lit("null"),dn.lit("last"),dn.lit("zero")),GroupByFunc:dn.union(dn.lit("raw"),dn.lit("avg"),dn.lit("min"),dn.lit("max"),dn.lit("last"),dn.lit("first"),dn.lit("sum"),dn.lit("median"),dn.lit("delta"),dn.lit("diff")),ChartCardHeaderExternalConfig:dn.iface([],{show:dn.opt("boolean"),floating:dn.opt("boolean"),title:dn.opt("string"),show_states:dn.opt("boolean"),colorize_states:dn.opt("boolean"),standard_format:dn.opt("boolean"),disable_actions:dn.opt("boolean"),title_actions:dn.opt("ActionsConfig")}),ChartCardColorThreshold:dn.iface([],{value:"number",color:dn.opt("string"),opacity:dn.opt("number")}),ChartCardYAxisExternal:dn.iface([],{id:dn.opt("string"),show:dn.opt("boolean"),opposite:dn.opt("boolean"),min:dn.opt(dn.union(dn.lit("auto"),"number","string")),max:dn.opt(dn.union(dn.lit("auto"),"number","string")),align_to:dn.opt("number"),decimals:dn.opt("number"),apex_config:dn.opt("any")}),ToggleMenuActionConfig:dn.iface(["BaseActionConfig"],{action:dn.lit("toggle-menu"),haptic:dn.opt("HapticType")}),ToggleActionConfig:dn.iface(["BaseActionConfig"],{action:dn.lit("toggle"),haptic:dn.opt("HapticType")}),CallServiceActionConfig:dn.iface(["BaseActionConfig"],{action:dn.lit("call-service"),service:"string",service_data:dn.opt("any"),haptic:dn.opt("HapticType")}),NavigateActionConfig:dn.iface(["BaseActionConfig"],{action:dn.lit("navigate"),navigation_path:"string",haptic:dn.opt("HapticType")}),UrlActionConfig:dn.iface(["BaseActionConfig"],{action:dn.lit("url"),url_path:"string",haptic:dn.opt("HapticType")}),MoreInfoActionConfig:dn.iface(["BaseActionConfig"],{action:dn.lit("more-info"),entity:dn.opt("string"),haptic:dn.opt("HapticType")}),NoActionConfig:dn.iface(["BaseActionConfig"],{action:dn.lit("none"),haptic:dn.opt("HapticType")}),CustomActionConfig:dn.iface(["BaseActionConfig"],{action:dn.lit("fire-dom-event"),haptic:dn.opt("HapticType"),browser_mod:dn.opt("any")}),BaseActionConfig:dn.iface([],{confirmation:dn.opt("ConfirmationRestrictionConfig")}),ConfirmationRestrictionConfig:dn.iface([],{text:dn.opt("string"),exemptions:dn.opt(dn.array("RestrictionConfig"))}),RestrictionConfig:dn.iface([],{user:"string"}),HapticType:dn.union(dn.lit("success"),dn.lit("warning"),dn.lit("failure"),dn.lit("light"),dn.lit("medium"),dn.lit("heavy"),dn.lit("selection")),ActionConfig:dn.union("ToggleActionConfig","CallServiceActionConfig","NavigateActionConfig","UrlActionConfig","MoreInfoActionConfig","NoActionConfig","CustomActionConfig","ToggleMenuActionConfig")},Rn=(e,t,o,i)=>{i=i||{},o=null==o?{}:o;const a=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return a.detail=o,e.dispatchEvent(a),a},Ln=(e,t)=>{if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let o,i;if(Array.isArray(e)){if(i=e.length,i!==t.length)return!1;for(o=i;0!=o--;)if(!Ln(e[o],t[o]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o of e.entries())if(!t.has(o[0]))return!1;for(o of e.entries())if(!Ln(o[1],t.get(o[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o of e.entries())if(!t.has(o[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(i=e.length,i!==t.length)return!1;for(o=i;0!=o--;)if(e[o]!==t[o])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const a=Object.keys(e);if(i=a.length,i!==Object.keys(t).length)return!1;for(o=i;0!=o--;)if(!Object.prototype.hasOwnProperty.call(t,a[o]))return!1;for(o=i;0!=o--;){const i=a[o];if(!Ln(e[i],t[i]))return!1}return!0}return e!=e&&t!=t},wn="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Nn extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.cancelled=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"fixed",width:wn?"100px":"50px",height:wn?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((e=>{document.addEventListener(e,(()=>{this.cancelled=!0,this.timer&&(this.stopAnimation(),clearTimeout(this.timer),this.timer=void 0)}),{passive:!0})}))}bind(e,t={}){e.actionHandler&&Ln(t,e.actionHandler.options)||(e.actionHandler?(e.removeEventListener("touchstart",e.actionHandler.start),e.removeEventListener("touchend",e.actionHandler.end),e.removeEventListener("touchcancel",e.actionHandler.end),e.removeEventListener("mousedown",e.actionHandler.start),e.removeEventListener("click",e.actionHandler.end),e.removeEventListener("keyup",e.actionHandler.handleEnter)):e.addEventListener("contextmenu",(e=>{const t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1})),e.actionHandler={options:t},t.disabled||(e.actionHandler.start=e=>{let o,i;this.cancelled=!1,e.touches?(o=e.touches[0].clientX,i=e.touches[0].clientY):(o=e.clientX,i=e.clientY),t.hasHold&&(this.held=!1,this.timer=window.setTimeout((()=>{this.startAnimation(o,i),this.held=!0}),this.holdTime))},e.actionHandler.end=e=>{if(["touchend","touchcancel"].includes(e.type)&&this.cancelled)return;const o=e.target;e.cancelable&&e.preventDefault(),t.hasHold&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0),t.hasHold&&this.held?Rn(o,"action",{action:"hold"}):t.hasDoubleClick?"click"===e.type&&e.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,Rn(o,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Rn(o,"action",{action:"double_tap"})):Rn(o,"action",{action:"tap"})},e.actionHandler.handleEnter=e=>{13===e.keyCode&&e.currentTarget.actionHandler.end(e)},e.addEventListener("touchstart",e.actionHandler.start,{passive:!0}),e.addEventListener("touchend",e.actionHandler.end),e.addEventListener("touchcancel",e.actionHandler.end),e.addEventListener("mousedown",e.actionHandler.start,{passive:!0}),e.addEventListener("click",e.actionHandler.end),e.addEventListener("keyup",e.actionHandler.handleEnter)))}startAnimation(e,t){Object.assign(this.style,{left:`${e}px`,top:`${t}px`,display:null}),this.ripple.disabled=!1,this.ripple.startPress(),this.ripple.unbounded=!0}stopAnimation(){this.ripple.endPress(),this.ripple.disabled=!0,this.style.display="none"}}customElements.define("apexcharts-card-action-handler",Nn);const Bn=(e,t)=>{const o=(()=>{const e=document.body;if(e.querySelector("apexcharts-card-action-handler"))return e.querySelector("apexcharts-card-action-handler");const t=document.createElement("apexcharts-card-action-handler");return e.appendChild(t),t})();o&&o.bind(e,t)},Xn=ve(class extends ye{update(e,[t]){return Bn(e.element,t),E}render(e){}});console.info(`%c APEXCHARTS-CARD %c v${Ge} `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),globalThis.ApexCharts=Mo,Ye.config({name:"apexchart-card",version:1,storeName:"entity_history_cache",description:"ApexCharts-card uses caching for the entity history"}),Ye.iterate(((e,t)=>{const o=t.endsWith("-raw")?e:Ht(e);o.card_version!==Ge&&Ye.removeItem(t);const i=new Date;i.setTime(i.getTime()-o.span),new Date(o.last_fetched)<i&&Ye.removeItem(t)})).catch((e=>{console.warn("Purging has errored: ",e)}));let Sn=class extends fe{constructor(){super(...arguments),this._loaded=!1,this._updating=!1,this._entities=[],this._colors=[],this._brushColors=[],this._headerColors=[],this._graphSpan=Rt,this._offset=0,this._headerState=[],this._dataLoaded=!1,this._seriesOffset=[],this._seriesTimeDelta=[],this._updateDelay=1500,this._brushInit=!1,this._brushSelectionSpan=0,this._serverTimeOffset=0,this._lastUpdated=new Date,this._warning=!1}connectedCallback(){var e;super.connectedCallback(),this._config&&this._hass&&!this._loaded?this._initialLoad():this._config&&this._hass&&this._apexChart&&!this._config.update_interval&&window.requestAnimationFrame((()=>{this._updateOnInterval()})),(null===(e=this._config)||void 0===e?void 0:e.update_interval)&&(window.requestAnimationFrame((()=>{this._updateOnInterval()})),this._intervalTimeout=setInterval((()=>this._updateOnInterval()),this._interval))}disconnectedCallback(){this._apexChart&&this._apexChart.destroy(),this._intervalTimeout&&clearInterval(this._intervalTimeout),this._updating=!1,super.disconnectedCallback()}_updateOnInterval(){!this._updating&&this._hass&&(this._updating=!0,this._updateData())}updated(e){super.updated(e),this._config&&this._hass&&this.isConnected&&!this._loaded&&this._initialLoad()}_firstDataLoad(){!this._updating&&!this._dataLoaded&&this._apexChart&&this._config&&this._hass&&(this._dataLoaded=!0,this._updating=!0,this._updateData().then((()=>{var e,t;(null===(t=null===(e=this._config)||void 0===e?void 0:e.experimental)||void 0===t?void 0:t.hidden_by_default)&&this._config.series_in_graph.forEach(((e,t)=>{var o,i;if(e.show.hidden_by_default){const e=Vt(t,null===(o=this._config)||void 0===o?void 0:o.series_in_graph,this._entities);null===(i=this._apexChart)||void 0===i||i.hideSeries(e)}}))})))}set hass(e){if(this._hass=e,!this._config||!this._graphs||!e)return;this._graphs.map((t=>{t&&(t.hass=e)}));let t=!1,o=!1;this._config.series.forEach(((i,a)=>{const n=e&&e.states[i.entity]||void 0;n?n&&this._entities[a]!==n&&(this._entities[a]=n,t=!0,this._graphs&&this._graphs[a]&&(this._graphs[a].hass=this._hass),"raw"===i.show.in_header&&(this._headerState[a]=function(e,t){let o=e;return void 0===o?null:("string"==typeof o&&(o=parseFloat(o),Number.isNaN(o))||null===o||"number"!=typeof o||Number.isInteger(o)||(o=o.toFixed(void 0===t?Ct:t)),o)}(i.attribute?n.attributes[i.attribute]:n.state,i.float_precision),o=!0)):this._entities[a]=n})),o&&(this._headerState=[...this._headerState]),this._config.series.some(((e,t)=>void 0===this._entities[t]))?this._warning=!0:(this._warning&&(this._warning=!1,this._reset()),t&&(this._entities=[...this._entities],this._updating||this._config.update_interval||(this._dataLoaded?(this._updating=!0,setTimeout((()=>{this._updateData()}),this._updateDelay)):this._firstDataLoad())))}_reset(){this._apexChart&&(this._apexChart.destroy(),this._apexChart=void 0,this._loaded=!1,this._dataLoaded=!1,this._updating=!1,this._serverTimeOffset=0,this._apexBrush&&(this._apexBrush.destroy(),this._apexBrush=void 0,this._brushInit=!1)),this._config&&this._hass&&!this._loaded&&this._initialLoad()}setConfig(e){var t,o,i,a,n,r,b,p;let s=JSON.parse(JSON.stringify(e));s.entities&&(s.series=s.entities,delete s.entities),s.config_templates&&(s.config_templates=s.config_templates&&Array.isArray(s.config_templates)?s.config_templates:[s.config_templates],s=io(to(),s));try{const{ChartCardExternalConfig:e}=dn.createCheckers(yn);if((null===(t=s.experimental)||void 0===t?void 0:t.disable_config_validation)||e.strictCheck(s),s.all_series_config&&s.series.forEach(((e,t)=>{const o=JSON.parse(JSON.stringify(s.all_series_config));s.series[t]=ao(o,e)})),s.update_interval&&(this._interval=Kt(s.update_interval,"update_interval")),s.graph_span&&(this._graphSpan=Kt(s.graph_span,"graph_span")),(null===(o=s.span)||void 0===o?void 0:o.offset)&&(this._offset=Jt(s.span.offset,"span.offset")),(null===(i=s.span)||void 0===i?void 0:i.end)&&(null===(a=s.span)||void 0===a?void 0:a.start))throw new Error("span: Only one of 'start' or 'end' is allowed.");(null===(n=s.brush)||void 0===n?void 0:n.selection_span)&&(this._brushSelectionSpan=Kt(s.brush.selection_span,"brush.selection_span")),s.series.forEach(((e,t)=>{e.offset&&(this._seriesOffset[t]=Jt(e.offset,`series[${t}].offset`)),e.time_delta&&(this._seriesTimeDelta[t]=Jt(e.time_delta,`series[${t}].time_delta`))})),s.update_delay&&(this._updateDelay=Kt(s.update_delay,"update_delay")),this._config=Gt({graph_span:"24h",cache:!0,useCompress:!1,show:{loading:!0}},s);const M=(null===(r=this._config)||void 0===r?void 0:r.color_list)||Tt;if(this._config){if(this._graphs=this._config.series.map(((e,t)=>{var o,i,a,n,r,b;if(e.index=t,e.ignore_history=!(!(null===(o=this._config)||void 0===o?void 0:o.chart_type)||!["donut","pie","radialBar"].includes(null===(i=this._config)||void 0===i?void 0:i.chart_type)||e.group_by&&"raw"!==(null===(a=e.group_by)||void 0===a?void 0:a.func)||e.data_generator||e.statistics||e.offset),this._headerColors[t]||(this._headerColors[t]=M[t%M.length]),e.color&&(this._headerColors[t]=e.color),e.fill_raw=e.fill_raw||"null",e.extend_to=void 0!==e.extend_to?e.extend_to:"end",e.type=(null===(n=this._config)||void 0===n?void 0:n.chart_type)?void 0:e.type||Lt,e.group_by?(e.group_by.duration=e.group_by.duration||"1h",e.group_by.func=e.group_by.func||"raw",e.group_by.fill=e.group_by.fill||wt):e.group_by={duration:"1h",func:"raw",fill:wt},e.show?(e.show.in_legend=void 0===e.show.in_legend?Nt:e.show.in_legend,e.show.legend_value=void 0===e.show.legend_value?Bt:e.show.legend_value,e.show.in_chart=void 0===e.show.in_chart?St:e.show.in_chart,e.show.in_header=void 0===e.show.in_header?!(!e.show.in_chart&&e.show.in_brush)&&Xt:e.show.in_header,e.show.name_in_header=void 0===e.show.name_in_header?kt:e.show.name_in_header,e.show.offset_in_name=void 0===e.show.offset_in_name?_t:e.show.offset_in_name):e.show={in_legend:Nt,legend_value:Bt,in_header:Xt,in_chart:St,name_in_header:kt,offset_in_name:_t},Kt(e.group_by.duration,`series[${t}].group_by.duration`),e.color_threshold&&e.color_threshold.length>0){const t=JSON.parse(JSON.stringify(e.color_threshold));t.sort(((e,t)=>e.value<t.value?-1:1)),e.color_threshold=t}if(e.entity){const o=!0!==(null===(r=to())||void 0===r?void 0:r.editMode)&&this._config.cache,i=new ln(t,this._graphSpan,o,e,null===(b=this._config)||void 0===b?void 0:b.span);return this._hass&&(i.hass=this._hass),i}})),this._config.series_in_graph=[],this._config.series_in_brush=[],this._config.series.forEach(((e,t)=>{var o,i;e.show.in_chart&&(this._colors.push(this._headerColors[t]),this._config.series_in_graph.push(e)),(null===(i=null===(o=this._config)||void 0===o?void 0:o.experimental)||void 0===i?void 0:i.brush)&&e.show.in_brush&&(this._brushColors.push(this._headerColors[t]),this._config.series_in_brush.push(e))})),this._config.yaxis&&this._config.yaxis.length>1){if(this._config.series_in_graph.some((e=>!e.yaxis_id)))throw new Error("Multiple yaxis detected: Some series are missing the 'yaxis_id' configuration.");if(this._config.yaxis.some((e=>!e.id)))throw new Error("Multiple yaxis detected: Some yaxis are missing an 'id'.")}if(this._config.yaxis){const e=this._generateYAxisConfig(this._config);this._config.apex_config?this._config.apex_config.yaxis=e:this._config.apex_config={yaxis:e},null===(b=this._yAxisConfig)||void 0===b||b.forEach((e=>{[e.min,e.min_type]=this._getTypeOfMinMax(e.min),[e.max,e.max_type]=this._getTypeOfMinMax(e.max)}))}this._headerColors=this._headerColors.slice(0,null===(p=this._config)||void 0===p?void 0:p.series.length)}}catch(ve){throw new Error(`/// apexcharts-card version ${Ge} /// ${ve.message}`)}this._reset()}_generateYAxisConfig(e){if(!e.yaxis)return;const t=[];this._yAxisConfig=JSON.parse(JSON.stringify(e.yaxis));return e.series_in_graph.map(((o,i)=>{var a,n,r,b;let p=-1;if(p=1!==(null===(a=e.yaxis)||void 0===a?void 0:a.length)?e.yaxis.findIndex((e=>e.id===o.yaxis_id)):0,p<0)throw new Error(`yaxis_id: ${o.yaxis_id} doesn't exist.`);let s=JSON.parse(JSON.stringify(e.yaxis[p]));return delete s.apex_config,delete s.decimals,s.decimalsInFloat=void 0===e.yaxis[p].decimals?Ct:e.yaxis[p].decimals,(null===(n=this._yAxisConfig)||void 0===n?void 0:n[p].series_id)?null===(b=null===(r=this._yAxisConfig)||void 0===r?void 0:r[p].series_id)||void 0===b||b.push(i):this._yAxisConfig[p].series_id=[i],e.yaxis[p].apex_config&&(s=Gt(s,e.yaxis[p].apex_config),delete s.apex_config),"number"!=typeof s.min&&delete s.min,"number"!=typeof s.max&&delete s.max,t[p]?s.show=!1:(s.show=void 0===e.yaxis[p].show||e.yaxis[p].show,t[p]=!0),s}))}static get styles(){return co}render(){var e,t,o,i,a;if(!this._config||!this._hass)return T``;if(this._warning||this._config.series.some(((e,t)=>void 0===this._entities[t])))return this._renderWarnings();const n={"lds-ring":!(!(null===(e=this._config.show)||void 0===e?void 0:e.loading)||!this._updating)},r={wrapper:!0,"with-header":(null===(t=this._config.header)||void 0===t?void 0:t.show)||!0},b=(null===(o=this._config.header)||void 0===o?void 0:o.standard_format)?null===(i=this._config.header)||void 0===i?void 0:i.title:void 0;return T`
      <ha-card header=${(e=>null!=e?e:P)(b)}>
        <div id="spinner-wrapper">
          <div id="spinner" class=${Re(n)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class=${Re(r)}>
          ${!(null===(a=this._config.header)||void 0===a?void 0:a.show)||!this._config.header.show_states&&this._config.header.standard_format?T``:this._renderHeader()}
          <div id="graph-wrapper">
            <div id="graph"></div>
            ${this._config.series_in_brush.length?T`<div id="brush"></div>`:""}
          </div>
        </div>
        ${this._renderLastUpdated()}
      </ha-card>
    `}_renderWarnings(){var e;return T`
      <ha-card class="warning">
        <hui-warning>
          <div style="font-weight: bold;">apexcharts-card</div>
          ${null===(e=this._config)||void 0===e?void 0:e.series.map(((e,t)=>{var o;return this._entities[t]?T``:T` <div>Entity not available: ${null===(o=this._config)||void 0===o?void 0:o.series[t].entity}</div> `}))}
        </hui-warning>
      </ha-card>
    `}_renderHeader(){var e,t,o,i,a,n,r,b;const p={floating:(null===(t=null===(e=this._config)||void 0===e?void 0:e.header)||void 0===t?void 0:t.floating)||!1};return T`
      <div id="header" class=${Re(p)}>
        ${!(null===(i=null===(o=this._config)||void 0===o?void 0:o.header)||void 0===i?void 0:i.standard_format)&&(null===(n=null===(a=this._config)||void 0===a?void 0:a.header)||void 0===n?void 0:n.title)?this._renderTitle():T``}
        ${(null===(b=null===(r=this._config)||void 0===r?void 0:r.header)||void 0===b?void 0:b.show_states)?this._renderStates():T``}
      </div>
    `}_renderTitle(){var e,t,o,i,a,n,r,b,p,s,M,c,z,l,O,d,A,h,u,f,q,g,W,m,x,v,y,R,L,w,N,B,X,S,k,_,C,E,P;const D=!(null===(t=null===(e=this._config)||void 0===e?void 0:e.header)||void 0===t?void 0:t.disable_actions)&&(null===(i=null===(o=this._config)||void 0===o?void 0:o.header)||void 0===i?void 0:i.title_actions)&&("none"!==(null===(b=null===(r=null===(n=null===(a=this._config)||void 0===a?void 0:a.header)||void 0===n?void 0:n.title_actions)||void 0===r?void 0:r.tap_action)||void 0===b?void 0:b.action)||(null===(c=null===(M=null===(s=null===(p=this._config)||void 0===p?void 0:p.header)||void 0===s?void 0:s.title_actions)||void 0===M?void 0:M.hold_action)||void 0===c?void 0:c.action)&&"none"!==(null===(d=null===(O=null===(l=null===(z=this._config)||void 0===z?void 0:z.header)||void 0===l?void 0:l.title_actions)||void 0===O?void 0:O.hold_action)||void 0===d?void 0:d.action)||(null===(f=null===(u=null===(h=null===(A=this._config)||void 0===A?void 0:A.header)||void 0===h?void 0:h.title_actions)||void 0===u?void 0:u.double_tap_action)||void 0===f?void 0:f.action)&&"none"!==(null===(m=null===(W=null===(g=null===(q=this._config)||void 0===q?void 0:q.header)||void 0===g?void 0:g.title_actions)||void 0===W?void 0:W.double_tap_action)||void 0===m?void 0:m.action))?"actions":"disabled";return T`<div
      id="header__title"
      class="${D}"
      @action=${e=>{this._handleTitleAction(e)}}
      .actionHandler=${Xn({hasDoubleClick:(null===(R=null===(y=null===(v=null===(x=this._config)||void 0===x?void 0:x.header)||void 0===v?void 0:v.title_actions)||void 0===y?void 0:y.double_tap_action)||void 0===R?void 0:R.action)&&"none"!==(null===(w=null===(L=this._config)||void 0===L?void 0:L.header)||void 0===w?void 0:w.title_actions.double_tap_action.action),hasHold:(null===(S=null===(X=null===(B=null===(N=this._config)||void 0===N?void 0:N.header)||void 0===B?void 0:B.title_actions)||void 0===X?void 0:X.hold_action)||void 0===S?void 0:S.action)&&"none"!==(null===(C=null===(_=null===(k=this._config)||void 0===k?void 0:k.header)||void 0===_?void 0:_.title_actions)||void 0===C?void 0:C.hold_action.action)})}
      @focus="${e=>{this.handleRippleFocus(e,"title")}}"
      @blur="${e=>{this.handleRippleBlur(e,"title")}}"
      @mousedown="${e=>{this.handleRippleActivate(e,"title")}}"
      @mouseup="${e=>{this.handleRippleDeactivate(e,"title")}}"
      @touchstart="${e=>{this.handleRippleActivate(e,"title")}}"
      @touchend="${e=>{this.handleRippleDeactivate(e,"title")}}"
      @touchcancel="${e=>{this.handleRippleDeactivate(e,"title")}}"
    >
      <span>${null===(P=null===(E=this._config)||void 0===E?void 0:E.header)||void 0===P?void 0:P.title}</span>
      <mwc-ripple unbounded id="ripple-title"></mwc-ripple>
    </div>`}_renderStates(){var e;return T`
      <div id="header__states">
        ${null===(e=this._config)||void 0===e?void 0:e.series.map(((e,t)=>{var o,i,a,n,r,b,p,s,M,c,z,l,O,d,A,h,u,f,q,g,W,m,x;return e.show.in_header?T`
              <div
                id="states__state"
                class="${!(null===(i=null===(o=this._config)||void 0===o?void 0:o.header)||void 0===i?void 0:i.disable_actions)&&("none"!==(null===(n=null===(a=e.header_actions)||void 0===a?void 0:a.tap_action)||void 0===n?void 0:n.action)||(null===(b=null===(r=e.header_actions)||void 0===r?void 0:r.hold_action)||void 0===b?void 0:b.action)&&"none"!==(null===(s=null===(p=e.header_actions)||void 0===p?void 0:p.hold_action)||void 0===s?void 0:s.action)||(null===(c=null===(M=e.header_actions)||void 0===M?void 0:M.double_tap_action)||void 0===c?void 0:c.action)&&"none"!==(null===(l=null===(z=e.header_actions)||void 0===z?void 0:z.double_tap_action)||void 0===l?void 0:l.action))?"actions":"disabled"}"
                @action=${t=>{this._handleAction(t,e)}}
                .actionHandler=${Xn({hasDoubleClick:(null===(d=null===(O=e.header_actions)||void 0===O?void 0:O.double_tap_action)||void 0===d?void 0:d.action)&&"none"!==e.header_actions.double_tap_action.action,hasHold:(null===(h=null===(A=e.header_actions)||void 0===A?void 0:A.hold_action)||void 0===h?void 0:h.action)&&"none"!==(null===(u=e.header_actions)||void 0===u?void 0:u.hold_action.action)})}
                @focus="${e=>{this.handleRippleFocus(e,t)}}"
                @blur="${e=>{this.handleRippleBlur(e,t)}}"
                @mousedown="${e=>{this.handleRippleActivate(e,t)}}"
                @mouseup="${e=>{this.handleRippleDeactivate(e,t)}}"
                @touchstart="${e=>{this.handleRippleActivate(e,t)}}"
                @touchend="${e=>{this.handleRippleDeactivate(e,t)}}"
                @touchcancel="${e=>{this.handleRippleDeactivate(e,t)}}"
              >
                <div id="state__value">
                  <span id="state" style="${this._computeHeaderStateColor(e,null===(f=this._headerState)||void 0===f?void 0:f[t])}"
                    >${0===(null===(q=this._headerState)||void 0===q?void 0:q[t])?0:e.show.as_duration?Qt(null===(g=this._headerState)||void 0===g?void 0:g[t],e.show.as_duration):this._computeLastState(null===(W=this._headerState)||void 0===W?void 0:W[t],t)||Et}</span
                  >
                  ${e.show.as_duration?"":T`<span id="uom">${jt(t,null===(m=this._config)||void 0===m?void 0:m.series,this._entities)}</span>`}
                </div>
                ${e.show.name_in_header?T`<div id="state__name">${Vt(t,null===(x=this._config)||void 0===x?void 0:x.series,this._entities)}</div>`:""}
                <mwc-ripple unbounded id="ripple-${t}"></mwc-ripple>
              </div>
            `:T``}))}
      </div>
    `}_renderLastUpdated(){var e,t;return(null===(t=null===(e=this._config)||void 0===e?void 0:e.show)||void 0===t?void 0:t.last_updated)?T` <div id="last_updated">${function(e,t,o,i=!0){const a=ro(e,t)?{hour12:!0}:{hourCycle:"h23"},n=bo(e,t);return i?new Intl.DateTimeFormat(n,Object.assign({year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},a)).format(o):new Intl.DateTimeFormat(n,Object.assign({hour:"numeric",minute:"numeric",second:"numeric"},a)).format(o)}(this._config,this._hass,this._lastUpdated,!0)}</div> `:T``}async _initialLoad(){var e,t,o;if(await this.updateComplete,"server"===(null==(o=this._hass)?void 0:o.locale).time_zone&&(this._serverTimeOffset=(t=null===(e=this._hass)||void 0===e?void 0:e.config.time_zone)?60*(yt().utcOffset()-yt().tz(t).utcOffset())*1e3:0),!this._apexChart&&this.shadowRoot&&this._config&&this.shadowRoot.querySelector("#graph")){this._loaded=!0;const e=this.shadowRoot.querySelector("#graph"),t=function(e,t,o){const i=Ha(),a={chart:{locales:[e.locale&&i[e.locale]||(null==t?void 0:t.language)&&i[t.language]||Ya()],defaultLocale:e.locale&&i[e.locale]&&e.locale||(null==t?void 0:t.language)&&i[t.language]&&t.language||"en",type:e.chart_type||Lt,stacked:null==e?void 0:e.stacked,foreColor:"var(--primary-text-color)",width:"100%",zoom:{enabled:!1},toolbar:{show:!1}},grid:{strokeDashArray:3},fill:{opacity:Ga(e,!1),type:sn(e,!1)},series:Va(e,t,!1),labels:ja(e,t),xaxis:Ua(e,t),yaxis:$a(e),tooltip:{x:{formatter:Ka(e,t)},y:{formatter:Ja(e,t)}},dataLabels:{enabled:Qa(e),enabledOnSeries:rn(e),formatter:en(e,o,t)},plotOptions:{radialBar:tn(e,t)},legend:{position:"bottom",show:!0,formatter:on(e,t),markers:an(e)},stroke:{curve:nn(e,!1),lineCap:"radialBar"===e.chart_type?"round":"butt",colors:"pie"===e.chart_type||"donut"===e.chart_type?["var(--card-background-color)"]:void 0,width:bn(e,!1),dashArray:pn(e,!1)},markers:{showNullDataPoints:!1},noData:{text:"Loading..."}};let n={};"minimal"===e.layout&&(n=zo);return e.apex_config?Gt(Gt(a,n),Mn(e.apex_config)):Gt(a,n)}(this._config,this._hass,this._graphs);if(this._config.series_in_brush.length&&(t.chart.id=Math.random().toString(36).substring(7)),this._apexChart=new Mo(e,t),this._apexChart.render(),this._config.series_in_brush.length){const e=this.shadowRoot.querySelector("#brush");this._apexBrush=new Mo(e,function(e,t,o){var i;const a=Ha(),n={chart:{locales:[e.locale&&a[e.locale]||(null==t?void 0:t.language)&&a[t.language]||Ya()],defaultLocale:e.locale&&a[e.locale]&&e.locale||(null==t?void 0:t.language)&&a[t.language]&&t.language||"en",type:e.chart_type||Lt,stacked:null==e?void 0:e.stacked,foreColor:"var(--primary-text-color)",width:"100%",height:"120px",zoom:{enabled:!1},toolbar:{show:!1},id:Math.random().toString(36).substring(7),brush:{target:o,enabled:!0}},grid:{strokeDashArray:3},fill:{opacity:Ga(e,!0),type:sn(e,!0)},series:Va(e,t,!0),xaxis:Ua(e,t),yaxis:{tickAmount:2,decimalsInFloat:Ct},tooltip:{enabled:!1},dataLabels:{enabled:!1},legend:{show:!1},stroke:{curve:nn(e,!0),lineCap:"radialBar"===e.chart_type?"round":"butt",colors:"pie"===e.chart_type||"donut"===e.chart_type?["var(--card-background-color)"]:void 0,width:bn(e,!0),dashArray:pn(e,!1)},markers:{showNullDataPoints:!1},noData:{text:"Loading..."}};return(null===(i=e.brush)||void 0===i?void 0:i.apex_config)?Gt(n,Mn(e.brush.apex_config)):n}(this._config,this._hass,t.chart.id)),this._apexBrush.render()}this._firstDataLoad()}}async _updateData(){var e,t,o,i,a,n,r,b,p,s,M,c,z,l,O,d;if(!this._config||!this._apexChart||!this._graphs)return;const{start:A,end:h}=this._getSpanDates(),u=new Date;this._lastUpdated=u;const f=!0!==(null===(e=to())||void 0===e?void 0:e.editMode)&&this._config.cache;try{const e=this._graphs.map(((e,t)=>(e&&(e.cache=f),null==e?void 0:e._updateHistory(this._seriesOffset[t]?new Date(A.getTime()+this._seriesOffset[t]):A,this._seriesOffset[t]?new Date(h.getTime()+this._seriesOffset[t]):h))));await Promise.all(e);let q={series:[]};const g={series:[]};Pt.includes(this._config.chart_type)?(this._graphs.forEach(((e,t)=>{var o,i,a,n,r,b,p,s,M,c,z,l;if(!e)return[];const O=null===(o=this._config)||void 0===o?void 0:o.series[t].show.in_header;if(O&&"raw"!==O&&(this._headerState[t]="after_now"===O||"before_now"===O?e.nowValue(u.getTime()+(this._seriesOffset[t]?this._seriesOffset[t]:0),"before_now"===O):e.lastState),!(null===(i=this._config)||void 0===i?void 0:i.series[t].show.in_chart)&&!(null===(a=this._config)||void 0===a?void 0:a.series[t].show.in_brush))return;if(0===e.history.length)return(null===(n=this._config)||void 0===n?void 0:n.series[t].show.in_chart)&&q.series.push({data:[]}),void((null===(r=this._config)||void 0===r?void 0:r.series[t].show.in_brush)&&g.series.push({data:[]}));let d=[];const A=this._serverTimeOffset+(this._seriesOffset[t]||0)-(this._seriesTimeDelta[t]||0);if(d=A?function(e,t){return t?e.map((e=>[e[0]-t,e[1]])):e}(e.history,A):[...e.history],"column"!==(null===(b=this._config)||void 0===b?void 0:b.series[t].type)&&(null===(p=this._config)||void 0===p?void 0:p.series[t].extend_to)){const e=d.slice(-1)[0];"end"===(null===(s=this._config)||void 0===s?void 0:s.series[t].extend_to)&&e[0]<h.getTime()-this._serverTimeOffset?d.push([h.getTime()-this._serverTimeOffset,e[1]]):"now"===(null===(M=this._config)||void 0===M?void 0:M.series[t].extend_to)&&e[0]<u.getTime()-this._serverTimeOffset&&d.push([u.getTime()-this._serverTimeOffset,e[1]])}const f=(null===(c=this._config)||void 0===c?void 0:c.series[t].invert)?{data:this._invertData(d)}:{data:d};(null===(z=this._config)||void 0===z?void 0:z.series[t].show.in_chart)&&q.series.push(f),(null===(l=this._config)||void 0===l?void 0:l.series[t].show.in_brush)&&g.series.push(f)})),q.annotations=this._computeAnnotations(A,h,new Date(u.getTime()-this._serverTimeOffset)),this._yAxisConfig&&(q.yaxis=this._computeYAxisAutoMinMax(A,h)),this._apexBrush||(q.xaxis={min:A.getTime()-this._serverTimeOffset,max:this._findEndOfChart(new Date(h.getTime()-this._serverTimeOffset),!1)})):q={series:this._graphs.flatMap(((e,t)=>{var o,i,a,n;if(!e)return[];let r=0;if(0===e.history.length)"raw"!==(null===(o=this._config)||void 0===o?void 0:o.series[t].show.in_header)&&(this._headerState[t]=null),r=0;else{const o=e.lastState;r=o||0,"raw"!==(null===(i=this._config)||void 0===i?void 0:i.series[t].show.in_header)&&(this._headerState[t]=o)}return(null===(a=this._config)||void 0===a?void 0:a.series[t].show.in_chart)?"radialBar"===(null===(n=this._config)||void 0===n?void 0:n.chart_type)?[eo(r,this._config.series[t].min,this._config.series[t].max)]:[r]:[]}))},q.colors=this._computeChartColors(!1),this._apexBrush&&(g.colors=this._computeChartColors(!0)),(null===(t=this._config.experimental)||void 0===t?void 0:t.color_threshold)&&this._config.series.some((e=>e.color_threshold))&&(q.markers={colors:Ut(this._config.series_in_graph.flatMap(((e,t)=>"column"===e.type?[]:[this._colors[t]])))},q.legend={markers:{fillColors:Ut(this._colors)}},q.tooltip={marker:{fillColors:q.legend.markers.fillColors}},q.fill={gradient:{type:"vertical",colorStops:this._config.series_in_graph.map(((e,t)=>{var o,i,a,n;if(!e.color_threshold||![void 0,"area","line"].includes(e.type))return[];const r=null===(i=null===(o=this._graphs)||void 0===o?void 0:o[e.index])||void 0===i?void 0:i.min,b=null===(n=null===(a=this._graphs)||void 0===a?void 0:a[e.index])||void 0===n?void 0:n.max;return void 0===r||void 0===b?[]:this._computeFillColorStops(e,r,b,$t(this._colors[t]),e.invert)||[]}))}},this._apexBrush&&(g.fill={gradient:{type:"vertical",colorStops:this._config.series_in_brush.map(((e,t)=>{var o,i,a,n;if(!e.color_threshold||![void 0,"area","line"].includes(e.type))return[];const r=null===(i=null===(o=this._graphs)||void 0===o?void 0:o[e.index])||void 0===i?void 0:i.min,b=null===(n=null===(a=this._graphs)||void 0===a?void 0:a[e.index])||void 0===n?void 0:n.max;return void 0===r||void 0===b?[]:this._computeFillColorStops(e,r,b,$t(this._colors[t]),e.invert)||[]}))}}));const W=this._apexBrush&&this._brushInit&&(null===(a=null===(i=null===(o=this._apexChart.axes)||void 0===o?void 0:o.w)||void 0===i?void 0:i.globals)||void 0===a?void 0:a.maxX)===(null===(b=null===(r=null===(n=this._apexBrush.axes)||void 0===n?void 0:n.w)||void 0===r?void 0:r.globals)||void 0===b?void 0:b.maxX),m=null===(M=null===(s=null===(p=this._apexChart.axes)||void 0===p?void 0:p.w)||void 0===s?void 0:s.globals)||void 0===M?void 0:M.minX,x=null===(l=null===(z=null===(c=this._apexChart.axes)||void 0===c?void 0:c.w)||void 0===z?void 0:z.globals)||void 0===l?void 0:l.maxX;if(this._headerState=[...this._headerState],null===(O=this._apexChart)||void 0===O||O.updateOptions(q,!1,!Pt.includes(this._config.chart_type)),this._apexBrush){const e=A.getTime()-this._serverTimeOffset,t=this._findEndOfChart(new Date(h.getTime()-this._serverTimeOffset),!1);g.xaxis={min:e,max:t},W||!this._brushInit?g.chart={selection:{enabled:!0,xaxis:{min:g.xaxis.max-(this._brushSelectionSpan?this._brushSelectionSpan:this._graphSpan/4),max:g.xaxis.max}}}:g.chart={selection:{enabled:!0,xaxis:{min:m<e?e:m,max:m<e?e+(x-m):x}}};const o=$t("var(--primary-text-color)");g.chart.selection.stroke={color:o},g.chart.selection.fill={color:o,opacity:.1},this._brushInit=!0,null===(d=this._apexBrush)||void 0===d||d.updateOptions(g,!1,!1)}}catch(q){Yt(q)}this._updating=!1}_computeAnnotations(e,t,o){return Object.assign(Object.assign({},this._computeMinMaxPointsAnnotations(e,t)),this._computeNowAnnotation(o))}_computeMinMaxPointsAnnotations(e,t){var o;const i=e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate();return{points:null===(o=this._config)||void 0===o?void 0:o.series_in_graph.flatMap(((o,a)=>{var n,r;if(o.show.extremas){const{min:b,max:p}=(null===(r=null===(n=this._graphs)||void 0===n?void 0:n[o.index])||void 0===r?void 0:r.minMaxWithTimestamp(this._seriesOffset[o.index]?new Date(e.getTime()+this._seriesOffset[o.index]).getTime():e.getTime(),this._seriesOffset[o.index]?new Date(t.getTime()+this._seriesOffset[o.index]).getTime():t.getTime(),this._serverTimeOffset-(this._seriesTimeDelta[o.index]||0)))||{min:[0,null],max:[0,null]},s=$t(this._colors[a]),M=Zt(s),c=[];if(b[0]&&["min","min+time",!0,"time"].includes(o.show.extremas)){const e="time"===o.show.extremas||"min+time"===o.show.extremas;c.push(...this._getPointAnnotationStyle(b,this._seriesOffset[o.index],s,M,o,a,o.invert,i,e))}if(p[0]&&["max","max+time",!0,"time"].includes(o.show.extremas)){const e="time"===o.show.extremas||"max+time"===o.show.extremas;c.push(...this._getPointAnnotationStyle(p,this._seriesOffset[o.index],s,M,o,a,o.invert,i,e))}return c}return[]}))}}_getPointAnnotationStyle(e,t,o,i,a,n,r=!1,b,p){var s,M,c;const z=[],l=(null===(M=null===(s=this._config)||void 0===s?void 0:s.apex_config)||void 0===M?void 0:M.yaxis)&&Array.isArray(this._config.apex_config.yaxis)&&this._config.apex_config.yaxis.length>1;if(z.push({x:t?e[0]-t:e[0],y:r&&e[1]?-e[1]:e[1],seriesIndex:n,yAxisIndex:l?n:0,marker:{strokeColor:o,fillColor:"var(--card-background-color)"},label:{text:po(e[1],null===(c=this._hass)||void 0===c?void 0:c.locale,a.float_precision),borderColor:"var(--card-background-color)",borderWidth:2,style:{background:o,color:i}}}),p){let o=lt($t("var(--card-background-color)"));o=o.isValid&&o.getLuminance()>.5?o.darken(20):o.lighten(20);const i=Zt(o.toHexString());let a={timeStyle:"medium"};b||(a.dateStyle="medium"),a=Object.assign(Object.assign({},a),ro(this._config,this._hass)?{hour12:!0}:{hourCycle:"h23"});const p=bo(this._config,this._hass);z.push({x:t?e[0]-t:e[0],y:r&&e[1]?-e[1]:e[1],seriesIndex:n,yAxisIndex:l?n:0,marker:{size:0},label:{text:`${Intl.DateTimeFormat(p,a).format(e[0])}`,borderColor:"var(--card-background-color)",offsetY:-22,borderWidth:0,style:{background:o.toHexString(),color:i,fontSize:"8px",fontWeight:200}}})}return z}_computeNowAnnotation(e){var t,o;if(null===(o=null===(t=this._config)||void 0===t?void 0:t.now)||void 0===o?void 0:o.show){const t=$t(this._config.now.color||"var(--primary-color)"),o=Zt(t);return{xaxis:[{x:e.getTime(),strokeDashArray:3,label:{text:this._config.now.label,borderColor:t,style:{color:o,background:t}},borderColor:t}]}}return{}}_computeYAxisAutoMinMax(e,t){var o,i,a;if(this._config)return null===(o=this._yAxisConfig)||void 0===o||o.map((o=>{var i,a;if(o.min_type!==Le.FIXED||o.max_type!==Le.FIXED){const n=null===(i=o.series_id)||void 0===i?void 0:i.map((o=>{var i,a;const n=null===(i=this._graphs[o])||void 0===i?void 0:i.minMaxWithTimestampForYAxis(this._seriesOffset[o]?new Date(e.getTime()+this._seriesOffset[o]).getTime():e.getTime(),this._seriesOffset[o]?new Date(t.getTime()+this._seriesOffset[o]).getTime():t.getTime());if(n){if(null===(a=this._config)||void 0===a?void 0:a.series[o].invert){const e=n.min[1],t=n.max[1];null!==e&&(n.max[1]=-e),null!==t&&(n.min[1]=-t)}return n}}));let r=null,b=null;null==n||n.forEach((e=>{e&&((null==r||null!==e.min[1]&&r>e.min[1])&&(r=e.min[1]),(null==b||null!==e.max[1]&&b<e.max[1])&&(b=e.max[1]))})),void 0!==o.align_to&&(null!==r&&o.min_type!==Le.FIXED&&r%o.align_to!=0&&(r=r>=0?r-r%o.align_to:-(o.align_to+r%o.align_to-r)),null!==b&&o.max_type!==Le.FIXED&&b%o.align_to!=0&&(b=b>=0?o.align_to-b%o.align_to+b:b%o.align_to-b)),null===(a=o.series_id)||void 0===a||a.forEach((e=>{null!==r&&o.min_type!==Le.FIXED&&(this._config.apex_config.yaxis[e].min=this._getMinMaxBasedOnType(!0,r,o.min,o.min_type)),null!==b&&o.max_type!==Le.FIXED&&(this._config.apex_config.yaxis[e].max=this._getMinMaxBasedOnType(!1,b,o.max,o.max_type))}))}})),null===(a=null===(i=this._config)||void 0===i?void 0:i.apex_config)||void 0===a?void 0:a.yaxis}_getMinMaxBasedOnType(e,t,o,i){switch(i){case Le.AUTO:return t;case Le.SOFT:return e&&t>o||!e&&t<o?o:t;case Le.ABSOLUTE:return t+o;default:return t}}_getTypeOfMinMax(e){const t=/[+-]?\d+(\.\d+)?/g;if("number"==typeof e)return[e,Le.FIXED];if(void 0===e||"auto"===e)return[void 0,Le.AUTO];if("string"==typeof e&&"auto"!==e){const o=e.match(t);if(!o||1!==o.length)throw new Error(`Bad yaxis min/max format: ${e}`);const i=parseFloat(o[0]);if(e.startsWith("~"))return[i,Le.SOFT];if(e.startsWith("|")&&e.endsWith("|"))return[i,Le.ABSOLUTE]}throw new Error(`Bad yaxis min/max format: ${e}`)}_computeChartColors(e){var t,o,i;const a=Ut(e?this._brushColors:this._colors),n=e?null===(t=this._config)||void 0===t?void 0:t.series_in_brush:null===(o=this._config)||void 0===o?void 0:o.series_in_graph;return null==n||n.forEach(((e,t)=>{var o,i;if((null===(i=null===(o=this._config)||void 0===o?void 0:o.experimental)||void 0===i?void 0:i.color_threshold)&&(Dt.includes(this._config.chart_type)||"column"===e.type)&&e.color_threshold&&e.color_threshold.length>0){const o=this._colors;a[t]=function({value:i},a=e.color_threshold,n=o[t]){let r=a[0].color||n;return a.forEach((e=>{i>e.value&&(r=e.color||n)})),$t(r)}}})),a.slice(0,null===(i=this._config)||void 0===i?void 0:i.series_in_graph.length)}_computeFillColorStops(e,t,o,i,a=!1){if(!e.color_threshold)return;const n=o-t,r=e.color_threshold.flatMap(((r,b,p)=>{if(r.value>o&&p[b-1]&&p[b-1].value>o||r.value<t&&p[b+1]&&p[b+1].value<t)return[];let s;const M=void 0!==e.opacity?e.opacity:"area"===e.type?It:1;let c=void 0===r.opacity?M:r.opacity;if(r.value>o&&p[b-1]){const e=(o-p[b-1].value)/(r.value-p[b-1].value);s=oo(lt(p[b-1].color||i).toHexString(),lt(r.color||i).toHexString(),e);const t=void 0===p[b-1].opacity?M:p[b-1].opacity,a=void 0===r.opacity?M:r.opacity;c=t>a?(t-a)*(1-e)+a:(a-t)*e+t,c=c<0?-c:c}else if(r.value<t&&p[b+1]){const e=(p[b+1].value-t)/(p[b+1].value-r.value);s=oo(lt(p[b+1].color||i).toHexString(),lt(r.color||i).toHexString(),e);const o=void 0===p[b+1].opacity?M:p[b+1].opacity,a=void 0===r.opacity?M:r.opacity;c=o>a?(o-a)*(1-e)+a:(a-o)*e+o,c=c<0?-c:c}return s=s||lt(r.color||i).toHexString(),[void 0,"line"].includes(e.type)&&(s=lt(s).setAlpha(c).toHex8String()),[{color:s||lt(r.color||i).toHexString(),offset:n<=0?0:a?100-(o-r.value)*(100/n):(o-r.value)*(100/n),opacity:c}]}));return a?r:r.reverse()}_computeHeaderStateColor(e,t){var o,i,a;let n="";if(null===(i=null===(o=this._config)||void 0===o?void 0:o.header)||void 0===i?void 0:i.colorize_states){if(!((null===(a=this._config.experimental)||void 0===a?void 0:a.color_threshold)&&e.show.header_color_threshold&&e.color_threshold&&e.color_threshold.length>0&&null!==t))return this._headerColors&&this._headerColors.length>0?`color: ${this._headerColors[e.index]};`:"";{const o=e.color_threshold.findIndex((e=>e.value>t));if(o<0)n=$t(e.color_threshold[e.color_threshold.length-1].color||this._headerColors[e.index]);else if(0===o)n=$t(e.color_threshold[0].color||this._headerColors[e.index]);else{const i=e.color_threshold[o-1],a=e.color_threshold[o];if("column"===e.type)n=$t(i.color||this._headerColors[e.index]);else{const o=(t-i.value)/(a.value-i.value);n=oo($t(i.color||this._headerColors[e.index]),$t(a.color||this._headerColors[e.index]),o)}}}}return n?`color: ${n};`:""}_computeLastState(e,t){var o,i;return null===e?e:po(e,null===(o=this._hass)||void 0===o?void 0:o.locale,null===(i=this._config)||void 0===i?void 0:i.series[t].float_precision)}_findEndOfChart(e,t){var o,i;const a=new Date(e);let n=0;const r=t?null===(o=this._config)||void 0===o?void 0:o.series_in_brush:null===(i=this._config)||void 0===i?void 0:i.series_in_graph;return(null==r?void 0:r.reduce(((e,t)=>e&&"raw"!==t.group_by.func),(null==r?void 0:r.length)>0))&&(n=null==r?void 0:r.reduce(((e,t)=>{const o=ut(t.group_by.duration);return-1===e||o<e?o:e}),-1)),new Date(a.getTime()-(n||0)).getTime()}_invertData(e){return e.map((e=>null===e[1]?e:[e[0],-e[1]]))}_getSpanDates(){var e,t,o,i,a;let n=new Date,r=new Date(n.getTime()-this._graphSpan+1);const b=yt();if("server"===(null===(e=this._hass)||void 0===e?void 0:e.locale).time_zone&&b.tz(this._hass.config.time_zone),null===(o=null===(t=this._config)||void 0===t?void 0:t.span)||void 0===o?void 0:o.start){r=b.startOf(this._config.span.start).toDate(),n=new Date(r.getTime()+this._graphSpan)}else if(null===(a=null===(i=this._config)||void 0===i?void 0:i.span)||void 0===a?void 0:a.end){const e=b.endOf(this._config.span.end);n=new Date(e.toDate().getTime()+1),r=new Date(n.getTime()-this._graphSpan+1)}return this._offset&&(n.setTime(n.getTime()+this._offset),r.setTime(r.getTime()+this._offset)),{start:r,end:n}}_handleAction(e,t){var o,i;if(null===(o=e.detail)||void 0===o?void 0:o.action){const o=t.header_actions?JSON.parse(JSON.stringify(t.header_actions)):{};switch(e.detail.action){case"tap":case"hold":case"double_tap":o.entity=(null===(i=o[`${e.detail.action}_action`])||void 0===i?void 0:i.entity)||t.entity,Ee(this,this._hass,o,e.detail.action)}}}_handleTitleAction(e){var t,o,i,a,n,r;if(null===(t=e.detail)||void 0===t?void 0:t.action){const t=(null===(i=null===(o=this._config)||void 0===o?void 0:o.header)||void 0===i?void 0:i.title_actions)?JSON.parse(JSON.stringify(null===(n=null===(a=this._config)||void 0===a?void 0:a.header)||void 0===n?void 0:n.title_actions)):{};switch(e.detail.action){case"tap":case"hold":case"double_tap":t.entity=null===(r=t[`${e.detail.action}_action`])||void 0===r?void 0:r.entity,Ee(this,this._hass,t,e.detail.action)}}}handleRippleActivate(e,t){var o;const i=null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById(`ripple-${t}`);i&&"function"==typeof i.startFocus&&i.startPress(e)}handleRippleDeactivate(e,t){var o;const i=null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById(`ripple-${t}`);i&&"function"==typeof i.startFocus&&i.endPress()}handleRippleFocus(e,t){var o;const i=null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById(`ripple-${t}`);i&&"function"==typeof i.startFocus&&i.startFocus()}handleRippleBlur(e,t){var o;const i=null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById(`ripple-${t}`);i&&"function"==typeof i.startFocus&&i.endFocus()}getCardSize(){return 3}static getStubConfig(e,t,o){const i=(e,t,o,a,n,r)=>{const b=[];(null==n?void 0:n.length)&&b.push((e=>n.includes(e.split(".")[0]))),r&&b.push((t=>e.states[t]&&r(e.states[t])));const p=((e,t,o)=>{(!o||o>e.length)&&(o=e.length);const i=[];for(let a=0;a<e.length&&i.length<o;a++){let o=!0;for(const i of t)if(!i(e[a])){o=!1;break}o&&i.push(e[a])}return i})(o,b,t);if(p.length<t&&a.length){const o=i(e,t-p.length,a,[],n,r);p.push(...o)}return p},a=i(e,2,t,o,["sensor"],(e=>!isNaN(Number(e.state)))),n={header:{show:!0,title:"ApexCharts-Card",show_states:!0,colorize_states:!0},series:[]};return a[0]&&(n.series[0]={entity:a[0],data_generator:"// REMOVE ME\nconst now = new Date();\nconst data = [];\nfor(let i = 0; i <= 24; i++) {\n  data.push([now.getTime() - i * 1000 * 60 * 60, Math.floor((Math.random() * 10) + 1)])\n}\nreturn data.reverse();\n"}),a[1]&&(n.series[1]={entity:a[1],type:"column",data_generator:"// REMOVE ME\nconst now = new Date();\nconst data = [];\nfor(let i = 0; i <= 24; i++) {\n  data.push([now.getTime() - i * 1000 * 60 * 60, Math.floor((Math.random() * 10) + 1)])\n}\nreturn data.reverse();\n"}),n}};e([We({type:Boolean})],Sn.prototype,"_updating",void 0),e([We({attribute:!1})],Sn.prototype,"_config",void 0),e([We({attribute:!1})],Sn.prototype,"_headerState",void 0),e([We({attribute:!1})],Sn.prototype,"_lastUpdated",void 0),e([We({type:Boolean})],Sn.prototype,"_warning",void 0),e([function(e){return(({finisher:e,descriptor:t})=>(o,i)=>{var a;if(void 0===i){const i=null!==(a=o.originalKey)&&void 0!==a?a:o.key,n=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(o.key)}:{...o,key:i};return null!=e&&(n.finisher=function(t){e(t,i)}),n}{const a=o.constructor;void 0!==t&&Object.defineProperty(o,i,t(i)),null==e||e(a,i)}})({finisher:(t,o)=>{Object.assign(t.prototype[o],e)}})}({passive:!0})],Sn.prototype,"handleRippleActivate",null),Sn=e([(e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:i}=t;return{kind:o,elements:i,finisher(t){customElements.define(e,t)}}})(e,t))("apexcharts-card")],Sn),window.customCards=window.customCards||[],window.customCards.push({type:"apexcharts-card",name:"ApexCharts Card",preview:!0,description:"A graph card based on ApexCharts"});