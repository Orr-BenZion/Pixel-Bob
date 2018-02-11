(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"PixelBoB_Latest_atlas_", frames: [[1170,1288,46,61],[1298,1262,46,61],[1323,1073,54,61],[1379,1073,54,61],[1346,1262,46,61],[1074,1322,46,61],[1342,1136,54,61],[1363,872,54,61],[1122,1322,46,61],[1492,705,46,61],[1399,998,54,61],[1242,1262,54,61],[1475,872,46,61],[962,1322,54,61],[1419,872,54,61],[1492,642,46,61],[962,1259,54,61],[1186,1225,54,61],[1394,1262,46,61],[1018,1322,54,61],[1399,935,54,61],[1492,768,46,61],[1342,1199,54,61],[1130,1225,54,61],[1435,1061,46,61],[1018,1259,54,61],[1074,1259,54,61],[1114,1149,74,74],[0,592,960,590],[1247,997,74,74],[1247,1073,74,74],[962,872,190,190],[1310,1225,28,28],[1038,1183,74,74],[1038,1107,74,74],[962,1183,74,74],[0,0,960,590],[1190,1149,74,74],[1130,1288,32,32],[1363,935,32,32],[1114,1107,32,32],[1398,1136,32,32],[1276,1225,32,32],[1242,1225,32,32],[1398,1170,32,32],[1154,872,207,41],[962,642,528,228],[1154,915,207,41],[0,1184,960,590],[1455,986,49,49],[1483,1037,49,49],[1540,642,49,49],[1435,1124,49,49],[1323,997,74,74],[962,1064,207,41],[1523,831,49,49],[1154,958,207,37],[1266,1149,74,74],[962,0,640,640],[1455,935,49,49],[962,1107,74,74],[1171,997,74,74],[1171,1073,74,74]]}
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



(lib._11 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1_1 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1_2 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._2_1 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._2_2 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._2_3 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._3_1 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._3_2 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._3_3 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._4_1 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._4_2 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._5_1 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._5_2 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._6_1 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._6_2 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib._7_1 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._7_2 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib._8_1 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib._8_2 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.apple = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Back = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.banana = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.cherry = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Chip_Neutral = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CounterChip = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.eagle = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.fly = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.fox = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Front = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.giraffe = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.glowingstar_0 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.glowingstar_1 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.glowingstar_2 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.glowingstar_3 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.glowingstar_4 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.glowingstar_5 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.glowingstar_6 = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Hover = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Instraction = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lessBTN = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Middle = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.MusicNote_Unmuted = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.MuteButton = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.MuteMusicButton = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.PauseButton = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.pineapple = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.PinkBTN = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.PlayButton = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Press = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.seal = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.spaceship = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Speaker_Unmuted = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.tomato = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.watermelon = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.zebra = function() {
	this.spriteSheet = ss["PixelBoB_Latest_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.XfoMis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("*", "bold 70px 'Arial'", "#FF5D82");
	this.text.textAlign = "center";
	this.text.lineHeight = 80;
	this.text.lineWidth = 172;
	this.text.parent = this;
	this.text.setTransform(-0.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.XfoMis, new cjs.Rectangle(-88.4,-26.5,176,113.5), null);


(lib.whiteline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5.2,1,1).p("EAAAgyVMAAABkr");
	this.shape.setTransform(0,-6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-330.9,5.1,649.5);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,46,61), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,46,61), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,46,61), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,46,61), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,46,61), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(0,11.9,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,60.3,70.8), null);


(lib.startbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("התחל משחק", "bold 20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(0,-14.1);

	this.instance = new lib.PinkBTN();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-20.5);

	this.instance_1 = new lib.Hover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.5,-20.5);

	this.instance_2 = new lib.Press();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-104,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{y:-14.1}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{y:-14.1}}]},1).to({state:[{t:this.instance_2},{t:this.text,p:{y:-11.1}}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-20.5,207,41);


(lib.sparks3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82D3E7").s().p("AgBAKIgFgEQgEgDABgFQACgEAFgCIACgBQAEAAACACQABABABADIACADQAAAEgFAEQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82D3E7").s().p("AgMAXIgFgDQgEgDABgGQACgEAFgCIADgBQAEAAACACQABABABADIACAEQAAAEgFAEIgEABgAAUgDIgGgDQgDgDABgGQABgFAGgCIADAAQADAAACABQACABABAEIABAEQAAAEgEADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAgAgWgDIgFgDQgEgDABgGQACgFAFgCIADAAQAEAAACABQABABABAEIACAEQAAAEgFADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(3.8,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#82D3E7").s().p("AgtAjQgDgCgBgEQgBgEACgDQACgEAGgCIAKgCIAIgEQAEgBAEABQAHACgBAHQAAAHgHADQgDADgGABIgHACIgJABIgFgBgAALgCQgCgCAAgEQAAgEADgCIAMgFQAEgCAHgFQAIgDAEADIADAFIABAGQgBADgEACIgGAEIgLAHIgIABQgHgBgDgDgAgPgPIgGgBQgGgCAAgHQAAgHAGgCIAJgBIAHAAQAEAAACADIACAEIAAAFQgBAGgGACIgFAAIgGAAg");
	this.shape_2.setTransform(8.8,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#82D3E7").s().p("AgJArIgGgDQgEgDACgGQABgFAGgCIADAAQADAAACABQACACAAADIABAEQAAAEgEADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAgAAAAKQgEgCgBgEQgBgEACgDQACgCAFgDQAHgDAIAAQAFACACACIADADIAAAEQABAEgHADIgKADIgIABIgEgBgAgWgYIgEgEIgBgEIAAgEQAAgDAEgCIAEgBIAEAAQAEgBADADIABADIABAFIgBAEQgEAFgEAAQgDAAgEgBg");
	this.shape_3.setTransform(16.1,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#82D3E7").s().p("AgBAKIgFgEQgEgDABgFQACgEAFgCIACgBQAEAAACACQABABABADIACADQAAAEgFAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_4.setTransform(23.7,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},68).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[]},2).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sparks2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82D3E7").s().p("AgBAKIgFgEQgEgDABgFQACgEAFgCIACgBQAEAAACACQABABABADIACADQAAAEgFAEQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82D3E7").s().p("AgMAXIgFgDQgEgDABgGQACgEAFgCIADgBQAEAAACACQABABABADIACAEQAAAEgFAEIgEABgAAUgDIgGgDQgDgDABgGQABgFAGgCIADAAQADAAACABQACABABAEIABAEQAAAEgEADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAgAgWgDIgFgDQgEgDABgGQACgFAFgCIADAAQAEAAACABQABABABAEIACAEQAAAEgFADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(3.8,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#82D3E7").s().p("AgtAjQgDgCgBgEQgBgEACgDQACgEAGgCIAKgCIAIgEQAEgBAEABQAHACgBAHQAAAHgHADQgDADgGABIgHACIgJABIgFgBgAALgCQgCgCAAgEQAAgEADgCIAMgFQAEgCAHgFQAIgDAEADIADAFIABAGQgBADgEACIgGAEIgLAHIgIABQgHgBgDgDgAgPgPIgGgBQgGgCAAgHQAAgHAGgCIAJgBIAHAAQAEAAACADIACAEIAAAFQgBAGgGACIgFAAIgGAAg");
	this.shape_2.setTransform(8.8,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#82D3E7").s().p("AgJArIgGgDQgEgDACgGQABgFAGgCIADAAQADAAACABQACACAAADIABAEQAAAEgEADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAgAAAAKQgEgCgBgEQgBgEACgDQACgCAFgDQAHgDAIAAQAFACACACIADADIAAAEQABAEgHADIgKADIgIABIgEgBgAgWgYIgEgEIgBgEIAAgEQAAgDAEgCIAEgBIAEAAQAEgBADADIABADIABAFIgBAEQgEAFgEAAQgDAAgEgBg");
	this.shape_3.setTransform(16.1,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#82D3E7").s().p("AgBAKIgFgEQgEgDABgFQACgEAFgCIACgBQAEAAACACQABABABADIACADQAAAEgFAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_4.setTransform(23.7,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},17).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[]},2).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sparks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82D3E7").s().p("AgBAKIgFgEQgEgDABgFQACgEAFgCIACgBQAEAAACACQABABABADIACADQAAAEgFAEQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82D3E7").s().p("AgMAXIgFgDQgEgDABgGQACgEAFgCIADgBQAEAAACACQABABABADIACAEQAAAEgFAEIgEABgAAUgDIgGgDQgDgDABgGQABgFAGgCIADAAQADAAACABQACABABAEIABAEQAAAEgEADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAgAgWgDIgFgDQgEgDABgGQACgFAFgCIADAAQAEAAACABQABABABAEIACAEQAAAEgFADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(3.8,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#82D3E7").s().p("AgtAjQgDgCgBgEQgBgEACgDQACgEAGgCIAKgCIAIgEQAEgBAEABQAHACgBAHQAAAHgHADQgDADgGABIgHACIgJABIgFgBgAALgCQgCgCAAgEQAAgEADgCIAMgFQAEgCAHgFQAIgDAEADIADAFIABAGQgBADgEACIgGAEIgLAHIgIABQgHgBgDgDgAgPgPIgGgBQgGgCAAgHQAAgHAGgCIAJgBIAHAAQAEAAACADIACAEIAAAFQgBAGgGACIgFAAIgGAAg");
	this.shape_2.setTransform(8.8,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#82D3E7").s().p("AgJArIgGgDQgEgDACgGQABgFAGgCIADAAQADAAACABQACACAAADIABAEQAAAEgEADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAgAAAAKQgEgCgBgEQgBgEACgDQACgCAFgDQAHgDAIAAQAFACACACIADADIAAAEQABAEgHADIgKADIgIABIgEgBgAgWgYIgEgEIgBgEIAAgEQAAgDAEgCIAEgBIAEAAQAEgBADADIABADIABAFIgBAEQgEAFgEAAQgDAAgEgBg");
	this.shape_3.setTransform(16.1,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#82D3E7").s().p("AgBAKIgFgEQgEgDABgFQACgEAFgCIACgBQAEAAACACQABABABADIACADQAAAEgFAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_4.setTransform(23.7,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[]},2).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.smoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.4)").s().p("ACKECQgEAAgLgGQglgWgqgJIgzgKQgcgHgcgOQg+gfgTgzQgOglAKg7QAQg+ADggQAEgaAAg3QADgwAPgdQAIgPAKgCQAMgDAOALQAyAkAXA3QAPAhAQBTQAPBMAWAlIAhAyQAOAYALAhQAGAVAKAnQADAKgEAFQgDAGgGAAIgEgBg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.4)").s().p("ACTE6QgHgDgJgRQgbg4gugQQgLgEgRgCIgcgDQgxgGgygYQgXgLgNgNQgPgPgIgXQgPgoAJhAQAGgoALgiQALghASgoIAihHIAshWQAIgQAHgGQANgKAKAHQAIAEAEARQAUBUAKA9QANBPAABDQABA4ACATQAGAqAVAZIAQAQIAQAQQAcAgAKA/QADATAEAGQAFAJAAACQAAAGgHADIgHACQgDAAgDgCg");
	this.shape_1.setTransform(1.1,-5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.4)").s().p("ACAFrIgVgbIgIgLIgNgOIgJgNIgLgMQgGgHgFgLIgGgKQgKgVgBgMQgCgMAEgQQABgFACgCQADgDAGAAQALgBADAEIAFAHIAGAGIAEAKQAFAJAEADIAIALQAFAFAEAHQASAeAFAKIAXA+QACAHgBADQgCAEgFADQgEACgFAAQgDAAgHgGgAgBChQgdAAgVgHQgkgNgjgzQgUgegGgVQgHgYACglQADgmAQhLIANg8IAMg0QARg5AggyQALgPAKABQAIABAGANQAIARAGAYIAIArQADARATBHQAPA2AEAjQACAYAAAjIAAA6QABBIAUAqQAFALgDAFQgCAFgNABIgnABIgKAAg");
	this.shape_2.setTransform(2.2,-12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,102,102,0.4)").s().p("AB3GcQgNgDgRgUQgPgSgDgMQgDgLAFgaQADgPAJgDQAHgCAHAHQAEAEAEAIQAJARAJAMQAIALACAFQAEAJgBAIIgDALIgBAIQgBAFgCACQgDADgFAAIgEAAgABtF2IgBADIAAACIADAFIADACQAAAAAAAAQABgBAAAAQgBAAAAgBQAAAAAAgBIgBgCIAAgBIgEgGgAAkA+IgTgLQgSgMgTgXIgggoIgvg6QgagjgHgeQgHgcADgoQAEglAIgWQAHgSAPgZQAZgsAfgnQALgOAIADQAGACAEAMQArCTABCcQAAA0ACASQADAnAPAbQAEAJAAADQABAJgHABIgBABQgDAAgFgDg");
	this.shape_3.setTransform(3,-15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,102,102,0.2)").s().p("AA/CrQgRgEgTgTQgKgLgSgWIgVgUQgNgMgHgIQgVgZgLgqQgIggAFgVQABgIAGgPQAQgnAMgSQALgOAQgNQAXgUAYABQAHABACACQADADABAKIAAA7QgBAkAEAXQACAOALAjIALAlQAFAPACALQABAMAAAXIAAAuQAAAKgEADQgDADgEAAIgGgBg");
	this.shape_4.setTransform(-4.3,-51.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,102,102,0.4)").s().p("AAEBfQgPgCgLgHQgEgCgNgNQgHgHgEgGQgEgJgBgPQAAgOADgTIAShRQACgJADgDQAHgFAMAGQAJAGAEAJQAEAGADAKIAFARIAnBdQAEALgEAFIgDAEQgCADAAAHQABAHgCADQgDAFgLAAIgTAAIgLAAg");
	this.shape_5.setTransform(11.7,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,102,102,0.4)").s().p("AAvCWQgaAAgMgFQgGgCgVgPQgggTgOgLQgbgSgLgVQgHgQgEgYQgHg5ARg6QAGgRAFgHQAEgGASgPQAJgIAHABQAFAAAHAFQAZASAUAdQALAPAXAnIATAhQAnBEALAWIAIAVQACAIAAAXQgBALgEADQgDADgIAAg");
	this.shape_6.setTransform(6.1,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,102,102,0.2)").s().p("AgPBbQgFgFgJgQQgIgSgDgMQgFgPgBgaQAAgiAHgYIAEgLQAJgOATgCIAHgBIAJgCIANgIQAJgEAFAFQADADAAAHQgBAIACADIADAGQADAFABAJQAAAIgDAFIgGAMQgFAIgBALQgBASABAoQgBAOgBAEQgCAGgHAKQgLARgIABIgCAAQgJAAgGgIg");
	this.shape_7.setTransform(-1.4,-65.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,102,102,0.2)").s().p("AgPApQgEgCgGgIQgIgPgBgGQgCgHACgHIAFgKQAHgLAJgHQANgJANAAQAPABABAKIAAAJIAFAIQAEAIgEAIQgDAIgJAIIgPAMQgGAGgEACQgEADgEAAIgEgBg");
	this.shape_8.setTransform(2.3,-74.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,102,102,0.4)").s().p("AA2C7QhBgPg8ggQg9gggQgpQgJgWAAguIABhdQABggAEgNQAIgTASgQQAZgYAWAIQAMAFAMAUIAZApQANAZAHAMIAaAjIAxA7IAdAiIAXAZQAaAeAMAkQADAJgBAFQgBAEgGAIIgBALQAAAHgBADQgEAKgTADIgTABQgXAAgegGg");
	this.shape_9.setTransform(1.7,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_9},{t:this.shape_8}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-25.8,30.6,51.8);


(lib.resumebutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("המשך משחק", "bold 20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(0,-14.1);

	this.instance = new lib.PinkBTN();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-20.5);

	this.instance_1 = new lib.Hover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.5,-20.5);

	this.instance_2 = new lib.Press();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-104,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{y:-14.1}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{y:-14.1}}]},1).to({state:[{t:this.instance_2},{t:this.text,p:{y:-11.1}}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-20.5,207,41);


(lib.Prog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CounterChip();
	this.instance.parent = this;
	this.instance.setTransform(-38,1);

	this.totalitems = new cjs.Text("/", "bold 24px 'Arial'", "#FFFFFF");
	this.totalitems.name = "totalitems";
	this.totalitems.textAlign = "center";
	this.totalitems.lineHeight = 29;
	this.totalitems.lineWidth = 7;
	this.totalitems.parent = this;
	this.totalitems.setTransform(29.1,-9,1.038,2,11);

	this.CurrentTrueAnswers = new cjs.Text("", "bold 22px 'Arial'", "#FFFFFF");
	this.CurrentTrueAnswers.name = "CurrentTrueAnswers";
	this.CurrentTrueAnswers.textAlign = "center";
	this.CurrentTrueAnswers.lineHeight = 27;
	this.CurrentTrueAnswers.lineWidth = 25;
	this.CurrentTrueAnswers.parent = this;
	this.CurrentTrueAnswers.setTransform(6.9,4.3);

	this.totalitems_1 = new cjs.Text("", "bold 22px 'Arial'", "#FFFFFF");
	this.totalitems_1.name = "totalitems_1";
	this.totalitems_1.textAlign = "center";
	this.totalitems_1.lineHeight = 27;
	this.totalitems_1.lineWidth = 26;
	this.totalitems_1.parent = this;
	this.totalitems_1.setTransform(42.5,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.totalitems_1},{t:this.CurrentTrueAnswers},{t:this.totalitems},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Prog, new cjs.Rectangle(-38,-14,95.6,62.7), null);


(lib.playagain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("שחקו שנית", "bold 20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 173;
	this.text.parent = this;
	this.text.setTransform(0,-14.1);

	this.instance = new lib.lessBTN();
	this.instance.parent = this;
	this.instance.setTransform(-104,-21);

	this.instance_1 = new lib.Hover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-104,-21);

	this.instance_2 = new lib.Press();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-104,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{y:-14.1}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{y:-14.1}}]},1).to({state:[{t:this.instance_2},{t:this.text,p:{y:-10.5}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-21,207,41);


(lib.pic_zebra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.zebra();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_zebra, new cjs.Rectangle(0,0,74,74), null);


(lib.pic_watermelon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.watermelon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_watermelon, new cjs.Rectangle(0,0,74,74), null);


(lib.pic_tomato = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tomato();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_tomato, new cjs.Rectangle(0,0,74,74), null);


(lib.pic_seal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seal();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_seal, new cjs.Rectangle(0,0,74,74), null);


(lib.pic_pineapple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pineapple();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_pineapple, new cjs.Rectangle(0,0,74,74), null);


(lib.pic_giraffe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.giraffe();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_giraffe, new cjs.Rectangle(0,0,74,74), null);


(lib.pic_fox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fox();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_fox, new cjs.Rectangle(0,0,74,74), null);


(lib.pic_fly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fly();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_fly, new cjs.Rectangle(0,0,74,74), null);


(lib.pic_eagle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.eagle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_eagle, new cjs.Rectangle(0,0,74,74), null);


(lib.pic_cherry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cherry();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_cherry, new cjs.Rectangle(0,0,74,74), null);


(lib.pic_banana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.banana();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_banana, new cjs.Rectangle(0,0,74,74), null);


(lib.pic_apple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.apple();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_apple, new cjs.Rectangle(0,0,74,74), null);


(lib.P1P = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.P1P, null, null);


(lib.lessbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("חזרה לתפריט הראשי", "bold 20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 173;
	this.text.parent = this;
	this.text.setTransform(0,-14.1);

	this.instance = new lib.lessBTN();
	this.instance.parent = this;
	this.instance.setTransform(-104,-21);

	this.instance_1 = new lib.Hover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-104,-21);

	this.instance_2 = new lib.Press();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-104,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{y:-14.1}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{y:-14.1}}]},1).to({state:[{t:this.instance_2},{t:this.text,p:{y:-11.1}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-21,207,41);


(lib.Insc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Instraction();
	this.instance.parent = this;
	this.instance.setTransform(-264,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Insc, new cjs.Rectangle(-264,-31,528,228), null);


(lib.idlebob = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-23,-30.5);

	this.instance_1 = new lib._2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23,-30.5);

	this.instance_2 = new lib._3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-23,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_2}]},11).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-30.5,46,61);


(lib.hulldamage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrAsIAAhXIBXAAIAABXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-4.4,8.9,8.9);


(lib.Ground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		this.gotoAndStop(0);
	}
	this.frame_73 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36).call(this.frame_36).wait(37).call(this.frame_73).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EiTLAAgIAAhAMEmXAAAIAABAg");
	this.shape.setTransform(941,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88E17C").s().p("EiTLAAgIAAhAMEmXAAAIAABAg");
	this.shape_1.setTransform(941,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E66165").s().p("EiTLAAgIAAhAMEmXAAAIAABAg");
	this.shape_2.setTransform(941,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},35).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,7.9,1884,6.5);


(lib.glowingstar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glowingstar_0();
	this.instance.parent = this;

	this.instance_1 = new lib.glowingstar_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.glowingstar_2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.glowingstar_3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.glowingstar_4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.glowingstar_5();
	this.instance_5.parent = this;

	this.instance_6 = new lib.glowingstar_6();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},217).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_6}]},6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.glowingstar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glowingstar_0();
	this.instance.parent = this;

	this.instance_1 = new lib.glowingstar_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.glowingstar_2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.glowingstar_3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.glowingstar_4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.glowingstar_5();
	this.instance_5.parent = this;

	this.instance_6 = new lib.glowingstar_6();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},154).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_6}]},6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.glowingstar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glowingstar_0();
	this.instance.parent = this;

	this.instance_1 = new lib.glowingstar_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.glowingstar_2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.glowingstar_3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.glowingstar_4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.glowingstar_5();
	this.instance_5.parent = this;

	this.instance_6 = new lib.glowingstar_6();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},55).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance}]},6).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.glowingstar_gif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glowingstar_0();
	this.instance.parent = this;

	this.instance_1 = new lib.glowingstar_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.glowingstar_2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.glowingstar_3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.glowingstar_4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.glowingstar_5();
	this.instance_5.parent = this;

	this.instance_6 = new lib.glowingstar_6();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_6}]},6).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,204,0,0.2)").s().p("Ah8CEIAAkHID5AAIAAEHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(136,225,124,0.298)").s().p("Ah8CEIAAkHID5AAIAAEHg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(136,225,124,0.4)").s().p("Ah8CEIAAkHID5AAIAAEHg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(136,225,124,0.6)").s().p("Ah8CEIAAkHID5AAIAAEHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-13.2,25,26.5);


(lib.finish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("סיום", "bold 20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(0,-14.1);

	this.instance = new lib.PinkBTN();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-20.5);

	this.instance_1 = new lib.Hover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.5,-20.5);

	this.instance_2 = new lib.Press();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-104,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{y:-14.1}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{y:-14.1}}]},1).to({state:[{t:this.instance_2},{t:this.text,p:{y:-10.5}}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-20.5,207,41);


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.sfxbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Speaker_Unmuted();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-24.5);

	this.instance_1 = new lib.MuteButton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.5,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-24.5,49,49);


(lib.Pbtn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF66").s().p("AoJB2IAAjrIQUAAIAADrg");
	this.shape.setTransform(-1.7,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqvEgIAAo/IVfAAIAAI/gAoaBeIQUAAIAAjqIwUAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pbtn2, new cjs.Rectangle(-68.8,-28.8,137.6,57.6), null);


(lib.PauseBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.PauseButton();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23);

	this.instance_1 = new lib.PlayButton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,49,49);


(lib.musicbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.MusicNote_Unmuted();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-24.5);

	this.instance_1 = new lib.MuteMusicButton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.5,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-24.5,49,49);


(lib.bob = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_41 = function() {
		this.gotoAndPlay(18);
	}
	this.frame_65 = function() {
		this.gotoAndPlay(42);
	}
	this.frame_89 = function() {
		this.gotoAndPlay(66);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(24).call(this.frame_41).wait(24).call(this.frame_65).wait(24).call(this.frame_89).wait(1));

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-23,0,1,0.999);

	this.instance_1 = new lib._2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23,0);

	this.instance_2 = new lib._3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-23,0);

	this.instance_3 = new lib._8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-23,0);

	this.instance_4 = new lib._1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-23,0);

	this.instance_5 = new lib._2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-23,0);

	this.instance_6 = new lib._3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-23,0);

	this.instance_7 = new lib._4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-23,0);

	this.instance_8 = new lib._5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-23,0);

	this.instance_9 = new lib._6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-23,0);

	this.instance_10 = new lib._7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-23,0);

	this.instance_11 = new lib._8_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-26,0);

	this.instance_12 = new lib._1_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-26,0);

	this.instance_13 = new lib._2_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-26,0);

	this.instance_14 = new lib._3_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-26,0);

	this.instance_15 = new lib._4_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-26,0);

	this.instance_16 = new lib._5_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-26,0);

	this.instance_17 = new lib._6_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-26,0);

	this.instance_18 = new lib._7_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-26,0);

	this.instance_19 = new lib._8_2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-26,0);

	this.instance_20 = new lib._1_2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-26,0);

	this.instance_21 = new lib._2_3();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-26,0);

	this.instance_22 = new lib._3_3();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-26,0);

	this.instance_23 = new lib._4_2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-26,0);

	this.instance_24 = new lib._5_2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-26,0);

	this.instance_25 = new lib._6_2();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-26,0);

	this.instance_26 = new lib._7_2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-26,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_26}]},3).to({state:[{t:this.instance_26}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,0,46,61);


(lib.Dist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Contianer = new cjs.Text("", "bold 18px 'Arial'");
	this.Contianer.name = "Contianer";
	this.Contianer.textAlign = "center";
	this.Contianer.lineHeight = 22;
	this.Contianer.lineWidth = 69;
	this.Contianer.parent = this;
	this.Contianer.setTransform(37,12.8);

	this.instance = new lib.Chip_Neutral();
	this.instance.parent = this;
	this.instance.setTransform(-13,-13,0.526,0.526);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.Contianer}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Dist, new cjs.Rectangle(-13,-13,100,100), null);


(lib.Symbol5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(953,2,1.001,1);

	this.instance_2 = new lib.Back();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5_1, new cjs.Rectangle(0,2,1914,591), null);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Middle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,1,1.002,1);

	this.instance_2 = new lib.Middle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,1,1.002,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4_1, new cjs.Rectangle(-1,1,1923,590), null);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Front();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,0,1.002,1);

	this.instance_2 = new lib.Front();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,0,1.002,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(-1,0,1923,590), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glow();
	this.instance.parent = this;
	this.instance.setTransform(211,18.1);

	this.instance_1 = new lib.sparks3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(238.8,105.1,2.691,2.691);

	this.instance_2 = new lib.spaceship();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.639,0.639);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,409,409), null);


(lib.Ship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_235 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(235).call(this.frame_235).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F8F8F").s().p("Aj4DlIAAnJIHxAAIAAHJg");
	this.shape.setTransform(58.9,147.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105).to({_off:false},0).to({_off:true},20).wait(111));

	// Layer 3
	this.instance = new lib.bob();
	this.instance.parent = this;
	this.instance.setTransform(-205.9,197.3,1,1,0,0,0,0,30.4);
	this.instance._off = true;

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.9,170.5,1,1,0,0,0,30.1,35.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31,78.5,1,1,0,0,0,23,30.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(91,151.5,1,1,0,0,0,23,30.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(96,80.5,1,1,0,0,0,23,30.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(18.1,118.6,1,1,0,0,0,23.1,30.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(59,2.5,1,1,0,0,0,23,30.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:1,regY:30.5,x:-194.2,y:197.5},0).wait(1).to({x:-183.5,y:197.6},0).wait(1).to({x:-172.8,y:197.7},0).wait(1).to({x:-162,y:197.8},0).wait(1).to({x:-151.3,y:197.9},0).wait(1).to({x:-140.6,y:198},0).wait(1).to({x:-129.9,y:198.1},0).wait(1).to({x:-119.2,y:198.2},0).wait(1).to({x:-108.5,y:198.3},0).wait(1).to({x:-97.7,y:198.4},0).wait(1).to({x:-87,y:198.5},0).wait(1).to({x:-76.3,y:198.6},0).wait(1).to({x:-65.6,y:198.8},0).wait(1).to({rotation:-7.5,y:198.6},0).wait(1).to({rotation:-15,y:198.5},0).wait(1).to({y:191.2},0).wait(1).to({y:183.9},0).wait(1).to({y:176.5},0).wait(1).to({y:169.2},0).wait(1).to({rotation:-9.9,x:-57,y:169.3},0).wait(1).to({rotation:-4.9,x:-48.4,y:169.4},0).wait(1).to({rotation:0.2,x:-39.8,y:169.5},0).wait(1).to({rotation:-3.6,y:169.4},0).wait(1).to({rotation:-7.4,y:169.3},0).wait(1).to({rotation:-11.2,y:169.2},0).wait(1).to({rotation:-15,x:-39.9},0).to({_off:true},1).wait(208));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).wait(1).to({x:-41.6,y:146},0).wait(1).to({rotation:15},0).wait(1).to({rotation:30},0).wait(1).to({rotation:14.9},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:22.4},0).wait(1).to({rotation:45},0).wait(1).to({rotation:22.4},0).wait(1).to({rotation:-0.1},0).to({_off:true},1).wait(198));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1).to({rotation:-7.5,x:-30.9},0).wait(1).to({rotation:-15,x:-31},0).wait(1).to({rotation:0.1},0).wait(1).to({rotation:15.2},0).wait(1).to({rotation:0.1,x:-30.9},0).wait(1).to({rotation:-14.9,x:-31},0).wait(1).to({rotation:7.6},0).wait(1).to({rotation:30.2,x:-30.9},0).wait(1).to({rotation:7.6},0).wait(1).to({rotation:-14.9},0).to({_off:true},1).wait(186));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({_off:false},0).wait(1).to({rotation:15},0).wait(1).to({rotation:30},0).wait(1).to({rotation:14.9},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:14.9},0).wait(1).to({rotation:30},0).wait(1).to({rotation:7.4},0).wait(1).to({rotation:-15.2},0).wait(1).to({rotation:7.4},0).wait(1).to({rotation:29.9},0).to({_off:true},1).wait(174));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).wait(1).to({rotation:15},0).wait(1).to({rotation:30},0).wait(1).to({rotation:7.4},0).wait(1).to({rotation:-15.1},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:15},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:-15.2},0).wait(1).to({rotation:7.4},0).wait(1).to({rotation:29.9},0).to({_off:true},1).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75).to({_off:false},0).wait(1).to({regX:23,regY:30.5,rotation:15,x:17.9,y:118.4},0).wait(1).to({rotation:30,x:18},0).wait(1).to({rotation:7.4},0).wait(1).to({rotation:-15.1,y:118.5},0).wait(1).to({rotation:-0.1,y:118.4},0).wait(1).to({rotation:15},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:-15.2,y:118.5},0).wait(1).to({rotation:7.4,y:118.4},0).wait(1).to({rotation:29.9,y:118.5},0).to({_off:true},1).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(87).to({_off:false},0).wait(1).to({rotation:15},0).wait(1).to({rotation:30},0).wait(1).to({rotation:14.9,y:2.6},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:14.9,y:2.5},0).wait(1).to({rotation:30},0).wait(1).to({rotation:14.9},0).wait(1).to({rotation:-0.1,y:2.6},0).wait(1).to({rotation:-0.1},0).wait(3).to({x:59.6,y:16.7},0).wait(1).to({x:60.3,y:30.8},0).wait(1).to({x:60.9,y:45},0).wait(1).to({x:61.5,y:59.2},0).wait(1).to({x:62.1,y:73.3},0).wait(1).to({x:62.8,y:87.5},0).wait(1).to({regX:22.9,regY:23.6,rotation:0,x:60.7},0).wait(1).to({regX:23,regY:30.5,y:96.7},0).wait(1).to({y:99.1},0).wait(1).to({x:60.6,y:101.4},0).wait(1).to({y:103.8},0).wait(1).to({x:60.5,y:106.1},0).wait(1).to({y:108.4},0).wait(1).to({x:60.4,y:110.8},0).wait(1).to({y:113.1},0).wait(1).to({x:60.3,y:115.5},0).wait(1).to({y:117.8},0).wait(1).to({y:120.2},0).wait(1).to({x:60.2,y:122.5},0).wait(1).to({y:124.9},0).wait(1).to({x:60.1,y:127.2},0).wait(1).to({y:129.6},0).wait(1).to({x:60,y:131.9},0).wait(1).to({y:134.3},0).wait(1).to({y:136.6},0).wait(1).to({x:59.9,y:139},0).to({_off:true},1).wait(111));

	// Layer_1
	this.instance_7 = new lib.smoke();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-36.5,-0.9,2.691,2.691);

	this.instance_8 = new lib.sparks3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(85.8,-79.9,2.691,2.691);

	this.instance_9 = new lib.sparks2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(7.1,57.2,2.691,2.691);

	this.instance_10 = new lib.sparks();
	this.instance_10.parent = this;
	this.instance_10.setTransform(139.3,80.5,2.691,2.691);

	this.instance_11 = new lib.hulldamage("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-31.8,146,2.691,2.691);

	this.instance_12 = new lib.hulldamage("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(121,156.3,2.691,2.691);

	this.instance_13 = new lib.hulldamage("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(93.8,8.1,2.691,2.691);

	this.instance_14 = new lib.hulldamage("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(44.1,132.6,2.691,2.691);

	this.instance_15 = new lib.hulldamage("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(0.4,81.4,2.691,2.691);

	this.instance_16 = new lib.hulldamage("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(121,86.6,2.691,2.691);

	this.instance_17 = new lib.spaceship();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-153,-185,0.639,0.639);

	this.instance_18 = new lib.glow();
	this.instance_18.parent = this;
	this.instance_18.setTransform(58,-166.9);

	this.instance_19 = new lib.Symbol8();
	this.instance_19.parent = this;
	this.instance_19.setTransform(51.5,19.5,1,1,0,0,0,204.5,204.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15,p:{x:0.4,y:81.4}},{t:this.instance_14,p:{x:44.1,y:132.6}},{t:this.instance_13,p:{x:93.8,y:8.1}},{t:this.instance_12,p:{x:121,y:156.3}},{t:this.instance_11,p:{x:-31.8,y:146}},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_17},{t:this.instance_15,p:{x:121,y:86.6}},{t:this.instance_14,p:{x:0.4,y:81.4}},{t:this.instance_13,p:{x:44.1,y:132.6}},{t:this.instance_12,p:{x:93.8,y:8.1}},{t:this.instance_11,p:{x:121,y:156.3}},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},38).to({state:[{t:this.instance_17},{t:this.instance_14,p:{x:121,y:86.6}},{t:this.instance_13,p:{x:44.1,y:132.6}},{t:this.instance_12,p:{x:93.8,y:8.1}},{t:this.instance_11,p:{x:121,y:156.3}},{t:this.instance_10},{t:this.instance_8},{t:this.instance_7}]},12).to({state:[{t:this.instance_17},{t:this.instance_13,p:{x:121,y:86.6}},{t:this.instance_12,p:{x:44.1,y:132.6}},{t:this.instance_11,p:{x:93.8,y:8.1}},{t:this.instance_10},{t:this.instance_8},{t:this.instance_7}]},11).to({state:[{t:this.instance_17},{t:this.instance_12,p:{x:44.1,y:132.6}},{t:this.instance_11,p:{x:93.8,y:8.1}},{t:this.instance_8},{t:this.instance_7}]},13).to({state:[{t:this.instance_17},{t:this.instance_11,p:{x:93.8,y:8.1}},{t:this.instance_8}]},12).to({state:[{t:this.instance_17},{t:this.instance_8},{t:this.instance_18}]},10).to({state:[{t:this.instance_17},{t:this.instance_8},{t:this.instance_18}]},9).to({state:[{t:this.instance_19}]},24).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(129).to({_off:false},0).wait(1).to({x:53.5},0).wait(1).to({x:55.5},0).wait(1).to({x:53.5},0).wait(1).to({x:51.5},0).wait(1).to({x:54},0).wait(1).to({x:56.5},0).wait(1).to({x:54},0).wait(1).to({x:51.5},0).wait(2).to({x:53.5},0).wait(1).to({x:55.5},0).wait(1).to({x:53.5},0).wait(1).to({x:51.5},0).wait(1).to({x:54},0).wait(1).to({x:56.5},0).wait(1).to({x:54},0).wait(1).to({x:51.5},0).wait(2).to({x:53.5},0).wait(1).to({x:55.5},0).wait(1).to({x:53.5},0).wait(1).to({x:51.5},0).wait(1).to({x:54},0).wait(1).to({x:56.5},0).wait(1).to({x:54},0).wait(1).to({x:51.5},0).wait(1).to({y:5.7},0).wait(1).to({y:-8.2},0).wait(1).to({y:-22},0).wait(1).to({y:-35.9},0).wait(1).to({y:-49.7},0).wait(1).to({y:-63.6},0).wait(1).to({y:-77.4},0).wait(1).to({y:-91.3},0).wait(1).to({y:-105.1},0).wait(1).to({y:-119},0).wait(1).to({y:-132.8},0).wait(1).to({y:-146.7},0).wait(1).to({y:-160.5},0).wait(1).to({y:-174.4},0).wait(1).to({y:-188.3},0).wait(1).to({y:-202.1},0).wait(1).to({y:-216},0).wait(1).to({y:-229.8},0).wait(1).to({y:-243.7},0).wait(1).to({y:-257.5},0).wait(1).to({y:-271.4},0).wait(1).to({y:-285.2},0).wait(1).to({y:-299.1},0).wait(1).to({y:-312.9},0).wait(1).to({y:-326.8},0).wait(1).to({y:-340.6},0).wait(1).to({y:-354.5},0).wait(1).to({y:-368.4},0).wait(1).to({y:-382.2},0).wait(1).to({y:-396.1},0).wait(1).to({y:-409.9},0).wait(1).to({y:-423.8},0).wait(1).to({y:-437.6},0).wait(1).to({y:-451.5},0).wait(1).to({y:-465.3},0).wait(1).to({y:-479.2},0).wait(1).to({y:-493},0).wait(1).to({y:-506.9},0).wait(1).to({y:-520.7},0).wait(1).to({y:-534.6},0).wait(1).to({y:-548.5},0).wait(1).to({y:-562.3},0).wait(1).to({y:-576.2},0).wait(1).to({y:-590},0).wait(1).to({y:-603.9},0).wait(1).to({y:-617.7},0).wait(1).to({y:-631.6},0).wait(1).to({y:-645.4},0).wait(1).to({y:-659.3},0).wait(1).to({y:-673.1},0).wait(1).to({y:-687},0).wait(1).to({y:-700.8},0).wait(1).to({y:-714.7},0).wait(1).to({y:-728.6},0).wait(1).to({y:-742.4},0).wait(1).to({y:-756.3},0).wait(1).to({y:-770.1},0).wait(1).to({y:-784},0).wait(1).to({y:-797.8},0).wait(1).to({y:-811.7},0).wait(1).to({y:-825.5},0).wait(1).to({y:-839.4},0).wait(1).to({y:-853.2},0).wait(1).to({y:-867.1},0).wait(1).to({y:-880.9},0).wait(1).to({y:-894.8},0).wait(1).to({y:-908.7},0).wait(1).to({y:-922.5},0).wait(1).to({y:-936.4},0).wait(1).to({y:-950.2},0).wait(1).to({y:-964.1},0).wait(1).to({y:-977.9},0).wait(1).to({y:-991.8},0).wait(1).to({y:-1005.6},0).wait(1).to({y:-1019.5},0).wait(1).to({y:-1033.3},0).wait(1).to({y:-1047.2},0).wait(1).to({y:-1061},0).wait(1).to({y:-1074.9},0).wait(1).to({y:-1088.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-185,409,409);


(lib.PauesScreem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mainmenubutton = new lib.lessbtn();
	this.mainmenubutton.parent = this;
	this.mainmenubutton.setTransform(480.5,423.5);
	new cjs.ButtonHelper(this.mainmenubutton, 0, 1, 2, false, new lib.lessbtn(), 3);

	this.text = new cjs.Text("עצרתם את המשחק", "bold 70px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 80;
	this.text.lineWidth = 565;
	this.text.alpha = 0.98823529;
	this.text.parent = this;
	this.text.setTransform(480,187.1);

	this.resumebtn = new lib.resumebutton();
	this.resumebtn.parent = this;
	this.resumebtn.setTransform(480,347.1);
	new cjs.ButtonHelper(this.resumebtn, 0, 1, 2, false, new lib.resumebutton(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C2426").s().p("EhK/AuGMAAAhcLMCV/AAAMAAABcLg");
	this.shape.setTransform(480,295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.resumebtn},{t:this.text},{t:this.mainmenubutton}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PauesScreem, new cjs.Rectangle(0,0,960,590), null);


(lib.scorebg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.whiteline("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,17.4,1,1.296,-90);

	this.instance_1 = new lib.whiteline("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,315.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F1415").s().p("EhK/AGqIAAtTMCV/AAAIAANTg");
	this.shape.setTransform(0,-156.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C2426").s().p("EhK/BOBMAAAh/rMCV/AAAMAAAB/rgEhK/g+9IAAvDMCV/AAAIAAPDg");
	this.shape_1.setTransform(0,204.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scorebg, new cjs.Rectangle(-480,-295,960,998.6), null);


(lib.menubg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#698992").s().p("AgSATIgBglIAnAAIAAAlg");
	this.shape.setTransform(237.4,249.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#698992").s().p("AgSATIgBglIAnAAIAAAlg");
	this.shape_1.setTransform(387,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(105,137,146,0.498)").s().p("AgYAYIAAgwIAxACIAAAvg");
	this.shape_2.setTransform(-39.6,121.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(105,137,146,0.498)").s().p("AgYAXIAAgvIAxABIAAAwg");
	this.shape_3.setTransform(297.5,173.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(105,137,146,0.498)").s().p("AgYAXIAAgvIAxABIAAAwg");
	this.shape_4.setTransform(382.5,-174.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(105,137,146,0.498)").s().p("AgYAYIAAgwIAxABIAAAwg");
	this.shape_5.setTransform(237.9,-113.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(105,137,146,0.498)").s().p("AgTATIAAglIAnABIAAAkg");
	this.shape_6.setTransform(-187.6,-53.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(105,137,146,0.498)").s().p("AgTATIAAglIAnABIAAAkg");
	this.shape_7.setTransform(-273,122.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(105,137,146,0.498)").s().p("AgTATIAAglIAnABIAAAkg");
	this.shape_8.setTransform(-61.4,-121.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(105,137,146,0.498)").s().p("AgTATIAAglIAnABIAAAkg");
	this.shape_9.setTransform(-371.1,-104.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(105,137,146,0.498)").s().p("AgTAUIAAgnIAnADIAAAkg");
	this.shape_10.setTransform(-238.1,-241.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#698992").s().p("AgTAUIABgnIAmACIAAAlg");
	this.shape_11.setTransform(-205.1,245.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#698992").s().p("AgTATIAAglIAnAAIAAAlg");
	this.shape_12.setTransform(-308.6,-209.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#698992").s().p("AgTAUIAAgnIAnACIAAAlg");
	this.shape_13.setTransform(-400.2,115.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#698992").s().p("AgTgTIAnACIAAAkIgnAAg");
	this.shape_14.setTransform(-409.2,120.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#698992").s().p("AgTATIAAglIAnAAIAAAlg");
	this.shape_15.setTransform(-326.6,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#698992").s().p("AgSATIgBglIAnAAIAAAlg");
	this.shape_16.setTransform(-13.1,-203.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#698992").s().p("AgTATIAAglIAnABIAAAkg");
	this.shape_17.setTransform(120.9,-24.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#698992").s().p("AgTATIAAglIAnABIAAAkg");
	this.shape_18.setTransform(-162.1,114.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#698992").s().p("AgTATIAAgmIAnACIAAAkg");
	this.shape_19.setTransform(55.4,212.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#698992").s().p("AgTgTIAnACIAAAkIgnABg");
	this.shape_20.setTransform(61.9,216.6);

	this.instance = new lib.glowingstar_gif();
	this.instance.parent = this;
	this.instance.setTransform(-361.9,202,1,1,0,0,0,16,16);

	this.instance_1 = new lib.glowingstar2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(280,-214,1,1,0,0,0,16,16);

	this.instance_2 = new lib.glowingstar3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-252.1,-148,1,1,0,0,0,16,16);

	this.instance_3 = new lib.glowingstar4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(139,132,1,1,0,0,0,16,16);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1C2426").s().p("EhK/AuGMAAAhcLMCV/AAAMAAABcLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.menubg, new cjs.Rectangle(-480,-295,960,590), null);


(lib.endmenubar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.EndFinsh = new lib.finish();
	this.EndFinsh.parent = this;
	this.EndFinsh.setTransform(-222.5,-21.7);
	new cjs.ButtonHelper(this.EndFinsh, 0, 1, 2, false, new lib.finish(), 3);

	this.EndPlayAgian = new lib.playagain();
	this.EndPlayAgian.parent = this;
	this.EndPlayAgian.setTransform(229.7,-21.2);
	new cjs.ButtonHelper(this.EndPlayAgian, 0, 1, 2, false, new lib.playagain(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF5D82").ss(5.2,1,1).p("EhMeAAAMCY9AAA");
	this.shape.setTransform(0,-61.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhMdAJ+IAAz7MCY7AAAIAAT7g");
	this.shape_1.setTransform(0,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.EndPlayAgian},{t:this.EndFinsh}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492,-64.1,984,130.2);


(lib.combobox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startbtn = new lib.startbutton();
	this.startbtn.parent = this;
	this.startbtn.setTransform(0,64.5);
	new cjs.ButtonHelper(this.startbtn, 0, 1, 2, false, new lib.startbutton(), 3);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, זהה את היונק, 1, גדל על עץ?, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(-0.3,-80.9,2.898,1.59,0,0,0,49.9,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.combobox, new cjs.Rectangle(-146.3,-99.4,292.7,184.4), null);


(lib.bobfloat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.idlebob();
	this.instance.parent = this;
	this.instance.setTransform(110.1,246);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.5,x:108.8,y:244.7},0).wait(1).to({rotation:-0.9,x:107.6,y:243.4},0).wait(1).to({rotation:-1.4,x:106.3,y:242.1},0).wait(1).to({rotation:-1.8,x:105.1,y:240.9},0).wait(1).to({rotation:-2.3,x:103.9,y:239.6},0).wait(1).to({rotation:-2.8,x:102.6,y:238.3},0).wait(1).to({rotation:-3.2,x:101.4,y:237},0).wait(1).to({rotation:-3.7,x:100.1,y:235.7},0).wait(1).to({rotation:-4.1,x:98.9,y:234.4},0).wait(1).to({rotation:-4.6,x:97.7,y:233.2},0).wait(1).to({rotation:-5.1,x:96.4,y:231.9},0).wait(1).to({rotation:-5.5,x:95.2,y:230.6},0).wait(1).to({rotation:-6,x:94,y:229.3},0).wait(1).to({rotation:-6.5,x:92.7,y:228},0).wait(1).to({rotation:-6.9,x:91.5,y:226.7},0).wait(1).to({rotation:-7.4,x:90.2,y:225.4},0).wait(1).to({rotation:-7.8,x:89,y:224.2},0).wait(1).to({rotation:-8.3,x:87.8,y:222.9},0).wait(1).to({rotation:-8.8,x:86.5,y:221.6},0).wait(1).to({rotation:-9.2,x:85.3,y:220.3},0).wait(1).to({rotation:-9.7,x:84,y:219},0).wait(1).to({rotation:-10.1,x:82.8,y:217.7},0).wait(1).to({rotation:-10.6,x:81.6,y:216.5},0).wait(1).to({rotation:-11.1,x:80.3,y:215.2},0).wait(1).to({rotation:-11.5,x:79.1,y:213.9},0).wait(1).to({rotation:-12,x:77.9,y:212.6},0).wait(1).to({rotation:-12.4,x:76.6,y:211.3},0).wait(1).to({rotation:-12.9,x:75.4,y:210},0).wait(1).to({rotation:-13.4,x:74.1,y:208.8},0).wait(1).to({rotation:-13.8,x:72.9,y:207.5},0).wait(1).to({rotation:-14.3,x:71.7,y:206.2},0).wait(1).to({rotation:-14.7,x:70.4,y:204.9},0).wait(1).to({rotation:-15.2,x:69.2,y:203.6},0).wait(1).to({rotation:-15.7,x:67.9,y:202.3},0).wait(1).to({rotation:-16.1,x:66.7,y:201},0).wait(1).to({rotation:-16.6,x:65.5,y:199.8},0).wait(1).to({rotation:-17.1,x:64.2,y:198.5},0).wait(1).to({rotation:-17.5,x:63,y:197.2},0).wait(1).to({rotation:-18,x:61.8,y:195.9},0).wait(1).to({rotation:-18.4,x:60.5,y:194.6},0).wait(1).to({rotation:-18.9,x:59.3,y:193.3},0).wait(1).to({rotation:-19.4,x:58,y:192.1},0).wait(1).to({rotation:-19.8,x:56.8,y:190.8},0).wait(1).to({rotation:-20.3,x:55.6,y:189.5},0).wait(1).to({rotation:-20.7,x:54.3,y:188.2},0).wait(1).to({rotation:-21.2,x:53.1,y:186.9},0).wait(1).to({rotation:-21.7,x:51.8,y:185.6},0).wait(1).to({rotation:-22.1,x:50.6,y:184.3},0).wait(1).to({rotation:-22.6,x:49.4,y:183.1},0).wait(1).to({rotation:-23,x:48.1,y:181.8},0).wait(1).to({rotation:-23.5,x:46.9,y:180.5},0).wait(1).to({rotation:-24,x:45.7,y:179.2},0).wait(1).to({rotation:-24.4,x:44.4,y:177.9},0).wait(1).to({rotation:-24.9,x:43.2,y:176.6},0).wait(1).to({rotation:-25.3,x:41.9,y:175.4},0).wait(1).to({rotation:-25.8,x:40.7,y:174.1},0).wait(1).to({rotation:-26.3,x:39.5,y:172.8},0).wait(1).to({rotation:-26.7,x:38.2,y:171.5},0).wait(1).to({rotation:-27.2,x:37,y:170.2},0).wait(1).to({rotation:-27.7,x:35.7,y:168.9},0).wait(1).to({rotation:-28.1,x:34.5,y:167.7},0).wait(1).to({rotation:-28.6,x:33.3,y:166.4},0).wait(1).to({rotation:-29,x:32,y:165.1},0).wait(1).to({rotation:-29.5,x:30.8,y:163.8},0).wait(1).to({rotation:-30,x:29.6,y:162.5},0).wait(1).to({rotation:-30.4,x:28.3,y:161.2},0).wait(1).to({rotation:-30.9,x:27.1,y:159.9},0).wait(1).to({rotation:-31.3,x:25.8,y:158.7},0).wait(1).to({rotation:-31.8,x:24.6,y:157.4},0).wait(1).to({rotation:-32.3,x:23.4,y:156.1},0).wait(1).to({rotation:-32.7,x:22.1,y:154.8},0).wait(1).to({rotation:-33.2,x:20.9,y:153.5},0).wait(1).to({rotation:-33.6,x:19.6,y:152.2},0).wait(1).to({rotation:-34.1,x:18.4,y:151},0).wait(1).to({rotation:-34.6,x:17.2,y:149.7},0).wait(1).to({rotation:-35,x:15.9,y:148.4},0).wait(1).to({rotation:-35.5,x:14.7,y:147.1},0).wait(1).to({rotation:-35.9,x:13.5,y:145.8},0).wait(1).to({rotation:-36.4,x:12.2,y:144.5},0).wait(1).to({rotation:-36.9,x:11,y:143.2},0).wait(1).to({rotation:-37.3,x:9.7,y:142},0).wait(1).to({rotation:-37.8,x:8.5,y:140.7},0).wait(1).to({rotation:-38.3,x:7.3,y:139.4},0).wait(1).to({rotation:-38.7,x:6,y:138.1},0).wait(1).to({rotation:-39.2,x:4.8,y:136.8},0).wait(1).to({rotation:-39.6,x:3.5,y:135.5},0).wait(1).to({rotation:-40.1,x:2.3,y:134.3},0).wait(1).to({rotation:-40.6,x:1.1,y:133},0).wait(1).to({rotation:-41,x:-0.2,y:131.7},0).wait(1).to({rotation:-41.5,x:-1.4,y:130.4},0).wait(1).to({rotation:-41.9,x:-2.6,y:129.1},0).wait(1).to({rotation:-42.4,x:-3.9,y:127.8},0).wait(1).to({rotation:-42.9,x:-5.1,y:126.5},0).wait(1).to({rotation:-43.3,x:-6.4,y:125.3},0).wait(1).to({rotation:-43.8,x:-7.6,y:124},0).wait(1).to({rotation:-44.2,x:-8.8,y:122.7},0).wait(1).to({rotation:-44.7,x:-10.1,y:121.4},0).wait(1).to({rotation:-45.2,x:-11.3,y:120.1},0).wait(1).to({rotation:-45.6,x:-12.6,y:118.8},0).wait(1).to({rotation:-46.1,x:-13.8,y:117.6},0).wait(1).to({rotation:-46.5,x:-15,y:116.3},0).wait(1).to({rotation:-47,x:-16.3,y:115},0).wait(1).to({rotation:-47.5,x:-17.5,y:113.7},0).wait(1).to({rotation:-47.9,x:-18.7,y:112.4},0).wait(1).to({rotation:-48.4,x:-20,y:111.1},0).wait(1).to({rotation:-48.9,x:-21.2,y:109.9},0).wait(1).to({rotation:-49.3,x:-22.5,y:108.6},0).wait(1).to({rotation:-49.8,x:-23.7,y:107.3},0).wait(1).to({rotation:-50.2,x:-24.9,y:106},0).wait(1).to({rotation:-50.7,x:-26.2,y:104.7},0).wait(1).to({rotation:-51.2,x:-27.4,y:103.4},0).wait(1).to({rotation:-51.6,x:-28.7,y:102.1},0).wait(1).to({rotation:-52.1,x:-29.9,y:100.9},0).wait(1).to({rotation:-52.5,x:-31.1,y:99.6},0).wait(1).to({rotation:-53,x:-32.4,y:98.3},0).wait(1).to({rotation:-53.5,x:-33.6,y:97},0).wait(1).to({rotation:-53.9,x:-34.8,y:95.7},0).wait(1).to({rotation:-54.4,x:-36.1,y:94.4},0).wait(1).to({rotation:-54.8,x:-37.3,y:93.2},0).wait(1).to({rotation:-55.3,x:-38.6,y:91.9},0).wait(1).to({rotation:-55.8,x:-39.8,y:90.6},0).wait(1).to({rotation:-56.2,x:-41,y:89.3},0).wait(1).to({rotation:-56.7,x:-42.3,y:88},0).wait(1).to({rotation:-57.1,x:-43.5,y:86.7},0).wait(1).to({rotation:-57.6,x:-44.8,y:85.4},0).wait(1).to({rotation:-58.1,x:-46,y:84.2},0).wait(1).to({rotation:-58.5,x:-47.2,y:82.9},0).wait(1).to({rotation:-59,x:-48.5,y:81.6},0).wait(1).to({rotation:-59.4,x:-49.7,y:80.3},0).wait(1).to({rotation:-59.9,x:-50.9,y:79},0).wait(1).to({rotation:-60.4,x:-52.2,y:77.7},0).wait(1).to({rotation:-60.8,x:-53.4,y:76.5},0).wait(1).to({rotation:-61.3,x:-54.7,y:75.2},0).wait(1).to({rotation:-61.8,x:-55.9,y:73.9},0).wait(1).to({rotation:-62.2,x:-57.1,y:72.6},0).wait(1).to({rotation:-62.7,x:-58.4,y:71.3},0).wait(1).to({rotation:-63.1,x:-59.6,y:70},0).wait(1).to({rotation:-63.6,x:-60.9,y:68.7},0).wait(1).to({rotation:-64.1,x:-62.1,y:67.5},0).wait(1).to({rotation:-64.5,x:-63.3,y:66.2},0).wait(1).to({rotation:-65,x:-64.6,y:64.9},0).wait(1).to({rotation:-65.4,x:-65.8,y:63.6},0).wait(1).to({rotation:-65.9,x:-67,y:62.3},0).wait(1).to({rotation:-66.4,x:-68.3,y:61},0).wait(1).to({rotation:-66.8,x:-69.5,y:59.8},0).wait(1).to({rotation:-67.3,x:-70.8,y:58.5},0).wait(1).to({rotation:-67.7,x:-72,y:57.2},0).wait(1).to({rotation:-68.2,x:-73.2,y:55.9},0).wait(1).to({rotation:-68.7,x:-74.5,y:54.6},0).wait(1).to({rotation:-69.1,x:-75.7,y:53.3},0).wait(1).to({rotation:-69.6,x:-77,y:52.1},0).wait(1).to({rotation:-70,x:-78.2,y:50.8},0).wait(1).to({rotation:-70.5,x:-79.4,y:49.5},0).wait(1).to({rotation:-71,x:-80.7,y:48.2},0).wait(1).to({rotation:-71.4,x:-81.9,y:46.9},0).wait(1).to({rotation:-71.9,x:-83.1,y:45.6},0).wait(1).to({rotation:-72.4,x:-84.4,y:44.3},0).wait(1).to({rotation:-72.8,x:-85.6,y:43.1},0).wait(1).to({rotation:-73.3,x:-86.9,y:41.8},0).wait(1).to({rotation:-73.7,x:-88.1,y:40.5},0).wait(1).to({rotation:-74.2,x:-89.3,y:39.2},0).wait(1).to({rotation:-74.7,x:-90.6,y:37.9},0).wait(1).to({rotation:-75.1,x:-91.8,y:36.6},0).wait(1).to({rotation:-75.6,x:-93.1,y:35.4},0).wait(1).to({rotation:-76,x:-94.3,y:34.1},0).wait(1).to({rotation:-76.5,x:-95.5,y:32.8},0).wait(1).to({rotation:-77,x:-96.8,y:31.5},0).wait(1).to({rotation:-77.4,x:-98,y:30.2},0).wait(1).to({rotation:-77.9,x:-99.2,y:28.9},0).wait(1).to({rotation:-78.3,x:-100.5,y:27.6},0).wait(1).to({rotation:-78.8,x:-101.7,y:26.4},0).wait(1).to({rotation:-79.3,x:-103,y:25.1},0).wait(1).to({rotation:-79.7,x:-104.2,y:23.8},0).wait(1).to({rotation:-80.2,x:-105.4,y:22.5},0).wait(1).to({rotation:-80.6,x:-106.7,y:21.2},0).wait(1).to({rotation:-81.1,x:-107.9,y:19.9},0).wait(1).to({rotation:-81.6,x:-109.2,y:18.7},0).wait(1).to({rotation:-82,x:-110.4,y:17.4},0).wait(1).to({rotation:-82.5,x:-111.6,y:16.1},0).wait(1).to({rotation:-83,x:-112.9,y:14.8},0).wait(1).to({rotation:-83.4,x:-114.1,y:13.5},0).wait(1).to({rotation:-83.9,x:-115.3,y:12.2},0).wait(1).to({rotation:-84.3,x:-116.6,y:11},0).wait(1).to({rotation:-84.8,x:-117.8,y:9.7},0).wait(1).to({rotation:-85.3,x:-119.1,y:8.4},0).wait(1).to({rotation:-85.7,x:-120.3,y:7.1},0).wait(1).to({rotation:-86.2,x:-121.5,y:5.8},0).wait(1).to({rotation:-86.6,x:-122.8,y:4.5},0).wait(1).to({rotation:-87.1,x:-124,y:3.2},0).wait(1).to({rotation:-87.6,x:-125.3,y:2},0).wait(1).to({rotation:-88,x:-126.5,y:0.7},0).wait(1).to({rotation:-88.5,x:-127.7,y:-0.6},0).wait(1).to({rotation:-88.9,x:-129,y:-1.9},0).wait(1).to({rotation:-89.4,x:-130.2,y:-3.2},0).wait(1).to({rotation:-89.9,x:-131.4,y:-4.5},0).wait(1).to({rotation:-90.3,x:-132.7,y:-5.7},0).wait(1).to({rotation:-90.8,x:-133.9,y:-7},0).wait(1).to({rotation:-91.2,x:-135.2,y:-8.3},0).wait(1).to({rotation:-91.7,x:-136.4,y:-9.6},0).wait(1).to({rotation:-92.2,x:-137.6,y:-10.9},0).wait(1).to({rotation:-92.6,x:-138.9,y:-12.2},0).wait(1).to({rotation:-93.1,x:-140.1,y:-13.5},0).wait(1).to({rotation:-93.6,x:-141.4,y:-14.7},0).wait(1).to({rotation:-94,x:-142.6,y:-16},0).wait(1).to({rotation:-94.5,x:-143.8,y:-17.3},0).wait(1).to({rotation:-94.9,x:-145.1,y:-18.6},0).wait(1).to({rotation:-95.4,x:-146.3,y:-19.9},0).wait(1).to({rotation:-95.9,x:-147.5,y:-21.2},0).wait(1).to({rotation:-96.3,x:-148.8,y:-22.4},0).wait(1).to({rotation:-96.8,x:-150,y:-23.7},0).wait(1).to({rotation:-97.2,x:-151.3,y:-25},0).wait(1).to({rotation:-97.7,x:-152.5,y:-26.3},0).wait(1).to({rotation:-98.2,x:-153.7,y:-27.6},0).wait(1).to({rotation:-98.6,x:-155,y:-28.9},0).wait(1).to({rotation:-99.1,x:-156.2,y:-30.2},0).wait(1).to({rotation:-99.5,x:-157.5,y:-31.4},0).wait(1).to({rotation:-100,x:-158.7,y:-32.7},0).wait(1).to({rotation:-100.5,x:-159.9,y:-34},0).wait(1).to({rotation:-100.9,x:-161.2,y:-35.3},0).wait(1).to({rotation:-101.4,x:-162.4,y:-36.6},0).wait(1).to({rotation:-101.8,x:-163.6,y:-37.9},0).wait(1).to({rotation:-102.3,x:-164.9,y:-39.1},0).wait(1).to({rotation:-102.8,x:-166.1,y:-40.4},0).wait(1).to({rotation:-103.2,x:-167.4,y:-41.7},0).wait(1).to({rotation:-103.7,x:-168.6,y:-43},0).wait(1).to({rotation:-104.2,x:-169.8,y:-44.3},0).wait(1).to({rotation:-104.6,x:-171.1,y:-45.6},0).wait(1).to({rotation:-105.1,x:-172.3,y:-46.8},0).wait(1).to({rotation:-105.5,x:-173.6,y:-48.1},0).wait(1).to({rotation:-106,x:-174.8,y:-49.4},0).wait(1).to({rotation:-106.5,x:-176,y:-50.7},0).wait(1).to({rotation:-106.9,x:-177.3,y:-52},0).wait(1).to({rotation:-107.4,x:-178.5,y:-53.3},0).wait(1).to({rotation:-107.8,x:-179.7,y:-54.6},0).wait(1).to({rotation:-108.3,x:-181,y:-55.8},0).wait(1).to({rotation:-108.8,x:-182.2,y:-57.1},0).wait(1).to({rotation:-109.2,x:-183.5,y:-58.4},0).wait(1).to({rotation:-109.7,x:-184.7,y:-59.7},0).wait(1).to({rotation:-110.1,x:-185.9,y:-61},0).wait(1).to({rotation:-110.6,x:-187.2,y:-62.3},0).wait(1).to({rotation:-111.1,x:-188.4,y:-63.5},0).wait(1).to({rotation:-111.5,x:-189.7,y:-64.8},0).wait(1).to({rotation:-112,x:-190.9,y:-66.1},0).wait(1).to({rotation:-112.4,x:-192.1,y:-67.4},0).wait(1).to({rotation:-112.9,x:-193.4,y:-68.7},0).wait(1).to({rotation:-113.4,x:-194.6,y:-70},0).wait(1).to({rotation:-113.8,x:-195.8,y:-71.3},0).wait(1).to({rotation:-114.3,x:-197.1,y:-72.5},0).wait(1).to({rotation:-114.8,x:-198.3,y:-73.8},0).wait(1).to({rotation:-115.2,x:-199.6,y:-75.1},0).wait(1).to({rotation:-115.7,x:-200.8,y:-76.4},0).wait(1).to({rotation:-116.1,x:-202,y:-77.7},0).wait(1).to({rotation:-116.6,x:-203.3,y:-79},0).wait(1).to({rotation:-117.1,x:-204.5,y:-80.2},0).wait(1).to({rotation:-117.5,x:-205.8,y:-81.5},0).wait(1).to({rotation:-118,x:-207,y:-82.8},0).wait(1).to({rotation:-118.4,x:-208.2,y:-84.1},0).wait(1).to({rotation:-118.9,x:-209.5,y:-85.4},0).wait(1).to({rotation:-119.4,x:-210.7,y:-86.7},0).wait(1).to({rotation:-119.8,x:-211.9,y:-87.9},0).wait(2).to({rotation:-124.4,x:-211.2,y:-89},0).wait(1).to({rotation:-129.1,x:-210.4,y:-90.1},0).wait(1).to({rotation:-133.7,x:-209.6,y:-91.2},0).wait(1).to({rotation:-138.3,x:-208.9,y:-92.3},0).wait(1).to({rotation:-142.9,x:-208.1,y:-93.3},0).wait(1).to({rotation:-147.5,x:-207.3,y:-94.4},0).wait(1).to({rotation:-152.1,x:-206.6,y:-95.5},0).wait(1).to({rotation:-156.7,x:-205.8,y:-96.6},0).wait(1).to({rotation:-161.4,x:-205,y:-97.6},0).wait(1).to({rotation:-166,x:-204.3,y:-98.7},0).wait(1).to({rotation:-170.6,x:-203.5,y:-99.8},0).wait(1).to({rotation:-175.2,x:-202.7,y:-100.9},0).wait(1).to({rotation:-179.8,x:-201.9,y:-101.9},0).wait(1).to({rotation:-177.8,x:-200.7,y:-104.6},0).wait(1).to({rotation:-175.7,x:-199.4,y:-107.3},0).wait(1).to({rotation:-173.7,x:-198.1,y:-110},0).wait(1).to({rotation:-171.7,x:-196.8,y:-112.7},0).wait(1).to({rotation:-169.6,x:-195.6,y:-115.4},0).wait(1).to({rotation:-167.6,x:-194.3,y:-118.1},0).wait(1).to({rotation:-165.6,x:-193,y:-120.8},0).wait(1).to({rotation:-163.5,x:-191.7,y:-123.4},0).wait(1).to({rotation:-161.5,x:-190.4,y:-126.1},0).wait(1).to({rotation:-159.5,x:-189.2,y:-128.8},0).wait(1).to({rotation:-157.4,x:-187.9,y:-131.5},0).wait(1).to({rotation:-155.4,x:-186.6,y:-134.2},0).wait(1).to({rotation:-153.4,x:-185.3,y:-136.9},0).wait(1).to({rotation:-151.3,x:-184,y:-139.6},0).wait(1).to({rotation:-149.3,x:-182.8,y:-142.2},0).wait(1).to({rotation:-147.3,x:-181.5,y:-144.9},0).wait(1).to({rotation:-145.2,x:-180.2,y:-147.6},0).wait(1).to({rotation:-143.2,x:-178.9,y:-150.3},0).wait(1).to({rotation:-141.2,x:-177.6,y:-153},0).wait(1).to({rotation:-139.1,x:-176.4,y:-155.7},0).wait(1).to({rotation:-137.1,x:-175.1,y:-158.4},0).wait(1).to({rotation:-135.1,x:-173.8,y:-161},0).wait(1).to({rotation:-133,x:-172.5,y:-163.7},0).wait(1).to({rotation:-131,x:-171.2,y:-166.4},0).wait(1).to({rotation:-129,x:-170,y:-169.1},0).wait(1).to({rotation:-126.9,x:-168.7,y:-171.8},0).wait(1).to({rotation:-124.9,x:-167.4,y:-174.5},0).wait(1).to({rotation:-122.9,x:-166.1,y:-177.2},0).wait(1).to({rotation:-120.8,x:-164.8,y:-179.8},0).wait(1).to({rotation:-118.8,x:-163.6,y:-182.5},0).wait(1).to({rotation:-116.8,x:-162.3,y:-185.2},0).wait(1).to({rotation:-114.7,x:-161,y:-187.9},0).wait(1).to({rotation:-112.7,x:-159.7,y:-190.6},0).wait(1).to({rotation:-110.7,x:-158.4,y:-193.3},0).wait(1).to({rotation:-108.6,x:-157.2,y:-196},0).wait(1).to({rotation:-106.6,x:-155.9,y:-198.6},0).wait(1).to({rotation:-104.6,x:-154.6,y:-201.3},0).wait(1).to({rotation:-102.5,x:-153.3,y:-204},0).wait(1).to({rotation:-100.5,x:-152,y:-206.7},0).wait(1).to({rotation:-98.5,x:-150.8,y:-209.4},0).wait(1).to({rotation:-96.4,x:-149.5,y:-212.1},0).wait(1).to({rotation:-94.4,x:-148.2,y:-214.8},0).wait(1).to({rotation:-92.4,x:-146.9,y:-217.4},0).wait(1).to({rotation:-90.3,x:-145.6,y:-220.1},0).wait(1).to({rotation:-88.3,x:-144.4,y:-222.8},0).wait(1).to({rotation:-86.3,x:-143.1,y:-225.5},0).wait(1).to({rotation:-84.2,x:-141.8,y:-228.2},0).wait(1).to({rotation:-82.2,x:-140.5,y:-230.9},0).wait(1).to({rotation:-80.2,x:-139.2,y:-233.6},0).wait(1).to({rotation:-78.1,x:-138,y:-236.3},0).wait(1).to({rotation:-76.1,x:-136.7,y:-238.9},0).wait(1).to({rotation:-74.1,x:-135.4,y:-241.6},0).wait(1).to({rotation:-72,x:-134.1,y:-244.3},0).wait(1).to({rotation:-70,x:-132.8,y:-247},0).wait(1).to({rotation:-68,x:-131.6,y:-249.7},0).wait(1).to({rotation:-65.9,x:-130.3,y:-252.4},0).wait(1).to({rotation:-63.9,x:-129,y:-255.1},0).wait(1).to({rotation:-61.9,x:-127.7,y:-257.7},0).wait(1).to({rotation:-59.8,x:-126.4,y:-260.4},0).wait(1).to({rotation:-57.8,x:-125.2,y:-263.1},0).wait(1).to({rotation:-55.7,x:-123.9,y:-265.8},0).wait(1).to({rotation:-53.7,x:-122.6,y:-268.5},0).wait(1).to({rotation:-51.7,x:-121.3,y:-271.2},0).wait(1).to({rotation:-49.6,x:-120.1,y:-273.9},0).wait(1).to({rotation:-47.6,x:-118.8,y:-276.5},0).wait(1).to({rotation:-45.6,x:-117.5,y:-279.2},0).wait(1).to({rotation:-43.5,x:-116.2,y:-281.9},0).wait(1).to({rotation:-41.5,x:-114.9,y:-284.6},0).wait(1).to({rotation:-39.5,x:-113.7,y:-287.3},0).wait(1).to({rotation:-37.4,x:-112.4,y:-290},0).wait(1).to({rotation:-35.4,x:-111.1,y:-292.7},0).wait(1).to({rotation:-33.4,x:-109.8,y:-295.3},0).wait(1).to({rotation:-31.3,x:-108.5,y:-298},0).wait(1).to({rotation:-29.3,x:-107.3,y:-300.7},0).wait(1).to({rotation:-27.3,x:-106,y:-303.4},0).wait(1).to({rotation:-25.2,x:-104.7,y:-306.1},0).wait(1).to({rotation:-23.2,x:-103.4,y:-308.8},0).wait(1).to({rotation:-21.2,x:-102.1,y:-311.5},0).wait(1).to({rotation:-19.1,x:-100.9,y:-314.1},0).wait(1).to({rotation:-17.1,x:-99.6,y:-316.8},0).wait(1).to({rotation:-15.1,x:-98.3,y:-319.5},0).wait(1).to({rotation:-13,x:-97,y:-322.2},0).wait(1).to({rotation:-11,x:-95.7,y:-324.9},0).wait(1).to({rotation:-9,x:-94.5,y:-327.6},0).wait(1).to({rotation:-6.9,x:-93.2,y:-330.3},0).wait(1).to({rotation:-4.9,x:-91.9,y:-332.9},0).wait(1).to({rotation:-2.9,x:-90.6,y:-335.6},0).wait(1).to({rotation:-0.8,x:-89.3,y:-338.3},0).wait(1).to({rotation:1.2,x:-88.1,y:-341},0).wait(1).to({rotation:3.2,x:-86.8,y:-343.7},0).wait(1).to({rotation:5.3,x:-85.5,y:-346.4},0).wait(1).to({rotation:7.3,x:-84.2,y:-349.1},0).wait(1).to({rotation:9.3,x:-82.9,y:-351.7},0).wait(1).to({rotation:11.4,x:-81.7,y:-354.4},0).wait(1).to({rotation:13.4,x:-80.4,y:-357.1},0).wait(1).to({rotation:15.4,x:-79.1,y:-359.8},0).wait(1).to({rotation:17.5,x:-77.8,y:-362.5},0).wait(1).to({rotation:19.5,x:-76.5,y:-365.2},0).wait(1).to({rotation:21.5,x:-75.3,y:-367.9},0).wait(1).to({rotation:23.6,x:-74,y:-370.6},0).wait(1).to({rotation:25.6,x:-72.7,y:-373.2},0).wait(1).to({rotation:27.6,x:-71.4,y:-375.9},0).wait(1).to({rotation:29.7,x:-70.1,y:-378.6},0).wait(1).to({rotation:31.7,x:-68.9,y:-381.3},0).wait(1).to({rotation:33.7,x:-67.6,y:-384},0).wait(1).to({rotation:35.8,x:-66.3,y:-386.7},0).wait(1).to({rotation:37.8,x:-65,y:-389.4},0).wait(1).to({rotation:39.8,x:-63.7,y:-392},0).wait(1).to({rotation:41.9,x:-62.5,y:-394.7},0).wait(1).to({rotation:43.9,x:-61.2,y:-397.4},0).wait(1).to({rotation:45.9,x:-59.9,y:-400.1},0).wait(1).to({rotation:48,x:-58.6,y:-402.8},0).wait(1).to({rotation:50,x:-57.3,y:-405.5},0).wait(1).to({rotation:52,x:-56.1,y:-408.2},0).wait(1).to({rotation:54.1,x:-54.8,y:-410.8},0).wait(1).to({rotation:56.1,x:-53.5,y:-413.5},0).wait(1).to({rotation:58.1,x:-52.2,y:-416.2},0).wait(1).to({rotation:60.2,x:-50.9,y:-418.9},0).to({_off:true},1).wait(66).to({_off:false,scaleX:1,scaleY:1,rotation:150.2,x:-894.9,y:-32.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:147.9,x:-891.8,y:-31.2},0).wait(1).to({rotation:145.8,x:-888.8,y:-29.5},0).wait(1).to({rotation:143.6,x:-885.7,y:-27.8},0).wait(1).to({rotation:141.5,x:-882.6,y:-26.1},0).wait(1).to({rotation:139.3,x:-879.6,y:-24.4},0).wait(1).to({rotation:137.2,x:-876.5,y:-22.7},0).wait(1).to({rotation:135,x:-873.4,y:-21},0).wait(1).to({rotation:132.8,x:-870.4,y:-19.3},0).wait(1).to({rotation:130.7,x:-867.3,y:-17.6},0).wait(1).to({rotation:128.5,x:-864.2,y:-15.9},0).wait(1).to({rotation:126.4,x:-861.2,y:-14.2},0).wait(1).to({rotation:124.2,x:-858.1,y:-12.5},0).wait(1).to({rotation:122,x:-855,y:-10.8},0).wait(1).to({rotation:119.9,x:-852,y:-9.1},0).wait(1).to({rotation:117.7,x:-848.9,y:-7.4},0).wait(1).to({rotation:115.6,x:-845.8,y:-5.7},0).wait(1).to({rotation:113.4,x:-842.8,y:-4},0).wait(1).to({rotation:111.2,x:-839.7,y:-2.3},0).wait(1).to({rotation:109.1,x:-836.7,y:-0.6},0).wait(1).to({rotation:106.9,x:-833.6,y:1.1},0).wait(1).to({rotation:104.8,x:-830.5,y:2.8},0).wait(1).to({rotation:102.6,x:-827.5,y:4.5},0).wait(1).to({rotation:100.4,x:-824.4,y:6.2},0).wait(1).to({rotation:98.3,x:-821.3,y:7.9},0).wait(1).to({rotation:96.1,x:-818.3,y:9.6},0).wait(1).to({rotation:94,x:-815.2,y:11.3},0).wait(1).to({rotation:91.8,x:-812.1,y:13},0).wait(1).to({rotation:89.6,x:-809.1,y:14.7},0).wait(1).to({rotation:87.5,x:-806,y:16.4},0).wait(1).to({rotation:85.3,x:-802.9,y:18.1},0).wait(1).to({rotation:83.2,x:-799.9,y:19.8},0).wait(1).to({rotation:81,x:-796.8,y:21.5},0).wait(1).to({rotation:78.8,x:-793.7,y:23.2},0).wait(1).to({rotation:76.7,x:-790.7,y:24.9},0).wait(1).to({rotation:74.5,x:-787.6,y:26.6},0).wait(1).to({rotation:72.4,x:-784.5,y:28.4},0).wait(1).to({rotation:70.2,x:-781.5,y:30.1},0).wait(1).to({rotation:68.1,x:-778.4,y:31.8},0).wait(1).to({rotation:65.9,x:-775.3,y:33.5},0).wait(1).to({rotation:63.7,x:-772.3,y:35.2},0).wait(1).to({rotation:61.6,x:-769.2,y:36.9},0).wait(1).to({rotation:59.4,x:-766.1,y:38.6},0).wait(1).to({rotation:57.3,x:-763.1,y:40.3},0).wait(1).to({rotation:55.1,x:-760,y:42},0).wait(1).to({rotation:52.9,x:-756.9,y:43.7},0).wait(1).to({rotation:50.8,x:-753.9,y:45.4},0).wait(1).to({rotation:48.6,x:-750.8,y:47.1},0).wait(1).to({rotation:46.5,x:-747.8,y:48.8},0).wait(1).to({rotation:44.3,x:-744.7,y:50.5},0).wait(1).to({rotation:42.1,x:-741.6,y:52.2},0).wait(1).to({rotation:40,x:-738.6,y:53.9},0).wait(1).to({rotation:37.8,x:-735.5,y:55.6},0).wait(1).to({rotation:35.7,x:-732.4,y:57.3},0).wait(1).to({rotation:33.5,x:-729.4,y:59},0).wait(1).to({rotation:31.3,x:-726.3,y:60.7},0).wait(1).to({rotation:29.2,x:-723.2,y:62.4},0).wait(1).to({rotation:27,x:-720.2,y:64.1},0).wait(1).to({rotation:24.9,x:-717.1,y:65.8},0).wait(1).to({rotation:22.7,x:-714,y:67.5},0).wait(1).to({rotation:20.5,x:-711,y:69.2},0).wait(1).to({rotation:18.4,x:-707.9,y:70.9},0).wait(1).to({rotation:16.2,x:-705.5,y:73.5},0).wait(1).to({rotation:14,x:-703,y:76},0).wait(1).to({rotation:11.8,x:-700.6,y:78.5},0).wait(1).to({rotation:9.6,x:-698.2,y:81},0).wait(1).to({rotation:7.4,x:-695.8,y:83.6},0).wait(1).to({rotation:5.3,x:-693.3,y:86.1},0).wait(1).to({rotation:3.1,x:-690.9,y:88.6},0).wait(1).to({rotation:0.9,x:-688.5,y:91.2},0).wait(1).to({rotation:-1.3,x:-686,y:93.7},0).wait(1).to({rotation:-3.5,x:-683.6,y:96.2},0).wait(1).to({rotation:-5.7,x:-681.2,y:98.7},0).wait(1).to({rotation:-7.9,x:-678.8,y:101.3},0).wait(1).to({rotation:-10.1,x:-676.3,y:103.8},0).wait(1).to({rotation:-12.3,x:-673.9,y:106.3},0).wait(1).to({rotation:-14.4,x:-671.5,y:108.9},0).wait(1).to({rotation:-16.6,x:-669.1,y:111.4},0).wait(1).to({rotation:-18.8,x:-666.6,y:113.9},0).wait(1).to({rotation:-21,x:-664.2,y:116.5},0).wait(1).to({rotation:-23.2,x:-661.8,y:119},0).wait(1).to({rotation:-25.4,x:-659.3,y:121.5},0).wait(1).to({rotation:-27.6,x:-656.9,y:124},0).wait(1).to({rotation:-29.8,x:-654.5,y:126.6},0).wait(1).to({rotation:-32,x:-652.1,y:129.1},0).wait(1).to({rotation:-34.1,x:-649.6,y:131.6},0).wait(1).to({rotation:-36.3,x:-647.2,y:134.2},0).wait(1).to({rotation:-38.5,x:-644.8,y:136.7},0).wait(1).to({rotation:-40.7,x:-642.3,y:139.2},0).wait(1).to({rotation:-42.9,x:-639.9,y:141.8},0).wait(1).to({rotation:-45.1,x:-637.5,y:144.3},0).wait(1).to({rotation:-47.3,x:-635.1,y:146.8},0).wait(1).to({rotation:-49.5,x:-632.6,y:149.3},0).wait(1).to({rotation:-51.7,x:-630.2,y:151.9},0).wait(1).to({rotation:-53.8,x:-627.8,y:154.4},0).wait(1).to({rotation:-56,x:-625.4,y:156.9},0).wait(1).to({rotation:-58.2,x:-622.9,y:159.5},0).wait(1).to({rotation:-60.4,x:-620.5,y:162},0).wait(1).to({rotation:-62.6,x:-618.1,y:164.5},0).wait(1).to({rotation:-64.8,x:-615.6,y:167},0).wait(1).to({rotation:-67,x:-613.2,y:169.6},0).wait(1).to({rotation:-69.2,x:-610.8,y:172.1},0).wait(1).to({rotation:-71.4,x:-608.4,y:174.6},0).wait(1).to({rotation:-73.5,x:-605.9,y:177.2},0).wait(1).to({rotation:-75.7,x:-603.5,y:179.7},0).wait(1).to({rotation:-77.9,x:-601.1,y:182.2},0).wait(1).to({rotation:-80.1,x:-598.6,y:184.8},0).wait(1).to({rotation:-82.3,x:-596.2,y:187.3},0).wait(1).to({rotation:-84.5,x:-593.8,y:189.8},0).wait(1).to({rotation:-86.7,x:-591.4,y:192.3},0).wait(1).to({rotation:-88.9,x:-588.9,y:194.9},0).wait(1).to({rotation:-91.1,x:-586.5,y:197.4},0).wait(1).to({rotation:-93.2,x:-584.1,y:199.9},0).wait(1).to({rotation:-95.4,x:-581.7,y:202.5},0).wait(1).to({rotation:-97.6,x:-579.2,y:205},0).wait(1).to({rotation:-99.8,x:-576.8,y:207.5},0).wait(1).to({rotation:-102,x:-574.4,y:210.1},0).wait(1).to({rotation:-104.2,x:-571.9,y:212.6},0).wait(1).to({rotation:-106.4,x:-569.5,y:215.1},0).wait(1).to({rotation:-108.6,x:-567.1,y:217.6},0).wait(1).to({rotation:-110.8,x:-564.7,y:220.2},0).wait(1).to({rotation:-112.9,x:-562.2,y:222.7},0).wait(1).to({rotation:-115.1,x:-559.8,y:225.2},0).wait(1).to({rotation:-117.3,x:-557.4,y:227.8},0).wait(1).to({rotation:-119.5,x:-554.9,y:230.3},0).wait(1).to({rotation:-121.7,x:-552.5,y:232.8},0).wait(1).to({rotation:-123.9,x:-550.1,y:235.4},0).wait(1).to({rotation:-126.1,x:-547.7,y:237.9},0).wait(1).to({rotation:-128.3,x:-545.2,y:240.4},0).wait(1).to({rotation:-130.5,x:-542.8,y:242.9},0).wait(1).to({rotation:-132.6,x:-540.4,y:245.5},0).wait(1).to({rotation:-134.8,x:-537.9,y:248},0).to({_off:true},1).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87.1,215.5,46,61);


(lib.mid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,480,295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:960.5,regY:296,x:476.7,y:1},0).wait(1).to({x:472.9},0).wait(1).to({x:469},0).wait(1).to({x:465.2},0).wait(1).to({x:461.3},0).wait(1).to({x:457.5},0).wait(1).to({x:453.6},0).wait(1).to({x:449.8},0).wait(1).to({x:445.9},0).wait(1).to({x:442.1},0).wait(1).to({x:438.2},0).wait(1).to({x:434.4},0).wait(1).to({x:430.5},0).wait(1).to({x:426.7},0).wait(1).to({x:422.8},0).wait(1).to({x:419},0).wait(1).to({x:415.1},0).wait(1).to({x:411.3},0).wait(1).to({x:407.4},0).wait(1).to({x:403.6},0).wait(1).to({x:399.7},0).wait(1).to({x:395.9},0).wait(1).to({x:392},0).wait(1).to({x:388.2},0).wait(1).to({x:384.3},0).wait(1).to({x:380.5},0).wait(1).to({x:376.6},0).wait(1).to({x:372.8},0).wait(1).to({x:368.9},0).wait(1).to({x:365.1},0).wait(1).to({x:361.3},0).wait(1).to({x:357.4},0).wait(1).to({x:353.6},0).wait(1).to({x:349.7},0).wait(1).to({x:345.9},0).wait(1).to({x:342},0).wait(1).to({x:338.2},0).wait(1).to({x:334.3},0).wait(1).to({x:330.5},0).wait(1).to({x:326.6},0).wait(1).to({x:322.8},0).wait(1).to({x:318.9},0).wait(1).to({x:315.1},0).wait(1).to({x:311.2},0).wait(1).to({x:307.4},0).wait(1).to({x:303.5},0).wait(1).to({x:299.7},0).wait(1).to({x:295.8},0).wait(1).to({x:292},0).wait(1).to({x:288.1},0).wait(1).to({x:284.3},0).wait(1).to({x:280.4},0).wait(1).to({x:276.6},0).wait(1).to({x:272.7},0).wait(1).to({x:268.9},0).wait(1).to({x:265},0).wait(1).to({x:261.2},0).wait(1).to({x:257.3},0).wait(1).to({x:253.5},0).wait(1).to({x:249.6},0).wait(1).to({x:245.8},0).wait(1).to({x:242},0).wait(1).to({x:238.1},0).wait(1).to({x:234.3},0).wait(1).to({x:230.4},0).wait(1).to({x:226.6},0).wait(1).to({x:222.7},0).wait(1).to({x:218.9},0).wait(1).to({x:215},0).wait(1).to({x:211.2},0).wait(1).to({x:207.3},0).wait(1).to({x:203.5},0).wait(1).to({x:199.6},0).wait(1).to({x:195.8},0).wait(1).to({x:191.9},0).wait(1).to({x:188.1},0).wait(1).to({x:184.2},0).wait(1).to({x:180.4},0).wait(1).to({x:176.5},0).wait(1).to({x:172.7},0).wait(1).to({x:168.8},0).wait(1).to({x:165},0).wait(1).to({x:161.1},0).wait(1).to({x:157.3},0).wait(1).to({x:153.4},0).wait(1).to({x:149.6},0).wait(1).to({x:145.7},0).wait(1).to({x:141.9},0).wait(1).to({x:138},0).wait(1).to({x:134.2},0).wait(1).to({x:130.3},0).wait(1).to({x:126.5},0).wait(1).to({x:122.6},0).wait(1).to({x:118.8},0).wait(1).to({x:115},0).wait(1).to({x:111.1},0).wait(1).to({x:107.3},0).wait(1).to({x:103.4},0).wait(1).to({x:99.6},0).wait(1).to({x:95.7},0).wait(1).to({x:91.9},0).wait(1).to({x:88},0).wait(1).to({x:84.2},0).wait(1).to({x:80.3},0).wait(1).to({x:76.5},0).wait(1).to({x:72.6},0).wait(1).to({x:68.8},0).wait(1).to({x:64.9},0).wait(1).to({x:61.1},0).wait(1).to({x:57.2},0).wait(1).to({x:53.4},0).wait(1).to({x:49.5},0).wait(1).to({x:45.7},0).wait(1).to({x:41.8},0).wait(1).to({x:38},0).wait(1).to({x:34.1},0).wait(1).to({x:30.3},0).wait(1).to({x:26.4},0).wait(1).to({x:22.6},0).wait(1).to({x:18.7},0).wait(1).to({x:14.9},0).wait(1).to({x:11},0).wait(1).to({x:7.2},0).wait(1).to({x:3.4},0).wait(1).to({x:-0.5},0).wait(1).to({x:-4.3},0).wait(1).to({x:-8.2},0).wait(1).to({x:-12},0).wait(1).to({x:-15.9},0).wait(1).to({x:-19.7},0).wait(1).to({x:-23.6},0).wait(1).to({x:-27.4},0).wait(1).to({x:-31.3},0).wait(1).to({x:-35.1},0).wait(1).to({x:-39},0).wait(1).to({x:-42.8},0).wait(1).to({x:-46.7},0).wait(1).to({x:-50.5},0).wait(1).to({x:-54.4},0).wait(1).to({x:-58.2},0).wait(1).to({x:-62.1},0).wait(1).to({x:-65.9},0).wait(1).to({x:-69.8},0).wait(1).to({x:-73.6},0).wait(1).to({x:-77.5},0).wait(1).to({x:-81.3},0).wait(1).to({x:-85.2},0).wait(1).to({x:-89},0).wait(1).to({x:-92.9},0).wait(1).to({x:-96.7},0).wait(1).to({x:-100.6},0).wait(1).to({x:-104.4},0).wait(1).to({x:-108.3},0).wait(1).to({x:-112.1},0).wait(1).to({x:-116},0).wait(1).to({x:-119.8},0).wait(1).to({x:-123.6},0).wait(1).to({x:-127.5},0).wait(1).to({x:-131.3},0).wait(1).to({x:-135.2},0).wait(1).to({x:-139},0).wait(1).to({x:-142.9},0).wait(1).to({x:-146.7},0).wait(1).to({x:-150.6},0).wait(1).to({x:-154.4},0).wait(1).to({x:-158.3},0).wait(1).to({x:-162.1},0).wait(1).to({x:-166},0).wait(1).to({x:-169.8},0).wait(1).to({x:-173.7},0).wait(1).to({x:-177.5},0).wait(1).to({x:-181.4},0).wait(1).to({x:-185.2},0).wait(1).to({x:-189.1},0).wait(1).to({x:-192.9},0).wait(1).to({x:-196.8},0).wait(1).to({x:-200.6},0).wait(1).to({x:-204.5},0).wait(1).to({x:-208.3},0).wait(1).to({x:-212.2},0).wait(1).to({x:-216},0).wait(1).to({x:-219.9},0).wait(1).to({x:-223.7},0).wait(1).to({x:-227.6},0).wait(1).to({x:-231.4},0).wait(1).to({x:-235.3},0).wait(1).to({x:-239.1},0).wait(1).to({x:-242.9},0).wait(1).to({x:-246.8},0).wait(1).to({x:-250.6},0).wait(1).to({x:-254.5},0).wait(1).to({x:-258.3},0).wait(1).to({x:-262.2},0).wait(1).to({x:-266},0).wait(1).to({x:-269.9},0).wait(1).to({x:-273.7},0).wait(1).to({x:-277.6},0).wait(1).to({x:-281.4},0).wait(1).to({x:-285.3},0).wait(1).to({x:-289.1},0).wait(1).to({x:-293},0).wait(1).to({x:-296.8},0).wait(1).to({x:-300.7},0).wait(1).to({x:-304.5},0).wait(1).to({x:-308.4},0).wait(1).to({x:-312.2},0).wait(1).to({x:-316.1},0).wait(1).to({x:-319.9},0).wait(1).to({x:-323.8},0).wait(1).to({x:-327.6},0).wait(1).to({x:-331.5},0).wait(1).to({x:-335.3},0).wait(1).to({x:-339.2},0).wait(1).to({x:-343},0).wait(1).to({x:-346.9},0).wait(1).to({x:-350.7},0).wait(1).to({x:-354.6},0).wait(1).to({x:-358.4},0).wait(1).to({x:-362.2},0).wait(1).to({x:-366.1},0).wait(1).to({x:-369.9},0).wait(1).to({x:-373.8},0).wait(1).to({x:-377.6},0).wait(1).to({x:-381.5},0).wait(1).to({x:-385.3},0).wait(1).to({x:-389.2},0).wait(1).to({x:-393},0).wait(1).to({x:-396.9},0).wait(1).to({x:-400.7},0).wait(1).to({x:-404.6},0).wait(1).to({x:-408.4},0).wait(1).to({x:-412.3},0).wait(1).to({x:-416.1},0).wait(1).to({x:-420},0).wait(1).to({x:-423.8},0).wait(1).to({x:-427.7},0).wait(1).to({x:-431.5},0).wait(1).to({x:-435.4},0).wait(1).to({x:-439.2},0).wait(1).to({x:-443.1},0).wait(1).to({x:-446.9},0).wait(1).to({x:-450.8},0).wait(1).to({x:-454.6},0).wait(1).to({x:-458.5},0).wait(1).to({x:-462.3},0).wait(1).to({x:-466.2},0).wait(1).to({x:-470},0).wait(1).to({x:-473.8},0).wait(1).to({x:-477.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481,-294,1923,590);


(lib.front = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3_1();
	this.instance.parent = this;
	this.instance.setTransform(0,4,1,1,0,0,0,480,295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:960.5,x:474.1,y:4.1},0).wait(1).to({x:467.7},0).wait(1).to({x:461.3},0).wait(1).to({x:454.8},0).wait(1).to({x:448.4},0).wait(1).to({x:442},0).wait(1).to({x:435.5},0).wait(1).to({x:429.1},0).wait(1).to({x:422.7},0).wait(1).to({x:416.2},0).wait(1).to({x:409.8},0).wait(1).to({x:403.4},0).wait(1).to({x:396.9},0).wait(1).to({x:390.5},0).wait(1).to({x:384.1,y:4.2},0).wait(1).to({x:377.7},0).wait(1).to({x:371.2},0).wait(1).to({x:364.8},0).wait(1).to({x:358.4},0).wait(1).to({x:351.9},0).wait(1).to({x:345.5},0).wait(1).to({x:339.1},0).wait(1).to({x:332.6},0).wait(1).to({x:326.2},0).wait(1).to({x:319.8},0).wait(1).to({x:313.3},0).wait(1).to({x:306.9},0).wait(1).to({x:300.5},0).wait(1).to({x:294},0).wait(1).to({x:287.6,y:4.3},0).wait(1).to({x:281.2},0).wait(1).to({x:274.8},0).wait(1).to({x:268.3},0).wait(1).to({x:261.9},0).wait(1).to({x:255.5},0).wait(1).to({x:249},0).wait(1).to({x:242.6},0).wait(1).to({x:236.2},0).wait(1).to({x:229.7},0).wait(1).to({x:223.3},0).wait(1).to({x:216.9},0).wait(1).to({x:210.4},0).wait(1).to({x:204},0).wait(1).to({x:197.6},0).wait(1).to({x:191.1,y:4.4},0).wait(1).to({x:184.7},0).wait(1).to({x:178.3},0).wait(1).to({x:171.9},0).wait(1).to({x:165.4},0).wait(1).to({x:159},0).wait(1).to({x:152.6},0).wait(1).to({x:146.1},0).wait(1).to({x:139.7},0).wait(1).to({x:133.3},0).wait(1).to({x:126.8},0).wait(1).to({x:120.4},0).wait(1).to({x:114},0).wait(1).to({x:107.5},0).wait(1).to({x:101.1},0).wait(1).to({x:94.7,y:4.5},0).wait(1).to({x:88.2},0).wait(1).to({x:81.8},0).wait(1).to({x:75.4},0).wait(1).to({x:69},0).wait(1).to({x:62.5},0).wait(1).to({x:56.1},0).wait(1).to({x:49.7},0).wait(1).to({x:43.2},0).wait(1).to({x:36.8},0).wait(1).to({x:30.4},0).wait(1).to({x:23.9},0).wait(1).to({x:17.5},0).wait(1).to({x:11.1},0).wait(1).to({x:4.6},0).wait(1).to({x:-1.8,y:4.6},0).wait(1).to({x:-8.2},0).wait(1).to({x:-14.7},0).wait(1).to({x:-21.1},0).wait(1).to({x:-27.5},0).wait(1).to({x:-33.9},0).wait(1).to({x:-40.4},0).wait(1).to({x:-46.8},0).wait(1).to({x:-53.2},0).wait(1).to({x:-59.7},0).wait(1).to({x:-66.1},0).wait(1).to({x:-72.5},0).wait(1).to({x:-79},0).wait(1).to({x:-85.4},0).wait(1).to({x:-91.8},0).wait(1).to({x:-98.3,y:4.7},0).wait(1).to({x:-104.7},0).wait(1).to({x:-111.1},0).wait(1).to({x:-117.5},0).wait(1).to({x:-124},0).wait(1).to({x:-130.4},0).wait(1).to({x:-136.8},0).wait(1).to({x:-143.3},0).wait(1).to({x:-149.7},0).wait(1).to({x:-156.1},0).wait(1).to({x:-162.6},0).wait(1).to({x:-169},0).wait(1).to({x:-175.4},0).wait(1).to({x:-181.9},0).wait(1).to({x:-188.3},0).wait(1).to({x:-194.7,y:4.8},0).wait(1).to({x:-201.2},0).wait(1).to({x:-207.6},0).wait(1).to({x:-214},0).wait(1).to({x:-220.5},0).wait(1).to({x:-226.9},0).wait(1).to({x:-233.3},0).wait(1).to({x:-239.7},0).wait(1).to({x:-246.2},0).wait(1).to({x:-252.6},0).wait(1).to({x:-259},0).wait(1).to({x:-265.5},0).wait(1).to({x:-271.9},0).wait(1).to({x:-278.3},0).wait(1).to({x:-284.8},0).wait(1).to({x:-291.2,y:4.9},0).wait(1).to({x:-297.6},0).wait(1).to({x:-304.1},0).wait(1).to({x:-310.5},0).wait(1).to({x:-316.9},0).wait(1).to({x:-323.4},0).wait(1).to({x:-329.8},0).wait(1).to({x:-336.2},0).wait(1).to({x:-342.6},0).wait(1).to({x:-349.1},0).wait(1).to({x:-355.5},0).wait(1).to({x:-361.9},0).wait(1).to({x:-368.4},0).wait(1).to({x:-374.8},0).wait(1).to({x:-381.2},0).wait(1).to({x:-387.7,y:5},0).wait(1).to({x:-394.1},0).wait(1).to({x:-400.5},0).wait(1).to({x:-407},0).wait(1).to({x:-413.4},0).wait(1).to({x:-419.8},0).wait(1).to({x:-426.2},0).wait(1).to({x:-432.7},0).wait(1).to({x:-439.1},0).wait(1).to({x:-445.5},0).wait(1).to({x:-452},0).wait(1).to({x:-458.4},0).wait(1).to({x:-464.8},0).wait(1).to({x:-471.3},0).wait(1).to({x:-477.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481,-291,1923,590);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-1,1,1,0,0,0,480,295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:957,regY:297.5,x:474.7,y:1.5},0).wait(1).to({x:472.3},0).wait(1).to({x:469.9},0).wait(1).to({x:467.5},0).wait(1).to({x:465.1},0).wait(1).to({x:462.7},0).wait(1).to({x:460.3},0).wait(1).to({x:457.9},0).wait(1).to({x:455.5},0).wait(1).to({x:453.1},0).wait(1).to({x:450.7},0).wait(1).to({x:448.4},0).wait(1).to({x:446},0).wait(1).to({x:443.6},0).wait(1).to({x:441.2},0).wait(1).to({x:438.8},0).wait(1).to({x:436.4},0).wait(1).to({x:434},0).wait(1).to({x:431.6},0).wait(1).to({x:429.2},0).wait(1).to({x:426.8},0).wait(1).to({x:424.4},0).wait(1).to({x:422},0).wait(1).to({x:419.7},0).wait(1).to({x:417.3},0).wait(1).to({x:414.9},0).wait(1).to({x:412.5},0).wait(1).to({x:410.1},0).wait(1).to({x:407.7},0).wait(1).to({x:405.3},0).wait(1).to({x:402.9},0).wait(1).to({x:400.5},0).wait(1).to({x:398.1},0).wait(1).to({x:395.7},0).wait(1).to({x:393.3},0).wait(1).to({x:391},0).wait(1).to({x:388.6},0).wait(1).to({x:386.2},0).wait(1).to({x:383.8},0).wait(1).to({x:381.4},0).wait(1).to({x:379},0).wait(1).to({x:376.6},0).wait(1).to({x:374.2},0).wait(1).to({x:371.8},0).wait(1).to({x:369.4},0).wait(1).to({x:367},0).wait(1).to({x:364.6},0).wait(1).to({x:362.3},0).wait(1).to({x:359.9},0).wait(1).to({x:357.5},0).wait(1).to({x:355.1},0).wait(1).to({x:352.7},0).wait(1).to({x:350.3},0).wait(1).to({x:347.9},0).wait(1).to({x:345.5},0).wait(1).to({x:343.1},0).wait(1).to({x:340.7},0).wait(1).to({x:338.3},0).wait(1).to({x:335.9},0).wait(1).to({x:333.6},0).wait(1).to({x:331.2},0).wait(1).to({x:328.8},0).wait(1).to({x:326.4},0).wait(1).to({x:324},0).wait(1).to({x:321.6},0).wait(1).to({x:319.2},0).wait(1).to({x:316.8},0).wait(1).to({x:314.4},0).wait(1).to({x:312},0).wait(1).to({x:309.6},0).wait(1).to({x:307.2},0).wait(1).to({x:304.9},0).wait(1).to({x:302.5},0).wait(1).to({x:300.1},0).wait(1).to({x:297.7},0).wait(1).to({x:295.3},0).wait(1).to({x:292.9},0).wait(1).to({x:290.5},0).wait(1).to({x:288.1},0).wait(1).to({x:285.7},0).wait(1).to({x:283.3},0).wait(1).to({x:280.9},0).wait(1).to({x:278.5},0).wait(1).to({x:276.2},0).wait(1).to({x:273.8},0).wait(1).to({x:271.4},0).wait(1).to({x:269},0).wait(1).to({x:266.6},0).wait(1).to({x:264.2},0).wait(1).to({x:261.8},0).wait(1).to({x:259.4},0).wait(1).to({x:257},0).wait(1).to({x:254.6},0).wait(1).to({x:252.2},0).wait(1).to({x:249.8},0).wait(1).to({x:247.5},0).wait(1).to({x:245.1},0).wait(1).to({x:242.7},0).wait(1).to({x:240.3},0).wait(1).to({x:237.9},0).wait(1).to({x:235.5},0).wait(1).to({x:233.1},0).wait(1).to({x:230.7},0).wait(1).to({x:228.3},0).wait(1).to({x:225.9},0).wait(1).to({x:223.5},0).wait(1).to({x:221.1},0).wait(1).to({x:218.8},0).wait(1).to({x:216.4},0).wait(1).to({x:214},0).wait(1).to({x:211.6},0).wait(1).to({x:209.2},0).wait(1).to({x:206.8},0).wait(1).to({x:204.4},0).wait(1).to({x:202},0).wait(1).to({x:199.6},0).wait(1).to({x:197.2},0).wait(1).to({x:194.8},0).wait(1).to({x:192.4},0).wait(1).to({x:190.1},0).wait(1).to({x:187.7},0).wait(1).to({x:185.3},0).wait(1).to({x:182.9},0).wait(1).to({x:180.5},0).wait(1).to({x:178.1},0).wait(1).to({x:175.7},0).wait(1).to({x:173.3},0).wait(1).to({x:170.9},0).wait(1).to({x:168.5},0).wait(1).to({x:166.1},0).wait(1).to({x:163.7},0).wait(1).to({x:161.4},0).wait(1).to({x:159},0).wait(1).to({x:156.6},0).wait(1).to({x:154.2},0).wait(1).to({x:151.8},0).wait(1).to({x:149.4},0).wait(1).to({x:147},0).wait(1).to({x:144.6},0).wait(1).to({x:142.2},0).wait(1).to({x:139.8},0).wait(1).to({x:137.4},0).wait(1).to({x:135.1},0).wait(1).to({x:132.7},0).wait(1).to({x:130.3},0).wait(1).to({x:127.9},0).wait(1).to({x:125.5},0).wait(1).to({x:123.1},0).wait(1).to({x:120.7},0).wait(1).to({x:118.3},0).wait(1).to({x:115.9},0).wait(1).to({x:113.5},0).wait(1).to({x:111.1},0).wait(1).to({x:108.7},0).wait(1).to({x:106.4},0).wait(1).to({x:104},0).wait(1).to({x:101.6},0).wait(1).to({x:99.2},0).wait(1).to({x:96.8},0).wait(1).to({x:94.4},0).wait(1).to({x:92},0).wait(1).to({x:89.6},0).wait(1).to({x:87.2},0).wait(1).to({x:84.8},0).wait(1).to({x:82.4},0).wait(1).to({x:80},0).wait(1).to({x:77.7},0).wait(1).to({x:75.3},0).wait(1).to({x:72.9},0).wait(1).to({x:70.5},0).wait(1).to({x:68.1},0).wait(1).to({x:65.7},0).wait(1).to({x:63.3},0).wait(1).to({x:60.9},0).wait(1).to({x:58.5},0).wait(1).to({x:56.1},0).wait(1).to({x:53.7},0).wait(1).to({x:51.3},0).wait(1).to({x:49},0).wait(1).to({x:46.6},0).wait(1).to({x:44.2},0).wait(1).to({x:41.8},0).wait(1).to({x:39.4},0).wait(1).to({x:37},0).wait(1).to({x:34.6},0).wait(1).to({x:32.2},0).wait(1).to({x:29.8},0).wait(1).to({x:27.4},0).wait(1).to({x:25},0).wait(1).to({x:22.6},0).wait(1).to({x:20.3},0).wait(1).to({x:17.9},0).wait(1).to({x:15.5},0).wait(1).to({x:13.1},0).wait(1).to({x:10.7},0).wait(1).to({x:8.3},0).wait(1).to({x:5.9},0).wait(1).to({x:3.5},0).wait(1).to({x:1.1},0).wait(1).to({x:-1.3},0).wait(1).to({x:-3.7},0).wait(1).to({x:-6.1},0).wait(1).to({x:-8.4},0).wait(1).to({x:-10.8},0).wait(1).to({x:-13.2},0).wait(1).to({x:-15.6},0).wait(1).to({x:-18},0).wait(1).to({x:-20.4},0).wait(1).to({x:-22.8},0).wait(1).to({x:-25.2},0).wait(1).to({x:-27.6},0).wait(1).to({x:-30},0).wait(1).to({x:-32.4},0).wait(1).to({x:-34.8},0).wait(1).to({x:-37.1},0).wait(1).to({x:-39.5},0).wait(1).to({x:-41.9},0).wait(1).to({x:-44.3},0).wait(1).to({x:-46.7},0).wait(1).to({x:-49.1},0).wait(1).to({x:-51.5},0).wait(1).to({x:-53.9},0).wait(1).to({x:-56.3},0).wait(1).to({x:-58.7},0).wait(1).to({x:-61.1},0).wait(1).to({x:-63.5},0).wait(1).to({x:-65.8},0).wait(1).to({x:-68.2},0).wait(1).to({x:-70.6},0).wait(1).to({x:-73},0).wait(1).to({x:-75.4},0).wait(1).to({x:-77.8},0).wait(1).to({x:-80.2},0).wait(1).to({x:-82.6},0).wait(1).to({x:-85},0).wait(1).to({x:-87.4},0).wait(1).to({x:-89.8},0).wait(1).to({x:-92.2},0).wait(1).to({x:-94.5},0).wait(1).to({x:-96.9},0).wait(1).to({x:-99.3},0).wait(1).to({x:-101.7},0).wait(1).to({x:-104.1},0).wait(1).to({x:-106.5},0).wait(1).to({x:-108.9},0).wait(1).to({x:-111.3},0).wait(1).to({x:-113.7},0).wait(1).to({x:-116.1},0).wait(1).to({x:-118.5},0).wait(1).to({x:-120.9},0).wait(1).to({x:-123.2},0).wait(1).to({x:-125.6},0).wait(1).to({x:-128},0).wait(1).to({x:-130.4},0).wait(1).to({x:-132.8},0).wait(1).to({x:-135.2},0).wait(1).to({x:-137.6},0).wait(1).to({x:-140},0).wait(1).to({x:-142.4},0).wait(1).to({x:-144.8},0).wait(1).to({x:-147.2},0).wait(1).to({x:-149.6},0).wait(1).to({x:-151.9},0).wait(1).to({x:-154.3},0).wait(1).to({x:-156.7},0).wait(1).to({x:-159.1},0).wait(1).to({x:-161.5},0).wait(1).to({x:-163.9},0).wait(1).to({x:-166.3},0).wait(1).to({x:-168.7},0).wait(1).to({x:-171.1},0).wait(1).to({x:-173.5},0).wait(1).to({x:-175.9},0).wait(1).to({x:-178.2},0).wait(1).to({x:-180.6},0).wait(1).to({x:-183},0).wait(1).to({x:-185.4},0).wait(1).to({x:-187.8},0).wait(1).to({x:-190.2},0).wait(1).to({x:-192.6},0).wait(1).to({x:-195},0).wait(1).to({x:-197.4},0).wait(1).to({x:-199.8},0).wait(1).to({x:-202.2},0).wait(1).to({x:-204.6},0).wait(1).to({x:-206.9},0).wait(1).to({x:-209.3},0).wait(1).to({x:-211.7},0).wait(1).to({x:-214.1},0).wait(1).to({x:-216.5},0).wait(1).to({x:-218.9},0).wait(1).to({x:-221.3},0).wait(1).to({x:-223.7},0).wait(1).to({x:-226.1},0).wait(1).to({x:-228.5},0).wait(1).to({x:-230.9},0).wait(1).to({x:-233.3},0).wait(1).to({x:-235.6},0).wait(1).to({x:-238},0).wait(1).to({x:-240.4},0).wait(1).to({x:-242.8},0).wait(1).to({x:-245.2},0).wait(1).to({x:-247.6},0).wait(1).to({x:-250},0).wait(1).to({x:-252.4},0).wait(1).to({x:-254.8},0).wait(1).to({x:-257.2},0).wait(1).to({x:-259.6},0).wait(1).to({x:-262},0).wait(1).to({x:-264.3},0).wait(1).to({x:-266.7},0).wait(1).to({x:-269.1},0).wait(1).to({x:-271.5},0).wait(1).to({x:-273.9},0).wait(1).to({x:-276.3},0).wait(1).to({x:-278.7},0).wait(1).to({x:-281.1},0).wait(1).to({x:-283.5},0).wait(1).to({x:-285.9},0).wait(1).to({x:-288.3},0).wait(1).to({x:-290.7},0).wait(1).to({x:-293},0).wait(1).to({x:-295.4},0).wait(1).to({x:-297.8},0).wait(1).to({x:-300.2},0).wait(1).to({x:-302.6},0).wait(1).to({x:-305},0).wait(1).to({x:-307.4},0).wait(1).to({x:-309.8},0).wait(1).to({x:-312.2},0).wait(1).to({x:-314.6},0).wait(1).to({x:-317},0).wait(1).to({x:-319.4},0).wait(1).to({x:-321.7},0).wait(1).to({x:-324.1},0).wait(1).to({x:-326.5},0).wait(1).to({x:-328.9},0).wait(1).to({x:-331.3},0).wait(1).to({x:-333.7},0).wait(1).to({x:-336.1},0).wait(1).to({x:-338.5},0).wait(1).to({x:-340.9},0).wait(1).to({x:-343.3},0).wait(1).to({x:-345.7},0).wait(1).to({x:-348.1},0).wait(1).to({x:-350.4},0).wait(1).to({x:-352.8},0).wait(1).to({x:-355.2},0).wait(1).to({x:-357.6},0).wait(1).to({x:-360},0).wait(1).to({x:-362.4},0).wait(1).to({x:-364.8},0).wait(1).to({x:-367.2},0).wait(1).to({x:-369.6},0).wait(1).to({x:-372},0).wait(1).to({x:-374.4},0).wait(1).to({x:-376.8},0).wait(1).to({x:-379.1},0).wait(1).to({x:-381.5},0).wait(1).to({x:-383.9},0).wait(1).to({x:-386.3},0).wait(1).to({x:-388.7},0).wait(1).to({x:-391.1},0).wait(1).to({x:-393.5},0).wait(1).to({x:-395.9},0).wait(1).to({x:-398.3},0).wait(1).to({x:-400.7},0).wait(1).to({x:-403.1},0).wait(1).to({x:-405.5},0).wait(1).to({x:-407.8},0).wait(1).to({x:-410.2},0).wait(1).to({x:-412.6},0).wait(1).to({x:-415},0).wait(1).to({x:-417.4},0).wait(1).to({x:-419.8},0).wait(1).to({x:-422.2},0).wait(1).to({x:-424.6},0).wait(1).to({x:-427},0).wait(1).to({x:-429.4},0).wait(1).to({x:-431.8},0).wait(1).to({x:-434.2},0).wait(1).to({x:-436.5},0).wait(1).to({x:-438.9},0).wait(1).to({x:-441.3},0).wait(1).to({x:-443.7},0).wait(1).to({x:-446.1},0).wait(1).to({x:-448.5},0).wait(1).to({x:-450.9},0).wait(1).to({x:-453.3},0).wait(1).to({x:-455.7},0).wait(1).to({x:-458.1},0).wait(1).to({x:-460.5},0).wait(1).to({x:-462.9},0).wait(1).to({x:-465.2},0).wait(1).to({x:-467.6},0).wait(1).to({x:-470},0).wait(1).to({x:-472.4},0).wait(1).to({x:-474.8},0).wait(1).to({x:-477.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-294,1914,591);


(lib.StartSc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bobfloat();
	this.instance.parent = this;
	this.instance.setTransform(382,86);

	this.text = new cjs.Text("המסע חזרה הביתה", "bold 32px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 279;
	this.text.parent = this;
	this.text.setTransform(3.3,-132.9);
	this.text.shadow = new cjs.Shadow("rgba(51,51,51,1)",3,3,4);

	this.text_1 = new cjs.Text("פיקסל בוב", "bold 96px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 109;
	this.text_1.lineWidth = 411;
	this.text_1.parent = this;
	this.text_1.setTransform(0,-245.9);
	this.text_1.shadow = new cjs.Shadow("rgba(51,51,51,1)",3,3,4);

	this.combobox = new lib.combobox();
	this.combobox.parent = this;
	this.combobox.setTransform(0,75.6);

	this.instance_1 = new lib.menubg();
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99CC66").ss(1,1,1).p("A8WpXMA4tAAAIAASvMg4tAAAg");
	this.shape.setTransform(110.5,-109.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("A8WJYIAAyvMA4tAAAIAASvg");
	this.shape_1.setTransform(110.5,-109.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.combobox},{t:this.text_1},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.StartSc, new cjs.Rectangle(-486,-301,1001.1,663.5), null);


(lib.Endscr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("שבבים מתאימים", "bold 25px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 314;
	this.text.parent = this;
	this.text.setTransform(691.1,276);

	this.text_1 = new cjs.Text("שבבים לא מתאימים", "bold 25px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 314;
	this.text_1.parent = this;
	this.text_1.setTransform(260,276);

	this.NavFinsh = new lib.endmenubar();
	this.NavFinsh.parent = this;
	this.NavFinsh.setTransform(476.9,589.7);

	this.text_2 = new cjs.Text("*שבבים שלא זיהיתם בנסיון הראשון", "24px 'Arial'", "#FF5D82");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 349;
	this.text_2.parent = this;
	this.text_2.setTransform(480,233.1);

	this.text_3 = new cjs.Text("הביצועים שלכם", "bold 35px 'Arial'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 41;
	this.text_3.lineWidth = 314;
	this.text_3.parent = this;
	this.text_3.setTransform(480,190);

	this.timeShow = new cjs.Text("", "bold 32px 'Arial'", "#FFFFFF");
	this.timeShow.name = "timeShow";
	this.timeShow.textAlign = "center";
	this.timeShow.lineHeight = 38;
	this.timeShow.lineWidth = 86;
	this.timeShow.parent = this;
	this.timeShow.setTransform(293.9,123.9);

	this.text_4 = new cjs.Text(":זמן", "24px 'Arial'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 29;
	this.text_4.lineWidth = 41;
	this.text_4.parent = this;
	this.text_4.setTransform(361.3,132.8);

	this.ScoreShow = new cjs.Text("", "bold 48px 'Arial'", "#FFFFFF");
	this.ScoreShow.name = "ScoreShow";
	this.ScoreShow.textAlign = "center";
	this.ScoreShow.lineHeight = 56;
	this.ScoreShow.lineWidth = 86;
	this.ScoreShow.parent = this;
	this.ScoreShow.setTransform(463.3,112.5);

	this.text_5 = new cjs.Text(":ציון", "24px 'Arial'", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 29;
	this.text_5.lineWidth = 41;
	this.text_5.parent = this;
	this.text_5.setTransform(530.7,132.8);

	this.subject = new cjs.Text("", "36px 'Arial'", "#FFFFFF");
	this.subject.name = "subject";
	this.subject.textAlign = "right";
	this.subject.lineHeight = 42;
	this.subject.lineWidth = 410;
	this.subject.parent = this;
	this.subject.setTransform(442.1,27.8);

	this.text_6 = new cjs.Text("-  סיימתם את המשחק", "bold 36px 'Arial'", "#FFFFFF");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 42;
	this.text_6.lineWidth = 410;
	this.text_6.parent = this;
	this.text_6.setTransform(637.2,28.3);

	this.instance = new lib.scorebg();
	this.instance.parent = this;
	this.instance.setTransform(480,295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_6},{t:this.subject},{t:this.text_5},{t:this.ScoreShow},{t:this.text_4},{t:this.timeShow},{t:this.text_3},{t:this.text_2},{t:this.NavFinsh},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Endscr, new cjs.Rectangle(-15.1,0,984,998.6), null);


(lib.Backround = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// front
	this.instance = new lib.Front();
	this.instance.parent = this;
	this.instance.setTransform(1,3);

	this.instance_1 = new lib.Middle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,4);

	this.instance_2 = new lib.Back();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,4);

	this.front = new lib.front();
	this.front.parent = this;
	this.front.setTransform(480,295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.front}]},1).wait(1));

	// mid
	this.mid = new lib.mid();
	this.mid.parent = this;
	this.mid.setTransform(480,298);
	this.mid._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mid).wait(1).to({_off:false},0).wait(1));

	// back
	this.back = new lib.back();
	this.back.parent = this;
	this.back.setTransform(481,296);
	this.back._off = true;

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,3,960,591);


// stage content:
(lib.PixelBoB_Latest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var home = this;
		
		var scaleValue = 0;
		
		///////////////////////תנועה
		var JumpSpeed = 3;
		var currentjumpframe = 24;
		var AnswerSpeed = 10;
		var ShipSpeed = 10;
		var StartAnswer = false;
		var StartJump = false;
		var Paused = 0;
		
		//////////////////////משתני מוזיקה
		var isbg=0;
		var isfx=0;
		var runningbg;
		var jumpsound = 0;
		//////////////////////שינוי צבע לבוב
		var rightwrong = 0;
		
		//////////////////////אינטרבלים
		var AnswersInterval;
		var BobInterval;
		var intersectInterval;
		var TimeInterval;
		var ShipInterval;
		var StartTimeFirst = 0;
		var StartTimeFirstSpace = 0;
		
		////////////////////אנימציית סיום
		var endanimation = 2;
		////////////////////משתני עזר 
		var placeX = 520;
		var placeY = 335;
		var placeX2 = 70;
		var placeY2 = 335;
		var ThreeInaRow = 0;
		var ThreeInaRow2 = 0;
		var PlacerY = 250;
		
		var GameName = "" ;
		var GameDo = "" ;
		var GameDont = "";
		
		
		////////////////////מערך גלובלי למסיחים
		
		var mychoice = 0;
		
		var AnswersArray = [] ;
		var RecoredArray = [] ;
		
		var AnswersArray1 = [
		 
			[false, "Pic", lib.pic_fly, "1"],
			[false, "Pic", lib.pic_eagle, "1"],
			[false, "Text", "צב", "1"],
			[false, "Text","לטאה", "1"],
			[true, "Pic", lib.pic_seal, "1"],
			[true, "Pic", lib.pic_zebra, "1"],
			[true, "Text", "סוס", "1"],
			[true, "Text", "דולפין", "1"],
			[true, "Text", "פרה", "1"],
			[true, "Text", "חזיר", "1"],
			[true, "Pic", lib.pic_fox, "1"],
			[true, "Pic", lib.pic_giraffe, "1"]
			
		
		];
		
		var AnswersArray2 = [
			[false, "Pic", lib.pic_tomato, "1"],
			[false, "Pic", lib.pic_watermelon, "1"],
			[false, "Pic", lib.pic_pineapple, "1"],
			[false, "Text", "חציל", "1"],
			[true, "Pic", lib.pic_cherry, "1"],
			[true, "Pic", lib.pic_banana, "1"],
			[true, "Pic", lib.pic_apple, "1"],
			[true, "Text", "משמש", "1"],
			[true, "Text", "אגס", "1"],
			[true, "Text", "קשיו", "1"],
			[true, "Text", "אפרסק", "1"],
			[true, "Text", "תפוז", "1"]
		];
		
		
		
		///////////////////תיעוד,ניקוד,ציון
		var TrueAnswerCounter = 0;
		var OverAllScore = 0;
		var OverAllTime = 0;
		var TotalAnswers;
		var TotalFalse =0;
		var TotalTrue = 0;
		
		////////////////////זיהוי מסיחים
		var RndAnswerNum;
		var AnswerChacker;
		var PiChacker;
		var CurrentAnswer;
		var RecordRecentAnswer = CurrentAnswer;
		var FalseNagative;
		
		
		
		
		
		
		
		
		///////////////////מסיח הבא
		function RefreshAnswer() {
			RndAnswerNum = Math.floor((Math.random(0) * (AnswersArray.length -1)));
			AnswerChacker = AnswersArray[RndAnswerNum][0];
			PiChacker = AnswersArray[RndAnswerNum][1];
			CurrentAnswer = AnswersArray[RndAnswerNum][2];
			if (CurrentAnswer == RecordRecentAnswer)
			{
				CurrentAnswer = AnswersArray[Math.floor((Math.random(0) * (AnswersArray.length)))][2];
			}
			FalseNagative = AnswersArray[RndAnswerNum][3];
			
		
		}
		
		
		//////////////////הפעלת מסך פתיחה
		
		
		
		
		StartMenu();
		
		
		
		
		
		
		//////////// פונקצית העלאת התפריט פתיחה 
		function StartMenu() {
			var subjects = ["ללא נושא", "זהה את היונק", "גדל על עץ?"];
			//משתנה שיעזור לברר איזה ערך מסומן בכל פעם בקומבו בוקס. עם הפתיחה מופיע הערך הראשון ולכן הערך ההתחלתי הוא 0
			
		
			var fl_TF = new createjs.Text();
			fl_TF.x = 200;
			fl_TF.y = 100;
			fl_TF.color = "#ff7700";
			fl_TF.font = "20px Arial";
			stage.addChild(fl_TF);
		
		
			var myStartScreen = new lib.StartSc();
			stage.addChild(myStartScreen);
			myStartScreen.x = 481.65;
			myStartScreen.y = 295;
			myStartScreen.name = "StartScreen";
			//הוספת הקומבו לבמה
			
			//מוזיקת התחלה אפשר להשתיק אחרי זה
			var menumusic = createjs.Sound.play("opensong",0,0,0,-1,0.7);
		
			var forcombo = stage.getChildByName("StartScreen").combobox;
			/*
			forcombo.x = 450;
			forcombo.y = 150;
			stage.addChild(forcombo);
			*/
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.visible = false;
		
		
		
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
			//בעת שינוי ערך בקומבו
			function mycb_change(evt) {
				fl_TF.text = ""; //ניקוי הבחירה הקודמת
				//שימרת הערך שנבחר בקומבו
				console.log(evt.currentTarget.value);
				mychoice = evt.currentTarget.value;
				//אם נבחר הערך הראשון - "בחר נושא
				if (mychoice == 0) {
					//ניטרול כפתור "בחר
					forcombo.startbtn.visible=false;
					forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
				} else {
					//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
					forcombo.startbtn.visible=true;
					forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
				}
				
				if(mychoice == 1)
				{
					
				if (AnswersArray.length > 0 )
				{
				AnswersArray.length = 0 ;
				TotalTrue = 0
				}
				
				AnswersArray = AnswersArray1;
				RecoredArray = AnswersArray1.slice(0);
					
				RndAnswerNum = Math.floor((Math.random(0) * (AnswersArray.length -1 )))
		        AnswerChacker = AnswersArray[RndAnswerNum][0];
		        PiChacker = AnswersArray[RndAnswerNum][1];
		        CurrentAnswer = AnswersArray[RndAnswerNum][2];
		        FalseNagative = AnswersArray[RndAnswerNum][3];
				TotalAnswers = AnswersArray.length;
		        GameName =	"זהה את היונק";
			    GameDo = "איספו חיות ממשפחת היונקים" ;
				GameDont = "המנעו מחיות ממשפחות אחרות" ;
				
				for (i = 0; i < TotalAnswers; i++)
					{
			    if (AnswersArray[i][0] == false) {
		
				TotalFalse++
		        
			     }
		         }
				 
				 for (i = 0; i < TotalAnswers; i++)
					{
			    if (AnswersArray[i][0] == true) {
		
				TotalTrue ++
		        
			     }
		         }
				 
					
				}
				
				if(mychoice == 2)
				{
				
		        if (AnswersArray.length > 0 )
				{
				AnswersArray.length = 0 ;
				TotalTrue = 0
				}
				
				AnswersArray = AnswersArray2;
				RecoredArray = AnswersArray2.slice(0);
				
				RndAnswerNum = Math.floor((Math.random(0) * (AnswersArray.length )))
		        AnswerChacker = AnswersArray[RndAnswerNum][0];
		        PiChacker = AnswersArray[RndAnswerNum][1];
		        CurrentAnswer = AnswersArray[RndAnswerNum][2];
		        FalseNagative = AnswersArray[RndAnswerNum][3];
				TotalAnswers = AnswersArray.length;
					
				GameName = " ? גדל על עץ";
				GameDo = "אספו את הפריטים הגדלים על עץ";
				GameDont = "המנעו מהפריטים האחרים ";
					
					for (i = 0; i < TotalAnswers; i++)
					{
			        if (AnswersArray[i][0] == false) {
		
				      TotalFalse++
		        
			     }
		         }	
				 		 for (i = 0; i < TotalAnswers; i++)
					{
			    if (AnswersArray[i][0] == true) {
		
				TotalTrue ++
		        
			     }
		         }
					
				}
			}
		
		
			////////////////// מחיקת מסך הפתיחה ותחילת וקריאה ליצירת המסך הראשוני
			function fl_ClickToPosition() {
				
				stage.removeChild(forcombo);
				stage.removeChild(myStartScreen);
				CreatObjects();
				menumusic.paused=true;
		
			}
		
		
		
			
		
		}
			//////////////////יצירת אובייקטים
		
		
		function CreatObjects() {
		
				
				
				var myBackRound = new lib.Backround();
				stage.addChild(myBackRound);
				myBackRound.x = 0;
				myBackRound.y = 0;
				myBackRound.name = "Backround";
		
		
				/////////////// יצירת ומיקום הרצפה
				var myGround = new lib.Ground();
				stage.addChild(myGround);
				myGround.x = 0;
				myGround.y = 512;
				myGround.name = "Ground";
				myGround.gotoAndStop(0);
		
				/////////////// יצירת ומיקום בוב
				var myBob = new lib.bob();
				stage.addChild(myBob);
				myBob.x = 105;
				myBob.y = 460;
				myBob.name = "Bob";
				
				
				////////////// יצירת כפתור מוזיקה
				var musicbtn = new lib.musicbtn();
				musicbtn.x=98;
				musicbtn.y=34;
				musicbtn.name="musicbtn";
				stage.addChild(musicbtn);
				musicbtn.addEventListener("click", function()
				{
				if (isbg==1)
				{
				runningbg.paused=true;
				isbg=2;
				musicbtn.play();
				}
				else
				{
				runningbg.paused=false;
				isbg=1;
				musicbtn.play();
				}
				});
				
				//יצירת כפתור סאונד
					////////////// יצירת כפתור מוזיקה
				var soundbtn = new lib.sfxbtn();
				soundbtn.x=38;
				soundbtn.y=34;
				soundbtn.name="sfxbtn";
				stage.addChild(soundbtn);
				soundbtn.addEventListener("click", function()
				{
				if (isfx==0)
				{
				soundbtn.play();
				isfx=1;
				}
				else
				{
				isfx=0;
				
				soundbtn.play();
				}
				});
		
		
				//////////////////////יצירת בר ההיתקדמות
				var Progreson = new lib.Prog();
				stage.addChild(Progreson);
				Progreson.x = 875;
				Progreson.y = 540;
				Progreson.name = "Progreson";
		
		       //////////////////////////// יצירת מיספר התשובות הנכונות האפשריות
		        var TrueAnsCount = new createjs.Text();
				TrueAnsCount.x = 35;
				TrueAnsCount.y = 4;
				TrueAnsCount.color = "#FFFFFF";
				TrueAnsCount.font = "bold 22px Arial";
				TrueAnsCount.text = TotalTrue;
				TrueAnsCount.name = "TrueAnsCount ";
				Progreson.addChild(TrueAnsCount);		
				
				/////////////////////יצירת ניקוד בבר ההיתקדמות
				var CurrentTrueAnswers = stage.getChildByName("Progreson").CurrentTrueAnswers;
				CurrentTrueAnswers.name="TrueCount";
				CurrentTrueAnswers.text = TrueAnswerCounter;
				
		 
				////////////////////// יצירת החללית
				var Ship = new lib.Ship();
				stage.addChild(Ship);
				Ship.x = 1090;
				Ship.y = 296;
				Ship.name = "MyShip";
				
		
		       
			    //////////////////////יצירת ההנחיה
				var Instraction = new lib.Insc();
				stage.addChild(Instraction);
				Instraction.x = 480;
				Instraction.y = 0;
				Instraction.name = "MyInstraction";
				
				/////////////////////יצירת הכותרת להנחיה
				
				var InstractionTitle = new createjs.Text();
				InstractionTitle.x = -40;
				InstractionTitle.y = 5;
				InstractionTitle.color = "#000";
				InstractionTitle.font = "bold 14px Arial";
				InstractionTitle.text = GameName;
				InstractionTitle.name = "InstractionText";
				Instraction.addChild(InstractionTitle );
				
				/////////////////////יצירת ההנחיה לביצוע
		        var InstractionText = new createjs.Text();
				InstractionText.x = -120;
				InstractionText.y =54;
				InstractionText.color = "#000";
				InstractionText.font = "22px Arial";
				InstractionText.text = GameDo;
				InstractionText.name = "InstractionText";
				Instraction.addChild(InstractionText);		
				
				
				///////////////////////////////הנחיה ללא לבצע 
				var InstractionNotText = new createjs.Text();
				InstractionNotText.x = -120;
				InstractionNotText.y = 90;
				InstractionNotText.color = "#000";
				InstractionNotText.font = "22px Arial";
				InstractionNotText.text = GameDont;
				InstractionNotText.name = "InstractionText";
				Instraction.addChild(InstractionNotText);		
		
		
		
				window.addEventListener("keydown", KeyPress);
				
				
		
		
			}
		
		
		
		
		
		
		
		
		///////////////////////פונצקיה לחיצה על רווח
		function KeyPress(e) {
		
			
			StartTimeFirst++
		if (StartTimeFirst == 1) 
			{
			
				////////////////////יצירת האובייקט ומיקום השבבים
				var CurrentAnsDisplay = new lib.Dist();
				stage.addChildAt(CurrentAnsDisplay,3);
				CurrentAnsDisplay.x = 1050;
				CurrentAnsDisplay.y = 425;
				CurrentAnsDisplay.name = "CurrentAnsDisplay";
		
		
				////////////////// יצירת הטקסט בתוך הקופסא
				var AnswerTxt = new createjs.Text();
				AnswerTxt.color = "#000";
				AnswerTxt.font = "22px Arial";
				AnswerTxt.text = CurrentAnswer;
				AnswerTxt.name = "AnswerTxt";
				CurrentAnsDisplay.addChild(AnswerTxt);
			 //////////////////////// במידה ותמונה יצירת תמונה 	
				if (PiChacker == "Pic") {
		
		 
					AnswerTxt.text = "";
					var Pic = new CurrentAnswer;
			
					CurrentAnsDisplay.addChild(Pic);
					
					scaleValue = resizeImage(CurrentAnsDisplay,Pic) - 0.35;
					Pic.scaleX = scaleValue;
					Pic.scaleY = scaleValue;
					
					
					Pic.name = "Picname";
					CurrentAnsDisplay.text = " ";
				}
				
				
				
			}
		
			if (e.keyCode == 32) {
				
				StartTimeFirstSpace++;
		
			if (StartTimeFirstSpace == 1) 
				{
				//////////////////// יצירת כפתור הפאוז
				var Pausedbtn = new lib.PauseBTN();
				stage.addChild(Pausedbtn);
				Pausedbtn.x = 158;
				Pausedbtn.y = 33;
				Pausedbtn.name = "MyPausedbtn";
					
				Pausedbtn.addEventListener("click", PausedClick);	
					
				TimeInterval = setInterval(TimeCounter, 1000);
				}
				   if(jumpsound==0&&Paused==0&&isfx==0)
				   {
					createjs.Sound.play("jumpSound",1,0,0,0);
					jumpsound=1;
					setTimeout(function()
					   {
						jumpsound=0;   
					   },1500);
				   }
				
				if (StartJump == false) {
		
					StartJump = true;
					if(isbg==0)
					{
					runningbg = createjs.Sound.play("runningsong",0,0,0,-1,0.1);
					isbg=1;
					}
					BobInterval = setInterval(MoveBob, 10);
					intersectInterval = setInterval(ChackHit, 30);
		
		
				}
		
				if (StartAnswer == false) {
					StartAnswer = true;
					AnswersInterval = setInterval(MoveAnswers, 50);
					stage.getChildByName("Backround").gotoAndStop(1);
					stage.getChildByName("Bob").gotoAndPlay(18);
		
				}
		
			}
		
		
		
		}
		
		//////////////////// פונקציה למדידת זמן
		
		function TimeCounter() {
		
			if (Paused != 1) {
				OverAllTime++
				console.log(OverAllTime);
			}
		
		
		}
		
		////////////////// פונקציה לתנועה של בוב
		function MoveBob() {
		
			if (Paused == 0) {
				var getBob = stage.getChildByName("Bob");
				if (StartJump == true) {
		
					getBob.y -= JumpSpeed;
					if (rightwrong == 1) {
						currentjumpframe = 51;
		
					} else if (rightwrong == 2) {
		
						currentjumpframe = 75;
					} else {
						getBob.gotoAndStop(currentjumpframe);
					}
		
		
					if (getBob.y > 460) {
						currentjumpframe = 21;
						clearInterval(BobInterval);
						getBob.gotoAndPlay(18);
						JumpSpeed = 3;
						StartJump = false;
					}
				}
		
				if (getBob.y > 310 && getBob.y < 280) {
		
					currentjump = 24;
					JumpSpeed *= 0.4;
				}
		
				if (getBob.y > 269 && getBob.y < 255) {
					JumpSpeed *= 1.6;
				} else if (getBob.y < 240) {
					if (getBob.y < 250) {
		
						getBob.y -= JumpSpeed;
						if (rightwrong == 1) {
		
							currentjumpframe = 51;
						} else if (rightwrong == 2) {
		
							currentjumpframe = 75;
						} else {
							currentjumpframe = 27;
						}
						JumpSpeed += -0.2
		
					} else {
		
		
						getBob.gotoAndStop(currentjumpframe);
						JumpSpeed = -3;
					}
				}
		
			}
		
		
		
		
		}
		
		/////////////////////// תנועת ההתשובות
		function MoveAnswers() {
			
			if (TotalTrue == TrueAnswerCounter) 
				{
				clearInterval(BobInterval);
				clearInterval(AnswersInterval);
				clearInterval(TimeInterval);
				clearInterval(intersectInterval);
				ShipInterval = setInterval(MoveShip, 30);
		
			}
			
			
			if (StartAnswer == true) {
				if (Paused == 0) {
					var getAnswers = stage.getChildByName("CurrentAnsDisplay");
					getAnswers.x -= AnswerSpeed;
				}
				
		
			}
		
		}
		
		/////////////////////פונקציה לבדיקת תשובה
		function ChackHit() {
			
			
			var getProgreson = stage.getChildByName("Progreson");
			var getAnswers = stage.getChildByName("CurrentAnsDisplay");
			var getBob = stage.getChildByName("Bob");
			var getTrueCount = getProgreson.getChildByName("TrueCount");
			var getAnswerTxt = getAnswers.getChildByName("AnswerTxt");
			var getGround = stage.getChildByName("Ground");
		
		
			if (getAnswers.x < 0) {
		
				if (AnswerChacker == true) {
					
					AnswersArray[RndAnswerNum][3] = AnswersArray[RndAnswerNum][3] / 2;
					
					for( i = 0 ; i < RecoredArray.length; i++)
					{
						if ( AnswersArray[RndAnswerNum][2] == RecoredArray[i][2])
						{
							RecoredArray[i][3] = AnswersArray[RndAnswerNum][3] ;
						}
					}
					
					PlacerY = 250 ;
					getAnswers.y = PlacerY ;
					
				}
		
				if (AnswerChacker == false) {
		
					if (FalseNagative != 0) {
						OverAllScore += (100 / TotalAnswers) * FalseNagative;
						for( i = 0 ; i < RecoredArray.length; i++)
					{
						if ( AnswersArray[RndAnswerNum][2] == RecoredArray[i][2])
						{
							RecoredArray[i][3] = AnswersArray[RndAnswerNum][3] ;
						}
					}
						
						AnswersArray.splice(RndAnswerNum, 1);
						
						PlacerY = 425;
						
					}
		
		
		
		
		
				}
				stage.removeChild(getAnswers);
				getAnswers.removeChild(getAnswerTxt);
				getAnswers.removeChild(getAnswers.getChildByName("Picname"));
				getAnswers.x = 1050;
				getAnswers.y = PlacerY ;
				stage.addChildAt(getAnswers,3);
				getAnswers.addChild(getAnswerTxt);
				
				RefreshAnswer();
		
				getAnswerTxt.text = CurrentAnswer;
		
				if (PiChacker == "Pic") {
		
					var Pic = new CurrentAnswer;
				
					
					getAnswers.addChild(Pic);
					
					scaleValue = resizeImage(getAnswers,Pic)- 0.35;
					Pic.scaleX = scaleValue;
					Pic.scaleY = scaleValue;
					
					
					Pic.name = "Picname";
					getAnswerTxt.text = " ";
		
				} else {
					getAnswers.removeChild(getAnswers.getChildByName("Picname"));
					
					
					
					getAnswerTxt.text = CurrentAnswer;
		
				}
		
		
			}
		
		
		
		
		
			if (intersect(getAnswers, getBob)) {
		
				clearInterval(intersectInterval);
				stage.removeChild(getAnswers);
				getAnswers.removeChild(getAnswerTxt);
				getAnswers.removeChild(getAnswers.getChildByName("Picname"));
				getAnswers.x = 1050;
				getAnswers.y = PlacerY;
				stage.addChildAt(getAnswers,3);
				getAnswers.addChild(getAnswerTxt);
				intersectInterval = setInterval(ChackHit, 50);
				getGround.gotoAndStop(0);
				getAnswers.y = 250;
		
		
				if (AnswerChacker == true) {
					getGround.gotoAndPlay(1);
					if(isfx==0)
					{
					createjs.Sound.play("positiveSound");
					}
					if (getBob.currentFrame == 21) {
						getBob.gotoAndStop(48);
						setTimeout(function () {
							getBob.gotoAndStop(51);
						}, 600);
					} else {
						getBob.gotoAndPlay(42);
					}
		
		
					rightwrong = 1;
					setTimeout(function () {
						rightwrong = 0;
						getBob.gotoAndPlay(18);
					}, 1500);
		
		
		
		
		
					TrueAnswerCounter++;
					getTrueCount.text = TrueAnswerCounter;
					OverAllScore += (100 / TotalAnswers) * FalseNagative
					
					
		           for( i = 0 ; i < RecoredArray.length; i++)
					{
						if ( AnswersArray[RndAnswerNum][2] == RecoredArray[i][2])
						{
							RecoredArray[i][3] = AnswersArray[RndAnswerNum][3] ;
						}
					}			
					
					
					
		
		            AnswersArray.splice(RndAnswerNum, 1);
		
		
				} else {
		
					
					AnswersArray[RndAnswerNum][3] = AnswersArray[RndAnswerNum][3] / 2;
					
					           for( i = 0 ; i < RecoredArray.length; i++)
					{
						if ( AnswersArray[RndAnswerNum][2] == RecoredArray[i][2])
						{
							RecoredArray[i][3] = AnswersArray[RndAnswerNum][3] ;
						}
					}
					
					
					getGround.gotoAndPlay(37);
					if(isfx==0)
					{
					createjs.Sound.play("negativeSound");
					}
					if (getBob.currentFrame == 21) {
						getBob.gotoAndStop(72);
						setTimeout(function () {
							getBob.gotoAndStop(75);
						}, 600);
					} else {
		
						getBob.gotoAndPlay(66);
					}
					rightwrong = 2;
					setTimeout(function () {
						rightwrong = 0;
						getBob.gotoAndPlay(18);
					}, 1500);
		
		
				}
		
				RefreshAnswer();
				if (PiChacker == "Pic") {
		
		
					var Pic = new CurrentAnswer;
					
					
					getAnswers.addChild(Pic);
					
					scaleValue = resizeImage(getAnswers,Pic)- 0.35;
					Pic.scaleX = scaleValue;
					Pic.scaleY = scaleValue;
					
					Pic.name = "Picname";
					getAnswerTxt.text = " ";
		
				} else {
					getAnswers.removeChild(getAnswers.getChildByName("Picname"));
					
		
				
					getAnswerTxt.text = CurrentAnswer;
		
				}
		
		
		
		
			}
		
		
		
		}
		
		
		function MoveShip() {
		
			
			if (Paused == 0) {
				var getShip = stage.getChildByName("MyShip");
				var getBob = stage.getChildByName("Bob");
				stage.removeChild(stage.getChildByName("MyInstraction"));
				
				runningbg.paused=true;
				if(endanimation!=1)
				{
				getBob.y=460;
				getShip.x -= AnswerSpeed;
				}
				
				if(getShip.x<345&&endanimation==2)
				{
				AnswerSpeed=0;
				stage.getChildByName("Backround").front.stop();
				stage.getChildByName("Backround").mid.stop();
				stage.getChildByName("Backround").back.stop();
				getShip.play();
				stage.removeChild(getBob);
				endanimation=0;
				setTimeout(function()
					{
				endanimation=1;
				
				
					},10000);
				
					
				
				}
				
				if (endanimation==1) {
					clearInterval(ShipInterval);
					clearInterval(BobInterval);
					clearInterval(AnswersInterval);
					clearInterval(TimeInterval);
					clearInterval(intersectInterval);
					stage.removeChild(getBob);
					
		
		
					var myEndScreen = new lib.Endscr();
					stage.addChild(myEndScreen);
					myEndScreen.x = 0;
					myEndScreen.y = 0;
					myEndScreen.name = "EndScreen";
		  
		
					
					
					stage.getChildByName("EndScreen").subject.text=GameName;
					
					stage.getChildByName("EndScreen").NavFinsh.EndFinsh.addEventListener("click", function()
				{
				location.reload();	
				});
				
				stage.getChildByName("EndScreen").NavFinsh.EndPlayAgian.addEventListener("click",Replay);
					
					
					
					var CountUnTaken = 0;
					for (i = 0; i < AnswersArray.length; i++) {
						CountUnTaken += parseFloat(AnswersArray[i][3]);
		
					}
					
					
					stage.getChildByName("EndScreen").ScoreShow.text = Math.round(OverAllScore + (100 / TotalAnswers) * CountUnTaken);
					
		
					
					var minutes = Math.floor(OverAllTime / 60);
					var seconds = OverAllTime - minutes * 60;
					if(seconds<10)
					{
					stage.getChildByName("EndScreen").timeShow.text=minutes+":0"+seconds;
					}
					
					else
					{
					stage.getChildByName("EndScreen").timeShow.text=minutes+":"+seconds;
					}
					
		             
					
					
					for ( i = 0 ; i < TotalAnswers ; i++)
					{   
					 
					if (RecoredArray[i][0] == true)
					{
					    
						if(ThreeInaRow == 4)
						{
							placeX = 520;
							placeY += 100;
							ThreeInaRow = 0;
							
						}
						ThreeInaRow ++ ;
						var getDist = new lib.Dist;
						getDist.x = placeX;
						getDist.y = placeY;
						stage.addChild(getDist);
						
						 if (RecoredArray[i][1] == "Pic") {
		
					var PicEnd = new RecoredArray[i][2];
					getDist.addChild(PicEnd);
					scaleValue = resizeImage(getDist,PicEnd)- 0.35;
					PicEnd.scaleX = scaleValue;
					PicEnd.scaleY = scaleValue;
					PicEnd.name = "PicnameEnd";
					
					   
				   }
				   else
				   {
					  var Texto = new createjs.Text();
					Texto.color = "#000";
					Texto.font = "20px Arial";
					Texto.text = RecoredArray[i][2];
						getDist.addChild(Texto); 
				   }
				   
				   
				   if( RecoredArray[i][3] != 1 )
					   
				   {   
					   var getX = new lib.XfoMis;
					   getDist.addChild(getX);
					   
				   }
						
						
						
						placeX+= 100;
						
						
					}
					
					if(RecoredArray[i][0] == false)
					{
						
						
						if(ThreeInaRow2 == 4)
						{
							placeX2=70;
							placeY2 += 100;
							ThreeInaRow2 = 0;
							
						}
						ThreeInaRow2 ++ ;
						var getDist2 = new lib.Dist;
						getDist2.x = placeX2;
						getDist2.y = placeY2;
						stage.addChild(getDist2);
						
						
						
						 if (RecoredArray[i][1] == "Pic") {
		
					var PicEnd2 = new RecoredArray[i][2];
					getDist2.addChild(PicEnd2);
							 
					scaleValue = resizeImage(getDist2,PicEnd2)- 0.35;
					PicEnd2.scaleX = scaleValue;
					PicEnd2.scaleY = scaleValue;		 
							 
					PicEnd2.name = "PicnameEnd";
					
					   
				   }
				   else
				   {
					  var Texto2 = new createjs.Text();
					Texto2.color = "#000";
					Texto2.font = "20px Arial";
					Texto2.text = RecoredArray[i][2];
						getDist2.addChild(Texto2); 
				   }
				   
				   
				   if( RecoredArray[i][3] != 1  )
					   
				   {
					   var getX2 = new lib.XfoMis;
					   getDist2.addChild(getX2);
					   
				   }
						
						
						
						placeX2+= 100;
					}
						
										
					}
					
					
					
		
		
				
				
				
			}
			
			
			
		}
		
		}
		
		
		
		
		////////////////////// פונקציה לחיצה על כפתור הפאוז
		function PausedClick() {
			
				
			var getBob = stage.getChildByName("Bob");
			Paused++;
			if (Paused == 1) {
				StartJump = true;
				clearInterval(TimeInterval)
				stage.getChildByName("MyPausedbtn").play();
				getBob.stop();
		
				
			    var myPausedScreen = new lib.PauesScreem();
				stage.addChildAt(myPausedScreen,6);
				myPausedScreen.name = "PausedScreen";
				myPausedScreen.x = 0;
				myPausedScreen.y = 0;
		        
			
				
				myPausedScreen.resumebtn.addEventListener("click", PausedClick);
				myPausedScreen.mainmenubutton.addEventListener("click", function()
				{
				location.reload();	
				});
				
				
		
			}
		
			if (Paused == 2 ) {
		     var GetPausedScreen = stage.getChildByName("PausedScreen");
		
			stage.removeChild(GetPausedScreen);
				Paused = 0;
				getBob.play();
				stage.getChildByName("MyPausedbtn").play();
				
				TimeInterval = setInterval(TimeCounter, 1000);
			    clearInterval(BobInterval)
		
				
		
		
				StartJump = false;
				if (getBob.y < 460) {
					if (StartJump == false) {
		
						StartJump = true;
		
		
						BobInterval = setInterval(MoveBob, 10);
						intersectInterval = setInterval(ChackHit, 30);
		
		
					}
				}
			}
		
		
		}
		
		function Replay ()
		{
			alert("לא פותח, יש ללחוץ על הכפתור - סיום");
			
		}
		
		
		
		function resizeImage(box, content) {
		
			//משתנים לגבולות של המסגרת והתוכן
			var boxBounds = box.nominalBounds;
			var contentBounds = content.nominalBounds;
		
			//מציאת הערך לפיו יש לשנות את גודל התמונה בהתאם לכיוון התמונה- לאורך או לרוחב
			var toScale = 0;
			if (boxBounds.height / contentBounds.height < boxBounds.width / contentBounds.width) {
				toScale = boxBounds.height / contentBounds.height;
			} else {
				toScale = boxBounds.width / contentBounds.width;
			}
			return toScale;
		}
		
		
		////////////// פונקציית האינטרסקט
		function intersect(obj1, obj2) {
		  
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
		
			//console.log("intersect" + obj1.x, obj2.x);
		
			if (obj1.x + (obj1W.width / 2.8) <= obj2.x - (obj2W.width / 2.8)) {
				return false;
			}
		
			if (obj1.y + (obj1W.height / 2.5) <= obj2.y - (obj2W.height / 2.5)) {
				return false;
			}
		
			if (obj1.x - (obj1W.width / 2.8) > obj2.x + (obj2W.width / 2.8)) {
				return false;
			}
		
			if (obj1.y - (obj1W.height / 2.5) > obj2.y + (obj2W.height / 2.5)) {
				return false;
			}
			return true;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/cssbob.css'});

	this.instance.setTransform(1020,181.1,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1449.5,464.6,101,23);
// library properties:
lib.properties = {
	width: 960,
	height: 590,
	fps: 24,
	color: "#B1BEC2",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/PixelBoB_Latest_atlas_.png", id:"PixelBoB_Latest_atlas_"},
		{src:"sounds/jumpSound.mp3", id:"jumpSound"},
		{src:"sounds/negativeSound.mp3", id:"negativeSound"},
		{src:"sounds/opensong.mp3", id:"opensong"},
		{src:"sounds/positiveSound.mp3", id:"positiveSound"},
		{src:"sounds/runningsong.mp3", id:"runningsong"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js", id:"an.CSS"},
		{src:"components/ui/src/combobox.js", id:"an.ComboBox"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;