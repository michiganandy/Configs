var a=this,b=function(f,k){f=f.split(".");var e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={c:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},b:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},c={c:{1E3:{other:"0\u00a0\u0939\u091c\u093e\u0930"},1E4:{other:"00\u00a0\u0939\u091c\u093e\u0930"},1E5:{other:"0\u00a0\u0932\u093e\u0916"},1E6:{other:"00\u00a0\u0932\u093e\u0916"},1E7:{other:"0\u00a0\u0915\u0930\u094b\u0921"},1E8:{other:"00\u00a0\u0915\u0930\u094b\u0921"},1E9:{other:"0\u00a0\u0905\u0930\u092c"},1E10:{other:"00\u00a0\u0905\u0930\u092c"},1E11:{other:"0\u00a0\u0916\u0930\u092c"},1E12:{other:"00\u00a0\u0916\u0930\u092c"},1E13:{other:"0\u00a0\u0936\u0902\u0916"},
1E14:{other:"00\u00a0\u0936\u0902\u0916"}},b:{1E3:{other:"0 \u0939\u091c\u093e\u0930"},1E4:{other:"00 \u0939\u091c\u093e\u0930"},1E5:{other:"0 \u0932\u093e\u0916"},1E6:{other:"0 \u0915\u0930\u094b\u0921"},1E7:{other:"00 \u0915\u0930\u094b\u0921"},1E8:{other:"000 \u0915\u0930\u094b\u0921"},1E9:{other:"0 \u0905\u0930\u094d\u092c"},1E10:{other:"00 \u0905\u0930\u094d\u092c"},1E11:{other:"000 \u0905\u0930\u092c"},1E12:{other:"0 \u0916\u0930\u094d\u092c"},1E13:{other:"0 \u0936\u0902\u0916"},1E14:{other:"00 \u0936\u0902\u0916"}}};var d={fa:"y",ma:"y G",ga:"MMM y",ha:"MMMM y",F:"MMM d",G:"MMMM dd",I:"M/d",H:"MMMM d",ka:"MMM d, y",da:"EEE, MMM d",la:"EEE, MMM d, y",i:"d"},d={fa:"y",ma:"G y",ga:"y MMM",ha:"y MMMM",F:"MMM d",G:"MMMM dd",I:"MM-dd",H:"MMMM d",ka:"y MMM d",da:"MMM d, EEE",la:"y MMM d, EEE",i:"d"};var h={s:["BC","AD"],o:["Before Christ","Anno Domini"],K:"JFMAMJJASOND".split(""),X:"JFMAMJJASOND".split(""),D:"January February March April May June July August September October November December".split(" "),W:"January February March April May June July August September October November December".split(" "),T:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Z:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ca:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
aa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),V:"Sun Mon Tue Wed Thu Fri Sat".split(" "),$:"Sun Mon Tue Wed Thu Fri Sat".split(" "),L:"SMTWTFS".split(""),Y:"SMTWTFS".split(""),U:["Q1","Q2","Q3","Q4"],R:["1st quarter","2nd quarter","3rd quarter","4th quarter"],a:["AM","PM"],g:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ba:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],h:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],v:6,ea:[5,6],w:5},h={ia:2406,s:["\u0908\u0938\u093e \u092a\u0942\u0930\u094d\u0935",
"\u0938\u0928\u094d"],o:["\u0908\u0938\u093e \u092a\u0942\u0930\u094d\u0935","\u0938\u0928\u094d"],K:"\u0967 \u0968 \u0969 \u096a \u096b \u096c \u096d \u096e \u096f \u0967\u0966 \u0967\u0967 \u0967\u0968".split(" "),X:"\u0967 \u0968 \u0969 \u096a \u096b \u096c \u096d \u096e \u096f \u0967\u0966 \u0967\u0967 \u0967\u0968".split(" "),D:"\u091c\u0928\u0935\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0905\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u093f\u0932 \u092e\u0908 \u091c\u0941\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0938\u094d\u091f \u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930 \u0905\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930 \u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split(" "),
W:"\u091c\u0928\u0935\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0905\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0941\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0938\u094d\u091f \u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930 \u0905\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930 \u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split(" "),T:"\u091c\u0928\u0935\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0905\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0941\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0938\u094d\u091f \u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930 \u0905\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930 \u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split(" "),
Z:"\u091c\u0928\u0935\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0905\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0941\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0938\u094d\u091f \u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930 \u0905\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930 \u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split(" "),ca:"\u0906\u0907\u0924\u092c\u093e\u0930 \u0938\u094b\u092e\u092c\u093e\u0930 \u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930 \u092c\u0941\u0927\u092c\u093e\u0930 \u092c\u093f\u0939\u093f\u092c\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930 \u0936\u0928\u093f\u092c\u093e\u0930".split(" "),
aa:"\u0906\u0907\u0924\u092c\u093e\u0930 \u0938\u094b\u092e\u092c\u093e\u0930 \u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930 \u092c\u0941\u0927\u092c\u093e\u0930 \u092c\u093f\u0939\u093f\u092c\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930 \u0936\u0928\u093f\u092c\u093e\u0930".split(" "),V:"\u0906\u0907\u0924 \u0938\u094b\u092e \u092e\u0919\u094d\u0917\u0932 \u092c\u0941\u0927 \u092c\u093f\u0939\u093f \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),$:"\u0906\u0907\u0924 \u0938\u094b\u092e \u092e\u0919\u094d\u0917\u0932 \u092c\u0941\u0927 \u092c\u093f\u0939\u093f \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),
L:"\u0906 \u0938\u094b \u092e \u092c\u0941 \u092c\u093f \u0936\u0941 \u0936".split(" "),Y:"\u0906 \u0938\u094b \u092e \u092c\u0941 \u092c\u093f \u0936\u0941 \u0936".split(" "),U:["\u092a\u0939\u093f\u0932\u094b \u0938\u0924\u094d\u0930","\u0926\u094b\u0938\u094d\u0930\u094b \u0938\u0924\u094d\u0930","\u0924\u0947\u0938\u094d\u0930\u094b \u0938\u0924\u094d\u0930","\u091a\u094c\u0925\u094b \u0938\u0924\u094d\u0930"],R:["\u092a\u0939\u093f\u0932\u094b \u0938\u0924\u094d\u0930","\u0926\u094b\u0938\u094d\u0930\u094b \u0938\u0924\u094d\u0930",
"\u0924\u0947\u0938\u094d\u0930\u094b \u0938\u0924\u094d\u0930","\u091a\u094c\u0925\u094b \u0938\u0924\u094d\u0930"],a:["\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928","\u0905\u092a\u0930\u093e\u0939\u094d\u0928"],g:["y MMMM d, EEEE","y MMMM d","y MMM d","y-MM-dd"],ba:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],h:["{1} {0}","{1} {0}","{1}, {0}","{1}, {0}"],v:6,ea:[5,6],w:5};var l={l:".",A:",",M:"%",ja:"0",P:"+",C:"-",u:"E",O:"\u2030",B:"\u221e",J:"NaN",j:"#,##0.###",S:"#E0",N:"#,##0%",f:"\u00a4#,##0.00",m:"USD"},l={l:".",A:",",M:"%",ja:"\u0966",P:"+",C:"-",u:"E",O:"\u2030",B:"\u221e",J:"NaN",j:"#,##0.###",S:"#E0",N:"#,##0%",f:"\u00a4\u00a0#,##0.00",m:"NPR"};b("I18N_DATETIMESYMBOLS_ERAS",h.s);b("I18N_DATETIMESYMBOLS_ERANAMES",h.o);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.K);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.X);b("I18N_DATETIMESYMBOLS_MONTHS",h.D);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.W);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.T);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.Z);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ca);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.aa);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.V);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.$);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.L);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.Y);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.U);b("I18N_DATETIMESYMBOLS_QUARTERS",h.R);b("I18N_DATETIMESYMBOLS_AMPMS",h.a);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.g);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ba);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.h);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.v);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ea);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.w);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.fa);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.ga);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.ha);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.F);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.G);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.I);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.H);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.da);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.i);
void 0!==h.ia&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ia);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.l);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.A);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.M);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.ja);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.P);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.C);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.u);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.O);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.B);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.J);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.j);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.S);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.N);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.f);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.m);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.c);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.b);
