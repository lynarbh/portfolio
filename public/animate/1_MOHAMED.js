(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"1_MOHAMED_atlas_1", frames: [[0,0,1280,633]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.fond = function() {
	this.initialize(ss["1_MOHAMED_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.empattage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D86144").s().p("AANBhIANgIQAHgDABgBQACgDgDgGQgDgFgCAAIgYAAIgmAAQgUgCgOgIQgNgIgHgPQgJgSAEgUQAXAuAmgQQAMgFgGgVQgFgTgQgIQgXgMgGgVQgHgXAWgVQAFApApAOQArAPAFARIgNgGQgJgFgKACQAMAPgBAWQgBAYgRABIhGAGQAUAJBIAIQA5AHAXAcIgrADIgEAAQgVAAgPgEg");
	this.shape.setTransform(63.9885,144.5775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D86144").s().p("AgjAnQgLgBgHgDQgFgCgCgNIgDgTQgKAAgEAHIgDAKQgDAIgIABQgIABgEgEQgLgLABgNQAEgCAQgUQAMgPASgBQgQAhAYgBQAQgBA9gMQALAAAaAKQAaAGARgQQAJAPAEAJQglAHgaABQgjACgegHQAHAYgEAGIgTABIgGAAg");
	this.shape_1.setTransform(115.3958,149.7333);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D86144").s().p("AA8AtQgHgEgGgXQgRAOgOACQgLACgYgGIgngEQgYgEgHgSIADgVQACgJgYANQggASgQgHQgKgEgFgLQgFgMAEgMIARALQALAGAIACQAIACAbgRQAWgPAIAMQADAFAEAaQADATAMAGQAEABAGgEQAFgEAFgIQARARAbgCQAbgBALgRQAKgPAXAEQAWAEAPAQQADADAJgHQAJgGgCgDIgKgFQgHgEgCgCQARgIAPAJQANAHAHAPIgTATQgKAKgJABQgsAHgPgcQgGANgBALQAAAEgDACIgEABQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_2.setTransform(85.7279,149.0351);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D86144").s().p("AhbBcIAmgQQAXgKAKgSQgMgEgIAAQgIAAgCgIQgDgIAEgFQAFgHAZgOQgegDgbAfQgbAfgNgCQgBgtAmgOQAbgKAEgCQARgKAIgSQAQAYAtgSQAvgTANgnQANgGAFAJQAFAKgOACQgGAFgEAOIgGASIhSA2QAXAGAYgEQAKgCAjgLQgGAVgrALQgzAMgRAVQAHAEAJACIAWAFQgkARgoAAQgSAAgTgEg");
	this.shape_3.setTransform(139.5888,144.1926);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E59C50").s().p("AAMBLIgQgGQgMgGgMADQgQAEgdgFQgigGgMAAQgpAFgVABQgkAAgQgUQgXgcg5gHQhJgIgTgIIBGgGQARgBACgYQABgXgNgPQALgCAIAFIANAGQACAGAKAKQgEANAFALQAFALAKAFQAQAHAggSQAYgOgCAKIgDAWQAHAQAYAEIAnAEQAZAGALgBQAOgCARgPQAGAYAHADQAEADAEgCQADgCAAgEQABgMAGgMQAPAbArgGQAJgCAKgJIATgTIAHABQgBAMALAMQAFAEAHgBQAIgCADgHIAEgKQAEgHAKAAIACATQADAMAEACQAHAEALAAIAaAAQADgGgGgZQAfAHAjgBQAZgBAlgHIAKgCQAOACAageQAbggAeAEQgYAOgFAHQgEAFACAIQACAIAIAAQAJAAAMAEQgKARgYAKIgmAQQgeAUg1AJQgzAIgfgHQgLgCgMAGIgQAHg");
	this.shape_4.setTransform(96.925,149.8692);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#020203").p("AglgQIARgSQADgBADACIA1AyQAEAEgEADIgBACQgIAIgEABQgEAAgJgIIgrgog");
	this.shape_5.setTransform(105.353,93.2583);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.9,0,4,0).s().p("AAMAbIgsgoIgHgDIASgSQACgBADACIA2AyQAEAEgEADIgCACQgIAIgEABQgDAAgJgIg");
	this.shape_6.setTransform(105.525,93.2583);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#020203").p("AAmAZIgIAHQgHAGgCAAQgDAAgGgHIguguQgFgGAAgCQAAgBAFgGIADgCQAGgFACAAQADABAFAGg");
	this.shape_7.setTransform(70.8427,92.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.9,0,4,0).s().p("AANAfIgugvQgFgFAAgCQAAgBAFgGIADgCQAGgEACgBQADABAFAGIA1A3IgIAHQgHAGgCgBQgDABgGgHg");
	this.shape_8.setTransform(70.725,92.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#020203").p("AAmAVIgFAGQgHAHgEAAQgDAAgIgGIgqgmIgHgIQAIgJAHgGQADgBAGAEIAwAug");
	this.shape_9.setTransform(114.5044,93.008);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AAMAcIgrgmIgHgIQAIgJAHgGQADgBAGAEIAxAuIAEAFIgGAGQgHAHgEAAIAAAAQgEAAgGgGg");
	this.shape_10.setTransform(114.5,93.008);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#020203").p("AAnAYIgLAJQgGAEgGgGIgxguQgFgEAEgFIAEgDQAHgHADAAQADAAAIAHIAeAeQAGAGAMAPg");
	this.shape_11.setTransform(97.0382,93.3214);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.7,0,3.8,0).s().p("AAPAfIgxguQgFgEAEgFIAEgDQAHgHADAAQADAAAIAHIAeAeIASAVIgLAJQgCACgDAAQgDAAgEgEg");
	this.shape_12.setTransform(97.1309,93.3214);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#020203").p("AgUgkQAFADACACQALAMAVAWIARAQQAEAEgFAFQgKAJgEgBQgCgBgJgIQgdgcgPgPQgGgFAHgFIAHgHQABgBAFgCg");
	this.shape_13.setTransform(88.3376,93.1156);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.8,0).s().p("AAVAkIgLgJIgsgqQgGgGAHgFIAHgGIAGgDIAHAFIAgAhIARAQQAEAEgFAFQgJAIgFAAIAAAAg");
	this.shape_14.setTransform(88.3376,93.08);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#020203").p("AgVggIAGADIAyAuQAHAEgGAFQgLAIgCAAQgDABgHgEIgugnQgEgEgBgDQAAgCAEgEg");
	this.shape_15.setTransform(123.319,92.4352);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AANAeIgugnQgEgEgBgCQAAgDAEgEIANgLIAGADIAyAuQAHAFgGAEIgNAJIgBAAQgDAAgGgEg");
	this.shape_16.setTransform(123.319,92.4841);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#020203").p("AAUAiIgIgFIgngiIgCgBQgEgDgCgCQgEgDABgEQAAgDAGgGQAGgFAEgBQADAAACACQAXAZAcATQAFAEAAABQAAACgFADIgIAHg");
	this.shape_17.setTransform(132.2719,91.992);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.9,0,3.9,0).s().p("AAMAdIgnghIgCgCIgGgEQgEgEABgEQAAgDAGgGQAGgFAEgBQADAAACACQAXAZAcATQAFAEAAABQAAACgFAEIgIAHIgGADg");
	this.shape_18.setTransform(132.2719,91.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#020203").p("AglgVIACgFIAEgEQAIgGADABQAEAAAGAIIAvAvQAFAFgFACQgJAHgDABQgDACgEgDIgzgxg");
	this.shape_19.setTransform(79.4389,92.7094);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AASAiIgzgxIgFgGIADgFIAEgEQAHgGAEABQADAAAHAIIAvAvQAEAFgFACIgMAIIgCABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_20.setTransform(79.4816,92.7094);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#020203").p("AgTggIAEADQAPARAgAXQAGAEAAADQABACgGAFQgIAIgDAAQgDABgJgHIgrgiQgDgCgBgCQgBgFABgCQACgCALgKg");
	this.shape_21.setTransform(149.9021,89.8273);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AAKAaIgrghQgDgCgBgDQgBgEABgCIANgNIAFgBIAEACQAPASAgAXQAGAEAAACQABACgGAGQgIAIgDAAIAAAAQgDAAgJgHg");
	this.shape_22.setTransform(149.9021,89.8517);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#020203").p("AAYAmQgIgFAAAAIgUgWQgUgSgEgEQgLgKABgEQABgFAMgHQAFgDAFAFIAxA2QAFAEAAACQAAACgFAEg");
	this.shape_23.setTransform(61.8707,91.3371);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AAQAhIgUgVIgYgXQgLgJABgFQABgEAMgIQAFgCAFAFIAxA2QAFAEAAACQAAACgFADIgKAIIgIgGg");
	this.shape_24.setTransform(61.8707,91.2833);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#020203").p("AAWAhIgJgGIgvglQgIgFAHgGQAEgEAHgHQACgBADAAQADABACABQAYAaAaARQAGAEgGAFIgIAIg");
	this.shape_25.setTransform(141.0108,91.1696);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AANAcIgvglQgIgFAHgHIALgKIAFgBQADAAACACQAYAaAaAQQAGAFgGAFIgIAIIgGADg");
	this.shape_26.setTransform(141.0108,91.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#020203").p("AAWAnIgIgHIgwgyQgFgFABgDQAAgDAFgEIAFgEQAIgEAFAGQAQAVAXAZIAMAKQADAEAAABQAAADgEACQgFAEgDABg");
	this.shape_27.setTransform(53.1,90.272);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.9,0,3.9,0).s().p("AAOAhIgwgzQgEgFAAgDQAAgDAFgEIAFgDQAIgFAFAGQARAWAWAYIAMALQADADAAACQAAACgEACIgIAGIgFACg");
	this.shape_28.setTransform(53.1,90.2286);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#020203").p("AglgcIAMgKQAGgEAFAGIAyA8QAEAEAAADQgBACgFADIgEAEQgHADgFgFIg0g9g");
	this.shape_29.setTransform(35.2476,87.3466);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AARAmIg0g9IgDgFIAMgKQAGgEAFAGIAyA8QAEAEAAADQgBACgFADIgEAEIgFABQgEAAgDgDg");
	this.shape_30.setTransform(35.325,87.3466);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#020203").p("AglgZQADgIALgFQAEgCAGAGIAuA2QAGAGgBAEQAAAEgIAEQgJAFgGgIIgxg4g");
	this.shape_31.setTransform(44.1843,88.8712);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.8,0).s().p("AAOAjIgxg4IgCgEQACgIALgFQAEgCAGAGIAvA2QAGAGgBAEQgBAEgIAEQgDACgDAAQgFAAgEgFg");
	this.shape_32.setTransform(44.2071,88.8712);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#020203").p("AAVAhIgEgDIgzgnQgHgFAGgGIAHgHQAGgHADABQACAAAGAGQAPAMAfAZQAGAGgEADIgMAMg");
	this.shape_33.setTransform(158.7082,88.7046);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AARAfIgzgoQgHgFAGgGIAHgHQAGgGADABQACAAAGAFIAuAmQAGAFgEAEIgMALIgEACg");
	this.shape_34.setTransform(158.7082,88.6683);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#020203").p("AAUAhIg2gqQgHgFAGgGIACgDQAIgJADAAQAEAAAIAHIAuAkQABAAABACQABACgBABQgKALgFAFg");
	this.shape_35.setTransform(176.4615,85.4349);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AgigJQgHgFAGgGIACgDQAIgIADgBQAEAAAIAHIAuAkIACADIAAACIgPAQIgDABg");
	this.shape_36.setTransform(176.4615,85.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#020203").p("AgTggIA1AqQAEAEABABQAAACgDAEIgJAJQgFAGgGgFIg0gpQAAgBgBgBQgBgCABAAIAOgRg");
	this.shape_37.setTransform(167.6406,87.0659);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AAQAfIg0gpIgBgCIAAgCIAOgRIAEgBIA1AqIAFAFQAAACgDAEIgJAJQgDADgDAAQgDAAgCgCg");
	this.shape_38.setTransform(167.6406,87.0886);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#020203").p("Ag4AUQAGgIAHgDQAGgCAJACQAZAFAUgRQAEgDARgTQAGgGAFAFIAGAGQAEAEAAACQAAADgEADIghAaQgNAJgKACQgeADgVgJg");
	this.shape_39.setTransform(99.1006,96.8906);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.8,0,5.8,0).s().p("Ag1AXIgEgDQAGgIAHgDQAGgCAJACQAZAFAUgRQAEgDARgTQAGgGAFAFIAGAGQAEAEAAACQAAADgEADIghAaQgNAJgKACIgQABQgUAAgPgHg");
	this.shape_40.setTransform(99.225,96.8906);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#020203").p("Ag7AVQAGgJAGgCQAGgDAKACQAWAFAVgQIAagYQAGgGAFAGQABACAFAEQAEADAAACQABACgEAEQgKAIgFADQgYAVgUAFQgMADgSgCQgSgCgIgGg");
	this.shape_41.setTransform(107.9528,96.7775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AghAdQgSgCgIgGQAGgJAGgCQAGgDAKACQAWAFAVgQIAagYQAGgGAFAGQABACAFAEQAEADAAACQABACgEAEIgPALQgYAVgUAFQgHACgJAAIgOgBg");
	this.shape_42.setTransform(107.9528,96.7775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#020203").p("Ag7AXQAMgRARAEQAWAEAVgQQAKgIASgSQAGgEAFAEQAGAGABACQABABAAACQAAADgBAAIggAcQgYAUgngEQgEgBgTgGg");
	this.shape_43.setTransform(116.6333,96.503);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AgkAeIgXgHQAMgRARAEQAWAEAVgQIAcgaQAGgEAFAEIAHAIQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAgBAAQAAABAAAAQAAAAAAAAIggAcQgUARgdAAIgOgBg");
	this.shape_44.setTransform(116.6333,96.503);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#020203").p("AgMAdIgmgIQgEgDgDgBIAFgGQAIgIAQADQAYAGAWgSIAYgVQAEgEAEAEQADADAHAGQABABAAADQAAACgBABQgpAdgEADQgFADgIACQgOADAAAAg");
	this.shape_45.setTransform(90.4432,96.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,5.9,0).s().p("Ag0AWIgGgFIAFgGQAHgIAQADQAZAGAVgSIAYgVQAFgDAEADIAJAJIABAEQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABIgtAfQgFADgJACIgOADg");
	this.shape_46.setTransform(90.5833,96.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#020203").p("Ag5ARIAIgJQAHgGAIACQAfALAcgaIARgOQAFgEAFAFIAIAIQAEAFgFADQgIAGgPAMQgOALgMADQgKAEgOAAQgXAAgOgHg");
	this.shape_47.setTransform(81.5435,96.5111);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6,0).s().p("Ag0AVIgHgEIAJgJQAHgGAIACQAeALAdgaIAQgOQAFgEAFAFIAIAIQAEAFgEADIgXASQgOALgNADQgKAEgOAAQgXAAgNgHg");
	this.shape_48.setTransform(81.6941,96.5111);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#020203").p("AA9gTIggAeQgVAVgrAAQgFAAgIgCQgIgCgFgBQAFgJAHgEQAIgEAHABQAYAEAWgSQAFgEAYgXQADgDADADg");
	this.shape_49.setTransform(125.6571,95.9625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6.1,0,6.2,0).s().p("AgwAeIgMgDQAEgJAHgEQAIgEAIABQAYAEAVgSIAdgbQAEgDADADIANALIgfAeQgWAVgqAAQgGAAgIgCg");
	this.shape_50.setTransform(125.65,95.9625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#020203").p("Ag5APQAIgIAFgCQAIgEAJAEQAVAHAUgPIAcgWIABgBQAGgFALAQQADAFgFAEQgLAHgVAQQgNAKgTABQgdAAgQgJg");
	this.shape_51.setTransform(72.7888,96.0155);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6,0).s().p("Ag1ATIgGgEQAIgIAGgCQAHgEAJAEQAVAHAUgPIAdgWIAAgBQAGgFAMAQQADAFgFAEIggAXQgOAKgTABQgcAAgRgJg");
	this.shape_52.setTransform(72.9313,96.0155);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#020203").p("Ag6AbQAEgIAHgEQAIgEAHABQARACARgKQANgHAVgWIAEgEQAFgGAHAGQAJAIAAABQAAADgJAIIgRAPQgaAbggAAQgKAAgTgDg");
	this.shape_53.setTransform(134.4336,95.256);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("Ag1AeIgGgDQAEgIAHgEQAIgEAHABQARACARgKQANgHAVgWIAEgEQAFgGAHAGIAJAJQAAADgJAIIgRAPQgaAbggAAQgKAAgTgDg");
	this.shape_54.setTransform(134.525,95.256);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#020203").p("AA7gLIgPALQgGAEgKAIQgKAHgHADQgfANglgSQgGgDAFgFQALgKAPAEQAYAIAXgRQADgDASgPQAGgGAGAGg");
	this.shape_55.setTransform(64.3593,95.3578);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6,0).s().p("Ag3ARQgHgDAGgFQALgKAPAEQAYAIAWgRIAWgSQAGgGAFAGIALANIgPALIgQAMQgJAHgHADQgNAGgPAAQgUAAgUgLg");
	this.shape_56.setTransform(64.249,95.3578);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#020203").p("AA7gVIgMAMQgLALgGAFQgLALgJAFQgdASglgKQgHgBAFgGQAMgOAOACQATAEASgQQACgBAbgaQAGgHACAAQADAAAHAGg");
	this.shape_57.setTransform(143.5309,94.4004);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("Ag3AfQgHgBAFgGQAMgOAOACQATAEASgQIAdgbQAGgHACAAQADAAAHAGIAHAHIgMAMIgRAQQgLALgJAFQgTAMgWAAQgMAAgNgEg");
	this.shape_58.setTransform(143.425,94.4004);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#020203").p("Ag7ALQANgJAEgCQACgBAFACQAeAMAbgXIARgOQAHgFAEAGIAJAJQAEAEgFAEIgZASQgiAZgpgPIgRgJg");
	this.shape_59.setTransform(55.2598,94.4212);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgqAWIgSgJIABgCIAQgLQACgBAFACQAeAMAbgXIASgOQAHgFADAGIAKAJQADAEgEAEIgaASQgVAPgXAAQgPAAgPgFg");
	this.shape_60.setTransform(55.3016,94.4212);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#020203").p("Ag8AfQAGgGAKgKQAEgCAFABQAbAEAYgYIAXgaQAFgFAFADIABABQAKAIABACQAAADgJAIQgUAVgMAKQgSAQgeABQgGABgTgDQgEgCgDgBg");
	this.shape_61.setTransform(152.1013,93.2321);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("Ag1AiIgHgDIAQgQQAEgCAFABQAbAEAYgYIAXgaQAFgFAFADIABABQAKAIABACQAAADgJAIQgUAVgMAKQgSAQgeABIgCAAIgXgCg");
	this.shape_62.setTransform(152.1013,93.2321);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#020203").p("Ag6ALQAPgLABAAQAEgCAGACQAaANAagUIAWgSQAFgEAEAFQABACAJAJQAEADgEADQgaAUgHAFQgQAKgRAAQgegBgSgMg");
	this.shape_63.setTransform(46.2282,93.282);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6.1,0,6.2,0).s().p("AgHAcQgegBgSgMIgFgEIAQgLQAEgCAGACQAaANAagUIAWgSQAFgEAEAFIAKALQAEADgEADIghAZQgPAKgQAAIgCAAg");
	this.shape_64.setTransform(46.4067,93.282);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#020203").p("AgFAcQgegBgSgMQgFgDAAgCQAAgCAFgEQAKgIAOAFQAUAJATgNQANgIAQgOQAFgEAFAFIAKAMQAAABAAACQAAACgBABQgIAGgQAMQgOALgOADQgJACgCAAg");
	this.shape_65.setTransform(37.65,91.9934);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,5.9,0).s().p("Ag1APQgFgDAAgCQAAgCAFgEQALgIAMAFQAVAJATgNQAMgIARgOQAFgEAEAFIAKAMIABADIgBADIgYASQgOALgOADIgLACQgfgBgRgMg");
	this.shape_66.setTransform(37.65,91.9934);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#020203").p("Ag6AhQACgCACgDQALgPASACQATACASgSQAHgHAUgXQAFgGACAAQADgBAFAFIAFAEQAGADgFAGQgYAZgSARQgQAPgaABQgGAAgIgBQgNgBgBAAg");
	this.shape_67.setTransform(160.7767,91.9061);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgnAlIgOgBIgHgDIAFgFQAKgPASACQATACATgSIAageQAFgGADAAQACgBAGAFIAEAEQAGADgEAGQgZAZgSARQgQAPgaABIgEAAIgJgBg");
	this.shape_68.setTransform(160.9214,91.9061);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#020203").p("AgQAEQATAAAQgOIAVgRQABAAADAAQACAAABABQAGAHAFAHQACAEgDACIgRAOQgXAUgUAAQgfAAgVgPQgGgEAGgGQALgLAOAIQADACALACg");
	this.shape_69.setTransform(28.9069,90.475);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.8,0,5.9,0).s().p("Ag3ANQgGgEAGgGQALgLAOAIQADACALACQATAAAQgOIAVgRIAEAAIADABQAGAHAFAHQACAEgDACIgRAOQgXAUgUAAQgfAAgVgPg");
	this.shape_70.setTransform(28.9069,90.475);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#020203").p("AgmAoIgRgDQgIgCAGgGIAEgEQAEgGAGgCQAEgCAJABQAWAAARgSQAOgOAQgUQAFgHAHAGQAJAIABABQAAACgIAJQgSAVgOAOQgUATgaACg");
	this.shape_71.setTransform(169.9293,90.4514);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("Ag3AmQgIgCAGgGIAEgEQAEgHAGgCQAEgBAJAAQAWABARgSQAOgPAQgUQAFgGAHAFIAKAKQAAABgIAJQgSAVgOAOQgUATgaACIgNACg");
	this.shape_72.setTransform(169.9293,90.449);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#020203").p("AA8gkIgRATQgCACgEAAQgYgDgUAUQgIAHgUAaQgHAIgCAAQgCAAgIgGQgGgEAAgCQAAgDAFgFIAkgpQAagbAmAEIAPADg");
	this.shape_73.setTransform(174.2674,81.8761);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("Ag1AlQgGgEAAgCQgBgDAFgFIAkgpQAagbAmAEIAPADIABACIgRATQgCACgFAAQgYgDgUAUQgHAHgUAaQgHAIgCAAIgBAAQgCAAgHgGg");
	this.shape_74.setTransform(174.2477,81.8761);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#020203").p("AAPgdQAYACASANQAHAFgIAFQgCABAAAAQgFAGgGAAQgEABgJgEQgXgJgXATIgVASQgFAEgFgFQgIgJgDgFQgBgBAAgCQABgCABgBQAYgTANgJQAKgHAZgBg");
	this.shape_75.setTransform(33.194,82.6566);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AgvAbIgLgOIgBgDIACgDQAYgTANgJQAKgHAZgBQAYACASANQAHAFgIAFIgCABQgFAGgGAAQgEABgJgEQgXgJgXATIgVASQgDACgCAAQgDAAgCgDg");
	this.shape_76.setTransform(33.194,82.6566);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#020203").p("AAmgOQgfgDgYAeQgHAKgRASQgBABgCAAQgCABgBgBQgFgCgCgDQgFgGAAgCQAAgCAFgGQAcggAFgGQAWgYAggBQABAAAWADQADABABACQABACgCACIgOAQQgBABgGABg");
	this.shape_77.setTransform(165.3917,83.5583);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgvAqQgFgCgCgDQgFgGAAgCIAFgIIAhgmQAWgYAggBIAXADQABABAAAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAIgOAQIgHACQgfgDgYAeIgYAcIgDABIgCABIgBgBg");
	this.shape_78.setTransform(165.3917,83.5583);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#020203").p("AAPgeQAXABASAMQAEADAAACQAAACgEAEQgKALgOgFQgYgKgXATIgYAUQgFAEgCgEIgNgPQgBgDACgCIAhgbQAOgMAaAAg");
	this.shape_79.setTransform(42.0179,84.2817);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6,0).s().p("AguAdIgNgPQgBgDACgCIAhgbQAOgMAaAAQAXABASAMQAEADAAACQAAACgEAEQgKALgOgFQgYgKgXATIgYAUIgEACQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_80.setTransform(42.0179,84.2817);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#020203").p("AgsAgQgNgPgBgBQgBgBABgDQAAgEABgBQAggaAIgFQARgMAeAFQAQAEAKAHQAEADAAACQAAACgEAEIAAAAQgKAMgQgFQgWgJgVARg");
	this.shape_81.setTransform(50.8917,85.7853);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("Ag6ARQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBABAAIABgFQAggaAIgFQARgMAeAFQAQAEAKAHQAEADAAACQAAACgEAEIAAAAQgKAMgQgFQgWgJgVARIgfAaIgOgQg");
	this.shape_82.setTransform(50.8917,85.6886);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#020203").p("AA8gbQgMAPgEAEQgCABgDABQgDAAgCgBQgKgFgQAFQgPAFgHAIQgBABgcAfIgOgNQAAgBAAgCQAAgCAAgBIAkgnQAMgPARgDQAYgDAOAGQAFACAJAGg");
	this.shape_83.setTransform(103.7952,89.3591);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,5.9,0).s().p("Ag5AaIgBgDIABgDIAkgmQALgQARgDQAYgDAOAGQAFACAJAGIgQATIgFACIgFgBQgKgEgQAEQgPAGgHAHIgdAgg");
	this.shape_84.setTransform(103.85,89.25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#020203").p("AA+ggQgOARgCACQgEADgEgBQgYgFgRAQQgHAGgXAaIgCACQgGAHgCAAQgDAAgHgFIgEgDQgFgDAEgFQAdggAQgRQAPgQAiAAQANgBANAJg");
	this.shape_85.setTransform(147.6593,86.2737);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6.1,0,6.2,0).s().p("Ag1AkIgEgDQgGgDAEgFIAtgxQAQgQAhAAQANgBANAJIgQATQgEADgEgBQgXgFgRAQIgeAgIgCACQgGAHgDAAQgCAAgHgFg");
	this.shape_86.setTransform(147.7158,86.2737);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#020203").p("AApgMQgQgDgRAIQgIAEgQARIgXAaQgFAEgFgEQgKgIAAgCQgBgDAIgJQALgLATgXQAYgZAjAAQACAAARAEQAHACgEAFIgPAQQAAABgDABg");
	this.shape_87.setTransform(156.5366,84.987);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgxAoQgKgIAAgCQgBgDAIgJIAegiQAYgZAjAAIATAEQAHACgEAFIgPAQIgDACQgQgDgRAIQgIAEgQARIgXAaQgDACgCAAQgDAAgCgCg");
	this.shape_88.setTransform(156.5366,84.987);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#020203").p("AALggQAHABANABQAMABAHAFQADACAFADQAFAFgEAFIgBABQgHAHgEABQgGACgJgDQgUgJgTAPIgeAZQgHAGgEgHQgDgEgHgHQgDgFAEgCQAJgFAIgHQAKgKAFgFQAQgOAUgCg");
	this.shape_89.setTransform(59.5873,86.719);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgwAdIgKgLQgDgFAEgCQAJgFAIgHIAPgPQAQgOAUgCIAUACQAMABAHAFIAIAFQAFAFgEAFIgBABQgHAHgEABQgGACgJgDQgUgJgTAPIgeAZQgDADgDAAQgDAAgCgEg");
	this.shape_90.setTransform(59.5873,86.719);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#020203").p("AAngoIARAGQAIADgGAHIgIAKQgGAGgKgCQgUgDgNALQgFAFggAgQgGAGgBAAQgCAAgGgFIgDgCQgFgGAAgCQAAgBAFgGQAPgOAMgPQAQgTASgGQAEgCAcgDg");
	this.shape_91.setTransform(138.7786,87.2173);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgzAkIgDgCQgFgGAAgCQAAgBAFgGQAPgOAMgPQAQgTASgGQAEgCAcgDIARAGQAIADgGAHIgIAKQgGAGgKgCQgUgDgNALIglAlQgGAGgBAAIgBAAQgCAAgFgFg");
	this.shape_92.setTransform(138.7786,87.2023);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#020203").p("AA8gQQgFAFgKAJQgFACgEgBQgWgKgSAMQgHAFgZAXQgGAFgCAAQgDAAgFgGIgDgEQgGgFAAgCQAAgCAFgFIAjgfQASgPAfADQARADANALg");
	this.shape_93.setTransform(68.6279,87.7178);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6.1,0,6.1,0).s().p("AgzAcIgEgEQgFgFAAgCQAAgCAFgFIAjgfQASgPAeADQASADANALIACADIgPAOQgFACgFgBQgVgKgSAMQgIAFgZAXQgFAFgDAAQgCAAgFgGg");
	this.shape_94.setTransform(68.55,87.7178);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#020203").p("AApgJIgVAAQgPABgQAQQgFAEAaAFQAbAEgFAFQgCADglAGQgnAGgCgDQgHgFgCgDQgBgCgBgDQAAgCABgBQAXgZASgSQAUgUAlADQAFABAMAFQADABAAADQABACgCACIgOAPQgDABgBABg");
	this.shape_95.setTransform(130.0467,88.0218);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6,0).s().p("AgwAmQgHgFgCgDIgCgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAXgZASgSQAUgUAlADQAFABAMAFQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgOAPIgEACIAAgCIgVAAQgPABgQAQQgFAEAaAFQAbAEgFAFQgCADglAGQgbAEgJAAQgFAAAAgBg");
	this.shape_96.setTransform(130.0467,88.0218);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#020203").p("AAkgmQAEABARAFQAGADgEAFIgMAPQgDADgCgBQgfgJgbAcIgYAZQgEAEgFgDIgKgLQgBAAAAgCQAAgCABgBIAiglQAVgYAoABg");
	this.shape_97.setTransform(121.205,88.676);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgxAmIgKgLIgBgCIABgDIAiglQAVgYAoABIAVAGQAGADgEAFIgMAPQgDADgCgBQgfgJgbAcIgYAZQgCACgDAAIgEgBg");
	this.shape_98.setTransform(121.205,88.676);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#020203").p("AArgGIgRgCQgMgBgLAGQgGADgMALIgYAaQgEAEgFgEQgJgJgCgCQAAgBAAgCQAAgCABgBIASgTQAUgUACgCQAWgUAdAEQAIABAQAGQADABAAADQABADgCACIgKALQgCACgEACg");
	this.shape_99.setTransform(112.33,89.0364);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgwAlIgLgLIAAgDIABgDIASgTIAWgWQAWgUAdAEQAIABAQAGQADABAAADQABADgCACIgKALIgGAEIgRgCQgMgBgLAGQgGADgMALIgYAaQgCACgCAAQgDAAgCgCg");
	this.shape_100.setTransform(112.33,89.0364);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#020203").p("AA9gTIgBAEIgPAOQgBABgEgBQgcgLgXAVIgdAZQgDADgEgEIgJgJQgGgFAFgFIAegcQARgSAegDQANgBAZANQACABABADg");
	this.shape_101.setTransform(77.2983,88.353);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgvAhIgKgJQgGgFAGgFIAegcQARgSAdgDQAOgBAZANIADAEIgCAEIgOAOQgBABgEgBQgcgLgYAVIgcAZQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_102.setTransform(77.3185,88.353);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#020203").p("AAVgkQAQgBAUAKQAGAEgFAGIgIAJQgHAHgJgDQgWgIgUAQQgTATgKAJQgFAFgCAAQgCAAgFgFQgDgEgCgCQgDgEAAgCQAAgCADgDQAEgEACgCIAkghQANgMAWAAg");
	this.shape_103.setTransform(95.026,89.1707);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6,0).s().p("AgzAgIgFgGQgDgEAAgCQAAgCADgDIAGgGIAkghQANgMAWAAQAQgBAUAKQAGAEgFAGIgIAJQgHAHgJgDQgWgIgUAQIgdAcQgFAFgCAAQgCAAgFgFg");
	this.shape_104.setTransform(95.026,89.1707);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#020203").p("AAbgjQAOABAQAJQAHAFgFAGQgGAHgEADQgGAEgDgBQgfgLgWAWIgWAWQgFAFgDAAQgDAAgFgFQgJgLAAAAQAAgCAJgJQAWgVARgOQAOgLAZABg");
	this.shape_105.setTransform(86.1447,88.8489);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6.1,0,6.1,0).s().p("AgzAgIgJgLQAAgCAJgJQAWgVARgOQAOgLAZABQAOABAQAJQAHAFgFAGQgGAHgEADQgGAEgDgBQgfgLgWAWIgWAWQgFAFgDAAQgDAAgFgFg");
	this.shape_106.setTransform(86.1447,88.8489);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#020203").p("AMqghQgQADgBAAQsPCRsXiNIgcgFIAAgDQGJBHGhgCQGbgCGOhKQAAABAAAHg");
	this.shape_107.setTransform(101.425,97.3435);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-81,0,81,0).s().p("AsNgaIgcgFIAAgEQGJBIGhgDQGbgCGOhJIAAAHIgRADQmOBJmPAAQmDAAmGhEg");
	this.shape_108.setTransform(101.425,97.3946);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#020203").p("AsQggIAEgKQDXAoCrASQDJAWC8AAQGRgBGGhKIABACQgDADgCAAQg3AKgbAFQhAALg6AHQghAFhCAIQguAGgyAFIiWALQgNABgZABIiCAEQhHACgOgBIiNgEQghAAgigDIjugUQgygFgugHQhSgKgsgIQgUgDhMgPQgBAAgDgE");
	this.shape_109.setTransform(101.8489,78.6717);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-79,0,78.6,0).s().p("AgVArIiNgEQghgBgigCIjugUIhggMQhSgLgsgIIhggRIADgKQDYAnCqASQDJAWC9AAQGRAAGGhLIABACQgDADgCAAIhSAPIh7ATIhiANQgvAGgxAEIiWAMIgmACIiCAEIhLABIgKAAg");
	this.shape_110.setTransform(101.95,78.7063);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#020203").p("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");
	this.shape_111.setTransform(101.4911,88.3176);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-79.1,0,79.2,0).s().p("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");
	this.shape_112.setTransform(101.6391,88.3176);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D53D85").s().p("AhvB9IiLgRQglgBg1gMQhqgXhTgyIA5guQBNgzBpgVQBqgVBIgHQAkgEAPABICRgBQCpAHBxAqQBzAqAlAoQAMANAAAKQABAJgFgCQgPANguARQhdAjicAUQhgALhkAAQhAAAhDgEg");
	this.shape_113.setTransform(101.5333,28.7441);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#1D1D1C").p("AoTBJQAbgkBPglQCdhKEHgEQEIgFCkBPQA2AZAhAeQAbAZgGAE");
	this.shape_114.setTransform(101.6965,23.6352);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#020203").p("Apfo9IAGAdQAEAlgKAsQgJAsgWAPQgLAIgJgCQhXBegqCNQhUEbDkDvIAvAvQA3AxAlAOQAeAMCBA4QCDAwBagLIEZAGICPgjQCbgpA5glQBxhLArgsQBfhiAqiXQAIg6gDhMQgHiag6heIiHizQgEgTgCgXQgEgvAIgWQhBAmhvAkQjeBHjogLQjpgLjHg/Qg+gTg0gWg");
	this.shape_115.setTransform(101.3935,94.1569);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-0.3,68.5,0.6,-93.5).s().p("Ah8I7QhaALiDgwIifhEQglgOg3gxIgvgvQjkjvBUkbQAqiNBXheQAJACALgIQAWgPAJgsQAKgsgEglIgGgdIAnATQA0AWA+ATQDHA/DpALQDoALDehHQBvgkBBgmQgIAWAEAvQACAXAEATICHCzQA6BeAHCaQADBMgIA6QgqCXhfBiQgrAshxBLQg5AlibApIiPAjg");
	this.shape_116.setTransform(101.3935,94.475);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#1D1D1C").p("AIrhOIAIAKQAJANAAAPQABAthWAoQhfAtjKAXQi7AWgwgRQhNgDhcgJQi4gUhJgiQhdgrgHgwQgHg1Brgh");
	this.shape_117.setTransform(101.9257,29.4082);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#1D1D1C").p("AgZD3QhjgEh6gSQj1glh3hLQh9hOBYhsQAggnAxgdQAtgbAXABQAMABA7gVQBMgbBIgNQECgyF6BCIArALQA0AOAuATQCTA6AgBKQAfBJhhBGQgeAWgnATIgiAPQhOAahqAXQjVAviIgNg");
	this.shape_118.setTransform(101.739,25.4853);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4D3319").s().p("AgZD3QhjgEh6gSQj1glh3hLQh9hOBYhsQAggnAxgdQAtgbAXABQAMABA7gVQBMgbBIgNQECgyF6BCIArALQA0AOAuATQCTA6AgBKQAfBJhhBGQgeAWgnATIgiAPQhOAahqAXQilAlh4AAQgjAAgdgDg");
	this.shape_119.setTransform(101.739,25.4853);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#1D1D1C").p("ADJiMQhBg/gggmIgGgHQgUgahKAEQhEADgZATQgpAegbAlQguA/AEBEQAEBCAzBBQAaAgAZATIAOAnQAGAkgrgMQgsgMgBAfQgBAPAIASQASARAaAGQA2ALAsg5QAMgRABgeQACg9g5hFQghgoAKgwQAKguAngfQAmggAtAFQA0AGAkA1IAHAMQAKgGALgMQAXgWAHgag");
	this.shape_120.setTransform(20.5376,61.8179);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4D3319").s().p("AhuEOQgagGgSgRQgIgSABgPQABgfAsAMQArAMgGgkIgOgnQgZgTgaggQgzhBgEhCQgEhEAug/QAbglApgeQAZgTBEgDQBKgEAUAaIAGAHQAgAmBBA/QgHAagXAWQgLAMgKAGIgHgMQgkg1g0gGQgtgFgmAgQgnAfgKAuQgKAwAhAoQA5BFgCA9QgBAegMARQglAwgsAAQgIAAgJgCg");
	this.shape_121.setTransform(20.5376,61.8179);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#1D1D1C").p("AiRhRIASgUQAYgWAagJQBQgcBDBvIADAOQADASgEAUQgNBChHBFQgYAXAeAwQAfAyA8ANQAzAKAOgbQAIgOgEgQQAAgKgJgIQgRgQgmALQgJgIgEgOQgHgcAdgZQA/g3ATgvQAlhYg/hyQgOgVgigWQhDgshegJQgWALgdAXQg5AugfA7IAGATQAMAVAeANg");
	this.shape_122.setTransform(181.8394,61.3895);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4D3319").s().p("ABUEQQg7gNgfgyQgfgwAYgXQBHhFANhCQAEgUgCgSIgDgOQhDhvhRAcQgZAJgYAWIgTAUQgdgNgNgVIgGgTQAfg7A6guQAcgXAXgLQBdAJBDAsQAiAWAPAVQA/ByglBYQgUAvg+A3QgdAZAHAcQADAOAKAIQAmgLARAQQAIAIABAKQADAQgHAOQgKATgeAAQgLAAgPgCg");
	this.shape_123.setTransform(181.8595,61.3951);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#845036").s().p("AgZANQACgIAKgBQADgRAKgJQALgHAPAHIgaAaQgIAKgJANQgKgGACgIg");
	this.shape_124.setTransform(56.059,160.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#BA9758").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_125.setTransform(102.7,184.55);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#BA9758").s().p("AAjgDIgiAHQgSAEgRABQAjgcAiAQg");
	this.shape_126.setTransform(97.15,183.4656);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#BA9758").s().p("AgYAMQACgQALgJQALgHAJAEQAGACAGANQAFALgBAHIgUABQgRAAgMgGg");
	this.shape_127.setTransform(97.7773,190.7554);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#845036").s().p("AgRBkQAeh5gMiLIAXgGQAFAugHA/IgQBuIgKBmIgUALQgEgXALgrg");
	this.shape_128.setTransform(87.438,154.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#BA9758").s().p("AgEAAIAEgEIAFAEIgFAFg");
	this.shape_129.setTransform(44.75,167.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#BA9758").s().p("AgHAAIAKgSQAEAAACAFQACAGgCADIgQAXQgEgJAEgKg");
	this.shape_130.setTransform(30.525,162.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#BA9758").s().p("AgIALQgEgFAEgFIAOgPQAFAFAAAIQgBAHgJAHQgBAAAAABQAAAAAAAAQgBAAAAAAQgBABgBAAQgCAAgDgEg");
	this.shape_131.setTransform(32.2582,169.0092);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#BA9758").s().p("AgcgDQAJgKAJgDQAOgFANAEQATAGAEAWQgbgKgQABQgTACgQAQQADgOAHgJg");
	this.shape_132.setTransform(38.5,164.6611);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#BA9758").s().p("AgEgxIgFgFQgGgGAAgKQAAgJAHgGQAEAHAAAIIAAALQAEACAAADQAhBQghA8g");
	this.shape_133.setTransform(46.7627,177.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#BA9758").s().p("AA9AWQgUgRgHgFQgQgKgOgBQgTgCgUAKIgpAYQgKgXAagSQAVgPAYgBQAZgBAXAMQAXANALAUQACAGAFADQAHAFgBAHQgCAIgIABIgJgQg");
	this.shape_134.setTransform(40.4343,158.6963);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BA9758").s().p("AgEAAIAEgEIAFAEIgFAFg");
	this.shape_135.setTransform(155.675,166.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#BA9758").s().p("AAgAKQgTgGgPgBQgTAAgcAFQAFgZAlgDQAKgBAOAHQAMAGAJAJQAEAEACAAQALAOgJABQgHABAAAAg");
	this.shape_136.setTransform(161.2701,164.9313);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#BA9758").s().p("AAFgLQgLgIgOAHQgMAGgIANQgGgKAEgMQAEgKAIgFQAPgJAPAEQAOADAMALQAMAMAFAPQAFARgHAOQgNgigXgOg");
	this.shape_137.setTransform(161.6327,174.1885);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#BA9758").s().p("ABDAkQgEgGgCgGQAAgDgDgCIgEgCIgugcQgSgLgYAIIguAUQAGgoA/gHQAVgCAVAMQAXANAKAUQACAFAAAEIAMAKQAEACgBAJQAAAJgFABIgBAAQgDAAgFgGg");
	this.shape_138.setTransform(161.0281,159.1854);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#845036").s().p("AgEAAIAEgEIAFAEIgFAFg");
	this.shape_139.setTransform(132.9,168.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#845036").s().p("AgEAAIAEgEIAFAEIgFAFg");
	this.shape_140.setTransform(139.825,174.075);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#845036").s().p("AAJALIgFgFQgBgEgDgBIgOgEQgHgCgBgFQgCgGAFgCQAUgHADASQAAAGAFACQAEACABADQACAEADABQAFACgBAEQAAAEgFAAQgFgHgEgDg");
	this.shape_141.setTransform(135.916,171.4668);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#845036").s().p("AgFACQgEgEgCAAQgKABgJgJQgKgLAJgLQAFgGANAKQANALgCAIQgBAEADACQATAFARALIgJAWg");
	this.shape_142.setTransform(143.9118,160.8875);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#845036").s().p("AAOC1QgKgHgEgCQAGgYgFgkQgFgpgCgWIgGh5QgGhDgMgyIAMAAQAQAjACA5IACBhQADAaAOBHQALA6AAAjQgFgBgLgIg");
	this.shape_143.setTransform(110.55,153.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#845036").s().p("AB/BvQgMgIgHgLQgWghgngSIhJgbQgcgLglgdQgogigVgPQgJgGABgQQAAgPAIgJQAfAjAwAVQAcANA7AUICUBzQgFANgFAaQgMgCgNgJg");
	this.shape_144.setTransform(129.6487,158.525);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#332723").s().p("AgPASIgIgPQADgGAHgGQAHgHAHgBQADAAAHAEIANAGQgBACAAAIQAAAJgCABQgEAEgVABg");
	this.shape_145.setTransform(109.125,132.7972);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#332723").s().p("AgnAXQgTgNADgRQAEgQAVgIQAUgHAOAEQAYAGAJAFQASAJACAPIgOAKIgXAFQgHABgIAHIgMANQgRgDgPgLg");
	this.shape_146.setTransform(85.5478,136.5773);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#6E3C28").s().p("AgKCfIgOABQALgQAAggQgBgtABgIIAgjcQAKAygFA8QgEArgOBDIgCBnQgEgCgKgBg");
	this.shape_147.setTransform(100.2833,150.75);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6E3C28").s().p("ABHAZQgJgIgDAAQgkAKgpgGQgqgFgdgSIgHgFIgkABQgWABgRgGQAegMAyALQAEACABADQBnAKCZghIADAQQgsgCgbAWQgOAMgGANIgBAAQgDAAgHgGg");
	this.shape_148.setTransform(57.45,129.4375);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#6E3C28").s().p("ABWAQQhKgMgQgBIiogFQCCggBlAZIByAbQgPADgTAAQgXAAgegFg");
	this.shape_149.setTransform(157.525,136.477);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#6E3C28").s().p("AhCASQhOgVgLgBIgFgQQAcgHAWACQAUADAcANQAgAQBRgMQBSgMAcAMQgogBgjAGQgfAGgmAPQgNAFgRAAQgXAAgegIg");
	this.shape_150.setTransform(143.25,129.0666);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#6E3C28").s().p("AgVA/IAQhtQAHg/gFguIANgKIALB8QAeBugvBKQgIACgKAIIgRANg");
	this.shape_151.setTransform(90.1882,153.225);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#6E3C28").s().p("AgTCpIgLhTQgFgzAHgjQALg2AAgtQgBgzgOgyQAMABAGAJQADAFADAJIAIAPQALAyAGBEIAGB4QACAWAGApQAEAkgFAZQgkgLgNgVg");
	this.shape_152.setTransform(107.5513,150.775);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#BA9758").s().p("AgZAkIAchBQAGgOAMALQALALgOAJQgPAKgFAMQgGAOADAOg");
	this.shape_153.setTransform(91.4843,188.883);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#BA9758").s().p("AgzAsQAFgeAPgaQAPgcAOgEQAbgGARAUIAEAFQAKAMgIAVQgMgIAEgTIgFgFQgbAAgNAHQgLAGgGAWQgIAagIAJQgFgDgIABg");
	this.shape_154.setTransform(37.273,175.0703);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#BA9758").s().p("AgNAxQgIhFAkgeIgTBlQgGgDgDABg");
	this.shape_155.setTransform(82.3531,185.575);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#BA9758").s().p("AhOgHQAXgaAggMQAmgNAlAGQApAHAQAdQhIgeg7AUQgYAIgWAYIgoAxQAHgkAXgag");
	this.shape_156.setTransform(94.775,175.0077);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#BA9758").s().p("AgOgKQACABAIABQAIAAADADQAIAFAAALQgTgFgKgQg");
	this.shape_157.setTransform(107.175,174.425);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BA9758").s().p("AAOAwIAAgeIguhfQAaABAVA4QAWA2gFAsQgSgIAAgWg");
	this.shape_158.setTransform(111.9639,183.325);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#BA9758").s().p("AAThcIgWBdQgIAzAOAoIgKABQgfh1A5hEg");
	this.shape_159.setTransform(152.9821,176.45);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#332723").s().p("AgggMQAPgHARABQANABAUAFQgCAfgbAAQggAAgEgfg");
	this.shape_160.setTransform(103.825,126.9183);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#332723").s().p("AgeASQAAgYANgIQAPgHAXACQAHAFACAKQADALgJAGQgLAHgPABQgJAAgTgDg");
	this.shape_161.setTransform(74.8284,171.629);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#332723").s().p("AAFAVIgmgEIAWgaQAMgOAUAEQAFAFAEAHQAFAHgCAFQgCAIgIAEQgHAEgJAAIgCAAg");
	this.shape_162.setTransform(68.5188,177.4745);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#332723").s().p("AgiAUIgDgPIAEgYQAOgBAWAEQAZAEAKAAQgDAYgZAHQgIACgQAAIgUgBg");
	this.shape_163.setTransform(78.25,125.89);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#332723").s().p("AgfASQgHgTAOgMQAGgFAPgEIAOABQALAAAFAEQAGAFACAVQgUAOgUAAQgNAAgNgFg");
	this.shape_164.setTransform(130.9972,178.5199);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#332723").s().p("AgcAVQgLgHAAgNQAAgSAQgIIANgBIAtAEIAFAQQgGAagjAGIgIABQgKAAgJgGg");
	this.shape_165.setTransform(123.65,129.2579);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#BA9758").s().p("AgWCIIADibQAChLAogpQgqCRAYByQgBADgEAFIgEAEg");
	this.shape_166.setTransform(149.625,173.825);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#BA9758").s().p("AgHBiIAEggQAGgogIg2QgMg/gEgiQAnAmACBKIgBBDQgBAqAEAcQgHgDgPAGQgIgLABgSg");
	this.shape_167.setTransform(50.275,174.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#BA9758").s().p("AAAANQgLgxgOgMQAdAFANAgQAMAagFAhIgEABQgNAAgHgkg");
	this.shape_168.setTransform(108.0633,185.7637);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#BA9758").s().p("AhrBKQAJg1AbgmQAggtAvgLQAjgIAbALQAcALAJAdQgbgXgigBQgggBgdATQhDApADBIg");
	this.shape_169.setTransform(94.75,184.002);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#BA9758").s().p("AgGADIADgGIAGgCIAEAGIgFAFg");
	this.shape_170.setTransform(110.875,190.975);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#6E3C28").s().p("AivgeQBFgYB1AZQA4ALAcABQAtABAkgTIAAAaQgCAQgJABIjAARIALASg");
	this.shape_171.setTransform(157.925,146.2622);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#6E3C28").s().p("AAlBKQACgGgFgDIhbgEQg2gCgggNQgagMgHgtQgGgjAHgjQAFAUAUAHQATAIAYgGQCigrB9AkIifAHQgXABhBAKQg4AIglgCQgGAAgCANQgBAMAEAHQARAbAoABQAbABA9gNQBFgOAggCQA6gEApARIgiAUQgUAMgMAFIhUAjQAFgDACgFg");
	this.shape_172.setTransform(40.274,142.225);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#DFBD7E").s().p("AhKB9QgDgOAGgNQAGgOAPgKQAOgJgLgKQgMgLgGAOIgdBCIgVgIQgEhIBEgqQAegSAfABQAiABAbAWQgJgcgdgLQgagLgiAIQgwALggAsQgbAngJA1IgVgIIAUhlQglAdAIBHQgVAIgDgoQgEgpAVgoQAXgwAYgiIAUgLIARgNQAKgIAJgCQAZgHAvgBIANAAQAKAAAFACQAJAGAQABIAYABQANAVAlAKQAEABAKAIQAKAIAGABQAAAjAnAkIAIBnIgfAKQAEgsgVg3QgWg3gagBQAAgLgIgGQgDgDgJAAQgIgBgCgBQgQgdgpgHQgkgGgnANQggAMgXAaQgXAbgHAjIAogwQAWgZAYgIQA7gUBIAeQAKARAUAFIAvBfIAAAeQAAAWASAIQhYAYhJAAQgqAAgngJgAgRBdQgLAIgCASQASAJAfgFQABgHgFgLQgGgNgGgDIgGgBQgHAAgHAFgAB2BvIAJAEIAFgGIgEgHIgHACQAFghgMgbQgNgfgegFQAOALALAzQAJAoAQgGgAAkAlQgEADAAAEQAAAFAEADQADADAEAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgEgFAAQgEAAgDAEgACoBuIAAAAIAAAAg");
	this.shape_173.setTransform(98.3995,180.1022);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#6E3C28").s().p("AhSAwQgNgagMgQQAjgeBBgUQA9gSAMgOQANgNAEgCQALgGAOAHQgsAYgJAeIgIAMQgLgBgEABQgFAAABAFQAAAEAFAAQAJAAAHACQgCANgNANQgHAHgTAPIhHA7IgTgugAgpAMQgLAIgEASQgKACgCAHQgCAIALAGQAIgNAJgKIAbgaQgIgEgGAAQgHAAgFAEg");
	this.shape_174.setTransform(60.325,157.154);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#6E3C28").s().p("AiiC3QABhIgDgbQAXgDATgcQAVgiArgSQAYgJA1gRQAOgGAagVQAagXAPgGQAMgGACgUQACgUgGgIQgRAYgRAFIiJAqIgBgMQAGgGACgGQAhABAjgSIBAglQAggTAKgLQARgUgDgcIANgMQAIgHAHgBQAMCLgfB5QgLArAEAXQgYAigXAwQgFgYAIgtQAHgmgIgJQgDgEgMAFQgMAHgJANQgXgCgPAIQgNAHAAAZIgKAVQgVgEgMAOIgWAbIhaBJQgMgLABgwg");
	this.shape_175.setTransform(71.3674,162.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#DFBD7E").s().p("AAHCSQgxgWgggWQAIgKAIgaQAGgXALgFQAOgIAbABIAGgHQgQgUgcAHQgOADgPAcQgPAbgFAeIgggcQgWgTgGgQQgKgcALgnQAGgYASgoQAQgiAdgVQAZgTAlgKQAcAFAcARQAbAPATAZQAMAQAMAaIAUAuQAFANAEAcQADAbgBBIQgBAvAMALQgRAOgUgGQgEgbABgrIABhDQgChKgogmQAEAjAMA9QAJA4gHAoIgEAfQgBASAIALIhWgigAA2AZIAECIQAig8ghhQgAAEAjQgEAUAMAIQAIgVgKgNgAArAFQAAAJAGAHIAFgGIAAgKQAAgHgEgIQgHAHAAAIgAhegDQgEADAEAGQAEAGAGgFQAJgGABgHQAAgIgFgFgAAigXIAFAEIAFgEIgFgGgAgihBQgJADgIAKQgIAKgDAOQARgQASgCQARgBAaAKQgEgXgRgGQgGgCgHAAQgIAAgIADgAhuhEQgEAKAEAJIAQgZQACgDgCgGQgCgEgEgBIgKAUgABBhGQAIgBACgHQACgIgHgFgAAAh4QAOACAPAKQAIAFATASIAGgPQgKgUgYgOQgXgMgYABQgYABgWAQQgZARAJAZIAqgZQARgJARAAIAFAAg");
	this.shape_176.setTransform(40.8994,169.55);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#DFBD7E").s().p("AiICyIgRgNQAGgTgCgZIgDgsQgBgOAGgUIALggQAFgZAFgMIARgvIAbg1QALgUAdgOIA0gUQBOALAtBhQATAnACAhQADAjgQAKQgMAJgPAOIgZAYQgaAXgrASIhHAcQgQgoAJgzIAWhdQg5BDAfB2QgQARgPAAIAFgFQAEgEABgDQgZhyAriSQgpApgCBKIgDCcQgHADgGAAQgGAAgGgDgAAkAiQAXAPANAiQAHgOgFgRQgFgQgMgMQgMgLgOgDQgQgEgPAJQgHAFgEAKQgEAMAGALQAIgOALgGQAGgDAGAAQAHAAAHAEgABDgYIAGgCQAKgBgLgNgAgggiIAEAFIAFgFIgFgFgAAYgqQAQAAATAGIAHgIQgJgLgNgGQgNgHgLABQglADgFAaQAZgEASAAIADAAgABWhPQACAGAEAGQAFAHAEgBQAFgBAAgJQABgJgEgCIgMgKgAAhhzIAuAdIAKgPQgKgVgXgNQgVgMgWACQg+AHgGApIAugVQAJgEAIAAQANAAAMAHg");
	this.shape_177.setTransform(158.5424,169.5815);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#6E3C28").s().p("AAyDMQgCgWgGgFQgFgEgLAAIgPgBQgIgKgWgOQgfgSgIgHIglgnQgWgXgYgCQANAkAEAqQADAYACAuQgngkAAgjQAAgjgLg7QgOhFgDgaIgChiQgDg5gQgjQAWgCAEgDQACgCAAgJQgBgJACgBQANAWAEAoIAIBDIBAAeQAVAKArAbQAlAUAhgFQgFgGgdgWQgRgOADgUQAYAUAfAPQAQAJAnAPIBlApIgbA0QgSgMgSgGIgGAHIAhAhIgIAYIiUhzQg8gUgbgNQgxgVgegjQgIAJgBAPQAAAQAJAGQAUAPApAiQAlAeAcAKIBIAbQAoASAWAhQAHALAMAIQANAJAMACIgLAfQgHAVABAOIAEAsQABAZgFASgABjCWIAFAFIAFgFIgFgEgABSCRQAFAAABgEQABgDgFgCgABFCDIAFAFIAFgFQgBgEgEgBgAAtBqQgFABABAGQACAGAGABIAPAGIAEgJQgCgNgLAAQgEAAgGACgAAdBbIAGAFIAEgFIgEgFgABxgNQgJALAKAJQAJAKAKgBIAJgHQABgJgNgJQgHgGgFAAQgDAAgCACg");
	this.shape_178.setTransform(129.45,159.025);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#845036").s().p("AiQBFIBIg7QATgOAHgHQANgNACgOICIgqQASgFARgYQAGAIgCAUQgCAUgMAGQgPAGgbAXQgZAVgOAFQg1ARgZAKQgqATgWAhQgSAcgYADQgDgcgGgNg");
	this.shape_179.setTransform(68.4,159.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#845036").s().p("AgEAEQgFAAAAgEQgBgEAFAAQAEgBAKABIACAKQgHgCgIAAg");
	this.shape_180.setTransform(64.1477,155.175);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#845036").s().p("AAlDcQgQgBgJgFIADhnQAOhEADgrQAFg7gKgyIggDcQgBAIABAtQABAfgMARQguABgZAHQAuhKgehvIgKh7QgCgQgSgJQgJgFgYgGQgPgEgUAHQgVAIgEAQQgDASATANQAPALARADQADAcgRATQgKAKggATIhAAlQgkASghAAQAJgeAsgYQgOgHgLAGQgEACgNANQgMAOg+ASQhBAUgjAfQgTgZgbgQQgbgRgegEIApgMIBUgiQAMgFATgLIAigVQgogSg7AEQgfADhGAPQg9ANgbgBQgpgCgQgbQgFgHACgNQABgNAGABQAlACA4gJQBBgKAZgBICegGQh8glijArQgZAHgTgIQgUgIgFgTQAHghAgg7QAzgEBiAGQBiAGAwgEIC8gOIgEAZQiZAhhogLIgDAFQAdATAqAGQAqAFAlgJQACgBAJAIQAJAIACgCQAHgNANgMQAbgXAsACQAhACANgDQAYgHAEgZQAdAABIAOQAxAKAhgOQAEAgAhAAQAbAAACgfQALADASgFIAjgIQAugJAfAdQgQAIAAATQAAANAMAHQALAHAPgCQAlgGAFgbQALABBOAWQA2APAegMQAmgPAfgGQAjgHAoABQgbgMhTAMQhRANghgRQgbgNgVgDQgVgCgcAHIgvgEQgEgRAEgHQACgEAKgCQALgCAGACQAXAKAlAAQAvABALACQAeAGApgCIBGgDIDbACQArA1gUB6QgkATgtgBQgcgBg4gLQh2gZhFAYICfBJQAPAGASADIg1AUQgdAOgLAUIhlgoQgngQgQgIQgegPgagVQgDAVASANQAdAXAFAGQggAEgngUQgrgagVgLIhAgdIgIhDQgEgngNgXIgNgGQgHgEgDAAQgIABgHAHQgHAGgDAHQgDgJgDgFQgGgJgNgBQAPAyAAAzQABAtgLA1QgIAkAGAzIAKBTIgYgBgAGYhdICoAGQARABBKAMQA2AJAhgHIhygcQgsgLgyAAQhAAAhKASgApPitQASAGAWAAIAjgBIAFgFQgYgGgUAAQgUAAgQAGg");
	this.shape_181.setTransform(99.4042,145.5806);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D96344").s().p("AgcAfQAjgaAGgmQALAHADAMQADAKgFAKQgLAcgYAAQgIAAgKgDg");
	this.shape_182.setTransform(121.2063,134.0078);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D96344").s().p("AAiAmQgDgBgFgHIgJgJQgZgLgLgIQgSgNgCgaIBLA1QAGAEgDAKQgCAIgDAAIAAAAg");
	this.shape_183.setTransform(76.8141,136.555);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#D96344").s().p("AgPAXQgKgPAIgOQAHgNAIgHQALgLAKAIQADATgBAPQgBAVgIAEQgHADgFAAQgJAAgGgKg");
	this.shape_184.setTransform(156.9172,123.2591);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D96344").s().p("AhCAbQgGgHgGgEQAXgMAKgQQgQgCgMgLQgLgKAEgIQAMgIAQAIIAVALQAggFAMAFQADABAFAMQAFALAEACQAJAEAJgBQAIgBAFgFQAFgDAAgFQAAgFgFgEIgUgMQAFgGAJAAIAQABQAMAJgBANQgBAJgJAQQgKAVgHAHQgLAJgRgDQgpgHAFguQgNAPgLAQIgSAgIgPgVg");
	this.shape_185.setTransform(91.3772,145.95);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D96344").s().p("ABLDCQgQgBgrgKQgkgJgaADQgTAEgTgJQgSgIgNgPIAfABQAPgCALgKQgSgRgXgDQgPgDgeAEQguAEghgYQgjgXgEgrQAAgDAFgHIAGgIQAAgBAAgBQABAAAAAAQABgBAAAAQABAAABAAQADgBACADQADADACAJIAFAOQAHAMAbAAQAcABAHgLQAUgbgOgfQgLgbgdgVQgigZgGgkQgGgoAjgdQACAnAQAXQAPAVAgAMQBAAYAfA0IAVAgQALAQAQAEQAOADANgFQAPgFABgQQgQgIgHgHQgOgNALgSQAOAXAZANQAVAJAiADIAFBEQABAGAIAIQAIAHAGABQAFABAIgHQAIgGAEgJQAOAOAJAGQAMAIARADQARAEAdgRQACAIgCAKQgDALgHADQgQAIgWgKIgfgMQghAJgdgFQgkgGgLgaIAHgiQAEgZgXgIQgGAcgRAPQgRAPgWgDQgrgGgPg4QgIgdgEgIQgJgQgSgCIgLAAQAGAjABAMQABAegMATQgTAdhCgDIgGAHQARANBFAFQBHAFAuAiQA/AvBOgBIA6gCQAfAAAWAJgAh5g3QAJAOAGgFQAFgGgHgGg");
	this.shape_186.setTransform(55.5852,137.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D96344").s().p("AABCMQApgRAwANQAAgKgFgHIgLgNQAYgNANgNQAPgQADgUQgLANgUAFQgUAFgBgKQgGgrAqglQhAAOgcA0IgRAiQgHAQgNAAIh8AHIgOADQgIACgEgDQgHgFgHgWQgRAVgpAAQglAAgEAPQAagFACARQABASgWgDQgPgcgjgkQAlAHAbgjQANAVARADQAJACAKgFQANgEACgKQACgGgIgIQgHgGgGgDQAJgHANABQALABAEAGQAXAfAOADQAJACBAgIQADAAALAJQAJAIAEgCQAGgDAFgSQAHgZAFgLQAXgxBKgLIAOgdQAIgQAMgMQANAhApgJQAggHA2gkQAPgJAHgSQAFgNADgYQAaAagMAjQgLAdghAYQghAVgPALQgbAVgNAaQAjAIAkgLQAjgJAbgYQgCgSAOAAQAOAAgEARQgbAyhbAcQgqAMgMAHQgWAOACAWQABAJAVgBQATgBAOgHQgOAjhAACQhQACgZAQQgiAXgkAAQAvgjAWgJg");
	this.shape_187.setTransform(143.6194,138.025);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E59B4F").s().p("AAFCIQgEAAgTgKQgQgIgNACQg3AGgrgRQgVgJggAAIg6ACQhNABhAgvQgvgihGgFQhFgFgRgNIgLgHQAGADACgFQAAgCABgBQAAgBABAAQAAAAAAAAQAAAAABAAIAGAGQBBAEATgdQAMgTgBgeQAAgOgHgiIAAgBIACgBQAEgEgCgEIAIAKQASABAJARQAEAIAIAdQAPA4AqAHQAXADASgPQAQgPAHgcQAXAIgEAYIgHAjQALAZAkAGQAdAFAggJIAgAMQAWAJAQgHQAHgEACgLQADgJgDgIQAMABAGADQAGAEAGAHIAPAVIASggQAKgQAOgOQgFAuApAGQARADAKgJQAHgHALgVQAJgQABgJQABgMgMgKQASACAXAWQAUATAQgGQAHg7AuADQgJAQgBAPQgCASAKAJQAjAjAPAcQAWADgBgSQgCgRgaAFQAEgPAlAAQApAAARgUQAHAVAHAFQAEADAIgCIAOgDIB8gHQANAAAIgPIARgiQAcg1BAgOQgqAmAGArQABAKAUgFQAUgFALgNQgDAUgPAQQgNAMgYANIALANQAFAHAAAKQgwgNgpARQgXAJgvAjQgXARgtACQg0AAgXADIiFAQQgdACgaAAQgqAAgkgGgAoHiNQALAHACADIgBAAQgFAAgHgKgAn6iDIAAAAg");
	this.shape_188.setTransform(95.325,146.2411);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFEFE").s().p("AhDDOQgEgBgUgJQgQgIgNABQg3AHgrgSIiwgBQgRAAgrgLQglgJgZAEQgTADgTgJQgTgIgMgPIAeABQAPgCALgKQgRgQgYgEQgOgCgeADQguAEghgXQgjgYgEgrQgBgDAFgHIAGgHQABgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAQAEAAACACQACACADAJIAFAOQAHAMAbAAQAbABAIgLQATgagNggQgMgagdgWQghgZgGgkQgGgnAjgeQABAoAQAWQAPAVAhAMQBAAYAfA0IAUAhQAMAPAQAEQAOAEANgFQAQgGABgPQgRgIgHgIQgNgNAKgSQAOAXAaANQAVAKAhAEIAGBCQAAAGAJAIQAIAIAFABQAFAAAIgHQAIgGAFgJQAOAPAIAFQANAJARADQARADAcgRQAMABAGAEQAWgMAKgRQgPgCgMgLQgMgLAEgHQAMgJARAJIAVALQAggFAMAFQAEABAFALQAEALAFADQAIAEAKgBQAIgBAFgFQAEgEABgEQAAgFgFgEIgVgNQAGgFAJAAIAQABQASACAWAWQAUATAQgGQAHg7AuACQgJAQgBAQQgCASAKAJQAlAHAbgkQANAWARACQAJACAKgEQANgFACgJQACgGgIgJQgHgGgGgCQAJgIANABQALABAEAHQAXAfAOADQAJABBAgHQADgBALAJQAJAJAEgCQAGgEAFgRQAHgaAFgKQAYgxBKgMIAOgcQAIgRAMgLQANAhApgKQAggHA2gjQAPgKAHgRQAFgNADgYQAaAagMAiQgLAeghAXQghAVgPAMQgbAUgNAbQAjAHAkgJQAjgKAbgYQgCgTAOAAQAOABgEARQgbAyhbAbQgqANgMAHQgWANACAXQABAIAVgBQATgBAOgGQgOAihAACQhQADgZAQQgjAWgkAAQgXARgtADQg0gBgXADIiFAQQgdADgaAAQgpAAgkgGgAjfALQgDgBgFgHIgJgIQgagLgLgIQgSgOgCgaIBMA2QAGAEgDAJQgCAIgDAAIAAAAgACdgVQAkgaAGgnQALAIADALQADALgFALQgLAbgZAAQgIAAgKgDgAIPiIQgKgPAIgPQAHgNAIgHQAMgLAKAIQADATgBAQQgBAVgIAEQgHADgFAAQgKAAgGgKg");
	this.shape_189.setTransform(102.6172,139.2661);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#020203").p("AgmgQQALgMAGgFQACgCADADIA1AxQAEAEgEADIgBACQgIAIgEAAQgEABgIgIIgsgnQgEgCgCgCg");
	this.shape_190.setTransform(105.175,93.207);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.9,0,4,0).s().p("AAMAbIgsgnIgGgEIARgRQACgCADADIA1AxQAEAEgEADIgBACQgIAIgEAAIAAAAQgEAAgIgHg");
	this.shape_191.setTransform(105.175,93.207);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#020203").p("AAmAZIgIAHQgHAGgCgBQgDAAgGgGIguguQgFgGAAgCQAAgBAGgFIACgCQAGgFACAAQADAAAFAGg");
	this.shape_192.setTransform(70.7353,92.0498);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.9,0,3.9,0).s().p("AAWAlQgDAAgGgGIgugvQgFgFAAgCQAAgBAGgFIACgCQAGgFACAAQADAAAFAGIA1A3IgIAHQgGAFgDAAIAAAAg");
	this.shape_193.setTransform(70.625,92.0498);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#020203").p("AAlAVIgFAGQgHAGgEABQgDAAgIgGIgpgmQgIgHABgBQAHgJAIgFQADgCAFAFIAwAtg");
	this.shape_194.setTransform(114.1602,92.9714);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.8,0).s().p("AALAcIgpgmIgHgIQAHgJAIgFQADgCAFAFIAwAtIAEAFIgFAGQgHAGgEABQgDAAgIgGg");
	this.shape_195.setTransform(114.0734,92.9714);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#020203").p("AAmAYIgKAJQgHAEgFgGIgxguQgFgEAEgFIADgDQAIgGADAAQADAAAHAHQAUAUAKAJQAGAGAMAPg");
	this.shape_196.setTransform(96.7507,93.2842);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.7,0,3.8,0).s().p("AAPAfIgxguQgFgEAFgFIADgDQAIgGADAAQADAAAHAHIAeAdIASAVIgLAJQgDABgCAAQgEAAgDgDg");
	this.shape_197.setTransform(96.8434,93.2842);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#020203").p("AgUgjQAGAEABABIAwAxQAFAEgFAFQgLAJgEgBQgBgBgKgIQgcgcgPgOQgGgGAHgFIAHgGQABgBAFgCg");
	this.shape_198.setTransform(88.125,93.0921);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.7,0,3.8,0).s().p("AAUAkIgLgJIgrgqQgGgGAHgFIAHgGIAGgDIAHAFIAwAxQAFAEgFAFQgKAIgEAAIgBAAg");
	this.shape_199.setTransform(88.125,93.055);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#020203").p("AgVghQAFADABABIAyAtQAGAFgGAEQgHAHgFABQgEACgGgFIgtgnQgFgEAAgCQAAgDAEgEQACgCAKgJg");
	this.shape_200.setTransform(122.8125,92.4937);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.8,0).s().p("AANAeIgtgnQgFgEAAgCQAAgDAEgEIAMgLIAGAEIAyAtQAGAFgGAEQgHAHgFABIgCABQgEAAgEgEg");
	this.shape_201.setTransform(122.8125,92.4673);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#020203").p("AAUAiIgIgFIgnghIgBgCQgFgCgCgCQgDgDAAgEQABgEAGgFQAGgGAEAAQACgBADACQATAWAfAWQAFAEAAABQAAACgFAEIgIAGQgDACgDACg");
	this.shape_202.setTransform(131.6969,91.945);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AAMAdIgnghIgBgCIgHgEQgDgDAAgEQABgEAGgFQAGgGAEAAQACgBADACQATAWAfAWQAFAEAAABQAAACgFAEIgIAGIgGAEg");
	this.shape_203.setTransform(131.6969,91.945);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#020203").p("AglgVIADgFIAEgDQAHgGAEAAQADABAHAHIAuAvQAEAEgEAEQgLAGgBABQgDACgEgDIgygxg");
	this.shape_204.setTransform(79.2451,92.6844);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AASAiIgzgxIgFgGIAEgFIADgDQAIgGADAAQADABAHAHIAvAvQADAEgDAEIgNAHIgCABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_205.setTransform(79.3,92.6844);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#020203").p("AgTggIAEADQANAPAiAZQAGAEAAACQABACgGAFQgIAIgDABQgDAAgIgHIgrghQgEgDAAgCQgDgDADgDQAEgEAJgIg");
	this.shape_206.setTransform(149.1646,89.8506);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AALAaIgrghQgEgDAAgCQgDgDADgDIANgMIAEgCIAEADQANAPAiAZQAGAEAAACQABACgGAFQgIAIgDABQgDAAgIgHg");
	this.shape_207.setTransform(149.1646,89.875);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#020203").p("AAYAmQgIgFAAgBIgsgrQgKgKABgEQAAgEANgIQAEgDAFAFQAPATAFAFQAJALAUATQAFAEAAACQAAACgFADg");
	this.shape_208.setTransform(61.8488,91.3225);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AAQAhIgsgsQgKgJABgFQAAgEANgHQAEgDAFAFIAUAYIAdAdQAFAFAAACQAAABgFAEIgKAHIgIgFg");
	this.shape_209.setTransform(61.8488,91.2688);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#020203").p("AAWAhIgJgFIguglQgIgFAGgHQAKgKABAAQACgBADAAQADAAACACQAYAZAZARQAHAFgGAFIgIAIg");
	this.shape_210.setTransform(140.3858,91.1354);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AANAcIguglQgIgFAGgHIALgKIAFgBQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAYAaAZAQQAHAFgGAFIgIAIIgGADg");
	this.shape_211.setTransform(140.3858,91.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#020203").p("AAWAnIgJgHIgvgyQgIgJAJgGIAFgEQAIgEAFAGIAnAtIALALQAHAGgHADQgDACgGAEg");
	this.shape_212.setTransform(53.1683,90.2962);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AANAgIgvgyQgIgIAJgHIAFgDQAIgEAFAGIAnAtIALALQAHAGgHADIgJAGIgEACg");
	this.shape_213.setTransform(53.1683,90.245);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#020203").p("AglgcIAMgKQAGgEAFAGIAxA7QAEAFAAACQAAACgFAEIgFADQgGAEgFgGIgzg8g");
	this.shape_214.setTransform(35.41,87.3836);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AASAlIg0g8IgDgFIAMgKQAFgEAFAGIAyA7QADAFAAACQAAACgEAEIgGADIgEACQgEAAgCgEg");
	this.shape_215.setTransform(35.5,87.3836);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#020203").p("AglgZQAEgIAKgFQAFgCAFAGIAuA2QAGAHgBADQAAADgIAFQgJAEgGgIIgxg3g");
	this.shape_216.setTransform(44.2679,88.881);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.7,0,3.8,0).s().p("AAOAiIgxg3IgCgEQADgIALgFQAEgCAFAGIAuA2QAGAHAAADQgBADgIAFIgFABQgFAAgFgFg");
	this.shape_217.setTransform(44.3019,88.881);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#020203").p("AAVAhIgEgCIgzgnQgGgFAFgGIAHgHQAGgGAEAAQABABAHAFIAtAlQAFAFgDAEIgMAMQgBAAgDABg");
	this.shape_218.setTransform(157.921,88.6102);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AARAfIgzgnQgGgFAFgGIAHgHQAGgGAEAAIAIAGIAtAlQAFAFgDAEIgMAMIgEABg");
	this.shape_219.setTransform(157.921,88.6482);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#020203").p("AAUAhIgFgEIgxgmQgGgEAFgGIADgEQAIgIADgBQADAAAJAHIAuAkQABABAAACQABACgBAAQgCADgNANg");
	this.shape_220.setTransform(175.5489,85.4498);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AAPAdIgxgmQgGgEAFgGIADgEQAIgIADgBQADAAAJAHIAuAkIABADIAAACIgPAQIgDABg");
	this.shape_221.setTransform(175.5489,85.425);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#020203").p("AgTggIAHAFIAuAmQAEADAAABQABACgEAEIgJAJQgFAGgGgFIgzgpQgCgCABgCQAEgGAKgLg");
	this.shape_222.setTransform(166.8138,87.0915);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-3.8,0,3.9,0).s().p("AAPAfIgzgpQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAOgRIAEgBIAHAFIAuAlIAEAFQABACgEADIgJAKQgCADgDAAQgDAAgDgCg");
	this.shape_223.setTransform(166.8138,87.1136);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#020203").p("Ag4AUQALgPARAEQAZAFAUgRQACgCATgUQAGgGAEAGIAHAGQAEADAAADQAAACgEADQgVASgMAIQgNAJgKABQgdAFgWgLg");
	this.shape_224.setTransform(98.8142,96.8425);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.7,0,5.8,0).s().p("Ag1AWIgEgCQALgPARAEQAZAFAUgRIAVgWQAGgGAEAGIAHAGQAEADAAADQAAACgEADQgVASgMAIQgNAJgKABIgRABQgTAAgPgHg");
	this.shape_225.setTransform(98.925,96.8425);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#020203").p("Ag6AVQAFgJAHgCQAGgDAKACQAWAFAUgQQAGgFAUgTQAHgGAEAHQABABAFAEQAEADAAACQAAACgEAEQgJAIgFADQgZAVgTAFQgMADgRgCQgTgCgHgGg");
	this.shape_226.setTransform(107.575,96.746);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,5.9,0).s().p("AggAdQgTgCgHgGQAFgJAHgCQAGgDAKACQAWAFAUgQIAagYQAHgGAEAHIAGAFQAEADAAACQAAACgEAEIgOALQgZAVgTAFQgHACgJAAIgNgBg");
	this.shape_227.setTransform(107.575,96.746);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#020203").p("Ag7AYQAMgRARADQAWAEAUgQQAKgIASgRQAGgFAFAFIAIAIQABAFgCABIggAbQgXAUgngEQgEAAgTgGg");
	this.shape_228.setTransform(116.2031,96.4391);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AgkAeIgXgGQAMgRARADQAWAEAUgQIAcgZQAGgFAFAFIAIAIQABAFgCABIggAbQgTARgfAAIgMgBg");
	this.shape_229.setTransform(116.2031,96.4391);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#020203").p("AgMAdIgmgIQgEgDgCgBIAFgFQAIgKAPAEQAXAGAXgSIAYgUQAEgEAEAEQADADAGAGQABABAAACQABADgBABQgkAagJAFQgFADgIACQgJACgFABg");
	this.shape_230.setTransform(90.1801,96.825);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.8,0,5.9,0).s().p("AgzAVIgHgEIAFgFQAIgKAQAEQAXAGAWgSIAYgUQAEgEAEAEIAKAJIABADQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgsAfQgFADgJACIgOADg");
	this.shape_231.setTransform(90.3333,96.825);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#020203").p("Ag5ARIAIgJQAIgGAHACQAfALAcgaIAQgOQAFgEAFAFIAIAIQAEAEgEAEQgIAGgPAMQgOALgMADQgIADgRABQgVAAgPgHg");
	this.shape_232.setTransform(81.3619,96.4684);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("Ag0AVIgHgEIAJgJQAHgGAIACQAeALAcgaIAQgOQAFgEAFAFIAIAIQAFAEgFAEIgXASQgOALgMADQgIADgQABQgWAAgOgHg");
	this.shape_233.setTransform(81.5125,96.4684);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#020203").p("AA9gTIggAeQgWAWgqgBQgFAAgHgCQgJgDgEgBQAEgIAIgEQAHgEAHABQAZAEAUgSIAdgaQAEgEADADg");
	this.shape_234.setTransform(125.1647,95.9079);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6.1,0,6.1,0).s().p("AgjAgQgEAAgIgCIgNgEQAEgIAIgEQAHgEAHABQAZAEAUgSIAegaQADgEADADIAOALIggAeQgVAVgnAAIgEAAg");
	this.shape_235.setTransform(125.15,95.9079);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#020203").p("Ag5APQAIgIAFgCQAIgEAJAEQAUAHAVgPIAcgWIAAgBQAGgEAMAQQADAEgGAEIgfAXQgOAKgSAAQgcABgRgJg");
	this.shape_236.setTransform(72.6937,95.964);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("Ag0ATIgGgEQAHgIAGgCQAHgEAJAEQAVAHAUgPIAcgWIABgBQAGgEALAQQADAEgFAEIggAXQgOAKgSAAIgFAAQgYAAgPgIg");
	this.shape_237.setTransform(72.8279,95.964);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#020203").p("Ag6AbQAEgIAIgEQAHgEAHABQARACARgKQAOgHAUgWIADgDQAGgHAGAGQAKAIAAACQAAACgJAJIgRAOQgbAbgfAAQgKAAgTgDg");
	this.shape_238.setTransform(133.8349,95.231);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("Ag1AeIgGgDQAEgIAIgEQAHgEAHABQARACARgKQAOgHAUgWIADgDQAGgHAGAGQAKAIAAACQAAACgJAJIgRAOQgbAbgfAAQgKAAgTgDg");
	this.shape_239.setTransform(133.9263,95.231);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#020203").p("AA7gLIgQALQAAABgPALQgKAHgHADQggANgjgSQgHgDAGgFQALgJAOADQAYAIAXgRIAVgSQAHgFAEAGg");
	this.shape_240.setTransform(64.3422,95.3205);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("Ag3ARQgHgDAGgFQALgJAOADQAYAIAXgRIAVgSQAHgFAEAGIAMAMIgQALIgPAMQgKAHgHADQgNAFgOAAQgUAAgUgKg");
	this.shape_241.setTransform(64.224,95.3205);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#020203").p("AA7gVIgMANQgXAWgOAJQgdASglgKQgGgCAEgFQAMgOAPADQASADASgQQAKgHASgUQAHgHACAAQACAAAHAGg");
	this.shape_242.setTransform(142.8853,94.3735);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("Ag3AfQgGgCAEgFQAMgOAPADQASADASgQQAKgHASgUQAHgHACAAQACAAAHAGIAIAHIgMANQgXAWgOAJQgTAMgWAAQgMAAgNgEg");
	this.shape_243.setTransform(142.783,94.3735);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#020203").p("Ag7ALIAQgLQACAAAGABQAdAMAbgWIARgPQAHgFAEAGIAJAKQAEAEgFAEIgZARQgiAYgogOIgRgIg");
	this.shape_244.setTransform(55.3513,94.379);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6,0).s().p("AgqAWIgRgIIAAgDIAQgLQACAAAGABQAdAMAbgWIARgPQAHgFAEAGIAJAKQAEAEgFAEIgZARQgWAPgWAAQgPAAgPgFg");
	this.shape_245.setTransform(55.3513,94.379);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#020203").p("Ag6AeIAQgPQAEgDAFABQAcAFAWgZQAOgNAKgMQAEgFAFADIABABQAKAIABACQABADgJAIQgVAUgLAKQgSARgeABQgGAAgTgCg");
	this.shape_246.setTransform(151.2027,93.2071);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("Ag0AiIgHgEIAQgPQAEgDAFABQAcAFAWgZQANgNAKgMQAFgFAFADIABABQAKAIAAACQABADgJAIQgUAUgMAKQgSARgeABIgCAAIgWgCg");
	this.shape_247.setTransform(151.38,93.2071);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#020203").p("Ag6ALQANgKADgBQAEgBAGABQAbANAZgUIAWgSQAFgEADAFQACACAJAJQADADgEADQgZATgHAFQgQALgRgBQgegBgRgLg");
	this.shape_248.setTransform(46.3289,93.257);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgHAbQgegBgRgLIgGgEIAQgLQAEgBAGABQAbANAZgUIAWgSQAFgEADAFIALALQADADgEADIggAYQgPAKgQAAIgCAAg");
	this.shape_249.setTransform(46.5067,93.257);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#020203").p("AgFAcQgegCgSgLQgFgDAAgCQAAgCAFgEQALgIANAFQATAKAUgOQAOgJAOgNQAGgEAEAFQADAEAHAIQABABgBACQAAADgBAAQgIAGgQAMQgOALgNADQgGACgFAAg");
	this.shape_250.setTransform(37.8125,91.9809);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.8,0,5.9,0).s().p("Ag1APQgFgDAAgCQAAgCAFgEQALgIANAFQATAKAUgOQAOgJAOgNQAGgEAEAFIAKAMIAAADIgBADIgYASQgOALgNADQgGACgFAAQgegCgSgLg");
	this.shape_251.setTransform(37.8125,91.9809);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#020203").p("Ag8AhIAFgFQAKgPASACQATACASgSQAIgHATgXQAEgFADgBQACAAAGAFIAEADQAHAEgFAFQglAmgFAEQgQAPgaABQgIAAgTgCQgCAAgFgDg");
	this.shape_252.setTransform(160.1979,91.88);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6,0).s().p("Ag1AkIgGgDIAEgFQALgPARACQATACATgSQAHgHATgXQAFgFACgBQADAAAFAFIAFADQAGAEgFAFIgqAqQgQAPgZABIgEAAIgYgCg");
	this.shape_253.setTransform(160.1337,91.88);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#020203").p("AgQAEQATAAARgOQAJgIALgIQABgBADAAQACABABABQAHAHAEAGQACAEgDACIgRAOQgXATgUABQgeABgWgQQgFgEAFgGQAMgLAOAIQACACALACg");
	this.shape_254.setTransform(29.1319,90.4779);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.8,0,5.9,0).s().p("Ag3ANQgFgEAFgGQAMgLAOAIQACACALACQATAAARgOIAUgQIAEgBIADACQAHAHAEAGQACAEgDACIgRAOQgXATgUABIgDAAQgdAAgUgPg");
	this.shape_255.setTransform(29.1319,90.4779);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#020203").p("AgmAoQgLgBgGgCQgIgCAGgGQAEgCAAgCQAGgKARABQAVABASgSQAFgFAZgdQAFgHAGAFQAKAJAAABQAAACgHAIQgTAVgOAOQgSASgbADg");
	this.shape_256.setTransform(169.0592,90.4309);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("Ag3AlQgIgCAGgGIAEgEQAGgKARABQAVABASgSIAegiQAFgHAGAFIAKAKQAAACgHAIQgTAVgOAOQgSASgbADIgNABIgRgDg");
	this.shape_257.setTransform(169.0592,90.429);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#020203").p("AA8gjIgRATQgDACgEgBQgXgDgUAUQgHAIgVAYQgGAIgCABQgDAAgHgGQgGgFAAgCQgBgCAFgFQAgglAEgEQAZgbAmAEIAPADg");
	this.shape_258.setTransform(173.3674,81.9492);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6,0).s().p("Ag1AlQgGgFAAgCQAAgCAFgFIAkgpQAZgbAmAEIAPADIAAADIgRATQgCACgEgBQgYgDgTAUIgcAgQgHAIgCABQgCAAgIgGg");
	this.shape_259.setTransform(173.3477,81.9492);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#020203").p("AAPgdQAYADARAMQAHAFgIAFIgCABQgEAGgGAAQgFABgIgEQgYgJgWATIgVARQgGAFgEgFQgIgJgDgFQgBgBAAgCQABgCABgBQATgQARgMQAMgIAYAAg");
	this.shape_260.setTransform(33.4065,82.725);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AgvAbIgLgOIgBgDIACgDQATgQARgMQAMgIAYAAQAYADARAMQAHAFgIAFIgCABQgEAGgGAAQgFABgIgEQgYgJgWATIgVARQgDADgCAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_261.setTransform(33.4065,82.725);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#020203").p("AAmgNQgegEgYAeQgIAKgQARQgDADgEgBQgEgCgDgEQgFgFAAgCQABgCAFgGQAbggAGgGQAVgXAggBQAIAAAPADQADAAABACQABACgCADQgJALgFAFQgFABgCABg");
	this.shape_262.setTransform(164.5417,83.625);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AgvAqQgEgCgDgEQgFgFAAgCIAGgIIAhgmQAVgXAggBQAIAAAPADQAAAAABAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABIgOAQIgHACQgegEgYAeIgYAbQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape_263.setTransform(164.5417,83.625);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#020203").p("AAPgdQAYABARALQAEADAAACQAAADgEAEQgKAKgOgFQgYgKgWAUIgZATQgEADgDgDIgMgOQgBgCABgDIAhgcQAPgLAZAAg");
	this.shape_264.setTransform(42.1403,84.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AguAdIgMgOQgBgCABgEIAhgbQAPgLAZAAQAYABARALQAEADAAADQAAACgEADQgKAMgOgGQgYgKgWATIgZAUIgEABIgDgBg");
	this.shape_265.setTransform(42.1403,84.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#020203").p("AgrAfQgOgPAAAAQgBgBAAgDQABgEABgBQAZgWAOgJQARgMAeAFQAQAEAJAHQAEADAAACQABACgEAEIgBAAQgJAMgRgFQgVgJgVARg");
	this.shape_266.setTransform(50.9444,85.81);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,5.9,0).s().p("Ag5ARQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQABAAAAgBQAAgBAAAAQABAAAAgBQAZgWAOgJQARgMAeAFQAQAEAJAHQAEADAAACQABACgEAEIgBAAQgJAMgRgFQgVgJgVARIgeAZIgOgPg");
	this.shape_267.setTransform(50.9444,85.7136);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#020203").p("AA7gaQgPASgBAAQgDAEgHgDQgJgFgQAFQgPAFgHAIQgGAHgXAYIgNgNQgBAAAAgCQAAgCABgBIATgUQALgMAFgHQANgQAQgCQAXgCAOAFQAFACAJAHg");
	this.shape_268.setTransform(103.4394,89.3648);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.8,0,5.9,0).s().p("Ag5AZIAAgCIAAgDIATgUIAQgTQANgQAQgCQAYgCANAFQAGACAJAHIgRASQgDAEgHgDQgJgFgQAFQgPAFgGAIIgdAfg");
	this.shape_269.setTransform(103.5,89.2609);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#020203").p("AA+gfIgRASQgDADgFgBQgXgFgRAQQgTAVgKALQgBAAgBACQgGAHgDAAQgCAAgHgFIgEgDQgGgEAEgEQAYgbAVgVQAQgRAhAAQANAAANAJg");
	this.shape_270.setTransform(146.9774,86.2987);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("Ag1AkIgEgDQgFgEAEgEQAYgbAVgVQAPgRAhAAQANAAANAJIgQASQgDADgFgBQgXgFgRAQIgeAgIgCACQgGAHgCAAQgDAAgHgFg");
	this.shape_271.setTransform(147.0408,86.2987);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#020203").p("AApgMQgQgDgQAIQgJAEgPAQIgYAaQgEAFgGgFQgJgIgBgCQAAgDAIgJQAKgLAUgWQAXgaAkABQAEAAAOAEQAHABgEAGIgOAQg");
	this.shape_272.setTransform(155.7477,85.0547);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AgxAnQgJgIgBgCQAAgDAIgJIAeghQAXgaAkABQAEAAAOAEQAHABgEAGIgOAQIgEACQgQgDgQAIQgJAEgPAQIgYAaQgCADgDAAQgCAAgDgDg");
	this.shape_273.setTransform(155.7477,85.0547);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#020203").p("AALgfQAHABANAAQALACAIAEQAGAEABABQAGAFgFAFIgBABQgGAHgEABQgHADgIgDQgUgKgTAPIgeAZQgHAFgEgGIgJgLQgEgEAFgDQAIgEAJgIQAKgKAFgFQAOgOAVgBg");
	this.shape_274.setTransform(59.5997,86.7315);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6,0).s().p("AgwAdIgJgLQgEgEAFgDQAIgEAJgIIAPgPQAOgOAVgBIAUABQALACAIAEIAHAFQAGAFgFAFIgBABQgGAHgEABQgHADgIgDQgUgKgTAPIgfAZQgDACgCAAQgDAAgCgDg");
	this.shape_275.setTransform(59.5997,86.7315);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#020203").p("AAngoIARAGQAHADgFAHIgIAKQgGAHgKgCQgUgEgMAMQgNALgYAZQgGAGgCAAQgCAAgGgFIgCgCQgGgGAAgCQABgBAFgGQAKgJARgUQAQgTARgGQAKgDAWgCg");
	this.shape_276.setTransform(138.1413,87.2273);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AgzAkIgCgCQgGgGAAgCIAGgHQAKgJARgUQAQgTARgGQAKgDAWgCIARAGQAHADgFAHIgIAKQgGAHgKgCQgUgEgMAMQgNALgYAZQgGAGgCAAIAAAAQgCAAgGgFg");
	this.shape_277.setTransform(138.1413,87.2273);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#020203").p("AA8gQQgMAMgDACQgFACgFgBQgVgKgSAMQgHAFgZAXQgGAFgCAAQgCAAgGgGIgDgEQgGgFAAgCQAAgCAFgFIAjgeQASgQAeAEQASACANAMg");
	this.shape_278.setTransform(68.56,87.7198);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgrAiQgCAAgGgGIgDgEQgGgFAAgCQAAgCAFgFIAjgeQASgQAeAEQASACANAMIACACIgPAOQgFACgFgBQgVgKgSAMQgHAFgZAXQgGAFgCAAIAAAAg");
	this.shape_279.setTransform(68.475,87.7198);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#020203").p("AAogJIgUABQgPAAgRAQQgEAEAZAFQAbAEgEAFQgDADglAGQgmAGgCgDQgHgFgDgDQgBgCAAgDQAAgDABAAQAXgZASgRQATgVAmAEQAEAAAMAGQAGADgEAEIgOAPQAAABgEABg");
	this.shape_280.setTransform(129.5092,88.0362);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AgwAmQgHgFgDgDIgBgFIABgDQAXgZASgRQATgVAmAEQAEAAAMAGQAGADgEAEIgOAPIgEACIAAgCIgUABQgPAAgRAQQgEAEAZAFQAbAEgEAFQgDADglAGQgaAEgKAAIgEgBg");
	this.shape_281.setTransform(129.5092,88.0362);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#020203").p("AAkgmIAUAHQAHACgFAFQgKANgCACQgCADgCgBQgfgJgbAcIgYAZQgEAEgEgEIgKgKQgBgBAAgBQAAgDAAAAQAPgSATgTQAWgXAnAAg");
	this.shape_282.setTransform(120.717,88.6936);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6,0).s().p("AgwAlIgKgKIgBgCIAAgDQAPgSATgTQAWgXAnAAIAUAHQAHACgFAFIgMAPQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAQgfgJgbAcIgYAZQgCACgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_283.setTransform(120.717,88.6936);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#020203").p("AAqgGIgQgCQgUgBgVAUIgYAZQgEAFgFgEQgJgJgBgCQgCgCACgEIASgTQATgTADgDQAVgUAeAEQAFABASAGQADABABADQAAADgCACQgGAIgEAEQgBABgFACg");
	this.shape_284.setTransform(111.9097,89.0482);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AgwAlIgKgLQgCgCACgEIASgTIAWgWQAVgUAeAEQAFABASAGQADABABADQAAADgCACIgKAMIgGADIgQgCQgUgBgVAUIgYAZQgCADgCAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAgBAAg");
	this.shape_285.setTransform(111.9097,89.0482);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#020203").p("AA8gSQgBADAAAAIgOAOQgCABgDgBQgdgLgXAVIgcAZQgDADgEgEIgJgJQgGgFAFgFIAegcQASgSAcgCQAKgBAKAEQAFACANAGg");
	this.shape_286.setTransform(77.1943,88.3785);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgvAhIgJgJQgGgFAFgFIAegcQASgSAcgCQAKgBAKAEIASAIIADAFIgBADIgOAOQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQgdgLgXAVIgcAZQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_287.setTransform(77.1685,88.3785);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#020203").p("AAVgkQARAAASAKQAHADgGAHIgIAIQgHAHgIgDQgWgHgUAQQgEADgZAZQgFAEgCAAQgCAAgFgFQgDgEgCgCQgDgDAAgDQAAgCADgDIAqgmQAMgMAXgBg");
	this.shape_288.setTransform(94.751,89.1489);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-5.9,0,6,0).s().p("AgzAgIgFgGQgDgDAAgDQAAgCADgDIAqgmQAMgMAXgBQARAAASAKQAHADgGAHIgIAIQgHAHgIgDQgWgHgUAQIgdAcQgFAEgCAAQgCAAgFgFg");
	this.shape_289.setTransform(94.751,89.1489);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#020203").p("AAagjQAPABAQAJQAHAEgGAGQgGAIgEADQgFAEgEgCQgdgLgXAWIgWAWQgFAFgDAAQgDAAgEgFQgJgKAAgBQgBgBAJgJQAXgWAQgNQAOgLAYABg");
	this.shape_290.setTransform(85.9447,88.8739);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-6,0,6.1,0).s().p("AgyAfIgJgLQgBgBAJgJQAXgWAQgNQAOgLAYABQAPABAQAJQAHAEgGAGIgKALQgFAEgEgCQgdgLgXAWIgWAWQgFAFgDAAQgDAAgEgFg");
	this.shape_291.setTransform(85.9447,88.8739);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#020203").p("AMkgiQgBABgQADQsJCQsRiMIgcgFIAAgDQGHBGGdgCQGYgCGLhJQAAABAAAGg");
	this.shape_292.setTransform(101.0875,97.3372);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-80.4,0,80.4,0).s().p("AsHgaIgcgGIAAgDQGHBHGdgCQGYgDGLhIIAAAHQgBABgQACQmLBJmMAAQmAAAmDhEg");
	this.shape_293.setTransform(101.0875,97.3571);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#020203").p("AsKgfIAEgKQDVAnCqASQDHAWC7AAQGNgBGEhKIABADQgEACgCABIhRAOQg/ALg6AIQgeAEhEAJIhgAKIk6ARQhHACgOgBIjOgGIjtgUQg/gIgggEIh9gSQgJgChWgQQgBgBgDgE");
	this.shape_294.setTransform(101.505,78.7464);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-78.4,0,78,0).s().p("AgVArIjOgHIjtgUIhfgMIh9gSIhfgSIAEgKQDVAoCqARQDHAXC7gBQGNAAGEhKIABACIgGADIhRAPQg/ALg6AHIhiANIhgAKIk6ASIhLABIgKAAg");
	this.shape_295.setTransform(101.625,78.7813);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#020203").p("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");
	this.shape_296.setTransform(102.4698,87.482);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-78.5,0,78.5,0).s().p("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");
	this.shape_297.setTransform(101.298,88.3281);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#D53D85").s().p("AhuB7IiLgQQgkgCg0gLQhpgXhTgxIA4guQBNgzBogVQBpgVBHgHQAkgDAPAAICQgBQCoAIBwApQByAqAkAoQAMANABAKQABAJgFgDQgPAOguARQhcAiibAUQheAMhiAAQhAAAhEgGg");
	this.shape_298.setTransform(101.2275,29.21);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#1D1D1C").p("AoPBIQAagjBPglQCchJEEgFQEGgECkBOQA1AZAhAeQAaAZgFAD");
	this.shape_299.setTransform(101.3723,24.1378);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#020203").p("Apao4IAFAcQAEAlgJAsQgKArgVAPQgLAIgJgBQhWBdgqCMQhTEYDiDuIAuAuQA3AxAlAOQAeAMB/A3QCCAwBagLIEXAGICOgjQCZgpA4glQBwhJAsgtQBehgApiWQAJg6gEhLQgGiZg6heIiGixQgDgTgDgXQgEguAIgWQhAAlhuAkQjcBHjngMQjngLjGg+Qg+gTgzgWg");
	this.shape_300.setTransform(101.0613,94.1344);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-0.4,67.9,0.5,-92.8).s().p("Ah7I3QhaALiCgwQh/g3gegMQglgOg3gyIguguQjijtBTkYQAqiMBWhdQAJABALgIQAVgPAKgsQAJgrgEglIgFgdIAmASQAzAXA+ATQDGA+DnALQDnALDchHQBugjBAgmQgIAXAEAuQADAXADATICGCxQA6BeAGCZQAEBLgJA6QgpCWheBgQgsAthwBJQg4AkiZAqIiOAjg");
	this.shape_301.setTransform(101.0613,94.45);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#1D1D1C").p("AImhOIAJALQAJANAAAOQAAAthVAoQheAtjIAXQi6AVgvgRQhNgChbgKQi3gThIgiQhdgrgGgvQgHg1Bqgh");
	this.shape_302.setTransform(101.5786,29.8753);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#1D1D1C").p("AgZD1QhhgEh6gSQjzgkh2hLQh8hNBYhrQAfgnAxgdQAtgbAXACQALABA7gVQBKgbBIgNQEAgyF4BCIAqALQA0AOAtASQCSA6AfBJQAgBIhgBGQgfAWgnATIghAOQhOAahpAYQjSAuiIgNg");
	this.shape_303.setTransform(101.3998,25.9865);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#4D3319").s().p("AgZD1QhhgEh6gSQjzgkh2hLQh8hNBYhrQAfgnAxgdQAtgbAWACQAMABA7gVQBKgbBHgNQEBgyF4BCIAqALQA0AOAtASQCSA6AfBJQAgBIhgBGQgfAWgnATIghAOQhOAahpAYQijAkh3AAQgiAAgegDg");
	this.shape_304.setTransform(101.3998,25.9865);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#1D1D1C").p("ADHiLQhAg+gggmIgHgIQgTgZhKAEQhDADgZASQgpAfgaAlQguA+AEBEQAEBAAzBBQAZAgAZATIAPAmQAFAkgrgMQgrgMgCAfQAAAPAIASQARARAbAFQA1AMAsg5QAMgRABgeQACg8g5hFQghgnAKgwQAKgtAmgfQAnggAsAFQAzAGAkA1IAHALQAKgGALgLQAXgWAHgag");
	this.shape_305.setTransform(20.8588,62.05);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#4D3319").s().p("AhtEMQgbgGgRgRQgIgSAAgPQACgeArALQArAMgFgjIgPgmQgZgTgZghQgzhAgEhBQgEhEAug+QAagkApggQAZgSBDgDQBKgDATAYIAHAIQAgAmBAA+QgHAagXAWQgLALgKAHIgHgMQgkg1gzgFQgsgFgnAgQgmAegKAtQgKAwAhAnQA5BFgCA8QgBAfgMAQQglAvgrAAQgIAAgJgBg");
	this.shape_306.setTransform(20.8588,62.05);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#1D1D1C").p("AiQhRIASgUQAYgVAZgJQBQgcBCBuIADAOQADASgEATQgNBChGBEQgYAXAeAwQAfAyA7ANQAzAKAOgbQAHgOgDgQQAAgKgJgIQgQgPgmAKQgKgIgDgOQgHgbAcgaQA+g2ATguQAlhXg+hyQgPgUghgWQhDgshcgJQgXALgcAWQg5AugfA7IAGATQAMAUAeANg");
	this.shape_307.setTransform(180.8681,61.6394);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#4D3319").s().p("ABUEOQg7gNgfgyQgegwAYgXQBGhEANhCQAEgTgDgSIgDgOQhChuhQAcQgZAJgYAVIgSAUQgegNgMgUIgGgTQAfg7A5guQAcgWAXgLQBcAJBDAsQAhAWAPAUQA+ByglBXQgTAug+A2QgcAaAHAbQADAOAKAIQAmgKAQAPQAJAIAAAKQADAQgHAOQgKATgeAAQgLAAgOgCg");
	this.shape_308.setTransform(180.8879,61.6451);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#845036").s().p("AgIALQgTgMgBgUQAQADAPAOQAKAHAQATIgEAAQgSAAgPgLg");
	this.shape_309.setTransform(141.5,158.4583);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#BD9959").s().p("AANgPQgGgKgNACQgMABgHAIQgHAHgEAKIgHAaQgJgQAEgUQAFgWASgJQAPgIAPAEQAOADAMALQAOANAEAPQAEASgHAbg");
	this.shape_310.setTransform(159.9407,173.9833);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#6E3D2A").s().p("AgcgNQAKgBAQgHQAUgJAKgDQABAXgNARIgWAbg");
	this.shape_311.setTransform(53.2534,160.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#BA9757").s().p("AgngKQAOgdAUgFQAegHANAUIAGAGQAGAGgBAKQAAAJgHAGQgEgGgBgIIABgLIgEgCQgngHgHAMIgiA/QgHgcAOgdg");
	this.shape_312.setTransform(37.013,174.1496);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#BD9959").s().p("AAwARQgPgMgKgFQgQgHgPACQgLACgPAJIgcATQABgTAPgPQANgOASgHQAQgGAVAMQARALANASQADAGAFACQAEAHgCACIgGALg");
	this.shape_313.setTransform(38.3725,165.1888);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#BA9757").s().p("AhEAFQAKgRARgOQAVgQAXgFQAZgEAXAJQAeANgFAZQgRgUgagCQgYgCgZANQgYALgOAPQgMAOgIAYQgHgVANgXg");
	this.shape_314.setTransform(37.0041,159.5527);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#BA9757").s().p("AALCAQgHgDgEgGQAOg/gIg/QgHg/gdg7QAwAXALB1QADApgCAnQgCAjgEACIgGACIgHgCg");
	this.shape_315.setTransform(48.8521,172.6625);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#BD9959").s().p("AgOgSQAPgCAJAKQAJAKgGATQgVgMgGgZg");
	this.shape_316.setTransform(101.732,184.5326);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#BA9757").s().p("AgGAuQgBgNgKgkQgIgfAEgTQAVATAJAiIAOA3QgXgJgGAAg");
	this.shape_317.setTransform(108.1217,185.35);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#845036").s().p("AgEgFIAKACIgLAJg");
	this.shape_318.setTransform(145.675,161.15);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#BA9757").s().p("ABKAqQgIgFAFgJQgHgEADgGQgwgjgdgEQglgGglAhQAJgXAVgOQATgMAYgBQAagBAVAOQAVAOANAZIAIAHQAGAFABAVQgDAEgDAAQgDAAgCgDg");
	this.shape_319.setTransform(159.65,159.0727);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#6E3C25").s().p("AgUCgIABhfIAijlQAMBBgPBnQgQByAEAvg");
	this.shape_320.setTransform(99.404,150.175);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#845036").s().p("AgJAKQgMgKAVgIQAIgJAFAFQAFAFgJAIQgGAOgFAAQgDAAgEgFg");
	this.shape_321.setTransform(59.0358,173.3026);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#845036").s().p("AgIANQgNgIAUgMQAFgKAHAFQAIAFgJAHQgEAPgHAAQgDAAgEgCg");
	this.shape_322.setTransform(65.0484,168.2297);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#845036").s().p("AADAWQAFgZgEhCQgDg7AMgkQAQAngDAzQgCAdgKA5IgQB9QgCAHACAEQACAFAFABQgNALgRAAg");
	this.shape_323.setTransform(86.1481,153.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#845036").s().p("AAAABQgGgFgCgBQgOACACgJQADgKAKAGIAJAKQAKAEADAHQACAFAEAEIgDABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAg");
	this.shape_324.setTransform(134.4996,170.3214);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#845036").s().p("AgPgJQALgCAHAEQAFACAIAFIAAAKIgIAAQgQAAgHgTg");
	this.shape_325.setTransform(140.7,175.6772);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#855137").s().p("AAPC/QgDgBgFgIQgFgKgCgBQAFgYgEgkQgEgpgCgWIgHh4QgFhEgLgyQAWAIAFA8QACAjABBOQACAYAOBGQAMA6gBAiQgJAOgEAAIgBAAg");
	this.shape_326.setTransform(109.229,152.7782);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#6E3C29").s().p("AgUCkQACgWgJhLQgIg8AOgqQAVhHgVhQIALAGIAKAGQAKAxAFBEIAHB4QABAWAGApQAEAkgGAZg");
	this.shape_327.setTransform(106.4503,151.25);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#6E3C29").s().p("AgGAEQABgJAGABQAGABAAAIg");
	this.shape_328.setTransform(129.5018,128.3202);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#6E3C25").s().p("AAVALQgOgBgPgHQgNgEgVgOQAPgGAWAIQAPAHAPALIAFAEIgCABQgDAEADAEgAAeAJQAEgDAJAKQgHgDgGgEgAAeAJIAAAAg");
	this.shape_329.setTransform(124.575,145.6592);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#6E3C29").s().p("AgQAMQgDgJADgJQALgLAQgHIAIATQgGAVgTAJQgIgEgCgJg");
	this.shape_330.setTransform(105.2308,129.325);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#6E3C29").s().p("AhPACIAJgSICWAMQgoASgpADIgLAAQglAAgegPg");
	this.shape_331.setTransform(140.2,129.591);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#6E3D2A").s().p("AgIAMQgrgSgZggQAZABA+AeQA6AaAHAJQACACgCAEQgBAEgCACQg2gPgbgNg");
	this.shape_332.setTransform(122.7821,150.45);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#2B2320").s().p("AghAUQgGgGABgNQABgMAHgHQATgRAxAQIABAOQABAPgHALQgEAGgbABQgaAAgJgIg");
	this.shape_333.setTransform(122.3046,128.5621);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#6E3D2A").s().p("Ag/g4IA+ANQABAUASANQASALAUgBIAIAAIgBALQAAAKgEANIgGAXg");
	this.shape_334.setTransform(138.775,160.675);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#6E3C25").s().p("ABBA7IgIABQgQgTgKgIQgPgOgQgDIgZgFIhFhGICDAwQAsAQAOAbQgKATgJAJg");
	this.shape_335.setTransform(138.675,154.675);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#855137").s().p("ABOBCQgwgsg4gEQhMgwgRgQQgqgkAEglQAFAGAIACIANABQAZAgArATQAcANA1APIAXAGIB1BwIgGAhQgVgFg1gxg");
	this.shape_336.setTransform(128.2576,157.625);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#6E3D2A").s().p("AgEAAIAEgEIAFAEIgFAFg");
	this.shape_337.setTransform(60.2,141.25);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#2B2320").s().p("AgJAPIgQgGIAIgXIAhgDIAKALQgHAUgLADIgGABQgEAAgHgDg");
	this.shape_338.setTransform(64.95,129.6196);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#6E3D2A").s().p("AgoADQAHgOAWgCIAmABQAEAAAEAGQAFAFABAFQgNgEgXAGQgZAHgLABg");
	this.shape_339.setTransform(70.725,127.5188);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#6E3C25").s().p("AhDgDICHgKIgJAXQgoAEgVAAQgnAAgagRg");
	this.shape_340.setTransform(56.425,129.525);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#6E3D2A").s().p("Ag2APIBtg1QgLAWgdAUQgoAegFAFQAAgPgYgJg");
	this.shape_341.setTransform(64.775,150.625);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#2B2320").s().p("AgnAaQgWgNAJgSQAIgRAegEQAlgGADgCQASAOAMATIgcAUQgQALgNAEIgKABQgNAAgPgJg");
	this.shape_342.setTransform(83.8444,135.4944);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#BD9959").s().p("AhVgPQAXhWA4gMQAbgGAfAvQAYAlAUA7IgLAJQgJglgJgWQgPghgWgVQgMgKgZADQgXADgNAKQgZASgHA8QgHA6AMA1QgngtAYhVg");
	this.shape_343.setTransform(159.3929,173.3907);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#6E3D2A").s().p("AgbgDQAIgDATABIAcABQgJALgTAAIAAAAQgSAAgJgKg");
	this.shape_344.setTransform(68.675,124.3385);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#BA9757").s().p("AAAA7QgBgBgJADQAKgUAAgmQAAgtAEgTQAHAZgBAkIAAA+g");
	this.shape_345.setTransform(45.8018,178.725);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#BD9959").s().p("Ag6AxIAYg2QALgZAagMQAdgNAbALQggAEgZAUQgXATgNAdQgHAPACAHg");
	this.shape_346.setTransform(93.525,186.6603);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#7C5C51").s().p("AADgEQA1gBAYAKIifABQAdgKA1AAg");
	this.shape_347.setTransform(160.775,124.1489);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#322D2E").s().p("AAAAUQgUgBgGgOIAOgQQAIgJAMABQAJAEAFAGQAJAJgFAKQgGAKgQAAIgEAAg");
	this.shape_348.setTransform(67.9426,176.734);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#2B2320").s().p("AgTAMQgNgIgDgPQAQgIAUACIAjACIAAAPQgRAHgLALIgCAAQgOAAgLgGg");
	this.shape_349.setTransform(102.725,126.8067);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#BD9959").s().p("Ah9BlQAGgxAUgtQAWgvAjgjQAhgfA+ACQBCADAHAlQgmgVgrAAQgvAAgfAcQgiAegSAtQgPAogBAvQgJgEgPAAg");
	this.shape_350.setTransform(91.7,179.1408);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#2B2320").s().p("AgcAAQADgJAHgEQAPgHAgACQAEATgFASIg5AAQgBgKACgJg");
	this.shape_351.setTransform(73.587,170.5539);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#BD9959").s().p("AAaBPQgCgEgDgZQgKg5gignIgRgTQgGgKgBgKQAXgFAhA9QAhA7AHA3IgGAAIgGABQgHAAgEgHg");
	this.shape_352.setTransform(110.15,181.1067);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#322D2E").s().p("AgeANQgIgIAJgMQAIgLAKAAQANgFAPAEQAIACAFAKQACAGADAKQgZANgQAAQgOAAgKgJg");
	this.shape_353.setTransform(129.7686,177.8708);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#2B2320").s().p("AgWAUQgBgFgFgGQgEgGgEAAIACgXQAYgDAOACQAUACANANQgFATgTAHQgIADgIAAQgJAAgKgDg");
	this.shape_354.setTransform(77.125,125.854);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#704E3E").s().p("AhYATQABgJgHAAQgHgCgBAKIgagHIgBgOQAUAHAKgKQADgEAAgGQAAgHgCgFQBfAJCFgCQABAFgDADQgDACgGAAIioAAQgHAAgCAJQgDAHADAFIgKATg");
	this.shape_355.setTransform(139.0875,126.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#DFBF81").s().p("AhoAIQgBgHAGgNQAPAHAWgDIAmgEIBiAEQAHABAYAHQgtANg7AAQgaAAhPgFg");
	this.shape_356.setTransform(99.9609,190.825);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#BA9757").s().p("AhlBHQACgoASgiQATgrAjgOQAdgMAjABQAmABAbARQgwgCgUABQghABgaASQgyAigGBJg");
	this.shape_357.setTransform(93.8,183.4462);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#BA9757").s().p("AgUByIAEiGQABgxAkguQgCAjgIA/QgFA2AHApQACALgFALQgEAKgGAGg");
	this.shape_358.setTransform(147.075,174.925);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#6E3C25").s().p("AjBAQIAAgKQAkAABogSQBPgOBXAPIBRAMQgbALgugHQg6gIgSACIh4AQQglAFgfAAQgbAAgXgEg");
	this.shape_359.setTransform(41.35,136.1319);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#6E3C25").s().p("ABQASIhugQQgWgCg4AGQgyAHgegJIBrgUQA+gJAvAJQAcAGA1ANQAvAKAggEIABAKQgWACgYAAQgdAAgigDg");
	this.shape_360.setTransform(155.975,135.8636);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#6B3C2A").s().p("AhkAQQgdgNgsgdQAzgJA7AFQAsAEBBANICAABQgBAEgCAJQgBAKgHADQgWAMg7ACQhIACgjACIgJABQgeAAgkgRg");
	this.shape_361.setTransform(156.55,144.8756);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#6E3D2A").s().p("AAaAiQgSgDhLgEQg7gDgkgLQgLgDgBgNQgBgQgCgFQA+ATBzgSQB1gTA9APIhRAqQglATgaAAIgIAAg");
	this.shape_362.setTransform(40.65,145.0743);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#E3C07F").s().p("AhOgIQAHg9AZgSQANgKAXgDQAZgDAMAKQAWAVAPAhQAJAWAJAlQgaAVgpAUIhYApQgMg1AHg5gAAPgWIAiA8QAHgbgFgRQgEgQgOgNQgMgLgNgDQgQgEgPAIQgRAJgFAWQgFAUAKAQIAHgZQAEgLAGgHQAIgIAMgBIADgBQAKAAAFAJg");
	this.shape_363.setTransform(159.6961,174.6667);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#DEBC7D").s().p("ACxB1QgGg3ghg8Qgig8gYAFIgKABQgHglhAgDQhAgCghAfQgjAjgWAvQgUAtgGAxIgLACQgHAAABgEIACgYQABgmACgTQADgfAOgQIAXgcQANgRADgRQARAAAPgMIAQgNQAKgHAHgBIBJgFIAUAGIAZADQAQACAJAEIAwAXQADABAFAJQAFAJADAAQAEABAJgOQAAAXAKASQAJAPAVASIALBXQACASgJAHQgFAFgHAAIgDgBg");
	this.shape_364.setTransform(97.2755,177.9083);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#DEBC7D").s().p("ABoCyQgdgEgNgSIAKADIAVgEQADAHAIADQAHACAFgCQAEgCACgkQADgngEgpQgKh0gygXIgLgHQAFgZgegMQgXgKgYAFQgYAEgVARQgRAOgKARQgNAXAHAVIgQA1QgGAfAFAbQg8gkAyhnQAthiBLgHQAcADAeAWQASANAhAeQACABABAEIAYA3IADAOIADANIAMAeIADCgQgOAMgWAAIgKgBg");
	this.shape_365.setTransform(39.6062,169.0015);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#E3C07F").s().p("ABSBPQAAgmgGgYQgFATAAAtQAAAmgKAUIh7g5QgOgGgLgSQgEgHgHgDQgFgCgEACQgGgcAHgdIAQg2QAIgYAMgOQANgQAYgLQAagNAXACQAaACASAUIALAGQAdA7AIA+QAIBAgOA/IgVADIABg9gAgVgLQgVAFgNAbQgPAeAHAdIAjhAQAHgNAmAHIAFgJQgKgOgSAAQgHAAgIACgAAWANIgBALQAAAHAFAIQAHgGAAgLQAAgKgGgGgAA1gXIAGgLQACgCgEgHgAgShXQgSAHgNAOQgPAQgBATIAcgTQAPgKALgCQAPgCAQAIQAKAFAPAMIAEgMQgNgTgRgLQgOgIgLAAQgGAAgGACg");
	this.shape_366.setTransform(38.6845,170.8862);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#E3C07F").s().p("AhyBlIgJgFQAGhLAyggQAbgTAhAAQATgBAwACQgbgRglgBQgjgBgeAMQgiAOgUAqQgRAjgDAoQgFAAgGgEIgKgFQABgvAPgnQASguAigeQAggcAvAAQAqAAAmAVIAKgBQABAKAHAKIAQATQAkAnAJA5QAEAYACAFQAFAJAMgDQgGAHgNACQgPABgGACIgPg4QgJgigWgSQgDASAIAfQAKAlAAANIhigEIgmAEQgWADgPgHQAOgfAYgTQAYgUAggEQgbgLgcANQgcAMgLAZIgYA3QgEAAgHgEgAAWAQQAGAZAWANQAHgUgKgKQgHgIgMAAIgGAAg");
	this.shape_367.setTransform(97.975,181.05);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#DEBC7D").s().p("AhnC0QAHgGAEgKQAFgLgCgLQgHgpAFg3QAHg+ACgjQgkAugCAwIgDCHIgVACQgJgzACgwIABgKIAShcIAGgWQADgOABgKIALgKQAJgJALgTQAKgUAZgSIArgdQAPgLATAGQALAEAWAPQBEAsAXBSQAXBSg1AXQgUg8gYglQgegugdAGQg2ALgYBWQgYBVAnAtIgYAMQgMAFgLAAIgFAAgABdhBQgEAJAHAFQAGAFAFgGQAAgWgHgEgAALh0QAeAFAwAkIAEgKQgNgbgWgNQgVgOgbABQgXABgTAMQgVANgIAZQAfgdAfAAIAKAAg");
	this.shape_368.setTransform(157.4178,168.5193);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#845036").s().p("ABXDMIgZgDQgFgwARhxQAPhogMhBIgjDmIgBBeIhJAFQAZguABg0QAAgsgRg6QgFgPAAgrQABglgKgRQgMgUgSgOQARgJArATQAiAQAFgUQABgGgEgIQgFgHgHgCQgEgBgJAGIgMAKQgUgVguAFQgmAFgIgfQAeAQAagEQAQgDAegQQAMgHAcgBQAdAAAIgEQADAQANAIQAMAHAQgBQgDAKADAJQACAJAIAEQACAGgEACQAVBPgWBGQgNArAHA8QAJBLgCAWQgJgEgPgCg");
	this.shape_369.setTransform(93.2313,146.625);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#6E3C29").s().p("AgcA7IgDgOIAXgbQAMgSgBgWQgIADgVAJQgRAHgJABIgDgGQgCgFgCgBQALgbAfgMQARgHAjgLQAYAIAAAPIgBALIgNABQgFABAAAEQAAADAFAAIAPACQgKAagaAbQgQAPghAfIgDgOg");
	this.shape_370.setTransform(55.75,159.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#6E3C29").s().p("AgIAFIgCgKQAMACAJgBIgGAJIgGABIgHgBg");
	this.shape_371.setTransform(62.65,156.1821);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#6E3C29").s().p("Ai+BcQAjgTAygyQAJgKAjgNQA2gUAKgFQBWgpgBg7QgMAEgXARQgWASgOAEIhnAZICzhhQAFgPACgRIACgdQAOgEAQgLIAcgVQAKARgBAmQAAAqAFAQQARA6AAAsQgBAzgZAvQgHAAgKAIIgQANQgGgBgCgFQgCgEACgHIARh8QAKg6ACgdQADgzgQgnQgMAkADA7QAEBCgFAaIgdCOQgDARgNARIgYAcQgJgPAHgkQAGgigIgIQgCgDgHADQgGADgEAFIgIALQgfgDgQAIQgGADgDALQgDAJABAKQACAIgGAIQgGAGgIAAQgNgBgIAKIgOAQIhqBVgAiQB3QgVAIAMALQALAMAIgVQAJgJgFgEQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgEAAgGAGgAhVBGQgUAMANAIQAOAIAFgVQAJgIgIgFIgEgCQgFAAgEAIg");
	this.shape_372.setTransform(73.4007,160.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#6E3D2A").s().p("ABeDUQgDgMgCgFQgFgLgIgCQgPgDgOAEQgFgSgUgOQgYgOgLgJIghggQgVgTgVgHQAEAcADAqQACAwACAQQgVgTgJgPQgKgSAAgXQABgigLg6QgOhGgCgZQgChOgCgiQgFg9gWgHIgKgFIgLgGQAEgCgBgGQAUgJAFgWQAeAFAPA+QAOA1gFAxQgEAlAqAkQARAQBLAwQA5AEAwAsQA1AxAVAFIgMA8QgIgFgFgCQgIgEgLACQAIAYAYgFQgCAwAJAzQg7gygmgbgAB8COQgDAEAGAEIAFgGQgCgEgDAAIgDACgABpCAIANAMIADgIQgDgIgKgEgABVByQgCAJAOgCIABgLQgEgCgDAAQgEAAgCAGg");
	this.shape_373.setTransform(123.875,157.625);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#845036").s().p("AARCBIiDgxIBFBHIg8gNQACgCABgEQACgEgCgCQgHgIg6gcQg/gegZgBIgNgBQgIgCgFgGQAFgxgOg0QgPg+gegFIgHgTIAAgQQAUgBAqgEQAmgCAcALQAVgXAKAAIBFAHQACAFAAAGQAAAHgDADQgKAMgUgIQgygQgSARQgIAHgBAOQAAANAFAFQAJAIAcAAQAaAAAFgHQAGgLgBgPIAaAHIAOABIAUAKQAjARAsgDQAogCAogTIiVgMQgDgFADgIQACgJAHAAICoAAQAGAAADgDQADgDgBgEICngBQAkAQAQAiQAOAfgGAoQggAEgvgKQg1gOgcgFQgwgJg+AJIhqAVQAeAIAxgGQA4gIAWADIBvAQQA9AGAwgFQABAhgKAZIiAgCQhCgNgsgDQg8gFgxAJQAqAdAdAOQApASAigCQANAKAJAVIgsAdQgYASgLAUQgOgbgsgRgAiEA8QgEAFAGAGIANgFQgHgHgEAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAgAjLAjQAVANANAGQAQAHAOAAIAEgGQgPgMgQgGQgMgFgKAAQgIAAgHADg");
	this.shape_374.setTransform(140.6628,140.6245);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#855137").s().p("AiRBPQAigeAQgQQAagcAKgZQAJACAFgCIAGgKQACgEAIgFIBngaQAOgEAWgRQAXgSAMgEQABA8hWAoQgLAFg1AUQgjAOgJAJQgyAygjATg");
	this.shape_375.setTransform(67.7006,158.775);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#855137").s().p("AgEAEQgFgBAAgDQAAgCAFgCIANAAIABAJg");
	this.shape_376.setTransform(60.7227,156.15);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#855137").s().p("AiPCAQgegWgegDQARgVAbgGQAcAEArgWIBRgrQg8gPh3ATQhyARg+gSQgIgWgBgaQAwAIBGgJIB4gRQASgCA7AJQAuAHAagLIhQgNQhYgPhPAOQhoATgkAAQgCg7AYgnQAYgnAfAMQAZAJAtgFQAzgFARADQAvAJAYACQAjACAmgHIAnAAQAaAAAOgLQAKALASAAQATAAAJgMIAWgBIgDAZIgmgBQgWACgIAPIioANQAaASAnAAQAVAAAogEIAPAGQALAFAIgDQALgDAHgVQALgBAZgHQAYgGANAEQAUAFAQgGQASgGAGgUQBNgSAcAiQgfAQgQADQgaAEgegQQAJAfAmgFQAtgFAUAVIAOgKQAIgGAEABQAIACAEAHQAFAIgCAGQgEAUgjgQQgrgTgRAJQgEACglAGQgeAFgIAQQgJATAWAOQAUANARgFIgBAcQgCARgFAOIi1BiIgKAKQgIABgNgCIABgLQAFgFApgeQAdgVALgWIhuA2QgjAMgRAHQggAMgKAbQghgegRgNgAAFAEIAFAFIAFgFIgFgEg");
	this.shape_377.setTransform(59.1893,140.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182}]},5).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,202.8,194);


(lib.décor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// décor
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D24266").s().p("EApOACEQqUh4mcguQpHhDn2AQQlgANnJBDIqeBiQuTBcrriBQgIgCgCgJQgBgIACgGQAEgHAGgEQAJgGAKABQHwBWJLgPQIkgOIXhiQIphmIxgDQH7gDJhBPIOJCTQAIACACAMQACALgFAEQgMALgNAAIgFAAg");
	this.shape.setTransform(628.7276,521.746);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D24266").s().p("AHIALQpghppCAGQmrAEmLAoQoaA1pHBpQgXAEgPgDQgRgDgNgPQAMgOAQgGQAKgDAXgEINfiBQH4g+HwgJQKGgMJlBrQJNBmIhATQJdAVIRhUQAOgCALANQALAOgGAMQliA/mjAIIiNABQqgAAq6h5g");
	this.shape_1.setTransform(812.2674,462.4559);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D24266").s().p("AghA3IoDhPQpdhtpuAgQo9AeqDCZQgUAFgOgHQgSgHgEgWQCYgmC9gkQBxgWDkgnIAhgGIEighQCigQCDgGQJvgeJ6B0QJuBvLoAqQIzAeH+gbQIjgdIFhhQAPgCANALQAMALgEAOIo2BaQnwA5odAAQq9AAsIhhg");
	this.shape_2.setTransform(392.6346,593.8327);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D24266").s().p("AjuAvQgEgEACgJQACgLAHgBIHYhQIAAAuInHBHIgDAAQgKAAgLgMg");
	this.shape_3.setTransform(1166.3136,476.0934);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D24266").s().p("AGlBHIiZgWQivgfjXgUQiLgOj7gSIAAgqQIOAgHeBUQAUADAAAKQABAWgfACIgEAAQgQAAgpgGg");
	this.shape_4.setTransform(51.2516,536.2813);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D24266").s().p("AxQBSQnSgqpShuQgHgCgFgHQgEgGAAgFQACgSAgAAQALABA1AIILsBxQKyBRJvgmISYiQQHzguIPAqIAAAoIjCgMQjpgKi4AEQjeAEjDAWIjkAbIkKAlQj7AjheALQjAAYiaAJQjIAMjNAAQlIAAlTgeg");
	this.shape_5.setTransform(972.3722,539.2321);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D24266").s().p("AFACDQlhgzk1hGQnyhwmsgeQnwgiovAmQnbAgo7BaIAAgvQAOAGASgDIAjgGQJGhdH4gcQI6ggILAvQFjAgGqBgQEXA/E5AvQH6BNJXgFQIpgFIqhIINliGQAIgBALADIAOAFQAEABACAOQABAPgFAAQpuBwniA0QngA0nsABIgSAAQoNAAmrg8g");
	this.shape_6.setTransform(336.9923,474.9236);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D45880").s().p("Ehc/ARPMAAAgidMC5/AAAMAAAAidgEgoOAIiIIDBRQVfCsRziFII2haQAEgOgMgMQgNgLgPADQoFBhoiAeQn+AbozgfQrogppvhxQp6hzpvAdQiDAHiiAQIkiAhIghAFQjkAohxAWQi9AkiYAnQAEAVASAIQAOAGAUgEQKDiaI9geQCPgICOAAQHcAAHSBUgAdti4QGcAwKUB3QAPADAPgOQAFgDgCgMQgCgMgIgBIuJiUQphhPn7ADQoxADopBmQoXBjokAOQpLAPnwhWQgKgCgJAGQgGAFgEAHQgCAFABAIQACAKAIABQLrCBOThcIKdhjQHKhDFggMQBjgEBnAAQGfAAHUA2gEApDgLaQMCCGLlgOQGjgIFhg/QAHgMgMgOQgLgNgOACQoRBUpdgVQoggTpOhnQplhrqGAMQnwAJn5A+ItdCCQgYAEgKADQgQAGgMAOQAOAPARADQAOADAXgEQJHhpIZg2QGLgoGrgEIA+gBQIlAAJBBlg");
	this.shape_7.setTransform(595.225,536.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D8A41").s().p("AgQCLQgKgEAAgKIgBj3QAAgSAYgCQAdgBAAAVIACDzQAAASgVADIgIABQgJAAgGgEg");
	this.shape_8.setTransform(265.725,372.2534);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C8740").s().p("AAFBAIh1gCIBxh9IBwB5QgpAGg6AAIgJAAg");
	this.shape_9.setTransform(212.5,314.6518);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C8740").s().p("AADg+IBwB7IjlACg");
	this.shape_10.setTransform(361.975,337.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C8740").s().p("AAAg+IB0B8IjnABg");
	this.shape_11.setTransform(1054.15,337.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D8A41").s().p("AABg+IBxB8IjjACg");
	this.shape_12.setTransform(60.4,372.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C8740").s().p("AAAg+IBxB8IjhACg");
	this.shape_13.setTransform(1126.1,375.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C8740").s().p("AACg+IByB8IjnABg");
	this.shape_14.setTransform(166.35,372.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D8A41").s().p("AAAhAIB2B/IjrACg");
	this.shape_15.setTransform(966.125,315.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D8A41").s().p("AADhAIByB+IjoADg");
	this.shape_16.setTransform(845.85,330.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D8A41").s().p("AgWCOQgRgDABgHIAXj+QACgJADgFQAFgFALgBQAOgBAKAFQAKAGgBAKIgTDyQgBAIgGAGIgLAGQgFADgJAAIgKgBg");
	this.shape_17.setTransform(468.0255,321.9613);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D8A41").s().p("AgCCMQgPgGgBgRIgUjvQgBgSAagBQANAAAHAEQAGAEABALIAZD+QABAHgRACIgLABQgJAAgFgCg");
	this.shape_18.setTransform(436.8466,321.9614);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D8A41").s().p("AAHCPQgVgCgBgSIgYj+QAAgHARgDQASgDAIAEQAPAIABAQIANB7QAIBKgCAxQAAAIgMADQgHACgHAAIgGAAg");
	this.shape_19.setTransform(74.5684,330.4043);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D8A41").s().p("AACg/IByB9IjnACg");
	this.shape_20.setTransform(643.9,350.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D8A41").s().p("AgZCNQgPgEABgJIAZj9QABgIALgFQAJgFAKABQAYADgBAUIgTDsQgBALgEAGQgFAFgJACQgGACgHAAQgHAAgHgCg");
	this.shape_21.setTransform(793.4513,362.9409);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D8A41").s().p("AgOCPQgOAAgGgIQgGgIABgKQALhOAEgpQAGhBgCg3QAAgUAdgBQAhAAgCAVIgVDzQgCAXgcAAIgDgBg");
	this.shape_22.setTransform(281.3883,372.302);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4D8A41").s().p("AAACOQgQgDgBgHIgYkBQAAgHAJgGQAJgFAJAAQAggCACAZIAVDrQACATgTAIQgFACgHAAIgMgCg");
	this.shape_23.setTransform(762.1581,363.0523);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4C8740").s().p("AgJCPQgPgCAAgGIgGkDQAAgRAXgCQAPgBAHAEQAHAFABALIAIDyQAAAQgUAIQgEACgHAAIgJgBg");
	this.shape_24.setTransform(90.7506,330.4181);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4C8740").s().p("AghCMQgIgFABgKIAbj9QAAgIAMgEQAJgEAKABQALABAHAGQAGAGgBAJIgWD4QgBARgcABIgDAAQgMAAgIgFg");
	this.shape_25.setTransform(995.3264,374.4923);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4D8A41").s().p("AgQB7Igaj2QgBgRAXgDQAKgBALAEQAPAEAAAJIAbD/QAAAGgLAFQgKAFgJAAQgbAAgCgVg");
	this.shape_26.setTransform(250.1215,372.3546);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D8A41").s().p("AgeCLQgMgGACgKQALg3AGhGIAHh9QABgHAKgFQAIgDAJgBQAfgBgCAVIgUD2QgBAJgJAGQgHAEgJACIgFAAQgKAAgKgFg");
	this.shape_27.setTransform(105.9647,330.3877);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4D8A41").s().p("AgPCNQgOgFAAgLIgBj1QAAgNAMgGQAGgEAOABQAQABAAAFIAMD7QABAWgSAEQgHACgGAAQgIAAgHgCg");
	this.shape_28.setTransform(979.7526,374.3594);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4D8A41").s().p("AACCRQgNgDgEgHQgDgEgBgNIgXjvQgCgSATgEQAOgDALAEQAOAFABAJIAcEAQABAMgPAEQgHACgHAAIgNgBg");
	this.shape_29.setTransform(963.9511,374.4968);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4C8740").s().p("AgJCOQgUgGAAgQIABj1QAAgJALgFQAJgEAKABQAPABAFAGQAEAFAAALIAED8QAAAHgQACIgMABQgGAAgFgBg");
	this.shape_30.setTransform(777.775,362.9167);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4C8740").s().p("AgPCLQgOgFAAgKIABkCQAAgFAPgBQAOgCAHACQAHADAGAFQAGAFAAAHIADDqQAAAVgSAFQgHACgFAAQgIAAgHgDg");
	this.shape_31.setTransform(452.425,321.912);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4B843F").s().p("AgNCNQgNgDAAgGIgBj+QAAgSAYgCQAfgCAAAWIAAD2QAAANgWAFIgGABQgGAAgHgCg");
	this.shape_32.setTransform(996.525,766.3522);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4B843F").s().p("AABg9IB1B5IjrACg");
	this.shape_33.setTransform(1119.175,774.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4B843F").s().p("AgBg9QAfAXAfAiIA5BAIjrACg");
	this.shape_34.setTransform(47.2,735.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4B843F").s().p("AAFhAIBwB6IjpAHg");
	this.shape_35.setTransform(164.35,708.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4B843F").s().p("AgCg+IB2B8IjnABg");
	this.shape_36.setTransform(466.925,779.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4B843F").s().p("AhyBAIBzh/IByB/g");
	this.shape_37.setTransform(349.75,728.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4B843F").s().p("AABA/Ih0gDIBzh7IB1B5QgsAGg2AAIgSgBg");
	this.shape_38.setTransform(1034.3,694.0571);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4B843F").s().p("AAFBAIh6gBIB6h+IBxB5QgnAGg6AAIgQAAg");
	this.shape_39.setTransform(827.1,763.5813);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4C8740").s().p("AAEg9IBwB4IjnADg");
	this.shape_40.setTransform(286.525,697.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4B843F").s().p("AABg/IB1B/IjrAAg");
	this.shape_41.setTransform(90.875,766.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4B843F").s().p("Ah0A/IB4h9IByB9g");
	this.shape_42.setTransform(701.65,752.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4C8740").s().p("AgKCPQgfgCACgVIAZj2QABgIAKgEQAIgEALAAQAPABAGAGQAEAFgBALIgTDyQgBALgKAFQgHAEgIAAIgFAAg");
	this.shape_43.setTransform(810.854,684.9813);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4C8740").s().p("AgFg9IB9B5IjvACg");
	this.shape_44.setTransform(164.625,735.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4C8740").s().p("AAGCQQgRgBgBgEIgakCQgBgIAEgGQAFgGAIgDQAPgDAMAEQANAFABAKIAUDyQACASgNAHQgDADgMAAIgHAAg");
	this.shape_45.setTransform(778.9292,685.0096);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4C8740").s().p("AgBCNQgPgFgBgFIgakAQAAgHAHgFQAHgFAJgBQAhgCACAUIAcDzQACASgaAIIgFAAQgGAAgJgDg");
	this.shape_46.setTransform(980.6056,766.6419);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4C8740").s().p("AgNCPQgPgBgHgHQgHgHABgKIAYj8QABgFAQgCQAOgCAGADQAXAIgBAMIgWDxQgBAMgKAFQgIAFgMAAIgCAAg");
	this.shape_47.setTransform(553.4693,726.5242);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4C8740").s().p("AAICQQgbAAgCgVIgTj3QgBgIAHgFQAHgFAMgBQAdgCACAWIAZDyQABAMgKAHQgIAGgNAAIgDAAg");
	this.shape_48.setTransform(522.0029,726.7219);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4C8740").s().p("AgFCOQgLgFAAgIIgZj8QgCgQAVgEQAMgDAMADQAOAEABAJIAZEGQACAOgfAAQgKAAgIgEg");
	this.shape_49.setTransform(78.9735,696.7432);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4C8740").s().p("AgZCMQgPgFAAgIIAakGQAAgGALgBIAOAAQAJgBAKAEQALAFAAAGIgVD3QgCAVgUADIgGAAQgIAAgJgDg");
	this.shape_50.setTransform(110.9252,696.678);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4C8740").s().p("AgfCLQgJgGABgKIAWj5QAAgHAKgFQAHgEAKAAQAggBgCAUIgUD4QgBAPgbADIgEAAQgLAAgIgEg");
	this.shape_51.setTransform(1012.4046,766.4803);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4C8740").s().p("AgMCNQgOgEAAgHIgEj7QAAgQATgEQALgCALAEQAOAFAAAIIAGD7QAAAMgUAFIgKABQgGAAgHgCg");
	this.shape_52.setTransform(537.575,726.5438);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4B843F").s().p("AgKCOQgQgCAAgGIgFj9QAAgVAUgCQAPgCALAFQAMAGAAAKIAFDwQAAATgTAGIgKABIgNgBg");
	this.shape_53.setTransform(795.05,684.9339);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4C8740").s().p("AAACQQgegBAAgUIAAj2QAAgRAUgDQALgBAMADQAMAEAAAJIAGD7QAAAKgIAGQgHAFgMAAIgEAAg");
	this.shape_54.setTransform(95.0264,696.7096);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#50833F").s().p("EBbYABHMi4XgACIAAiPMC5/AAGIAACPg");
	this.shape_55.setTransform(595.225,418.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("ACtBcQo7g7gviEQDsAADlAeQD3AiCzA8IhABLg");
	this.shape_56.setTransform(840.05,25.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("ApIA3QARgaAogQQDBhJFagdQEUgXEzAKIhNAyQgrAdgFAnQkugCjqASQkbAVjjA1QgHgCgHACQgKgbAQgYg");
	this.shape_57.setTransform(747.698,13.4862);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("ABeBTQk8gJjkgyQicgigtg3QADgCgCgEQFVgWE9ARQGbAWC2BSQAaAMAKAHQARAMgCAKIgBAGQj4AJiuAAQhKAAg9gBg");
	this.shape_58.setTransform(414.9855,128.8314);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgWBWQmcgdi+heQgygYASgTQFCgZE9APQF8ARDRBIQAsAOAXAVQAZAWgDAYIgLAFQiuAMiqAAQimAAiigLg");
	this.shape_59.setTransform(1116.5142,114.4501);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AEGCmQlggjg9gJQj7gohehMQgtgkAWguQAWgsBEgXQAPgFAFgGQAFgFgDgHIExASQDbAOC6AvQDxA7gSBNQgKArhMAeIg2AUQgaALgGAJQgNAAgiADIggACIgNgBg");
	this.shape_60.setTransform(148.6296,45.9031);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AFyCJQgKgIgagMQi2hTmagVQk+gQlVAUQgHgWAWgWQAVgVApgNQEBhTGzgMQGAgKFaAvQCjAVBjAqQB1AyhAAwQhDA0iiAeQhmATi1AQQACgLgRgLg");
	this.shape_61.setTransform(441.6612,119.8865);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AnOCHQizgQiGgmQitgvAhg2QA6hhHbgoQAtA4CdAiQDiAyE9AJQDNAGFhgNQAFAagcAXQgbAWgxAPQjsBGmFAOQhXADhYAAQjyAAjygXg");
	this.shape_62.setTransform(388.0369,137.9708);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AiODUQAGgJAagLIA2gUQBLgeAKgrQAShOjwg6Qi6gvjcgOIkEgRQCUgzDsgaQDigZD5AFQD9AEDNAhQDdAkBzA9QA8AgAFAqQAGApg2AhQiFBRk0AlQjMAajTAAIhhgCg");
	this.shape_63.setTransform(198.3006,40.9052);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhWC8QjvgFiegOQjVgSiognQg8gOg5gZQhCgdAMgQQDjg0EbgVQDrgSEtADQAFgoArgeIBNgyQAWABApgJQASAKAyACQDbAOCnAbQDlAmBVA7QAmAagLAfQgKAfg2AZIBDAfQAiASAHAWIjAgBIBBhLQizg+j3ggQjmgfjsAAQAuCFI8A7QgHAMgPACQjAAVidAJQiIAIh+AAIhagBg");
	this.shape_64.setTransform(793.5827,21.2283);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AABAwQhUgDi5gDQAJgRAogMQDjhHEFgJIAACHQh2gOiWgGg");
	this.shape_65.setTransform(1163.55,78.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgSBQQk7gYjkg9IABhTQGzgRGAA7QCGAVBPAcQBoAngRAvQhtAEhqAAQi7AAivgNg");
	this.shape_66.setTransform(56.8694,61.043);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgKBpQiRgThlg/QhyhGBNg+IAYgRQAMgKgCgJIAvgFQC6ACBTAEQCWAFB2AOIAAEUg");
	this.shape_67.setTransform(1157.9438,97.525);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AtlETIAAjyQDjA+E7AYQEVAVEsgMQASgvhognQhPgdiFgUQmBg7m0ARIAAiJQDWg3E2gYQETgVEPAIQADAHgFAFQgFAGgQAFQhDAXgWAsQgWAuAtAlQBeBMD7AnQA9AJFgAjQhyAiixASQh1AMjIAKIgvApQipBMlZAZQidALinAAQh5AAh9gGg");
	this.shape_68.setTransform(87.75,57.131);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("An/D7QifgQh5geQihgogIgxQgKg9C6gtQCAgeDHgSQgMgvAoglQAkghBNgYQEVhXGfgJQACAKgMAJIgYARQhNA/ByBHQBlA/CRATIFQAtIAABjIhOgBQADgZgZgWQgXgUgsgPQjRhHl9gRQk8gPlCAZQgSATAyAXQC+BfGbAcQFJAXFYgXQgHAeg2AUQjkBRmbAQQhiAEhgAAQj2AAjzgZg");
	this.shape_69.setTransform(1094.3245,110.4668);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AnXFJQldgElOgzQi8gdh5guQieg8AJhJQAHgxBmgrQA5gZBwgkQAIgDAGACQgMAQBCAdQA5AZA8AOQCoAmDVASQCfAODvAFQCnAEC5gLQCcgJDAgVQAPgCAIgMIDRAIIDAABQgIgWghgRIhEgfQA2gZALgfQAKgggmgaQhVg7jlgmQimgbjagOQgygCgSgKQAGgIASgFIAfgKIWOAAIBqAqQBDAYAeAmQAiArgjAlQhRBWkXAvQjSAikEAGQBDBhjTBNQieA6j4AeQkzAmk4AAIhDAAg");
	this.shape_70.setTransform(822.0134,32.9218);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#98CDE9","#E4F2FA"],[0,1],0,-430,0,430).s().p("Ehc8AXjMAAAgvFMC55AAAMAAAAvFg");
	this.shape_71.setTransform(595.625,150.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#66AA4C").s().p("EhdAAPmIAA/LMC6BAAAIAAfLg");
	this.shape_72.setTransform(595.275,742.05);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#66AA4C").s().p("Ehc8AImIAAxLMC55AAAIAARLg");
	this.shape_73.setTransform(595.575,356.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.décor, new cjs.Rectangle(0,0,1190.6,841.9), null);


(lib.concassage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#150C0A").s().p("AzeJZIgXg+IAAgBQAjgHB+hTQCchnAIgEQBNgiAagRQAygiANg0IA1AeIAVARQAPAMAPAHQAPghAKgOQADAHAQAKQgKAUAuACQAhACBVgJQA+gGBKgnQAcgPBhg+QATgFAKgFQASgHgIgSQgGgKgQgNQgSgNgFgFQAKgagUgUQgRgRgegHQgBgSALgRIAOAJQAVAMAlALQAqA6BCgJQASgDAmgMQAjgKASgCQBUgHA6gRQBPgVAPghQgjgQgSgoQgEgLAHgHQAFgGAJgBQAFgBAUAIQATAJAGgCQAVgKAFgiQAGgigOgcQARgDAZgDQAVgCASgKIg6hcQgDgEgHgEIgLgIQACgQgLgLQgGgIgIgCQgJgBgHAHQAIgRAGgjQAGgnAGgPQAHgSAUABQAMAAATADQgBAUANANQAIAHARALQAQAMAcgMQAhgOAFAAQAnAGBJAPQBAALAzgIQAKgCAxAIQAnAHAbgNQgHgRgUgMQgagMgPgKQAdgJAcACIA4AIQgWgdABgUQAAgOAQgcQALgSAbhRQAWhCAXgVQARAcgHA4QgGArgRApIgoBfQgEAHAQADQAQAEAGgLIAaAUQgEAOABAOQABAQAGAHQAOAQA3AEQA4AFAigNQADAGAJAJQAJAIAHACQACgEArBYQAqBWABgBIAgBNQAgBRgFAaQAHACgRAfQgRAfgWAcQghAogQgCQgmAWg8A6QgsApgUgMQgRgIgQAHQgKAFgVASQgxAqgxACQgaApgxARQgvAQgLAWIhuhlIBwA+IBDg3QgRgmglgqQgvg5gHgKIg0ibIhHAqQAAgVAKgWQAJgTgCgHQgFgTgRgQQgSgOgRgBQgLAeAEA6QADAsgVANIgYgUQgQgMgLAHIgjAYQgEADgUAAQgVgBgKAHQgoAYhKAgQhTAkggARQgoAYgUALQgiASggAHIhaA+QhfAciSBYQjoCMgeAQIkNB9QjhBqgpAjQhDhBgwh7gAOlBEQATASAFABQAaAEAOAFQAHABgBgBIgEgFQgJgMARgHIA2gXQAggPAPgNIA2AMIBGhKQgKAGgpiNQgwikgUgTIi4gJQgagJglACQgjABgcALQgTAHgNAdQgEAJgRA3QgeBgg9AqQAFAfBYBLQBYBMAagKgAJqjbQAbAMANgOQAbghAcg1IAwhfQhDgRhIAKQhOALgUAlQgFgKgLAAIgQADQgNgOgJgHQgOgMgMgBQgNgBgTAMQgVALADAKQAFAQAVAMIAdARQAMAKAGAXQAEANAEAYQAbAAAtAPQAdAJAHgPQAMARAXAKgAz8IbQAAgRAHAQIgHABIAAAAgAz1IaIAAAAg");
	this.shape.setTransform(131.4649,112.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#564337").s().p("AgdA1QgHgIAEgRQAEgPAGgGQgUALgPABQgIAAgPgFQAPgYAjgXIA9gkQAVAOAMAUQAPAZACAdQABAfgsAPQgQAFgOAAQgWAAgPgRg");
	this.shape_1.setTransform(148.6275,86.8429);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#332218").s().p("AA5CcQghgHgIgSQhSjLgRgsQgOgnAFgCQACgBBLCLQBNCRARAQQAFAEAIACQABABAAAAQABAAAAABQABAAAAABQAAAAgBABQgEAGgNAAQgJAAgLgCg");
	this.shape_2.setTransform(157.1314,45.9621);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#564337").s().p("AgVgBQAGgGAPgCQAQgDAFgEQAFARgQAQg");
	this.shape_3.setTransform(57.811,134.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#332218").s().p("AgTgBIAMgOQAGgHAIABQAJACAGAIQAKALgBAPIg9AHQACgNAJgKg");
	this.shape_4.setTransform(157.5094,73.6933);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#332218").s().p("AgNA0QgQgDAEgIIAmhdQARAUgEAdQgDAXgQAZQgEAIgKAAIgGgBg");
	this.shape_5.setTransform(221.8231,55.6083);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#332218").s().p("AgQAdIgVgRQAPgPgEgSIAkgaQAKAPASAhQgKAOgPAhQgOgHgPgMg");
	this.shape_6.setTransform(62.65,134.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#332218").s().p("AAgAwIhXg8QAPgLAXgLIA3gYQgUAfAGAbQAFAYAbAZIgLALg");
	this.shape_7.setTransform(198.075,137.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#564337").s().p("AgnAeQALgIAQgiQATgeAhABQAEApgeAqg");
	this.shape_8.setTransform(246.2989,111.4464);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#332218").s().p("AgWAWQgVgNgFgOQgDgKAVgMQATgMAMABQAMABAOANQAJAGANAOQgOAWgdAVIgcgRg");
	this.shape_9.setTransform(175.7808,75.971);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#564337").s().p("AgjAnQgSgigKgOQAigYAZgLQAlgPAgAEIhQBwQgQgLgEgHg");
	this.shape_10.setTransform(70.05,130.7744);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#564337").s().p("AAYA/QgtgOgbAAQgEgYgEgNQgGgXgLgJQAcgUAPgXIAQgDQAKAAAEAKQAVAcARAKQgMABgLgCIgPgEQgKgCgJANQgIAMAHADQAhAUANAFQAXAIAagFIgPAbQgFAJgNAAQgHAAgLgEg");
	this.shape_11.setTransform(183.85,81.9212);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#332218").s().p("AgGAnQg3gEgOgPQgGgIgBgPQgBgOAEgOQAtgSAxASQA0ATAQArQgYAKglAAIgcgCg");
	this.shape_12.setTransform(233.165,65.2694);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#564337").s().p("AkwD1QgeggBIhwQAlg6AIgRQAQghgSgIICMhJQADgLARjFQAPirAOATQgGAICqEWQCvEyAFCGQAAA1gxAxQg1A0hQAOQgdAFgcAAQi4AAjDjOg");
	this.shape_13.setTransform(227.6338,78.4042);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#564337").s().p("AiPBHQAJgIAXgFQgIgOgLgJIgPgMIB6g+QBGglAwggQAeAHARASQAUAUgKAaQg3ASgzAkQgMAFgigJQgjgKgLACQgHABgGAMQgFAMAEACIANACQALADAKAHIiABAQgDgYAOgNg");
	this.shape_14.setTransform(94.0632,121.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#332218").s().p("AgLBeQgXgKgMgRIAPgbQgZAGgXgJQgOgFghgUQgHgEAIgLQAIgMALACIAQADQALACAMAAQgRgKgVgcQAUgmBOgLQBHgKBDARIgwBfQgcA0gbAhQgIAIgLAAQgJAAgLgGg");
	this.shape_15.setTransform(194.4919,80.9888);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#332218").s().p("AA+CaIh4hPIgMgwQgJgegSgLQAVgOgDgrQgEg6ALgfQASABARAPQASAPAFAUQABAGgIATQgKAXgBAUIBGgqIA1CbQgdAIgGAOQgDAGAJAMQAJAMAMAEQAWAMgLAOQgGAHgIAAQgIAAgKgHg");
	this.shape_16.setTransform(190.5083,115.0814);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#564337").s().p("AgNBnQgWgBglgcQgbgVgOAPIgQAWQgmgMgVgMQAQgYAsgOQA6gSALgHQAdgRA4gvQAzgnAogCIAmAUQAaAOAIASIg2AkQgEADAIARQAJAUgDAEQgNAMgpAEQgtAFgMAHQgJAGgQAWQgMARgJAAIgBAAg");
	this.shape_17.setTransform(124.825,101.7257);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#332218").s().p("Ai/BmQgugCALgTIBRhwQAIACAIgFIANgIIAQANQAKAJAIANQgXAGgIAHQgPAMADAZICAg/QgJgHgMgDIgNgDQgEgCAGgLQAFgMAIgBQAKgCAkAKQAiAJAMgFQAzglA3gSQAFAFARANQARANAFALQAJARgSAIQgKAEgUAGQhgA8gcAPQhJAng/AGQhHAIgjAAIgMgBg");
	this.shape_18.setTransform(91.1138,128.3613);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#332218").s().p("AkbCQIARgWQAOgPAbAVQAlAcAWABQAJAAAOgRQAQgWAJgGQALgHAugFQApgEANgMQACgEgIgUQgIgSAEgDIA1gkQgIgRgagOIglgUQAIgBAOgLQAMgKAFgKQAPAFAIAAQAPgBAUgLQgHAGgDAPQgEARAHAIQAWAbAtgPQAtgPgCgfQgBgegPgZQgMgUgVgOQgFgDACgKQACgJAHgDQAYATAegCQAegBATgVIA6BbQgSAKgVADQgZADgRADQAOAbgGAjQgFAhgVAJQgGADgTgJQgUgIgFABQgJABgFAGQgHAHAFAKQARAoAkARQgPAhhQAVQg5ARhUAIQgRABglALQgmAMgSADIgRABQg3AAgkgzg");
	this.shape_19.setTransform(140.15,96.3154);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#897254").s().p("AAAgKQACAIABANQgIgLAFgKg");
	this.shape_20.setTransform(141.8,63.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#897254").s().p("AgBgKIAEAVQgHgIADgNg");
	this.shape_21.setTransform(133.6591,49.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#897254").s().p("AgLAEQgQgXABgXQAbADAQAdQARAdgNAYQgXgagJgNg");
	this.shape_22.setTransform(138.7675,56.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#332218").s().p("AigBpIgWgOQAMgYAjgZQAogdAZgoQAwgBA5gqQAsggAZAJQgUAGAYgEIgEgCIAhgJQA2gOgKAKQgjAlhyBNQhvBOg0AXQgEACgGAAQgJAAgKgGg");
	this.shape_23.setTransform(221.7716,137.3165);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#564337").s().p("AkLgyQGkiiBYhPIAbAZQgNA0gyAiQgaARhNAiQgUAJgpDMQgpDHgXAAQgRAJgRAAQhoAAhqlWg");
	this.shape_24.setTransform(26.8,159.5053);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AA9A80").s().p("AjcCZQgOgIgWgXQAKgLAegIQAggKAKgHQAfgXAqgXIBKgnIDGhuQAOgIAOgPIAUgXQAIgIAMAEQAEACAOAJQgHADgCAJQgDAKAGADIg/AkQgiAXgPAZQgGAKgMAKQgOALgJABQgnACg0AmQg3AvgdASQgMAHg5ASQgsAOgQAYg");
	this.shape_25.setTransform(126.675,92.2221);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#564337").s().p("ABcBtQgGgbAUggIg4AZQgXAKgPALIjKjiIAjgZQALgIAQANIAYAUQASALAJAgIAMAwIB4BOQAVANAKgOQAMgNgWgNQgNgEgIgLQgJgLADgHQAGgOAdgHQAGAJAwA4QAkArARAmIhDA3QgbgZgFgZg");
	this.shape_26.setTransform(191.25,126.6094);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#897254").s().p("AjwCJIgbgaQAKgJAggIQAggJAKgHQAegXAxgSQA9gWASgKIDVhwQALgGAOgOIAUgUQAVAXAOAIQgLARACASQgwAghHAlIh7A9IgNAIQgHAFgIgCQgggEglAPQgaALgiAYIglAaQgFAEgQADQgQADgGAGg");
	this.shape_27.setTransform(77.725,119.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AA9A80").s().p("AlEC5QAOgdAEgNQAZhQAyg0QAuguBOgkQAagLBZgvQBVgrAxgVQCfhDAcBBQgQANgkADQgrADgPAGQgHADg7AnQgnAagegCQgagBgRAGQgVAIgMAWQgQgPgRAPQgKAJgVAkQgyBSgxALQgsAEgWAFQgmAKgJAlQgJAlgJAUQgNAdgTARQgQgRAKgag");
	this.shape_28.setTransform(166.048,22.8621);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#332218").s().p("ABqDLQgwgIgLABQgyAIhAgKQhJgPgngGQgFgBggAOQgcANgQgNQgRgKgIgIQgOgMABgUQAHgBAxgOQAmgLAVADQAwAGAvgLQAOgEA0gTQAegLAPAFQATAHANAmQADALAYgEQAXgDAEgNQAJgfAPgkIAag8IAKgSQAVgiATgnQAnhNgIgYIA4BLQgEABgDAFQgEAFgBAEQAAAHAGAIIAJALQgZAWgXAtIgnBNQgPAcgBAOQAAAUAVAdIg4gJQgbgBgdAJQAOAJAaAMQAVAMAGARQgRAJgXAAQgMAAgOgCg");
	this.shape_29.setTransform(194.9216,46.5195);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#564337").s().p("Aj1FrQgOgJgEgCQgMgEgIAIIgSgnQAAgQgEgIQgUgjgXgaQgBgOgDgHIgIgJQANgYgRgdQgQgdgcgEIgVgTIgFgVIACgQQABgKAEgEQATgQANgeQAIgTAJgkQAKgmAmgJQAVgGAtgDQAwgLAyhUQAWgjAKgJQAJgJAKACQATgQAKgFQARgJAFABIAAACQAfABA4gaQAggOA3gcQAPgHAqgDQAegCAQgJIADgEQgBgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIABgCQDfD7gHgCQAJAbgrBLQgkA8gjAhIgRAnQgOAkgKAfQgDANgYADQgXAEgEgLQgNgmgTgHQgOgFgfALQg0ATgPAEQgvALgvgGQgUgDgmALQgyAOgGABQgTgDgMAAQgUgBgHARQgGAQgGAnQgGAjgIAQIgLAOQgJALgDAOIA+gHIALAHQAHAFADAEQgTAVgeABIgFABQgbAAgWgSgAEakkQAEACgDgDIgCAAIABABg");
	this.shape_30.setTransform(176.9851,41.0056);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#150C0A").s().p("AMAMiQjiiTgQgNQgbgYjBi7Qh7h2hWgwIhLhRQgdgOgdgZIgzgwQgbgXhJg2QhBgughgiQgJgJgUgDQgUgEgDgEIgdggQgJgKgTAJQgUAMgHACQgSgSANgpQARg4gEggQgRgDgUALQgVAKgJASQgDAGAEAVQAFAYgEATIg8g4IhWCNQgIAHg8AtQgtAhgZAhIA0BEIB+gmIiEBNQgGgYgqgaQgsgbgQguQgvgNgngzQgRgXgIgGQgOgLgTAFQgWAGghgyQguhFgggeQAOACAIgiIA4AAQAMAQAcAWIAvAiQAOALgKAKIgGAEQAAABAGAAQAPgCAaACQAGABAWgOIBGgGQAXARBng4QBmg2AMgdQgyg2gIhlQgEg5gCgKQgGgegRgMQgYgRgjgJQgjgKgcADIi2ggQgXAOhTCVQhHCAgJgIIAzBZIgaAdIAEADQgQgCgXguQgQgggJgjQgJgiAGgBQACgaAxhIQAYgkAYgfQABABA9hMQA8hLACAEQAHgBAKgGQALgGAEgGQAeAVA5AIQA2AIAQgMQAJgGAEgPQAEgOgBgOIAegOQADAMAQAAQARABgCgJIgShlQgHgsADgrQAFg4AYgYQASAaAHBGQAIBVAGAUQAJAegCAOQgEAUgcAXIA5AFQAbAEAaAPIgsAMQgWAHgLAPQAXATAoACQAxADAKAEQAwATBBAEQAlACBMADQAFAAAdAVQAZASASgIIAcgMQAQgJAEgTQAHACAXABQAVAEACASQACARgCAnQgCAkAEARQgFgIgJAAQgJgBgIAGQgMAKgDAPIgMAFQgIADgDADIhNBMQAQAOATAIIAoAPQgUAYgCAiQgCAjASAOQAFADAVgDQAVgEAFACQAIADAEAHQAFAIgHAJQgMARgSAMQgRALgRADQAHAkBIAnQA1AcBQAaQAhALBEAoQA/AYA1gxQAogDAXgHIAPgFQAHAUgGAQQgeABgUANQgZAPAEAcIgaAMQgTAJgHAKQgNAPAQALIAbAQQBPBRAZAVQA/A3A8AUQBSAbAgAGQAtAIgGgVIAMgGQAIgDADgEQAHAQAGAkQARgEARgIQATgKAFgCIA6gRQACA1ApAsQAVAXBEAyICBB+QBtBrAbAGQgPAkgcArQg5BVhDAhQgfgqjNiGgApOoyQAKAkAQBDQAOA6AUAlQAJASAegGQAYgGAPgNQAEAQAegCQAwgEAaAGIAQgjQALgVANgHQAIgDAZgGQAXgIAIgOQAFgJgRgRQgRgPgMgCQgNgCgQAJIgaAPIgPgFQgKgDgHAJQgLgqhKgcQg/gXhAAAIgKAAg");
	this.shape_31.setTransform(445.7137,156.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#564337").s().p("AguA6QgogYAIgdQAQg3A1gUIA0AxQAcAdAJAbQgPACgIgCQgPgEgQgPQAEAHAAAPQAAASgIAGQgNAJgPAAQgSAAgWgNg");
	this.shape_32.setTransform(440.3333,127.1846);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#332218").s().p("AhZCIQgggBgEgLQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAIAAAGgDQAUgLBsh8QBoh4ACACQAEAEgXAiQgaAnh9CzQgLAPgeAAIgEAAg");
	this.shape_33.setTransform(441.634,86.127);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#564337").s().p("AgQgRQAEAFAOAGQAOAGAFAHIgjALQgLgSAJgRg");
	this.shape_34.setTransform(518.8397,193.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#332218").s().p("AgdAFQADgOAMgKQAIgGAIABQAJAAAFAIIAIAQQAGAMgBAOg");
	this.shape_35.setTransform(434.6067,113.0481);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#332218").s().p("AAGA2QgPAAgDgMQgJgcACgXQACgdAUgQIASBkQABAJgOAAIgCgBg");
	this.shape_36.setTransform(375.9434,80.8014);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#332218").s().p("AgjgEQAZgdANgNIAeAiQgIAQALATQgFACgTAJQgRAJgQAEQgHgkgHgPg");
	this.shape_37.setTransform(513.775,193.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#332218").s().p("Ag9AsQAggSAIgXQAJgWgMglQANAKAmAaQAYAQALAMIhiApIgQAIg");
	this.shape_38.setTransform(381.025,164.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#332218").s().p("AgwgOIAagPQARgJALACQANACAQAPQASARgGAIQgIAOgXAIQgXAGgIADQgXgYgKgbg");
	this.shape_39.setTransform(416.8658,110.831);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#564337").s().p("Ag5g/QAhADAfAXQAWAQAdAeQgOANgZAdQgCAEgJADIgKAGg");
	this.shape_40.setTransform(508.275,187.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#564337").s().p("AgjA6QgeADgEgRIgIgdQAXALAZgDQAPgCAjgMQAHgDgFgMQgFgOgLgBIgPAAQgMAAgLgDQANgEAMgJIAUgQQAHgJAKADIAPAGQAKAbAWAZQgNAFgLAVIgQAjQgagGgvAEg");
	this.shape_41.setTransform(407.425,114.7625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#332218").s().p("AAAAkQg3gIgfgUQAagmA3gHQA0gGAoAbQABAPgEAMQgFAPgIAGQgKAHgXAAQgQAAgWgDg");
	this.shape_42.setTransform(362.985,88.0979);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#564337").s().p("AiqGWQhMgfgog/Qglg6AMg0QAjiBDvkEQArgwByh2QBFhHgCgFQARgQgYCrQgbDDABAMIB4BmQgTADAHAlQAEASAYBBQAtB9gkAYQi8B9iXAAQhFAAg9gag");
	this.shape_43.setTransform(360.0281,101.6995);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#564337").s().p("AASAqQALgFAMAAIANAAQAFgBgDgMQgDgNgHgDQgJgDglABQgkABgKgHQgrgwgwgcQgEgcAYgPQAVgNAegBQAnApA9A1IBpBXIgSAJQgMAGgLALQAVAMAHAIQALAQgIAYg");
	this.shape_44.setTransform(485.9969,174.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#332218").s().p("Ag3BdQgUgmgPg4QgPhDgLglQBGgCBCAaQBKAcALApIgUAPQgNAJgMAEQALADALAAIARAAQAKABAGAOQAFANgIADQgkAMgPACQgZADgXgLIAJAdQgQAOgXAFIgNACQgTAAgGgNg");
	this.shape_45.setTransform(398.275,110.6693);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#332218").s().p("AhzCCQgHgQAYgHQANgCALgJQALgKgBgHQgEgPgZgNIBWiMIA7A4QAEgTgFgYQgEgVADgGQAJgSAVgKQAUgLARADQAEAggRA4QgNApASARQgUAHgQAdQgPAhgHALIiHAyQgIADgGAAQgMAAgFgKg");
	this.shape_46.setTransform(392.6238,145.7052);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#564337").s().p("ABiBhQgLgTgfAPQgqATgVgEQgJgCgJgUQgLgYgIgIQgKgKgqgOQgogOgJgOQgCgEAMgRQAMgQgDgEIgsgvQALgQAdgIIApgKQAnALApAwIBEBRQAKAKA0AfQAoAXAKAbQgXAHgoADIgKgYg");
	this.shape_47.setTransform(460.5,146.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#332218").s().p("ACoCMQgggGhSgbQg6gUg/g2QgagWhPhPIgagQQgQgMAMgPQAIgJATgJIAagNQAwAdArAwQAKAIAkgCQAlgBAJAEQAHADADAMQADANgFABIgNAAQgMAAgLAFIBvBaQAIgYgLgPQgHgJgVgLQALgLAMgGIASgJIAMALQAGAGAIAAIA3B/QAEAQgWAAQgJAAgNgDg");
	this.shape_48.setTransform(487.1858,181.0704);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#332218").s().p("ACFDmQhEgogigLQhPgag1gdQhIgngIgjQASgEARgLQARgMANgRQAGgIgEgIQgEgHgJgDQgFgCgVAEQgUAEgFgEQgTgNACgkQADgiATgYIgngPQgUgHgQgOIBNhMQAOAZAdAIQAdAIAcgNQAFAFABAJQAAAJgGADQg1AUgPA4QgIAdAoAYQAoAZAdgVQAIgGAAgSQAAgPgFgHQARAPAOAEQAIACAPgCQADALAKANQAKANAJAEIgqALQgbAHgMAQIArAvQAEADgNAQQgLARACAFQAIAPAoANQArAPAJAJQAIAIAMAZQAJAUAIABQAWAEAqgTQAggOAKASIALAZQgkAggoAAQgUAAgUgIg");
	this.shape_49.setTransform(446.475,138.4722);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#897254").s().p("AAEgJQACAKgKAJQAEgLAEgIg");
	this.shape_50.setTransform(452.6154,106.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#897254").s().p("AAFgJQgBAOgIAFg");
	this.shape_51.setTransform(463.6,94.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#897254").s().p("AgPgOQAVgYAcADQgEAWgVATQgLALgdAUQgHgbAXgYg");
	this.shape_52.setTransform(457.2328,100.6882);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#332218").s().p("ABmCLQgtghhbhlQhdhkgbgtQgHgLAxAZIAfAQQAagDAjAoQAvA2AuANQAQArAgAmQAdAhAGAaQgOAGgKADQgHABgGAAQgKAAgHgFg");
	this.shape_53.setTransform(358.4566,160.0364);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#564337").s().p("AAhB4QgagFgihAQgohHgOgKQhDgygWgXQgpgtgBg1IAfgSQAwBECGB8QCCB2BSA4QgMA2ghAPQgJAEgJAAQgxAAhEhkg");
	this.shape_54.setTransform(544.5,213.7613);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#AA9A80").s().p("ABxCcQg0gfgKgKIhDhSQgqgvgmgLQgJgEgKgOQgKgNgDgKQgKgcgcgdIg1gyQAGgCAAgKQgBgJgFgEQAOgGAGgBQAMgCAGAKIAPAbQAKARAMALICoCYIBAA3QAjAfAZAdQAIAKAeAQQAbAPAHANQgXAQgSAGIgQAFQgKgbgogXg");
	this.shape_55.setTransform(461.275,137.409);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#564337").s().p("AjVA6QAZgiAtgiQA7guAHgIQAPAIAOAKQAQAMABAHQACAHgLAPQgGAGgFAEIAJgDIBxgdQAHgLAPgiQAPgdAUgHQAHgDAVgMQASgJAJAKIAeAhIj2C1QgNgPgVgQIgyglQANAkgLAaQgKAYghATQgOgUgpgzg");
	this.shape_56.setTransform(390.35,156.8868);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#897254").s().p("ACjC1QgPgHgEgEIgfgiQgcgggWgPQghgYgggCQgHgBgHgGIgMgLIhphXQg9g0gogpQAFgQgGgUQASgGAYgRQAVAlAOAMIC1CdQAQAOA3AjQAqAcAaAdQAHAJAeAQQAdAPAIAMIggASIgWAHQgFgIgOgGg");
	this.shape_57.setTransform(502.75,174.775);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#AA9A80").s().p("ADwDtQgEgVgBgmQgBgngjgRQgsgPgSgJQgtgVgfhcQgNgngHgLQgNgSgUALQgGgZgSgMQgPgKgagEQgegFghgiQgxg0gFgEQgNgKgpgMQgjgLgNgQQAqg5CMBkQBNA4CKB3QBFAzAiA4QAlA+AGBUQACANAHAgQAEAcgUAMQgPgUgFggg");
	this.shape_58.setTransform(438.0266,61.7436);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#332218").s().p("ACwDsQgdgVgGgBQhLgCgmgDQhAgEgwgTQgKgDgwgDQgpgDgWgTQAKgOAWgHIAsgMQgagQgbgEIg4gEQAcgYADgUQACgNgIgeIgVhVQgMgxgTgbIALgJQAIgGAAgGQABgLgIgHIBGg9QgMAVAUBVQALAqANAmIAEASIABABIALBBQAHAmACAhQABANAWAJQAWAIAGgKQAVghAUgDQAPgCAbASQAvAeANAHQAsAWAvAEQAVACAjATIAzAbQgEAUgPAJIgdALQgGADgGAAQgOAAgQgMg");
	this.shape_59.setTransform(404.1,77.3613);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#564337").s().p("AgYAOQACgEgHgKQgGgHgGgGQgFgEAvgEQAugEgFAIQgEAGgPgDQgMgEABACQADAKgYATQgNAKgDAAQgEAAAFgJg");
	this.shape_60.setTransform(440.0798,91.1683);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#564337").s().p("AACAOQgQgVAAgJQgDgJASAAIAOgBQgPAWACAOQACAEAJANQgEgDgHgKgAAPgaIAAAAIAAAAg");
	this.shape_61.setTransform(438.3054,89.775);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#564337").s().p("AgWAXQgQgBgZgHQgagHgPgIQgQgIAQAAQAhAAAfgNQgmhigEgGQAHAAA0BCIAQAWQAPgEATAOQAOALAbAZQAPAMAeAMIhJBcIgCABQgRAAgrhng");
	this.shape_62.setTransform(425.3875,62.2623);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#564337").s().p("AAjAqQAMgIg0grIg1gqQAWAGAvAhQAwAgAAAKQACAMgXAHIgMADQgGAAAPgKg");
	this.shape_63.setTransform(441.1787,72.5862);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#564337").s().p("AgDAQQgHgJAIgOQgnAEAngNQAkgLgeASQASALAAAKQAAAIgKABIgEAAQgHAAgEgFg");
	this.shape_64.setTransform(451.9687,80.5928);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#564337").s().p("AgSBEIgghCIBShHIARA2QAKA3ggAKIgYANQgMAHgFAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_65.setTransform(407.3455,41.5841);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#564337").s().p("ABiGfQgegIgNgZQADgDAIgDIAMgFIA7AVQABgOgGgNIgIgQQgEgRACgkQACgngCgRQgCgSgVgEQgXgBgHgCIgzgcQgigTgVgCQgwgEgrgWQgNgGgvgeQgcgSgPACQgUACgVAiQgGAJgWgIQgWgIgBgOQgCghgHglIgHgqQgagogWhDQgahSAQgZQgGABCFhgQCCheAIgFIgCADQANAQAjALQApAMANAKIBKA9QAzAnAgAFQgCgBAAAAQgBgBgBAAQAAAAAAAAQAAAAABAAQAFAAAPAMQAIAHAQAUQAJAAAIALQAHALANAnQAfBdAtAVQASAJAsAPQAjARABAmQABAmAEAVQAFAgAPAUQADAEgBALIgBAQIgKATIgZAOQgcgCgWAYQgXAZAHAaIgKAHQgFAIgEAMQgdAVgaAdQgEAFgFARIgaAiQgGgKgNACQgGABgOAGQgRAHgRAAQgLAAgLgDg");
	this.shape_66.setTransform(423.8397,76.4311);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#988261").s().p("Ag1A8IgcgYQgBgKABgNQACgYALgOIAIgaIAggKIANAJIA2AYQAfALANgCIgbBDIgPABQg8ANgXAAQgIAAgDgCg");
	this.shape_67.setTransform(349.95,213.3283);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#988261").s().p("AhZAjIgQhBIBQgNIBxAIIASAOIgDAPIiHAzg");
	this.shape_68.setTransform(260.925,229.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#988261").s().p("Ag8AkQgOgDgPgHQgegPgCgVIAQgUQAUgUAUAEIANABQARAJAWAqIATgBQAXgDAQgEIAjgNQAkgMAGAJQgHAMgMANQgaAbgfALQgMADgTAAIgGAAQgjAAgigMg");
	this.shape_69.setTransform(316.725,206.5269);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#988261").s().p("AAIAVIhAgOIgBgYQAJgXAvAMIAzALIAIASIgRAgg");
	this.shape_70.setTransform(261.125,194.7663);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#150C0A").s().p("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");
	this.shape_71.setTransform(272.5,318.5439);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#564337").s().p("AhJgHQAmgNAdgBQAfgCAxALQgbAegoAEIgHAAQgnAAgigdg");
	this.shape_72.setTransform(147.8,232.3078);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#988261").s().p("AheA5QgFgTAIggQAJgkAWgVQAUgSBCAUQBFAUACAjQACAdhDAQQgmAKgmAAQgZAAgZgEg");
	this.shape_73.setTransform(228.1896,213.5385);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#332218").s().p("AgUACQgBgfgLgcQARgEASAMQAUANAIAUQAHASgPAaQgQAbgbAEIAAg5g");
	this.shape_74.setTransform(474.875,272.9154);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#332218").s().p("AghAAIACg+QAtAGATAgQAFAXgUAeQgUAegZADQgGgdAAghg");
	this.shape_75.setTransform(476.2894,293.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#897254").s().p("AgHAAIAHgHIAIAHIgIAIg");
	this.shape_76.setTransform(294.35,205.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#897254").s().p("AgWAJQAAgLAIgEQAFgDAKAAQAIAAAHADQAHADABAEQgKAHgLACIgOAAg");
	this.shape_77.setTransform(301.75,193.5469);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#897254").s().p("AgQgVQAVgBAMALIgKARQgHAMgLAFg");
	this.shape_78.setTransform(302.625,198.046);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#897254").s().p("AgzANQgXgYAhgEQAVgDBRgCQgJAdgbABQgcgDgHAEQgOAKgLAAQgJAAgHgIg");
	this.shape_79.setTransform(292.7234,210.121);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#897254").s().p("AgdAHIgJgHQAUgIAXAAQAYAAAKAKQgPAHgUAAIghgCg");
	this.shape_80.setTransform(439.1,220.5487);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#332118").s().p("AgdAAQgBgPAcgCQAagDAGAWQAEAPgfACIgDAAQgbAAgCgTg");
	this.shape_81.setTransform(190.9961,274.0926);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#AA9A80").s().p("AgFAJQgWAAABgOQAAgQAUABQAagCAEAJQADAFAAAIQAAAIgDAFQgDAGgJACIgDAAQgJAAgFgMg");
	this.shape_82.setTransform(212.7514,261.5517);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#332118").s().p("AgDAeQgVgCgOgSQgHgIgPgeQAagDAkADIA7AGQADAcgTAOQgPAKgYAAIgJAAg");
	this.shape_83.setTransform(204.5454,274.1583);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#AA9A80").s().p("AhOAcQgCgPgSgPQAVgIANgNQALgLATgfQAOA2AiARQAbAPA6gCQgWAkg2AFQhGgBgqAHQANgXgCgPg");
	this.shape_84.setTransform(198.05,258.575);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#150C0A").s().p("AADAoQgSgCgLgGQgKgNgEgWIgFgkIA6ACQgEAWAIAQQAHARAWASQgQAEgRAAIgKAAg");
	this.shape_85.setTransform(134.175,246.1173);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#897254").s().p("AgGAAIAGgGIAIAGIgIAIg");
	this.shape_86.setTransform(351.65,243.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#897254").s().p("AgGAAIAGgGIAHAGIgHAHg");
	this.shape_87.setTransform(323,244.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#897254").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_88.setTransform(280.8,229.625);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#897254").s().p("AgGANQgFgKADgFQAEgNAOgFIgBASQAAANgHAKIgBAAQgDAAgEgIg");
	this.shape_89.setTransform(276.2188,226.6174);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#150C0B").s().p("AgMAEQgFgFACgNIAeAGIACAWIgHABQgNAAgJgLg");
	this.shape_90.setTransform(234.8483,274.2531);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#988261").s().p("AgeADQAIgJAOgBQAIgBAQADIAPAMIgbACQgQAAgSgGg");
	this.shape_91.setTransform(355.325,246.1875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#564337").s().p("AABANQgVgCgDgLQAMgLALgBQAPgCAJANQAAAOgUAAIgDAAg");
	this.shape_92.setTransform(357.55,260.7698);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#988261").s().p("AgYgFQAYgQAZAGQgGAWgUAKg");
	this.shape_93.setTransform(268.675,230.5182);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#988261").s().p("AgSgaQAlgCAMAEQAHADgEASIgHAaIg+AFQASgYgBgeg");
	this.shape_94.setTransform(248.8696,235.6917);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#897254").s().p("AgLATIgXgEQAAgPALgJQALgKAPAAQALAAAGACQAJADAGAJQgGASgRAGQgFABgHAAIgLgBg");
	this.shape_95.setTransform(346.774,262.6442);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#564337").s().p("Ag3AcQgCgOAHgJQAHgHAQgHIA9gaQgFAMgDAFQgIALgSANIA4ANQgqANgSACIgQACQgTAAgQgIg");
	this.shape_96.setTransform(369.9528,257.9071);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#897254").s().p("AgvAIQgUgIgEgIQgEgJARAAQA0gFAPACQAmAFAaAeQgbAGgZAAQgkAAgggNg");
	this.shape_97.setTransform(248.4619,247.5812);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#897254").s().p("AAAAeQgVgEgsgPQAIgWAbgNQAZgMANAJIAZASQASANAPAUQgUAIgWAAQgMAAgMgCg");
	this.shape_98.setTransform(328.2,250.9645);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#897254").s().p("Ah1BMQgKgOAOgQQAPgRAEgBQAHgDAVAKQASAIAjgTQAbgPAagXIgUgUQgLgLACgQQAaAPAPADQARADANgKQgOgJgCgNQgCgKAGgFQACgCAJAAIAMACIAdA+QgUAlg6ATQgyAQgIAlIgnABQgXABgMAEQgUgCgJgMg");
	this.shape_99.setTransform(284.2917,230.195);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#897254").s().p("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");
	this.shape_100.setTransform(369.995,209.1498);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#150C0A").s().p("AALA1QgUgEgNgTIgcADQgLACgCgKQgFgSAcgRQAcgSgGgZIAsAAQgCANAGAHQALANATgDQAHASgDARQgDAUgQANQgLAJgNAAIgKgBg");
	this.shape_101.setTransform(230.5867,278.1016);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#988261").s().p("AgPAyIAHgbQAEgSgIgDQgMgDgmABQgZADgtAdQgNgDgFgKQgGgJAGgFQAGgEAFgKIAPADQAHAAAPgXQAPgXALgCQAGgBANAWQAOAXAFABQAJACAKgFQALgEAFgJQAaAYAngDQAggDAjgWIAYAXQAKAbhAAVQgnANgiAAQgWAAgTgFg");
	this.shape_102.setTransform(253.2361,232.9963);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#332218").s().p("Ag3BCQgegkgeADQgHAAgMgGQgNgGgCgHQgBgEAGgJIAKgLIANgMQACAMAXACQAWABABgQIAWgCQAPAAAHAEQAWAKAcgEQATgDAqgNIg5gMQATgOAIgMQADgEAFgMIBHAFIATBcIh4AGIgLgKQgHgFgFAAQgWAAAJAhQAJAlgJAHQgJAGgIAAQgQAAgQgUg");
	this.shape_103.setTransform(367.3929,262.9533);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#564337").s().p("AhlB9QgagCgLgTQgWgkABgRQABgMAUgUQAzg0AtA/QAJgSgEgPIgLgcQARgKALgWQAJgXAFgIIBTgeQAeAYA1ADQgEAhgUAaQg7APhDAvQhKA1APAgQgXAQgZAAIgEAAg");
	this.shape_104.setTransform(143.5702,253.4809);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#897254").s().p("AAuAhQgDgSgIgIIhMgHQhUgJgSAJQgXANgLAFQgTAIgTgFQgbgIgOgWQACgYAcgEIAqgDQA1gTAygGQAqgFA3ADQAhABAxALIBRATQgEALgGAEQgGAFAFAJQAGAJAMADQAtgcAagDQABAegSAYIg5ANQgjAIgegKQgVgIgTAKQgRAJgLAUIgEglg");
	this.shape_105.setTransform(221.2808,235.6971);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#897254").s().p("AAgAUQgXACgZgHQgbgGgTgKQgKgGAHgRQAIgSAUAAQAmgBBAA5QAKAVgTAHIgHABQgOAAgDgXg");
	this.shape_106.setTransform(296.2146,172.2419);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#897254").s().p("AgDAqQgcgIgFgRQAAgDAJgKQAJgJAAgDQgBgEgJgHIgQgNQAKgOAXADQATADAOAMQANAJAGATQAIAUgLAOQgJALgPAAQgIAAgJgDg");
	this.shape_107.setTransform(281.2184,162.4845);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#897254").s().p("AgvgUQAcgZAlgFQgLAlARAPQAIAHATAIQAWAJAOAKQgaAFg8ABQg1ACgiAHQAJgsAegbg");
	this.shape_108.setTransform(222.175,192.95);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#332218").s().p("AgGgCIANACQgDADgCAAQgEAAgEgFg");
	this.shape_109.setTransform(226.65,207.558);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#AA9A80").s().p("AggBUIhSgTQgxgLghgCQADgUAQgLQAJgHAegJIC0g5IAsgOQAUgGAPgIQARgJAbAGQAeAGACAZQhIgJAXAhIjCBJQAXAPAFAbg");
	this.shape_110.setTransform(242.55,223.63);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#988261").s().p("AjMAkIDDhJQAnAEAdgIQAggJAXgaIBbAMIgQBAQgPAFgEAMIgmAMQhCgCgfACQg3ADgiAaQgGAJgKAEQgLAFgIgDQgGgBgNgWQgNgWgGABQgMACgOAXQgPAWgIABQgFgbgXgOg");
	this.shape_111.setTransform(258.35,224.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#897254").s().p("AAEAcQgMgEgKgNQgMgRAEgMQAEgOAZAAIAZBBIgYgFg");
	this.shape_112.setTransform(251.3265,165.5741);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#897254").s().p("AgxAhIgSgfQAlADAfgJQAZgIAogXQABAQAAAYQAAATABAMQhOgDgnAAg");
	this.shape_113.setTransform(249.3,175.95);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#897254").s().p("AhQAmQAUgRAHgSQAIgUgHgaQAtgEA1AUIANAgQAEADAGAAQAUAPgPAJQgQAJgHgRIgJgEQgWAVgcADIgMAAQgWAAgmgGg");
	this.shape_114.setTransform(234.0587,182.0621);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#564337").s().p("Ag1AWQAVggAYgSQAegYAfAJQAEAXgXAUQgeAagHAUQgVgbgdADg");
	this.shape_115.setTransform(516.1731,234.6754);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#150C0A").s().p("Agog2QgDgWAJgEQAJgFASAPQAXAUASA6QATBAgdAKQg5hVgHgzg");
	this.shape_116.setTransform(513.6295,252.6731);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#150C0A").s().p("AALA3QgngJgRgKQgbgSAGgrQAIgtAmADIgBAtQADAYAQANQAQgQADgZIAHgwQAdAgAJAlQAJAhgFAvQgQgMgngIg");
	this.shape_117.setTransform(503.55,255.075);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#897254").s().p("AiGBIIg7gCIhAgdQgMghgxgTQAKgNAMgFQAGgCAUgEQgBgPgLgEQgKgEgMAHQANggAogEQAYgCAzAEICWgBQBUAAAiACQBCAFA1ARQANAEAZgIIAjgLQgGAYAJAUQAJAWAXAHQgvAThZAKQhgAMhAAWIhUAdgAgSgxQgeABglANQAmAhArgDQAngEAbgfQgrgJgdAAIgIAAg");
	this.shape_118.setTransform(149.025,235.1136);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#998162").s().p("AlcCoQgYgHgJgWQgJgUAHgYQANgDANgOIAXgcQA3gOBNgmQBEgjASgBIBOgEQANgBAIgHQAFgEAFgKQADgHgDgHQgDgHgFABQgKADgJABQgPADgFgEQgTgMAJgQQAHgMAXgMQAJgEAMAGQARAJAJACIBYAQQAHAIAHgFQASgNAhAGQATAEAoAMQADgKgFgeQgFgdACgGQAEgKAOgEQAQgFAQAOQgUALgIARQgIAQAGARQAFAOAXAHIAtAJQBBAMAJAvQgOAIgVAGIgrANIi2A6QgdAJgKAHQgPALgDAUQg4gDgpAGQgyAGg1ATIgqADQgcADgCAYQgQgBg8ANQgNADgLAAQgbAAgTgPgABbhDQgKAOgDAZQgEAWADAMQAbAHAbgLQAdgKgBgUQgBgYgegOQgPgHgJAAQgJAAgEAGg");
	this.shape_119.setTransform(215.8887,217.8174);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#150C0A").s().p("AgHAAIAHgGIAIAGIgIAIg");
	this.shape_120.setTransform(71.25,243.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#150C0A").s().p("AgiA4QAQgrAFgSQAJgegFgWQAJABAOAKQAQALAFACQgEAngNAXQgQAdgZAAIgLgCg");
	this.shape_121.setTransform(77.425,239.3028);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#332218").s().p("AgZgbQgCgHANgGQANgGAIAHQAiAdgbA2QgbgpgMgeg");
	this.shape_122.setTransform(518.1725,315.9365);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#564337").s().p("AgJgFIATACIgQAJg");
	this.shape_123.setTransform(399.925,252.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#564437").s().p("AgPAcQghgGgIgkQAagKAggCQATgCAkAAIgOA0QgcAFgRAAIgNgBg");
	this.shape_124.setTransform(452.175,252.5783);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#564337").s().p("ABSBEIgSgEQgOgDgJgLQgJgLADgLIgNgQQgiAHghgKQghgKgVgYQAVgbA8gMQA7gMAUATQAEAUgIASQgIATgTAIIAOAPQAUgDAOAHQAHAFAPAlIgFABIgNgCg");
	this.shape_125.setTransform(418.45,255.7363);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#AA9A80").s().p("AgHAOQgKgFACgOQAHgNAKACQAKACADAHQACAHgCAFQgCAGgGAEQgDACgDAAQgDAAgFgDg");
	this.shape_126.setTransform(317.7534,186.6558);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#988261").s().p("AAMAIIgkACQgHAAgDgHQgDgFANgEIAqgFQAWACgFANQgEAIgGAAQgGAAgHgEg");
	this.shape_127.setTransform(369.6423,246.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#988261").s().p("AgRgCIAggSIAegBQADALgFAIQgGAIgKACIhIAOQAHgOAVgKg");
	this.shape_128.setTransform(364.4917,241.625);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#988261").s().p("AgHAUQgPAHgPgCQgPgCgIgKQgDgEgCgLIgBgRQgEgGAFgFQAEgFACADIATASIBtAYQgKAUgUADIgIABQgSAAgUgOg");
	this.shape_129.setTransform(438.9984,224.964);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#988261").s().p("AgSA0QgEgBgCgHIgDgKQgCgGgTgOIAHhDIBCAxQAbAAgDATQgCAVgagCQgHAOgNAFQgEABgFAAQgFAAgFgCg");
	this.shape_130.setTransform(405.1898,219.2817);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#AA9A80").s().p("AA0AhQgMgHgNACQgYADgRAVIgfABQgJgJgLgCQgJgDgfgBQAOgNARgFIAigHIgXgXQgMgMABgHQABgKARgJQASgKAGAIQgDAdACAOQACAaAPAFQAdAHABgXQACgVgggBIAhgPQARgIALgNQAKABAVgCQATAAAMAGQgPAKgDAFIgDALIgRBJQgGgNgLgIg");
	this.shape_131.setTransform(370.55,234.1596);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#988261").s().p("AhPAhQgIgGAAgKQAAgKAIgHQAIgJANgDQAkgXAlAAQAhAAAoASQgcAGgMAJQgKAGgEAOQgmACgggOIgIAbQgMADgJAAQgJAAgFgDg");
	this.shape_132.setTransform(347.575,207.4625);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#988261").s().p("AAMAXQgcgHgUABIgggSQAfgVAWgIQAYgIAZAFIANACQATAPADAFQgKgBgDAHQgCAFAFAGQAEAFACAHQADAKgEAIIg0gNg");
	this.shape_133.setTransform(395.525,223.8074);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#AA9A80").s().p("AgjAXQgVgIgRgPQgNgLgQgVIAvgFQAAAEADAKQAEAMADgCIAZgRQAVACArgEQAlAAAWAVQguADgSAHQgcAKgEAdg");
	this.shape_134.setTransform(270.125,205.55);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#988261").s().p("AgyAoIACgeQAAgKgFADQgNAIgFABQgMAEgIgIQALgUAegLQARgHAngMQAHAcARAOQARAPAZgDQAJgDAGAGQAEAGABAKQABAKgEACg");
	this.shape_135.setTransform(335.5611,215.075);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#AA9A80").s().p("AggAqIgEgNIAPAAQALgCAKgHQgBgFgHgDQgHgDgHAAQgMAAgFADQgIAEAAAMIgZgBQgJACgDgHQgCgGADgHQAGgJgEgRQgVgRANgMQAOgMARAPIBMAeQAoANAlAAQgIATgOALIgVANIgzAJQgLgLgWABg");
	this.shape_136.setTransform(304.2109,191.6159);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#988261").s().p("Ah2AgQgPgSgEgTIAzACQAdABAVgIQgKgSgOgFQgPgFgHgDQALACANgHQAMgGAEgIQAuAQBcAIQAaACAIAGQAKAHgEAUQgUgOgXAKQgLAFgXAVQgSARgIgCQgLgDgHgjIg9A7IguAFIgageg");
	this.shape_137.setTransform(269.1571,196.05);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#988261").s().p("AiHAtQgjgQgCgdQAJgCAJgPIATggQAKAiASAGQAPAGAcgLIA7gWQAngMAkABIAUADQAOABAGAAQAMgBAUAGQAVAHAJAAQADATgNAMQgNAOgWACIjDAYIgjAIIgNACQgKAAgJgFg");
	this.shape_138.setTransform(440.4023,210.9012);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#564337").s().p("AgnAuQgOAGgPABQgOgBgDgGIgVgtQgDgHgQgIQgQgJgCgEQgGgOARgaIBygdQgHABBPAGIBSAEQAFAHAFAZIgmACQgkAAgTABQghACgZALQAHAlAhAFQATADAogHQgMAqgSAXQgYAdgkABIgtACQANgdgLgXg");
	this.shape_139.setTransform(447.0734,254.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#988261").s().p("AjzBGQAMgFAXAAIAngBQAIglAzgRQA6gRAUgnIAQAAQAKAAAEADQAHAGAFAAQAJAAAHgNQALABAJgDQALgDAAgGQAAgGgGgQIgMgbQA9AMBcgZQAkgKALABQAQAAAAASQAAAPgcATQgqAdgYAcQAGAGANACIAfAFIhvAOQguAWgRAGQghAMgkgCQATAYgHAWIjqAug");
	this.shape_140.setTransform(299.775,232.2488);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#988261").s().p("AhaBXIhbgMQgDgNgNgOIgYgZQgIgIAFgPQAFgLAGgEIArAPQAxARAXADQAqAFArgSQgRgHgHgFQgLgJgCgRQAigCATgFQAYgHAOgNQgWgFgKgHQgIgFgDgKQgIgYAqAGQA0AHAEgFQAFgFAAgSIgDgaIAZABIALABIAFANIAEAtQALgFAJgMIAJgSIAzgJIAHA7QgjACgUAiQAEADAZAXQATARAMADQgyAzhMAMQgkAGgGACQgRAGAAARIiUAygAAGgIQggAEAYAYQAMAQAbgSQAIgEAcADQAbgBAKgdQhTACgVADgAA5gmIAIAHIAHgHIgHgIg");
	this.shape_141.setTransform(287.9,209.425);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#988261").s().p("AAsB7QgJgKgLgHIADgKQADgGAOgJQgMgHgSABQgUABgKAAQAIgMAHgGQAGgGgFgIQgGgIgDAEQgDAFgKAHQgLAIgEgCIi9haIAdg9QAOgfBAAAQBIAAAagYQAUAMAMARQAMAPAJAYQAdgJAVAKQASAJASAbQAHALAsgMQAsgLANAQQACAEgCALQgCAKgCAEQgZgFgZAIQgWAHgfAVIAgATQALAWgDAbQgDAcgQALQgUgTgXAPQgXAWgIADQgQgVgGgFg");
	this.shape_142.setTransform(376.7875,221.525);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#564337").s().p("AABBdQgOgLgTgFQgVgIgMgDQgUgFgQALIgTANQgFADgGgEQgHgGgDgBQACgPARgLQALgHAggPIhHgVQgqgLgcgVQAWgcBHgTQA9gQAIgiQArAOBigDQBegCApASQgEANACAPIAFAWQgZA2hSApQgaANgBAJQgBAMAiAVIhhAQQgDgRgTgMg");
	this.shape_143.setTransform(483.875,242.075);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#AA9A80").s().p("AHMCkQgDgQAFgMQgqgThdADQhjADgsgOQhPgZhRgMQhggPhAANIhugZIgTgSQgCgDgEAFQgEAFADAGQgbgOgGgbQgjADgXAUQgYAWABAdIgXAFQgMABgQgNQAXgSACgNQACgMgQgOQg8gngvgvQgNgMgdgGQgngGgEgCIAagKQAMgGACgFIgBgYQABgSAOgTQAUAoAeANQAeAPAygHIhDAWQAdAaAnADQAYABAtgIQACAeAkAQQAOAGASgEIAjgIIDDgXQAWgDANgNQAOgOgDgTIClAAIgGAbQgCAOADAHQBEgSAmgCQA0gCA2AXIhcA5QBHAGBFgDQAygCBPgKQgHALgPAJQgNAJgFAJIAygDQAZgBANAKQANALALAZIAOAiIACAOQgfgJgfAYQgYASgUAhIgxAHIgEgWgAjyAPIAIAHIAiADQAVgBAOgHQgKgLgYABIgCgBQgXAAgSAJg");
	this.shape_144.setTransform(459.55,219);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#332218").s().p("AgHAAIAHgHIAIAHIgIAIg");
	this.shape_145.setTransform(369.75,326.125);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#332218").s().p("AgHgCQADgKAMADIgEATQgNgDACgJg");
	this.shape_146.setTransform(368.4561,276.464);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#332218").s().p("AgQAZQgIgXAEgPQAFgPAVABQAWABgJAdQgDAMgQAJQgHAEgEAAQgEAAgBgDg");
	this.shape_147.setTransform(422.8611,289.5103);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#332218").s().p("AgIANQgQgLgEgFQAGgcAbAJQAOAFAHAMQAIAPgRAPIgCAAQgIAAgPgMg");
	this.shape_148.setTransform(271.053,332.2269);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#A99A80").s().p("AAYAQIg/gFQABgQAOgGQAIgEARgBQAUgBAJALQAGAGAEASIgQgCg");
	this.shape_149.setTransform(145.025,263.4989);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#332218").s().p("AAAAYIgcgOQgHgOADgIQADgKANgDQANgDAFAJQALAEALANQAMAOgDALQgGAEgJAAQgIAAgKgDg");
	this.shape_150.setTransform(376.0036,274.533);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#332218").s().p("AgUAJQgPgdAQgHQAWgKARAdQARAcgSAIQgGACgGAAQgPAAgMgVg");
	this.shape_151.setTransform(245.625,320.4346);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#564337").s().p("AgPAgIABghQAAgGgGgDIgRABQgLgBgOgIQAKgNAPAAQAQAAALAMIAGAGQAaAAARgTIAYAYIgiAaQgSAPgRAAIgJgBg");
	this.shape_152.setTransform(290.35,272.2521);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#332218").s().p("AAOAhQgeAAgXgSQgCgLgIgFQgHACgHgBQgGgDgCgFQgDgHACgHQADgGAGgDQAHgDAGAEQAHAEAAAMQAAALAKADQAQAAAhgCQAggBAaAPQgaAVghAAIgBAAg");
	this.shape_153.setTransform(261.6182,299.8689);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#332218").s().p("AgSAEQgFgaAQgbQAQAaAHAWQAGAWgCAcQgggPgGgeg");
	this.shape_154.setTransform(306.1988,281.55);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#332218").s().p("AAAgDQgPgRgcgUQAWgOAVAGQATAFAKAVQALAXACAIQAFAXgOATQgRgjgQgTg");
	this.shape_155.setTransform(222.5158,331.6372);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#332218").s().p("Ag1AQQAAgWAcAEQAKgEAPgOQANgMAFgBQAJgCAMAOQAMANADAOQgEANgZAGIgzAJIgIABQgSAAgBgTg");
	this.shape_156.setTransform(269.9246,322.575);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#332218").s().p("AATA3QgFgIgFgFIgGgFQgIAEgLgFQgMgEgBgHQgEgWADgwQAAgLAWADQAUADAJAKQAOAPgSAsQgCAFADAEQABADAEABQALAEgCAKQgCAJgJAAIgCAAg");
	this.shape_157.setTransform(308.9255,326.2962);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#332218").s().p("AgdARQgJgJAEgZQAEgbAKABQAYAIAQAfQAGAMALAkQgzgMgPgPg");
	this.shape_158.setTransform(281.899,338.8732);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#564437").s().p("Ag0AgQADgNAMgRIASgaQAcgIAsABQgEAOgLASIgSAfQgxgFgXAFg");
	this.shape_159.setTransform(216.325,298.3191);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#332218").s().p("AAOAtQgRgBgNgQQglgqAWgeQAcAJAUARQAaATgDASQgEAagUAAIgCAAg");
	this.shape_160.setTransform(424.3901,281.5289);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#332218").s().p("AADAiQgUgGgOgJQgMgHAHgTQAHgVARgBIAYgLQASgHAKAJQgLAUgBASQAAAOAGAeIgfgKg");
	this.shape_161.setTransform(250.3844,333.0546);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#332218").s().p("AgFAkQgTgQgIgDQAEgEACgGQACgHgBgEQgBgCgJgIQgJgGAAgCQAHgLARgFIAUgHIAYAPQAMAHAEAIQAGAOgCAVQgCAWgKADIgKABQgOAAgNgKg");
	this.shape_162.setTransform(390.1735,269.4329);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#332118").s().p("AABAYIgXABQgQABgKgEQgIgEgEgPQgDgMADgMIB3gGQAEAVgBAGQgCAMgOAQg");
	this.shape_163.setTransform(376.5032,266.925);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#332218").s().p("AAPA2QgegBgUgNQgLgHgDgYQgBgHAAgbQgEgDgFgBQgPgNAMgGQAVgKgJAKQAJAHAEAHQAugBAYAOQAjATAAAwQgYAIgaAAIgDAAg");
	this.shape_164.setTransform(268.2207,309.37);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#897254").s().p("AgPAdQgNgJgVgEQgFgNgEgGQgGgKgMgMQANgFAagOQAYgMAUgBIAEAnQAEATAHAJQAHAGASgFQASgFAGgIIAEAMQADAPgCALQgBAIgIAFQgHAHgJAAIg4ACQAHgRgRgMg");
	this.shape_165.setTransform(391.775,251.75);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#332218").s().p("Ag3BKIBEidQADAKAWAsQASAjAAAhQgBAdgtAMQgRAEgOAAQgVAAgNgKg");
	this.shape_166.setTransform(167.75,316.7441);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#332218").s().p("AAhA4Qg0gVg7gIIAUgwQAMgdATgXQAMAlAWAMQAWAKAlgKQAKAYACAbQABAQgBAfIgtgSg");
	this.shape_167.setTransform(171.3583,266.775);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#332218").s().p("AgNBAIgRgDQgRgDgIgQIBXgZIghgQQgNgGgFgKIAZguQAQgaAbgNQABAOgDBPQgDA1AMAjIhNAUQANgdgFgIg");
	this.shape_168.setTransform(312.3,372.475);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#332218").s().p("AgUgCQgGgdgIgKQgMgOgcAFQgDgIAAgJQABgLAFgDQAIgFANADQAPADAHAMQAIAPAKgGQAJgGgJgOQACgUAVAIQATAHAGArQAIAzAgAeIgbAWQgNAMgJAUQgkgZgNhHg");
	this.shape_169.setTransform(249.1214,309.3733);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#564337").s().p("AgfA0QgVgPgVgjIAAg4IBKgCIAagEQAMgHAKAEQAMAEAAAQQgTADgHADQgMAFgKANQAxATAMAhQgRgLgRALQgFAEgDAIQgEAJAAAIQgLADgKAAQgUAAgSgNg");
	this.shape_170.setTransform(115.775,235.9606);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#332218").s().p("AhBBPQgEgHgBgSQABgbABgEQAEgPAXgDQAZAAgDgUQgEgVgiAFQgBgRAXgVQAZgXAWAJQgFAeAAAKQAAAdATACQAEABAIgOQAJgPAFgBQASgCABAPQAAAOgQAVQgmA3g+AXQgFABgEAAQgIAAgDgHg");
	this.shape_171.setTransform(171.95,284.5381);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#564337").s().p("AghBdQgIgBgGgIIgIgNQAOgQABgMQABgHgDgVIgThcQAIABAVgJQAVgJAMACQAUAEAOAJQARANgHAQQgHAQABAIQADANAVANIgdAWIgVAHQgQAFgGALQgBACAJAGQAIAIABACQABAFgCAHQgCAGgEAEIgQAFQgKADgGAAIgCAAg");
	this.shape_172.setTransform(386.75,262.64);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#332218").s().p("AhCBDQgDgWANgmIAph3IBTCjQgRACgXgBQgSgBgKACQgMADgIARQgIAQgCAYQghgOgDggg");
	this.shape_173.setTransform(352.4292,300.975);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#564337").s().p("Ag0AlQgKgJgrg9IBlgHQAGAAAdgIQAWgGAPADQANADALANQAKAMAEAPIhTA5IgWgBQgKAFgKAAQgRAAgQgQg");
	this.shape_174.setTransform(272.125,275.0565);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#564337").s().p("AggBDQgJgKgVgoQgEgJgNgNQgKgNgEgJQAVACALgDQAPgDAHgLQgYgMgFgIQgFgHAFgKQAGgKAJACQADABANAMQANANADABQA0AMARAIQAmAQAHAbQgLAFgKgFIgNgJQgFgGgIADQgHADgBAIQAAAHAFAKIAGAMIgTAbQgMARgCANIgJABQgVAAgSgWg");
	this.shape_175.setTransform(209.45,292.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#332218").s().p("AgNB0QgfgOgMgOQgRgVATgeQAZgfAFgKQgIgtACgVQACglAlgVQAAAtAPAqQANAkAcAqQgjAQgFAGQgGAFADAQQACAOAKAjIgBAAQgRAAgdgNg");
	this.shape_176.setTransform(148.7555,318.1759);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#332218").s().p("AAABxQgJgKgEgSIgGgiQglgRgJgeQgJgaALgpQAIgcAFgIQAKgPATADIAbgBQgCAJAGAJIAKANIgBARQgBALAGAGQAPAPAcACQAEACgBASQgBARgFAFQgJALgxACIALBYg");
	this.shape_177.setTransform(155.7747,279.375);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#332218").s().p("AA2BYQAJgzhCgOQAAgMAIgKQALgIACgEQAHgLgIgGQgHgGgJABIgjAFQgnASgcAAQglgCgYgiQAbADApgFQAtgGAPABQAyAEAUgGQAkgKAbgrQAXAqApgCQABAMgFALQgFALgJACIgsAKQgfAIAHBSQADAhgCAFQgBABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgGAAgPgVg");
	this.shape_178.setTransform(223.3333,311.2504);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#564337").s().p("AgPBPQABgFgFgNQAIgBASAFQAVABATgTIhygtQgIgCgWAAQgSAAgFgDQgUgQgCgkQARgGAGgTIAkgCIgKANQgGAIABAEQACAHANAHQAMAGAHgBQAegCAeAkQAYAdAYgQQAKgHgKglQgKggAYgBQAFAAAHAGIALAJQgDAMADANQAEAPAIAEQAKAEAQgBIAYgBIgDAfQgHgJgNADQgNADgDAKQgDAIAHAPQgGgDgNABIgTACQgNgDgDAJQgDAKAOAEIACAHIgqACIgIAAQgTAAgNgEg");
	this.shape_179.setTransform(362.3,270.1333);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#332218").s().p("AAtBrQgLgdgbgeIgnhbQgMAJgMAEQgMAEgGgCQgKgDAAgMQgBgMAKgCIAmgEIgShJQAOgGAIgNQAHgLAAgQIAXACIBGCcQgNAMgHALQgJAOACAIQAAACANAQQAPAQAHAQQAZAygmA6QgGgwgLgag");
	this.shape_180.setTransform(274.8579,297.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#564337").s().p("AiHBIIgPgsIASgeQALgSAEgOQAGAAAsALQAeAHAlgKIAegFQATgDAKgHQgDgGgFAAQgSgUAQgCQAJgCABgBIAKAbIAbAAQATABALAJQACAEAFAcQAFAWAJAIQAJAOgKAGQgJAGgIgPQgIgMgOgDQgNgDgIAFQgGADAAALQgBAJADAIIgTABQgqACgWgqQgbArgjAKQgNADgZAAIgigBg");
	this.shape_181.setTransform(233.3939,298.6895);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#897254").s().p("AheA6IAjAGQAXADAWgIQgGgOgYgGQgcgIgDgCIgegmQgQgRgSgGQgEgQAGgRQACgHAQgFQARgGAGAFQAgAZAiADIBBgEQArA9AKAJQAYAYAegNQAAAPgIAMQgHAMgOAGQgqgDhqALIgTABQgnAAgBgXg");
	this.shape_182.setTransform(258.02,277.1913);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#897254").s().p("ABnBYQgFgPgKgMQgLgNgNgDQgPgDgWAGQgcAIgHAAQgTgihBAGQhWAIgmgNQAcg2ApggQAxglA7AAQgCATgRAFQgTAFgUgLQgIARALASQAHAKANAQQAJARAhABQAGAABCgEQBzgHA+AyQgRATgaAAIgLAMIgBAigABzAyQAOAIAMABIARgBIAKgJQgMgMgPAAQgPAAgLANg");
	this.shape_183.setTransform(272.5,265.3747);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#AA9A80").s().p("AgMBOIgYgJQgEgSgHgHQgJgLgTABQgTABgIAEQgNAGgCARIgYgCQgPggBLg0QBDgwA6gPQAMgDAigCQAkgDALgCQAQAUgRAZQgRAYgagBQgMgBgMAFQgNAFgDAGQgHAQAQAaQAQAcgEALQgJAcgdACIgcABQgEgMgQgIg");
	this.shape_184.setTransform(152.7757,258.375);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#897254").s().p("AiQA/QADgZAYgLQASgIAggCQAEgRgSgLQgTgMgVAIQAFgQgBgMQAAgNgIAAQgNABgJAAQgRgBgMgMICmgYQgKAfAHAKQAEAIATAAQA8ABAcAeQANAMAaAEIAoACQgFATgfAXQgcAVABAXIgwABQh9AAhVgeg");
	this.shape_185.setTransform(321.45,263.3753);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#332218").s().p("ABmDMIASgfQAKgSABgLQgHhRgghAQgbg4g7hEQgSAFgSAAQgXgBgEgMQgFgKAIgQIAQgeQhIA+hPg7QgBgYAcgUQAfgXAFgUIAqACIAXAEQAOADAKgDQACAkATAQQAFAEASAAQAWgBAIADIBzAtQgTATgVgBQgUgFgHABQAFANgBAFQAQAFAZgBIAqgCQgDAVAIAoQAIAtAAAUIAFDsQgdABgSAJQgTAKgOAWQgcgfAUgng");
	this.shape_186.setTransform(351.8246,291.325);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#332218").s().p("ABICPQgsgLgGAAQgqgBgdAIIgGgMQgGgLABgHQABgIAHgDQAHgDAGAFIAMAKQALAGALgFQgHgcgmgQQgSgIg0gNQgEgBgMgMQgNgNgEgBQgIgCgGALQgFAKAEAGQAGAJAYALQgHAMgPADQgLACgVgCQgNg3g0giQhHgmgrgfIBOg9QAQgMAfAOQAcAOAJATQAPAeAHAJQAOASAVABQAgADASgNQATgNgDgeICzAJQAGAZgcASQgcASAFASQACAKALgCIAcgDQANASAVAEQAUAEAOgMQAQgMADgUQADgSgHgSIgDgXQALACAbAAQAagBANAEQATAFAQARIAdAnQADADAcAHQAYAHAHAMQgWAIgXgDIgjgFQhogJhCBEQAOAiADAkQgWAGgTAAQgOAAgMgDgAkehgQgcADABAOQACAWAfgCQAfgBgEgPQgFgVgXAAIgFAAg");
	this.shape_187.setTransform(219.375,281.9169);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#897254").s().p("Ai7B4QgCgcgKgYQglAKgWgKQgXgMgMglQgTAXgMAdIgUAxQgJgCgTAHIgdAMIgKgNQgGgJACgJQAdgCAJgcQAEgLgQgcQgQgaAHgQQADgGANgFQAMgFAMABQAaABARgYQARgZgQgUQgLACgkADQgiACgMADQAUgaAEghIBGgYQArgLAgAMQALADgCASQgCASgKABQgrAHgQAQQgEAEAJANQAJAOAHgCQBUgeBqAJQByAKAKA3ICaALQAEANAFAWQAFAWAOARQATgQAOgVIAWgnQAEAoAoAEQBKAIAbAMQgUAJgEAQQgBAEgCAiQgzAHAAAiIjUgJIg8gGQglgDgaADQgIgTgcgNQgfgPgQANIhOA8IgeADQABgfgBgQgAhAgMQgNAMgUAIQASAQACAPQABAPgMAXQAqgHBGABQA2gFAVgkQg5ACgcgPQghgRgOg2QgUAfgLALgAB5AjQgBAPAWAAQAHAOALgCQAJgCADgGQADgFAAgIQAAgJgDgFQgEgJgbACIgCAAQgSAAAAAPg");
	this.shape_188.setTransform(197.9903,257.4811);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#332218").s().p("AhsHnQgVgGgbgCQAGg3AohnQAZg/gcgmQACgbgBgPQgBgcgaAFIgYAOQgSAKgLgDQgTgHACgWQACgagBgCQgMgSAAgiQAEgkgCgNQgHhSAFgaQALg6A7gUQgiBeAaARQAwgGADhpQgGh/AHgwQACgSAVgsQASgpAAgWQAAgIAEgIQAEgIAFgEQAQgMASALIA/AdIAFAkQAEAXAKANQALAGATACQAWABAUgFQgVgSgIgRQgIgRAFgWIBJAQQgEAIgKAXQgKAWgRALIALAbQADAQgIATQgthBg0A1QgTAUgBAMQgCARAWAlQALASAaACQAcACAYgSIBZAHIgCAfQgDATgHAIQgDAEgaAAQgaAAgEAGQgaAmAFA9QAFA8AfAjIAShjQAZAMAIAlQAIAkgQAYQgGAIgRAMQgPALgBAHQgCAMATBAQAMApgkAIQgagpgOhvQgMhZgkgNQgMgFgVAIQgWALgLADQgLgGgFgXQgEgTACgTQggALgBAaQAAAPAEAbQgIBJgEB8QgDBwADAMQACAGAVAIQAWAJACAGQAKAcgXAUQgXATgigCIAJB1QgcgLgRgFg");
	this.shape_189.setTransform(125.1208,289.0061);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#AA9A80").s().p("AAOAeIgOAAIgeg9QAPAAAOAFQAOAEAIAIQAQAPgJAfQgEgCgKAAg");
	this.shape_190.setTransform(296.6475,224.575);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#AA9A80").s().p("AoTENQgbAAgLgCIgfgHIgNABQgBgiA0gIQABghACgEQAEgQATgKQgagMhLgHQgngFgFgoIgVAnQgOAWgUAQQgNgRgGgWQgEgYgFgMIiagMQgKg2hzgKQhqgKhTAeQgHACgJgNQgJgNAEgFQAPgOAsgHQAKgCACgRQACgSgLgEQghgLgqALIhHAXQg1gDgdgXQBAgWBggMQBZgKAvgUQAcAVArgJQA8gNAQABQAOAYAbAHQASAFATgIQAMgFAWgNQASgKBVAJIBNAJQAHAHADATIAEAkQAMgTARgJQATgKAVAHQAdAKAjgIIA6gNIA/gFQAzAOBAgVQBAgWgKgcQAVgKAGgXIADgOIAmgMQgDAGAFAKQAFAKAEgCQAHgKAAgOIABgSICUgyQALAHADALIgKgBQgJgBgDACQgFAGABAKQACAMAOAKQgMAKgSgEQgPgDgagPQgCARALALIAVATQgaAYgcAQQgkATgSgIQgVgKgHACQgEACgOAQQgOAQAKAOQAIAMAUADIgLBAIDpguQAjAoA3gYIAtgVQAbgLAVAFQApAJAbgBQAkAAAhgOQAGAPgCAOQgBAHgDAEQAVAPARgGQAMgFAJgPQAHgSASgEIAegEQAFgBAGgPQAGgPAEgDQAMgHAaALQAWAKAAgGQABgEADgGQAEgHAEgDQAGgDgIgJQgJgJgPgFIAzABQAcgBAfgHQgOAcAJATQAHAQAeARQgpAUgJAmQgQgDgJABQgOABgIALQASAEARAAIAbgBQAQgBgBgdIBIgOIAAAeQgNAEADAGQADAFAHAAIAlgCQARALAGgNQAFgOgWgCQgGgTARgHQAMgFAkAAQBigBAngTIArgdQAdgUAWAAQADAAANgUQAKgQAFAQIAKAmQAcgWArAEQAXABAwAGIB0AAQA2AAgLgKQAKAIgDAoQgDArgaAKQgJAEgNgHIgbgRQgIgFgNAOQgOAPAHAJIASAaIgJAHQgGAFgFAAQgUgTg8AMQg8AMgVAbQgZgBgNgBQgYgDgNgJIgUgDQgHAJgRAFQgTAGgGgHQgIgJgDgUIgFgmQgVABgYALQgZAOgNAFQALAMAHALQAEAGAFANQgNgCgUAJQgVAJgJgBIhIgFIg9AaQgRAHgGAIQgHAJACAOQgIgEgOABIgXABQgJgMgOABQgNACgMAKIgNAMIgkACQgFgJgKgDQgGgCgKAAQgQAAgLAKQgMAKABAPIgqgCIgogCQgagDgMgNQgcgfg9AAQgUgBgEgHQgHgKAKggIimAZQAMAMARAAQAKABANgCQAHABABAMQABANgGAQQAVgIATALQASALgEATQggACgSAIQgYALgDAZIg0AFQghAEgSAHIgYgYQg9gyhzAHQhDAEgHgBQgggBgKgRQgNgPgGgKQgLgSAIgRQAUALASgFQASgGACgSQg8gBgwAmQgpAfgcA3QAmANBWgHQBAgGAUAiIhlAHIhCAEQgigDgggZQgGgFgRAFQgQAFgCAHQgGARAEARQgOgEgZABgAE+ASQgbANgIAWQAsAQAVADQAkAGAfgLQgPgVgSgOIgagSQgFgEgIAAQgLAAgOAIgAn7gJQgRABAEAIQAEAIAUAIQA2AXBDgPQgZgegngFIgNgBQgTAAgkADgAEhgTIAIAHIAHgHIgHgIgAJAgiIAHAHIAIgHIgIgIgAiIi2QgFAFAAAHQAAAHAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgHQAAgHgFgFQgFgFgHAAQgHAAgFAFg");
	this.shape_191.setTransform(293.3346,246.725);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#AA9A80").s().p("AgJgFIATgDQAAAMgCAFg");
	this.shape_192.setTransform(523.425,229.425);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#332218").s().p("AgGAAQAAgJANACIAAAPIgFAAQgIAAAAgIg");
	this.shape_193.setTransform(523.625,312.5574);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#AA9A80").s().p("AAAAHQgLgCAEgMQAFACALAAQAAANgIAAIgBgBg");
	this.shape_194.setTransform(346.9948,188.7674);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#332218").s().p("AgGAAQAAgJANACIAAAPIgFAAQgIAAAAgIg");
	this.shape_195.setTransform(523.6491,308.0243);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#332218").s().p("AgFAAIALgBQgDADgDAAQgCAAgDgCg");
	this.shape_196.setTransform(341.4,384.4542);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#332218").s().p("AgGAHQgEgJAFgHQAFgHAJABIAAAeIgEABQgIAAgDgJg");
	this.shape_197.setTransform(523.4488,272.6028);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#564337").s().p("AgRAPQAIgeAagBQADAQgFAGQgEAHgKACIgIACQgFAAgFgCg");
	this.shape_198.setTransform(70.3417,236.3568);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#564337").s().p("AgIgdIAOABQAEAQgDAQQgDASgLAIg");
	this.shape_199.setTransform(523.6143,240.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#AA9A80").s().p("AgKAOQgHgEgDgJQgBgIACgHIAYAAQAOACADALQgDAIgLAFQgGADgFAAIgHgBg");
	this.shape_200.setTransform(352.8429,189.7721);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#AA9A80").s().p("AgMAMIgSgJQANgbAwALQgGAbgSADIgDAAQgHAAgJgFg");
	this.shape_201.setTransform(120.275,215.2545);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#AA9A80").s().p("AgogLQAGAAAigGQAZgFARAFQghAggvAGQgFgPADgRg");
	this.shape_202.setTransform(109.3438,216.281);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#AA9A80").s().p("AAFAYQgbAAgVgJQgGgDAAgPQAAgPAFgFQBBAWAdAXIgmACIgHAAg");
	this.shape_203.setTransform(331.2231,184.505);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#AA9A80").s().p("AgsAWQANgnAcgGQAMgCAOAFQANAFAJAMQgDAaggACQgngEgPABg");
	this.shape_204.setTransform(190.725,202.4833);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#150C0A").s().p("AgTgyQgFgaAEgKQAFgLAVAAIABA8QAAATAJAoQAIAogBAVIggAPQAHg7gRhZg");
	this.shape_205.setTransform(522.1414,247.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#332218").s().p("AgTAIQgdgZAGggQBOgCAIBRIgQAMQgLAHgJABQABgPgcgbg");
	this.shape_206.setTransform(333.2805,382.0713);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#150C0A").s().p("AgrAIQgFgPAHgWQAHgXARgCQAfgCATAhQAQAbgEAfIgxAUQgfgTgIgcg");
	this.shape_207.setTransform(361.7563,371.5692);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#564337").s().p("AgcAqQgFgBgRgLQgPgLgJAAIgfgCQALgTAUACQAtAGAzggQAugeAmAPQgPAcACAhQgsAbgrAAQgRAAgRgFg");
	this.shape_208.setTransform(83.875,231.6731);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#AA9A80").s().p("ABTASQgiACgrgGQgsgIgTgCQg9gHgPAoQgHAAgNgBIgVgDIgCgvIDfgmICCAyIgkA3QgYglgiACg");
	this.shape_209.setTransform(464.875,202.825);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#AA9A80").s().p("AARATQgPgOgagBQgXgCgdALQgRAHgfASQgdg3gngoICXARQASACAFgKQAEgJgBgOQAPAEAGAAIgFAYQgBAKADAFQAFAGAKgJICvBAQg7AGgWADQgmAGgdAYQgKglgSgQg");
	this.shape_210.setTransform(339,193.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#897254").s().p("AhMBRQgfgHgXAOQgCgiAPgdQgmgOgtAdQg0AigugGQA7hLBEgqQBPgxBTABQgDARAFAPQAvgFAhghIAkALIASAJQALAFAJgBQATgDAFgcIA7gDQgBAOgIALQgHAJgRAMIA5gDQAbACASAQQgYAdgugCQg+gEgFACIhWAcQgxARgqAIQARAOA3gMQAqgIgCAiIhMACIAAA4Ig+ACQgCgZghgIg");
	this.shape_211.setTransform(106.25,224.925);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#897254").s().p("AE/BiQgLgZgMgLQgNgKgaABIgxADQAEgJAOgJQAOgKAHgLQhPAKgyACQhFADhGgGIBcg4Qg3gXgyACQgmAChEASQgDgHACgOIAFgbIimAAQgJAAgVgGQgUgHgMABQAPgoA+AHQASACAtAIQArAGAigCQAigCAZAmIAjg5IC3APQAZAKBBA2QAwApAygHIAMAkIADAAIgDAAIAjBuIgfAEIgPgig");
	this.shape_212.setTransform(487.925,215.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#AA9A80").s().p("AC/CeQgDgEgKgFQgLgEgHABQgYAGgUgTQgSgYgKgHQgzgph2gqQiCgsg2AOQgXAHgQAAQgTAAgUgHIgahCQAKglACgHQAKgYAWgEQAFAYAUAKQALAGAmAHIBhAVQgag/AQgRQAIgJAVgHQAYgIALAHIDWCAIAkATIAjAUIC4BzQgmADgugSQgKAhgZAZQgZAYgeALQABgRgFgHgACEBAQAUgHgLgVQg/g5goAAQgUABgIASQgGAQAKAFQASAMAbAGQAaAGAXgCQAFAeATgHgAh2hsIARANQAIAHABAEQAAADgJAKQgJAKABADQAEARAcAIQAdAIANgQQALgOgHgVQgHgTgNgJQgOgMgUgDIgJAAQgQAAgIALg");
	this.shape_213.setTransform(288.6,170.056);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#AA9A80").s().p("AmuCOQgLgCgMgKQgMgJgHgMQAZgTAtgXQA9geAQgJQAPgKgIhAQAkgNAfgFQAdgFAogBIgLgmQgFgTgBgPQAUABAZAOQAHAagIAUQgHASgUARQAxAJAXgDQAdgDAWgVIARgPIgNghQAKAEASgBIAbgCQAngBBQADICWACIBDgDQAsAaA9ADQAWABAFACQAIAEgGAMQgDAIgrABQgnAAABAWQAAAIAHAPIAOAYIAPAbQADAFgDAGQgDAGgKAAIgLgBQgGgBgHgFQAEgUgKgHQgIgGgagCQhcgIgvgPIhSgdIgOAZQgKAPgHACQgKAEgNgNIgTgRQgigRgpAQQgbAKglAcQAXAJABAZQACAYgOACIi7AbIg1gBQgfAAgWAWQgJAIgTAFQgMADgKAAIgLgBgAkMAEQgeAbgJAsQAigHA2gBQA8gCAagEQgOgLgWgJQgTgHgIgIQgRgQALgkQgmAFgcAZgAgyg7QAHAQAQgJQAPgIgUgPg");
	this.shape_214.setTransform(244.262,190.5446);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#897254").s().p("AEzCoQgXgiBIAKQgDgZgegHQgagGgSAJQgKgvhAgMIgugJQgWgGgFgOQgGgRAHgQQAJgRATgLQgQgNgPAFQgOAEgEAKQgDAGAGAcQAFAdgEALQgngMgTgEQgigHgSANIgMgDIhYgQQgKgBgRgJQgMgHgKAFQgWAMgIAMQgJAQATAMQAGADAPgDQAJgBAKgDQAEAAADAGQAEAHgEAHQgFALgEAEQgIAHgNAAIhPAEQAHgQgCgJIhRgNQg9gJgMgEQgogMgPgdIAZAAQAPgBAoAEQAggCADgaQADgCAFgCIAKgDQAHAMAMAKQAMAIALADQANACAUgEQASgFAKgIQAWgWAfAAIA1ACIC5gbQAOgCgBgYQgBgagXgIQAlgdAbgLQAqgQAiARIATASQANANAKgDQAHgDAKgPIAOgaIBSAdQgEAIgMAHQgNAHgLgCIgTgCQgLAAgLAIQgJAGgEAHQgDAHACAKQAEAUAPASIAZAdQAQAVANALQARAQAVAHQgGAEgFANQgFAOAIAIIAYAZQANAOADANQgXAbggAIQgSAGgXAAQgNAAgOgCg");
	this.shape_215.setTransform(226.7,203.956);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#988261").s().p("AmqBnQg3ALgSgOQArgIAxgQIBWgeQAFgBA+ADQAvACAXgdQgRgQgcgBIg5ACQARgLAHgIQAJgMAAgOQA7gRBfgGQCPgKARgBQAHgBA7gUQApgOAhAJQAYAHAagKQAXgIARgRQAOAdAoALQANAFA9AJIBQANQACAJgGAQQgRABhFAiQhNAog2ANIgXAcQgOAOgNADIgjALQgZAJgNgFQg1gRhCgFQgigChUAAIiWABQgzgEgYADQgoADgNAgIgaAEQACgigqAJg");
	this.shape_216.setTransform(154.625,217.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#AA9A80").s().p("AmiCUQgCgaAJgSQgggBgSgLQgVgMAAgXQAeAABbgKQA+gIAqANQB4gdDFhTQDehdBnggQg5BAiGAuQiWA1g5AsQBTgCDAg0QCmguAJAJQANANgLAKQgIAGgaAJQg/AUgFAWQAcgBAygIQAsgGAYABQgEAUgaAMQgfAKgLAHQgmAUgcgBQgIgCg4gQQgjgKg1APIhQAcIDKANIADAWIjJABQgOAAgLAPQgKATgEAFQggATg7gKQhPgNgOABQg/AEgbgHQgqgJglgqQgTAjgkAZQgkAZglACQgOgKgBgbg");
	this.shape_217.setTransform(406.875,183.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#332218").s().p("AgWFZQgWgLgFgQQgEgPAHghQgPgKgJAEQgFADgJANQgXAggjABQgZgqgKhFIgMh7QgBgSAHgxQAHgrgFgaQgKguAKgzQAHggAWg5QAEgKABgUIACgaQAKADAJgDQAKgCAEgHQAFgHgDgQQAKgIADgFIAfACQAFAVgJAfQgFASgQAsQAiAGATghQANgYAEgoQA7AQA+gmQAXgOAfAIQAhAIADAZQgDASgUAgQgVAhgDARIgYB7QASgIAXANQAWAMgJANIhfCHQgOAUAlBJQgiAKgPAJQgVAMgLAUQgKARAJAZIAPAqQAJAggXAMQgJAFgKAAQgKAAgNgGgAh9j2IAHAIIAIgIIgIgHg");
	this.shape_218.setTransform(83.1125,267.8573);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#150C0A").s().p("AgEA+QgWgWgGgJQgcgnAMhaQAUAEAPALQARANAEAQQACAMAQAQQASASACAEQAIAkgCAUQgCAggYAQQgLgTgTgTg");
	this.shape_219.setTransform(485.4302,259.75);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#150C0A").s().p("AkDGvQgFgGACgHQASg5BIgTQAGgBACgFQADgFgBgFQgIgbADgOQABgEAKgIIARgNQAEgGgBgHQgGgZAChNQABgxgggbQgFgEAAgGQAAgPAUgIQAIgEABgIQAAgIgHgEQgIgFACgIQABgIAJgDQAjgJArgCQAWgCA1AAQAGAAAEAEQADAEABAFQABALAGAIQAGAKAKAEQARAHAGABQAQAEADgMIgDgdQAAgIAIgEQAIgDAHAGQAbAYAFApQABAHAGADQAGAEAGgDQA0gXAYgkQADgFgCgGQgCgGgGgCQgNgEgNACQgIABgSAFQgHADgHgHIg1g9QgFgGADgJQAZgugfgnQgGgHAGgIQAFgIAJACQAWAHAVAlQAEAHAIAAQAIAAADgHQAOgcgDggQgCgfgRgdQgDgGgHgBQgHAAgFAFIgZAeQgFAGgHgBQgIgCgDgHQgXhEgDgMQgFgbAYANQAJAFAWAQQAOAMAPADQALACALgNQALgNgIgGQgGgFgNgGQgNgGgHgFQgHgFADgIQACgJAIgBQAdgGAhgVQAfgUAOgCQAFAAAFAEQAEAEAAAFIAABQQAAALgIADQgGACgCAGQgCAGADAHQACAGAFACQAJADAAAKIAAExQAAAKgJADQgFACAAAFQgBAFAGACQAIAEAAAHIAAAJQAAAIgIAEQgGACAAAFQABAFAFACQAJAEAAAHQgBBnhDBOQhCBOhlASIkTA3IgEABQgFAAgEgFgAC7BNQgNAGACAHQALAcAPAWQAEAIAJgCQAJgBACgJQAIgkgZgWQgFgDgGAAQgFAAgGACg");
	this.shape_220.setTransform(497.9964,304.0633);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#332218").s().p("AAaD+IiCAxQgQgjADgmQACgUANg5IgLggQgIgYAOgRQA4BFADADQAZAWAsgHQAIgBADgLQAEgKgHgCQgPAAgJgCQgRgEAAgNQABgFAcggQAagcgLgZQgJgSgeANQgiATgLAEQgLAFggAFQgbADgIAIQgfAbADA9QgggDAAgcQAFgggDgJQgGgPgNADQgNADgCAKQgDAQAAAJQAAAPAJARQAHAZgSABQgSABADgfQgVgCgIATQgHAQAFAUQAGAdAtgFQAygGALANQANAQgKARQgKASgVgMQgPgOgLgIQgTgOgOALQgDAHgBAZQgDAZgSALQgihigCgdQgFg7AwggQgbgJgFgEQgRgMACgzQACgsgVgDQgWgDgJADQgPAEgIASIAvAKQgHAsgjAxQAZAHADAHQACAFgEAIQgEAJgFABQgLACgSgMQgOgIgmArQghAmgJgbQgBgEAEgNQAEgOgBgJQgbAJgfgTQgggTAKgbQAPAAAnAEQAjAAAQgYQAIAWANAIQAKAGAPgDQAMgCAJgSQAJgSgPgEIgXgGQgLgDgDgEQgDgDALgLQAMgMACgDQAKgegMgiQgKgfgXgVQgGgHgEgBIgSgEIgSgFQgIgCgEgNQgFgNAIgGQARgOASANQARALADATQADAGAHAEQAWABANAPQALAMAKAcQAHAIAXABQAVAAALgFQAMhBgNhWQgFggABgIQACgOAOABQAPACAZA9QAeBIAhAcQALAEAoABQAlAEAHAXIgWALQgPAJACAKQASACAfAHQAYAEAPgIQASgKAJgXQAKgZgGgbIBKgyQgGgcAMghQAOgkAWAAQAZgBAPAYQAOAVgDASQgFAegJASQgNAZgbAPQAiAUAsACQAZACA2gGIAqATQAcANAQgLQAIgGgCgNQgDgLgHgIQgNgOgXAGQgaAHgIgEQgEgCgIgTQgGgSgGgBQgFgBgJAOQgJAOgEAAQgHABgNgNQgNgNAFgEQAkghA2gKQAfgGBCgDQARgGABgmQgCgqABgKQAWgKAMAYQANAYgKAbICQgGQgIATgdAGQgkAHgEADQggAXgZAIQgZAHgtABQA0A1gZA5QgHAQgPAcQgLAZAFARQAGAXAkAcQAkAeAGgQQAFgKgZgaQgcgegDgYQgCgcAsglQAFgOAIgDQAHgCAFAHQAGAHgDAIQgCAJgNAEQgSAoATAkQARAfArAYQgkAvgUAsQgkgKgTgDQgdgFgcADQgDgpAcgbQgUgIgLgMQgLgMgKgYQglAdgbANQgnATgpACQAJhJAAgMQAAgxgYgdQgJgMgNAXQgKARgDAPQgWAMgcgcQgbgbgGggQgVgCgIASQgHARAKARQANAXAvAWQAtAVANAbQAIAQgCAfIgEAyQAMACAkgBQAhAAAPAMQATAOAEAaQAEAZgJAaIhkAgQAEgfgQgcQgSghghACQgQACgIAXQgGAWAFAQQAIAcAfATQgJAEgWARQgTAQgOADQAIgogNgdg");
	this.shape_221.setTransform(351.8074,348.7801);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#332218").s().p("AANAeQgGgBgRgHQgNgGgGgPQgGgOAGgLIA+gGQgEALAAANIADAcQgCAJgKAAIgHgBg");
	this.shape_222.setTransform(503,303.9908);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#332218").s().p("AAwFeQgOgZgYgOQggg+hRg/QgIgGgKggQgJgggMgHQAXgIATAKQASAIAUAZQASgPADgfQADgcgKgcQgHgUgRgMQgVgPgXAJQgEABgFATQgFARgFAAQgHAAgLgCQgMgFgEgEQgFgEAAgKQgBgJADgHQAYgPACggQACgUgIglQgCgEgSgSQgQgQgCgMIBhgPQgigWABgMQABgJAagMQBSgqAYg2IAwgIQAdgDAVAcQAHgVAegaQAXgUgDgXIgCgPIALgBIASAQQgKAiAKAqIgPgBQgWAAgFAMQgEAJAFAbQARBZgHA7IAhgPIgBAuQgUgEgmAZQgrAcgqABQAIATASAJIAcAOQAIAHgKANQgLANgMgDQgOgDgPgLQgVgRgKgEQgYgOAIAgQAFAWAbBLIAzg+QAcAmACApQACAsgaAjQgUgqgPgNQgUgTgfAKQAfAaAEAdQAEAagSAfIBABKIAkgJQAUgBATALQgQAegaATQgVAPgmAPQAAghgOgagAhTirQgHAsAcARQAQAKAoAJQAmAJAQALQAGgugJgjQgKgkgcghIgHAwQgDAZgQARQgRgMgCgZIAAgtIgEgBQgjAAgGArgAAwj7QgJAFADAVQAHA0A6BWQAdgLgThAQgSg7gYgTQgOgMgIAAIgFABg");
	this.shape_223.setTransform(505.325,269.75);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#332218").s().p("AA4H1QgIgCgaAJQhIAZg9gdQgHgCgXgDQgUgCgGgFQgLgHgBgXQgBgXAKgZQALAnA0gKIAIAVQAGAMADAEQAIAIATgFQAUgEAAgMIABgsQABgVAIgPIAWApQADAFAOgDQAPgCgBgGQgJgTgCgJQgCgRAPgFQABgBAOAUQANATAHgGQAIgGACgOQABgMAAgYQAdAiArABQAoAAAjgdQgVgRgBgQQAAgEAIgNQAJgOAAgHQAAgFgMgNQgLgNABgEQAEgOAngOQgIgNgQAAQgOAAgJAJQgRASgEAnQgCAdgNgDIgUgCQgPgBgDgEQgDgHANghQATgNgPgMQgPgMgHAQQgIAOgLAgQgMAcgUANIgLgoQgHgSgQgNQgQASgGAdQgEAPgGAkQgIAGgQgKQgQgJgCgLQgCgFAKgWQAJgXAAgLQgXgMgTAgQgOAbgCAcQAAAJALABIgDAYQgEgMgIgHQgGgFgDAAQgSgDACgQIAGgPQAEgMgBgDQgDgLgSAAQgQABgJAIIgPABQAGAcAAAIQgBAXgWAOQgJgigDgHQgKgSgbgFQgDBLgaBFQgVgLgNgPQgUgXAKgSQAEgLAVgVQANgTgOgXQgZAhgmAGQgeAEgigOQgPgsAgAKIAeAKQAQAEAGgHIgVgXIAAAIQgKgFgTgmQgVgqgUg5IhLgVQghh0AFh0QAeAMA3AjIAAAAIAOhNQAAgQBAgwQA/gwgDgdQgCgYApAMQAvAOAEgFIAWgYIgXgMQgOgJgCgHQgBgFAJgJQAJgJAPgFQg5gShFAdQgVAJgcgPQgdgRgNgEQg+gQgOgFQgmgRgMgfQAJAAAIgGQAHgGACgIQABgKgDgQIARgKQANAJAYADQANABAZABQAVAYAhALQAhALAjgHIAIgEQATgKAIgTQAIgRgEgVQAFAAAGgEIAJgHIBJgHQgSAaAGAOQACAEAQAJQAQAIAEAIIAUAtQADAGAOABQAPgBAOgGQAFAIAmAUQAWAKAGAIQATgIANgSQASgXAMgqIAOg1IB3ABQADAAAGAHQAHAEAEgDIATgOQAQgKAUAFQAMADAVAIQgLBWBoA4QAcAOA2AYQAsAWAMAUQgpgBAuC1QAWBXAdBVQgNgVhRglQhRABgQABQgfACgbAGIgcAWIApAYQgVgCgSALQgTAKAGARQAjAcgBAyQgCBQAHAcQgBAGgQALQgOALgBAFQgDATAMAjQhhATgLBRQgYAFgkAZQguAggJAFQgBgdgKgDgAkHDGQgNAPAVANQAHArAMAIQAJAHAQAAQAMAAALgCIACgJQANgqhAgbQgIgMgHAAQgGAAgFAGgAktmxIgJAFQgDALAJALQAJAMAOADIASADQALADAHgCQgPglgHgEQgKgGgNAAIgLABgAlzE0QgBgFgBgJQAEABACgCQAAASgCAAIgCgDg");
	this.shape_224.setTransform(453.05,301.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#332118").ss(0.5).p("AgbA/QACgfAHggQAOg+AZAAIAIB4g");
	this.shape_225.setTransform(212.3966,275.6995);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#EEC784").s().p("AgTAAQAOg+AaAAIAIB4Ig5AFQACgfAHggg");
	this.shape_226.setTransform(212.4,275.675);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#332118").ss(0.5).p("AAGAnIgkg5QgCgDAEgCIA2gQQACgBACACQACABgBACIgSBJQgBACgCABQgDAAgBgCg");
	this.shape_227.setTransform(185.6116,255.8488);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#EEC784").s().p("AAGAnIgkg5QgCgDAEgCIA2gQQABgBAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAgBABIgSBJQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABIgBAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_228.setTransform(185.6116,255.8488);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#332118").ss(0.5).p("Ah4hMIAXgBQAcACAeAKQBcAhA9BuQgdACgsgSQhXglhKhlg");
	this.shape_229.setTransform(243.1467,272.2347);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EEC784").s().p("AAtA+QhXglhKhlIAWgBQAdACAeAKQBbAhA+BuIgGAAQgcAAgngQg");
	this.shape_230.setTransform(242.75,272.235);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#332118").ss(0.5).p("AiSAOIACALQAGAMAWAEQBFAMDBhIQgGgRgogFQhPgJinBAg");
	this.shape_231.setTransform(257.3945,245.25);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#EEC784").s().p("Ah0ApQgVgEgHgMIgCgLQCnhABQAKQAoAEAGARQimA+hLAAQgMAAgKgCg");
	this.shape_232.setTransform(257.325,245.25);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#332118").ss(0.5).p("AgyABIA1AcQAPgEANgKQAagRgHgaQgRABgVADQgpAIgVARg");
	this.shape_233.setTransform(221.684,252.4862);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#EEC784").s().p("AgyABQAVgRApgIQAVgDARgBQAHAagaARQgNAKgPAEg");
	this.shape_234.setTransform(221.684,252.475);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#332118").ss(0.5).p("AAqBpQgggMgXggQgxg+AkhhIAkA8QAkBJgEBGg");
	this.shape_235.setTransform(154.8831,195.8577);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#EEC784").s().p("AgNA6Qgxg+AkhhIAkA8QAkBJgEBGQgggMgXggg");
	this.shape_236.setTransform(154.8831,196.175);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#332118").ss(0.5).p("AghBbQgOgYgIgjQgOhEAig0IArATQAsAbAIAjIgtAhQgsAogEAZg");
	this.shape_237.setTransform(204.8883,256.9348);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#EEC784").s().p("Ag3AgQgOhFAig0IArATQAsAbAIAjIgtAiQgsAogEAYQgOgYgIgig");
	this.shape_238.setTransform(204.8605,257);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#332118").ss(0.5).p("AgmBSQgSgNAAgcQgBg2BYhEIAMAGQANAJABAPQAGAuhlBXg");
	this.shape_239.setTransform(186.2389,277.7066);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#EEC784").s().p("Ag4ApQgBg2BYhEIAMAGQANAIABAQQAGAuhlBXQgSgNAAgcg");
	this.shape_240.setTransform(186.2389,277.75);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#332118").ss(0.5).p("Ah2hBIAMAfQARAkAYAZQBJBPBuhAQAAgjgdgeQg7g/iUAVg");
	this.shape_241.setTransform(169.7669,239.7631);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#EEC784").s().p("AhBAbQgYgZgQgkIgNgfQCUgVA7A/QAdAeABAjQgyAdgqAAQgzAAgpgsg");
	this.shape_242.setTransform(169.75,239.7631);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#332118").ss(0.5).p("AhTABQAagXAggVQBAgpAjATIAFAKQAFAMgBAPQgCAug5AwQABgTgOgSQgZgihFAGg");
	this.shape_243.setTransform(166.4023,264.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#EEC784").s().p("AALAgQgZgihFAGQAagXAggVQBAgpAjATIAFAKQAFAMgBAPQgCAug5AwQABgTgOgSg");
	this.shape_244.setTransform(166.4023,263.9874);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#332118").ss(0.5).p("Ah4glIBTAvQBeArA5gVQgWgVgogSQhQgmhcAIg");
	this.shape_245.setTransform(132.9666,238.9529);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#EEC784").s().p("AghAKIhUgvQBdgIBQAmQAoASAWAVQgTAHgXAAQgvAAg+gdg");
	this.shape_246.setTransform(132.625,238.9529);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#332118").ss(0.5).p("AglhCIAhAZQAhAmAGBEIhAgL");
	this.shape_247.setTransform(218.4011,276.0762);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#EEC784").s().p("AgbA3IgJh4IAhAZQAiAmAGBEg");
	this.shape_248.setTransform(218.275,275.975);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#332118").ss(0.5).p("AgbA/QACggAHgfQAOg/AZABIAHB4g");
	this.shape_249.setTransform(371.2719,245.3219);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#EEC784").s().p("AgSAAQAOg+AZAAIAHB5Ig3AEQACggAHgfg");
	this.shape_250.setTransform(371.275,245.2998);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#332118").ss(0.5).p("AAGAnIgkg4QgBgFAEgBIA2gQQACgBABACQACABgBACIgSBJQgBACgCABQgDAAgBgCg");
	this.shape_251.setTransform(344.4858,225.4488);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#EEC784").s().p("AAGAnIgkg4QgBgFAEgBIA2gQQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgSBJQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAABIgBAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_252.setTransform(344.4858,225.4488);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#332118").ss(0.5).p("Ah4hMIAXgBQAcACAdAKQBcAhA+BuQgdACgsgSQhXglhKhlg");
	this.shape_253.setTransform(402.0482,241.8347);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#EEC784").s().p("AAtA+QhXglhLhlIAYgBQAcACAdAKQBcAhA9BuIgFAAQgcAAgngQg");
	this.shape_254.setTransform(401.65,241.835);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#332118").ss(0.5).p("AiSAOIACALQAGAMAWAEQBFAMDBhIQgGgRgogFQhPgJinBAg");
	this.shape_255.setTransform(416.2943,214.8562);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#EEC784").s().p("Ah0ApQgVgEgHgMIgCgLQCnhABQAJQAoAFAGARQilA+hLAAQgNAAgKgCg");
	this.shape_256.setTransform(416.225,214.8562);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#332118").ss(0.5).p("AgyAAIA1AdIAcgOQAagRgHgaQgRAAgVAEQgpAHgVARg");
	this.shape_257.setTransform(380.584,222.1241);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#EEC784").s().p("AgyAAQAVgQApgIQAVgDARgBQAHAagaASIgcANg");
	this.shape_258.setTransform(380.584,222.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#332118").ss(0.5).p("AApBpQgfgMgXgfQgxg+AkhiIAkA8QAkBJgFBGg");
	this.shape_259.setTransform(313.7585,165.4568);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#EEC784").s().p("AgNA7Qgxg+AkhiIAkA8QAkBJgFBGQgfgMgXgfg");
	this.shape_260.setTransform(313.7585,165.775);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#332118").ss(0.5).p("AghBbQgOgYgIgjQgOhEAig0IAqATQAtAbAHAjQgWAOgWATQgtAogDAZg");
	this.shape_261.setTransform(363.7656,226.534);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EEC784").s().p("Ag2AgQgPhEAjg1IAqATQAsAbAIAjQgWAOgXATQgsAogDAZQgPgYgHgig");
	this.shape_262.setTransform(363.7355,226.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#332118").ss(0.5).p("AgnBSQgSgNAAgcQAAg2BYhEIAMAGQAMAJACAPQAGAuhmBXg");
	this.shape_263.setTransform(345.1139,247.3066);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#EEC784").s().p("Ag5ApQAAg2BYhEIAMAGQAMAJACAPQAGAuhmBXQgSgOAAgbg");
	this.shape_264.setTransform(345.1139,247.35);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#332118").ss(0.5).p("Ah1hBIAMAgQARAjAXAZQBJBPBuhAQAAgjgdgeQg7g/iTAVg");
	this.shape_265.setTransform(328.6414,209.3631);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#EEC784").s().p("AhBAbQgXgZgRgjIgMggQCTgVA7A/QAdAeAAAjQgxAdgqAAQgzAAgpgsg");
	this.shape_266.setTransform(328.625,209.3631);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#332118").ss(0.5).p("AhUAAIA6grQBAgpAjASIAFAKQAFANgBAPQgCAug5AwQABgTgNgSQgagjhFAGg");
	this.shape_267.setTransform(325.3501,233.9158);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#EEC784").s().p("AAMAgQgagjhFAGIA6grQBAgpAjASIAFAKQAFANgBAPQgCAug5AwQABgTgNgSg");
	this.shape_268.setTransform(325.2523,233.6124);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#332118").ss(0.5).p("Ah4glIBTAvQBeAsA5gWQgWgVgogSQhQgmhcAIg");
	this.shape_269.setTransform(291.8106,208.5787);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#EEC784").s().p("AghAKIhUgvQBdgIBQAmQAoASAWAVQgTAHgXAAQgvAAg+gdg");
	this.shape_270.setTransform(291.475,208.5787);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#332118").ss(0.5).p("AglhCIAKAFQAMAIALAMQAhAmAGBFIhAgM");
	this.shape_271.setTransform(377.3402,245.6789);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EEC784").s().p("AgcA3IgIh4IAKAFQANAHAKANQAiAmAGBFg");
	this.shape_272.setTransform(377.175,245.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000001").s().p("AgSiHQAxCEgLCLQgyiEAMiLg");
	this.shape_273.setTransform(205.1924,70.375);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000001").s().p("AgLAJQhXhsgyhWQBHBBBZBwQBbByAuBQQhBg8hfh1g");
	this.shape_274.setTransform(174.025,75.35);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000001").s().p("Ah7gqQCFANByBIQiHgOhwhHg");
	this.shape_275.setTransform(163.65,107.775);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000001").s().p("AiIAaQAfj7CVipQArgxA3goIADADQhGBHgyBRQhIB4giCUQgfCIAFCYQAFCLAfB0IgEABQhbjXAejzg");
	this.shape_276.setTransform(30.3281,229.375);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000001").s().p("AhGARQAJh9BQhWQATgVAfgVIADADQg2BJgVA9QgtB2AVB+QALA5ANAhIgEACQhIhcAJiAg");
	this.shape_277.setTransform(44.625,233.525);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000001").s().p("Am4FNIAAgEQBNgKA9gTQEzhbELk2QBjh1BDhzIADACQhhDrjFCyQjOC+jsAwQhDAOhBAAIgNgBg");
	this.shape_278.setTransform(538.6,363.857);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000001").s().p("AkBC2QEChIDykYIAKgLIAFgEIAAAEQhICViKBnQiUBwicADg");
	this.shape_279.setTransform(525.725,358.425);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000001").s().p("AnADfQByjNDRh9QDZiDDjAPQBAADBCATIgBAEQhigLhfAKQiMARiIBAQiAA9h0BgQhrBahIBfg");
	this.shape_280.setTransform(328.825,31.5027);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000001").s().p("AjRB6QAbhxBrhHQBnhGB2AKQAbADAlALIAAAEQhOABhEATIgkANQh2AvhQBiQgXAcgNAWg");
	this.shape_281.setTransform(340.425,52.6319);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#150C0A").s().p("AMVL+QgqgOhSgIQg8gGgFgWQgFgTgQgHQgKgFgcgEQg/gJgigjQgwAHgugaQgpgZgZAHIAEiWIAbB+QAVACBBAMQAQgmAJg3QALhLADgKIBTiPIhOgaQAPgMAYgIQAVgGADgFQALgRAAgXQAAgXgLgNQgeAMgpApQgfAegYgHIAAgfQgCgVgMgDIgrgKQgEgBgNgPQgNgQgMgEQgtgNhIgjQhSgngigMIhBgWQgkgOgbgUIhqgbQhUg1iig0Qj+hRgkgOIkOh3Qjkhkg1gIQAFhdA8h1IAgg6IAAgBIgFgFQANgKgIAPQAeAVCRAoQCzAyAJAEQBMAkAeAIQA7APAvgYIAMA7QABAGABAVQAAAUAEAQIAbgHQAPgFAKgBQgCAHACATQgWAFAdAkQAWAaA9A6QAuArBOAeQAeAMBtAgQAIACATAOQASAIAHgSQAFgLgBgVIgBgdQAZgJADgdQABgYgOgbQAMgNAVgDIADAQQADAUASAnQgSBHAzAsQAOALAhAVQAgAUANANQA+A6AyAhQBEAtAjgKQgFgRABgUQADgWAIgTQAGgJAJAAQAHAAAIAGQAEADAGAVQAHATAFADQAVAKAegTQAdgSALgcQAOAKATARQAQAOATAIIAehoQACgFgDgVQAMgKADgPQABgKgEgHQgFgIgJgBQARgFAfgSQAhgVAQgGQARgHANARIASAZQgPAMgBASQAAALADAUQABAUAcANQAgAPACAFQAVAhAmBAQAiA2AnAiQAIAGAbAqQAUAjAcALQAIgQgEgXQgJgcgCgRQAbAQAPAWQAFAFAaAqQAIgjAPgNQAMgJAegGQAVgEBPghQBAgbAgAEQgLAgguAeQglAZgqAOIhgAgQgJACAIAOQAIAOAMgDIABAhQgNAGgJAKQgLALgCAKQgDAUAhAtQAiAuAgARQgEAGAAAMQAAAMADAHQAFgBgmBZQgmBaACAAQgQAkgVAmQgoBOgWANQACAHgjAIQgiAIgkABIgOAAQgoAAgHgLgAKjKAIA1AYQAgAPAUADIAbAxIBmACQgLgDBQh8QBciPAAgcIhziQQgKgbgZgaQgYgagagNQgTgKgeAKIg9AaQhdAphIgTQgTAYAAB0QAAB1AZAMIAcBBQgBAaACAFQAPAWAFANQAEAHAAgCIABgGQACgJAIAAQAEAAAGADgAJ+CaQAJAdATAAQArgBA6gOIBogaQgfg+g3gwQg8gzgqAKQAFgKgHgIIgNgKQACgUAAgKQgBgTgHgKQgIgKgWgIQgWgHgGAJQgIAOAEAXIAHAiQABAPgOAUIgWAdQARAUAUAsQAMAcAQgFQgFAUAGAYg");
	this.shape_282.setTransform(144.15,164.0701);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#564337").s().p("AgcA4QgpgYAFgiQACgLAPgIQANgHAJABQgVgHgLgLQgGgHgFgOQAdgFAnALIBEAXQAHA3gqAoQgKALgPAAQgPAAgVgNg");
	this.shape_283.setTransform(181.8755,145.0548);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#332218").s().p("Ag+CTQgRgdAJgSQBijFAVgoQAUglAFADQACAAg3CVQg6CaAAAXQAAAHADAHQABAAAAABQAAABAAAAQAAABgBAAQAAAAgBABIgBAAQgLAAgPgag");
	this.shape_284.setTransform(216.034,122.8989);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#564337").s().p("AgMASIgHgkQAJACALAJQANAJAGACQgKAPgSAAIgEgBg");
	this.shape_285.setTransform(86.6,106.3564);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#332218").s().p("AgegQQAMgHAOgBIARAAQAKAAAEAIQAFAHgCAJQgCAQgNAJg");
	this.shape_286.setTransform(196.4188,142.425);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#332218").s().p("AgtASQgJgOAJgCIBggfQgEAZgZAQQgTAMgdAFIgEABQgJAAgGgMg");
	this.shape_287.setTransform(252.7936,178.6507);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#332218").s().p("AgkADQAAgUgCgGQAWABALgQIAsALQgFASgOAjQgKABgOAFIgbAHQgEgRgBgTg");
	this.shape_288.setTransform(89.2,110.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#332218").s().p("AgkA9IAAgRIgLhqQASAEAXALIA2AaQglAGgPAUQgPAUgBAmg");
	this.shape_289.setTransform(177.775,215.375);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#564337").s().p("Ag0gTQANACAlgKQAigFAVAaQgcAdgyAGg");
	this.shape_290.setTransform(227.475,234.2347);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#332218").s().p("AgaAjIgHghQgEgXAIgOQAGgJAWAIQAVAHAHAKQAIAKAAASQABALgCATIgTACQgTAAgWgGg");
	this.shape_291.setTransform(207.5673,156.3212);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#564337").s().p("AhDAOQAOgjAFgSQApAKAXANQAkAQASAbIiJANQgDgTADgHg");
	this.shape_292.setTransform(97.9875,111.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#564337").s().p("AgTA1QgTgtgSgSIAXgfQAOgUgBgPQAfAIAdgEIAMAKQAIAIgFALQgHAiADASQgIgIgGgJIgHgOQgGgJgOACQgOACABAHQAGAlAFAOQAJAXAVAPIgeAHIgEABQgNAAgKgYg");
	this.shape_293.setTransform(206.9844,167.5066);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#332218").s().p("AgXATQgggrACgUQACgKALgLQAKgKANgGQAqAWAUAyQAUAygXApQgggRghgug");
	this.shape_294.setTransform(252.1367,193.125);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#564337").s().p("AhLGCQhJgFhAgzQimiHAelFQAFgrCEgUQBDgKASgGQAkgKgGgTICSA5QALgFCfh0QCLhmgFAXQgKABhhE4Qh0FMhhBcQgjAfg5AAIgRgBg");
	this.shape_295.setTransform(236.0476,203.7947);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#564337").s().p("AAfAxQgMgFgPghQgQgggIgHQgGgFgNAEQgMADABAEIAHAMQAFAKABALIiEg1QARgTASAEQAMABATANQAFgPAAgOIgBgTIB/AzQBKAdA4AOQAOAbgCAYQgCAdgaAJQgvgchAgPg");
	this.shape_296.setTransform(117.7323,125.25);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#332218").s().p("AhsBFQgHgZAFgTIAegHQgVgPgJgWQgFgOgHgmQgBgHAPgCQAOgCAGAJIAHAOQAGAKAIAIQgDgTAHgiQAqgKA7A0QA2AvAfA9IhnAbQg5AOgrAAQgUAAgIgcg");
	this.shape_297.setTransform(218.8968,172.6444);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#332218").s().p("AhHCPIgUiPIAcgoQASgcgEgVQAYAHAegeQApgpAegMQALANAAAXQAAAXgLARQgDAFgVAGQgXAIgQAMIBPAaIhTCOQgYgQgPAEQgGACgDAOQgDAPAEAMQAGAYgSABIgBAAQgRAAgDgXg");
	this.shape_298.setTransform(187.3,194.277);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#564337").s().p("AAcBUQgggfgNgEQgKgDgcACQgWABgFgHQgOgRgDguQgCgigVAAIgbACQgRgngEgVQAdgDAnAYQA0AfANAEQAhAKBHALQA/AOAbAcIAKApQAHAdgIASIg/gRQgEgBgJASQgJATgFABQgRgCgfgcg");
	this.shape_299.setTransform(154.1081,136.9027);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#332218").s().p("AC0CGQgTgOgIgCQhtgggegMQhNgegtgrQg+g5gVgaQgdgkAVgFICKgNQAFAHAIADIAPAFIABAUQAAAOgFAPQgTgNgMgCQgSgDgRATICDA2QgBgMgFgKIgHgMQgBgEAMgEQANgDAGAFQAIAGARAiQAPAfAMAGQBAAPAvAcIABAdQABAVgEALQgGANgJAAQgFAAgGgDg");
	this.shape_300.setTransform(111.1451,128.1613);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#332218").s().p("Ag1B2Qgzghg9g6QgNgNgggTQgjgVgNgLQgzgsARhHIAbgBQAVgBACAjQAEAuANASQAGAHAWgBQAbgCAKADQAOAEAhAeQAeAcARABQAGAAAJgSQAIgSAFABIA9AQQAJgRgHgdIgKgqQAHAGARACQAQADALgCQAFAOAGAHQALALAVAHQgJgBgNAHQgPAIgCALQgFAiApAYQAoAYAWgWQAqgogHg3QgBgGAJgEQAIgEAGACQADAeAUAWQAVAVAcABIgeBoQgUgIgQgOQgSgRgOgKQgLAcgdASQgeATgVgKQgGgDgGgTQgHgVgEgDQgHgGgIAAQgJAAgFAJQgJATgCAWQgCAUAGARQgHABgIAAQghABg2glg");
	this.shape_301.setTransform(168.3765,146.799);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#897254").s().p("AAHgIQgEAIgJAIQACgMALgEg");
	this.shape_302.setTransform(194.7,122.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#897254").s().p("AAGgIIgLARQAAgJALgIg");
	this.shape_303.setTransform(199.475,107.85);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#897254").s().p("AgMgDQAHgcARgOQAQAXgLAeQgLAggaAGQADgiAFgPg");
	this.shape_304.setTransform(197.5783,116.225);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#332218").s().p("ADBBKQg0gDiFgiQiEgigzgWQgMgGgFgTIgDgZQAZgIArAKQAwALAvgHQAgAiBGARQA0AMAKAXIAdAUQAtAfgNAAIAAAAg");
	this.shape_305.setTransform(192.1545,231.1397);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#564337").s().p("AkXDIQiAgwDbliQGPDSB0ANIgBAlQgvAYg7gPQgegIhMgkQgUgJi0BoQiVBVgjAAQgHAAgCgDg");
	this.shape_306.setTransform(51.5176,96.4504);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#AA9A80").s().p("AC1BXQgogLgcAFQgLACgQgDQgRgCgIgGQgbgdg+gNQhIgMghgKQgNgEg0geQgngYgdAEIgDgQQgDgRADgeQAPAAAaARQAcASAMADQAmAIAsAQIBPAfIDVBLQAQAGAUAAIAeAAQAMABAEALQADAGABAPQgHgCgIAEQgIAEAAAGIhEgXg");
	this.shape_307.setTransform(163.7308,130.275);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#564337").s().p("AgwDPQABglAPgUQARgWAkgGIg2gaQgYgKgSgEIAlkuIAqAKQAMADACAVIAAAfQADAUgRAcIgbApIATCOQAEAZAQgBQATgBgGgZQgFgLAEgPQADgPAGgCQAPgEAYAQQgDAKgLBLQgJA4gQAlQhAgLgVgDg");
	this.shape_308.setTransform(180.55,200.925);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#897254").s().p("ABlBaIh/gzIgPgFQgJgDgEgHQgSgagjgRQgZgNgpgKIgtgKQgGgCgNgKQgLgJgKgCIgEgWIABglQAPACAaASQAcATAMADQAlAHAuAZQA5AfASAIIDhBVQARAGArACQgDAeADARQgVADgMANQg3gPhKgeg");
	this.shape_309.setTransform(110.45,112.075);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#AA9A80").s().p("AFEByQgegegPgHQgHgDhEgTQgugMgSgZQgQgUgQgIQgUgLgZAGQABgWgWgDQgNgCgpAIQhfARgpgeQgfgfgTgMQgfgWgjARQgiARgUAHQgfAKgZgEQACgXAagKQAOgGAdgHQBNgjBIAEQBCADBOAkQAYALBgAmQBYAjAwAWQCaBMgeBAQgUgDgagag");
	this.shape_310.setTransform(240.3189,112.1089);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#332218").s().p("AADCWQgPgVgbgQQADARAIAbQAEAXgIAQQgbgLgVgiQgbgqgHgHQgoghgig3QglhAgVghQgDgEgggPQgcgOgBgUQgDgUAAgKQABgSAPgNIAwAgQAiAWALARQAbApAnAbQAMAJAxAbQAdAPAFAOQAIATgUAiQgGAKASAPQASAQAMgGQAegNAjgNIBAgUIBlgWQBUgWANgVIgUBaQgEgBgFAAQgGAAgEADQgGAEgCAJIgCAOQghgEgxANQg3ARgeAGQgeAGgLAJQgQAMgIAkQgagrgEgFg");
	this.shape_311.setTransform(242.0219,158.125);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#564337").s().p("AAsE/QgSgQAGgJQAUgjgIgTQgFgOgdgQQgwgbgMgIQgngcgbgoQgLgSgigVIgwggIgSgZQgNgQgRAGQgQAGghAVQgfASgRAFIgSABQgOAAgMAHIAuArQADAVgBAFQgdgBgVgWQgUgWgCgeQgBgPgDgGQgEgLgMgBIASgmQAMgLADgIQANglAFgjQAKgKADgHIABgMQAbgGALggQALgggPgXIAAgcIANgSIANgJQAJgGAFABQAZADAfgKQAUgGAigRQAjgSAfAWQATANAfAfQApAdBegRQAqgHANABQAMACAGAIQAZAEAJAEQASAIADAEQgBAAAAABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAUAZA6AaQAgAPA5AWQAPAHAeAeQAUAVASAGIAFAAIAAACIADABIgBgEIADAAQgrFNgDgIQgOAZhVAQQhFAOgvgFIgqAOQgjAMgfAOIgHABQgKAAgNgLg");
	this.shape_312.setTransform(233.225,134.7844);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#150C0A").s().p("AqpHXQg0ACgogcQgtARg+gVQgbgJgKgBQgSAAgMAOQgPARg4gVQhMgfgsgGQgOAIgugaQgfgSgcgWQgbgXAFgFQgNgWgBhXIABhTQACABAGhhQAHhgAEADQAFgEAGgLQAFgMAAgGQAkgBAzgaQAxgZAHgTQADgJgFgPQgEgOgJgKIARgeQAJAJANgKQAOgIgHgGIhHhIQggghgVglQgcgxAGghQAdALAuA2QA3BBAQANQAZATAGAMQAIATgJAjQArgaAGgCQAYgMAfgDIgeAjQgOATAAASQAdADAigWQAqgZALgDQAygMA4ghQAggTBAgqQAEgCAkABQAeAAAKgRIARgZQAIgRgIgSQAHgCAUgNQASgJANAPQALAMAVAiQASAeANAMQgIgDgIAEQgHAEgDAKQgFAQAHANQgMASgBAFIgUBqQAVADAUgGIApgKQgCAfARAeQASAdAXABQAHABAOgPQAQgQAFgBQAJgCAHADQAIAEAAAMQgBAUgIAUQgHATgMANQAaAYBRgIQA9gHBQgYQASgFAlgEQAngDASgEQBBgQAQhGQAigcAMgQIAKgNQAQALAFASQgYARgKAWQgLAcATATIgOAZQgLAUgBALQgBATATABQALAAAVgCQBtAVAiADQBTAIA8gRQBSgYAfgNQAqgTgRgPQALgPABgIQAIAGAMALIAUASQALgMAJgSQAKgSAEgEIAmgwQAfAqA7AOQAgAHBTACQAGAACsAeQCXAZAZgKIAJBZQACBmgkBBQgygRj0AHQkNAIgVgCQgjgDkKgrQiogbhjAJIhrgYQggAFgmgEIhFgKQgkgEhbgCQhQgCgugJQgNgCgSAJQgTAHgEAAIgqgKQgNgEgLASQgKAWgEAGQgZgFgNgpQgSg2gVgZQgQAHgLAVQgKATACAVQABAGAPAOQASASAIASIhSgMIAKCkQgCAKgYBIQgRA2gCApQBAAUASAHIBRhkIhACHQgTgRgxADgAwOFVQAUABAmABQASAAgDAOIgCAHQAAACAFgFQAKgIAZgPQAEgCAKgZIA3gtQAcABA1hoQA1hngHgfQhIgQhAhOQgkgrgHgHQgWgWgVAAQgdAAgiAMQgiAMgWATIinBNQgMAYARCpQAOCSgLgCIBcAsIAugfQAUAHAjABgAsij3QhGASg5ApQAeAXAzAvQAtAnAmAUQARAIAUgVQARgTAFgUQANAMAXgTQAlgfAZgJQgFgZgCgNQgDgYAIgNQAEgHARgUQAOgTgBgQQgBgLgXgDQgWgDgMAFQgLAFgJASIgNAbIgPADQgKAEgBALQgTgQgjAAQgYAAgfAIg");
	this.shape_313.setTransform(461.8302,162.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#564337").s().p("AhUAWQgXggAmgcIBWAHQAwAEAcALQgOAGgJACQgRADgbgCQAKACAKAHQAMAIgEAGQgNAUg4ACIgJABQgxAAgLgRg");
	this.shape_314.setTransform(427.7164,138.5059);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#332218").s().p("AgfCyQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBABAAQAGgFADgGQAKgVARikQASidACAAQAGABABApQABAtgCDeQAAATgcASQgSANgKAAQgEAAgDgCg");
	this.shape_315.setTransform(406.0679,100);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#564337").s().p("AgWgLQAGABAQgDQAOgDAJADIgXAdQgUgKgCgRg");
	this.shape_316.setTransform(530.675,145.3932);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#332218").s().p("AgdgFQADgKAHgEQAIgFAIAEIAPAJQANAHAHAKIg7ARQgHgNAFgPg");
	this.shape_317.setTransform(416.408,126.3234);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#332218").s().p("AAHAqQgXgRgMgUQgPgZAJgZIBGBIQAHAGgOAIQgHAFgGAAQgFAAgEgEg");
	this.shape_318.setTransform(349.8229,133.4382);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#332218").s().p("AgQAbQgMgLgIgGQACghAGgVIArAKQACASAUAKQgEAEgJASQgKARgLAMIgTgSg");
	this.shape_319.setTransform(526.9,147.65);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#332218").s().p("AgcAzQARghgFgYQgFgcgegVIA8ABQAZABASAFIg5BZIgIAPg");
	this.shape_320.setTransform(401.6,202.025);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#564337").s().p("AgxgeQAegOAcAUIApAeIguAfQgpgcgMgng");
	this.shape_321.setTransform(347.425,194.9159);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#332218").s().p("AgsAOIAMgaQAJgRALgFQAMgGAVAEQAYADAAALQACAQgPASQgQATgFAIQgfgIgYgRg");
	this.shape_322.setTransform(399.582,134.9319);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#564337").s().p("AhDgcQAcgRAnABQAbABApAJQgFAWgCAhQgBAIgLAQg");
	this.shape_323.setTransform(517.125,146.5721);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#564337").s().p("AgkBHIgXgTQAZgEATgRQALgKAWgeQAEgGgMgIQgLgIgJAFIgNAKQgLAGgKADQAMgPAJgiQABgLAKgEIAOgEQAYARAgAIQgHANADAXQABAOAFAXQgYAKgkAfQgPAMgKAAQgGAAgFgFg");
	this.shape_324.setTransform(394.85,143.9168);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#332218").s().p("AgfgXQAmgkAxABQAJAKAEAOQAFAPgDAKQgHARgxAZQgyAagkABQgBgvApgkg");
	this.shape_325.setTransform(343.2209,146.4997);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#564337").s().p("Ai6GxQhAgbgUgyQgth+AwldQA3lCgIgFQAGgXBNCaQBZCwAHAJICdAQQgPANAcAbQANAMA4AoQBtBNgQAoQh5ExjQAsQgeAGgcAAQgvAAgrgRg");
	this.shape_326.setTransform(360.9391,158.4488);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#564337").s().p("AAhAqQAGgKAKgHIALgIQADgDgJgIQgKgIgHACQgKAAgeAYQgcAUgNAAQg+gPg5AEQgTgUAMgaQAJgXAZgRQA4AMBQAHICIANQgDAFgHAMQgHAMgCAPQAXgDALAEQASAFAHAZg");
	this.shape_327.setTransform(493.5832,145.95);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#332218").s().p("AAYBgQgkgTgugnQgzgugdgYQA4gpBGgRQBMgUAhAcQgKAigMAPQALgDAKgGIAOgKQAJgFAMAIQAMAIgFAGQgXAfgLAJQgSARgaAEIAYATQgFAUgRASQgPAQgNAAQgFAAgFgDg");
	this.shape_328.setTransform(382.7964,146.5054);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#332218").s().p("AgmCwQgPgJAQgUQAKgIAEgOQADgPgEgEQgNgLgcAEIgKikIBRAMQgHgSgRgRQgQgPgBgGQgCgUALgVQAKgUAQgHQAVAYASA3QANApAYAFQgMARADAhIAHAwIhSB2QgKAOgKAAQgFAAgFgCg");
	this.shape_329.setTransform(401.6,176.9873);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#564337").s().p("AAVBCQgWgOgLgCQgOgCgrAMQgoALgQgGQgEgDAAgVQABgUgFgBIg/gOQAAgTAUgWIAcghQAlgMA+AQIBnAcQANADA8gFQAugEAYARQgMAQghAbIgYgOQgSgJgSAdQgXAogVAJIgEABQgIAAgPgIg");
	this.shape_330.setTransform(456.975,141.5681);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#332218").s().p("AgtBLQgigDhugVQgUACgLAAQgUgBACgTQABgLAKgTIAOgYQA5gEA+APQANAAAcgVQAfgXAKgCQAHgBAJAIQAJAJgDADIgKAIQgKAHgGAKICOAMQgHgZgSgGQgLgDgXADQACgQAHgMQAHgMADgGIAPADQAJABAHgEIB1BKQARANgqATQgeAOhSAXQgpAMgyAAQgYAAgbgDg");
	this.shape_331.setTransform(498.5646,151.4639);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#332218").s().p("AiECAQAMgMAHgTQAIgUABgVQAAgLgIgEQgHgDgJACQgFABgQAPQgOAPgHAAQgXgBgSgeQgRgeACgdIgpAKQgUAFgVgCIAUhrQAZANAdgKQAcgKAQgaQAGABAGAHQAGAHgEAGQgfAvATA2QAKAcAugDQAvgCAMghQADgKgKgOQgJgMgIgEQAXADAOgFQAIgDALgKQAKAGAPAFQAQAGAIgCIgbAgQgTAXgBATIA/ANQAEABAAAUQgBAVAFADQAQAHAogMQArgMAOADQALACAXANQATALAIgDQAUgKAYgnQARgdATAJIAXANQgQBHhBAQQgSAEgoADQglAEgSAFQhQAYg8AGQgVADgSAAQgxAAgTgTg");
	this.shape_332.setTransform(441.225,142.2191);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#897254").s().p("AgCgKQAHAIgEANQgDgNAAgIg");
	this.shape_333.setTransform(426.5667,110.475);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#897254").s().p("AgBgKQAHALgFAKg");
	this.shape_334.setTransform(429.1462,94.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#897254").s().p("AgQgBQAEghAYgOQAJAVgFAbQgEAQgMAhQgVgSAFggg");
	this.shape_335.setTransform(426.7619,103.425);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#332218").s().p("ACmA3Qg4gCiEgeQiGgdgwgVQgMgGA2gHIAjgEIgDADQAXgFgUACQATgSA1ANQBFARAtgQQAmAcAwAMQArAKATASQgIANgHAIQgLAOgOAAIgBAAg");
	this.shape_336.setTransform(379.6834,208.7243);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#564337").s().p("ABqBCQgYAKhCggQhIglgSAAQhTgCgggGQg7gOgfgqIAQgiQBNAdC2AZQCtAYBkgBQAVAygTAfQgPAZgoAAQgqAAhEgag");
	this.shape_337.setTransform(562.4207,148.0315);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#AA9A80").s().p("AC8A3Qg9AFgNgCIhogdQg9gQglANQgJACgRgGQgOgFgKgGQgXgRgogIIhIgKQADgGgFgHQgGgHgGgBQAHgNAFgEQAJgJALAFIAbAOQASAJAQACIDhAdQAeAEA2AEQAvAEAlAKQAMAEAhgEQAfgDANAGQgLAfgJAMIgKAMQgZgQgtADg");
	this.shape_338.setTransform(450.95,132.1074);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#564337").s().p("AiECsQABgpASg2QAXhHADgJQAcgEAMAKQAFAEgDAPQgFAOgJAIQgQAUAPAJQAQAJANgVIBSh1IgGgxQgEghANgRQAEgGAKgVQALgSANADIAqAKIhoEeQgSgFgZgBIg9gCQAfAWAEAbQAFAZgQAiQgSgHhAgUg");
	this.shape_339.setTransform(403.85,187.2786);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#897254").s().p("ADXA1IgsgKQgpgKgbAAQgogBgcAQQgIAEgJgBIgPgCIiIgMQhQgIg4gMQgFgRgQgKQAJgMALgfQAoASARACIDvAaQAWACBAgCQA0gCAkAJQAMAEAhgEQAhgEAOAEIgQAiIgPARQgIgCgPADIgRACIgGgBg");
	this.shape_340.setTransform(506.85,138.825);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#AA9A80").s().p("AFLBPQgQgQgVgeQgXgfgnAFQgsANgUADQgxAIhOg5QghgZgMgFQgVgIgKAVQgTgRgXABQgSAAgXAMQgbANgvgKQhFgOgIAAQgQgBgoANQgjAMgUgHQAChGCsACQBfACC2ATQBWADA8AbQBBAeA1BAQAJAKAYAWQATAUgJAWQgYgIgXgXg");
	this.shape_341.setTransform(389.3088,80.3207);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#332218").s().p("AhaCtQAAgSAOgSIAegjQgfACgZAMQgGACgrAaQAKgjgJgSQgFgNgZgTIhCg7QglgggfgMIAEgNQADgJgEgGQgFgKgLgBIAYhaQABAZBBA6QAhAdAgAXIAPANIAwAuQAbAcAUAZQAJALAWgFQAXgGAAgLQgCgoAOgOQAMgJAggBQA4gCAPgCQAvgHAqgYQASgKAogEQAygFAIgCQAHASgHARIgRAYQgKASgfgBQgjgBgEADQhAApghATQg4AigxAMQgLACgpAaQgfATgaAAIgGgBg");
	this.shape_342.setTransform(371.55,122.0633);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#564337").s().p("AgCAdQAAgFgMgEQgKgDgIgBQgGAAAlgeQAjgeAAAJQAAAIgOAFQgMAFACABQAHAGgIAdQgFATgEAAQgBAAgBgJg");
	this.shape_343.setTransform(406.7644,105.0614);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#564337").s().p("AAEARQgYgIgGgIQgIgFAQgLIALgIQgBAaAKAKQAEAEAPAEIAJADIgagHgAgHgXIAAAAIAAAAg");
	this.shape_344.setTransform(406.0082,104.6341);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#564337").s().p("AAIATQgMAIgZAJQgaAJgRABQgSACANgJQAbgSASgcQhXg6gGgDQAFgFBRAaIAZAIQAMgMAWABQASABAkAGQATABAhgHIgIB0QgCADgFAAQgVAAhSgzg");
	this.shape_345.setTransform(377.8125,91.395);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#564337").s().p("AA5AIQAFgMhDgGIhDgEQAVgHA5gBQA6AAAGAIQAJAJgPASQgIAKgCAAQgCAAAFgPg");
	this.shape_346.setTransform(397.578,90.1177);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#564337").s().p("AAEAVQgKgDgCgRQgeAaAaggQAWgfgMAgQAUAAAGAHQAEAGgIAHQgFAFgHAAIgEAAg");
	this.shape_347.setTransform(411.6274,89.3887);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#564337").s().p("AAOBHIg+glIAbhpIArAjQAoAngUAaIgMAaQgIARgGAAIgCgBg");
	this.shape_348.setTransform(353.4223,82.9516);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#564337").s().p("AETEaQABgFAMgSIA8gQQgHgMgNgHIgQgJQgNgMgSgeQgVghgLgNQgNgOgSAJQgUAMgHACQgIACgyAFQgoAEgSAKQgqAYguAHQgPACg3ACQghABgMAKQgPAOACAoQABALgXAGQgXAFgJgLQgUgZgbgcIgfgeQgsgSg4grQhEg1gBgdQgGAGBxk8IAAAEQAUAGAjgLQAogNAQAAQAaABBHAGQBBADAcgOQgBAAgBABQgBAAAAAAQgBgBAAAAQAAAAABAAQAEgDATACQALABAWAHQAJgFAMAEQANAFAhAZQBOA7AxgIQAUgDAsgNQAngGAXAgQAVAeAQAQQAXAWAYAIQAFACAFAKIAIANIADAWIgNAaQgYANgFAgQgEAiAVARIgEALQAAAIAEAOQgMAfgFApQgBAKAGAOIgCArQgLgFgJAIQgFAFgHANQgQAZgcAKQgNAFgMAAQgPAAgOgHg");
	this.shape_349.setTransform(384.8349,102.6815);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#AA9A80").s().p("AiBAZQgPgDgFgKIErglQghAlg/AJIhiAEIgYgIQgSgGgQAKQgIAFgKAAIgJgBg");
	this.shape_350.setTransform(473.15,182.42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_350},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225}]},10).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,591.3,400.9);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1C").ss(1.6).p("ABDjAQAFABACAFQACAEgBAFIhLDoIA0AAQAJAAADAIQADAGgFAHIhlByQgCAEgHAAQgEAAgEgDQgDgDgBgGQAAgFADgEIBShdIgqAAQgGAAgEgFQgEgFADgGIAahQIAAAAIhHigQgCgFACgEQABgEAFgDQAFgCAFACQAFACACAEIA6CGIAriEIACgFIAEgCIAFgCQABAAAEABg");
	this.shape.setTransform(106.1821,51.2167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020203").s().p("Ag4C/QgDgDgBgGQAAgFADgEIBShdIgqAAQgGAAgEgFQgEgFADgGIAahQIAAAAIhHigQgCgFACgEQABgEAFgDQAFgCAFACQAFACACAEIA6CGIAriEIACgFIAEgCIAFgCIAFABQAFABACAFQACAEgBAFIhLDoIA0AAQAJAAADAIQADAGgFAHIhlByQgCAEgHAAQgEAAgEgDg");
	this.shape_1.setTransform(106.1821,51.2167);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D1D1C").ss(1.6).p("ABJAUQABAFgBADIgqBrQgCAFgGADIgEAAQgDAAgEgCIhOg7QgEgDAAgGQgBgFAEgFIBkhfIgThHIhBBQQgDADgFABQgFABgEgEQgEgDgBgFQAAgFADgEIBQhiQAFgGAHABQAHACADAHgAAOBvIAihYIgIgcIhPBMg");
	this.shape_2.setTransform(90.0169,46.135);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#020203").s().p("AAMCNIhOg7QgEgDAAgGQgBgFAEgFIBkhfIgThHIhBBQQgDADgFABQgFABgEgEQgEgDgBgFQAAgFADgEIBQhiQAFgGAHABQAHACADAHIApCZQABAFgBADIgqBrQgCAFgGADIgEAAQgDAAgEgCgAgnBHIA1AoIAihYIgIgcg");
	this.shape_3.setTransform(90.0169,46.135);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D1D1C").ss(1.6).p("AgIitQAEgEAEAAQAFAAAEAEQAEADAAAGIAAFJQAAAGgEADQgEAEgFAAQgEAAgEgEQgEgEAAgFIAAlJQAAgGAEgDg");
	this.shape_4.setTransform(78.1,42.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020203").s().p("AgICuQgDgEAAgFIAAlJQAAgGADgDQADgEAFAAQAFAAAEAEQADADABAGIAAFJQgBAGgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_5.setTransform(78.1,42.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D1D1C").ss(1.6).p("ABJgtQADAEAAAFQAAAGgEADIh6ByIAABPQAAAFgEADQgDAEgGAAQgFAAgDgEQgEgEAAgEIAAlKQAAgJAIgDQAHgDAGAGgAgyA1IBghaIhghhg");
	this.shape_6.setTransform(66.525,49.6721);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020203").s().p("AhHCuQgEgEAAgEIAAlKQAAgJAIgDQAHgDAGAGIB/CAQADAEAAAFQAAAGgEADIh6ByIAABPQAAAFgEADQgDAEgGAAQgFAAgDgEgAgyA1IBghaIhghhg");
	this.shape_7.setTransform(66.525,49.6721);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D1D1C").ss(0.9).p("AquFKIA/BDIDngxIAvAdICBg+IBmA+IBQAkIDehDIBVAfIBegqICMAqICJgvIClAvIhDioIBDh8IgjhNIAjhqIhMhaIBMhBIgwhnIiIg4IiyAYIh5AeIiZgeIg1AjIiOgjIhgAjIhigjIiCAjIhOgcIiOAuIjag1IApBwIgpBsIApBzIgpBqIgbCKIAwB0IgVBGg");
	this.shape_8.setTransform(87.2352,46.3594);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A0A09F").s().p("AhxF5Ihmg+IiBA+IgvgdIjnAyIg+hEIhiAvIAUhFIgvh1IAbiKIAphqIgphyIAphsIgphxIDZA1ICPgtIBNAbICCgjIBiAjIBhgjICNAjIA1gjICaAeIB4geICygYICIA5IAwBmIhLBBIBLBaIgiBqIAiBOIhDB7IBDCoIilgvIiJAvIiMgpIhdApIhWgfIjeBDg");
	this.shape_9.setTransform(87.075,46.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D1D1C").p("ArHFgIBBBHIDvg0IAxAeICGhCIBpBCIBUAnIDlhIIBZAhIBhgsICRAsICOgxICrAxIhGizIBGiDIgkhTIAkhwIhOhgIBOhFIgyhuIiNg8Ii4AaIh9AgIifggIg3AlIiTglIhkAlIhlglIiHAlIhQgdIiUAwIjhg4IAqB4IgqBzIAqB5IgqByIgcCSIAxB8IgVBKg");
	this.shape_10.setTransform(87.1318,47.1097);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D0AE74").s().p("Ah1GRIhqhCIiFBCIgxgeIjvA1IhBhIIhlAxIAVhKIgxh8IAciSIAqhyIgqh5IAqhzIgqh3IDhA4ICTgxIBRAeICGglIBmAlIBkglICSAlIA3glICfAfIB9gfIC5gbICMA9IAyBtIhOBFIBOBgIgkBwIAkBTIhFCDIBFCzIirgxIiOAxIiRgsIhhAsIhYggIjmBHg");
	this.shape_11.setTransform(86.975,47.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D1D1C").p("ArdFzIBDBMID2g3IAzAgICKhGIBtBGIBWAoIDthLIBbAjIBkgvICVAvICTg1ICxA1IhIi9IBIiLIgmhYIAmh2IhRhlIBRhJIg0h0IiRhAIi+AcIiBAhIilghIg4AnIiYgnIhmAnIhpgnIiLAnIhTgfIiYAzIjpg7IAsB+IgsB6IAsCAIgsB4IgdCbIAzCCIgWBPg");
	this.shape_12.setTransform(87.1799,47.5101);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BE9440").s().p("Ah5GoIhthGIiJBGIgzggIj3A3IhDhMIhoA1IAWhOIgziDIAdiaIArh5IgriAIArh5Igrh+IDoA6ICYgyIBTAfICLgnIBpAnIBngnICXAnIA5gnICkAgICBggIC+gcICRBAIA0BzIhRBJIBRBlIglB2IAlBYIhICLIBIC9Iiwg1IiTA1IiVgvIhlAvIhbgjIjtBMg");
	this.shape_13.setTransform(87.025,47.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1D1D1C").ss(1.6).p("ABDjAQAFABACAFQACAEgBAFIhLDoIA0AAQAJAAADAIQADAGgFAHIhlByQgCAEgHAAQgEAAgEgDQgDgDgBgGQAAgFADgEIBShdIgqAAQgGAAgEgFQgEgFADgGIAahQIAAAAIhHigQgCgFACgEQABgEAFgDQAFgCAFACQAFACACAEIA6CGIAriEIACgFIAEgCIAFgCQABAAAEABg");
	this.shape_14.setTransform(106.2821,50.6667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020203").s().p("Ag4C/QgDgDgBgGQAAgFADgEIBShdIgqAAQgGAAgEgFQgEgFADgGIAahQIAAAAIhHigQgCgFACgEQABgEAFgDQAFgCAFACQAFACACAEIA6CGIAriEIACgFIAEgCIAFgCIAFABQAFABACAFQACAEgBAFIhLDoIA0AAQAJAAADAIQADAGgFAHIhlByQgCAEgHAAQgEAAgEgDg");
	this.shape_15.setTransform(106.2821,50.6667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1D1D1C").ss(1.6).p("ABJAUQABAFgBADIgqBrQgCAFgGADIgEAAQgDAAgEgCIhOg7QgEgDAAgGQgBgFAEgFIBkhfIgThHIhBBQQgDADgFABQgFABgEgEQgEgDgBgFQAAgFADgEIBQhiQAFgGAHABQAHACADAHgAAOBvIAihYIgIgcIhPBMg");
	this.shape_16.setTransform(90.1169,45.585);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020203").s().p("AAMCNIhOg7QgEgDAAgGQgBgFAEgFIBkhfIgThHIhBBQQgDADgFABQgFABgEgEQgEgDgBgFQAAgFADgEIBQhiQAFgGAHABQAHACADAHIApCZQABAFgBADIgqBrQgCAFgGADIgEAAQgDAAgEgCgAgnBHIA1AoIAihYIgIgcg");
	this.shape_17.setTransform(90.1169,45.585);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1D1D1C").ss(1.6).p("AgIitQAEgEAEAAQAFAAAEAEQAEADAAAGIAAFJQAAAGgEADQgEAEgFAAQgEAAgEgEQgEgEAAgFIAAlJQAAgGAEgDg");
	this.shape_18.setTransform(78.2,42.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020203").s().p("AgICuQgDgEAAgFIAAlJQAAgGADgDQADgEAFAAQAFAAAEAEQADADABAGIAAFJQgBAGgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_19.setTransform(78.2,42.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1D1D1C").ss(1.6).p("AgyA1IBghaIhghhgABJgtQADAEAAAFQAAAGgEADIh6ByIAABPQAAAFgEADQgDAEgGAAQgFAAgDgEQgEgEAAgEIAAlKQAAgJAIgDQAHgDAGAGg");
	this.shape_20.setTransform(66.625,49.1221);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#020203").s().p("AhHCuQgEgEAAgEIAAlKQAAgJAIgDQAHgDAGAGIB/CAQADAEAAAFQAAAGgEADIh6ByIAABPQAAAFgEADQgDAEgGAAQgFAAgDgEgAgyA1IBghaIhghhg");
	this.shape_21.setTransform(66.625,49.1221);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1D1D1C").ss(0.9).p("AquFKIA/BDIDngxIAvAdICBg+IBmA+IBQAkIDehDIBVAfIBegqICMAqICJgvIClAvIhDioIBDh8IgjhNIAjhqIhMhaIBMhBIgwhnIiIg4IiyAYIh5AeIiZgeIg1AjIiOgjIhgAjIhigjIiCAjIhOgcIiOAuIjag1IApBwIgpBsIApBzIgpBqIgbCKIAwB0IgVBGg");
	this.shape_22.setTransform(87.3352,45.8094);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A0A09F").s().p("AhxF5Ihmg+IiBA+IgvgdIjnAyIg+hEIhiAvIAUhFIgvh1IAbiKIAphqIgphyIAphsIgphxIDZA1ICPgtIBNAbICCgjIBiAjIBhgjICNAjIA1gjICaAeIB4geICygYICIA5IAwBmIhLBBIBLBaIgiBqIAiBOIhDB7IBDCoIilgvIiJAvIiMgpIhdApIhWgfIjeBDg");
	this.shape_23.setTransform(87.175,45.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1D1D1C").p("ArHFgIBBBHIDvg0IAxAeICGhCIBpBCIBUAnIDlhIIBZAhIBhgsICRAsICOgxICrAxIhGizIBGiDIgkhTIAkhwIhOhgIBOhFIgyhuIiNg8Ii4AaIh9AgIifggIg3AlIiTglIhkAlIhlglIiHAlIhQgdIiUAwIjhg4IAqB4IgqBzIAqB5IgqByIgcCSIAxB8IgVBKg");
	this.shape_24.setTransform(87.2318,46.5597);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D0AE74").s().p("Ah1GRIhqhCIiFBCIgxgeIjvA1IhBhIIhlAxIAVhKIgxh8IAciSIAqhyIgqh5IAqhzIgqh3IDhA4ICTgxIBRAeICGglIBmAlIBkglICSAlIA3glICfAfIB9gfIC5gbICMA9IAyBtIhOBFIBOBgIgkBwIAkBTIhFCDIBFCzIirgxIiOAxIiRgsIhhAsIhYggIjmBHg");
	this.shape_25.setTransform(87.075,46.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1D1D1C").p("ArdFzIBDBMID2g3IAzAgICKhGIBtBGIBWAoIDthLIBbAjIBkgvICVAvICTg1ICxA1IhIi9IBIiLIgmhYIAmh2IhRhlIBRhJIg0h0IiRhAIi+AcIiBAhIilghIg4AnIiYgnIhmAnIhpgnIiLAnIhTgfIiYAzIjpg7IAsB+IgsB6IAsCAIgsB4IgdCbIAzCCIgWBPg");
	this.shape_26.setTransform(87.2799,46.9601);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BE9440").s().p("Ah5GoIhthGIiJBGIgzggIj3A3IhDhMIhoA1IAWhOIgziDIAdiaIArh5IgriAIArh5Igrh+IDoA6ICYgyIBTAfICLgnIBpAnIBngnICXAnIA5gnICkAgICBggIC+gcICRBAIA0BzIhRBJIBRBlIglB2IAlBYIhICLIBIC9Iiwg1IiTA1IiVgvIhlAvIhbgjIjtBMg");
	this.shape_27.setTransform(87.125,46.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1.6).p("ABDjAQAFABACAFQACAEgBAFIhLDoIA1AAQAIAAADAIQADAGgFAHIhkByQgEAEgGAAQgEAAgFgDQgDgDAAgGQAAgFADgEIBShdIgqAAQgFAAgFgFQgDgGACgFIAahQIAAAAIhHigQgCgEACgFQABgFAFgCQAFgCAFACQAFACACAEIA6CGIAriEIADgEQABgDACAAIAFgCQACAAADABg");
	this.shape_28.setTransform(106.35,50.6667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag4C/QgEgDAAgGQgBgFAEgEIBShdIgqAAQgGAAgEgFQgDgGACgFIAahQIAAAAIhHigQgCgEACgFQACgFAEgCQAEgCAGACQAFACABAEIA7CGIAriEIACgEQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAFgCIAFABQAFABACAFQACAEgCAFIhKDoIA1AAQAIAAADAIQADAGgFAHIhkByQgEAEgGAAQgEAAgEgDg");
	this.shape_29.setTransform(106.35,50.6667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1.6).p("ABJAUQACAEgCAEIgqBrQgCAGgGACIgEAAQgDAAgEgCIhNg7QgFgEAAgFQAAgGAEgEIBjhfIgThHIhBBQQgDAEgFAAQgFABgEgEQgEgDgBgFQAAgFAEgEIBPhiQAFgGAHABQAHACADAHgAAOBvIAihYIgIgcIhOBMg");
	this.shape_30.setTransform(90.1821,45.585);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAMCNIhNg7QgFgEAAgFQAAgGAEgEIBjhfIgThHIhBBQQgDAEgFAAQgFABgEgEQgEgDgBgFQAAgFAEgEIBPhiQAFgGAHABQAHACADAHIApCZQACAEgCAEIgqBrQgCAGgGACIgEAAQgDAAgEgCgAgmBHIA0AoIAihYIgIgcg");
	this.shape_31.setTransform(90.1821,45.585);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1.6).p("AgIitQADgEAFAAQAGAAADAEQADADAAAGIAAFJQAAAGgDADQgDAEgGAAQgFAAgDgEQgDgDAAgGIAAlJQAAgGADgDg");
	this.shape_32.setTransform(78.275,42.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgICuQgDgDAAgGIAAlJQAAgGADgDQADgEAFAAQAGAAADAEQADADAAAGIAAFJQAAAGgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_33.setTransform(78.275,42.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1.6).p("AgyA1IBghaIhghhgABJgtQADAFAAAEQAAAFgEAEIh6ByIAABPQAAAEgEAEQgDAEgGAAQgFAAgEgEQgDgDAAgFIAAlKQAAgJAHgDQAIgDAGAGg");
	this.shape_34.setTransform(66.725,49.1221);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhICuQgDgDAAgFIAAlKQAAgJAHgDQAIgDAGAGIB/CAQADAFAAAEQAAAFgEAEIh6ByIAABPQAAAEgEAEQgDAEgGAAQgFAAgEgEgAgyA1IBghaIhghhg");
	this.shape_35.setTransform(66.725,49.1221);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#1D1D1C").ss(0.9).p("AquFKIA+BDIDngxIAwAdICAg+IBmA+IBRAkIDdhDIBWAfIBegqICLAqICKgvIClAvIhEioIBEh8IgjhNIAjhqIhMhaIBMhBIgxhnIiHg4IiyAYIh5AeIiageIg1AjIiNgjIhhAjIhigjIiCAjIhNgcIiPAuIjZg1IApBwIgpBsIApBzIgpBqIgbCKIAwB0IgVBGg");
	this.shape_36.setTransform(87.4115,45.8093);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A0A09F").s().p("AhxF5Ihmg+IiAA+IgwgdIjnAyIg+hEIhiAvIAUhFIgvh1IAbiKIAohqIgohyIAohsIgohxIDZA1ICPgtIBNAbICCgjIBiAjIBhgjICNAjIA1gjICZAeIB6geICygYICHA5IAxBmIhMBBIBMBaIgkBqIAkBOIhEB7IBECoIilgvIiKAvIiLgpIhfApIhVgfIjeBDg");
	this.shape_37.setTransform(87.25,45.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1D1D1C").p("ArGFgIBABHIDvg0IAyAeICFhCIBqBCIBTAnIDlhIIBZAhIBhgsICRAsICOgxICrAxIhGizIBGiDIgkhTIAkhwIhOhgIBOhFIgyhuIiNg8Ii4AaIh9AgIifggIg3AlIiTglIhjAlIhmglIiHAlIhQgdIiUAwIjhg4IArB4IgrBzIArB5IgrByIgcCSIAyB8IgWBKg");
	this.shape_38.setTransform(87.2817,46.5598);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D0AE74").s().p("Ah1GRIhqhCIiFBCIgxgeIjvA1IhBhIIhlAxIAVhKIgxh8IAciSIAqhyIgqh5IAqhzIgqh3IDhA4ICTgxIBRAeICGglIBmAlIBkglICTAlIA2glICfAfIB9gfIC5gbICMA9IAyBtIhOBFIBOBgIgkBwIAkBTIhFCDIBFCzIirgxIiOAxIiQgsIhiAsIhYggIjmBHg");
	this.shape_39.setTransform(87.125,46.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#1D1D1C").p("ArdFzIBCBMID3g3IAzAgICJhGIBtBGIBWAoIDthLIBbAjIBlgvICVAvICTg1ICwA1IhIi9IBIiLIglhYIAlh2IhQhlIBQhJIgzh0IiShAIi+AcIiBAhIikghIg4AnIiYgnIhnAnIhpgnIiLAnIhTgfIiYAzIjog7IAsB+IgsB6IAsCAIgsB4IgdCbIAzCCIgWBPg");
	this.shape_40.setTransform(87.3549,46.9601);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BE9440").s().p("Ah5GoIhthGIiKBGIgyggIj3A3IhChMIhpA1IAWhOIgziDIAdiaIArh5IgriAIArh5Igrh+IDoA6ICYgyIBTAfICLgnIBpAnIBngnICYAnIA4gnICkAgICBggIC+gcICSBAIAzBzIhQBJIBQBlIglB2IAlBYIhICLIBIC9Iiwg1IiTA1IiWgvIhkAvIhbgjIjtBMg");
	this.shape_41.setTransform(87.2,46.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.9).p("ABDjAQAFABACAFQACAEgBAFIhLDoIA0AAQAJAAADAIQADAGgFAHIhlByQgCAEgHAAQgEAAgEgDQgDgDgBgGQAAgFADgEIBShdIgqAAQgGAAgEgFQgEgFADgGIAahQIAAAAIhHigQgCgFACgEQABgEAFgDQAFgCAFACQAFACACAEIA6CGIAriEIACgFIAEgCIAFgCQABAAAEABg");
	this.shape_42.setTransform(106.2821,50.6667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A0A09F").s().p("Ag4C/QgDgDgBgGQAAgFADgEIBShdIgqAAQgGAAgEgFQgEgFADgGIAahQIAAAAIhHigQgCgFACgEQABgEAFgDQAFgCAFACQAFACACAEIA6CGIAriEIACgFIAEgCIAFgCIAFABQAFABACAFQACAEgBAFIhLDoIA0AAQAJAAADAIQADAGgFAHIhlByQgCAEgHAAQgEAAgEgDg");
	this.shape_43.setTransform(106.2821,50.6667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.9).p("ABJAUQABAFgBADIgqBrQgCAFgGADIgEAAQgDAAgEgCIhOg7QgEgDAAgGQgBgFAEgFIBkhfIgThHIhBBQQgDADgFABQgFABgEgEQgEgDgBgFQAAgFADgEIBQhiQAFgGAHABQAHACADAHgAAOBvIAihYIgIgcIhPBMg");
	this.shape_44.setTransform(90.1169,45.585);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A0A09F").s().p("AAMCNIhOg7QgEgDAAgGQgBgFAEgFIBkhfIgThHIhBBQQgDADgFABQgFABgEgEQgEgDgBgFQAAgFADgEIBQhiQAFgGAHABQAHACADAHIApCZQABAFgBADIgqBrQgCAFgGADIgEAAQgDAAgEgCgAgnBHIA1AoIAihYIgIgcg");
	this.shape_45.setTransform(90.1169,45.585);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.9).p("AgIitQAEgEAEAAQAFAAAEAEQAEADAAAGIAAFJQAAAGgEADQgEAEgFAAQgEAAgEgEQgEgEAAgFIAAlJQAAgGAEgDg");
	this.shape_46.setTransform(78.2,42.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A0A09F").s().p("AgICuQgDgEAAgFIAAlJQAAgGADgDQADgEAFAAQAFAAAEAEQADADABAGIAAFJQgBAGgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_47.setTransform(78.2,42.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.9).p("ABJgtQADAEAAAFQAAAGgEADIh6ByIAABPQAAAFgEADQgDAEgGAAQgFAAgDgEQgEgEAAgEIAAlKQAAgJAIgDQAHgDAGAGgAgyA1IBghaIhghhg");
	this.shape_48.setTransform(66.625,49.1221);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A0A09F").s().p("AhHCuQgEgEAAgEIAAlKQAAgJAIgDQAHgDAGAGIB/CAQADAEAAAFQAAAGgEADIh6ByIAABPQAAAFgEADQgDAEgGAAQgFAAgDgEgAgyA1IBghaIhghhg");
	this.shape_49.setTransform(66.625,49.1221);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BE9440").s().p("Ah5GoIhthGIiJBGIgzggIj3A3IhDhMIhoA1IAWhOIgziDIAdiaIAsh5IgsiAIAsh5Igsh+IDoA6ICYgyIBTAfICLgnIBpAnIBngnICXAnIA5gnICkAgICBggIC+gcICRBAIA0BzIhRBJIBRBlIglB2IAlBYIhICLIBIC9Iiwg1IiTA1IiVgvIhlAvIhbgjIjtBMg");
	this.shape_50.setTransform(87.125,46.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:87.1799,y:47.5101}},{t:this.shape_11,p:{x:86.975,y:47.1}},{t:this.shape_10,p:{x:87.1318,y:47.1097}},{t:this.shape_9,p:{x:87.075,y:46.35}},{t:this.shape_8,p:{x:87.2352,y:46.3594}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_50},{t:this.shape_12,p:{x:87.2799,y:46.9601}},{t:this.shape_11,p:{x:87.075,y:46.55}},{t:this.shape_10,p:{x:87.2318,y:46.5597}},{t:this.shape_9,p:{x:87.175,y:45.8}},{t:this.shape_8,p:{x:87.3352,y:45.8094}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.5,175.4,95.5);


(lib.btconcassage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1C").ss(1.6).p("ABtAlQAIgCAIAGQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAIgEgBQgOgDgDgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAJAHAAAKQABALgHAGIi2CuIAjCBIB1iRQAGgGAKgBgAhWgoIANAyICRiJIhhhJg");
	this.shape.setTransform(389.4546,89.4693);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020203").s().p("AgnEDQgOgDgDgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAJAHAAAKQABALgHAGIi2CuIAjCBIB1iRQAGgGAKgBQAIgCAIAGQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAgAhWgoIANAyICRiJIhhhJg");
	this.shape_1.setTransform(389.4546,89.4693);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D1D1C").ss(1.6).p("ACpBxQAGAOgKALIi3DOQgGAIgKAAQgJAAgGgGQgIgHAAgJQAAgIAFgIICWipIhNAAQgMAAgHgLQgGgKAFgLIAag4IhTARQgLACgIgGQghgZgYgiQgVgggJghQgShBAWhGQAWhCAxguQA1gxA5gBQAOAAAGAMQBkC/AMASQAFAHAAAHQAAAHgDAEIhkDNIBbAAQAPAAAGANgAg3AcIBrgVIA7h5Ihki/QgmAIgkAkQgjAkgQAyQgGASgCAVQgCASABAeQACAdARAfQASAfAfAZg");
	this.shape_2.setTransform(355.6625,98.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#020203").s().p("AgxFaQgIgHAAgJQAAgIAFgIICWipIhNAAQgMAAgHgLQgGgKAFgLIAag4IhTARQgLACgIgGQghgZgYgiQgVgggJghQgShBAWhGQAWhCAxguQA1gxA5gBQAOAAAGAMQBkC/AMASQAFAHAAAHQAAAHgDAEIhkDNIBbAAQAPAAAGANQAGAOgKALIi3DOQgGAIgKAAQgJAAgGgGgAg/kFQgjAkgQAyQgGASgCAVQgCASABAeQACAdARAfQASAfAfAZIBrgVIA7h5Ihki/QgmAIgkAkg");
	this.shape_3.setTransform(355.6625,98.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D1D1C").ss(1.6).p("ACFAlQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFIiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANgAAZDJIA+igIgOgyIiQCKg");
	this.shape_4.setTransform(321.5312,89.4828);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020203").s().p("AAWD/IiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANIBMEXQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_5.setTransform(321.5312,89.4828);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D1D1C").ss(1.6).p("ACDA3QANANgKAQIhoClQgGAJgLABIgCAAQgKAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+IizivQgOgMALgQIBOh2QAGgJALgBQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgGAHgKAAQgJAAgHgHIhNhMIg0BQg");
	this.shape_6.setTransform(291.1674,89.3941);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020203").s().p("AALEDQgKAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+IizivQgOgMALgQIBOh2QAGgJALgBQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgGAHgKAAQgJAAgHgHIhNhMIg0BQICzCuQANANgKAQIhoClQgGAJgLABg");
	this.shape_7.setTransform(291.1674,89.3941);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D1D1C").ss(1.6).p("ACEA3QANANgLAQIhoClQgHAJgJABIgDAAQgJAAgHgIIh+iEQgHgIAAgIQAAgJAHgHQAIgGAJAAQAJAAAGAHIBqBwIBPh+IizivQgNgMAKgQIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAHAHAAAJQAAAIgHAIQgHAHgJAAQgJAAgHgHIhNhMIg0BQg");
	this.shape_8.setTransform(260.8346,89.3941);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#020203").s().p("AALEDQgJAAgHgIIh+iEQgHgIAAgIQAAgJAHgHQAIgGAJAAQAJAAAGAHIBqBwIBPh+IizivQgNgMAKgQIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAHAHAAAJQAAAIgHAIQgHAHgJAAQgJAAgHgHIhNhMIg0BQIC0CuQANANgLAQIhoClQgHAJgJABg");
	this.shape_9.setTransform(260.8346,89.3941);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D1D1C").ss(1.6).p("ACFAlQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFIiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANgAAZDJIA+igIgOgyIiQCKg");
	this.shape_10.setTransform(230.7312,89.4828);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020203").s().p("AAWD/IiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANIBMEXQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_11.setTransform(230.7312,89.4828);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D1D1C").ss(1.6).p("ABtAlQAIgCAIAGQAHAFABAKQABAKgGAHIiRCyQgHAJgLAAIgEgBQgOgDgDgNIhMkWQgBgIACgGIBLjDQAEgLALgDQALgDAJAHICNBqQAHAGACAJQABAJgFAIQgGAHgJABQgJACgIgGIh2hYIg+CgIA/DlIB1iRQAGgGAKgBg");
	this.shape_12.setTransform(200.8546,89.4693);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020203").s().p("AgnEDQgOgDgDgNIhMkWQgBgIACgGIBLjDQAEgLALgDQALgDAJAHICNBqQAHAGACAJQABAJgFAIQgGAHgJABQgJACgIgGIh2hYIg+CgIA/DlIB1iRQAGgGAKgBQAIgCAIAGQAHAFABAKQABAKgGAHIiRCyQgHAJgLAAg");
	this.shape_13.setTransform(200.8546,89.4693);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1D1D1C").ss(1.6).p("ABxj9QALAGAAANIAAHVQAAALgGAGQgHAGgJAAQgKAAgGgGQgHgHAAgKIAAmyIidBJIAAFpQAAALgHAGQgGAGgKAAQgKAAgGgGQgGgGAAgLIAAnXQAAgJAGgGQAGgHAKAAQAKAAAGAHQAHAGAAAJIAAA8ICqhOQALgFAKAGg");
	this.shape_14.setTransform(169,89.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020203").s().p("ABWD8QgHgGAAgKIAAmyIieBJIAAFpQABAKgHAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAnXQAAgKAHgGQAGgGAKgBQAKABAGAGQAHAGgBAKIAAA7ICrhOQALgFALAGQALAHgBANIAAHVQABAKgIAGQgGAHgJAAQgKAAgGgHg");
	this.shape_15.setTransform(169,89.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1D1D1C").ss(1.6).p("ACTBgQg9A8hWAAQhVAAg9g8Qg8g9AAhVQAAhWA8g9QA9g8BVAAQBWAAA9A8QA8A9AABWQAABVg8A9gAgWjTQg7AJgoAuQgoAtAAA9QAAA8AoAuQAoAuA7AIgAB6A4QAoguAAg8QAAg9gogtQgogug8gJIAAFBQA8gIAogugAB/DVQAKAAAGAGQAHAGAAAKQAAAKgHAGQgGAHgKAAIj+AAQgFAAgGgDQgHgFgBgEQgDgFAAgGQAAgKAGgGQAGgGAKAAg");
	this.shape_16.setTransform(129.625,89.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020203").s().p("Ah/ECQgFgBgGgDQgHgEgBgEQgDgFAAgGQAAgKAGgGQAGgHAKABID+AAQAKgBAGAHQAHAGAAAKQAAAKgHAGQgGAHgKAAgAiSBgQg8g8AAhWQAAhWA8g9QA9g7BVgBQBWABA9A7QA8A9AABWQAABWg8A8Qg9A8hWAAQhVAAg9g8gAAWBuQA8gIAoguQAoguAAg8QAAg9gogtQgogtg8gKgAh5icQgoAtAAA9QAAA8AoAuQAoAuA7AIIAAlBQg7AKgoAtg");
	this.shape_17.setTransform(129.625,89.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1D1D1C").ss(1.6).p("ABtAlQAJgCAHAGQAIAGAAAJQABAKgFAHIiSCyQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgDAJAHICNBqQAIAGABAJQABAKgFAHQgFAHgKABQgJACgHgGIh2hYIg+CgIA/DlIB1iRQAGgGAJgBg");
	this.shape_18.setTransform(91.9927,89.4693);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020203").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgDAJAHICNBqQAIAGABAJQABAKgFAHQgFAHgKABQgJACgHgGIh2hYIg+CgIA/DlIB1iRQAGgGAJgBQAJgCAHAGQAIAGAAAJQABAKgFAHIiSCyQgGAJgMAAg");
	this.shape_19.setTransform(91.9927,89.4693);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1D1D1C").ss(0.9).p("A+WJXICxB6IKOhZICGA0IFshxIEhBxIDjBBIFkhBIESg4IDyA4IEJhLIGMBLIGEhVIHUBVIi/kxIC/jgIhjiNIBjjAIjWijIDWh2IiJi6ImBhnIn3AsIlWA2Imzg2IiWA/ImSg/IkRA/IkWg/IlwA/IjbgyImTBTIpohgIB0DMIh0DEIB0DPIh0DCIhMD6ICGDSIg6B/g");
	this.shape_20.setTransform(246.1397,82.6786);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A0A09F").s().p("AlBKsIkhhxIltBxIiGg0IqNBZIiyh6IkVBVIA7h/IiHjSIBMj6IB0jCIh0jPIB0jEIh0jMIJoBgIGThTIDcAyIFwg/IEVA/IERg/IGTA/ICVg/IGzA2IFWg2IH4gsIGABnICJC6IjWB2IDWCjIhiDAIBiCNIi/DgIC/ExInThVImFBVImLhLIkKBLIjyg4IkRA4IllBBg");
	this.shape_21.setTransform(245.9,82.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1D1D1C").p("A/bJ+IC3CCIKlhfICLA3IF6h4IErB4IDrBGIFxhGIEbg8ID6A8IEUhQIGZBQIGThaIHkBaIjFlEIDFjvIhmiWIBmjMIjdiuIDdh+IiOjGImOhuIoKAwIliA5InCg5IibBDImihDIkaBDIkfhDIl+BDIjjg1ImiBYIp9hmIB3DZIh3DQIB3DcIh3DQIhQEJICMDgIg8CHg");
	this.shape_22.setTransform(245.757,84.0288);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D0AE74").s().p("AlNLYIkrh4Il6B4IiLg3IqlBfIi3iCIkfBaIA8iHIiLjgIBPkJIB4jQIh4jcIB4jQIh4jZIJ+BmIGhhYIDkA1IF9hDIEgBDIEahDIGhBDICbhDIHDA5IFig5IIKgwIGOBuICNDGIjdB+IDdCuIhlDMIBlCWIjFDvIDFFEInkhaImSBaImahQIkTBQIj7g8IkbA8IlxBGg");
	this.shape_23.setTransform(245.525,84.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1D1D1C").p("EggbAKiIC9CJIK6hkICQA6IGGh/IE0B/IDzBJIF9hJIEkhAIECBAIEchVIGnBVIGfhfIH0BfIjMlXIDMj8IhqieIBqjYIjli3IDliFIiTjSImahzIobAyIltA8InRg8IigBHImuhHIkkBHIkohHImKBHIjrg5ImvBdIqRhrIB7DlIh7DcIB7DoIh7DbIhSEYICQDtIg+CPg");
	this.shape_24.setTransform(245.928,84.7789);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BE9440").s().p("AlYMBIk0h/ImGB/IiPg6Iq7BkIi9iJIkoBfIA+iPIiQjtIBSkYIB8jbIh8joIB8jcIh8jlIKRBrIGvhdIDrA5IGKhHIEpBHIEjhHIGuBHIChhHIHQA8IFtg8IIbgyIGbBzICSDSIjkCFIDkC3IhqDYIBqCeIjMD8IDMFXIn0hfImfBfImnhVIkbBVIkDhAIkkBAIl9BJg");
	this.shape_25.setTransform(245.7,84.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1.6).p("ABtAlQAIgCAIAGQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAIgEgBQgOgDgDgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAJAHAAAKQABALgHAGIi2CuIAjCBIB1iRQAHgHAJAAgAhWgoIANAyICRiJIhhhJg");
	this.shape_26.setTransform(389.4546,89.4693);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnEDQgOgDgDgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAJAHAAAKQABALgHAGIi2CuIAjCBIB1iRQAHgHAJAAQAIgCAIAGQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAgAhWgoIANAyICRiJIhhhJg");
	this.shape_27.setTransform(389.4546,89.4693);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1.6).p("ACpBxQAGAOgKALIi3DOQgGAIgKAAQgJAAgGgGQgIgHAAgJQAAgIAFgIICWipIhNAAQgMAAgHgLQgGgKAFgLIAag4IhTARQgLACgIgGQghgZgYgiQgVgggJghQgShBAWhGQAWhCAxguQA1gxA5gBQAOAAAGAMQBkC/AMASQAFAHAAAHQAAAHgDAEIhkDNIBbAAQAPAAAGANgAg3AcIBrgVIA7h5Ihki/QgmAIgkAkQgjAkgQAyQgGASgCAVQgCASABAeQACAdARAfQASAfAfAZg");
	this.shape_28.setTransform(355.6625,98.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgxFaQgIgHAAgJQAAgIAFgIICWipIhNAAQgMAAgHgLQgGgKAFgLIAag4IhTARQgLACgIgGQghgZgYgiQgVgggJghQgShBAWhGQAWhCAxguQA1gxA5gBQAOAAAGAMQBkC/AMASQAFAHAAAHQAAAHgDAEIhkDNIBbAAQAPAAAGANQAGAOgKALIi3DOQgGAIgKAAQgJAAgGgGgAg/kFQgjAkgQAyQgGASgCAVQgCASABAeQACAdARAfQASAfAfAZIBrgVIA7h5Ihki/QgmAIgkAkg");
	this.shape_29.setTransform(355.6625,98.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1.6).p("AAZDJIA+igIgOgyIiQCKgACFAlQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFIiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANg");
	this.shape_30.setTransform(321.5312,89.4828);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAWD/IiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANIBMEXQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_31.setTransform(321.5312,89.4828);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1.6).p("ACDA3QANANgKAQIhoClQgGAJgLABIgCAAQgKAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+IizivQgOgMALgQIBOh2QAGgJALgBQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgGAHgKAAQgJAAgHgHIhNhMIg0BQg");
	this.shape_32.setTransform(291.1674,89.3941);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AALEDQgKAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+IizivQgOgMALgQIBOh2QAGgJALgBQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgGAHgKAAQgJAAgHgHIhNhMIg0BQICzCuQANANgKAQIhoClQgGAJgLABg");
	this.shape_33.setTransform(291.1674,89.3941);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1.6).p("ACEA3QANANgLAQIhoClQgHAJgJABIgDAAQgJAAgHgIIh+iEQgHgIAAgIQAAgJAHgHQAIgGAJAAQAJAAAGAHIBqBwIBPh+IizivQgNgMAKgQIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAHAHAAAJQAAAIgHAIQgHAHgJAAQgJAAgHgHIhNhMIg0BQg");
	this.shape_34.setTransform(260.8346,89.3941);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AALEDQgJAAgHgIIh+iEQgHgIAAgIQAAgJAHgHQAIgGAJAAQAJAAAGAHIBqBwIBPh+IizivQgNgMAKgQIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAHAHAAAJQAAAIgHAIQgHAHgJAAQgJAAgHgHIhNhMIg0BQIC0CuQANANgLAQIhoClQgHAJgJABg");
	this.shape_35.setTransform(260.8346,89.3941);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1.6).p("ACFAlQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFIiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANgAAZDJIA+igIgOgyIiQCKg");
	this.shape_36.setTransform(230.7312,89.4828);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAWD/IiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANIBMEXQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_37.setTransform(230.7312,89.4828);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1.6).p("ABtAlQAIgCAIAGQAHAFABAKQABAKgGAHIiRCyQgHAJgLAAIgEgBQgOgDgDgNIhMkWQgBgIACgGIBLjDQAEgLALgDQALgDAJAHICNBqQAHAGACAJQABAJgFAIQgGAHgJABQgJACgIgGIh2hYIg9CgIA+DlIB1iRQAGgGAKgBg");
	this.shape_38.setTransform(200.8546,89.4693);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgnEDQgOgDgDgNIhMkWQgBgIACgGIBLjDQAEgLALgDQALgDAJAHICNBqQAHAGACAJQABAJgFAIQgGAHgJABQgJACgIgGIh2hYIg9CgIA+DlIB1iRQAGgGAKgBQAIgCAIAGQAHAFABAKQABAKgGAHIiRCyQgHAJgLAAg");
	this.shape_39.setTransform(200.8546,89.4693);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1.6).p("ABxj9QALAGAAANIAAHVQAAALgGAGQgHAGgJAAQgKAAgGgGQgHgHAAgKIAAmyIidBJIAAFpQAAALgHAGQgGAGgKAAQgKAAgGgGQgGgGAAgLIAAnXQAAgJAGgGQAGgHAKAAQAKAAAGAHQAHAGAAAJIAAA8ICqhOQALgFAKAGg");
	this.shape_40.setTransform(169,89.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ABWD8QgHgGAAgKIAAmyIieBJIAAFpQABAKgHAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAnXQAAgKAHgGQAGgGAKgBQAKABAGAGQAHAGgBAKIAAA7ICrhOQALgFALAGQALAHgBANIAAHVQABAKgIAGQgGAHgJAAQgKAAgGgHg");
	this.shape_41.setTransform(169,89.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1.6).p("AgWjTQg7AJgoAuQgoAtAAA9QAAA8AoAuQAoAuA7AIgACTBgQg9A8hWAAQhUAAg+g8Qg8g9AAhVQAAhWA8g9QA+g8BUAAQBWAAA9A8QA8A9AABWQAABVg8A9gAB6A4QAoguAAg8QAAg9gogtQgogug8gJIAAFBQA8gIAogugAB/DVQAKAAAGAGQAHAGAAAKQAAAKgHAGQgGAHgKAAIj+AAQgFAAgGgDQgHgFgBgEQgDgFAAgGQAAgKAGgGQAHgGAJAAg");
	this.shape_42.setTransform(129.625,89.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ah/ECQgFgBgGgDQgHgEgBgEQgDgFAAgGQAAgKAGgGQAHgHAJABID+AAQAKgBAGAHQAHAGAAAKQAAAKgHAGQgGAHgKAAgAiSBgQg8g8AAhWQAAhWA8g9QA+g7BUgBQBWABA9A7QA8A9AABWQAABWg8A8Qg9A8hWAAQhUAAg+g8gAAWBuQA8gIAoguQAoguAAg8QAAg9gogtQgogtg8gKgAh5icQgoAtAAA9QAAA8AoAuQAoAuA7AIIAAlBQg7AKgoAtg");
	this.shape_43.setTransform(129.625,89.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1.6).p("ABtAlQAJgCAHAGQAIAGAAAJQABAKgFAHIiSCyQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgDAJAHICNBqQAIAGABAJQABAKgFAHQgFAHgKABQgJACgHgGIh2hYIg+CgIA/DlIB1iRQAGgGAJgBg");
	this.shape_44.setTransform(91.9927,89.4693);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgDAJAHICNBqQAIAGABAJQABAKgFAHQgFAHgKABQgJACgHgGIh2hYIg+CgIA/DlIB1iRQAGgGAJgBQAJgCAHAGQAIAGAAAJQABAKgFAHIiSCyQgGAJgMAAg");
	this.shape_45.setTransform(91.9927,89.4693);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#1D1D1C").ss(0.9).p("A+WJXICxB6IKOhZICGA0IFthxIEgBxIDjBBIFlhBIERg4IDyA4IEJhLIGMBLIGEhVIHUBVIi/kxIC/jgIhjiNIBjjAIjWijIDWh2IiJi6ImBhnIn3AsIlWA2Imzg2IiVA/ImTg/IkRA/IkVg/IlxA/IjbgyImTBTIpohgIB0DMIh0DEIB0DPIh0DCIhMD6ICGDSIg6B/g");
	this.shape_46.setTransform(246.1397,82.6786);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#1D1D1C").p("A/bJ+IC3CCIKlhfICLA3IF6h4IErB4IDrBGIFxhGIEbg8ID7A8IEThQIGZBQIGThaIHkBaIjFlEIDFjvIhmiWIBmjMIjdiuIDdh+IiOjGImOhuIoKAwIliA5InCg5IibBDImihDIkaBDIkfhDIl+BDIjjg1ImiBYIp9hmIB3DZIh3DQIB3DcIh3DQIhQEJICMDgIg8CHg");
	this.shape_47.setTransform(245.757,84.0288);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.9).p("ABtAlQAIgCAIAGQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAIgEgBQgOgDgDgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAJAHAAAKQABALgHAGIi2CuIAjCBIB1iRQAHgHAJAAgAhWgoIANAyICRiJIhhhJg");
	this.shape_48.setTransform(389.4546,89.4693);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A0A09F").s().p("AgnEDQgOgDgDgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAJAHAAAKQABALgHAGIi2CuIAjCBIB1iRQAHgHAJAAQAIgCAIAGQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAgAhWgoIANAyICRiJIhhhJg");
	this.shape_49.setTransform(389.4546,89.4693);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(0.9).p("ACpBxQAGAOgKALIi3DOQgGAIgKAAQgJAAgGgGQgIgHAAgJQAAgIAFgIICWipIhNAAQgMAAgHgLQgGgKAFgLIAag4IhTARQgLACgIgGQghgZgYgiQgVgggJghQgShBAWhGQAWhCAxguQA1gxA5gBQAOAAAGAMQBkC/AMASQAFAHAAAHQAAAHgDAEIhkDNIBbAAQAPAAAGANgAg3AcIBrgVIA7h5Ihki/QgmAIgkAkQgjAkgQAyQgGASgCAVQgCASABAeQACAdARAfQASAfAfAZg");
	this.shape_50.setTransform(355.6625,98.725);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A0A09F").s().p("AgxFaQgIgHAAgJQAAgIAFgIICWipIhNAAQgMAAgHgLQgGgKAFgLIAag4IhTARQgLACgIgGQghgZgYgiQgVgggJghQgShBAWhGQAWhCAxguQA1gxA5gBQAOAAAGAMQBkC/AMASQAFAHAAAHQAAAHgDAEIhkDNIBbAAQAPAAAGANQAGAOgKALIi3DOQgGAIgKAAQgJAAgGgGgAg/kFQgjAkgQAyQgGASgCAVQgCASABAeQACAdARAfQASAfAfAZIBrgVIA7h5Ihki/QgmAIgkAkg");
	this.shape_51.setTransform(355.6625,98.725);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(0.9).p("AAZDJIA+igIgOgyIiQCKgACFAlQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFIiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANg");
	this.shape_52.setTransform(321.5312,89.4828);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A0A09F").s().p("AAWD/IiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANIBMEXQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_53.setTransform(321.5312,89.4828);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(0.9).p("ACDA3QANANgKAQIhoClQgGAJgLABIgCAAQgKAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+IizivQgOgMALgQIBOh2QAGgJALgBQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgGAHgKAAQgJAAgHgHIhNhMIg0BQg");
	this.shape_54.setTransform(291.1674,89.3941);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A0A09F").s().p("AALEDQgKAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+IizivQgOgMALgQIBOh2QAGgJALgBQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgGAHgKAAQgJAAgHgHIhNhMIg0BQICzCuQANANgKAQIhoClQgGAJgLABg");
	this.shape_55.setTransform(291.1674,89.3941);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(0.9).p("ACEA3QANANgLAQIhoClQgHAJgJABIgDAAQgJAAgHgIIh+iEQgHgIAAgIQAAgJAHgHQAIgGAJAAQAJAAAGAHIBqBwIBPh+IizivQgNgMAKgQIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAHAHAAAJQAAAIgHAIQgHAHgJAAQgJAAgHgHIhNhMIg0BQg");
	this.shape_56.setTransform(260.8346,89.3941);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A0A09F").s().p("AALEDQgJAAgHgIIh+iEQgHgIAAgIQAAgJAHgHQAIgGAJAAQAJAAAGAHIBqBwIBPh+IizivQgNgMAKgQIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAHAHAAAJQAAAIgHAIQgHAHgJAAQgJAAgHgHIhNhMIg0BQIC0CuQANANgLAQIhoClQgHAJgJABg");
	this.shape_57.setTransform(260.8346,89.3941);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(0.9).p("ACFAlQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFIiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANgAAZDJIA+igIgOgyIiQCKg");
	this.shape_58.setTransform(230.7312,89.4828);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A0A09F").s().p("AAWD/IiOhqQgHgGgBgLQgBgLAIgHIC1itIgjiAIh2CPQgFAIgKABQgJABgHgGQgHgGgBgKQgCgJAHgHICRiyQAJgLANADQANADAEANIBMEXQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_59.setTransform(230.7312,89.4828);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(0.9).p("ABtAlQAIgCAIAGQAHAFABAKQABAKgGAHIiRCyQgHAJgLAAIgEgBQgOgDgDgNIhMkWQgBgIACgGIBLjDQAEgLALgDQALgDAJAHICNBqQAHAGACAJQABAJgFAIQgGAHgJABQgJACgIgGIh2hYIg+CgIA/DlIB1iRQAGgGAKgBg");
	this.shape_60.setTransform(200.8546,89.4693);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A0A09F").s().p("AgnEDQgOgDgDgNIhMkWQgBgIACgGIBLjDQAEgLALgDQALgDAJAHICNBqQAHAGACAJQABAJgFAIQgGAHgJABQgJACgIgGIh2hYIg+CgIA/DlIB1iRQAGgGAKgBQAIgCAIAGQAHAFABAKQABAKgGAHIiRCyQgHAJgLAAg");
	this.shape_61.setTransform(200.8546,89.4693);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(0.9).p("ABxj9QALAGAAANIAAHVQAAALgGAGQgHAGgJAAQgKAAgGgGQgHgHAAgKIAAmyIidBJIAAFpQAAALgHAGQgGAGgKAAQgKAAgGgGQgGgGAAgLIAAnXQAAgJAGgGQAGgHAKAAQAKAAAGAHQAHAGAAAJIAAA8ICqhOQALgFAKAGg");
	this.shape_62.setTransform(169,89.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A0A09F").s().p("ABWD8QgHgGAAgKIAAmyIieBJIAAFpQABAKgHAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAnXQAAgKAHgGQAGgGAKgBQAKABAGAGQAHAGgBAKIAAA7ICrhOQALgFALAGQALAHgBANIAAHVQABAKgIAGQgGAHgJAAQgKAAgGgHg");
	this.shape_63.setTransform(169,89.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(0.9).p("AgWjTQg7AJgoAuQgoAtAAA9QAAA8AoAuQAoAuA7AIgACTBgQg9A8hWAAQhVAAg9g8Qg8g9AAhVQAAhWA8g9QA9g8BVAAQBWAAA9A8QA8A9AABWQAABVg8A9gAB6A4QAoguAAg8QAAg9gogtQgogug8gJIAAFBQA8gIAogugAB/DVQAKAAAGAGQAHAGAAAKQAAAKgHAGQgGAHgKAAIj+AAQgGAAgFgDQgHgFgBgEQgDgFAAgGQAAgKAGgGQAGgGAKAAg");
	this.shape_64.setTransform(129.625,89.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A0A09F").s().p("Ah/ECQgGgBgFgDQgHgEgBgEQgDgFAAgGQAAgKAGgGQAGgHAKABID+AAQAKgBAGAHQAHAGAAAKQAAAKgHAGQgGAHgKAAgAiSBgQg8g8AAhWQAAhWA8g9QA9g7BVgBQBWABA9A7QA8A9AABWQAABWg8A8Qg9A8hWAAQhVAAg9g8gAAWBuQA8gIAoguQAoguAAg8QAAg9gogtQgogtg8gKgAh5icQgoAtAAA9QAAA8AoAuQAoAuA7AIIAAlBQg7AKgoAtg");
	this.shape_65.setTransform(129.625,89.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(0.9).p("ABtAlQAJgCAHAGQAIAGAAAJQABAKgFAHIiSCyQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgDAJAHICNBqQAIAGABAJQABAKgFAHQgFAHgKABQgJACgHgGIh2hYIg+CgIA/DlIB1iRQAGgGAJgBg");
	this.shape_66.setTransform(91.9927,89.4693);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A0A09F").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgDAJAHICNBqQAIAGABAJQABAKgFAHQgFAHgKABQgJACgHgGIh2hYIg+CgIA/DlIB1iRQAGgGAJgBQAJgCAHAGQAIAGAAAJQABAKgFAHIiSCyQgGAJgMAAg");
	this.shape_67.setTransform(91.9927,89.4693);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#1D1D1C").ss(0.9).p("A+WJXICxB6IKOhZICGA0IFthxIEgBxIDjBBIFkhBIESg4IDyA4IEJhLIGMBLIGEhVIHUBVIi/kxIC/jgIhjiNIBjjAIjWijIDWh2IiJi6ImBhnIn3AsIlWA2Imzg2IiVA/ImTg/IkRA/IkVg/IlxA/IjbgyImTBTIpohgIB0DMIh0DEIB0DPIh0DCIhMD6ICGDSIg6B/g");
	this.shape_68.setTransform(246.1397,82.6786);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_47},{t:this.shape_21},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_47},{t:this.shape_21},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.4,492.4,170.4);


(lib.bt_x = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020203").s().p("AB5E5Ih1kcIh7EVQgHANgOAAIgKgCQgIgDgEgJQgDgJAEgJICOk7IhtkJQgEgJAEgJQAEgIAIgEQAIgEAJAEQAJAEADAIIBdDjIBljkQAEgIAIgEQAJgDAJAEQAJAEADAIQADAJgDAJIh4EKICFFCQAEAJgEAJQgDAIgJAEIgJABQgOAAgGgNg");
	this.shape.setTransform(97.6308,80.6308);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D1D1C").ss(0.9).p("AsAJYIBGB5IEDhZIA1A0ICQhxIByBxIBaBBICNhBIBsg4IBgA4IBphLICdBLICZhUIC5BUIhLkxIBLjgIgniNIAnjAIhUijIBUh2Ig2i6IiYhnIjHAsIiIA2Iisg2Ig7A/Iifg/IhsA/Ihug/IiSA/IhXgyIifBTIj0hgIAuDMIguDEIAuDPIguDCIgeD6IA1DSIgXB/g");
	this.shape_1.setTransform(97.8881,82.6961);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0A09F").s().p("Ah/KsIhyhxIiQBxIg1g0IkDBZIhGh5IhuBUIAXh/Ig1jSIAej6IAujCIgujPIAujEIgujMID0BgICfhTIBXAyICSg/IBuA/IBsg/ICfA/IA7g/ICsA2ICIg2IDHgsICYBnIA2C6IhUB2IBUCjIgnDAIAnCNIhLDgIBLExIi5hUIiZBUIidhLIhpBLIhgg4IhsA4IiNBBg");
	this.shape_2.setTransform(97.775,82.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D1D1C").p("AscJ+IBICCIEMhfIA3A3ICWh4IB2B4IBeBGICRhGIBwg8IBjA8IBthQICjBQICfhaIDABaIhPlEIBPjvIgpiWIApjMIhYiuIBYh9Ig4jHIiehuIjPAwIiMA5Iiyg5Ig+BDIikhDIhwBDIhyhDIiXBDIhag1IilBYIj9hmIAwDZIgwDQIAwDcIgwDQIgfEJIA3DgIgYCHg");
	this.shape_3.setTransform(97.7618,84.0466);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D0AE74").s().p("AiDLYIh2h4IiWB4Ig3g3IkNBfIhIiCIhyBaIAYiHIg3jgIAfkJIAwjQIgwjcIAwjQIgwjZID9BmIClhYIBaA1ICYhDIBxBDIBwhDICkBDIA+hDICzA5ICLg5IDPgwICeBuIA4DHIhYB9IBYCuIgoDMIAoCWIhPDvIBPFEIjAhaIifBaIiihQIhtBQIhjg8IhxA8IiRBGg");
	this.shape_4.setTransform(97.65,84.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1D1D1C").p("As1KiIBLCJIEUhkIA5A6ICah/IB6B/IBhBJICWhJIBzhAIBnBAIBwhVICnBVIClhfIDGBfIhRlXIBRj8IgqieIAqjYIhbi3IBbiFIg6jSIijhzIjVAyIiRA8Ii4g8Ig/BHIiqhHIhzBHIh2hHIicBHIhdg5IiqBeIkEhsIAwDlIgwDcIAwDoIgwDbIghEZIA5DsIgYCPg");
	this.shape_5.setTransform(97.8345,84.798);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BE9440").s().p("AiIMBIh6h/IiaB/Ig5g6IkUBkIhLiJIh1BfIAYiPIg5jsIAhkZIAwjbIgwjoIAwjcIgwjlIEEBsICqheIBdA5ICchHIB2BHIBzhHICqBHIA/hHIC4A8ICRg8IDVgyICjBzIA6DSIhbCFIBbC3IgqDYIAqCeIhRD8IBRFXIjGhfIilBfIinhVIhwBVIhnhAIhzBAIiWBJg");
	this.shape_6.setTransform(97.725,84.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AB5E5Ih1kcIh7EVQgHANgOAAIgKgCQgIgDgEgJQgDgJAEgJICOk7IhtkJQgEgJAEgJQAEgIAIgEQAIgEAJAEQAJAEADAIIBdDjIBljkQAEgIAIgEQAJgDAJAEQAJAEADAIQADAJgDAJIh4EKICFFCQAEAJgEAJQgDAIgJAEIgJABQgOAAgGgNg");
	this.shape_7.setTransform(97.4808,80.6308);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D1D1C").ss(0.9).p("AsBJYIBGB5IEDhZIA1A0ICRhxIByBxIBaBBICMhBIBtg4IBfA4IBqhLICcBLICahUIC5BUIhLkxIBLjgIgniNIAnjAIhVijIBVh2Ig2i6IiYhnIjIAsIiHA2Iisg2Ig8A/Iieg/IhsA/Ihug/IiSA/IhXgyIigBTIjzhgIAtDMIgtDEIAtDPIgtDCIgfD6IA2DSIgXB/g");
	this.shape_8.setTransform(97.763,82.6963);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A0A09F").s().p("Ah/KsIhyhxIiQBxIg1g0IkDBZIhHh5IhtBUIAXh/Ig1jSIAej6IAujCIgujPIAujEIgujMID0BgICfhTIBXAyICSg/IBuA/IBsg/ICfA/IA7g/ICsA2ICHg2IDIgsICYBnIA2C6IhUB2IBUCjIgnDAIAnCNIhLDgIBLExIi5hUIiZBUIidhLIhpBLIhgg4IhtA4IiMBBg");
	this.shape_9.setTransform(97.65,82.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D1D1C").p("AscJ+IBICCIENhfIA3A3ICVh4IB3B4IBdBGICRhGIBwg8IBkA8IBshQICjBQICfhaIDABaIhOlEIBOjvIgpiWIApjMIhYiuIBYh9Ig4jHIiehuIjPAwIiMA5Iiyg5Ig+BDIikhDIhwBDIhyhDIiXBDIhag1IilBYIj9hmIAwDZIgwDQIAwDcIgwDQIgfEJIA3DgIgYCHg");
	this.shape_10.setTransform(97.6111,84.0468);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D0AE74").s().p("AiDLYIh2h4IiWB4Ig3g3IkNBfIhIiCIhxBaIAXiHIg3jgIAgkJIAvjQIgvjcIAvjQIgvjZID8BmIClhYIBaA1ICYhDIByBDIBvhDICkBDIA+hDICyA5ICNg5IDPgwICdBuIA4DHIhXB9IBXCuIgoDMIAoCWIhODvIBOFEIjAhaIifBaIijhQIhsBQIhkg8IhvA8IiSBGg");
	this.shape_11.setTransform(97.5,84.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D1D1C").p("As1KiIBLCJIEUhkIA5A6ICah/IB7B/IBgBJICWhJIBzhAIBnBAIBwhVICoBVICkhfIDGBfIhRlXIBRj8IgqieIAqjYIhbi3IBbiFIg6jSIijhzIjVAyIiRA8Ii4g8Ig/BHIiqhHIhzBHIh2hHIicBHIhcg5IirBeIkEhsIAwDlIgwDcIAwDoIgwDbIghEZIA5DsIgYCPg");
	this.shape_12.setTransform(97.6846,84.7982);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BE9440").s().p("AiHMBIh7h/IiaB/Ig5g6IkUBkIhLiJIh1BfIAYiPIg5jsIAhkZIAwjbIgwjoIAwjcIgwjlIEEBsICrheIBcA5ICchHIB2BHIBzhHICqBHIA/hHIC4A8ICRg8IDVgyICjBzIA6DSIhbCFIBbC3IgqDYIAqCeIhRD8IBRFXIjGhfIikBfIiohVIhwBVIhnhAIhzBAIiWBJg");
	this.shape_13.setTransform(97.575,84.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A0A09F").s().p("AB5E5Ih1kcIh7EVQgHANgOAAIgKgCQgIgDgEgJQgDgJAEgJICOk7IhtkJQgEgJAEgJQAEgIAIgEQAIgEAJAEQAJAEADAIIBdDjIBljkQAEgIAIgEQAJgDAJAEQAJAEADAIQADAJgDAJIh4EKICFFCQAEAJgEAJQgDAIgJAEIgJABQgOAAgGgNg");
	this.shape_14.setTransform(97.5808,80.6308);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1D1D1C").ss(0.9).p("AsAJYIBGB5IEChZIA1A0ICRhxIByBxIBaBBICNhBIBsg4IBgA4IBphLICcBLICahUIC5BUIhLkxIBLjgIgniNIAnjAIhUijIBUh2Ig2i6IiYhnIjIAsIiHA2Iisg2Ig7A/Iifg/IhsA/Ihug/IiSA/IhXgyIigBTIjzhgIAuDMIguDEIAuDPIguDCIgeD6IA1DSIgXB/g");
	this.shape_15.setTransform(97.8382,82.6961);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A0A09F").s().p("Ah/KsIhyhxIiRBxIg1g0IkCBZIhGh5IhuBUIAXh/Ig1jSIAej6IAujCIgujPIAujEIgujMIDzBgICghTIBXAyICSg/IBuA/IBsg/ICfA/IA7g/ICsA2ICHg2IDIgsICYBnIA2C6IhUB2IBUCjIgnDAIAnCNIhLDgIBLExIi5hUIiaBUIichLIhpBLIhgg4IhsA4IiNBBg");
	this.shape_16.setTransform(97.725,82.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1D1D1C").p("AscJ+IBJCCIEMhfIA3A3ICVh4IB3B4IBdBGICRhGIBwg8IBkA8IBthQICiBQICfhaIDABaIhOlEIBOjvIgoiWIAojMIhYiuIBYh9Ig4jHIiehuIjPAwIiMA5Iiyg5Ig9BDIilhDIhwBDIhyhDIiXBDIhag1IilBYIj8hmIAvDZIgvDQIAvDcIgvDQIggEJIA3DgIgXCHg");
	this.shape_17.setTransform(97.6861,84.0468);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D0AE74").s().p("AiDLYIh3h4IiVB4Ig3g3IkMBfIhJiCIhxBaIAXiHIg3jgIAgkJIAvjQIgvjcIAvjQIgvjZID8BmIClhYIBaA1ICXhDIByBDIBwhDIClBDIA9hDICyA5ICMg5IDPgwICeBuIA4DHIhYB9IBYCuIgoDMIAoCWIhODvIBOFEIjAhaIifBaIiihQIhtBQIhkg8IhwA8IiRBGg");
	this.shape_18.setTransform(97.575,84.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1D1D1C").p("As1KiIBLCJIEUhkIA5A6ICah/IB7B/IBgBJICWhJIB0hAIBmBAIBwhVICoBVICkhfIDGBfIhRlXIBRj8IgqieIAqjYIhai3IBaiFIg6jSIijhzIjVAyIiQA8Ii4g8IhABHIiqhHIhzBHIh2hHIibBHIhdg5IirBeIkEhsIAxDlIgxDcIAxDoIgxDbIghEZIA5DsIgYCPg");
	this.shape_19.setTransform(97.7346,84.7982);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BE9440").s().p("AiHMBIh7h/IiaB/Ig5g6IkUBkIhLiJIh1BfIAYiPIg5jsIAhkZIAxjbIgxjoIAxjcIgxjlIEEBsICrheIBdA5ICbhHIB2BHIBzhHICqBHIBAhHIC4A8ICQg8IDVgyICjBzIA6DSIhaCFIBaC3IgqDYIAqCeIhRD8IBRFXIjGhfIikBfIiohVIhwBVIhmhAIh0BAIiWBJg");
	this.shape_20.setTransform(97.625,84.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.4,196.3,170.4);


(lib.bt_empattage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1C").ss(1.6).p("ABtAlQAJgCAHAGQAHAFABAKQABALgGAGIiRCyQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgEAJAIICNBqQAJAHAAAKQACAJgIAIIi2CuIAjCBIB1iRQAHgHAJAAgAhWgoIAOAyICQiJIhghJg");
	this.shape.setTransform(334.6421,86.7083);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020203").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgEAJAIICNBqQAJAHAAAKQACAJgIAIIi2CuIAjCBIB1iRQAHgHAJAAQAJgCAHAGQAHAFABAKQABALgGAGIiRCyQgGAJgMAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_1.setTransform(334.6421,86.7083);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D1D1C").ss(1.6).p("Ag4AcIBsgVIA7h5Ihki/QgnAIgjAkQgkAlgQAxQgFARgDAVQgCAUACAdQACAcARAgQARAfAfAZgACpBxQAGANgKAMIi3DOQgGAIgKAAQgKAAgFgGQgHgGgBgKQAAgJAFgHICVipIhMAAQgNAAgGgLQgGgKAEgLIAbg4IhUARQgKACgIgGQghgZgYgiQgUgegLgjQgRhCAWhFQAWhCAxguQA1gxA5gBQAOAAAGAMQBmDCAJAPQAGAGAAAIQAAAIgDADIhkDNIBbAAQAPAAAGANg");
	this.shape_2.setTransform(300.8547,95.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#020203").s().p("AgxFaQgHgGgBgKQAAgJAFgHICVipIhMAAQgNAAgGgLQgGgKAEgLIAbg4IhUARQgKACgIgGQghgZgYgiQgUgegLgjQgRhCAWhFQAWhCAxguQA1gxA5gBQAOAAAGAMIBvDRQAGAGAAAIQAAAIgDADIhkDNIBbAAQAPAAAGANQAGANgKAMIi3DOQgGAIgKAAQgKAAgFgGgAg/kFQgkAlgQAxQgFARgDAVQgCAUACAdQACAcARAgQARAfAfAZIBsgVIA7h5Ihki/QgnAIgjAkg");
	this.shape_3.setTransform(300.8547,95.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D1D1C").ss(1.6).p("ACFAlQABAIgCAFIhMDDQgDAKgMAEIgGABQgHAAgGgFIiOhqQgIgHgBgKQAAgLAHgHIC2itIgjiAIh2CPQgGAIgJABQgJABgHgGQgIgGgBgKQAAgIAGgIICRiyQAJgLANADQANADAEANgAAZDJIA+igIgOgyIiQCKg");
	this.shape_4.setTransform(266.7012,86.7328);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020203").s().p("AAWD/IiOhqQgIgHgBgKQAAgLAHgHIC2itIgjiAIh2CPQgGAIgJABQgJABgHgGQgIgGgBgKQAAgIAGgIICRiyQAJgLANADQANADAEANIBMEXQABAIgCAFIhMDDQgDAKgMAEIgGABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_5.setTransform(266.7012,86.7328);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D1D1C").ss(1.6).p("ACSDkQACAHgBAFQgBAHgEADQgEAFgGACIi0BBQgDABgFAAQgHAAgGgFQgKgHAAgLIAAmcIgsAAQgKAAgHgHQgGgHAAgKQAAgJAGgGQAHgGAKAAIAsAAIAAiPQAAgJAHgHQAHgGAJAAQAGAAAFADQAGADADAGQACAFAAAFIAACPIAwAAQAKAAAGAGQAGAGAAAJQAAAKgGAHQgGAHgKAAIgwAAIAAF8ICXg1QAHgCAFABQAGABAFAEQAEAEACAFg");
	this.shape_6.setTransform(236.8281,80.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020203").s().p("AhFE+QgKgHAAgMIAAmbIgsAAQgKgBgHgGQgGgHAAgKQAAgJAGgGQAHgHAKABIAsAAIAAiOQAAgKAHgGQAHgGAJgBQAGAAAFAEQAGADADAFQACAFAAAGIAACOIAwAAQAKgBAGAHQAGAGAAAJQAAAKgGAHQgGAGgKABIgwAAIAAF8ICXg1QAHgCAFABQAGABAFAEQAEADACAHQACAHgBAFQgBAFgEAFQgEAEgGACIi0BBIgIABQgHgBgGgEg");
	this.shape_7.setTransform(236.8281,80.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D1D1C").ss(1.6).p("ACSDkQACAGgBAGQgBAHgEADQgEAFgGACIi0BBQgDABgFAAQgHAAgGgFQgKgGAAgMIAAmcIgsAAQgKAAgHgHQgGgHAAgKQAAgJAGgGQAHgGAKAAIAsAAIAAiPQAAgJAHgHQAHgGAJAAQAGAAAFADQAGADADAGQACAFAAAFIAACPIAwAAQAJAAAHAGQAGAGAAAJQAAAKgGAHQgHAHgJAAIgwAAIAAF8ICXg1QAHgCAFABQAGABAEAEQAFAEACAFg");
	this.shape_8.setTransform(206.2167,80.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#020203").s().p("AhFE+QgKgGAAgNIAAmbIgsAAQgKgBgHgGQgGgHAAgKQAAgJAGgGQAHgHAKABIAsAAIAAiOQAAgKAHgGQAHgGAJgBQAGAAAFAEQAGADADAFQACAFAAAGIAACOIAwAAQAJgBAHAHQAGAGAAAJQAAAKgGAHQgHAGgJABIgwAAIAAF8ICXg1QAHgCAFABQAGABAEAEQAFADACAHQACAFgBAHQgBAFgEAFQgEAEgGACIi0BBIgIABQgHgBgGgEg");
	this.shape_9.setTransform(206.2167,80.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D1D1C").ss(1.6).p("ACFAlQABAIgCAFIhMDDQgDAKgMAEIgGABQgHAAgGgFIiOhqQgIgHgBgKQAAgLAHgHIC2itIgjiAIh2CPQgGAIgJABQgJABgHgGQgIgGgBgKQAAgIAGgIICRiyQAJgLANADQANADAEANgAAZDJIA+igIgOgyIiQCKg");
	this.shape_10.setTransform(175.3512,86.7328);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020203").s().p("AAWD/IiOhqQgIgHgBgKQAAgLAHgHIC2itIgjiAIh2CPQgGAIgJABQgJABgHgGQgIgGgBgKQAAgIAGgIICRiyQAJgLANADQANADAEANIBMEXQABAIgCAFIhMDDQgDAKgMAEIgGABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_11.setTransform(175.3512,86.7328);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D1D1C").ss(1.6).p("AhcBhICvikIivixgACEhSQAGAIAAAIQAAAKgHAHIjfDQIAACOQAAAJgHAGQgGAHgKAAQgKAAgGgHQgGgGAAgJIAApXQAAgQANgGQAOgFALAKg");
	this.shape_12.setTransform(146.075,93.1417);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020203").s().p("AiDE8QgGgGAAgJIAApXQAAgQANgGQAOgFALAKIDnDpQAGAIAAAIQAAAKgHAHIjfDQIAACOQAAAJgHAGQgGAHgKAAQgKAAgGgHgAhcBhICvikIivixg");
	this.shape_13.setTransform(146.075,93.1417);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1D1D1C").ss(1.6).p("ACWj/QANAGAAAOIAAHXQAAAGgDAFQgDAFgFAEQgFADgHAAQgJAAgGgHQgHgGAAgKIAAmoIhTBBIAjAcQAHAFACAKQABAKgGAHQgGAHgJABQgLABgFgGIihiAIAAGoQAAAKgGAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAnXQAAgOANgGQANgGALAIIB+BmIB+hmQAMgIAMAGg");
	this.shape_14.setTransform(107.3,86.6259);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020203").s().p("AB9D8QgGgGAAgKIAAmoIhTBBIAjAcQAGAFACAKQABAKgGAHQgGAHgJABQgLABgFgGIigiAIAAGoQAAAKgHAGQgGAHgKAAQgKAAgGgHQgHgGABgKIAAnXQAAgOAMgGQANgGALAIIB+BmIB/hmQALgIAMAGQANAGABAOIAAHXQAAAGgDAFQgEAFgFAEQgFADgHAAQgJAAgGgHg");
	this.shape_15.setTransform(107.3,86.6259);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1D1D1C").ss(1.6).p("ABtAlQAJgCAHAGQAHAFABAKQABAKgFAHIiSCyQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgEAJAIICNBqQAJAHAAAKQACAJgIAIIi2CuIAjCBIB1iRQAHgGAJgBgAhWgoIAOAyICQiJIhghJg");
	this.shape_16.setTransform(71.7427,86.7083);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020203").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgEAJAIICNBqQAJAHAAAKQACAJgIAIIi2CuIAjCBIB1iRQAHgGAJgBQAJgCAHAGQAHAFABAKQABAKgFAHIiSCyQgGAJgMAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_17.setTransform(71.7427,86.7083);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1D1D1C").ss(0.9).p("A5BJXICSB6IIbhZIBvAzIEshwIDuBwIC7BCIEmhCIDhg4IDIA4IDahKIFHBKIFAhUIGBBUIidkwICdjhIhRiMIBRjAIiwijICwh2Ihxi7Ik9hnImfAtIkaA2Ilmg2Ih7A/IlMg/IjhA/Ijlg/IkvA/Ii1gyIlNBTIn7hgIBfDLIhfDEIBfDPIhfDDIg/D5IBvDTIgwB+g");
	this.shape_18.setTransform(203.2758,82.6553);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A0A09F").s().p("AkJKsIjuhxIksBxIhvg0IobBZIiSh6IjkBVIAwh+IhvjUIA/j4IBfjDIhfjPIBfjFIhfjKIH7BfIFNhTIC1AyIEvg+IDlA+IDhg+IFMA+IB7g+IFmA1IEag1IGfgtIE9BnIBxC6IiwB2ICwCjIhRDAIBRCNIidDhICdEwImBhVIlABVIlHhLIjaBLIjIg4IjhA4IkmBBg");
	this.shape_19.setTransform(203.075,82.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1D1D1C").p("A56J+ICXCCIIuhfIBzA3IE3h4ID3B4IDCBGIEwhGIDpg8IDPA8IDihQIFSBQIFMhaIGPBaIijlEICjjvIhUiWIBUjMIi2iuIC2h9Ih1jHIlIhuImuAwIkkA5Ilzg5IiABDIlYhDIjpBDIjthDIk6BDIi8g1IlYBYIoNhmIBiDZIhiDQIBiDdIhiDPIhCEJIBzDhIgxCGg");
	this.shape_20.setTransform(202.996,83.9804);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D0AE74").s().p("AkTLYIj2h4Ik4B4Ihyg3IouBfIiXiCIjtBaIAyiGIhzjhIBBkJIBjjPIhjjdIBjjQIhjjZIIOBmIFYhYIC8A1IE6hDIDtBDIDphDIFXBDICBhDIFzA5IEjg5IGvgwIFIBuIB1DHIi3B9IC3CuIhUDMIBUCWIijDvICjFEImPhaIlMBaIlShQIjiBQIjPg8IjpA8IkwBGg");
	this.shape_21.setTransform(202.8,83.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1D1D1C").p("A6vKiICcCJIJAhkIB2A6IFCh/ID+B/IDIBJIE6hJIDwg/IDWA/IDphVIFdBVIFWhfIGcBfIiolXICoj8IhWieIBWjYIi8i3IC8iFIh4jRIlTh0Im8AyIktA8Il/g8IiEBHIljhHIjwBHIj0hHIlFBHIjBg5IlkBeIoehsIBmDlIhmDcIBmDoIhmDcIhDEYIB2DtIgzCOg");
	this.shape_22.setTransform(203.1164,84.7307);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BE9440").s().p("AkbMBIj+h/IlCB/Ih2g6IpABkIiciJIj0BfIAziOIh2jtIBDkYIBmjcIhmjoIBmjcIhmjlIIeBsIFkheIDBA5IFFhHID0BHIDwhHIFjBHICEhHIF/A8IEtg8IG8gyIFTB0IB4DRIi8CFIC8C3IhWDYIBWCeIioD8ICoFXImchfIlWBfIldhVIjpBVIjWg/IjwA/Ik6BJg");
	this.shape_23.setTransform(202.925,84.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1.6).p("ABtAlQAJgCAHAGQAHAFABAKQABALgGAGIiRCyQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgEAJAIICNBqQAJAHAAAKQACAJgIAIIi2CuIAjCBIB1iRQAHgHAJAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_24.setTransform(334.4921,86.7083);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgEAJAIICNBqQAJAHAAAKQACAJgIAIIi2CuIAjCBIB1iRQAHgHAJAAQAJgCAHAGQAHAFABAKQABALgGAGIiRCyQgGAJgMAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_25.setTransform(334.4921,86.7083);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1.6).p("ACpBxQAGANgKAMIi3DOQgGAIgKAAQgKAAgFgGQgHgGgBgKQAAgJAFgHICVipIhMAAQgNAAgGgLQgGgKAEgLIAbg4IhUARQgKACgIgGQghgZgYgiQgUgegLgjQgRhBAWhGQAWhDAxgtQA0gxA6gBQAOAAAGAMQBgC4APAZQAGAGAAAIQAAAIgDADIhkDNIBbAAQAPAAAGANgAg4AcIBsgVIA7h5Ihki/QgnAIgjAkQgkAlgQAxQgFARgDAVQgCAUACAdQACAcARAgQARAfAfAZg");
	this.shape_26.setTransform(300.7122,95.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgxFaQgHgGgBgKQAAgJAFgHICVipIhMAAQgNAAgGgLQgGgKAEgLIAbg4IhUARQgKACgIgGQghgZgYgiQgUgegLgjQgRhBAWhGQAWhDAxgtQA0gxA6gBQAOAAAGAMQBgC4APAZQAGAGAAAIQAAAIgDADIhkDNIBbAAQAPAAAGANQAGANgKAMIi3DOQgGAIgKAAQgKAAgFgGgAg/kFQgkAlgQAxQgFARgDAVQgCAUACAdQACAcARAgQARAfAfAZIBsgVIA7h5Ihki/QgnAIgjAkg");
	this.shape_27.setTransform(300.7122,95.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1.6).p("ACFAlQABAIgCAFIhMDDQgDAKgMAEIgGABQgHAAgGgFIiOhqQgIgHgBgKQAAgLAHgHIC2itIgjiAIh2CPQgGAIgJABQgJABgHgGQgIgGgBgKQAAgIAGgIICQiyQALgLAMADQANADAEANgAAZDJIA+igIgOgyIiQCKg");
	this.shape_28.setTransform(266.5512,86.7328);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAWD/IiOhqQgIgHgBgKQAAgLAHgHIC2itIgjiAIh2CPQgGAIgJABQgJABgHgGQgIgGgBgKQAAgIAGgIICQiyQALgLAMADQANADAEANIBMEXQABAIgCAFIhMDDQgDAKgMAEIgGABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_29.setTransform(266.5512,86.7328);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1.6).p("ACSDkQACAGgBAGQgBAHgEADQgEAFgGACIi0BBQgDABgFAAQgHAAgGgFQgKgGAAgMIAAmcIgsAAQgKAAgHgHQgGgHAAgKQAAgJAGgGQAHgGAKAAIAsAAIAAiPQAAgJAHgHQAHgGAJAAQAGAAAFADQAGADADAGQACAFAAAFIAACPIAwAAQAJAAAHAGQAGAGAAAJQAAAKgGAHQgHAHgJAAIgwAAIAAF8ICXg1QAHgCAFABQAGABAEAEQAFAEACAFg");
	this.shape_30.setTransform(236.6667,80.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhFE+QgKgGAAgNIAAmbIgsAAQgKgBgHgGQgGgHAAgKQAAgJAGgGQAHgHAKABIAsAAIAAiOQAAgKAHgGQAHgGAJgBQAGAAAFAEQAGADADAFQACAFAAAGIAACOIAwAAQAJgBAHAHQAGAGAAAJQAAAKgGAHQgHAGgJABIgwAAIAAF8ICXg1QAHgCAFABQAGABAEAEQAFADACAHQACAFgBAHQgBAFgEAFQgEAEgGACIi0BBIgIABQgHgBgGgEg");
	this.shape_31.setTransform(236.6667,80.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1.6).p("ACSDkQACAGgBAGQgBAHgEADQgEAFgGACIi1BBQgCABgFAAQgHAAgGgFQgKgGAAgMIAAmcIgsAAQgKAAgHgHQgGgHAAgKQAAgJAGgGQAHgGAKAAIAsAAIAAiPQAAgJAHgHQAHgGAJAAQAFAAAGADQAGAEACAFQADAEAAAGIAACPIAwAAQAJAAAHAGQAGAGAAAJQAAAKgGAHQgHAHgJAAIgwAAIAAF8ICXg1QAHgCAFABQAGABAEAEQAFAEACAFg");
	this.shape_32.setTransform(206.0667,80.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhFE+QgKgGAAgNIAAmbIgsAAQgKgBgHgGQgGgHAAgKQAAgJAGgGQAHgHAKABIAsAAIAAiOQAAgKAHgGQAHgGAJgBQAFAAAGAEQAGADACAFQADAEAAAHIAACOIAwAAQAJgBAHAHQAGAGAAAJQAAAKgGAHQgHAGgJABIgwAAIAAF8ICXg1QAHgCAFABQAGABAEAEQAFADACAHQACAFgBAHQgBAFgEAFQgEAEgGACIi1BBIgHABQgHgBgGgEg");
	this.shape_33.setTransform(206.0667,80.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1.6).p("ACFAlQABAIgCAFIhMDDQgDAKgMAEIgGABQgHAAgGgFIiOhqQgIgHgBgKQAAgLAHgHIC2itIgjiAIh2CPQgGAIgJABQgJABgHgGQgIgGgBgKQAAgIAGgIICQiyQALgLAMADQANADAEANgAAZDJIA+igIgOgyIiQCKg");
	this.shape_34.setTransform(175.2012,86.7328);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAWD/IiOhqQgIgHgBgKQAAgLAHgHIC2itIgjiAIh2CPQgGAIgJABQgJABgHgGQgIgGgBgKQAAgIAGgIICQiyQALgLAMADQANADAEANIBMEXQABAIgCAFIhMDDQgDAKgMAEIgGABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_35.setTransform(175.2012,86.7328);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1.6).p("ACEhSQAGAIAAAIQAAAKgHAHIjfDQIAACOQAAAJgHAGQgGAHgKAAQgKAAgGgHQgGgGAAgJIAApXQAAgQANgGQAOgFALAKgAhcBhICvikIivixg");
	this.shape_36.setTransform(145.925,93.1417);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiDE8QgGgGAAgJIAApXQAAgQANgGQAOgFALAKIDnDpQAGAIAAAIQAAAKgHAHIjfDQIAACOQAAAJgHAGQgGAHgKAAQgKAAgGgHgAhcBhICvikIivixg");
	this.shape_37.setTransform(145.925,93.1417);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1.6).p("ACWj/QANAGAAAOIAAHXQAAAGgDAFQgDAFgFAEQgFADgHAAQgJAAgGgHQgHgGAAgKIAAmoIhTBBIAjAcQAIAFABAKQABAKgGAHQgGAHgJABQgLABgFgGIihiAIAAGoQAAAKgGAGQgHAHgJAAQgKAAgGgHQgHgGAAgKIAAnXQAAgOANgGQANgGALAIIB+BmIB+hmQAMgIAMAGg");
	this.shape_38.setTransform(107.15,86.6259);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AB9D8QgGgGgBgKIAAmoIhSBBIAjAcQAGAFACAKQABAKgGAHQgGAHgJABQgKABgGgGIigiAIAAGoQgBAKgGAGQgGAHgKAAQgKAAgGgHQgGgGAAgKIAAnXQAAgOAMgGQAOgGAKAIIB+BmIB+hmQAMgIANAGQANAGgBAOIAAHXQAAAGgCAFQgEAFgFAEQgFADgGAAQgKAAgGgHg");
	this.shape_39.setTransform(107.15,86.6259);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1.6).p("ABtAlQAJgCAHAGQAHAFABAKQABALgGAGIiRCyQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgEAJAIICNBqQAJAHAAAKQACAJgIAIIi2CuIAjCBIB1iRQAHgHAJAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_40.setTransform(71.5921,86.7083);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQALgEAJAIICNBqQAJAHAAAKQACAJgIAIIi2CuIAjCBIB1iRQAHgHAJAAQAJgCAHAGQAHAFABAKQABALgGAGIiRCyQgGAJgMAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_41.setTransform(71.5921,86.7083);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#1D1D1C").ss(0.9).p("A5BJXICSB6IIbhZIBvAzIEshwIDuBwIC7BCIEmhCIDhg4IDHA4IDbhKIFHBKIFAhUIGBBUIidkwICdjhIhRiMIBRjAIiwijICwh2Ihxi7Ik9hnImfAtIkaA2Ilmg2Ih7A/IlMg/IjhA/Ijlg/IkvA/Ii1gyIlNBTIn7hgIBfDLIhfDEIBfDPIhfDDIg/D5IBvDTIgwB+g");
	this.shape_42.setTransform(203.1258,82.6553);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A0A09F").s().p("AkJKsIjuhxIksBxIhvg0IobBZIiSh6IjkBVIAwh+IhvjUIA/j4IBfjDIhfjPIBfjFIhfjKIH7BfIFNhTIC1AyIEvg+IDlA+IDhg+IFMA+IB7g+IFmA1IEag1IGfgtIE9BnIBxC6IiwB2ICwCjIhRDAIBRCNIidDhICdEwImBhVIlABVIlHhLIjbBLIjHg4IjhA4IkmBBg");
	this.shape_43.setTransform(202.925,82.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D0AE74").s().p("AkSLYIj3h4Ik3B4Ihzg3IouBfIiXiCIjsBaIAxiGIhzjhIBCkJIBijPIhijdIBijQIhijZIIMBmIFZhYIC7A1IE7hDIDtBDIDphDIFYBDICAhDIFyA5IElg5IGugwIFIBuIB1DHIi2B9IC2CuIhUDMIBUCWIijDvICjFEImQhaIlLBaIlShQIjiBQIjPg8IjqA8IkwBGg");
	this.shape_44.setTransform(202.65,83.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#1D1D1C").p("A6vKiICcCJIJAhkIB2A6IFBh/ID/B/IDIBJIE6hJIDwg/IDWA/IDphVIFdBVIFWhfIGcBfIiolXICoj8IhWieIBWjYIi8i3IC8iFIh4jRIlTh0Im8AyIktA8Il/g8IiEBHIljhHIjwBHIj1hHIlEBHIjBg5IlkBeIoehsIBmDlIhmDcIBmDoIhmDcIhDEYIB2DtIgzCOg");
	this.shape_45.setTransform(202.9664,84.7307);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BE9440").s().p("AkbMBIj/h/IlBB/Ih2g6IpABkIiciJIj0BfIAziOIh2jtIBDkYIBmjcIhmjoIBmjcIhmjlIIeBsIFkheIDBA5IFEhHID1BHIDwhHIFjBHICEhHIF/A8IEtg8IG8gyIFTB0IB4DRIi8CFIC8C3IhWDYIBWCeIioD8ICoFXImchfIlWBfIldhVIjpBVIjWg/IjwA/Ik6BJg");
	this.shape_46.setTransform(202.775,84.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(0.9).p("ABtAlQAJgCAHAGQAHAFABAKQABAKgGAHIiRCyQgHAJgLAAIgFgBQgNgDgDgNIhMkWQgBgIACgGIBLjDQAEgLALgDQALgDAJAHICNBqQAIAHABAKQABAKgHAHIi2CuIAjCBIB1iRQAGgGAKgBgAhXgoIAOAyICRiJIhhhJg");
	this.shape_47.setTransform(334.3546,86.7193);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A0A09F").s().p("AgoEDQgNgDgDgNIhMkWQgBgIACgGIBLjDQAEgLALgDQALgDAJAHICNBqQAIAHABAKQABAKgHAHIi2CuIAjCBIB1iRQAGgGAKgBQAJgCAHAGQAHAFABAKQABAKgGAHIiRCyQgHAJgLAAgAhXgoIAOAyICRiJIhhhJg");
	this.shape_48.setTransform(334.3546,86.7193);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(0.9).p("ACpBxQAGANgKAMIi3DOQgGAIgKAAQgJAAgGgGQgIgGAAgKQgBgJAGgHICVipIhMAAQgMAAgHgLQgGgKAFgLIAag4IhTARQgLACgIgGQghgZgYgiQgVgegJgjQgShBAWhGQAWhCAxguQA1gxA5gBQAOAAAGAMQBkC/AMASQAFAHAAAHQAAAHgDAEIhkDNIBbAAQAPAAAGANgAg4AcIBsgVIA7h5Ihki/QgnAIgjAkQgiAjgSAzQgFATgCATQgDAXACAaQACAdARAfQAQAdAgAbg");
	this.shape_49.setTransform(300.5625,95.975);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A0A09F").s().p("AgxFaQgIgGAAgKQgBgJAGgHICVipIhMAAQgMAAgHgLQgGgKAFgLIAag4IhTARQgLACgIgGQghgZgYgiQgVgegJgjQgShBAWhGQAWhCAxguQA1gxA5gBQAOAAAGAMQBkC/AMASQAFAHAAAHQAAAHgDAEIhkDNIBbAAQAPAAAGANQAGANgKAMIi3DOQgGAIgKAAQgJAAgGgGgAg/kFQgiAjgSAzQgFATgCATQgDAXACAaQACAdARAfQAQAdAgAbIBsgVIA7h5Ihki/QgnAIgjAkg");
	this.shape_50.setTransform(300.5625,95.975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(0.9).p("ACFAlQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFIiOhqQgIgHAAgKQgBgLAIgHIC1itIgjiAIh2CPQgGAIgJABQgJABgHgGQgHgGgCgKQAAgJAGgHICRiyQAJgLANADQANADAEANgAAZDJIA+igIgOgyIiQCKg");
	this.shape_51.setTransform(266.4132,86.7328);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A0A09F").s().p("AAWD/IiOhqQgIgHAAgKQgBgLAIgHIC1itIgjiAIh2CPQgGAIgJABQgJABgHgGQgHgGgCgKQAAgJAGgHICRiyQAJgLANADQANADAEANIBMEXQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_52.setTransform(266.4132,86.7328);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(0.9).p("ACSDkQACAIgBAEQgCAHgDADQgEAFgGACIi0BBQgDABgFAAQgHAAgGgFQgKgHAAgLIAAmcIgsAAQgKAAgHgHQgGgIAAgJQAAgIAGgHQAHgGAKAAIAsAAIAAiPQAAgJAHgHQAHgGAJAAQAGAAAFADQAFADAEAGQACAEAAAGIAACPIAwAAQAKAAAGAGQAGAGAAAJQAAAKgGAHQgGAHgKAAIgwAAIAAF8ICYg1QAGgCAFABQAHABAEAEQAEADACAGg");
	this.shape_53.setTransform(236.5313,80.25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A0A09F").s().p("AhFE+QgKgHAAgMIAAmbIgsAAQgKgBgHgGQgGgIAAgJQAAgJAGgGQAHgHAKABIAsAAIAAiOQAAgJAHgHQAHgGAJgBQAGAAAFAEQAFACAEAGQACAEAAAHIAACOIAwAAQAKgBAGAHQAGAGAAAJQAAAKgGAHQgGAGgKABIgwAAIAAF8ICYg1QAGgDAFACQAHABAEAEQAEADACAHQACAHgBAFQgCAGgDAEQgEAEgGACIi0BBIgIABQgHgBgGgEg");
	this.shape_54.setTransform(236.5313,80.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(0.9).p("ACSDkQACAIgBAEQgCAHgDADQgEAFgGACIi0BBQgDABgFAAQgHAAgGgFQgKgHAAgLIAAmcIgsAAQgKAAgHgHQgGgIAAgJQAAgIAGgHQAHgGAKAAIAsAAIAAiPQAAgJAHgHQAHgGAJAAQAGAAAFADQAFADAEAGQACAFAAAFIAACPIAwAAQAKAAAGAGQAGAGAAAJQAAAKgGAHQgGAHgKAAIgwAAIAAF8ICYg1QAGgCAFABQAHABAEAEQAEADACAGg");
	this.shape_55.setTransform(205.9313,80.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A0A09F").s().p("AhFE+QgKgHAAgMIAAmbIgsAAQgKgBgHgGQgGgIAAgJQAAgJAGgGQAHgHAKABIAsAAIAAiOQAAgJAHgHQAHgGAJgBQAGAAAFAEQAFACAEAGQACAFAAAGIAACOIAwAAQAKgBAGAHQAGAGAAAJQAAAKgGAHQgGAGgKABIgwAAIAAF8ICYg1QAGgDAFACQAHABAEAEQAEADACAHQACAHgBAFQgCAGgDAEQgEAEgGACIi0BBIgIABQgHgBgGgEg");
	this.shape_56.setTransform(205.9313,80.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(0.9).p("ACFAlQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFIiOhqQgIgHAAgKQgBgLAIgHIC1itIgjiAIh2CPQgGAIgJABQgJABgHgGQgHgGgCgKQAAgJAGgHICRiyQAJgLANADQANADAEANgAAZDJIA+igIgOgyIiQCKg");
	this.shape_57.setTransform(175.0632,86.7328);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A0A09F").s().p("AAWD/IiOhqQgIgHAAgKQgBgLAIgHIC1itIgjiAIh2CPQgGAIgJABQgJABgHgGQgHgGgCgKQAAgJAGgHICRiyQAJgLANADQANADAEANIBMEXQACAHgDAGIhMDDQgDAKgLAEIgHABQgHAAgGgFgAhHCBIBgBIIA+igIgOgyg");
	this.shape_58.setTransform(175.0632,86.7328);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(0.9).p("ACEhSQAGAHAAAJQAAAKgHAHIjfDQIAACOQAAAJgHAGQgGAHgKAAQgKAAgGgHQgGgGAAgJIAApXQAAgQAOgGQAOgFAKAKgAhcBhICvikIivixg");
	this.shape_59.setTransform(145.775,93.1305);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A0A09F").s().p("AiDE8QgGgGAAgJIAApXQAAgQAOgGQAOgFAKAKIDnDpQAGAHAAAJQAAAKgHAHIjfDQIAACOQAAAJgHAGQgGAHgKAAQgKAAgGgHgAhcBhICvikIivixg");
	this.shape_60.setTransform(145.775,93.1305);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(0.9).p("ACXj/QANAGAAAOIAAHXQAAAFgEAGQgCAEgGAFQgFADgHAAQgJAAgGgHQgHgGAAgKIAAmoIhTBBIAjAcQAIAGABAJQABAKgGAHQgGAHgJABQgKABgGgGIihiAIAAGoQAAAKgGAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAnXQAAgOANgGQANgGALAIIB+BmIB/hmQALgIANAGg");
	this.shape_61.setTransform(107.025,86.6259);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A0A09F").s().p("AB9D8QgHgGAAgKIAAmoIhTBBIAjAcQAIAGABAJQABAKgGAHQgGAHgJABQgKABgGgGIihiAIAAGoQAAAKgGAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAnXQAAgOANgGQANgGALAIIB+BmIB/hmQALgIANAGQANAGAAAOIAAHXQAAAFgEAGQgCAEgGAFQgFADgHAAQgJAAgGgHg");
	this.shape_62.setTransform(107.025,86.6259);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(0.9).p("ABtAlQAJgCAHAGQAHAFABAKQABAKgGAHIiRCyQgHAJgLAAIgFgBQgNgDgDgNIhMkWQgBgIACgGIBLjDQAEgLALgDQALgDAJAHICNBqQAIAHABAKQABAKgHAHIi2CuIAjCBIB1iRQAGgGAKgBgAhXgoIAOAyICRiJIhhhJg");
	this.shape_63.setTransform(71.4546,86.7193);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A0A09F").s().p("AgoEDQgNgDgDgNIhMkWQgBgIACgGIBLjDQAEgLALgDQALgDAJAHICNBqQAIAHABAKQABAKgHAHIi2CuIAjCBIB1iRQAGgGAKgBQAJgCAHAGQAHAFABAKQABAKgGAHIiRCyQgHAJgLAAgAhXgoIAOAyICRiJIhhhJg");
	this.shape_64.setTransform(71.4546,86.7193);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#1D1D1C").ss(0.9).p("A5BJXICSB6IIbhZIBuAzIEthwIDuBwIC7BCIEmhCIDhg4IDHA4IDbhKIFGBKIFAhUIGCBUIidkwICdjhIhRiMIBRjAIiwijICwh2Ihxi7Ik9hnImfAtIkaA2Ilmg2Ih8A/IlMg/IjgA/Ijlg/IkwA/Ii1gyIlMBTIn7hgIBfDLIhfDEIBfDPIhfDDIg/D5IBvDTIgwB+g");
	this.shape_65.setTransform(203.0001,82.6553);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A0A09F").s().p("AkJKsIjuhxIktBxIhug0IobBZIiSh6IjkBVIAwh+IhvjUIA/j4IBfjDIhfjPIBfjFIhfjKIH7BfIFNhTIC0AyIEwg+IDlA+IDgg+IFMA+IB8g+IFmA1IEag1IGfgtIE9BnIBxC6IiwB2ICwCjIhRDAIBRCNIidDhICdEwImChVIk/BVIlHhLIjaBLIjIg4IjhA4IkmBBg");
	this.shape_66.setTransform(202.8,82.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#1D1D1C").p("A56J+ICXCCIIuhfIBzA3IE3h4ID3B4IDCBGIEwhGIDpg8IDPA8IDjhQIFRBQIFMhaIGPBaIijlEICjjvIhUiWIBUjMIi2iuIC2h9Ih1jHIlIhuImuAwIkkA5Ilzg5IiABDIlYhDIjpBDIjthDIk6BDIi8g1IlYBYIoNhmIBiDZIhiDQIBiDdIhiDPIhCEJIBzDhIgxCGg");
	this.shape_67.setTransform(202.696,83.9804);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D0AE74").s().p("AkSLYIj3h4Ik3B4Ihzg3IouBfIiXiCIjtBaIAyiGIhzjhIBBkJIBjjPIhjjdIBjjQIhjjZIIOBmIFYhYIC8A1IE6hDIDtBDIDphDIFYBDIB/hDIF0A5IEkg5IGugwIFIBuIB1DHIi2B9IC2CuIhUDMIBUCWIijDvICjFEImPhaIlMBaIlShQIjjBQIjOg8IjqA8IkwBGg");
	this.shape_68.setTransform(202.5,83.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#1D1D1C").p("A6vKiICcCJIJAhkIB2A6IFCh/ID+B/IDIBJIE6hJIDxg/IDVA/IDqhVIFcBVIFXhfIGbBfIiolXICoj8IhWieIBWjYIi8i3IC8iFIh4jRIlTh0Im8AyIktA8Il/g8IiEBHIljhHIjwBHIj0hHIlFBHIjBg5IljBeIoehsIBlDlIhlDcIBlDoIhlDcIhEEYIB3DtIgzCOg");
	this.shape_69.setTransform(202.8164,84.7307);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BE9440").s().p("AkbMBIj+h/IlCB/Ih2g6IpABkIiciJIjzBfIAziOIh3jtIBEkYIBljcIhljoIBljcIhljlIIeBsIFjheIDBA5IFFhHID0BHIDwhHIFjBHICEhHIF/A8IEtg8IG8gyIFTB0IB4DRIi8CFIC8C3IhWDYIBWCeIioD8ICoFXImbhfIlXBfIlchVIjqBVIjVg/IjxA/Ik6BJg");
	this.shape_70.setTransform(202.625,84.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:202.996}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_20,p:{x:202.8459}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,406.6,170.5);


(lib.bateau = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape.setTransform(61.35,322.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1.setTransform(69.925,325.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_2.setTransform(77.225,323.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_3.setTransform(58.025,313.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_4.setTransform(81.7,313.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_5.setTransform(78.475,305.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_6.setTransform(69.925,301.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_7.setTransform(60.925,305.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_8.setTransform(69.925,313.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_9.setTransform(69.925,313.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_10.setTransform(69.925,313.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_11.setTransform(61.35,322.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_12.setTransform(69.925,325.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_13.setTransform(77.225,323.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_14.setTransform(58.025,313.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_15.setTransform(81.7,313.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_16.setTransform(78.475,305.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_17.setTransform(69.925,301.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_18.setTransform(60.925,305.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_19.setTransform(69.925,313.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_20.setTransform(69.925,313.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_21.setTransform(69.925,313.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_22.setTransform(61.35,322.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_23.setTransform(69.925,325.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_24.setTransform(77.225,323.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_25.setTransform(58.025,313.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_26.setTransform(81.7,313.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_27.setTransform(78.475,305.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_28.setTransform(69.925,301.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_29.setTransform(60.925,305.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_30.setTransform(69.925,313.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_31.setTransform(69.925,313.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_32.setTransform(69.925,313.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_33.setTransform(61.35,322.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_34.setTransform(69.925,325.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_35.setTransform(77.225,323.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_36.setTransform(58.025,313.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_37.setTransform(81.7,313.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_38.setTransform(78.475,305.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_39.setTransform(69.925,301.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_40.setTransform(60.925,305.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_41.setTransform(69.925,313.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_42.setTransform(69.925,313.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_43.setTransform(69.925,313.875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_44.setTransform(87.775,329.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_45.setTransform(96.35,332.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_46.setTransform(103.625,330.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_47.setTransform(84.425,320.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_48.setTransform(108.125,320.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_49.setTransform(104.925,312.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_50.setTransform(96.35,307.975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_51.setTransform(87.35,312.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_52.setTransform(96.35,320.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZABgkQgBgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgZgYg");
	this.shape_53.setTransform(96.35,320.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_54.setTransform(96.35,320.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_55.setTransform(87.775,329.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_56.setTransform(96.35,332.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_57.setTransform(103.625,330.55);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_58.setTransform(84.425,320.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_59.setTransform(108.125,320.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_60.setTransform(104.925,312.125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_61.setTransform(96.35,307.975);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_62.setTransform(87.35,312.125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_63.setTransform(96.35,320.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZABgkQgBgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgZgYg");
	this.shape_64.setTransform(96.35,320.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_65.setTransform(96.35,320.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_66.setTransform(87.775,329.275);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_67.setTransform(96.35,332.55);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_68.setTransform(103.625,330.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_69.setTransform(84.425,320.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_70.setTransform(108.125,320.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_71.setTransform(104.925,312.125);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_72.setTransform(96.35,307.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_73.setTransform(87.35,312.125);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_74.setTransform(96.35,320.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZABgkQgBgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgZgYg");
	this.shape_75.setTransform(96.35,320.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_76.setTransform(96.35,320.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_77.setTransform(87.775,329.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_78.setTransform(96.35,332.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_79.setTransform(103.625,330.55);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_80.setTransform(84.425,320.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_81.setTransform(108.125,320.025);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_82.setTransform(104.925,312.125);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_83.setTransform(96.35,307.975);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_84.setTransform(87.35,312.125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_85.setTransform(96.35,320.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZABgkQgBgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgZgYg");
	this.shape_86.setTransform(96.35,320.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_87.setTransform(96.35,320.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_88.setTransform(116.375,334.675);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_89.setTransform(124.925,337.975);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_90.setTransform(132.225,335.975);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_91.setTransform(113.025,326.125);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_92.setTransform(136.725,325.45);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_93.setTransform(133.525,317.55);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_94.setTransform(124.925,313.425);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_95.setTransform(115.925,317.55);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_96.setTransform(124.925,326.125);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_97.setTransform(124.925,326.125);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQBAAAAsAtQAtAsAAA/QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_98.setTransform(124.95,326.125);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_99.setTransform(116.375,334.675);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_100.setTransform(124.925,337.975);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_101.setTransform(132.225,335.975);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_102.setTransform(113.025,326.125);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_103.setTransform(136.725,325.45);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_104.setTransform(133.525,317.55);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_105.setTransform(124.925,313.425);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_106.setTransform(115.925,317.55);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_107.setTransform(124.925,326.125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_108.setTransform(124.925,326.125);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQBAAAAsAtQAtAsAAA/QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_109.setTransform(124.95,326.125);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_110.setTransform(116.375,334.675);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_111.setTransform(124.925,337.975);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_112.setTransform(132.225,335.975);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_113.setTransform(113.025,326.125);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_114.setTransform(136.725,325.45);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_115.setTransform(133.525,317.55);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_116.setTransform(124.925,313.425);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_117.setTransform(115.925,317.55);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_118.setTransform(124.925,326.125);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_119.setTransform(124.925,326.125);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQBAAAAsAtQAtAsAAA/QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_120.setTransform(124.95,326.125);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_121.setTransform(116.375,334.675);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_122.setTransform(124.925,337.975);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_123.setTransform(132.225,335.975);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_124.setTransform(113.025,326.125);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_125.setTransform(136.725,325.45);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_126.setTransform(133.525,317.55);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_127.setTransform(124.925,313.425);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_128.setTransform(115.925,317.55);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_129.setTransform(124.925,326.125);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_130.setTransform(124.925,326.125);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQBAAAAsAtQAtAsAAA/QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_131.setTransform(124.95,326.125);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_132.setTransform(144.2,338.075);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_133.setTransform(152.775,341.325);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_134.setTransform(160.05,339.35);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_135.setTransform(140.85,329.475);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_136.setTransform(164.55,328.825);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_137.setTransform(161.325,320.925);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_138.setTransform(152.775,316.775);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_139.setTransform(143.775,320.925);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_140.setTransform(152.775,329.475);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgjAAgZgZg");
	this.shape_141.setTransform(152.775,329.475);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg/AAgsgtg");
	this.shape_142.setTransform(152.775,329.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_143.setTransform(144.2,338.075);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_144.setTransform(152.775,341.325);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_145.setTransform(160.05,339.35);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_146.setTransform(140.85,329.475);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_147.setTransform(164.55,328.825);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_148.setTransform(161.325,320.925);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_149.setTransform(152.775,316.775);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_150.setTransform(143.775,320.925);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_151.setTransform(152.775,329.475);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgjAAgZgZg");
	this.shape_152.setTransform(152.775,329.475);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg/AAgsgtg");
	this.shape_153.setTransform(152.775,329.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_154.setTransform(144.2,338.075);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_155.setTransform(152.775,341.325);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_156.setTransform(160.05,339.35);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_157.setTransform(140.85,329.475);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_158.setTransform(164.55,328.825);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_159.setTransform(161.325,320.925);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_160.setTransform(152.775,316.775);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_161.setTransform(143.775,320.925);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_162.setTransform(152.775,329.475);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgjAAgZgZg");
	this.shape_163.setTransform(152.775,329.475);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg/AAgsgtg");
	this.shape_164.setTransform(152.775,329.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_165.setTransform(144.2,338.075);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_166.setTransform(152.775,341.325);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_167.setTransform(160.05,339.35);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_168.setTransform(140.85,329.475);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_169.setTransform(164.55,328.825);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_170.setTransform(161.325,320.925);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_171.setTransform(152.775,316.775);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_172.setTransform(143.775,320.925);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_173.setTransform(152.775,329.475);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgjAAgZgZg");
	this.shape_174.setTransform(152.775,329.475);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAsgtA/AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg/AAgsgtg");
	this.shape_175.setTransform(152.775,329.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_176.setTransform(170.725,342.15);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_177.setTransform(179.3,345.425);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_178.setTransform(186.575,343.425);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_179.setTransform(167.375,333.575);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_180.setTransform(191.075,332.925);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_181.setTransform(187.875,325.025);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_182.setTransform(179.3,320.875);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_183.setTransform(170.3,325.025);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAZAZQAZAaAAAig");
	this.shape_184.setTransform(179.3,333.575);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAYAZQAZAaAAAiQAAAkgZAZQgYAZgkAAQgiAAgagZg");
	this.shape_185.setTransform(179.3,333.575);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQBAAAAsAtQAtAtAAA+QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_186.setTransform(179.3,333.575);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_187.setTransform(170.725,342.15);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_188.setTransform(179.3,345.425);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_189.setTransform(186.575,343.425);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_190.setTransform(167.375,333.575);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_191.setTransform(191.075,332.925);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_192.setTransform(187.875,325.025);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_193.setTransform(179.3,320.875);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_194.setTransform(170.3,325.025);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAZAZQAZAaAAAig");
	this.shape_195.setTransform(179.3,333.575);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAYAZQAZAaAAAiQAAAkgZAZQgYAZgkAAQgiAAgagZg");
	this.shape_196.setTransform(179.3,333.575);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQBAAAAsAtQAtAtAAA+QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_197.setTransform(179.3,333.575);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_198.setTransform(170.725,342.15);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_199.setTransform(179.3,345.425);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_200.setTransform(186.575,343.425);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_201.setTransform(167.375,333.575);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_202.setTransform(191.075,332.925);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_203.setTransform(187.875,325.025);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_204.setTransform(179.3,320.875);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_205.setTransform(170.3,325.025);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAZAZQAZAaAAAig");
	this.shape_206.setTransform(179.3,333.575);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAYAZQAZAaAAAiQAAAkgZAZQgYAZgkAAQgiAAgagZg");
	this.shape_207.setTransform(179.3,333.575);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQBAAAAsAtQAtAtAAA+QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_208.setTransform(179.3,333.575);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_209.setTransform(170.725,342.15);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_210.setTransform(179.3,345.425);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_211.setTransform(186.575,343.425);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_212.setTransform(167.375,333.575);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_213.setTransform(191.075,332.925);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_214.setTransform(187.875,325.025);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_215.setTransform(179.3,320.875);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_216.setTransform(170.3,325.025);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAZAZQAZAaAAAig");
	this.shape_217.setTransform(179.3,333.575);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAYAZQAZAaAAAiQAAAkgZAZQgYAZgkAAQgiAAgagZg");
	this.shape_218.setTransform(179.3,333.575);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQBAAAAsAtQAtAtAAA+QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_219.setTransform(179.3,333.575);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_220.setTransform(199.1,343.25);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_221.setTransform(207.675,346.525);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_222.setTransform(214.975,344.525);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_223.setTransform(195.775,334.675);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_224.setTransform(219.45,334.025);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_225.setTransform(216.225,326.125);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_226.setTransform(207.675,321.975);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_227.setTransform(198.675,326.125);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_228.setTransform(207.675,334.675);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgiAAgagZg");
	this.shape_229.setTransform(207.675,334.675);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_230.setTransform(207.675,334.675);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_231.setTransform(199.1,343.25);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_232.setTransform(207.675,346.525);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_233.setTransform(214.975,344.525);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_234.setTransform(195.775,334.675);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_235.setTransform(219.45,334.025);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_236.setTransform(216.225,326.125);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_237.setTransform(207.675,321.975);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_238.setTransform(198.675,326.125);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_239.setTransform(207.675,334.675);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgiAAgagZg");
	this.shape_240.setTransform(207.675,334.675);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_241.setTransform(207.675,334.675);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_242.setTransform(199.1,343.25);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_243.setTransform(207.675,346.525);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_244.setTransform(214.975,344.525);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_245.setTransform(195.775,334.675);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_246.setTransform(219.45,334.025);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_247.setTransform(216.225,326.125);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_248.setTransform(207.675,321.975);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_249.setTransform(198.675,326.125);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_250.setTransform(207.675,334.675);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgiAAgagZg");
	this.shape_251.setTransform(207.675,334.675);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_252.setTransform(207.675,334.675);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_253.setTransform(199.1,343.25);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_254.setTransform(207.675,346.525);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_255.setTransform(214.975,344.525);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_256.setTransform(195.775,334.675);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_257.setTransform(219.45,334.025);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_258.setTransform(216.225,326.125);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_259.setTransform(207.675,321.975);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_260.setTransform(198.675,326.125);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_261.setTransform(207.675,334.675);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgiAAgagZg");
	this.shape_262.setTransform(207.675,334.675);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_263.setTransform(207.675,334.675);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_264.setTransform(226.7,342.125);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_265.setTransform(235.275,345.425);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_266.setTransform(242.55,343.425);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_267.setTransform(223.35,333.575);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_268.setTransform(247.05,332.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_269.setTransform(243.825,325);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_270.setTransform(235.275,320.875);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_271.setTransform(226.275,325);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_272.setTransform(235.275,333.575);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_273.setTransform(235.275,333.575);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_274.setTransform(235.275,333.575);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_275.setTransform(226.7,342.125);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_276.setTransform(235.275,345.425);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_277.setTransform(242.55,343.425);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_278.setTransform(223.35,333.575);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_279.setTransform(247.05,332.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_280.setTransform(243.825,325);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_281.setTransform(235.275,320.875);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_282.setTransform(226.275,325);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_283.setTransform(235.275,333.575);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_284.setTransform(235.275,333.575);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_285.setTransform(235.275,333.575);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_286.setTransform(226.7,342.125);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_287.setTransform(235.275,345.425);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_288.setTransform(242.55,343.425);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_289.setTransform(223.35,333.575);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_290.setTransform(247.05,332.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_291.setTransform(243.825,325);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_292.setTransform(235.275,320.875);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_293.setTransform(226.275,325);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_294.setTransform(235.275,333.575);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_295.setTransform(235.275,333.575);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_296.setTransform(235.275,333.575);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_297.setTransform(226.7,342.125);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_298.setTransform(235.275,345.425);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_299.setTransform(242.55,343.425);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_300.setTransform(223.35,333.575);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_301.setTransform(247.05,332.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_302.setTransform(243.825,325);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_303.setTransform(235.275,320.875);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_304.setTransform(226.275,325);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_305.setTransform(235.275,333.575);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_306.setTransform(235.275,333.575);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_307.setTransform(235.275,333.575);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_308.setTransform(254.025,338.725);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_309.setTransform(262.625,342);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_310.setTransform(269.9,340);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_311.setTransform(250.7,330.15);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_312.setTransform(274.375,329.475);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_313.setTransform(271.175,321.575);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_314.setTransform(262.625,317.45);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_315.setTransform(253.625,321.575);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAig");
	this.shape_316.setTransform(262.625,330.15);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgZgYg");
	this.shape_317.setTransform(262.625,330.15);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAsgtA/AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg/AAgsgtg");
	this.shape_318.setTransform(262.6,330.15);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_319.setTransform(254.025,338.725);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_320.setTransform(262.625,342);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_321.setTransform(269.9,340);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_322.setTransform(250.7,330.15);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_323.setTransform(274.375,329.475);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_324.setTransform(271.175,321.575);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_325.setTransform(262.625,317.45);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_326.setTransform(253.625,321.575);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAig");
	this.shape_327.setTransform(262.625,330.15);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgZgYg");
	this.shape_328.setTransform(262.625,330.15);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAsgtA/AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg/AAgsgtg");
	this.shape_329.setTransform(262.6,330.15);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_330.setTransform(254.025,338.725);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_331.setTransform(262.625,342);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_332.setTransform(269.9,340);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_333.setTransform(250.7,330.15);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_334.setTransform(274.375,329.475);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_335.setTransform(271.175,321.575);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_336.setTransform(262.625,317.45);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_337.setTransform(253.625,321.575);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAig");
	this.shape_338.setTransform(262.625,330.15);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgZgYg");
	this.shape_339.setTransform(262.625,330.15);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAsgtA/AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg/AAgsgtg");
	this.shape_340.setTransform(262.6,330.15);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_341.setTransform(254.025,338.725);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_342.setTransform(262.625,342);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_343.setTransform(269.9,340);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_344.setTransform(250.7,330.15);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_345.setTransform(274.375,329.475);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_346.setTransform(271.175,321.575);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_347.setTransform(262.625,317.45);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_348.setTransform(253.625,321.575);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgiAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAig");
	this.shape_349.setTransform(262.625,330.15);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgZgYg");
	this.shape_350.setTransform(262.625,330.15);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAsgtA/AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg/AAgsgtg");
	this.shape_351.setTransform(262.6,330.15);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_352.setTransform(281.275,333.875);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_353.setTransform(289.85,337.125);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_354.setTransform(297.125,335.15);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_355.setTransform(277.925,325.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_356.setTransform(301.625,324.625);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_357.setTransform(298.425,316.725);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_358.setTransform(289.85,312.575);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_359.setTransform(280.825,316.725);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_360.setTransform(289.825,325.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkgBQgiABgagZg");
	this.shape_361.setTransform(289.825,325.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_362.setTransform(289.85,325.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_363.setTransform(281.275,333.875);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_364.setTransform(289.85,337.125);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_365.setTransform(297.125,335.15);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_366.setTransform(277.925,325.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_367.setTransform(301.625,324.625);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_368.setTransform(298.425,316.725);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_369.setTransform(289.85,312.575);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_370.setTransform(280.825,316.725);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_371.setTransform(289.825,325.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkgBQgiABgagZg");
	this.shape_372.setTransform(289.825,325.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_373.setTransform(289.85,325.3);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_374.setTransform(281.275,333.875);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_375.setTransform(289.85,337.125);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_376.setTransform(297.125,335.15);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_377.setTransform(277.925,325.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_378.setTransform(301.625,324.625);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_379.setTransform(298.425,316.725);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_380.setTransform(289.85,312.575);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_381.setTransform(280.825,316.725);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_382.setTransform(289.825,325.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkgBQgiABgagZg");
	this.shape_383.setTransform(289.825,325.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_384.setTransform(289.85,325.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_385.setTransform(281.275,333.875);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_386.setTransform(289.85,337.125);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_387.setTransform(297.125,335.15);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_388.setTransform(277.925,325.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_389.setTransform(301.625,324.625);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_390.setTransform(298.425,316.725);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_391.setTransform(289.85,312.575);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_392.setTransform(280.825,316.725);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_393.setTransform(289.825,325.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkgBQgiABgagZg");
	this.shape_394.setTransform(289.825,325.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_395.setTransform(289.85,325.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_396.setTransform(306.25,329.025);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_397.setTransform(314.825,332.275);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_398.setTransform(322.125,330.275);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_399.setTransform(302.925,320.425);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_400.setTransform(326.6,319.775);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_401.setTransform(323.375,311.875);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_402.setTransform(314.825,307.725);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_403.setTransform(305.825,311.875);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_404.setTransform(314.825,320.425);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgiAAgagZg");
	this.shape_405.setTransform(314.825,320.425);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_406.setTransform(314.825,320.425);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIABQAJgBAGAHQAGAGABAIQgBAJgGAHQgGAFgJABQgIgBgGgFg");
	this.shape_407.setTransform(41.85,340.35);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_408.setTransform(50.15,345);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_409.setTransform(59.75,350.375);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_410.setTransform(72.725,355.975);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_411.setTransform(40.85,300.55);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAGgJABQgIgBgGgGg");
	this.shape_412.setTransform(68.9,338.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_413.setTransform(83.1,342.85);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_414.setTransform(97.475,345.45);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_415.setTransform(111.875,347.15);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgHAHgHQAGgGAIAAQAJAAAGAGQAHAHgBAHQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_416.setTransform(130.45,348.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_417.setTransform(147.25,349.3);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_418.setTransform(163.2,350.15);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_419.setTransform(178.25,350.15);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_420.setTransform(192.875,350.15);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_421.setTransform(210.55,350.15);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_422.setTransform(228.7,349.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_423.setTransform(250.55,348);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAIgBAHAHQAHAGAAAIQAAAJgHAHQgHAFgIAAQgIAAgGgFg");
	this.shape_424.setTransform(273.4,346.55);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgHAGgHQAGgHAIAAQAJAAAHAHQAFAHABAHQgBAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_425.setTransform(286.9,345);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgHAGgHQAGgHAIAAQAJAAAGAHQAHAHAAAHQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_426.setTransform(303.75,342.65);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgHAGgHQAGgHAIAAQAJAAAGAHQAHAHAAAHQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_427.setTransform(317.25,341.3);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#8F8777").s().p("AAWgRQgPAVgcAOQALgZAggKg");
	this.shape_428.setTransform(358.225,296.575);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#8F8777").s().p("AgRAHIAAgBQAOgPAWABQgNAPgUABIgCABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_429.setTransform(391.6,274.1195);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#8F8777").s().p("AAKgNQgBATgSAIQACgTARgIg");
	this.shape_430.setTransform(368.425,290.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#8F8777").s().p("AgLAFQAJgPAVgKIgLAQIAJgDQgIAKgaASg");
	this.shape_431.setTransform(372.45,288.65);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#8F8777").s().p("AgEgGQAPgIATgDQgLAKgSAJIgeAQQAIgPARgJg");
	this.shape_432.setTransform(381.1,281.675);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#8F8777").s().p("AgKAAQADgFAHgDQAGgEAHAAIAMgJIgIAPQgOAFgGAHQgOANgHAEIAOgXg");
	this.shape_433.setTransform(390.075,278.15);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#8F8777").s().p("AgOADQAEgHAJgDQAIgCAJADQgHAGgUAGQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQgDgCADgEg");
	this.shape_434.setTransform(398.4182,269.2682);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.4,0.4,0.5).s().p("AgJACIAGgGQAIgGAJABQgEAHgIAFIgGAFIgJADQAAgEAEgFg");
	this.shape_435.setTransform(351.1222,305.2981);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.8,0.7,0.9).s().p("AgKAEIABgBIgBABIgCAAIgCgBIACgCIABgBIADgCIAIgCQAIgBAHAEQgGAFgJABIgHAAg");
	this.shape_436.setTransform(374,293.74);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.8,0.6,0.8).s().p("AgEgBQADgGAFgDQADAHgDAFQgCAHgGACQgCgHACgFg");
	this.shape_437.setTransform(358.4,302.625);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.8,0.6,0.8).s().p("AgJAFQAAgEADgDIAEgFQAFgFAGAAIgGALIAIAAQgFAFgJAGIgHADg");
	this.shape_438.setTransform(361.525,301.925);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-0.9,0.7,0.9).s().p("AgNgBQAGgEAFgBQANgEALAEQgJAFgNADIgKADIgKAEQAAgHAHgDg");
	this.shape_439.setTransform(367,297.8125);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.5,0.6).s().p("AgJgCIAEgFQADgCACAAIAJAAIAHgEQgBAGgCAFIgBABIgDAAIgHABIgCAAIgGAJQgFAEgEABIAGgQg");
	this.shape_440.setTransform(373.925,297.25);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.7,0.6,0.9).s().p("AgLAEIgBgCQABgCADgCQADgDAFAAQAHAAAGAFQgFADgIABIgFAAIgCAAIgBAAIgBACg");
	this.shape_441.setTransform(378.625,291.025);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-1,0.8,0.9).s().p("AAAAFQgIgDgDgFQAFgCAHABIAGACIABABIACAAIACABIgBACIgBABIgBABIgDABIgEAAIgCAAg");
	this.shape_442.setTransform(380.925,288.2107);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.4,0.5).s().p("AgJACQgBgEAFgEQAFgDADABQAFABACAEIgKAEIgBACIgDAGQgEgCgBgFg");
	this.shape_443.setTransform(383.0917,286.2857);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.6,0.7).s().p("AgIAEIAEgHQAGgIAJgCQgBAIgHAHQgDAEgCACIgHAGQgCgFADgFg");
	this.shape_444.setTransform(353.36,313.825);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.6,0.5,0.7).s().p("AgLAHIgBgBIAAgCIAEgEIAGgEQAIgDAHACQgDAFgJAFIgGACIgEAAIABgBIgBABIgBAAg");
	this.shape_445.setTransform(372.675,296.9479);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.9,0.7,0.9).s().p("AgEAAQABgGAFgEQADAEAAAHQgCAHgDADQgFgFABgGg");
	this.shape_446.setTransform(359.7909,309.425);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.9,-1,0.4,0.7).s().p("AgIAHQgBgEACgDIADgGQAEgGAFgDIgDANIAAABIAIgDQgDAHgIAHIgGAGg");
	this.shape_447.setTransform(362.6938,307.975);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.6,0.4,0.5).s().p("AgNABQADgDAGgEQAMgHALABQgGAHgNAHIgIAFQgGADgEADQgBgFAGgHg");
	this.shape_448.setTransform(366.9173,302.6875);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.9,0.7,0.9).s().p("AgJAAIACgFQADgDADgBQACgBAFAAIAGgGIAAALIgBABIgDABIgGADIgCAAIAAADIgEAIQgEAFgDABIACgRg");
	this.shape_449.setTransform(373.4875,300.325);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.6,0.5,0.7).s().p("AgKAGIgBgCQAAgDACgCQACgCAFgCQAHgDAHAFQgEADgIADIgEACIgCAAIgBAAIAAACg");
	this.shape_450.setTransform(376.4958,293.2304);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.9,0.7,0.8).s().p("AgLAAQAEgDAIgBIAGABIABAAIAAAAIACAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIgBABIgBACIgCABIgHABQgIAAgEgFg");
	this.shape_451.setTransform(377.95,289.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.8,0.5,0.5).s().p("AgIAEQgCgEAEgFQADgEAEAAQAEAAAEADIgFAEIgDACIgBADIgBAHQgEgCgDgEg");
	this.shape_452.setTransform(379.5636,287.4714);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-1,0.7,0.9).s().p("AgHAGIADgIQAEgJAIgEQAAAJgEAIIgEAHIgGAHQgCgEABgGg");
	this.shape_453.setTransform(385.6583,284.175);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-0.9,0.8,1).s().p("AgEABQAAgHAEgFQAFAGAAAFQABAGgFAGQgEgFgBgGg");
	this.shape_454.setTransform(391.0583,278.55);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1,-1.2,0.5,0.9).s().p("AgGAJIgBgJIABgFQAEgHADgEIAAAOIAIgEQgDAIgFAIIgFAHg");
	this.shape_455.setTransform(393.6,276.575);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.7,0.5,0.6).s().p("AgMAEQACgEAFgFQAJgJAMgCQgEAIgLAJIgHAIIgIAIQgDgGAFgHg");
	this.shape_456.setTransform(396.6304,270.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.4,0.3,1.4).s().p("AgJAEIAFgHQAIgIAHgBQgBAHgHAIIgGAFIgHAFQgBgDACgGg");
	this.shape_457.setTransform(375.7107,288.375);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.7,0.2,0.8).s().p("AgMAGIAAgDIABgBIADgCIAHgEQAHgDAIADQgFAGgIACIgGACIgEAAIAAAAIAAAAIgCABg");
	this.shape_458.setTransform(395.6917,272.3432);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.2,0.2,1.2).s().p("AgEAAQACgGAEgEQAEAGgBAFQgCAHgEADQgEgEABgHg");
	this.shape_459.setTransform(382.3,284.25);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-1.7,0.2,1.3).s().p("AgJAHQAAgFABgCIAEgGQAEgHAFgBIgDAMIAAAAIAIgBQgEAGgHAHIgHAFg");
	this.shape_460.setTransform(385.2688,282.925);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.2,0.2,1.1).s().p("AgNAAQAEgDAGgDQAMgGALABQgFAFgOAIIgJAFIgKAFQgBgGAGgGg");
	this.shape_461.setTransform(389.6981,277.8179);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-1.6,0.3,1.8).s().p("AgJAAIACgFQACgDAEgBQADgCAFABIAFgGIAAAMIgBABIgDAAIgGADIgCAAIgFALQgCAEgFACQABgMACgFg");
	this.shape_462.setTransform(396.3583,275.75);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#8F8777").s().p("AgEgCQAFgJAIABQgBAHgFAFIgIAJQgGgFAHgIg");
	this.shape_463.setTransform(374.931,284.8736);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#8F8777").s().p("AgNAFIAAAAIgBAAIgDgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQARgJARAIQgLAGgNAAIgHAAg");
	this.shape_464.setTransform(394.5083,272.7606);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#8F8777").s().p("AgFgKQAOAFgDAQQgOgGADgPg");
	this.shape_465.setTransform(382.475,282.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#8F8777").s().p("AgLgBQACgIAFgCQABAJACADQAHgBAGAAQgEAHgLAFQgJgGABgHg");
	this.shape_466.setTransform(386.3447,281.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#8F8777").s().p("AgVAGIABgEQAIgHAMgDQALgCALAEQgKAGgXAEQgIADgBACQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAg");
	this.shape_467.setTransform(389.2188,277.0136);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#8F8777").s().p("AgJAHQgFgHACgFQADgFAJAAIAFABIABgEIAHAMIgQABIABAGQAAAGgDADg");
	this.shape_468.setTransform(398.5714,276.45);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#8F8777").s().p("AgPADQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAgBQAOgGAPAJQgLAFgPgBIABACQgGAAgBgDg");
	this.shape_469.setTransform(398.0679,269.955);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#8F8777").s().p("AgTgCQAPgFASAGIAFABIABABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgLABQgMAAgNgHg");
	this.shape_470.setTransform(397.6333,266.9766);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#8F8777").s().p("AgDgEQAJgIAOgCQgHAJgLAIIgVAMQADgMANgHg");
	this.shape_471.setTransform(352.7,301.15);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#8F8777").s().p("AgQAFIAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABgBQARgJAUAIQgLAHgRAAIgIgBg");
	this.shape_472.setTransform(385.4357,285.2317);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#8F8777").s().p("AAGgOQAEASgPALQgEgSAPgLg");
	this.shape_473.setTransform(363.15,297.575);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#8F8777").s().p("AgNAJQACgSAWgHIgLASQAHgCAIAAQgIAHgVAKg");
	this.shape_474.setTransform(367.775,296.475);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#8F8777").s().p("AgEgIQARgFASAEQgKAFgVAEQgUAFgKAGQAGgOAUgFg");
	this.shape_475.setTransform(375.4,290.9611);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#8F8777").s().p("AgPAFQAEgIAFgFQAGgGANAEIAJgJQgBAHgFAKIgOAAQgDABgDAEIgHAJQgGAHgEABIAGgPg");
	this.shape_476.setTransform(385.425,290.375);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#8F8777").s().p("AgRABQABgDAEgBQAOgIAQALQgHACgJABIgOAAIgCAEQgEgCABgEg");
	this.shape_477.setTransform(392.0139,281.573);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#8F8777").s().p("AgQgEQAJgCAKADIAJADIAAgBQAHABgCAEQgCACgFAAIgCAAQgOAAgKgKg");
	this.shape_478.setTransform(395.0813,277.4387);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#8F8777").s().p("AgHgHQAKgKALALQgMADgDADQgCABgBAEIgDAIQgMgMAMgIg");
	this.shape_479.setTransform(398.2936,274.8299);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#8F8777").s().p("AgDgEQAHgGAKAAQgHAOgUAHQABgKAJgFg");
	this.shape_480.setTransform(349.325,309.825);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#8F8777").s().p("AgKAEIAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQANgJAOAIQgIAGgJAAIgHgBg");
	this.shape_481.setTransform(372.2167,298.2503);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#8F8777").s().p("AAEgKQAGAOgNAGQgFgMAMgIg");
	this.shape_482.setTransform(356.635,307.15);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#8F8777").s().p("AgGgCQAGgJAJgBIgGALIAIAAQgFAGgQAJQABgOADgCg");
	this.shape_483.setTransform(359.725,306.45);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#8F8777").s().p("AgCgGQAMgEAMAEQgJAGgNACIgUAHQADgLAPgEg");
	this.shape_484.setTransform(365.2,302.325);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#8F8777").s().p("AgLACQACgEAEgEQAFgGAIAEIAIgFQgBAFgDAHIgKABIgCAAIgGAIQgEAFgFABIAEgMg");
	this.shape_485.setTransform(372.175,301.8);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#8F8777").s().p("AgKAFQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABAAQAAgCADgCQALgHAKAJQgKAGgKgCIgBAAIgBACIgBgBg");
	this.shape_486.setTransform(376.8438,295.534);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#8F8777").s().p("AAAAFQgHgCgEgFQAJgFAJAFIABABQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgDACgFAAIgEAAg");
	this.shape_487.setTransform(379.1321,292.7268);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#8F8777").s().p("AgJACQgBgHAIgCQAIgDAEAHQgJADgCADIgDAGQgEgDgBgEg");
	this.shape_488.setTransform(381.3138,290.83);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().ls(["#4C473C","#3C3124"],[0.42,0.855],-4.2,-9.6,12.5,12.8).p("AE+lgQg3BMhRBeQikC6iIBZQgOAPgUAPQgoAegbgDQgRAGgQAMQgfAaAGAkIgnA7IBMBKQA9gQBkhIQDGiQC+kUg");
	this.shape_489.setTransform(376.3883,281.8033);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#7B6D5F").s().p("Ak8EcIAmg7QgGglAggZQAQgMARgGQAaADAogeQAUgPAPgQQCIhXCji7QBSheA2hMIgIDPQi+EUjGCQQhkBIg+AQg");
	this.shape_490.setTransform(376.425,282.35);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIgBQAJABAGAGQAHAGgBAIQABAJgHAGQgGAGgJABQgIgBgGgGg");
	this.shape_491.setTransform(241.7,355.05);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_492.setTransform(297.2,373.85);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAIABAHAGQAHAGAAAIQAAAJgHAGQgHAHgIAAQgIAAgGgHg");
	this.shape_493.setTransform(311.65,371.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAIgBAHAHQAHAGAAAIQAAAJgHAHQgHAFgIAAQgIAAgGgFg");
	this.shape_494.setTransform(327.85,368.15);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAHAHQAFAGABAIQgBAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_495.setTransform(340,364.25);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_496.setTransform(350.7,360.25);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_497.setTransform(361.35,353.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_498.setTransform(372.75,347.55);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_499.setTransform(382.05,339.95);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_500.setTransform(391.775,332.2);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_501.setTransform(398.725,322.7);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_502.setTransform(82.8,360.1);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_503.setTransform(90.825,362.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_504.setTransform(98.9,364.95);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAHAHQAFAGABAIQgBAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_505.setTransform(108.6,367.125);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_506.setTransform(119.05,368.15);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_507.setTransform(129,369.275);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_508.setTransform(138.6,369.375);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_509.setTransform(148,369.275);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_510.setTransform(178.25,370.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_511.setTransform(189.825,370.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_512.setTransform(199.7,370.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_513.setTransform(210.05,370.3);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_514.setTransform(220.7,370.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_515.setTransform(231.8,369.35);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_516.setTransform(242.45,369.35);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_517.setTransform(254,369.275);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_518.setTransform(264.825,368.15);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_519.setTransform(274.075,368.15);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_520.setTransform(285.475,367.125);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAIgFAHQgHAHgJAAQgIAAgGgHg");
	this.shape_521.setTransform(295.8,366);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_522.setTransform(306.45,364.95);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_523.setTransform(316.65,362.8);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAIAAAHAHQAHAGAAAIQAAAJgHAGQgHAHgIgBQgIABgGgHg");
	this.shape_524.setTransform(327.85,360.65);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_525.setTransform(340,357.2);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_526.setTransform(352.25,351.475);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_527.setTransform(361.35,345.075);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHAAgIQAAgIAHgGQAHgGAHAAQAJAAAHAGQAFAGAAAIQAAAIgFAHQgHAHgJAAQgHAAgHgHg");
	this.shape_528.setTransform(372.9,338.2);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_529.setTransform(382.675,330.8);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_530.setTransform(390.75,322.7);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAHgHAHABQAJgBAHAHQAFAGABAIQgBAJgFAHQgHAFgJAAQgHAAgHgFg");
	this.shape_531.setTransform(397.6,314.05);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAIgFAHQgHAHgJAAQgIAAgGgHg");
	this.shape_532.setTransform(41.55,332.7);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAIgBAHAHQAHAGAAAIQAAAJgHAHQgHAFgIAAQgIAAgGgFg");
	this.shape_533.setTransform(49.3,337.55);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_534.setTransform(56.9,341.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAHAGQAFAGABAIQgBAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_535.setTransform(64.5,346.05);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgHAHgHQAGgGAIAAQAJAAAGAGQAHAHAAAHQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_536.setTransform(72.725,348.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_537.setTransform(80.95,351.475);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_538.setTransform(89.45,353.8);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_539.setTransform(108.6,357.2);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAGgJABQgIgBgGgGg");
	this.shape_540.setTransform(129,359.35);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_541.setTransform(136.45,359.95);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_542.setTransform(147.25,359.95);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAHgHAHABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgHAAgHgFg");
	this.shape_543.setTransform(156.5,359.95);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_544.setTransform(166.4,360.65);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_545.setTransform(177.2,360.65);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_546.setTransform(199.1,359.95);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAGQgGAGgJABQgIgBgGgGg");
	this.shape_547.setTransform(220.7,359.35);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJABQgIgBgGgGg");
	this.shape_548.setTransform(241.375,359.35);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAHgHAHABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgHAAgHgFg");
	this.shape_549.setTransform(262.65,350.15);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIAAQAIAAAHAGQAHAGgBAIQABAJgHAGQgHAHgIAAQgIAAgGgHg");
	this.shape_550.setTransform(263.75,357.2);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_551.setTransform(284.4,355.975);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAHAGQAFAGABAIQgBAJgFAGQgHAGgJABQgIgBgGgGg");
	this.shape_552.setTransform(295.8,355.05);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_553.setTransform(306.45,353.8);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_554.setTransform(317.25,352.95);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_555.setTransform(326.7,350.8);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_556.setTransform(338.8,346.55);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_557.setTransform(350.1,342.1);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_558.setTransform(361.35,336.025);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAHgGAHgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJgBQgHABgHgHg");
	this.shape_559.setTransform(372.9,329.5);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_560.setTransform(382.675,320.55);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_561.setTransform(391.775,311.75);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_562.setTransform(399.775,300.975);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_563.setTransform(39.675,323.75);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_564.setTransform(47.125,328.05);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_565.setTransform(55.75,332.375);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_566.setTransform(338.8,323.45);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_567.setTransform(346.075,320.2);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_568.setTransform(325.675,342.9);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAGAGABAIQgBAJgGAHQgGAFgJAAQgIAAgGgFg");
	this.shape_569.setTransform(334.6,337);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_570.setTransform(351.025,331.65);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJABQgIgBgGgGg");
	this.shape_571.setTransform(361.35,325.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgHAHgHQAGgHAIAAQAJAAAHAHQAFAHAAAHQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_572.setTransform(372,318.8);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_573.setTransform(380.525,311.75);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_574.setTransform(387.825,303.975);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_575.setTransform(394.775,296.1);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.rf(["#020203","#494645"],[0.204,0.91],0.5,-0.1,0,0.5,-0.1,43.5).s().p("AosD1IAAgGQCagUB9giQCRgnB8g3QCEg8ByhOQA5gpA1gwQA/g7AfgvIABgBIBzgBQhJCBiPBjQh6BUifA6QiHAyioAgQhEANhYALQhWAKhIADgAFhiDQgxAvg9AsQg7Apg/AiQhEAmg7AYIhCAbIhEAYIhDAVIhFATQhpAchqASQBvgKCEgZQCggfCNgzQCjg8B2hPQBDgtA2g2QAfggAWgaQAWgdAXgjIhwAEIABgBIgCABIABAAQgfAwg9A8g");
	this.shape_576.setTransform(346.45,372.425);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.rf(["#020203","#494645"],[0.204,0.91],0,0,0,0,0,43).s().p("ADpgmQCahrA5hfIBxgCQirEfnoCAQiZAoimATIiHALQHihCEzjXg");
	this.shape_577.setTransform(346.475,372.325);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#291C13").s().p("AoJFvIApgBIhZgCQlsgIBxhFQAzgeLYitQLDinAlgoQA8iMAhhFQBDiLiCFhIByAAQi0FoplBjQi+AejTABg");
	this.shape_578.setTransform(317.4525,359.9115);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgHAAAAgJQAAgHAHAAQAEAAACACQADADAAACg");
	this.shape_579.setTransform(397.9,346.55);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#F4F4F2").s().p("AgHAAQgBgIAIAAQAEABACACQADACAAADQAAAEgDACQgCACgEAAQgIAAABgIg");
	this.shape_580.setTransform(397.9,346.55);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgHAAAAgJQAAgHAHAAQAEAAACACQADADAAACg");
	this.shape_581.setTransform(397.9,334.65);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#F4F4F2").s().p("AgHAAQgBgHAIAAQAEgBACADQADADAAACQAAAEgDACQgCACgEABQgIAAABgJg");
	this.shape_582.setTransform(397.9,334.65);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgCAAgDgDQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADg");
	this.shape_583.setTransform(394.3,341.25);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgDACgCQADgCACgBQAEABACACQADACAAADQAAADgDADQgCADgEgBQgCABgDgDg");
	this.shape_584.setTransform(394.3,341.25);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgDAAgCgDQgCgCAAgEQAAgCACgDQACgCADAAQAIAAAAAHg");
	this.shape_585.setTransform(392.625,346.55);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQAIAAAAAIQAAAIgIAAQgDAAgCgCg");
	this.shape_586.setTransform(392.625,346.55);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#1E1E1C").p("AgCoJIBZAAIATAsQAaAtAkAIIgCBpQgFCCgTB8Qg7GMioC/IhPAAQBCiJA1jHQBqmOg/k1g");
	this.shape_587.setTransform(410.8056,292.325);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#1E1E1D").s().p("AimIKQBDiJA1jHQBpmOg+k1IBYAAIAUAsQAaAtAjAIIgBBpQgGCCgSB8Qg8GMinC/g");
	this.shape_588.setTransform(410.95,292.325);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#4A4233").p("AgYolIARBMQAQBlgDB3QgIF7jHGpIB3AAQBGhFBGieQCOk8AFm8QgLgBgUgOQgogegshEg");
	this.shape_589.setTransform(410.9843,292.4);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#4B4333").s().p("AjLInQDHmpAIl8QADh2gPhlIgRhNIBxAAQAtBFAoAdQAUAPALABQgFG8iOE8QhGCdhGBGg");
	this.shape_590.setTransform(411.125,292.4);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#291C13").s().p("AntG4QjDAAiEgMQmMgljrhmQhKgggwgjIioiVIhdhpIgag9IgchrQEiDSFQBjQCoAyBuAHQGxAvLegdQFvgPEZgYQG8gbFgkZQCwiNBWiHQhHDhg6BqQgcA1gPAIQjaETntCBQiaAoijAVIiEANIqKACQj5AHiGAAIgRAAg");
	this.shape_591.setTransform(215.575,352.7766);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.lf(["#44301F","#411B14"],[0,0.204],-1.4,20.6,-13.6,403.2).s().p("A3+DlQihhFh3hXIhWhJIgQhYQC5CSDHBdQBkAvA+ARQFdBtO7gZQHcgNGYgiQH5gjFck8QBthjBPh0QAog5ASgmIgpCzQjnFEmNCgQh9Ayh9AcIhlASQiGAboSAPIn2ALQh/AHh5AAQpNAAmsi1g");
	this.shape_592.setTransform(216.775,332.6835);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#3C3123").p("AwyGAICFAKQCnALClAHQITAXFLgeID6gQQETgUB+gTIBtgLQCHgUCDgzQGkiiDhmUIgDhuQhKCDiGCMQkNEYkxAxQkKAzmuAhQtcBDs0hXQh8gjiUg8Qkoh3h1h9IAFA7QAIA7ALAHQAFADBLA4QBdBCBfA1QEwCpD8gFg");
	this.shape_593.setTransform(216.0597,320.9562);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.lf(["#2F271D","#020203"],[0.059,0.263],0,0.9,-1.8,385.1).s().p("ApiGWQilgHimgMIiFgKQj8AFkwioQhfg1hdhCIhQg8QgMgHgHg7IgGg6QB2B8EoB4QCTA8B9AiQM0BYNbhDQGugiEKgzQEygwEMkYQCHiNBJiDIAEBvQjiGTmkCjQiDAziHAUIhtAKQh+ATkTAUIj5ARQi9ARj7AAQjBAAjmgKg");
	this.shape_594.setTransform(216.125,321.6118);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().ls(["#3C3123","#3C3124"],[0.42,0.855],1,-84.6,-3.8,79.7).p("A+dmiIAREsQAdEJA+CfIA4gmIAVAYQAbAeAlAgQB1BmCkBUQIMELMXgYIJPACICJgJQCqgRChgmQIDh8DsknIAjgIQBLifA8jRQB3mlhIkBIABDqQhJCCiBCOQkDEbkbA9QhgAUiiAXQlGAvlNARQwsA4r1kEQhLguhWhMQisiYg2iRg");
	this.shape_595.setTransform(216.5692,318.1261);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.lf(["#3C3123","#020203"],[0,0.125],0.3,-1.4,3.1,388.5).s().p("AhoL/QsXAYoMkLQikhUh1hmQglgggbgeIgVgYIg4AmQg+ifgdkJIgRksQA2CRCsCYQBWBMBLAvQL1EDQsg4QFNgRFGgvQCigXBggUQEbg9EDkbQCBiOBJiCIgBjqQBIEBh3GlQg8DRhLCfIgjAIQjsEnoDB8QihAmiqARIiJAJg");
	this.shape_596.setTransform(216.5688,319.725);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#1D1D1C").p("EAg/gPjQgCgUAGgPQAMgeAqAYIASAMQASAQgEAWIgDAcQgHAggYANIAAAXIAZgDQAcgHAQgXIAKAIQAGANgUAaQgGAIgNAGQgZALgggLIAAARIAIAIQAFANgJAWQgIAEgKACQgVADgOgJQAAgFgFgHQgKgMgUgHQgUAAgWADQgrAFgHAOIgLAOQgGAPAbAIIALAKQAGANgZAQQgJgBgJADQgTAIgEAXIACBTQALBYAoAbIAUATQAbAYAgAaIAABHQgBBYgJBQIgrDdQg7D6hPCKQgpBahVBtQirDZjhBbQgrAZhlAcQjJA6kgARI5ygLQhjgPiHgaQkRg1iehEQhLgghfhMQi+iZhjjeQgagqgbhXQg1iwgDjlIASj0QgbACgbgMQg1gYgBhIQgBgXALgVQAWgpA4AOIAvANQAKgUANgTQAbglAUAJIAsALIgbAnQgcApAAALIANAUQALAYgHARIgDENIA4AtQA+A0AcAlIBKBWQBgBiB0A6IAkAQQAwAUA+ATQDIA9ELAiQNWBuS1jIIA3gmQA7gtAXgkQgEgNADgSQAGgkAjgUICjhpQCwh9BGheICmjAIgDlOQABgQADgWQAIgsAMgfIgjAAQgPgKgKgPQgVgeAZgVIAoAAQArgBAUgGIARgLQAUgMASgFQA7gRAXAzg");
	this.shape_597.setTransform(225.8931,291.8339);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#1D1D1C").s().p("AubQNQhjgPiHgaQkRg1iehEQhLgghfhMQi+iZhjjeQgagqgbhXQg1iwgDjlIASj0QgbACgbgMQg1gYgBhIQgBgXALgVQAWgpA4AOIAvANQAKgUANgTQAbglAUAJIAsALIgbAnQgcApAAALIANAUQALAYgHARIgDENIA4AtQA+A0AcAlIBKBWQBgBiB0A6IAkAQQAwAUA+ATQDIA9ELAiQNWBuS1jIIA3gmQA7gtAXgkQgEgNADgSQAGgkAjgUICjhpQCwh9BGheICmjAIgDlOQABgQADgWQAIgsAMgfIgjAAQgPgKgKgPQgVgeAZgVIAoAAQArgBAUgGIARgLQAUgMASgFQA7gRAXAzIBYAAQgCgUAGgPQAMgeAqAYIASAMQASAQgEAWIgDAcQgHAggYANIAAAXIAZgDQAcgHAQgXIAKAIQAGANgUAaQgGAIgNAGQgZALgggLIAAARIAIAIQAFANgJAWQgIAEgKACQgVADgOgJQAAgFgFgHQgKgMgUgHQgUAAgWADQgrAFgHAOIgLAOQgGAPAbAIIALAKQAGANgZAQQgJgBgJADQgTAIgEAXIACBTQALBYAoAbIAUATQAbAYAgAaIAABHQgBBYgJBQIgrDdQg7D6hPCKQgpBahVBtQirDZjhBbQgrAZhlAcQjJA6kgARg");
	this.shape_598.setTransform(225.8931,291.8339);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#020203").p("AVfAVQiFADiwgDQlfgIjXgkInlASQoqAPijAHIqgAH");
	this.shape_599.setTransform(204.6288,309.0242);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#020203").p("A2lAoQGBAIAJgIQABgBELgUQEigUBqgXIDfgOQDngMAuAPIDEAUQDQASA8gDINkAT");
	this.shape_600.setTransform(202.8506,302.2007);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().ls(["#4C473C","#020203"],[0.42,1],-3.3,0,3.3,0).p("AAcAAQAAAMgIAJQgJAJgLAAQgKAAgJgJQgIgJAAgMQAAgMAIgIQAJgJAKAAQALAAAJAJQAIAIAAAMg");
	this.shape_601.setTransform(393.5,254.625);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.lf(["#4C473C","#020203"],[0.42,1],-2.8,0,2.8,0).s().p("AgTAVQgIgJAAgMQAAgMAIgIQAJgJAKAAQAMAAAIAJQAIAIAAAMQAAAMgIAJQgIAJgMAAQgKAAgJgJg");
	this.shape_602.setTransform(393.5,254.625);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().ls(["#4C473C","#020203"],[0.42,1],-4.7,0,4.8,0).p("AgqAAQAAASANAMQAMANARAAQASAAAMgNQANgMAAgSQAAgQgNgNQgMgNgSAAQgRAAgMANQgNANAAAQg");
	this.shape_603.setTransform(393.9,257.125);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.lf(["#4C473C","#020203"],[0.42,1],-4.2,0,4.3,0).s().p("AgdAeQgNgMAAgSQAAgQANgNQAMgNARAAQARAAANANQANANAAAQQAAASgNAMQgNANgRAAQgRAAgMgNg");
	this.shape_604.setTransform(393.9,257.125);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#1D1D1C").s().p("AKZN5IgzhOQgHgTgSgYIghglIhGhLQgLgVgUgdIgjgvIhqiPQhJhfgigwIkZl+Qghgzgzg9IhbhpQgogthEhHIhrhxQg/hYhMh7IhqixIBtCuQBOB7BABXIBsBwQBCBFApAuIBdBqQA0A+AgAxIFeHeQBWByA4BNIAjAyQAUAcAKAXQATARAyA4IAgAnQARAWAIAWIAxBMQAWAiAWAYQgWgYgXggg");
	this.shape_605.setTransform(318.325,157.8);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#1D1D1C").s().p("ArlJHICniIIAZgTQArghCKhxIDNipQAQgVAigeIA7gwQCFhsDZihQARgIAWgOIAmgYQBuhOCLhtID0jEQijCJhOA+QiHBuhxBQQg2AmgWAJQjeClh/BoQgSAQgnAfQghAcgTAYIjOCoQh2BghAAxQgXARgFADIimCEIh+Bkg");
	this.shape_606.setTransform(139.275,209.95);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().ls(["#8E7059","#4B3218"],[0,1],-54.8,0.1,58.8,0.1).p("ABhwqQgBgLACgJABhwqIgCA7QgCBTADAVQgbgegggsQg/hZgYhJIgBASQgBATABADIAwCdQA2C8AhCdIAYDHQATDpgcCtIgMA8QgQBKgUBHQhBDkhYBzQgoBGhCBeQiGC7iGB3IhEAxQB0g/B+hCQD7iFAzgRIAjgPQAqgRAhgEQBpgPgaBuIgLAfQgPAmgVAnQgnBHgxA3QAagUAcgXQC2iaBci7QAjg1AphZQBTizAei4QAHg1AEhKQAGiTgRhoQACgngShlQgkjJhhk3IAJArQAGAwgKAhQgJgFgQgdQgig6gph3IAOBEQANBGgHARQgZgYgbgjQg1hHgFg8IgDAoQAAAxAQAtQgqgugog5QhChdgFg0gAA2RBQglApgqAgIgeAAQAygbA7gug");
	this.shape_607.setTransform(233.6992,191.1814);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.lf(["#8E7059","#4B3218"],[0.576,1],-56.4,0,56.4,0).s().p("AhKR/QAygbA6guQgjApgrAggAB7O4QAVgnAPgmIALgfQAZhuhpAPQghAEgpARIgjAPQgzARj8CFQh+BChzA/IBEgxQCGh3CFi7QBDheAohGQBYhzBAjkQAVhHAQhKIALg7QAciugTjpIgYjHQggidg2i8IgxidQgBgDABgTIABgSQAYBJA/BZQAgAsAcAeQgDgVAChTIACg7QAFA0BBBdQAoA5AqAuQgPgtgBgxIADgoQAGA8A1BHQAaAjAaAYQAGgRgNhGIgOhEQAqB3AhA6QARAdAIAFQAKghgGgwIgIgrQBhE3AkDJQARBlgBAnQARBogHCTQgDBKgHA1QgfC4hSCzQgpBZgkA1QhcC7i2CaQgcAXgaAUQAyg3AnhHg");
	this.shape_608.setTransform(235.6149,192.275);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#6C4E3C").p("AgUAZIAQACQARgBADgPQACgKgCgJQgDgTgOABIgCAOQgEARgNAUg");
	this.shape_609.setTransform(276.5824,112.2455);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#6B4E3C").s().p("AgSAZQANgUAEgRIABgOQAPgBADATQACAJgCAKQgDAPgRABg");
	this.shape_610.setTransform(276.3625,112.2446);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#6B4E3C").p("AkVjXIANAaQAHAdgjAOIAqAsQA1A2A+AxQDHCfDRA3QAKgLAHgPQAOgegQgPQhMhMhthSQjZilijgkg");
	this.shape_611.setTransform(246.7283,93.3315);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#6B4D3C").s().p("AiJABQg+gxg1g2IgqgsQAjgOgHgdIgNgaQCjAkDZCmQBtBRBMBMQAQAPgOAeQgHAPgKALQjRg3jHifg");
	this.shape_612.setTransform(246.9142,93.3);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#6B4E3C").p("AALggQgLgCgKAEQgWAJgBAcIAHAOQAKAOARgCIARgDQARgIgCgWQACgFgCgIQgEgPgSgEg");
	this.shape_613.setTransform(216.8811,74.9046);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#6B4D3C").s().p("AgaAVIgHgOQABgcAWgJQAKgEALACQASAEAEAPQACAIgCAFQACAWgRAIIgRADIgDAAQgPAAgJgMg");
	this.shape_614.setTransform(216.8821,74.9046);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().ls(["#8E7059","#4B3218"],[0,1],17.4,-163,-7.7,162.9).p("AB35XQgfD6ggEXQhAIvgJCUIijfRIBUgJQBbgEAhAVIBG8CQAclNAXlbQAvq2gUhNQgcAKgdgKg");
	this.shape_615.setTransform(228.3877,169.8816);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.lf(["#8E7059","#4B3218"],[0,1],7.7,-38.2,2.4,31.4).s().p("AhhZGIhUAJICk/RQAJiUA/ovQAhkXAej6QAeAKAbgKQAVBNgvK2QgYFbgcFNIhFcCQgigVhbAEg");
	this.shape_616.setTransform(228.4113,169.775);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.rf(["#BEAA9E","#87764C"],[0.467,1],0,0,0,0,0,26.2).s().p("AAlBYQgWgCgXgBQgxgDgLAIQgOAGgWABQgqAEgkgRQgXgBgfACQg9ADgkAMQgJgBgCgDQgGgGAfgJIAugSQA5gQA6AHIAgAFQAsAAA1gVICdAAIAdgJQAbgMgPgRQh5APgMgPQhQgCgSAIQgUAEgXACQgwAFgWgJQgXgEgeABQg7AAggASQgOAEgKABQgVADAQgLIAogXQAygaAwgFIBBAAQBIgEAggTQCigDAQgKIAngJQAwgHArAHIAfAAQAkgEAWgQIAAA1QgYgDgXAEQgtAIAEAlIABALQADANAHAKQAVAeA4gXIAAAvIhPgDQhRgCgFAFQgQAHgbADQgPACgQAAQgnAAgpgMg");
	this.shape_617.setTransform(204.6291,22.3668);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#8E705A").p("AgDgiQgiAJgSANQgiAaBWAVIAVgFQAYgFAMgHQAngXhggdg");
	this.shape_618.setTransform(243.4674,4.3561);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#8E7059").s().p("Ag3gMQASgNAigJQBgAegnAWQgMAHgYAFIgVAFQhWgVAigag");
	this.shape_619.setTransform(243.4674,4.35);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().ls(["#281F17","#020203"],[0.42,1],-16.7,0,16.8,0).p("AgSgUICqAAIAJALQAGAOgPAUIi6gOIgJAFQgJAHADALIACASQgDAUgaAHIgXgLIgagaQgQglgTgRQASgZAUgTQAngnAHAfIAMAQQASATAcAJg");
	this.shape_620.setTransform(56.1803,289.5399);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.lf(["#281F17","#020203"],[0.42,1],-16.2,0,16.2,0).s().p("AhkBEIgagaQgQglgTgRQASgZAUgTQAngnAHAfIAMAQQASATAcAJICqAAIAJALQAGAOgPAUIi6gOIgJAFQgJAHADALIACASQgDAUgaAHg");
	this.shape_621.setTransform(56.2607,289.5259);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#1D1D1C").p("AMrwVQjIENjOENQmbIagZAAIhuB8QhyCFgSArIhVB6QhlCRhPB2Ih0CaQh6CdghAR");
	this.shape_622.setTransform(134.7256,182.8508);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#1D1D1C").s().p("AKzLQQgXgZgsggQgtgzhBg9Ih1hqQgigYg1gzQhuhsh6iPQgZgTgcgbIgwgzQh2h9ifi9QhHhViSilIjej7QDuECCaCvIB1CJQBHBSAxA3IBeBlQA2A7AtAlICZCrQBYBgBNA+QBnBdBFBFQAmAnAPATQAPALAUARQAeAcAQAUQAXAdAKAdQgOgmgjgkg");
	this.shape_623.setTransform(321.75,174.375);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAIAAAHAHQAHAGAAAIQAAAJgHAGQgHAHgIAAQgIAAgGgHg");
	this.shape_624.setTransform(32.55,326.325);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHAAgIQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAIgHAHQgGAHgJgBQgIABgGgHg");
	this.shape_625.setTransform(33.5,334.85);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_626.setTransform(33.5,291.625);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_627.setTransform(27.225,282.2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#584D38").s().p("AAVAHIgVgBQghABgKgNQAIADANADIAWADQAGACAPgCQAPgBAIACQgIADgLAAIgEAAg");
	this.shape_628.setTransform(442.75,204.4536);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#584D38").s().p("AglAEIgLgGIAMACIAaAGQANACALgCQAMgEAYgLQgLAOgYADQgNACgJAAQgRAAgNgGg");
	this.shape_629.setTransform(443.95,202.8493);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#836D5D").s().p("AgUAaIgUAAIgdgbIAaADIgXgYIA7AWQAVADAVgHQAWgIANgRQgMAUgWAJQgVAKgXgDIgZgHIAQAQIgXgDIAEAEIARAAQAjAJAYgJQAegLAAgjQAEAlgfAOQgQAIgTAAQgNAAgPgEg");
	this.shape_630.setTransform(442.9475,202.7634);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#836D5D").s().p("AguAYIgQgQIAZAEIgTgTIAqANQAgAEAagRQANgJAGgKQAAAugtAHg");
	this.shape_631.setTransform(443.6503,202.5);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#53554D").s().p("AhIAcQAdgcAvgdQAQgBAcgIIAsgOQgVALgWAKQgcALgNAAQgvAegdAWQgOALgJAKQAGgLANgOg");
	this.shape_632.setTransform(426.3,198.35);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#322A20").s().p("Ag7BBQgQgBgRgKQgYgUABgbQACgXAXgYQBOgkBFATQAVAEAZAQQAGABADAHQAEAHgBAGQAAgGgDgGQgEgFgGgCIgigNQgjgKgsAGQgnAFghAPQgVAVgCASQgCALAGANQAFALAIAHQARALAMACQATACgBgTQADAUgSAAIgCAAg");
	this.shape_633.setTransform(428.9056,210.6383);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#322A20").s().p("AgmAVQAjgMBDAAQAogGALgUQAKgVgUgfQgKANgKACQgNACgDgWQAFAUALgDQAIgCAKgRIACgCQAeAjgMAcQgLAaguAIIg6ACQghACgWAIQgTAHgWAOIgmAbQAtgsArgOg");
	this.shape_634.setTransform(430.8593,197.65);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#433520").s().p("AggAWQgNgIgEgMQgBgFACgLQABALADADQAIARAdADIAPgHQAWgNAUgdQgGAVgPAPQgQARgUAGQgOgBgLgHg");
	this.shape_635.setTransform(408.7679,196.075);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#433520").s().p("AgpAxQgQgCgEgPQgEgSAAgIQgCgMAFgNQAhgcAkgBQAqgCAQAoQADAFgDAEQgDACgHAAQgHgQgRgHQgRgHgPAJQgYAPAOAwIgDABQgKAGgLAAIgGgBgAAGgoQgWAEglAWQgHAOAHAeQADALAMABQAJABAKgEQgLgwAbgPQAQgJASAJQASAHAHARQAGAAACgCQADgDgDgFQgOgggfAAIgNACg");
	this.shape_636.setTransform(421.2063,193.5925);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#494539").p("AABATQgdAAAPgSQAHgHAMgJIAMAQQAGASgXAAg");
	this.shape_637.setTransform(422.7815,194.4487);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#544939").s().p("AgMARQgMgmAXgSQAFgDgBgNIgCgSQAHAOABAHQACANgJAHQgKAMACAUQABALAHAZIAPAmQgUgagJgfg");
	this.shape_638.setTransform(417.0333,224.45);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#544939").s().p("AgHAHQgMgNgBgRIAUAYIAVAXQgRgCgLgPg");
	this.shape_639.setTransform(411.75,233.025);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#544939").s().p("AAJBxQgMgMgHgKQgLgPADgNIAFgKQAGgbgUgrIgDgGQAAgDAGgFIATgLQALgIAAgJIgDgIQgCgFgEgcQgEgWgJgJQAHAFAFAKIAFATQAGAWAHAPQACAJgLAMQgFAEgHAFIgLAHQANAZADAhQABARgJAMIgBACIAAAGQACAOAPASIAZAcIgWgTg");
	this.shape_640.setTransform(414.5231,219.65);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#544939").s().p("AgPBNQgNgUADgMQAJgNABgSQAAgQgIgPIgLgNQgGgIACgIQAEgQAZgPIAFgCQAAgQgGgYIgEgJQgDgFgEgDQAHACAGAOQAJAZAAASQgBAEgBAAIgCAAQgOAIgJAOQgGAJAEAEQAKAJADAHQAKARAAATQAAAUgLAPQgCAGAJASQAJAOAOASIAaAgQgoglgPgXg");
	this.shape_641.setTransform(413.1265,221.75);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#544939").s().p("AAAABIAAgBIABABIgBABIAAgBg");
	this.shape_642.setTransform(21.525,234.3628);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#544939").s().p("AAAABIgBgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAFADQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_643.setTransform(19.8219,234.3);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#544939").s().p("AABABIgBABIABgBgAAAgBIABACIgBgCg");
	this.shape_644.setTransform(18.5125,239.225);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#544939").s().p("AADA/QAAABAAABQAAABAAAAQAAABAAAAQAAAAAAAAQgBgBAAABQAAAAAAAAQAAABAAABQAAABABACIgDgKQAAADAAgKIgBgHQgBgGACAFQAAABAAABQABABAAAAQAAAAAAABQAAAAABgBQgBABAAAAQAAABAAgBQAAAAgBgBQAAgBAAgCIACAJQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAgBIgBgHQgBgHgCgGIAAACIgCgJIABABQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAABABAAQAAAAABABQgBAAAAAAQAAAAAAAAQAAABAAABQAAABABABQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABABAAIAHAVQADACgDgJQgDgLABgBQAEAJAAgFQgCgMgJgPQAEALgEgIIgDgJQADAGAAACIgBgEIAEAGIAEgBIAEAEQgCgGgJgKQABAAABAAQAAABAAAAQAAgBAAAAQAAAAAAgBIgCgBIgBgCIADACIgDgDIAOANQAGAFAEAAIgcgXIAEACQACACgCgCIgBgDIACADIgBgDIALAHQABAAgFgFIgIgHIADAGIgDgEIgFgEIACgBIgGgEQAAAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIACABQACADgCADQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAABIACAAQACACgDgBIgBAAQgEgCgCAAIAEACIgEgBIAFACQgFgBgCABQgBACgEgCIADACQABgBAAAAQAAAAABAAQAAABABAAQABAAAAABIgDgBIAFACIgGACQgBAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIgBgBQgBAAAAAAQAAAAAAABQAAAAAAAAQABABABAAIgEgBQAFAEgFgBQgGgBAEACQgSgFgHgEIABABQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQABAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBIAHABIgGgCQAAgBAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQAKAAACgGQACgHAEgBIgEgCQAGACgIgFIAIACIgGgDQAAgCAEgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAEACIgBgCIgCgDQADABACAAQADgBAGAFQACgBgHgEQABgCgCgDIADgDQACgDAGADIgEgDIgBgCIgEgDIABgBQgBgCACABIAEADQABgBgDgGIgBAAIAAgBIACADQACADADAAQgGgIAEACQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAABABIACACIACgBIgFgFQADgDAGgBIAKgEQAAABAAAAQAAABABAAQAAAAABABQAAAAAAAAQACAAABAFIgBgBQAEAHAAgBIgBgGQgBgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIABgGQgBgKAFADIADADIABAAIAAAAIABAAIACgBIgBACQACgDADAEQABABABAAQAAABABAAQAAAAABAAQAAAAAAAAIAAAFIADgGQABAAAAAAQABAAAAABQABAAAAAAQABABAAABIgBADQAEgHABABIAAACIACAAQgCAHAEgEQADgEgBAJIAFgHIAAACQAAgBABgBQAAgBAAAAQABAAAAAAQAAAAAAABIABAEQACgCAAgFQAAAEADgEIACgDIgBAJQABAAABgGQABgFABAEIgBACQgBATABgEIAAgCQAAgBAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAGASIgEgBQgBAAAAAAQAAAAAAAAQAAAAABABQAAAAABABIAEADQgBAAAAAAQgBgBgBAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBgBIgCAAQAAAAAAAAQAAABABAAQAAAAABABQAAAAABABIABABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIAAABQAAABABAAQAAABAAAAQABABgBAAQAAAAAAABIgCABQAAgCgFgDIADAEIgDgBQANAKgBACIgCgCQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIgEgDQAAABABABQAAAAABABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIgGgEQABABABAAQAAABAAAAQAAAAAAAAQgBAAgBAAQAAgBAAAAQAAAAAAABQAAAAABAAQAAABABABQgDgBgEADQgBADgEgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABIACACIgDgCIAFAIQgDgDgGgDIAHAGIgGgDQABAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAFADABAEQgBgBgBAAQAAAAgBgBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBgBIACACIAFAEIgEgDIABADIgBAAQAAgBgBAAQAAAAAAAAQAAABAAAAQAAAAABABQgBgBgBAAQAAABAAAAQAAAAAAABQAAABAAABQABABAAAAQAAABAAAAQAAAAAAAAQgBAAgBAAIgBgBIgDABQgBAAgBABQAAAAAAAAQgBABAAAAQAAABABAAIADADQABAFgBACIADADIgCAHQAAAFgGgFQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABIgCACIgCgEQgBABAAAFQgFgDAAAFIgBAJIAAgCIAAAIQAAABAAAAQABABAAABQAAAAgBAAQAAAAAAAAIAAAEQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIgBACIgCgIIgEgHIACAGIgDgGIAAABIABAJIACAFIAAACQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIABAEQgDgEgDgLgAAdALIgDgEIADACQgBgDgLgHIgMgLQABAAAMAJIgFgGQgHgGACAAIgDgBIABgBIAAgCIAKAHIgIgIIAKAIIgEgEIgFgEIALAEQgCgCgIgEIgBgCIgDgEQgBgBAAgBQgBgBAAgBQgBAAAAAAQAAABABABIAFAHIgBgBQgCgCABACIgDgFIABADIgCgEQAAABABABQAAAAAAAAQAAABAAAAQAAAAAAAAIACADIgCgCQABACgBgBQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIgCgEQAAgBAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAgBAAAAIgCgEQgBgBAAAAQgBAAAAAAQAAABAAAAQAAABABABIADAFIAAgCQAEAFAAAAQgBAAAAAAQgBgBAAAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAAAQgBABgKgHQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIAEADIABAAQACAAADAEQAAgBgBAAQgBgBAAAAQgBAAAAAAQAAABAAAAQACAEgDgCQgHgDgBgDQAAACADADIgDgBIAIAHIgBABIACAAIgBgBIABAAQAAABAAAAQAAABAAAAQABABAAAAQABAAABABIADABQAOANAMAJgAAigGIgQgQIAAAAIgBgBIABgCIAAAAIgBABIgBgDIAAACIAAABIgBgBIAAAAIgBAAIAAgBIAAAAIgBAAIABAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgBgFIABACIgBgFIgCgEIACAKIgBgBIAAADIgCgGIAAACIgCgHIABADQAAABABABQAAABAAABQAAAAAAABQAAAAAAgBQAAABAAAAQAAABAAAAQAAAAgBgBQAAAAgBgBIADAGIABAAIAFAEIABABIAEADIAAABIANAJgAAKgYIAAAAIgCgDIACADgAAVgeIgBABIABABIAAgDIAAABg");
	this.shape_645.setTransform(19.7,236.0313);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#544939").s().p("AAAABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAgBAAIAAgBg");
	this.shape_646.setTransform(21.94,240.9536);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#544939").s().p("AAAABQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAgBABABIACABIgBAAIgBAAg");
	this.shape_647.setTransform(21.675,240.9908);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#544939").s().p("AgCAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIACABIACACIgFgCg");
	this.shape_648.setTransform(24.1341,237.2092);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#544939").s().p("AAAAHIAAgCQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgCABgAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIAAgEQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAAAMQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_649.setTransform(18.65,241.3458);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#544939").s().p("AgBgDIABAAIAAAAIACADIgBAEIgCgHg");
	this.shape_650.setTransform(19.025,242.375);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#544939").s().p("AgCgOQACAKAAgKIAAACIAAgDQABAFAAAGIABAFIgBgCQAAgBgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIADALIAAAHQgFgVAAgJg");
	this.shape_651.setTransform(18.875,240.6);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#544939").s().p("AAAABQAAgDAAACIABABg");
	this.shape_652.setTransform(18.175,241.4357);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#544939").s().p("AAAgBIABACQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAAgDg");
	this.shape_653.setTransform(18.375,241.775);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#544939").s().p("AAAgDQAAABAAABQAAABABAAQAAAAAAAAQAAAAABAAQgBAEgBAAQgBgEABgDg");
	this.shape_654.setTransform(18.3438,243.05);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#544939").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQgBACABADQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_655.setTransform(16.395,240.6214);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#544939").s().p("AAAAAIABgCQABAEgCABIAAgDg");
	this.shape_656.setTransform(16.4917,241.6);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#544939").s().p("AABACIgDAAIACgEIAAACQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAABAAABQgBgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_657.setTransform(15.7917,239.175);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#544939").s().p("AgwAVQAIgRAKgQQAWgiAQABIAoAJIgXAeQgZAggFAUg");
	this.shape_658.setTransform(20.1,235.1236);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#48443B").ss(0.5).p("AAACbIALijQgkAAgDgEQAcACAGgLQAJgMAFgSQALgjgNgZQgMgPgQgHQghgNgZAtIABAbQAIAbAfAHQAEACAGgDQAKgGAFgYQABgFgDgHQgFgNgNgFIgGAJIAMAMQAIAOgUANQgJAAgHgHQgPgOAIggQAGgIAJgFQASgLASAPIAMAUQAIAcgYAqQgUAFgUgKQgpgUgBhMQAGgOANgLQAYgWAfAOIAKACQAKAFALAJQAjAdAOBGIATDHQgJgLgPgGQgfgLgfAcg");
	this.shape_659.setTransform(11.5282,253.5376);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#4C483F").s().p("AA/CQQgfgMgfAcIALiiQglgBgCgDQAcABAGgKQAJgNAFgRQALgkgNgYQgMgQgQgGQghgNgaAtIACAaQAIAcAfAHQAEACAGgDQAKgGAFgZQABgFgDgGQgFgNgOgGIgFAJIAMAMQAHAPgTANQgJgBgHgHQgPgOAIggQAGgIAJgFQARgKATAPIAMATQAHAdgXAqQgUAFgUgKQgpgUgBhMQAGgOAMgLQAZgXAfAPIAJACQALAEALAJQAjAeANBFIAUDHQgJgLgPgFg");
	this.shape_660.setTransform(11.45,252.9909);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#48443B").p("AguAtIAIhHIAegRQAhgLAWAfIAABGg");
	this.shape_661.setTransform(15.4232,272.3709);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#4C473F").s().p("AguAtIAIhHIAdgRQAigLAWAfIAABGg");
	this.shape_662.setTransform(15.45,272.3656);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#544939").s().p("AABACIgDgDIAFABIgCACIAAAAg");
	this.shape_663.setTransform(16.3,234.1455);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#544939").s().p("AgBAAIAAgBIADADQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_664.setTransform(7.9,232.05);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#544939").s().p("AgCAAIAFAAIgBABg");
	this.shape_665.setTransform(19.325,269.775);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#544939").s().p("AgDABQADgDAAAAIADAAIgBACQABAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAABIgBABIgCgCg");
	this.shape_666.setTransform(12.9,240.6069);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#544939").s().p("AABACIgCgCQgBAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIADABIgCACIAAAAg");
	this.shape_667.setTransform(17.795,249.3268);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#544939").s().p("AgCAAIAFAAIgDABg");
	this.shape_668.setTransform(18.425,250.375);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#544939").s().p("AgBAAIAAAAIABgBIACADIAAAAIgDgCg");
	this.shape_669.setTransform(19.3125,248.855);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#544939").s().p("AABACIgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgDgDAEACQABAAABAAQABABAAAAQAAAAAAABQAAAAgBAAIgBAAg");
	this.shape_670.setTransform(22.2233,251.9305);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#544939").s().p("AAAAAIAAAAQABABgBAAg");
	this.shape_671.setTransform(21.3083,255.3);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#544939").s().p("AAAgBIACACQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAg");
	this.shape_672.setTransform(21.3735,254.875);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#544939").s().p("AgBAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIgBAAIgBgBg");
	this.shape_673.setTransform(20.5,257.4583);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#544939").s().p("AAAgBIABACQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABQABgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_674.setTransform(22.75,253.925);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#544939").s().p("ABKC4QAAgEgEgBIAHgJIgEAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgEgEADQAJgMgBgUQgBgXADgJQAAAAAAAAQAAgBgBAAQAAAAgBABQgBAAgBAAQABAAABgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgFgCIAJgGQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgDAAQgBgEADgLQADgJgDgFIAFgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQgFADgBgGQgBgFgDAAQAEgBACgGQABgFAIABQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQABgJgFgEIABgDIgDgBIgDgCQACgEgCgLQgBgJACgCQAAABAAAAQgBABAAAAQAAABAAAAQABAAAAABIAAgGIAAgBQAEAAABgDQABgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgDIAAABIgBgEIADADQAEACACgDIgCgBIgDgCQgHgEgJABQAIAIgFACIgEgFQgDgCgCAAQABAAABgBQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAABgBIgEgDQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAIADgDQgBgDABgGIAAgJIAEgDQgCgCgHgBQgGgBgDACIAAgEQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgEAHgCgHQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIADgCQgCgBgDABQACgCAHgBQAHAAADgDQACgCACgGIABgDIgBgCIgBgBIgOAHQgMAGgEAEQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAgBIADgEQACgEgEgBQgFgBAAgBIAEAAQABAAAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQALgEABgDQgCgFgIABQgGABgFAEIALADQgCABgEAAQgFgBgDACIgDgHQAEAEACgFQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIABgDIAcgHQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIACgEQgIACgCAAIgCgBIgCABIgPAIQgBgDAEgEQAEgFADgBIAAAAQgCgCgEACIgFACQgIAEgCgDIABAEIgDgCQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQACgJADgCIgJAHIAFgIIgBgBIgBAAIgCACQgDAFAAABQgBgEAAgIIgBABIgCADIgBAGQgDABgCgDQADgBACgGIgEACIgBgCIgCABIgCAAIgCAAIgCgBIgCgCIgIABIAAAAIgGgBIAAAAIgFADQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAgEIAAAAIgBAAIgBAFQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBgBIABgCIgBgDIgBABQgDAGgBgEQAEACAAgIIgGADQgDABACAGIgCgBIgCgEQgBABgCAGIgCgEQABAAACgEQAAgBABAAQAAgBABAAQAAAAABABQAAAAABABQgCgHAAgFIgCgBIgCACIABACIACAEQgBAAAAgBQgBAAgBABQAAAAgBAAQAAAAAAABIgCABQgBAHACAFQgCgBgDAAIACACIgEgCIAAAAIgBAAIgCACIABABIAAAAIAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQABABABAAQAAABAAAAQABABAAAAQAAABgBAAIgtCWIANieQAAgEACgEIgBgKIADACIACABIABAAQgCgFAHgDQgJgKAJgIQgCAFABAAQABAAAAAAQABAAAAAAQABgBAAgBQAAAAABgBIABACQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAAgDIABABIABgDIAAgDQABAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIAEgCIACAAIAFgGQADgEAHAAQAGgCgFgEIgCgCQAAAAAAgBQAAAAABAAQAAAAABAAQABgBAAAAQAGAIAEAAQADgGAFgCIAAAHIAFAAQABAAABAAQAAAAAAABQAAAAABABQAAAAgBABQAFgDADADIADADQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBQAAgCgGABQAFgBgDgHQgDgFgDgDIAIAFQAEADABAFIgGAAQAEAEAGgBQAEgBAAAHQgCgBgDABQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIAGgBIgBABQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAAAABQAFgCACgCIAAAAIAAAAIAEAAIgBACIABgBIADgBQgDACAFADQADABAEgFQADgFACAEIgCAAIACADQACgGAJACQAJACACgGQABABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgIADIADAFQgDgCgCABQACAFAGgBIAIgEIgCAGQAAABAAAAQAAABAAAAQABABAAAAQABABABAAQAFAAAAgFQABgFACABIABAIQAFgBAEADIAHAHIADgBQACADAHABQAIAAABADQgCAAABAHIAKADQgEgBgGAFIAGACQAAAAgBAAQgBAAAAABQgBAAAAAAQAAABAAABIAHACIgCgCIAFABIgBgDIAFADQADADAAADIgFACQABgGgHADQABAAABABQAAAAAAABQABAAAAAAQAAABgBAAIgBADQACACADAAQAEgBABgCIADAGIAGAFIgFABIAEAEIgIgBQABAGAEgBQAFgBABAGIgFACIAHAEQABAAAAABQAAAAAAABQAAABAAAAQAAABgBABQAAAAABAAQAAAAABAAQAAAAABgBQABAAAAgBQACgDACAHQgDADgCAHQABABAAAAQABABAAAAQABAAAAgBQAAAAABgBIABgEQABAJgIAEIgFADIgBABIAAAAIAAABIAAgBIgCAIQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIABABIABAAQgDgCAAgCIAGADIgBACIgCAAIgBgBIgEgBQAEADgBAFQgBADAFACQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAABAAAAQAAABABABQAAABAAAAQAAABAAAAQAAABgBAAQgCgCgBgGQAAgEgEgBQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABQgCgEgDAAQgDAEAEAEIAGAGIgCgHQABAAABABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBgBIAAAAIAAAAQAAAEgGAEIgHACIAAACQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAIABgEQABgEAGACQgGACADAFQAEAHgEAEQgDgCgDACQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAABIACAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIADgBIgCACIADACIgEABIAHAEQACABADAFQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAQgBABgBAAQAAAAAAAAQgBAAAAgBIAAABQAAADADADIgBAAQABAEgCAEQgCADADAEIACgBQADAHAAALQAAAOABADIACgDIABAEQABAFgCABQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQgGABgBADIAEABIgDABQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAABgBQAAAAAAABQABAAAAAAQAAAAAAABQgGABgBAJQAAAJgFACQABAAABAAQABAAABAAQAAAAABgBQAAAAAAgBQAAgBAAgBQABgBAAAAQABAAAAAAQABAAABAAQgDACgBADIAFgBIgEAOQgCAHAAAGIgBAAQgCAFAFADIgDgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAGAEgFAGQgFAGADACQgEAAgKADQgIADgEgCIABADQgDAAAAgFgABJABQgCADACADIADgBQACgFADgBQgBAAAAAAQgBABgBAAQAAAAgBAAQAAgBAAAAIgCgDIgBABIAAgBIAAABIAAAAIgBADgABIAAIACgCIgEACIAAgBIgBABIABAAIACAAgABIgIIACABIgBgCgABUhOIABgCQACgDgCgCQAAABgFACIgDABIAFgCIACAFg");
	this.shape_675.setTransform(12.3512,250.575);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#544939").s().p("AADgHIgCAMQgBgDgCAFIAFgOg");
	this.shape_676.setTransform(10.375,238.3);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#544939").s().p("AAAgBIAAgBQADACgDADIAAgEg");
	this.shape_677.setTransform(21.3771,247.1);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#544939").s().p("AAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIgDACIABgCg");
	this.shape_678.setTransform(19.125,236.15);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#544939").s().p("AgBABIABgDQABgBAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIAAAGQgBAAAAgBQAAgBgBAAQAAAAAAgBQAAAAgBAAg");
	this.shape_679.setTransform(16.0875,236.6682);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#544939").s().p("AAAADQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIgCABIACgDIADAFIgCAAIgBAAg");
	this.shape_680.setTransform(21.65,259.2375);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#544939").s().p("AgEADQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIgCgCIAHgDIgBABIgEAEIABAAQgBABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape_681.setTransform(21.6375,261.2375);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#544939").s().p("AAEACQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAgBAAABQAAAAAAAAQAAAAAAABQAAAAAAABIgDgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQADAAADAAIAEABQgBgDAAgCIADAFIABAAIAAABIgCADIgBgDg");
	this.shape_682.setTransform(22.3625,257.675);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#544939").s().p("AgBADIAAAAIAAgGQABAAACACIgDAFg");
	this.shape_683.setTransform(22.9,256.75);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#544939").s().p("AgIAFQACgDgCgCQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIACAAIgDgEQAEgBAEADQAEACACgBIgCACQAAAAgBAAQAAABAAAAQAAABAAAAQABABAAABQABABADgDIADgDQACABAEAAQgGAEgGABIgGABIgDgBg");
	this.shape_684.setTransform(21.25,256.3357);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#544939").s().p("AAAgBQAAAAAAAAIABADQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_685.setTransform(22.8875,259);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#544939").s().p("AgBADIABgFQAAACACABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_686.setTransform(23.0278,258.525);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#544939").s().p("AgBACIABgDIACADg");
	this.shape_687.setTransform(22.9,260.825);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#544939").s().p("AAAABIgDAAQAAgBABAAQAAAAABAAQAAgBABABQAAAAAAAAIAEABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAABg");
	this.shape_688.setTransform(22.475,261.75);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#544939").s().p("AgBAAIADgBQgBABgCACg");
	this.shape_689.setTransform(23.45,260.225);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#544939").s().p("AgDADQADgDgBgDQADADABACIgCAAIgCACIgCgBg");
	this.shape_690.setTransform(24.15,258.6063);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#544939").s().p("AgCAAIAFgBIgDADgAADgBIAAAAIAAAAg");
	this.shape_691.setTransform(23.85,261.3);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#544939").s().p("AgBAAIABgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAABgBAAIAAACg");
	this.shape_692.setTransform(21.9563,265.37);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#544939").s().p("AgCgBQABABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIACgCQABADgCABIgBABQgBAAgBgEg");
	this.shape_693.setTransform(23.4643,263.7525);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#544939").s().p("AAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQABAAAAgBIACADIgCgCg");
	this.shape_694.setTransform(23.6058,263.125);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#544939").s().p("AgCAAQADgDACADQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgBACg");
	this.shape_695.setTransform(24.25,263.125);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#544939").s().p("AAAgBIABAAIAAACIgBABg");
	this.shape_696.setTransform(24.1,264.05);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#544939").s().p("AgBAGIABgBQAAgBgBgFQgCgEADgBQgBADAEAKg");
	this.shape_697.setTransform(22.7917,265.925);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#544939").s().p("AgBAAIABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAg");
	this.shape_698.setTransform(23.9727,270.075);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#544939").s().p("ABHAqIgRheQgOg0gjgZIgggNQgqgPgTAQQAOgQAVABQAQABANAIQAnAHAfATQAPAKAIAIQATASABAUQAAALgDAGIgCDNQgCgrgLhIg");
	this.shape_699.setTransform(12.9531,251.0446);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#544939").p("ABdDQQADhMgGhWQgLipgtgtQgUgVgagJQg1gSgcA6IABATQACAWAHASQAWA5A9gJQAOgWAEgZQAJgygtgOIgZAHQgYAPAHAkIAMAQQAOAPANgFQAIgIADgKQAHgUgWgN");
	this.shape_700.setTransform(11.488,256.7233);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1,0,1.1,0).s().p("AAAAUQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBgBAAAAQgBgDABgGIAEgMIABgFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBgCgJgDQAIgFAGAEQAFADAAAGQAAAFgBAEIgHALIgCAFIAAACIADABIgDACIAAgBg");
	this.shape_701.setTransform(17.075,293.4278);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.8,0,0.8,0).s().p("AAAARQAAgCABgHIgIgaIAKABQAJADgHAOIgEAIIAEAKIgCABIgDgCg");
	this.shape_702.setTransform(16.8531,293.5167);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#3C2E1E").s().p("AgFgEQAHgHAJgBQgCAIgHAFIgLAMQgEgJAIgIg");
	this.shape_703.setTransform(13.7833,284.8);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#3C2E1E").s().p("AgMgDQAHgGAIAEQAKAEgBAIQgOgEgKgGg");
	this.shape_704.setTransform(17.3,280.4658);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.6,0,1.6,0).s().p("AAEAKQADgHgCgFQgBgEgFgHIgNgLQAJAAAHAFQAKAFADAKQADAJgIAJIgGAHIgHAEg");
	this.shape_705.setTransform(17.2429,284.275);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.3,0,1.3,0).s().p("AgMgYIATAMQAPAPgXAWg");
	this.shape_706.setTransform(17.0003,284.275);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#3C2E1E").s().p("AgLAPQgJgBADgJQAGgJAOgKQgBAFgDAHIgFAHIAKAAQAKAAAFACQgHAEgIACQgGACgFAAIgEAAg");
	this.shape_707.setTransform(14.589,289.0875);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#3C2E1E").s().p("AgLgKQAFABAEAEIAGAFQAEAAABgBQABgBgBgGIgJgVQAKAKAEAFQAHALgFAHQgFAGgLgCIABAEIAKASQgpglATgDg");
	this.shape_708.setTransform(14.0897,295.925);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.5,0,1.4,0).s().p("AACASQgEgEAAgGIACgGIAAgCIAAgEIgGAFIgCAAIgCgBIAAgCIABgGIACAFIAAAAIAEgKIADgEIABgCIACAAIAEABIACACIABAEIABAFIgCAIIgCAGIgDACQAAACACAEIAFAFQgEAAgFgCg");
	this.shape_709.setTransform(18.3,305.6);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#3C2E1E").s().p("AgTAvQACgHAIgGIgEgWQgDgOAFgJQAGgGAIAHIAHAJQAEgIgCgKQgDgKgLgNQAAgGAFgEIAJgEIgHAGQgEADAAADQAHAFAEAFQAKALgBAOQgBAOgKAKQgKgPgEgDIgBADQAAAKADAbQgKAGgDAEQgFAHALADQgNgBADgJg");
	this.shape_710.setTransform(16.8773,301.95);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#3C2E1E").s().p("AAAASIAFAAIABAAIgBgBIgKgOQgEgCgBgEQgBgFADgEQAEgGAEgDIgCALQAAABAAAAQAAABAAABQAAAAAAAAQAAABABAAIACACQAJAKABAJQACAGgEABIgCAAQgEAAgDgEg");
	this.shape_711.setTransform(16.7455,308.6911);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#3C2E1E").s().p("AgHAXQgGgEADgKQACgFAEgFIAGABIAAAAQABgEgDgIIgFgNIAMANQAGAIgCAIQgDAHgIgCQgEAHABACQABADAJADQgEACgDAAQgDAAgEgDg");
	this.shape_712.setTransform(16.5138,312.1566);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.2,0,1.3,0).s().p("AAEAXQgDgHgFgGIgBgCQgFgPAAgPIABgIIABgEQACgEADgBQADAAABACIADADIAFAHIgHgFQgEgDAAACIAAADIABAHIAEAcIAFAHIADAJQACANgIAGQADgJgEgIg");
	this.shape_713.setTransform(18.0211,318);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#3C2E1E").s().p("AAEAZQAFgZgHgOQgKgQgFgRQgDgLACgHQABALAIANIAOAVQATAdggA5IAIgpg");
	this.shape_714.setTransform(19.6673,316.15);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-2.9,0,2.6,0).s().p("AARAUQAAgCgEgEIgGgFIAAAAQgKgJgIgLQgKgNgDgMIAlAlQAEADADAFQADAFABAFQABAMgLAGQAGgJgDgIg");
	this.shape_715.setTransform(20.6011,325.175);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#3C2E1E").s().p("AgGAGQgJgKADgLIAaAfIgBAAQgMAAgHgKg");
	this.shape_716.setTransform(21.5859,328.0261);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#3C2E1E").s().p("AACA8QgFgBgDgFQgLgQAHgpQAGgogQgQQASAKABAaQABAPgDAdIAAASQACAMAGABQALgCAAgKQgBgIgHgJQAKAGACALQADAMgLAFQgDADgEAAIgDAAg");
	this.shape_717.setTransform(23.9071,328.9611);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#8F8777").s().p("AgNABQALgHAMADIAAAAIABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgFAFgIAAQgGAAgHgEg");
	this.shape_718.setTransform(402.445,264.87);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#8F8777").s().p("AgGgGQAJgIAKAFIgNAJIgLAMQgFgLAKgHg");
	this.shape_719.setTransform(406.0555,261.867);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.4,0.4,0.5).s().p("AgKAIQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgBIACgEIAGgFQAHgEAHAAQgCAHgIAFIgFADIgEABIAAAAIAAAAIgCABIAAAAg");
	this.shape_720.setTransform(401.0679,263.7475);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.8,-1.1,0.9,1.2).s().p("AgJACIABgFIAEgGQAEgCAEgBIAEgHIACAMIAAABIgDACIgGADIgBABIAAADIgCAIQgBAFgEAEIgCgSg");
	this.shape_721.setTransform(402.6,266.85);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.6,0.4,0.4).s().p("AgIAIIgCgDQAAgBABgEQABgCAFgDQAHgEAHADQgDAFgHAEIgEACIgCAAIgBABIABACg");
	this.shape_722.setTransform(404.0438,259.3229);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.5,0.7).s().p("AgLADQAEgEAHgDIAGAAIABAAIACgBQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABIAAACIAAABIgBABIgCABQgEADgDAAIgEABQgFAAgEgDg");
	this.shape_723.setTransform(404.75,255.5808);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.7,0.7,0.7).s().p("AgFAGQgEgEADgFQADgFADgBQAFgBAEACIgHAIIgBADIAAAHQgEgBgCgDg");
	this.shape_724.setTransform(405.7933,252.9833);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.7,0.1,0.7).s().p("AgKAGIgBgDQAAgDACgBQAEgDADgBQAIgCAGAEQgFAEgHACIgFABIgCAAIgBABIAAACg");
	this.shape_725.setTransform(399.675,268.7692);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.7,0.1,0.6).s().p("AgLAAQAFgEAHAAIAGABIABAAIAAABIABgBQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAABIgBABIgBABIgCABIgIACQgHgBgEgEg");
	this.shape_726.setTransform(401.275,265.45);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-1,0.3,1).s().p("AgIAEQgCgFAEgEQAEgEAEAAQAEAAAEADIgGAFIgDACIgBACIgCAHQgDgCgDgEg");
	this.shape_727.setTransform(402.9917,263.125);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#8F8777").s().p("AgGAGQgGgFACgFQAEgFAGABQAGAAAFAFIgLADIABABIAEAJQgGAAgFgEg");
	this.shape_728.setTransform(398.5132,264.9917);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAHgHAHABQAJgBAGAHQAHAGgBAIQABAJgHAHQgGAFgJABQgHgBgHgFg");
	this.shape_729.setTransform(403.85,306.6);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_730.setTransform(30.375,317.8);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_731.setTransform(400.975,287.9);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_732.setTransform(406.45,280.05);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgHAAAAgJQAAgCACgDQADgCACAAQAEAAACACQADADAAACg");
	this.shape_733.setTransform(414.65,238.2);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#F4F4F2").s().p("AgHAAQgBgDADgCQADgCACgBQADABADACQADACAAADQAAADgDADQgDADgDgBQgHAAAAgIg");
	this.shape_734.setTransform(414.65,238.2);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgIAAAAgJQAAgCADgDQACgCADAAQAIAAAAAHg");
	this.shape_735.setTransform(409.7,238.2);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#F4F4F2").s().p("AgHAAQgBgDADgCQADgCACgBQAJAAAAAIQAAAIgJAAQgHAAAAgIg");
	this.shape_736.setTransform(409.7,238.2);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgIAAAAgIQAAgDADgCQACgCADAAQAIAAAAAHg");
	this.shape_737.setTransform(411.1,245.725);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#F4F4F2").s().p("AgIAAQAAgDADgCQADgCACAAQAIAAAAAHQAAAIgIAAQgIAAAAgIg");
	this.shape_738.setTransform(411.1,245.725);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgDACgDAAQgDAAgCgCQgDgDAAgDQAAgHAIAAQAIAAAAAHg");
	this.shape_739.setTransform(411.95,254.35);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#F4F4F2").s().p("AgFAGQgDgCABgEQAAgIAHABQAJgBAAAIQAAAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape_740.setTransform(411.95,254.35);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgIAAAAgIQAAgDADgCQACgDADAAQADAAADADQACACAAADg");
	this.shape_741.setTransform(412.35,262.95);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#F4F4F2").s().p("AgIAAQABgDACgCQACgCADgBQADABADACQADACgBADQAAAIgIAAQgIAAAAgIg");
	this.shape_742.setTransform(412.35,262.95);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgHAAAAgIQAAgDACgCQADgDACAAQAEAAACADQADACAAADg");
	this.shape_743.setTransform(429.3,268.85);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#F4F4F2").s().p("AgHAAQAAgCACgDQADgDACABQADgBADADQACADAAACQABAJgJAAQgIAAABgJg");
	this.shape_744.setTransform(429.3,268.85);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDADgDAAQgDAAgCgDQgDgCAAgEQAAgCADgDQACgCADAAQADAAADACQACADAAACg");
	this.shape_745.setTransform(428.45,277.3);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#F4F4F2").s().p("AgFAGQgCgCgBgEQABgCACgDQACgCADAAQAEAAACACQACADABACQgBAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_746.setTransform(428.45,277.3);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAJgJAAQgIAAAAgJQAAgCADgDQACgCADAAQAJAAAAAHg");
	this.shape_747.setTransform(426.75,286.65);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#F4F4F2").s().p("AgIAAQABgCACgDQACgCADAAQAIgBAAAIQAAAJgIgBQgIABAAgJg");
	this.shape_748.setTransform(426.75,286.65);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgIAAAAgIQAAgHAIAAQADAAADACQACACAAADg");
	this.shape_749.setTransform(425.1,295.025);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAEAAACACQACACABADQAAAIgJAAQgHAAAAgIg");
	this.shape_750.setTransform(425.1,295.025);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCACgEAAQgDAAgCgCQgDgCAAgEQAAgHAIAAQAJAAAAAHg");
	this.shape_751.setTransform(423,303.975);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQgBgHAIAAQAJAAgBAHQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_752.setTransform(423,303.975);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgDACgDAAQgDAAgCgCQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQACACAAADg");
	this.shape_753.setTransform(420.6,312.6);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#F4F4F2").s().p("AgFAGQgDgCABgEQgBgCADgDQADgDACABQAEgBACADQACADABACQgBAEgCACQgCACgEABQgCgBgDgCg");
	this.shape_754.setTransform(420.6,312.6);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgIAAAAgIQAAgDADgCQACgCADAAQAEAAACACQADACAAADg");
	this.shape_755.setTransform(418,320.575);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQACgCADAAQAEAAACACQACACABADQAAAIgJAAQgHAAAAgIg");
	this.shape_756.setTransform(418,320.575);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgHAAAAgJQAAgIAHAAQAJAAAAAIg");
	this.shape_757.setTransform(414.9,327);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#F4F4F2").s().p("AgHAAQgBgHAIAAQAJAAgBAHQAAAEgCACQgDACgDABQgIAAABgJg");
	this.shape_758.setTransform(414.9,327);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgIAAAAgIQAAgDADgCQACgDADAAQAJAAAAAIg");
	this.shape_759.setTransform(411.5,332.95);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#F4F4F2").s().p("AgHAAQgBgDADgCQADgCACAAQAJAAAAAHQAAAJgJAAQgHAAAAgJg");
	this.shape_760.setTransform(411.5,332.95);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAJgJAAQgHAAAAgJQAAgCACgDQADgCACAAQAEAAACACQADADAAACg");
	this.shape_761.setTransform(407.65,340.15);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQACgCADAAQAEAAACACQACACABADQAAAJgJAAQgHAAAAgJg");
	this.shape_762.setTransform(407.65,340.15);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgDAAgCgCQgCgDAAgDQAAgDACgCQACgDADAAQAIAAAAAIg");
	this.shape_763.setTransform(403.025,345.7);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgCACgDQACgCADAAQAIgBAAAIQAAAJgIAAQgDAAgCgDg");
	this.shape_764.setTransform(403.025,345.7);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCACgEAAQgDAAgCgCQgDgCAAgEQAAgHAIAAQAJAAAAAHg");
	this.shape_765.setTransform(424.25,244.875);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#F4F4F2").s().p("AgFAGQgDgCAAgEQAAgHAIAAQAJAAgBAHQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_766.setTransform(424.25,244.875);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_767.setTransform(419.575,238.575);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_768.setTransform(419.575,238.575);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgDACgDAAQgDAAgCgCQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQACACAAADg");
	this.shape_769.setTransform(411.95,272.35);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#F4F4F2").s().p("AgFAGQgDgDABgDQgBgCADgDQADgCACAAQADAAADACQADADAAACQAAADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_770.setTransform(411.95,272.35);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAJgJAAQgDAAgCgDQgDgCAAgEQAAgCADgDQACgCADAAQAJAAAAAHg");
	this.shape_771.setTransform(411.5,280.05);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#F4F4F2").s().p("AgFAGQgDgDABgDQgBgDADgCQADgCACgBQAJAAAAAIQAAAIgJAAQgCABgDgDg");
	this.shape_772.setTransform(411.5,280.05);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDADgDAAQgDAAgCgDQgDgCAAgEQAAgDADgCQACgDADAAQADAAADADQACACAAADg");
	this.shape_773.setTransform(410.95,286);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEgBQgCABgDgDg");
	this.shape_774.setTransform(410.95,286);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAADgDADQgCACgEAAQgCAAgDgCQgCgDAAgDQAAgDACgCQADgDACAAQAEAAACADQADACAAADg");
	this.shape_775.setTransform(409.4,293.95);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#F4F4F2").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgCACAAQADAAADACQACADAAACQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_776.setTransform(409.4,293.95);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAADgDADQgCACgEAAQgCAAgDgCQgCgDAAgDQAAgDACgCQADgDACAAQAEAAACADQADACAAADg");
	this.shape_777.setTransform(408.15,300.6);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgDACgCQADgCACAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_778.setTransform(408.15,300.6);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgDAAgCgCQgCgDAAgDQAAgDACgCQACgDADAAQAIAAAAAIg");
	this.shape_779.setTransform(406.475,307.45);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgCACgDQACgCADAAQAIgBAAAIQAAAJgIAAQgDAAgCgDg");
	this.shape_780.setTransform(406.475,307.45);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_781.setTransform(399.775,327.825);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_782.setTransform(399.775,327.825);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgCADgEAAQgHAAAAgJQAAgIAHAAQAEAAACADQACACAAADg");
	this.shape_783.setTransform(429.675,259.5);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAEgBACADQACADAAACQAAAEgCACQgCACgEABQgHAAAAgJg");
	this.shape_784.setTransform(429.675,259.5);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgDAAgCgDQgDgCAAgEQAAgCADgDQACgCADAAQAIAAAAAHg");
	this.shape_785.setTransform(404.7,314.9);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#F4F4F2").s().p("AgFAGQgCgDgBgDQABgCACgDQACgDADAAQAIAAAAAIQAAAJgIgBQgDAAgCgCg");
	this.shape_786.setTransform(404.7,314.9);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDADgDAAQgDAAgCgDQgCgCAAgEQAAgIAHAAQAIAAAAAIg");
	this.shape_787.setTransform(401.825,321.5);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgHAHAAQAIAAAAAHQAAADgCADQgDADgDAAQgDAAgCgDg");
	this.shape_788.setTransform(401.825,321.5);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgCACgEAAQgHAAAAgIQAAgIAHAAQAIAAAAAIg");
	this.shape_789.setTransform(429.675,250.3);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#F4F4F2").s().p("AgHAAQAAgIAHABQAIgBAAAIQAAAEgCACQgCADgEAAQgHAAAAgJg");
	this.shape_790.setTransform(429.675,250.3);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#8F8777").s().p("AAGgnQACARgDAWIgFApQgOghAUgvg");
	this.shape_791.setTransform(401.6481,334.85);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#8F8777").s().p("AgQAbQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAJgdAagVQgHAXgUAZIgEAGIgBABIgCgBg");
	this.shape_792.setTransform(417.105,277.47);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#8F8777").s().p("AgLgXQAVAUACAbQgVgUgCgbg");
	this.shape_793.setTransform(408.475,318.15);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#8F8777").s().p("AgCAaQgQgVAJgkIAFAaIAEAPQAGgQAHgKQgBASgKAeg");
	this.shape_794.setTransform(412.073,311.225);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#8F8777").s().p("AgKgDQAKgYAVgVQgDAIgTAoQgOAcgCAVQgIgVAPgfg");
	this.shape_795.setTransform(413.3109,296.025);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#8F8777").s().p("AgDAeIgHgTQgFgLAGgKQAFgIAJgHIgCgXQAGAOAEAMIgKAKQgFAHAAAFIAEAYQADAPgCAKIgGgTg");
	this.shape_796.setTransform(422.7036,283.025);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#8F8777").s().p("AgOAVQgDgFACgFQAHgXAZgLQgEAIgIALIgNASQgEAHAGADIgCAAQgEAAgCgDg");
	this.shape_797.setTransform(419.585,265.5841);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#8F8777").s().p("AANgLIADgBIgEgCQAGgDADACQACACgCAEQgOAUgcAGQAIgJAagTg");
	this.shape_798.setTransform(417.7375,256.95);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#8F8777").s().p("AADAWQgRgHAEgRQAEgRARgEQgKAQgBAFQgDAKAJAKIAEAFIAAABIgHgCg");
	this.shape_799.setTransform(417.755,250.305);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#3C2E1E").s().p("AgHAjIAGgBQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgHgKgRQgKgOACgLQACgMAOgCQAKgCAMAEQgjADAIATQANAjgBAFQgBAFgEABIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_800.setTransform(416.9398,267.1948);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#3C2E1E").s().p("AABAAQgRgOgGgJQARAFAOANQARAOgDAPQgGgLgQgNg");
	this.shape_801.setTransform(423.5975,251.225);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#3C2E1E").s().p("AgEgIQAQgGAPAGQgtAQgIAEQAGgNAQgHg");
	this.shape_802.setTransform(416.2,243.4);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#3C2E1E").s().p("AgTAZQgWgZAXgXQASgUAfgCQgqAVgGARQgIAUAgAhQgRgKgJgLg");
	this.shape_803.setTransform(416.5247,250.275);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#3C2E1E").s().p("AAUAaIgZgDQgUgFgMgEQAKgBAYACQAUACALgBIgQgTQgMgOgEgJIAVASQAMAJAHAJIACAGQAAALgPAAIgDgBg");
	this.shape_804.setTransform(421.75,258.9042);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#3C2E1E").s().p("AABAXQAMgPAGgKIgTANQgYADgGgNQgGgMAQgSQAIgLAPgOIgMATQgNASgBAJQgCANAVgDIAUgNQARgKAAANQgIAPgRATIgdAdQAFgIARgYg");
	this.shape_805.setTransform(423.0189,271.75);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#3C2E1E").s().p("AgDAPIgDgGQgHgIgBgOQgCgQAJgFQAHgDAFALQAJARAEADIACAAQACgCACgJIAAAJQgFASgVgfIgBgCQgFAQAKAPQAEALgIAIQgJAHgMACQAVgNgBgIg");
	this.shape_806.setTransform(413.9,289.769);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#3C2E1E").s().p("AAKBDIgCgBIABgDQAIgtgBgUQAAgKgEgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBABQgDABgDADQgKAIgPAUQgYgZAIgeQAIgcAdgSQgBgMgZgLQATAEAIAKQADAFAAAGIgBABQgXARgIAXQgHAYAOASQAMgNAIgHQAdgVgBAqQAAAbgJAfQATAMAFAMQAIAPgdADQAsgJg1gdg");
	this.shape_807.setTransform(417.2687,282.85);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#3C2E1E").s().p("AgTAdQAFgOASgUIACgBQAJgDgFgMIgJgSQANAIAFAOQAFAOgOAFIgSAYIgFAJQAEACAJgDQgGAGgHAAQgIAAACgLg");
	this.shape_808.setTransform(417.2638,295.125);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#3C2E1E").s().p("AgPAtQAVgCAFgGQAFgIgNgPQgLACgHgFQgJgHAHgNQAIgRAUgUIgLAWQgIANgCAJQgCAJAQgDIADgBIACACQARAVgIANQgFAIgNAAQgGAAgJgCg");
	this.shape_809.setTransform(417.9097,301.5362);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#3C2E1E").s().p("AgSAoQAFgSANgNQAGgWADgRQAGgggJgDQgGAAgRAMIALgLQAGgGAGgBQASgBgFAnQgEAdgJATQgMANgGANQgHARAJAPQgNgNAFgUg");
	this.shape_810.setTransform(414.501,312.4997);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#3C2E1E").s().p("AgTA+QgIgZgCgRQgDgXAGgTQADgHAHgIQAbghAKgTQAKgSAAgOQADANgIAUQgMAdgXAcQgTAYAMAzQAEAOAVA/QgQgagMghg");
	this.shape_811.setTransform(411.2935,309);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#3C2E1E").s().p("AgxAjQADgRAUgMQA2gsAXgdQgSAng2AqQgSAKgEANQgEAPAOAQQgUgNAEgUg");
	this.shape_812.setTransform(409.2489,325.6);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#3C2E1E").s().p("AAdgdQgBAWgRARQgQARgXADQAlgbAUggg");
	this.shape_813.setTransform(406.8,330.825);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#3C2E1E").s().p("AgWBqQgZgJAFgVQAEgSAUgOQgQAPgDAPQgFAUAWAFQALAFAJgHQANgPAAgeIgEgwQgHgjAGgcQAIgkAcgNQghAXADA0QACAeAHA4QgBAlgRANQgFAFgIABIgCAAQgHAAgFgDg");
	this.shape_814.setTransform(402.0833,332.4036);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f().s("#3C2E1E").p("Ah4l9IBqAAIADBPQAFBgAJBeQAfErBDCZQgcg6g5hpQgrhPgUgxQg2iJgTklg");
	this.shape_815.setTransform(22.2552,315.6813);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-11.1,0,11.1,0).s().p("AAaDGQgrhPgUgxQg2iJgTklIBqAAIADBPQAEBgAKBeQAfErBDCZQgcg6g5hpg");
	this.shape_816.setTransform(21.275,313.575);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#1E1E1E").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_817.setTransform(187.4,217.9);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#1E1E1E").s().p("AgHAEQgDgIgBgFQAAgEAHgBQAGgCACADQADAGAFAQQgFADgJAEIgFgMg");
	this.shape_818.setTransform(186.75,214.9);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#0B0C0C").s().p("AgKAVQgHgDAEgGIARgfQABgCAEAAQADgBACACQADADgCAGIgQAdQgDAEgDAAIgDgBg");
	this.shape_819.setTransform(157.2794,130.3771);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#0B0C0C").s().p("AgLAIQgXAAACgIQACgFAJAAIAvgCQAEAAACADQACACgBACQAAABAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgWAEgQAAIgEAAg");
	this.shape_820.setTransform(147.5442,179.2994);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#0B0C0C").s().p("AgpAAQgIgDABgGQACgHAZAJQAiAKAegEQABAAABAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAGgGAAQgKACgLAAQgcAAgigNg");
	this.shape_821.setTransform(178.9507,178.5643);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#0B0C0C").s().p("AgiAmQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQgBgDACgDIATgaQAVgXAVgQQACgCADABQAEABABACQADAFgFAFQgmAegRAbIgCAEIgDADIgEAAIgEgBg");
	this.shape_822.setTransform(155.7118,136.6405);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#0B0C0C").s().p("AA1ASIgcgJQgqgOgtAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBABAAQABgFAFgBQAmgBAlALIAwAOQADABABACIABAEQgCAGgHAAIgGgBg");
	this.shape_823.setTransform(168.1883,181.5522);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#CB2D40").s().p("AAmAVIgHgDQgcgKgrAHQgFABAAgHQAAgHAMgCIAbgBIAPgRQADgEAHACQAGABAFAEQAJAHgBANIAHAFQADAHgDADQgDACgCAAIgCgBg");
	this.shape_824.setTransform(168.8942,158.256);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#0B0C0C").s().p("AAaA3QABgvgLghQgEgPgPgDIgdgEQgGgBAAgGQAAgDACgCQACgCADABIAfAEQAWAEAIAZQALAkgCAxQgFAEgCAAQgGAAAAgHg");
	this.shape_825.setTransform(177.0344,348.045);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#0B0C0C").s().p("ABDAaQgHgCgSgKQgbgOgbgHQgggIgbADQgGABgCgFQgFgQAwAHQAuAGAkATQATALALAEQAFABAAAGQAAAGgGAAIgIgCg");
	this.shape_826.setTransform(108.4264,278.504);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#0B0C0C").s().p("AA1A/QgIgQgUgaQglgvgugZQgIgDABgGQABgCADgCQAEgCADACQBJAoAtBNQAEAHgFAEQgBABgEABQgEAAgBgDg");
	this.shape_827.setTransform(115.7757,286.2125);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#0B0C0C").s().p("AgqBfQgJgBAFgWQADgQAIgWQAVgzArg/IAIgMQABgCADAAQADgBACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQABADgCACQgyBFgYBGQgDAHgDAWQgCAKgGAAIgBAAg");
	this.shape_828.setTransform(178.0167,261.8711);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#0B0C0C").s().p("AhQBGQgDAAgBgEQgCgDACgDQAMgjAggdQAcgaAlgUIA0gTQAFgBADADQACADgBAFQgBACgDABIgGABQhHAUgxA2QgOAPgKAWQgHAOgFAAIAAAAg");
	this.shape_829.setTransform(97.4406,278.9283);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#0B0C0C").s().p("AgnBGQgHgFADgiIAGgzIAFgtQABgEAGgCQACgBADABQAAAAABABQABAAAAABQAAAAABABQAAAAAAABIgKBMQgEAiACAQQAXgKAqgdQAEgDAEAEQAAAAAAABQAAAAABABQAAABAAAAQAAABAAABQABADgCACQglAagfAOIgHACQgEAAgEgDg");
	this.shape_830.setTransform(152.4471,138.6387);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#0B0C0C").s().p("AAfBtQgJgBgLgJQgdgZgMgoQgLgiAGglQAGglAVgfQABgDAEAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAEAEgCAFQglA8ARA/QAHAYASAaQAJALAOAHQAJAFgBAFQgBAFgFAAIgBAAg");
	this.shape_831.setTransform(138.0489,167.7321);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#0B0C0C").s().p("AAVCXQgEgDAAgGQAAg/gShOIgUhQQgHgggCghQAAgFAHgCQAAAAABAAQAAAAABAAQAAABABAAQABAAAAAAQACACABADQAAAWAJAmIAXBjQAPA/AABAIAAAFQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgDACgCAAIgDgBg");
	this.shape_832.setTransform(172.35,301.5088);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#0B0C0C").s().p("AAAgHQADADAAAEQgBAFgCADQgDgJADgGg");
	this.shape_833.setTransform(47.15,348.8);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#0B0C0C").s().p("AgVAdQACgbAIgZQABgEgGgCQAHACABgDQAQghAKADQACABACADQABAEgCACQgVAagEAiQgEAgACANQgCAGgFAAQgLAAADggg");
	this.shape_834.setTransform(109.0581,220.1875);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#0B0C0C").s().p("AgYBYQAAgGAFgIQAcgmgCgsIgHhIQAAgDACgDQACgDADgBQAHAAABAJQACAMABACIAHACQABAAgDAGQgBgEgEABQAGA2gDAXQgFAkgZAiQgEAFgDABIgCAAQgDAAgDgDg");
	this.shape_835.setTransform(186.9375,247.7348);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#0B0C0C").s().p("AAfBkIgIgHQADgCAAgEQgCgxgQgtQgRgygegiQgCgCACgDQACgDADgBQAEgBAFAGQAXAdAGAOQAjBDACBOQAAAEgEACIgDACIgDgBg");
	this.shape_836.setTransform(187.9556,233.4044);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#0B0C0C").s().p("AgqBgQgEgEAAgEQgGgvAUgrQAGgQAAgEQAAABABABQAAAAAAAAQAAABABAAQAAAAAAAAIADgDQAcgrAcgcQACgDAEgBQADAAACACQAEAFgGAGQgjAngUAjQgYAoADAwQABAGABABIAGAAIgEAGQgCADgEACIgEACQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAg");
	this.shape_837.setTransform(112.1108,184.9527);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#0B0C0C").s().p("AhPB0QAFgUAMgSQAWgeAegVIAKgFQAHgCAEgFQgYgYgNgmQgNgpALgeIAEgOQABgDAEgBQADgBACABQAGACgDAJQgOAjAOAoQALAkAfAcIAUATQAMAKALAFQAIAEgBAGQgCAKgWgOQgRgLgRgRQgEAFgHAEIgMAFQgKAEgKAKIgSARQACACAAAEQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgNABgEAKQgJAKAEALQgKAEAFANQgDAIgGAAQgLgBAFgVg");
	this.shape_838.setTransform(113.7062,204.225);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#0B0C0C").s().p("ABMDUQgDAAgEgEIgHgFIADAAIAEAAQgDgPgIgSIgPgfIgnhTQgEgHAKgCIAUgHQgLgYgeggQgzg2gOhMIgGgdQgDgRABgNQABgEAMgCQgBACADAGIALBHQAPA9AsAvQAsAsANAyQACAGgFAFQgBABgJgBQgHALAIATIAOAcQARAiAHAcQABAEgCAEQgCADgEAAIgBAAgAAlBeIABABIABgBIgBgBgAAaAwQgHACAAAEQABAFADAIIAGANQAJgEAFgDQgFgRgDgGQgBgCgEAAIgEAAg");
	this.shape_839.setTransform(183.6024,208.5278);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#0B0C0C").s().p("ACwBSQgQgIgRgPIgcgcIglgmQgZgbgjgQIg8gbQgagMg0ACQgoABgrAIQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgEAAQgVgCgZALIgBACIABABQgJAAgEgDQgCgBgBgEQAAgDABgCQAEgFADgBQBOgOAcgDQA/gHAoAKQAfAHAzAcQApAWAtAtIArAuQAXASAhALQAiALAbgDIgBAIQgBAFgDABIgJAAQglAAgugVg");
	this.shape_840.setTransform(42.4771,308.8226);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#0B0C0C").s().p("AiaDrQgFgCgBgFQgJgjAag1QAeg8A5g8IAegoQgDgFgIAEQgJAEgEgDQgFgFAHgKQAEgGAOgNIAXgWQgEgDgIADQgHADgEgDQgIgHAPgUQAOgTARgNQAXgSA4gfQAogWAYgbQACgCAEAAQAEAAABADQAEAEgEAEQgXAagyAdIhAAmIAAAGIgCAHQgKgGgIAKIgJAKQgFAGgCAHQANAHAEgCQAGgCAKgIQAHgEAEAGQACAFgHAFIgaAVQgCACAAAJQgJgBgBABIgOAOIAKANIAJgGQAGgFAFAIQACAEgGAFIgqArQguAvgdAwQgnBCAIArQACABAEAAQAEAAACgCIAFgCIAFgBQgDAEgHACIgLADIgFACIgDABIgBgBg");
	this.shape_841.setTransform(121.3468,160.2158);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#0B0C0C").s().p("AiiHXIgJgcIgHgsQgBgEgBgBIgEAAQAGgFgBgIQgKhjAShyQAMhLAVgtQAWgwAxg0QAVgWAYgkIApg9IAlgzQAGgTAPgGQAUgZAVgqQAnhKAOhPQABgGAGgCIAGADQACADgBAEIgSBKQgTA4glBCIipDnIgTAUQgxA4gTBNQgHAdgLBRQgKBKAJBZIAFApQAEAWAHARQAAABAAAAQAAABgBAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAIgDABQgEAAgCgFg");
	this.shape_842.setTransform(90.2893,277.5235);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#0B0C0C").s().p("ABLFpQgRgDgFgEQABgMAUAEQAfAGATgFQASgFAJgEQAPgHAJgLIgTgDQgLgBgHgEQgDgBAAgDQAAgEACgBQABgBAfACQAiADAXgLIAZgLQAFgCAGgJQALgDACgIQgMgHgHgKQgIgMABgNQABgNAIgKIASgRQg9gggpgeQgwgjgoguQgOgQgHgWQgIgVgHgIQgYgcgfgYIgxgjIgGgEQgCgCABgEQABgDADgCQAEgBADACIApAcIAVhNQAHgZAEghQAEgmgFgUQgmALguAdIgdAUQgJAGABAMQAFAogFA2QAAAHgGABQgDAAgCgCQgDgCAAgEQAEgpgEhBIgHhTQgBgOgEgIIgFgDIgBgLQgIACgIAHIgNAMIgbAWQhHA9gkBKQgPAfgDAWQgBAGgDABQgGACgCgDIgGgIQACgCABgFIADgJQAXhFAxg5QAogvBFgzQAHgFAJABQAJADAHARQAFAPABARIAFBBIAWgPQAxgiAwgOQAGgBAFACQAFADABAGQAGAagDAVIgKBDIgWBPQgBAEgGAHIAzAsQAWAXAHAcQAHAaA2AvQArAmApAYIBAAlQAZAPALAPQANARgPATIgcAdQgXAYgWAMQgWALgiAFQgJAQgXANQgbAQggAAQgOAAgOgDg");
	this.shape_843.setTransform(173.4394,149.9646);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#0B0C0C").s().p("AB1E3Qg5gFgigMIhzgsIgHgIQgiAPgOADQgsAKgcg6QhEA1hdAVQhKARgzgEQgOgBgIgGQAGAAABgJQAvAFApgHQBBgKAtgSQAygTAwgkQAHgGADAAQAFABABADIABAHQAKAcAXANQAYAOBmg+QAFgDADAFQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAADgDACIgtAcQAKAHAPAFIAaAKIAnAOQAzAVBEAFQBZAHBDgPQALghgWgeQgCgCABgEQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQAKgHAKAbQAKAbgEAXIAVgGQAFgTgBgJQgBgIACgGQACgJgJgMQgIgMADgEQAGgJALAQQAMASgDAYIgBAWQAUgKABgaQABgYgNgOIgJgMQgIgJgNgIQgPgJgLAAQgWAAggAEIg1AGIhOAIIgoANQgIADgCgHQgBgHAHgCIA8gWQAvgWAogkQAOgNAOgVQANgWAEgPQAMhGgKg/IgUhGQgPg1gkg0IgOgUQgDgFAEgFQAAAAAAAAQABgBAAAAQABAAABAAQAAgBABAAQAEAAABACIAiAzQAPAVASA1QASAzAFAfQAJBIgPBHQgHAhgrAnQgNANgSAMIgjAXICcgQIBZgBQBIgCApgLQAMgEAIALIgJAFIgtAKQgZAFgVAAIhnAAQAuAcADAtQAEAmgkAUQgNAHgjAIQg7AMg7AAQgcAAgcgDg");
	this.shape_844.setTransform(100.55,321.3238);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#0B0C0C").s().p("AgVG5QgdgJgHgZIgMgoQgBgFgEgEIgGgIIgLgNQgGgHgHgEQgNgIgFgQQgGgTgFgnQAAgFgEgBIABgHQgOhFgdhNIguAgQgGADgEgEQgCgCAAgDQAAgDADgCIAZgQQAOgJAJgKIg8h5IhBBVIg/BoQgCADgDABQgEAAgCgCQgEgDADgHIAVgjQATgmAhgtIA8hOIglhNIgnhfQgSgzgDhFIADhNQABgJAHABQAGAAAAAHIgDAsQgBBRATA6QAKgpAJhMIAAghQAAgHAHgBQAPgBgKBAQgJBIgOAxIAoBbIAXAnIABAMIBNCdQAaA8ATBSIAFAVQAFArAHAVQACAJAJAFQAKAFANAOQANAOADAIIAMArQAIAYAaAHIANAEQAJACAHgBQgCgdgGgWQgBgDACgCQACgDACAAQADgBACABQADACABADIAJA6IAnABIAagEQA1AGAkgUQARgKAHgRQAHgQgFgTQgMgkgcgEQAPATADAbQADAYgJAXQgBACgDABQgDABgDgBQgFgCAEgPQAGgVgDgQQgGgfgRgIIgkgSQgjgbgNghIgwiFQgbhKgRhRIgVhlQgHgggFgrIgFhNIgJh4QgBgHAGgCQADgBACACQADABAAADIAJBqQAegqAFALQACAGgCABQgUAXgOAYIAJBdQAFAvANAbIAYA1QAgBBAJAgIAaBXQAEAOAWAYQAZAcAFAJIAkA/QAMAUAPAFQAVAHAWgBIBBgDQABgVgFgZQgFgcgJgEQgEgCgLABQgKACgCgEQgDgEADgDQAFgGAQABQASABAGANQAOAcAAAvIAdgHQASgFANgKIgHgrQgGghgMgTQgGgLgLgEQgLgEgLAFQggAOgZgYQgjgigTg3QgSg0ADgzIgrjgQgKg0gDgZQgFgqAEgjQAFgEADgFQACgFABgBQACADgEAGQAEADAAAGIAAAKQgCAeAFAlQADAXAJAsIAsDwIAAAhQAJBAAkA1IATAUQASATATgIQAUgJASAIQATAHAJAUQAIASAGAZIAIAsIABALQAAAFgGAEQgYAQgbAFIglAHIgpACQgeACgQgCQgPgCgEABQgBgDgNgJQgPgLgIgNIgbgyQgLgTgagdQgWgZgEgMIgchcQgNgtgihBQABAVAMAqIA7C+IAHAPQAOAtATAdQAJAPANALQAPAMAPADIAPAAQAJgBAGAEIALADQAfARAGAmQAHAoggAXQgmAcg6gFQgZADgXAAQgrAAglgMg");
	this.shape_845.setTransform(167.0297,311.0338);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#1E1E1E").s().p("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AfA9AfIgSARQgIALgBANQgBANAIALQAHAKAMAIQgCAHgLAEQgGAJgFACIgZALQgXALgigDQgfgCgBABQgCABAAADQAAAEADABQAHAEALABIATADQgJALgPAHQgJAEgSAFQgTAFgfgGQgUgEgBALQgIABgHAFQgGAFgCAJQgMACgBAEQgBANADARIAGAeQAOBLAzA2QAfAhALAZIgUAGQgKACAEAHIAnBTIAPAfQAIASADAPIgEABIgDgBIgHgFQgFgDgCABQgHgOgXgdQgFgGgFACQgCABgCACQgDAEACACQAeAhASAyQAQAtADAyQAAADgEACQgIgCgCgIQADgGgBAAIgHgCQgBgBgCgNQgBgJgHABQgDAAgCADQgCADAAAEIAHBHQACAugdAlQgFAIAAAHQgYAjgLAyIgBADIgBADQgBABgCAFQgDAGgFADQgEAjAFAqQADAZAKA0IArDgQgDA0ASA1QATA2AjAjQAZAXAggOQALgFALAFQALADAGALQAMATAGAhIAHArQgNAKgSAFIgdAIQAAgwgOgcQgGgNgSgBQgQgBgFAGQgDAEADAEQACADAKgCQALgBAEACQAJAEAFAdQAFAZgBAUIhBADQgWABgVgGQgPgGgMgTIgkhAQgFgJgZgbQgWgZgEgOIgahXQgJghgghBIgZg1QgNgbgFguIgJhdQAOgYAUgYQACgBgCgFQgFgMgeAqIgJhqQAAgDgDgBQgCgBgDABQgGACABAGIAJB4IAFBNQAFArAHAhIAVBkQARBSAcBKIAwCFQANAiAjAaIAkATQARAHAGAfQADAQgGAVQgEAPAFACQADABADgBQADAAABgDQAJgXgDgYQgDgbgPgTQAcAEAMAlQAFASgHARQgHAQgRAKQgkAUg1gGIgaAFgAKDQvQgCACAAACQAAAHAGAAIAdAEQAQAEAEAOQALAigBAvQAAAHAGAAQACAAAFgEQACgxgLglQgIgZgXgDIgfgFIgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABgAJhICQgHABAAAFQACAhAIAhIATBRQATBNAAA/QAAAGAEADQAEACAEgDQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIAAgGQAAhAgPg/IgYhjQgJgnAAgWQAAgCgDgCIgDgCIgBABgAAGG/QgDACgBADQgBAFAHAEQAvAYAlAxQAUAZAIARQACACAEAAQADgBACgBQAFgEgFgHQgthOhJgoIgEgBIgDABgAgmFyIg0ATQgmATgcAaQggAfgMAiQgCAEACADQABADADAAQAFABAHgPQAKgWAOgPQAyg3BHgUIAGgBQADgBABgCQABgFgCgCQgCgDgDAAIgDABgAgSGrQAbAIAbAOQASAKAHADQAOAEAAgJQAAgGgFgBQgLgDgTgMQgkgUgugGQgwgHAFAQQACAGAGgBIAPgBQAUAAAYAFgALbCuQgDAAgBACIgIALQgsBAgVA0QgIAWgDAQQgFAVAJACQAHABACgLQADgWADgHQAYhIAzhEQACgCgBgDQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBABgAITopQgFABgCAGQAAAAAAAAQAAABAAAAQAAABAAABQAAAAABABQAAABAAAAQABABAAAAQABABAAAAQABAAAAAAQAuAAAqAPIAcAJQAOADABgIIAAgEQgCgCgCgBIgwgPQgkgLgiAAIgGAAgAGbo0IgwACQgJAAgCAFQgCAJAXAAQATAAAYgEQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQABgDgCgCQgBgDgEAAIgBAAgAKKo9QgBAGAIADQAuATAmgHQAGAAABgHQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgeAFgjgMQgPgFgGAAQgGAAgBAEgAEZsKQgVAfgGAlQgGAlALAkQAMAoAeAYQALAJAJABQAGABABgGQABgEgJgGQgOgHgJgLQgTgZgHgYQgRhBAmg8QACgEgEgFQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgEgBgBADgAJ1rsIAHADQAEABADgCQAEgDgDgHIgHgFQABgPgJgGQgFgFgGAAQgHgCgEADIgQASIgaABQgMACgBAHQAAAIAFgBQATgDAPAAQAWAAAQAGgAGYwLQgGACgBAEIgFAtIgGA0QgDAiAHAFQAHAFAIgEQAggOAlgaQACgCgBgDQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgEgEgEADQgrAcgXAKQgCgQAEghIAKhNQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIgEgBIgBAAgAHtv9QgVAQgWAZIgTAZQgCADABADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQADABAFgBIADgDIACgEQARgaAnggQAFgFgDgFQgBgCgEgBIgCAAIgDABgAHrwrQgDAAgCABIgSAhQgEAGAHADQAGADADgHIARgdQADgGgEgEIgDgBIgCABg");
	this.shape_846.setTransform(109.025,235);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_847.setTransform(71.675,311.675);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_848.setTransform(71.675,311.675);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_849.setTransform(71.675,311.675);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_850.setTransform(71.675,311.675);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_851.setTransform(71.675,311.675);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_852.setTransform(71.675,311.675);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_853.setTransform(71.675,311.675);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_854.setTransform(71.675,311.675);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_855.setTransform(71.675,311.675);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_856.setTransform(71.675,311.675);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_857.setTransform(71.675,311.675);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_858.setTransform(71.675,311.675);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAYQgZAZgjAAQgiAAgZgZQgZgYAAgkQAAgiAZgZQAYgZAjAAQAjAAAZAZQAZAZAAAig");
	this.shape_859.setTransform(98.025,318.475);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAYgZAjAAQAjAAAZAZQAZAZAAAiQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_860.setTransform(98.025,318.475);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_861.setTransform(98.025,318.475);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAYQgZAZgjAAQgiAAgZgZQgZgYAAgkQAAgiAZgZQAYgZAjAAQAjAAAZAZQAZAZAAAig");
	this.shape_862.setTransform(98.025,318.475);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAYgZAjAAQAjAAAZAZQAZAZAAAiQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_863.setTransform(98.025,318.475);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_864.setTransform(98.025,318.475);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAYQgZAZgjAAQgiAAgZgZQgZgYAAgkQAAgiAZgZQAYgZAjAAQAjAAAZAZQAZAZAAAig");
	this.shape_865.setTransform(98.025,318.475);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAYgZAjAAQAjAAAZAZQAZAZAAAiQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_866.setTransform(98.025,318.475);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_867.setTransform(98.025,318.475);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAYQgZAZgjAAQgiAAgZgZQgZgYAAgkQAAgiAZgZQAYgZAjAAQAjAAAZAZQAZAZAAAig");
	this.shape_868.setTransform(98.025,318.475);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAYgZAjAAQAjAAAZAZQAZAZAAAiQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_869.setTransform(98.025,318.475);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_870.setTransform(98.025,318.475);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_871.setTransform(117.525,315.325);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAYQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAig");
	this.shape_872.setTransform(126.5,323.875);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgZABgjQgBgiAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAiQAAAkgZAYQgaAZgjAAQgjAAgZgZg");
	this.shape_873.setTransform(126.5,323.875);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_874.setTransform(126.525,323.875);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_875.setTransform(117.525,315.325);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAYQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAig");
	this.shape_876.setTransform(126.5,323.875);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgZABgjQgBgiAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAiQAAAkgZAYQgaAZgjAAQgjAAgZgZg");
	this.shape_877.setTransform(126.5,323.875);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_878.setTransform(126.525,323.875);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_879.setTransform(117.525,315.325);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAYQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAig");
	this.shape_880.setTransform(126.5,323.875);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgZABgjQgBgiAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAiQAAAkgZAYQgaAZgjAAQgjAAgZgZg");
	this.shape_881.setTransform(126.5,323.875);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_882.setTransform(126.525,323.875);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_883.setTransform(126.525,335.675);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_884.setTransform(135.075,315.325);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_885.setTransform(117.525,315.325);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAYQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAig");
	this.shape_886.setTransform(126.5,323.875);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgZABgjQgBgiAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAiQAAAkgZAYQgaAZgjAAQgjAAgZgZg");
	this.shape_887.setTransform(126.5,323.875);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_888.setTransform(126.525,323.875);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_889.setTransform(145.725,335.775);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_890.setTransform(161.525,337.075);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_891.setTransform(142.375,327.225);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_892.setTransform(165.975,326.575);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAjg");
	this.shape_893.setTransform(154.25,327.25);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgaAiAAQAkAAAYAaQAaAYAAAjQAAAjgaAZQgYAZgkAAQgiAAgZgZg");
	this.shape_894.setTransform(154.25,327.25);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/ABQg+gBgtgsg");
	this.shape_895.setTransform(154.25,327.25);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_896.setTransform(145.725,335.775);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_897.setTransform(161.525,337.075);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_898.setTransform(142.375,327.225);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_899.setTransform(165.975,326.575);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAjg");
	this.shape_900.setTransform(154.25,327.25);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgaAiAAQAkAAAYAaQAaAYAAAjQAAAjgaAZQgYAZgkAAQgiAAgZgZg");
	this.shape_901.setTransform(154.25,327.25);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/ABQg+gBgtgsg");
	this.shape_902.setTransform(154.25,327.25);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_903.setTransform(145.725,335.775);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_904.setTransform(161.525,337.075);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_905.setTransform(142.375,327.225);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_906.setTransform(165.975,326.575);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAjg");
	this.shape_907.setTransform(154.25,327.25);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgaAiAAQAkAAAYAaQAaAYAAAjQAAAjgaAZQgYAZgkAAQgiAAgZgZg");
	this.shape_908.setTransform(154.25,327.25);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/ABQg+gBgtgsg");
	this.shape_909.setTransform(154.25,327.25);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_910.setTransform(145.725,335.775);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_911.setTransform(161.525,337.075);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_912.setTransform(142.375,327.225);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_913.setTransform(165.975,326.575);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAjg");
	this.shape_914.setTransform(154.25,327.25);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgaAiAAQAkAAAYAaQAaAYAAAjQAAAjgaAZQgYAZgkAAQgiAAgZgZg");
	this.shape_915.setTransform(154.25,327.25);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/ABQg+gBgtgsg");
	this.shape_916.setTransform(154.25,327.25);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_917.setTransform(172.175,339.875);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_918.setTransform(187.975,341.125);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_919.setTransform(180.7,331.3);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgaAiAAQAjAAAaAaQAZAZAAAiQAAAjgZAZQgaAZgjAAQgjAAgYgZg");
	this.shape_920.setTransform(180.7,331.3);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_921.setTransform(180.7,331.325);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_922.setTransform(172.175,339.875);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_923.setTransform(187.975,341.125);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_924.setTransform(180.7,331.3);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgaAiAAQAjAAAaAaQAZAZAAAiQAAAjgZAZQgaAZgjAAQgjAAgYgZg");
	this.shape_925.setTransform(180.7,331.3);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_926.setTransform(180.7,331.325);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_927.setTransform(172.175,339.875);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_928.setTransform(187.975,341.125);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_929.setTransform(180.7,331.3);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgaAiAAQAjAAAaAaQAZAZAAAiQAAAjgZAZQgaAZgjAAQgjAAgYgZg");
	this.shape_930.setTransform(180.7,331.3);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_931.setTransform(180.7,331.325);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_932.setTransform(172.175,339.875);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_933.setTransform(187.975,341.125);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_934.setTransform(180.7,331.3);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgaAiAAQAjAAAaAaQAZAZAAAiQAAAjgZAZQgaAZgjAAQgjAAgYgZg");
	this.shape_935.setTransform(180.7,331.3);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_936.setTransform(180.7,331.325);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_937.setTransform(216.225,342.225);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_938.setTransform(197.125,332.425);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_939.setTransform(200.025,323.875);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_940.setTransform(208.975,332.425);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_941.setTransform(208.975,332.425);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_942.setTransform(208.975,332.425);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_943.setTransform(216.225,342.225);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_944.setTransform(197.125,332.425);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_945.setTransform(200.025,323.875);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_946.setTransform(208.975,332.425);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_947.setTransform(208.975,332.425);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_948.setTransform(208.975,332.425);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_949.setTransform(216.225,342.225);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_950.setTransform(197.125,332.425);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_951.setTransform(200.025,323.875);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_952.setTransform(208.975,332.425);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_953.setTransform(208.975,332.425);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_954.setTransform(208.975,332.425);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_955.setTransform(208.975,344.225);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_956.setTransform(216.225,342.225);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_957.setTransform(197.125,332.425);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_958.setTransform(200.025,323.875);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_959.setTransform(208.975,332.425);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_960.setTransform(208.975,332.425);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_961.setTransform(208.975,332.425);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_962.setTransform(227.925,339.825);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_963.setTransform(236.475,343.125);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_964.setTransform(224.625,331.3);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_965.setTransform(245.025,322.775);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_966.setTransform(236.475,318.625);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_967.setTransform(227.525,322.775);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAaAAAig");
	this.shape_968.setTransform(236.5,331.3);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAYgaAjAAQAjAAAaAaQAZAZAAAiQAAAjgZAZQgaAZgjAAQgjAAgYgZg");
	this.shape_969.setTransform(236.5,331.3);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/ABQg+gBgtgsg");
	this.shape_970.setTransform(236.475,331.3);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_971.setTransform(227.925,339.825);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_972.setTransform(236.475,343.125);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_973.setTransform(224.625,331.3);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_974.setTransform(245.025,322.775);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_975.setTransform(236.475,318.625);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_976.setTransform(227.525,322.775);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAaAAAig");
	this.shape_977.setTransform(236.5,331.3);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAYgaAjAAQAjAAAaAaQAZAZAAAiQAAAjgZAZQgaAZgjAAQgjAAgYgZg");
	this.shape_978.setTransform(236.5,331.3);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/ABQg+gBgtgsg");
	this.shape_979.setTransform(236.475,331.3);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_980.setTransform(227.925,339.825);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_981.setTransform(236.475,343.125);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_982.setTransform(224.625,331.3);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_983.setTransform(245.025,322.775);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_984.setTransform(236.475,318.625);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_985.setTransform(227.525,322.775);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAaAAAig");
	this.shape_986.setTransform(236.5,331.3);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAYgaAjAAQAjAAAaAaQAZAZAAAiQAAAjgZAZQgaAZgjAAQgjAAgYgZg");
	this.shape_987.setTransform(236.5,331.3);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/ABQg+gBgtgsg");
	this.shape_988.setTransform(236.475,331.3);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_989.setTransform(227.925,339.825);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_990.setTransform(236.475,343.125);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_991.setTransform(224.625,331.3);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_992.setTransform(245.025,322.775);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_993.setTransform(236.475,318.625);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_994.setTransform(227.525,322.775);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAaAAAig");
	this.shape_995.setTransform(236.5,331.3);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAYgaAjAAQAjAAAaAaQAZAZAAAiQAAAjgZAZQgaAZgjAAQgjAAgYgZg");
	this.shape_996.setTransform(236.5,331.3);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/ABQg+gBgtgsg");
	this.shape_997.setTransform(236.475,331.3);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_998.setTransform(263.725,339.725);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_999.setTransform(275.475,327.225);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1000.setTransform(272.275,319.375);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1001.setTransform(263.725,315.225);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1002.setTransform(254.775,319.375);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgjAAgZgZQgZgZAAgkQAAgiAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAig");
	this.shape_1003.setTransform(263.75,327.9);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_1004.setTransform(263.75,327.9);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1005.setTransform(263.725,339.725);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1006.setTransform(275.475,327.225);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1007.setTransform(272.275,319.375);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1008.setTransform(263.725,315.225);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1009.setTransform(254.775,319.375);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgjAAgZgZQgZgZAAgkQAAgiAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAig");
	this.shape_1010.setTransform(263.75,327.9);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_1011.setTransform(263.75,327.9);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1012.setTransform(263.725,339.725);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1013.setTransform(275.475,327.225);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1014.setTransform(272.275,319.375);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1015.setTransform(263.725,315.225);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1016.setTransform(254.775,319.375);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgjAAgZgZQgZgZAAgkQAAgiAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAig");
	this.shape_1017.setTransform(263.75,327.9);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_1018.setTransform(263.75,327.9);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1019.setTransform(263.725,339.725);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1020.setTransform(275.475,327.225);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1021.setTransform(272.275,319.375);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1022.setTransform(263.725,315.225);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1023.setTransform(254.775,319.375);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgjAAgZgZQgZgZAAgkQAAgiAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAig");
	this.shape_1024.setTransform(263.75,327.9);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_1025.setTransform(263.75,327.9);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1026.setTransform(290.875,334.875);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1027.setTransform(298.15,332.875);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1028.setTransform(279.025,323.075);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1029.setTransform(299.425,314.525);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1030.setTransform(290.875,310.375);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1031.setTransform(281.925,314.525);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1032.setTransform(290.9,323.05);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgagZAAgkQAAgiAagaQAZgZAiAAQAkAAAYAZQAZAaAAAiQAAAkgZAZQgYAZgkgBQgiABgZgZg");
	this.shape_1033.setTransform(290.9,323.05);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgsQAtgtA+AAQA/AAAtAtQAsAsAAA+QAAA/gsAtQgtAtg/AAQg+AAgtgtg");
	this.shape_1034.setTransform(290.875,323.05);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1035.setTransform(290.875,334.875);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1036.setTransform(298.15,332.875);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1037.setTransform(279.025,323.075);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1038.setTransform(299.425,314.525);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1039.setTransform(290.875,310.375);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1040.setTransform(281.925,314.525);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1041.setTransform(290.9,323.05);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgagZAAgkQAAgiAagaQAZgZAiAAQAkAAAYAZQAZAaAAAiQAAAkgZAZQgYAZgkgBQgiABgZgZg");
	this.shape_1042.setTransform(290.9,323.05);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgsQAtgtA+AAQA/AAAtAtQAsAsAAA+QAAA/gsAtQgtAtg/AAQg+AAgtgtg");
	this.shape_1043.setTransform(290.875,323.05);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1044.setTransform(290.875,334.875);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1045.setTransform(298.15,332.875);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1046.setTransform(279.025,323.075);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1047.setTransform(299.425,314.525);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1048.setTransform(290.875,310.375);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1049.setTransform(281.925,314.525);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1050.setTransform(290.9,323.05);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgagZAAgkQAAgiAagaQAZgZAiAAQAkAAAYAZQAZAaAAAiQAAAkgZAZQgYAZgkgBQgiABgZgZg");
	this.shape_1051.setTransform(290.9,323.05);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgsQAtgtA+AAQA/AAAtAtQAsAsAAA+QAAA/gsAtQgtAtg/AAQg+AAgtgtg");
	this.shape_1052.setTransform(290.875,323.05);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1053.setTransform(290.875,334.875);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1054.setTransform(298.15,332.875);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1055.setTransform(279.025,323.075);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1056.setTransform(299.425,314.525);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1057.setTransform(290.875,310.375);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1058.setTransform(281.925,314.525);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1059.setTransform(290.9,323.05);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgagZAAgkQAAgiAagaQAZgZAiAAQAkAAAYAZQAZAaAAAiQAAAkgZAZQgYAZgkgBQgiABgZgZg");
	this.shape_1060.setTransform(290.9,323.05);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgsQAtgtA+AAQA/AAAtAtQAsAsAAA+QAAA/gsAtQgtAtg/AAQg+AAgtgtg");
	this.shape_1061.setTransform(290.875,323.05);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1062.setTransform(307.225,326.775);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1063.setTransform(323.025,328.025);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1064.setTransform(303.925,318.225);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1065.setTransform(315.775,305.55);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAjg");
	this.shape_1066.setTransform(315.775,318.2);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgZgaAAgjQAAgjAZgZQAZgZAiABQAjgBAZAZQAZAZAAAjQAAAjgZAaQgYAZgkAAQgiAAgZgZg");
	this.shape_1067.setTransform(315.775,318.2);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1068.setTransform(315.775,318.225);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f().s("#020203").p("AVaAVQiEADivgDQlegIjXgkInjASQopAPiiAHIqdAH");
	this.shape_1069.setTransform(204.0788,307.6742);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#020203").p("A2gAoQGAAIAJgIQABgBEKgUQEhgVBqgWIDegOQDngMAuAPIDDATQDPASA8gCINhAT");
	this.shape_1070.setTransform(202.2757,300.9007);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f().ls(["#8E7059","#4B3218"],[0,1],-48.8,0.1,52.8,0.1).p("AD5NIQA5hPAphVQAXgsAdhRQA6ijAfi4QAOg+AKhUQAVimgRhoQgCg1gUhzQgqjmhhk1IAQBPQAOBXgKAgQgZhUhBi9IAUBlQATBpgGAQQgQgbgRgnQghhOgFg7IgFAuQgBA4APAsQgdgrgbg1QgphQgEgxIgCAyQgCBTADAUQgbgdgggsQhAhZgYhJIgBASQgBATABAEIAxCcQA3C7AgCcIAYDGQATDpgcCtIgMA7QgQBKgUBHQhBDjhXByQgoBGhCBeQiFC7iGB2IhEAxQBzg/B+hCQD6iFAzgQIAjgQQAqgQAggEQBjgOgRBhQgBAGgBAGQgdAugxA+QhiB7hkBMIghAAQBBguBUhUQBdhbBFhigACbweQgCgQADgN");
	this.shape_1071.setTransform(227.544,190.2011);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.lf(["#8E7059","#4B3218"],[0.576,1],-50.4,0,50.4,0).s().p("AhSR8QBCguBUhUQBchbBGhiQARhhhjAOQghAFgqAPIgjAQQgyARj7CEQh9BChzBAIBDgyQCGh2CFi7QBDhdAnhHQBXhxBBjkQAVhGAQhLIALg6QAciugTjoIgYjGQggidg3i7IgvicQgBgEAAgSIABgTQAXBJBABZQAgAsAcAeQgDgVAChTIABgyQAFAxApBRQAbA1AdAqQgQgsACg3IAEgvQAFA7AiBOQARAoAPAbQAHgRgThoIgVhmQBCC9AZBUQAJgggNhXIgQhPQBhE2ApDmQAVByABA1QARBogVCmQgKBUgOA/QgeC4g6CiQgdBRgXAtQgpBUg5BPIgDAMQgdAugxA+QhiB8hjBLg");
	this.shape_1072.setTransform(229.4553,191.3);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1073.setTransform(98.65,344.15);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1074.setTransform(113,345.875);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1075.setTransform(131.5,346.925);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1076.setTransform(148.25,348.025);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1077.setTransform(179.15,348.85);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAIABAHAGQAHAGAAAIQAAAJgHAGQgHAHgIgBQgIABgGgHg");
	this.shape_1078.setTransform(193.75,348.85);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1079.setTransform(211.35,348.85);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_1080.setTransform(229.45,348.025);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1081.setTransform(251.2,346.725);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAGAGQAGAGAAAIQAAAJgGAGQgGAHgJgBQgIABgGgHg");
	this.shape_1082.setTransform(273.975,345.25);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_1083.setTransform(287.45,343.75);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1084.setTransform(304.25,341.4);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1085.setTransform(317.7,340.05);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#584D38").s().p("AAVAHIgVgBQgiAAgIgMQALAGAfADQAFACAQgCQAPgBAHACQgHADgLAAIgEAAg");
	this.shape_1086.setTransform(442.825,203.6286);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#584D38").s().p("AglAEIgMgGIANACIAaAFQANADALgCQANgEAWgLQgMAPgXABQgMADgKAAQgQAAgNgGg");
	this.shape_1087.setTransform(444,202.015);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#836D5D").s().p("AgUAaIgUAAIgCgBIgbgaIAaADIgXgYIA7AWQAVADAVgHQAVgIAOgRQgLAUgXAJQgVAKgXgDIgYgHIAPAQIgXgDIAEADIARABQAjAJAYgJQAdgLABgjQAEAlgfAOQgQAIgUAAQgMAAgPgEg");
	this.shape_1088.setTransform(442.9975,201.9512);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#836D5D").s().p("AguAYIgQgQIAZAEIgTgTIApANQAgAEAagRQANgJAHgKQAAAugsAHg");
	this.shape_1089.setTransform(443.7003,201.675);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#53554D").s().p("AhHAcQAcgcAvgdQAQgBAcgJIAsgNQgUAMgYAJQgbALgNAAQguAdgeAXQgQANgHAIQAFgKAPgPg");
	this.shape_1090.setTransform(426.375,197.55);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#322A20").s().p("Ag7BBQgQgBgRgKQgYgUACgbQABgXAXgYQBNgkBGATQAUAFAaAPQAFACAEAGQAEAHgBAGQAAgGgEgGQgEgFgGgBIgigOQgigKgsAGQgnAFghAPQgVAVgCASQgBALAFAMQAFAMAIAHQAQAKANACQATADgBgTQADAUgSAAIgCAAg");
	this.shape_1091.setTransform(429.0023,209.7883);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#322A20").s().p("AglAVQAigMBDAAQAogGALgUQAKgVgUgfQgKAOgKACQgNACgDgXQAFAUALgDQAIgCAKgQIACgDQAeAkgMAcQgLAZguAIIg6ACQghACgWAIQgSAHgWAOIgmAbQAsgsAsgOg");
	this.shape_1092.setTransform(430.9343,196.85);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#433520").s().p("AggAWQgNgIgDgMQgDgGADgKQABALADADQAJARAcADQANgFARgOQARgOAKgQQgGAVgPAPQgQARgUAGQgOgBgLgHg");
	this.shape_1093.setTransform(408.9182,195.275);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#433520").s().p("AgpAwQgPgCgEgOIgFgaQgBgNAEgMQAhgcAkgBQAqgDAQAoQADAGgEADQgDADgGgBQgHgPgRgHQgRgIgPAJQgYARAOAuIgDACQgKAFgKAAIgHgBgAAHgpQgYAFgkAWQgGAOAHAdQACALAMACQAJABAKgEQgKgwAagPQAQgJASAIQARAIAIARQAFAAADgCQADgDgDgFQgPgfgfAAIgLAAg");
	this.shape_1094.setTransform(421.3255,192.8005);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f().s("#494539").p("AABASQgdAAAPgRQAHgIAMgIIAMAQQAGARgXAAg");
	this.shape_1095.setTransform(422.8815,193.6793);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#544939").s().p("AgMASQgMgnAYgSQAFgDgBgMIgDgTQAQAfgOAKQgLAMADAVQABAKAHAaIAOAlQgUgagJgeg");
	this.shape_1096.setTransform(417.1361,223.525);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#544939").s().p("AgHAHQgMgNAAgRQAdAkAKALQgQgCgLgPg");
	this.shape_1097.setTransform(411.9,232.125);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#544939").s().p("AgCBmQgTgUACgTIAGgLQAGgagUgrIgDgGQAAgEAGgEIATgLQAKgIABgIIgDgJIgGghQgEgVgJgJQAHAEAFALIAFATQAIAbAEAJQADAKgMAKIgXARQAOAaADAfQABASgJAMIgBACIAAAFQACAOAOASIAaAcQgXgTgKgKg");
	this.shape_1098.setTransform(414.6731,218.8);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#544939").s().p("AgPBNQgNgUADgMQAJgOABgRQAAgQgIgPIgLgNQgGgIACgHQAFgSAYgOIAFgCIAAABIABgBIgBAAQAAgRgHgXQgEgOgGgCQAHACAGANQAJAbAAAQQAAAEgDABIgBAAQgNAHgKAOQgFAJADAEQAKAKADAGQAKARAAASQAAAVgLAOQgCAFADAIIAGAMQAJAOANASIAaAfQgogmgOgVgAgEhPIAAAAg");
	this.shape_1099.setTransform(413.2515,220.875);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#8F8777").s().p("AAWgRQgOAUgdAPQALgaAggJg");
	this.shape_1100.setTransform(358.55,295.45);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#8F8777").s().p("AgRAHIAAgBQAOgPAWABQgNAPgUABIAAAAIgCABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_1101.setTransform(391.8,273.0717);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#8F8777").s().p("AAKgNQgCATgRAIQACgTARgIg");
	this.shape_1102.setTransform(368.725,289.5);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#8F8777").s().p("AgLAFQAJgPAVgKIgMAQIAJgCQgHAIgbATg");
	this.shape_1103.setTransform(372.725,287.55);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#8F8777").s().p("AAegRQgLAKgSAJIgeAPQAPgcAsgGg");
	this.shape_1104.setTransform(381.35,280.6);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#8F8777").s().p("AgKgBQAKgLAMAAIANgJQgDAHgFAJQgPADgFAIQgLAMgKAFQAKgTAEgFg");
	this.shape_1105.setTransform(390.3,277.1);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#8F8777").s().p("AgOADQAFgHAJgCQAHgDAJADQgFAFgIADIgNAEIgDADQgDgCACgEg");
	this.shape_1106.setTransform(398.5932,268.2375);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#8F8777").s().p("AgNABQAKgHANACIAAABQABABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQgGAFgHAAQgGAAgHgEg");
	this.shape_1107.setTransform(402.595,263.8763);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#8F8777").s().p("AgGgGQAJgIAKAFIgNAJQgGAGgEAGQgGgLAKgHg");
	this.shape_1108.setTransform(406.2274,260.863);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.4,0.3,0.5).s().p("AgJACQACgDAEgDQAIgGAJABQgEAHgIAFIgGAFIgJADQAAgEAEgFg");
	this.shape_1109.setTransform(351.4722,304.1481);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.8,0.7,0.9).s().p("AgGAFIgEgBIgCAAIgBgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABAAIAEgCIAIgCQAHgBAHAEQgFAEgJACIgCAAIgEAAg");
	this.shape_1110.setTransform(374.2667,292.615);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.8,0.6,0.8).s().p("AgEgBQADgGAFgDQADAGgCAGQgDAGgFADQgDgGACgGg");
	this.shape_1111.setTransform(358.725,301.5);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.8,0.6,0.8).s().p("AgJAFQAAgFADgCIAEgFQAFgFAGgBIgFALIAAABIAHAAQgGAGgIAFIgHADg");
	this.shape_1112.setTransform(361.825,300.8);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-0.9,0.7,0.9).s().p("AgNgBQAEgDAHgCQAMgEAMAEQgGAEgQAFIgKACIgLAEQABgGAHgEg");
	this.shape_1113.setTransform(367.3,296.6683);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.5,0.6).s().p("AgJgCIAEgEQABgCAEgBQADgBAGACIAHgFIgEALIAAABIgDABIgHAAIgCAAIgHAJQgEAEgEABIAGgQg");
	this.shape_1114.setTransform(374.225,296.125);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.7,0.6,0.9).s().p("AgLAEIgBgDQABgBADgCQADgDAFAAQAHAAAGAFQgFADgIABIgFAAIgCAAIgBAAIgBACg");
	this.shape_1115.setTransform(378.875,289.925);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-1,0.8,0.9).s().p("AAAAFQgIgDgDgFQAFgCAHABIAHADIACAAIACABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgBABIgCABIgCABIgDAAIgDAAg");
	this.shape_1116.setTransform(381.17,287.1107);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.4,0.5).s().p("AgJACQgBgEAFgEQAEgDAEABQAEABADAEIgGADIgEABQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgDAGQgEgCgBgFg");
	this.shape_1117.setTransform(383.3417,285.1875);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.6,0.7).s().p("AgJAEIAFgHQAHgIAIgCQgBAIgHAIIgFAGIgIAFQgBgEACgGg");
	this.shape_1118.setTransform(353.7083,312.625);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.6,0.5,0.7).s().p("AgLAHIgBgBQgBgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIABAAIADgDIAHgEQAGgDAJACQgEAFgJAEIgGACIgDABIAAgBIgBAAIgBABg");
	this.shape_1119.setTransform(372.93,295.8386);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.9,0.7,0.9).s().p("AgEAAQACgHAEgEQAEAGgBAGQgBAGgFAFQgEgGABgGg");
	this.shape_1120.setTransform(360.1,308.25);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.9,-1,0.4,0.7).s().p("AgIAHQgBgEACgDIADgGQAEgGAFgDIgDAMIAAACIAIgDQgDAGgIAIIgGAGg");
	this.shape_1121.setTransform(362.9938,306.825);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.6,0.4,0.5).s().p("AgNABQADgDAHgEQAKgGAMAAQgGAHgMAHIgJAFQgGADgEADQAAgGAFgGg");
	this.shape_1122.setTransform(367.1979,301.5482);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.9,0.7,0.9).s().p("AgJAAIACgFIAFgEQADgCAFABIAGgGIgBALIAAABIgKAEIgBAAIgEAKQgDAFgEADQAAgNACgFg");
	this.shape_1123.setTransform(373.7833,299.2);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.6,0.4,0.7).s().p("AgKAGIgBgCQAAgEACgBQACgCAFgCQAHgDAHAFQgEADgIADIgEABIgCAAIgBABIAAACg");
	this.shape_1124.setTransform(376.75,292.1304);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.9,0.7,0.8).s().p("AgMAAQAFgDAIgBIAFABIACAAIAAAAIACAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIgBABIgBACIgCABIgHABQgHAAgGgFg");
	this.shape_1125.setTransform(378.2,288.7);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.8,0.5,0.5).s().p("AgIAEQgCgEAEgFQADgEAEAAQAFAAADADIgIAGIgBADIgBAHQgEgCgDgEg");
	this.shape_1126.setTransform(379.8019,286.375);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-1,0.7,0.9).s().p("AgHAGQABgEACgEQAFgJAHgEQABAIgFAJIgEAHIgGAHQgCgDABgHg");
	this.shape_1127.setTransform(385.8858,283.1);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-0.4,0.4,0.5).s().p("AgJAJIgBAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIAAgBIACgEIAFgEQAIgFAHAAQgDAIgHAEQgCADgDAAIgEABIAAAAIgBABg");
	this.shape_1128.setTransform(401.25,262.6977);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-0.9,0.8,1).s().p("AgEABQgBgGAFgFQAEAEABAGQAAAGgEAFQgFgFAAgFg");
	this.shape_1129.setTransform(391.2917,277.5);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1,-1.2,0.5,0.9).s().p("AgHAJIgBgJIACgFQAEgHADgEIAAAOIAIgEQgCAHgHAJIgDAHg");
	this.shape_1130.setTransform(393.8,275.525);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.7,0.5,0.6).s().p("AgMAEQACgEAFgFQAKgJALgBQgFAIgKAJIgHAGIgJAIQgCgEAFgIg");
	this.shape_1131.setTransform(396.8192,269.45);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.8,-1.1,1,1.3).s().p("AgJACIACgFQAAgDAEgCIAHgDIAEgHQACAFAAAGIAAABIgIAGIgBAAIgBADIgCAIQgCAHgCABIgDgRg");
	this.shape_1132.setTransform(402.75,265.8);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.6,0.4,0.4).s().p("AgIAIIgCgDQgBgBACgEIAGgFQAHgEAHADQgDAFgHAEIgEACIgCAAIgBABIAAACg");
	this.shape_1133.setTransform(404.205,258.3229);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.6,0.7).s().p("AgLACQAEgEAHgCIAGAAIABAAIACgBQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIABACIgCACIgBACIgHADIgEABQgFAAgEgEg");
	this.shape_1134.setTransform(404.95,254.6058);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.7,0.7,0.7).s().p("AgFAGQgEgFADgEQADgEAEgCQAFgBADACIgFAGIgCADIgBACIAAAHQgDAAgDgEg");
	this.shape_1135.setTransform(405.9433,251.9833);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.4,0.3,1.4).s().p("AgJAEIAFgHQAIgIAHgBQgCAIgGAHIgFAFIgIAFQgBgDACgGg");
	this.shape_1136.setTransform(375.9607,287.275);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.7,0.2,0.8).s().p("AgMAFQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIABgBIADgCIAHgEQAIgDAHACQgEAFgJAEIgGACIgEAAIABgBIgBABIgCAAg");
	this.shape_1137.setTransform(395.8917,271.3056);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.2,0.2,1.2).s().p("AgEAAQACgHAEgDQAEAGgBAFQgBAHgFADQgEgFABgGg");
	this.shape_1138.setTransform(382.55,283.175);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-1.7,0.2,1.3).s().p("AgJAHQAAgEACgEIADgGQAEgFAGgCIgEAMIAIgCQgEAHgHAHIgHAFg");
	this.shape_1139.setTransform(385.47,281.875);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.2,0.2,1.1).s().p("AgNAAQAEgDAGgDQALgHALACQgGAGgNAGIgJAFQgGADgDADQgBgGAGgGg");
	this.shape_1140.setTransform(389.9229,276.7609);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-1.6,0.3,1.8).s().p("AgJAAIACgFQACgDAEgBQADgCAFABIAFgGIAAALIgBABIgKAEIgBAAIgFAKQgDAFgEACQABgMACgFg");
	this.shape_1141.setTransform(396.5583,274.7);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.6,0.2,0.8).s().p("AgKAGIgBgDQAAgCACgCIAHgEQAIgCAGAEQgEAEgIADIgEABIgCgBIgBABIgBACg");
	this.shape_1142.setTransform(399.8458,267.7442);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.7,0.1,0.6).s().p("AgLAAQAGgEAFAAIAHABIABABIABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAgBAAQAAAAAAAAIgBABIgDADIgIABQgGAAgFgFg");
	this.shape_1143.setTransform(401.45,264.4);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-1,0.2,1).s().p("AgIAEQgCgEAEgFQAEgEAEAAQAEAAADADIgFAFIgDACIgBACIgCAHQgEgCgCgEg");
	this.shape_1144.setTransform(403.1554,262.125);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#8F8777").s().p("AgEgCQAFgIAIAAQgBAHgEAFIgJAJQgFgFAGgIg");
	this.shape_1145.setTransform(375.1935,283.7986);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#8F8777").s().p("AgNAFIgDAAIgBgBIAAgDIACgBQAQgJARAIQgLAGgNAAIgHAAgAgRABIAAAAIAAAAg");
	this.shape_1146.setTransform(394.725,271.7056);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#8F8777").s().p("AgGgKQAPAGgDAPQgOgGACgPg");
	this.shape_1147.setTransform(382.7063,281);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#8F8777").s().p("AgLgCQABgGAGgEQAAAJADAEQAHgBAGAAQgGAIgJAFQgJgGABgJg");
	this.shape_1148.setTransform(386.5643,280.125);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#8F8777").s().p("AgUACQAIgHAMgDQALgCALAEQgHAEgKACIgQAEIgFABQgDABgBADQgDgDADgEg");
	this.shape_1149.setTransform(389.4182,275.9636);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#8F8777").s().p("AgJAGQgEgGACgFQACgFAJAAIAGABIABgEQAEAFACAGIgQACIABAGQAAAFgCADIgFgIg");
	this.shape_1150.setTransform(398.7442,275.4);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#8F8777").s().p("AgNAFIgCgCQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIAEgDQAOgGAOAJQgKAFgQgBIABACIgBAAIgEgBg");
	this.shape_1151.setTransform(398.2417,268.9151);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#8F8777").s().p("AgTgDQAOgEASAFIACABIAEABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgGABgFAAQgNAAgMgIg");
	this.shape_1152.setTransform(397.8313,265.9679);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#8F8777").s().p("AgKABQgCgJAJgBQAJgBAGAGIgMAEIABABIAEAJQgLgBgEgIg");
	this.shape_1153.setTransform(398.7,263.9679);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#8F8777").s().p("AgDgFQAJgHANgCQgGAKgLAGQgFAFgQAIQADgMANgIg");
	this.shape_1154.setTransform(353.05,300);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#8F8777").s().p("AgPAFIAAAAIgEgBQAAAAAAgBQgBAAABgBQAAAAAAgBQABAAAAgBQASgJAVAIQgNAGgPAAIgIAAg");
	this.shape_1155.setTransform(385.65,284.1653);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#8F8777").s().p("AgNAJQACgSAWgHIgLASIAPgCQgJAJgUAIg");
	this.shape_1156.setTransform(368.05,295.35);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#8F8777").s().p("AgDgIQARgEARAEQgKAEgVAFQgUAEgKAGQAGgNAVgGg");
	this.shape_1157.setTransform(375.675,289.8309);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#8F8777").s().p("AgPAFQADgIAFgFQAHgFANADIAJgJQgBAHgFAKIgOAAQgDABgDAEIgHAJQgGAGgEACg");
	this.shape_1158.setTransform(385.675,289.275);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#8F8777").s().p("AgRABQABgDAEgBQAPgIAPALQgHACgJABIgOAAQgBAAAAABQAAAAAAAAQAAABgBABQAAAAAAABQgEgCABgEg");
	this.shape_1159.setTransform(392.215,280.523);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#8F8777").s().p("AgQgEQAMgDAQAHIAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABIgHACIgCAAQgOAAgKgKg");
	this.shape_1160.setTransform(395.2781,276.3859);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#8F8777").s().p("AgDgEQAHgGAKAAQgHANgUAIQABgKAJgFg");
	this.shape_1161.setTransform(349.675,308.675);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#8F8777").s().p("AgKAEIABAAQgBAAgBAAQAAABgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAMgKAPAIQgIAGgJAAIgIgBg");
	this.shape_1162.setTransform(372.4938,297.1241);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#8F8777").s().p("AAEgKQAGAOgOAHQgFgNANgIg");
	this.shape_1163.setTransform(356.9598,306);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#8F8777").s().p("AgJAFQABgOARgEIgGAMIAIAAQgFAGgQAIg");
	this.shape_1164.setTransform(360.05,305.3);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#8F8777").s().p("AgDgGQAMgDAMADQgIAGgMADIgWAGQADgKAPgFg");
	this.shape_1165.setTransform(365.5,301.1875);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#8F8777").s().p("AgFgHQAFgEAJADIAHgFQgBAFgDAHIgKABIgCAAIgGAIQgEAFgFABQAGgQAEgFg");
	this.shape_1166.setTransform(372.425,300.65);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#8F8777").s().p("AgKAFQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgCADgCQALgHAKAJQgKAGgKgCIgBAAIgBACIgBgBg");
	this.shape_1167.setTransform(377.0938,294.4211);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#8F8777").s().p("AgLgDQAJgDAJAEIABABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABQgBACgEAAIgEAAQgIAAgFgIg");
	this.shape_1168.setTransform(379.3625,291.6216);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#8F8777").s().p("AgJACQgBgHAIgDQAIgCAEAHQgJADgCADIgDAGQgFgDAAgEg");
	this.shape_1169.setTransform(381.5638,289.7171);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().ls(["#4C473C","#3C3124"],[0.42,0.855],-4.2,-9.5,12.4,12.8).p("AE9leQg2BLhSBeQijC5iHBZQgPAPgUAPQgnAegbgDQgRAFgPANQggAZAGAkIgnA7IBMBKQA9gQBkhIQDFiPC9kTg");
	this.shape_1170.setTransform(376.6379,280.7263);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#7B6D5F").s().p("Ak7EbIAmg7QgFgkAfgaQAQgMARgGQAaADAogdQAUgPAOgQQCIhXCji7QBRhdA2hMIgIDPQi9ESjGCPQhjBIg+ARg");
	this.shape_1171.setTransform(376.675,281.275);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAGAGQAGAGAAAIQAAAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1172.setTransform(242.375,353.7);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgHAGgHQAGgHAIAAQAJAAAGAHQAGAHABAHQgBAJgGAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1173.setTransform(297.7,372.45);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGABAIQgBAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1174.setTransform(312.1,370.325);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_1175.setTransform(328.25,366.8);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgHAIAAQAJAAAGAHQAGAHAAAHQAAAJgGAGQgGAHgJgBQgIABgGgHg");
	this.shape_1176.setTransform(340.375,362.9);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_1177.setTransform(351.05,358.925);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAHgGAHAAQAJAAAHAGQAFAGAAAIQAAAJgFAHQgHAFgJABQgHgBgHgFg");
	this.shape_1178.setTransform(361.65,352.5);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgHAGgHQAGgHAIAAQAJAAAGAHQAGAHABAHQgBAJgGAGQgGAHgJgBQgIABgGgHg");
	this.shape_1179.setTransform(373.05,346.25);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgHAGgHQAGgGAIAAQAIAAAHAGQAHAHAAAHQAAAJgHAHQgHAFgIABQgIgBgGgFg");
	this.shape_1180.setTransform(382.3,338.65);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgHAHgHQAGgHAIAAQAIAAAHAHQAHAHgBAHQABAJgHAGQgHAHgIgBQgIABgGgHg");
	this.shape_1181.setTransform(392,330.95);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHAAgIQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGgBAIQABAIgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_1182.setTransform(398.9,321.5);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_1183.setTransform(84,358.775);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgHAHgHQAHgHAHAAQAJAAAGAHQAHAHgBAHQABAJgHAHQgGAFgJAAQgHAAgHgFg");
	this.shape_1184.setTransform(92,360.75);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_1185.setTransform(100.05,363.625);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgHAHgHQAGgGAIAAQAJAAAHAGQAFAHAAAHQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_1186.setTransform(109.75,365.75);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_1187.setTransform(120.15,366.8);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgHAGgHQAGgGAIAAQAJAAAGAGQAHAHAAAHQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1188.setTransform(130.05,367.9);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAIAAAHAGQAHAHAAAHQAAAJgHAGQgHAHgIAAQgIAAgGgHg");
	this.shape_1189.setTransform(139.65,368);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgHAHgHQAGgGAIAAQAJAAAHAGQAFAHAAAHQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_1190.setTransform(149,367.9);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1191.setTransform(179.15,368.95);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAGAGABAIQgBAJgGAGQgGAHgJgBQgIABgGgHg");
	this.shape_1192.setTransform(190.7,368.95);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1193.setTransform(200.55,368.95);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1194.setTransform(210.85,368.95);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1195.setTransform(221.45,368.95);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1196.setTransform(232.525,368);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAIAAAHAGQAHAGAAAIQAAAJgHAGQgHAHgIAAQgIAAgGgHg");
	this.shape_1197.setTransform(243.15,368);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgHAHgHQAGgGAIAAQAJAAAHAGQAFAHAAAHQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_1198.setTransform(254.65,367.9);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1199.setTransform(265.45,366.8);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1200.setTransform(274.65,366.8);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgHAHgHQAGgGAIAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1201.setTransform(286.05,365.75);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAIAAAHAGQAHAGAAAIQAAAIgHAHQgHAHgIAAQgIAAgGgHg");
	this.shape_1202.setTransform(296.35,364.65);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_1203.setTransform(306.95,363.625);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_1204.setTransform(317.1,361.475);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHAAgIQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAIgHAHQgGAHgJAAQgIAAgGgHg");
	this.shape_1205.setTransform(328.25,359.35);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1206.setTransform(340.375,355.85);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAHgGAHgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJAAQgHAAgHgHg");
	this.shape_1207.setTransform(361.65,343.8);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgHAGgHQAGgHAIAAQAIAAAHAHQAHAHAAAHQAAAJgHAHQgHAFgIAAQgIAAgGgFg");
	this.shape_1208.setTransform(373.2,336.9);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHABgIQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAIgFAHQgHAGgJAAQgIAAgGgGg");
	this.shape_1209.setTransform(382.9,329.6);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAIgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_1210.setTransform(390.95,321.5);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHgBgIQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAIgHAHQgGAHgJAAQgIAAgGgHg");
	this.shape_1211.setTransform(397.8,312.9);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1212.setTransform(404.05,305.45);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1213.setTransform(90.65,352.5);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgHAHgHQAGgGAIAAQAJAAAHAGQAFAHAAAHQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_1214.setTransform(109.75,355.85);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgHAGgHQAGgGAIAAQAJAAAGAGQAHAHAAAHQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1215.setTransform(130.05,358);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAIAAAHAGQAHAGAAAIQAAAJgHAGQgHAGgIAAQgIAAgGgGg");
	this.shape_1216.setTransform(137.5,358.625);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1217.setTransform(148.25,358.625);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1218.setTransform(157.5,358.625);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHABgIQgBgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAIgFAHQgHAHgJAAQgIAAgGgHg");
	this.shape_1219.setTransform(167.35,359.35);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHgBgIQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAIgHAHQgGAHgJAAQgIAAgGgHg");
	this.shape_1220.setTransform(178.1,359.35);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAIAAAHAGQAHAGAAAIQAAAJgHAGQgHAGgIAAQgIAAgGgGg");
	this.shape_1221.setTransform(199.95,358.625);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgHAHgHQAGgGAIAAQAJAAAHAGQAFAHAAAHQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_1222.setTransform(221.45,358);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgHAGgHQAGgGAIAAQAJAAAGAGQAGAHAAAHQAAAJgGAHQgGAFgJABQgIgBgGgFg");
	this.shape_1223.setTransform(242.075,358);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1224.setTransform(263.3,348.85);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgHAHgHQAGgGAIAAQAJAAAGAGQAHAHgBAHQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1225.setTransform(264.35,355.85);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_1226.setTransform(306.95,352.5);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1227.setTransform(327.1,349.5);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAGAGQAGAGABAIQgBAJgGAGQgGAHgJgBQgIABgGgHg");
	this.shape_1228.setTransform(339.2,345.25);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAHgGAHAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAGgJAAQgHAAgHgGg");
	this.shape_1229.setTransform(361.65,334.775);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgHAIAAQAIAAAHAHQAHAHAAAHQAAAJgHAGQgHAHgIgBQgIABgGgHg");
	this.shape_1230.setTransform(373.2,328.25);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHABgIQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAIgFAHQgHAGgJAAQgIAAgGgGg");
	this.shape_1231.setTransform(382.9,319.35);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHABgIQgBgIAHgGQAGgGAIgBQAIABAHAGQAHAGgBAIQABAIgHAHQgHAGgIAAQgIAAgGgGg");
	this.shape_1232.setTransform(392,310.6);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAIgHAHQgGAHgJAAQgIAAgGgHg");
	this.shape_1233.setTransform(399.95,299.85);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,1.2).s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_1234.setTransform(339.175,322.25);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1235.setTransform(346.425,319);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAHgHAHABQAJgBAHAHQAFAGAAAIQAAAJgFAGQgHAHgJgBQgHABgHgHg");
	this.shape_1236.setTransform(361.65,324.4);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAIAAAHAGQAHAHAAAHQAAAJgHAGQgHAHgIAAQgIAAgGgHg");
	this.shape_1237.setTransform(372.3,317.6);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHABgIQgBgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAIgFAHQgHAGgJAAQgIAAgGgGg");
	this.shape_1238.setTransform(380.75,310.6);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAHgGAHAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAGgJAAQgHAAgHgGg");
	this.shape_1239.setTransform(394.95,294.975);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1240.setTransform(401.15,286.8);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1241.setTransform(406.65,278.975);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.rf(["#020203","#494645"],[0.204,0.91],0.4,-0.1,0,0.4,-0.1,43.3).s().p("AorDuQCagUB9giQCRgnB6g3QCFg7BxhOQA5gpA1gwQA8g4AigxIAAgBIBzgBQhJCAiOBjQh3BTihA7QiLAzikAfQhRAPhLAIQhUAKhIADgAFgiDQgxAug9AtQg/Arg6AfQhHAng4AYIhCAbQgsAQgXAHIhEAVIhEAUQhsAchqASQB0gLCBgZQCegfCPgzQCjg8B1hOQBEguA0g1QAegeAXgcQATgXAagoIhvAEIAAgBIgBABIABAAQgfAvg9A8g");
	this.shape_1242.setTransform(346.825,371.075);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.rf(["#020203","#494645"],[0.204,0.91],0,0,0,0,0,42.8).s().p("ADoglQCahsA5heIBwgDQirEenmCAQiYAoilAUIiHAKQHhhCExjVg");
	this.shape_1243.setTransform(346.825,370.95);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#291C13").s().p("AoHFuIAygCIhigBQlrgIByhEQAygfLVisQLBimAlgoQA8iMAhhFQBCiLiBFgIByAAQi0FnpiBjQi+AejTABg");
	this.shape_1244.setTransform(317.8982,358.5696);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgDAAgCgCQgDgCAAgEQAAgHAIAAQAIAAAAAHg");
	this.shape_1245.setTransform(409.85,237.275);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#F4F4F2").s().p("AgFAGQgDgCAAgEQAAgHAIAAQAIAAAAAHQAAAIgIAAQgCAAgDgCg");
	this.shape_1246.setTransform(409.85,237.275);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgIAAAAgIQAAgCADgDQACgCADAAQAEAAACACQADADAAACg");
	this.shape_1247.setTransform(411.25,244.75);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgDACgDAAQgDAAgCgCQgDgDAAgDQAAgCADgDQACgCADAAQADAAADACQACADAAACg");
	this.shape_1248.setTransform(412.1,253.35);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#F4F4F2").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_1249.setTransform(412.1,253.35);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAADgDADQgCACgEAAQgDAAgCgCQgDgDAAgDQAAgDADgCQACgDADAAQAEAAACADQADACAAADg");
	this.shape_1250.setTransform(412.5,261.95);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#F4F4F2").s().p("AgFAGQgDgCABgEQgBgDADgCQADgCACgBQAEABACACQACACABADQgBAEgCACQgCACgEABQgCgBgDgCg");
	this.shape_1251.setTransform(412.5,261.95);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#F4F4F2").s().p("AgHAAQAAgIAHABQAIgBAAAIQAAADgCADQgCADgEAAQgHAAAAgJg");
	this.shape_1252.setTransform(429.375,267.85);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgHAAAAgJQAAgIAHAAQAEAAACADQADACAAADg");
	this.shape_1253.setTransform(428.55,276.25);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#F4F4F2").s().p("AgIAAQAAgHAIgBQADABADACQACACAAADQABAEgDACQgDACgDABQgIAAAAgJg");
	this.shape_1254.setTransform(428.55,276.25);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgIAAAAgIQAAgDADgCQACgCADAAQADAAADACQACACAAADg");
	this.shape_1255.setTransform(426.85,285.575);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#F4F4F2").s().p("AgIAAQAAgDADgCQADgCACAAQADAAADACQADACgBADQAAAIgIAAQgIAAAAgIg");
	this.shape_1256.setTransform(426.85,285.575);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDADgDAAQgIAAAAgJQAAgHAIAAQADAAADACQACADAAACg");
	this.shape_1257.setTransform(425.2,293.9);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#F4F4F2").s().p("AgHAAQAAgIAHAAQAEABACACQACACABADQgBAEgCACQgCACgEABQgHgBAAgIg");
	this.shape_1258.setTransform(425.2,293.9);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDACgDAAQgDAAgCgCQgDgCAAgEQAAgCADgDQACgCADAAQAIAAAAAHg");
	this.shape_1259.setTransform(423.1,302.825);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgCACgDQADgCACAAQAJAAAAAHQAAAEgDACQgCACgEAAQgCAAgDgCg");
	this.shape_1260.setTransform(423.1,302.825);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#F4F4F2").s().p("AgIAAQABgDACgCQACgCADAAQAIAAABAHQgBAIgIAAQgIAAAAgIg");
	this.shape_1261.setTransform(418.1,319.375);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgHAAAAgJQAAgDACgCQACgDADAAQAIAAAAAIg");
	this.shape_1262.setTransform(415.025,325.75);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQACgCADgBQAIABAAAHQAAAJgIAAQgHAAAAgJg");
	this.shape_1263.setTransform(415.025,325.75);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgHAAAAgIQAAgDACgCQADgCACAAQAEAAACACQADACAAADg");
	this.shape_1264.setTransform(411.65,331.725);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#F4F4F2").s().p("AgIAAQAAgDADgCQADgCACAAQADAAADACQACACAAADQABAIgJAAQgIAAAAgIg");
	this.shape_1265.setTransform(411.65,331.725);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgCAAgDgDQgCgCAAgEQAAgCACgDQADgCACAAQAEAAACACQADADAAACg");
	this.shape_1266.setTransform(407.8,338.9);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgDACgCQADgCACgBQAEABACACQADACAAADQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_1267.setTransform(407.8,338.9);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgIAAAAgIQAAgDADgCQACgCADAAQADAAADACQACACAAADg");
	this.shape_1268.setTransform(403.2,344.425);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQADgCACAAQADAAADACQACACAAADQABAIgJAAQgIAAABgIg");
	this.shape_1269.setTransform(403.2,344.425);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgHAAAAgJQAAgDACgCQACgDADAAQAIAAAAAIg");
	this.shape_1270.setTransform(398.075,345.25);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#F4F4F2").s().p("AgHAAQAAgCACgDQACgCADAAQAIgBAAAIQAAAJgIAAQgHAAAAgJg");
	this.shape_1271.setTransform(398.075,345.25);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgIAAAAgIQAAgHAIAAQAIAAAAAHg");
	this.shape_1272.setTransform(424.35,243.925);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#F4F4F2").s().p("AgHAAQgBgHAIAAQAJAAgBAHQABAIgJAAQgIAAABgIg");
	this.shape_1273.setTransform(424.35,243.925);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#F4F4F2").s().p("AgFAGQgDgCABgEQAAgIAHAAQAJAAAAAIQgBAEgCACQgCACgEAAQgCAAgDgCg");
	this.shape_1274.setTransform(419.7,237.65);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgIAAAAgJQAAgCADgDQACgCADAAQADAAADACQACADAAACg");
	this.shape_1275.setTransform(412.1,271.3);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#F4F4F2").s().p("AgIAAQAAgDADgCQADgCACAAQADAAADACQACACAAADQAAAJgIAAQgIAAAAgJg");
	this.shape_1276.setTransform(412.1,271.3);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCACgEAAQgCAAgDgCQgCgCAAgEQAAgHAHAAQAJAAAAAHg");
	this.shape_1277.setTransform(411.65,278.975);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgIAAAAgJQAAgCADgDQACgCADAAQADAAADACQACADAAACg");
	this.shape_1278.setTransform(411.1,284.9);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#F4F4F2").s().p("AgIAAQAAgDADgCQADgCACgBQADABADACQADACgBADQAAAIgIABQgIgBAAgIg");
	this.shape_1279.setTransform(411.1,284.9);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCACgEAAQgCAAgDgCQgCgCAAgEQAAgHAHAAQAJAAAAAHg");
	this.shape_1280.setTransform(409.55,292.825);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#F4F4F2").s().p("AgFAGQgCgCgBgEQAAgHAIAAQAIAAABAHQgBAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_1281.setTransform(409.55,292.825);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAADgDADQgCACgEAAQgHAAAAgIQAAgDACgCQADgCACAAQAEAAACACQADACAAADg");
	this.shape_1282.setTransform(408.3,299.475);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#F4F4F2").s().p("AgIAAQABgDACgCQACgCADAAQADAAADACQACACAAADQABADgDADQgDACgDAAQgIAAAAgIg");
	this.shape_1283.setTransform(408.3,299.475);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgCADgEAAQgHAAAAgJQAAgHAHAAQAIAAAAAHg");
	this.shape_1284.setTransform(406.625,306.3);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAEgCACQgCACgEABQgHAAAAgJg");
	this.shape_1285.setTransform(406.625,306.3);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#F4F4F2").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQADAAADADQACADAAACQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_1286.setTransform(399.95,326.6);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQAIAAAAAHQAAAJgIAAQgDgBgCgCg");
	this.shape_1287.setTransform(398.075,333.4);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#F4F4F2").s().p("AgFAGQgDgCABgEQAAgHAHAAQAJAAAAAHQgBAEgCACQgCACgEAAQgCAAgDgCg");
	this.shape_1288.setTransform(394.5,339.975);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgHAAAAgJQAAgDACgCQACgDADAAQAIAAAAAIg");
	this.shape_1289.setTransform(392.825,345.25);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#F4F4F2").s().p("AgHAAQAAgCACgDQACgCADAAQAIgBAAAIQAAAJgIAAQgHAAAAgJg");
	this.shape_1290.setTransform(392.825,345.25);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgDAAgCgDQgDgCAAgEQAAgDADgCQACgDADAAQAJAAAAAIg");
	this.shape_1291.setTransform(429.75,258.5);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgDADABQAJAAgBAHQAAADgCADQgDADgDAAQgCAAgDgDg");
	this.shape_1292.setTransform(429.75,258.5);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_1293.setTransform(404.875,313.725);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_1294.setTransform(404.875,313.725);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgDAAgCgDQgDgCAAgEQAAgHAIAAQAJAAAAAHg");
	this.shape_1295.setTransform(402,320.3);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#F4F4F2").s().p("AgFAGQgCgDgBgDQAAgIAIAAQAIAAAAAIQABADgDADQgDACgDAAQgDAAgCgCg");
	this.shape_1296.setTransform(402,320.3);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAADgDADQgCACgEAAQgDAAgCgCQgDgDAAgDQAAgDADgCQACgDADAAQAJAAAAAIg");
	this.shape_1297.setTransform(429.75,249.3);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgCADAAQAJgBgBAIQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_1298.setTransform(429.75,249.3);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#8F8777").s().p("AAGgnQACAQgDAXIgFAoQgOghAUgug");
	this.shape_1299.setTransform(401.7981,333.625);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#8F8777").s().p("AgPAbQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBQAKgcAZgWQgGAVgWAcIgBADQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgBgBg");
	this.shape_1300.setTransform(417.225,276.4225);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#8F8777").s().p("AgLgXQAVATACAcQgUgUgDgbg");
	this.shape_1301.setTransform(408.625,316.975);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#8F8777").s().p("AgCAaQgQgVAJgkIAFAaQACAJACAHQAGgPAHgMQgBASgKAeg");
	this.shape_1302.setTransform(412.223,310.025);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#8F8777").s().p("AgLgDQALgZAVgUQgDAIgTAoQgOAcgCAVQgIgWAOgeg");
	this.shape_1303.setTransform(413.4578,294.925);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#8F8777").s().p("AgDAeIgHgTQgIgTAXgRIgCgWQAHAMADANIgKALQgEAGgBAFIAEAYQADAPgCAKIgGgTg");
	this.shape_1304.setTransform(422.7956,281.95);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#8F8777").s().p("AgPAVQgCgFABgFQAHgXAagLQgEAIgJALIgMARQgEAHAGAEIgCAAQgEAAgDgDg");
	this.shape_1305.setTransform(419.7219,264.5841);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#8F8777").s().p("AANgLIACgBIgEgCQAGgDADACQAEACgDAEQgPAUgbAGQAJgLAZgRg");
	this.shape_1306.setTransform(417.8942,255.95);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#8F8777").s().p("AADAWQgRgHAEgRQAEgQARgEQgKAPgBAFQgDAKAJAKIAEAFIAAAAIgHgBg");
	this.shape_1307.setTransform(417.856,249.3393);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#3C2E1E").s().p("AgHAiIAGgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgHgKgRQgJgOABgLQACgMAOgDQAKgCAMAFQgiADAHASQANAkgBAFQgBAFgEABIgCAAQgDAAgCgCg");
	this.shape_1308.setTransform(417.0452,266.1585);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#3C2E1E").s().p("AABAAQgRgOgGgJQARAFANAMQARAPgDAPQgGgLgPgNg");
	this.shape_1309.setTransform(423.7225,250.25);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#3C2E1E").s().p("AgDgIQAPgGAPAGQguAQgHAEQAGgOARgGg");
	this.shape_1310.setTransform(416.3,242.4625);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#3C2E1E").s().p("AgTAYQgVgYAWgWQASgUAfgDQgpAVgHARQgIAUAgAhQgQgJgKgNg");
	this.shape_1311.setTransform(416.6437,249.3);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#3C2E1E").s().p("AAUAaIgZgDQgWgGgKgDQALgBAXACQAUACALgBIgQgTQgMgOgDgJIAUASQAMAJAHAJIACAGQAAALgPAAIgDgBg");
	this.shape_1312.setTransform(421.85,257.9042);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#3C2E1E").s().p("AACAXIARgZIgTANQgYADgGgNQgGgMAQgSQAJgMAOgNIgMASQgNATgBAJQgCAMAVgDIAUgNQARgJAAANQgIAPgRASIgdAeQAGgJARgXg");
	this.shape_1313.setTransform(423.142,270.725);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#3C2E1E").s().p("AgKAbQAHgHAAgFIgEgGQgGgIgCgOQgBgQAIgFQAHgCAGAKQAJARAEADIABAAQACgBADgJQABAEgBAEQgFAQgVgdIgCgDQgEARAKAPQAEALgIAIQgJAHgMACIANgJg");
	this.shape_1314.setTransform(414.05,288.684);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#3C2E1E").s().p("AAKBDIgCgBIABgDQAIgtgBgUQAAgKgEgBQgCgCgIAHQgHAHgRAVQgZgZAIgeQAIgbAegTQgCgMgYgLQASAFAIAKQADAEAAAHIgBAAQgXASgHAWQgIAYAOASQANgOAHgGQAdgVgBApQAAAZgJAiQASALAGAMQAIAQgcADQArgJg1gdg");
	this.shape_1315.setTransform(417.3892,281.775);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#3C2E1E").s().p("AgTAdQAFgNASgWIACAAQAJgDgFgMIgKgSQAOAIAEANQAGAPgOAEIgSAYIgFAKQACABALgCQgGAGgHAAQgIAAACgLg");
	this.shape_1316.setTransform(417.4001,294.025);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#3C2E1E").s().p("AgPAtQAVgCAFgGQAFgIgNgPQgLACgHgFQgIgHAGgNQAJgTAUgSIgMAWQgHAMgDAKQgBAFAEABQADABAIgBIADgBIACACQARAWgIAMQgFAIgNAAQgGAAgJgCg");
	this.shape_1317.setTransform(418.0347,300.3862);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#3C2E1E").s().p("AgRAnQAEgQANgNIAJgoQAHghgJgDQgHABgQAMIAKgLQAGgGAGgBQASgBgFAnQgEAegIASQggAgAQAZQgOgMAGgVg");
	this.shape_1318.setTransform(414.6414,311.3247);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#3C2E1E").s().p("AgTA9QgIgZgCgQQgDgXAGgTQADgIAHgHQAaggALgUQAKgSgBgNQAEAMgIAVQgNAdgWAbQgTAYAMAzQADAKAWBDQgQgagMgig");
	this.shape_1319.setTransform(411.4309,307.825);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#3C2E1E").s().p("AgxAjQADgRAUgMIAogiQAbgaAKgNQgSAog2ApQgSAKgEANQgEAPAOAQQgUgOAEgTg");
	this.shape_1320.setTransform(409.3739,324.375);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#3C2E1E").s().p("AAcgdQAAAWgRARQgQARgWADQAkgaATghg");
	this.shape_1321.setTransform(406.975,329.575);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#3C2E1E").s().p("AgVBrQgQgGgFgNQgFgWAdgWQgQAPgDAPQgEAUAWAFQAKAFAJgIQAOgOAAgeIgFgwQgHgjAHgcQAHgjAcgOQghAYADA0QACAdAHA4QgBASgDAKQgEAOgKAIQgGAGgJAAQgFAAgGgCg");
	this.shape_1322.setTransform(402.2448,331.1793);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f().s("#1E1E1C").p("AgCoHIBYAAIAUAsQAaAtAjAIIgBBoQgGCCgSB7Qg8GLinC/IhPAAQBCiJA1jHQBpmMg+k0g");
	this.shape_1323.setTransform(410.955,291.2);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#1E1E1D").s().p("AilIJQBCiJA1jHQBpmMg+k1IBYAAIAUAsQAaAuAjAIIgBBoQgGCCgSB7Qg8GLinC/g");
	this.shape_1324.setTransform(411.1,291.2);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f().s("#4A4233").p("AgYokIARBNQAQBkgDB2QgIF7jHGnIB3AAQBGhFBGidQCNk7AFm7QgLgBgUgOQgogegshEg");
	this.shape_1325.setTransform(411.1091,291.325);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#4B4333").s().p("AjKIlQDHmnAHl7QAEh2gQhkIgRhNIBxAAQAsBEAoAeQAUAOALABQgFG7iOE7QhFCdhGBFg");
	this.shape_1326.setTransform(411.25,291.325);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#291C13").s().p("AsxGqQmLgkjqhmQhKgggwgjIioiVIhdhoIgZg8IgchrQEhDRFQBiQCnAyBtAHQGwAvLcgdQFtgPEYgYQG8gaFekYQCuiNBXiHQhHDhg5BpQgcA0gPAJQjZESnsCBQiaAoiiAUIiEANIqHADQkIAHiHAAQjDAAiDgNg");
	this.shape_1327.setTransform(216.35,351.5);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.lf(["#44301F","#411B14"],[0,0.204],-1.4,20.5,-13.6,401.9).s().p("A35DkQihhFh2hWIhWhJIgQhYQC5CRDHBdQBjAvA+ARQFcBsO3gZQHbgNGWgiQH4giFbk7QBrhjBQhzQAog5ASgmIgoCyQjoFDmLCgQh8Ayh+AcIhkARQiFAboQAQIn0AKQiAAIh5AAQpKAAmri1g");
	this.shape_1328.setTransform(217.55,331.4593);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f().s("#3C3123").p("AwuF+ICFAKQCmAMCkAHQISAWFJgdID5gQQESgUB+gTIBtgKQCGgVCDgyQGjiiDgmTIgDhuQhJCDiGCMQkMEXkxAwQkJAzmtAiQtYBCsxhXQh8gjiUg7Qknh3h1h9IAGA7QAHA7AMAHQAEADBMA4QBcBCBfA0QEvCoD7gFg");
	this.shape_1329.setTransform(216.8345,319.7542);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.lf(["#2F271D","#020203"],[0.059,0.263],0,0.9,-1.8,383.9).s().p("ApfGUQilgHimgLIiFgKQj7AFkuioQhgg1hchCIhQg7QgMgHgHg7IgGg6QB1B8EnB3QCUA8B8AiQMxBYNYhDQGtghEKgzQEwgxEMkXQCGiMBJiCIAEBuQjhGSmjCiQiDAziGAUIhsAKQh/ATkSAUIj5AQQi7ARj6AAQjAAAjlgKg");
	this.shape_1330.setTransform(216.9,320.4118);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f().ls(["#3C3123","#3C3124"],[0.42,0.855],1.1,-84.3,-3.7,79.5).p("A+XmgIASErQAcEHA+CfIA4gmIAVAYQAbAeAlAgQB1BmCjBTQILEKMUgYIJMADICJgJQCpgRChgmQICh8DrkmIAjgIQBKieA8jRQB3mjhIkBIABDqQhICCiBCNQkCEakaA8Ql+BQoVAcQwoA3rzkDQhLguhVhLQisiYg2iQg");
	this.shape_1331.setTransform(217.3325,316.9169);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.lf(["#3C3123","#020203"],[0,0.125],0.4,-1.3,3.1,387.3).s().p("AhnL8QsUAYoLkKQijhTh1hmQglgggbgeIgVgYIg4AmQg+ifgckHIgSkrQA2CQCsCYQBVBLBLAvQLzECQog3QIVgcF+hQQEag8ECkaQCBiNBIiCIgBjqQBIEBh3GjQg8DRhKCeIgjAIQjrEmoCB8QihAmipARIiJAJg");
	this.shape_1332.setTransform(217.3321,318.525);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f().s("#1D1D1C").p("EAg4gPgQgCgUAGgPQAMgeApAYIATAMQARAQgEAWIgCAcQgHAfgYAOIAAAWIAZgCQAcgHAQgXIAKAIQAFANgUAaQgGAIgNAFQgZAMgfgLIgBARIAIAIQAGAMgKAWQgHAEgLACQgUAEgOgKQgBgFgEgGQgKgNgUgGQgUAAgWADQgrAFgHAOIgLAOQgGAPAbAIIALAJQAGANgZAQQgJgBgJAEQgTAHgEAXIADBSQAKBYAoAbIAUATQAbAYAfAaIABBHQgBBXgKBRIgrDcQg6D5hPCKQgoBahVBsQiqDYjhBbQgrAZhkAcQjJA5kfARI5sgKQhkgPiGgaQkQg1iehEQhLgfhehNQi9iYhjjdQgagqgbhXQg1ivgDjlIASjyQgaACgbgNQg1gYgBhHQgBgXALgVQAWgpA4ANIAvAOQAJgVAOgSQAaglAUAJIAsALIgbAnQgbApAAALIAMAUQALAXgHARIgDENIA4AsQA9A0AdAlIBJBVQBgBiB0A7IAjAPQAwAUA+ATQDHA9EKAiQNTBuSyjIIA2gmQA7gsAYgkQgEgOADgSQAFgjAjgUICjhpQCwh8BFheICli/IgDlOQABgQAEgWQAHgrAMgfIgiAAQgPgKgLgPQgUgeAYgVIAoAAQAsgBATgGIARgLQAUgMASgFQA7gRAXAzg");
	this.shape_1333.setTransform(226.6582,290.7089);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#1D1D1C").s().p("AuYQKQhkgPiGgaQkQg1iehEQhLgfhehNQi9iYhjjdQgagqgbhXQg1ivgDjlIASjyQgaACgbgNQg1gYgBhHQgBgXALgVQAWgpA4ANIAvAOQAJgVAOgSQAaglAUAJIAsALIgbAnQgbApAAALIAMAUQALAXgHARIgDENIA4AsQA9A0AdAlIBJBVQBgBiB0A7IAjAPQAwAUA+ATQDHA9EKAiQNTBuSyjIIA2gmQA7gsAYgkQgEgOADgSQAFgjAjgUICjhpQCwh8BFheICli/IgDlOQABgQAEgWQAHgrAMgfIgiAAQgPgKgLgPQgUgeAYgVIAoAAQAsgBATgGIARgLQAUgMASgFQA7gRAXAzIBYAAQgCgUAGgPQAMgeApAYIATAMQARAQgEAWIgCAcQgHAfgYAOIAAAWIAZgCQAcgHAQgXIAKAIQAFANgUAaQgGAIgNAFQgZAMgfgLIgBARIAIAIQAGAMgKAWQgHAEgLACQgUAEgOgKQgBgFgEgGQgKgNgUgGQgUAAgWADQgrAFgHAOIgLAOQgGAPAbAIIALAJQAGANgZAQQgJgBgJAEQgTAHgEAXIADBSQAKBYAoAbIAUATQAbAYAfAaIABBHQgBBXgKBRIgrDcQg6D5hPCKQgoBahVBsQiqDYjhBbQgrAZhkAcQjJA5kfARg");
	this.shape_1334.setTransform(226.6582,290.7089);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f().ls(["#4C473C","#020203"],[0.42,1],-3.2,0,3.3,0).p("AAcAAQAAANgIAIQgJAJgLAAQgLAAgIgJQgIgIAAgNQAAgMAIgIQAIgJALAAQALAAAJAJQAIAIAAAMg");
	this.shape_1335.setTransform(392.35,253.45);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.lf(["#4C473C","#020203"],[0.42,1],-2.8,0,2.8,0).s().p("AgTAVQgIgIAAgNQAAgMAIgIQAJgJAKAAQALAAAJAJQAIAIAAAMQAAANgIAIQgJAJgLAAQgKAAgJgJg");
	this.shape_1336.setTransform(392.35,253.45);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f().ls(["#4C473C","#020203"],[0.42,1],-4.7,0,4.8,0).p("AgqAAQAAASANAMQAMANARAAQASAAAMgNQANgMAAgSQAAgRgNgMQgMgNgSAAQgRAAgMANQgNAMAAARg");
	this.shape_1337.setTransform(392.7,255.95);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.lf(["#4C473C","#020203"],[0.42,1],-4.2,0,4.3,0).s().p("AgdAeQgNgNAAgRQAAgRANgMQANgMAQAAQASAAAMAMQANAMAAARQAAARgNANQgMAMgSAAQgQAAgNgMg");
	this.shape_1338.setTransform(392.7,255.95);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#1D1D1C").s().p("AKXN2IgzhOQgHgTgSgXIgggmIhGhKQgMgVgTgcIgjgwQgggshKhiQhIhfgjgvIkYl+Qgggygzg9IhbhpQgogthEhHIhqhwQg/hXhMh8IhpiwIBtCtQBNB7A/BWIBtBxQBBBEApAuIBdBpQAzA+AgAyIFdHdQBYBzA2BLIAiAwQAUAeALAWQATARAxA3IAgAnQASAXAHAUIAxBOQAWAhAVAYQgWgYgWggg");
	this.shape_1339.setTransform(317.3875,156.95);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#1D1D1C").s().p("ArjJFICniIQAHgFASgOQAlgcCPh1IDNipQAPgUAjgeIA6gxQB/hnDeilQARgHAWgNIAlgZQBvhOCKhtIDzjDQigCGhQBBQiGBthxBRIgmAaQgYAOgOAFQjWChiGBsIg4AvQghAcgTAXIjNCoQh2BghAAxIgNAKQgKAHgFACIimCFIh9Bjg");
	this.shape_1340.setTransform(138.925,208.925);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f().s("#6C4E3C").p("AgUAZIAQACQARgCADgPQACgKgCgJQgDgTgOACQABATgUAgg");
	this.shape_1341.setTransform(275.7824,111.5668);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#6B4E3C").s().p("AgSAZQATgggBgTQAPgCADATQACAJgCAKQgDAPgRACg");
	this.shape_1342.setTransform(275.5625,111.5655);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f().s("#6B4E3C").p("AkUjWIANAaQAGAcgiAOIApAsQA2A2A+AwQDFCfDRA3QAKgLAHgPQAOgegQgPQhMhLhshSQjYilijgjg");
	this.shape_1343.setTransform(246.0318,92.7066);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#6B4D3C").s().p("AiIABQg+gxg2g2IgpgsQAigNgGgdIgNgaQCjAkDYClQBsBRBMBLQAQAQgOAdQgHAPgKAMQjRg4jFieg");
	this.shape_1344.setTransform(246.2142,92.675);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f().s("#6B4E3C").p("AALgfQgLgCgKAEQgWAIgBAcIAHAOQAKAOARgCIARgDQARgIgCgWQACgFgCgIQgEgOgSgEg");
	this.shape_1345.setTransform(216.2801,74.3296);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#6B4D3C").s().p("AgaAVIgHgOQABgcAWgIQAKgEALACQASAEAEAOQACAIgCAFQACAWgRAIIgRADIgDAAQgPAAgJgMg");
	this.shape_1346.setTransform(216.2821,74.3296);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f().ls(["#8E7059","#4B3218"],[0,1],17.3,-162.5,-7.6,162.3).p("AB35SQgfD5ggEXQhAIsgICUIikfLIBUgJQBbgEAhAVIBG78QAblNAYlaQAvqzgVhNQgHADgKABQgVADgSgHg");
	this.shape_1347.setTransform(227.7376,168.9862);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.lf(["#8E7059","#4B3218"],[0,1],7.7,-38.1,2.4,31.3).s().p("AhgZBIhUAJICj/LQAJiUA/osQAhkXAej5QASAHAVgDQALgBAHgDQAUBNgvKzQgXFagcFNIhFb8QghgVhbAEg");
	this.shape_1348.setTransform(227.7613,168.875);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f().s("#1D1D1C").p("AMpwSQjIENjOEMQmZIYgZAAIhuB8QhxCEgSArIhUB5QhlCRhPB2Ih0CZQh6CdghAQ");
	this.shape_1349.setTransform(134.3755,181.9007);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#1D1D1C").s().p("AKyLOQgYgZgsghQgtgyhBg9Ih1hqQglgbgxgwQhohlh/iVQgZgSgcgcIgwgyQhzh6ihi/QhIhWiQikIjdj5QDoD9CeCyIB1CJQBFBQAzA4IBdBlQA1A7AuAkICYCrQBYBfBNA+QBvBlA8A9QApArAMAPQARAMARAQQAfAbAQAUQAXAdAJAdQgNgmgigjg");
	this.shape_1350.setTransform(320.8,173.475);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.rf(["#BEAA9E","#87764C"],[0.467,1],0,0,0,0,0,26.3).s().p("AkKCbQgFgGAegIIAugSQA5gQA6AGQgNgZgDgeQgFg6A1gVICdAAIAdgJQAagMgOgRQh6APgMgPQhPgDgSAJQgKAWgOAUQgcAngWgIQgXgEgeAAQg7ABggASQgOADgKABQgVADAQgKIAogZQAygYAwgFIAugkQA0gnAggTIBSgDQBVgEALgHIAngJQAvgHArAHIAfAAQAkgEAWgQIAAA1QgYgDgXAEQgtAIAEAlIABALQADAOAGAKQAWAdA4gWIAAAuQgngCgogBQhQgDgGAGQgQAHgbADQg1AGg5gQIgtgEQgxgCgLAIIANBDQAGBAgkgRQgXgBgfACQg8ADgkAMQgJgCgDgDg");
	this.shape_1351.setTransform(205.9743,27.975);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1352.setTransform(71.675,299.025);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1353.setTransform(62.725,303.125);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1354.setTransform(63.125,320.225);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1355.setTransform(71.675,323.475);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1356.setTransform(71.675,299.025);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1357.setTransform(62.725,303.125);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1358.setTransform(63.125,320.225);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1359.setTransform(71.675,323.475);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1360.setTransform(71.675,299.025);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1361.setTransform(62.725,303.125);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1362.setTransform(63.125,320.225);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1363.setTransform(71.675,323.475);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1364.setTransform(71.675,299.025);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1365.setTransform(62.725,303.125);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgHAIABQAIgBAHAHQAHAGAAAIQAAAIgHAHQgHAHgIAAQgIAAgGgHg");
	this.shape_1366.setTransform(34.9,333.6);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAGAGABAIQgBAJgGAGQgGAGgJABQgIgBgGgGg");
	this.shape_1367.setTransform(43.2,339.1);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1368.setTransform(51.45,343.75);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1369.setTransform(61.05,349.075);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAGAGAAAIQAAAJgGAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1370.setTransform(73.975,354.65);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAGAGABAIQgBAJgGAHQgGAFgJABQgIgBgGgFg");
	this.shape_1371.setTransform(42.2,299.4);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgHAGgHQAGgGAIAAQAIAAAHAGQAHAHAAAHQAAAJgHAHQgHAFgIABQgIgBgGgFg");
	this.shape_1372.setTransform(34.9,290.5);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAGgJAAQgHAAgHgGg");
	this.shape_1373.setTransform(28.6,281.125);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#544939").s().p("AAAABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQADACACADIgDgCg");
	this.shape_1374.setTransform(21.2219,233.375);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#544939").s().p("AAAgBIAAAAIAAgBIABADIAAACIgBgEg");
	this.shape_1375.setTransform(20.875,240.25);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#544939").s().p("AACA+QACAGgCgBQAAgBgBABQAAAAAAAAQAAABAAABQABABAAABIgCgJQABAEAAgMIgCgGQAAgCAAAAQAAgBAAAAQAAAAAAAAQAAAAABABIAAACQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAAAIAAADIABACQAAABAAAAQABABAAAAQAAAAAAAAQABgBAAAAIgBgIIgDgMIAAACIgCgJIABABQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAABQABAAAAAAQAAABABAAQgBgBAAAAQgBAAAAAAQAAABABABQAAABABACIACACIgCgBQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIAIAUQADADgDgKQgDgLABAAQAEAJgBgFQgBgLgJgQQADAKgDgHIgDgKIACAFIABAEIgBgFIAEAGIACAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAEAEIgEgHIgHgIQABAAAAAAQABABAAgBQAAAAAAAAQAAAAAAgBIgDgDIADACIgDgDIAOANIAKAFQgHgIgVgPIAEACQAEADgEgEIABABQAAAAABAAQAAAAAAAAQgBgBAAAAQAAgBgBgBIALAHQABAAgFgFIgIgHIADAGIgDgEIgFgEIACgBQgEgCgBgCIABADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIACABQACADgBADIgCAFIADAAIAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAAAIgHgCIADACIgCgBQgBABAFABQgFgBgBABQgCACgEgCQABAAAAABQABAAABAAQAAABAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAABABIgEgBIAEACIgFACQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAIgBAAQgBAAAAAAQAAAAAAAAQAAABAAAAQABABABAAIgEgBQAGAEgGgBQgCAAAAAAQgBgBAAABQAAAAAAAAQAAAAABABQgSgFgHgFIABACQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBgBAAIAHAAIgGgCQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAJABACgGQACgHAEgBIgEgCQAGACgJgGIAJADIgGgEQAAgBAEgCQABAAABAAQAAgBAAAAQABgBAAAAQAAgBgBgBIAFACIgCgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIAHACQACgBAGAFQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBgBIgEgCQADgCgDgDIADgDQACgDAGADIgEgDIgBgCIgFgDIACgCIABAAIAEADQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIgCgEIgBAAIABgBIABADQACADADAAIgDgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABABIACACIACgBIgFgFQADgDAGgCIAJgDQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQABAAABAFIAAgBIABAEQAAABAAAAQABABAAAAQAAAAAAAAQABAAAAAAIgCgGQAAgEgCgBIABgFQgBgKAEADIAEADIACAAIABgBIAAACQACgDAEADIADADIAAAFIAEgGQAAAAAAAAQABAAAAABQAAAAABABQAAAAABABIgBADQADgHACABIgBACIADAAQgBAHADgEQADgEgBAJIACgFIADgCIAAACQAAgBAAgBQABgBAAAAQAAAAABAAQAAABAAAAIABAEQACgCAAgFQAAAEADgEIACgDIgBAJQABgBABgGQABgBAAAAQAAgBAAAAQAAAAAAABQABAAAAABIgBACQgCATACgEIAAgCQAAgBAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAGASIgFgCQAAAAAAAAQgBAAABABQAAAAABABQAAAAABABIAEADQgBAAgBgBQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBgBIgBAAIgCAAQAAAAAAABQAAAAAAAAQABAAAAABQABABABAAIABABIgDACIABABQAEAEgFAAQAAgBgFgDIADAEIgDgBQAMAKAAACIgCgCQgBgBAAAAQgBAAAAAAQAAAAABABQAAAAABABIgFgEQABABAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgGgEQABABABABQAAAAAAAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQABAAAAABQABAAABABQgDgBgDADQgDADgDgCQgBAAAAAAQAAgBAAABQAAAAAAAAQAAAAAAABIABACIgDgDIAGAJIgJgGIAGAGIgFgDQABAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgCgBQAHAEABAEQgBAAgBAAQAAgBgBAAQAAAAAAAAQAAAAAAABIgDgBIACACQAKAFgFgBIgEgDIAAACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAABABQAAAAAAABQABABAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIgCgBIgEABQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAEACQABAGgBACIADADIgCAHQgBAEgEgEQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIgCACIgCgDQgCABABAFQgEgDgBAFIAAAIIgBgBIAAAHQABABAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIgBACIgCgHIgEgHIACAGIgDgHIABABIAAAKIACAEIAAADQAAgBAAAAQAAAAAAABQAAAAAAABQAAABABACQgEgFgEgLgAALA/IABADIAAgDIgBgBIAAABgAAcAKIgCgDIADACQgDgFgWgQQACAAAMAJIgGgHQgGgFACgBIgDAAIABgCIAAAAIAKAGIgIgIIAKAHQABAAgKgIIAKAFIgJgGQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgEgFIAAABIgCgCQABABAAAAQABABAAAAQAAABAAAAQAAAAgBAAIAAAAIgDgFQAAAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAIgDgEQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAABABIADAFIAAgCIAEAFQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAgBQgBACgKgHQgBAAAAAAQAAAAAAAAQAAABABAAQAAAAAAABIAEADIABAAQACAAADAEQAAgBgBgBQgBAAAAAAQgBAAAAAAQAAABAAAAQACAEgEgCIgEgDIgDgDIADAFIgDgCIAIAJIAAgBQAAABAAAAQABABAAAAQABAAAAABQABAAABABIADAAQAJALAQALgAAVgPIANAIIgMgLIgBADgAALgYIAEAEIAAAAIAFAEIABgBIABgBIgEgEIAAAAIAAgCIAAAAIAAABIgCgBIAAABIgBgBIgBgBIAAAAIAAgBIAAgGIgBADIAAgFIAAAHIAAABQAAABAAAAQAAABAAgBQAAAAAAAAQgBAAAAgBIgBgFQABABAAABQAAAAAAAAQAAAAAAgCQAAgBAAgCIgCgEQgBABADAJIgBgBIAAADIgDgLIAAADQABACAAAAQAAABAAABQAAAAAAAAQAAABAAgBIgCgFQABADAAABQABACAAAAQAAABAAAAQgBgBAAgBIACAGIAAAAIABABIgBgBgAAKgYIAAAAIgCgDIACADgAAhgaIACAAIgBgBIgBABgAAUgeIgBABIACABIAAgCIgBAAgAADgaIAAgBIACADIgCgCgAANgbIABABIAAABgAgqgjIAAAAIAAAAg");
	this.shape_1376.setTransform(21.125,235.1167);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#544939").s().p("AAAABIAAgCIAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAIgBgBg");
	this.shape_1377.setTransform(23.34,240.025);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#544939").s().p("AAAABIAAgBIACABIgBAAIgBAAg");
	this.shape_1378.setTransform(23.08,240.075);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#544939").s().p("AAAAFIACABIgCACgAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgGABAAQAAAGAAAFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_1379.setTransform(20.075,240.4);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#544939").s().p("AAAgDIABACIAAAFg");
	this.shape_1380.setTransform(20.4625,241.4875);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#544939").s().p("AgCgNQABABAAAAQAAABAAAAQAAABABAAQAAgBAAAAIAAgDIAAADIAAgDQACAJAAAIQgCgGAAABIADALQgBADABAEQgGgWABgHg");
	this.shape_1381.setTransform(20.3183,239.65);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#544939").s().p("AAAgCIABADQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAgBAAgEg");
	this.shape_1382.setTransform(19.775,240.85);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#544939").s().p("AAAgBIABABIgBACg");
	this.shape_1383.setTransform(18.925,239.875);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#544939").s().p("AAAgDQAAABAAABQAAABAAAAQAAAAABAAQAAAAABAAQgBAEgBAAIAAgHg");
	this.shape_1384.setTransform(19.7917,242.1);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#544939").s().p("AAAAAIAAAAQAAAAABAAQAAgBAAAAQAAAAAAABQAAAAAAAAIgBACIAAgCg");
	this.shape_1385.setTransform(18,239.9296);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#544939").s().p("AAAAAIABgCQAAAEgBABIAAgDg");
	this.shape_1386.setTransform(17.9,240.65);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#544939").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_1387.setTransform(17.5625,240.2625);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#544939").s().p("AABACIgDABIACgFIAAACQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAABAAABQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_1388.setTransform(17.2313,238.225);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#544939").s().p("AgvAVQAHgRALgQQAVghAPABIApAJIgXAdQgYAhgGATg");
	this.shape_1389.setTransform(21.525,234.1986);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f().s("#48443B").ss(0.5).p("AAACaIALiiQgkAAgDgDQAcABAGgLQAIgMAGgSQALgjgNgYQgMgQgQgGQghgNgZAtIACAaQAHAcAfAGQAEACAGgDQAKgFAFgZQABgFgDgGQgFgNgNgGIgGAJIAMAMQAIAPgUANQgJgBgHgHQgOgOAIggQAFgIAJgFQASgKASAPIALATQAIAdgXAqQgUAFgUgKQgpgUgBhMQAGgOANgLQAYgXAfAPIAKACQAKAEALAJQAjAdAOBGIATDGQgJgLgPgFQgfgMgfAcg");
	this.shape_1390.setTransform(12.9784,252.5379);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#4C483F").s().p("AA/CPQgggLgfAcIAMiiQglgBgCgDQAcACAGgLQAIgNAFgRQAMgjgNgZQgMgPgQgHQghgNgZAtIABAbQAIAbAfAHQAEACAGgDQAKgGAFgYQAAgFgCgHQgFgNgOgFIgFAJIAMAMQAIAOgUANQgJAAgHgHQgOgOAHggQAGgIAJgFQARgLATAPIALAUQAIAcgXAqQgUAFgUgKQgpgUgBhMQAGgOAMgLQAZgWAfAOIAJACQALAFALAJQAjAdANBFIAUDHQgJgLgPgGg");
	this.shape_1391.setTransform(12.9,251.9909);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f().s("#48443B").p("AguAtIAHhHIAfgRQAhgLAWAfIAABGg");
	this.shape_1392.setTransform(16.8751,271.3209);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#4C473F").s().p("AguAtIAHhHIAegRQAigLAWAfIAABGg");
	this.shape_1393.setTransform(16.9,271.3155);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#544939").s().p("AAAABIgBgCIADABIgCACIAAgBg");
	this.shape_1394.setTransform(17.8,233.2458);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#544939").s().p("AgCAAIAFAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAABAAg");
	this.shape_1395.setTransform(20.725,268.725);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#544939").s().p("AgCABIACgDIAEAAQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIgBABIgBgCg");
	this.shape_1396.setTransform(14.3,239.6694);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#544939").s().p("AAAACIgBgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIACABIgBACIgBAAg");
	this.shape_1397.setTransform(19.2083,248.3768);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#544939").s().p("AgBAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACADIAAAAIgDgCg");
	this.shape_1398.setTransform(20.7275,247.905);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#544939").s().p("AAAACIAAgEQABAAAAAFg");
	this.shape_1399.setTransform(21.55,252.35);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#544939").s().p("AgBAAIAEAAIgFABg");
	this.shape_1400.setTransform(21.7,253.925);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#544939").s().p("AABACIgBAAIgCgBQgCgDAEACQABAAABAAQABABAAAAQAAAAAAAAQAAABAAAAIgCAAg");
	this.shape_1401.setTransform(23.6548,250.9452);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#544939").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAgBQAFAEgFAAIAAABIgCgDg");
	this.shape_1402.setTransform(22.751,253.9);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#544939").s().p("AgBAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABIgCAAg");
	this.shape_1403.setTransform(21.95,256.4688);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#544939").s().p("AAAgBIABACQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_1404.setTransform(24.1375,252.925);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#544939").s().p("ABKC3QAAgEgEgBIAHgIIgEgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAgFgDAEQAJgMgCgUQgBgXADgJQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQABAAAAgBQABAAAAgBQAAAAAAgBQgBAAAAgBIgFgBIAJgGQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAIgDAAQgBgFADgLQADgIgDgFIAFgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBABAAQgFACgBgFQgCgFgCAAQAEgBACgGQACgFAHABQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQABgJgEgEIAAgEQgBABgFgDQACgEgCgLQgBgIACgCIAAgCQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQADAAABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgDIgBABIgBgEIADADQADACACgDIgBgCIgDgBIAAgBQgHgDgJACQAJAHgGACIgEgEQgDgEgCABQADgCACACQAAABAAAAQABABAAAAQAAAAABgBQAAAAABgBIgCgCIgCgBQADABADgEIAAgJIAAgKQACgCADgBQgDgCgGAAQgHgBgDACIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgEAIgCgIQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQgBgBgEABQACgCAHgCQAHAAADgDQACgBACgHIABgCIgBgCIgBgBIgOAGQgMAGgEAEQgBABAAAAQAAAAAAgBQAAAAAAAAQAAgBABgBIACgDQACgEgEgBQgFgBAAgBIAFAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQALgEABgDQgBgFgIABQgIACgEAEIALACQgCACgEgBQgFAAgCACIgDgHIACABQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABgDIAdgGIgDgDIACgEIgJADIgDgCIgCABIgPAIQgBgCAFgEIAGgGIgBgBQgCgBgDABIgFACQgHAEgCgCIAAADIgDgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAAAABQACgJACgCIgJAGIAFgIIgBgBIgBAAIgBACQgDAEAAACIgCgLIgBABIgBACIgBAGQgDACgCgDQACgCACgFIgEABIAAgCIgCABIgEABIgDAEIACgEIgBgBIgDgCIgHAAIgBAAIgGgBIAAAAIgEADQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABgEIgBAAIgBAGQAAADgCgCIABgDIgCgDIAAABQgDAGgCgDQAEAAAAgGQgBACgEAAQgDACABAFIgCAAIgBgFIgDAHQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQACAAACgEQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAABIgBgIIAAgEIgBgBIgCAAIgCABIABACIADAFQgDgCgCACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgBAHADAFIgFgBIACACIgFgDIAAABIAAAAIgCADIAAAAIAAAAQABABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABIgtCVIAMieQABgEACgEIgBgKIADADIABABIABAAIAAAAIAAAAQgCgGAIgCIgFgHQgCgGAHgFQgBABAAABQAAABgBAAQAAABABAAQAAAAAAAAQADACAAgFIABACQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAAgBIgBgDIABABIABgCIACgBIAEgCIABgBIAFgGQAFgDAFAAQAGgCgEgEQgEgDAFgBQAFAIAFAAIADgFQABgCADgBIAAAGIAGAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAEgDADADQAFgBgDgHQgCgFgEgDIAJAFQAEACABAFIgGAAQAEAGAGgCQAAgBABAAQAAAAABAAQAAAAAAABQAAAAABAAQABABAAAFQgDgBgDAAQgBABAAAAQgBAAAAABQAAABAAAAQgBABABABIAGgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAGgCABgBIABgBIAAABIABAAIABAAIAAABIAAABIACgBIADgBQgDABAEADQADACAEgGQADgFACAEIgBABIACADQACgHAIACQAJACADgGQAAABAAABQAAABAAAAQAAABAAAAQAAAAgBAAIgHAEIADAEQgDgBgDAAQADAGAFgBIAIgEIgCAGQAAAAAAABQAAAAAAABQABAAAAABQABAAABAAQAFAAAAgEQABgGACABIABAIQAFgBAEADIAHAHIADgBQACADAHABQAIABABADQgCgBABAIIAJACQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgFADQACACAFAAQgEABAAACIAHACIgBgCIAEABIgBgCIAFACQADAEAAADIgFABQABgFgHACQABABAAAAQABABAAAAQAAABAAAAQAAAAAAABIgBACQACACADAAQAEAAABgDIADAHIAGAEIgFACIAEAEIgIgBQABAFAEgBQAGgBAAAHIgEABIAGAEQADACgDADQAAABAAAAQABAAAAAAQABgBABAAQAAgBABgBQADgDABAHQgDADgCAIQAAAAABABQAAAAABAAQAAAAABgBQAAAAABgBIABgDQABAJgIADIgFADIgBABIABAAIgCAIQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIABABIgDAAQAEACgCAFQgBAEAFABQgBAAgBAAQgBAAAAAAQAAAAgBAAQAAABABAAQAAABAAABQABABAAAAQAAABAAAAQgBABAAAAQgCgCgBgFQAAgFgEgBQgBABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQABAAgBABQAAAAAAAAQAAABAAAAQgCgDgDgBQgCAEADAEIAGAGIgCgHQABAAABAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQABABAAAAQABAAABABQgBAAAAAAQgBABAAAAQAAABAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBgBQAAAEgGAEIgGACIgBACQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQACADADgBIABgEQAAgEAHACQgGACACAFQAEAGgEAFQgCgCgEABQgBABAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAIAAABIACAAIAAADIAAAAIABABIADACIgEABQAEADADAAQACACADAFQgBAAAAgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIAAABQAAADACADQABAEgCAEQgBADACAEIACgBQADAHAAALQAAAOABADIACgEIABAFQABAEgCACIgBgDQgFAAgCAEIAEACIgDABQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQgGABAAAIQgBAKgFABQAEACABgEQAAgBAAAAQAAgBABAAQAAgBABABQABAAABAAIgEAEIAFgBIgEAPQgCAGAAAHIgBgBQgCAGAFACIgDAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAGAEgFAFQgFAHADACQgEgBgKADQgIAEgEgCIABADQgDgBAAgFgABJABQgBADABADIADAAQACgFADgCQgBAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCgEIAAABIAAgBIgBABIgDACIACABIABgDIABAAIgCADgABUhOIACgBQABgEgCgCQAAACgFABIgDACIAFgCIACAEgAghirIACADQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgEABgABzgiIgCgBIABAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAIAFACIAAADIgBAAIAAAAg");
	this.shape_1405.setTransform(13.7883,249.6);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#544939").s().p("AADgGIgCALQgBgDgCAGIAFgOg");
	this.shape_1406.setTransform(11.825,237.35);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#544939").s().p("AgBAAIABgCQADACgDADIgBgDg");
	this.shape_1407.setTransform(22.8143,246.1);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#544939").s().p("AAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABIgDACIABgCg");
	this.shape_1408.setTransform(20.55,235.225);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#544939").s().p("AgBAAIABgDQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAIAAAGQgBgDgCgBg");
	this.shape_1409.setTransform(17.5375,235.76);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#544939").s().p("AAAAAIgCABIADgDIACAFQgBAAgBAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_1410.setTransform(23.05,258.225);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#544939").s().p("AgDADQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBIgDgCIAIgDIgCABIgDAEIAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgCgBg");
	this.shape_1411.setTransform(23.075,260.209);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#544939").s().p("AAEACQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAABAAAAIgDgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQADAAADAAIAEABQgBgDAAgCIAEAFIAAABIAAAAIgCADQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_1412.setTransform(23.775,256.675);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#544939").s().p("AgCADIABABIgBgHQACAAADADIgEAEg");
	this.shape_1413.setTransform(24.3,255.75);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#544939").s().p("AgIAFQADgCgCgDQgCgBgEAAIAEAAIgDgEQAEgBAFADQADACACgBIgCACQAAAAAAAAQgBABAAAAQABABAAAAQAAABAAABQAAAAABAAQAAAAABAAQABAAAAgBQABAAAAgBIADgDQAEACADgBQgGAEgHABIgGABIgDgBg");
	this.shape_1414.setTransform(22.6375,255.3357);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#544939").s().p("AAAAAQAAgBAAAAIABADQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_1415.setTransform(24.2917,257.975);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#544939").s().p("AAAAAIABAAIgBABg");
	this.shape_1416.setTransform(24.1,259.575);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#544939").s().p("AgBACIAAgDIADADg");
	this.shape_1417.setTransform(24.3,259.825);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#544939").s().p("AgCADQACgDgCgDQAEADABACIgDAAIgBACIgBgBg");
	this.shape_1418.setTransform(25.575,257.6063);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#544939").s().p("AgCAAIAFgBIgDADg");
	this.shape_1419.setTransform(25.2,260.3125);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#544939").s().p("AAAAAIABgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAACg");
	this.shape_1420.setTransform(23.3833,264.35);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#544939").s().p("AgCAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIACgCQABAEgCABIgBAAQgBAAgBgDg");
	this.shape_1421.setTransform(24.8643,262.7275);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#544939").s().p("AgCAAQADgDACADQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgCACg");
	this.shape_1422.setTransform(25.65,262.1125);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#544939").s().p("AAAAAIABAAIAAABIAAAAg");
	this.shape_1423.setTransform(25.5,263.025);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#544939").s().p("AgBAFIABAAQAAgCgBgEQgCgEADgBQgBADAEAKg");
	this.shape_1424.setTransform(24.1917,264.925);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#544939").s().p("ABIAqIgRhdQgOg0gjgZIgggNQgqgOgTAPIgBABQAOgRAWABQAQABANAIQAnAHAfATQAPAKAIAIQATASAAAUQABAKgEAHIgBDLQgCgrgLhHg");
	this.shape_1425.setTransform(14.3156,249.9821);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f().s("#544939").p("ABcDPQAEhMgGhVQgLiogtguQgUgUgagJQg0gSgcA6IAAATQACAWAHASQAWA5A9gJQANgXAFgZQAJgygtgNIgZAHQgYAOAIAlIALAQQAOAPANgGQAIgHADgKQAHgUgWgN");
	this.shape_1426.setTransform(12.938,255.7233);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1,0,1.1,0).s().p("AAAAUQgDgBgBgDIAAgIIAEgMIABgFIgBgDQAAgCgJgDQAJgFAGAEQADACABAHIgBAJIgJAQIAAACIACABIgCABIAAAAg");
	this.shape_1427.setTransform(18.5,292.3174);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,0,0.8,0).s().p("AAAARQAAgCABgHIgIgaIAKABQAJADgHAOIgEAIIAEAKIgCABIgDgCg");
	this.shape_1428.setTransform(18.2531,292.4167);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#3C2E1E").s().p("AgFgDQAHgJAJAAQgCAIgHAGIgLALQgEgJAIgHg");
	this.shape_1429.setTransform(15.2333,283.725);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#3C2E1E").s().p("AgLgDQAGgGAJAEQAIAEABAIQgOgEgKgGg");
	this.shape_1430.setTransform(18.7,279.4158);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.6,0,1.6,0).s().p("AADAKQAEgIgCgEQgBgEgFgHIgNgKQAJgBAHAFQAKAGADAJQACAJgHAJIgHAHIgGAEg");
	this.shape_1431.setTransform(18.6735,283.1975);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.2,0,1.3,0).s().p("AgMgYIATAMQAPAPgXAWg");
	this.shape_1432.setTransform(18.4503,283.2);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#3C2E1E").s().p("AgLAPQgKgBAEgJQAFgIAPgLQgBAFgIAOIAKAAQAJAAAGACQgHAEgIACQgFACgGAAIgEAAg");
	this.shape_1433.setTransform(16.0046,287.9875);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#3C2E1E").s().p("AgFAOQgJgKgCgIIAAgDIACgCQACgCADACQAEABAIAIQAFAAABgBQABgBgCgGIgIgVQAXAVgHAMQgFAGgLgCIAAAAIABAEIAKASIgQgQg");
	this.shape_1434.setTransform(15.5207,294.8);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.5,0,1.4,0).s().p("AACASQgFgFABgGIACgHIAAgEIgFAEIgDAAIgCAAIAAgCIAAgGIACAFIABAAIAFgNIABgBIACgCIACgBIADABIADADIABAEIAAAFQAAAFgBADIgEAIQgCACADADIAFAHQgEAAgFgDg");
	this.shape_1435.setTransform(19.725,304.45);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#3C2E1E").s().p("AgTAvQACgHAIgGIgFgWQgCgOAEgJQAHgHAIAIIAHAJQADgHgBgIQgCgLgIgJIgEgGQAAgKAOgEQgKAGgBAGQAQALADARQADAQgNAPIgOgSIgBADQAAAMADAYQgLAIgCADQgGAHAMADQgOgBAEgJg");
	this.shape_1436.setTransform(18.3162,300.825);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#3C2E1E").s().p("AAAASIAEAAIACAAIgCgBIgKgPIADABIgDgCIAAABQgDgCgBgEQgBgKALgHIgCALQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAIACACQAJALABAHQABAHgEABIgCAAQgDAAgDgEg");
	this.shape_1437.setTransform(18.1813,307.5173);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#3C2E1E").s().p("AgHAYQgGgFADgKIAGgKIAGABQABgDgDgJIgEgNQASAQgDANQgDAHgIgCQgDAHABACQABADAIADQgEACgDAAQgDAAgEgCg");
	this.shape_1438.setTransform(17.9088,310.9875);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.2,0,1.3,0).s().p("AAEAXQgCgGgGgHIgBgBIAAgBQgFgSAAgMIAAgIIACgFQABgDADgBQAEAAAEAFQADADABADIgGgEIgCgBIgCAAIAAAKIAFAcIAEAHQADAGAAADQADAMgIAHQADgIgEgJg");
	this.shape_1439.setTransform(19.4548,316.8227);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#3C2E1E").s().p("AAEAYQAFgYgHgPQgLgSgEgOQgDgLACgHQABALAIANIAOAVQATAdggA5QAGgbACgPg");
	this.shape_1440.setTransform(21.0673,314.975);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-2.8,0,2.7,0).s().p("AARAUQAAgDgDgDIgHgFIAAAAQgMgLgGgJQgKgNgDgMIAlAlIAAAAQAEADADAFQADAEABAGQABALgKAHQAFgLgDgGg");
	this.shape_1441.setTransform(22.0012,323.975);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#3C2E1E").s().p("AgGAGQgJgKADgLIAZAfIgBAAQgLAAgHgKg");
	this.shape_1442.setTransform(23.001,326.7792);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#3C2E1E").s().p("AACA8QgFgBgDgFQgLgQAHgpQAGgngQgRQASALABAaQABAOgDAdIAAASQACAMAGABQALgCAAgKQgBgIgHgJQAKAGACALQADAMgLAFQgDADgEAAIgDAAg");
	this.shape_1443.setTransform(25.3071,327.7361);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAGgJABQgIgBgGgGg");
	this.shape_1444.setTransform(42.9,331.45);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1445.setTransform(50.6,336.3);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAIgFAHQgHAHgJgBQgIABgGgHg");
	this.shape_1446.setTransform(58.2,340.25);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHgBgIQABgIAGgGQAGgGAIgBQAIABAHAGQAGAGABAIQgBAIgGAHQgHAGgIABQgIgBgGgGg");
	this.shape_1447.setTransform(65.8,344.8);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1448.setTransform(73.975,346.925);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAJAAAGAGQAGAHABAHQgBAJgGAGQgGAGgJABQgIgBgGgGg");
	this.shape_1449.setTransform(31.75,316.6);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAIABAHAGQAGAGABAIQgBAJgGAGQgHAHgIAAQgIAAgGgHg");
	this.shape_1450.setTransform(41.05,322.55);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_1451.setTransform(48.45,326.85);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_1452.setTransform(57.05,331.15);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f().s("#3C2E1E").p("Ah4l8IBqAAIADBOQAFBhAJBdQAfEqBDCYQgcg5g5hoQgrhQgTgxQg2iHgUklg");
	this.shape_1453.setTransform(23.6578,314.5066);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-11.1,0,11.1,0).s().p("AAaDGQgrhQgTgxQg2iHgUkkIBqAAIADBNQAEBiAKBcQAfEqBDCZQgcg6g5hog");
	this.shape_1454.setTransform(22.675,312.4);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f().s("#8E705A").p("AgDgiQgiAJgRANQgjAaBWAVIAVgFQAYgFAMgIQAngWhggdg");
	this.shape_1455.setTransform(242.7801,4.0063);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#8E7059").s().p("Ag2gLQARgOAigJQBgAdgnAXQgMAHgYAFIgVAFQhWgVAjgZg");
	this.shape_1456.setTransform(242.7801,4);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f().ls(["#281F17","#020203"],[0.42,1],-16.7,0,16.8,0).p("AgTgUICqAAIAJALQAHAOgQAUIi5gOIgJAFQgJAHADALIACASQgDAUgaAGIgXgKIgZgaQgRgkgTgSQASgZAUgTQAngmAHAeIAMARQARASAcAJg");
	this.shape_1457.setTransform(56.1189,288.2334);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.lf(["#281F17","#020203"],[0.42,1],-16.1,0,16.2,0).s().p("AhjBEIgagaQgQgkgTgSQASgZATgTQAogmAHAeIAMARQARASAcAJICqAAIAJALQAGAOgPAUIi6gOIgJAFQgJAHADALIACASQgDAUgZAGg");
	this.shape_1458.setTransform(56.196,288.221);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#1E1E1E").s().p("AgLgJQAAgEAHgCQAFgBACADQAEAFAFARQgGAEgHADQgJgQgBgJg");
	this.shape_1459.setTransform(186.3733,214.15);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#0B0C0C").s().p("AgLAWQgGgDADgHIARgfQACgCADAAQAEAAABABQAFAEgEAGIgQAcQgCAEgEAAIgDAAg");
	this.shape_1460.setTransform(156.9153,129.5954);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#0B0C0C").s().p("AgLAIQgXAAACgJQACgEAJAAIAvgCQAEAAADADQABACgBACQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgWAEgQAAIgEAAg");
	this.shape_1461.setTransform(147.1463,178.5273);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#0B0C0C").s().p("AgpAAQgIgEABgFQACgHAZAJQAiAKAegEQADgBACACIABAFQAAAFgHABQgKACgLAAQgdAAghgNg");
	this.shape_1462.setTransform(178.5882,177.8364);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#0B0C0C").s().p("AgiAmQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQgBgDACgCIATgaQAWgXAUgQQACgCAEABQAAAAABAAQABABAAAAQABAAAAABQABAAAAABQAEAFgGAFQgmAfgRAaQgDAGgCABIgEAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1463.setTransform(155.325,135.8865);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#0B0C0C").s().p("AA0ASIgbgJQgpgOgvAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIgBgEQACgGAFAAQAlgBAmALIAwAOQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAGgJAAIgGgBg");
	this.shape_1464.setTransform(167.825,180.8022);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#CB2D40").s().p("AAmAWIgIgDQgbgLgsAIQgEAAAAgHQAAgHAMgCQAIAAATgBIAPgRQADgEAIACQAFABAFAEQAJAHAAAOIAGAFQABACABADQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgDACgCAAIgCAAg");
	this.shape_1465.setTransform(168.5,157.4938);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#0B0C0C").s().p("AAaA3QABgvgLghQgFgQgNgCIgegEQgGgBAAgGQAAgDACgCQADgCADAAIAeAFQAXAEAHAZQALAkgCAxIgHAEQgGAAAAgHg");
	this.shape_1466.setTransform(176.6344,347.2708);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#0B0C0C").s().p("ABEAaQgIgCgSgKQgbgOgbgHQgggIgaADQgHABgCgFQgFgQAwAHQAuAGAkATQAXANAHACQAFABAAAGQAAAGgGAAIgHgCg");
	this.shape_1467.setTransform(108.0314,277.754);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#0B0C0C").s().p("AA1BAQgJgSgTgYQgmgxgtgXIgFgEQgCgCAAgDQABgDADgCQAEgBADABQBHAnAvBOQAEAHgFAEQgBACgEAAQgEAAgBgCg");
	this.shape_1468.setTransform(115.3716,285.4375);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#0B0C0C").s().p("AgpBfQgQgBAWg7QAUgzAshAIAIgLQAEgGAFAEQACACABADQAAADgCADQgyBDgYBHIgGAeQgCAKgFAAIgBgBg");
	this.shape_1469.setTransform(177.6347,261.0579);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#0B0C0C").s().p("AhQBGQgDgBgCgDQgBgDABgEQANgiAggdQAcgbAlgTIAzgTIAFAAIADACQADADgCAFQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgGABQhHAUgxA1QgOAQgKAWQgHAOgEAAIgBAAg");
	this.shape_1470.setTransform(97.0525,278.1656);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#0B0C0C").s().p("AgnBFQgKgGALhTIAGgtQABgFAFgBQADgBADABQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIgKBMQgEAiADAQQAVgKArgdQAFgCADADQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQABADgDACQgkAaggAOIgFABQgFAAgEgDg");
	this.shape_1471.setTransform(152.0966,137.8729);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#0B0C0C").s().p("AALBjQgcgYgNgpQgLgiAGglQAGglAVggQAAAAABgBQAAAAABAAQAAgBABAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAEAFgCAEQgkA7AQBAQAHAZATAZQAIALAOAHQAJAFgBAEQgBAGgGAAQgJgBgLgJg");
	this.shape_1472.setTransform(137.6489,166.975);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#0B0C0C").s().p("AAVCXQgEgCAAgGQAAhCgShLIgUhQQgHgigCggQAAgFAGgCQADAAACACQADACAAADQAAAaAJAiIAXBiQAOA7ABBEIAAAFQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgDgBg");
	this.shape_1473.setTransform(171.9982,300.735);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#0B0C0C").s().p("AAAgHQACACAAAFQAAAFgCADQgDgJADgGg");
	this.shape_1474.setTransform(46.75,348.05);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#0B0C0C").s().p("AgVAdQACgaAHgaQACgEgGgCQAGACACgDQAQghAKADQACABACADQABAEgCACQgVAZgEAjQgFAeADAPQgCAFgGABQgKAAADggg");
	this.shape_1475.setTransform(108.7071,219.4373);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#0B0C0C").s().p("AgYBYQAAgHAGgHQAbgmgCgsIgHhIQAAgJAHgBQAHAAABAJQACAMABACIAHACQABAAgCAGQgCgEgEAAQAGA3gDAXQgFAkgZAiQgEAFgDABIgCAAQgDAAgDgDg");
	this.shape_1476.setTransform(186.5393,246.9848);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#0B0C0C").s().p("AAfBkIgIgHQAEgCgBgEQgCgygQgsQgRgygegiQgCgCACgDQACgDADgBQAFgBAEAFQAWAcAHAQQAkBDABBOQAAAEgEACIgDACIgDgBg");
	this.shape_1477.setTransform(187.5556,232.6534);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#0B0C0C").s().p("AgqBfQgDgCgBgFQgGgtAUgtQAGgNABgHQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAEgDQAbgqAcgdQADgDADgBQADAAACACQAEAFgFAGQglApgSAhQgYAoACAwQAAAEADADIAFAAIgEAGQgCAEgDABIgEACQgCAAgDgDg");
	this.shape_1478.setTransform(111.715,184.2101);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#0B0C0C").s().p("AhJCJQgKAAAEgWQAFgUAMgRQAXggAdgTIAKgFQAHgCAEgFQgYgYgMgmQgNgpAKgeIAEgOQABgDAEgBQADgBACABQAGADgDAIQgNAjANAoQALAkAfAcIAUASQAMALALAFQAIADgBAHQgCAKgWgOQgQgKgSgSQgEAGgHADIgMAEQgKAFgKAKIgRARQACACgBAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgNAAgEALQgJAKAFAKQgJAEADAOQgDAIgFAAIgBgBg");
	this.shape_1479.setTransform(113.3381,203.4553);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#0B0C0C").s().p("ABMDUQgDAAgEgEIgGgFIAGAAQgDgQgIgSIgPgeIgnhTQgEgHAKgDIAUgGQgLgYgeggQg0g3gNhLIgGgdQgDgRABgNQABgGAMAAQAAACACAGIALBGQAPA+AtAvQArAsANAyQACAGgFAFQAAAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIgGgBQgHAMAIASIAOAcQARAiAIAcQABAEgDAEQgCADgEAAIgBAAgAAlBeIABABIABgBIgBgBgAAaAwQgHACABAEQAAAJAJARQAJgDAFgEQgFgSgDgFQgCgCgDAAIgEAAg");
	this.shape_1480.setTransform(183.225,207.7778);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#0B0C0C").s().p("ACxBSQgRgIgQgPQgLgJgSgTIglgmQgagbgigQIg7gbQgbgMgzACQgpABgqAIQgBABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIgEAAQgWgCgYALIgBACIABABQgJAAgEgDQgCgBgBgEIABgFQADgGAEAAQBPgOAbgDQA/gHAoAKQAjAJAvAaQAoAUAuAvIAsAuQAWASAhALQAiALAbgDIAAAIQgCAFgDABIgIAAQgmAAgtgVg");
	this.shape_1481.setTransform(42.0875,308.0679);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#0B0C0C").s().p("AibDrQgEgCgCgFQgJgkAbg0QAcg7A6g+IAfgnQgEgFgIAEQgIAEgEgDQgGgFAIgKQAEgGAOgNIAXgWQgFgDgHADQgIADgEgDQgHgHAPgVQANgSARgOQAVgPA7ghQApgYAWgZQACgCAFAAQAEAAABADQAEAEgEAEQgXAagyAdIhAAmIgCANQgKgFgIAIIgJALQgGAGgBAHIAJAEQAEACAEgBQAGgCAJgIQAIgFAEAHQACAFgHAFIgaAVQgCACAAAJQgKgBgBABIgNAOIAKANIAFgCIAEgEQADgCACABQAEAAABAEQACADgFAGIgrArQgtAvgdAwQgoBBAJArQACACAEAAQAEAAACgCQACgCADAAIAEgBQgDAEgGACIgMADIgEACIgDABIgCgBg");
	this.shape_1482.setTransform(120.9639,159.4533);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#0B0C0C").s().p("AiiHXIgJgbIgHgtQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQAGgGgBgIQgKhjAShxQAMhLAVguQAWgvAxg1QAVgWAZgkIAog8IAlg0QAGgTAPgFQASgWAYguQAlhJAPhPQABgGAHgDIAFADQACAEgBAEIgSBJQgTA6glBAIipDoIgTATQgyA6gSBLQgJAigJBMQgJBMAIBYIAFApQAEAWAHARQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgEADIgDAAQgEAAgCgFg");
	this.shape_1483.setTransform(89.8893,276.7472);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#0B0C0C").s().p("ABLFpQgRgDgFgEQABgMAUAEQAgAGASgFQASgFAKgEQAOgHAJgLIgTgDQgLgBgHgEQgDgBAAgDQAAgEACgBQABgBAfACQAiACAYgKIAYgLIAGgFIAFgGIAHgEQAFgCACgFQgOgJgGgJQgHgLAAgNQABgNAJgKIARgRQg8gggqgfQgwgjgogtQgOgQgHgWQgHgVgHgIQgZgcgfgYIgxgjIgGgEQgCgCABgEQABgDADgCQAEgBADACIApAcIAVhNQAIgaADggQAEgngFgTQgnALgsAdIgeAUQgJAGACAMQAEArgEAzQgBAHgGABQgDAAgCgCQgDgCABgEQAEgugFg8IgGhTQgCgQgEgGIgFgDIgBgLQgIACgIAHIgNAMIgbAWQhHA8gkBLQgQAigCATQAAAFgEACQgFACgDgDIgGgIQACgCACgFIACgJQAXhFAxg5QAnguBGg0QAJgGAHACQAJACAHASQAFAPACARIAEBBIAWgPQAzgjAugNQAGgBAFACQAFADABAGQAGAZgDAWIgKBDIgWBPQgBAFgGAGIAzAsQAWAXAHAbQAHAbA2AvQAsAnAoAXIBAAlQAZAOALAQQANAQgPAUIgcAdQgWAYgXAMQgVAKgjAGQgJAQgWANQgcAQghAAQgNAAgOgDg");
	this.shape_1484.setTransform(173.0394,149.2056);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#0B0C0C").s().p("AB1E3Qg8gGgfgLIhzgsIgEgEIgEgEQghAPgPADQgqAKgeg6QhEA1hdAVQhKARgygEQgOgBgHgGQAFAAABgJQAyAFAmgHQBCgKAsgSQAzgTAvgkIAFgEQADgCADAAQAEABABADIACAHQAIAbAYAOQAYAOBmg+QAEgDAEAFQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQgBABAAAAQgBABAAAAIgtAcQAKAHAOAFIAaAKIAnAOQA1AVBCAFQBWAHBFgPQAMgigWgdQgBgCAAgEQABgDABgBQALgIAKAcQAJAbgEAXIAWgGQAEgTgBgJQAAgIABgGQACgJgJgMQgIgMADgEQAGgJALAQQALASgBAYIgCAWQATgKACgbQABgYgNgNIgJgMQgIgJgNgIQgOgJgMAAQgWAAggAEIg2AGIhMAIIgpANQgIADgCgHQgBgHAHgCIA8gWQAwgWAngkQAOgNANgVQAPgWACgPQANhEgLhBIgThGQgOgzglg3IgOgTQgDgFADgFQACgCADAAQAEgBABADIAjAyQAOAWATA1QARAzAEAfQALBFgQBKQgHAggrAoQgMAMgUANIgiAXICcgQIBZgCQBGgBArgLQANgEAHALIgIAFIgtAKQgaAFgVAAIhnAAQAuAdAEAsQAEAmgkAUQgPAIgiAHQg6AMg7AAQgcAAgdgDg");
	this.shape_1485.setTransform(100.15,320.5572);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#0B0C0C").s().p("AgVG5QgdgJgHgZIgMgoQgBgFgEgEIgGgIIgLgNQgGgIgHgEQgNgHgEgQQgIgZgDghQgBgFgEgBIACgHQgPhGgdhMIguAgQgFAEgFgFQgCgCAAgDQAAgEADgBIAZgQQAOgJAJgKIg8h5IhBBVIg/BoQgCADgDAAQgDAAgDgBQgEgEADgGIAVgjQAWgsAfgnIA7hOIglhNIgnhfQgSg2gDhCIADhOQAAgIAIABQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACgBADIgDAsQgBBPATA8QAKglAJhQIAAghQAAgHAHgBQAPgCgKBBQgKBJgNAwIAoBbIAXAnIAAAGIACAGIBMCdQAaA9AUBRIAFAVQADAmAIAZQADAKAIAFQAKAFANAOQANAOADAIIANArQAHAYAaAHIAOAEQAIACAHgBQgCgcgGgXQgCgHAHgCQADAAACABQADACABADIAJA6IAnABIAagFQA1AHAkgVQASgKAGgQQAHgQgFgTQgMgkgcgEQAPASADAbQADAZgJAXQgBACgDABQgBABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgFgCAEgPQAFgVgDgQQgFgegSgJIgkgSQgjgbgMghIgxiFQgbhLgRhQIgVhlQgHgggEgsIgGhMIgJh4QAAgIAFgBQADgBACACQADABAAADIAJBpQAegqAFAMQADAEgCADQgUAWgPAZIAJBdQAFAsANAeIAYA0IAXAxQAMAaAHAWIAZBXQAEAPAWAYQAaAcAFAJIAjA/QALATAQAGQAVAHAWgBIBBgDQABgUgEgaQgGgcgIgEQgFgDgLACQgJACgDgEQgDgFADgCQAFgGAQABQASABAGANQAPAegBAtIAdgHQATgFAMgKIgHgrQgFgfgNgVQgGgLgLgEQgLgEgLAFQggANgYgXQgjghgTg4QgTg0ADg0IgrjgQgKgygDgaQgFgrAEgjQAGgDACgFIADgGQACADgDAGQADADABAGIgBAJQgBAfAEAlIAMBDIAsDwIAAAhQAJBAAkA1IATAUQATASASgHQAUgJATAIQATAHAJAUQAHARAGAaIAIAsIABALQAAAFgGAEQgVAOgdAHIglAHIgpACQggACgPgCQgPgCgEABQgBgDgNgJQgPgLgIgNIgbgyQgLgUgagcQgWgZgEgMIgbhcQgOgtgihBQABAVAMAqIAaBdIAiBhIAGAPQAOAtATAdQAWAiAeAHIAPAAQAKgBAGAEIAKADQAfARAGAmQAHAoggAXQgmAcg6gGQgZAEgXAAQgqAAgmgMg");
	this.shape_1486.setTransform(166.6297,310.2734);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#1E1E1E").s().p("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");
	this.shape_1487.setTransform(108.625,234.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817,p:{x:187.4,y:217.9}},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789,p:{x:429.675,y:250.3}},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782,p:{x:399.775,y:327.825}},{t:this.shape_781,p:{x:399.775,y:327.825}},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768,p:{x:419.575,y:238.575}},{t:this.shape_767,p:{x:419.575,y:238.575}},{t:this.shape_766,p:{x:424.25,y:244.875}},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762,p:{x:407.65,y:340.15}},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753,p:{x:420.6,y:312.6}},{t:this.shape_752},{t:this.shape_751,p:{x:423,y:303.975}},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739,p:{x:411.95,y:254.35}},{t:this.shape_738},{t:this.shape_737,p:{x:411.1,y:245.725}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698,p:{x:23.9727,y:270.075}},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686,p:{x:23.0278,y:258.525}},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668,p:{x:18.425,y:250.375}},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664,p:{x:7.9,y:232.05}},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642,p:{x:21.525,y:234.3628}},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585,p:{x:392.625,y:346.55}},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569,p:{x:334.6,y:337}},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552,p:{x:295.8,y:355.05}},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541,p:{x:136.45,y:359.95}},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538,p:{x:89.45,y:353.8}},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535,p:{x:64.5,y:346.05}},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523,p:{x:316.65,y:362.8}},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515,p:{x:231.8,y:369.35}},{t:this.shape_514,p:{x:220.7,y:370.3}},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506,p:{x:119.05,y:368.15}},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502,p:{x:82.8,y:360.1}},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499,p:{x:382.05,y:339.95}},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495,p:{x:340,y:364.25}},{t:this.shape_494},{t:this.shape_493,p:{x:311.65,y:371.7}},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479,p:{x:398.2936,y:274.8299}},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473,p:{x:363.15,y:297.575}},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423,p:{x:250.55,y:348}},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401,p:{x:323.375,y:311.875}},{t:this.shape_400},{t:this.shape_399,p:{x:302.925,y:320.425}},{t:this.shape_398,p:{x:322.125,y:330.275}},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390,p:{x:298.425,y:316.725}},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387,p:{x:297.125,y:335.15}},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379,p:{x:298.425,y:316.725}},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376,p:{x:297.125,y:335.15}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368,p:{x:298.425,y:316.725}},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365,p:{x:297.125,y:335.15}},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357,p:{x:298.425,y:316.725}},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354,p:{x:297.125,y:335.15}},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348,p:{x:253.625,y:321.575}},{t:this.shape_347,p:{x:262.625,y:317.45}},{t:this.shape_346,p:{x:271.175,y:321.575}},{t:this.shape_345,p:{x:274.375,y:329.475}},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342,p:{x:262.625,y:342}},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337,p:{x:253.625,y:321.575}},{t:this.shape_336,p:{x:262.625,y:317.45}},{t:this.shape_335,p:{x:271.175,y:321.575}},{t:this.shape_334,p:{x:274.375,y:329.475}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331,p:{x:262.625,y:342}},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326,p:{x:253.625,y:321.575}},{t:this.shape_325,p:{x:262.625,y:317.45}},{t:this.shape_324,p:{x:271.175,y:321.575}},{t:this.shape_323,p:{x:274.375,y:329.475}},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320,p:{x:262.625,y:342}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315,p:{x:253.625,y:321.575}},{t:this.shape_314,p:{x:262.625,y:317.45}},{t:this.shape_313,p:{x:271.175,y:321.575}},{t:this.shape_312,p:{x:274.375,y:329.475}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309,p:{x:262.625,y:342}},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299,p:{x:242.55,y:343.425}},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288,p:{x:242.55,y:343.425}},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277,p:{x:242.55,y:343.425}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266,p:{x:242.55,y:343.425}},{t:this.shape_265,p:{x:235.275,y:345.425}},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260,p:{x:198.675,y:326.125}},{t:this.shape_259},{t:this.shape_258,p:{x:216.225,y:326.125}},{t:this.shape_257},{t:this.shape_256,p:{x:195.775,y:334.675}},{t:this.shape_255,p:{x:214.975,y:344.525}},{t:this.shape_254},{t:this.shape_253,p:{x:199.1,y:343.25}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249,p:{x:198.675,y:326.125}},{t:this.shape_248},{t:this.shape_247,p:{x:216.225,y:326.125}},{t:this.shape_246},{t:this.shape_245,p:{x:195.775,y:334.675}},{t:this.shape_244,p:{x:214.975,y:344.525}},{t:this.shape_243},{t:this.shape_242,p:{x:199.1,y:343.25}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238,p:{x:198.675,y:326.125}},{t:this.shape_237,p:{x:207.675,y:321.975}},{t:this.shape_236,p:{x:216.225,y:326.125}},{t:this.shape_235},{t:this.shape_234,p:{x:195.775,y:334.675}},{t:this.shape_233,p:{x:214.975,y:344.525}},{t:this.shape_232,p:{x:207.675,y:346.525}},{t:this.shape_231,p:{x:199.1,y:343.25}},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227,p:{x:198.675,y:326.125}},{t:this.shape_226,p:{x:207.675,y:321.975}},{t:this.shape_225,p:{x:216.225,y:326.125}},{t:this.shape_224},{t:this.shape_223,p:{x:195.775,y:334.675}},{t:this.shape_222,p:{x:214.975,y:344.525}},{t:this.shape_221,p:{x:207.675,y:346.525}},{t:this.shape_220,p:{x:199.1,y:343.25}},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215,p:{x:179.3,y:320.875}},{t:this.shape_214,p:{x:187.875,y:325.025}},{t:this.shape_213,p:{x:191.075,y:332.925}},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210,p:{x:179.3,y:345.425}},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204,p:{x:179.3,y:320.875}},{t:this.shape_203,p:{x:187.875,y:325.025}},{t:this.shape_202,p:{x:191.075,y:332.925}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199,p:{x:179.3,y:345.425}},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193,p:{x:179.3,y:320.875}},{t:this.shape_192,p:{x:187.875,y:325.025}},{t:this.shape_191,p:{x:191.075,y:332.925}},{t:this.shape_190,p:{x:167.375,y:333.575}},{t:this.shape_189,p:{x:186.575,y:343.425}},{t:this.shape_188,p:{x:179.3,y:345.425}},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182,p:{x:179.3,y:320.875}},{t:this.shape_181,p:{x:187.875,y:325.025}},{t:this.shape_180,p:{x:191.075,y:332.925}},{t:this.shape_179,p:{x:167.375,y:333.575}},{t:this.shape_178,p:{x:186.575,y:343.425}},{t:this.shape_177,p:{x:179.3,y:345.425}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168,p:{x:140.85,y:329.475}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159,p:{x:161.325,y:320.925}},{t:this.shape_158,p:{x:164.55,y:328.825}},{t:this.shape_157,p:{x:140.85,y:329.475}},{t:this.shape_156,p:{x:160.05,y:339.35}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148,p:{x:161.325,y:320.925}},{t:this.shape_147,p:{x:164.55,y:328.825}},{t:this.shape_146,p:{x:140.85,y:329.475}},{t:this.shape_145,p:{x:160.05,y:339.35}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137,p:{x:161.325,y:320.925}},{t:this.shape_136,p:{x:164.55,y:328.825}},{t:this.shape_135,p:{x:140.85,y:329.475}},{t:this.shape_134,p:{x:160.05,y:339.35}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128,p:{x:115.925,y:317.55}},{t:this.shape_127,p:{x:124.925,y:313.425}},{t:this.shape_126,p:{x:133.525,y:317.55}},{t:this.shape_125,p:{x:136.725,y:325.45}},{t:this.shape_124,p:{x:113.025,y:326.125}},{t:this.shape_123,p:{x:132.225,y:335.975}},{t:this.shape_122,p:{x:124.925,y:337.975}},{t:this.shape_121,p:{x:116.375,y:334.675}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117,p:{x:115.925,y:317.55}},{t:this.shape_116,p:{x:124.925,y:313.425}},{t:this.shape_115,p:{x:133.525,y:317.55}},{t:this.shape_114,p:{x:136.725,y:325.45}},{t:this.shape_113,p:{x:113.025,y:326.125}},{t:this.shape_112,p:{x:132.225,y:335.975}},{t:this.shape_111,p:{x:124.925,y:337.975}},{t:this.shape_110,p:{x:116.375,y:334.675}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:115.925,y:317.55}},{t:this.shape_105,p:{x:124.925,y:313.425}},{t:this.shape_104,p:{x:133.525,y:317.55}},{t:this.shape_103,p:{x:136.725,y:325.45}},{t:this.shape_102,p:{x:113.025,y:326.125}},{t:this.shape_101,p:{x:132.225,y:335.975}},{t:this.shape_100,p:{x:124.925,y:337.975}},{t:this.shape_99,p:{x:116.375,y:334.675}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95,p:{x:115.925,y:317.55}},{t:this.shape_94,p:{x:124.925,y:313.425}},{t:this.shape_93,p:{x:133.525,y:317.55}},{t:this.shape_92,p:{x:136.725,y:325.45}},{t:this.shape_91,p:{x:113.025,y:326.125}},{t:this.shape_90,p:{x:132.225,y:335.975}},{t:this.shape_89,p:{x:124.925,y:337.975}},{t:this.shape_88,p:{x:116.375,y:334.675}},{t:this.shape_87},{t:this.shape_86,p:{x:96.35,y:320.7}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:104.925,y:312.125}},{t:this.shape_81,p:{x:108.125,y:320.025}},{t:this.shape_80,p:{x:84.425,y:320.7}},{t:this.shape_79},{t:this.shape_78,p:{x:96.35,y:332.55}},{t:this.shape_77,p:{x:87.775,y:329.275}},{t:this.shape_76},{t:this.shape_75,p:{x:96.35,y:320.7}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:104.925,y:312.125}},{t:this.shape_70,p:{x:108.125,y:320.025}},{t:this.shape_69,p:{x:84.425,y:320.7}},{t:this.shape_68},{t:this.shape_67,p:{x:96.35,y:332.55}},{t:this.shape_66,p:{x:87.775,y:329.275}},{t:this.shape_65},{t:this.shape_64,p:{x:96.35,y:320.7}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60,p:{x:104.925,y:312.125}},{t:this.shape_59,p:{x:108.125,y:320.025}},{t:this.shape_58,p:{x:84.425,y:320.7}},{t:this.shape_57},{t:this.shape_56,p:{x:96.35,y:332.55}},{t:this.shape_55,p:{x:87.775,y:329.275}},{t:this.shape_54},{t:this.shape_53,p:{x:96.35,y:320.7}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:96.35,y:307.975}},{t:this.shape_49,p:{x:104.925,y:312.125}},{t:this.shape_48,p:{x:108.125,y:320.025}},{t:this.shape_47,p:{x:84.425,y:320.7}},{t:this.shape_46},{t:this.shape_45,p:{x:96.35,y:332.55}},{t:this.shape_44,p:{x:87.775,y:329.275}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:60.925,y:305.3}},{t:this.shape_39,p:{x:69.925,y:301.175}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:58.025,y:313.875}},{t:this.shape_35,p:{x:77.225,y:323.725}},{t:this.shape_34},{t:this.shape_33,p:{x:61.35,y:322.425}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:60.925,y:305.3}},{t:this.shape_28,p:{x:69.925,y:301.175}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:58.025,y:313.875}},{t:this.shape_24,p:{x:77.225,y:323.725}},{t:this.shape_23},{t:this.shape_22,p:{x:61.35,y:322.425}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:60.925,y:305.3}},{t:this.shape_17,p:{x:69.925,y:301.175}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:58.025,y:313.875}},{t:this.shape_13,p:{x:77.225,y:323.725}},{t:this.shape_12},{t:this.shape_11,p:{x:61.35,y:322.425}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:60.925,y:305.3}},{t:this.shape_6,p:{x:69.925,y:301.175}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:58.025,y:313.875}},{t:this.shape_2,p:{x:77.225,y:323.725}},{t:this.shape_1,p:{x:69.925,y:325.725}},{t:this.shape,p:{x:61.35,y:322.425}}]}).to({state:[{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_817,p:{x:187,y:217.15}},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_698,p:{x:25.3727,y:269.025}},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_686,p:{x:24.4278,y:257.525}},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_668,p:{x:19.85,y:249.425}},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_664,p:{x:9.35,y:231.15}},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_642,p:{x:22.925,y:233.4628}},{t:this.shape_515,p:{x:70.15,y:336.95}},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_495,p:{x:33.9,y:325.1}},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_50,p:{x:59.825,y:311.675}},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_36,p:{x:59.825,y:311.675}},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_35,p:{x:59.825,y:311.675}},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_33,p:{x:59.825,y:311.675}},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_751,p:{x:394.5,y:339.975}},{t:this.shape_1287},{t:this.shape_585,p:{x:398.075,y:333.4}},{t:this.shape_1286},{t:this.shape_753,p:{x:399.95,y:326.6}},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_766,p:{x:411.65,y:278.975}},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_739,p:{x:419.7,y:237.65}},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_737,p:{x:418.1,y:319.375}},{t:this.shape_782,p:{x:420.725,y:311.425}},{t:this.shape_781,p:{x:420.725,y:311.425}},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_789,p:{x:429.375,y:267.85}},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_762,p:{x:411.25,y:244.75}},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_768,p:{x:414.775,y:237.275}},{t:this.shape_767,p:{x:414.775,y:237.275}},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_552,p:{x:388.05,y:302.85}},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_538,p:{x:351.35,y:330.4}},{t:this.shape_514,p:{x:335,y:335.75}},{t:this.shape_523,p:{x:326.1,y:341.65}},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_423,p:{x:350.45,y:340.8}},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_499,p:{x:317.7,y:351.65}},{t:this.shape_1226},{t:this.shape_493,p:{x:296.35,y:353.7}},{t:this.shape_541,p:{x:284.95,y:354.65}},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_506,p:{x:82.15,y:350.15}},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_569,p:{x:352.6,y:350.15}},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_479,p:{x:398.4686,y:273.7799}},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_473,p:{x:363.45,y:296.425}},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_502,p:{x:164.15,y:348.85}},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_535,p:{x:84.3,y:341.55}},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_25,p:{x:306.825,y:309.675}},{t:this.shape_1065},{t:this.shape_1,p:{x:324.325,y:309.675}},{t:this.shape_265,p:{x:327.525,y:317.575}},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_159,p:{x:315.775,y:330.025}},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_387,p:{x:302.625,y:322.4}},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_128,p:{x:282.325,y:331.6}},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_376,p:{x:302.625,y:322.4}},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_126,p:{x:282.325,y:331.6}},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_365,p:{x:302.625,y:322.4}},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_125,p:{x:282.325,y:331.6}},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_354,p:{x:302.625,y:322.4}},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_121,p:{x:282.325,y:331.6}},{t:this.shape_1025},{t:this.shape_86,p:{x:263.75,y:327.9}},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_117,p:{x:251.875,y:327.9}},{t:this.shape_24,p:{x:271.025,y:337.725}},{t:this.shape_1019},{t:this.shape_22,p:{x:255.2,y:336.425}},{t:this.shape_1018},{t:this.shape_75,p:{x:263.75,y:327.9}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_115,p:{x:251.875,y:327.9}},{t:this.shape_14,p:{x:271.025,y:337.725}},{t:this.shape_1012},{t:this.shape_13,p:{x:255.2,y:336.425}},{t:this.shape_1011},{t:this.shape_64,p:{x:263.75,y:327.9}},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_114,p:{x:251.875,y:327.9}},{t:this.shape_11,p:{x:271.025,y:337.725}},{t:this.shape_1005},{t:this.shape_3,p:{x:255.2,y:336.425}},{t:this.shape_1004},{t:this.shape_53,p:{x:263.75,y:327.9}},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_110,p:{x:251.875,y:327.9}},{t:this.shape_2,p:{x:271.025,y:337.725}},{t:this.shape_998},{t:this.shape,p:{x:255.2,y:336.425}},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_346,p:{x:248.225,y:330.625}},{t:this.shape_991},{t:this.shape_158,p:{x:243.75,y:341.125}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_335,p:{x:248.225,y:330.625}},{t:this.shape_982},{t:this.shape_156,p:{x:243.75,y:341.125}},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_324,p:{x:248.225,y:330.625}},{t:this.shape_973},{t:this.shape_148,p:{x:243.75,y:341.125}},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_313,p:{x:248.225,y:330.625}},{t:this.shape_964},{t:this.shape_147,p:{x:243.75,y:341.125}},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_213,p:{x:208.975,y:319.775}},{t:this.shape_237,p:{x:217.525,y:323.875}},{t:this.shape_260,p:{x:220.725,y:331.775}},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_401,p:{x:200.425,y:340.975}},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_202,p:{x:208.975,y:319.775}},{t:this.shape_232,p:{x:217.525,y:323.875}},{t:this.shape_249,p:{x:220.725,y:331.775}},{t:this.shape_950},{t:this.shape_949},{t:this.shape_253,p:{x:208.975,y:344.225}},{t:this.shape_258,p:{x:200.425,y:340.975}},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_191,p:{x:208.975,y:319.775}},{t:this.shape_226,p:{x:217.525,y:323.875}},{t:this.shape_238,p:{x:220.725,y:331.775}},{t:this.shape_944},{t:this.shape_943},{t:this.shape_242,p:{x:208.975,y:344.225}},{t:this.shape_247,p:{x:200.425,y:340.975}},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_180,p:{x:208.975,y:319.775}},{t:this.shape_221,p:{x:217.525,y:323.875}},{t:this.shape_227,p:{x:220.725,y:331.775}},{t:this.shape_938},{t:this.shape_937},{t:this.shape_231,p:{x:208.975,y:344.225}},{t:this.shape_236,p:{x:200.425,y:340.975}},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_123,p:{x:171.725,y:322.775}},{t:this.shape_145,p:{x:180.7,y:318.65}},{t:this.shape_137,p:{x:189.225,y:322.775}},{t:this.shape_225,p:{x:192.425,y:330.675}},{t:this.shape_124,p:{x:168.825,y:331.325}},{t:this.shape_933},{t:this.shape_215,p:{x:180.7,y:343.125}},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_112,p:{x:171.725,y:322.775}},{t:this.shape_136,p:{x:180.7,y:318.65}},{t:this.shape_134,p:{x:189.225,y:322.775}},{t:this.shape_127,p:{x:192.425,y:330.675}},{t:this.shape_113,p:{x:168.825,y:331.325}},{t:this.shape_928},{t:this.shape_210,p:{x:180.7,y:343.125}},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_101,p:{x:171.725,y:322.775}},{t:this.shape_77,p:{x:180.7,y:318.65}},{t:this.shape_66,p:{x:189.225,y:322.775}},{t:this.shape_122,p:{x:192.425,y:330.675}},{t:this.shape_102,p:{x:168.825,y:331.325}},{t:this.shape_923},{t:this.shape_204,p:{x:180.7,y:343.125}},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_90,p:{x:171.725,y:322.775}},{t:this.shape_55,p:{x:180.7,y:318.65}},{t:this.shape_44,p:{x:189.225,y:322.775}},{t:this.shape_116,p:{x:192.425,y:330.675}},{t:this.shape_91,p:{x:168.825,y:331.325}},{t:this.shape_918},{t:this.shape_199,p:{x:180.7,y:343.125}},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_106,p:{x:145.275,y:318.7}},{t:this.shape_390,p:{x:154.275,y:314.575}},{t:this.shape_104,p:{x:162.775,y:318.7}},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_347,p:{x:154.275,y:339.05}},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_103,p:{x:145.275,y:318.7}},{t:this.shape_379,p:{x:154.275,y:314.575}},{t:this.shape_99,p:{x:162.775,y:318.7}},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_336,p:{x:154.275,y:339.05}},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_95,p:{x:145.275,y:318.7}},{t:this.shape_368,p:{x:154.275,y:314.575}},{t:this.shape_93,p:{x:162.775,y:318.7}},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_325,p:{x:154.275,y:339.05}},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_92,p:{x:145.275,y:318.7}},{t:this.shape_357,p:{x:154.275,y:314.575}},{t:this.shape_88,p:{x:162.775,y:318.7}},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_314,p:{x:154.275,y:339.05}},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_342,p:{x:126.525,y:311.225}},{t:this.shape_884},{t:this.shape_331,p:{x:138.275,y:323.225}},{t:this.shape_190,p:{x:114.625,y:323.875}},{t:this.shape_40,p:{x:133.775,y:333.7}},{t:this.shape_883},{t:this.shape_214,p:{x:117.975,y:332.425}},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_320,p:{x:126.525,y:311.225}},{t:this.shape_399,p:{x:135.075,y:315.325}},{t:this.shape_309,p:{x:138.275,y:323.225}},{t:this.shape_189,p:{x:114.625,y:323.875}},{t:this.shape_29,p:{x:133.775,y:333.7}},{t:this.shape_398,p:{x:126.525,y:335.675}},{t:this.shape_203,p:{x:117.975,y:332.425}},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_299,p:{x:126.525,y:311.225}},{t:this.shape_348,p:{x:135.075,y:315.325}},{t:this.shape_288,p:{x:138.275,y:323.225}},{t:this.shape_179,p:{x:114.625,y:323.875}},{t:this.shape_18,p:{x:133.775,y:333.7}},{t:this.shape_337,p:{x:126.525,y:335.675}},{t:this.shape_192,p:{x:117.975,y:332.425}},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_277,p:{x:126.525,y:311.225}},{t:this.shape_326,p:{x:135.075,y:315.325}},{t:this.shape_266,p:{x:138.275,y:323.225}},{t:this.shape_178,p:{x:114.625,y:323.875}},{t:this.shape_7,p:{x:133.775,y:333.7}},{t:this.shape_315,p:{x:126.525,y:335.675}},{t:this.shape_181,p:{x:117.975,y:332.425}},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_256,p:{x:89.075,y:309.925}},{t:this.shape_39,p:{x:98.025,y:305.825}},{t:this.shape_255,p:{x:106.575,y:309.925}},{t:this.shape_168,p:{x:109.775,y:317.825}},{t:this.shape_193,p:{x:86.15,y:318.475}},{t:this.shape_345,p:{x:105.275,y:328.275}},{t:this.shape_80,p:{x:98.025,y:330.275}},{t:this.shape_111,p:{x:89.475,y:327.025}},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_245,p:{x:89.075,y:309.925}},{t:this.shape_28,p:{x:98.025,y:305.825}},{t:this.shape_244,p:{x:106.575,y:309.925}},{t:this.shape_157,p:{x:109.775,y:317.825}},{t:this.shape_188,p:{x:86.15,y:318.475}},{t:this.shape_334,p:{x:105.275,y:328.275}},{t:this.shape_69,p:{x:98.025,y:330.275}},{t:this.shape_105,p:{x:89.475,y:327.025}},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_234,p:{x:89.075,y:309.925}},{t:this.shape_17,p:{x:98.025,y:305.825}},{t:this.shape_233,p:{x:106.575,y:309.925}},{t:this.shape_146,p:{x:109.775,y:317.825}},{t:this.shape_182,p:{x:86.15,y:318.475}},{t:this.shape_323,p:{x:105.275,y:328.275}},{t:this.shape_58,p:{x:98.025,y:330.275}},{t:this.shape_100,p:{x:89.475,y:327.025}},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_223,p:{x:89.075,y:309.925}},{t:this.shape_6,p:{x:98.025,y:305.825}},{t:this.shape_222,p:{x:106.575,y:309.925}},{t:this.shape_135,p:{x:109.775,y:317.825}},{t:this.shape_177,p:{x:86.15,y:318.475}},{t:this.shape_312,p:{x:105.275,y:328.275}},{t:this.shape_47,p:{x:98.025,y:330.275}},{t:this.shape_94,p:{x:89.475,y:327.025}},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_82,p:{x:80.225,y:303.125}},{t:this.shape_78,p:{x:83.425,y:311.025}},{t:this.shape_81,p:{x:78.925,y:321.475}},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_71,p:{x:80.225,y:303.125}},{t:this.shape_67,p:{x:83.425,y:311.025}},{t:this.shape_70,p:{x:78.925,y:321.475}},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_60,p:{x:80.225,y:303.125}},{t:this.shape_56,p:{x:83.425,y:311.025}},{t:this.shape_59,p:{x:78.925,y:321.475}},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_49,p:{x:80.225,y:303.125}},{t:this.shape_45,p:{x:83.425,y:311.025}},{t:this.shape_48,p:{x:78.925,y:321.475}},{t:this.shape_220,p:{x:71.675,y:323.475}},{t:this.shape_89,p:{x:63.125,y:320.225}}]},9).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,451.7,398.2);


// stage content:
(lib._1_MOHAMED = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,91,92,93,186,187];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Arrêter un clip/une vidéo
		Permet d’arrêter la vidéo ou le clip spécifié.
		*/
		_this.stop();
		
		_this.bt_concassage.visible = false;
		_this.concassage.stop();
		_this.bateau.stop();
		
		_this.bt_play.on('click', function(){
		_this.play();
		_this.bateau.play();
		_this.concassage.play();
		_this.bt_play.visible = false;
		_this.bt_concassage.visible = true;
		});
		
		
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.bt_concassage.on('click', function(){
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et arrête le clip.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
			//en JS c'est 93 moins 1 frame
		_this.gotoAndStop(92);
		});
	}
	this.frame_91 = function() {
		var _this = this;
		/*
		Arrêter un clip/une vidéo
		Permet d’arrêter la vidéo ou le clip spécifié.
		*/
		_this.stop();
	}
	this.frame_92 = function() {
		var _this = this;
		
		
		
		//var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.bt_x.on('click', function(){
		/*
		Lire un clip/une vidéo ou le scénario actuel.
		Permet de lire la vidéo ou le clip spécifié.
		*/
		_this.play();
		});
	}
	this.frame_93 = function() {
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		
		_this.bt_empattage.on('click', function(){
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et arrête le clip.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
			//en JS c'est 188 moins 1 frame
		_this.gotoAndStop(187);
		});
	}
	this.frame_186 = function() {
		var _this = this;
		/*
		Arrêter un clip/une vidéo
		Permet d’arrêter la vidéo ou le clip spécifié.
		*/
		_this.stop();
	}
	this.frame_187 = function() {
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.bt_x.on('click', function(){
		/*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
		window.open('1_LYNA.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(91).call(this.frame_91).wait(1).call(this.frame_92).wait(1).call(this.frame_93).wait(93).call(this.frame_186).wait(1).call(this.frame_187).wait(1));

	// btn_x
	this.bt_x = new lib.bt_x();
	this.bt_x.name = "bt_x";
	this.bt_x.setTransform(975.25,705,0.8199,0.6144,0,0,0,0.1,0.1);
	this.bt_x._off = true;
	new cjs.ButtonHelper(this.bt_x, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.bt_x).wait(92).to({_off:false},0).to({_off:true},1).wait(94).to({_off:false},0).wait(1));

	// concassage
	this.concassage = new lib.concassage();
	this.concassage.name = "concassage";
	this.concassage.setTransform(170.1,718.1,0.5086,0.5086,0,0,0,282.9,200.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#150C0A").s().p("AzeJZIgXg+IAAgBQAjgHB+hTQCchnAIgEQBNgiAagRQAygiANg0IA1AeIAVARQAPAMAPAHQAPghAKgOQADAHAQAKQgKAUAuACQAhACBVgJQA+gGBKgnQAcgPBhg+QATgFAKgFQASgHgIgSQgGgKgQgNQgSgNgFgFQAKgagUgUQgRgRgegHQgBgSALgRIAOAJQAVAMAlALQAqA6BCgJQASgDAmgMQAjgKASgCQBUgHA6gRQBPgVAPghQgjgQgSgoQgEgLAHgHQAFgGAJgBQAFgBAUAIQATAJAGgCQAVgKAFgiQAGgigOgcQARgDAZgDQAVgCASgKIg6hcQgDgEgHgEIgLgIQACgQgLgLQgGgIgIgCQgJgBgHAHQAIgRAGgjQAGgnAGgPQAHgSAUABQAMAAATADQgBAUANANQAIAHARALQAQAMAcgMQAhgOAFAAQAnAGBJAPQBAALAzgIQAKgCAxAIQAnAHAbgNQgHgRgUgMQgagMgPgKQAdgJAcACIA4AIQgWgdABgUQAAgOAQgcQALgSAbhRQAWhCAXgVQARAcgHA4QgGArgRApIgoBfQgEAHAQADQAQAEAGgLIAaAUQgEAOABAOQABAQAGAHQAOAQA3AEQA4AFAigNQADAGAJAJQAJAIAHACQACgEArBYQAqBWABgBIAgBNQAgBRgFAaQAHACgRAfQgRAfgWAcQghAogQgCQgmAWg8A6QgsApgUgMQgRgIgQAHQgKAFgVASQgxAqgxACQgaApgxARQgvAQgLAWIhuhlIBwA+IBDg3QgRgmglgqQgvg5gHgKIg0ibIhHAqQAAgVAKgWQAJgTgCgHQgFgTgRgQQgSgOgRgBQgLAeAEA6QADAsgVANIgYgUQgQgMgLAHIgjAYQgEADgUAAQgVgBgKAHQgoAYhKAgQhTAkggARQgoAYgUALQgiASggAHIhaA+QhfAciSBYQjoCMgeAQIkNB9QjhBqgpAjQhDhBgwh7gAOlBEQATASAFABQAaAEAOAFQAHABgBgBIgEgFQgJgMARgHIA2gXQAggPAPgNIA2AMIBGhKQgKAGgpiNQgwikgUgTIi4gJQgagJglACQgjABgcALQgTAHgNAdQgEAJgRA3QgeBgg9AqQAFAfBYBLQBYBMAagKgAJqjbQAbAMANgOQAbghAcg1IAwhfQhDgRhIAKQhOALgUAlQgFgKgLAAIgQADQgNgOgJgHQgOgMgMgBQgNgBgTAMQgVALADAKQAFAQAVAMIAdARQAMAKAGAXQAEANAEAYQAbAAAtAPQAdAJAHgPQAMARAXAKgAz8IbQAAgRAHAQIgHABIAAAAgAz1IaIAAAAg");
	this.shape.setTransform(104.9749,674.4661,0.4961,0.4961);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#564337").s().p("AgdA1QgHgIAEgRQAEgPAGgGQgUALgPABQgIAAgPgFQAPgYAjgXIA9gkQAVAOAMAUQAPAZACAdQABAfgsAPQgQAFgOAAQgWAAgPgRg");
	this.shape_1.setTransform(113.49,661.7862,0.4961,0.4961);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#332218").s().p("AA5CcQghgHgIgSQhSjLgRgsQgOgnAFgCQACgBBLCLQBNCRARAQQAFAEAIACQABABAAAAQABAAAAABQABAAAAABQAAAAgBABQgEAGgNAAQgJAAgLgCg");
	this.shape_2.setTransform(117.7091,641.5036,0.4961,0.4961);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#564337").s().p("AgVgBQAGgGAPgCQAQgDAFgEQAFARgQAQg");
	this.shape_3.setTransform(68.4323,685.2447,0.4961,0.4961);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#332218").s().p("AgTgBIAMgOQAGgHAIABQAJACAGAIQAKALgBAPIg9AHQACgNAJgKg");
	this.shape_4.setTransform(117.8966,655.2622,0.4961,0.4961);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#332218").s().p("AgNA0QgQgDAEgIIAmhdQARAUgEAdQgDAXgQAZQgEAIgKAAIgGgBg");
	this.shape_5.setTransform(149.8052,646.2895,0.4961,0.4961);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#332218").s().p("AgQAdIgVgRQAPgPgEgSIAkgaQAKAPASAhQgKAOgPAhQgOgHgPgMg");
	this.shape_6.setTransform(70.8331,685.4928,0.4961,0.4961);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#332218").s().p("AAgAwIhXg8QAPgLAXgLIA3gYQgUAfAGAbQAFAYAbAZIgLALg");
	this.shape_7.setTransform(138.0228,686.9688,0.4961,0.4961);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#564337").s().p("AgnAeQALgIAQgiQATgeAhABQAEApgeAqg");
	this.shape_8.setTransform(161.9486,673.993,0.4961,0.4961);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#332218").s().p("AgWAWQgVgNgFgOQgDgKAVgMQATgMAMABQAMABAOANQAJAGANAOQgOAWgdAVIgcgRg");
	this.shape_9.setTransform(126.9618,656.3922,0.4961,0.4961);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#564337").s().p("AgjAnQgSgigKgOQAigYAZgLQAlgPAgAEIhQBwQgQgLgEgHg");
	this.shape_10.setTransform(74.5046,683.5823,0.4961,0.4961);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#564337").s().p("AAYA/QgtgOgbAAQgEgYgEgNQgGgXgLgJQAcgUAPgXIAQgDQAKAAAEAKQAVAcARAKQgMABgLgCIgPgEQgKgCgJANQgIAMAHADQAhAUANAFQAXAIAagFIgPAbQgFAJgNAAQgHAAgLgEg");
	this.shape_11.setTransform(130.9653,659.3443,0.4961,0.4961);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#332218").s().p("AgGAnQg3gEgOgPQgGgIgBgPQgBgOAEgOQAtgSAxASQA0ATAQArQgYAKglAAIgcgCg");
	this.shape_12.setTransform(155.4324,651.0828,0.4961,0.4961);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#564337").s().p("AkwD1QgeggBIhwQAlg6AIgRQAQghgSgIICMhJQADgLARjFQAPirAOATQgGAICqEWQCvEyAFCGQAAA1gxAxQg1A0hQAOQgdAFgcAAQi4AAjDjOg");
	this.shape_13.setTransform(152.6881,657.5994,0.4961,0.4961);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#564337").s().p("AiPBHQAJgIAXgFQgIgOgLgJIgPgMIB6g+QBGglAwggQAeAHARASQAUAUgKAaQg3ASgzAkQgMAFgigJQgjgKgLACQgHABgGAMQgFAMAEACIANACQALADAKAHIiABAQgDgYAOgNg");
	this.shape_14.setTransform(86.4185,679.1546,0.4961,0.4961);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#332218").s().p("AgLBeQgXgKgMgRIAPgbQgZAGgXgJQgOgFghgUQgHgEAIgLQAIgMALACIAQADQALACAMAAQgRgKgVgcQAUgmBOgLQBHgKBDARIgwBfQgcA0gbAhQgIAIgLAAQgJAAgLgGg");
	this.shape_15.setTransform(136.2451,658.8817,0.4961,0.4961);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#332218").s().p("AA+CaIh4hPIgMgwQgJgegSgLQAVgOgDgrQgEg6ALgfQASABARAPQASAPAFAUQABAGgIATQgKAXgBAUIBGgqIA1CbQgdAIgGAOQgDAGAJAMQAJAMAMAEQAWAMgLAOQgGAHgIAAQgIAAgKgHg");
	this.shape_16.setTransform(134.2687,675.7964,0.4961,0.4961);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#564337").s().p("AgNBnQgWgBglgcQgbgVgOAPIgQAWQgmgMgVgMQAQgYAsgOQA6gSALgHQAdgRA4gvQAzgnAogCIAmAUQAaAOAIASIg2AkQgEADAIARQAJAUgDAEQgNAMgpAEQgtAFgMAHQgJAGgQAWQgMARgJAAIgBAAg");
	this.shape_17.setTransform(101.6806,669.1701,0.4961,0.4961);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#332218").s().p("Ai/BmQgugCALgTIBRhwQAIACAIgFIANgIIAQANQAKAJAIANQgXAGgIAHQgPAMADAZICAg/QgJgHgMgDIgNgDQgEgCAGgLQAFgMAIgBQAKgCAkAKQAiAJAMgFQAzglA3gSQAFAFARANQARANAFALQAJARgSAIQgKAEgUAGQhgA8gcAPQhJAng/AGQhHAIgjAAIgMgBg");
	this.shape_18.setTransform(84.9551,682.3851,0.4961,0.4961);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#332218").s().p("AkbCQIARgWQAOgPAbAVQAlAcAWABQAJAAAOgRQAQgWAJgGQALgHAugFQApgEANgMQACgEgIgUQgIgSAEgDIA1gkQgIgRgagOIglgUQAIgBAOgLQAMgKAFgKQAPAFAIAAQAPgBAUgLQgHAGgDAPQgEARAHAIQAWAbAtgPQAtgPgCgfQgBgegPgZQgMgUgVgOQgFgDACgKQACgJAHgDQAYATAegCQAegBATgVIA6BbQgSAKgVADQgZADgRADQAOAbgGAjQgFAhgVAJQgGADgTgJQgUgIgFABQgJABgFAGQgHAHAFAKQARAoAkARQgPAhhQAVQg5ARhUAIQgRABglALQgmAMgSADIgRABQg3AAgkgzg");
	this.shape_19.setTransform(109.284,666.4859,0.4961,0.4961);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#897254").s().p("AAAgKQACAIABANQgIgLAFgKg");
	this.shape_20.setTransform(110.1026,650.0436,0.4961,0.4961);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#897254").s().p("AgBgKIAEAVQgHgIADgNg");
	this.shape_21.setTransform(106.0636,643.3457,0.4961,0.4961);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#897254").s().p("AgLAEQgQgXABgXQAbADAQAdQARAdgNAYQgXgagJgNg");
	this.shape_22.setTransform(108.5981,646.9551,0.4961,0.4961);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#332218").s().p("AigBpIgWgOQAMgYAjgZQAogdAZgoQAwgBA5gqQAsggAZAJQgUAGAYgEIgEgCIAhgJQA2gOgKAKQgjAlhyBNQhvBOg0AXQgEACgGAAQgJAAgKgGg");
	this.shape_23.setTransform(149.7797,686.8282,0.4961,0.4961);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#564337").s().p("AkLgyQGkiiBYhPIAbAZQgNA0gyAiQgaARhNAiQgUAJgpDMQgpDHgXAAQgRAJgRAAQhoAAhqlWg");
	this.shape_24.setTransform(53.0465,697.8369,0.4961,0.4961);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AA9A80").s().p("AjcCZQgOgIgWgXQAKgLAegIQAggKAKgHQAfgXAqgXIBKgnIDGhuQAOgIAOgPIAUgXQAIgIAMAEQAEACAOAJQgHADgCAJQgDAKAGADIg/AkQgiAXgPAZQgGAKgMAKQgOALgJABQgnACg0AmQg3AvgdASQgMAHg5ASQgsAOgQAYg");
	this.shape_25.setTransform(102.5985,664.455,0.4961,0.4961);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#564337").s().p("ABcBtQgGgbAUggIg4AZQgXAKgPALIjKjiIAjgZQALgIAQANIAYAUQASALAJAgIAMAwIB4BOQAVANAKgOQAMgNgWgNQgNgEgIgLQgJgLADgHQAGgOAdgHQAGAJAwA4QAkArARAmIhDA3QgbgZgFgZg");
	this.shape_26.setTransform(134.6367,681.5159,0.4961,0.4961);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#897254").s().p("AjwCJIgbgaQAKgJAggIQAggJAKgHQAegXAxgSQA9gWASgKIDVhwQALgGAOgOIAUgUQAVAXAOAIQgLARACASQgwAghHAlIh7A9IgNAIQgHAFgIgCQgggEglAPQgaALgiAYIglAaQgFAEgQADQgQADgGAGg");
	this.shape_27.setTransform(78.3124,677.8274,0.4961,0.4961);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AA9A80").s().p("AlEC5QAOgdAEgNQAZhQAyg0QAuguBOgkQAagLBZgvQBVgrAxgVQCfhDAcBBQgQANgkADQgrADgPAGQgHADg7AnQgnAagegCQgagBgRAGQgVAIgMAWQgQgPgRAPQgKAJgVAkQgyBSgxALQgsAEgWAFQgmAKgJAlQgJAlgJAUQgNAdgTARQgQgRAKgag");
	this.shape_28.setTransform(122.133,630.0428,0.4961,0.4961);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#332218").s().p("ABqDLQgwgIgLABQgyAIhAgKQhJgPgngGQgFgBggAOQgcANgQgNQgRgKgIgIQgOgMABgUQAHgBAxgOQAmgLAVADQAwAGAvgLQAOgEA0gTQAegLAPAFQATAHANAmQADALAYgEQAXgDAEgNQAJgfAPgkIAag8IAKgSQAVgiATgnQAnhNgIgYIA4BLQgEABgDAFQgEAFgBAEQAAAHAGAIIAJALQgZAWgXAtIgnBNQgPAcgBAOQAAAUAVAdIg4gJQgbgBgdAJQAOAJAaAMQAVAMAGARQgRAJgXAAQgMAAgOgCg");
	this.shape_29.setTransform(136.4583,641.7802,0.4961,0.4961);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#564337").s().p("Aj1FrQgOgJgEgCQgMgEgIAIIgSgnQAAgQgEgIQgUgjgXgaQgBgOgDgHIgIgJQANgYgRgdQgQgdgcgEIgVgTIgFgVIACgQQABgKAEgEQATgQANgeQAIgTAJgkQAKgmAmgJQAVgGAtgDQAwgLAyhUQAWgjAKgJQAJgJAKACQATgQAKgFQARgJAFABIAAACQAfABA4gaQAggOA3gcQAPgHAqgDQAegCAQgJIADgEQgBgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIABgCQDfD7gHgCQAJAbgrBLQgkA8gjAhIgRAnQgOAkgKAfQgDANgYADQgXAEgEgLQgNgmgTgHQgOgFgfALQg0ATgPAEQgvALgvgGQgUgDgmALQgyAOgGABQgTgDgMAAQgUgBgHARQgGAQgGAnQgGAjgIAQIgLAOQgJALgDAOIA+gHIALAHQAHAFADAEQgTAVgeABIgFABQgbAAgWgSgAEakkQAEACgDgDIgCAAIABABg");
	this.shape_30.setTransform(127.5593,639.0445,0.4961,0.4961);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#150C0A").s().p("AMAMiQjiiTgQgNQgbgYjBi7Qh7h2hWgwIhLhRQgdgOgdgZIgzgwQgbgXhJg2QhBgughgiQgJgJgUgDQgUgEgDgEIgdggQgJgKgTAJQgUAMgHACQgSgSANgpQARg4gEggQgRgDgUALQgVAKgJASQgDAGAEAVQAFAYgEATIg8g4IhWCNQgIAHg8AtQgtAhgZAhIA0BEIB+gmIiEBNQgGgYgqgaQgsgbgQguQgvgNgngzQgRgXgIgGQgOgLgTAFQgWAGghgyQguhFgggeQAOACAIgiIA4AAQAMAQAcAWIAvAiQAOALgKAKIgGAEQAAABAGAAQAPgCAaACQAGABAWgOIBGgGQAXARBng4QBmg2AMgdQgyg2gIhlQgEg5gCgKQgGgegRgMQgYgRgjgJQgjgKgcADIi2ggQgXAOhTCVQhHCAgJgIIAzBZIgaAdIAEADQgQgCgXguQgQgggJgjQgJgiAGgBQACgaAxhIQAYgkAYgfQABABA9hMQA8hLACAEQAHgBAKgGQALgGAEgGQAeAVA5AIQA2AIAQgMQAJgGAEgPQAEgOgBgOIAegOQADAMAQAAQARABgCgJIgShlQgHgsADgrQAFg4AYgYQASAaAHBGQAIBVAGAUQAJAegCAOQgEAUgcAXIA5AFQAbAEAaAPIgsAMQgWAHgLAPQAXATAoACQAxADAKAEQAwATBBAEQAlACBMADQAFAAAdAVQAZASASgIIAcgMQAQgJAEgTQAHACAXABQAVAEACASQACARgCAnQgCAkAEARQgFgIgJAAQgJgBgIAGQgMAKgDAPIgMAFQgIADgDADIhNBMQAQAOATAIIAoAPQgUAYgCAiQgCAjASAOQAFADAVgDQAVgEAFACQAIADAEAHQAFAIgHAJQgMARgSAMQgRALgRADQAHAkBIAnQA1AcBQAaQAhALBEAoQA/AYA1gxQAogDAXgHIAPgFQAHAUgGAQQgeABgUANQgZAPAEAcIgaAMQgTAJgHAKQgNAPAQALIAbAQQBPBRAZAVQA/A3A8AUQBSAbAgAGQAtAIgGgVIAMgGQAIgDADgEQAHAQAGAkQARgEARgIQATgKAFgCIA6gRQACA1ApAsQAVAXBEAyICBB+QBtBrAbAGQgPAkgcArQg5BVhDAhQgfgqjNiGgApOoyQAKAkAQBDQAOA6AUAlQAJASAegGQAYgGAPgNQAEAQAegCQAwgEAaAGIAQgjQALgVANgHQAIgDAZgGQAXgIAIgOQAFgJgRgRQgRgPgMgCQgNgCgQAJIgaAPIgPgFQgKgDgHAJQgLgqhKgcQg/gXhAAAIgKAAg");
	this.shape_31.setTransform(260.8862,696.3086,0.4961,0.4961);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#564337").s().p("AguA6QgogYAIgdQAQg3A1gUIA0AxQAcAdAJAbQgPACgIgCQgPgEgQgPQAEAHAAAPQAAASgIAGQgNAJgPAAQgSAAgWgNg");
	this.shape_32.setTransform(258.2168,681.8013,0.4961,0.4961);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#332218").s().p("AhZCIQgggBgEgLQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAIAAAGgDQAUgLBsh8QBoh4ACACQAEAEgXAiQgaAnh9CzQgLAPgeAAIgEAAg");
	this.shape_33.setTransform(258.8621,661.431,0.4961,0.4961);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#564337").s().p("AgQgRQAEAFAOAGQAOAGAFAHIgjALQgLgSAJgRg");
	this.shape_34.setTransform(297.1669,714.7278,0.4961,0.4961);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#332218").s().p("AgdAFQADgOAMgKQAIgGAIABQAJAAAFAIIAIAQQAGAMgBAOg");
	this.shape_35.setTransform(255.3755,674.7876,0.4961,0.4961);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#332218").s().p("AAGA2QgPAAgDgMQgJgcACgXQACgdAUgQIASBkQABAJgOAAIgCgBg");
	this.shape_36.setTransform(226.2704,658.7888,0.4961,0.4961);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#332218").s().p("AgjgEQAZgdANgNIAeAiQgIAQALATQgFACgTAJQgRAJgQAEQgHgkgHgPg");
	this.shape_37.setTransform(294.6541,714.4797,0.4961,0.4961);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#332218").s().p("Ag9AsQAggSAIgXQAJgWgMglQANAKAmAaQAYAQALAMIhiApIgQAIg");
	this.shape_38.setTransform(228.7916,700.5258,0.4961,0.4961);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#332218").s().p("AgwgOIAagPQARgJALACQANACAQAPQASARgGAIQgIAOgXAIQgXAGgIADQgXgYgKgbg");
	this.shape_39.setTransform(246.5736,673.6876,0.4961,0.4961);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#564337").s().p("Ag5g/QAhADAfAXQAWAQAdAeQgOANgZAdQgCAEgJADIgKAGg");
	this.shape_40.setTransform(291.9253,711.689,0.4961,0.4961);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#564337").s().p("AgjA6QgeADgEgRIgIgdQAXALAZgDQAPgCAjgMQAHgDgFgMQgFgOgLgBIgPAAQgMAAgLgDQANgEAMgJIAUgQQAHgJAKADIAPAGQAKAbAWAZQgNAFgLAVIgQAjQgagGgvAEg");
	this.shape_41.setTransform(241.8896,675.6382,0.4961,0.4961);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#332218").s().p("AAAAkQg3gIgfgUQAagmA3gHQA0gGAoAbQABAPgEAMQgFAPgIAGQgKAHgXAAQgQAAgWgDg");
	this.shape_42.setTransform(219.8412,662.4088,0.4961,0.4961);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#564337").s().p("AiqGWQhMgfgog/Qglg6AMg0QAjiBDvkEQArgwByh2QBFhHgCgFQARgQgYCrQgbDDABAMIB4BmQgTADAHAlQAEASAYBBQAtB9gkAYQi8B9iXAAQhFAAg9gag");
	this.shape_43.setTransform(218.3742,669.1571,0.4961,0.4961);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#564337").s().p("AASAqQALgFAMAAIANAAQAFgBgDgMQgDgNgHgDQgJgDglABQgkABgKgHQgrgwgwgcQgEgcAYgPQAVgNAegBQAnApA9A1IBpBXIgSAJQgMAGgLALQAVAMAHAIQALAQgIAYg");
	this.shape_44.setTransform(280.8723,705.2888,0.4961,0.4961);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#332218").s().p("Ag3BdQgUgmgPg4QgPhDgLglQBGgCBCAaQBKAcALApIgUAPQgNAJgMAEQALADALAAIARAAQAKABAGAOQAFANgIADQgkAMgPACQgZADgXgLIAJAdQgQAOgXAFIgNACQgTAAgGgNg");
	this.shape_45.setTransform(237.35,673.6074,0.4961,0.4961);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#332218").s().p("AhzCCQgHgQAYgHQANgCALgJQALgKgBgHQgEgPgZgNIBWiMIA7A4QAEgTgFgYQgEgVADgGQAJgSAVgKQAUgLARADQAEAggRA4QgNApASARQgUAHgQAdQgPAhgHALIiHAyQgIADgGAAQgMAAgFgKg");
	this.shape_46.setTransform(234.5462,690.9901,0.4961,0.4961);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#564337").s().p("ABiBhQgLgTgfAPQgqATgVgEQgJgCgJgUQgLgYgIgIQgKgKgqgOQgogOgJgOQgCgEAMgRQAMgQgDgEIgsgvQALgQAdgIIApgKQAnALApAwIBEBRQAKAKA0AfQAoAXAKAbQgXAHgoADIgKgYg");
	this.shape_47.setTransform(268.2223,691.5953,0.4961,0.4961);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#332218").s().p("ACoCMQgggGhSgbQg6gUg/g2QgagWhPhPIgagQQgQgMAMgPQAIgJATgJIAagNQAwAdArAwQAKAIAkgCQAlgBAJAEQAHADADAMQADANgFABIgNAAQgMAAgLAFIBvBaQAIgYgLgPQgHgJgVgLQALgLAMgGIASgJIAMALQAGAGAIAAIA3B/QAEAQgWAAQgJAAgNgDg");
	this.shape_48.setTransform(281.4621,708.5362,0.4961,0.4961);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#332218").s().p("ACFDmQhEgogigLQhPgag1gdQhIgngIgjQASgEARgLQARgMANgRQAGgIgEgIQgEgHgJgDQgFgCgVAEQgUAEgFgEQgTgNACgkQADgiATgYIgngPQgUgHgQgOIBNhMQAOAZAdAIQAdAIAcgNQAFAFABAJQAAAJgGADQg1AUgPA4QgIAdAoAYQAoAZAdgVQAIgGAAgSQAAgPgFgHQARAPAOAEQAIACAPgCQADALAKANQAKANAJAEIgqALQgbAHgMAQIArAvQAEADgNAQQgLARACAFQAIAPAoANQArAPAJAJQAIAIAMAZQAJAUAIABQAWAEAqgTQAggOAKASIALAZQgkAggoAAQgUAAgUgIg");
	this.shape_49.setTransform(261.2639,687.4016,0.4961,0.4961);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#897254").s().p("AAEgJQACAKgKAJQAEgLAEgIg");
	this.shape_50.setTransform(264.3104,671.3032,0.4961,0.4961);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#897254").s().p("AAFgJQgBAOgIAFg");
	this.shape_51.setTransform(269.7603,665.672,0.4961,0.4961);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#897254").s().p("AgPgOQAVgYAcADQgEAWgVATQgLALgdAUQgHgbAXgYg");
	this.shape_52.setTransform(266.6013,668.6554,0.4961,0.4961);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#332218").s().p("ABmCLQgtghhbhlQhdhkgbgtQgHgLAxAZIAfAQQAagDAjAoQAvA2AuANQAQArAgAmQAdAhAGAaQgOAGgKADQgHABgGAAQgKAAgHgFg");
	this.shape_53.setTransform(217.5945,698.1004,0.4961,0.4961);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#564337").s().p("AAhB4QgagFgihAQgohHgOgKQhDgygWgXQgpgtgBg1IAfgSQAwBECGB8QCCB2BSA4QgMA2ghAPQgJAEgJAAQgxAAhEhkg");
	this.shape_54.setTransform(309.898,724.7554,0.4961,0.4961);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#AA9A80").s().p("ABxCcQg0gfgKgKIhDhSQgqgvgmgLQgJgEgKgOQgKgNgDgKQgKgcgcgdIg1gyQAGgCAAgKQgBgJgFgEQAOgGAGgBQAMgCAGAKIAPAbQAKARAMALICoCYIBAA3QAjAfAZAdQAIAKAeAQQAbAPAHANQgXAQgSAGIgQAFQgKgbgogXg");
	this.shape_55.setTransform(268.6068,686.874,0.4961,0.4961);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#564337").s().p("AjVA6QAZgiAtgiQA7guAHgIQAPAIAOAKQAQAMABAHQACAHgLAPQgGAGgFAEIAJgDIBxgdQAHgLAPgiQAPgdAUgHQAHgDAVgMQASgJAJAKIAeAhIj2C1QgNgPgVgQIgyglQANAkgLAaQgKAYghATQgOgUgpgzg");
	this.shape_56.setTransform(233.4181,696.5378,0.4961,0.4961);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#897254").s().p("ACjC1QgPgHgEgEIgfgiQgcgggWgPQghgYgggCQgHgBgHgGIgMgLIhphXQg9g0gogpQAFgQgGgUQASgGAYgRQAVAlAOAMIC1CdQAQAOA3AjQAqAcAaAdQAHAJAeAQQAdAPAIAMIggASIgWAHQgFgIgOgGg");
	this.shape_57.setTransform(289.1841,705.4128,0.4961,0.4961);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#AA9A80").s().p("ADwDtQgEgVgBgmQgBgngjgRQgsgPgSgJQgtgVgfhcQgNgngHgLQgNgSgUALQgGgZgSgMQgPgKgagEQgegFghgiQgxg0gFgEQgNgKgpgMQgjgLgNgQQAqg5CMBkQBNA4CKB3QBFAzAiA4QAlA+AGBUQACANAHAgQAEAcgUAMQgPgUgFggg");
	this.shape_58.setTransform(257.0723,649.3334,0.4961,0.4961);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#332218").s().p("ACwDsQgdgVgGgBQhLgCgmgDQhAgEgwgTQgKgDgwgDQgpgDgWgTQAKgOAWgHIAsgMQgagQgbgEIg4gEQAcgYADgUQACgNgIgeIgVhVQgMgxgTgbIALgJQAIgGAAgGQABgLgIgHIBGg9QgMAVAUBVQALAqANAmIAEASIABABIALBBQAHAmACAhQABANAWAJQAWAIAGgKQAVghAUgDQAPgCAbASQAvAeANAHQAsAWAvAEQAVACAjATIAzAbQgEAUgPAJIgdALQgGADgGAAQgOAAgQgMg");
	this.shape_59.setTransform(240.24,657.082,0.4961,0.4961);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#564337").s().p("AgYAOQACgEgHgKQgGgHgGgGQgFgEAvgEQAugEgFAIQgEAGgPgDQgMgEABACQADAKgYATQgNAKgDAAQgEAAAFgJg");
	this.shape_60.setTransform(258.091,663.9322,0.4961,0.4961);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#564337").s().p("AACAOQgQgVAAgJQgDgJASAAIAOgBQgPAWACAOQACAEAJANQgEgDgHgKgAAPgaIAAAAIAAAAg");
	this.shape_61.setTransform(257.2106,663.2409,0.4961,0.4961);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#564337").s().p("AgWAXQgQgBgZgHQgagHgPgIQgQgIAQAAQAhAAAfgNQgmhigEgGQAHAAA0BCIAQAWQAPgEATAOQAOALAbAZQAPAMAeAMIhJBcIgCABQgRAAgrhng");
	this.shape_62.setTransform(250.8016,649.5908,0.4961,0.4961);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#564337").s().p("AAjAqQAMgIg0grIg1gqQAWAGAvAhQAwAgAAAKQACAMgXAHIgMADQgGAAAPgKg");
	this.shape_63.setTransform(258.6362,654.7129,0.4961,0.4961);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#564337").s().p("AgDAQQgHgJAIgOQgnAEAngNQAkgLgeASQASALAAAKQAAAIgKABIgEAAQgHAAgEgFg");
	this.shape_64.setTransform(263.9895,658.6853,0.4961,0.4961);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#564337").s().p("AgSBEIgghCIBShHIARA2QAKA3ggAKIgYANQgMAHgFAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_65.setTransform(241.8502,639.3315,0.4961,0.4961);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#564337").s().p("ABiGfQgegIgNgZQADgDAIgDIAMgFIA7AVQABgOgGgNIgIgQQgEgRACgkQACgngCgRQgCgSgVgEQgXgBgHgCIgzgcQgigTgVgCQgwgEgrgWQgNgGgvgeQgcgSgPACQgUACgVAiQgGAJgWgIQgWgIgBgOQgCghgHglIgHgqQgagogWhDQgahSAQgZQgGABCFhgQCCheAIgFIgCADQANAQAjALQApAMANAKIBKA9QAzAnAgAFQgCgBAAAAQgBgBgBAAQAAAAAAAAQAAAAABAAQAFAAAPAMQAIAHAQAUQAJAAAIALQAHALANAnQAfBdAtAVQASAJAsAPQAjARABAmQABAmAEAVQAFAgAPAUQADAEgBALIgBAQIgKATIgZAOQgcgCgWAYQgXAZAHAaIgKAHQgFAIgEAMQgdAVgaAdQgEAFgFARIgaAiQgGgKgNACQgGABgOAGQgRAHgRAAQgLAAgLgDg");
	this.shape_66.setTransform(250.0336,656.6205,0.4961,0.4961);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#988261").s().p("Ag1A8IgcgYQgBgKABgNQACgYALgOIAIgaIAggKIANAJIA2AYQAfALANgCIgbBDIgPABQg8ANgXAAQgIAAgDgCg");
	this.shape_67.setTransform(213.4114,724.5634,0.4962,0.4962);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#988261").s().p("AhZAjIgQhBIBQgNIBxAIIASAOIgDAPIiHAzg");
	this.shape_68.setTransform(169.2331,732.6878,0.4962,0.4962);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#988261").s().p("Ag8AkQgOgDgPgHQgegPgCgVIAQgUQAUgUAUAEIANABQARAJAWAqIATgBQAXgDAQgEIAjgNQAkgMAGAJQgHAMgMANQgaAbgfALQgMADgTAAIgGAAQgjAAgigMg");
	this.shape_69.setTransform(196.9236,721.1882,0.4962,0.4962);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#988261").s().p("AAIAVIhAgOIgBgYQAJgXAvAMIAzALIAIASIgRAgg");
	this.shape_70.setTransform(169.3323,715.3521,0.4962,0.4962);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#150C0A").s().p("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");
	this.shape_71.setTransform(174.9771,776.7762,0.4962,0.4962);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#564337").s().p("AhJgHQAmgNAdgBQAfgCAxALQgbAegoAEIgHAAQgnAAgigdg");
	this.shape_72.setTransform(113.0952,733.9819,0.4962,0.4962);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#988261").s().p("AheA5QgFgTAIggQAJgkAWgVQAUgSBCAUQBFAUACAjQACAdhDAQQgmAKgmAAQgZAAgZgEg");
	this.shape_73.setTransform(152.9883,724.6677,0.4962,0.4962);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#332218").s().p("AgUACQgBgfgLgcQARgEASAMQAUANAIAUQAHASgPAaQgQAbgbAEIAAg5g");
	this.shape_74.setTransform(275.405,754.1333,0.4962,0.4962);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#332218").s().p("AghAAIACg+QAtAGATAgQAFAXgUAeQgUAegZADQgGgdAAghg");
	this.shape_75.setTransform(276.1069,764.4724,0.4962,0.4962);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#897254").s().p("AgHAAIAHgHIAIAHIgIAIg");
	this.shape_76.setTransform(185.8201,720.6786,0.4962,0.4962);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#897254").s().p("AgWAJQAAgLAIgEQAFgDAKAAQAIAAAHADQAHADABAEQgKAHgLACIgOAAg");
	this.shape_77.setTransform(189.4923,714.7469,0.4962,0.4962);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#897254").s().p("AgQgVQAVgBAMALIgKARQgHAMgLAFg");
	this.shape_78.setTransform(189.9265,716.9796,0.4962,0.4962);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#897254").s().p("AgzANQgXgYAhgEQAVgDBRgCQgJAdgbABQgcgDgHAEQgOAKgLAAQgJAAgHgIg");
	this.shape_79.setTransform(185.0129,722.9718,0.4962,0.4962);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#897254").s().p("AgdAHIgJgHQAUgIAXAAQAYAAAKAKQgPAHgUAAIghgCg");
	this.shape_80.setTransform(257.6518,728.1465,0.4962,0.4962);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#332118").s().p("AgdAAQgBgPAcgCQAagDAGAWQAEAPgfACIgDAAQgbAAgCgTg");
	this.shape_81.setTransform(134.5311,754.7175,0.4962,0.4962);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#AA9A80").s().p("AgFAJQgWAAABgOQAAgQAUABQAagCAEAJQADAFAAAIQAAAIgDAFQgDAGgJACIgDAAQgJAAgFgMg");
	this.shape_82.setTransform(145.3271,748.4941,0.4962,0.4962);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#332118").s().p("AgDAeQgVgCgOgSQgHgIgPgeQAagDAkADIA7AGQADAcgTAOQgPAKgYAAIgJAAg");
	this.shape_83.setTransform(141.2549,754.7501,0.4962,0.4962);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#AA9A80").s().p("AhOAcQgCgPgSgPQAVgIANgNQALgLATgfQAOA2AiARQAbAPA6gCQgWAkg2AFQhGgBgqAHQANgXgCgPg");
	this.shape_84.setTransform(138.0316,747.0169,0.4962,0.4962);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#150C0A").s().p("AADAoQgSgCgLgGQgKgNgEgWIgFgkIA6ACQgEAWAIAQQAHARAWASQgQAEgRAAIgKAAg");
	this.shape_85.setTransform(106.3339,740.8348,0.4962,0.4962);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#897254").s().p("AgGAAIAGgGIAIAGIgIAIg");
	this.shape_86.setTransform(214.255,739.3871,0.4962,0.4962);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#897254").s().p("AgGAAIAGgGIAHAGIgHAHg");
	this.shape_87.setTransform(200.0376,740.1315,0.4962,0.4962);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#897254").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_88.setTransform(179.096,732.6506,0.4962,0.4962);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#897254").s().p("AgGANQgFgKADgFQAEgNAOgFIgBASQAAANgHAKIgBAAQgDAAgEgIg");
	this.shape_89.setTransform(176.8225,731.1581,0.4962,0.4962);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#150C0B").s().p("AgMAEQgFgFACgNIAeAGIACAWIgHABQgNAAgJgLg");
	this.shape_90.setTransform(156.2926,754.7971,0.4962,0.4962);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#988261").s().p("AgeADQAIgJAOgBQAIgBAQADIAPAMIgbACQgQAAgSgGg");
	this.shape_91.setTransform(216.0787,740.8696,0.4962,0.4962);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#564337").s().p("AABANQgVgCgDgLQAMgLALgBQAPgCAJANQAAAOgUAAIgDAAg");
	this.shape_92.setTransform(217.1829,748.1061,0.4962,0.4962);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#988261").s().p("AgYgFQAYgQAZAGQgGAWgUAKg");
	this.shape_93.setTransform(173.079,733.0938,0.4962,0.4962);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#988261").s().p("AgSgaQAlgCAMAEQAHADgEASIgHAaIg+AFQASgYgBgeg");
	this.shape_94.setTransform(163.2506,735.6611,0.4962,0.4962);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#897254").s().p("AgLATIgXgEQAAgPALgJQALgKAPAAQALAAAGACQAJADAGAJQgGASgRAGQgFABgHAAIgLgBg");
	this.shape_95.setTransform(211.8353,749.0362,0.4962,0.4962);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#564337").s().p("Ag3AcQgCgOAHgJQAHgHAQgHIA9gaQgFAMgDAFQgIALgSANIA4ANQgqANgSACIgQACQgTAAgQgIg");
	this.shape_96.setTransform(223.3377,746.6855,0.4962,0.4962);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#897254").s().p("AgvAIQgUgIgEgIQgEgJARAAQA0gFAPACQAmAFAaAeQgbAGgZAAQgkAAgggNg");
	this.shape_97.setTransform(163.0483,741.5613,0.4962,0.4962);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#897254").s().p("AAAAeQgVgEgsgPQAIgWAbgNQAZgMANAJIAZASQASANAPAUQgUAIgWAAQgMAAgMgCg");
	this.shape_98.setTransform(202.618,743.2402,0.4962,0.4962);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#897254").s().p("Ah1BMQgKgOAOgQQAPgRAEgBQAHgDAVAKQASAIAjgTQAbgPAagXIgUgUQgLgLACgQQAaAPAPADQARADANgKQgOgJgCgNQgCgKAGgFQACgCAJAAIAMACIAdA+QgUAlg6ATQgyAQgIAlIgnABQgXABgMAEQgUgCgJgMg");
	this.shape_99.setTransform(180.8287,732.9334,0.4962,0.4962);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#897254").s().p("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");
	this.shape_100.setTransform(223.3587,722.4898,0.4962,0.4962);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#150C0A").s().p("AALA1QgUgEgNgTIgcADQgLACgCgKQgFgSAcgRQAcgSgGgZIAsAAQgCANAGAHQALANATgDQAHASgDARQgDAUgQANQgLAJgNAAIgKgBg");
	this.shape_101.setTransform(154.1778,756.7069,0.4962,0.4962);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#988261").s().p("AgPAyIAHgbQAEgSgIgDQgMgDgmABQgZADgtAdQgNgDgFgKQgGgJAGgFQAGgEAFgKIAPADQAHAAAPgXQAPgXALgCQAGgBANAWQAOAXAFABQAJACAKgFQALgEAFgJQAaAYAngDQAggDAjgWIAYAXQAKAbhAAVQgnANgiAAQgWAAgTgFg");
	this.shape_102.setTransform(165.4175,734.3235,0.4962,0.4962);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#332218").s().p("Ag3BCQgegkgeADQgHAAgMgGQgNgGgCgHQgBgEAGgJIAKgLIANgMQACAMAXACQAWABABgQIAWgCQAPAAAHAEQAWAKAcgEQATgDAqgNIg5gMQATgOAIgMQADgEAFgMIBHAFIATBcIh4AGIgLgKQgHgFgFAAQgWAAAJAhQAJAlgJAHQgJAGgIAAQgQAAgQgUg");
	this.shape_103.setTransform(222.0674,749.1896,0.4962,0.4962);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#564337").s().p("AhlB9QgagCgLgTQgWgkABgRQABgMAUgUQAzg0AtA/QAJgSgEgPIgLgcQARgKALgWQAJgXAFgIIBTgeQAeAYA1ADQgEAhgUAaQg7APhDAvQhKA1APAgQgXAQgZAAIgEAAg");
	this.shape_104.setTransform(110.9962,744.489,0.4962,0.4962);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#897254").s().p("AAuAhQgDgSgIgIIhMgHQhUgJgSAJQgXANgLAFQgTAIgTgFQgbgIgOgWQACgYAcgEIAqgDQA1gTAygGQAqgFA3ADQAhABAxALIBRATQgEALgGAEQgGAFAFAJQAGAJAMADQAtgcAagDQABAegSAYIg5ANQgjAIgegKQgVgIgTAKQgRAJgLAUIgEglg");
	this.shape_105.setTransform(149.5598,735.6638,0.4962,0.4962);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#897254").s().p("AAgAUQgXACgZgHQgbgGgTgKQgKgGAHgRQAIgSAUAAQAmgBBAA5QAKAVgTAHIgHABQgOAAgDgXg");
	this.shape_106.setTransform(186.7454,704.1744,0.4962,0.4962);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#897254").s().p("AgDAqQgcgIgFgRQAAgDAJgKQAJgJAAgDQgBgEgJgHIgQgNQAKgOAXADQATADAOAMQANAJAGATQAIAUgLAOQgJALgPAAQgIAAgJgDg");
	this.shape_107.setTransform(179.3036,699.3323,0.4962,0.4962);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#897254").s().p("AgvgUQAcgZAlgFQgLAlARAPQAIAHATAIQAWAJAOAKQgaAFg8ABQg1ACgiAHQAJgsAegbg");
	this.shape_108.setTransform(150.0035,714.4507,0.4962,0.4962);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#332218").s().p("AgGgCIANACQgDADgCAAQgEAAgEgFg");
	this.shape_109.setTransform(152.2242,721.6999,0.4962,0.4962);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#AA9A80").s().p("AggBUIhSgTQgxgLghgCQADgUAQgLQAJgHAegJIC0g5IAsgOQAUgGAPgIQARgJAbAGQAeAGACAZQhIgJAXAhIjCBJQAXAPAFAbg");
	this.shape_110.setTransform(160.1145,729.6756,0.4962,0.4962);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#988261").s().p("AjMAkIDDhJQAnAEAdgIQAggJAXgaIBbAMIgQBAQgPAFgEAMIgmAMQhCgCgfACQg3ADgiAaQgGAJgKAEQgLAFgIgDQgGgBgNgWQgNgWgGABQgMACgOAXQgPAWgIABQgFgbgXgOg");
	this.shape_111.setTransform(167.9552,730.1569,0.4962,0.4962);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#897254").s().p("AAEAcQgMgEgKgNQgMgRAEgMQAEgOAZAAIAZBBIgYgFg");
	this.shape_112.setTransform(164.4699,700.8656,0.4962,0.4962);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#897254").s().p("AgxAhIgSgfQAlADAfgJQAZgIAogXQABAQAAAYQAAATABAMQhOgDgnAAg");
	this.shape_113.setTransform(163.4642,706.0145,0.4962,0.4962);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#897254").s().p("AhQAmQAUgRAHgSQAIgUgHgaQAtgEA1AUIANAgQAEADAGAAQAUAPgPAJQgQAJgHgRIgJgEQgWAVgcADIgMAAQgWAAgmgGg");
	this.shape_114.setTransform(155.9008,709.0476,0.4962,0.4962);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#564337").s().p("Ag1AWQAVggAYgSQAegYAfAJQAEAXgXAUQgeAagHAUQgVgbgdADg");
	this.shape_115.setTransform(295.899,735.1568,0.4962,0.4962);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#150C0A").s().p("Agog2QgDgWAJgEQAJgFASAPQAXAUASA6QATBAgdAKQg5hVgHgzg");
	this.shape_116.setTransform(294.6368,744.0881,0.4962,0.4962);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#150C0A").s().p("AALA3QgngJgRgKQgbgSAGgrQAIgtAmADIgBAtQADAYAQANQAQgQADgZIAHgwQAdAgAJAlQAJAhgFAvQgQgMgngIg");
	this.shape_117.setTransform(289.6348,745.28,0.4962,0.4962);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#897254").s().p("AiGBIIg7gCIhAgdQgMghgxgTQAKgNAMgFQAGgCAUgEQgBgPgLgEQgKgEgMAHQANggAogEQAYgCAzAEICWgBQBUAAAiACQBCAFA1ARQANAEAZgIIAjgLQgGAYAJAUQAJAWAXAHQgvAThZAKQhgAMhAAWIhUAdgAgSgxQgeABglANQAmAhArgDQAngEAbgfQgrgJgdAAIgIAAg");
	this.shape_118.setTransform(113.7031,735.3743,0.4962,0.4962);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#998162").s().p("AlcCoQgYgHgJgWQgJgUAHgYQANgDANgOIAXgcQA3gOBNgmQBEgjASgBIBOgEQANgBAIgHQAFgEAFgKQADgHgDgHQgDgHgFABQgKADgJABQgPADgFgEQgTgMAJgQQAHgMAXgMQAJgEAMAGQARAJAJACIBYAQQAHAIAHgFQASgNAhAGQATAEAoAMQADgKgFgeQgFgdACgGQAEgKAOgEQAQgFAQAOQgUALgIARQgIAQAGARQAFAOAXAHIAtAJQBBAMAJAvQgOAIgVAGIgrANIi2A6QgdAJgKAHQgPALgDAUQg4gDgpAGQgyAGg1ATIgqADQgcADgCAYQgQgBg8ANQgNADgLAAQgbAAgTgPgABbhDQgKAOgDAZQgEAWADAMQAbAHAbgLQAdgKgBgUQgBgYgegOQgPgHgJAAQgJAAgEAGg");
	this.shape_119.setTransform(146.884,726.7911,0.4962,0.4962);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#150C0A").s().p("AgHAAIAHgGIAIAGIgIAIg");
	this.shape_120.setTransform(75.1076,739.3871,0.4962,0.4962);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#150C0A").s().p("AgiA4QAQgrAFgSQAJgegFgWQAJABAOAKQAQALAFACQgEAngNAXQgQAdgZAAIgLgCg");
	this.shape_121.setTransform(78.1719,737.4531,0.4962,0.4962);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#332218").s().p("AgZgbQgCgHANgGQANgGAIAHQAiAdgbA2QgbgpgMgeg");
	this.shape_122.setTransform(296.8912,775.4824,0.4962,0.4962);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#564337").s().p("AgJgFIATACIgQAJg");
	this.shape_123.setTransform(238.2113,743.8037,0.4962,0.4962);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#564437").s().p("AgPAcQghgGgIgkQAagKAggCQATgCAkAAIgOA0QgcAFgRAAIgNgBg");
	this.shape_124.setTransform(264.1402,744.041,0.4962,0.4962);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#564337").s().p("ABSBEIgSgEQgOgDgJgLQgJgLADgLIgNgQQgiAHghgKQghgKgVgYQAVgbA8gMQA7gMAUATQAEAUgIASQgIATgTAIIAOAPQAUgDAOAHQAHAFAPAlIgFABIgNgCg");
	this.shape_125.setTransform(247.4043,745.6082,0.4962,0.4962);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#AA9A80").s().p("AgHAOQgKgFACgOQAHgNAKACQAKACADAHQACAHgCAFQgCAGgGAEQgDACgDAAQgDAAgFgDg");
	this.shape_126.setTransform(197.434,711.3272,0.4962,0.4962);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#988261").s().p("AAMAIIgkACQgHAAgDgHQgDgFANgEIAqgFQAWACgFANQgEAIgGAAQgGAAgHgEg");
	this.shape_127.setTransform(223.1836,740.8262,0.4962,0.4962);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#988261").s().p("AgRgCIAggSIAegBQADALgFAIQgGAIgKACIhIAOQAHgOAVgKg");
	this.shape_128.setTransform(220.6277,738.6055,0.4962,0.4962);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#988261").s().p("AgHAUQgPAHgPgCQgPgCgIgKQgDgEgCgLIgBgRQgEgGAFgFQAEgFACADIATASIBtAYQgKAUgUADIgIABQgSAAgUgOg");
	this.shape_129.setTransform(257.6014,730.3375,0.4962,0.4962);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#988261").s().p("AgSA0QgEgBgCgHIgDgKQgCgGgTgOIAHhDIBCAxQAbAAgDATQgCAVgagCQgHAOgNAFQgEABgFAAQgFAAgFgCg");
	this.shape_130.setTransform(240.8239,727.5177,0.4962,0.4962);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#AA9A80").s().p("AA0AhQgMgHgNACQgYADgRAVIgfABQgJgJgLgCQgJgDgfgBQAOgNARgFIAigHIgXgXQgMgMABgHQABgKARgJQASgKAGAIQgDAdACAOQACAaAPAFQAdAHABgXQACgVgggBIAhgPQARgIALgNQAKABAVgCQATAAAMAGQgPAKgDAFIgDALIgRBJQgGgNgLgIg");
	this.shape_131.setTransform(223.6341,734.9008,0.4962,0.4962);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#988261").s().p("AhPAhQgIgGAAgKQAAgKAIgHQAIgJANgDQAkgXAlAAQAhAAAoASQgcAGgMAJQgKAGgEAOQgmACgggOIgIAbQgMADgJAAQgJAAgFgDg");
	this.shape_132.setTransform(212.2328,721.6525,0.4962,0.4962);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#988261").s().p("AAMAXQgcgHgUABIgggSQAfgVAWgIQAYgIAZAFIANACQATAPADAFQgKgBgDAHQgCAFAFAGQAEAFACAHQADAKgEAIIg0gNg");
	this.shape_133.setTransform(236.0278,729.7636,0.4962,0.4962);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#AA9A80").s().p("AgjAXQgVgIgRgPQgNgLgQgVIAvgFQAAAEADAKQAEAMADgCIAZgRQAVACArgEQAlAAAWAVQguADgSAHQgcAKgEAdg");
	this.shape_134.setTransform(173.7985,720.7034,0.4962,0.4962);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#988261").s().p("AgyAoIACgeQAAgKgFADQgNAIgFABQgMAEgIgIQALgUAegLQARgHAngMQAHAcARAOQARAPAZgDQAJgDAGAGQAEAGABAKQABAKgEACg");
	this.shape_135.setTransform(206.271,725.4302,0.4962,0.4962);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#AA9A80").s().p("AggAqIgEgNIAPAAQALgCAKgHQgBgFgHgDQgHgDgHAAQgMAAgFADQgIAEAAAMIgZgBQgJACgDgHQgCgGADgHQAGgJgEgRQgVgRANgMQAOgMARAPIBMAeQAoANAlAAQgIATgOALIgVANIgzAJQgLgLgWABg");
	this.shape_136.setTransform(190.7135,713.7887,0.4962,0.4962);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#988261").s().p("Ah2AgQgPgSgEgTIAzACQAdABAVgIQgKgSgOgFQgPgFgHgDQALACANgHQAMgGAEgIQAuAQBcAIQAaACAIAGQAKAHgEAUQgUgOgXAKQgLAFgXAVQgSARgIgCQgLgDgHgjIg9A7IguAFIgageg");
	this.shape_137.setTransform(173.3182,715.9891,0.4962,0.4962);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#988261").s().p("AiHAtQgjgQgCgdQAJgCAJgPIATggQAKAiASAGQAPAGAcgLIA7gWQAngMAkABIAUADQAOABAGAAQAMgBAUAGQAVAHAJAAQADATgNAMQgNAOgWACIjDAYIgjAIIgNACQgKAAgJgFg");
	this.shape_138.setTransform(258.298,723.3589,0.4962,0.4962);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#564337").s().p("AgnAuQgOAGgPABQgOgBgDgGIgVgtQgDgHgQgIQgQgJgCgEQgGgOARgaIBygdQgHABBPAGIBSAEQAFAHAFAZIgmACQgkAAgTABQghACgZALQAHAlAhAFQATADAogHQgMAqgSAXQgYAdgkABIgtACQANgdgLgXg");
	this.shape_139.setTransform(261.6085,745.1932,0.4962,0.4962);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#988261").s().p("AjzBGQAMgFAXAAIAngBQAIglAzgRQA6gRAUgnIAQAAQAKAAAEADQAHAGAFAAQAJAAAHgNQALABAJgDQALgDAAgGQAAgGgGgQIgMgbQA9AMBcgZQAkgKALABQAQAAAAASQAAAPgcATQgqAdgYAcQAGAGANACIAfAFIhvAOQguAWgRAGQghAMgkgCQATAYgHAWIjqAug");
	this.shape_140.setTransform(188.5122,733.9526,0.4962,0.4962);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#988261").s().p("AhaBXIhbgMQgDgNgNgOIgYgZQgIgIAFgPQAFgLAGgEIArAPQAxARAXADQAqAFArgSQgRgHgHgFQgLgJgCgRQAigCATgFQAYgHAOgNQgWgFgKgHQgIgFgDgKQgIgYAqAGQA0AHAEgFQAFgFAAgSIgDgaIAZABIALABIAFANIAEAtQALgFAJgMIAJgSIAzgJIAHA7QgjACgUAiQAEADAZAXQATARAMADQgyAzhMAMQgkAGgGACQgRAGAAARIiUAygAAGgIQggAEAYAYQAMAQAbgSQAIgEAcADQAbgBAKgdQhTACgVADgAA5gmIAIAHIAHgHIgHgIg");
	this.shape_141.setTransform(182.6193,722.6264,0.4962,0.4962);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#988261").s().p("AAsB7QgJgKgLgHIADgKQADgGAOgJQgMgHgSABQgUABgKAAQAIgMAHgGQAGgGgFgIQgGgIgDAEQgDAFgKAHQgLAIgEgCIi9haIAdg9QAOgfBAAAQBIAAAagYQAUAMAMARQAMAPAJAYQAdgJAVAKQASAJASAbQAHALAsgMQAsgLANAQQACAEgCALQgCAKgCAEQgZgFgZAIQgWAHgfAVIAgATQALAWgDAbQgDAcgQALQgUgTgXAPQgXAWgIADQgQgVgGgFg");
	this.shape_142.setTransform(226.7294,728.631,0.4962,0.4962);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#564337").s().p("AABBdQgOgLgTgFQgVgIgMgDQgUgFgQALIgTANQgFADgGgEQgHgGgDgBQACgPARgLQALgHAggPIhHgVQgqgLgcgVQAWgcBHgTQA9gQAIgiQArAOBigDQBegCApASQgEANACAPIAFAWQgZA2hSApQgaANgBAJQgBAMAiAVIhhAQQgDgRgTgMg");
	this.shape_143.setTransform(279.8712,738.8288,0.4962,0.4962);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#AA9A80").s().p("AHMCkQgDgQAFgMQgqgThdADQhjADgsgOQhPgZhRgMQhggPhAANIhugZIgTgSQgCgDgEAFQgEAFADAGQgbgOgGgbQgjADgXAUQgYAWABAdIgXAFQgMABgQgNQAXgSACgNQACgMgQgOQg8gngvgvQgNgMgdgGQgngGgEgCIAagKQAMgGACgFIgBgYQABgSAOgTQAUAoAeANQAeAPAygHIhDAWQAdAaAnADQAYABAtgIQACAeAkAQQAOAGASgEIAjgIIDDgXQAWgDANgNQAOgOgDgTIClAAIgGAbQgCAOADAHQBEgSAmgCQA0gCA2AXIhcA5QBHAGBFgDQAygCBPgKQgHALgPAJQgNAJgFAJIAygDQAZgBANAKQANALALAZIAOAiIACAOQgfgJgfAYQgYASgUAhIgxAHIgEgWgAjyAPIAIAHIAiADQAVgBAOgHQgKgLgYABIgCgBQgXAAgSAJg");
	this.shape_144.setTransform(267.8,727.3779,0.4962,0.4962);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#332218").s().p("AgHAAIAHgHIAIAHIgIAIg");
	this.shape_145.setTransform(223.2371,780.5383,0.4962,0.4962);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#332218").s().p("AgHgCQADgKAMADIgEATQgNgDACgJg");
	this.shape_146.setTransform(222.595,755.8942,0.4962,0.4962);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#332218").s().p("AgQAZQgIgXAEgPQAFgPAVABQAWABgJAdQgDAMgQAJQgHAEgEAAQgEAAgBgDg");
	this.shape_147.setTransform(249.5933,762.3684,0.4962,0.4962);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#332218").s().p("AgIANQgQgLgEgFQAGgcAbAJQAOAFAHAMQAIAPgRAPIgCAAQgIAAgPgMg");
	this.shape_148.setTransform(174.2591,783.5664,0.4962,0.4962);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#A99A80").s().p("AAYAQIg/gFQABgQAOgGQAIgEARgBQAUgBAJALQAGAGAEASIgQgCg");
	this.shape_149.setTransform(111.7181,749.4603,0.4962,0.4962);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#332218").s().p("AAAAYIgcgOQgHgOADgIQADgKANgDQANgDAFAJQALAEALANQAMAOgDALQgGAEgJAAQgIAAgKgDg");
	this.shape_150.setTransform(226.3404,754.936,0.4962,0.4962);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#332218").s().p("AgUAJQgPgdAQgHQAWgKARAdQARAcgSAIQgGACgGAAQgPAAgMgVg");
	this.shape_151.setTransform(161.6405,777.7145,0.4962,0.4962);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#564337").s().p("AgPAgIABghQAAgGgGgDIgRABQgLgBgOgIQAKgNAPAAQAQAAALAMIAGAGQAaAAARgTIAYAYIgiAaQgSAPgRAAIgJgBg");
	this.shape_152.setTransform(183.8351,753.8041,0.4962,0.4962);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#332218").s().p("AAOAhQgeAAgXgSQgCgLgIgFQgHACgHgBQgGgDgCgFQgDgHACgHQADgGAGgDQAHgDAGAEQAHAEAAAMQAAALAKADQAQAAAhgCQAggBAaAPQgaAVghAAIgBAAg");
	this.shape_153.setTransform(169.5771,767.5088,0.4962,0.4962);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#332218").s().p("AgSAEQgFgaAQgbQAQAaAHAWQAGAWgCAcQgggPgGgeg");
	this.shape_154.setTransform(191.7,758.4182,0.4962,0.4962);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#332218").s().p("AAAgDQgPgRgcgUQAWgOAVAGQATAFAKAVQALAXACAIQAFAXgOATQgRgjgQgTg");
	this.shape_155.setTransform(150.1726,783.2737,0.4962,0.4962);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#332218").s().p("Ag1AQQAAgWAcAEQAKgEAPgOQANgMAFgBQAJgCAMAOQAMANADAOQgEANgZAGIgzAJIgIABQgSAAgBgTg");
	this.shape_156.setTransform(173.6991,778.7767,0.4962,0.4962);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#332218").s().p("AATA3QgFgIgFgFIgGgFQgIAEgLgFQgMgEgBgHQgEgWADgwQAAgLAWADQAUADAJAKQAOAPgSAsQgCAFADAEQABADAEABQALAEgCAKQgCAJgJAAIgCAAg");
	this.shape_157.setTransform(193.0532,780.6233,0.4962,0.4962);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#332218").s().p("AgdARQgJgJAEgZQAEgbAKABQAYAIAQAfQAGAMALAkQgzgMgPgPg");
	this.shape_158.setTransform(179.6413,786.8646,0.4962,0.4962);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#564437").s().p("Ag0AgQADgNAMgRIASgaQAcgIAsABQgEAOgLASIgSAfQgxgFgXAFg");
	this.shape_159.setTransform(147.1005,766.7398,0.4962,0.4962);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#332218").s().p("AAOAtQgRgBgNgQQglgqAWgeQAcAJAUARQAaATgDASQgEAagUAAIgCAAg");
	this.shape_160.setTransform(250.352,758.4077,0.4962,0.4962);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#332218").s().p("AADAiQgUgGgOgJQgMgHAHgTQAHgVARgBIAYgLQASgHAKAJQgLAUgBASQAAAOAGAeIgfgKg");
	this.shape_161.setTransform(164.0023,783.9771,0.4962,0.4962);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#332218").s().p("AgFAkQgTgQgIgDQAEgEACgGQACgHgBgEQgBgCgJgIQgJgGAAgCQAHgLARgFIAUgHIAYAPQAMAHAEAIQAGAOgCAVQgCAWgKADIgKABQgOAAgNgKg");
	this.shape_162.setTransform(233.3722,752.4051,0.4962,0.4962);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#332118").s().p("AABAYIgXABQgQABgKgEQgIgEgEgPQgDgMADgMIB3gGQAEAVgBAGQgCAMgOAQg");
	this.shape_163.setTransform(226.5883,751.1606,0.4962,0.4962);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#332218").s().p("AAPA2QgegBgUgNQgLgHgDgYQgBgHAAgbQgEgDgFgBQgPgNAMgGQAVgKgJAKQAJAHAEAHQAugBAYAOQAjATAAAwQgYAIgaAAIgDAAg");
	this.shape_164.setTransform(172.8535,772.2237,0.4962,0.4962);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#897254").s().p("AgPAdQgNgJgVgEQgFgNgEgGQgGgKgMgMQANgFAagOQAYgMAUgBIAEAnQAEATAHAJQAHAGASgFQASgFAGgIIAEAMQADAPgCALQgBAIgIAFQgHAHgJAAIg4ACQAHgRgRgMg");
	this.shape_165.setTransform(234.1669,743.63,0.4962,0.4962);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#332218").s().p("Ag3BKIBEidQADAKAWAsQASAjAAAhQgBAdgtAMQgRAEgOAAQgVAAgNgKg");
	this.shape_166.setTransform(122.9953,775.8831,0.4962,0.4962);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#332218").s().p("AAhA4Qg0gVg7gIIAUgwQAMgdATgXQAMAlAWAMQAWAKAlgKQAKAYACAbQABAQgBAfIgtgSg");
	this.shape_167.setTransform(124.7859,751.0861,0.4962,0.4962);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#332218").s().p("AgNBAIgRgDQgRgDgIgQIBXgZIghgQQgNgGgFgKIAZguQAQgaAbgNQABAOgDBPQgDA1AMAjIhNAUQANgdgFgIg");
	this.shape_168.setTransform(194.7277,803.5394,0.4962,0.4962);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#332218").s().p("AgUgCQgGgdgIgKQgMgOgcAFQgDgIAAgJQABgLAFgDQAIgFANADQAPADAHAMQAIAPAKgGQAJgGgJgOQACgUAVAIQATAHAGArQAIAzAgAeIgbAWQgNAMgJAUQgkgZgNhHg");
	this.shape_169.setTransform(163.3756,772.2253,0.4962,0.4962);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#564337").s().p("AgfA0QgVgPgVgjIAAg4IBKgCIAagEQAMgHAKAEQAMAEAAAQQgTADgHADQgMAFgKANQAxATAMAhQgRgLgRALQgFAEgDAIQgEAJAAAIQgLADgKAAQgUAAgSgNg");
	this.shape_170.setTransform(97.2029,735.7946,0.4962,0.4962);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#332218").s().p("AhBBPQgEgHgBgSQABgbABgEQAEgPAXgDQAZAAgDgUQgEgVgiAFQgBgRAXgVQAZgXAWAJQgFAeAAAKQAAAdATACQAEABAIgOQAJgPAFgBQASgCABAPQAAAOgQAVQgmA3g+AXQgFABgEAAQgIAAgDgHg");
	this.shape_171.setTransform(125.0796,759.901,0.4962,0.4962);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#564337").s().p("AghBdQgIgBgGgIIgIgNQAOgQABgMQABgHgDgVIgThcQAIABAVgJQAVgJAMACQAUAEAOAJQARANgHAQQgHAQABAIQADANAVANIgdAWIgVAHQgQAFgGALQgBACAJAGQAIAIABACQABAFgCAHQgCAGgEAEIgQAFQgKADgGAAIgCAAg");
	this.shape_172.setTransform(231.6733,749.0342,0.4962,0.4962);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#332218").s().p("AhCBDQgDgWANgmIAph3IBTCjQgRACgXgBQgSgBgKACQgMADgIARQgIAQgCAYQghgOgDggg");
	this.shape_173.setTransform(214.6417,768.0577,0.4962,0.4962);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#564337").s().p("Ag0AlQgKgJgrg9IBlgHQAGAAAdgIQAWgGAPADQANADALANQAKAMAEAPIhTA5IgWgBQgKAFgKAAQgRAAgQgQg");
	this.shape_174.setTransform(174.791,755.1958,0.4962,0.4962);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#564337").s().p("AggBDQgJgKgVgoQgEgJgNgNQgKgNgEgJQAVACALgDQAPgDAHgLQgYgMgFgIQgFgHAFgKQAGgKAJACQADABANAMQANANADABQA0AMARAIQAmAQAHAbQgLAFgKgFIgNgJQgFgGgIADQgHADgBAIQAAAHAFAKIAGAMIgTAbQgMARgCANIgJABQgVAAgSgWg");
	this.shape_175.setTransform(143.6888,763.9513,0.4962,0.4962);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#332218").s().p("AgNB0QgfgOgMgOQgRgVATgeQAZgfAFgKQgIgtACgVQACglAlgVQAAAtAPAqQANAkAcAqQgjAQgFAGQgGAFADAQQACAOAKAjIgBAAQgRAAgdgNg");
	this.shape_176.setTransform(113.5694,776.5936,0.4962,0.4962);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#332218").s().p("AAABxQgJgKgEgSIgGgiQglgRgJgeQgJgaALgpQAIgcAFgIQAKgPATADIAbgBQgCAJAGAJIAKANIgBARQgBALAGAGQAPAPAcACQAEACgBASQgBARgFAFQgJALgxACIALBYg");
	this.shape_177.setTransform(117.0526,757.3388,0.4962,0.4962);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#332218").s().p("AA2BYQAJgzhCgOQAAgMAIgKQALgIACgEQAHgLgIgGQgHgGgJABIgjAFQgnASgcAAQglgCgYgiQAbADApgFQAtgGAPABQAyAEAUgGQAkgKAbgrQAXAqApgCQABAMgFALQgFALgJACIgsAKQgfAIAHBSQADAhgCAFQgBABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgGAAgPgVg");
	this.shape_178.setTransform(150.5783,773.1568,0.4962,0.4962);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#564337").s().p("AgPBPQABgFgFgNQAIgBASAFQAVABATgTIhygtQgIgCgWAAQgSAAgFgDQgUgQgCgkQARgGAGgTIAkgCIgKANQgGAIABAEQACAHANAHQAMAGAHgBQAegCAeAkQAYAdAYgQQAKgHgKglQgKggAYgBQAFAAAHAGIALAJQgDAMADANQAEAPAIAEQAKAEAQgBIAYgBIgDAfQgHgJgNADQgNADgDAKQgDAIAHAPQgGgDgNABIgTACQgNgDgDAJQgDAKAOAEIACAHIgqACIgIAAQgTAAgNgEg");
	this.shape_179.setTransform(219.54,752.7527,0.4962,0.4962);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#332218").s().p("AAtBrQgLgdgbgeIgnhbQgMAJgMAEQgMAEgGgCQgKgDAAgMQgBgMAKgCIAmgEIgShJQAOgGAIgNQAHgLAAgQIAXACIBGCcQgNAMgHALQgJAOACAIQAAACANAQQAPAQAHAQQAZAygmA6QgGgwgLgag");
	this.shape_180.setTransform(176.1472,766.5318,0.4962,0.4962);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#564337").s().p("AiHBIIgPgsIASgeQALgSAEgOQAGAAAsALQAeAHAlgKIAegFQATgDAKgHQgDgGgFAAQgSgUAQgCQAJgCABgBIAKAbIAbAAQATABALAJQACAEAFAcQAFAWAJAIQAJAOgKAGQgJAGgIgPQgIgMgOgDQgNgDgIAFQgGADAAALQgBAJADAIIgTABQgqACgWgqQgbArgjAKQgNADgZAAIgigBg");
	this.shape_181.setTransform(155.5709,766.9236,0.4962,0.4962);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#897254").s().p("AheA6IAjAGQAXADAWgIQgGgOgYgGQgcgIgDgCIgegmQgQgRgSgGQgEgQAGgRQACgHAQgFQARgGAGAFQAgAZAiADIBBgEQArA9AKAJQAYAYAegNQAAAPgIAMQgHAMgOAGQgqgDhqALIgTABQgnAAgBgXg");
	this.shape_182.setTransform(167.7915,756.2552,0.4962,0.4962);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#897254").s().p("ABnBYQgFgPgKgMQgLgNgNgDQgPgDgWAGQgcAIgHAAQgTgihBAGQhWAIgmgNQAcg2ApggQAxglA7AAQgCATgRAFQgTAFgUgLQgIARALASQAHAKANAQQAJARAhABQAGAABCgEQBzgHA+AyQgRATgaAAIgLAMIgBAigABzAyQAOAIAMABIARgBIAKgJQgMgMgPAAQgPAAgLANg");
	this.shape_183.setTransform(174.9771,750.3912,0.4962,0.4962);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#AA9A80").s().p("AgMBOIgYgJQgEgSgHgHQgJgLgTABQgTABgIAEQgNAGgCARIgYgCQgPggBLg0QBDgwA6gPQAMgDAigCQAkgDALgCQAQAUgRAZQgRAYgagBQgMgBgMAFQgNAFgDAGQgHAQAQAaQAQAcgEALQgJAcgdACIgcABQgEgMgQgIg");
	this.shape_184.setTransform(115.5644,746.9176,0.4962,0.4962);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#897254").s().p("AiQA/QADgZAYgLQASgIAggCQAEgRgSgLQgTgMgVAIQAFgQgBgMQAAgNgIAAQgNABgJAAQgRgBgMgMICmgYQgKAfAHAKQAEAIATAAQA8ABAcAeQANAMAaAEIAoACQgFATgfAXQgcAVABAXIgwABQh9AAhVgeg");
	this.shape_185.setTransform(199.2684,749.399,0.4962,0.4962);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#332218").s().p("ABmDMIASgfQAKgSABgLQgHhRgghAQgbg4g7hEQgSAFgSAAQgXgBgEgMQgFgKAIgQIAQgeQhIA+hPg7QgBgYAcgUQAfgXAFgUIAqACIAXAEQAOADAKgDQACAkATAQQAFAEASAAQAWgBAIADIBzAtQgTATgVgBQgUgFgHABQAFANgBAFQAQAFAZgBIAqgCQgDAVAIAoQAIAtAAAUIAFDsQgdABgSAJQgTAKgOAWQgcgfAUgng");
	this.shape_186.setTransform(214.3417,763.269,0.4962,0.4962);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#332218").s().p("ABICPQgsgLgGAAQgqgBgdAIIgGgMQgGgLABgHQABgIAHgDQAHgDAGAFIAMAKQALAGALgFQgHgcgmgQQgSgIg0gNQgEgBgMgMQgNgNgEgBQgIgCgGALQgFAKAEAGQAGAJAYALQgHAMgPADQgLACgVgCQgNg3g0giQhHgmgrgfIBOg9QAQgMAfAOQAcAOAJATQAPAeAHAJQAOASAVABQAgADASgNQATgNgDgeICzAJQAGAZgcASQgcASAFASQACAKALgCIAcgDQANASAVAEQAUAEAOgMQAQgMADgUQADgSgHgSIgDgXQALACAbAAQAagBANAEQATAFAQARIAdAnQADADAcAHQAYAHAHAMQgWAIgXgDIgjgFQhogJhCBEQAOAiADAkQgWAGgTAAQgOAAgMgDgAkehgQgcADABAOQACAWAfgCQAfgBgEgPQgFgVgXAAIgFAAg");
	this.shape_187.setTransform(148.614,758.6002,0.4962,0.4962);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#897254").s().p("Ai7B4QgCgcgKgYQglAKgWgKQgXgMgMglQgTAXgMAdIgUAxQgJgCgTAHIgdAMIgKgNQgGgJACgJQAdgCAJgcQAEgLgQgcQgQgaAHgQQADgGANgFQAMgFAMABQAaABARgYQARgZgQgUQgLACgkADQgiACgMADQAUgaAEghIBGgYQArgLAgAMQALADgCASQgCASgKABQgrAHgQAQQgEAEAJANQAJAOAHgCQBUgeBqAJQByAKAKA3ICaALQAEANAFAWQAFAWAOARQATgQAOgVIAWgnQAEAoAoAEQBKAIAbAMQgUAJgEAQQgBAEgCAiQgzAHAAAiIjUgJIg8gGQglgDgaADQgIgTgcgNQgfgPgQANIhOA8IgeADQABgfgBgQgAhAgMQgNAMgUAIQASAQACAPQABAPgMAXQAqgHBGABQA2gFAVgkQg5ACgcgPQghgRgOg2QgUAfgLALgAB5AjQgBAPAWAAQAHAOALgCQAJgCADgGQADgFAAgIQAAgJgDgFQgEgJgbACIgCAAQgSAAAAAPg");
	this.shape_188.setTransform(138.002,746.4741,0.4962,0.4962);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#332218").s().p("AhsHnQgVgGgbgCQAGg3AohnQAZg/gcgmQACgbgBgPQgBgcgaAFIgYAOQgSAKgLgDQgTgHACgWQACgagBgCQgMgSAAgiQAEgkgCgNQgHhSAFgaQALg6A7gUQgiBeAaARQAwgGADhpQgGh/AHgwQACgSAVgsQASgpAAgWQAAgIAEgIQAEgIAFgEQAQgMASALIA/AdIAFAkQAEAXAKANQALAGATACQAWABAUgFQgVgSgIgRQgIgRAFgWIBJAQQgEAIgKAXQgKAWgRALIALAbQADAQgIATQgthBg0A1QgTAUgBAMQgCARAWAlQALASAaACQAcACAYgSIBZAHIgCAfQgDATgHAIQgDAEgaAAQgaAAgEAGQgaAmAFA9QAFA8AfAjIAShjQAZAMAIAlQAIAkgQAYQgGAIgRAMQgPALgBAHQgCAMATBAQAMApgkAIQgagpgOhvQgMhZgkgNQgMgFgVAIQgWALgLADQgLgGgFgXQgEgTACgTQggALgBAaQAAAPAEAbQgIBJgEB8QgDBwADAMQACAGAVAIQAWAJACAGQAKAcgXAUQgXATgigCIAJB1QgcgLgRgFg");
	this.shape_189.setTransform(101.8408,762.1182,0.4962,0.4962);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#AA9A80").s().p("AAOAeIgOAAIgeg9QAPAAAOAFQAOAEAIAIQAQAPgJAfQgEgCgKAAg");
	this.shape_190.setTransform(186.9602,730.1445,0.4962,0.4962);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#AA9A80").s().p("AoTENQgbAAgLgCIgfgHIgNABQgBgiA0gIQABghACgEQAEgQATgKQgagMhLgHQgngFgFgoIgVAnQgOAWgUAQQgNgRgGgWQgEgYgFgMIiagMQgKg2hzgKQhqgKhTAeQgHACgJgNQgJgNAEgFQAPgOAsgHQAKgCACgRQACgSgLgEQghgLgqALIhHAXQg1gDgdgXQBAgWBggMQBZgKAvgUQAcAVArgJQA8gNAQABQAOAYAbAHQASAFATgIQAMgFAWgNQASgKBVAJIBNAJQAHAHADATIAEAkQAMgTARgJQATgKAVAHQAdAKAjgIIA6gNIA/gFQAzAOBAgVQBAgWgKgcQAVgKAGgXIADgOIAmgMQgDAGAFAKQAFAKAEgCQAHgKAAgOIABgSICUgyQALAHADALIgKgBQgJgBgDACQgFAGABAKQACAMAOAKQgMAKgSgEQgPgDgagPQgCARALALIAVATQgaAYgcAQQgkATgSgIQgVgKgHACQgEACgOAQQgOAQAKAOQAIAMAUADIgLBAIDpguQAjAoA3gYIAtgVQAbgLAVAFQApAJAbgBQAkAAAhgOQAGAPgCAOQgBAHgDAEQAVAPARgGQAMgFAJgPQAHgSASgEIAegEQAFgBAGgPQAGgPAEgDQAMgHAaALQAWAKAAgGQABgEADgGQAEgHAEgDQAGgDgIgJQgJgJgPgFIAzABQAcgBAfgHQgOAcAJATQAHAQAeARQgpAUgJAmQgQgDgJABQgOABgIALQASAEARAAIAbgBQAQgBgBgdIBIgOIAAAeQgNAEADAGQADAFAHAAIAlgCQARALAGgNQAFgOgWgCQgGgTARgHQAMgFAkAAQBigBAngTIArgdQAdgUAWAAQADAAANgUQAKgQAFAQIAKAmQAcgWArAEQAXABAwAGIB0AAQA2AAgLgKQAKAIgDAoQgDArgaAKQgJAEgNgHIgbgRQgIgFgNAOQgOAPAHAJIASAaIgJAHQgGAFgFAAQgUgTg8AMQg8AMgVAbQgZgBgNgBQgYgDgNgJIgUgDQgHAJgRAFQgTAGgGgHQgIgJgDgUIgFgmQgVABgYALQgZAOgNAFQALAMAHALQAEAGAFANQgNgCgUAJQgVAJgJgBIhIgFIg9AaQgRAHgGAIQgHAJACAOQgIgEgOABIgXABQgJgMgOABQgNACgMAKIgNAMIgkACQgFgJgKgDQgGgCgKAAQgQAAgLAKQgMAKABAPIgqgCIgogCQgagDgMgNQgcgfg9AAQgUgBgEgHQgHgKAKggIimAZQAMAMARAAQAKABANgCQAHABABAMQABANgGAQQAVgIATALQASALgEATQggACgSAIQgYALgDAZIg0AFQghAEgSAHIgYgYQg9gyhzAHQhDAEgHgBQgggBgKgRQgNgPgGgKQgLgSAIgRQAUALASgFQASgGACgSQg8gBgwAmQgpAfgcA3QAmANBWgHQBAgGAUAiIhlAHIhCAEQgigDgggZQgGgFgRAFQgQAFgCAHQgGARAEARQgOgEgZABgAE+ASQgbANgIAWQAsAQAVADQAkAGAfgLQgPgVgSgOIgagSQgFgEgIAAQgLAAgOAIgAn7gJQgRABAEAIQAEAIAUAIQA2AXBDgPQgZgegngFIgNgBQgTAAgkADgAEhgTIAIAHIAHgHIgHgIgAJAgiIAHAHIAIgHIgIgIgAiIi2QgFAFAAAHQAAAHAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgHQAAgHgFgFQgFgFgHAAQgHAAgFAFg");
	this.shape_191.setTransform(185.3162,741.1364,0.4962,0.4962);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#AA9A80").s().p("AgJgFIATgDQAAAMgCAFg");
	this.shape_192.setTransform(299.4977,732.5513,0.4962,0.4962);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#332218").s().p("AgGAAQAAgJANACIAAAPIgFAAQgIAAAAgIg");
	this.shape_193.setTransform(299.597,773.8055,0.4962,0.4962);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#AA9A80").s().p("AAAAHQgLgCAEgMQAFACALAAQAAANgIAAIgBgBg");
	this.shape_194.setTransform(211.9449,712.3751,0.4962,0.4962);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#332218").s().p("AgGAAQAAgJANACIAAAPIgFAAQgIAAAAgIg");
	this.shape_195.setTransform(299.609,771.5559,0.4962,0.4962);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#332218").s().p("AgFAAIALgBQgDADgDAAQgCAAgDgCg");
	this.shape_196.setTransform(209.1685,809.484,0.4962,0.4962);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#332218").s().p("AgGAHQgEgJAFgHQAFgHAJABIAAAeIgEABQgIAAgDgJg");
	this.shape_197.setTransform(299.5095,753.9781,0.4962,0.4962);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#564337").s().p("AgRAPQAIgeAagBQADAQgFAGQgEAHgKACIgIACQgFAAgFgCg");
	this.shape_198.setTransform(74.6568,735.9912,0.4962,0.4962);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#564337").s().p("AgIgdIAOABQAEAQgDAQQgDASgLAIg");
	this.shape_199.setTransform(299.5917,738.2457,0.4962,0.4962);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#AA9A80").s().p("AgKAOQgHgEgDgJQgBgIACgHIAYAAQAOACADALQgDAIgLAFQgGADgFAAIgHgBg");
	this.shape_200.setTransform(214.847,712.8737,0.4962,0.4962);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#AA9A80").s().p("AgMAMIgSgJQANgbAwALQgGAbgSADIgDAAQgHAAgJgFg");
	this.shape_201.setTransform(99.436,725.5193,0.4962,0.4962);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#AA9A80").s().p("AgogLQAGAAAigGQAZgFARAFQghAggvAGQgFgPADgRg");
	this.shape_202.setTransform(94.0114,726.0286,0.4962,0.4962);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#AA9A80").s().p("AAFAYQgbAAgVgJQgGgDAAgPQAAgPAFgFQBBAWAdAXIgmACIgHAAg");
	this.shape_203.setTransform(204.1182,710.2599,0.4962,0.4962);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#AA9A80").s().p("AgsAWQANgnAcgGQAMgCAOAFQANAFAJAMQgDAaggACQgngEgPABg");
	this.shape_204.setTransform(134.3966,719.1816,0.4962,0.4962);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#150C0A").s().p("AgTgyQgFgaAEgKQAFgLAVAAIABA8QAAATAJAoQAIAogBAVIggAPQAHg7gRhZg");
	this.shape_205.setTransform(298.8607,741.6202,0.4962,0.4962);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#332218").s().p("AgTAIQgdgZAGggQBOgCAIBRIgQAMQgLAHgJABQABgPgcgbg");
	this.shape_206.setTransform(205.1392,808.3015,0.4962,0.4962);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#150C0A").s().p("AgrAIQgFgPAHgWQAHgXARgCQAfgCATAhQAQAbgEAfIgxAUQgfgTgIgcg");
	this.shape_207.setTransform(219.2702,803.0899,0.4962,0.4962);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#564337").s().p("AgcAqQgFgBgRgLQgPgLgJAAIgfgCQALgTAUACQAtAGAzggQAugeAmAPQgPAcACAhQgsAbgrAAQgRAAgRgFg");
	this.shape_208.setTransform(81.3727,733.6669,0.4962,0.4962);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#AA9A80").s().p("ABTASQgiACgrgGQgsgIgTgCQg9gHgPAoQgHAAgNgBIgVgDIgCgvIDfgmICCAyIgkA3QgYglgiACg");
	this.shape_209.setTransform(270.4425,719.3512,0.4962,0.4962);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#AA9A80").s().p("AARATQgPgOgagBQgXgCgdALQgRAHgfASQgdg3gngoICXARQASACAFgKQAEgJgBgOQAPAEAGAAIgFAYQgBAKADAFQAFAGAKgJICvBAQg7AGgWADQgmAGgdAYQgKglgSgQg");
	this.shape_210.setTransform(207.9775,714.7733,0.4962,0.4962);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#897254").s().p("AhMBRQgfgHgXAOQgCgiAPgdQgmgOgtAdQg0AigugGQA7hLBEgqQBPgxBTABQgDARAFAPQAvgFAhghIAkALIASAJQALAFAJgBQATgDAFgcIA7gDQgBAOgIALQgHAJgRAMIA5gDQAbACASAQQgYAdgugCQg+gEgFACIhWAcQgxARgqAIQARAOA3gMQAqgIgCAiIhMACIAAA4Ig+ACQgCgZghgIg");
	this.shape_211.setTransform(92.4762,730.3182,0.4962,0.4962);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#897254").s().p("AE/BiQgLgZgMgLQgNgKgaABIgxADQAEgJAOgJQAOgKAHgLQhPAKgyACQhFADhGgGIBcg4Qg3gXgyACQgmAChEASQgDgHACgOIAFgbIimAAQgJAAgVgGQgUgHgMABQAPgoA+AHQASACAtAIQArAGAigCQAigCAZAmIAjg5IC3APQAZAKBBA2QAwApAygHIAMAkIADAAIgDAAIAjBuIgfAEIgPgig");
	this.shape_212.setTransform(281.881,725.7403,0.4962,0.4962);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#AA9A80").s().p("AC/CeQgDgEgKgFQgLgEgHABQgYAGgUgTQgSgYgKgHQgzgph2gqQiCgsg2AOQgXAHgQAAQgTAAgUgHIgahCQAKglACgHQAKgYAWgEQAFAYAUAKQALAGAmAHIBhAVQgag/AQgRQAIgJAVgHQAYgIALAHIDWCAIAkATIAjAUIC4BzQgmADgugSQgKAhgZAZQgZAYgeALQABgRgFgHgACEBAQAUgHgLgVQg/g5goAAQgUABgIASQgGAQAKAFQASAMAbAGQAaAGAXgCQAFAeATgHgAh2hsIARANQAIAHABAEQAAADgJAKQgJAKABADQAEARAcAIQAdAIANgQQALgOgHgVQgHgTgNgJQgOgMgUgDIgJAAQgQAAgIALg");
	this.shape_213.setTransform(182.9667,703.0897,0.4962,0.4962);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#AA9A80").s().p("AmuCOQgLgCgMgKQgMgJgHgMQAZgTAtgXQA9geAQgJQAPgKgIhAQAkgNAfgFQAdgFAogBIgLgmQgFgTgBgPQAUABAZAOQAHAagIAUQgHASgUARQAxAJAXgDQAdgDAWgVIARgPIgNghQAKAEASgBIAbgCQAngBBQADICWACIBDgDQAsAaA9ADQAWABAFACQAIAEgGAMQgDAIgrABQgnAAABAWQAAAIAHAPIAOAYIAPAbQADAFgDAGQgDAGgKAAIgLgBQgGgBgHgFQAEgUgKgHQgIgGgagCQhcgIgvgPIhSgdIgOAZQgKAPgHACQgKAEgNgNIgTgRQgigRgpAQQgbAKglAcQAXAJABAZQACAYgOACIi7AbIg1gBQgfAAgWAWQgJAIgTAFQgMADgKAAIgLgBgAkMAEQgeAbgJAsQAigHA2gBQA8gCAagEQgOgLgWgJQgTgHgIgIQgRgQALgkQgmAFgcAZgAgyg7QAHAQAQgJQAPgIgUgPg");
	this.shape_214.setTransform(160.9641,713.2571,0.4962,0.4962);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#897254").s().p("AEzCoQgXgiBIAKQgDgZgegHQgagGgSAJQgKgvhAgMIgugJQgWgGgFgOQgGgRAHgQQAJgRATgLQgQgNgPAFQgOAEgEAKQgDAGAGAcQAFAdgEALQgngMgTgEQgigHgSANIgMgDIhYgQQgKgBgRgJQgMgHgKAFQgWAMgIAMQgJAQATAMQAGADAPgDQAJgBAKgDQAEAAADAGQAEAHgEAHQgFALgEAEQgIAHgNAAIhPAEQAHgQgCgJIhRgNQg9gJgMgEQgogMgPgdIAZAAQAPgBAoAEQAggCADgaQADgCAFgCIAKgDQAHAMAMAKQAMAIALADQANACAUgEQASgFAKgIQAWgWAfAAIA1ACIC5gbQAOgCgBgYQgBgagXgIQAlgdAbgLQAqgQAiARIATASQANANAKgDQAHgDAKgPIAOgaIBSAdQgEAIgMAHQgNAHgLgCIgTgCQgLAAgLAIQgJAGgEAHQgDAHACAKQAEAUAPASIAZAdQAQAVANALQARAQAVAHQgGAEgFANQgFAOAIAIIAYAZQANAOADANQgXAbggAIQgSAGgXAAQgNAAgOgCg");
	this.shape_215.setTransform(152.249,719.9124,0.4962,0.4962);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#988261").s().p("AmqBnQg3ALgSgOQArgIAxgQIBWgeQAFgBA+ADQAvACAXgdQgRgQgcgBIg5ACQARgLAHgIQAJgMAAgOQA7gRBfgGQCPgKARgBQAHgBA7gUQApgOAhAJQAYAHAagKQAXgIARgRQAOAdAoALQANAFA9AJIBQANQACAJgGAQQgRABhFAiQhNAog2ANIgXAcQgOAOgNADIgjALQgZAJgNgFQg1gRhCgFQgigChUAAIiWABQgzgEgYADQgoADgNAgIgaAEQACgigqAJg");
	this.shape_216.setTransform(116.4821,726.6336,0.4962,0.4962);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#AA9A80").s().p("AmiCUQgCgaAJgSQgggBgSgLQgVgMAAgXQAeAABbgKQA+gIAqANQB4gdDFhTQDehdBnggQg5BAiGAuQiWA1g5AsQBTgCDAg0QCmguAJAJQANANgLAKQgIAGgaAJQg/AUgFAWQAcgBAygIQAsgGAYABQgEAUgaAMQgfAKgLAHQgmAUgcgBQgIgCg4gQQgjgKg1APIhQAcIDKANIADAWIjJABQgOAAgLAPQgKATgEAFQggATg7gKQhPgNgOABQg/AEgbgHQgqgJglgqQgTAjgkAZQgkAZglACQgOgKgBgbg");
	this.shape_217.setTransform(241.6602,709.9597,0.4962,0.4962);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#332218").s().p("AgWFZQgWgLgFgQQgEgPAHghQgPgKgJAEQgFADgJANQgXAggjABQgZgqgKhFIgMh7QgBgSAHgxQAHgrgFgaQgKguAKgzQAHggAWg5QAEgKABgUIACgaQAKADAJgDQAKgCAEgHQAFgHgDgQQAKgIADgFIAfACQAFAVgJAfQgFASgQAsQAiAGATghQANgYAEgoQA7AQA+gmQAXgOAfAIQAhAIADAZQgDASgUAgQgVAhgDARIgYB7QASgIAXANQAWAMgJANIhfCHQgOAUAlBJQgiAKgPAJQgVAMgLAUQgKARAJAZIAPAqQAJAggXAMQgJAFgKAAQgKAAgNgGgAh9j2IAHAIIAIgIIgIgHg");
	this.shape_218.setTransform(80.9943,751.6232,0.4962,0.4962);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#150C0A").s().p("AgEA+QgWgWgGgJQgcgnAMhaQAUAEAPALQARANAEAQQACAMAQAQQASASACAEQAIAkgCAUQgCAggYAQQgLgTgTgTg");
	this.shape_219.setTransform(280.643,747.6,0.4962,0.4962);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#150C0A").s().p("AkDGvQgFgGACgHQASg5BIgTQAGgBACgFQADgFgBgFQgIgbADgOQABgEAKgIIARgNQAEgGgBgHQgGgZAChNQABgxgggbQgFgEAAgGQAAgPAUgIQAIgEABgIQAAgIgHgEQgIgFACgIQABgIAJgDQAjgJArgCQAWgCA1AAQAGAAAEAEQADAEABAFQABALAGAIQAGAKAKAEQARAHAGABQAQAEADgMIgDgdQAAgIAIgEQAIgDAHAGQAbAYAFApQABAHAGADQAGAEAGgDQA0gXAYgkQADgFgCgGQgCgGgGgCQgNgEgNACQgIABgSAFQgHADgHgHIg1g9QgFgGADgJQAZgugfgnQgGgHAGgIQAFgIAJACQAWAHAVAlQAEAHAIAAQAIAAADgHQAOgcgDggQgCgfgRgdQgDgGgHgBQgHAAgFAFIgZAeQgFAGgHgBQgIgCgDgHQgXhEgDgMQgFgbAYANQAJAFAWAQQAOAMAPADQALACALgNQALgNgIgGQgGgFgNgGQgNgGgHgFQgHgFADgIQACgJAIgBQAdgGAhgVQAfgUAOgCQAFAAAFAEQAEAEAAAFIAABQQAAALgIADQgGACgCAGQgCAGADAHQACAGAFACQAJADAAAKIAAExQAAAKgJADQgFACAAAFQgBAFAGACQAIAEAAAHIAAAJQAAAIgIAEQgGACAAAFQABAFAFACQAJAEAAAHQgBBnhDBOQhCBOhlASIkTA3IgEABQgFAAgEgFgAC7BNQgNAGACAHQALAcAPAWQAEAIAJgCQAJgBACgJQAIgkgZgWQgFgDgGAAQgFAAgGACg");
	this.shape_220.setTransform(286.8789,769.5903,0.4962,0.4962);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#332218").s().p("AAaD+IiCAxQgQgjADgmQACgUANg5IgLggQgIgYAOgRQA4BFADADQAZAWAsgHQAIgBADgLQAEgKgHgCQgPAAgJgCQgRgEAAgNQABgFAcggQAagcgLgZQgJgSgeANQgiATgLAEQgLAFggAFQgbADgIAIQgfAbADA9QgggDAAgcQAFgggDgJQgGgPgNADQgNADgCAKQgDAQAAAJQAAAPAJARQAHAZgSABQgSABADgfQgVgCgIATQgHAQAFAUQAGAdAtgFQAygGALANQANAQgKARQgKASgVgMQgPgOgLgIQgTgOgOALQgDAHgBAZQgDAZgSALQgihigCgdQgFg7AwggQgbgJgFgEQgRgMACgzQACgsgVgDQgWgDgJADQgPAEgIASIAvAKQgHAsgjAxQAZAHADAHQACAFgEAIQgEAJgFABQgLACgSgMQgOgIgmArQghAmgJgbQgBgEAEgNQAEgOgBgJQgbAJgfgTQgggTAKgbQAPAAAnAEQAjAAAQgYQAIAWANAIQAKAGAPgDQAMgCAJgSQAJgSgPgEIgXgGQgLgDgDgEQgDgDALgLQAMgMACgDQAKgegMgiQgKgfgXgVQgGgHgEgBIgSgEIgSgFQgIgCgEgNQgFgNAIgGQARgOASANQARALADATQADAGAHAEQAWABANAPQALAMAKAcQAHAIAXABQAVAAALgFQAMhBgNhWQgFggABgIQACgOAOABQAPACAZA9QAeBIAhAcQALAEAoABQAlAEAHAXIgWALQgPAJACAKQASACAfAHQAYAEAPgIQASgKAJgXQAKgZgGgbIBKgyQgGgcAMghQAOgkAWAAQAZgBAPAYQAOAVgDASQgFAegJASQgNAZgbAPQAiAUAsACQAZACA2gGIAqATQAcANAQgLQAIgGgCgNQgDgLgHgIQgNgOgXAGQgaAHgIgEQgEgCgIgTQgGgSgGgBQgFgBgJAOQgJAOgEAAQgHABgNgNQgNgNAFgEQAkghA2gKQAfgGBCgDQARgGABgmQgCgqABgKQAWgKAMAYQANAYgKAbICQgGQgIATgdAGQgkAHgEADQggAXgZAIQgZAHgtABQA0A1gZA5QgHAQgPAcQgLAZAFARQAGAXAkAcQAkAeAGgQQAFgKgZgaQgcgegDgYQgCgcAsglQAFgOAIgDQAHgCAFAHQAGAHgDAIQgCAJgNAEQgSAoATAkQARAfArAYQgkAvgUAsQgkgKgTgDQgdgFgcADQgDgpAcgbQgUgIgLgMQgLgMgKgYQglAdgbANQgnATgpACQAJhJAAgMQAAgxgYgdQgJgMgNAXQgKARgDAPQgWAMgcgcQgbgbgGggQgVgCgIASQgHARAKARQANAXAvAWQAtAVANAbQAIAQgCAfIgEAyQAMACAkgBQAhAAAPAMQATAOAEAaQAEAZgJAaIhkAgQAEgfgQgcQgSghghACQgQACgIAXQgGAWAFAQQAIAcAfATQgJAEgWARQgTAQgOADQAIgogNgdg");
	this.shape_221.setTransform(214.3331,791.7808,0.4962,0.4962);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#332218").s().p("AANAeQgGgBgRgHQgNgGgGgPQgGgOAGgLIA+gGQgEALAAANIADAcQgCAJgKAAIgHgBg");
	this.shape_222.setTransform(289.3619,769.5543,0.4962,0.4962);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#332218").s().p("AAwFeQgOgZgYgOQggg+hRg/QgIgGgKggQgJgggMgHQAXgIATAKQASAIAUAZQASgPADgfQADgcgKgcQgHgUgRgMQgVgPgXAJQgEABgFATQgFARgFAAQgHAAgLgCQgMgFgEgEQgFgEAAgKQgBgJADgHQAYgPACggQACgUgIglQgCgEgSgSQgQgQgCgMIBhgPQgigWABgMQABgJAagMQBSgqAYg2IAwgIQAdgDAVAcQAHgVAegaQAXgUgDgXIgCgPIALgBIASAQQgKAiAKAqIgPgBQgWAAgFAMQgEAJAFAbQARBZgHA7IAhgPIgBAuQgUgEgmAZQgrAcgqABQAIATASAJIAcAOQAIAHgKANQgLANgMgDQgOgDgPgLQgVgRgKgEQgYgOAIAgQAFAWAbBLIAzg+QAcAmACApQACAsgaAjQgUgqgPgNQgUgTgfAKQAfAaAEAdQAEAagSAfIBABKIAkgJQAUgBATALQgQAegaATQgVAPgmAPQAAghgOgagAhTirQgHAsAcARQAQAKAoAJQAmAJAQALQAGgugJgjQgKgkgcghIgHAwQgDAZgQARQgRgMgCgZIAAgtIgEgBQgjAAgGArgAAwj7QgJAFADAVQAHA0A6BWQAdgLgThAQgSg7gYgTQgOgMgIAAIgFABg");
	this.shape_223.setTransform(290.5157,752.5624,0.4962,0.4962);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#332218").s().p("AA4H1QgIgCgaAJQhIAZg9gdQgHgCgXgDQgUgCgGgFQgLgHgBgXQgBgXAKgZQALAnA0gKIAIAVQAGAMADAEQAIAIATgFQAUgEAAgMIABgsQABgVAIgPIAWApQADAFAOgDQAPgCgBgGQgJgTgCgJQgCgRAPgFQABgBAOAUQANATAHgGQAIgGACgOQABgMAAgYQAdAiArABQAoAAAjgdQgVgRgBgQQAAgEAIgNQAJgOAAgHQAAgFgMgNQgLgNABgEQAEgOAngOQgIgNgQAAQgOAAgJAJQgRASgEAnQgCAdgNgDIgUgCQgPgBgDgEQgDgHANghQATgNgPgMQgPgMgHAQQgIAOgLAgQgMAcgUANIgLgoQgHgSgQgNQgQASgGAdQgEAPgGAkQgIAGgQgKQgQgJgCgLQgCgFAKgWQAJgXAAgLQgXgMgTAgQgOAbgCAcQAAAJALABIgDAYQgEgMgIgHQgGgFgDAAQgSgDACgQIAGgPQAEgMgBgDQgDgLgSAAQgQABgJAIIgPABQAGAcAAAIQgBAXgWAOQgJgigDgHQgKgSgbgFQgDBLgaBFQgVgLgNgPQgUgXAKgSQAEgLAVgVQANgTgOgXQgZAhgmAGQgeAEgigOQgPgsAgAKIAeAKQAQAEAGgHIgVgXIAAAIQgKgFgTgmQgVgqgUg5IhLgVQghh0AFh0QAeAMA3AjIAAAAIAOhNQAAgQBAgwQA/gwgDgdQgCgYApAMQAvAOAEgFIAWgYIgXgMQgOgJgCgHQgBgFAJgJQAJgJAPgFQg5gShFAdQgVAJgcgPQgdgRgNgEQg+gQgOgFQgmgRgMgfQAJAAAIgGQAHgGACgIQABgKgDgQIARgKQANAJAYADQANABAZABQAVAYAhALQAhALAjgHIAIgEQATgKAIgTQAIgRgEgVQAFAAAGgEIAJgHIBJgHQgSAaAGAOQACAEAQAJQAQAIAEAIIAUAtQADAGAOABQAPgBAOgGQAFAIAmAUQAWAKAGAIQATgIANgSQASgXAMgqIAOg1IB3ABQADAAAGAHQAHAEAEgDIATgOQAQgKAUAFQAMADAVAIQgLBWBoA4QAcAOA2AYQAsAWAMAUQgpgBAuC1QAWBXAdBVQgNgVhRglQhRABgQABQgfACgbAGIgcAWIApAYQgVgCgSALQgTAKAGARQAjAcgBAyQgCBQAHAcQgBAGgQALQgOALgBAFQgDATAMAjQhhATgLBRQgYAFgkAZQguAggJAFQgBgdgKgDgAkHDGQgNAPAVANQAHArAMAIQAJAHAQAAQAMAAALgCIACgJQANgqhAgbQgIgMgHAAQgGAAgFAGgAktmxIgJAFQgDALAJALQAJAMAOADIASADQALADAHgCQgPglgHgEQgKgGgNAAIgLABgAlzE0QgBgFgBgJQAEABACgCQAAASgCAAIgCgDg");
	this.shape_224.setTransform(264.5744,768.2686,0.4962,0.4962);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.concassage}]}).to({state:[]},92).to({state:[{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},94).wait(1));

	// bateau
	this.bateau = new lib.bateau();
	this.bateau.name = "bateau";
	this.bateau.setTransform(-149.7,293.35,1.2755,1.0297,0,0,0,225.5,198.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AggDQQgLgCgCgLIg9jfIABgLIA8icQAEgJAIgDQAJgCAHAGIBxBVQAHAFABAIQAAAIgGAGIiRCLIAcBoIBeh0QAFgFAHgCQAIAAAFAEQAGAFAAAIQABAHgEAGIh1CPQgFAHgJAAIgEgBgAhGggIAMAoIB0huIhOg6g");
	this.shape_225.setTransform(331.2591,665.4382);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgnEWQgGgFAAgIQgBgHAFgGIB3iIIg9AAQgKAAgFgIQgFgIAEgKIAVgsIhDANQgIACgHgEQgbgWgTgaQgQgYgIgcQgOg1ASg3QASg2AngkQAqgoAtAAQAMAAAFAJIBZCoQAFAFAAAGIgDAJIhQCkIBJAAQAMAAAFALQAFALgJAJIiSClQgFAGgIAAQgHAAgFgEgAgyjSQgcAdgNApIgHAfIAAAnQABAXAOAZQAOAYAZAVIBWgRIAwhhIgLgUIgfg6IgnhMQgfAHgcAcg");
	this.shape_226.setTransform(292.1363,672.875);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AASDNIhxhVQgHgFAAgJQgBgIAGgGICSiLIgchnIhfBzQgEAHgIAAQgHABgGgFQgGgFgBgHQAAgIAFgFIB0iPQAHgJALACQALADADAKIA8DfIAAAMIg9CcQgDAIgJADIgFABgAg4BoIBNA5IAxiAIgLgog");
	this.shape_227.setTransform(252.7477,665.4478);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("Ag3D/QgIgFAAgKIAAlKIgjAAQgJAAgFgFQgFgGAAgIQAAgHAFgFQAFgGAJAAIAjAAIAAhxQAAgHAGgGQAFgFAIAAIAJACIAGAIIACAIIAABxIAnAAQAHAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgHAAIgnAAIAAEyIB5grIAKgBIAIAEIAGAIIAAAJIgEAIIgIAGIiQAzIgGABg");
	this.shape_228.setTransform(216.775,660.25);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AASEDIhxhWQgHgFAAgIQgBgJAGgGICSiMIgchlIhfByQgEAGgIABQgHABgGgGQgGgEgBgHQAAgIAFgFIB0iPQAHgJALADQALACADALIA8DfIAAALIg9CcQgDAJgJACIgFABgAg4CdIBNA6IAxiAIgLgqgABDioQgHAAgFgFIgigpIgeAoQgFAGgJAAIgLgDQgGgEgBgIQgBgHAEgGIAsg6QAFgHAJAAQAJAAAFAGIAxA6QAEAGAAAHQgBAIgFAFQgFADgGAAIgDAAg");
	this.shape_229.setTransform(180.0477,660.075);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AhpD+QgFgFAAgHIAAnhQAAgNALgEQALgFAJAIIC5C8QAFAFAAAIQAAAHgGAGIiyCmIgBABIAAByQAAAHgFAFQgFAFgIAAQgIAAgFgFgAhKBOICNiEIiNiOg");
	this.shape_230.setTransform(144.575,670.594);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("ABkDLQgFgGAAgIIAAlUIhCA1IAcAWQAGAEAAAIQABAIgEAFQgFAGgHABQgIABgFgFIiBhnIAAFUQAAAIgFAGQgFAFgIAAQgIAAgFgFQgFgGAAgIIAAl6QAAgLAKgFQALgEAIAGIBlBSIBmhSQAJgGAKAEQAKAFAAALIAAF6IgCAJIgHAHIgJADQgHAAgGgFg");
	this.shape_231.setTransform(101.475,665.383);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgxECQgMgEAAgNIAAklIgZAAQgIAAgFgGQgFgFAAgHQAAgIAFgFQAFgGAIAAIAZAAIAAiWQAAgKAIgFQAIgGAJADICBAwQAHADADAHQADAHgCAHIgGAHIgIAEIgKgBIhogmIAAB8IBXAAQAIAAAFAGQAGAFAAAIQAAAHgGAFQgFAGgIAAIhXAAIAAD1IBhhzQAFgFAHgBQAIgBAGAFQAGAGAAAHQAAAHgFAGIiBCXQgFAGgJAAg");
	this.shape_232.setTransform(61.0068,660.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bateau}]}).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.bateau}]},1).to({state:[{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.bateau).wait(1).to({regX:225.6,x:-125.25,y:303.9},0).wait(1).to({x:-100.95,y:314.5},0).wait(1).to({x:-76.65,y:325.1},0).wait(1).to({x:-52.4,y:335.7},0).wait(1).to({x:-28.1,y:346.3},0).wait(1).to({x:-3.8,y:356.9},0).wait(1).to({x:20.45,y:367.5},0).wait(1).to({x:29.95,y:371.2},0).wait(1).to({x:39.4,y:374.9},0).wait(1).to({x:48.85,y:378.6},0).wait(1).to({x:58.3,y:382.25},0).wait(1).to({x:67.75,y:385.95},0).wait(1).to({x:77.2,y:389.65},0).wait(1).to({x:86.65,y:393.35},0).wait(1).to({x:96.1,y:397},0).wait(1).to({x:105.55,y:400.7},0).wait(1).to({x:115,y:404.4},0).wait(1).to({x:124.45,y:408.1},0).wait(1).to({x:133.9,y:411.75},0).wait(1).to({x:139.45,y:412},0).wait(1).to({x:145,y:412.2},0).wait(1).to({x:150.55,y:412.45},0).wait(1).to({x:156.1,y:412.65},0).wait(1).to({x:161.65,y:412.9},0).wait(1).to({x:167.2,y:413.1},0).wait(1).to({x:172.75,y:413.35},0).wait(1).to({x:178.3,y:413.55},0).wait(1).to({x:183.85,y:413.8},0).wait(1).to({x:189.4,y:414},0).wait(1).to({x:194.95,y:414.25},0).wait(1).to({x:200.5,y:414.45},0).wait(1).to({x:206.05,y:414.7},0).wait(1).to({x:211.55,y:414.9},0).wait(1).to({x:217.1,y:415.15},0).wait(1).to({x:222.65,y:415.35},0).wait(1).to({x:228.2,y:415.6},0).wait(1).to({x:233.75,y:415.8},0).wait(1).to({x:239.3,y:416.05},0).wait(1).to({x:244.85,y:416.25},0).wait(1).to({x:250.4,y:416.5},0).wait(1).to({x:255.95,y:416.7},0).wait(1).to({x:261.5,y:416.95},0).wait(1).to({x:267.05,y:417.15},0).wait(1).to({x:272.6,y:417.4},0).wait(1).to({x:278.15,y:417.6},0).wait(1).to({x:283.7,y:417.85},0).wait(1).to({x:289.15,y:418.05},0).wait(1).to({x:294.7,y:418.3},0).wait(1).to({x:300.25,y:418.5},0).wait(1).to({x:305.8,y:418.75},0).wait(1).to({x:311.35,y:418.95},0).wait(1).to({x:316.9,y:419.2},0).wait(1).to({x:322.45,y:419.4},0).wait(1).to({x:328,y:419.65},0).wait(1).to({x:333.55,y:419.85},0).wait(1).to({x:339.1,y:420.1},0).wait(1).to({x:344.65,y:420.3},0).wait(1).to({x:350.2,y:420.55},0).wait(1).to({x:355.75,y:420.75},0).wait(1).to({x:361.25,y:420.95},0).wait(1).to({x:363,y:421.2},0).wait(1).to({x:364.75,y:421.4},0).wait(1).to({x:366.45,y:421.65},0).wait(1).to({x:368.2,y:421.85},0).wait(1).to({x:369.95,y:422.1},0).wait(1).to({x:371.65,y:422.3},0).wait(1).to({x:373.4,y:422.55},0).wait(1).to({x:375.15,y:422.75},0).wait(1).to({x:376.85,y:422.95},0).wait(1).to({x:378.6,y:423.2},0).wait(1).to({x:380.3,y:423.4},0).wait(1).to({x:382.05,y:423.65},0).wait(1).to({x:383.8,y:423.85},0).wait(1).to({x:385.5,y:424.1},0).wait(1).to({x:387.25,y:424.3},0).wait(1).to({x:389,y:424.5},0).wait(1).to({x:390.7,y:424.75},0).wait(1).to({x:392.45,y:424.95},0).wait(1).to({x:394.2,y:425.2},0).wait(1).to({x:395.9,y:425.4},0).wait(1).to({x:397.65,y:425.65},0).wait(1).to({x:399.35,y:425.85},0).wait(1).to({x:401.1,y:426.05},0).wait(1).to({x:402.85,y:426.3},0).wait(1).to({x:404.55,y:426.5},0).wait(1).to({x:406.3,y:426.75},0).wait(1).to({x:408.05,y:426.95},0).wait(1).to({x:409.75,y:427.2},0).wait(1).to({x:411.5,y:427.4},0).wait(1).to({x:413.2,y:427.6},0).wait(1).to({_off:true},1).wait(1).to({_off:false,regY:198.5,x:363.5,y:437.5,mode:"synched",startPosition:0},0).wait(1).to({regY:198.6,x:362.3,y:436.55,startPosition:1},0).wait(1).to({x:361.15,y:435.5,startPosition:2},0).wait(1).to({x:359.95,y:434.45,startPosition:3},0).wait(1).to({x:358.8,y:433.45,startPosition:4},0).wait(1).to({x:357.6,y:432.4,startPosition:5},0).wait(1).to({x:356.45,y:431.35,startPosition:6},0).wait(1).to({x:355.25,y:430.35,startPosition:7},0).wait(1).to({x:354.1,y:429.3,startPosition:8},0).wait(1).to({x:352.95,y:428.25,startPosition:9},0).wait(1).to({x:351.75,y:427.25,startPosition:10},0).wait(1).to({x:350.6,y:426.2,startPosition:11},0).wait(1).to({x:349.4,y:425.15,startPosition:12},0).wait(1).to({x:348.25,y:424.15,startPosition:13},0).wait(1).to({x:347.05,y:423.1,startPosition:14},0).wait(1).to({x:345.9,y:422.05,startPosition:15},0).wait(1).to({x:344.7,y:421.05,startPosition:16},0).wait(1).to({x:343.55,y:420,startPosition:17},0).wait(1).to({x:342.4,y:418.95,startPosition:18},0).wait(1).to({x:341.2,y:417.95,startPosition:0},0).wait(1).to({x:340.05,y:416.9,startPosition:1},0).wait(1).to({x:338.85,y:415.85,startPosition:2},0).wait(1).to({x:337.7,y:414.85,startPosition:3},0).wait(1).to({x:336.5,y:413.8,startPosition:4},0).wait(1).to({x:335.35,y:412.75,startPosition:5},0).wait(1).to({x:334.2,y:411.75,startPosition:6},0).wait(1).to({x:333,y:410.7,startPosition:7},0).wait(1).to({x:331.85,y:409.65,startPosition:8},0).wait(1).to({x:330.65,y:408.6,startPosition:9},0).wait(1).to({x:329.5,y:407.6,startPosition:10},0).wait(1).to({x:328.3,y:406.55,startPosition:11},0).wait(1).to({x:327.15,y:405.5,startPosition:12},0).wait(1).to({x:326,y:404.5,startPosition:13},0).wait(1).to({x:324.8,y:403.45,startPosition:14},0).wait(1).to({x:323.65,y:402.4,startPosition:15},0).wait(1).to({x:322.45,y:401.4,startPosition:16},0).wait(1).to({x:321.3,y:400.35,startPosition:17},0).wait(1).to({x:320.1,y:399.3,startPosition:18},0).wait(1).to({x:318.95,y:398.3,startPosition:0},0).wait(1).to({x:317.75,y:397.25,startPosition:1},0).wait(1).to({x:316.6,y:396.2,startPosition:2},0).wait(1).to({x:315.45,y:395.2,startPosition:3},0).wait(1).to({x:314.25,y:394.15,startPosition:4},0).wait(1).to({x:313.1,y:393.1,startPosition:5},0).wait(1).to({x:311.9,y:392.1,startPosition:6},0).wait(1).to({x:310.75,y:391.05,startPosition:7},0).wait(1).to({x:309.55,y:390,startPosition:8},0).wait(1).to({x:308.4,y:389,startPosition:9},0).wait(1).to({x:307.25,y:387.95,startPosition:10},0).wait(1).to({x:306.05,y:386.9,startPosition:11},0).wait(1).to({x:304.9,y:385.9,startPosition:12},0).wait(1).to({x:303.7,y:384.85,startPosition:13},0).wait(1).to({x:302.55,y:383.8,startPosition:14},0).wait(1).to({x:301.35,y:382.8,startPosition:15},0).wait(1).to({x:300.2,y:381.75,startPosition:16},0).wait(1).to({x:299,y:380.7,startPosition:17},0).wait(1).to({x:297.85,y:379.65,startPosition:18},0).wait(1).to({x:296.7,y:378.65,startPosition:0},0).wait(1).to({x:295.5,y:377.6,startPosition:1},0).wait(1).to({x:294.35,y:376.55,startPosition:2},0).wait(1).to({x:293.15,y:375.55,startPosition:3},0).wait(1).to({x:292,y:374.5,startPosition:4},0).wait(1).to({x:290.8,y:373.45,startPosition:5},0).wait(1).to({x:289.65,y:372.45,startPosition:6},0).wait(1).to({x:288.5,y:371.4,startPosition:7},0).wait(1).to({x:287.35,y:370.35,startPosition:8},0).wait(1).to({x:286.2,y:369.35,startPosition:9},0).wait(1).to({x:285,y:368.3,startPosition:10},0).wait(1).to({x:283.85,y:367.25,startPosition:11},0).wait(1).to({x:282.65,y:366.25,startPosition:12},0).wait(1).to({x:281.5,y:365.2,startPosition:13},0).wait(1).to({x:280.3,y:364.15,startPosition:14},0).wait(1).to({x:279.15,y:363.15,startPosition:15},0).wait(1).to({x:278,y:362.1,startPosition:16},0).wait(1).to({x:276.8,y:361.05,startPosition:17},0).wait(1).to({x:275.65,y:360.05,startPosition:18},0).wait(1).to({x:274.45,y:359,startPosition:0},0).wait(1).to({x:273.3,y:357.95,startPosition:1},0).wait(1).to({x:272.1,y:356.95,startPosition:2},0).wait(1).to({x:270.95,y:355.9,startPosition:3},0).wait(1).to({x:269.8,y:354.85,startPosition:4},0).wait(1).to({x:268.6,y:353.85,startPosition:5},0).wait(1).to({x:267.45,y:352.8,startPosition:6},0).wait(1).to({x:266.25,y:351.75,startPosition:7},0).wait(1).to({x:265.1,y:350.7,startPosition:8},0).wait(1).to({x:263.9,y:349.7,startPosition:9},0).wait(1).to({x:262.75,y:348.65,startPosition:10},0).wait(1).to({x:261.55,y:347.6,startPosition:11},0).wait(1).to({x:260.4,y:346.6,startPosition:12},0).wait(1).to({x:259.25,y:345.55,startPosition:13},0).wait(1).to({x:258.05,y:344.5,startPosition:14},0).wait(1).to({x:256.9,y:343.5,startPosition:15},0).wait(1).to({x:255.7,y:342.45,startPosition:16},0).wait(1).to({regX:223.3,regY:198.5,x:253.1,y:340.3,startPosition:0},0).to({_off:true},1).wait(1));

	// empattage
	this.instance = new lib.empattage("synched",0);
	this.instance.setTransform(421.3,288.1,1,1,0,0,0,101.2,96.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(93).to({_off:false},0).to({_off:true},94).wait(1));

	// btn_play
	this.bt_play = new lib.play();
	this.bt_play.name = "bt_play";
	this.bt_play.setTransform(312.7,267.15,3.2561,3.2561);
	new cjs.ButtonHelper(this.bt_play, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.bt_play).to({_off:true},92).wait(96));

	// btn_empattage
	this.bt_empattage = new lib.bt_empattage();
	this.bt_empattage.name = "bt_empattage";
	this.bt_empattage.setTransform(600.15,263.2,0.6318,0.6318,0,0,0,0.1,0.1);
	this.bt_empattage._off = true;
	new cjs.ButtonHelper(this.bt_empattage, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.bt_empattage).wait(93).to({_off:false},0).to({_off:true},94).wait(1));

	// btn_concassage
	this.bt_concassage = new lib.btconcassage();
	this.bt_concassage.name = "bt_concassage";
	this.bt_concassage.setTransform(355.35,700.3,0.5321,0.5321,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.bt_concassage, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.bt_concassage).to({_off:true},92).wait(96));

	// video
	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgHATIgHgEIgEgHIgCgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAg");
	this.shape_233.setTransform(355.275,788.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_234.setTransform(345.275,781.875);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AglByQgNgOAAgXIAAgGIAfAAQAAAdAUAAQAMAAADgIQAFgGAAgVIAAgiQgLAYgUAAQgWAAgKgVQgLgWAAgsQAAgxAKgXQAKgWAXAAQAKAAAGAFQAIAGAHANIAAgVIAhAAIAAC1QAAAhgGANQgMAXgkAAQgXAAgOgNgAgOhSQgGAOAAAgQAAAhAGAPQAFAOALAAQALAAAEgNQAEgMABgiQAAg/gWAAQgKAAgEAOg");
	this.shape_235.setTransform(331.55,785.475);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgrBFQgKgXAAgvQAAguAKgVQALgWAWAAQATAAAMAXIAAgUIAhAAIAACwIghAAIAAgXQgHAPgHAFQgHAFgKAAQgWAAgLgWgAgOgvQgFANAAAiQAAAiAEAOQAFAOALAAQALAAAFgOQAFgQAAggQAAgfgFgPQgFgOgLAAQgKAAgFANg");
	this.shape_236.setTransform(317.725,781.875);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_237.setTransform(306.125,781.825);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_238.setTransform(295.875,781.825);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgrBFQgKgXAAgvQAAguAKgVQALgWAWAAQATAAAMAXIAAgUIAhAAIAACwIghAAIAAgXQgHAPgHAFQgHAFgKAAQgWAAgLgWgAgOgvQgFANAAAiQAAAiAEAOQAFAOALAAQALAAAFgOQAFgQAAggQAAgfgFgPQgFgOgLAAQgKAAgFANg");
	this.shape_239.setTransform(283.425,781.875);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgiBaIAAiwIAgAAIAAAXQAHgOAJgGQAIgFANgBIAAAiIgFgBQgSAAgIAJQgGAJAAAWIAABqg");
	this.shape_240.setTransform(272.7,781.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgGCNQgHgFgHgPIAAAXIghAAIAAkiIAhAAIAACGIAHgLIAHgHQAGgFALAAQALAAAIAFQAIAGAGALQAFALACAPQADARAAAYQAAAwgKAWQgLAXgWAAQgLAAgGgGgAgQAIQgFANAAAjQAAAhAFAOQAEAPAMAAQAKAAAFgPQAFgMAAgiQAAglgFgNQgEgMgLAAQgMAAgEANg");
	this.shape_241.setTransform(260.725,776.35);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgnBMQgNgPAAgiIAAh0IAhAAIAAB2QABAQAEAHQAEAHAKAAQALAAAFgGQAEgHAAgQIAAgOIAAhpIAgAAIAABpQAAAlgEANQgMAYgkAAQgbAAgMgOg");
	this.shape_242.setTransform(239.2,782.025);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgrB8QgKgWAAgwQAAgYADgRQACgPAFgLQAGgLAIgGQAIgFALAAQAKAAAHAFIAHAHIAHALIAAiGIAhAAIAAEiIghAAIAAgXQgHAPgHAFQgHAGgLAAQgVAAgLgXgAgOAHQgFANAAAjQAAAjAEANQAFAPALAAQALAAAFgPQAFgQAAgfQAAghgFgPQgFgNgLAAQgKAAgFAMg");
	this.shape_243.setTransform(224.875,776.35);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_244.setTransform(206.075,781.825);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgjBaIAAiwIAhAAIAAAXQAHgOAJgGQAIgFANgBIAAAiIgFgBQgSAAgHAJQgHAJAAAWIAABqg");
	this.shape_245.setTransform(196.45,781.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("Ag2AAQAAhaA2AAQAOAAALAFQAKAGAHALQAGAMAEARQADASABAXQgBBZg3AAQg2AAAAhbgAgPgvQgFAOABAhQgBAiAFANQAFAOALAAQALAAAFgNQAFgNgBgiQABgigFgOQgEgNgMAAQgLAAgFANg");
	this.shape_246.setTransform(184.35,781.875);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgPCRIAAkhIAfAAIAAEhg");
	this.shape_247.setTransform(174.125,776.225);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_248.setTransform(158.425,781.825);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_249.setTransform(146.825,781.875);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgjBaIAAiwIAhAAIAAAXQAHgOAJgGQAIgFANgBIAAAiIgFgBQgSAAgHAJQgHAJAAAWIAABqg");
	this.shape_250.setTransform(136.25,781.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgmACQAAgvANgWQANgXAaAAQANAAAMAGIAAAiQgGgJgKAAQgaAAAAA7QAAA9AaAAQAHAAAJgHIAAAfQgMAGgOAAQgzAAAAhZg");
	this.shape_251.setTransform(126.025,781.875);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgoBMQgLgPgBgiIAAh0IAhAAIAAB2QAAAQAFAHQAFAHAJAAQALAAAFgGQAEgHAAgQIAAgOIAAhpIAhAAIAABpQAAAlgGANQgLAYgkAAQgcAAgMgOg");
	this.shape_252.setTransform(113.8,782.025);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_253.setTransform(101.675,781.825);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_254.setTransform(84.225,781.825);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_255.setTransform(72.625,781.875);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgrB8QgKgWAAgwQAAgYADgRQACgPAFgLQAGgLAIgGQAIgFALAAQAKAAAHAFIAHAHIAHALIAAiGIAhAAIAAEiIghAAIAAgXQgHAPgHAFQgHAGgLAAQgVAAgLgXgAgOAHQgFANAAAjQAAAjAEANQAFAPALAAQALAAAFgPQAFgQAAgfQAAghgFgPQgFgNgLAAQgKAAgFAMg");
	this.shape_256.setTransform(58.875,776.35);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AAUBaIAAh1QAAgSgFgIQgEgHgKAAQgFAAgEACQgEABgCAFIgDAMIgCAQIAAByIggAAIAAiwIAgAAIAAAVQAOgYAWAAQAVAAAJARQAFAJAAAcIAAB9g");
	this.shape_257.setTransform(783.025,737.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("Ag2AAQAAhaA2AAQAOAAAKAFQALAGAHALQAGAMAEARQADASABAXQgBBZg3AAQg2AAAAhbgAgPgvQgFAOAAAhQAAAiAFANQAFAOALAAQALAAAFgNQAEgNAAgiQAAgigEgOQgEgNgMAAQgLAAgFANg");
	this.shape_258.setTransform(769.25,737.825);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgOB+IAAiwIAgAAIAACwgAgOhYQgHgFAAgKQAAgJAHgGQAGgHAJAAQAIAAAGAHQAHAGAAAJQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_259.setTransform(758.9,734.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgPBxIAAiWIgSAAIAAgaIASAAIAAgxIAfAAIAAAxIASAAIAAAaIgSAAIAACWg");
	this.shape_260.setTransform(751.675,735.375);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgmACQAAgvANgWQANgXAaAAQANAAAMAGIAAAiQgGgJgKAAQgaAAAAA7QAAA9AaAAQAHAAAJgHIAAAfQgMAGgOAAQgzAAAAhZg");
	this.shape_261.setTransform(742.975,737.825);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgrBFQgKgXAAgvQAAguAKgVQALgWAWAAQATAAAMAXIAAgUIAhAAIAACwIghAAIAAgXQgHAPgHAFQgHAFgKAAQgWAAgLgWgAgOgvQgFANAAAiQAAAiAEAOQAFAOALAAQALAAAFgOQAFgQAAggQAAgfgFgPQgFgOgLAAQgKAAgFANg");
	this.shape_262.setTransform(730.625,737.825);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgjBbIAAixIAhAAIAAAWQAHgOAJgFQAIgGANAAIAAAhIgFAAQgSAAgHAJQgHAJAAAXIAABqg");
	this.shape_263.setTransform(719.9,737.65);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgPBxIAAiWIgSAAIAAgaIASAAIAAgxIAfAAIAAAxIASAAIAAAaIgSAAIAACWg");
	this.shape_264.setTransform(710.625,735.375);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AAaBZIgQgiQgKgYgDgOQgBAOgJAVIgQAlIgiAAIAshdIgshUIAmAAIAQAjIAFAMIAEAPIACgNIAFgMIACgFIANggIAiAAIgoBUIAwBdg");
	this.shape_265.setTransform(700.175,737.85);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_266.setTransform(687.475,737.825);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgMA0IgHhnIAnAAIgHBng");
	this.shape_267.setTransform(677.425,725.475);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgPCRIAAkhIAfAAIAAEhg");
	this.shape_268.setTransform(670.375,732.175);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgjBbIAAixIAhAAIAAAWQAIgOAIgFQAIgGANAAIAAAhIgGAAQgRAAgHAJQgHAJAAAXIAABqg");
	this.shape_269.setTransform(655.8,737.65);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_270.setTransform(644.025,737.825);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgPBxIAAiWIgSAAIAAgaIASAAIAAgxIAfAAIAAAxIASAAIAAAaIgSAAIAACWg");
	this.shape_271.setTransform(633.675,735.375);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgOB+IAAiwIAgAAIAACwgAgOhYQgHgFAAgKQAAgJAHgGQAHgHAHAAQAJAAAGAHQAHAGAAAJQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_272.setTransform(626.2,734.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgPCRIAAkhIAfAAIAAEhg");
	this.shape_273.setTransform(619.375,732.175);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgOB+IAAiwIAgAAIAACwgAgPhYQgGgFAAgKQAAgJAGgGQAIgHAIAAQAIAAAHAHQAGAGAAAJQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_274.setTransform(612.3,734.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgmACQAAgvANgWQANgXAaAAQANAAAMAGIAAAiQgGgJgKAAQgaAAAAA7QAAA9AaAAQAHAAAJgHIAAAfQgMAGgOAAQgzAAAAhZg");
	this.shape_275.setTransform(604.125,737.825);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgrBFQgKgXAAgvQAAguAKgVQALgWAWAAQATAAAMAXIAAgUIAhAAIAACwIghAAIAAgXQgHAPgHAFQgHAFgKAAQgWAAgLgWgAgOgvQgFANAAAiQAAAiAEAOQAFAOALAAQALAAAFgOQAFgQAAggQAAgfgFgPQgFgOgLAAQgKAAgFANg");
	this.shape_276.setTransform(591.775,737.825);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgWCTIAAiWIgQAAIAAgaIAQAAIAAg9QAAgfAJgMQAJgNAVAAQAKAAAMAFIAAAjQgIgFgGAAQgIAAgDAFQgEAFAAAMIAAANIAAAvIAbAAIAAAaIgbAAIAACWg");
	this.shape_277.setTransform(580.975,732);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgPBxIAAiWIgSAAIAAgaIASAAIAAgxIAfAAIAAAxIASAAIAAAaIgSAAIAACWg");
	this.shape_278.setTransform(565.375,735.375);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_279.setTransform(555.125,737.825);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_280.setTransform(536.375,737.775);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AAUBaIAAh1QAAgSgFgIQgEgHgKAAQgFAAgEACQgEABgCAFIgDAMIgCAQIAAByIggAAIAAiwIAgAAIAAAVQAOgYAWAAQAVAAAJARQAFAJAAAcIAAB9g");
	this.shape_281.setTransform(524.075,737.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgOB+IAAiwIAgAAIAACwgAgPhYQgGgFAAgKQAAgJAGgGQAIgHAIAAQAIAAAHAHQAGAGAAAJQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_282.setTransform(513.4,734.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgrBFQgKgXAAgvQAAguAKgVQALgWAWAAQATAAAMAXIAAgUIAhAAIAACwIghAAIAAgXQgHAPgHAFQgHAFgKAAQgWAAgLgWgAgOgvQgFANAAAiQAAAiAEAOQAFAOALAAQALAAAFgOQAFgQAAggQAAgfgFgPQgFgOgLAAQgKAAgFANg");
	this.shape_283.setTransform(502.825,737.825);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgjBbIAAixIAhAAIAAAWQAHgOAJgFQAIgGANAAIAAAhIgFAAQgSAAgHAJQgHAJAAAXIAABqg");
	this.shape_284.setTransform(492.1,737.65);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AglByQgOgOAAgXIAAgGIAgAAQAAAdAUAAQALAAAFgIQAEgGAAgVIAAgiQgKAYgVAAQgWAAgKgVQgLgWAAgsQAAgxAKgXQAKgWAXAAQAKAAAHAFQAGAGAIANIAAgVIAhAAIAAC1QAAAhgHANQgMAXgjAAQgYAAgNgNgAgPhSQgEAOAAAgQAAAhAEAPQAFAOAMAAQALAAAEgNQAFgMgBgiQAAg/gVAAQgKAAgFAOg");
	this.shape_285.setTransform(479.55,741.425);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_286.setTransform(460.725,737.775);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_287.setTransform(449.125,737.825);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgPCRIAAkhIAfAAIAAEhg");
	this.shape_288.setTransform(439.125,732.175);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgiBbIAAixIAgAAIAAAWQAIgOAHgFQAJgGAOAAIAAAhIgHAAQgRAAgIAJQgGAJAAAXIAABqg");
	this.shape_289.setTransform(424.55,737.65);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_290.setTransform(412.775,737.825);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_291.setTransform(401.225,737.775);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgOB+IAAiwIAgAAIAACwgAgOhYQgHgFAAgKQAAgJAHgGQAGgHAJAAQAIAAAGAHQAHAGAAAJQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_292.setTransform(392.4,734.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgiBbIAAixIAgAAIAAAWQAIgOAHgFQAJgGAOAAIAAAhIgHAAQgRAAgIAJQgGAJAAAXIAABqg");
	this.shape_293.setTransform(385.05,737.65);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgGCOQgHgGgHgOIAAAWIghAAIAAkhIAhAAIAACFIAHgLIAHgGQAGgGALAAQALAAAIAGQAIAEAGAMQAFAKACARQADAQAAAXQAAAxgKAXQgLAWgWgBQgLAAgGgEgAgQAIQgFAOAAAhQAAAjAFAOQAEAOAMgBQAKABAFgOQAFgNAAgjQAAgjgFgOQgEgMgLAAQgMAAgEANg");
	this.shape_294.setTransform(373.075,732.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_295.setTransform(352.275,737.825);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgrB9QgKgXAAgxQAAgXADgQQACgRAFgKQAGgMAIgEQAIgGALAAQAKAAAHAGIAHAGIAHALIAAiFIAhAAIAAEhIghAAIAAgWQgHAOgHAGQgHAEgLAAQgVABgLgWgAgOAHQgFANAAAjQAAAiAEAPQAFAOALgBQALAAAFgOQAFgPAAghQAAgfgFgQQgFgNgLAAQgKAAgFAMg");
	this.shape_296.setTransform(338.525,732.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAUBaIAAh1QAAgSgFgIQgEgHgKAAQgFAAgEACQgEABgCAFIgDAMIgCAQIAAByIggAAIAAiwIAgAAIAAAVQAOgYAWAAQAVAAAJARQAFAJAAAcIAAB9g");
	this.shape_297.setTransform(317.675,737.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgOB+IAAiwIAgAAIAACwgAgOhYQgHgFAAgKQAAgJAHgGQAGgHAJAAQAIAAAGAHQAHAGAAAJQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_298.setTransform(307,734.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgWCTIAAiWIgQAAIAAgaIAQAAIAAg9QAAgfAJgMQAJgNAVAAQAKAAAMAFIAAAjQgIgFgGAAQgIAAgDAFQgEAFAAAMIAAANIAAAvIAbAAIAAAaIgbAAIAACWg");
	this.shape_299.setTransform(299.525,732);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgrBFQgKgXAAgvQAAguAKgVQALgWAWAAQATAAAMAXIAAgUIAhAAIAACwIghAAIAAgXQgHAPgHAFQgHAFgKAAQgWAAgLgWgAgOgvQgFANAAAiQAAAiAEAOQAFAOALAAQALAAAFgOQAFgQAAggQAAgfgFgPQgFgOgLAAQgKAAgFANg");
	this.shape_300.setTransform(287.775,737.825);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgXCBQgKgGgGgKQgHgLgDgSQgDgRAAgXQAAguANgXQANgWAaAAQA1AAAABcIAAAFIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUAaQgCgbgEgIQgFgLgJABQgKgBgEALQgEAIgCAbIAoAAIAAAAgAgPhRIAcg0IAXAPIgiAvg");
	this.shape_301.setTransform(267.625,733.55);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_302.setTransform(256.075,737.775);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_303.setTransform(245.825,737.775);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgrBFQgKgXAAgvQAAguAKgVQALgWAWAAQATAAAMAXIAAgUIAhAAIAACwIghAAIAAgXQgHAPgHAFQgHAFgKAAQgWAAgLgWgAgOgvQgFANAAAiQAAAiAEAOQAFAOALAAQALAAAFgOQAFgQAAggQAAgfgFgPQgFgOgLAAQgKAAgFANg");
	this.shape_304.setTransform(233.375,737.825);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgmACQAAgvANgWQANgXAaAAQANAAAMAGIAAAiQgGgJgKAAQgaAAAAA7QAAA9AaAAQAHAAAJgHIAAAfQgMAGgOAAQgzAAAAhZg");
	this.shape_305.setTransform(221.975,737.825);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAUBaIAAh1QAAgSgFgIQgEgHgKAAQgFAAgEACQgEABgCAFIgDAMIgCAQIAAByIggAAIAAiwIAgAAIAAAVQAOgYAWAAQAVAAAJARQAFAJAAAcIAAB9g");
	this.shape_306.setTransform(209.775,737.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("Ag3AAQAAhaA3AAQAOAAALAFQAKAGAHALQAGAMAEARQADASAAAXQAABZg3AAQg2AAgBhbgAgPgvQgEAOAAAhQAAAiAEANQAFAOAKAAQAMAAAFgNQAFgNAAgiQAAgigFgOQgFgNgMAAQgKAAgFANg");
	this.shape_307.setTransform(196,737.825);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgmACQAAgvANgWQANgXAaAAQANAAAMAGIAAAiQgGgJgKAAQgaAAAAA7QAAA9AaAAQAHAAAJgHIAAAfQgMAGgOAAQgzAAAAhZg");
	this.shape_308.setTransform(184.425,737.825);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgPBxIAAiWIgSAAIAAgaIASAAIAAgxIAfAAIAAAxIASAAIAAAaIgSAAIAACWg");
	this.shape_309.setTransform(168.225,735.375);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgjBUIAAggQAOALAMAAQAWAAAAgWQAAgJgEgGIgGgGIgJgJQgVgPgHgLQgIgLAAgQQAAgWAOgNQANgOAUAAQAPAAAPAIIAAAfQgMgJgOAAIgIABIgFAEIgFAHIgBAHQAAANAVASIAQAMIAJAMQAHAKAAARQAAAXgOAPQgOAOgWAAQgOAAgOgIg");
	this.shape_310.setTransform(159.125,737.775);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_311.setTransform(147.525,737.825);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgPBxIAAiWIgSAAIAAgaIASAAIAAgxIAfAAIAAAxIASAAIAAAaIgSAAIAACWg");
	this.shape_312.setTransform(129.925,735.375);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgPCRIAAkhIAfAAIAAEhg");
	this.shape_313.setTransform(122.575,732.175);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgrBFQgKgXAAgvQAAguAKgVQALgWAWAAQATAAAMAXIAAgUIAhAAIAACwIghAAIAAgXQgHAPgHAFQgHAFgKAAQgWAAgLgWgAgOgvQgFANAAAiQAAAiAEAOQAFAOALAAQALAAAFgOQAFgQAAggQAAgfgFgPQgFgOgLAAQgKAAgFANg");
	this.shape_314.setTransform(111.875,737.825);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AA3BaIAAh0QABgTgEgHQgEgHgKAAQgMAAgEAHQgFAHAAATIAAB0IghAAIAAh0IAAgQIgDgKQgCgDgEgCQgEgCgFAAQgMAAgEAHQgFAIAAASIAAB0IghAAIAAiwIAhAAIAAAWQAOgZAWAAQAXAAAJAZQANgZAYAAQATAAAKAKQAKAKgBATIAACMg");
	this.shape_315.setTransform(94.65,737.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_316.setTransform(70.375,737.825);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AguCEIAAkHIAkAAIAADpIA5AAIAAAeg");
	this.shape_317.setTransform(59.025,733.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AggDQQgLgCgCgLIg9jfIABgLIA8icQAEgJAIgDQAJgCAHAGIBxBVQAHAFABAIQAAAIgGAGIiRCLIAcBoIBeh0QAFgFAHgCQAIAAAFAEQAGAFAAAIQABAHgEAGIh1CPQgFAHgJAAIgEgBgAhGggIAMAoIB0huIhOg6g");
	this.shape_318.setTransform(410.2591,654.7882);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgnEWQgGgFAAgIQgBgHAFgGIB3iIIg9AAQgKAAgFgIQgFgIAEgKIAVgsIhDANQgIACgHgEQgbgWgTgaQgQgYgIgcQgOg1ASg3QASg2AngkQAqgoAtAAQAMAAAFAJIBZCoQAFAFAAAGIgDAJIhQCkIBJAAQAMAAAFALQAFALgJAJIiSClQgFAGgIAAQgHAAgFgEgAgyjSQgcAdgNApIgHAfIAAAnQABAXAOAZQAOAYAZAVIBWgRIAwhhIgLgUIgfg6IgnhMQgfAHgcAcg");
	this.shape_319.setTransform(371.1363,662.225);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AASDNIhxhVQgHgFAAgJQgBgIAGgGICSiLIgchnIhfBzQgEAHgIAAQgHABgGgFQgGgFgBgHQAAgIAFgFIB0iPQAHgJALACQALADADAKIA8DfIAAAMIg9CcQgDAIgJADIgFABgAg4BoIBNA5IAxiAIgLgog");
	this.shape_320.setTransform(331.7477,654.7978);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAIDQQgHAAgFgGIhlhrQgFgFAAgHQAAgIAFgFQAFgFAIAAQAHAAAGAGIBUBZIBAhkIiQiNQgLgKAJgMIA/hfQAFgIAIAAQAIgBAGAGIBOBNQAFAFAAAHQAAAIgFAFQgGAGgHAAQgIAAgFgFIg+g+IgqBBICQCLQAKALgHAMIhUCEQgFAIgJABg");
	this.shape_321.setTransform(295.4607,654.7429);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AAIDQQgHAAgFgGIhlhrQgFgFAAgHQAAgIAFgFQAFgFAIAAQAHAAAGAGIBUBZIBAhkIiQiNQgLgKAJgMIA/hfQAFgIAIAAQAIgBAGAGIBOBNQAFAFAAAHQAAAIgFAFQgGAGgHAAQgIAAgFgFIg+g+IgqBBICQCLQAKALgHAMIhUCEQgFAIgJABg");
	this.shape_322.setTransform(259.1607,654.7429);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AASDNIhxhVQgHgFAAgJQgBgIAGgGICSiLIgchnIhfBzQgEAHgIAAQgHABgGgFQgGgFgBgHQAAgIAFgFIB0iPQAHgJALACQALADADAKIA8DfIAAAMIg9CcQgDAIgJADIgFABgAg4BoIBNA5IAxiAIgLgog");
	this.shape_323.setTransform(222.9977,654.7978);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AggDQQgLgCgCgLIg9jfIABgLIA8icQAEgJAIgDQAJgCAHAGIBxBVQAGAEABAIQABAHgEAGQgFAGgHABQgIABgFgEIhfhHIgyCAIAzC4IBeh0QAFgFAHgCQAIAAAFAEQAGAFAAAIQABAHgEAGIh1CPQgFAHgJAAIgEgBg");
	this.shape_324.setTransform(187.1091,654.7882);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("ABFDLQgGgGAAgIIAAlcIh+A6IAAEiQAAAIgFAGQgFAEgIABQgIgBgEgEQgGgGAAgIIAAl6QAAgHAGgGQAEgEAIgBQAIABAFAEQAFAGAAAHIAAAwICJg/QAJgEAIAFQAJAGAAAKIAAF4QAAAIgFAGQgGAEgIABQgHgBgFgEg");
	this.shape_325.setTransform(149.55,654.75);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AhmDPIgJgDIgGgHIgDgJQABgHAFgFQAFgFAHAAIDMAAQAIAAAFAFQAGAFAAAIQAAAHgGAGQgFAFgIAAgAh0BNQgygxAAhEQAAhFAygxQAwgwBEAAQBFAAAxAwQAwAxAABFQAABEgwAxQgxAwhFAAQhEAAgwgwgAASBYQAwgGAgglQAgglAAgwQAAgxgggkQggglgwgHgAhhh9QggAkgBAxQABAwAgAlQAhAlAvAGIAAkBQgvAHghAlg");
	this.shape_326.setTransform(105.95,654.825);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgfEDQgMgDgCgMIg6kbIAAgJIA7jFQACgJAJgDQAJgDAIAGIBtBSQAGAEABAIQABAHgEAGQgFAGgHABQgHABgHgEIhYhCIgyCnIAyDvIBYh5QAEgFAIgBQAHgCAGAFQAGAEABAIQABAHgEAGIhwCaQgFAHgKAAIgEAAg");
	this.shape_327.setTransform(64.3591,649.5776);

	this.concassage_video = new lib.an_Video({'id': 'concassage_video', 'src':'videos/concassage.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.concassage_video.name = "concassage_video";
	this.concassage_video.setTransform(568.35,319.4,1.8092,1.7475,0,0,0,200.2,150.4);

	this.instance_1 = new lib.fond();
	this.instance_1.setTransform(0,0,0.9322,1.334);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgHAUIgHgFIgEgHIgCgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAg");
	this.shape_328.setTransform(648.825,797.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgGCOQgHgGgHgPIAAAXIghAAIAAkhIAhAAIAACFIAHgLIAHgGQAGgGALAAQALAAAIAGQAIAEAGALQAFALACAQQADASAAAXQAAAwgKAXQgLAVgWAAQgLAAgGgEgAgQAIQgFAOAAAhQAAAjAFANQAEAOAMABQAKgBAFgOQAFgMAAgjQAAgjgFgNQgEgNgLAAQgMAAgEANg");
	this.shape_329.setTransform(608.525,784.75);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAUBaIAAh1QAAgSgFgHQgEgIgKAAQgFAAgEACQgEABgCAFIgDALIgCARIAAByIggAAIAAiwIAgAAIAAAVQAOgYAWAAQAVAAAJARQAFAJAAAcIAAB9g");
	this.shape_330.setTransform(546.475,790.15);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AA3BaIAAhzQABgUgEgHQgEgHgKAAQgMAAgEAHQgFAHAAAUIAABzIghAAIAAhzIAAgRIgDgKQgCgDgEgDQgEgBgFAAQgMAAgEAHQgFAIAAATIAABzIghAAIAAiwIAhAAIAAAWQAOgZAWAAQAXAAAJAZQANgZAYAAQATAAAKAKQAKAKAAATIAACMg");
	this.shape_331.setTransform(515.85,790.15);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgiBaIAAivIAgAAIAAAVQAIgOAHgFQAJgGAOgBIAAAiIgHAAQgRAAgIAJQgGAJAAAXIAABpg");
	this.shape_332.setTransform(501.15,790.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgWCTIAAiWIgQAAIAAgaIAQAAIAAg+QAAgeAJgMQAJgNAVAAQAKAAAMAFIAAAjQgIgFgGAAQgIAAgDAFQgEAFAAAMIAAANIAAAvIAbAAIAAAaIgbAAIAACWg");
	this.shape_333.setTransform(478.775,784.45);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgiBaIAAivIAgAAIAAAVQAIgOAHgFQAJgGAOgBIAAAiIgGAAQgSAAgIAJQgGAJAAAXIAABpg");
	this.shape_334.setTransform(439.85,790.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AAUBaIAAh1QAAgSgFgHQgEgIgKAAQgFAAgEACQgEABgCAFIgDALIgCARIAAByIggAAIAAiwIAgAAIAAAVQAOgYAWAAQAVAAAJARQAFAJAAAcIAAB9g");
	this.shape_335.setTransform(385.775,790.15);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AAUBaIAAh1QAAgSgFgHQgEgIgKAAQgFAAgEACQgEABgCAFIgDALIgCARIAAByIggAAIAAiwIAgAAIAAAVQAOgYAWAAQAVAAAJARQAFAJAAAcIAAB9g");
	this.shape_336.setTransform(351.525,790.15);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgrB9QgKgXAAgwQAAgXADgSQACgQAFgLQAGgLAIgEQAIgGALAAQAKAAAHAGIAHAGIAHALIAAiFIAhAAIAAEhIghAAIAAgXQgHAPgHAGQgHAEgLAAQgVAAgLgVgAgOAIQgFAMAAAjQAAAiAEAOQAFAOALABQALAAAFgPQAFgQAAggQAAgggFgPQgFgNgLAAQgKAAgFANg");
	this.shape_337.setTransform(323.775,784.75);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgOB+IAAiwIAgAAIAACwgAgPhYQgGgFAAgKQAAgJAGgGQAIgHAHAAQAJAAAHAHQAGAGAAAJQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_338.setTransform(313.6,786.55);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AA4BaIAAhzQAAgUgEgHQgEgHgKAAQgMAAgEAHQgFAHAAAUIAABzIggAAIAAhzIgBgRIgEgKQgCgDgDgDQgEgBgFAAQgLAAgFAHQgFAIAAATIAABzIggAAIAAiwIAgAAIAAAWQAOgZAWAAQAXAAAJAZQANgZAYAAQATAAAJAKQALAKgBATIAACMg");
	this.shape_339.setTransform(299.6,790.15);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgjBaIAAivIAhAAIAAAVQAHgOAJgFQAIgGANgBIAAAiIgFAAQgSAAgHAJQgHAJAAAXIAABpg");
	this.shape_340.setTransform(239.2,790.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AAUBaIAAh1QAAgSgFgHQgEgIgKAAQgFAAgEACQgEABgCAFIgDALIgCARIAAByIggAAIAAiwIAgAAIAAAVQAOgYAWAAQAVAAAJARQAFAJAAAcIAAB9g");
	this.shape_341.setTransform(177.575,790.15);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AA3BaIAAhzQAAgUgDgHQgEgHgKAAQgMAAgEAHQgFAHAAAUIAABzIghAAIAAhzIAAgRIgDgKQgDgDgDgDQgEgBgFAAQgMAAgEAHQgFAIAAATIAABzIghAAIAAiwIAhAAIAAAWQAOgZAWAAQAXAAAJAZQANgZAYAAQATAAAKAKQAKAKgBATIAACMg");
	this.shape_342.setTransform(146.95,790.15);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgjBaIAAivIAhAAIAAAVQAIgOAHgFQAJgGAOgBIAAAiIgHAAQgRAAgIAJQgGAJAAAXIAABpg");
	this.shape_343.setTransform(132.25,790.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("Ag3AAQAAhaA3AAQAOAAAKAFQALAGAHALQAHAMADARQAEASAAAXQAABZg4AAQg3AAAAhbgAgPgvQgEAOgBAhQABAiAEANQAFAOALAAQALAAAFgNQAEgNABgiQgBgigEgOQgFgNgLAAQgLAAgFANg");
	this.shape_344.setTransform(120.15,790.275);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgWCTIAAiWIgQAAIAAgaIAQAAIAAg+QAAgeAJgMQAJgNAVAAQAKAAAMAFIAAAjQgIgFgGAAQgIAAgDAFQgEAFAAAMIAAANIAAAvIAbAAIAAAaIgbAAIAACWg");
	this.shape_345.setTransform(109.325,784.45);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AAUBaIAAh1QAAgSgFgHQgEgIgKAAQgFAAgEACQgEABgCAFIgDALIgCARIAAByIggAAIAAiwIAgAAIAAAVQAOgYAWAAQAVAAAJARQAFAJAAAcIAAB9g");
	this.shape_346.setTransform(87.475,790.15);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgjBaIAAivIAhAAIAAAVQAHgOAJgFQAIgGANgBIAAAiIgFAAQgSAAgHAJQgHAJAAAXIAABpg");
	this.shape_347.setTransform(62.45,790.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AA3BaIAAhzQAAgUgDgHQgEgHgKAAQgMAAgFAHQgDAHAAAUIAABzIgiAAIAAhzIAAgQIgDgKQgCgFgEgCQgEgBgFAAQgMAAgEAIQgFAHAAATIAABzIghAAIAAiwIAhAAIAAAWQAOgZAWAAQAXAAAJAZQANgZAYAAQASAAALAKQAJAKABATIAACMg");
	this.shape_348.setTransform(695.65,746.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgrB9IAchXIgviiIAlAAIAZB8IAeh8IAhAAIhHD5g");
	this.shape_349.setTransform(678.525,749.875);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("Ag1BZIA8iTIg3AAIAAgeIBmAAIg7CTIA3AAIAAAeg");
	this.shape_350.setTransform(666.175,746.25);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AAUBaIAAh2QAAgRgFgHQgEgIgKAAQgFAAgEACQgEACgCAEIgDAMIgCARIAABxIggAAIAAiwIAgAAIAAAUQAOgXAWAAQAVAAAJARQAFAKAAAbIAAB9g");
	this.shape_351.setTransform(653.175,746.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgHATIgHgEIgEgHIgCgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAg");
	this.shape_352.setTransform(580.525,753.25);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgrB8QgKgWAAgxQAAgWADgSQACgPAFgLQAGgMAIgFQAIgFALAAQAKAAAHAFIAHAHIAHALIAAiGIAhAAIAAEiIghAAIAAgWQgHAOgHAFQgHAGgLAAQgVAAgLgXgAgOAHQgFANAAAjQAAAjAEAOQAFAOALAAQALAAAFgPQAFgQAAgfQAAghgFgPQgFgNgLAAQgKAAgFAMg");
	this.shape_353.setTransform(556.775,740.7);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AAUCRIAAh2QAAgSgFgHQgEgHgKAAQgFAAgEACQgEACgCADIgDAMIgCARIAAByIggAAIAAkhIAgAAIAACGQAOgYAWAAQAVAAAJARQAFAKAAAaIAAB+g");
	this.shape_354.setTransform(515.125,740.575);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgnBMQgNgPAAgiIAAh0IAhAAIAAB2QABAQAEAHQAEAHAKAAQALAAAFgGQAEgHAAgQIAAgOIAAhpIAgAAIAABpQAAAlgEANQgMAYgkAAQgbAAgMgOg");
	this.shape_355.setTransform(484,746.375);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_356.setTransform(456.725,746.225);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgMA0IgHhnIAnAAIgHBng");
	this.shape_357.setTransform(446.675,733.875);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_358.setTransform(422.575,746.225);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgrB8QgKgWAAgxQAAgWADgSQACgPAFgLQAGgMAIgFQAIgFALAAQAKAAAHAFIAHAHIAHALIAAiGIAhAAIAAEiIghAAIAAgWQgHAOgHAFQgHAGgLAAQgVAAgLgXgAgOAHQgFANAAAjQAAAjAEAOQAFAOALAAQALAAAFgPQAFgQAAgfQAAghgFgPQgFgNgLAAQgKAAgFAMg");
	this.shape_359.setTransform(408.825,740.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgrBwQgKgXAAgwQAAgtAKgWQALgVAWAAQATAAAMAXIAAgVIAhAAIAACxIghAAIAAgXQgHAPgHAFQgHAFgKAAQgWAAgLgWgAgOgEQgFAMAAAiQAAAjAEAOQAFAOALAAQALAAAFgPQAFgPAAggQAAgggFgOQgFgPgLAAQgKAAgFAOgAgdh2IAXgPIAcA0IgSAKg");
	this.shape_360.setTransform(387.825,741.95);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgXCBQgKgFgGgLQgHgMgDgQQgDgSAAgYQAAgtANgWQANgXAaAAQA1gBAABdIAAAFIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUAaQgCgbgEgJQgFgKgJAAQgKAAgEAKQgEAJgCAbIAoAAIAAAAgAgPhRIAcg0IAXAPIgiAvg");
	this.shape_361.setTransform(367.675,741.95);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AglByQgNgOAAgXIAAgGIAfAAQAAAdAUAAQAMAAADgIQAFgGAAgVIAAgiQgLAYgUAAQgWAAgLgVQgKgWAAgsQAAgxAKgXQAKgWAXAAQAKAAAHAFQAHAGAHANIAAgVIAhAAIAAC1QAAAhgGANQgMAXgkAAQgYAAgNgNgAgOhSQgGAOAAAgQAAAhAGAPQAFAOAKAAQAMAAAEgNQAFgMAAgiQAAg/gWAAQgKAAgEAOg");
	this.shape_362.setTransform(353.95,749.825);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AAUBaIAAh2QAAgRgFgHQgEgIgKAAQgFAAgEACQgEACgCAEIgDAMIgCARIAABxIggAAIAAiwIAgAAIAAAUQAOgXAWAAQAVAAAJARQAFAKAAAbIAAB9g");
	this.shape_363.setTransform(340.275,746.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgXCBQgKgFgGgLQgHgMgDgQQgDgSAAgYQAAgtANgWQANgXAaAAQA1gBAABdIAAAFIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUAaQgCgbgEgJQgFgKgJAAQgKAAgEAKQgEAJgCAbIAoAAIAAAAgAgPhRIAcg0IAXAPIgiAvg");
	this.shape_364.setTransform(306.075,741.95);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AA4BaIAAhzQAAgUgEgHQgEgHgKAAQgMAAgEAHQgEAHgBAUIAABzIggAAIAAhzIgBgQIgEgKQgCgFgDgCQgEgBgFAAQgLAAgFAIQgFAHAAATIAABzIggAAIAAiwIAgAAIAAAWQANgZAXAAQAYAAAIAZQANgZAYAAQASAAAKAKQAKAKAAATIAACMg");
	this.shape_365.setTransform(288.9,746.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_366.setTransform(246.425,746.225);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgXCBQgKgFgGgLQgHgMgDgQQgDgSAAgYQAAgtANgWQANgXAaAAQA1gBAABdIAAAFIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUAaQgCgbgEgJQgFgKgJAAQgKAAgEAKQgEAJgCAbIAoAAIAAAAgAgPhRIAcg0IAXAPIgiAvg");
	this.shape_367.setTransform(226.325,741.95);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AAUBaIAAh2QAAgRgFgHQgEgIgKAAQgFAAgEACQgEACgCAEIgDAMIgCARIAABxIggAAIAAiwIAgAAIAAAUQAOgXAWAAQAVAAAJARQAFAKAAAbIAAB9g");
	this.shape_368.setTransform(168.475,746.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("Ag3AAQAAhaA3AAQAOAAAKAFQALAGAHALQAGAMAEARQAEASAAAXQAABZg4AAQg2AAgBhbgAgPgvQgEAOgBAhQABAiAEANQAFAOAKAAQAMAAAFgNQAEgNABgiQgBgigEgOQgFgNgMAAQgKAAgFANg");
	this.shape_369.setTransform(154.7,746.225);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgPCRIAAkhIAfAAIAAEhg");
	this.shape_370.setTransform(119.575,740.575);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AA4BaIAAhzQgBgUgDgHQgEgHgKAAQgMAAgFAHQgDAHAAAUIAABzIgiAAIAAhzIAAgQIgDgKQgDgFgDgCQgEgBgFAAQgLAAgFAIQgFAHAAATIAABzIggAAIAAiwIAgAAIAAAWQANgZAXAAQAXAAAJAZQANgZAYAAQASAAALAKQAJAKABATIAACMg");
	this.shape_371.setTransform(91.65,746.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgXBWQgKgFgGgLQgHgLgDgRQgDgSAAgXQAAguANgWQANgXAaAAQA1AAAABdIAAAEIhJAAQAAA4AVAAQAVAAAAgiIAeAAQgEA+gvAAQgNAAgLgFgAAUgQQgCgcgEgIQgFgKgJAAQgKAAgEAKQgEAIgCAcIAoAAIAAAAg");
	this.shape_372.setTransform(67.375,746.225);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AguCEIAAkHIAkAAIAADpIA5AAIAAAeg");
	this.shape_373.setTransform(56.025,741.9);

	this.empattage_video = new lib.an_Video({'id': 'empattage_video', 'src':'videos/empattage.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.empattage_video.name = "empattage_video";
	this.empattage_video.setTransform(567.25,309.2,1.826,1.7595,0,0,0,200.5,150.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.concassage_video},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317,p:{x:59.025,y:733.5}},{t:this.shape_316,p:{x:70.375,y:737.825}},{t:this.shape_315},{t:this.shape_314,p:{x:111.875,y:737.825}},{t:this.shape_313,p:{x:122.575,y:732.175}},{t:this.shape_312},{t:this.shape_311,p:{x:147.525,y:737.825}},{t:this.shape_310},{t:this.shape_309,p:{x:168.225,y:735.375}},{t:this.shape_308,p:{x:184.425,y:737.825}},{t:this.shape_307,p:{x:196,y:737.825}},{t:this.shape_306},{t:this.shape_305,p:{x:221.975,y:737.825}},{t:this.shape_304,p:{x:233.375,y:737.825}},{t:this.shape_303,p:{x:245.825,y:737.775}},{t:this.shape_302,p:{x:256.075,y:737.775}},{t:this.shape_301},{t:this.shape_300,p:{x:287.775,y:737.825}},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295,p:{x:352.275,y:737.825}},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291,p:{x:401.225,y:737.775}},{t:this.shape_290,p:{x:412.775,y:737.825}},{t:this.shape_289},{t:this.shape_288,p:{x:439.125,y:732.175}},{t:this.shape_287,p:{x:449.125,y:737.825}},{t:this.shape_286,p:{x:460.725,y:737.775}},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283,p:{x:502.825,y:737.825}},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280,p:{x:536.375,y:737.775}},{t:this.shape_279,p:{x:555.125,y:737.825}},{t:this.shape_278,p:{x:565.375,y:735.375}},{t:this.shape_277},{t:this.shape_276,p:{x:591.775,y:737.825}},{t:this.shape_275,p:{x:604.125,y:737.825}},{t:this.shape_274},{t:this.shape_273,p:{x:619.375,y:732.175}},{t:this.shape_272},{t:this.shape_271,p:{x:633.675,y:735.375}},{t:this.shape_270,p:{x:644.025,y:737.825}},{t:this.shape_269},{t:this.shape_268,p:{x:670.375,y:732.175}},{t:this.shape_267,p:{x:677.425,y:725.475}},{t:this.shape_266,p:{x:687.475,y:737.825}},{t:this.shape_265},{t:this.shape_264,p:{x:710.625,y:735.375}},{t:this.shape_263},{t:this.shape_262,p:{x:730.625,y:737.825}},{t:this.shape_261,p:{x:742.975,y:737.825}},{t:this.shape_260,p:{x:751.675,y:735.375}},{t:this.shape_259,p:{x:758.9,y:734.1}},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255,p:{x:72.625,y:781.875}},{t:this.shape_254,p:{x:84.225,y:781.825}},{t:this.shape_253,p:{x:101.675,y:781.825}},{t:this.shape_252,p:{x:113.8,y:782.025}},{t:this.shape_251,p:{x:126.025,y:781.875}},{t:this.shape_250},{t:this.shape_249,p:{x:146.825,y:781.875}},{t:this.shape_248,p:{x:158.425,y:781.825}},{t:this.shape_247,p:{x:174.125,y:776.225}},{t:this.shape_246,p:{x:184.35,y:781.875}},{t:this.shape_245},{t:this.shape_244,p:{x:206.075,y:781.825}},{t:this.shape_243},{t:this.shape_242,p:{x:239.2,y:782.025}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239,p:{x:283.425,y:781.875}},{t:this.shape_238,p:{x:295.875,y:781.825}},{t:this.shape_237,p:{x:306.125,y:781.825}},{t:this.shape_236,p:{x:317.725,y:781.875}},{t:this.shape_235},{t:this.shape_234,p:{x:345.275,y:781.875}},{t:this.shape_233}]},92).to({state:[]},1).to({state:[{t:this.instance_1},{t:this.empattage_video},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_314,p:{x:108.875,y:746.225}},{t:this.shape_370},{t:this.shape_309,p:{x:126.925,y:743.775}},{t:this.shape_308,p:{x:143.125,y:746.225}},{t:this.shape_369},{t:this.shape_368},{t:this.shape_305,p:{x:180.675,y:746.225}},{t:this.shape_304,p:{x:192.075,y:746.225}},{t:this.shape_303,p:{x:204.525,y:746.175}},{t:this.shape_302,p:{x:214.775,y:746.175}},{t:this.shape_367},{t:this.shape_366},{t:this.shape_291,p:{x:258.025,y:746.175}},{t:this.shape_278,p:{x:267.125,y:743.775}},{t:this.shape_365},{t:this.shape_364},{t:this.shape_313,p:{x:315.925,y:740.575}},{t:this.shape_300,p:{x:325.975,y:746.225}},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_288,p:{x:439.625,y:740.575}},{t:this.shape_357},{t:this.shape_356},{t:this.shape_283,p:{x:469.675,y:746.225}},{t:this.shape_355},{t:this.shape_275,p:{x:503.425,y:746.225}},{t:this.shape_354},{t:this.shape_276,p:{x:528.775,y:746.225}},{t:this.shape_252,p:{x:543.1,y:746.375}},{t:this.shape_353},{t:this.shape_316,p:{x:570.525,y:746.225}},{t:this.shape_352},{t:this.shape_317,p:{x:598.025,y:741.9}},{t:this.shape_311,p:{x:609.375,y:746.225}},{t:this.shape_286,p:{x:620.975,y:746.175}},{t:this.shape_295,p:{x:639.725,y:746.225}},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_290,p:{x:712.825,y:746.225}},{t:this.shape_280,p:{x:724.425,y:746.175}},{t:this.shape_271,p:{x:53.175,y:787.825}},{t:this.shape_347},{t:this.shape_262,p:{x:73.175,y:790.275}},{t:this.shape_346},{t:this.shape_254,p:{x:99.775,y:790.225}},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_287,p:{x:164.125,y:790.275}},{t:this.shape_341},{t:this.shape_264,p:{x:188.525,y:787.825}},{t:this.shape_239,p:{x:206.175,y:790.275}},{t:this.shape_273,p:{x:216.875,y:784.625}},{t:this.shape_246,p:{x:227.1,y:790.275}},{t:this.shape_340},{t:this.shape_253,p:{x:248.825,y:790.225}},{t:this.shape_268,p:{x:264.525,y:784.625}},{t:this.shape_267,p:{x:271.575,y:777.925}},{t:this.shape_236,p:{x:281.675,y:790.275}},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_307,p:{x:337.75,y:790.275}},{t:this.shape_336},{t:this.shape_279,p:{x:372.325,y:790.275}},{t:this.shape_335},{t:this.shape_248,p:{x:405.275,y:790.225}},{t:this.shape_242,p:{x:417.4,y:790.425}},{t:this.shape_261,p:{x:429.625,y:790.275}},{t:this.shape_334},{t:this.shape_270,p:{x:450.425,y:790.275}},{t:this.shape_244,p:{x:462.025,y:790.225}},{t:this.shape_333},{t:this.shape_266,p:{x:489.375,y:790.275}},{t:this.shape_332},{t:this.shape_331},{t:this.shape_255,p:{x:533.025,y:790.275}},{t:this.shape_330},{t:this.shape_260,p:{x:557.425,y:787.825}},{t:this.shape_249,p:{x:567.775,y:790.275}},{t:this.shape_238,p:{x:579.375,y:790.225}},{t:this.shape_251,p:{x:589.525,y:790.275}},{t:this.shape_259,p:{x:597.7,y:786.55}},{t:this.shape_329},{t:this.shape_247,p:{x:618.575,y:784.625}},{t:this.shape_234,p:{x:628.575,y:790.275}},{t:this.shape_237,p:{x:640.175,y:790.225}},{t:this.shape_328}]},94).wait(1));

	// fond
	this.instance_2 = new lib.décor();
	this.instance_2.setTransform(595.2,420.9,1,1,0,0,0,595.2,420.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},92).wait(1).to({_off:false},0).to({_off:true},94).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(157.7,420.5,1101.3,528.5);
// library properties:
lib.properties = {
	id: 'A43BF70307DE4420946F2E2279BBA7F0',
	width: 1190,
	height: 841,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/1_MOHAMED_atlas_1.png?1781042292243", id:"1_MOHAMED_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1781042292855", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1781042292855", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1781042292855", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A43BF70307DE4420946F2E2279BBA7F0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
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
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;