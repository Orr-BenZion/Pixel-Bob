(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"odot_atlas_", frames: [[0,0,159,46],[161,0,83,68]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.logoNText = function() {
	this.spriteSheet = ss["odot_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.unknown = function() {
	this.spriteSheet = ss["odot_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה", "22px 'Arial'", "#323EE6");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 299;
	this.text.parent = this;
	this.text.setTransform(-3.5,-14);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323EE6").ss(2,1,1).p("AScAAMgk3AAA");
	this.shape.setTransform(-3,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6771F4").ss(2,1,1).p("AScAAMgk3AAA");
	this.shape_1.setTransform(-3,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#323EE6").ss(2,1,1).p("A3qiOMAvVAAAIAAEdMgvVAAAg");
	this.shape_2.setTransform(-3.5,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C57F0").s().p("A3qCPIAAkdMAvVAAAIAAEdg");
	this.shape_3.setTransform(-3.5,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#323EE6"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#6771F4"}}]},1).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#6771F4"}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{color:"#4C57F0"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-16,303,28.6);


// stage content:
(lib.odot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.link.addEventListener("click", openlink);
		
		function openlink() {
			window.open("http://www.hit.ac.il/telem/overview", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.logoNText();
	this.instance.parent = this;
	this.instance.setTransform(242,38);

	this.link = new lib.link();
	this.link.parent = this;
	this.link.setTransform(228.5,348.8);
	new cjs.ButtonHelper(this.link, 0, 1, 2, false, new lib.link(), 3);

	this.instance_1 = new lib.unknown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(350,315);

	this.text = new cjs.Text("המכון הטכנולוגי חולון", "bold 20px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 195;
	this.text.parent = this;
	this.text.setTransform(225,370);

	this.text_1 = new cjs.Text("סביבות לימוד אינטראקטיביות 1 & אנימציה תשע\"ח", "22px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 544;
	this.text_1.parent = this;
	this.text_1.setTransform(225,218.3);

	this.text_2 = new cjs.Text(":פותח במסגרת פרויקט בקורסים", "bold 24px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 354;
	this.text_2.parent = this;
	this.text_2.setTransform(225,174.5);

	this.text_3 = new cjs.Text("אור בן ציון ושימי אסרף", "bold 26px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 31;
	this.text_3.lineWidth = 239;
	this.text_3.parent = this;
	this.text_3.setTransform(137.5,102.8);

	this.text_4 = new cjs.Text(":אפיון ופיתוח", "bold 26px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 31;
	this.text_4.lineWidth = 159;
	this.text_4.parent = this;
	this.text_4.setTransform(344,102.8);

	this.text_5 = new cjs.Text("פיקסל בוב", "bold 28px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 33;
	this.text_5.lineWidth = 159;
	this.text_5.parent = this;
	this.text_5.setTransform(158,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_1},{t:this.link},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(176.1,263,548,377.8);
// library properties:
lib.properties = {
	width: 450,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/odot_atlas_.png", id:"odot_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;