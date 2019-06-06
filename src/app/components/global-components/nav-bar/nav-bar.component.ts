import {Component, HostListener, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'afcs-nav-bar',
  styleUrls: ['./nav-bar.component.scss'],
  template: `
    <nav class="nav navbar navbar-expand-lg navbar-light cl-effect-1">
      <svg class="nav-animation-img" *ngIf="!showMenu"
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           version="1.1"
           id="svg10"
           width="416"
           height="115"
           viewBox="0 0 416 115"
           sodipodi:docname="logoLetters.svg"
           inkscape:version="0.92.4 (5da689c313, 2019-01-14)">
        <metadata
          id="metadata16">
        </metadata>
        <defs
          id="defs14" />
        <g
          id="g20"
          transform="translate(-4.5047606e-7,-1.3332897)">
          <path
            style="fill:#c9d9e8"
            d="M 15.397187,95 H 6.9372304 L 6.3715243,93.525794 5.8058182,92.051587 23.462355,61.009896 l 17.656536,-31.04169 2.261422,-1.481741 2.261422,-1.48174 12.617199,-0.243854 12.617199,-0.243853 2.811933,2.084245 L 76.5,30.685508 82.596352,41.092754 88.692705,51.5 99.9092,71.3044 l 11.2165,19.8044 -0.32655,1.6956 -0.32654,1.6956 h -8.94647 -8.946474 L 90.539833,91.360313 88.5,88.220626 86.79651,85.110313 85.093021,82 H 58.563356 32.033692 L 29.556074,86.889343 27.078456,91.778687 25.4678,93.389343 23.857143,95 Z M 58.5,65 H 75 V 64.301862 63.603723 L 69.867071,54.551862 64.734143,45.5 63.617071,44.765313 62.5,44.030626 58.404988,44.015313 54.309975,44 52.778529,45.75 51.247083,47.5 46.623541,55.715312 42,63.930625 V 64.465312 65 Z m 63.04422,30 h -7.21089 L 113.66667,94.333333 113,93.666667 V 66.067732 38.468797 l 1.86799,-3.484399 1.86798,-3.484398 4.55792,-2.346949 4.55791,-2.34695 39.61046,-0.15305 39.61045,-0.153051 0.94833,1.5 0.94833,1.5 0.0153,6.127555 0.0153,6.127556 -1.33723,1.109799 -1.33722,1.109798 -36.41278,0.262646 L 131.5,44.5 v 4 4 l 37,0.5 37,0.5 v 8 8 l -37,0.5 -37,0.5 -0.28577,10.940632 -0.28576,10.940631 -1.08668,1.309369 L 128.75511,95 Z M 267.55,94.897639 227.5,94.795277 224.47908,94.070789 221.45816,93.346302 218.67797,91.524651 215.89778,89.703 214.19889,86.6015 212.5,83.5 l -0.32933,-19.47813 -0.32934,-19.478131 0.64694,-4.314066 0.64693,-4.314066 2.98239,-3.396748 2.98238,-3.396748 3.70001,-1.228118 3.70002,-1.228117 40.37905,-0.01669 40.37905,-0.01669 1.44968,1.933755 1.44969,1.933756 -0.39829,5.829464 -0.3983,5.829463 -1.43044,0.905224 L 306.5,43.969374 269.45,43.984687 232.4,44 231.2,45.2 230,46.4 V 61.231385 76.06277 l 1.25,0.414091 1.25,0.414091 37.35068,0.515632 37.35067,0.515633 1.39933,1.161336 L 310,80.244889 V 86.422445 92.6 l -1.2,1.2 -1.2,1.2 z M 359.9914,94.7914 319.4828,95.0828 318.2414,93.8414 317,92.6 v -5.60887 -5.608871 l 1.25,-1.686542 1.25,-1.686543 37,-0.254587 37,-0.254587 0.32418,-3.395135 0.32419,-3.395136 -1.32419,-0.839552 L 391.5,69.030626 359.46189,69.015313 327.42378,69 322.96189,66.75 318.5,64.5 316.75155,61 l -1.74844,-3.5 -0.002,-8.006602 -0.002,-8.006602 0.9803,-3.418121 0.98031,-3.418122 2.68464,-2.802161 2.68464,-2.802162 3.29552,-1.08762 3.29552,-1.087619 38.28954,-0.231009 38.28953,-0.231008 2.25,0.770762 2.25,0.770762 V 35.475249 43 l -0.25,0.219836 -0.25,0.219837 -38,0.530163 -38,0.530164 v 3.5 3.5 l 33.5,0.5 33.5,0.5 3.4966,2.054066 3.4966,2.054066 2.2534,3.343817 L 412,63.295766 V 73.5 83.704234 l -2.2534,3.343817 -2.2534,3.343817 -3.4966,2.054066 L 400.5,94.5 Z"
            id="path34"
            inkscape:connector-curvature="0" />
          <path
            style="fill:#b4cadf"
            d="m 360.5,94.344996 -38,0.57834 -2.25,-0.929444 -2.25,-0.929444 v -6.556975 -6.556975 l 2.75,-1.059541 2.75,-1.059542 33.16751,0.590905 33.16751,0.590905 2.64296,-1.004852 2.64296,-1.004853 -0.31047,-3.75176 L 394.5,69.5 l -33,-0.510135 -33,-0.510135 -4.679,-2.152229 -4.679,-2.152228 -1.65858,-3.207344 -1.65859,-3.207345 0.33759,-10.310266 0.33758,-10.310267 2.10453,-2.820025 2.10453,-2.820026 3.39547,-2 3.39547,-2 38.42238,-0.315144 38.42237,-0.315144 2.18807,0.549169 2.18806,0.549169 0.65306,5.556495 0.65306,5.556496 -1.04869,1.959479 L 407.92963,43 H 371 334.07037 L 333.03518,44.934259 332,46.868517 v 1.494313 1.494313 l 1.57143,1.571428 1.57143,1.571429 31.67857,0.02196 31.67857,0.02196 4.22934,1.919896 4.22934,1.919897 2.01692,3.308141 2.01692,3.308142 v 10 10 l -2.02293,3.318029 -2.02293,3.318029 -4.22333,1.815298 -4.22333,1.815299 -38,0.578341 z M 15.345012,94 H 7 l 0.00211,-1.25 0.00211,-1.25 17.046179,-30 17.046178,-30 1.976743,-2 1.976743,-2 L 56.775028,27.208334 68.5,26.916667 72,28.708334 75.5,30.5 81.101621,40 86.703242,49.5 98.351621,70.1164 110,90.7328 v 1.672533 1.672533 L 101.35163,93.788933 92.703259,93.5 89.07764,87.5 85.452021,81.5 60.47601,81.218583 35.5,80.937167 33.451916,81.436958 31.403831,81.936749 29.053348,86.218374 26.702865,90.5 25.196445,92.25 23.690025,94 Z M 58.5,66 H 76 V 64.868674 63.737348 L 70.919867,54.859969 65.839733,45.98259 64.348438,44.491295 62.857143,43 H 58.583559 54.309975 L 52.525117,44.972246 50.740259,46.944492 45.87013,55.63225 41,64.320007 V 65.160004 66 Z m 63.95631,27.789645 -7.04369,0.289646 -0.70631,-0.706312 L 114,92.666667 V 65.734462 38.802258 l 1.53622,-3.237345 1.53622,-3.237346 4.21378,-2.413783 L 125.5,27.5 l 38.83204,-0.304354 38.83205,-0.304354 1.46006,1.21174 1.46005,1.211741 -0.2921,6.592613 L 205.5,42.5 169.08723,42.762646 132.67445,43.025292 131.33723,44.13509 130,45.244889 v 3.342372 3.342371 l 1.75151,0.93738 1.75151,0.937379 35.46829,0.144435 35.46829,0.144435 0.76489,1.20337 0.76488,1.203369 0.0153,4.668213 L 206,65.836425 205.39301,67.418213 204.78602,69 h -36.27056 -36.27057 l -1.08668,1.309368 -1.08668,1.309369 -0.28576,10.940631 L 129.5,93.5 Z M 267,93.755184 225.5,94.010368 221.31886,91.934751 217.13772,89.859133 215.31886,87.179566 213.5,84.5 V 60.824459 37.148918 l 2.06453,-2.824459 2.06454,-2.824459 3.93546,-2 3.93547,-2 39.71721,-0.302732 39.71721,-0.302731 2.03279,1.087915 L 309,29.070368 V 34.835184 40.6 l -1.2,1.2 -1.2,1.2 -37.05,0.01531 -37.05,0.01531 -1.27561,0.809532 -1.27561,0.809533 0.27561,16.425154 L 230.5,77.5 l 38.20123,0.5 38.20123,0.5 1.10034,1.10157 1.10034,1.10157 -0.30157,6.39843 L 308.5,93.5 Z"
            id="path32"
            inkscape:connector-curvature="0" />
          <path
            style="fill:#8db0d0"
            d="M 16.249322,93.790442 8,94.080885 V 92.376151 90.671417 L 24.1711,62.085708 40.3422,33.5 42.858191,30.75 45.374182,28 H 57.736751 70.09932 l 2.700791,1.396634 2.700792,1.396633 L 92.818764,61.381593 110.13662,91.969919 109.5093,92.98496 108.88197,94 h -7.286 -7.285995 L 92.824186,92.25 91.338396,90.5 88.627044,85.75 85.915692,81 H 59.080291 32.244889 L 30.872445,82.639468 29.5,84.278935 26.999322,88.889468 24.498644,93.5 Z M 58.5,67 H 75.881966 L 76.527937,65.954797 77.173908,64.909593 71.97207,55.704797 66.770231,46.5 65.230128,44.75 63.690025,43 H 58.5 53.309975 l -1.477481,1.75 -1.477481,1.75 -5.208117,9.295962 -5.208118,9.295962 0.589628,0.954038 L 41.118034,67 Z m 63.62756,26.984687 -5.62756,-0.01531 -1.30981,-0.830671 -1.30982,-0.830671 0.30982,-27.450799 0.30981,-27.450799 1.82796,-2.787011 1.82795,-2.787012 4.17205,-1.894243 L 126.5,28.043924 165.64301,28.021962 204.78602,28 205.39301,29.581787 206,31.163575 v 4.859195 4.859196 L 204.75,41.690983 203.5,42.5 167,43 130.5,43.5 v 5 5 l 37,0.5 37,0.5 v 7 7 l -37,0.5 -37,0.5 -0.28577,10.940632 -0.28576,10.940631 -1.08668,1.309369 L 127.75511,94 Z M 267.55,93.897639 228.5,93.795277 l -3,-0.72399 -3,-0.72399 -2.30351,-1.23747 -2.30351,-1.237471 -1.94275,-3.186178 L 214.00748,83.5 214.00374,60.654292 214,37.808584 l 1.63554,-2.768751 1.63554,-2.76875 3.11446,-1.885542 L 223.5,28.5 h 42 42 l 0.30184,6.408942 0.30185,6.408943 -1.30185,0.825744 L 305.5,42.969374 268.45,42.984687 231.4,43 l -1.2,1.2 -1.2,1.2 v 15.764816 15.764816 l 1.93426,1.035184 L 232.86852,79 H 269.73426 306.6 l 1.2,1.2 1.2,1.2 v 5.1 5.1 l -1.2,1.2 -1.2,1.2 z m 92.19536,-0.09475 -39.75465,0.302886 -0.84558,-2.302886 -0.84558,-2.302886 0.60023,-5 0.60022,-5 37,-0.254587 37,-0.254587 1.25,-1.686543 L 396,75.617741 395.98469,73.55887 395.96937,71.5 395.02255,70 394.07573,68.5 360.28786,68 326.5,67.5 323.25942,65.72919 320.01884,63.95838 318.25942,61.273169 316.5,58.587958 V 48.543979 38.5 l 1.72272,-3.147588 1.72272,-3.147588 4.367,-2.114028 4.367,-2.114028 39.91028,0.261616 L 408.5,28.5 l 0.2936,6.091371 0.2936,6.09137 -1.38102,1.146142 -1.38101,1.146141 -36.91259,0.262488 L 332.5,43.5 l -0.30056,3.585591 -0.30057,3.585591 1.33996,1.112062 1.33995,1.112063 32.46061,0.302346 L 399.5,53.5 l 3.4966,2.054066 3.4966,2.054066 2.2534,3.343817 L 411,64.295766 V 73.5 82.704234 l -2.2534,3.343817 -2.2534,3.343817 -3.4966,2.054066 L 399.5,93.5 359.74536,93.802886 Z"
            id="path30"
            inkscape:connector-curvature="0" />
          <path
            style="fill:#729dc6"
            d="M 360,93.460794 321.5,94.141977 320.25,92.870989 319,91.6 V 85.906989 80.213978 L 320.58179,79.606989 322.16357,79 H 357.88179 393.6 l 1.2,-1.2 1.2,-1.2 v -3.177555 -3.177556 l -1.2618,-1.0472 -1.2618,-1.0472 L 360.9882,67.813995 328.5,67.477501 324.9179,65.85993 321.3358,64.24236 319.1679,61.486321 317,58.730283 317.004,48.615141 317.008,38.5 l 2.01815,-3.310176 2.01816,-3.310175 3.72811,-1.689825 L 328.5,28.5 l 38.97322,-0.304964 38.97323,-0.304965 1.27677,1.746094 L 409,31.382259 v 3.727083 3.727083 L 408.39301,40.418213 407.78602,42 h -36.86996 -36.86995 l -1.63329,2.492715 -1.63329,2.492715 0.63816,2.542654 0.63817,2.542655 2.53717,0.964631 2.53717,0.96463 30.6849,0.02196 30.6849,0.02196 4.18368,1.899455 4.18369,1.899455 1.81251,3.328583 1.81251,3.328583 v 9 9 l -1.81719,3.337637 -1.8172,3.337636 -4.179,1.802169 L 398.5,92.779607 360,93.46079 Z M 16.05962,92.792434 7.7534554,93.084868 8.2944162,91.675147 8.835377,90.265426 17.235932,75.382713 25.636487,60.5 34.068244,45.64837 42.5,30.79674 45.20034,29.39837 47.90068,28 58.20034,28.001554 68.5,28.003108 71.916196,29.751554 75.332392,31.5 92.13863,61 l 16.80624,29.5 0.0276,1.25 L 109,93 h -7.76637 -7.766367 L 90.182127,87.507619 86.896991,82.015239 85.014237,81.007619 83.131483,80 58.315741,80.015313 33.5,80.030626 32.052344,80.946488 30.604688,81.86235 27.485236,87.181175 24.365785,92.5 Z M 58.5,67 H 77 V 65.399694 63.799388 L 71.447757,53.906918 65.895513,44.014448 64.013498,43.007224 62.131483,42 H 58.256871 54.382259 L 52.749892,43.25 51.117524,44.5 45.558762,54.378197 40,64.256395 V 65.628197 67 Z M 122,93 h -7 V 65.134859 37.269717 l 2.0883,-2.654838 2.08829,-2.654838 L 122.3383,30.23002 125.5,28.5 h 39.5 39.5 v 6.5 6.5 l -35.93544,0.262832 -35.93544,0.262832 -1.86237,1.685424 -1.86237,1.685423 0.29781,4.051745 L 129.5,53.5 l 36.70113,0.5 36.70113,0.5 1.10608,1.107212 1.10608,1.107211 -0.30721,5.392789 L 204.5,67.5 168,68 131.5,68.5 130.25,69.309017 129,70.118034 V 81.559017 93 Z m 144.75,-0.03914 -41.25,-0.03914 -3,-1.33336 -3,-1.33336 -2.5,-2.705951 -2.5,-2.70595 L 214.22359,62.171547 213.94718,39.5 215.72359,36 217.5,32.5 l 4,-2 4,-2 39.83342,-0.303211 39.83342,-0.30321 1.46171,1.213112 1.46172,1.213112 -0.29514,5.590099 L 307.5,41.5 l -38,0.5 -38,0.5 -1.25,0.809017 -1.25,0.809017 v 16.833994 16.833994 l 1.58179,0.606989 L 232.16357,79 H 268.5 304.83643 l 1.58178,0.606989 L 308,80.213978 V 86.606989 93 Z"
            id="path28"
            inkscape:connector-curvature="0" />
          <path
            style="fill:#5287b9"
            d="M 16.441359,93 H 9 V 91.835708 90.671417 L 25.173552,62.085708 41.347104,33.5 43.347866,31.25 45.348628,29 H 58.11855 70.888473 l 2.591146,2.25 2.591146,2.25 16.40584,29 16.405835,29 -0.79035,0.799129 -0.79035,0.799129 -6.80048,-0.299129 L 93.700775,92.5 l -3.62442,-6 -3.624419,-6 L 60.475968,80.218906 34.5,79.937812 32.399119,80.450532 30.298238,80.963251 27.090477,86.981626 23.882717,93 Z M 58.040657,68 H 74.836425 L 76.418213,67.393011 78,66.786022 v -1.091149 -1.09115 L 72.888907,55.551862 67.777814,46.5 65.714593,44.25 63.651372,42 H 58.5 53.348628 l -1.999696,2.25 -1.999696,2.25 -5.227057,9.334352 -5.227056,9.334353 1.174883,1.415647 L 41.244889,68 Z m 64.418303,24.792294 -6.04104,0.292293 -0.70896,-0.70896 L 115,91.666667 V 65.801215 39.935763 l 1.46623,-3.509172 1.46622,-3.509172 4.4547,-1.970526 4.4547,-1.970526 38.82908,0.261816 L 204.5,29.5 l 0.30796,4.827694 0.30797,4.827694 -1.18041,1.422306 L 202.75511,42 H 167.07756 131.4 l -1.2,1.2 -1.2,1.2 v 4.693011 4.693011 l 1.58179,0.606989 L 132.16357,55 h 35.96593 35.96593 l -0.29771,6.25 -0.29772,6.25 -37,0.5 -37,0.5 -0.5,12 -0.5,12 z M 268,92.639728 l -39.5,0.139728 -2,-0.445819 -2,-0.445818 -2.77595,-1.075977 -2.77594,-1.075977 -2.22406,-3.117933 L 214.5,83.5 V 60.824205 38.148409 L 216.57108,35.324205 218.64217,32.5 222.07108,30.751554 225.5,29.003108 266.29772,29.001554 307.09543,29 306.79772,35.25 306.5,41.5 268.2128,42 l -38.28721,0.5 -0.94748,1.5 -0.94748,1.5 -0.0153,15.05887 L 228,75.617741 229.41858,77.55887 230.83716,79.5 269.16858,80 307.5,80.5 v 6 6 z M 357.85699,92.994423 320.21398,93 319.60699,91.418213 319,89.836425 V 86.5 83.163575 L 319.60699,81.581787 320.21398,80 H 356.60699 393 l 2.10417,-2.104167 2.10416,-2.104166 -0.62291,-3.114584 L 395.9625,69.5625 394.93327,68.53125 393.90404,67.5 360.20202,67 326.5,66.5 l -3.32878,-1.816418 -3.32878,-1.816417 -1.51366,-3.622702 -1.51366,-3.622701 0.34244,-8.739242 L 317.5,38.143278 319.57108,35.321639 321.64217,32.5 325.07108,30.751554 328.5,29.003108 368.29772,29.001554 408.09543,29 407.79772,35.25 407.5,41.5 370.58742,41.762488 333.67483,42.024976 332.33742,43.134932 331,44.244889 v 3.306127 3.306127 l 1.57143,1.571428 L 334.14286,54 h 30.48575 30.48575 l 4.34614,1.094371 4.34614,1.094371 2.84668,2.971292 2.84668,2.971291 v 11.516367 11.516366 l -3.1967,2.85625 -3.1967,2.85625 -3.8033,1.056144 -3.8033,1.056144 -37.64301,0.0056 z"
            id="path26"
            inkscape:connector-curvature="0" />
          <path
            style="fill:#3272ad"
            d="M 17,92.868686 12.5,92.767997 10.703228,92.301667 8.9064555,91.835337 11.282349,87.667668 13.658243,83.5 28.539216,57.31479 43.420189,31.129579 45.757147,30.06479 48.094106,29 h 9.985066 9.985065 L 71.282119,30.357073 74.5,31.714146 87.498438,54.607073 100.49688,77.5 l 3.76116,6.829958 3.76116,6.829957 -0.56862,0.920043 L 106.88197,93 h -5.00673 -5.006723 L 94.995302,91.997486 93.122088,90.994972 90.343661,85.890086 87.565234,80.7852 85.217517,79.8926 82.869801,79 58.6849,79.014742 34.5,79.029484 32,80.289391 29.5,81.549298 26.878198,86.386402 24.256395,91.223505 22.878198,92.09644 21.5,92.969374 Z M 58.92512,67.771374 77.474159,67.5 77.818569,65.7076 78.162979,63.915201 72.540976,53.985928 66.918973,44.056654 64.73698,42.528327 62.554988,41 h -4.16671 -4.16671 L 52.093664,42.75 49.96576,44.5 44.48288,54.454552 39,64.409104 v 1.128781 1.128782 l 0.68804,0.68804 0.688041,0.688041 z M 121.04066,93 h -3.79577 l -1.08521,-1.307596 -1.08521,-1.307597 0.24984,-26.042959 0.24983,-26.04296 1.72235,-2.628634 1.72235,-2.628634 3.24058,-1.77081 L 125.5,29.5 h 39 39 l 0.2999,5.75 0.29991,5.75 H 168.0499 132 l -2,2 -2,2 v 3.418213 3.418212 l 0.60699,1.581788 0.60699,1.581787 36.14301,0.01531 36.14301,0.01531 1.31105,0.831435 1.31105,0.831435 -0.31105,4.903252 L 203.5,66.5 166.71263,67 l -36.78737,0.5 -0.94732,1.5 -0.94731,1.5 -0.0153,10.643011 L 128,91.786022 126.41821,92.393011 124.83643,93 Z M 268.5,92.867068 l -36,-0.102306 -4.93615,-0.82611 -4.93615,-0.826111 -2.56385,-1.902669 L 217.5,87.307202 216.26474,84.903601 215.02948,82.5 l -0.011,-22 -0.011,-22 1.95777,-3.210875 1.95777,-3.210876 5.33594,-1.551199 5.33594,-1.5512 38.45255,0.262075 L 306.5,29.5 V 35 40.5 L 268.90237,41 231.30474,41.5 229.65237,42.872445 228,44.244889 v 16.818539 16.818538 l 1.25,0.809017 1.25,0.809017 38,0.5 38,0.5 0.30765,5.405355 0.30764,5.405355 -1.30764,0.829332 -1.30765,0.829332 z m 91.24653,-0.04433 -38.75348,0.322736 -0.55634,-1.449796 -0.55633,-1.449795 0.30981,-4.872941 L 320.5,80.5 l 37,-0.254587 37,-0.254587 1.25,-1.686543 1.25,-1.686542 V 73.743129 70.868517 L 395.96482,68.934259 394.92963,67 h -30.41559 -30.4156 l -5.25263,-1.126488 -5.25263,-1.126488 -2.79659,-2.796589 L 318,59.153846 V 49.027263 38.90068 l 1.51693,-2.933413 1.51692,-2.933413 3.23308,-1.766927 L 327.5,29.5 l 39.71771,-0.302734 39.71772,-0.302733 0.60596,2.414361 0.60597,2.414361 -0.32368,3.388372 L 407.5,40.5 l -37,0.5 -37,0.5 -1.25,0.809017 -1.25,0.809017 v 4.318538 4.318539 l 1.2618,1.0472 1.2618,1.0472 32.4882,0.325244 L 398.5,54.5 l 3.69144,1.836153 3.69144,1.836152 1.73772,2.652105 1.73773,2.652104 0.45029,7.778507 0.45029,7.778506 -1.72254,4.510399 -1.72253,4.510399 -4.15692,2.222838 L 398.5,92.5 359.74653,92.822736 Z"
            id="path24"
            inkscape:connector-curvature="0" />
          <path
            style="fill:#01519b"
            d="M 16.913934,92 H 11 V 90.965312 89.930625 L 15.623196,81.715312 20.246393,73.5 31.262844,54 42.279296,34.5 44.695412,32.25 47.111527,30 h 10.897184 10.897183 l 2.413026,1.099448 2.413025,1.099448 5.520781,9.650552 L 84.773506,51.5 95.886753,71.105279 107,90.710559 v 0.692438 0.692438 L 100.82798,91.797717 94.655966,91.5 90.995594,85.5 87.335222,79.5 58.725075,79.234759 30.114929,78.969518 26.471399,85.484759 22.827868,92 Z M 58.937182,68.770515 78.5,68.5 78.817042,66.269144 79.134085,64.038287 73.629413,54.230576 68.124741,44.422864 65.957383,42.461432 63.790025,40.5 H 58.5 53.209975 l -2.214331,2 -2.214331,2 -3.012577,5.963007 -3.012577,5.963006 -2.37808,3.767122 L 38,63.960256 v 1.853205 1.853206 l 0.687182,0.687182 0.687182,0.687181 z M 121.96862,92 h -5.03139 L 116.39206,90.579316 115.8469,89.158632 116.17345,63.829316 116.5,38.5 l 1.27964,-2.23965 1.27965,-2.239649 3.22035,-1.760351 L 125.5,30.5 164.25,30.205985 203,29.91197 V 34.955985 40 l -34.75,0.01474 -34.75,0.01474 -2.5,1.260087 -2.5,1.260087 -0.9332,3.753153 -0.9332,3.753152 0.9568,2.722019 0.9568,2.722018 36.9764,0.5 36.9764,0.5 v 5 5 l -36.5,0.254706 -36.5,0.254706 -1.25,1.686424 -1.25,1.686427 V 81.19113 92 Z M 268.25,91.885001 230.5,91.770002 227,91.070152 223.5,90.370303 221.30128,89.177414 219.10257,87.984526 217.55128,85.769757 216,83.554988 V 61.324547 39.094106 l 1.08521,-2.381782 1.08521,-2.381781 3.16479,-1.915272 L 224.5,30.5 265.25,30.207832 306,29.915663 V 34.957832 40 h -35.9349 -35.9349 l -2.79475,1.062561 -2.79475,1.062561 -0.75504,1.187439 L 227.03063,44.5 227.01531,61.193296 227,77.886592 229.22251,79.443296 231.44501,81 H 268.72251 306 V 86.5 92 Z M 356.95078,92 H 321 V 86.5 81 h 36.9433 36.94329 L 396.4433,78.777494 398,76.554988 v -3.16671 -3.16671 l -1.75,-2.08021 -1.75,-2.08021 L 361,65.780574 327.5,65.5 324.27964,63.73965 321.05929,61.979299 319.83925,59.73965 318.61922,57.5 l 0.13056,-9.183967 0.13057,-9.183967 1.51266,-2.925179 1.51267,-2.925179 3.29716,-1.390854 L 328.5,30.5 h 39 39 l 0.30479,4.75 0.30479,4.75 -35.80479,0.01474 -35.80479,0.01474 -2.5,1.258645 -2.5,1.258646 -0.30563,4.188406 -0.30563,4.188407 1.06406,1.988211 1.06405,1.98821 33.24158,0.299996 L 398.5,55.5 l 3.67273,1.827273 3.67272,1.827273 1.67294,3.525452 1.67294,3.525453 -0.34567,8.832856 -0.34566,8.832855 -2.88555,3.010626 -2.88556,3.010626 -4.91367,1.053793 L 392.90156,92 Z"
            id="path22"
            inkscape:connector-curvature="0" />
        </g>
      </svg>
      <img class="navbar-brand nav-logo"
           src="assets/imgs/logo 1.png"
           alt="">
      <button (click)="expandMenu()" class="navbar-toggler"
              type="button"
              aria-controls="navbarNav"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse flex-grow-1 myNavbar" [ngClass]="{'showNavbar': showMenu}">
        <ul class="navbar-nav ml-auto flex-nowrap">
          <li class="nav-item" *ngFor="let link of links">
            <a routerLink="{{link.url}}"
               class="nav-link m-2 menu-item">{{link.linkName}}</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div class="search">
            <input type="search" class="search-box" />
            <span class="search-button">
        <img class="nav-search-icon" src="assets/imgs/magniglass.png" alt="">
      </span>
          </div>
        </form>
        <div class="nav-btn">
          <a class="nav-btn-text">
            Register
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class NavBarComponent implements OnInit {
  links: any[] = [
    {linkName: 'Home', url: ''},
    {linkName: 'About', url: 'about'},
    {linkName: 'Careers', url: 'careers'},
    {linkName: 'Find A Job', url: 'find-a-job'},
    {linkName: 'Contact', url: 'contact'},
    {linkName: 'Social', url: 'social'}
  ];
  isOpen: boolean;
  showMenu = false;

  constructor() { }

  ngOnInit() {
    this.isOpen = false;

    $('.search-button').click(function() {
      $(this).parent().toggleClass('open');
    });
  }

  expandMenu() {
    this.showMenu = !this.showMenu;
  }
}
