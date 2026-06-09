(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.Refroidissement = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgPATIgRgGIAIgPQADgJAFgCQAIgDANgBIAYgCIADAKIgPAQQgJAJgIAEIgEAAIgLgBg");
	this.shape.setTransform(204.6,280.49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7DC2D2").s().p("AgJAxIgQhBIAqghIAJAEIgbBfg");
	this.shape_1.setTransform(228.675,282.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7DC2D2").s().p("AhyAaIAfgFQAogDAcgIQAkgKAagUQARgNAQABQAQABATARQgyAag/ALQgoAHhJADg");
	this.shape_2.setTransform(209.3,268.5922);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DC2D2").s().p("AgJhKQAPAQAHAOQAKATgCAVIABAKQAFAegGAKQgHAKglATg");
	this.shape_3.setTransform(251.276,366.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7DC2D2").s().p("Ag3AZQAGgZAJgKQAMgOAZADQAIABAPgDIAZgGIAJAaQAEAKgEAGQgDAGgMADQgeAHgQABIgLAAQgUAAgRgFg");
	this.shape_4.setTransform(172.875,305.9472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7DC2D2").s().p("AguAYIgZgTQAagZAsgJQAqgIAfANQgMAbgeANQgGADgxAOIgCAAQgHAAgMgJg");
	this.shape_5.setTransform(172.575,288.2974);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7DC2D2").s().p("AgXAMQgCgDABgFQABgGgBgCQgLgaANgRQAJgMAagPQAUAigEAoQgDAdgVAuIgcg/g");
	this.shape_6.setTransform(140.7568,350.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7DC2D2").s().p("AgdAdQgKgBgNgNQgPgQgJgIQAmgVAoACQAeACAuAQQgWAYgeAJQgSAGgaAAIgLAAg");
	this.shape_7.setTransform(187.8,413.1294);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7DC2D2").s().p("AhCAsQgUgFgWgVQAwgZA5gPQAxgOA/gHQgDAdgMAMQgLALgZADQgRABgWAIQgKADgbAMQgVAIgQAAIgLAAg");
	this.shape_8.setTransform(213.6,411.4422);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7DC2D2").s().p("AADBeQgMgNAAgaQACgdgXgnQgQgdAEgWQADgXAagWQANAkAeBGQAVA8gLA1QgagIgLgIg");
	this.shape_9.setTransform(142.31,375.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7DC2D2").s().p("AgcAEQgVg7AIg1QAbADANAOQALANACAaQACARAIAWIAPAmQAKAagEASQgFATgXAVQgfhFgMgkg");
	this.shape_10.setTransform(249.3826,340.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7DC2D2").s().p("AggAWIgrgMQgYgIgOgJQAuguA+gQQAvgMBIADIgrARQggANgKAVQgKAUAIAhQAFAVgCAhQgNgqgxgQg");
	this.shape_11.setTransform(181.025,279.6867);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7DC2D2").s().p("Ag7gIQAUhdBSgsIgLAqIgRA4QgJAhgCAXQgEAmANAOQAMANAoAFIhVBDQg7g+AUhcg");
	this.shape_12.setTransform(134.3718,325.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7DC2D2").s().p("AgGAhQAIgjgDgaQgEgfgLgIQgLgIgmAAIBXhGQA8A5gWBjQgVBkhRAjQAehbAGgWg");
	this.shape_13.setTransform(257.2086,390.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7DC2D2").s().p("AhpBUQACgdAPgWQAMgSANgdIAXgxQAVgoAngTQApgUAtAJQgMAZgHAIQgMAPgSAGQgoANgXA4IgjBUQgUAugoARQgFgiABgTg");
	this.shape_14.setTransform(166.9339,306.296);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7DC2D2").s().p("AgGA+QhhgVgrhSIA2ARQAfAKAUAFQApAJAZgBQAhgCAJgNQAKgMgCgnIBIBaQgqAthBAAQgWAAgYgGg");
	this.shape_15.setTransform(163.625,419.3706);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7DC2D2").s().p("AiMgNQgCgDADgJQAEgIAEgEQAzgnBHAMQBmAQAxBRIgDAIQg2gRgbgHIgkgKQgVgFgOAAQgsABgKAMQgIAJgDAsIg+hRg");
	this.shape_16.setTransform(228.285,296.7428);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7DC2D2").s().p("ABeB7IAAgkQgChQhPghQgzgXg+giQgIgEgLgLIgVgVQAkgHAPAAQAagBAUAMQAcAPBPAlQAkARAXAmQAXAngGAmQgCANgMARIgWAcg");
	this.shape_17.setTransform(247.4204,331.124);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7DC2D2").s().p("ABVB9QgcgBgWgOQgSgLgZgNIgugWQhDghgNhGQgFgfAJgSQAKgTAegRIAEAzQAEA/A2AZQAhARBGAdQAYALANAMQASAPAHAWQgaAEgSAAIgIAAg");
	this.shape_18.setTransform(143.9492,385.1411);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7DC2D2").s().p("AhKCJQgLgCgQgNIgagWIAEgKIAaAAQBbADAhhQIAWgzQANgfALgVQAGgLANgNIAWgYIAKAFQAEAgAAAPQgBAagNAUQgKASgnBRQgUAogmAWQgdASgfAAQgKAAgLgCg");
	this.shape_19.setTransform(222.7275,409.8672);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7DC2D2").s().p("AhuDMIAAiIQAAggAHgXQAJgaAUgUQAOgOAXglQASgeAlgkQAmglAggRQAXAZgBAJQAAAJgaAVIhSBDQhDA3ACBZIAAA+IAdAEIgEARQgCAJgDAGQgSAkgkAAIgNgBg");
	this.shape_20.setTransform(248.4005,389.9245);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7DC2D2").s().p("AClBvQgYgCgPABQhgAMhLgrQhEgmg6hTIghgtIAkgbIArAzQAZAdAPAVQAnA0A6ARQAvANBKgGIADgZQAkADARASQAQASgBAmIgngEg");
	this.shape_21.setTransform(227.8029,305.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7DC2D2").s().p("AhnDAQgJgLADgKQABgIAMgJIBmhXQAygpAEg9QABgTgBgcIAAgxIgXgCQACglATgSQATgRAhAEIgBBBIABA/QADBehDBIQgWAXgiAdIg7AxQgKAIgHABIAAAAQgJAAgIgLg");
	this.shape_22.setTransform(143.4542,325.988);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7DC2D2").s().p("AByA2QgeghgUgYQgyg+hPACIhHAAIAAAbIgRgDIgPgEQgrgSAEgyIA/ABQAlAAAZgBQBogFBJBLQAYAZAgAkIA5BAIgpAdIg1g7g");
	this.shape_23.setTransform(164.2078,410.7845);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7DC2D2").s().p("AhzCKQAWgmAIgWIAUApQAxgCAzhVQA1hUgWgoIgdAJQgHggAJgWQAJgWAmguQAjAiADA4QAICrigBoQgRAKgaANIgwAXQgLghAPgjg");
	this.shape_24.setTransform(240.4113,405.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7DC2D2").s().p("ACLB1QgmgWgXgJIArgTQgRg3hIguQhIgwgwASIAGAfQgfADgQgGQgPgGg9gpQBJg3BQASQC7AqBHDIQgNAEgNAAQgUAAgVgJg");
	this.shape_25.setTransform(243.325,313.3781);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7DC2D2").s().p("Ah5BAQARhjBBhFQA6g+BmgmQAKAhgOAhQgIAUgYAnIgTgqQg8AWgpBFQgqBEANA2IAdgJQAHAhgKAZQgKAZglAnQgyhBAOhMg");
	this.shape_26.setTransform(151.2148,310.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7DC2D2").s().p("AiIADQgRgVgUgkIgig/QAhgMAkAOIA/AdIgqAWQASA4BJAtQBIAwAwgRIgKgfQAhgMAhAVIA6AlQgmAkg3AEIgWABQiFAAhgh5g");
	this.shape_27.setTransform(148.225,402.7175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7DC2D2").s().p("AhXCAQgThHAFhDQAFg6A0gsQAXAVADAMQACANgOAZQggA5AgBDQA6g/APgRQADgDgBgHQAAgIgDgFIhWh9IghAcQgHgYALgqQALgrAVggIAHAVQAOAwAfAzQAUAeAsA5QAbAjABAVQABAXgbAiQgvA7gYAYQgtAsAIA3QAAADgCAMQglhGgRg9g");
	this.shape_28.setTransform(129.7244,359.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7DC2D2").s().p("AAFBnQhCgDgug5QAUgSAMgEQASgFAUAOQAbATAhgCQAagBAogPQg5g2gWgTQgDgDgIABQgIABgGADIhvBKQgVAOAVAPIATASQgrgBgkgJQglgJgjgUIAjgKQATgGALgGQBLgsBHgxQAngcARgBQAUgBAmAYQAvAeAXAcQAaAfAbAPQAfAQAmgDIghAQQg7AagwALQgxAMguAAIgTAAg");
	this.shape_29.setTransform(196.725,424.2738);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7DC2D2").s().p("AAfDgQgGgUgHgLQg8hngrg5QghgrAfgtQAthAAegZQAagXALgYQAMgagEggIACgKQAjBDAQA4QAUBDgDBAQgDBDg5AuQgTgSgEgRQgDgSAOgXQAggxghhHQg4A9gTAWQgCACAAAFQABAGACAEIBLBvQAPAWARgVIAFgIQAEgEAEgCQAGBQgoBGIgLgkg");
	this.shape_30.setTransform(262.1442,357.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7DC2D2").s().p("AAXD+QgigQgxgkQgegVgQgGQgagKgbAMQgFACgKgIQgKgHgEgIQgGgMAJgVQACgEAIgGIATgOIgYgHQgLgDgDACQgHAGgIANIgPAVQgUgKgJgUQgJgWAIgbQAQg1AYgrQAagtgHgwQgGgfAHgKQAHgLAegFQAagFA0gHQA0gGAZgFQBZgSA4gUQAbgKAbAHQAUAEAcAPQAQAJgDAQQgDANgNANQgoAoghAYQhhBGhaAaQg2APgKARQgMAVAPA9QAKArArAkQApAjArAFQAGABAMgKIAYgbIAIADIgIAmIApAKQgaAdgfAJQgMAEgNAAQgSAAgSgIgAgGibQgOABgIAEQgFACgEAJIgHAQIARAFQAKADAFgCQAIgDAJgKIAPgQIgEgLIgWACg");
	this.shape_31.setTransform(205.8182,294.2311);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7DC2D2").s().p("AiiMSQjTgqi6ijQiYiGhCjBQg2ieAHiSQAcoNHsjZQAOgGAGgBQALgBAFAMQAGAOgIAIQgEAEgQAGQlBCFh6E5QiBFKCiE3QBeC2CWBpQCXBqDKAcQE1AqD8i4QD8i4A6k1QAvj1hsjlQhrjmjch7IgMgFQgGgEgDgEQgEgFgEgJIgFgPIAQgEQAJgCAFACQA/AhAhAYQD/C4BGEnQAJAnAHA5IAMBgQAAEFiXDXQiYDYjyBTQiZA1iOAAQhLAAhIgOg");
	this.shape_32.setTransform(196.7543,360.5799);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D53D85").s().p("AjYDyQhngHhegNIhJgMQhHgDhmgXQjOgtiihfQAjgqBLgxQCXhjDMgpQDLgpCMgNQBGgHAdABIBQgDQBkgDBmAEQFIAODbBSQDeBSBHBOQAXAaACATQACARgKgEQgdAahaAhQi0BDkvAmQi2AXjBAAQh+AAiEgKg");
	this.shape_33.setTransform(196.2602,218.661);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1D1D1C").p("AwGCNQAzhGCZhHQExiPH9gKQIAgJE/CaQBoAxBAA7QA0AvgLAH");
	this.shape_34.setTransform(196.6111,208.8724);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#020203").p("AyZxZIALA3QAHBJgSBVQgSBVgqAdQgVAPgRgDIgcAhQgiAqghAyQhpCfgzCsQiiIjG5HQIBbBaQBqBgBJAcQAOAGBvAyQBnAuBPAdQD+BdCvgVIIhALIEWhDQErhRBuhHQB5hQAYgQQBahBBEhFQC4i9BQklQARhwgHiUQgMkqhxi3Qh2ieiPi8QgIglgEguQgJhaAQgrQh9BJjXBFQmuCKnCgVQnEgWmCh5Qh5glhjgsg");
	this.shape_35.setTransform(195.9639,345.7825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-0.7,132.6,1.1,-181.2).s().p("AjxRSQivAWj+hdQhPgdhnguIh9g4QhJgchqhgIhbhaQm5nQCiokQAzirBpifQAhgyAigrIAcggQARACAVgOQAqgdAShVQAShWgHhIIgLg3IBMAjQBjAsB5AlQGCB5HEAWQHCAVGuiKQDXhFB9hJQgQArAJBaQAEAuAIAlQCPC8B2CdQBxC4AMEqQAHCUgRBwQhQEki4C9QhEBGhaBAIiRBhQhuBHkrBRIkWBCg");
	this.shape_36.setTransform(195.9639,346.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#1D1D1C").p("AQyiXIARAUQARAaAAAcQABBYimBPQi4BWmHAtQieASiBADQiAACgpgOQiWgFiygTQlkgliNhCQi1hVgNhcQgOhnDQhA");
	this.shape_37.setTransform(197.0062,219.98);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1D1D1C").p("AgzHeQi/gHjtgkQnahHjoiRQiAhRgJhnQgIhVBLhcQA9hMBgg5QBXg0AtADQAWACBzgpQCRg0CMgaQH0hgLeB/IBTAVQBlAcBZAkQEdBxA9CPQA9COi8CIQg6ArhNAlIhAAcQiZAzjNAtQmbBbkJgag");
	this.shape_38.setTransform(196.7644,212.4825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4D3319").s().p("AgzHeQi/gHjtgkQnahHjoiRQiAhRgJhnQgIhVBLhcQA9hMBgg5QBXg0AtADQAWACBzgpQCRg0CMgaQH0hgLeB/IBTAVQBlAcBZAkQEdBxA9CPQA9COi8CIQg6ArhNAlIhAAcQiZAzjNAtQk+BHjoAAQhDAAg7gGg");
	this.shape_39.setTransform(196.7644,212.4825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#1D1D1C").p("AmDhhQAHB/BkB+QAyA/AwAmIAMAYQANAcADAWQAMBFhVgXQhUgXgDA8QgBAeAPAjQAjAhAzALQBoAVBWhuQAYghACg7QAEh2hwiFQhAhMAUhfQAShYBLg9QBMg+BYAKQBjAKBGBoIAOAWQATgMAWgVQArgsAOgxQh9h7g+hJIgMgPQgngxiPAHQiEAGgwAkQhQA8g1BHQhYB6AHCEg");
	this.shape_40.setTransform(39.3803,282.8867);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4D3319").s().p("AjVILQg0gLgighQgQgjACgeQACg8BVAXQBUAXgLhFQgEgWgMgcIgMgYQgxgmgyg/Qhkh+gHh/QgHiEBZh6QA0hHBQg8QAwgkCFgGQCOgHAnAxIAMAPQA/BJB9B7QgOAxgsAsQgWAVgTAMIgOgWQhGhohjgKQhXgKhMA+QhLA9gSBYQgUBfBABMQBvCFgEB2QgCA7gYAhQhIBchUAAQgRAAgQgDg");
	this.shape_41.setTransform(39.3493,282.8867);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#1D1D1C").p("AkbigIAkgmQAvgqAxgRQCcg3CCDWIAGAbQAFAjgIAoQgYCBiLCFQgVAUAEAnQADAmAaApQA9BiBzAYQBkAUAcg1QAOgagHgfQgBgUgQgPQgggfhKAVQgSgRgHgbQgOg1A4gyQB4hpAmhbQBIirh6jeQgcgohCgqQiChWi2gSQgrAVg4AtQhvBYg8B0IAMAkQAXApA6AYg");
	this.shape_42.setTransform(351.8036,282.1054);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D3319").s().p("ACjIOQhzgYg9hiQgagpgDgmQgEgnAVgUQCLiFAYiBQAIgogFgjIgGgbQiCjWicA3QgxARgvAqIgkAmQg6gYgXgpIgMgkQA8h0BvhYQA4gtArgVQC2ASCCBWQBCAqAcAoQB6DehICrQgmBbh4BpQg4AyAOA1QAHAbASARQBKgVAgAfQAQAPABAUQAHAfgOAaQgUAng6AAQgWAAgcgGg");
	this.shape_43.setTransform(351.8244,282.1109);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7BC2DF").s().p("AgCAJQgOgCgFgOQAOgHALAIQAHAFALAMQgRAAgHgCg");
	this.shape_44.setTransform(205.25,101.4793);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7BC2DF").s().p("AgDgIQAIgGAOACQgCANgGAEQgHAFgWAEQAHgQAIgGg");
	this.shape_45.setTransform(198.55,102.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7BC2DF").s().p("AgCgXQAKAJABAHQABAHgHAYQgUgYAPgXg");
	this.shape_46.setTransform(202.1142,103.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7BC2DF").s().p("AgTAOQADgOAGgEQADgCAbgIQgQAXgEAEQgDACgFAAIgLgBg");
	this.shape_47.setTransform(204.975,97.6818);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7BC2DF").s().p("AgJAIQAAgDAIgcQACAJAIAOQAEANgKAKQgMgJAAgGg");
	this.shape_48.setTransform(201.3925,96.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7BC2DF").s().p("AgCAKQgKgFgJgQQAIACARABQANAEAFAOQgHACgGAAQgGAAgFgCg");
	this.shape_49.setTransform(198.2,98.3941);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7BC2DF").s().p("AgEAFIgEgFIAIgGQAAAAAAAAQAAAAABAAQAAAAABABQABAAAAABIAGAEIgKAHQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_50.setTransform(175.875,1.445);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7BC2DF").s().p("AgBAJQgDAAgDgEIgFgFQAJgJACAAQABAAAEAEIAJAGIgKAGIgDADIgBgBg");
	this.shape_51.setTransform(200.75,33.3542);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7BC2DF").s().p("AgfAQQAJgUARgHQAOgGAXADQgKAegrAAIgKAAg");
	this.shape_52.setTransform(175.275,14.8384);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7BC2DF").s().p("AgKAKQgHgOADgaQATAKAGAOQAHANgDAZQgSgHgHgPg");
	this.shape_53.setTransform(168.2024,12.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7BC2DF").s().p("AALggQAJAQgGAQQgGARgTAQQgPgnAlgag");
	this.shape_54.setTransform(172.339,12.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7BC2DF").s().p("AgfAQQAJgiA2ADQgJATgNAHQgLAFgWAAIgIAAg");
	this.shape_55.setTransform(165.625,19.341);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7BC2DF").s().p("AAAAPQgOgGgSgUQAUgJARAHQAOAHAOARQgLAGgKAAQgGAAgGgCg");
	this.shape_56.setTransform(175.525,19.0095);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7BC2DF").s().p("AgDAOQgPgGgOgTQAmgOAbAlQgMAEgKAAQgIAAgGgCg");
	this.shape_57.setTransform(165.425,15.2343);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7BC2DF").s().p("AALghQAKAVgIARQgGANgSAQQgPgpAlgag");
	this.shape_58.setTransform(168.6326,22.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7BC2DF").s().p("AgOgfQATAKAHAPQAHANgEAZQgmgRAJgug");
	this.shape_59.setTransform(172.7112,21.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7BC2DF").s().p("AgMAcIgBgDIASgGQgHgPgPADIgXAAIgBgGIAUgGIgSgWQAJgEAHAFIAMAJIAGgTIAFAAIABAKQACAHgBADQgCAPAPAIIAFgTIAHABIAAAMQgBAJACAFQABAFAEAGIAJALg");
	this.shape_60.setTransform(161.375,8.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7BC2DF").s().p("AgCANQAAgPgOgEIgEASIgEAAIgEgMQABgKgCgGQgCgIgHgFIgBgEIAAgGIAIAAQAGAIAKABIARgBIAKACIABAEIgRAHQAFANANgBIAZgBIABAGIgTAGIARAWIgEAEIgYgNIgGAWQgFgGgBgVg");
	this.shape_61.setTransform(179.675,25.825);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7BC2DF").s().p("AgMAaQgJgKgFgDQgIgFgKABIgDgCQgBgBgBAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAABQAJAAAHgFIALgMIAMgHIgEAOIgFAGQAQAFAKgNIAPgQIAFADIgIATIAbAEIAAAGIgaAFIAKARIgEAEIgPgKQgMgOgPAFIAKARIgCADQgHgCgCgCg");
	this.shape_62.setTransform(182.6458,16.45);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#7BC2DF").s().p("AAAAzIgFgaIgRALQgEgGACgFQABgCAFgFQARgNgHgPIgRAKIgEgEIAKgKIAIgKQADgFACgIIADgOIAhAyIgWgJQgEANALAJIAKAIQAEAFAAAJIgTgKIgFAcg");
	this.shape_63.setTransform(171,29.175);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7BC2DF").s().p("AgEAWIgWAQIgEgFIAOgWIgWgHQAGgFAUgBQAPAAAEgOIgRgEIAAgFIAPgCIANgBQAHgCAEgGIAEgCIAGgBIAAAGQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgGAGgBAIIABAPQAAABgCAMIgEAAIgGgSQgPAHADAQIAAAWIgGAAg");
	this.shape_64.setTransform(161.725,26.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7BC2DF").s().p("AggAbIAJgUIgUgBIgHgFIAFgEIAVgDIgKgTIADgEIAQAMQALAOAOgGIgKgUIAyAbIABADQgNgBgMAJQgMANgIAFIgDgCIAIgSQgOgEgJALIgQAQg");
	this.shape_65.setTransform(158.4,17.775);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7BC2DF").s().p("AgBArQABgIgFgHIgMgKIgJgKIAEgFIARAJQAEgOgMgJIgQgQIAEgFIATAKIABgVIAFgGIAFAGIADAUIASgMQADAIgDAEQgBADgGAFQgPAMAHAOIAQgKIADADIgDAHQgDAEgCACQgOALACAOIgGAIQgGgFABgCg");
	this.shape_66.setTransform(169.75,5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#7BC2DF").s().p("AgmAhQAIgHABgKIAAgTIACgHIADgBIAHAQQAOgFgCgMIAAgaIAFgBIAGAUIAXgRIAFAGIgQAVIAVAFQgDAGgGACIgKAAQgSgCgHAPIASAFIABAEQgJADgEAAQgTgBgKALQgBABgIAAQgCgGABgBg");
	this.shape_67.setTransform(179.03,7.875);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#7BC2DF").s().p("AgNBUQgCgFABgEIAGgbIgTAMIgBgCIAKgIQAGgFADgFQACgEACgJIACgQIgMAKIgBAAIAHgPQgiAFgEAeIgDgDIAEgPIgCgDIgRALQgFAEgCgCQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgCAGgDIAXgEIgQgMIABgDQAMAKAMgCQAKgBAOgJIgLgDIAAgCIALgCQgPgWgdAFIATgGIgTgJQgEgCgBgEQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIADgCQADgBAEAEIAOAPIAAgVQACAdAcAMIgDgOIACAAIAHALQAMgdgZgXIAEgCIAMAPIADAAIAAgUQABgFADgEIADAAIADACQABAEgCAFIgFARIADABIAPgKIACACIgLAJQgGAFgDAFQgCAEgBAIIgCAOIADACIAFgLIAEADIgGANQAfgDAJgfIgEAWIASgLIAKgEIADAGQgHAFgDABIgWAGIAVAKQghgLgUARIAOAEIgLAEQAPAVAdgFIgSAGIASAKIAIAHIgFAGIgIgGIgQgPIAAAWQgDgRgFgJQgIgMgPgEIADAQIgKgQIgCARQgCAJACAFQABAEAEAIQAGAIABAFIgMgPIgEABIAAAYQAAAFgBAEQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_68.setTransform(184.5719,45.1917);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7BC2DF").s().p("AAWBYQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBQgBgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAHgGgBgHQgBgGgGgIIgDACIgGAJIgGgDIAGgJQAGgIgEgIQgFgHgBgEIgTABQgGAGgCAFQgEAHAHAJQAAAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAIgCAFIgLgJIgJANIAFAKIABAGQgCAEgDAAIgMABQgIABgCgCQgDgDAAgHIAAgNQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAABAAIADgBQALAAADgCQADgCAGgMIgIABIgHgEIAHgFQANgBADgCQADgCAGgKIgJgSIgOgCQgJABgDAKIgEACIgEACIAAgJIAEgFIgNgCQgIABgDAHQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgCAAQgEABgBgCQgMgLAAgEQABgDAOgJIAEAAQADABACABQAGAJADABQADACAKgBIgDgGIABgIIAIADQABALAJADQAFAAAJAAIAOgOIgGgMQgDgDgKgEIgKgEIAAgFIALAAIADAAQABgMgKgEIgRgEIAHgcIAYALQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgGAGACAGQAAAEAFAKIAFgHIAHgCIABAHQgJAIADAIQABAGAHALQAFgEACAAQAEgBADAIIALgPQAEgJgHgJIACgIIAHAEQABACAAAGQAIgIACgDQADgHgGgHQgCgEABgDQABgEAHABQACABAFgEQAPgFAAAQIABAPIgRACQgKADgBAMIAGgBIAHAEQgFAFgCAAQgKgEgGAHIgIALIAIASIAOABQAIgBAEgJIAJgCIgBAIIgEADQAKAEAEgBQAHgBAEgGQAAgBAAAAQAAAAABAAQAAgBABAAQABAAABAAQAEAAABABIANARIgUAOQgGgKgEgDQgIgHgKAEIAEAHIgBAHIgEgBIgEgCQgIgLgDgCQgEgCgNABQADAMgNgBQAEAGAEALQAFAJAMgCQAAgBAAAAQAAABABAAQAAAAAAAAQABABAAAAIADAEIgHAEIgHgCQADAJACAEQADAFAJAAQAFgBACADQADADgFAFIgBAAIgHATIgTgIg");
	this.shape_69.setTransform(219.35,52.45);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7BC2DF").s().p("Ag7B2QAAgCADgDIAEgGIAFgJIgWgDQAEgIAPgEQAOgDACgLIgXAAIgCgFIAIgEQAFgDADAAQAXgCAEgVIAGgQQgKAGgcAWQgXASgRAFQALgOAagRQAdgTAKgLQgYgBgMABQgUACgGAYIgFgDIACgSQgKgEgHAJIgFAJIgJAGIAAgJIACgKIgQAEQgFABgMgBIgBgJQAKgDAIAAIAVABIgKgTQAIgCAIAMQAIAJAJgEIgHgRIAEgEQAKAJABADQAHALANgBIAjgEIABgDIgfgOIg3gXQgDgCgCgJQATAEAbAPIAsAXQgDgPgKgKQgKgJgNgBIgHgDIgHgDIAOgGIAEgBQgDgMgRgCIgOgFIABgFIARgCIgKgLIgEgCQgFgHgCgHIAFgGQAJAGAEAGQADAEAEAOIAKgNIAEAAIgBASQgCAOAKADIAIgNIAEAGQAAABABABQAAABAAAAQAAABAAAAQAAABAAAAQgGAPAIAOIAQAYIADAAIABgQQAAgJgBgHIgIgoQgBgLAAgJIAEgLIAGAFIADAEIACAzIACAuIAJgRQAFgJABgIQABgHgBgLIgCgTIALAJQALgFgGgMQgEgGAAgDIAAgKIAIAFIAIAJIADgRQABgEAIgMIAFADQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQgCAGgEAKIgKAMIASACQgCAGgPAEQgMAEACAMIAMAEIgFAFQgDADgDABQgMACgEAMIgGAPQgEAJgCAHIBYhEIAEAFIgJALIhBAtQgHAGgEAGIAigEQADgBADgEIAFgGIAMgJIABASQAHADAHgIQAJgLADgCIADARIAOgFQAJgEADAAQADABAFAFQgDAGgCABIgHABIgYACIAFALQgGACgLgJQgKgHgIAHIAGANIgDACIgNgJQgHgFgGgBQgKgCgVAGIBfApIgCAGIgPgCIhUgpQAIAfAdABIANAFIABAEIgWAHQAEAKANABQAQAAAGAFIgXAJIAKALIAGADIAFAPQABABgFACQgKgIgBgDIgKgWIgLAWQgEgHACgQQACgOgHgIIgKAXIgFgBIAAgJIABgJQAFgNgGgLQgCgEgOgPQgCAQAEAhQAEAggDAQIgFACIgEgOIgBhCQAAgIgEgHIgNAfQgCAFAHAMIADAPIgFACIgKgPIgEgBIgBANQAAAFAFALIgBAMIgIgIIgGgKIgFAQIgEAMIgEACIgEACQgEgJABgBg");
	this.shape_70.setTransform(187.125,138.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7BC2DF").s().p("AhNCEQAAgDACgDQADgDADgBQAIgEAFgIQAEgGAFgNIgbALQgCABgLAAQAGgIADgCQAKgGAKgDQAOgDAHgNQAEgFAIgVIg1ARIgCgDIAhgsIgcABQgOADgIAMQgEAGgOANIgKADIABgGIADgFIAXgWQgagCgJAJQgMAMgNgKIgRgJQARgPAEgCQAIgDAHAEQAOAIAWgGIgagTIgDgIIAJAAQAPAJAIAIQAKAIAOABQAIAAAUgDIgoglIABgDIA1AGQgFgTgRgKQgIgFgYgFIgJgEIgHgFIASgBIATAFIADgEIgLgLQgHgHgFgCQgPgFABgOIAAgVIAbAKQACACACAEQABAFAAADQgBAJAFAIQADAFAKAKIADgdIAGgLIADAMQAAARgBAIQgEANAGAMQAFAIAMAPIAMg3IADAAIAVA0QALgSACgJQADgPgGgOQgDgIgDgRQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAIACgEIAGAFIAJAdIAEABIAFgOQACgIAAgEQgDgKADgHQADgFAJgFIAQgJIAEAeQAAADgDACQgCADgCABQgJADgFAJQgEAFgFAOIAkgPIAEACQgDAIgCACQgUAKgIADQgNADgHANQgGAQgFAIIA2gRIADACIgjAuQAIgBAPgBQANgBAIgHIAggfQAFAEgBACQAAADgIAIQgLAMgEAFIARAAQAJAAAFgHQAKgNANAKQADADAPAIIgXASQgCABgDAAIgGgCQgIgGgKAAQgGAAgPACIAZARIAFALIgLgCQgQgLgEgDQgKgKgPAAQgGAAgWACIAqAmIgCADIg1gHIgCADQAGAGAIAOQAHAKANABQAKABAWAIIAFAGQgGADgDgBIgdgHIgCAEIAKAMQAGAGAFACQASAEgBATIAAASIgegMQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBgBIAAgFQACgKgFgKIgNgSIgEAhQABABgGAIIgFgLQAAgOADgOQADgNgHgMIgQgUIgMA2IgDABIgVg1QgDAIgIAOQgGANAFALQAFARADAPIAAAGIgDAFIgGgIIgJgeIgKARQgDAJAEAJQAEAMgLAFIgWAMQgEgYAAgFgAAHA/QAHgZgBgHQAAgHgMgJQgOAYAUAYgAgiANQgIAGgHARQAXgEAGgEQAHgFABgOIgGAAQgKAAgGAEgAANAHQAFAPAOADQAJACARAAQgLgNgHgFQgHgFgHAAQgGAAgHADgAglgFQALAFAOgEQgFgQgNgDQgSgBgIgCQAJAQAKAFgAAWgaQgGADgDAPQAOADAEgDQAGgEAPgYQgbAHgDADgAgMgeQAAAGAMAKQAKgLgFgNQgGgPgDgIQgIAcAAADg");
	this.shape_71.setTransform(201.7,99.925);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgOASIgRgFIAHgPQAEgJAEgCQAJgEAMgBIAYgBIADAKIgPAPQgJAKgIADIgEABQgEAAgGgCg");
	this.shape_72.setTransform(205.125,279.4771);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7DC2D2").s().p("AgJAxIgQhBIAqghIAJADIgbBgg");
	this.shape_73.setTransform(229.225,281.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#7DC2D2").s().p("AhxAZIAegFQAogCAdgIQAjgKAagUQAggaAjAgQgxAZg/ALQgoAHhKAEg");
	this.shape_74.setTransform(209.825,267.5672);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#7DC2D2").s().p("AgJhLQAQASAHAOQAJASgBAUIAAALQAGAegHAKQgHALglASg");
	this.shape_75.setTransform(251.796,365.15);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#7DC2D2").s().p("Ag3AaQAFgaAKgKQAMgNAZACQAIABAPgDIAZgGIAJAaQAEAKgEAGQgDAGgMADQgfAHgPABIgMAAQgTAAgRgEg");
	this.shape_76.setTransform(173.425,304.8985);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#7DC2D2").s().p("AguAYIgZgTQAagZAsgJQAqgIAfANQgMAbgeANQgFADgyAOIgCAAQgHAAgMgJg");
	this.shape_77.setTransform(173.125,287.2474);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7DC2D2").s().p("AgXALQgBgCAAgGQABgFgBgCQgLgaAOgSQAIgMAbgNQAUAhgFAoQgDAdgUAtg");
	this.shape_78.setTransform(141.2866,349.35);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7DC2D2").s().p("AgeAdQgJgBgNgNQgPgQgJgIQAmgVAoACQAeACAtAQQgUAYgfAJQgSAGgaAAIgMAAg");
	this.shape_79.setTransform(188.325,412.0999);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7DC2D2").s().p("AhBArQgVgEgWgWQBagtB/gPQgCAdgMAMQgMALgYADQgRABgWAIIgmAPQgUAIgRAAIgKgBg");
	this.shape_80.setTransform(214.1,410.4172);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7DC2D2").s().p("AADBeQgMgNAAgZQABgcgWgpQgQgcAEgXQADgXAagWIArBqQAVA8gLA1QgagHgLgJg");
	this.shape_81.setTransform(142.86,374.85);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7DC2D2").s().p("AgcAFQgVg8AIg1QAbADANAOQALANACAaQACARAIAWIAPAmQAKAagEASQgFASgXAWQgfhFgMgjg");
	this.shape_82.setTransform(249.9224,339.275);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#7DC2D2").s().p("AghAVQhHgVgJgIQAugtA+gQQAvgMBIADIgrAQQggAOgKAVQgKAUAIAhQAFAWgCAgQgNgqgygRg");
	this.shape_83.setTransform(181.575,278.6867);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#7DC2D2").s().p("Ag7gHQAUhdBSguIgLArIgRA4QgJAigDAWQgDAmANAOQAMANAoAFIhVBEQg7g/AUhbg");
	this.shape_84.setTransform(134.9218,324.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#7DC2D2").s().p("AgXBYQALghAGgWQAIgkgDgZQgEgfgLgIQgLgIgmAAIBXhGQA8A5gWBjQgVBjhRAkIATg6g");
	this.shape_85.setTransform(257.7586,389.225);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7DC2D2").s().p("AhpBTQACgcAPgXQAMgRANgdIAXgyQAVgnAngTQApgUAtAJQgNAZgGAHQgMAPgSAHQgoANgXA4IgjBUQgTAtgpASQgFgiABgUg");
	this.shape_86.setTransform(167.4589,305.296);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7DC2D2").s().p("AgGA/QhhgVgrhSIA2ARIAzAOQAqAJAYAAQAhgCAJgNQAJgNgBgnIBIBaQgqAthBAAQgWAAgYgFg");
	this.shape_87.setTransform(164.175,418.3456);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#7DC2D2").s().p("AiMgNQgCgDADgJQAEgJAEgDQAygnBIAMQBlAPAyBRIgDAJIhSgYIgjgKQgVgFgOAAQgsABgKAMQgIAIgDAtQg1hEgJgNg");
	this.shape_88.setTransform(228.835,295.7178);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7DC2D2").s().p("ABeB7IAAgkQgChPhPgiQg0gXg+giQgHgFgLgKIgVgVQAlgHAOAAQAZgBAVALQAWANAeAOIA2AaQAlARAXAmQAXAmgGAmQgCANgNARIgVAdg");
	this.shape_89.setTransform(247.9704,330.1239);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7DC2D2").s().p("ABUB9QgbgCgXgOQgRgKgZgNIgugWQhDghgNhGQgFgfAJgSQAJgTAfgRIAEAzQAEA+A1AaQAhAQBGAeQAYALAOAMQARAPAIAWQgbAEgTAAIgHAAg");
	this.shape_90.setTransform(144.4992,384.1327);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7DC2D2").s().p("AhKCJQgLgCgQgNQgRgPgJgHIAEgKIAaABQBbABAhhOQAfhLAPgcQAGgLANgOIAWgYIAKAFQAEAggBAPQgBAagMAUQgPAbgiBIQgUAogmAWQgdASgfAAQgKAAgLgCg");
	this.shape_91.setTransform(223.2528,408.8172);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7DC2D2").s().p("AhtDNIAAiJQgBhCAkgjQANgNAYgmQASgdAlglQAnglAfgRQAXAagBAJQAAAJgaAUIhSBDQhDA4ADBZIAAA9IAcAFIgEAQIgFAPQgSAkgkAAIgMAAg");
	this.shape_92.setTransform(248.9242,388.899);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#7DC2D2").s().p("AClBvQgXgDgQADQhfALhMgrQhEgmg6hSIggguIAjgaIArAxQAZAeAQAWQAmAzA7ASQAvANBJgHIAEgYQAkACAQATQAQARgBAlIgngDg");
	this.shape_93.setTransform(228.3279,304.45);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7DC2D2").s().p("AhnDBQgIgMACgJQACgIALgKQBEg6AigdQAzgqADg8IABgvIgBgxIgXgCQACglAUgSQATgRAgAEIAABBQgBAmABAaQAEBdhEBIQgVAXgiAeIg8AxQgJAIgHAAIgBAAQgJAAgIgKg");
	this.shape_94.setTransform(143.9802,324.938);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7DC2D2").s().p("AByA2QgegigUgYQgxg8hQAAIhHAAIAAAcQgXgDgKgFQgqgSAEgxIA/ABIA+gBQBogFBJBLQAmAoBLBVIgpAcIg1g6g");
	this.shape_95.setTransform(164.7535,409.7595);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7DC2D2").s().p("AhyCKQAVgnAIgVIAUAoQAxgBA0hWQA0hTgWgoIgcAJQgIggAJgWQAJgWAnguQAiAhADA5QAICsifBmQgRALgbANIgvAXQgLghAPgjg");
	this.shape_96.setTransform(240.9387,404.725);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#7DC2D2").s().p("ACLB1QgmgWgXgJIArgTQgRg3hIguQhIgxgwASIAHAgQggADgPgGQgQgGg9gpQBIg4BRASQC7AqBHDJQgNAEgNAAQgUAAgVgJg");
	this.shape_97.setTransform(243.85,312.3546);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7DC2D2").s().p("Ah6BAQAShjBAhFQA7g+BmgmQAKAggOAiQgJAUgYAnIgSgqQg8AWgpBFQgqBFANA1IAdgJQAHAhgKAZQgKAZglAnQgxhBAMhMg");
	this.shape_98.setTransform(151.7573,309.575);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#7DC2D2").s().p("AiIADQgRgVgUgkQgWgqgNgVQAigMAkAOIA/AcIgrAXQAUA4BIAtQBIAvAxgQIgLgfQAhgMAiAUIA5AlQglAlg4AEIgVABQiFAAhhh5g");
	this.shape_99.setTransform(148.75,401.7174);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7DC2D2").s().p("AhWCBQgUhIAFhDQAEg6A2gsQAWAWADAMQADAMgOAZQggA5AgBDIBJhQQACgDAAgIQgBgIgDgEIhWh9IghAcQgGgYAKgqQALgrAVggIAIAWQANAvAgAzQASAdAuA7QAbAiAAAVQABAXgbAiQgtA6gaAYQgtAuAIA2QABADgDAMQglhGgQg8g");
	this.shape_100.setTransform(130.2494,358.55);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#7DC2D2").s().p("AAFBnQhDgEgtg4QAUgSAMgEQASgFAUAOQAbASAhgBQAagCAogOIhPhJQgEgDgHABQgJABgFADQglAYhKAyQgVAOAVAPIATASQgsgBgjgJQgmgJgigUIAjgKQATgGAKgGQBUgyA/gsQAngbARgBQAUgCAmAZQAuAdAYAdQAaAfAaAPQAfAQAngDIghAQQg7AZgwAMQgyAMgwAAIgQAAg");
	this.shape_101.setTransform(197.275,423.2646);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7DC2D2").s().p("AAfDgQgGgUgHgLQg8hngrg5QghgrAfgtQAYgiALgNQAVgaATgQQAZgXALgYQANgagEgfIACgLQAjBCAQA5QAUBDgDBAQgDBDg6AuQgSgSgEgRQgDgTAOgWQAfgxgghGIhMBSQgCADABAEQABAGACAEQAeAsAtBCQAOAWARgUIAGgHQAEgFAEgCQAGBPgoBHIgLgkg");
	this.shape_102.setTransform(262.6817,356.15);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7DC2D2").s().p("AAXD+QglgRgugjQgegVgQgGQgagJgbALQgFACgKgIQgKgHgEgIQgGgMAJgVQACgEAIgGIATgNIgYgIQgLgDgDADQgHAGgIAMIgPAWQgUgKgJgVQgJgWAIgaQARg3AXgpQAagugIgvQgFgfAHgLQAHgLAegFQAYgFA2gHQAzgGAagFQBZgSA4gUQAagKAcAHQATAEAdAPQAQAJgDAQQgDANgOAOQgpApgfAXQhgBFhbAaQg2APgKARQgMAVAPA9QAKArArAkQApAkArAEQAIABAJgKIAZgaIAIACIgIAnIApAJQgaAdgfAJQgMAEgNAAQgSAAgSgIgAgGibQgOABgIAEQgFACgEAJIgHAQIARAFQAKAEAFgDQAIgDAIgKIAQgQIgEgKIgWABg");
	this.shape_103.setTransform(206.3682,293.1932);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7DC2D2").s().p("AiiMSQjTgqi6ijQiYiGhCjBQg2ifAIiRQAcoMHrjaQAPgHAFAAQALgBAGAMQAGAOgJAIQgDADgRAHQlBCEh6E6QiBFKCiE3QBfC1CWBqQCWBqDLAcQE0AqD8i4QD8i4A7k1QAvj1hsjlQhsjmjbh7IgMgFQgHgEgDgEQgEgFgDgJIgGgQQAFAAALgEQAKgCAEADQBAAhAgAYQD/C4BGEnQAJAmAHA5IANBhQgBEFiXDXQiXDXjzBUQiZA1iPAAQhKAAhIgOg");
	this.shape_104.setTransform(197.2984,359.577);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D53D85").s().p("AjYDzQhngIhegNIhJgLQhHgEhmgWQjOgtiihgQAjgqBLgwQCXhkDMgpQDLgoCMgOQBGgHAdABIBQgDQBkgDBmAEQFIAPDbBRQDeBSBHBOQAXAaACATQACARgKgEQgdAahaAiQi0BCkvAmQi4AXjCAAQh9AAiCgJg");
	this.shape_105.setTransform(196.8102,217.6202);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#1D1D1C").p("AwGCNQAzhGCZhHQExiPH9gKQIAgJE/CaQBoAxBAA7QA0AwgLAH");
	this.shape_106.setTransform(197.1611,207.8474);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#020203").p("AyZxZIALA3QAHBJgSBVQgSBUgqAeQgVAPgRgDIgcAhQgiAqghAyQhpCfgzCsQiiIjG5HQIBbBaQBqBgBJAcQAOAFBvAyQBnAvBOAdQD+BdCwgWIIhAMIEWhDQErhRBuhIQB5hPAYgRQBahABEhGQC4i9BQkkQARhxgHiUQgMkqhxi3Qh2idiPi9QgIgkgEguQgJhaAQgrQh9BJjXBFQmuCKnCgWQnEgVmCh5Qh5gmhjgrg");
	this.shape_107.setTransform(196.5139,344.7825);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#A98152","#77512C","#623E1B","#3F2A1B"],[0,0.141,0.373,0.718],-0.7,132.6,1.1,-181.3).s().p("AjxRSQiwAWj+hdQhOgehnguQhvgygOgGQhJgchqhfIhbhaQm5nQCiokQAzirBpifQAhgyAigrIAcggQARACAVgPQAqgdAShVQAShUgHhJIgLg3IBMAjQBjArB5AmQGCB4HEAWQHCAWGuiKQDXhFB9hJQgQAqAJBbQAEAuAIAkQCPC8B2CeQBxC3AMEqQAHCUgRBxQhQEki4C9QhEBGhaBAIiRBgQhuBHkrBSIkWBCg");
	this.shape_108.setTransform(196.5139,345.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#1D1D1C").p("AgzHeQi/gHjtgjQnahHjoiSQiAhQgJhoQgIhVBLhcQA9hMBgg5QBXg0AtADQAWACBzgpQCRg0CMgaQH0hgLeB/IBTAVQBlAdBZAjQEdBxA9CPQA9COi8CJQg6AqhNAlIhAAcQiZAzjNAtQmbBbkJgag");
	this.shape_109.setTransform(197.3144,211.4371);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4D3319").s().p("AgzHeQi/gHjtgjQnahHjoiSQiAhQgJhoQgIhVBLhcQA9hMBgg5QBXg0AtADQAWACBzgpQCRg0CMgaQH0hgLeB/IBTAVQBlAdBZAjQEdBxA9CPQA9COi8CJQg6AqhNAlIhAAcQiZAzjNAtQk+BHjoAAQhDAAg7gGg");
	this.shape_110.setTransform(197.3144,211.4371);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#1D1D1C").p("AmDhhQAHCABkB+QAyA/AwAlIAMAYQANAcADAWQAMBGhVgXQhUgXgDA8QgBAdAPAjQAjAhAzALQBoAWBWhvQAYggACg7QAEh2hwiGQhAhMAUhfQAShYBLg8QBMg+BXAJQBkALBGBnIAOAXQATgMAWgWQArgsAOgxQh9h6g+hKIgNgPQgngxiOAHQiEAGgwAkQhQA7g1BJQhYB5AHCEg");
	this.shape_111.setTransform(39.9306,281.8439);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#4D3319").s().p("AjVILQg0gLgighQgQgjACgdQACg8BVAXQBUAXgLhGQgEgWgMgcIgMgYQgxglgyg/Qhkh+gHiAQgHiEBZh5QA1hJBPg7QAwgkCFgGQCOgHAnAxIAMAPQA/BKB9B6QgOAxgsAsQgWAWgTAMIgOgXQhGhnhjgLQhXgJhMA+QhLA8gTBYQgTBfBABMQBvCGgEB2QgCA7gYAgQhIBchUAAQgQAAgRgDg");
	this.shape_112.setTransform(39.8993,281.8439);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#1D1D1C").p("AkaifIAkgnQAugqAxgRQCdg3CCDWIAGAbQAFAjgIAoQgZCBiKCFQgWAUAEAnQAEAmAZApQA9BiB0AYQBkAUAbg1QAOgagGgfQgCgUgQgPQgggfhKAVQgSgRgHgbQgOg1A4gxQB5hrAlhaQBIirh5jeQgdgohBgqQiChWi2gSQgsAVg3AtQhwBYg7B0IAMAkQAXApA6AZg");
	this.shape_113.setTransform(352.3441,281.0554);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#4D3319").s().p("ACjIOQhzgYg9hiQgagpgDgmQgEgnAVgUQCLiFAYiBQAIgogFgjIgGgbQiCjWicA3QgxARgvAqIgkAnQg6gZgXgpIgMgkQA8h0BvhYQA4gtArgVQC2ASCCBWQBCAqAcAoQB6DehICrQgmBah5BrQg4AxAOA1QAHAbATARQBKgVAgAfQAQAPABAUQAHAfgOAaQgUAng5AAQgXAAgcgGg");
	this.shape_114.setTransform(352.3645,281.0609);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:197.0062,y:219.98}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_37,p:{x:197.5562,y:218.93}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},9).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,391.6,458.9);


(lib.bouton_Xai = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1C").s().p("ACDFTIh/k0IiGEtQgHAOgPAAIgLgCQgJgEgDgJQgEgKAEgKICalWIh2kgQgEgKAEgJQAEgJAJgEQAJgEAKAEQAJAEAEAJIBkD2IBuj3QAEgJAKgDQAJgEAKAEQAJAEAEAKQADAJgEAKIiCEgICRFeQAEAKgEAJQgEAJgJAEIgKACQgQAAgGgPg");
	this.shape.setTransform(159.6933,90.0433);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D1D1C").ss(0.9).p("AzcJXIBxB6IGjhZIBWA0IDqhxIC5BxICRBBIDkhBICvg5ICbA5ICqhLID+BLID5hVIErBVIh6kxIB6jhIg/iMIA/jAIiJijICJh2IhYi7Ij2hnIlDAtIjbA2IkWg2IhgA/IkCg/IivA/Iixg/IjsA/IiNgyIkCBTImKhgIBJDMIhJDDIBJDPIhJDDIgyD5IBXDTIglB/g");
	this.shape_1.setTransform(157.912,82.6585);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0A09F").s().p("AjOKsIi4hxIjqBxIhXg0ImiBaIhyh7IixBVIAmh+IhXjUIAxj4IBKjDIhKjPIBKjEIhKjLIGKBfIEDhTICNAzIDsg/ICxA/ICvg/IECA/IBfg/IEXA1IDbg1IFDgtID2BnIBYC6IiJB2ICJCjIg/DAIA/CNIh6DhIB6EwIkshVIj4BVIj+hLIiqBLIicg4IiuA4IjkBBg");
	this.shape_2.setTransform(157.75,82.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D1D1C").p("A0IJ+IB1CCIGyhfIBZA3IDyh4IC/B4ICXBGIDshGIC2g8ICgA8ICwhQIEHBQIEChaIE2BaIh+lEIB+jwIhBiVIBBjNIiOitICOh+IhbjGIj/huIlOAwIjjA5Ikhg5IhjBDIkLhDIi1BDIi4hDIj1BDIiRg2IkMBZImYhmIBMDYIhMDRIBMDcIhMDQIgzEJIBZDgIgmCHg");
	this.shape_3.setTransform(157.6826,84.0341);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D0AE74").s().p("AjVLYIjAh4IjyB4IhZg3ImyBfIh1iCIi4BaIAniHIhajgIAzkJIBNjQIhNjcIBNjRIhNjYIGZBmIELhZICSA2ID0hDIC4BDIC1hDIEMBDIBjhDIEgA5IDjg5IFPgwID/BuIBbDGIiOB+ICOCtIhCDNIBCCVIh/DwIB/FEIk3haIkCBaIkGhQIiwBQIihg8Ii1A8IjsBGg");
	this.shape_4.setTransform(157.525,84.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1D1D1C").p("A0xKiIB5CIIG/hkIBcA6ID6h+IDGB+ICbBKID0hKIC7g/ICmA/IC1hUIEPBUIEKheIFABeIiClWICCj8IhDifIBDjXIiSi4ICSiEIhdjSIkHh0IlaAzIjqA8Ikpg8IhnBGIkThGIi7BGIi+hGIj8BGIiXg4IkUBdImlhrIBPDkIhPDcIBPDpIhPDbIg1EYIBdDtIgoCOg");
	this.shape_5.setTransform(157.7547,84.7595);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BE9440").s().p("AjcMBIjGh/Ij5B/Ihcg7InABkIh5iIIi9BfIAniOIhcjuIA1kYIBPjaIhPjpIBPjcIhPjlIGlBrIEUhcICWA4ID8hHIC+BHIC7hHIEUBHIBmhHIEqA8IDqg8IFagyIEHBzIBdDSIiSCEICSC4IhDDYIBDCeIiCD9ICCFWIlAhfIkKBfIkPhVIi1BVIing/Ii6A/Ij0BKg");
	this.shape_6.setTransform(157.6,84.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACDFTIh/k0IiGEtQgHAOgPAAIgLgCQgJgEgDgJQgEgKAEgKICalWIh2kgQgEgKAEgJQAEgJAJgEQAJgEAKAEQAJAEAEAJIBkD2IBuj3QAEgJAKgDQAJgEAKAEQAJAEAEAKQADAJgEAKIiCEgICRFeQAEAKgEAJQgEAJgJAEIgKACQgQAAgGgPg");
	this.shape_7.setTransform(149.0933,83.2433);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s().p("ACDFTIh/k0IiGEtQgHAOgPAAIgLgCQgJgEgDgJQgEgKAEgKICalWIh2kgQgEgKAEgJQAEgJAJgEQAJgEAKAEQAJAEAEAJIBkD2IBuj3QAEgJAKgDQAJgEAKAEQAJAEAEAKQADAJgEAKIiCEgICRFeQAEAKgEAJQgEAJgJAEIgKACQgQAAgGgPg");
	this.shape_8.setTransform(155.6933,94.6433);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,354.1,170.5);


(lib.Bouton_Refroidissement = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1.6).p("ACSDkQACAGgBAGQgBAFgEAFQgFAFgFACIi1BAQgCACgFAAQgHAAgGgFQgKgHAAgMIAAmcIgsAAQgLAAgGgHQgGgGAAgKQAAgJAGgGQAGgHALAAIAsAAIAAiOQAAgJAHgGQAGgHAKAAQAFAAAGADQAFADADAGQADAEAAAGIAACOIAwAAQAJAAAHAHQAGAGAAAJQAAAJgGAHQgHAHgJAAIgwAAIAAF9ICXg1QAGgCAGABQAGABAEAEQAFAEACAFg");
	this.shape.setTransform(464.0167,79.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFE+QgKgGAAgMIAAmcIgsAAQgLAAgGgIQgGgGAAgKQAAgJAGgGQAGgGALAAIAsAAIAAiPQAAgJAHgGQAGgHAKABQAFAAAGADQAFACADAGQADAFAAAFIAACPIAwAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAIgJAAIgwAAIAAF8ICXg1QAGgCAGABQAGABAEAEQAFAEACAGQACAFgBAGQgBAGgEAEQgFAFgFACIi1BAIgHABQgHABgGgFg");
	this.shape_1.setTransform(464.0167,79.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.6).p("AByj9QAKAHAAAMIAAHVQAAALgGAGQgHAGgKAAQgJAAgGgGQgHgHAAgKIAAmyIidBJIAAFpQAAALgHAGQgGAGgKAAQgKAAgGgGQgGgGAAgLIAAnXQAAgJAGgGQAGgHAKAAQAKAAAGAHQAHAGAAAJIAAA8ICqhOQALgFALAGg");
	this.shape_2.setTransform(431.7,86.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABWD8QgHgGAAgKIAAmzIieBKIAAFpQABAKgHAGQgGAHgKgBQgKABgGgHQgHgGAAgKIAAnYQAAgJAHgGQAGgGAKAAQAKAAAGAGQAHAGgBAJIAAA9ICrhPQALgFALAGQALAHAAANIAAHVQAAAKgIAGQgGAHgKgBQgJABgGgHg");
	this.shape_3.setTransform(431.7,86.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1.6).p("ABtAlQAJgBAHAFQAIAGAAAJQABAKgFAIIiSCxQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAkCBIB1iRQAGgGAJgBgAhWgoIAOAyICQiJIhghJg");
	this.shape_4.setTransform(400.0427,86.13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAkCBIB1iRQAGgGAJgBQAJgBAHAFQAIAGAAAJQABAKgFAIIiSCxQgGAJgMAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_5.setTransform(400.0427,86.13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.6).p("ACXj/QANAGAAAOIAAHXQAAAGgDAFQgDAEgGAFQgEADgHAAQgKAAgGgHQgGgGAAgKIAAmoIhTBBIAjAcQAHAFABAKQABAKgGAHQgFAHgKABQgKABgGgGIihiAIAAGoQAAAKgGAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAnXQAAgOANgGQANgGAMAIIB9BmIB/hmQALgIANAGg");
	this.shape_6.setTransform(364.25,86.0464);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AB9D8QgGgGAAgKIAAmoIhTBBIAjAcQAGAFACAKQABAKgGAHQgGAHgJABQgLABgFgGIigiAIAAGoQAAAKgHAGQgGAHgKAAQgKAAgGgHQgHgGABgKIAAnXQAAgOANgGQANgGALAIIB9BmIB/hmQAKgIANAGQANAGABAOIAAHXQAAAGgDAFQgDAEgGAFQgEADgIAAQgJAAgGgHg");
	this.shape_7.setTransform(364.25,86.0464);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1.6).p("AhWgoIAOAyICQiJIhghJgABtAlQAJgBAHAFQAIAGAAAJQABAKgFAIIiSCxQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAkCBIB1iRQAGgGAJgBg");
	this.shape_8.setTransform(328.6927,86.13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAkCBIB1iRQAGgGAJgBQAJgBAHAFQAIAGAAAJQABAKgFAIIiSCxQgGAJgMAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_9.setTransform(328.6927,86.13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1.6).p("ACDA3QANANgKAQIhoClQgGAJgLABIgCAAQgKAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh9Ii0iwQgNgNALgPIBOh2QAGgJALgBQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgGAHgKAAQgKAAgGgHIhNhMIg0BQg");
	this.shape_10.setTransform(298.0674,86.0441);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALEDQgKAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh9Ii0iwQgNgNALgPIBOh2QAGgJALgBQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgGAHgKAAQgKAAgGgHIhNhMIg0BQICzCuQANANgKAQIhoClQgGAJgLABg");
	this.shape_11.setTransform(298.0674,86.0441);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1.6).p("ACEA3QANANgLAQIhoClQgHAJgJABIgDAAQgJAAgHgIIh+iEQgHgIAAgIQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh9IiziwQgNgMAKgQIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAHAHAAAJQAAAIgHAIQgHAHgJAAQgJAAgHgHIhNhMIg0BQg");
	this.shape_12.setTransform(267.7346,86.0441);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AALEDQgJAAgHgIIh+iEQgHgIAAgIQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh9IiziwQgNgMAKgQIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAHAHAAAJQAAAIgHAIQgHAHgJAAQgJAAgHgHIhNhMIg0BQIC0CuQANANgLAQIhoClQgHAJgJABg");
	this.shape_13.setTransform(267.7346,86.0441);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.6).p("AgPkxQAHgHAIAAQAKAAAGAHQAHAGAAAKIAAAUQAAAKgHAGQgFAHgLAAQgIAAgHgHQgHgGAAgKIAAgUQAAgKAHgGgAABjKQAGAAAEADQAGAEACAEQAEAGAAAGIAAHVQAAALgHAFQgGAHgKAAQgIAAgHgHQgHgFAAgLIAAnVQAAgKAHgGQAHgHAJAAg");
	this.shape_14.setTransform(246.25,80.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPEyQgGgFgBgLIAAnVQABgKAGgGQAHgHAJAAQAFAAAFADQAGAEADAFQACAFAAAGIAAHVQAAALgGAFQgGAHgKAAQgJAAgGgHgAgPj8QgGgHgBgKIAAgUQABgJAGgHQAHgHAIAAQAKAAAGAHQAGAHAAAJIAAAUQAAAKgGAHQgGAGgKABQgJgBgGgGg");
	this.shape_15.setTransform(246.25,80.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1.6).p("ABjk7QAHgHAKAAQAJAAAHAHQAGAGAAAKIAAJWQAAAQgOAGQgEACgEAAQgKAAgHgHIjmjpQgGgHAAgJQAAgJAHgIIDejPIABgBIAAiNQAAgKAGgGgABdD1IAAlVIivCkg");
	this.shape_16.setTransform(221.525,79.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABjE8IjmjpQgGgGAAgKQAAgJAHgIIDejOIABgBIAAiOQAAgKAGgGQAHgHAKABQAJgBAHAHQAGAGAAAKIAAJXQAAAPgOAGIgIABQgKABgHgHgAhSBEICvCxIAAlVg");
	this.shape_17.setTransform(221.525,79.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.6).p("AgPkxQAHgHAIAAQAJAAAHAHQAHAHAAAJIAAAUQAAAJgHAHQgGAHgKAAQgJAAgGgHQgHgHAAgJIAAgUQAAgJAHgHgAABjKQAFAAAFADQAGAFACADQAEAFAAAHIAAHVQAAAKgHAGQgGAHgKAAQgJAAgGgHQgHgGAAgKIAAnVQAAgJAHgHQAGgHAKAAg");
	this.shape_18.setTransform(200.625,80.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPEyQgHgGAAgKIAAnVQAAgJAHgHQAGgHAKAAQAFAAAFADQAGAFACAEQAEAEAAAHIAAHVQAAAKgHAGQgGAHgKAAQgJAAgGgHgAgPj8QgHgIAAgJIAAgUQAAgIAHgIQAHgHAIAAQAJAAAHAHQAHAIAAAIIAAAUQAAAJgHAIQgGAGgKABQgJgBgGgGg");
	this.shape_19.setTransform(200.625,80.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1.6).p("AB6A4QApgtAAg9QAAg9gpgtQgngug9gJIAAFBQA9gJAngtgACTBgQg9A8hWAAQhUAAg9g8Qg+g9AAhVQAAhWA+g9QA9g8BUAAQBWAAA9A8QA9A9AABWQAABVg9A9gAgWjTQg8AJgnAuQgoAsAAA+QAAA9AoAtQAoAuA7AIgACADVQAJAAAHAGQAHAGAAAKQAAAKgHAGQgHAHgJAAIj/AAQgFAAgGgEQgFgDgEgFQgCgFAAgHQAAgJAHgGQAFgGAKAAg");
	this.shape_20.setTransform(171.45,86.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah/EBQgGAAgFgCQgGgEgDgFQgCgFAAgGQAAgKAHgGQAFgHAKAAID/AAQAJAAAGAHQAIAGgBAKQABAKgIAGQgGAHgJgBgAiSBgQg8g9gBhVQABhWA8g8QA+g9BUAAQBWAAA9A9QA8A8ABBWQgBBVg8A9Qg9A8hWAAQhUAAg+g8gAAWBuQA9gIAnguQApgtAAg9QAAg9gpgtQgngug9gJgAh5icQgoAtAAA9QAAA+AoAsQAoAuA7AIIAAlBQg8AJgnAug");
	this.shape_21.setTransform(171.45,86.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1.6).p("ABojJQAJADAEAIQAEAIgCAJQgCAJgJAEQgJAFgIgDIikgvIAAG4QAAAKgHAGQgGAHgKAAQgKAAgGgHQgGgGAAgKIAAnVQAAgMAIgGQAJgHALADg");
	this.shape_22.setTransform(136.5946,86.105);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhwD7QgGgGAAgKIAAnVQAAgMAIgGQAJgHALADIDCA3QAJADAEAIQAEAIgCAJQgCAJgJAEQgJAFgIgDIikgvIAAG4QAAAKgHAGQgGAHgKAAQgKAAgGgHg");
	this.shape_23.setTransform(136.5946,86.105);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1.6).p("ACEkAQAJADAEAIQAEAIgDAKQgDAJgIAEQgKADgHgDIiYg1IAABuIAwAAQAKAAAGAGQAGAGAAAKQAAAJgGAHQgGAHgKAAIgwAAIAAGcQAAAKgGAGQgGAHgKAAQgJAAgHgHQgHgGAAgKIAAmcIgsAAQgKAAgHgHQgGgIAAgIQAAgJAGgHQAHgGAKAAIAsAAIAAiOQAAgMAKgGQAKgHALAEg");
	this.shape_24.setTransform(115.8271,79.6388);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhIE8QgHgGAAgKIAAmcIgsAAQgKAAgHgHQgGgIAAgIQAAgJAGgHQAHgGAKAAIAsAAIAAiOQAAgMAKgGQAKgHALAEIC0BAQAJADAEAIQAEAIgDAKQgDAJgIAEQgKADgHgDIiYg1IAABuIAwAAQAKAAAGAGQAGAGAAAKQAAAJgGAHQgGAHgKAAIgwAAIAAGcQAAAKgGAGQgGAHgKAAQgJAAgHgHg");
	this.shape_25.setTransform(115.8271,79.6388);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1.6).p("AhWgoIAOAyICQiJIhghJgABtAlQAJgBAHAFQAIAGAAAJQABAKgFAIIiSCxQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAkCBIB1iRQAGgGAJgBg");
	this.shape_26.setTransform(85.2427,86.13);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAkCBIB1iRQAGgGAJgBQAJgBAHAFQAIAGAAAJQABAKgFAIIiSCxQgGAJgMAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_27.setTransform(85.2427,86.13);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1.6).p("ABnEhQAEAIgCAIQgBAKgJAEQgFAEgHAAQgMAAgHgLIh7jJIAAC9QAAAKgHAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAApWQAAgPANgGQANgGALAJICmCLQAIAGAAAKQABAKgGAHIibCxgAg7j6IAADeIBuiBg");
	this.shape_28.setTransform(58.1321,79.6339);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABAE4Ih7jJIAAC9QAAAKgHAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAApWQAAgPANgGQANgGALAJICmCLQAIAGAAAKQABAKgGAHIibCxICdEAQAEAIgCAIQgBAKgJAEQgFAEgHAAQgMAAgHgLgAg7gcIBuiBIhuhdg");
	this.shape_29.setTransform(58.1321,79.6339);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1D1D1C").ss(1.2).p("EggEAJXIC7B6IKyhZICOA0IGChxIExBxIDvBBIF5hBIEgg5IEAA5IEYhLIGiBLIGbhVIHtBVIjJkxIDJjhIhoiMIBojAIjhijIDhh2IiQi7ImWhnIoUAtIlqA2InLg2IieA/Impg/IkgA/Iklg/ImFA/IjogyImqBTIqKhgIB6DMIh6DDIB6DPIh6DDIhRD5ICODTIg9B/g");
	this.shape_30.setTransform(260.1645,82.8037);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A0A09F").s().p("AlTKsIkxhxImCBxIiOg0IqyBZIi7h6IkkBVIA9h/IiOjSIBRj6IB6jCIh6jPIB6jEIh6jMIKKBgIGqhTIDoAyIGFg/IElA/IEgg/IGpA/ICeg/IHLA2IFqg2IIUgtIGWBoICQC6IjhB2IDhCjIhoDAIBoCNIjJDhIDJEwInthVImbBVImihLIkYBLIkAg5IkgA5Il5BCg");
	this.shape_31.setTransform(259.875,82.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1D1D1C").ss(1.2).p("EghNAJ+IDBCCILLhfICTA3IGPh4IE8B4ID5BFIGFhFIErg8IEJA8IEjhQIGxBQIGphaIH/BaIjQlEIDQjwIhsiVIBsjNIjqitIDqh+IiWjGImkhuIooAwIl2A5Inbg5IikBDIm5hDIkqBDIkwhDImTBDIjwg2Im5BZIqhhmIB+DYIh+DRIB+DcIh+DQIhUEJICTDgIg/CHg");
	this.shape_32.setTransform(259.8192,84.154);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D0AE74").s().p("AlgLYIk8h4ImPB4IiTg3IrLBfIjBiCIkvBaIA/iHIiTjgIBUkJIB+jPIh+jdIB+jRIh+jYIKhBmIG5hYIDwA1IGThDIEwBDIEqhDIG5BDICkhDIHbA5IF2g5IIogvIGkBtICWDGIjqB+IDqCtIhsDNIBsCWIjQDvIDQFEIn/haImpBaImxhQIkjBQIkJg8IkrA8ImFBFg");
	this.shape_33.setTransform(259.525,84.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1D1D1C").ss(1.3).p("EgiRAKiIDICJILhhkICYA6IGch/IFGB/IEABJIGShJIE1g/IERA/IEshUIG+BUIG3hfIIQBfIjYlWIDYj9IhwieIBwjYIjyi3IDyiFIibjRImyh0Io5AyImCA8Inqg8IipBHInHhHIk0BHIk5hHImgBHIj4g5InHBeIq3hsICDDlIiDDcICDDpIiDDbIhWEYICYDtIhCCOg");
	this.shape_34.setTransform(260.0008,84.8794);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BE9440").s().p("AlrMBIlGh/ImcB/IiXg6IriBkIjIiJIk4BfIBBiOIiYjtIBXkYICCjbIiCjpICCjcIiCjlIK2BsIHHheID4A5IGghHIE5BHIE0hHIHHBHICphHIHqA8IGCg8II5gyIGzB0ICaDRIjxCFIDxC3IhwDYIBwCeIjXD9IDXFWIoQhfIm3BfIm+hUIksBUIkRg/Ik0A/ImTBJg");
	this.shape_35.setTransform(259.7,84.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#1D1D1C").ss(1.6).p("ACSDkQACAIgBAEQgBAGgEAEQgEAFgGACIi0BAQgDACgFAAQgHAAgGgFQgKgHAAgMIAAmcIgsAAQgKAAgHgHQgGgHAAgJQAAgJAGgGQAHgHAKAAIAsAAIAAiOQAAgKAHgFQAHgHAJAAQAGAAAFADQAGADADAGQACAFAAAFIAACOIAwAAQAKAAAGAHQAGAGAAAJQAAAKgGAGQgGAHgKAAIgwAAIAAF9ICXg1QAGgCAGABQAGABAFAEQAEADACAGg");
	this.shape_36.setTransform(462.87,80.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#020203").s().p("AhFE+QgKgHAAgMIAAmcIgsAAQgKABgHgIQgGgHAAgIQAAgJAGgHQAHgGAKgBIAsAAIAAiOQAAgJAHgGQAHgGAJAAQAGAAAFACQAGAEADAFQACAFAAAFIAACOIAwAAQAKABAGAGQAGAGAAAKQAAAJgGAGQgGAIgKgBIgwAAIAAF9ICXg1QAGgCAGABQAGABAFAEQAEADACAGQACAIgBAFQgBAFgEAFQgEAFgGABIi0BBIgIABQgHAAgGgFg");
	this.shape_37.setTransform(462.87,80.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1D1D1C").ss(1.6).p("AByj9QAKAHAAAMIAAHVQAAALgGAGQgHAGgKAAQgJAAgGgGQgHgGAAgLIAAmyIidBJIAAFpQAAAKgHAHQgGAGgKAAQgKAAgGgGQgGgHAAgKIAAnXQAAgJAGgGQAGgHAKAAQAKAAAGAHQAHAGAAAJIAAA8ICrhOQAKgGALAHg");
	this.shape_38.setTransform(430.55,86.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#020203").s().p("ABWD8QgGgGgBgLIAAmxIidBJIAAFoQAAALgGAGQgHAHgKAAQgKAAgGgHQgHgGABgLIAAnWQgBgJAHgHQAGgGAKgBQAKABAHAGQAGAHAAAJIAAA7ICrhOQAKgFALAGQAKAHAAANIAAHUQABALgIAGQgGAHgJAAQgKAAgGgHg");
	this.shape_39.setTransform(430.55,86.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#1D1D1C").ss(1.6).p("ABtAlQAJgBAHAFQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAIgEgBQgOgDgDgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAIAHABAKQABALgHAGIi2CuIAjCBIB1iRQAHgHAJAAgAhWgoIANAyICRiJIhhhJg");
	this.shape_40.setTransform(398.9046,86.88);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#020203").s().p("AgnEDQgOgDgDgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAIAHABAKQABALgHAGIi2CuIAjCBIB1iRQAHgHAJAAQAJgBAHAFQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAgAhWgoIANAyICRiJIhhhJg");
	this.shape_41.setTransform(398.9046,86.88);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#1D1D1C").ss(1.6).p("ACXj/QANAGAAAOIAAHXQAAAGgEAFQgCAEgGAFQgFADgGAAQgKAAgGgHQgHgGAAgKIAAmoIhSBBIAjAcQAHAGABAJQABAKgGAHQgFAHgKABQgKABgGgGIigiAIAAGoQAAAKgHAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAnXQAAgOANgGQANgGALAIIB+BmIB/hmQALgIANAGg");
	this.shape_42.setTransform(363.125,86.7964);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#020203").s().p("AB9D8QgHgGAAgKIAAmoIhSBBIAjAcQAHAGABAJQABAKgGAHQgFAHgKABQgKABgGgGIigiAIAAGoQAAAKgHAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAnXQAAgOANgGQANgGALAIIB+BmIB/hmQALgIANAGQANAGAAAOIAAHXQAAAGgEAFQgCAEgGAFQgFADgGAAQgKAAgGgHg");
	this.shape_43.setTransform(363.125,86.7964);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#1D1D1C").ss(1.6).p("ABtAlQAJgBAHAFQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAIgEgBQgPgDgCgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAIAHABAKQABALgHAGIi2CuIAjCBIB1iRQAHgHAJAAgAhWgoIANAyICRiJIhhhJg");
	this.shape_44.setTransform(327.5619,86.88);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#020203").s().p("AgnEDQgPgDgCgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAIAHABAKQABALgHAGIi2CuIAjCBIB1iRQAHgHAJAAQAJgBAHAFQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAgAhWgoIANAyICRiJIhhhJg");
	this.shape_45.setTransform(327.5619,86.88);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#1D1D1C").ss(1.6).p("ACEA3QANANgLAQIhoClQgHAJgJABIgDAAQgJAAgHgIIh+iEQgHgIAAgIQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+IizivQgNgMAKgQIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAHAHAAAJQAAAIgHAIQgHAHgJAAQgJAAgHgHIhNhMIg0BQg");
	this.shape_46.setTransform(296.9346,86.7941);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#020203").s().p("AALEDQgJAAgHgIIh+iEQgHgIAAgIQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+IizivQgNgMAKgQIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAHAHAAAJQAAAIgHAIQgHAHgJAAQgJAAgHgHIhNhMIg0BQIC0CuQANANgLAQIhoClQgHAJgJABg");
	this.shape_47.setTransform(296.9346,86.7941);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#1D1D1C").ss(1.6).p("ACDA3QANANgKAQIhoClQgGAJgLABIgDAAQgJAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+Ii0ivQgNgNALgPIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgHAHgJAAQgKAAgGgHIhNhMIg0BQg");
	this.shape_48.setTransform(266.6174,86.7941);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#020203").s().p("AAKEDQgJAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+Ii0ivQgNgNALgPIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgHAHgJAAQgKAAgGgHIhNhMIg0BQICzCuQANANgKAQIhoClQgGAJgLABg");
	this.shape_49.setTransform(266.6174,86.7941);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#1D1D1C").ss(1.6).p("AgQkxQAHgHAJAAQAJAAAHAHQAHAGAAAKIAAAUQAAAKgHAGQgHAHgJAAQgJAAgHgHQgGgGAAgKIAAgUQAAgJAGgHgAAAjKQAGAAAFADQAGAEACAEQAEAFAAAHIAAHVQAAALgHAFQgHAHgJAAQgJAAgHgHQgGgFAAgLIAAnVQAAgJAGgHQAHgHAJAAg");
	this.shape_50.setTransform(245.15,81.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#020203").s().p("AgPEyQgHgFABgLIAAnVQgBgJAHgHQAGgHAJAAQAGAAAFADQAGAEACAEQADAFABAHIAAHVQgBALgGAFQgGAHgKAAQgJAAgGgHgAgPj9QgHgGABgKIAAgUQgBgJAHgHQAGgHAJAAQAJAAAHAHQAGAGABAKIAAAUQgBAKgGAGQgGAIgKAAQgJAAgGgIg");
	this.shape_51.setTransform(245.15,81.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#1D1D1C").ss(1.6).p("ABkk7QAGgHAKAAQAKAAAGAHQAGAGAAAKIAAJWQAAAQgNAGIgJACQgKAAgGgHIjnjpQgGgHAAgJQAAgJAHgIIDfjQIAAiNQAAgKAHgGgABdD1IAAlVIivCkg");
	this.shape_52.setTransform(220.375,80.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#020203").s().p("ABkE8IjnjpQgGgHAAgJQAAgJAHgIIDfjQIAAiMQAAgLAHgGQAGgGAKAAQAKAAAGAGQAGAGAAALIAAJVQAAAQgNAGIgJACQgKAAgGgHgAhSBEICvCxIAAlVg");
	this.shape_53.setTransform(220.375,80.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#1D1D1C").ss(1.6).p("AgPkxQAGgHAJAAQAKAAAGAHQAHAGAAAKIAAAUQAAAKgHAGQgFAHgLAAQgKAAgFgHQgHgGAAgKIAAgUQAAgKAHgGgAABjKQAFAAAFADQAFADADAFQAEAGAAAGIAAHVQAAALgHAFQgGAHgKAAQgJAAgGgHQgHgFAAgLIAAnVQAAgKAHgGQAFgHALAAg");
	this.shape_54.setTransform(199.5,81.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#020203").s().p("AgPEyQgHgFABgLIAAnVQgBgJAHgHQAFgHAKAAQAGAAAFADQAFAEADAEQAEAGAAAGIAAHVQAAALgHAFQgGAHgKAAQgJAAgGgHgAgPj9QgHgGABgKIAAgUQgBgKAHgGQAGgHAJAAQAKAAAGAHQAHAGAAAKIAAAUQAAAKgHAGQgGAIgKAAQgKAAgFgIg");
	this.shape_55.setTransform(199.5,81.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#1D1D1C").ss(1.6).p("AB6A4QAoguAAg8QAAg9gogtQgogug8gJIAAFBQA8gIAogugACTBgQg9A8hWAAQhUAAg+g8Qg8g9AAhVQAAhWA8g9QA+g8BUAAQBWAAA9A8QA8A9AABWQAABVg8A9gAgWjTQg7AJgoAuQgoAtAAA9QAAA8AoAuQAoAuA7AIgAB/DVQAKAAAGAGQAHAFAAALQAAAKgHAGQgGAHgKAAIj+AAQgFAAgGgEQgHgEgBgEQgDgFAAgHQAAgJAGgGQAHgGAJAAg");
	this.shape_56.setTransform(170.325,86.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#020203").s().p("Ah/ECQgFAAgGgEQgHgEgBgEQgDgFAAgHQAAgJAGgGQAHgHAJABID+AAQAKgBAGAHQAHAFAAALQAAAKgHAGQgGAHgKAAgAiSBgQg8g8AAhWQAAhWA8g9QA+g7BUgBQBWABA9A7QA8A9AABWQAABWg8A8Qg9A8hWAAQhUAAg+g8gAAWBuQA8gIAoguQAoguAAg8QAAg9gogtQgogug8gIgAh5icQgoAtAAA9QAAA8AoAuQAoAuA7AIIAAlAQg7AIgoAug");
	this.shape_57.setTransform(170.325,86.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#1D1D1C").ss(1.6).p("ABnjJQAJADAFAIQAEAJgCAIQgCAIgJAFQgJAFgJgDIikgvIAAG4QAAAKgGAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAnVQAAgLAJgHQAJgHALADg");
	this.shape_58.setTransform(135.4583,86.855);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#020203").s().p("AhwD7QgHgGAAgKIAAnVQAAgLAJgHQAJgHALADIDBA3QAJADAFAIQAEAJgCAIQgCAIgJAFQgJAFgJgDIikgvIAAG4QAAAKgGAGQgGAHgKAAQgKAAgGgHg");
	this.shape_59.setTransform(135.4583,86.855);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#1D1D1C").ss(1.6).p("ACEkAQAJACAEAJQAEAJgDAJQgDAJgJAEQgJADgIgDIiXg1IAABuIAwAAQAJAAAHAGQAGAHAAAJQAAAIgGAIQgHAHgJAAIgwAAIAAGcQAAAKgGAGQgHAHgJAAQgJAAgHgHQgHgGAAgKIAAmcIgsAAQgLAAgGgHQgGgHAAgJQAAgKAGgGQAGgGALAAIAsAAIAAiOQAAgMAKgGQAKgHAKAEg");
	this.shape_60.setTransform(114.7143,80.3773);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#020203").s().p("AhIE8QgHgGAAgKIAAmcIgsAAQgLAAgGgHQgGgHAAgJQAAgKAGgGQAGgGALAAIAsAAIAAiOQAAgMAKgGQAKgHAKAEIC1BAQAJACAEAJQAEAJgDAJQgDAJgJAEQgJADgIgDIiXg1IAABuIAwAAQAJAAAHAGQAGAHAAAJQAAAIgGAIQgHAHgJAAIgwAAIAAGcQAAAKgGAGQgHAHgJAAQgJAAgHgHg");
	this.shape_61.setTransform(114.7143,80.3773);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#1D1D1C").ss(1.6).p("ABtAlQAJgBAHAFQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAIgEgBQgPgDgCgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAIAHABAKQABALgHAGIi2CuIAjCBIB1iRQAHgHAJAAgAhWgoIANAyICRiJIhhhJg");
	this.shape_62.setTransform(84.1119,86.88);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#020203").s().p("AgnEDQgPgDgCgNIhMkWQgBgIACgGIBLjDQAFgLAKgDQALgDAJAHICNBqQAIAHABAKQABALgHAGIi2CuIAjCBIB1iRQAHgHAJAAQAJgBAHAFQAHAGABAJQABAKgGAHIiRCyQgHAJgLAAgAhWgoIANAyICRiJIhhhJg");
	this.shape_63.setTransform(84.1119,86.88);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#1D1D1C").ss(1.6).p("ABmEhQAFAGgCAKQgCAKgIAEQgFAEgHAAQgMAAgHgLIh8jJIAAC9QAAAKgGAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAApWQAAgPANgGQANgGALAJICmCLQAHAFABALQAAAKgFAHIibCxgAg8j6IAADeIBviBg");
	this.shape_64.setTransform(57.025,80.3839);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#020203").s().p("ABAE4Ih8jJIAAC9QAAAKgGAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAApWQAAgPANgGQANgGALAJICmCLQAHAFABALQAAAKgFAHIibCxICcEAQAFAGgCAKQgCAKgIAEQgFAEgHAAQgMAAgHgLgAg8gcIBviBIhvhdg");
	this.shape_65.setTransform(57.025,80.3839);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(1.6).p("ACSDkQABAIAAAEQgBAFgEAFQgFAFgFACIi1BAQgCACgFAAQgHAAgGgFQgKgHAAgMIAAmcIgsAAQgLAAgGgHQgGgGAAgKQAAgJAGgGQAGgHALAAIAsAAIAAiOQAAgJAHgGQAGgHAKAAQAGAAAFADQAFADADAGQADAEAAAGIAACOIAwAAQAJAAAHAHQAGAGAAAJQAAAJgGAHQgHAHgJAAIgwAAIAAF9ICXg1QAGgCAGABQAGABAEAEQAEADADAGg");
	this.shape_66.setTransform(464.5563,80.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A0A09F").s().p("AhFE+QgKgHAAgMIAAmcIgsAAQgLABgGgIQgGgGAAgJQAAgKAGgGQAGgGALgBIAsAAIAAiOQAAgJAHgGQAGgGAKAAQAGAAAFACQAFADADAGQADAEAAAGIAACOIAwAAQAJABAHAGQAGAHAAAJQAAAIgGAHQgHAIgJgBIgwAAIAAF9ICXg1QAGgCAGABQAGABAEAEQAEADADAGQABAIAAAFQgBAEgEAGQgFAFgFABIi1BBIgHABQgHAAgGgFg");
	this.shape_67.setTransform(464.5563,80.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(1.6).p("AByj9QAKAHAAAMIAAHVQAAALgGAGQgHAGgKAAQgJAAgGgGQgHgGAAgLIAAmyIidBJIAAFpQAAALgHAGQgGAGgKAAQgKAAgGgGQgGgGAAgLIAAnXQAAgJAGgGQAGgHAKAAQAKAAAGAHQAHAGAAAJIAAA8ICqhOQALgFALAGg");
	this.shape_68.setTransform(432.225,86.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A0A09F").s().p("ABWD8QgHgGAAgLIAAmxIidBJIAAFoQAAALgHAGQgGAHgKAAQgKAAgGgHQgGgGAAgLIAAnWQAAgKAGgGQAGgGAKgBQAKABAGAGQAHAGAAAKIAAA7ICqhOQALgFALAGQAKAHAAANIAAHUQAAALgGAGQgHAHgKAAQgJAAgGgHg");
	this.shape_69.setTransform(432.225,86.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(1.6).p("ABtAlQAJgBAHAFQAHAFABAKQABALgGAGIiRCyQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAjCBIB1iRQAHgHAJAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_70.setTransform(400.5921,86.88);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A0A09F").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAjCBIB1iRQAHgHAJAAQAJgBAHAFQAHAFABAKQABALgGAGIiRCyQgGAJgMAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_71.setTransform(400.5921,86.88);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(1.6).p("ACXj/QANAGAAAOIAAHXQAAAGgDAFQgEAFgFAEQgFADgGAAQgKAAgGgHQgGgGAAgKIAAmoIhTBBIAjAcQAHAFABAKQABAKgGAHQgFAHgKABQgKABgGgGIigiAIAAGoQAAAKgHAGQgGAHgKAAQgKAAgGgHQgGgGAAgKIAAnXQAAgOAMgGQAOgGAKAIIB+BmIB/hmQALgIANAGg");
	this.shape_72.setTransform(364.8,86.7964);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A0A09F").s().p("AB9D8QgGgGAAgKIAAmoIhTBBIAjAcQAGAFACAKQABAKgGAHQgFAHgKABQgKABgGgGIigiAIAAGoQAAAKgHAGQgGAHgKAAQgKAAgGgHQgHgGABgKIAAnXQAAgOAMgGQANgGALAIIB+BmIB/hmQALgIANAGQANAGAAAOIAAHXQAAAGgDAFQgEAFgFAEQgFADgHAAQgJAAgGgHg");
	this.shape_73.setTransform(364.8,86.7964);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(1.6).p("AhWgoIAOAyICQiJIhghJgABtAlQAJgBAHAFQAHAFABAKQABALgGAGIiRCyQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAjCBIB1iRQAHgHAJAAg");
	this.shape_74.setTransform(329.2421,86.88);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A0A09F").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAjCBIB1iRQAHgHAJAAQAJgBAHAFQAHAFABAKQABALgGAGIiRCyQgGAJgMAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_75.setTransform(329.2421,86.88);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(1.6).p("ACDA3QANANgKAQIhoClQgGAJgLABIgDAAQgJAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+Ii0ivQgNgNALgPIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgHAHgJAAQgKAAgGgHIhNhMIg0BQg");
	this.shape_76.setTransform(298.6096,86.7941);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A0A09F").s().p("AAKEDQgJAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+Ii0ivQgNgNALgPIBOh2QAHgKAKAAQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgHAHgJAAQgKAAgGgHIhNhMIg0BQICzCuQANANgKAQIhoClQgGAJgLABg");
	this.shape_77.setTransform(298.6096,86.7941);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(1.6).p("ACDA3QANANgKAQIhoClQgHAJgKABIgCAAQgKAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+IizivQgNgMAKgQIBOh2QAGgJALgBQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgHAHgJAAQgJAAgHgHIhNhMIg0BQg");
	this.shape_78.setTransform(268.2674,86.7941);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A0A09F").s().p("AALEDQgKAAgGgIIh+iEQgHgHAAgJQAAgJAHgHQAIgGAIAAQAKAAAGAHIBqBwIBPh+IizivQgNgMAKgQIBOh2QAGgJALgBQAKgBAHAHIBhBgQAGAGAAAKQAAAJgGAHQgHAHgJAAQgJAAgHgHIhNhMIg0BQICzCuQANANgKAQIhoClQgHAJgKABg");
	this.shape_79.setTransform(268.2674,86.7941);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(1.6).p("AgPkxQAGgHAJAAQAKAAAGAHQAHAGAAAKIAAAUQAAAKgHAGQgGAHgKAAQgKAAgFgHQgHgGAAgKIAAgUQAAgKAHgGgAAAjKQAGAAAFADQAGAEACAEQAEAGAAAGIAAHVQAAALgHAFQgGAHgKAAQgJAAgGgHQgHgFAAgLIAAnVQAAgKAHgGQAFgHAKAAg");
	this.shape_80.setTransform(246.8,81.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A0A09F").s().p("AgPEyQgGgFgBgLIAAnVQABgJAGgHQAGgHAKAAQAFAAAFADQAGAFADADQACAGAAAGIAAHVQAAALgGAFQgGAHgKAAQgJAAgGgHgAgPj9QgGgGgBgKIAAgUQABgKAGgGQAGgHAJAAQAKAAAGAHQAGAGAAAKIAAAUQAAAKgGAGQgFAIgLAAQgKAAgFgIg");
	this.shape_81.setTransform(246.8,81.35);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(1.6).p("ABjk7QAHgHAJAAQAKAAAHAHQAGAGAAAKIAAJWQAAAQgOAGQgEACgEAAQgKAAgHgHIjmjpQgGgHAAgJQAAgKAHgHIDfjQIAAiNQAAgKAGgGgABdD1IAAlVIivCkg");
	this.shape_82.setTransform(222.075,80.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A0A09F").s().p("ABjE8IjmjpQgGgHAAgJQAAgKAHgHIDfjQIAAiMQAAgKAGgHQAHgGAJAAQAKAAAHAGQAGAHAAAKIAAJVQAAAQgOAGIgIACQgKAAgHgHgAhSBEICvCxIAAlVg");
	this.shape_83.setTransform(222.075,80.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(1.6).p("AAAjKQAGAAAFADQAGAFACADQAEAFAAAHIAAHVQAAAKgHAGQgGAHgKAAQgJAAgGgHQgHgGAAgKIAAnVQAAgJAHgHQAGgHAJAAgAgPkxQAHgHAIAAQAJAAAHAHQAHAHAAAJIAAAUQAAAJgHAHQgGAHgKAAQgJAAgGgHQgHgHAAgJIAAgUQAAgJAHgHg");
	this.shape_84.setTransform(201.175,81.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A0A09F").s().p("AgPEyQgHgGAAgKIAAnVQAAgIAHgIQAGgHAJAAQAGAAAFADQAGAFACADQAEAFAAAHIAAHVQAAAKgHAGQgGAHgKAAQgJAAgGgHgAgPj9QgHgHAAgJIAAgUQAAgJAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAJIAAAUQAAAJgHAHQgGAIgKAAQgJAAgGgIg");
	this.shape_85.setTransform(201.175,81.35);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(1.6).p("AB6A4QAogtAAg9QAAg+gogsQgngug9gJIAAFBQA9gJAngtgACTBgQg9A8hWAAQhVAAg9g8Qg9g9AAhVQAAhWA9g9QA9g8BVAAQBWAAA9A8QA9A9AABWQAABVg9A9gAgWjTQg8AJgnAuQgoAsAAA+QAAA9AoAtQAoAuA7AIgAB/DVQAKAAAGAGQAIAGAAAKQAAAKgIAGQgGAHgKAAIj+AAQgFAAgGgEQgFgDgEgFQgDgFAAgHQAAgJAHgGQAGgGAKAAg");
	this.shape_86.setTransform(172,86.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A0A09F").s().p("Ah/ECQgGAAgFgEQgGgDgDgFQgCgFAAgHQAAgJAGgGQAHgHAJABID+AAQAJgBAIAHQAGAGAAAKQAAAKgGAGQgIAHgJAAgAiSBgQg8g9AAhVQAAhVA8g+QA+g7BUgBQBWABA9A7QA8A+ABBVQgBBVg8A9Qg9A8hWAAQhUAAg+g8gAAWBuQA8gJAogtQAogtAAg9QAAg+gogsQgogug8gIgAh5icQgoAsAAA+QAAA9AoAtQAoAuA7AIIAAlAQg8AIgnAug");
	this.shape_87.setTransform(172,86.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(1.6).p("ABojJQAJADAEAIQAEAIgCAJQgCAJgJAEQgJAFgIgDIikgvIAAG4QAAAKgHAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAnVQAAgLAJgHQAJgHALADg");
	this.shape_88.setTransform(137.1196,86.855);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#A0A09F").s().p("AhwD7QgHgGAAgKIAAnVQAAgLAJgHQAJgHALADIDCA3QAJADAEAIQAEAIgCAJQgCAJgJAEQgJAFgIgDIikgvIAAG4QAAAKgHAGQgGAHgKAAQgKAAgGgHg");
	this.shape_89.setTransform(137.1196,86.855);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(1.6).p("ACEkAQAJADAEAIQAEAIgDAKQgDAJgIAEQgKADgIgDIiXg1IAABuIAwAAQAKAAAGAGQAGAGAAAKQAAAJgGAHQgGAHgKAAIgwAAIAAGcQAAAKgGAGQgGAHgKAAQgJAAgHgHQgHgGAAgKIAAmcIgsAAQgKAAgHgHQgGgIAAgIQAAgJAGgHQAHgGAKAAIAsAAIAAiOQAAgMAKgGQAKgHALAEg");
	this.shape_90.setTransform(116.3771,80.3888);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#A0A09F").s().p("AhIE8QgHgGAAgKIAAmcIgsAAQgKAAgHgHQgGgIAAgIQAAgJAGgHQAHgGAKAAIAsAAIAAiOQAAgMAKgGQAKgHALAEIC0BAQAJADAEAIQAEAIgDAKQgDAJgIAEQgKADgIgDIiXg1IAABuIAwAAQAKAAAGAGQAGAGAAAKQAAAJgGAHQgGAHgKAAIgwAAIAAGcQAAAKgGAGQgGAHgKAAQgJAAgHgHg");
	this.shape_91.setTransform(116.3771,80.3888);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(1.6).p("AhWgoIAOAyICQiJIhghJgABtAlQAJgBAHAFQAHAFABAKQABALgGAGIiRCyQgGAJgMAAIgEgBQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAjCBIB1iRQAHgHAJAAg");
	this.shape_92.setTransform(85.7921,86.88);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#A0A09F").s().p("AgnEDQgOgDgDgNIhLkWQgCgHADgHIBKjDQAFgLAKgDQAMgDAIAHICNBqQAJAHAAAKQACAKgIAHIi2CuIAjCBIB1iRQAHgHAJAAQAJgBAHAFQAHAFABAKQABALgGAGIiRCyQgGAJgMAAgAhWgoIAOAyICQiJIhghJg");
	this.shape_93.setTransform(85.7921,86.88);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#A0A09F").s().p("ABAE4Ih7jJIAAC9QAAAKgHAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAApWQAAgPANgGQANgGALAJICmCLQAIAGAAAKQABAKgGAHIibCxICdEAQAEAIgCAIQgBAKgJAEQgFAEgHAAQgMAAgHgLgAg7gcIBuiBIhuhdg");
	this.shape_94.setTransform(58.6821,80.3839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:58.1321,y:79.6339}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_94},{t:this.shape_28,p:{x:58.6821,y:80.3839}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.3,520.1999999999999,170.4);


(lib.Bateaux2ai = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(61.375,322.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1.setTransform(69.925,325.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(77.225,323.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_3.setTransform(58.025,313.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_4.setTransform(81.725,312.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_5.setTransform(78.5,304.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_6.setTransform(69.925,300.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_7.setTransform(60.925,304.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_8.setTransform(69.925,313.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkAAQgiAAgagZg");
	this.shape_9.setTransform(69.925,313.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_10.setTransform(69.925,313.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_11.setTransform(61.375,322.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_12.setTransform(69.925,325.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_13.setTransform(77.225,323.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_14.setTransform(58.025,313.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_15.setTransform(81.725,312.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_16.setTransform(78.5,304.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_17.setTransform(69.925,300.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_18.setTransform(60.925,304.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_19.setTransform(69.925,313.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkAAQgiAAgagZg");
	this.shape_20.setTransform(69.925,313.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_21.setTransform(69.925,313.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_22.setTransform(61.375,322.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_23.setTransform(69.925,325.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_24.setTransform(77.225,323.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_25.setTransform(58.025,313.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_26.setTransform(81.725,312.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_27.setTransform(78.5,304.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_28.setTransform(69.925,300.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_29.setTransform(60.925,304.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_30.setTransform(69.925,313.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkAAQgiAAgagZg");
	this.shape_31.setTransform(69.925,313.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_32.setTransform(69.925,313.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_33.setTransform(61.375,322.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_34.setTransform(69.925,325.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_35.setTransform(77.225,323.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_36.setTransform(58.025,313.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_37.setTransform(81.725,312.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_38.setTransform(78.5,304.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_39.setTransform(69.925,300.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_40.setTransform(60.925,304.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_41.setTransform(69.925,313.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkAAQgiAAgagZg");
	this.shape_42.setTransform(69.925,313.525);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_43.setTransform(69.925,313.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_44.setTransform(87.8,328.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_45.setTransform(96.375,332.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_46.setTransform(103.65,330.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_47.setTransform(84.45,320.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_48.setTransform(108.15,319.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_49.setTransform(104.925,311.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_50.setTransform(96.375,307.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_51.setTransform(87.375,311.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_52.setTransform(96.375,320.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_53.setTransform(96.375,320.375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAsgtA/AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg/AAgsgtg");
	this.shape_54.setTransform(96.375,320.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_55.setTransform(87.8,328.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_56.setTransform(96.375,332.225);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_57.setTransform(103.65,330.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_58.setTransform(84.45,320.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_59.setTransform(108.15,319.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_60.setTransform(104.925,311.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_61.setTransform(96.375,307.675);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_62.setTransform(87.375,311.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_63.setTransform(96.375,320.375);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_64.setTransform(96.375,320.375);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAsgtA/AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg/AAgsgtg");
	this.shape_65.setTransform(96.375,320.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_66.setTransform(87.8,328.925);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_67.setTransform(96.375,332.225);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_68.setTransform(103.65,330.225);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_69.setTransform(84.45,320.375);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_70.setTransform(108.15,319.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_71.setTransform(104.925,311.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_72.setTransform(96.375,307.675);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_73.setTransform(87.375,311.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_74.setTransform(96.375,320.375);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_75.setTransform(96.375,320.375);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAsgtA/AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg/AAgsgtg");
	this.shape_76.setTransform(96.375,320.375);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_77.setTransform(87.8,328.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_78.setTransform(96.375,332.225);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_79.setTransform(103.65,330.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_80.setTransform(84.45,320.375);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_81.setTransform(108.15,319.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_82.setTransform(104.925,311.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_83.setTransform(96.375,307.675);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_84.setTransform(87.375,311.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgaAZgjAAQgjAAgZgZQgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape_85.setTransform(96.375,320.375);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_86.setTransform(96.375,320.375);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAsgtA/AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg/AAgsgtg");
	this.shape_87.setTransform(96.375,320.375);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_88.setTransform(116.375,334.375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_89.setTransform(124.95,337.625);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_90.setTransform(132.225,335.625);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_91.setTransform(113.025,325.775);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_92.setTransform(136.725,325.125);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_93.setTransform(133.525,317.225);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_94.setTransform(124.95,313.075);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_95.setTransform(115.95,317.225);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_96.setTransform(124.95,325.775);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAYAaAAAiQAAAkgYAZQgZAZgkAAQgiAAgagZg");
	this.shape_97.setTransform(124.95,325.775);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQBAAAAsAtQAtAtAAA+QAABAgtAsQgsAthAAAQg+AAgtgtg");
	this.shape_98.setTransform(124.95,325.775);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_99.setTransform(116.375,334.375);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_100.setTransform(124.95,337.625);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_101.setTransform(132.225,335.625);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_102.setTransform(113.025,325.775);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_103.setTransform(136.725,325.125);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_104.setTransform(133.525,317.225);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_105.setTransform(124.95,313.075);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_106.setTransform(115.95,317.225);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_107.setTransform(124.95,325.775);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAYAaAAAiQAAAkgYAZQgZAZgkAAQgiAAgagZg");
	this.shape_108.setTransform(124.95,325.775);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQBAAAAsAtQAtAtAAA+QAABAgtAsQgsAthAAAQg+AAgtgtg");
	this.shape_109.setTransform(124.95,325.775);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_110.setTransform(116.375,334.375);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_111.setTransform(124.95,337.625);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_112.setTransform(132.225,335.625);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_113.setTransform(113.025,325.775);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_114.setTransform(136.725,325.125);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_115.setTransform(133.525,317.225);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_116.setTransform(124.95,313.075);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_117.setTransform(115.95,317.225);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_118.setTransform(124.95,325.775);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAYAaAAAiQAAAkgYAZQgZAZgkAAQgiAAgagZg");
	this.shape_119.setTransform(124.95,325.775);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQBAAAAsAtQAtAtAAA+QAABAgtAsQgsAthAAAQg+AAgtgtg");
	this.shape_120.setTransform(124.95,325.775);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_121.setTransform(116.375,334.375);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_122.setTransform(124.95,337.625);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_123.setTransform(132.225,335.625);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_124.setTransform(113.025,325.775);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_125.setTransform(136.725,325.125);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_126.setTransform(133.525,317.225);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_127.setTransform(124.95,313.075);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_128.setTransform(115.95,317.225);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_129.setTransform(124.95,325.775);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAYAaAAAiQAAAkgYAZQgZAZgkAAQgiAAgagZg");
	this.shape_130.setTransform(124.95,325.775);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQBAAAAsAtQAtAtAAA+QAABAgtAsQgsAthAAAQg+AAgtgtg");
	this.shape_131.setTransform(124.95,325.775);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_132.setTransform(144.225,337.725);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_133.setTransform(152.775,341.025);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_134.setTransform(160.075,339.025);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_135.setTransform(140.875,329.175);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_136.setTransform(164.575,328.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_137.setTransform(161.35,320.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_138.setTransform(152.775,316.475);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_139.setTransform(143.775,320.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_140.setTransform(152.775,329.175);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_141.setTransform(152.775,329.175);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_142.setTransform(152.775,329.175);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_143.setTransform(144.225,337.725);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_144.setTransform(152.775,341.025);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_145.setTransform(160.075,339.025);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_146.setTransform(140.875,329.175);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_147.setTransform(164.575,328.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_148.setTransform(161.35,320.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_149.setTransform(152.775,316.475);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_150.setTransform(143.775,320.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_151.setTransform(152.775,329.175);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_152.setTransform(152.775,329.175);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_153.setTransform(152.775,329.175);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_154.setTransform(144.225,337.725);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_155.setTransform(152.775,341.025);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_156.setTransform(160.075,339.025);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_157.setTransform(140.875,329.175);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_158.setTransform(164.575,328.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_159.setTransform(161.35,320.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_160.setTransform(152.775,316.475);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_161.setTransform(143.775,320.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_162.setTransform(152.775,329.175);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_163.setTransform(152.775,329.175);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_164.setTransform(152.775,329.175);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_165.setTransform(144.225,337.725);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_166.setTransform(152.775,341.025);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_167.setTransform(160.075,339.025);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_168.setTransform(140.875,329.175);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_169.setTransform(164.575,328.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_170.setTransform(161.35,320.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_171.setTransform(152.775,316.475);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_172.setTransform(143.775,320.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_173.setTransform(152.775,329.175);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_174.setTransform(152.775,329.175);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_175.setTransform(152.775,329.175);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_176.setTransform(170.725,341.825);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_177.setTransform(179.325,345.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_178.setTransform(186.6,343.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_179.setTransform(167.4,333.25);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_180.setTransform(191.075,332.575);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_181.setTransform(187.875,324.675);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_182.setTransform(179.325,320.55);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_183.setTransform(170.325,324.675);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAjg");
	this.shape_184.setTransform(179.325,333.25);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgYQAZgZAjAAQAjAAAaAZQAZAYAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_185.setTransform(179.325,333.25);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQBAAAAsAtQAtAsAAA/QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_186.setTransform(179.3,333.25);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_187.setTransform(170.725,341.825);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_188.setTransform(179.325,345.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_189.setTransform(186.6,343.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_190.setTransform(167.4,333.25);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_191.setTransform(191.075,332.575);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_192.setTransform(187.875,324.675);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_193.setTransform(179.325,320.55);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_194.setTransform(170.325,324.675);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAjg");
	this.shape_195.setTransform(179.325,333.25);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgYQAZgZAjAAQAjAAAaAZQAZAYAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_196.setTransform(179.325,333.25);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQBAAAAsAtQAtAsAAA/QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_197.setTransform(179.3,333.25);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_198.setTransform(170.725,341.825);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_199.setTransform(179.325,345.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_200.setTransform(186.6,343.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_201.setTransform(167.4,333.25);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_202.setTransform(191.075,332.575);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_203.setTransform(187.875,324.675);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_204.setTransform(179.325,320.55);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_205.setTransform(170.325,324.675);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAjg");
	this.shape_206.setTransform(179.325,333.25);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgYQAZgZAjAAQAjAAAaAZQAZAYAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_207.setTransform(179.325,333.25);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQBAAAAsAtQAtAsAAA/QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_208.setTransform(179.3,333.25);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_209.setTransform(170.725,341.825);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_210.setTransform(179.325,345.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_211.setTransform(186.6,343.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_212.setTransform(167.4,333.25);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_213.setTransform(191.075,332.575);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_214.setTransform(187.875,324.675);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_215.setTransform(179.325,320.55);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_216.setTransform(170.325,324.675);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAjg");
	this.shape_217.setTransform(179.325,333.25);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgYQAZgZAjAAQAjAAAaAZQAZAYAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_218.setTransform(179.325,333.25);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQBAAAAsAtQAtAsAAA/QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_219.setTransform(179.3,333.25);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_220.setTransform(199.125,342.925);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_221.setTransform(207.675,346.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_222.setTransform(214.975,344.225);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_223.setTransform(195.775,334.375);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_224.setTransform(219.475,333.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_225.setTransform(216.25,325.775);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_226.setTransform(207.675,321.65);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_227.setTransform(198.675,325.775);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_228.setTransform(207.675,334.375);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_229.setTransform(207.675,334.375);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_230.setTransform(207.675,334.35);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_231.setTransform(199.125,342.925);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_232.setTransform(207.675,346.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_233.setTransform(214.975,344.225);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_234.setTransform(195.775,334.375);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_235.setTransform(219.475,333.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_236.setTransform(216.25,325.775);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_237.setTransform(207.675,321.65);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_238.setTransform(198.675,325.775);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_239.setTransform(207.675,334.375);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_240.setTransform(207.675,334.375);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_241.setTransform(207.675,334.35);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_242.setTransform(199.125,342.925);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_243.setTransform(207.675,346.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_244.setTransform(214.975,344.225);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_245.setTransform(195.775,334.375);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_246.setTransform(219.475,333.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_247.setTransform(216.25,325.775);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_248.setTransform(207.675,321.65);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_249.setTransform(198.675,325.775);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_250.setTransform(207.675,334.375);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_251.setTransform(207.675,334.375);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_252.setTransform(207.675,334.35);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_253.setTransform(199.125,342.925);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_254.setTransform(207.675,346.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_255.setTransform(214.975,344.225);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_256.setTransform(195.775,334.375);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_257.setTransform(219.475,333.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_258.setTransform(216.25,325.775);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_259.setTransform(207.675,321.65);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_260.setTransform(198.675,325.775);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_261.setTransform(207.675,334.375);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAZAAAjQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_262.setTransform(207.675,334.375);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_263.setTransform(207.675,334.35);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_264.setTransform(226.725,341.825);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_265.setTransform(235.275,345.075);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_266.setTransform(242.575,343.075);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_267.setTransform(223.375,333.225);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_268.setTransform(247.075,332.575);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_269.setTransform(243.85,324.675);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_270.setTransform(235.275,320.525);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_271.setTransform(226.275,324.675);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_272.setTransform(235.275,333.225);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkAAQgiAAgagZg");
	this.shape_273.setTransform(235.275,333.225);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_274.setTransform(235.275,333.225);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_275.setTransform(226.725,341.825);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_276.setTransform(235.275,345.075);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_277.setTransform(242.575,343.075);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_278.setTransform(223.375,333.225);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_279.setTransform(247.075,332.575);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_280.setTransform(243.85,324.675);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_281.setTransform(235.275,320.525);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_282.setTransform(226.275,324.675);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_283.setTransform(235.275,333.225);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkAAQgiAAgagZg");
	this.shape_284.setTransform(235.275,333.225);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_285.setTransform(235.275,333.225);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_286.setTransform(226.725,341.825);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_287.setTransform(235.275,345.075);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_288.setTransform(242.575,343.075);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_289.setTransform(223.375,333.225);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_290.setTransform(247.075,332.575);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_291.setTransform(243.85,324.675);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_292.setTransform(235.275,320.525);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_293.setTransform(226.275,324.675);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_294.setTransform(235.275,333.225);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkAAQgiAAgagZg");
	this.shape_295.setTransform(235.275,333.225);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_296.setTransform(235.275,333.225);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_297.setTransform(226.725,341.825);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_298.setTransform(235.275,345.075);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_299.setTransform(242.575,343.075);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_300.setTransform(223.375,333.225);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_301.setTransform(247.075,332.575);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_302.setTransform(243.85,324.675);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_303.setTransform(235.275,320.525);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_304.setTransform(226.275,324.675);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_305.setTransform(235.275,333.225);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkAAQgiAAgagZg");
	this.shape_306.setTransform(235.275,333.225);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgsAAhAQAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAABAgtAsQgtAtg/AAQg+AAgtgtg");
	this.shape_307.setTransform(235.275,333.225);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_308.setTransform(254.05,338.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_309.setTransform(262.625,341.675);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_310.setTransform(269.925,339.675);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_311.setTransform(250.725,329.825);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_312.setTransform(274.4,329.175);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_313.setTransform(271.175,321.25);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_314.setTransform(262.625,317.125);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_315.setTransform(253.625,321.25);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_316.setTransform(262.625,329.825);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgiAAgagZg");
	this.shape_317.setTransform(262.625,329.825);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_318.setTransform(262.625,329.825);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_319.setTransform(254.05,338.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_320.setTransform(262.625,341.675);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_321.setTransform(269.925,339.675);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_322.setTransform(250.725,329.825);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_323.setTransform(274.4,329.175);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_324.setTransform(271.175,321.25);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_325.setTransform(262.625,317.125);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_326.setTransform(253.625,321.25);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_327.setTransform(262.625,329.825);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgiAAgagZg");
	this.shape_328.setTransform(262.625,329.825);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_329.setTransform(262.625,329.825);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_330.setTransform(254.05,338.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_331.setTransform(262.625,341.675);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_332.setTransform(269.925,339.675);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_333.setTransform(250.725,329.825);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_334.setTransform(274.4,329.175);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_335.setTransform(271.175,321.25);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_336.setTransform(262.625,317.125);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_337.setTransform(253.625,321.25);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_338.setTransform(262.625,329.825);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgiAAgagZg");
	this.shape_339.setTransform(262.625,329.825);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_340.setTransform(262.625,329.825);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_341.setTransform(254.05,338.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_342.setTransform(262.625,341.675);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_343.setTransform(269.925,339.675);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_344.setTransform(250.725,329.825);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_345.setTransform(274.4,329.175);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_346.setTransform(271.175,321.25);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_347.setTransform(262.625,317.125);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_348.setTransform(253.625,321.25);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgaAZgjAAQgiAAgagZQgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAig");
	this.shape_349.setTransform(262.625,329.825);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgiAAgagZg");
	this.shape_350.setTransform(262.625,329.825);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_351.setTransform(262.625,329.825);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_352.setTransform(281.275,333.525);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_353.setTransform(289.85,336.825);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_354.setTransform(297.125,334.825);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_355.setTransform(277.925,324.975);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_356.setTransform(301.625,324.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_357.setTransform(298.425,316.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_358.setTransform(289.85,312.275);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_359.setTransform(280.85,316.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAaQgZAZgjAAQgjAAgZgZQgZgaAAgjQAAgjAZgZQAZgZAjAAQAjAAAZAZQAZAZAAAjg");
	this.shape_360.setTransform(289.85,324.975);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaABgjQgBgjAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_361.setTransform(289.85,324.975);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_362.setTransform(289.85,324.975);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_363.setTransform(281.275,333.525);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_364.setTransform(289.85,336.825);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_365.setTransform(297.125,334.825);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_366.setTransform(277.925,324.975);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_367.setTransform(301.625,324.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_368.setTransform(298.425,316.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_369.setTransform(289.85,312.275);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_370.setTransform(280.85,316.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAaQgZAZgjAAQgjAAgZgZQgZgaAAgjQAAgjAZgZQAZgZAjAAQAjAAAZAZQAZAZAAAjg");
	this.shape_371.setTransform(289.85,324.975);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaABgjQgBgjAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_372.setTransform(289.85,324.975);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_373.setTransform(289.85,324.975);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_374.setTransform(281.275,333.525);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_375.setTransform(289.85,336.825);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_376.setTransform(297.125,334.825);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_377.setTransform(277.925,324.975);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_378.setTransform(301.625,324.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_379.setTransform(298.425,316.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_380.setTransform(289.85,312.275);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_381.setTransform(280.85,316.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAaQgZAZgjAAQgjAAgZgZQgZgaAAgjQAAgjAZgZQAZgZAjAAQAjAAAZAZQAZAZAAAjg");
	this.shape_382.setTransform(289.85,324.975);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaABgjQgBgjAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_383.setTransform(289.85,324.975);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_384.setTransform(289.85,324.975);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_385.setTransform(281.275,333.525);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_386.setTransform(289.85,336.825);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_387.setTransform(297.125,334.825);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_388.setTransform(277.925,324.975);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_389.setTransform(301.625,324.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_390.setTransform(298.425,316.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_391.setTransform(289.85,312.275);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_392.setTransform(280.85,316.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAaQgZAZgjAAQgjAAgZgZQgZgaAAgjQAAgjAZgZQAZgZAjAAQAjAAAZAZQAZAZAAAjg");
	this.shape_393.setTransform(289.85,324.975);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaABgjQgBgjAZgZQAZgZAjAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZg");
	this.shape_394.setTransform(289.85,324.975);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQA/AAAtAtQAtAsAAA/QAAA/gtAtQgtAtg/AAQg+AAgtgtg");
	this.shape_395.setTransform(289.85,324.975);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_396.setTransform(306.275,328.675);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_397.setTransform(314.825,331.95);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_398.setTransform(322.125,329.975);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_399.setTransform(302.925,320.125);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_400.setTransform(326.625,319.45);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_401.setTransform(323.4,311.525);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_402.setTransform(314.825,307.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_403.setTransform(305.825,311.525);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAaQgZAZgkAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_404.setTransform(314.825,320.125);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZg");
	this.shape_405.setTransform(314.825,320.125);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg/AtgsQAtgtA+AAQBAAAAsAtQAtAsAAA/QAAA/gtAtQgsAthAAAQg+AAgtgtg");
	this.shape_406.setTransform(314.825,320.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_407.setTransform(41.85,340.05);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGgBAIQABAJgHAGQgGAGgJABQgIgBgGgGg");
	this.shape_408.setTransform(50.15,344.7);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_409.setTransform(59.75,350.05);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_410.setTransform(72.75,355.65);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_411.setTransform(40.85,300.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_412.setTransform(68.9,337.875);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_413.setTransform(83.1,342.5);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_414.setTransform(97.5,345.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHAAgIQAAgIAHgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAHQgGAGgJABQgIgBgGgGg");
	this.shape_415.setTransform(111.9,346.85);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_416.setTransform(130.45,347.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_417.setTransform(147.25,349);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_418.setTransform(163.2,349.85);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_419.setTransform(178.275,349.85);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_420.setTransform(192.9,349.85);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_421.setTransform(210.55,349.85);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_422.setTransform(228.725,349);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_423.setTransform(250.55,347.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAHAHQAFAGABAIQgBAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_424.setTransform(273.4,346.225);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_425.setTransform(286.925,344.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_426.setTransform(303.75,342.35);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_427.setTransform(317.275,341);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#8F8777").s().p("AgNAFIAKgIQAMgLAMgDQgFAJgOALQgIAIgOAHQAAgGAHgHg");
	this.shape_428.setTransform(358.25,296.25);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#8F8777").s().p("AgQAJQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgCIACgCIADgDIAKgFQALgFAKABQgHAIgLAEIgJAEIgFABIgBgBIgBABg");
	this.shape_429.setTransform(391.6,273.7917);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#8F8777").s().p("AgDgCQAGgIAGgDQABAIgGAIQgEAIgJADQAAgIAGgIg");
	this.shape_430.setTransform(368.45,290.25);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#8F8777").s().p("AgLAFQADgFADgDIAHgHQAIgGAJgEIgLAPIAIgCQgHAIgNAKIgOAKg");
	this.shape_431.setTransform(372.475,288.325);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#8F8777").s().p("AgSADIAPgJQATgKAOAAQgHAGgWAMIgeAQQAEgJAHgGg");
	this.shape_432.setTransform(381.125,281.35);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#8F8777").s().p("AgKAAQAGgHAEgCQAFgDAHgBIAOgJQgDAIgGAIIAAABIgCAAIgLAFQgDAAgFAGQgMANgJADQAIgOAHgIg");
	this.shape_433.setTransform(390.1,277.85);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#8F8777").s().p("AgOADIADgEQADgCAGgDQAKgEAIADQgFAHgLACIgKAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABQgCgDACgDg");
	this.shape_434.setTransform(398.4306,268.9558);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.5,0.4,0.4).s().p("AgJABIAGgFQAJgGAIAAQgEAIgIAFIgPAIQAAgFAEgFg");
	this.shape_435.setTransform(351.125,304.9731);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.8,0.7,0.9).s().p("AgHAFIgDAAIAAgBIgCABIgBgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgBIAEgBQACgCAGgBQAIgBAGAEQgFAEgJACg");
	this.shape_436.setTransform(374.0167,293.39);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.8,0.6,0.8).s().p("AgEgBQADgGAFgDQADAHgCAFQgEAGgEADQgDgHACgFg");
	this.shape_437.setTransform(358.4126,302.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.7,0.6,0.9).s().p("AgJAFQAAgFADgCIAEgFQAFgFAGgBIgFALIgBABIAIAAQgGAGgIAFIgHADg");
	this.shape_438.setTransform(361.525,301.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-0.9,0.7,0.9).s().p("AgNgBIALgFQANgEALAEQgGAEgQAFIgKACIgKAEQAAgGAHgEg");
	this.shape_439.setTransform(367,297.4683);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.5,0.6).s().p("AgJgCIADgEQACgCAEgBQAEAAAEABIAIgFQgBAFgDAGIAAABIgDABIgHAAIgCAAIgBADIgGAGIgIAFQADgLADgFg");
	this.shape_440.setTransform(373.975,296.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.7,0.6,0.9).s().p("AgLAEIgBgCQABgDADgBQADgCAFgBQAHAAAGAFQgHAEgGAAIgFAAIgCAAIgBAAIgBACg");
	this.shape_441.setTransform(378.625,290.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-1,0.8,0.9).s().p("AAAAFQgIgCgDgGQAGgDAGACIAGACIABABIAAAAIACAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAABIgBACIgBABIgBAAIgDABIgDAAIgDAAgAAHAAQABACAAgCIAAAAg");
	this.shape_442.setTransform(380.925,287.86);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.4,0.5).s().p("AgJACQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAgBQABgDACgBQAFgDADABQAFABACADIgKAFIgBACIgDAGQgFgDAAgEg");
	this.shape_443.setTransform(383.105,285.9625);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.6,0.7).s().p("AgJAEIAFgHQAGgIAJgCQgCAJgGAHIgFAGIgIAFQgBgEACgGg");
	this.shape_444.setTransform(353.4083,313.475);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.6,0.5,0.7).s().p("AgLAHIgBgBQgBAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBIABgBIADgCIAGgEQAIgDAIACQgFAGgIADIgGACIgEAAIgBABg");
	this.shape_445.setTransform(372.68,296.6136);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.9,0.7,0.9).s().p("AgEAAQACgHADgDQAFAFgBAGQgBAGgFAEQgEgFABgGg");
	this.shape_446.setTransform(359.8,309.075);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.9,-1,0.4,0.7).s().p("AgIAIQgBgFACgDIADgHQAEgGAFgCIgDAMIAAACIAIgDQgDAHgHAHIgHAGg");
	this.shape_447.setTransform(362.6938,307.65);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.6,0.4,0.5).s().p("AgNABQAEgEAFgDQALgGAMAAQgGAHgNAHIgIAFQgHADgDADQAAgGAFgGg");
	this.shape_448.setTransform(366.9227,302.3482);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.9,0.7,0.9).s().p("AgJAAIACgFIAFgEQADgCAFABIAGgGQABADgBAIIAAABIgKAEIgCAAIAAACIgEAJQgEAFgDACIACgSg");
	this.shape_449.setTransform(373.5,300);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.6,0.5,0.7).s().p("AgKAGIgBgDQAAgDACgBQADgDAEgBQAIgDAGAEQgFAFgHACIgFABIgBAAIgBABIAAACg");
	this.shape_450.setTransform(376.5,292.9019);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-1,0.7,0.7).s().p("AgLAAQAFgEAHAAIAGABIABAAIACAAIACACIAAABIgBABIgBABIgCABIgHACQgHAAgFgFg");
	this.shape_451.setTransform(377.95,289.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.7,0.5,0.6).s().p("AgHAEQgDgEAEgFQAEgEADAAQAFAAADADIgFAFIgDACIgBACIgBAHQgFgCgBgEg");
	this.shape_452.setTransform(379.565,287.125);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-1,0.7,0.9).s().p("AgHAGIADgIQAEgKAIgDQABAHgFAKIgEAHIgGAHQgCgFABgFg");
	this.shape_453.setTransform(385.6606,283.875);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-0.9,0.8,1).s().p("AgEAAQgBgFAFgFQAEAEABAGQAAAHgEAEQgFgFAAgGg");
	this.shape_454.setTransform(391.0917,278.225);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1,-1.2,0.5,0.9).s().p("AgGAJIgBgIIABgHQAEgGAEgEIgBANIAAABIAIgEQgCAGgGAKIgFAHg");
	this.shape_455.setTransform(393.6,276.25);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.7,0.5,0.6).s().p("AgMAEQADgFAEgEQALgKAKgBQgFAKgKAHIgPAQQgCgGAEgHg");
	this.shape_456.setTransform(396.6417,270.175);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.5,0.3,1.3).s().p("AgJADIAFgGQAHgHAIgCQgCAIgGAGIgFAGIgIAGQgBgEACgHg");
	this.shape_457.setTransform(375.7107,288.05);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.7,0.2,0.8).s().p("AgJAGIgBAAIgBAAIgBgBQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIABgBIADgCIAHgEQAIgDAHACQgFAGgIADIgGACIgCAAIgCAAg");
	this.shape_458.setTransform(395.6917,272.0056);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.2,0.2,1.2).s().p("AgEAAQACgHAEgDQAEAFgBAGQgCAHgEADQgEgGABgFg");
	this.shape_459.setTransform(382.3,283.925);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-1.7,0.2,1.3).s().p("AgJAHIABgIIAEgFQAEgGAGgCIgEAMIAIgCQgDAGgIAIIgHAFg");
	this.shape_460.setTransform(385.275,282.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.2,0.2,1.2).s().p("AgNABQADgDAHgEQALgHAMACQgIAHgLAGIgKAFIgKAFQAAgGAGgFg");
	this.shape_461.setTransform(389.7,277.4778);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-1.6,0.3,1.8).s().p("AgJAAIACgEIAGgFQADgBAEAAIAGgGIgBAMIAAABIgKADIgBAAIgFALQgDAEgDACIACgRg");
	this.shape_462.setTransform(396.4,275.4);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#8F8777").s().p("AgHADQAAgDADgDQAFgHAHAAQAAAGgFAGIgDAFQgEACgBACQgDgCABgGg");
	this.shape_463.setTransform(374.9625,284.55);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#8F8777").s().p("AgNAFIAAAAIgBAAIAAAAIgCAAIgBAAIAAgBIAAgDIACgBIAEgBIAJgDQAMgBAIAEQgIAFgKABg");
	this.shape_464.setTransform(394.55,272.44);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#8F8777").s().p("AgDACQgEgFACgHQAFACAEAHQAEAGgBAGQgGgBgEgIg");
	this.shape_465.setTransform(382.4778,281.75);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#8F8777").s().p("AgGALIgEgHQgCgCABgEQABgHAGgDIAAAGIABAEIACADIAAAAIADgBIAKAAQgCADgEADIgHAFIgDACg");
	this.shape_466.setTransform(386.355,280.875);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#8F8777").s().p("AgUACIAGgEQAEgDAIgCQAMgDANAEQgIAEgPADIgQAEQgDABgBADQgDgDADgEg");
	this.shape_467.setTransform(389.2432,276.7107);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#8F8777").s().p("AgJAHIgCgEQgBgDAAgCQgBgDAEgDIAEgCIAFAAIAGABIABgEIAFAIIABAEIgFAAIgIABIgDAAIAAAAIABAFQAAAIgDACIgEgIg");
	this.shape_468.setTransform(398.5659,276.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#8F8777").s().p("AgOAFIgBgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAAAIADgDQAEgCAHAAQAKAAAIAFQgHADgLABIgIAAIABACIgCAAIgEgBg");
	this.shape_469.setTransform(398.075,269.6417);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#8F8777").s().p("AACAFQgMgBgJgGQAKgDALABIAMADIADAAIACABIABACQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgBAAIgBABIgDAAIgGAAIgFAAg");
	this.shape_470.setTransform(397.65,266.6375);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#8F8777").s().p("AgNADIAKgIQAMgIALgBQgIAKgKAHIgVAMQABgEAFgIg");
	this.shape_471.setTransform(352.725,300.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#8F8777").s().p("AgQAFIgCAAIgBgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAgBIABgBIAGgBIALgDQANgBAJAEQgIAEgNACIgKAAg");
	this.shape_472.setTransform(385.45,284.915);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#8F8777").s().p("AgEgBQAEgJAGgEQACAHgDAJQgEAJgGAEQgCgIADgIg");
	this.shape_473.setTransform(363.1629,297.225);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#8F8777").s().p("AgNAKQAAgEADgGIAHgHQAFgGAJgDIgJAOIgCAEQAIgCAHAAQgJAIgNAGIgGADg");
	this.shape_474.setTransform(367.8,296.125);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#8F8777").s().p("AgTgBQAIgEAJgDQARgFAQAEQgIAEgXAGIgPAEQgKADgFADQACgHAJgFg");
	this.shape_475.setTransform(375.4,290.6111);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#8F8777").s().p("AgLgCIAEgHQAEgCADAAQAGgBAGACIAKgJIgFAPIgBACIgDAAIgLAAIgCABIgLANQgEAFgGACIAKgVg");
	this.shape_476.setTransform(385.475,290.05);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#8F8777").s().p("AgQAFIgBgEQABgCAEgCQAFgDAGAAQALAAAIAGQgGACgNABIgIAAIgCAAIgBAAIgBABIgBADg");
	this.shape_477.setTransform(392.0167,281.275);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#8F8777").s().p("AAAAFQgKgDgGgGQAIgDAKADIAJADIABABIgBgBIADAAQABABAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgBACIgCABIgDAAg");
	this.shape_478.setTransform(395.12,277.1182);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#8F8777").s().p("AgMADQgBgHAGgFQAGgDAFABQAGABAEAEIgKADIgFACIgDAEIgDAJQgFgEAAgFg");
	this.shape_479.setTransform(398.3429,274.5275);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#8F8777").s().p("AgJACIAGgGQAIgGAJABQgDAHgJAFIgGAFIgJADQAAgDAEgGg");
	this.shape_480.setTransform(349.35,309.4981);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#8F8777").s().p("AgGAFIgEgBIAAAAIAAAAIgCAAIgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIAAgBIAEgCIAIgCQAIgBAGAEQgFAFgJABg");
	this.shape_481.setTransform(372.2083,297.94);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#8F8777").s().p("AgEgBQAEgGAEgDQADAHgCAFQgDAGgFADQgDgGACgGg");
	this.shape_482.setTransform(356.6374,306.825);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#8F8777").s().p("AgJAFQAAgEADgDIAEgFQAFgFAGAAIgGALIAIAAQgEAEgKAGIgHAFg");
	this.shape_483.setTransform(359.75,306.15);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#8F8777").s().p("AgNgBQAFgEAGgBQANgEALAEQgJAGgNACIgKADIgLAEQABgGAHgEg");
	this.shape_484.setTransform(365.225,302.0125);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#8F8777").s().p("AgJgCIAEgFQADgCACAAQAEAAAFABIAHgFQgBAGgCAFIgBACIgDAAIgHAAIgCAAIgBACIgGAHQgDAEgFABIAGgQg");
	this.shape_485.setTransform(372.175,301.45);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#8F8777").s().p("AgLAEQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABAAQAAgCADgCIAIgDQAIAAAFAFQgFADgIABIgFAAIgCAAIgBAAIgBACIgCgCg");
	this.shape_486.setTransform(376.8417,295.225);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#8F8777").s().p("AAAAFQgIgCgDgFQAFgDAIABIAGADIACAAIACACIAAACIgDACIgCAAIgEAAIgDAAg");
	this.shape_487.setTransform(379.125,292.3982);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#8F8777").s().p("AgJACQgBgEAFgEQAEgDAEABQAEABADAEIgGADIgEABIgBACIgDAGQgEgCgBgFg");
	this.shape_488.setTransform(381.3339,290.4857);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().ls(["#4C473C","#3C3124"],[0.42,0.855],-4.2,-9.6,12.5,12.8).p("AE+lgQg3BMhRBeQikC6iIBZQgOAPgUAPQgoAegagDQgRAFgQANQggAaAGAkIgnA7IBMBKQA+gQBjhIQDHiQC9kUg");
	this.shape_489.setTransform(376.3881,281.5032);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#7B6D5F").s().p("Ak8EcIAmg8QgFgjAfgaQAQgNARgGQAbAEAngeQAUgPAPgQQCIhXCji8QBShdA2hMIgIDPQi+EUjGCPQhkBIg+ARg");
	this.shape_490.setTransform(376.425,282.05);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_491.setTransform(241.7,354.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_492.setTransform(297.2,373.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAHAGQAFAGABAIQgBAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_493.setTransform(311.65,371.35);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGABAIQgBAJgGAHQgGAFgJABQgIgBgGgFg");
	this.shape_494.setTransform(327.85,367.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAGgJABQgIgBgGgGg");
	this.shape_495.setTransform(340,363.95);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_496.setTransform(350.725,359.925);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_497.setTransform(361.375,353.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_498.setTransform(372.775,347.25);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_499.setTransform(382.05,339.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_500.setTransform(391.8,331.875);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_501.setTransform(398.75,322.35);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_502.setTransform(82.8,359.775);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_503.setTransform(90.85,361.775);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_504.setTransform(98.9,364.65);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_505.setTransform(108.625,366.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAHgGAHAAQAJAAAHAGQAFAGABAIQgBAJgFAHQgHAFgJABQgHgBgHgFg");
	this.shape_506.setTransform(119.05,367.8);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_507.setTransform(129,368.95);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_508.setTransform(138.6,369.05);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAHgHAHABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgHAAgHgFg");
	this.shape_509.setTransform(148,368.95);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_510.setTransform(178.275,369.95);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_511.setTransform(189.85,369.95);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAHgHAHABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgHAAgHgFg");
	this.shape_512.setTransform(199.7,369.95);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_513.setTransform(210.05,369.95);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_514.setTransform(220.7,369.95);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_515.setTransform(231.8,369.025);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_516.setTransform(242.45,369.025);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_517.setTransform(254,368.95);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgGAIAAQAIAAAHAGQAHAGAAAIQAAAJgHAHQgHAFgIABQgIgBgGgFg");
	this.shape_518.setTransform(264.85,367.8);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_519.setTransform(274.1,367.8);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_520.setTransform(285.5,366.8);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_521.setTransform(295.825,365.65);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_522.setTransform(306.475,364.65);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_523.setTransform(316.65,362.5);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGABAIQgBAIgGAHQgGAGgJABQgIgBgGgGg");
	this.shape_524.setTransform(327.85,360.35);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAHAGQAFAGABAIQgBAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_525.setTransform(340,356.85);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_526.setTransform(352.275,351.15);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_527.setTransform(361.375,344.75);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGABAIQgBAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_528.setTransform(372.95,337.85);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_529.setTransform(382.7,330.5);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_530.setTransform(390.75,322.35);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHAAgIQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAIgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_531.setTransform(397.625,313.75);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAGgJABQgIgBgGgGg");
	this.shape_532.setTransform(41.55,332.35);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_533.setTransform(49.3,337.2);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_534.setTransform(56.925,341.175);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHAAgIQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAIgHAHQgGAHgJAAQgIAAgGgHg");
	this.shape_535.setTransform(64.525,345.75);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_536.setTransform(72.75,347.9);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_537.setTransform(80.95,351.15);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAHgGAHAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgHgBgHgFg");
	this.shape_538.setTransform(89.45,353.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_539.setTransform(108.625,356.85);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgHAHgHQAGgGAIAAQAJAAAHAGQAFAHAAAHQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_540.setTransform(129,359);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_541.setTransform(136.45,359.625);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_542.setTransform(147.25,359.625);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_543.setTransform(156.55,359.625);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHgBgIQABgIAGgGQAHgGAHAAQAJAAAGAGQAHAGAAAIQAAAIgHAHQgGAGgJABQgHgBgHgGg");
	this.shape_544.setTransform(166.4,360.35);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAIgHAHQgGAGgJABQgIgBgGgGg");
	this.shape_545.setTransform(177.2,360.35);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_546.setTransform(199.1,359.625);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgHAHgHQAGgGAIAAQAJAAAGAGQAHAHgBAHQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_547.setTransform(220.7,359);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgHAHgHQAGgGAIAAQAJAAAGAGQAHAHgBAHQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_548.setTransform(241.4,359);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_549.setTransform(262.675,349.85);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_550.setTransform(263.75,356.85);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_551.setTransform(284.425,355.65);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_552.setTransform(295.825,354.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_553.setTransform(306.475,353.5);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_554.setTransform(317.275,352.625);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_555.setTransform(326.7,350.475);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAHgHAHAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAQgHAAgHgHg");
	this.shape_556.setTransform(338.8,346.225);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_557.setTransform(350.1,341.75);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_558.setTransform(361.375,335.7);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAGAHQAGAGABAIQgBAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_559.setTransform(372.95,329.175);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAGQgGAGgJABQgIgBgGgGg");
	this.shape_560.setTransform(382.7,320.2);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_561.setTransform(391.8,311.425);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAIgBAHAHQAGAGAAAIQAAAJgGAHQgHAFgIAAQgIAAgGgFg");
	this.shape_562.setTransform(399.8,300.65);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJABQgIgBgGgGg");
	this.shape_563.setTransform(39.7,323.45);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_564.setTransform(47.15,327.75);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_565.setTransform(55.75,332.05);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDADQgDAEgGAAQgEAAgDgEg");
	this.shape_566.setTransform(338.8,323.125);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAQgFAAgEgEg");
	this.shape_567.setTransform(346.1,319.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_568.setTransform(325.7,342.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIgBQAJABAGAGQAGAGABAIQgBAIgGAHQgGAGgJABQgIgBgGgGg");
	this.shape_569.setTransform(334.6,336.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_570.setTransform(351.05,331.325);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_571.setTransform(361.375,325.275);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAHgGAHAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAHgJAAQgHAAgHgHg");
	this.shape_572.setTransform(372,318.5);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAGAGAAAIQAAAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_573.setTransform(380.55,311.425);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_574.setTransform(387.85,303.65);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAHAGQAFAGABAIQgBAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_575.setTransform(394.8,295.75);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.rf(["#020203","#494645"],[0.204,0.91],0.4,-0.1,0,0.4,-0.1,43.5).s().p("AosD1IgBgGQCWgUCCgiQCQgnB8g4QCGg8BxhNQA5gpA1gxQA9g4AhgxIABgBIBzgBQhJCAiPBkQh6BUifA6QiMAzikAfQhRAPhLAJQhbAKhCADgAFhiDQgyAvg9ArQg+Asg7AfQg/AkhAAbIhCAbIhDAYIhFAVIhEATQhrAchsATQBzgLCDgZQChgfCNg0QCkg8B1hOQBDgtA2g2QAfgfAVgcQAWgbAYgkIhwAEIABgBIgCABIABAAQggAxg8A7g");
	this.shape_576.setTransform(346.475,372.125);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.rf(["#020203","#494645"],[0.204,0.91],0,0,0,0,0,43).s().p("ADpgmQCahrA5hfIBxgCQirEfnoCAQiZAoimATIiHALQHjhCEyjXg");
	this.shape_577.setTransform(346.475,371.975);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#291C13").s().p("AoJFvIApgBIhZgCQlsgHByhFQAygfLYisQLDinAlgoQA8iMAhhGQBDiLiCFhIByAAQi0FopkBjQi/AejTABg");
	this.shape_578.setTransform(317.467,359.5615);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgHAAAAgIQAAgDACgCQADgCACAAQAJAAAAAHg");
	this.shape_579.setTransform(397.9,346.225);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQADgCACAAQAJAAAAAHQAAAIgJAAQgIAAABgIg");
	this.shape_580.setTransform(397.9,346.225);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgHAAAAgIQAAgDACgCQADgCACAAQAJAAAAAHg");
	this.shape_581.setTransform(397.9,334.325);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQADgCACAAQAJAAAAAHQAAAIgJAAQgIAAABgIg");
	this.shape_582.setTransform(397.9,334.325);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAJgJAAQgHAAAAgJQAAgCACgDQADgCACAAQAJAAAAAHg");
	this.shape_583.setTransform(394.3,340.9);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQADgDACAAQAJAAAAAIQAAAIgJAAQgIAAABgIg");
	this.shape_584.setTransform(394.3,340.9);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_585.setTransform(392.625,346.225);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_586.setTransform(392.625,346.225);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#1E1E1C").p("AgCoJIBZAAIATAsQAbAtAjAIIgCBpQgFCCgTB8Qg7GMioC/IhPAAQBCiKA1jGQBqmOg/k1g");
	this.shape_587.setTransform(410.8056,292);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#1E1E1D").s().p("AimIKQBDiKA1jGQBpmOg+k1IBYAAIAUAsQAbAuAiAHIgBBpQgGCCgSB8Qg8GMinC/g");
	this.shape_588.setTransform(410.95,292);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#4A4233").p("AgYomIARBNQAQBkgDB3QgIF8jHGoIB3AAQBGhFBGieQCOk7AFm8QgLgBgUgPQgogdgshFg");
	this.shape_589.setTransform(410.9843,292.1);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#4B4333").s().p("AjLImQDHmoAIl8QADh3gPhkIgRhMIBxAAQAtBEAoAeQAUAOALABQgFG8iOE8QhGCehGBEg");
	this.shape_590.setTransform(411.125,292.1);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#291C13").s().p("AszGsQmOgljqhmQhKgggxgjIioiUIhdhpIgag+IgbhrQEiDSFQBjQCoAyBuAHQGxAvLdgdQFwgPEYgYQG9gbFgkZQCwiNBWiHQhIDhg5BpQgdA2gOAHQjaEUntCBQiaApijAUIiEANIqJACQkEAIiOAAQjBAAiEgNg");
	this.shape_591.setTransform(215.6,352.45);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.lf(["#44301F","#411B14"],[0,0.204],-1.5,20.6,-13.7,403.2).s().p("A39DkQiihEh2hXIhXhJIgQhYQC5CRDHBeQBkAuA+ASQFeBsO6gZQHcgMGXgjQH6giFck8QBshjBQh0QAog6ASgmIgoCzQjpFFmMCgQh8Ayh/AcIhkARQiGAboSAQIn2ALQh/AIh5AAQpMAAmsi3g");
	this.shape_592.setTransform(216.8,332.3578);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#3C3123").p("AwxGAICEAKQCmALCmAIQITAWFLgeID6gQQETgUB+gTIBtgKQCHgUCDgzQGkijDhmTIgDhvQhKCDiGCMQkNEZkxAwQkKAzmuAiQtcBDs0hYQh8gjiUg7Qkoh4h1h9IAFA7QAIA7ALAHQAFADBLA5QBdBCBgA0QEwCpD8gFg");
	this.shape_593.setTransform(216.0911,320.6263);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.lf(["#2F271D","#020203"],[0.059,0.263],-0.1,0.9,-1.8,385.1).s().p("ApiGWQimgHimgMIiEgKQj8AFkwioQhgg1hchCIhRg7QgLgHgHg8IgGg6QB1B9EoB3QCUA8B9AiQMzBYNchDQGughEKgzQEygxEMkYQCHiNBJiDIAEBvQjiGUmkCiQiDAziHAUIhtALQh+ATkTAUIj6AQQi9ARj+AAQi/AAjkgKg");
	this.shape_594.setTransform(216.15,321.2821);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().ls(["#3C3123","#3C3124"],[0.42,0.855],1.1,-84.6,-3.7,79.7).p("A+dmiIAREsQAdEJA+CfIA4gmIAVAXQAbAfAlAfQB1BnCkBTQINELMXgXIJOACICJgJQCqgRChgnQIDh7DtkoIAigHQBLifA8jRQB3mlhIkBIABDqQhJCCiBCOQkDEakaA9Ql/BQoXAcQwsA4r1kEQhLguhWhMQisiYg2iRg");
	this.shape_595.setTransform(216.5789,317.8028);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.lf(["#3C3123","#020203"],[0,0.125],0.3,-1.3,3.1,388.6).s().p("AhnL/QsXAXoNkKQikhUh1hmQglgggbgeIgVgYIg4AmQg+ifgdkJIgRksQA2CRCsCYQBWBMBLAvQL1EDQsg4QIXgcF/hQQEag8EDkbQCBiOBJiBIgBjrQBIEBh3GlQg8DRhLCfIgiAHQjtEooDB8QihAmiqARIiJAJg");
	this.shape_596.setTransform(216.5785,319.4);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#1D1D1C").p("EAg/gPjQgCgUAGgPQAMgeAqAYIASAMQASAQgEAWIgDAdQgHAfgYANIAAAXIAZgDQAcgHAQgXIAKAIQAGAOgUAZQgGAIgNAGQgZALgggKIgBAQIAIAIQAGANgKAWQgHAEgKACQgVAEgOgKQgBgFgEgGQgKgNgUgGQgUAAgWACQgsAFgHAPIgLANQgFAPAaAIIAMAKQAGANgZAQQgJgBgKADQgTAIgEAXIADBTQAKBYAoAbIAVATQAbAYAfAaIABBIQgBBXgKBQIgrDdQg7D6hPCLQgoBahVBsQirDZjhBbQgrAZhlAdQjJA5kgARI5ygKQhkgQiGgaQkRg1ifhDQhLgghfhMQi9iZhjjfQgagpgbhYQg2iwgDjlIASjzQgaACgbgNQg2gYgBhIQAAgXALgVQAWgpA4AOIAvANQAJgUAOgTQAbglAUAKIAsAKIgbAnQgcApAAALIAMAUQALAYgGARIgDENIA4AtQA9A0AdAlIBJBWQBhBiB0A7IAjAPQAxAUA+ATQDHA9ELAjQNWBtS2jIIA2gmQA7gsAYglQgEgNADgSQAFgjAjgUICjhqQCxh9BGheICli/IgDlPQABgQAEgWQAHgsANgfIgjAAQgPgKgLgPQgUgeAYgVIAoAAQAsgBAUgGIAQgLQAUgMATgFQA7gRAXAzg");
	this.shape_597.setTransform(225.9082,291.4839);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#1D1D1C").s().p("AubQOQhkgQiGgaQkRg1ifhDQhLgghfhMQi9iZhjjfQgagpgbhYQg2iwgDjlIASjzQgaACgbgNQg2gYgBhIQAAgXALgVQAWgpA4AOIAvANQAJgUAOgTQAbglAUAKIAsAKIgbAnQgcApAAALIAMAUQALAYgGARIgDENIA4AtQA9A0AdAlIBJBWQBhBiB0A7IAjAPQAxAUA+ATQDHA9ELAjQNWBtS2jIIA2gmQA7gsAYglQgEgNADgSQAFgjAjgUICjhqQCxh9BGheICli/IgDlPQABgQAEgWQAHgsANgfIgjAAQgPgKgLgPQgUgeAYgVIAoAAQAsgBAUgGIAQgLQAUgMATgFQA7gRAXAzIBYAAQgCgUAGgPQAMgeAqAYIASAMQASAQgEAWIgDAdQgHAfgYANIAAAXIAZgDQAcgHAQgXIAKAIQAGAOgUAZQgGAIgNAGQgZALgggKIgBAQIAIAIQAGANgKAWQgHAEgKACQgVAEgOgKQgBgFgEgGQgKgNgUgGQgUAAgWACQgsAFgHAPIgLANQgFAPAaAIIAMAKQAGANgZAQQgJgBgKADQgTAIgEAXIADBTQAKBYAoAbIAVATIA6AyIABBIQgBBXgKBQIgrDdQg7D6hPCLQgoBahVBsQirDZjhBbQgrAZhlAdQjJA5kgARg");
	this.shape_598.setTransform(225.9082,291.4839);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#020203").p("AVeAVQiEAEiwgEQlfgIjXgkInlASQorAPijAHIqfAH");
	this.shape_599.setTransform(204.6547,308.6992);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#020203").p("A2lApQGBAHAJgHQACgCEKgTQEigVBqgWIDfgPQDogMAtAQIDEATQDRASA7gDINkAT");
	this.shape_600.setTransform(202.8507,301.8926);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().ls(["#4C473C","#020203"],[0.42,1],-3.3,0,3.3,0).p("AAcAAQAAANgIAIQgJAJgLAAQgLAAgIgJQgIgIAAgNQAAgMAIgIQAIgJALAAQALAAAJAJQAIAIAAAMg");
	this.shape_601.setTransform(393.55,254.3);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.lf(["#4C473C","#020203"],[0.42,1],-2.8,0,2.8,0).s().p("AgTAVQgIgJAAgMQAAgLAIgJQAIgJALAAQALAAAJAJQAIAJAAALQAAAMgIAJQgJAJgLAAQgLAAgIgJg");
	this.shape_602.setTransform(393.55,254.3);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().ls(["#4C473C","#020203"],[0.42,1],-4.7,0,4.8,0).p("AgqAAQAAASANAMQAMANARAAQASAAAMgNQANgMAAgSQAAgRgNgMQgMgNgSAAQgRAAgMANQgNAMAAARg");
	this.shape_603.setTransform(393.9,256.8);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.lf(["#4C473C","#020203"],[0.42,1],-4.2,0,4.3,0).s().p("AgdAeQgNgMAAgSQAAgQANgNQAMgNARAAQARAAANANQANANAAAQQAAASgNAMQgNANgRAAQgRAAgMgNg");
	this.shape_604.setTransform(393.9,256.8);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#1D1D1C").s().p("AKkOGIgcglQgdgrgWgiQgFgPgUgcIghgmQghgmgkgjIAAAAIgHgOIjLkTIhGhfIkZl/Qgbgrg5hEQgjgqg4g/QhThchrhwIgIgGIglgvIglg4Qgjg0gmg+Qgjg6g8hlIBjCdIBKBxQASAcAUAbIAeAoIAMALIAAAAIABAAQBtBvBTBdQAsAvAxA6QA3BCAdAuIAAAAIGmI9IBGBgQATAaAPAXIAZAlIAHAOQAjAjAhAmQATAWANARIAOAVQAIAMADALIAAgBQAaArAYAjIAbAmQAQAVAOANQgKgIgVgag");
	this.shape_605.setTransform(320.0125,159.8125);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#1D1D1C").s().p("AryJSIDZizIABgBIANgIIGOlEQAHgLASgRIBUhIIBzhbQBZhFCShuIABAAIABAAQAPgGAXgPIAlgYIBJg0QA9gtBRg/IDJifQhuBehYBFQhnBSgmAcIhIA1IgmAZQgaAQgNAEQiMBpheBKQgyAnhAA1IhUBHQgRAOgHAMIgBABIAAAAImYFIIgHAEIjdCuIhIA7g");
	this.shape_606.setTransform(135.4125,212.825);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().ls(["#8E7059","#4B3218"],[0,1],-54.7,0,58.9,0).p("AAzREQAbgVAegZQC2iaBci7QAjg1AphZQBTizAei4QAHg1AEhKQAGiTgRhpQACgmgShlQgkjKhhk2IAJAqQAGAxgKAgQgIgFgRgdQgig5gph3IAOBDQANBHgHAQQgZgXgbgkQg1hHgFg7IgDAoQAAAxAQAtQgqgugog5QhChdgFg0QgBgLACgJABhwqIgCA7QgCBTADAUQgbgdgggsQg/hZgYhKIgBATQgBATABADIAwCdQA3C8AgCdIAYDGQATDqgcCtIgMA8QgQBKgUBHQhBDkhYBzQgnBGhDBdQiFC8iHB3IhEAxQB0g/B+hDQD8iFAygQIAjgQQAqgQAhgFQBpgOgaBuIgLAfQgPAmgVAnQgoBJgzA4QgkAngoAfIgdAAQAwgaA5gs");
	this.shape_607.setTransform(233.6992,190.8609);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.lf(["#8E7059","#4B3218"],[0.576,1],-56.4,0,56.4,0).s().p("AAgQ5QAzg4AohJQAVgmAPgnIALgfQAZhuhpAOQghAFgpARIgjAPQgzAQj8CFQh+BDhzA/IBEgxQCGh3CFi7QBDheAohGQBYhyBAjkQAVhHAQhLIALg6QAcivgSjpIgZjHQggidg2i8IgxicQgBgEABgTIABgTQAYBKA/BZQAgAsAcAeQgDgVAChTIACg7QAFA0BBBeQAoA4AqAuQgPgtAAgwIADgpQAFA7A1BIQAaAjAaAXQAGgQgMhGIgOhEQApB3AhA6QARAdAJAEQAJgfgGgyIgIgqQBhE2AkDKQARBlgBAmQARBpgHCTQgDBKgHA1QgfC4hSCzQgpBagkA0QhcC7i1CaQgeAZgbAVQgjAngpAfIgeAAQAxgaA5gsg");
	this.shape_608.setTransform(235.6149,191.95);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#6C4E3C").p("AgUAZIAQACQARgBADgQQACgKgCgIQgDgTgOABQABATgUAgg");
	this.shape_609.setTransform(276.5824,111.9204);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#6B4E3C").s().p("AgSAZQATgggBgTQAPgBADATQACAIgCAKQgDAQgRABg");
	this.shape_610.setTransform(276.3625,111.9195);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#6B4E3C").p("AkVjXIANAaQAHAdgjAOIAqAsQA1A2A+AxQDHCfDRA3QAKgLAHgPQAOgegQgPQhMhMhthRQjZimijgkg");
	this.shape_611.setTransform(246.7283,92.9815);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#6B4D3C").s().p("AiJABQg+gxg1g2IgqgsQAjgOgHgdIgNgaQCjAlDZClQBtBRBMBMQAQAQgOAdQgHAPgKALQjRg3jHifg");
	this.shape_612.setTransform(246.9142,92.95);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#6B4E3C").p("AALggQgLgCgKAEQgWAIgBAdIAHAOQALAOARgCIARgDQAQgIgCgWQACgGgCgHQgEgPgSgEg");
	this.shape_613.setTransform(216.8801,74.6042);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#6B4D3C").s().p("AgaAVIgHgOQABgdAWgIQAKgEALACQASAEAEAPQACAHgCAGQACAWgQAIIgRADIgEAAQgPAAgJgMg");
	this.shape_614.setTransform(216.8821,74.6042);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().ls(["#8E7059","#4B3218"],[0,1],17.3,-163,-7.7,162.9).p("AB35XQgfD6ggEXQhAIvgJCUIikfRIBUgIQBbgFAiAVIBG8CQAclNAXlbQAvq2gVhNQgHADgKABQgVADgSgHg");
	this.shape_615.setTransform(228.4007,169.5283);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.lf(["#8E7059","#4B3218"],[0,1],7.7,-38.2,2.4,31.4).s().p("AhhZHIhUAIICk/RQAJiUBAovQAgkXAfj6QASAHAVgDQAKgBAHgDQAVBNgvK2QgXFbgcFNIhGcCQgigVhbAFg");
	this.shape_616.setTransform(228.4243,169.425);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.rf(["#BEAA9E","#87764C"],[0.467,1],0,0,0,0,0,26.2).s().p("AAlBYQgWgCgXgBQgxgDgLAIQgOAFgWACQgqAEgkgRQgXgBgfACQg9ADgkAMQgIgCgDgDQgGgGAfgIIAugSQA5gQA6AGIAhAFQArABA1gVICdAAIAdgJQAbgMgPgRQh5APgMgPQhQgCgSAIQgUAEgXACQgwAEgWgIQgXgEgeAAQg7ABggASQgOADgKABQgVADAQgKIAogYQAygZAwgFIBBAAQBIgEAggTQCigDARgKIAngJQAvgHArAGIAfAAQAkgDAWgQIAAA1QgYgEgXAEQgtAIAEAlIABALQADAOAHAJQAVAfA4gXIAAAvIhPgDQhRgCgFAFQgQAHgbADQgPACgQAAQgnAAgpgMg");
	this.shape_617.setTransform(204.6291,22.0668);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#8E705A").p("AgDgiQgiAJgSANQgiAaBWAVIAVgFQAYgFAMgIQAngWhggdg");
	this.shape_618.setTransform(243.4674,4.0561);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#8E7059").s().p("Ag3gMQASgNAigJQBgAegnAVQgMAIgYAGIgVAEQhWgVAigag");
	this.shape_619.setTransform(243.4674,4.05);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().ls(["#281F17","#020203"],[0.42,1],-16.7,0,16.8,0).p("AgSgUICqAAIAJALQAHAOgQATIi6gNIgJAFQgJAHADALIACASQgDAUgaAGIgXgKIgZgbQgRgkgTgSQASgZAUgTQAngmAHAfIAMAQQASATAcAJg");
	this.shape_620.setTransform(56.1902,289.2089);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.lf(["#281F17","#020203"],[0.42,1],-16.2,0,16.2,0).s().p("AhkBEIgZgaQgRgkgTgSQASgZAUgTQAngmAHAeIAMARQASASAcAJICqAAIAJALQAHAOgQAUIi6gOIgJAFQgJAIADAKIACATQgDAUgaAGg");
	this.shape_621.setTransform(56.271,289.196);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#1D1D1C").p("AMrwVQjIENjOENQmbIagZAAIhuB8QhyCFgSArIhUB6QhlCRhQB2Ih0CaQh6CdghAR");
	this.shape_622.setTransform(134.7256,182.5008);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#1D1D1C").s().p("ALPLyQgHgMgVgWQgRgRgPgOQgSgPgRgMIAAAAQgRgUglglIg5g3QhNhHgngiQgigYg1g0QgpgogngpQhKhOhPhcIABAAIgcgWQgNgLgMgNIgZgZIgXgZQgmgng4g/QhPhZhoh6IAAgBQgLgPgqgwIkhlJIEnFEQAqAwANAQQBlB3BRBaQAvA1AvAxIAvAyIAaAYQAKAKAQALIABABQBKBXBPBUQAtAwAiAhQAxAxAkAbQA6A0A6A3IA4A3QAlAmAQAVQARAMASAQQAWAUAJALQARASAMARQANAWAGASQgHgUgOgUgAqCqsIhhhtIBhBtg");
	this.shape_623.setTransform(321.75,174.075);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAHAHQAFAGABAIQgBAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_624.setTransform(32.55,326);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_625.setTransform(33.525,334.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_626.setTransform(33.525,291.3);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAHAHQAFAGABAIQgBAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_627.setTransform(27.25,281.875);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#584D38").s().p("AAKAFIgKAAQgKABgNgCQgOgEgGgGIABAAQAFADAPADIAWADIAKABIALgCQAKAAANABIAAABQgJADgOAAg");
	this.shape_628.setTransform(442.775,204.15);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#584D38").s().p("AgZAJIgMgFIgMgFIAAgBIANACIANADIAYAEIANgBIAMgFQAPgEAIgGIABAAQgIAKgOAEIgOADIgNACIgJAAQgIAAgJgBg");
	this.shape_629.setTransform(443.975,202.49);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#836D5D").s().p("AgUAaIgVAAIgdgaIAbACIgXgXIA8AVIgBAAQALABAKAAQAJgBAMgDQAJgEAKgGQAJgHAHgJQgMAUgWAJQgMAFgKACQgHABgPgBIgBAAIgYgHIAQAQIgYgDIAEAEIASAAIABAAQALADARABQARABANgFQAPgFAHgMQAGgKACgTQABATgGALQgGAPgRAHQgNAFgTABIgDABQgKAAgRgEg");
	this.shape_630.setTransform(442.9571,202.4031);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#836D5D").s().p("AguAYIgQgPIAZADIgTgTIAqANQAgAFAagSQANgJAGgKQABAuguAHg");
	this.shape_631.setTransform(443.6753,202.15);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#53554D").s().p("AhIAcQAKgKAOgLQAYgTAbgQIABgBIACAAIAVgEIBBgTQgTAKgWAKIgWAIIgWAFQgoAZgKAIQgLAHgOALQgQANgHAIQAGgLANgOg");
	this.shape_632.setTransform(426.3,198.025);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#322A20").s().p("Ag9BBQgHgBgJgDIgPgHIAAAAQgLgJgGgMQgHgOACgNQAAgMAIgNIAHgLIAJgKIAAAAIABAAQAXgLAZgGQAXgGAagBQAWAAAcAGQATAFAaAQIAAAAQAGACAEAGQADAGgBAHQAAgGgDgGQgEgFgGgCIAAAAIgRgIIgdgIQgagFgWABQgaACgVAFQgZAHgUAJIgHAIIgHAKQgHALgBAKQgBALAFAMQAEAKAJAJIAOAHQAGAEAIABQAKACAFgEQAFgFAAgKQABALgFAFQgFAFgIAAIgDAAg");
	this.shape_633.setTransform(428.9243,210.3309);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#322A20").s().p("AhbAxIAUgOQAKgGAKgEQAJgFAUgEIAcgFQAggCAaAAIAPgEIAPgEQAQgIAFgKQAGgMgFgQQgDgMgIgMIgHAHQgHAHgFABQgEABgEgCQgEgDgBgDQgDgFgBgIQACAIAEAFQAEAHAGgDQADgBAHgGIAKgOIACACQALAPAFAOQAHATgHAPQgGANgTAJIgQAGIgQADIgBAAIg6ADIgcADQgSADgIAFIgBAAIAAAAQgIACgMAHQgLAFgJAHQgQAKgWAQQAOgNAVgRg");
	this.shape_634.setTransform(430.8565,197.325);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#433520").s().p("AgHAeQgJAAgIgFQgIgCgHgHQgHgFgCgJQgCgGACgKIAEAOQADAGAGAFIAOAGIANADQAJgDAHgEQAKgHAGgFQANgLANgUQgFAUgPAQQgQATgUAFIgBABg");
	this.shape_635.setTransform(408.775,195.75);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#433520").s().p("AgnAyQgHgBgHgFQgGgFgBgHQgEgKgBgPQgBgRAEgIIAAgBIABgBQAQgLARgIQARgIASgBQAVgBAPAKQAMAIAKAVIABAFIgBAEQgDACgGAAIgBAAQgIgQgQgHQgIgDgJAAQgIABgHAEQgOAIgBATQgBAQAFARIABADIgDABQgLAGgMAAIgCAAgAg4AHIADAXQADALALABQAJABAKgEQgEgSACgPQADgWAQgIQAGgDALgBQAJAAAJAEQAHADAHAIQAGAFAEAIQAFAAADgCQACgCgCgGQgMgUgLgGQgPgIgSAEQgOACgSAIQgQAHgOAKIABgBIgCACIABgBQgDAHABANg");
	this.shape_636.setTransform(421.24,193.2474);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#494539").p("AABASQgdAAAPgRQAHgIAMgIIAMAQQAGARgXAAg");
	this.shape_637.setTransform(422.7815,194.1293);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#544939").s().p("AgQAAQgBgLADgKQAFgOAIgEQAEgCAAgMIgDgUQAEAGAEANQABAGAAAFIgCAGIgDADIgCACQgFAEgCAKQgCAIABAKQACAQAGAVIAPAlQgdgkgEgmg");
	this.shape_638.setTransform(417.0607,224.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#544939").s().p("AgHAHQgGgHgDgGQgEgJABgIIAnAvQgQgCgLgPg");
	this.shape_639.setTransform(411.7722,232.675);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#544939").s().p("AACBqQgHgIgFgHQgIgKgBgJIAAgGIABgCIABgEIACgEIACgEQACgGgBgLQAAgQgHgTIgHgRIgEgGIABgDIAAgBIADgDIACgBIAIgFQAKgFAGgGQAHgGgBgGIgDgJIgKguQgEgNgFgEQAGAEAGAMIASA3QABAGgDAGQgDAEgEAEQgFAFgLAHIgHAFIAAABIAIASQAHAVABASQAAANgDAHIgCAFIgDAEIgBADIAAAFQABALAPATIANAPQAJAJAEAFIgdgZg");
	this.shape_640.setTransform(414.525,219.35);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#544939").s().p("AgPBNQgHgKgDgJQgCgHACgGIAFgJQAIgQgFgUQgCgJgEgIIgFgIIgHgHQgFgGACgHQABgFAEgGQAHgKAIgFIAJgGIADgBIACgBIAAgBQAAgHgCgNIgEgTIgEgJQgDgGgEgBQAEAAAEAGIAFAJQAFAMACAHQACAKAAALIAAADIgBADIgBABIgCAAIgBABIgBABIgIAGQgHAGgGAIQgGAIAEAFIAHAHIAHAJQAFAKACAKQAFAZgJARIgFAIIAAAIQABAFAGAMQAJAOAOASIAaAfQgngjgQgYg");
	this.shape_641.setTransform(413.1214,221.425);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#544939").s().p("AAAABIAAgBIABABIgBABIAAgBg");
	this.shape_642.setTransform(21.525,234.0628);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#544939").s().p("AAAABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQADACACADIgDgCg");
	this.shape_643.setTransform(19.8219,233.975);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#544939").s().p("AACA/QABABAAABQAAABAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAABQABABAAACQgBgBgBgIQABADAAgLIgCgHQgBgGACAFIAAABIACAIQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAgBIgBgHIgDgMIAAABIgCgIIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAABABABQgBgBAAAAQAAAAAAABQAAAAAAABQAAABABACIACACIgCgCQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAABAAAAIAIAVQADACgDgJQgDgLABgBQAEAJgBgFQgBgLgJgQIADAEIACgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAEAEIgEgIIgHgIQABAAAAABQABAAAAAAQAAAAAAgBQAAAAAAAAIgDgEIADACIgDgDIAOAOIAKAEQgHgIgVgPIAEACQAEADgEgEIABABQAAAAABAAQAAAAAAAAQgBgBAAAAQAAgBgBgBIALAHQABAAgFgEIgIgIIADAHIgDgEIgFgFIACgBIgGgEQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAABABIACABQACADgBADQgBAAAAABQAAABgBAAQAAABAAAAQAAABAAAAIACAAQADADgEgBIAAgBQgGgDgBABIADACIgCgBQgBAAABABQAAAAAAAAQABAAAAAAQABABABAAQgEgBgCABQgBACgFgCQABABABAAQABABAAAAQABAAAAAAQAAAAABAAIADABIgDAAIAEACIgFABQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABIgBgBQgBAAAAAAQgBABABAAQAAAAABABQAAABACABIgFgDQAFAEgFgBQgGAAADACIgNgFQgIgDgDgCIABABQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBgBAAQgBAAAAgBIAHABIgGgCQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAJABACgHQABgHAFgBIgEgCQAGACgJgFIAJADIgGgEQAAgCAEgBQABgBABAAQAAAAAAgBQABAAAAgBQAAgBgBAAIAEABIgBgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQADACADAAQADAAAGAEQACgBgIgEQADgBgDgEQAAAAAAAAQABgBAAAAQAAAAABgBQAAgBABAAQACgDAFACIgDgCIgBgCIgFgDIACgBIABgBIAEADQABgBgDgFIgBgBIABgBIABADQACADADAAIgDgEQgBgBAAAAQAAgBAAAAQAAAAABAAQAAAAABABQgCACAFACIACgBIgGgFQADgDAHgBIAJgEQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQACAAABAFQACAGABgBIgCgGQAAgEgCAAIABgFQgBgMAEAEIAEADIABAAIABAAIABgBIAAACQACgDAEAEIADADIAAAFIAEgGQAAgBAAABQABAAAAAAQAAAAABABQAAAAABABIgBADQADgHACACIgBABIADAAQgBAHADgEQADgDgBAIIACgEIADgDIAAACQAAgBAAgBQABAAAAgBQAAAAABABQAAAAAAABIABADIACgHQAAAEADgEIADgDQABABgDAIQABAAABgGQAAgBABgBQAAAAAAgBQAAAAAAABQABAAAAABIgBACQgCATACgDIAAgDQAAgBAAAAQAAAAAAAAQABAAAAAAQAAABAAABIAGASIgFgCQAAgBAAABQgBAAABAAQAAAAABABQAAAAABABIAEADQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQgBAAAAAAIgBgBIgCABIADADIABAAIgCACQAAABABAAQAAAAAAABQAAAAgBAAQAAgBgBAAQAFAEgFABQAAgBgFgDQAHAGgHgEQANAMgBABIgCgDQgBAAAAgBQgBAAAAAAQAAAAAAABQABAAAAAAIgDgDQAAABABABQAAAAABABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgGgEQABABABAAQAAABAAAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQABAAAAABQABAAABABQgDAAgDADQgDACgDgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIABACIgDgCIAGAIQgDgDgGgDIAGAGIgFgDQABAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgCgBQAHAEABAEQgBgBgBAAQAAAAgBgBQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBgBIACADIAFADIAAAAIgEgCIAAACQAAgBgBAAQAAAAAAABQAAAAAAAAQAAAAAAABQgBgBAAAAQAAAAgBABQAAAAABABQAAABAAABQACADgDgBIgBgBIgEACQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIAEADQABAGgCABIAEAEIgCAGQgBAFgEgEQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABIgCACIgCgDQgCAAABAFQgEgDgBAGIAAAIIgBgBIAAAHQAAABAAAAQABABAAABQAAAAAAAAQgBABAAAAQABAHgEgFIAAACIgCgHIgEgIIACAHIgCgGIAAAJIACAFIAAAAIAAACQAAAAAAAAQAAAAAAABQAAAAAAABQAAABABABQgEgFgEgKgAALBAIABADIAAgDIgBgBIAAABgAAcALIgCgDIADABQgDgEgWgQQACAAAMAIIgGgGQgGgGACAAIgDgBIABgBIAAgBIAKAHIgIgJIAKAIQABgBgKgHIAKAEIgJgGIgBgBIgBgBQgCgCABADIgDgGIABADIgDgEQABABAAABQABAAAAAAQAAABAAAAQAAAAgBAAIADAEIgDgDQAAABABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQABABgBgBIAAAAQgBABgKgHQgBAAAAAAQAAAAAAABQAAAAABAAQAAABAAAAIAEADIABAAQACAAADAEQgBgBAAAAQgBAAgBgBQAAAAAAABQAAAAAAABQACADgEgBQgGgEgCgCIAEAFIgDgCIAHAIIABAAIAEADIADABQAJAKAQAMgAAigGIgNgMIABgBIgEgDIAAgCIAAgCIgBAEIgDgDIAAAAIgBgBQAAABAAAAQAAABAAgBQAAAAAAAAQgBgBAAAAIAAgCIgBgDIABACIAAgEIgCgEQgBAAADAJIgBgBIAAADIgCgGIAAACIgBgHQgBAAAAAAQAAAAAAAAQAAABAAABQAAAAABACIABADIgCgEQABACAAABQABACAAAAQAAABgBAAQAAgBgBgBIADAGIABAAIAEAFIAFADIABABIANAJgAAEgeIAFAHIAAgBIgBgBIABABIABAAIgCgDIAAACIgBgDIgEgEIABACgAAOgZIAAgHIgBADIAAgFIAAAHIAAABIAAAAIAAAAIAAAAIABABgAACgbIAAgBQAAAAAAgBQAAAAgBAAQAAgBAAgBQgBAAAAgBQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBgBAAIgDgEQgEgCAHAJIAAgCIADAEIAAAAgAAfgcIABABIAAgCIAAgBIgBACgAAUgeIgBABIACABIAAgCIgBAAg");
	this.shape_644.setTransform(19.726,235.6886);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#544939").s().p("AAAABIAAgCIAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAIgBgBg");
	this.shape_645.setTransform(21.9521,240.6363);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#544939").s().p("AAAABQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIACABIgBAAIgBAAg");
	this.shape_646.setTransform(21.675,240.6625);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#544939").s().p("AAAAHIAAgCIACABIgCACgAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIAAgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAALQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAg");
	this.shape_647.setTransform(18.65,241.0208);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#544939").s().p("AgBgDIABAAIAAABIACACIgBAEg");
	this.shape_648.setTransform(19.025,242.05);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#544939").s().p("AgCgOQAAABABABQAAABAAAAQABAAAAAAQAAAAAAgBIAAgBIAAgBQABAFAAAFIABAHIgCgGQAAAEADAIQgBACABAEQgFgSAAgLg");
	this.shape_649.setTransform(18.9,240.3);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#544939").s().p("AAAABIAAgBIABABIgBAAg");
	this.shape_650.setTransform(18.175,241.17);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#544939").s().p("AAAgBIABABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_651.setTransform(18.375,241.475);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#544939").s().p("AAAgBIABABIgBACg");
	this.shape_652.setTransform(17.525,240.475);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#544939").s().p("AAAgDQAAABAAABQAAABAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAAAAAIAAgHg");
	this.shape_653.setTransform(18.3667,242.7);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#544939").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQgBACABADQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_654.setTransform(16.395,240.275);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#544939").s().p("AAAAAIABgCQABAFgCAAIAAgDg");
	this.shape_655.setTransform(16.4917,241.25);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#544939").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_656.setTransform(16.1625,240.8625);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#544939").s().p("AAAACIgCABIACgFIAAACQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAABAAABQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_657.setTransform(15.8063,238.825);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#544939").s().p("AgvAVQAHgRALgQQAUgiAQABIAqAJIgYAeQgZAhgFATg");
	this.shape_658.setTransform(20.15,234.7986);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#48443B").ss(0.5).p("AAACbIALijQglAAgCgDQAcABAGgLQAIgMAGgSQALgjgNgYQgMgQgQgGQghgOgZAtIABAbQAIAbAeAHQAFACAFgDQALgGAFgYQAAgFgCgHQgFgMgNgGIgGAJIAMAMQAHAPgTAMQgJAAgHgHQgPgOAIggQAGgIAIgFQASgLASAPIAMAUQAIAcgXArQgUAFgVgKQgogUgBhNQAGgOAMgLQAZgWAfAOIAKACQAKAFALAJQAjAdAOBGIATDHQgJgLgPgGQgfgLgfAcg");
	this.shape_659.setTransform(11.5532,253.1876);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#4C483F").s().p("AA/CQQgfgMggAcIAMiiQglgBgCgDQAcACAGgLQAIgNAGgRQALgjgNgZQgMgPgQgHQghgNgZAtIABAaQAIAcAeAHQAFACAFgDQALgGAFgZQAAgFgCgGQgFgNgNgGIgGAKIAMAMQAHAOgTANQgJgBgHgHQgPgNAIggQAGgIAIgGQASgKASAPIAMAUQAIAcgXAqQgUAFgVgKQgogUgBhMQAGgOAMgLQAZgXAfAPIAKACQAKAEALAJQAjAeAOBFIATDHQgJgLgPgFg");
	this.shape_660.setTransform(11.475,252.6409);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#48443B").p("AguAtIAHhHIAegRQAigLAWAfIAABGg");
	this.shape_661.setTransform(15.4749,272.0346);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#4C473F").s().p("AguAtIAHhHIAegRQAigLAWAfIAABGg");
	this.shape_662.setTransform(15.5,272.0292);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#544939").s().p("AAAABIgBgCIADABIgCACIAAgBg");
	this.shape_663.setTransform(16.35,233.8458);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#544939").s().p("AgBAAIAAgBIADADIgDgCg");
	this.shape_664.setTransform(7.9,231.7);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#544939").s().p("AgCAAIAFgBQAAABAAAAQgBAAAAAAQAAAAAAAAQABABAAABg");
	this.shape_665.setTransform(19.325,269.45);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#544939").s().p("AgDACIADgEIADAAIgBACQABAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQgBgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAABIgCABIgBgBg");
	this.shape_666.setTransform(12.9,240.275);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#544939").s().p("AAAACIgBgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIACABIgBACIgBAAg");
	this.shape_667.setTransform(17.8083,249.0268);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#544939").s().p("AgCAAIAFAAIgDABg");
	this.shape_668.setTransform(18.45,250.075);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#544939").s().p("AgBABIAAgBQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAIACADIgDgBg");
	this.shape_669.setTransform(19.3375,248.5167);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#544939").s().p("AAAACIAAgEQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAADg");
	this.shape_670.setTransform(20.15,253);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#544939").s().p("AgBAAIADAAIgDABg");
	this.shape_671.setTransform(20.3,254.575);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#544939").s().p("AgBABQgDgDAEACQAGACgFgBIgBABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAABAAg");
	this.shape_672.setTransform(22.247,251.6);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#544939").s().p("AgCAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAFADgFAAIAAAAIgCgCg");
	this.shape_673.setTransform(21.351,254.55);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#544939").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABIgCAAIgBgBg");
	this.shape_674.setTransform(20.525,257.1188);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#544939").s().p("AABACIAAAAgAAAgBIABADQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_675.setTransform(22.75,253.575);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#544939").s().p("ABKC4QAAgEgEgBIAHgJIgEAAQAAgBgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAgEgDADQAJgMgCgUQgBgXADgIQAAgBAAAAQAAAAgBAAQAAAAgBAAQgBAAgBABQABgBABgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgFgDIAJgFIgEgBIgDAAQgBgEADgLQADgJgDgFQABgBAEAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQgFADgBgGQgBgFgDAAQAEgBACgGQACgFAHACQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQABgJgEgEIAAgEQgBABgFgDQACgEgCgLQgBgIACgDQAAABAAAAQgBABAAAAQAAAAABABQAAAAAAABIAAgGIAAgBQAEAAABgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgDIgBABIgBgDIADACQAEACABgDQgDgDgEgBQgHgCgGAAQAJAIgGACIgEgEQgDgDgCAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAAAABQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQgBgCgDgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIADgCQgBgDABgGIAAgJIAFgDQgDgCgGgBQgHAAgDABIAAgEIgBgDQgEAHgCgHQAAAAAAAAQgBgBAAAAQABAAAAAAQAAgBAAAAIADgCIgFAAQACgCAHAAQAHgBADgDQACgCACgGIABgDIgBgCIgBAAIgOAGQgLAGgFAEQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIADgEQAAgBAAgBQABAAgBgBQAAAAgBgBQAAAAgBgBQgFgBAAgBIAFAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBAAAAABQALgFABgCQgBgFgJABQgHABgEAEIALADQgCACgEgBQgFgBgCADIgEgHQAEACACgEQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgDIAdgHIgDgCIACgEIgJACIgDgBIgCABIgPAIQgBgCAEgFQAEgFADAAIAAgBIgBABQgCAAgDgBIgFACQgIAEgBgCIAAADIgDgCQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQACgJADgCIgJAGIAFgIIgBAAIgBgBIgCADQgDAEAAACIgBgMIgBABIAAAAIgBADIgBAFQgEACgCgDQADgBACgFIgEABIgBgDIgCACIgDAAIgBACIgCACIACgEIgBgBIgDgCIgIABIgGgBIAAAAQgEADgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgFIgBAAIgBAGQAAAEgCgDIABgCIgBgEIgBACQgDAGgBgDQADAAABgHQgBACgFAAQgDACACAGIgCgCIgCgDIgDAGQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQAAgBABAAQAAAAABgBQAAAAAAgBQABgBAAAAQABgBAAAAQABgBAAAAQABABAAAAQABABAAABIgCgIIAAgFIAAAAIgCgBIgCACIABACIADAEQgEgBgBABQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAGACAGIgFgBIACACIgEgDIAAABIgCACIAAABIgBABIgBABQABAAABABQAAAAAAABQABAAAAABQAAABgBABIgtCUIANidQAAgFACgDIgBgKIADACIACABIABAAQgDgFAIgDQgJgKAJgIQAAABAAABQgBABAAABQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBABgBIABACQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAAAAIAAgDIABABIABgDIAAgDQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIAEgCIACAAIAFgGQAFgEAFAAQAFgCgEgEQgEgDAFgBIAEAFQADAEAEAAIACgGQACgCADgBIAAAGIAFAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAABQAFgDADADQAFgCgDgGQgDgFgDgEIAJAGQADACABAFIgGAAQAFAFAGgCQAEgBgBAIQgDgCgCABQgBAAAAABQgBAAAAAAQgBABAAABQAAAAAAABIAGgBQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQABAAAAAAQAFgBACgCIACABIACgBIgBABIAAABIAAAAIACgBIADgBQgEACAFADQADABAEgFQADgGACAFIgCAAIACADQADgHAIADQAJACACgHQABABAAABQAAABAAABQAAAAAAABQAAAAgBAAIgIADIADAFQgDgBgCAAQADAFAFgBIAIgEIgCAGQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAQAFABAAgFQABgFACAAIABAIQAFAAAEADIAHAGIADAAQACADAHABQAIAAABADQgCABABAGIAJADQgCgBgDABIgEAEQACABAFABQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAHACIgBgBIAEAAIgBgCIAFADQADADAAADIgFABQABgEgHACQABAAABABQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQACACADAAQAEgBABgDIADAHIAGAFIgFABIAEAEIgIgBQABAFAEAAQAGgCAAAHIgEACIAGAEQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABABAAQAAAAABAAQAAAAABgBQABAAAAgBQADgDABAHQgCADgDAHQABABAAAAQABAAAAAAQAAAAABAAQAAAAABgBIACgDQAAAIgIAEQgEABgBACIgBAAIgBADIgBAGIACgJIgBAJQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIACABIgEAAQAEACgCAFQgBAEAFABQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABgBAAQgCgCgBgGQAAgFgEAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAAAQAAAAAAAAIgFgDQgCAEADAEIAGAGIgCgHQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAABABQAAAAAAABQABAAABAAQAAABABAAQgDACACADQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAIgBgBQAAAEgGAEIgGACIgBADIACADQACADADgCIABgDQAAgEAHACQgGACACAFQAEAHgEAEQgDgCgDABQAAABgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAABIACABIAAACIAAAAIABABIADABIgEACQAEADADABQACAAADAGQgBAAAAgBQAAAAgBAAQAAAAgBABQgBAAAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIAAAAQAAADACACQABAFgCADQgBAEACAEIACAAQADAFAAAMQAAAOABAEIACgFIABAGQABADgCADIgBgDQgFAAgCAEIAEABIgDABQAAAAABABQAAAAAAAAQAAABABAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQgGABAAAJQgBAJgFACQABAAABAAQABAAAAAAQABAAAAgBQABgBAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIgEAFIAFgCIgEAPQgCAHAAAHIgBgBQgCAFAFACIgDAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAGAEgFAGQgFAGADACQgEAAgKAEQgIADgEgCIABACQgDgBAAgEgABKAUIABADIAAgDIgBAAgABJABQgBAEABACIADAAQACgFADgCQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAIgCgCIgBAAIAAgBIAAABIgDACIACAAIABgCIAAAAIgBADgABUhOIACgCQACgEgDgBQAAABgFACIgCABIAEgBIACAEgAgiirIADACQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgEABgABKgCIAAAAgABzgjIgBAAIAAAAQgDgDAAgBIAGACIgBADIAAAAIgBgBg");
	this.shape_676.setTransform(12.363,250.25);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#544939").s().p("AADgGIgCALQgBgDgCAFg");
	this.shape_677.setTransform(10.375,237.95);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#544939").s().p("AgBAAIABgCQADACgDADQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAg");
	this.shape_678.setTransform(21.41,246.75);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#544939").s().p("AAAABIACgDQAAACgCADQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAABgBg");
	this.shape_679.setTransform(21.2833,247.325);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#544939").s().p("AAAAAQAAAAAAAAQAAgBABAAQAAAAAAABQABAAAAAAIgDABIABgBg");
	this.shape_680.setTransform(19.125,235.85);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#544939").s().p("AgBAAIABgDQADgDgBAKQgBgCgCgCg");
	this.shape_681.setTransform(16.0893,236.3679);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#544939").s().p("AAAABIgCgBIAFABg");
	this.shape_682.setTransform(22.975,255.775);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#544939").s().p("AAAADQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIgCABIACgDIADAFIgDAAg");
	this.shape_683.setTransform(21.65,258.925);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#544939").s().p("AgEADIADgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBgBAAIAIgDIgCABQgDACAAACIAAABIgBABIgDgBg");
	this.shape_684.setTransform(21.6875,260.9);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#544939").s().p("AAEABQAAABgBABQAAAAgBAAQAAABgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgFgBgBgEQADAAADAAIAEABIgBgFIAEAFIgBAAIAAAAIAAAAIABAAIgCAEgAAHABgAAHABg");
	this.shape_685.setTransform(22.375,257.35);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#544939").s().p("AgBADIAAAAIAAgGQABAAACACQgDADAAACg");
	this.shape_686.setTransform(22.9,256.425);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#544939").s().p("AgIAFQACgDgCgCQgBgBgEAAIAEAAIgDgEQAEgBAFADQADACACgBIgCACQAAAAAAAAQgBAAAAABQABAAAAABQAAAAAAABQAEADADgIQADACAEAAQgGAEgHABIgGABIgDgBg");
	this.shape_687.setTransform(21.2375,256.025);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#544939").s().p("AAAAAQAAgBAAAAIABADQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_688.setTransform(22.8917,258.675);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#544939").s().p("AAAgCQAAACACACQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_689.setTransform(23.0278,258.175);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#544939").s().p("AAAAAIABAAIAAABg");
	this.shape_690.setTransform(22.7,260.225);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#544939").s().p("AAAgBIACACIgDABg");
	this.shape_691.setTransform(22.9,260.5);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#544939").s().p("AAAAAIgDAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAABIAEACQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAg");
	this.shape_692.setTransform(22.475,261.425);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#544939").s().p("AgCADQACgDgCgCQAEACABACQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABIgBAAIgBAAg");
	this.shape_693.setTransform(24.175,258.2833);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#544939").s().p("AgCAAIAFgBIgCABIgBACg");
	this.shape_694.setTransform(23.8375,260.95);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#544939").s().p("AAAAAIAAgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAACg");
	this.shape_695.setTransform(21.9813,265.025);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#544939").s().p("AgCAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIACgCQABAEgCAAIgBABQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_696.setTransform(23.4643,263.4028);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#544939").s().p("AgCAAQADgDACADQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgBACg");
	this.shape_697.setTransform(24.25,262.775);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#544939").s().p("AAAgBIABABIAAABIgBABg");
	this.shape_698.setTransform(24.1,263.7);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#544939").s().p("AgBAFIABAAQAAgCgBgEQgCgEADgBQgBADAEAKg");
	this.shape_699.setTransform(22.7917,265.625);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#544939").s().p("AgBAAIABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAg");
	this.shape_700.setTransform(23.9727,269.725);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#544939").s().p("ABIArIgRheQgOg1gkgYIgfgOQgrgOgTAQIAAAAQANgRAXACQAPABANAIQAoAGAeAUQAQAJAHAJQATARABAVQABAKgEAHIgCDLQgBgqgLhHgAhYiMIAAAAIAAAAg");
	this.shape_701.setTransform(12.9281,250.6322);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#544939").p("ABdDQQADhMgGhVQgLiqgsgtQgVgVgagJQg1gSgcA6IABATQACAWAHASQAWA6A9gJQAOgXAEgZQAJgygtgOIgZAHQgYAPAIAlIALAQQAOAPANgGQAIgHADgKQAHgUgWgO");
	this.shape_702.setTransform(11.488,256.3983);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.1,0,1.1,0).s().p("AgEAQQgBgDABgFQAAgEAEgIIABgFIAAgDQgCgDgJgCQAJgFAGAEQAFACABAHIgDAJIgFAKIgDAGIAAACQAAAAAAAAQAAABABAAQAAAAAAAAQABAAABAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgCAAgBgEg");
	this.shape_703.setTransform(17.1,293.1029);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.8,0,0.8,0).s().p("AAAARQAAgCABgHIgIgZIAKAAQAJAEgHANIgEAIIAEAKIgCAAIgDgBg");
	this.shape_704.setTransform(16.8531,293.1917);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#3C2E1E").s().p("AgJADQABgDAEgEQAGgIAJAAQgCAHgHAHIgFAFIgGAGQgCgEACgGg");
	this.shape_705.setTransform(13.8306,284.475);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#3C2E1E").s().p("AAAADQgFgCgHgEQAHgFAIADQAKAFgBAHQgIgBgEgDg");
	this.shape_706.setTransform(17.3,280.1279);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.6,0,1.6,0).s().p("AADAKQADgHgBgFQgBgFgGgGIgMgLQAIAAAIAEQAKAGADAJQACALgHAIIgHAGIgHAFg");
	this.shape_707.setTransform(17.2813,283.9725);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.3,0,1.3,0).s().p("AgMgYIATAMQAPAPgXAWg");
	this.shape_708.setTransform(17.0348,283.975);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#3C2E1E").s().p("AgNAOQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIgCgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABgCACgCIAGgGIAMgKIgGAPIgFAFIAKAAIAQACQgHAEgIACIgHACIgFABIgFgCg");
	this.shape_709.setTransform(14.5938,288.75);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#3C2E1E").s().p("AgKAIIgEgHIgCgDIgBgCIABgCQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIADgBIABAAIACABQAFACAHAHIgCAAIACAAIAAAAIAFAAQABAAgCgIIgIgVIAIAJIAHAKIACAGQABAEgCADQgDAFgFABIgIgBIAAAAIAAAAIAEAJIAGANQgKgJgKgNg");
	this.shape_710.setTransform(14.1143,295.6);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.5,0,1.4,0).s().p("AACASQgEgEAAgGIACgGIAAgGIgFAFQgEABgBgCIAAgDIABgEIACADIAAABIAHgOIABgCIACgBIAEACQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIABADIABAGIgCAJQgBAEgEADQgBACADADIAFAHQgFgBgEgCg");
	this.shape_711.setTransform(18.3,305.3);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#3C2E1E").s().p("AgRA2QgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgDABgDIAFgHIAFgEQgFgVAAgNQABgIACgDQACgDADAAIAEABIAFADIAHAJIACgGQABgFgBgHQgCgHgDgEIgJgMIAAgBQAAgCACgDIADgEQADgDAGgBIgHAFIgDAFIgBACIALAJQAFAHADAHQACAIgCAJQgBAHgFAGIgEAGIgEgGIgJgMIgBAAIgBADIADAiIAAACIgBABQgKAHgDADQgCAEACACIAHAEQgFAAgDgDg");
	this.shape_712.setTransform(16.8759,301.65);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#3C2E1E").s().p("AADAVIgDgDIAEABIACgBIgCgCIgCgCIgHgLQgEgCgBgFQgBgEACgEQADgGAGgEIgCAMIAAAEIABABIACABQAGAHADAHIABAEQABAEgCADQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAg");
	this.shape_713.setTransform(16.7731,308.35);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#3C2E1E").s().p("AgKAVQgCgFACgHIAEgIIACgCIAEABIACAAIgBgFIgGgUQAIAGAGAKIACAGQABADgBAEQgCAFgGABIgDgBIgDAJQAAACADABQACACAFABQgDACgEAAQgHAAgDgFg");
	this.shape_714.setTransform(16.525,311.825);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.2,0,1.3,0).s().p("AAFAXQgEgIgFgFIAAgBIgBgBQgFgTAAgLIABgIIABgFQACgDADgBQADAAAEAFIAFAGIgHgEQgEgDAAACIAAAEIABAHIAFAbIAEAHQACAFABAFQACAMgIAGQADgJgDgIg");
	this.shape_715.setTransform(18.0377,317.6727);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#3C2E1E").s().p("AADAfQAEgVgBgLQAAgHgEgHIgIgQQgFgHgCgJQgDgMACgGQAAAGAFAKIAJAPIAJAOQAHAHAAAMQABANgHAWQgGASgIAOg");
	this.shape_716.setTransform(19.6667,315.85);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-2.9,0,2.6,0).s().p("AASAUIgEgGIgHgFIAAAAQgMgKgGgJQgKgOgDgMIATAUIASARIAAAAQAEADADAFQADAEABAGQABALgKAHQAFgKgCgHg");
	this.shape_717.setTransform(20.6012,324.85);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#3C2E1E").s().p("AACAOQgDgDgFgFQgJgKADgLIAaAfIgCAAQgEAAgGgCg");
	this.shape_718.setTransform(21.5859,327.6786);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#3C2E1E").s().p("AgGA2QgDgDgCgIQgCgIAAgPIACgVIADgUQAAgOgCgGQgDgLgHgHQAJAEAFAMQAEAIABAOQABAJgBAMIgCAVQAAAQABAEQACALAFAAIACAAIACgBIAEgCQADgCAAgFQAAgIgIgLQAEADAEAFQAEAFABAFQABAHgFAGIgFAEIgCABIgEABIgCAAQgGAAgEgGg");
	this.shape_719.setTransform(23.9173,328.6313);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#8F8777").s().p("AgNABQAHgEAGgBIAHAAIADABIAAAAIAAABIAAgCIADAAIABACIgBACIgEADIgIACIgBAAQgHAAgGgEg");
	this.shape_720.setTransform(402.45,264.5333);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#8F8777").s().p("AgMABQACgDAFgFQAEgDAEgBQAFAAAFACIgSAOIgFAHQgDgFABgGg");
	this.shape_721.setTransform(406.075,261.57);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.4,0.4,0.5).s().p("AgJAJIgBAAIgBgDIABgBIACgEIAGgEQAGgFAIAAQgCAHgIAFIgFADIgEABIAAAAIgCABg");
	this.shape_722.setTransform(401.1,263.3977);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.8,-1.1,1,1.3).s().p("AgJACIABgFQABgDADgCIAIgDIAEgIQACAGAAAGIAAABIgCACIgHADIAAABIgBADIgCAJQgCAFgDADIgCgSg");
	this.shape_723.setTransform(402.6,266.5);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.5,0.4,0.5).s().p("AgIAIIgCgCQAAgDABgDQABgBAFgEQAHgEAHADQgDAGgHADIgEACIgCABIAAAAIAAACg");
	this.shape_724.setTransform(404.0438,258.9769);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.6,0.7).s().p("AgLADQAEgFAHgCIAGAAIABAAIAAAAIABgBIAEABIAAADIgBABIgDACQgCACgEABIgEABQgFAAgEgDg");
	this.shape_725.setTransform(404.8,255.2583);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.7,0.7,0.7).s().p("AgFAGQgEgFADgEQADgEAEgCQAFgBADACIgFAGIgCADIgBACIAAAHQgDAAgDgEg");
	this.shape_726.setTransform(405.7933,252.6333);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.6,0.2,0.8).s().p("AgKAGIgBgDQAAgCACgCQACgCAFgCQAIgCAGAEQgEAEgIADIgEABIgCgBIgBABIgBACg");
	this.shape_727.setTransform(399.675,268.4442);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.7,0.1,0.6).s().p("AgLAAQAFgEAHAAIAGABIAAABIABAAIACgBIACACIAAABIgBABIgBABIgCABQgDACgEAAQgHAAgFgFg");
	this.shape_728.setTransform(401.275,265.1);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-1,0.2,1).s().p("AgHAEQgDgEAEgFQAEgEAEAAQAEAAAEADIgJAGIgBADIgCAHQgEgCgBgEg");
	this.shape_729.setTransform(402.99,262.825);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#8F8777").s().p("AgDAIIgFgEIgCgDQgBgDACgDIACgCIACgBIADAAIAEAAQAGABADAEQgEACgFABIgCAAIABABIAFAIQgGAAgDgBg");
	this.shape_730.setTransform(398.53,264.65);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_731.setTransform(403.875,306.275);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAIgFAHQgHAHgJAAQgIAAgGgHg");
	this.shape_732.setTransform(30.4,317.5);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_733.setTransform(401,287.55);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAIAAAHAGQAHAHAAAHQAAAJgHAGQgHAGgIABQgIgBgGgGg");
	this.shape_734.setTransform(406.5,279.7);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgCAAgDgCQgCgDAAgDQAAgHAHAAQAJAAAAAHg");
	this.shape_735.setTransform(414.65,237.9);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#F4F4F2").s().p("AgFAGQgDgCABgEQAAgHAHAAQAJAAAAAHQAAAJgJAAQgCgBgDgCg");
	this.shape_736.setTransform(414.65,237.9);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgCACgEAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_737.setTransform(409.725,237.9);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAEgCACQgCACgEABQgHAAAAgJg");
	this.shape_738.setTransform(409.725,237.9);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgCACgEAAQgHAAAAgIQAAgCACgDQADgCACAAQAEAAACACQACADAAACg");
	this.shape_739.setTransform(411.125,245.4);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQADgCACgBQAEABACACQACACAAADQAAADgCADQgCADgEgBQgHAAAAgIg");
	this.shape_740.setTransform(411.125,245.4);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgCACgDQACgCADAAQADAAADACQACADAAACg");
	this.shape_741.setTransform(411.975,254);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#F4F4F2").s().p("AgHAAQAAgCACgDQACgDADABQADgBADADQACADAAACQAAAJgIAAQgHAAAAgJg");
	this.shape_742.setTransform(411.975,254);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgDAAgCgDQgDgCAAgEQAAgHAIAAQAIAAAAAHg");
	this.shape_743.setTransform(412.35,262.65);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#F4F4F2").s().p("AgFAGQgCgCgBgEQAAgHAIAAQAIAAAAAHQAAAJgIAAQgDgBgCgCg");
	this.shape_744.setTransform(412.35,262.65);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgCAAgDgDQgCgCAAgEQAAgHAHAAQAJAAAAAHg");
	this.shape_745.setTransform(429.3,268.55);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQgBgIAIAAQAJAAgBAIQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_746.setTransform(429.3,268.55);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgIAAAAgIQAAgDADgCQACgCADAAQAIAAAAAHg");
	this.shape_747.setTransform(428.45,276.975);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#F4F4F2").s().p("AgIAAQABgDACgCQACgCADAAQAIAAABAHQgBAIgIAAQgIAAAAgIg");
	this.shape_748.setTransform(428.45,276.975);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgDACgDAAQgDAAgCgCQgCgDAAgDQAAgIAHAAQAIAAAAAIg");
	this.shape_749.setTransform(426.775,286.35);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgIAHAAQAIAAAAAIQAAADgCADQgDADgDgBQgDABgCgDg");
	this.shape_750.setTransform(426.775,286.35);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgDACgDAAQgDAAgCgCQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQACACAAADg");
	this.shape_751.setTransform(425.1,294.7);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#F4F4F2").s().p("AgFAGQgDgCABgEQgBgDADgCQADgCACAAQAEAAACACQACACABADQgBAEgCACQgCACgEABQgCgBgDgCg");
	this.shape_752.setTransform(425.1,294.7);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAJgJAAQgDAAgCgDQgDgCAAgEQAAgCADgDQACgCADAAQAJAAAAAHg");
	this.shape_753.setTransform(423,303.65);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgDADAAQAJAAgBAIQABAJgJgBQgCAAgDgCg");
	this.shape_754.setTransform(423,303.65);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgIAAAAgIQAAgDADgCQACgCADAAQAIAAAAAHg");
	this.shape_755.setTransform(420.6,312.275);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#F4F4F2").s().p("AgHAAQgBgDADgCQADgCACAAQAJAAAAAHQAAAIgJAAQgHAAAAgIg");
	this.shape_756.setTransform(420.6,312.275);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgDAAgCgDQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADg");
	this.shape_757.setTransform(418,320.25);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgCACgDQACgDADABQAEgBACADQACADABACQgBAEgCACQgCACgEABQgDgBgCgCg");
	this.shape_758.setTransform(418,320.25);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgCAAgDgDQgCgCAAgEQAAgCACgDQADgCACAAQAEAAACACQADADAAACg");
	this.shape_759.setTransform(414.9,326.65);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgDACgCQADgCACAAQADAAADACQACACAAADQAAAEgCACQgDACgDABQgCgBgDgCg");
	this.shape_760.setTransform(414.9,326.65);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgDAAgCgDQgCgCAAgEQAAgHAHAAQAIAAAAAHg");
	this.shape_761.setTransform(411.525,332.65);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgIAHABQAIgBAAAIQAAAJgIAAQgDAAgCgDg");
	this.shape_762.setTransform(411.525,332.65);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAADgDADQgCACgEAAQgCAAgDgCQgCgDAAgDQAAgIAHAAQAJAAAAAIg");
	this.shape_763.setTransform(407.65,339.85);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgIAHABQAJgBAAAIQgBAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_764.setTransform(407.65,339.85);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCACgEAAQgHAAAAgIQAAgHAHAAQAJAAAAAHg");
	this.shape_765.setTransform(403.05,345.375);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAJAAAAAHQgBAEgCACQgCACgEAAQgHAAAAgIg");
	this.shape_766.setTransform(403.05,345.375);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAADgDADQgCACgEAAQgDAAgCgCQgDgDAAgDQAAgDADgCQACgDADAAQAEAAACADQADACAAADg");
	this.shape_767.setTransform(424.25,244.55);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#F4F4F2").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACABQADgBADADQACADAAACQAAADgCADQgDADgDAAQgCAAgDgDg");
	this.shape_768.setTransform(424.25,244.55);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgDACgDAAQgDAAgCgCQgDgDAAgDQAAgCADgDQACgCADAAQADAAADACQACADAAACg");
	this.shape_769.setTransform(419.6,238.25);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#F4F4F2").s().p("AgFAGQgDgDABgDQgBgCADgDQADgDACABQADgBADADQADADAAACQAAADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_770.setTransform(419.6,238.25);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_771.setTransform(411.975,272.025);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_772.setTransform(411.975,272.025);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgDACgCQACgDADAAQAIAAAAAIg");
	this.shape_773.setTransform(411.525,279.7);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#F4F4F2").s().p("AgHAAQAAgCACgDQACgDADAAQAIAAAAAIQAAAIgIAAQgHAAAAgIg");
	this.shape_774.setTransform(411.525,279.7);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgIAAAAgIQAAgDADgCQACgCADAAQAIAAAAAHg");
	this.shape_775.setTransform(410.95,285.675);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQADgCACAAQAJAAAAAHQAAAIgJAAQgIAAABgIg");
	this.shape_776.setTransform(410.95,285.675);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgHAAAAgIQAAgDACgCQADgDACAAQAJAAAAAIg");
	this.shape_777.setTransform(409.4,293.6);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#F4F4F2").s().p("AgIAAQAAgCADgDQADgDACABQAJAAgBAHQABAJgJAAQgIAAAAgJg");
	this.shape_778.setTransform(409.4,293.6);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgCAAgDgCQgCgCAAgEQAAgHAHAAQAJAAAAAHg");
	this.shape_779.setTransform(408.15,300.275);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQgBgHAIAAQAJAAgBAHQABAIgJAAQgCAAgDgCg");
	this.shape_780.setTransform(408.15,300.275);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgIAHAAQAEAAACADQACACAAADg");
	this.shape_781.setTransform(406.475,307.1);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAEgBACADQACADAAACQAAAJgIAAQgHAAAAgJg");
	this.shape_782.setTransform(406.475,307.1);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgHAAAAgJQAAgIAHAAQAEAAACADQADACAAADg");
	this.shape_783.setTransform(399.8,327.5);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#F4F4F2").s().p("AgHAAQAAgIAHAAQADAAADADQADADAAACQAAADgDADQgDACgDAAQgHABAAgJg");
	this.shape_784.setTransform(399.8,327.5);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDACgDAAQgIAAAAgIQAAgHAIAAQAIAAAAAHg");
	this.shape_785.setTransform(429.7,259.175);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAJAAAAAHQgBAEgCACQgCACgEAAQgHAAAAgIg");
	this.shape_786.setTransform(429.7,259.175);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_787.setTransform(404.725,314.575);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_788.setTransform(404.725,314.575);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgHAAAAgJQAAgHAHAAQAEAAACACQACADAAACg");
	this.shape_789.setTransform(401.825,321.15);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAEgBACADQACADAAACQAAAJgIAAQgHAAAAgJg");
	this.shape_790.setTransform(401.825,321.15);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDADgDAAQgIAAAAgJQAAgHAIAAQADAAADACQACADAAACg");
	this.shape_791.setTransform(429.7,249.95);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAEgBACADQACADABACQgBADgCADQgCADgEAAQgHAAAAgJg");
	this.shape_792.setTransform(429.7,249.95);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#8F8777").s().p("AgFAUIAAgUQAEgZAGgOQACAQgDAXIgCAUIgCAUQgEgGgBgOg");
	this.shape_793.setTransform(401.6775,334.525);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#8F8777").s().p("AgQAbQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgBIACgJIAJgPQAKgQANgKQgEAMgMASIgJAPIgCACIgCAEIgDACg");
	this.shape_794.setTransform(417.1,277.15);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#8F8777").s().p("AgDACQgHgMgBgNQAKAIAGAOQAGANABAMQgJgHgGgPg");
	this.shape_795.setTransform(408.475,317.825);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#8F8777").s().p("AgCAaQgFgFgDgKQgCgGAAgHQgBgQAFgNIAEAcIAEAMIAAACQAGgPAHgMQgBAQgHAYIgDAIg");
	this.shape_796.setTransform(412.0909,310.875);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#8F8777").s().p("AgTAVQADgNAGgMQAMgbATgRQgHARgPAfQgGAMgEAMQgGAQAAAJQgFgLADgRg");
	this.shape_797.setTransform(413.3279,295.725);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#8F8777").s().p("AgDAeIgHgTIgCgLQAAgFAEgHQAFgHAIgGQgCgMAAgLQAFAKAEAOIABACIgCABQgJAKgCAFQgCAEAAACIABAJIADATQADALgCAKIgGgTg");
	this.shape_798.setTransform(422.725,282.7);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#8F8777").s().p("AgPAVQgCgFABgFQACgIAGgHIALgLQAGgFAIgDIgRAZQgFAFgDAGQgCADAAADQAAADAEACIgCAAQgEAAgDgDg");
	this.shape_799.setTransform(419.6219,265.2841);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#8F8777").s().p("AABgCIAMgIIACgCIABgBIgBAAIgEgBIAEgCQADgBACABIACADIgCAFIgCADIgMAKQgNAKgOACQAHgKAPgJg");
	this.shape_800.setTransform(417.775,256.625);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#8F8777").s().p("AAEAWIgHgFQgIgFABgMQABgIAHgGQAGgGAIgDIgJANQgDAHAAAEQgBAGADAFIAKAMIgIgCg");
	this.shape_801.setTransform(417.7447,249.975);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#3C2E1E").s().p("AgHAjQAEAAACgCQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgDgDgIIgNgXQgDgKABgFQABgKAJgDQAMgFAQAGQgTACgFAEQgFADAAAEQAAAEACAHIALAXQACALgBAEQgBAGgEAAIgCAAIgFgBg");
	this.shape_802.setTransform(416.9389,266.855);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#3C2E1E").s().p("AANALIgMgLQgQgOgHgIQAQADANAMQAIAHAEAGQAGAKgDAIQgBgFgIgIg");
	this.shape_803.setTransform(423.6474,250.9);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#3C2E1E").s().p("AgRAAQAGgFAIgDQAHgDAHAAQAKAAAGADIg1AUQADgIAGgEg");
	this.shape_804.setTransform(416.2,243.1);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#3C2E1E").s().p("AgUAYQgFgHgDgIQgDgJADgKQAHgPATgKQAOgIASgBQgRAIgMAHQgPALgEAMQgFAKAKAQQADAFARAVQgRgJgKgNg");
	this.shape_805.setTransform(416.5558,249.95);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#3C2E1E").s().p("AgFAXQgPgDgRgGQAOAAATABIAPABIAQAAIABAAIgDgDIgKgNQgMgNgGgMIAkAgIADAEIACAGQAAADgBACIgCACIgCABIgFABIgEAAQgLAAgSgDg");
	this.shape_806.setTransform(421.775,258.5841);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#3C2E1E").s().p("AgEAfIAXghIgTAMIAAABIgBAAIgNAAQgHAAgGgEQgHgGACgIQABgGADgGIAPgTIAQgQIgNATQgHALgEAIQgGAOAGACQAFADANgCIAXgPIAFgBQAEAAACACQADADgCADIgEAHIgJAMQgIAKggAhIARgYg");
	this.shape_807.setTransform(423.0559,271.4);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#3C2E1E").s().p("AgKAaQAIgGgBgFIgCgCIgCgEIgEgIQgDgHgBgKIABgKIADgFIAEgDQACgCADACQADADABACIAHALQAFAJAEADIABAAIACgCIADgIIAAAIQAAADgCACQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgDgBQgHgDgHgJIgGgKIAAABIgBAHQAAAHADAIIACAGIACAEQABACAAADQABAFgEAFIgHAGQgHAFgJABQAJgFAEgFg");
	this.shape_808.setTransform(413.9125,289.4429);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#3C2E1E").s().p("AAjBjQAEgDAAgDIgBgDIgCgDQgDgFgJgHIgOgIIgCgCIABgCQACgJADgYQADgUgBgMQAAgLgEgBQgCgBgIAHQgIAHgNAQIgEAEIgDgDQgLgNgDgNQgDgQAFgOQAEgKALgOIALgJIAKgIQABgDgDgEIgGgHQgFgEgMgFQALADAHAEIAIAHQADAFAAAFIAAABIgBABIgTASQgKAOgCAJQgEANADALQADAKAGAHQANgPAGgFQADgDAEgDQAHgDAGADQAEADADAGIABAKQABAMgDAWIgHAgIAMAJIAGAGIAGAGIACAFIAAAEQgBAEgFAEQgHADgKABQAKgBAGgFg");
	this.shape_809.setTransform(417.265,282.55);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#3C2E1E").s().p("AgPAoQgEgBAAgFIAAgFIAEgIQAHgOALgMIABgBIACAAQAFgBAAgDQACgEgCgFIgKgUQAEACAFAFQAEAEAEAGQADAJgBAGQgDAHgHACIgSAXIgEAGIgBADIAAABQABACAFgCIAHgBIgGAEIgHACIgCAAg");
	this.shape_810.setTransform(417.2725,294.8143);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#3C2E1E").s().p("AgPAtIAPgCQAJgEADgEQACgDgEgIIgHgKIgHABQgIgBgFgFQgCgBgBgHIABgFIAEgLIANgQIAOgPIgLASQgFAKgDAIIgCAEIgBAEIAAADIABACQACAEALgDIADgBIACADIAJAOIADAJIgBAGIgBACIgBADQgGAGgMABQgIAAgHgCg");
	this.shape_811.setTransform(417.925,301.2);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#3C2E1E").s().p("AgSA5QgCgIACgKQACgHAGgKIAKgMIAGgaIAFgcIAAgOQAAgDgBgCQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQgFAAgGAFIgMAJIAKgLQAHgIAGAAQAGAAADADIAEAIIABAQQgBANgDAQIgIAcIgBACIgKAMQgGAIgCAGQgIARAKAPQgHgGgCgKg");
	this.shape_812.setTransform(414.5056,312.15);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#3C2E1E").s().p("AgTA9QgNgoACgZQABgLADgHIAEgIIAGgHIAUgZQALgQAGgMQAKgRAAgOQADAMgIAVQgFANgLARQgIANgLAOQgJAKgCASQgCAVALApIAUA/QgPgZgNgkg");
	this.shape_813.setTransform(411.2964,308.675);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#3C2E1E").s().p("AguA3QgFgJABgLQACgJAIgIIAOgMIAAAAIAogiQAYgXANgQQgEAKgKAOQgFAHgMAOQgQARgYATIgBAAIgHAEIgGAGQgIAHgBAGQgEAOAOARQgHgFgGgIg");
	this.shape_814.setTransform(409.2339,325.275);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#3C2E1E").s().p("AADADQAHgFAHgKIALgRQAAAMgFAKQgEAHgIAKQgIAJgJAEQgLAFgKACQAYgTAGgIg");
	this.shape_815.setTransform(406.825,330.5);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#3C2E1E").s().p("AgWBqQgQgGgEgMQgEgLAKgPQAIgLAKgHQgJAJgGALQgIANAEAJQADAJAPAFQAKAFAJgIQAMgLABghQABgNgFgkQgDgOAAgRQgBgOADgRQAFgTAHgLQAKgOAOgGQgOAKgGAMQgHAMgCARQgCAMABASQACAVACAIIAAAAQAGAlgBAPQAAANgDANQgGARgJAHQgHAFgIAAQgGAAgGgDg");
	this.shape_816.setTransform(402.0779,332.0857);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f().s("#3C2E1E").p("Ah4l9IBqAAIADBPQAFBgAJBeQAfEqBDCZQgbg4g6hqQgrhPgTgyQg3iIgTklg");
	this.shape_817.setTransform(22.255,315.3532);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-11.1,0,11.1,0).s().p("AAaDGQgrhPgTgxQg3iIgTklIBqAAIADBOQAEBgAKBfQAfEqBDCYQgbg4g6hqg");
	this.shape_818.setTransform(21.275,313.25);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#1E1E1E").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_819.setTransform(187.4,217.6);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#1E1E1E").s().p("AgLgJQAAgEAHgBQAFgCACADQAEAFAFARQgHAFgGACQgJgQgBgJg");
	this.shape_820.setTransform(186.7733,214.575);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#0B0C0C").s().p("AgKAVQgHgDAEgGIARgfQABgCAEAAQADAAACABQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAADgBACIgQAdQgDAEgDAAIgDgBg");
	this.shape_821.setTransform(157.295,130.025);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#0B0C0C").s().p("AgggBQABgDADAAIAHgBIAvgCQAEAAADADQABACgBACQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgZAEgRAAQgXAAACgJg");
	this.shape_822.setTransform(147.5463,178.975);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#0B0C0C").s().p("AgpAAQgJgEACgFQACgHAZAJQAiAKAegEQADgBACACQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQgBAFgGABQgKACgLAAQgcAAgigNg");
	this.shape_823.setTransform(178.981,178.2864);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#0B0C0C").s().p("AgiAmQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQgBgDACgCIATgaQASgUAYgTQACgCADABQAEABABACQAEAFgGAFQgmAfgRAZIgFAIIgDAAQgDAAgCgBg");
	this.shape_824.setTransform(155.725,136.3331);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#0B0C0C").s().p("AA0ASQgGgBgVgIQgrgOgtABQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAgBAAAAIgBgFQACgGAFAAQAlgBAmAMIAwAOQAGABgBAGQgBAFgIAAIgHgBg");
	this.shape_825.setTransform(168.2317,181.2345);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#CB2D40").s().p("AAlAWIgGgEQgbgJgsAGQgGABAAgHQABgHAMgCQAHAAAUgBIAOgRQAEgEAHACQAGABAFAEQAJAHgBAOQAGADABACQABABAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgCAAIgDAAg");
	this.shape_826.setTransform(168.9,157.9438);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#0B0C0C").s().p("AAcA8QgCgCAAgDQABgtgLgjQgFgQgNgCIgegFQgGAAAAgGQAAgDACgCQADgCADAAIAeAFQAXADAHAaQALAkgCAwQgFAEgCAAIgBABQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_827.setTransform(177.0344,347.7008);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#0B0C0C").s().p("ABDAbIgZgNQgagOgcgGQgggIgbACQgHABgBgFQgFgPAwAGQAvAGAjATQAXANAHACQAFABAAAGQAAAGgGAAIgIgBg");
	this.shape_828.setTransform(108.4305,278.1893);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#0B0C0C").s().p("AA1BAQgKgTgSgXQgmgxgtgXQgIgEABgGQABgCADgCQAEgCADACQBIAnAuBOQAEAHgFAEQgCACgDAAQgEAAgBgCg");
	this.shape_829.setTransform(115.7707,285.8679);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#0B0C0C").s().p("AgpBfQgJgBAEgWQADgQAIgVQAUgyAshBIAIgLQABgDADAAQADAAACABQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQABADgCADQgxBDgZBHQgDAIgDAVQgCAKgFAAIgBAAg");
	this.shape_830.setTransform(178.0301,261.5292);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#0B0C0C").s().p("AhPBGQgEAAgBgEQgCgDACgDQAMgjAggdQAcgaAlgUIA0gTQAGgCACAEQACACgBAGQgBADgDAAIgGABQhIAVgvA1QgOAPgLAWQgGAOgFAAIAAAAg");
	this.shape_831.setTransform(97.4292,278.5698);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#0B0C0C").s().p("AgnBFQgHgFADghIAGg0IAFgsQABgFAGgBQACgBADABQABABAAAAQABAAAAABQAAAAABABQAAABAAAAIgKBMQgEAiACAQQAXgKAqgdQAEgDAEAEQAAABAAAAQAAAAABABQAAAAAAABQAAABAAAAQABAEgCACQglAbgfANIgHABQgEAAgEgDg");
	this.shape_832.setTransform(152.4471,138.3021);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#0B0C0C").s().p("AAfBsQgIAAgMgJQgcgZgNgoQgLgiAGglQAGglAVggQAAAAABAAQAAgBABAAQAAAAABAAQABgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQAFADgDAFQgkA8AQBAQAHAZATAZQAIALAOAHQAJAFgBAEQgBAGgFAAIgBgBg");
	this.shape_833.setTransform(138.0489,167.4071);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#0B0C0C").s().p("AAVCXQgEgCAAgGQAAhAgShNIgUhRQgIgkgBgdQAAgFAGgCQADAAACACQADACAAACQAAAYAJAlIAXBiQAPA8AABDIAAAFQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgFACIgDgBg");
	this.shape_834.setTransform(172.3982,301.1768);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#0B0C0C").s().p("AAAgHQADADAAAEQAAAFgDADQgDgJADgGg");
	this.shape_835.setTransform(47.15,348.5);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#0B0C0C").s().p("AgVAeQACgbAIgZQABgEgGgCQAHAAABgCQARghAJADQACABACAEQABADgCACQgVAagEAiQgEAgACAOQgCAFgFAAIgBAAQgJAAACgfg");
	this.shape_836.setTransform(109.0821,219.8379);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#0B0C0C").s().p("AgYBYQAAgHAGgHQAbgngCgsIgHhHQAAgJAHgBQAHAAABAIQACANABACIAHABQABABgCAGQgCgEgEAAQAGA3gDAXQgFAkgZAiQgDAFgEABIgCAAQgDAAgDgDg");
	this.shape_837.setTransform(186.9393,247.4347);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#0B0C0C").s().p("AAfBkIgIgHQAEgCgBgEQgCgxgQgtQgRgygeghQgCgCACgEQACgDADAAQAEgCAFAGQAVAYAIATQAjBBACBQQAAAEgEADIgDABIgDgBg");
	this.shape_838.setTransform(187.9556,233.0944);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#0B0C0C").s().p("AgqBgQgDgDgBgEQgGgtAUgtQAGgNABgHQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEgDQAbgrAcgdQAHgHAEAGQAEAFgFAGQgkAmgUAkQgYApADAvQAAAFADABQABACAEgBIgEAGQgCADgDACIgEABQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_839.setTransform(112.115,184.5934);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#0B0C0C").s().p("AhJCJQgKgBAEgVQAFgUAMgRQAWgfAegUIAKgFQAIgDADgEQgYgYgMgmQgNgpAKgeIAEgOQABgDAEgBQADgBACABQAGACgDAIQgNAkANAoQALAkAfAbIAUATQAMALALAFQAIADgBAGQgCALgWgOQgRgLgRgRQgEAGgHADIgMAEQgKAFgKAJIgRASQACACgBAEQAAABAAAAQAAABAAABQAAAAgBAAQAAAAAAAAQgNABgEALQgJALAFAJQgKAEAEANQgDAJgFAAIgBgBg");
	this.shape_840.setTransform(113.7381,203.905);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#0B0C0C").s().p("ABMDUQgDAAgEgEIgGgFIAGAAQgDgQgIgSIgPgeIgnhTQgDgHAJgDIAUgGQgKgXgfgiQg0g2gNhLIgGgeQgDgQABgNQABgFAMgCQAAADACAGIALBGQAPA+AtAvQAqAsAOAxQACAHgFAFIgKAAQgIAMAJASIAOAcQARAjAHAaQABAFgCAEQgCAEgEAAIgBgBgAAlBeIABABIABgBIgBgBgAAaAwQgHACABAEQAAAJAJAQQAIgCAGgEQgFgSgDgFQgBgCgEAAIgEAAg");
	this.shape_841.setTransform(183.6024,208.2028);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#0B0C0C").s().p("ACxBRQgRgHgQgPIgdgcIglgmQgagcgigPIg7gbQgbgMg0ACQgoABgqAIQgDADgFgBQgVgBgZALIAAADQgJAAgEgDQgFgDADgHQADgGAEAAQBJgOAhgDQA/gHAoAKQAjAJAvAaQAnAVAvAuIAsAtQAWATAhALQAiALAbgDIgBAIQgBAFgDABIgIAAQgnAAgsgWg");
	this.shape_842.setTransform(42.4613,308.5177);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#0B0C0C").s().p("AibDrQgEgCgCgEQgJgjAag2QAeg8A5g8IAfgoQgEgFgIAEQgIAFgEgEQgGgEAIgLQADgFAOgOIAYgWQgEgDgIADQgIAEgEgEQgHgGAPgVQANgTARgNQAdgWAzgbQApgXAWgaQACgCAEAAQAEABACACQADAFgDADQgXAagyAeIhAAlIgCANQgJgFgJAJIgJAKQgGAGgBAHIAJAEQAEADAEgCQAGgBAJgJQAIgFADAIQADAEgHAGIgaAUQgCACAAAKQgKgCgBABIgNAOIAKAOQAEgBAFgGQADgCACABQAEABABADQACAEgFAFIgrAsQgtAugdAxQgoBBAJArQACACAEgBQAEAAACgCIAFgCIAEAAQgDAEgGACIgMACQgDADgDAAIgDgBg");
	this.shape_843.setTransform(121.3535,159.8683);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#0B0C0C").s().p("AiiHXIgJgbIgHgtQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQAGgGgBgIQgKhjAShyQAMhKAVguQAWgvAxg1QAVgWAZgkIAog9IAlgzQAGgSAPgHQAUgZAWgqQAlhJAPhPQABgFAGgEQAEABACACQACAEgBAEIgSBJQgSA3gmBDIipDoIgTATQgxA4gTBNQgJAjgJBLQgJBMAIBXIAFApQAEAWAHARQABAFgGADIgDAAQgEAAgCgFg");
	this.shape_844.setTransform(90.2893,277.1972);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#0B0C0C").s().p("ABLFqQgRgDgFgFQABgMAUAEQAgAGASgFQASgEAKgFQAOgHAJgLIgTgCQgLgCgHgDQgDgCAAgDQAAgEACgBIAgABQAiADAYgLIAYgLQAFgCAGgIIAHgEQAFgDABgEQgNgKgGgIQgHgLAAgNQABgNAJgLIARgRQg8gggqgeQgwgjgoguQgOgQgHgWQgHgVgHgIQgZgcgfgYIgxgiIgGgEQgCgDABgDQABgEADgBQAEgCADADIApAbIAVhNQAHgZAEghQAEgmgFgUQgqANgpAcIgeATQgJAGACAMQAEArgEA0QgBAGgGABQgDAAgCgCQgDgCABgDQAEgvgFg7IgHhUQgBgPgEgGIgFgEIgBgLQgIACgIAHIgNAMIgbAWQhHA8gkBLQgPAfgDAXQAAAEgEACQgGACgCgDIgGgHQACgDACgFIACgJQAXhFAxg5QAnguBGgzQAHgHAJADQAJACAHARQAFAPABARIAFBCIAWgQQAzgjAugMQAGgCAFACQAFADABAGQAGAagDAVIgKBDIgWBPQgBAFgGAHIAzArQAXAYAGAbQAHAaA2AvQAsAnAoAXIBAAmQAYAOAMAPQANARgPATIgcAdQgWAZgXALQgVALgjAFQgJARgWANQgcAPghAAQgNAAgOgCg");
	this.shape_845.setTransform(173.4394,149.6459);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#0B0C0C").s().p("AB2E3Qg8gFgggMIhzgsIgHgIQgfAPgRADQgrALgdg6QhGA1hbAUQhJARg0gEQgOgBgIgFQAHgBAAgIQAvAEApgGQBBgLAtgRQAygUAwgkIAFgEQACgCADABQAFAAABADIABAIQAKAbAXAOQAZAOBlg/QADgDAFAFQAEAGgFADIguAcQANAIAmAOIAnAOQAyAVBFAGQBaAGBCgPQAMgigXgdQgCgCABgDQABgDACgCQAKgHAJAbQAKAcgEAWIAVgFQAFgUAAgJQgCgHACgHQACgJgJgMQgIgLADgEQAGgKALARQAMARgDAYIgBAWQAUgKABgaQABgYgNgNIgJgMQgIgKgNgIQgPgJgLAAQgWABggADIg1AHIhOAHIgoANQgIAEgBgIQgCgGAHgDIA8gWQAvgWAogkQAOgNAOgVQAOgWADgPQAMhDgKhCIgUhGQgOgzglg2IgOgUQgEgFAFgEQABgCADgBQAEAAABACIAjAzQAPAVARA1QASAzAFAfQAKBGgQBJQgHAhgrAnQgNAMgSANIgjAYICcgRIBZgBQBGgBArgMQAOgEAGALIgJAGQg8AOgfAAIhnABQAuAcADAsQAFAmglAUQgNAIgjAHQg6AMg6AAQgcAAgdgDg");
	this.shape_846.setTransform(100.55,320.9958);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#0B0C0C").s().p("AgVG5QgdgKgHgYIgMgoQgBgFgKgLIgLgOQgGgHgHgEQgNgHgFgQQgHgagDghQgBgFgEgBIACgHQgPhGgdhMIguAgQgGAEgEgFQgCgCAAgDQAAgDADgCQAjgWANgMIg8h6IhBBVIg/BpQgCACgDABQgEAAgCgCQgFgEAEgFIAVgjQAWgsAfgoIA7hOIglhNIgnhfQgSg1gDhDIADhNQABgIAHAAQAHABgBAHIgDArQgBBRATA6QAKglAJhPIAAghQAAgIAHAAQAPgCgKBAQgKBJgNAwIAoBcIAXAmQAAAKACACIBMCdQAaA9AUBSIAEAUQAFAnAHAZQADAKAIAEQAKAGANAOQANANADAIIANArQAHAZAaAGIAOAEQAIACAHAAQgCgegGgVQgBgHAGgCQADgBACABQADACABADIAJA6IAnACIAagFQA1AHAkgVQARgKAHgQQAHgRgFgTQgMgkgcgEQAPATADAbQADAYgJAXQgBADgDABQgEABgBgCQgFgCADgPQAGgVgDgPQgFgfgSgJIgkgSQgkgcgLgfIgxiFQgbhLgRhRIgVhkQgHghgEgrIgGhNIgJh4QgBgHAGgCQAIgBAAAGIAJBqQAegqAFAMQACAFgCACQgSAUgQAbIAJBdQAFAsANAdIAYA1QAhBDAJAeIAZBXQAEAOAWAZQAaAcAFAIIAjA/QALAUAQAFQAVAIAWgCIBBgDQABgUgFgaQgFgcgJgEQgEgCgLACQgJABgDgEQgDgEADgDQAFgGAQABQASACAGAMQAOAcAAAvIAdgHQASgEANgLIgHgrQgFgfgNgVQgGgLgLgDQgLgFgLAFQggANgYgXQgjghgUg4QgSg0ADgzIgrjgQgKgzgDgaQgFgqAEgjQAGgDACgGIADgGQACAEgDAFQADADABAGIgBAKQgBAeAEAmIAMBDIAsDvIAAAhQAKBBAjA0IATAUQATATASgIQAUgJATAIQATAIAJAUQAHARAGAZIAIAsQACAIgBADQAAAFgGAEQgXAPgbAGIglAHIgpADQglABgKgCQgPgCgEABQgBgDgNgJQgPgKgIgOIgbgyQgLgUgagcQgWgYgEgMIgchdQgNgrgihDQABAVAMAqIAaBeIAhBgIAHAPQAOAuATAdQAJAOANALQAPAMAPADQADABAMgBQAKgBAGAEIAKADQAgARAFAnQAGAngfAXQgnAdg5gGQgYADgYAAQgqAAgmgMg");
	this.shape_847.setTransform(167.0174,310.6984);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#1E1E1E").s().p("AJlSuIgJg6QgBgDgDgCQgCgBgDAAQgGACABAHQAGAWACAdQgHABgIgCIgPgEQgagHgHgYIgNgrQgDgIgNgNQgNgOgKgGQgIgEgDgLQgHgYgFgnIgEgUQgUhSgag9IhMieQgCgCAAgKIgXgmIgohdQANgvAKhJQAKhAgPABQgHAAAAAJIAAAhQgJBPgKAlQgTg6ABhRIADgsQABgHgHgBQgHABgBAHIgDBOQADBCASA2IAnBfIAlBNIg7BPQgfAogWArIgVAjQgEAGAFAEQACACAEAAQADgBACgDIAnhFIBZh5IA8B7QgNAMgjAWQgDABAAAEQAAADACACQAEAEAGgDIAuggQAdBMAPBGIgCAHIgCABQgGgLgOADQgqAMhHACIhYABIidARIAjgYQATgNAMgMQArgnAHgiQAQhJgKhHQgFgegRgzQgSg1gPgWIgjgyQgBgCgEAAQgDAAgBADQgEAEADAFIAOAUQAlA1AOA0IAUBFQAKBCgMBEQgDAPgOAXQgOAVgOANQgnAkgwAVIg7AXQgHADACAGQABAHAIgDIAogNIBNgIIA1gGQAggDAWgBQAMAAAOAJQAOAIAHAKIAJALQANAOgBAXQgBAbgUAJIACgVQACgYgMgSQgKgQgHAKQgDAEAIALQAJAMgCAJQgBAHABAHQABAJgFATIgWAGQAEgWgJgcQgKgcgKAIQgCABgBAEQAAADABABQAXAegMAiQhCAPhagHQhEgGgygUIgogOQgmgPgMgHIAtgcQAFgDgEgHQgEgEgEADQhlA+gZgOQgXgOgJgaIgCgIQgBgDgEAAQgDgBgDACIgFAEQgvAkgzATQgsAShCAKQgoAHgwgEQAAAHgGACIgGgFIgEgFQADgDAAgFQAAgFgDgDIACgEQAGABAFgFQAFgEAAgHQAAgDgCgCQgDgCgDABQhQAJhug+IialLQAtgVAjgJQADgBACgDQACgDgBgCQgDgHgHACIgbAHQgCgFgCAAIgPgFIAAgDQAZgLAVACQAGABACgDQAqgJApgBQAzgCAbAMIA8AcQAjAPAaAbIAlAnIAcAdQARAOAQAHQAxAYAqgCQAEgBABgFIAAgIIAEgBIACgBIAEAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBAAAAIAEgCQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAABIAGAtIAJAbQADAGAGgCQAHgDgCgEQgHgRgDgWIgFgpQgJhXAKhMQAJhLAIgkQAUhMAwg5IAUgUICqjnQAlhEATg2IAShIQABgFgDgDQgBgCgEgBQAGgbgDgPQgDgNAEghQAFgjAVgaQACgCgCgDQgBgDgCgBQgKgDgQAgQgBACgHAAIgCgBQgEgNAKgDQgFgKAJgLQAEgLAMAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBQABgDgCgCIARgSQAKgKAKgFIANgEQAHgDAEgFQARAQARALQAWAOACgLQABgGgIgDQgLgFgMgKIgUgTQgfgdgMgkQgNgnANgkQADgIgGgDQgCgBgDABQgEABgBADIgEAOQgEACgIAJQgEACgBgCQgCgBAAgGQgDguAXgrQAVgjAkgmQAFgHgEgEQgEgGgHAHQgcAdgcAqIgEADQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIgBgBIgCgBIgDACIgFABIgFACQgCABgEABQgEABgBgDQgJgrAmhBQAdgwAuguIArgtQAGgFgCgEQgCgDgDgCQgEAAgDACQgEAGgFAAIgKgNIAOgOQABgBAJABQAAgJADgCIAbgUQAGgGgCgEQgDgIgIAEQgKAKgGABQgDABgGgCIgJgEQACgHAFgGIAKgLQAJgIAJAFIACgNIBAgmQAygdAXgaQAKAAAJAHIAJgEIAGAHQACAEAGgDQAEgCAAgEQADgWAPgfQAkhMBHg7IAbgXIANgLQAIgIAIgCIABALIAFAEQAEAHABAPIAHBTQAFA7gEAvQgBAEADACQACABADAAQAGgBABgGQAEg0gEgqQgCgNAJgFIAegUQApgcArgMQAFATgEAmQgEAhgHAaIgWBMIgpgbQgDgCgEABQgDABgBAEQgBADACADIAGAEIAxAjQAgAXAZAcQAHAIAHAXQAHAVAOAQQAoAuAwAjQAqAfA8AgIgRARQgJAKgBANQAAANAHALQAGAIANAKQgBAEgFADIgHAEQgGAIgFACIgYAMQgYAKgigCIgggCQgCABAAAEQAAAEADABQAHADALACIATACQgJAMgOAGQgKAFgSAEQgSAFgggGQgUgEgBAMQgIABgHAFQgGAGgCAHQgMACgBAFQgBANADAQIAGAeQANBMA0A2QAgAiAKAXIgUAHQgJACADAHIAnBTIAPAfQAIASADAPIgGAAIgHgFQgFgDgDABQgKgTgUgYQgFgHgFACQgCABgCADQgDADACACQAfAiARAyQAQAsADAyQAAADgDADQgJgCgBgHQACgHgBAAIgHgCQgBgCgCgNQgBgIgHAAQgIABABAJIAHBHQACAtgcAnQgGAHAAAHQgXAjgMAzIgBADIgBACIgDAHQgCAGgGADQgEAjAFAqQADAaAKAyIArDgQgDA0ASA1QAUA4AjAhQAYAXAggNQALgFALAFQALADAGAKQANAWAFAfIAHArQgNALgSADIgdAIQAAgvgOgcQgGgNgSgBQgQgCgFAHQgDADADAEQADAEAJgBQALgCAEACQAJAEAFAcQAFAZgBAVIhBADQgWACgVgIQgQgGgLgTIgjg/QgFgIgagdQgWgYgEgPIgZhXQgJgeghhDIgZg1QgNgdgFgsIgJheQAQgaASgUQACgCgCgGQgFgMgeArIgJhqQAAgGgIABQgGACABAHIAJB4IAGBMQAEAsAHAhIAVBkQARBSAcBKIAxCGQALAfAkAcIAkASQASAJAFAfQADAPgGAVQgDAOAFADQABABAEAAQADgCABgCQAJgXgDgZQgDgbgPgSQAcAEAMAkQAFASgHASQgHAQgRAJQgkAWg1gIIgaAGgAKDQuQgCACAAADQAAAGAGAAIAeAGQAOACAFAPQALAkgBAtQAAADACACQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQACAAAFgFQACgvgLgmQgHgagYgDIgegEIgBgBQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAgAJhIBQgHABABAGQAAAdAJAkIAUBRQASBOABBAQAAAGAEACQADACAEgDQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIgBgFQAAhDgPg8IgYhjQgJgmAAgXQAAgCgCgDIgEgBIgBAAgAAGG/QgDACgBACQgBAFAHAEQAtAYAnAyQATAWAKATQABACAEAAQADAAACgBQAEgFgDgGQgvhPhIgnIgDgBIgEABgAgmFxIg0ATQgmAUgcAZQggAfgMAjQgCADACADQABADAEABQAEABAHgPQALgWAOgQQAwg2BIgUIAGgBQADgBABgCQABgGgCgCQgCgDgDAAIgDABgAgSGsQAcAHAaAOIAZANQAOAEAAgJQAAgGgFgCQgHgCgXgMQgjgUgvgGQgwgGAFAPQABAFAHgBIANgBQAVAAAZAHgALXCwIgIALQgtBBgUAzQgIAVgDAQQgEAXAJABQAGAAACgKQADgWADgIQAZhIAyhDQACgDgBgDQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAQgCgCgDAAQgDAAgBADgAJpoMQAVAHAGACQAOACACgHQABgGgGgBIgwgPQgngMglACQgFAAgCAFIABAFQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIADAAQArAAArAPgAFroyIgHABQgDAAgBADQgCAJAXABQASAAAZgEQAAgBABAAQAAAAABgBQAAAAAAgBQAAgBAAgBQABgCgBgCQgDgDgEgBgAKLo+QgCAGAIADQAvAVAmgIQAFgBACgGQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgBAAQgBgDgDAAQgeAGgjgLQgPgFgGAAQgGAAAAACgAEZsKQgVAfgGAlQgGAlALAjQANAoAdAZQAMAJAIABQAGAAABgFQABgFgJgEQgOgIgIgLQgUgZgHgZQgQhBAlg7QADgGgFgDQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABgAJ1rsIAHADQAEABADgDQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgBgCQgBgCgGgDQABgPgJgHQgFgEgGgBQgHgBgEAEIgPARQgUAAgHABQgMACgBAIQAAAGAFAAQATgDAPAAQAWAAAQAGgAGYwLQgGABgBAGIgFAsIgGA0QgDAiAHAFQAHAEAIgDQAggNAlgbQACgCgBgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgEgFgEADQgrAdgXAKQgCgQAEgiIAKhMQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAgBgBIgDAAIgCAAgAHtv9QgYAUgTAUIgTAaQgCACABAEQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAEADAEgCIAFgIQARgYAnghQAGgFgEgFQgBgCgEAAIgCgBIgDABgAHmwqIgSAgQgDAHAGACQAGAEADgGIARgeQACgCgBgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQgBgCgEAAQgDAAgCACg");
	this.shape_848.setTransform(109.025,234.7);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_849.setTransform(62.325,321.275);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_850.setTransform(70.875,324.525);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_851.setTransform(78.175,322.525);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_852.setTransform(82.625,312.075);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_853.setTransform(79.425,304.175);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAjAAAZAZQAZAaAAAig");
	this.shape_854.setTransform(70.9,312.7);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgZgZAAgkQAAgiAZgaQAYgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgYgYg");
	this.shape_855.setTransform(70.9,312.7);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAsgsA/AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg/AAgsgsg");
	this.shape_856.setTransform(70.9,312.725);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_857.setTransform(78.175,322.525);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_858.setTransform(82.625,312.075);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_859.setTransform(79.425,304.175);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAjAAAZAZQAZAaAAAig");
	this.shape_860.setTransform(70.9,312.7);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgZgZAAgkQAAgiAZgaQAYgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgYgYg");
	this.shape_861.setTransform(70.9,312.7);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAsgsA/AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg/AAgsgsg");
	this.shape_862.setTransform(70.9,312.725);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_863.setTransform(78.175,322.525);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_864.setTransform(82.625,312.075);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_865.setTransform(79.425,304.175);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAjAAAZAZQAZAaAAAig");
	this.shape_866.setTransform(70.9,312.7);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgZgZAAgkQAAgiAZgaQAYgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgYgYg");
	this.shape_867.setTransform(70.9,312.7);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAsgsA/AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg/AAgsgsg");
	this.shape_868.setTransform(70.9,312.725);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_869.setTransform(78.175,322.525);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_870.setTransform(82.625,312.075);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_871.setTransform(79.425,304.175);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAjAAQAjAAAZAZQAZAaAAAig");
	this.shape_872.setTransform(70.9,312.7);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgZgZAAgkQAAgiAZgaQAYgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAYgjAAQgjAAgYgYg");
	this.shape_873.setTransform(70.9,312.7);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAsgsA/AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg/AAgsgsg");
	this.shape_874.setTransform(70.9,312.725);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_875.setTransform(88.675,328.075);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_876.setTransform(97.225,331.325);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_877.setTransform(104.5,329.325);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_878.setTransform(85.375,319.525);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_879.setTransform(108.975,318.875);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_880.setTransform(105.775,310.975);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_881.setTransform(97.225,306.85);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_882.setTransform(88.275,310.975);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_883.setTransform(97.25,319.5);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgYABgkQgBgjAZgYQAZgZAjAAQAjAAAaAZQAZAZAAAiQAAAkgZAYQgaAagjAAQgjAAgZgag");
	this.shape_884.setTransform(97.25,319.5);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_885.setTransform(97.225,319.525);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_886.setTransform(88.675,328.075);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_887.setTransform(97.225,331.325);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_888.setTransform(104.5,329.325);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_889.setTransform(85.375,319.525);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_890.setTransform(108.975,318.875);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_891.setTransform(105.775,310.975);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_892.setTransform(97.225,306.85);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_893.setTransform(88.275,310.975);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_894.setTransform(97.25,319.5);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgYABgkQgBgjAZgYQAZgZAjAAQAjAAAaAZQAZAZAAAiQAAAkgZAYQgaAagjAAQgjAAgZgag");
	this.shape_895.setTransform(97.25,319.5);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_896.setTransform(97.225,319.525);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_897.setTransform(88.675,328.075);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_898.setTransform(97.225,331.325);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_899.setTransform(104.5,329.325);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_900.setTransform(85.375,319.525);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_901.setTransform(108.975,318.875);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_902.setTransform(105.775,310.975);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_903.setTransform(97.225,306.85);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_904.setTransform(88.275,310.975);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_905.setTransform(97.25,319.5);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgYABgkQgBgjAZgYQAZgZAjAAQAjAAAaAZQAZAZAAAiQAAAkgZAYQgaAagjAAQgjAAgZgag");
	this.shape_906.setTransform(97.25,319.5);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_907.setTransform(97.225,319.525);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_908.setTransform(88.675,328.075);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_909.setTransform(97.225,331.325);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_910.setTransform(104.5,329.325);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_911.setTransform(85.375,319.525);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_912.setTransform(108.975,318.875);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_913.setTransform(105.775,310.975);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_914.setTransform(97.225,306.85);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_915.setTransform(88.275,310.975);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAkgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_916.setTransform(97.25,319.5);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgYABgkQgBgjAZgYQAZgZAjAAQAjAAAaAZQAZAZAAAiQAAAkgZAYQgaAagjAAQgjAAgZgag");
	this.shape_917.setTransform(97.25,319.5);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_918.setTransform(97.225,319.525);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_919.setTransform(117.175,333.475);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_920.setTransform(125.725,336.725);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_921.setTransform(132.975,334.725);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_922.setTransform(113.875,324.925);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_923.setTransform(137.475,324.275);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_924.setTransform(134.275,316.375);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_925.setTransform(125.725,312.25);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_926.setTransform(116.775,316.375);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_927.setTransform(125.725,324.925);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_928.setTransform(125.725,324.925);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_929.setTransform(125.725,324.925);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_930.setTransform(117.175,333.475);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_931.setTransform(125.725,336.725);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_932.setTransform(132.975,334.725);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_933.setTransform(113.875,324.925);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_934.setTransform(137.475,324.275);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_935.setTransform(134.275,316.375);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_936.setTransform(125.725,312.25);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_937.setTransform(116.775,316.375);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_938.setTransform(125.725,324.925);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_939.setTransform(125.725,324.925);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_940.setTransform(125.725,324.925);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_941.setTransform(117.175,333.475);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_942.setTransform(125.725,336.725);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_943.setTransform(132.975,334.725);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_944.setTransform(113.875,324.925);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_945.setTransform(137.475,324.275);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_946.setTransform(134.275,316.375);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_947.setTransform(125.725,312.25);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_948.setTransform(116.775,316.375);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_949.setTransform(125.725,324.925);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_950.setTransform(125.725,324.925);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_951.setTransform(125.725,324.925);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_952.setTransform(117.175,333.475);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_953.setTransform(125.725,336.725);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_954.setTransform(132.975,334.725);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_955.setTransform(113.875,324.925);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_956.setTransform(137.475,324.275);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_957.setTransform(134.275,316.375);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_958.setTransform(125.725,312.25);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_959.setTransform(116.775,316.375);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgYAZgkAAQgiAAgZgZQgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAig");
	this.shape_960.setTransform(125.725,324.925);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgjAZgYQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgkAAQgiAAgZgZg");
	this.shape_961.setTransform(125.725,324.925);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_962.setTransform(125.725,324.925);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_963.setTransform(144.925,336.825);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_964.setTransform(153.475,340.075);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_965.setTransform(160.725,338.125);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_966.setTransform(141.575,328.275);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_967.setTransform(165.225,327.625);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_968.setTransform(162.025,319.725);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_969.setTransform(153.475,315.625);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_970.setTransform(144.475,319.725);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_971.setTransform(153.45,328.3);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgZgaAAgjQAAgjAZgYQAYgZAjAAQAkAAAYAZQAaAYAAAjQAAAjgaAaQgYAZgkAAQgiAAgZgZg");
	this.shape_972.setTransform(153.45,328.3);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_973.setTransform(153.475,328.275);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_974.setTransform(144.925,336.825);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_975.setTransform(153.475,340.075);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_976.setTransform(160.725,338.125);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_977.setTransform(141.575,328.275);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_978.setTransform(165.225,327.625);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_979.setTransform(162.025,319.725);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_980.setTransform(153.475,315.625);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_981.setTransform(144.475,319.725);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_982.setTransform(153.45,328.3);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgZgaAAgjQAAgjAZgYQAYgZAjAAQAkAAAYAZQAaAYAAAjQAAAjgaAaQgYAZgkAAQgiAAgZgZg");
	this.shape_983.setTransform(153.45,328.3);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_984.setTransform(153.475,328.275);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_985.setTransform(144.925,336.825);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_986.setTransform(153.475,340.075);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_987.setTransform(160.725,338.125);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_988.setTransform(141.575,328.275);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_989.setTransform(165.225,327.625);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_990.setTransform(162.025,319.725);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_991.setTransform(153.475,315.625);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_992.setTransform(144.475,319.725);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_993.setTransform(153.45,328.3);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgZgaAAgjQAAgjAZgYQAYgZAjAAQAkAAAYAZQAaAYAAAjQAAAjgaAaQgYAZgkAAQgiAAgZgZg");
	this.shape_994.setTransform(153.45,328.3);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_995.setTransform(153.475,328.275);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_996.setTransform(144.925,336.825);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_997.setTransform(153.475,340.075);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_998.setTransform(160.725,338.125);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_999.setTransform(141.575,328.275);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1000.setTransform(165.225,327.625);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1001.setTransform(162.025,319.725);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1002.setTransform(153.475,315.625);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1003.setTransform(144.475,319.725);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_1004.setTransform(153.45,328.3);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A9QgZgaAAgjQAAgjAZgYQAYgZAjAAQAkAAAYAZQAaAYAAAjQAAAjgaAaQgYAZgkAAQgiAAgZgZg");
	this.shape_1005.setTransform(153.45,328.3);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgsA+AAQA/AAAtAsQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1006.setTransform(153.475,328.275);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1007.setTransform(171.375,340.9);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1008.setTransform(179.925,344.175);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1009.setTransform(187.175,342.175);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1010.setTransform(168.025,332.375);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1011.setTransform(191.675,331.675);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1012.setTransform(188.475,323.825);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1013.setTransform(179.925,319.675);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1014.setTransform(170.925,323.825);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_1015.setTransform(179.9,332.35);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAYAZQAaAYAAAjQAAAjgaAZQgYAagkAAQgiAAgZgag");
	this.shape_1016.setTransform(179.9,332.35);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgtA+AAQA/AAAtAtQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1017.setTransform(179.925,332.35);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1018.setTransform(171.375,340.9);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1019.setTransform(179.925,344.175);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1020.setTransform(187.175,342.175);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1021.setTransform(168.025,332.375);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1022.setTransform(191.675,331.675);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1023.setTransform(188.475,323.825);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1024.setTransform(179.925,319.675);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1025.setTransform(170.925,323.825);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_1026.setTransform(179.9,332.35);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAYAZQAaAYAAAjQAAAjgaAZQgYAagkAAQgiAAgZgag");
	this.shape_1027.setTransform(179.9,332.35);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgtA+AAQA/AAAtAtQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1028.setTransform(179.925,332.35);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1029.setTransform(171.375,340.9);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1030.setTransform(179.925,344.175);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1031.setTransform(187.175,342.175);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1032.setTransform(168.025,332.375);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1033.setTransform(191.675,331.675);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1034.setTransform(188.475,323.825);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1035.setTransform(179.925,319.675);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1036.setTransform(170.925,323.825);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_1037.setTransform(179.9,332.35);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAYAZQAaAYAAAjQAAAjgaAZQgYAagkAAQgiAAgZgag");
	this.shape_1038.setTransform(179.9,332.35);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgtA+AAQA/AAAtAtQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1039.setTransform(179.925,332.35);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1040.setTransform(171.375,340.9);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1041.setTransform(179.925,344.175);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1042.setTransform(187.175,342.175);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1043.setTransform(168.025,332.375);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1044.setTransform(191.675,331.675);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1045.setTransform(188.475,323.825);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1046.setTransform(179.925,319.675);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1047.setTransform(170.925,323.825);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAZAAAjg");
	this.shape_1048.setTransform(179.9,332.35);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAYAZQAaAYAAAjQAAAjgaAZQgYAagkAAQgiAAgZgag");
	this.shape_1049.setTransform(179.9,332.35);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtAAg/QAAg+AsgtQAtgtA+AAQA/AAAtAtQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1050.setTransform(179.925,332.35);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_1051.setTransform(199.65,342);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1052.setTransform(208.175,345.275);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1053.setTransform(215.475,343.275);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1054.setTransform(196.325,333.475);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1055.setTransform(219.925,332.8);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1056.setTransform(216.725,324.925);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1057.setTransform(208.175,320.775);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1058.setTransform(199.225,324.925);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1059.setTransform(208.2,333.45);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgYAAgkQAAgjAZgYQAagaAiAAQAkAAAZAaQAYAZAAAiQAAAkgYAYQgZAZgkABQgigBgagZg");
	this.shape_1060.setTransform(208.2,333.45);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhqBsQgtgsAAhAQAAg+AtgsQAsguA+ABQA/gBAtAuQAtAsAAA+QAABAgtAsQgtAsg/AAQg+AAgsgsg");
	this.shape_1061.setTransform(208.2,333.45);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_1062.setTransform(199.65,342);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1063.setTransform(208.175,345.275);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1064.setTransform(215.475,343.275);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1065.setTransform(196.325,333.475);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1066.setTransform(219.925,332.8);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1067.setTransform(216.725,324.925);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1068.setTransform(208.175,320.775);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1069.setTransform(199.225,324.925);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1070.setTransform(208.2,333.45);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgYAAgkQAAgjAZgYQAagaAiAAQAkAAAZAaQAYAZAAAiQAAAkgYAYQgZAZgkABQgigBgagZg");
	this.shape_1071.setTransform(208.2,333.45);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhqBsQgtgsAAhAQAAg+AtgsQAsguA+ABQA/gBAtAuQAtAsAAA+QAABAgtAsQgtAsg/AAQg+AAgsgsg");
	this.shape_1072.setTransform(208.2,333.45);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_1073.setTransform(199.65,342);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1074.setTransform(208.175,345.275);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1075.setTransform(215.475,343.275);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1076.setTransform(196.325,333.475);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1077.setTransform(219.925,332.8);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1078.setTransform(216.725,324.925);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1079.setTransform(208.175,320.775);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1080.setTransform(199.225,324.925);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1081.setTransform(208.2,333.45);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgYAAgkQAAgjAZgYQAagaAiAAQAkAAAZAaQAYAZAAAiQAAAkgYAYQgZAZgkABQgigBgagZg");
	this.shape_1082.setTransform(208.2,333.45);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhqBsQgtgsAAhAQAAg+AtgsQAsguA+ABQA/gBAtAuQAtAsAAA+QAABAgtAsQgtAsg/AAQg+AAgsgsg");
	this.shape_1083.setTransform(208.2,333.45);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_1084.setTransform(199.65,342);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1085.setTransform(208.175,345.275);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1086.setTransform(215.475,343.275);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1087.setTransform(196.325,333.475);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1088.setTransform(219.925,332.8);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1089.setTransform(216.725,324.925);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1090.setTransform(208.175,320.775);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1091.setTransform(199.225,324.925);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgkQAAgjAZgZQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1092.setTransform(208.2,333.45);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgYAAgkQAAgjAZgYQAagaAiAAQAkAAAZAaQAYAZAAAiQAAAkgYAYQgZAZgkABQgigBgagZg");
	this.shape_1093.setTransform(208.2,333.45);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhqBsQgtgsAAhAQAAg+AtgsQAsguA+ABQA/gBAtAuQAtAsAAA+QAABAgtAsQgtAsg/AAQg+AAgsgsg");
	this.shape_1094.setTransform(208.2,333.45);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1095.setTransform(227.175,340.875);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1096.setTransform(235.7,344.15);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1097.setTransform(242.975,342.175);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1098.setTransform(223.825,332.325);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1099.setTransform(247.425,331.675);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1100.setTransform(244.225,323.8);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_1101.setTransform(235.7,319.675);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1102.setTransform(226.725,323.8);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1103.setTransform(235.7,332.35);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAYAZQAaAZAAAiQAAAjgaAZQgYAagkAAQgiAAgZgag");
	this.shape_1104.setTransform(235.7,332.35);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1105.setTransform(235.7,332.35);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1106.setTransform(227.175,340.875);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1107.setTransform(235.7,344.15);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1108.setTransform(242.975,342.175);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1109.setTransform(223.825,332.325);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1110.setTransform(247.425,331.675);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1111.setTransform(244.225,323.8);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_1112.setTransform(235.7,319.675);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1113.setTransform(226.725,323.8);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1114.setTransform(235.7,332.35);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAYAZQAaAZAAAiQAAAjgaAZQgYAagkAAQgiAAgZgag");
	this.shape_1115.setTransform(235.7,332.35);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1116.setTransform(235.7,332.35);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1117.setTransform(227.175,340.875);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1118.setTransform(235.7,344.15);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1119.setTransform(242.975,342.175);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1120.setTransform(223.825,332.325);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1121.setTransform(247.425,331.675);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1122.setTransform(244.225,323.8);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_1123.setTransform(235.7,319.675);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1124.setTransform(226.725,323.8);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1125.setTransform(235.7,332.35);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAYAZQAaAZAAAiQAAAjgaAZQgYAagkAAQgiAAgZgag");
	this.shape_1126.setTransform(235.7,332.35);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1127.setTransform(235.7,332.35);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1128.setTransform(227.175,340.875);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1129.setTransform(235.7,344.15);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1130.setTransform(242.975,342.175);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1131.setTransform(223.825,332.325);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1132.setTransform(247.425,331.675);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1133.setTransform(244.225,323.8);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_1134.setTransform(235.7,319.675);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1135.setTransform(226.725,323.8);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAjgZAZQgZAZgkAAQgiAAgZgZQgZgZAAgjQAAgiAZgaQAZgZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1136.setTransform(235.7,332.35);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAYAZQAaAZAAAiQAAAjgaAZQgYAagkAAQgiAAgZgag");
	this.shape_1137.setTransform(235.7,332.35);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgtgtAAg/QAAg+AtgtQAtgtA+AAQA/AAAtAtQAsAtAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1138.setTransform(235.7,332.35);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1139.setTransform(254.425,337.475);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1140.setTransform(262.95,340.75);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1141.setTransform(270.225,338.775);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1142.setTransform(251.075,328.925);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1143.setTransform(274.675,328.275);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1144.setTransform(271.475,320.4);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1145.setTransform(262.95,316.275);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1146.setTransform(253.975,320.4);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgYgZAAgkQAAgiAYgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1147.setTransform(262.95,328.95);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgYgYAAgkQAAgiAYgZQAagaAiAAQAjAAAaAaQAZAZAAAiQAAAkgZAYQgaAZgjABQgigBgagZg");
	this.shape_1148.setTransform(262.95,328.95);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtgBg/QABg+AsgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1149.setTransform(262.95,328.95);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1150.setTransform(254.425,337.475);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1151.setTransform(262.95,340.75);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1152.setTransform(270.225,338.775);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1153.setTransform(251.075,328.925);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1154.setTransform(274.675,328.275);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1155.setTransform(271.475,320.4);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1156.setTransform(262.95,316.275);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1157.setTransform(253.975,320.4);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgYgZAAgkQAAgiAYgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1158.setTransform(262.95,328.95);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgYgYAAgkQAAgiAYgZQAagaAiAAQAjAAAaAaQAZAZAAAiQAAAkgZAYQgaAZgjABQgigBgagZg");
	this.shape_1159.setTransform(262.95,328.95);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtgBg/QABg+AsgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1160.setTransform(262.95,328.95);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1161.setTransform(254.425,337.475);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1162.setTransform(262.95,340.75);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1163.setTransform(270.225,338.775);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1164.setTransform(251.075,328.925);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1165.setTransform(274.675,328.275);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1166.setTransform(271.475,320.4);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1167.setTransform(262.95,316.275);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1168.setTransform(253.975,320.4);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgYgZAAgkQAAgiAYgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1169.setTransform(262.95,328.95);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgYgYAAgkQAAgiAYgZQAagaAiAAQAjAAAaAaQAZAZAAAiQAAAkgZAYQgaAZgjABQgigBgagZg");
	this.shape_1170.setTransform(262.95,328.95);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtgBg/QABg+AsgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1171.setTransform(262.95,328.95);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1172.setTransform(254.425,337.475);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1173.setTransform(262.95,340.75);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1174.setTransform(270.225,338.775);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1175.setTransform(251.075,328.925);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1176.setTransform(274.675,328.275);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1177.setTransform(271.475,320.4);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1178.setTransform(262.95,316.275);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1179.setTransform(253.975,320.4);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgiAAgagZQgYgZAAgkQAAgiAYgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1180.setTransform(262.95,328.95);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgYgYAAgkQAAgiAYgZQAagaAiAAQAjAAAaAaQAZAZAAAiQAAAkgZAYQgaAZgjABQgigBgagZg");
	this.shape_1181.setTransform(262.95,328.95);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhrBsQgsgtgBg/QABg+AsgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAsg/AAQg+AAgtgsg");
	this.shape_1182.setTransform(262.95,328.95);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1183.setTransform(281.575,332.625);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1184.setTransform(290.075,335.925);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1185.setTransform(297.375,333.925);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1186.setTransform(278.225,324.1);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1187.setTransform(301.825,323.425);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1188.setTransform(298.625,315.575);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1189.setTransform(290.075,311.425);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1190.setTransform(281.125,315.575);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgagZQgZgZAAgjQAAgiAZgaQAagZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_1191.setTransform(290.1,324.1);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgZAAgjQAAgiAZgZQAagaAiAAQAkAAAZAaQAYAZAAAiQAAAjgYAZQgZAZgkAAQgiAAgagZg");
	this.shape_1192.setTransform(290.1,324.1);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhqBsQgtgtAAg/QAAg+AtgsQAsguA+ABQA/gBAtAuQAtAsAAA+QAAA/gtAtQgtAsg/ABQg+gBgsgsg");
	this.shape_1193.setTransform(290.1,324.1);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1194.setTransform(281.575,332.625);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1195.setTransform(290.075,335.925);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1196.setTransform(297.375,333.925);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1197.setTransform(278.225,324.1);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1198.setTransform(301.825,323.425);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1199.setTransform(298.625,315.575);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1200.setTransform(290.075,311.425);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1201.setTransform(281.125,315.575);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgagZQgZgZAAgjQAAgiAZgaQAagZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_1202.setTransform(290.1,324.1);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgZAAgjQAAgiAZgZQAagaAiAAQAkAAAZAaQAYAZAAAiQAAAjgYAZQgZAZgkAAQgiAAgagZg");
	this.shape_1203.setTransform(290.1,324.1);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhqBsQgtgtAAg/QAAg+AtgsQAsguA+ABQA/gBAtAuQAtAsAAA+QAAA/gtAtQgtAsg/ABQg+gBgsgsg");
	this.shape_1204.setTransform(290.1,324.1);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1205.setTransform(281.575,332.625);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1206.setTransform(290.075,335.925);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1207.setTransform(297.375,333.925);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1208.setTransform(278.225,324.1);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1209.setTransform(301.825,323.425);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1210.setTransform(298.625,315.575);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1211.setTransform(290.075,311.425);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1212.setTransform(281.125,315.575);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgagZQgZgZAAgjQAAgiAZgaQAagZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_1213.setTransform(290.1,324.1);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgZAAgjQAAgiAZgZQAagaAiAAQAkAAAZAaQAYAZAAAiQAAAjgYAZQgZAZgkAAQgiAAgagZg");
	this.shape_1214.setTransform(290.1,324.1);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhqBsQgtgtAAg/QAAg+AtgsQAsguA+ABQA/gBAtAuQAtAsAAA+QAAA/gtAtQgtAsg/ABQg+gBgsgsg");
	this.shape_1215.setTransform(290.1,324.1);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1216.setTransform(281.575,332.625);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1217.setTransform(290.075,335.925);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1218.setTransform(297.375,333.925);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1219.setTransform(278.225,324.1);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1220.setTransform(301.825,323.425);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1221.setTransform(298.625,315.575);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1222.setTransform(290.075,311.425);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1223.setTransform(281.125,315.575);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgagZQgZgZAAgjQAAgiAZgaQAagZAiAAQAjAAAZAZQAZAaAAAig");
	this.shape_1224.setTransform(290.1,324.1);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag8A8QgZgZAAgjQAAgiAZgZQAagaAiAAQAkAAAZAaQAYAZAAAiQAAAjgYAZQgZAZgkAAQgiAAgagZg");
	this.shape_1225.setTransform(290.1,324.1);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhqBsQgtgtAAg/QAAg+AtgsQAsguA+ABQA/gBAtAuQAtAsAAA+QAAA/gtAtQgtAsg/ABQg+gBgsgsg");
	this.shape_1226.setTransform(290.1,324.1);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1227.setTransform(306.45,327.8);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1228.setTransform(314.975,331.075);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1229.setTransform(322.275,329.075);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1230.setTransform(303.125,319.275);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1231.setTransform(326.725,318.6);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1232.setTransform(323.525,310.725);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_1233.setTransform(314.975,306.575);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1234.setTransform(306.025,310.725);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f().rs(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,9.1).p("ABWAAQAAAkgZAZQgZAZgkAAQgjAAgZgZQgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaAAAig");
	this.shape_1235.setTransform(315,319.25);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.rf(["#8E7059","#4B3218"],[0.576,1],0,0,0,0,0,8.6).s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgaAiAAQAkAAAYAaQAaAZAAAiQAAAkgaAYQgYAZgkAAQgjAAgYgZg");
	this.shape_1236.setTransform(315,319.25);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.rf(["#4F4C43","#4F4C43","#3A3835"],[0.157,0.698,1],0,0,0,0,0,15.3).s().p("AhqBsQgugtABg/QgBg+AugsQAsguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAtg/AAQg+AAgsgtg");
	this.shape_1237.setTransform(315,319.25);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f().s("#020203").p("AVaAUQiEAEivgEQlegHjXgkInjASQopAPiiAGIqdAI");
	this.shape_1238.setTransform(203.2796,308.7242);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f().s("#020203").p("A2gAoQGAAIAIgIQACgBEKgUQEggUBqgWIDfgPQDmgMAuAQIDEATQDPASA7gDINiAT");
	this.shape_1239.setTransform(201.5006,301.9176);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f().ls(["#8E7059","#4B3218"],[0,1],-48.8,0.1,52.8,0.1).p("AD5NKQA5hRAqhUQAXgtAdhRQA6iiAei4QAOg/AKhTQAVimgRhpQgCg1gUhzQgqjlhgk2IAQBQQANBWgKAgQgZhUhBi9IAUBmQATBogGARQgQgbgRgoQghhOgFg7IgFAvQgBA3AQAsQgdgqgcg2QgphQgEgxQgCgQADgMACbweIgCAyQgCBTADAUQgbgdgggsQhAhYgYhKIgBASQgBATABAEIAxCcQA3C7AgCdIAYDGQATDpgcCsIgMA8QgQBKgUBGQhBDjhXBzQgoBGhCBdQiFC7iGB3IhEAwQBzg/B+hCQD6iEAzgRIAjgPQAqgQAggFQBkgOgSBjQgBAEgBAGQgdAugxA+QhiB7hkBMIghAAQBBguBUhTQBchbBGhh");
	this.shape_1240.setTransform(226.7428,191.2456);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.lf(["#8E7059","#4B3218"],[0.576,1],-50.4,0,50.4,0).s().p("ABEP7QBchcBFhhQAThihkAOQghAEgqARIgjAPQgyAQj7CFQh9BChzA/IBDgxQCGh2CFi7QBDheAnhFQBXhzBBjjQAVhHAQhJIALg7QAciugTjpIgYjGQggicg3i7IgvicQgBgEABgTIABgSQAWBKBABXQAgAtAcAdQgDgVAChSIABgzQAFAyApBQQAbA2AdAqQgPgtABg3IAEguQAFA7AiBOQARAoAPAbQAHgRgThpIgVhlQBCC9AZBUQAKgggOhXIgQhPQBhE2ApDlQAVBzABA1QARBpgUCmQgKBTgOA+QgfC5g6CiQgdBRgXAtQgpBUg6BQIgCAKQgdAvgxA+QhiB7hjBLIgiABQBCguBUhTg");
	this.shape_1241.setTransform(228.6603,192.35);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAHgHAHABQAJgBAHAHQAFAGABAIQgBAJgFAHQgHAFgJABQgHgBgHgFg");
	this.shape_1242.setTransform(83.5,342.6);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1243.setTransform(97.85,345.2);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1244.setTransform(112.2,346.9);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1245.setTransform(130.7,347.95);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgHAHgHQAGgHAIAAQAJAAAHAHQAFAHAAAHQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1246.setTransform(147.45,349.05);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgHAGgHQAGgGAIAAQAJAAAGAGQAHAHAAAHQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1247.setTransform(163.35,349.9);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgHAHgHQAGgGAIAAQAIAAAHAGQAGAHAAAHQAAAJgGAHQgHAFgIABQgIgBgGgFg");
	this.shape_1248.setTransform(178.4,349.9);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgHAGgHQAGgGAIAAQAJAAAGAGQAHAHAAAHQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1249.setTransform(192.95,349.9);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgHAHgHQAGgGAIAAQAJAAAHAGQAFAHAAAHQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_1250.setTransform(210.55,349.9);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgHAHgHQAGgHAIAAQAJAAAHAHQAFAHAAAHQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1251.setTransform(228.65,349.05);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAIAAAHAGQAHAHAAAHQAAAJgHAGQgHAHgIAAQgIAAgGgHg");
	this.shape_1252.setTransform(250.45,347.75);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1253.setTransform(273.2,346.3);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1254.setTransform(286.675,344.775);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAHAGQAFAGABAIQgBAJgFAGQgHAGgJABQgIgBgGgGg");
	this.shape_1255.setTransform(303.45,342.45);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAGAGQAGAGAAAIQAAAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1256.setTransform(316.925,341.1);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#584D38").s().p("AAVAHIgVgBQghABgJgNQALAGAfADQAFACAQgCQAPgBAHACQgHADgLAAIgEAAg");
	this.shape_1257.setTransform(442.025,204.6786);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#584D38").s().p("AglAEQgKgEgCgCIAOACIAZAFQANADALgCQANgEAWgLQgLAOgXACQgNADgKAAQgQAAgNgGg");
	this.shape_1258.setTransform(443.2,203.065);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#836D5D").s().p("AgUAaIABAAIgWAAIgBgBIgbgZIAaACIgXgXIA7AVQAVAEAVgHQAVgIAOgRQgMATgWAJQgWAKgWgDIgYgHIAPAQIgYgDIAEAEIASAAQAiAJAYgJQAegLABgiQAEAkggAOQgPAHgTAAQgNAAgPgDg");
	this.shape_1259.setTransform(442.2225,202.9884);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#836D5D").s().p("AguAYIgQgQIAZAEIgTgTIAqANQAgAEAagRQANgJAGgKQAAAugtAHg");
	this.shape_1260.setTransform(442.9253,202.725);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#53554D").s().p("AhHAcQAcgcAvgdQAQgBAcgIIAsgOQgVAMgXAJQgbAKgNABQgyAggZAUQgQAMgIAJQAFgJAPgQg");
	this.shape_1261.setTransform(425.575,198.6);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#322A20").s().p("Ag7BBQgQgBgRgKQgYgVACgbQACgWAXgYQBNgkBFATQAWAFAYAPQAFABAEAHQAEAHgBAGQAAgGgEgGQgEgFgGgCIghgNQgjgKgrAGQgnAFgiAPQgVAVgCASQgCALAGAMQAFAMAIAHQARAKAMACQATADAAgUQACAVgTAAIgBAAg");
	this.shape_1262.setTransform(428.2025,210.8254);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#322A20").s().p("AgmAUQAjgLBDAAQAogGALgUQAKgUgUgfQgLANgKABQgMADgDgWQAFATAKgCQAIgDAKgQIACgDQAeAkgLAbQgLAbguAHQgnAAgTACQghACgWAJQgTAGgWAOIglAbQAsgsArgPg");
	this.shape_1263.setTransform(430.1593,197.875);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#433520").s().p("AggAWQgNgIgDgMQgDgGADgKQABALADADQAIAQAdAEIAPgIQAWgMAUgdQgGAVgPAPQgQARgUAGQgOgBgLgHg");
	this.shape_1264.setTransform(408.1182,196.325);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#433520").s().p("AgpAxQgPgCgEgPQgEgSgBgIQgBgMAEgNQAhgcAkgBQAqgCAQAoQADAGgDADQgDACgHAAQgHgQgQgHQgSgHgOAJQgZAPAOAwIgDABQgKAFgLAAIgGAAgAg1gOQgGAPAHAcQACAMANABQAJABAJgEQgLgwAbgPQAQgJATAJQAQAIAIAQQAFAAADgCQADgDgDgFQgOgfgfAAQgcAAgsAbg");
	this.shape_1265.setTransform(420.5313,193.8175);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f().s("#494539").p("AABATQgdAAAPgSQAHgHAMgJIAMAQQAGASgXAAg");
	this.shape_1266.setTransform(422.0815,194.6987);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#544939").s().p("AgMASQgMgnAXgSQAFgDgBgMIgDgTQAQAfgOAKQgKAMACAVQABAKAHAaIAPAlQgVgagIgeg");
	this.shape_1267.setTransform(416.3583,224.575);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#544939").s().p("AgHAIQgMgOAAgRQAcAkALALQgQgCgLgOg");
	this.shape_1268.setTransform(411.125,233.125);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#544939").s().p("AgCBmQgTgUADgTIAFgLQAGgZgTgtIgEgFQAAgFAGgDIATgMQAKgHABgIIgDgJIgGghQgEgVgJgJQAHAEAFAKIAFATQAGAXAGAOQADAKgMALQgDADgTANQANAZADAgQABARgJANIgBACIAAAFQACAPAPARIAZAcQgXgTgKgKg");
	this.shape_1269.setTransform(413.8731,219.85);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#544939").s().p("AgPBNQgNgTADgNQAKgOAAgRQAAgPgIgQIgLgNQgGgHACgIQAFgSAYgOIAFgBQAAgRgGgXIgEgKQgDgFgEgCQAFACADAFIAFAJQAJAZAAARQgBAEgBABIgCAAQgNAHgKAOQgGAIAEAGQAKAIAEAIQAJAQAAATQAAAUgLAOQgCAHAJASQAIAOAPASIAZAfQgogmgOgVg");
	this.shape_1270.setTransform(412.4515,221.9);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#8F8777").s().p("AAWgRQgNAUgeAPQAMgaAfgJg");
	this.shape_1271.setTransform(357.75,296.5);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#8F8777").s().p("AgRAHIAAgCQAPgOAVABQgOAPgTABIAAAAIgCABIgBgCg");
	this.shape_1272.setTransform(391,274.1066);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#8F8777").s().p("AAKgNQgBATgSAIQACgSARgJg");
	this.shape_1273.setTransform(367.925,290.5);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#8F8777").s().p("AgLAFQAJgPAUgJIgKAOIAIgCQgGAHgKAIIgSAMg");
	this.shape_1274.setTransform(371.95,288.6);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#8F8777").s().p("AgEgGQAPgJATgCQgLAKgSAIIgeARQAIgQARgIg");
	this.shape_1275.setTransform(380.55,281.65);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#8F8777").s().p("AgKAAQAKgMAMAAIANgJQgDAIgGAHQgNAFgGAHQgNAMgIAFQAKgTAEgEg");
	this.shape_1276.setTransform(389.525,278.15);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#8F8777").s().p("AgOADQAEgHAJgCQAIgDAJADQgHAGgUAGIgDADQgDgCADgEg");
	this.shape_1277.setTransform(397.8182,269.275);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#8F8777").s().p("AgNABQAKgHANADIAAABIAAgCQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgGAFgHAAIgBAAQgGAAgGgEg");
	this.shape_1278.setTransform(401.8313,264.8725);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#8F8777").s().p("AgGgGQAJgIAKAFIgNAKQgGAFgEAGQgGgKAKgIg");
	this.shape_1279.setTransform(405.4274,261.892);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.4,0.4,0.5).s().p("AgJABQADgDADgCQAIgGAJAAQgEAIgIAFIgPAIQAAgFAEgFg");
	this.shape_1280.setTransform(350.675,305.175);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.8,0.7,0.9).s().p("AgGAFIgEgBIAAAAIABgBIgBABIgCAAIAAAAIgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIAAAAIAEgCIAIgCQAHgBAHAEQgFAEgJACIgCAAIgEAAg");
	this.shape_1281.setTransform(373.4688,293.665);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.8,0.6,0.8).s().p("AgEgBQAEgGAEgDQADAHgCAFQgDAGgFADQgDgGACgGg");
	this.shape_1282.setTransform(357.9374,302.525);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.8,0.6,0.8).s().p("AgJAFQAAgEADgDQABgDADgCQAFgFAGAAIgFALIAHAAQgEAFgJAGIgIADg");
	this.shape_1283.setTransform(361.025,301.825);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-0.9,0.7,1).s().p("AgNgBIALgFQAMgEALAEQgJAGgMACIgJADIgMAEQABgGAHgEg");
	this.shape_1284.setTransform(366.5,297.7183);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.5,0.6).s().p("AgJgCIAEgEIAFgDQAEAAAFABIAHgFIgDALIgBACIgDAAIgHAAIgCAAIgHAJQgDADgFACIAGgQg");
	this.shape_1285.setTransform(373.425,297.15);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.7,0.6,0.9).s().p("AgLAEQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAABgBQAAgBADgCQAEgDAEAAQAHgBAGAGQgFADgIABIgFAAIgCgBIgBABIgBACg");
	this.shape_1286.setTransform(378.08,290.9683);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-1,0.8,0.9).s().p("AAAAFQgIgCgDgFQAFgDAHABIAGACIABABIACAAIACACIgBACIgBABIgBABIgDAAg");
	this.shape_1287.setTransform(380.375,288.1357);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.4,0.5).s().p("AgJACQgBgEAFgEQAEgDAEABQAFABACAEIgKAEIgBACIgDAGQgEgCgBgFg");
	this.shape_1288.setTransform(382.5417,286.2357);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.7,0.6,0.7).s().p("AgIAEQACgEACgDQAHgIAIgCQgBAJgHAHQgDADgCACIgIAGQgBgFADgFg");
	this.shape_1289.setTransform(352.9,313.675);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.6,0.5,0.6).s().p("AgMAGQAAgBAAAAQgBAAAAgBQAAAAABAAQAAAAAAgBIAAgBIAEgCQACgCAEgCQAHgDAJACQgFAGgHADIgHACIgEAAIABgBIgBABIgCABg");
	this.shape_1290.setTransform(372.15,296.8636);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-0.9,0.7,1).s().p("AgEAAQACgHADgDQAFAFgBAFQgBAHgFAEQgDgEAAgHg");
	this.shape_1291.setTransform(359.3091,309.3);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.9,-1,0.4,0.7).s().p("AgIAIIABgIIACgGQAFgGAFgDIgDAOIAHgCQgDAGgGAHIgHAGg");
	this.shape_1292.setTransform(362.2,307.85);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.6,0.4,0.5).s().p("AgNABQADgDAGgEQAMgHALABQgGAHgNAHIgIAFIgKAGQgBgFAGgHg");
	this.shape_1293.setTransform(366.4173,302.5875);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.9,0.7,0.9).s().p("AgJAAIACgEQACgEADgBQADgBAFAAIAGgGIgBALIAAABIgDACIgHACIgBAAIgEALQgDAEgEACIACgRg");
	this.shape_1294.setTransform(372.9833,300.225);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.6,0.5,0.7).s().p("AgJAGIgCgDQAAgDACgBQAEgEADAAQAIgDAGAEQgEAEgIADIgEABIgCAAIgBABIAAACg");
	this.shape_1295.setTransform(375.95,293.1519);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.6,-0.9,0.6,0.8).s().p("AgMAAQAGgDAHgBIAGAAIABABIAAABIACgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIAAABIgCACIgCABIgHACQgHAAgGgFg");
	this.shape_1296.setTransform(377.4,289.75);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.8,0.5,0.5).s().p("AgHAEQgDgEAEgFQAEgEADAAQAEAAAEADIgFAEIgDACIgBADIgBAHQgFgCgBgEg");
	this.shape_1297.setTransform(379.015,287.4214);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-0.9,0.7,1).s().p("AgHAGIADgIQAEgJAIgEQAAAJgEAIIgEAHIgGAHQgCgEABgGg");
	this.shape_1298.setTransform(385.1083,284.125);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.4,0.4,0.5).s().p("AgLAJIAAgDIADgFIAGgEQAGgFAIAAQgDAIgHAEQgDADgCAAIgEABIAAgBIAAABIgCABg");
	this.shape_1299.setTransform(400.4875,263.7477);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,-0.9,0.8,1).s().p("AgEAAQAAgGAEgEQAEAEABAGQAAAHgFAEQgDgEgBgHg");
	this.shape_1300.setTransform(390.5,278.525);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1,-1.2,0.5,0.9).s().p("AgHAJIgBgJIACgFQAEgHAEgEIgBANIAAABIAHgEQAAAGgIAKIgDAHg");
	this.shape_1301.setTransform(393,276.575);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.7,0.5,0.6).s().p("AgMAEQACgEAFgFQAKgKALgBQgEAIgLAJIgHAIIgIAIQgCgGAEgHg");
	this.shape_1302.setTransform(396.0417,270.5);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.8,-1.1,0.9,1.2).s().p("AgJACIABgFQABgDAEgCQACgCAFgBIAEgIIACAMIAAABIgJAFIgBABIAAADIgCAJQgCAEgDAEIgCgSg");
	this.shape_1303.setTransform(402,266.85);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-0.6,0.4,0.4).s().p("AgIAIIgCgDQAAgDABgCQACgDAEgCQAHgEAHADQgCAEgIAFIgGACIgBABIAAACg");
	this.shape_1304.setTransform(403.4188,259.3607);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.5,-0.8,0.5,0.6).s().p("AgLACQAEgEAHgCIAGgBIABABIACgBQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIABACIgBACIgCACQgDACgEABIgEABQgFAAgEgEg");
	this.shape_1305.setTransform(404.15,255.6558);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.4,-0.7,0.6,0.7).s().p("AgGAGQgDgEADgFQADgFADgBQAFgBADACIgEAGIgCADIgBACIAAAHQgEgBgDgDg");
	this.shape_1306.setTransform(405.1682,253.0333);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.4,0.3,1.4).s().p("AgJADIAGgGQAHgIAIgBQgCAIgHAHIgFAFIgIAFQgBgEACgGg");
	this.shape_1307.setTransform(375.195,288.325);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.7,0.2,0.8).s().p("AgLAHIgBgBIAAgDIAEgDIAHgEQAHgDAIADQgFAGgIACIgGACIgEAAIgBABg");
	this.shape_1308.setTransform(395.0917,272.3432);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.2,0.2,1.2).s().p("AgEAAQACgHAEgDQAEAFgBAGQgCAHgEADQgEgFABgGg");
	this.shape_1309.setTransform(381.75,284.225);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-1.7,0.2,1.3).s().p("AgJAHQAAgEABgDIAEgGQAEgGAFgCIgDAMIAAABIAIgCQgDAFgIAIIgHAFg");
	this.shape_1310.setTransform(384.7188,282.875);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.2,-1.2,0.2,1.2).s().p("AgNABQADgDAHgEQAKgGAMABQgGAHgNAGIgIAFIgKAFQgBgFAGgGg");
	this.shape_1311.setTransform(389.1229,277.7859);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.3,-1.7,0.3,1.7).s().p("AgJAAIACgFQACgCAEgCQADgBAFAAIAFgGIAAAMIgBABIgJADIgCAAIgFAKQgDAFgDACIACgRg");
	this.shape_1312.setTransform(395.7833,275.725);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.7,0.1,0.7).s().p("AgKAGIgBgDQAAgDACgBQADgCAEgCQAIgCAGAEQgFAEgHACIgEABIgCAAIgCABIAAACg");
	this.shape_1313.setTransform(399.05,268.7795);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-0.7,0.1,0.6).s().p("AgLAAQAFgEAHAAIAGABIABABIAAAAIAAAAIAAAAIAAAAIAAAAIABgBIAEACIgBACIgCABIgCABQgDACgFAAQgGAAgFgFg");
	this.shape_1314.setTransform(400.65,265.45);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.1,-1,0.2,1).s().p("AgIAEQgCgEAEgFQAEgEAEAAQAEAAADADIgIAGIgBADIgCAHQgEgCgCgEg");
	this.shape_1315.setTransform(402.3554,263.175);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#8F8777").s().p("AgEgCQAEgIAIAAQAAAHgEAFIgIAJQgHgFAHgIg");
	this.shape_1316.setTransform(374.4,284.825);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#8F8777").s().p("AgNAFIAAAAIgDAAIgBgBIABgDIABgBQAQgJARAIQgLAGgNAAIgHAAgAgOABIACABIAAgBIgBgBIgBABg");
	this.shape_1317.setTransform(393.925,272.7556);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#8F8777").s().p("AgFgKQAOAGgDAPQgOgFADgQg");
	this.shape_1318.setTransform(381.925,282.05);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#8F8777").s().p("AgLgCQACgHAFgDQABAJACAEQAGgBAHAAQgFAHgKAGQgJgHABgIg");
	this.shape_1319.setTransform(385.7893,281.175);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#8F8777").s().p("AgUACQAIgIAMgCQALgCAMAEQgIAFgaAFIgFABQgDABgBADQgDgDADgEg");
	this.shape_1320.setTransform(388.6432,277.0136);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#8F8777").s().p("AgJAHQgFgHACgFQADgFAJAAIAGACIAAgGQAEAFADAIIgQABIABAGQAAAGgDADIgEgIg");
	this.shape_1321.setTransform(397.9714,276.425);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#8F8777").s().p("AgNAFQgEgCACgDIAEgDQAOgGAOAJQgKAFgQgBIABACIgFgBg");
	this.shape_1322.setTransform(397.4269,269.955);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#8F8777").s().p("AgTgCQAOgEASAFIABAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgLABQgMAAgNgHg");
	this.shape_1323.setTransform(397.0313,266.9975);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#8F8777").s().p("AgKABQgDgIAKgBQAJgBAFAGIgLADIABACIAEAIQgKAAgFgJg");
	this.shape_1324.setTransform(397.9154,264.9929);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#8F8777").s().p("AgDgEQAJgIAOgCQgHAJgLAIIgVAMQADgMANgHg");
	this.shape_1325.setTransform(352.25,301.05);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#8F8777").s().p("AgQAFIAAAAIgDAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAABAAQASgKATAIQgLAGgRAAIgIAAg");
	this.shape_1326.setTransform(384.8636,285.1861);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#8F8777").s().p("AAGgOQAEASgPALQgEgSAPgLg");
	this.shape_1327.setTransform(362.675,297.475);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#8F8777").s().p("AgNAJQACgRAWgIIgLASQAIgCAHAAQgKAJgTAIg");
	this.shape_1328.setTransform(367.275,296.375);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#8F8777").s().p("AgDgIQARgEARADQgKAFgVAFQgUAFgKAFQAGgNAVgGg");
	this.shape_1329.setTransform(374.875,290.8734);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#8F8777").s().p("AgPAFQAEgIAFgFQAGgGANAEIAJgJQgCAJgEAIIgOAAQgDABgDAEIgHAJQgGAGgEACIAGgPg");
	this.shape_1330.setTransform(384.875,290.325);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#8F8777").s().p("AgQABQABgDADgBQAPgIAPALQgHADgJAAIgOABQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgDgCABgEg");
	this.shape_1331.setTransform(391.4389,281.5359);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#8F8777").s().p("AgQgEQAIgDAKADIAKAEIgBgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABgBAAQgBACgFABQgQAAgKgKg");
	this.shape_1332.setTransform(394.5071,277.4182);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#8F8777").s().p("AgHgIQAKgJALALQgMADgDADQgCAAgBAFIgDAIQgMgMAMgJg");
	this.shape_1333.setTransform(397.6936,274.8225);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#8F8777").s().p("AgDgEQAHgFAKgBQgHANgUAIQABgJAJgGg");
	this.shape_1334.setTransform(348.875,309.7);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#8F8777").s().p("AgKAEIAAAAIgBAAQAAABgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAIABgDQAMgJAOAIQgHAGgJAAIgIgBg");
	this.shape_1335.setTransform(371.7,298.1597);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#8F8777").s().p("AAEgKQAGAPgOAFQgFgNANgHg");
	this.shape_1336.setTransform(356.15,307.05);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#8F8777").s().p("AgHgCQAHgJAJgBIgGALIAIAAQgEAGgRAJQACgOABgCg");
	this.shape_1337.setTransform(359.25,306.35);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#8F8777").s().p("AgDgGQAMgEAMAEQgHAGgNACIgWAHQAEgLAOgEg");
	this.shape_1338.setTransform(364.7,302.225);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#8F8777").s().p("AgLADQACgGAEgDQAFgFAJADIAHgFQgBAFgDAHIgKABIgCAAIgGAIQgEAFgFABIAEgLg");
	this.shape_1339.setTransform(371.625,301.675);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#8F8777").s().p("AgKAGQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABgBQAAgCADgCQALgHAKAJQgKAHgKgDIgBABIgBABIgBAAg");
	this.shape_1340.setTransform(376.2938,295.4469);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#8F8777").s().p("AgLgCQAJgEAJAFIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgCACgDAAIgDAAQgKAAgFgHg");
	this.shape_1341.setTransform(378.5821,292.6459);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#8F8777").s().p("AgJACQgBgHAIgCQAIgDAEAHQgJADgCADIgDAGQgEgCgBgFg");
	this.shape_1342.setTransform(380.7638,290.73);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f().ls(["#4C473C","#3C3124"],[0.42,0.855],-4.1,-9.6,12.5,12.7).p("AE9leQg2BLhSBeQijC5iHBZQgPAPgUAPQgnAegbgDQgRAFgPANQggAZAGAkIgnA7IBMBKQA9gQBkhIQDFiQC+kSg");
	this.shape_1343.setTransform(375.8358,281.7792);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#7B6D5F").s().p("Ak7EbIAmg7QgFgkAfgaQAQgMARgGQAaADAogdQAUgPAOgQQCIhXCji7QBRhdA2hMIgIDOQi9ETjGCPQhjBIg+ARg");
	this.shape_1344.setTransform(375.875,282.325);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1345.setTransform(241.6,354.75);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgHAAgHgHg");
	this.shape_1346.setTransform(296.9,373.5);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAHgGAHgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJgBQgHABgHgHg");
	this.shape_1347.setTransform(311.3,371.35);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_1348.setTransform(327.45,367.825);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAIAAAHAGQAGAGAAAIQAAAJgGAGQgHAHgIAAQgIAAgGgHg");
	this.shape_1349.setTransform(339.6,363.95);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgHAGgHQAGgHAIABQAJgBAHAHQAFAHABAHQgBAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1350.setTransform(350.25,359.95);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAGAGABAIQgBAJgGAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1351.setTransform(360.9,353.55);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1352.setTransform(372.25,347.3);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgHAGgHQAGgHAIABQAJgBAGAHQAHAHAAAHQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1353.setTransform(381.5,339.7);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_1354.setTransform(391.2,332);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAHgGAHgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAGgJABQgHgBgHgGg");
	this.shape_1355.setTransform(398.1,322.55);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgHAHgHQAHgGAHAAQAJAAAHAGQAFAHAAAHQAAAJgFAHQgHAFgJABQgHgBgHgFg");
	this.shape_1356.setTransform(83.2,359.8);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAGAGQAGAGAAAIQAAAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1357.setTransform(91.225,361.8);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_1358.setTransform(99.25,364.65);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1359.setTransform(108.95,366.8);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1360.setTransform(119.35,367.825);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1361.setTransform(129.25,368.95);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1362.setTransform(138.85,369.05);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1363.setTransform(148.2,368.95);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAIgBAHAHQAGAGAAAIQAAAJgGAHQgHAFgIAAQgIAAgGgFg");
	this.shape_1364.setTransform(178.4,369.95);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1365.setTransform(189.9,369.95);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1366.setTransform(199.75,369.95);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1367.setTransform(210.05,369.95);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1368.setTransform(220.65,369.95);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIABQAJgBAGAHQAGAGABAIQgBAJgGAGQgGAHgJgBQgIABgGgHg");
	this.shape_1369.setTransform(231.75,369.05);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1370.setTransform(242.35,369.05);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1371.setTransform(253.85,368.95);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_1372.setTransform(264.65,367.825);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1373.setTransform(273.875,367.825);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1374.setTransform(285.25,366.8);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1375.setTransform(295.55,365.675);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_1376.setTransform(306.15,364.65);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgHAHgHQAHgGAHAAQAJAAAHAGQAFAHAAAHQAAAJgFAHQgHAFgJABQgHgBgHgFg");
	this.shape_1377.setTransform(316.3,362.5);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgHAHgHQAGgGAIAAQAJAAAHAGQAFAHAAAHQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_1378.setTransform(327.45,360.35);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAIgBAHAHQAGAGAAAIQAAAJgGAHQgHAFgIAAQgIAAgGgFg");
	this.shape_1379.setTransform(339.6,356.9);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgHAGgHQAGgHAIAAQAJAAAGAHQAHAHAAAHQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_1380.setTransform(351.8,351.2);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHgBgIQABgIAGgGQAGgHAIABQAJgBAGAHQAGAGABAIQgBAIgGAHQgGAHgJAAQgIAAgGgHg");
	this.shape_1381.setTransform(360.9,344.85);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAHAGQAFAGABAIQgBAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_1382.setTransform(372.4,337.95);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1383.setTransform(382.125,330.625);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAGgJABQgIgBgGgGg");
	this.shape_1384.setTransform(390.15,322.55);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgHAGgHQAGgGAIAAQAJAAAGAGQAHAHAAAHQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1385.setTransform(397,313.9);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHABgIQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAIgFAHQgHAHgJgBQgIABgGgHg");
	this.shape_1386.setTransform(403.25,306.5);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAHgHAHAAQAJAAAGAHQAHAHAAAHQAAAJgHAGQgGAHgJgBQgHABgHgHg");
	this.shape_1387.setTransform(81.35,351.2);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1388.setTransform(89.85,353.55);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1389.setTransform(108.95,356.9);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1390.setTransform(129.25,359.05);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1391.setTransform(136.7,359.65);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_1392.setTransform(147.45,359.65);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1393.setTransform(156.7,359.65);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgHAHgHQAGgGAIAAQAJAAAHAGQAFAHAAAHQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_1394.setTransform(166.55,360.35);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgHAGgHQAGgGAIAAQAJAAAGAGQAHAHAAAHQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1395.setTransform(177.3,360.35);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAHAGQAFAGABAIQgBAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_1396.setTransform(199.15,359.65);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1397.setTransform(220.65,359.05);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIABQAIgBAHAHQAGAGABAIQgBAJgGAHQgHAFgIAAQgIAAgGgFg");
	this.shape_1398.setTransform(241.3,359.05);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgHAGgHQAGgGAIAAQAJAAAHAGQAFAHABAHQgBAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_1399.setTransform(262.5,349.9);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAHgHAHABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgHAAgHgFg");
	this.shape_1400.setTransform(263.55,356.9);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAIAAAHAHQAHAGAAAIQAAAJgHAGQgHAHgIgBQgIABgGgHg");
	this.shape_1401.setTransform(284.2,355.7);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1402.setTransform(295.55,354.75);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIAAQAJAAAHAHQAFAGABAIQgBAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1403.setTransform(306.15,353.55);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1404.setTransform(316.925,352.7);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_1405.setTransform(326.3,350.55);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAHQgGAFgJABQgIgBgGgFg");
	this.shape_1406.setTransform(338.4,346.3);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1407.setTransform(349.65,341.85);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAGAGABAIQgBAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1408.setTransform(360.9,335.8);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAHAGQAFAGABAIQgBAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_1409.setTransform(372.4,329.3);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIgBQAJABAGAGQAGAGAAAIQAAAJgGAGQgGAGgJABQgIgBgGgGg");
	this.shape_1410.setTransform(382.125,320.4);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_1411.setTransform(391.2,311.625);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1412.setTransform(399.15,300.875);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_1413.setTransform(338.4,323.275);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgFAAgFQAAgFAEgEQAFgEAEAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAQgEAAgFgEg");
	this.shape_1414.setTransform(345.65,320.05);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHABgIQgBgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAIgFAHQgHAHgJAAQgIAAgGgHg");
	this.shape_1415.setTransform(325.3,342.7);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1416.setTransform(334.2,336.8);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJABQgIgBgGgGg");
	this.shape_1417.setTransform(350.575,331.45);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAJAAAGAGQAGAGABAIQgBAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1418.setTransform(360.9,325.425);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAHAHQAFAGABAIQgBAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1419.setTransform(371.5,318.65);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAIAAAHAGQAGAGAAAIQAAAJgGAGQgHAGgIAAQgIAAgGgGg");
	this.shape_1420.setTransform(380,311.625);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_1421.setTransform(387.25,303.875);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgHAGgHQAGgGAIAAQAJAAAGAGQAGAHABAHQgBAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1422.setTransform(394.2,296);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAHgHAHAAQAJAAAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgHAAgHgFg");
	this.shape_1423.setTransform(400.35,287.85);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJgBQgIABgGgHg");
	this.shape_1424.setTransform(405.85,280);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.rf(["#020203","#494645"],[0.204,0.91],0.4,-0.1,0,0.4,-0.1,43.3).s().p("AoqD0IgBgGQCZgUB+giQCTgnB4g3QCFg7BxhOQA4goA2gxQA9g5AhgwIABgCIByAAQhIB/iPBkQh3BTihA7QiIAyinAfQhCANhZALQhVAKhIADgAFgiDQgxAvg9ArQg6Apg/AiQg+AjhBAcIhCAbQgsAQgXAHIhEAVIhEATQhoAchqASQBvgKCCgZQCggfCNgzQChg7B3hPQBEguA0g1QAfgfAWgbQATgXAagoIhvAEIABgBIgCABIABAAQghAxg7A6g");
	this.shape_1425.setTransform(346.025,372.125);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.rf(["#020203","#494645"],[0.204,0.91],0,0,0,0,0,42.8).s().p("ADoglQCahsA5heIBwgCQirEenmCAQiYAnilAUIiHALQHhhDExjVg");
	this.shape_1426.setTransform(346.025,372);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#291C13").s().p("AoHFtIAhgBIhRgBQlrgIByhEQAygfLVisQLCimAkgoQA8iMAhhFQBCiKiBFfIByAAQi0FnpiBiQi+AfjTABg");
	this.shape_1427.setTransform(317.0982,359.6048);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgIAAAAgIQAAgDADgCQACgCADAAQAJAAAAAHg");
	this.shape_1428.setTransform(414,238.325);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQACgCADAAQAJAAgBAHQABAIgJAAQgIAAABgIg");
	this.shape_1429.setTransform(414,238.325);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_1430.setTransform(409.075,238.325);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_1431.setTransform(409.075,238.325);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgDACgDAAQgDAAgCgCQgCgDAAgDQAAgDACgCQACgDADAAQAIAAAAAIg");
	this.shape_1432.setTransform(410.475,245.8);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgCACgDQACgCADAAQAIgBAAAIQAAAEgCACQgDADgDAAQgDAAgCgDg");
	this.shape_1433.setTransform(410.475,245.8);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgCAAgDgCQgCgDAAgDQAAgCACgDQADgCACAAQAJAAAAAHg");
	this.shape_1434.setTransform(411.3,254.4);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgDACgCQADgCACgBQAJAAgBAIQABAIgJAAQgCABgDgDg");
	this.shape_1435.setTransform(411.3,254.4);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDADgDAAQgDAAgCgDQgDgCAAgEQAAgIAIAAQAIAAAAAIg");
	this.shape_1436.setTransform(411.7,263);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgHAHAAQAJAAAAAHQgBADgCADQgCADgEAAQgDAAgCgDg");
	this.shape_1437.setTransform(411.7,263);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDACgDAAQgDAAgCgCQgDgCAAgEQAAgHAIAAQAIAAAAAHg");
	this.shape_1438.setTransform(428.6,268.875);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#F4F4F2").s().p("AgFAGQgDgCABgEQAAgHAHAAQAJAAAAAHQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_1439.setTransform(428.6,268.875);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCACgEAAQgDAAgCgCQgDgCAAgEQAAgHAIAAQAJAAAAAHg");
	this.shape_1440.setTransform(427.75,277.275);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#F4F4F2").s().p("AgFAGQgDgCAAgEQAAgHAIAAQAIAAAAAHQABAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_1441.setTransform(427.75,277.275);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_1442.setTransform(426.075,286.625);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_1443.setTransform(426.075,286.625);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAADgDADQgCACgEAAQgCAAgDgCQgCgDAAgDQAAgDACgCQADgDACAAQAEAAACADQADACAAADg");
	this.shape_1444.setTransform(424.4,294.95);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#F4F4F2").s().p("AgFAGQgCgDgBgDQABgCACgDQACgDADABQAEgBACADQACADABACQgBADgCADQgCADgEAAQgDAAgCgDg");
	this.shape_1445.setTransform(424.4,294.95);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_1446.setTransform(422.325,303.875);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_1447.setTransform(422.325,303.875);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_1448.setTransform(419.925,312.475);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_1449.setTransform(419.925,312.475);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgHAAAAgJQAAgHAHAAQAEAAACACQACADAAACg");
	this.shape_1450.setTransform(417.325,320.4);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#F4F4F2").s().p("AgHAAQAAgIAHABQAEAAACACQACADAAACQAAAJgIgBQgHABAAgJg");
	this.shape_1451.setTransform(417.325,320.4);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgCADgEAAQgHAAAAgJQAAgHAHAAQAEAAACACQACADAAACg");
	this.shape_1452.setTransform(414.225,326.8);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#F4F4F2").s().p("AgHAAQAAgIAHABQAEAAACACQACADAAACQAAAEgCACQgCADgEAAQgHAAAAgJg");
	this.shape_1453.setTransform(414.225,326.8);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgIAAAAgJQAAgDADgCQACgDADAAQAIAAAAAIg");
	this.shape_1454.setTransform(410.85,332.75);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#F4F4F2").s().p("AgHAAQAAgCACgDQACgDADABQAJAAgBAHQABAJgJAAQgIAAABgJg");
	this.shape_1455.setTransform(410.85,332.75);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgDAAgCgCQgCgDAAgDQAAgDACgCQACgDADAAQAIAAAAAIg");
	this.shape_1456.setTransform(407.025,339.95);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgDADABQAIAAAAAHQAAAJgIAAQgDAAgCgDg");
	this.shape_1457.setTransform(407.025,339.95);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgHAAAAgIQAAgDACgCQADgCACAAQAEAAACACQADACAAADg");
	this.shape_1458.setTransform(402.4,345.475);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQADgCACAAQAEAAACACQADACAAADQAAAIgJAAQgIAAABgIg");
	this.shape_1459.setTransform(402.4,345.475);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgCADgEAAQgCAAgDgDQgCgCAAgEQAAgCACgDQADgCACAAQAEAAACACQACADAAACg");
	this.shape_1460.setTransform(397.275,346.3);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgDACgCQADgDACAAQAEAAACADQACADAAACQAAADgCADQgCADgEgBQgCABgDgDg");
	this.shape_1461.setTransform(397.275,346.3);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAJgJAAQgHAAAAgJQAAgCACgDQADgCACAAQAEAAACACQADADAAACg");
	this.shape_1462.setTransform(423.55,244.95);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQADgCACgBQAEABACACQADACAAADQAAAIgJAAQgIAAABgIg");
	this.shape_1463.setTransform(423.55,244.95);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCACgEAAQgHAAAAgIQAAgHAHAAQAJAAAAAHg");
	this.shape_1464.setTransform(418.9,238.675);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAJAAAAAHQgBAEgCACQgCACgEAAQgHAAAAgIg");
	this.shape_1465.setTransform(418.9,238.675);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgCAAgDgCQgCgDAAgDQAAgDACgCQADgDACAAQAJAAAAAIg");
	this.shape_1466.setTransform(411.3,272.35);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQAJgBgBAIQABAJgJAAQgCAAgDgDg");
	this.shape_1467.setTransform(411.3,272.35);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgIAAAAgIQAAgDADgCQACgCADAAQAIAAAAAHg");
	this.shape_1468.setTransform(410.85,280.025);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQACgCADAAQAJAAgBAHQABAIgJAAQgIAAABgIg");
	this.shape_1469.setTransform(410.85,280.025);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgCAAgDgCQgCgDAAgDQAAgDACgCQADgDACAAQAJAAAAAIg");
	this.shape_1470.setTransform(410.3,285.95);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#F4F4F2").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACABQAJAAgBAHQABAJgJAAQgCAAgDgDg");
	this.shape_1471.setTransform(410.3,285.95);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAIgJAAQgIAAAAgIQAAgDADgCQACgCADAAQAEAAACACQADACAAADg");
	this.shape_1472.setTransform(408.75,293.875);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#F4F4F2").s().p("AgIAAQABgDACgCQACgCADAAQADAAADACQADACgBADQAAAIgIAAQgIAAAAgIg");
	this.shape_1473.setTransform(408.75,293.875);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDADgDAAQgDAAgCgDQgCgCAAgEQAAgDACgCQACgDADAAQAIAAAAAIg");
	this.shape_1474.setTransform(407.525,300.5);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgDADAAQAIAAAAAIQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_1475.setTransform(407.525,300.5);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDACgDAAQgDAAgCgCQgDgCAAgEQAAgHAIAAQAIAAAAAHg");
	this.shape_1476.setTransform(405.85,307.325);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#F4F4F2").s().p("AgFAGQgCgCgBgEQABgHAHAAQAJAAAAAHQgBAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_1477.setTransform(405.85,307.325);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAJgJAAQgCAAgDgDQgCgCAAgEQAAgCACgDQADgCACAAQAJAAAAAHg");
	this.shape_1478.setTransform(399.15,327.65);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgDACgCQADgCACgBQAJAAgBAIQABAIgJABQgCgBgDgCg");
	this.shape_1479.setTransform(399.15,327.65);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgCACgEAAQgCAAgDgCQgCgDAAgDQAAgDACgCQADgDACAAQAEAAACADQACACAAADg");
	this.shape_1480.setTransform(397.275,334.45);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#F4F4F2").s().p("AgFAGQgCgCAAgEQAAgCACgDQADgCACAAQAEAAACACQACADAAACQAAAEgCACQgCADgEAAQgCAAgDgDg");
	this.shape_1481.setTransform(397.275,334.45);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAIgIAAQgHAAAAgIQAAgHAHAAQAIAAAAAHg");
	this.shape_1482.setTransform(393.725,341.025);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#F4F4F2").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_1483.setTransform(393.725,341.025);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f().s("#F4F3F2").ss(0.3).p("AAJAAQAAAEgDACQgCADgEAAQgHAAAAgJQAAgCACgDQADgCACAAQAEAAACACQADADAAACg");
	this.shape_1484.setTransform(392.05,346.3);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#F4F4F2").s().p("AgHAAQAAgDACgCQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEgBQgIAAABgIg");
	this.shape_1485.setTransform(392.05,346.3);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgCADgEAAQgCAAgDgDQgCgCAAgEQAAgHAHAAQAEAAACACQACADAAACg");
	this.shape_1486.setTransform(428.975,259.55);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgIAHAAQAEAAACADQACADAAACQAAADgCADQgCACgEAAQgCAAgDgCg");
	this.shape_1487.setTransform(428.975,259.55);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAJgIAAQgIAAAAgJQAAgDADgCQACgDADAAQADAAADADQACACAAADg");
	this.shape_1488.setTransform(404.1,314.75);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#F4F4F2").s().p("AgHAAQAAgCACgDQACgDADABQADgBADADQACADAAACQABAJgJAAQgIAAABgJg");
	this.shape_1489.setTransform(404.1,314.75);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAAEgCACQgDACgDAAQgDAAgCgCQgDgCAAgEQAAgHAIAAQAIAAAAAHg");
	this.shape_1490.setTransform(401.2,321.325);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#F4F4F2").s().p("AgFAGQgDgCAAgEQAAgHAIAAQAIAAAAAHQABAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_1491.setTransform(401.2,321.325);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f().s("#F4F3F2").ss(0.3).p("AAIAAQAAADgCADQgCACgEAAQgCAAgDgCQgCgDAAgDQAAgHAHAAQAEAAACACQACADAAACg");
	this.shape_1492.setTransform(428.975,250.35);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#F4F4F2").s().p("AgFAGQgCgDAAgDQAAgIAHAAQAEABACACQACACAAADQAAADgCADQgCADgEgBQgCABgDgDg");
	this.shape_1493.setTransform(428.975,250.35);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#8F8777").s().p("AAFgnQACARgCAWIgFAoQgOggATgvg");
	this.shape_1494.setTransform(401.0025,334.625);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#8F8777").s().p("AgPAbQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBQAKgcAZgWQgHAWgVAcIgBACQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgBgBg");
	this.shape_1495.setTransform(416.425,277.4705);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#8F8777").s().p("AgKgXQATATACAcQgTgTgCgcg");
	this.shape_1496.setTransform(407.85,318.025);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#8F8777").s().p("AgCAaQgQgVAJgkIAFAaIAEAPQAGgQAHgKQgBASgKAeg");
	this.shape_1497.setTransform(411.423,311.075);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#8F8777").s().p("AgKgDQAKgYAVgVQgDAHgTApQgOAcgCAVQgIgWAPgeg");
	this.shape_1498.setTransform(412.6609,295.975);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#8F8777").s().p("AgDAdIgHgTQgFgKAHgKQAEgJAJgGQgCgMAAgKQAEAHAGARIgKAMQgEAGgBAFIAEAYQADAPgCAJIgGgTg");
	this.shape_1499.setTransform(422.0413,283);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#8F8777").s().p("AgPAVQgCgFABgFQAHgXAagLQgEAIgJALIgMARQgEAHAGAEIgCAAQgEAAgDgDg");
	this.shape_1500.setTransform(418.9219,265.6341);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#8F8777").s().p("AANgKIACgCIgEgCQAGgDADABQADADgCAFQgPATgbAGQAJgLAZgQg");
	this.shape_1501.setTransform(417.0818,257);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#8F8777").s().p("AADAWQgRgHAEgRQAFgQAQgEQgKAPgBAFQgDAKAJAKIAFAFIgBAAIgHgBg");
	this.shape_1502.setTransform(417.0636,250.3893);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#3C2E1E").s().p("AgHAjQAFAAABgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgIgKgRQgJgOABgLQACgMAOgCQALgCALAEQgiADAHATQANAigBAGQgBAFgEABIgDAAQgCAAgCgBg");
	this.shape_1503.setTransform(416.2452,267.1974);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#3C2E1E").s().p("AABAAQgRgOgGgJQARAEAOAOQAQANgDAPQgGgKgPgNg");
	this.shape_1504.setTransform(422.9231,251.3);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#3C2E1E").s().p("AgDgIQAPgGAPAGQgjALgSAJQAGgNARgHg");
	this.shape_1505.setTransform(415.525,243.4935);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#3C2E1E").s().p("AgTAZQgVgZAWgWQASgVAegCQgpAUgGASQgIAUAgAgQgQgHgKgNg");
	this.shape_1506.setTransform(415.8622,250.35);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#3C2E1E").s().p("AAUAaIgZgEQgUgDgMgFQAKgBAYACQATACALgBIgPgTQgMgOgDgJIAUASQAMAJAHAJIACAGQAAALgPAAIgDgBg");
	this.shape_1507.setTransform(421.075,258.9542);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#3C2E1E").s().p("AACAXQALgPAGgKIgTANQgYADgGgNQgGgMAQgSQAGgIARgRIgMATQgNASgBAJQgCANAWgEIATgMQARgKAAANQgIAPgRATIgdAdQAGgJARgXg");
	this.shape_1508.setTransform(422.342,271.75);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#3C2E1E").s().p("AgKAbQAHgGgBgGIgDgGQgGgJgCgNQgBgQAJgFQAHgDAEALQAKARADADIACAAQACgCACgJIABAJQgFARgVgeIgCgCQgEAQAKAPQAEALgJAIQgIAHgMACIANgJg");
	this.shape_1509.setTransform(413.2583,289.719);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#3C2E1E").s().p("AAKBDIgBgBIAAgDQAIgtgBgUQgBgKgDgBIgDABIgGAEQgIAHgRAVQgZgZAIgeQAIgbAegTQgCgMgYgLQATAFAHAJQADAGAAAGIgBAAQgXARgHAXQgIAYAOASQALgNAJgHQAdgVAAApQgBAcgJAeQASAMAGAMQAIAQgcADQArgJg1gdg");
	this.shape_1510.setTransform(416.5892,282.825);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#3C2E1E").s().p("AgNAoQgIAAACgLQAFgNASgWIACAAQAJgDgFgMIgJgSQANAIAFANQAFAPgOAFIgSAXIgFAKQACABALgCQgFAGgHAAIgBAAg");
	this.shape_1511.setTransform(416.6139,295.0519);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#3C2E1E").s().p("AgPAtQAVgCAFgGQAFgIgNgPIAEgBIgGgBIACACQgLACgHgFQgIgHAGgNQAJgRAUgUIgMAWQgHAMgDAKQgCAJAQgDIADgBIACACQASAVgJANQgFAIgNAAQgGAAgJgCg");
	this.shape_1512.setTransform(417.2455,301.4362);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#3C2E1E").s().p("AgSAnQAFgQANgOIAJgnQAGgggJgDQgGAAgRANIALgMQAGgFAGgCQASAAgFAmQgEAegJASQgMANgGANQgHARAJAOQgNgMAFgVg");
	this.shape_1513.setTransform(413.8611,312.3497);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#3C2E1E").s().p("AgTA9QgIgZgCgQQgDgXAGgTQAEgJAGgGQAagfALgVQAKgSAAgNQADAMgIAVQgMAbgXAdQgTAXAMAzQAEAPAVA/QgOgXgOglg");
	this.shape_1514.setTransform(410.6435,308.875);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#3C2E1E").s().p("AgxAjQADgRAVgMIAngiQAagYALgPQgSAng2AqQgSAKgEANQgEAPAOAQQgUgOAEgTg");
	this.shape_1515.setTransform(408.5989,325.425);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#3C2E1E").s().p("AAcgdQAAAWgRARQgQARgWADQAlgbASggg");
	this.shape_1516.setTransform(406.175,330.625);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#3C2E1E").s().p("AgWBqQgZgJAFgVQAEgSAUgOQgQAPgDAPQgFATAWAGQAMAFAIgIQANgOAAgeIgEgwQgHgjAGgcQAIgjAcgOQghAYADA0QABAdAIA4QgBASgDAJQgEAPgKAIQgHAGgIAAQgGAAgGgDg");
	this.shape_1517.setTransform(401.4583,332.2357);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f().s("#1E1E1C").p("AgCoIIBYAAIAUAsQAaAuAjAIIgBBoQgGCCgSB7Qg7GKinDAIhQAAQBCiJA1jHQBpmNg+k0g");
	this.shape_1518.setTransform(410.155,292.25);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#1E1E1D").s().p("AilIJQBCiKA1jGQBpmNg+kzIBYAAIAUAsQAaAtAjAIIgBBoQgGCBgSB8Qg7GKinDAg");
	this.shape_1519.setTransform(410.3,292.25);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f().s("#4A4233").p("AgYokIARBMQAQBkgDB3QgIF6jHGnIB4AAQBFhEBGidQCNk7AGm7QgLgBgUgOQgogegthEg");
	this.shape_1520.setTransform(410.3344,292.35);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#4B4333").s().p("AjKIlQDGmoAIl6QADh2gPhlIgRhLIBxAAQAsBEAoAdQAUAOALABQgFG7iNE7QhGCdhGBFg");
	this.shape_1521.setTransform(410.475,292.35);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#291C13").s().p("AnrG3QjCAAiDgNQmMgljqhlQhKgggwgjIiniUIhehpIgZg9IgchqQEhDRFQBjQCnAxBtAHQGwAwLcgeQFtgOEYgZQG8gaFekYQCviNBWiHQhHDgg5BqQgdA1gOAIQjZESnsCBQiaAoiiAVIiEAMIqHADQj4AHiGAAIgRAAg");
	this.shape_1522.setTransform(215.55,352.5016);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.lf(["#44301F","#411B14"],[0,0.204],-1.4,20.4,-13.6,401.8).s().p("A35DjQihhEh2hWIhWhJIgQhYQC5CRDGBdQBkAvA+ARQFcBsO3gZQHbgNGWgiQH4giFak7QBshjBQhzQAog5ASgmIgpCyQjnFDmMCgQh7Ayh+AcIhkARQiFAboQAQIn1AKQh+AIh4AAQpLAAmsi2g");
	this.shape_1523.setTransform(216.775,332.5015);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f().s("#3C3123").p("AwuF/ICEAKQCmALClAHQIRAXFKgeID5gQQESgUB+gTIBsgKQCHgUCCgzQGjiiDhmSIgEhvQhJCDiGCMQkMEXkwAxQkJAzmtAhQtZBDsxhYQh8giiTg8Qknh3h1h8IAGA6QAHA7ALAHQAFADBLA4QBdBCBfA1QEvCoD7gFg");
	this.shape_1524.setTransform(216.0595,320.779);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.lf(["#2F271D","#020203"],[0.059,0.263],-0.1,0.9,-1.8,383.9).s().p("ApgGVQikgHimgMIiFgKQj7AFkvioQhfg0hchCIhQg7QgLgHgIg7IgFg7QB1B9EmB3QCUA7B8AjQMxBXNYhCQGtgiEJgzQExgwEMkYQCGiMBJiCIADBuQjgGTmjCiQiDAyiGAVIhtAKQh+ATkSAUIj4AQQi8AQj7AAQjAAAjlgJg");
	this.shape_1525.setTransform(216.125,321.4368);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f().ls(["#3C3123","#3C3124"],[0.42,0.855],1,-84.3,-3.8,79.5).p("A+WleIAQDpQAdEHA+CfIA4gmIAUAYQAcAeAkAgQB1BmCkBTQIKEKMVgYIJMADICJgJQCpgRChgmQIBh8DskmIAjgIQBKieA7jRQB4mjhIkBIABDqQhJCCiBCNQkCEakZA8Ql+BQoVAcQwpA3rykDQhLguhWhMQiriXg2iQg");
	this.shape_1526.setTransform(216.5567,317.9813);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.lf(["#3C3123","#020203"],[0,0.125],0.3,-1.3,3.1,387.3).s().p("AhnL8QsVAYoKkKQikhTh1hmQgkgggcgeIgUgYIg4AmQg+ifgdkHIgQjpIgBhCQA2CQCrCXQBWBMBLAvQLyECQpg3QIVgcF+hQQEZg8ECkaQCBiNBJiCIgBjqQBIEBh4GjQg7DRhKCeIgjAIQjsEmoBB8QihAmipARIiJAJg");
	this.shape_1527.setTransform(216.5785,319.575);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f().s("#1D1D1C").p("EAg4gPgQgCgTAGgPQAMgeAqAXIASAMQARAQgEAWIgCAdQgHAfgYANIAAAXIAZgDQAcgHAQgWIAKAIQAFANgUAZQgGAIgNAGQgZALgfgKIgBAQIAIAIQAGANgKAWQgHAEgKABQgVAEgOgJQAAgFgFgHQgKgMgUgHQgUAAgWADQgrAFgHAOIgLAOQgGAPAbAIIALAKQAHANgaAPQgIgBgKAEQgTAHgEAYIADBSQAKBYAoAbIAUATQAbAYAgAaIAABHQgBBXgKBQIgrDcQg6D5hPCKQgoBahVBsQiqDYjhBbQgrAZhkAdQjIA4kfARI5tgKQhjgPiHgaQkQg1iehDQhLgghehMQi9iYhjjeQgagpgbhYQg1ivgDjkIASjzQgaACgbgMQg1gZgBhHQgBgXALgVQAWgoA4ANIAvANQAJgUAOgTQAbglATAKIAsAKIgbAnQgbApAAALIAMAUQALAYgHARIgDEMIA4AtQA9A0AdAlIBJBVQBgBiB0A6IAjAQQAwATA/ATQDGA+ELAiQNTBtSyjIIA2glQA7gtAXgkQgEgOADgRQAFgkAjgTICjhpQCwh9BFheICli/IgDlNQABgQAEgWQAHgsANgeIgjAAQgPgLgLgPQgUgdAZgVIAnAAQAsgBAUgHIAQgKQAUgMASgFQA7gSAXAzg");
	this.shape_1528.setTransform(225.8582,291.7339);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#1D1D1C").s().p("AuYQKQhjgPiHgaQkQg1iehDQhLgghehMQi9iYhjjeQgagpgbhYQg1ivgDjkIASjzQgaACgbgMQg1gZgBhHQgBgXALgVQAWgoA4ANIAvANQAJgUAOgTQAbglATAKIAsAKIgbAnQgbApAAALIAMAUQALAYgHARIgDEMIA4AtQA9A0AdAlIBJBVQBgBiB0A6IAjAQQAwATA/ATQDGA+ELAiQNTBtSyjIIA2glQA7gtAXgkQgEgOADgRQAFgkAjgTICjhpQCwh9BFheICli/IgDlNQABgQAEgWQAHgsANgeIgjAAQgPgLgLgPQgUgdAZgVIAnAAQAsgBAUgHIAQgKQAUgMASgFQA7gSAXAzIBYAAQgCgTAGgPQAMgeAqAXIASAMQARAQgEAWIgCAdQgHAfgYANIAAAXIAZgDQAcgHAQgWIAKAIQAFANgUAZQgGAIgNAGQgZALgfgKIgBAQIAIAIQAGANgKAWQgHAEgKABQgVAEgOgJQAAgFgFgHQgKgMgUgHQgUAAgWADQgrAFgHAOIgLAOQgGAPAbAIIALAKQAHANgaAPQgIgBgKAEQgTAHgEAYIADBSQAKBYAoAbIAUATQAbAYAgAaIAABHQgBBXgKBQIgrDcQg6D5hPCKQgoBahVBsQiqDYjhBbQgrAZhkAdQjIA4kfARg");
	this.shape_1529.setTransform(225.8582,291.7339);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f().ls(["#4C473C","#020203"],[0.42,1],-3.2,0,3.3,0).p("AAcAAQAAANgIAIQgJAJgLAAQgLAAgIgJQgIgIAAgNQAAgMAIgIQAIgJALAAQALAAAJAJQAIAIAAAMg");
	this.shape_1530.setTransform(391.55,254.5);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.lf(["#4C473C","#020203"],[0.42,1],-2.8,0,2.8,0).s().p("AgTAVQgIgJAAgMQAAgLAIgJQAJgJAKAAQALAAAJAJQAIAJAAALQAAAMgIAJQgJAJgLAAQgKAAgJgJg");
	this.shape_1531.setTransform(391.55,254.5);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f().ls(["#4C473C","#020203"],[0.42,1],-4.7,0,4.8,0).p("AgqAAQAAASANAMQAMANARAAQASAAAMgNQANgMAAgSQAAgRgNgMQgMgNgSAAQgRAAgMANQgNAMAAARg");
	this.shape_1532.setTransform(391.95,257);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.lf(["#4C473C","#020203"],[0.42,1],-4.2,0,4.3,0).s().p("AgdAeQgMgMAAgSQAAgRAMgMQANgNAQAAQARAAANANQAMAMAAARQAAASgMAMQgNANgRAAQgQAAgNgNg");
	this.shape_1533.setTransform(391.95,257);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#1D1D1C").s().p("AKXN1IgzhMQgIgVgSgWIgggmIhGhKQgLgWgUgcIgigvQgfgqhMhlQhHhdgjgxIkYl9Qghgygyg9IhchpQgogthDhGIhqhyQhAhXhLh7IhpixIBsCvQBOB6A/BXIBsBwQBBBDAqAvIBcBqQA0A9AgAxIFdHdQBUBuA5BRIAjAxQAUAcALAXQAQAOA0A6IAgAnQARAXAIAVIAxBMQAWAiAVAYQgWgYgWghg");
	this.shape_1534.setTransform(316.625,158);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#1D1D1C").s().p("ArjJFICniIQAFgDAUgQQAlgcCPh1IDMipQAQgUAjgeIA6gxQB+hmDeimQAagKAzgjQBuhOCLhtIDzjDQinCMhIA7QiIBuhwBQQg5AmgTAHQjQCciMBxQgSAQgmAfQgiAcgSAXIjOCoQh2Bgg/AxQgUAQgIADIkjDog");
	this.shape_1535.setTransform(138.15,209.975);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f().s("#6C4E3C").p("AgUAZIAQACQARgBADgQQACgKgCgIQgDgTgOABIgCAOQgEARgNAUg");
	this.shape_1536.setTransform(274.9824,112.5704);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#6B4E3C").s().p("AgSAZQANgUAEgRIABgOQAPgBADATQACAIgCAKQgDAQgRABg");
	this.shape_1537.setTransform(274.7625,112.5695);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f().s("#6B4E3C").p("AkUjWIANAaQAHAdgjANIApAsQA2A2A+AwQDGCfDQA3QAKgLAHgPQAOgegQgPQhMhLhshSQjYilijgjg");
	this.shape_1538.setTransform(245.2271,93.7067);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#6B4D3C").s().p("AiIABQg+gxg2g2IgpgsQAjgNgHgdIgNgaQCjAkDYClQBsBRBMBMQAQAPgOAdQgHAPgKAMQjQg4jGieg");
	this.shape_1539.setTransform(245.4142,93.675);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f().s("#6B4E3C").p("AALgfQgLgCgKAEQgWAIgBAcIAHAOQALAOARgCIARgDQAQgIgCgWQACgFgCgIQgEgOgSgEg");
	this.shape_1540.setTransform(215.4801,75.3796);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#6B4D3C").s().p("AgaAVIgHgOQABgcAWgIQAKgEALACQASAEAEAOQACAIgCAFQACAWgQAIIgRADIgEAAQgPAAgJgMg");
	this.shape_1541.setTransform(215.4821,75.3796);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f().ls(["#8E7059","#4B3218"],[0,1],17.3,-162.5,-7.7,162.3).p("AB25SQgeD5ghEXQg/IsgJCUIijfLIBUgJQBbgEAhAUIBF77QAclNAYlaQAvqzgVhNQgHADgKABQgVADgTgHg");
	this.shape_1542.setTransform(226.9757,170.0002);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.lf(["#8E7059","#4B3218"],[0,1],7.7,-38.1,2.4,31.3).s().p("AhgZBIhUAJICj/LQAJiUA/osQAhkXAej4QATAGAVgCQAKgCAHgCQAVBMgvK0QgYFagcFMIhFb7QghgUhbAEg");
	this.shape_1543.setTransform(226.9993,169.9);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f().s("#1D1D1C").p("AMpwSQjIENjNEMQmaIYgZAAIhtB8QhyCEgRArIhVB5QhlCRhPB2Ih0CZQh6CdghAQ");
	this.shape_1544.setTransform(133.5755,182.9507);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#1D1D1C").s().p("AKyLOQgYgZgsghQgsgyhCg9Ih0hqQgkgagzgxQhrhph8iRQgZgSgcgcIgwgyQh3h+ici7QhKhXiPijIjdj5QDPDhC4DOIB0CJQBFBQAzA4IBcBlQA2A7AuAkICYCrQBZBgBMA9QBrBhBBBBQAmAnAOATQARAMARAQQAfAbAQAUQAXAdAJAdQgNgmgigjg");
	this.shape_1545.setTransform(320,174.525);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.rf(["#BEAA9E","#87764C"],[0.467,1],0,0,0,0,0,26.3).s().p("AkKCbQgFgGAegIIAugSQA5gQA6AGQgNgZgDgeQgFg6A1gVICdAAIAdgJQAagMgOgRQh5APgNgPQhPgDgSAJQgKAWgOAUQgcAngWgIQgXgEgdAAQg8ABggASQgNADgLABQgVADAQgKIAogZQAygYAwgFIAugkQA0goAggTQChgDARgKIAngJQAvgHArAHIAfAAQAkgEAWgQIAAA1QgYgDgXAEQgtAIAEAlIABALQADAOAGAJQAWAeA4gWIAAAuIhPgEQhQgCgGAGQgPAGgbAEQg2AGg5gQQgVgDgYgBQgxgCgLAIIANBDQAGBAgkgRQgXgBgfACQg8ADgkAMQgJgCgDgDg");
	this.shape_1546.setTransform(205.1791,29.025);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1547.setTransform(59.025,312.725);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1548.setTransform(70.875,300.05);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1549.setTransform(61.925,304.175);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1550.setTransform(62.325,321.275);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_1551.setTransform(70.875,324.525);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1552.setTransform(59.025,312.725);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1553.setTransform(70.875,300.05);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1554.setTransform(61.925,304.175);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1555.setTransform(62.325,321.275);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_1556.setTransform(70.875,324.525);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1557.setTransform(59.025,312.725);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1558.setTransform(70.875,300.05);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1559.setTransform(61.925,304.175);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1560.setTransform(62.325,321.275);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_1561.setTransform(70.875,324.525);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_1562.setTransform(59.025,312.725);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_1563.setTransform(70.875,300.05);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.lf(["#A4A0A2","#FFFFFF","#4D4A4D"],[0.129,0.49,1],-1.2,0,1.3,0).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1564.setTransform(61.925,304.175);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAHgJAAQgHAAgHgHg");
	this.shape_1565.setTransform(33.1,326.15);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1566.setTransform(34.1,334.65);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_1567.setTransform(42.4,340.15);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAGAGAAAIQAAAJgGAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1568.setTransform(50.675,344.75);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIgBQAJABAHAGQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_1569.setTransform(60.25,350.1);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAGAGAAAIQAAAJgGAGQgGAHgJgBQgIABgGgHg");
	this.shape_1570.setTransform(73.2,355.7);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1571.setTransform(41.4,300.45);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_1572.setTransform(34.1,291.55);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgGAIgBQAJABAGAGQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1573.setTransform(27.85,282.15);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHABgJQgBgIAHgGQAGgHAIABQAJgBAHAHQAFAGAAAIQAAAJgFAHQgHAFgJAAQgIAAgGgFg");
	this.shape_1574.setTransform(69.35,338);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#544939").s().p("AAAABIAAgBIABABIgBABIAAgBg");
	this.shape_1575.setTransform(22.125,234.5128);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#544939").s().p("AAAABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAABAAIAEAFIgDgCg");
	this.shape_1576.setTransform(20.4469,234.425);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#544939").s().p("AADA/QAAABABABQAAABAAAAQAAABgBAAQAAAAAAAAQgCgBABAGIgCgKQABADAAgKIgCgHQgBgGACAFIABADQAAABAAAAQAAAAAAAAQAAgBgBgBQAAgBAAgBIACAJQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAgBIgBgHQgBgHgCgGIAAACIgCgJIABABQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAgBAAQAAAAAAAAQAAABAAABQABABAAABIACADIgCgCQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAHAVQADACgDgJQgCgLABgBQADAJAAgFQgDgOgIgNQADAKgDgGIgDgKIADAFIAAgBIADAGIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAEAEIgEgIIgHgIQABAAAAABQABAAAAAAQAAAAAAgBQAAAAAAAAIgCgCIgBgCIADACIgCgDIAFAGIAIAHQADADAHACIgcgXIAEACQAFAEgGgGIACACQABAAAAAAQAAAAAAAAQAAAAgBgBQAAgBgBgBIALAHQABAAgEgEIgJgIIADAHIgDgEIgFgFIACgBIgCgCIgDgBQgBAAAAAAQAAAAAAAAQAAABABAAQAAAAABABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABIACABQACADgBADQgBAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIACAAQACADgEgBIAAgBQgFgDgCABIAEACIgDgBQAAAAAAAAQAAABAAAAQAAAAABAAQABAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABQgCACgEgCQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABABAAAAQABAAAAAAQABABABAAIgEAAIAEACIgFABQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABIgBgBQgBAAAAAAQAAAAAAABQAAAAABABQABAAABABIgFgCQAGAEgGgBQgBAAgBAAQgBAAAAAAQAAAAAAAAQAAABABAAQgSgFgHgEIABABQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBIAHABIgGgCQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAJAAACgGQACgHAEgBIgEgCQAGACgIgFIAIADIgGgEQAAgCAEgBQABgBABAAQAAAAAAgBQABAAAAgBQAAgBgBAAIAFACIgCgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQAEACADAAQACAAAGAEQABgBgGgDQABgDgCgDIADgDQACgDAGADQgBAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAIAAgCIgGgDIACgBQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAEACQAAgBABAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIgCgEIgBgBIABgBIACADQABADADAAIgDgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAABQgCABAFADIACgBIgFgFQADgDAGgBIAJgDQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQABAAABAFIAAgBIABAEQAAABAAAAQABABAAAAQAAAAAAAAQABAAAAAAIgCgGQAAgBAAgBQAAAAgBgBQAAgBAAAAQAAAAgBAAIABgFQgBgLAEADIAEADIABAAIABAAIABgBIAAACQACgDAEAEIADADIAAAFIAEgGQAAgBABABQAAAAAAAAQABAAAAABQABAAAAABIgBADQADgHACACIgBABIADAAQgBAHADgEQADgDgBAIIAFgHIAAACQACgFAAAEIABAEIACgHQAAAAAAABQABAAAAAAQAAAAABAAQABgBAAgBIADgDQABABgDAIQABAAACgGQAAgBAAgBQAAAAABgBQAAAAAAABQAAAAAAABIgBACQgCATACgDIAAgDQAAgBAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAGASIgEgCQgBgBAAABQAAAAAAAAQAAAAABABQAAAAABABIAEADQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgBgBIgCABIADADIABAAIgCACQAEAEgFgDQAFAEgFABQAAgBgFgDQAGAFgGgCQAMAKAAABIgCgCIgBAAIABABIgEgEQABABAAABQAAAAABABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgGgEQABABABAAQAAABAAAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAABAAQAAAAAAABQABAAABABQgDAAgDADQgDACgDgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIABACIgDgCQAFAFABADQgDgDgFgDIAFAGIgFgDQABAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgCgBIAGAEIACAEQgBgBgBAAQAAAAgBgBQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBgBIACACIAFAEIAAAAIgEgCIAAACQAAgBgBAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBgBAAAAQAAAAAAABQAAAAAAABQAAABABABQACADgEgBIgBgBIgEACQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAABABIADADQABAFgBACIADAEIgBAGQgBAFgFgEQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABIgCACIgCgDQgCAAABAFQgEgDgBAGIAAAIIgBgCIAAAIQABABAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBACIgCgIIgDgHIABAHIgCgHIAAABIAAAJIACAFIAAACQAAgBAAAAQgBAAAAABQAAAAABABQAAABABACQgDgFgEgKgAALA/IABADIAAgCIgBgCIAAABgAAcALIgCgDIADABQgEgFgUgPQABgBAFAEIAHAFQABAAgGgGQgGgGABAAIgDgBQABgBAAAAQABAAAAAAQAAgBgBAAQAAAAAAAAIAHADIgFgFIAKAIQABgBgKgHIAKAEQgIgGgBAAIAAAAIgCgCIgBAAIgDgFIACADIgDgEQAAABABABQAAAAAAAAQAAABAAAAQAAAAgBAAIADAEIgCgCQABABgBgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIgCgEQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBgBAAIgCgEQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAABABIADAFIAAgCIAEAGQgBgBAAAAQAAAAAAAAQgBAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIAAgBQgBABgKgHQgBAAAAAAQAAAAAAABQABAAAAAAQAAABABAAIADAEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQACAAADAEQAAgBgBAAQgBgBAAAAQgBAAAAAAQAAABABABQABADgEgBIgEgEIgDgCIAEAFIgEgCIAGAFIACADIgBAAIABABIAAgBIABgBQgBAAAAABQAAAAABABQAAAAABABQABAAABABIADABQAFAGAUAQgAAVgPIANAJIgMgLIgBACgAAOgZIABABIAAAEIABAAIAEAEIABgBIAAgBIgDgDIAAgBIAAgCIAAAAIAAgBQAAABAAAAQAAAAgBAAQAAABAAgBQAAAAAAAAIAAgCIgBACIAAAAIAAABIgBgBIAAgBIgBAAgAALgWIgBgCIAAAAIgCgDIACADIAAAAIABACIAAAAgAANgYIABgBIAAgBIgBAAgAAugcIACACIgCgEIgBAAgAAfgdIACACIgBgCIAAgBIgBABgAAVgeIgBABIABABIAAgCIAAAAgAApAGIAAAAIAAAAg");
	this.shape_1577.setTransform(20.325,236.1417);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#544939").s().p("AAAABIAAgCIAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIgBgBg");
	this.shape_1578.setTransform(22.5614,241.0641);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#544939").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAAAIgBAAg");
	this.shape_1579.setTransform(22.3,241.0792);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#544939").s().p("AAAAHIgBgCIABAAIAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIgCABgAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIABgGIAAAMIAAgFg");
	this.shape_1580.setTransform(19.275,241.4375);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#544939").s().p("AgBgDIABAAIAAABIABACQABABgBADg");
	this.shape_1581.setTransform(19.675,242.475);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#544939").s().p("AgCgOQABACAAAAQAAABAAAAQAAABABAAQAAgBAAAAIAAgDIAAADIAAgEQACALAAAGIgCgEIADALIAAAHQgGgVABgJg");
	this.shape_1582.setTransform(19.5183,240.7);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#544939").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_1583.setTransform(18.8,241.56);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#544939").s().p("AAAgBQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAABIgBABQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_1584.setTransform(18.975,241.875);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#544939").s().p("AAAgDQAAABAAABQAAABAAAAQABAAAAAAQAAAAABAAQgBAEgBAAIAAgHg");
	this.shape_1585.setTransform(18.9917,243.15);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#544939").s().p("AAAABIAAAAIAAgCIABACIgBABIAAgBg");
	this.shape_1586.setTransform(16.875,238.72);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#544939").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQgBACABADQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_1587.setTransform(17.045,240.7214);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#544939").s().p("AAAAAIABgCQAAAFgBAAIAAgDg");
	this.shape_1588.setTransform(17.125,241.7);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#544939").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_1589.setTransform(16.775,241.3125);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#544939").s().p("AABACIgDABIACgFIAAACQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAABAAABQgBgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_1590.setTransform(16.4417,239.275);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#544939").s().p("AgvAVQAHgRALgQQAVghAPABIApAIIgXAeQgYAggGAUg");
	this.shape_1591.setTransform(20.75,235.2486);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f().s("#48443B").ss(0.5).p("AAACaIALiiQgkAAgDgEQAcACAGgLQAJgMAFgSQALgjgNgYQgMgQgPgGQgigNgZAtIACAaQAHAcAfAGQAEACAGgDQAKgFAFgZQABgFgDgGQgFgNgNgGIgGAJIAMAMQAIAPgUANQgJgBgHgHQgOgOAIggQAFgIAJgFQASgKASAPIAMATQAIAcgYArQgUAFgUgKQgogUgChMQAGgOANgLQAYgXAgAPIAJACQALAEALAJQAiAdAOBGIATDGQgJgLgPgFQgfgMgfAcg");
	this.shape_1592.setTransform(12.1781,253.5879);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#4C483F").s().p("AA/CPQgfgLgfAcIALiiQgkgBgDgDQAcACAGgLQAIgNAGgRQALgjgNgZQgMgPgPgHQgigNgZAtIACAbQAHAbAfAHQAEACAGgDQAKgGAFgYQAAgFgCgHQgFgNgNgFIgGAJIAMAMQAIAOgUANQgJAAgHgHQgOgOAHggQAGgIAJgFQARgLATAPIALAUQAJAcgYAqQgUAFgUgKQgpgUgBhMQAGgOAMgLQAZgWAgAOIAJACQAKAFALAJQAjAdANBFIAUDHQgJgLgPgGg");
	this.shape_1593.setTransform(12.1,253.0409);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f().s("#48443B").p("AgtAtIAHhHIAegRQAhgKAWAeIAABGg");
	this.shape_1594.setTransform(16.0999,272.346);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#4C473F").s().p("AguAtIAHhHIAegRQAigKAWAeIAABGg");
	this.shape_1595.setTransform(16.125,272.3406);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#544939").s().p("AAAABIgBgCIADABIgCACIAAgBg");
	this.shape_1596.setTransform(17,234.2958);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#544939").s().p("AgBAAIAAgBIADADQgCAAgBgCg");
	this.shape_1597.setTransform(8.575,232.15);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#544939").s().p("AgCAAIAFAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAABAAg");
	this.shape_1598.setTransform(19.925,269.775);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#544939").s().p("AAAgBIACABIgDACg");
	this.shape_1599.setTransform(19.475,269.2);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#544939").s().p("AgCABIACgDIADAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgBABIgBgCg");
	this.shape_1600.setTransform(13.525,240.7069);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f("#544939").s().p("AABACIgCgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIACABIgBACIAAAAg");
	this.shape_1601.setTransform(18.42,249.4268);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f("#544939").s().p("AgCAAIAFAAIgDABg");
	this.shape_1602.setTransform(19.05,250.475);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f("#544939").s().p("AgBABQgBgDACABIACADIgDgBg");
	this.shape_1603.setTransform(19.9375,248.9139);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f("#544939").s().p("AAAABIAAgCQABAAAAADg");
	this.shape_1604.setTransform(20.75,253.4);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f("#544939").s().p("AgBAAIADAAIgDABg");
	this.shape_1605.setTransform(20.925,254.975);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f("#544939").s().p("AgCABQgCgDAEACQAGACgFAAIgBAAIgCgBg");
	this.shape_1606.setTransform(22.8548,252);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f("#544939").s().p("AAAAAIAAABIAAAAg");
	this.shape_1607.setTransform(21.9563,255.35);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f("#544939").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAFADgFAAIAAABIgCgDg");
	this.shape_1608.setTransform(21.951,254.95);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f("#544939").s().p("AgBAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABIgCAAIgBgBg");
	this.shape_1609.setTransform(21.15,257.5188);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f("#544939").s().p("AAAgBIABACIgBABQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBgAABABIAAAAg");
	this.shape_1610.setTransform(23.35,253.975);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f("#544939").s().p("ABKC4QAAgFgDgBIAGgJIgEAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBgCIgDABQAJgMgBgTQgCgYADgIQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQABgBAAAAQABgBAAAAQAAgBAAAAQgBAAAAAAIgFgDIAJgFIgEgBIgDAAQgBgEADgMQADgJgDgEIAFgCQAAABABAAQAAAAABgBQAAAAABAAQAAAAAAgBQgFADgBgGQgCgFgCAAQAEgBACgGQACgFAHABQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQABgJgEgFIAAgDQgBACgFgEQACgEgCgLQgBgIACgCIAAgDQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAQADABABgDQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBAAAAIgEgDIgBAAIgBgDIAEACQADADACgDQgIgIgNADQAJAHgGACIgEgFQgCgDgDABQABgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAAgCgEgBQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIACgDIAAgJIAAgJIAFgCQgDgDgGAAQgHgCgDADIAAgFQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAABgBAAQAAABAAAAQgBABAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBABQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIADgDQgDgBgDABQACgCAHgBQAHAAADgCQACgDACgFIABgDIgBgDIgBAAIgOAGQgMAGgEAEQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAIACgFQACgDgEgBQgFgBAAgBIAFAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQALgEACgDQgCgEgIAAQgHACgFADIALADQgCACgEgBQgEAAgDABIgDgGQAEACABgEQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABgDIAdgHQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAABIACgFIgJADIgDgCIgCABIgPAIQgBgDAFgEIAGgFIAAgBQgCgBgEABIgFACQgHAEgCgDIAAAEIgDgCQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQABgIACgCIgHAGIAFgIIgCgBIgBAAIgBACQgEAFABACQgCgEAAgIIgBAAIgBADIgBAGQgDACgCgEQACgBADgFIgFABIAAgCIgCACIgDAAIgCAAIgBgBIgDgDIgHABIgGgBIAAAAIgFADQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIABgEIgBAAIgBAAIAAAFQAAAEgCgDIABgCIgCgDIAAABQgDAHgBgEQAEABAAgHQgCABgEABQgDACABAGIgCgCIgBgEIgDAHQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQABAAACgEQACgEABAFIgBgIIAAgEIgBAAIgCgBIgBABIABACIACAFQgBgBgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAABQgBAGADAFQgCgBgDAAIACACIgFgCIAAAAIAAAAIAAAAIgCACIAAABIABAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIgtCWIANifIACgJIgBgJIADACIABACIABAAIAAgBQgCgFAIgCIgFgHQgCgFAHgGIgBADQgBAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQABABAAgBQABAAAAAAQAAAAABgBQAAgBABAAIAAACQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAIAAgCIABgCIABgEQAAAAAAAAQAAAAAAABQAAAAABABQAAAAAAABIAEgDIABAAIAFgFQAFgFAGAAQAFgCgEgDIgCgDQAAAAAAAAQAAgBAAAAQABAAABAAQAAAAABgBQAFAJAFAAIADgFQABgDAEgBIgBAHIAGAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAFgDADADIACADQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBABIABgCQAFAEAFgCQAEgBAAAIQgDgCgDABQgBABAAAAQgBAAAAABQAAAAAAABQgBABABAAIAGgBQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAFgCADgCIABABIACgBIgBABIAAACIABAAIABgCIADgBQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAIADADQADABADgFQADgFADAEIgCAAIACAEQACgHAIACQAJACADgGQAAABAAABQAAABAAAAQAAABAAAAQAAAAgBAAIgHADIADAGQgDgCgDABQADAEAFgBIAIgDIgBAGQgBAAAAABQAAAAAAABQABAAAAABQABAAABAAQAGABAAgGQAAgFACABIABAIQAGgBAEADIAGAHIADAAQACADAHAAQAIABABACQgCAAABAHIAKADQgDgBgCACIgFADQACACAFAAQgEAAAAADIAHACIgBgCIAEABIgBgDIAFAEQADACAAADIgFACQACgFgIACQABABAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgBADQACADADgBQAEAAABgDIADAGQACACAEADIgFABIAEAFIgIgBQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAIADAAQAGgBAAAHIgEABQABACAFACQABABAAAAQABABAAAAQAAABgBABQAAAAgBABQAAAAABABQAAAAABgBQAAAAABAAQAAgBABgBQADgDABAHQgDAEgCAGQAAABABABQAAAAABAAQAAAAABgBQAAAAABgBIABgDQABAIgIAEIgFADIgBABIABAAIgCAIQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIACABIgEgBQAEADgCAEQgBAFAFABQgBAAgBAAQgBAAAAAAQAAAAgBAAQAAABABABQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAQgDgCAAgGQgBgEgEgBQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABIgFgEQgCAEADAEIAGAGIgCgHQABAAABAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQABAAAAAAQABABABAAQgDACACADQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAIgBgCQAAAFgGADIgGADIgBACQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQACADADgBIABgEQAAgFAHADQgGACACAFQAEAHgEAEQgCgCgDACQgEAAgBgBIAAABIAAAAIACABIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIAAAAIADADIgEABIAIADQABACADAFQgBAAAAgBQAAAAgBAAQAAAAgBABQgBAAAAABQgBAAgBAAQAAABgBAAQAAAAgBAAQAAgBAAAAIAAABQAAADACADQABADgCAFQgBADACAEIACgBQADAGAAALIACASIABgDIABAEQABAEgCACIgBgCQgFAAgBADIADABIgDABQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQgGABAAAJQgBAJgEACQAEABAAgEQAAgBAAgBQAAAAABgBQAAAAABAAQABAAABAAIgDAFIAEgBIgEAOQgCAIAAAGIgBAAQgDAFAGACIgCAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAHADgGAHQgFAFADADQgEgBgJAEQgJACgEgCIABADQgDAAAAgEgABJABQgBADABACIAEAAQABgFADgBQgBAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgBABIAAgBIgBABIABAAIgCADgABGgBIADABIABgCgABUhNIACgCQABgEgCgCQAAACgFABIgDABIABAAIAEgCIACAGgABzgiIgBgBIAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBABAAIAEACIAAADIgBAAgAgli7IAIAFQAEACABAFIgGABQAAgFgHgIg");
	this.shape_1611.setTransform(12.988,250.65);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f("#544939").s().p("AADgGIgCALQgBgDgCAFg");
	this.shape_1612.setTransform(11.025,238.4);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f("#544939").s().p("AgBgBIABgBQADACgDADQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBg");
	this.shape_1613.setTransform(22.0143,247.15);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f("#544939").s().p("AAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIgDACIABgCg");
	this.shape_1614.setTransform(19.775,236.25);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f("#544939").s().p("AgBABIABgDQAAgBABAAQAAAAAAAAQAAAAABAAQAAABAAAAIAAAGQgBAAAAgBQAAgBgBAAQAAAAAAgBQAAAAgBAAg");
	this.shape_1615.setTransform(16.7375,236.7682);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f("#544939").s().p("AAAAAIgCABIADgDIACAFQgBAAgBAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_1616.setTransform(22.25,259.275);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f("#544939").s().p("AgEADIACAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBgDQACgCAFgBIgCABQgDACAAACIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape_1617.setTransform(22.3,261.25);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f("#544939").s().p("AADABQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIgDgBQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQADAAADAAIAEABIgBgFIAEAFIgBAAIgBgBIgBABIACAAIAAABIABgBIAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAABAAAAg");
	this.shape_1618.setTransform(23,257.725);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f("#544939").s().p("AgCADIABAAIgBgGQACAAADADQgEACAAACg");
	this.shape_1619.setTransform(23.525,256.8);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f("#544939").s().p("AgJAFQADgDgCgCQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIACAAIgDgEQADgBAFADQAEACACgBIgCACQAAAAAAAAQgBABAAAAQAAABABAAQAAABAAABQACABACgDIADgDQACABAEAAQgGAEgHABIgFABIgEgBg");
	this.shape_1620.setTransform(21.875,256.3857);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f("#544939").s().p("AAAAAIAAgBIABADQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_1621.setTransform(23.4958,259.025);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f("#544939").s().p("AAAgCQAAADACAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBgDACgCg");
	this.shape_1622.setTransform(23.655,258.55);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f("#544939").s().p("AAAAAIABAAIgBABg");
	this.shape_1623.setTransform(23.3,260.6);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f("#544939").s().p("AgBACIAAgDIADADg");
	this.shape_1624.setTransform(23.5,260.875);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f("#544939").s().p("AgBAAIADAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_1625.setTransform(24.075,260.25);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f("#544939").s().p("AgCADQACgDgCgCQAFACAAACIgDABIgBAAIgBAAg");
	this.shape_1626.setTransform(24.775,258.645);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f("#544939").s().p("AgCAAIAFgBIgDADg");
	this.shape_1627.setTransform(24.45,261.3);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f("#544939").s().p("AAAAAIABgBQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAACg");
	this.shape_1628.setTransform(22.5833,265.375);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f("#544939").s().p("AgCAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIACgCQABAEgCAAIgBABQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_1629.setTransform(24.0643,263.7528);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f("#544939").s().p("AgCAAQADgDACADIgCAAIgBACg");
	this.shape_1630.setTransform(24.875,263.1375);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f("#544939").s().p("AAAAAIABAAIAAABIgBAAg");
	this.shape_1631.setTransform(24.725,264.075);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f("#544939").s().p("AgCAFIACAAQAAgCgBgEQgCgEADgBQAAACAAAEIADAHg");
	this.shape_1632.setTransform(23.4417,265.95);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f("#544939").s().p("AgBAAIABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAg");
	this.shape_1633.setTransform(24.6227,270.075);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f("#544939").s().p("ABHApIgRhdQgOg0gjgZIgfgNQgrgPgTAQQAOgQAVABQAQABANAIQAnAHAfATQAPAKAIAIQATASABAUQAAAKgDAHIgCDNQgCgrgLhJg");
	this.shape_1634.setTransform(13.6031,251.1071);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f().s("#544939").p("ABcDPQADhMgFhVQgMiogsguQgVgUgZgJQg1gSgcA6IABASQACAXAHARQAWA5A9gJQANgWAFgZQAIgygtgNIgZAHQgYAOAIAlIALAQQAOAPAOgGQAIgHADgKQAHgUgWgN");
	this.shape_1635.setTransform(12.1514,256.7717);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1,0,1.1,0).s().p("AgEAQQgBgEABgEIAEgMIABgFIgBgDQAAgCgJgDQAIgFAGAEQAFADAAAGQAAAFgBAEIgJAQIAAACIADABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgDAAgBgEg");
	this.shape_1636.setTransform(17.725,293.3611);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-0.7,0,0.8,0).s().p("AABARQgBgCABgHIgIgZIAKAAQAJAEgHANIgEAIIAEAKIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_1637.setTransform(17.4985,293.4417);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f("#3C2E1E").s().p("AgFgDQAHgJAJAAQgCAIgHAGIgLALQgEgIAIgIg");
	this.shape_1638.setTransform(14.4333,284.75);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f("#3C2E1E").s().p("AgLgDQAHgGAIAEQAJAEgBAIQgNgDgKgHg");
	this.shape_1639.setTransform(17.9263,280.4158);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.6,0,1.6,0).s().p("AADAKQADgIgBgEQgBgFgFgGIgNgLQAJAAAHAFQAKAFADAKQADAJgIAJIgGAHIgHAEg");
	this.shape_1640.setTransform(17.8929,284.225);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.2,0,1.3,0).s().p("AgMgYIATAMQAPAPgXAWg");
	this.shape_1641.setTransform(17.6503,284.225);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f("#3C2E1E").s().p("AgLAPQgJgBADgJQAGgJAOgKQgBAFgDAHIgFAHIAKAAIAPABQgIAFgHACQgGACgFAAIgEAAg");
	this.shape_1642.setTransform(15.214,289.0375);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f("#3C2E1E").s().p("AgQgCIAAgEQADgGAIAEIAJAIQAEAAABgBQABgBgBgGIgJgVQAXAVgHALQgFAHgLgCIABADIAKATQgVgVgGgLg");
	this.shape_1643.setTransform(14.7371,295.85);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.5,0,1.4,0).s().p("AACASQgFgEABgGIACgGIAAgCIAAgEIgGAFIgCAAIgCgBIAAgCIABgGIABAEIABACIgBgBIAGgNIACgBIABgCIACAAIAEABIACACIAAADIABAGQAAAFgBADIgEAIQgCACADADQACADADADQgEAAgFgCg");
	this.shape_1644.setTransform(18.95,305.5);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f("#3C2E1E").s().p("AgTAvQACgHAIgGIgFgWQgCgOAFgJQAGgHAIAIIAHAJQADgHgBgIQgBgLgIgJIgFgGQAAgLAOgDQgLAGAAAGQAQALADARQADAQgNAPQgKgPgEgDIgBADQAAAJADAbQgaAQATAFQgNgBADgJg");
	this.shape_1645.setTransform(17.525,301.875);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f("#3C2E1E").s().p("AAAASIAFAAIABAAIgCgCIgKgOQgDgCgBgEQgCgKAMgHIgCALQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAIACACQAIAJACAJQABAHgEABIgCAAQgDAAgDgEg");
	this.shape_1646.setTransform(17.3967,308.5661);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f("#3C2E1E").s().p("AgHAYQgGgFAEgKQABgEAFgGIAFABIABAAQAAgDgDgJIgEgNQASAQgCANQgEAGgIgBQgEAHACACQABADAJADQgFACgDAAQgEAAgDgCg");
	this.shape_1647.setTransform(17.138,312.0375);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-1.2,0,1.3,0).s().p("AAEAXQgCgFgGgIIgBgCQgFgPAAgOIAAgJIACgEQABgDAEgCQADAAABACIADADIAEAHIgGgEIgCgCIgCAAIAAAEIAFAiIAFAHIADAKQACALgIAHQADgIgEgJg");
	this.shape_1648.setTransform(18.6711,317.825);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f("#3C2E1E").s().p("AAEAYQAFgYgHgPQgLgSgEgOQgDgLACgHQACALAIANIAOAVQASAdggA5QAGgbACgPg");
	this.shape_1649.setTransform(20.2858,316.025);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-2.8,0,2.7,0).s().p("AASAVIgEgHIgHgFQgJgJgJgLQgLgPgBgJIAkAlQAFADACAEQAEAFAAAGQABALgKAGQAFgKgCgGg");
	this.shape_1650.setTransform(21.2293,325);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f("#3C2E1E").s().p("AgGAGQgJgKADgLIAZAfIgBAAQgLAAgHgKg");
	this.shape_1651.setTransform(22.201,327.8292);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f("#3C2E1E").s().p("AACA8QgFgBgDgFQgLgQAHgpQAGgngQgRQASAKABAbQABAOgDAdIAAASQACAMAGABQALgCAAgKQgBgIgHgJQAKAGACALQADAMgLAFQgDADgEAAIgDAAg");
	this.shape_1652.setTransform(24.5071,328.7611);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgHAHABQAJgBAHAHQAFAGABAIQgBAJgFAGQgHAHgJgBQgHABgHgHg");
	this.shape_1653.setTransform(42.1,332.5);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHAAgIQAAgIAHgGQAHgHAHAAQAJAAAHAHQAFAGAAAIQAAAIgFAHQgHAGgJAAQgHAAgHgGg");
	this.shape_1654.setTransform(49.8,337.35);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1655.setTransform(57.425,341.275);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgHAHgHQAGgHAIAAQAJAAAGAHQAHAHgBAHQABAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_1656.setTransform(65,345.8);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAGAGAAAIQAAAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_1657.setTransform(73.2,347.95);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHAAgJQAAgIAGgGQAHgHAHABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgHAAgHgFg");
	this.shape_1658.setTransform(30.95,317.65);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgHAAgIQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAIgHAHQgGAHgJgBQgIABgGgHg");
	this.shape_1659.setTransform(40.25,323.6);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_1660.setTransform(47.65,327.9);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.rf(["#77635C","#5B4B3C","#584839"],[0.463,0.753,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgHgBgIQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAIgHAHQgGAGgJABQgIgBgGgGg");
	this.shape_1661.setTransform(56.25,332.2);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f().s("#3C2E1E").p("Ah4l8IBqAAIADBOQAFBhAJBdQAfEqBDCYQgcg5g5hpQgrhPgTgxQg2iIgUkkg");
	this.shape_1662.setTransform(22.8578,315.5566);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.lf(["#4C473C","#3C3124"],[0.42,0.855],-11.1,0,11.1,0).s().p("AAaDFQgrhPgTgxQg2iIgUkkIBqAAIADBPQAEBgAKBdQAfEqBDCYQgcg4g5hqg");
	this.shape_1663.setTransform(21.875,313.45);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f().s("#8E705A").p("AgDgiQgiAJgRANQgjAaBWAVIAVgFQAYgFAMgIQAngWhggdg");
	this.shape_1664.setTransform(241.9903,5.0562);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f("#8E7059").s().p("Ag2gMQARgNAigJQBgAdgnAXQgMAHgYAGIgVAEQhWgVAjgag");
	this.shape_1665.setTransform(241.9903,5.05);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f().ls(["#281F17","#020203"],[0.42,1],-16.7,0,16.8,0).p("AgSgUICpAAIAJALQAHAOgQAUIi5gOIgJAFQgJAHADALIACASQgDAUgaAGIgXgKIgZgbQgRgjgTgSQASgZAUgTQAngmAHAeIAMARQASASAcAJg");
	this.shape_1666.setTransform(55.3189,289.2834);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.lf(["#281F17","#020203"],[0.42,1],-16.1,0,16.2,0).s().p("AhjBEIgagbQgQgjgTgSQASgZATgTQAogmAHAeIAMARQARASAcAJICqAAIAJALQAGAOgPAUIi5gOIgKAFQgJAHADALIACASQgDAUgZAGg");
	this.shape_1667.setTransform(55.396,289.271);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f("#1E1E1E").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_1668.setTransform(186.25,218.2);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f("#1E1E1E").s().p("AgLgJQAAgEAHgBQAFgCADADQADAEACAHIADALQgFAEgIADQgJgQgBgJg");
	this.shape_1669.setTransform(185.5983,215.2);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f("#0B0C0C").s().p("AgLAVQgGgDADgGIASgfQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQADAAACABQAFAEgEAGIgQAcQgCAEgDAAIgEgBg");
	this.shape_1670.setTransform(156.1153,130.625);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f("#0B0C0C").s().p("AgggBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIAGgBIAvgCQAFAAACADQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgYAEgRAAQgYAAADgJg");
	this.shape_1671.setTransform(146.3893,179.575);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f("#0B0C0C").s().p("AgpAAQgIgEABgFQACgHAZAJQAiAKAegEQAEgBABACQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAFgHABQgKACgLAAQgcAAgigNg");
	this.shape_1672.setTransform(177.795,178.8766);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f("#0B0C0C").s().p("AgiAmQgCgCAAgDQgBgDACgCIATgaQATgVAXgSQACgCAEABQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQADAFgFAFQgmAfgRAaQgDAGgCABIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_1673.setTransform(154.5171,136.945);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f("#0B0C0C").s().p("AA1ASIgcgJQgogOgvAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQADgGAEAAQAmgBAlALIAwAOQAGABgBAGQgBAGgIAAIgGgBg");
	this.shape_1674.setTransform(167.0338,181.8523);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f("#CB2D40").s().p("AAmAWIgIgEQgagJgtAGQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgBgEQAAgHAMgCQAHAAAUgBIAPgRQAGgHAPAKQAKAHgCAOIAHAFIACAFQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQgCACgDAAIgCAAg");
	this.shape_1675.setTransform(167.7,158.5286);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f("#0B0C0C").s().p("AAbA8QgCgCAAgDQACgvgLghQgFgQgOgCIgegEQgGgCABgFQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQACgCADAAIAeAFQAXADAIAaQALAigCAyQgFAEgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1676.setTransform(175.8587,348.3208);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f("#0B0C0C").s().p("ABDAbQgHgDgTgKQgZgOgdgGQgfgIgbADQgHAAgBgFQgFgPAwAGQAvAGAjATQAXANAHACQAFABAAAGQAAAGgGAAIgIgBg");
	this.shape_1677.setTransform(107.2764,278.7893);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f("#0B0C0C").s().p("AA1BAQgJgSgTgYQgmgxgtgXQgIgFACgEQAAgDAEgCQADgCADACQBJAoAtBNQAEAHgEAEQgCACgEAAQgEAAgBgCg");
	this.shape_1678.setTransform(114.5948,286.4679);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f("#0B0C0C").s().p("AgqBfQgPgBAWg7QAUgzArhAIAIgLQACgDADAAIAFABQAFAFgEAGQgyBDgYBHQgDAHgDAWQgCAKgGAAIgBAAg");
	this.shape_1679.setTransform(176.8686,262.1292);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f("#0B0C0C").s().p("AhQBGQgDAAgBgDQgCgDABgEQANgjAggdQAcgaAlgUIAzgSQAFgDAEAEQACAEgCAEQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgGABQhGAUgyA2QgOAPgKAWQgHAOgEAAIgBAAg");
	this.shape_1680.setTransform(96.2621,279.1801);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f("#0B0C0C").s().p("AgoBFQgJgHALhSIAGgtQAAgFAGgBIAFAAQAEACgBACIgKBMQgFAgADASQAZgLAogcQACgCADABIADACQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQAAADgCACQgnAcgdAMIgGABQgEAAgFgDg");
	this.shape_1681.setTransform(151.3099,138.9017);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f("#0B0C0C").s().p("AAfBsQgJAAgLgJQgdgYgMgpQgLgiAGglQAGglAVggQAAAAAAAAQABgBAAAAQABAAABAAQAAgBABAAQABAAAAABQABAAABAAQAAAAABAAQAAABAAAAQAFAEgEAEQgkA8ARBAQAGAXATAbQAJALAOAHQAJAFgBAEQgCAGgEAAIgBgBg");
	this.shape_1682.setTransform(136.8922,168.0071);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f("#0B0C0C").s().p("AAVCXQgEgDAAgFQAAhAgShNIgUhRQgHgfgCgiQAAgGAGgBQADAAACACQACACABACQAAAaAJAjIAXBiQAPA8AABDQAAAIgCABIgFACIgDgBg");
	this.shape_1683.setTransform(171.2,301.785);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f("#0B0C0C").s().p("AAAgHQACACAAAFQAAAFgCADQgDgKADgFg");
	this.shape_1684.setTransform(45.9625,349.1);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f("#0B0C0C").s().p("AgVAeQACgbAHgZQACgFgGgBQAHAAABgCQAIgQAEgFQAIgKAGABQACABACAEQABADgCACQgVAbgEAhIgDAXQgBANACAKQgCAFgFAAIAAAAQgLAAADgfg");
	this.shape_1685.setTransform(107.9081,220.441);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f("#0B0C0C").s().p("AgYBYQgBgGAGgIQAcgngCgrIgHhIQAAgJAHgBQAGAAACAJQABAMACACIAHACQABAAgDAGQgBgEgEAAQAGA3gDAXQgFAkgZAiQgEAFgDABIgCAAQgDAAgDgDg");
	this.shape_1686.setTransform(185.7731,248.0348);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f("#0B0C0C").s().p("AAgBkIgJgHQAEgDAAgDQgDgygQgsQgRgzgeghQgCgCACgDQADgDACgBQAFgBAEAFQAVAZAIATQAkBDABBOQAAAEgDACIgEACIgCgBg");
	this.shape_1687.setTransform(186.7929,233.7034);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f("#0B0C0C").s().p("AgqBgQgDgEgBgDQgGguAUgtQAGgMABgHIABACQABAAABAAQAAAAAAgBQABAAAAAAQABgBAAgBQAbgqAcgdQAHgGAEAFQAEAEgFAHQgkAmgTAjQgYAoACAwQAAAFADACIAFABIgEAFIgFAGIgEABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_1688.setTransform(110.915,185.2264);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f("#0B0C0C").s().p("AhJCKQgKgBAEgVQAFgUAMgSQAYggAcgSIALgFQAHgDAEgFQgZgYgMgmQgNgoAKgfIAEgOQABgDAEgBQADgBACABQAGADgDAIQgNAkANAnQAMAkAeAcQAcAbAPAHQAJAEgCAGQgCAKgWgNQgRgLgRgRQgEAFgHADIgMAFQgJAEgLAKIgRASQACACAAADQgBABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgMAAgFAMQgJAKAFAKQgKAEAEANQgDAIgFAAIgBAAg");
	this.shape_1689.setTransform(112.5438,204.4928);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f("#0B0C0C").s().p("ABMDUQgDAAgEgEIgGgFIAGAAQgDgQgIgSIgPgeIgnhTQgDgHAJgDIAUgGQgLgagegeQgzg2gOhMIgGgdQgDgRACgNQAAgGAMAAQAAACADAGIALBGQAOA+AtAvQArAsANAyQACAFgFAGIgKAAQgHAMAIASIAOAcQARAiAIAcQABAEgCAEQgDADgEAAIgBAAgAAlBeIABABIABgBIgBgBgAAaAwQgHACABAEQAAAJAJARQAKgEAFgDIgEgMQgCgHgDgEQgCgCgDAAIgEAAg");
	this.shape_1690.setTransform(182.4417,208.8278);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f("#0B0C0C").s().p("ACxBSQgRgIgQgPIgdgcIglgmQgagcgigPIg7gbQgbgMgzACQgpABgqAIQgDADgFgBQgXAAgXAKIgBACIABABQgJAAgEgDQgFgEADgGQADgGAEAAQBKgOAggDQA/gHAoAKQAjAIAwAbQAoAVAtAuIAsAtQAWATAhALQAiALAbgDQAAANgFABIgIAAQgmAAgtgVg");
	this.shape_1691.setTransform(41.2819,309.1179);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f("#0B0C0C").s().p("AibDrQgEgBgBgGQgKgiAbg2QAbg5A7hAIAfgnQgEgFgIAEQgIAEgEgDQgGgFAIgKIASgTIAXgXQgEgCgIADQgIADgDgDQgIgHAPgVQANgSARgOQAdgUAzgcQApgYAWgZQACgCAFAAQAEAAABADQAEAEgEAEQgZAbgwAcIhAAmIgCANQgJgGgJAJIgJALQgGAGgBAHIAJAEQAFACADgBQAGgCAJgJQAIgEAEAHQACAFgHAFIgaAVQgCABAAAEIAAAGIgGgBQgDAAgCABIgNAOIAKANQAEgBAFgFQADgCACABQAEAAABAEQACAEgFAFIgqArQguAugdAxQgoBBAJArQACACAEAAQAEgBACgBIAFgCIAFgBQgDAEgHACIgMADIgEACIgDABIgCgBg");
	this.shape_1692.setTransform(120.1872,160.5033);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f("#0B0C0C").s().p("AieHbQgDgBgBgDIgJgbIgHgtQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQAGgGgBgIQgKhgASh0QAMhLAVguQAXgvAxg1QAUgWAZgkIAog9IAlgzQAHgTAOgGQATgXAXgsQAnhLANhNQABgGAHgDQAEABABACQACADgBAFIgRBJQgTA4gmBCIipDoIgTATQgwA3gUBOQgGAYgEAfIgIA3QgKBNAKBWIAEApQAEAWAHASQACAEgHADIgCAAIgDgBg");
	this.shape_1693.setTransform(89.0917,277.795);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f("#0B0C0C").s().p("ABLFpQgRgDgFgEQABgMAUAEQAgAGASgFQAkgJAQgSIgUgDQgLgBgHgEQgDgBAAgDQABgEABgBQABgBAfACQAiACAYgKIAYgLQAGgDAFgIIAHgEQAFgCACgFQgOgJgGgJQgHgLAAgNQABgNAJgKIARgRQg8gggqgfQgwgjgoguQgOgPgHgWQgHgVgHgIQgagegegWIgxgjIgFgEQgCgCAAgEQABgEAEgBQADgBAEACIAoAcIAVhNQAIgaADggQAEgngFgTQgqAMgpAcIgeAUQgJAGACAMQAEAngEA3QgBAHgGAAQgDABgCgCQgDgCABgEQAEgsgFg+IgGhTQgBgOgEgIIgGgDIgBgLQgIACgIAHIgNAMIgbAWQhHA8gkBLQgQAigCATQgBAFgDACQgFACgDgDIgGgIQADgCABgFIACgJQAXhFAxg5QAogvBFgzQAJgGAHACQAJACAHASQAFAOACARIAFBCIAWgPQAxgjAvgNQAHgBAEACQAFADABAGQAGAbgDAUIgKBDIgVBPQgCAFgGAGIAzAsQAWAXAHAbQAHAbA2AvQAsAnAoAXIBAAlQAZAPALAPQANAQgPAUIgcAdQgWAYgXAMQgVAKgjAGQgJAQgWANQgcAQghAAQgNAAgOgDg");
	this.shape_1694.setTransform(172.2394,150.2557);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f("#0B0C0C").s().p("AB1E3Qg7gFgggMIhzgsIgEgDIgDgFQgeAPgTADQgqALgdg6QhEA1hdAUQhLARgygEQgOgBgIgFQAGAAABgJQAwAEAogGQBCgLAsgRQAzgUAvgkIAFgEQADgCADABQAEAAABADIACAIQAJAaAXAPQAZAOBlg/QACgBADABIADACQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAADgCABIgtAcQAMAIAnAOIAmAOQAzAVBEAGQBaAGBCgOQALgigWgeQgBgCAAgDQAAgDADgCQAKgHAKAbQAJAcgEAXIAWgGQAFgUgCgJQAAgIABgGQACgJgIgMQgJgLADgEQAHgKAKARQALARgBAYIgCAWQAUgKABgaQABgYgNgNIgJgMQgHgKgOgIQgPgJgLAAQgWABgfADIg2AHIhNAHIgoANQgJAEgCgIQgBgGAHgDIA8gWQAwgWAngkQAOgNAOgVQAOgWACgPQANhFgKhAIgUhGQgOgzglg2IgOgUQgDgFADgEQACgCADgBQADAAACACIAjAzQAOAVATA1QARAzAEAfQAKBGgPBJQgGAegsArQgNAMgSANIgjAXICcgRIBagBQBFgBAsgMQAMgEAHALIgIAGIgtAKQgaAEgUAAIhoABQAuAcAEAsQAEAngkATQgPAIgiAHQg6AMg6AAQgdAAgdgDg");
	this.shape_1695.setTransform(99.35,321.5958);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f("#0B0C0C").s().p("AgVG5QgdgKgHgYIgMgoQgCgFgDgEIgGgHIgLgOQgGgHgHgEQgNgIgFgPQgGgUgFgnQAAgEgEgCIABgHQgPhGgdhLIguAfQgFAEgEgEQgCgDAAgDQAAgDADgCQAjgVAMgNIg7h6IhCBWIg+BoQgCACgDABQgEAAgCgCQgFgDAEgGIAVgjQAWgsAegoIA8hOIglhNIgnhfQgTg2gChCIADhNQAAgJAIABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACADAAADIgDArQgBBSASA5QAHgZAGghIAHg6IAAghQAAgIAHAAQANgCgIBAQgLBQgMApIAnBcIAYAmIABAMIBNCdQAbBCASBNIAFAUQAEAlAHAbQADAKAJAEQAKAGANAOQANAOACAHIANArQAIAZAaAGIANAEQAJACAHAAQgCgbgGgYQgCgHAHgCQAIgBAAAGIAJA6IAoACIAZgFQA2AHAkgVQARgKAHgQQAHgRgGgTQgKgkgegEQAQATADAbQACAYgIAXQgBADgEABQgDAAgCgBQgFgCAEgPQAFgUgDgQQgFgfgRgJIgkgSQgkgagMghIgxiFQgbhNgQhPIgWhkQgHghgEgrIgGhNIgIh4QgBgHAGgCQADAAACABQADACAAADIAJBpQAegqAFAMQACAEgCADQgUAWgOAZIAJBdQAFAtANAcIAYA1IAXAwQAMAaAGAXIAaBXQAEAPAWAYQAaAcAEAIIAkA/QAKAUARAFQAVAIAWgCIBAgDQACgUgFgaQgFgcgJgEQgEgCgLACQgKABgCgEQgDgDACgEQAFgGARABQASACAGANQAPAdgBAtIAdgHQASgEANgLIgIgrQgFgfgMgVQgGgLgLgDQgLgFgMAFQggANgYgXQgjghgTg4QgSg0ADgzIgsjgQgKgzgCgaQgFgqAEgjQAFgDACgGQADgFABgBQACADgEAHQAEADAAAFIAAAKQgCAeAFAmIALBDIAtDvIAAAhQAJBAAkA2IATATQASATASgIQAUgIATAHQATAIAJAUQAIARAFAZIAJAsIABALQAAAFgHAEQgVAPgdAGIglAHIgpADQgkABgKgCQgQgCgEABQAAgDgOgJQgPgKgHgOIgcgxQgLgUgZgdQgWgYgEgMIgchdQgNgqgihEQABAWAMApIA7C+IAHAPQAOAuASAdQAWAhAfAIIAPgBQAJgBAGAFIALACQAfARAGAnQAGAngfAXQgnAdg5gGQgZADgYAAQgqAAglgMg");
	this.shape_1696.setTransform(165.8529,311.2984);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f("#1E1E1E").s().p("AJlSuIgJg6QgBgHgIACQgGABABAHQAGAZACAbQgHAAgIgCIgPgEQgagHgIgYIgMgrQgCgHgOgPQgNgNgKgGQgJgFgDgJQgHgbgDglIgGgVQgRhMgchDIhMidIgCgMIgYgnIgnhbQAMgpALhQQAJhAgOACQgHgBAAAJIABAgIgIA7QgGAggGAaQgTg5ABhSIADgsQABgCgCgDQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgIgBAAAIIgDBOQACBBATA3IAnBfIAlBNIg8BPQgeAogWArIgVAkQgDAFAEAEQADACADgBQAEAAABgCIA/hpIBBhWIA7B6QgMANgjAWQgDACABADQgBADACACQAEAFAFgFIAugeQAdBKAPBHIgBAHIgCABQgHgLgMADQgsAMhFACIhaABIicARIAjgYQASgNANgMQAsgqAGgfQAPhJgKhHQgEgegRgzQgTg1gOgVIgjgzQgCgDgDABQgDAAgCACQgDAFADAFIAOATQAlA3AOAzIAUBGQAKBAgNBGQgCAPgOAWQgOAVgOANQgnAkgwAVIg7AXQgHADABAGQACAIAJgEIAngNIBNgHIA2gHQAfgEAWAAQALAAAPAJQAOAIAHAKIAJAMQANAMgBAYQgBAbgUAKIACgWQABgYgLgRQgKgRgHAJQgDAFAJALQAIAMgCAJQgBAGAAAIQACAJgFATIgWAHQAEgXgJgcQgKgbgKAHQgDABAAADQAAAEABACQAWAegLAiQhCANhagFQhDgGgzgVIgngOQgngOgMgIIAtgcQACgBAAgEQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgDgCQgDgBgCABQhlA/gZgOQgXgPgJgbIgCgHQgBgDgEgBQgDAAgDACIgFAEQgvAkgzAUQgsARhCAKQgoAHgwgFQgBAJgGAAIgFgDQgDgDgBgDQACgDAAgFQAAgGgCgCIACgEQAGAAAFgEQAFgFAAgGQAAgDgCgBQgDgCgDAAQhQAJhug9IialMQAtgWAjgIQADgBACgDQACgDgCgCQgBgIgJADIgbAHQgBgFgCgBIgPgDIgBgCIABgCQAXgKAXAAQAGACACgEQArgIAogBQA0gCAaAMIA9AbQAhAPAbAcIAlAnIAcAdQARAOAQAIQAyAXApgCQAGgBgBgNIAEAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAgBABAAIACAAQABAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAIACAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIAEgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAABIAHAsIAJAbQABAEADABQADACADgBQAGgEgCgEQgHgRgEgWIgEgpQgJhWAKhNIAHg4QAEgeAHgYQAThOAwg4IATgTICqjoQAmhCATg4IAShJQABgEgDgDQgBgCgEgBQAHgbgEgPQgDgKACgNIACgWQAEgjAWgaQACgCgCgEQgBgEgCAAQgHgCgIALQgDAFgIAQQgBABgHAAIgCAAQgEgNAJgFQgEgKAJgKQAFgLALAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBABgBQAAgDgCgCIARgSQAKgKAKgFIAMgEQAHgDAFgFQARAQARAMQAVANADgLQABgFgIgEQgPgHgcgbQgegdgNgkQgOgnAOgkQADgIgGgDQgCgBgDABQgEABgBADIgEAOQgFADgIAJIgEAAQgCgDAAgEQgDgxAYgpQAUgiAjgnQAGgGgEgFQgEgFgIAGQgbAdgcArQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgCQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgDADIgFAAIgFACQgCACgEAAQgEAAgCgCQgIgqAmhCQAdgxAugtIAsgtQAEgFgCgEQgBgDgDgBQgEgBgDACQgFAGgDAAIgLgMIANgPQACgBAEABIAFAAIABgGQABgEACgBIAagVQAGgFgCgFQgEgGgHADQgJAKgHABQgDACgGgDIgJgEQACgHAFgGIAKgLQAJgJAJAGIACgNIBAglQAwgdAagbQAIAAAKAHIAJgEIAGAIQADADAEgDQAEgCABgEQACgUAQgiQAkhKBHg9IAbgVIANgMQAIgIAIgBIABALIAFADQAFAHAAAPIAHBTQAFA+gEAsQgBADADACQACACADAAQAGAAAAgHQAFg3gFgoQgBgLAJgHIAdgTQAqgcArgMQAFATgEAnQgDAggIAZIgXBNIgngbQgEgDgEACQgDABgBAEQAAADACADIAEAEIAyAiQAfAXAaAdQAHAJAHAVQAHAXAOAPQAoAuAwAjQApAfA9AgIgSAQQgIALgBANQAAANAHALQAGAJAOAJQgCAFgFACIgHAEQgFAIgHADIgXAKQgYALgjgDQgegBgBAAQgBACgBAEQAAADADABQAHADALACIAUACQgQATgkAIQgTAFgfgFQgUgEgBAMQgJAAgFAFQgHAGgCAIQgNAAAAAGQgBANADARIAFAdQAPBMAzA2QAeAfAMAbIgUAGQgJADACAGIAoBTIAPAeQAIASACAQIgFAAIgHgEQgEgEgFABQgJgTgUgZQgEgFgGACQgCAAgDADQgCADACADQAfAgARAzQAQAsADAzQAAACgEAEQgIgDgBgIQACgGgBAAIgHgCQgBgCgCgMQgCgJgGABQgIAAABAJIAHBIQACAtgdAmQgFAIAAAHQgXAigLAyIgCAEIAAADQgCABgDAFQgCAFgFAEQgEAiAFArQACAaALAzIArDgQgDAzASA1QAUA3AiAiQAYAXAhgNQALgFALAEQAMAEAFALQANAVAFAfIAHArQgNALgSAEIgdAHQABgtgPgdQgGgNgSgCQgQgCgGAGQgCAFADADQADAEAJgBQALgDAFADQAIAEAFAcQAFAagCATIhAAEQgWABgUgHQgSgGgKgTIgjg/QgFgJgagcQgWgYgEgOIgahYQgGgWgMgbIgXgxIgZg0QgNgcgFguIgJhcQAOgaAVgVQACgEgDgDQgEgNgfAqIgJhoQAAgEgCgBQgDgCgDABQgGACABAHIAIB4IAGBNQAEArAHAgIAWBlQAQBQAdBNIAwCFQAMAhAkAaIAkASQASAIAFAgQACAQgEAUQgFAPAGACQABABADAAQAEgCABgCQAIgXgCgYQgCgbgRgTQAeAEALAkQAFASgHARQgGAQgSAKQgkAWg2gHIgZAEgAKDQvQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQgBAFAHACIAdAFQAPABAFARQALAhgCAvQAAADACACQABABABAAQAAAAABABQAAAAABAAQAAAAABAAQADgBAEgDQACgygLgkQgHgagZgDIgdgEIgBgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABgAJgIBQgFABAAAGQABAiAIAfIATBSQATBNAABAQAAAFAFADQADACAEgDQADgBAAgJQgBhCgOg8IgZhkQgJgiAAgaQAAgDgDgCIgEgBIgBAAgAAGG/QgDACgBACQgCAFAJAEQAsAYAnAxQAUAZAIASQABABAFAAQADABACgCQAEgEgEgHQgthOhKgoIgCgBIgEABgAgnFxIgzATQgmATgcAaQggAfgNAiQgBAFACACQABADAEABQAEABAHgPQALgWAOgPQAzg4BFgTIAGgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQACgFgCgDQgCgCgDAAIgEAAgAgSGrQAcAIAaAOQASAKAIACQANAFAAgJQAAgGgFgBQgHgCgXgNQgjgUgvgHQgwgFAFAOQACAGAGAAIAPgBQAVAAAXAFgALXCwIgIAMQgtBAgUAzQgWA7AQABQAGABACgLQADgVADgIQAYhIA0hDQADgFgEgGIgGgBQgCABgCACgAITopQgEABgDAFQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAvAAAoAPIAcAJQAOACABgHQACgHgGAAIgwgPQgjgLgjAAIgGAAgAFqozIgGABQgBABAAAAQgBAAAAABQgBAAAAABQAAAAAAABQgDAJAXABQASAAAZgFQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQABgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgDgFgBgAKKo+QgBAFAJAEQAtAUAmgHQAHgCAAgEQABgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgCgDgEABQgdAFgkgMQgOgEgGAAQgGAAgBACgAEZsLQgVAhgGAkQgFAlAKAjQAMApAeAYQALAJAJAAQAFABACgFQABgFgJgEQgOgIgIgLQgVgagGgYQgRhAAlg9QAFgEgGgEQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAgAJ1rsIAIADQAEABACgCQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgCgFIgGgFQABgPgJgHQgPgKgHAIIgPAQQgUABgHACQgMABgBAIIABADQAAABABABQAAAAABAAQAAAAABABQAAAAABgBQASgCAQAAQAWAAAQAGgAGYwLQgGABgBAGIgFAsQgMBTAKAIQAIAEAHgDQAegMAngcQACgCgBgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgDgBQgEgCgBACQgpAcgZALQgDgRAFghIAKhNQAAgCgDgBIgDgBIgCAAgAHtv9QgYASgTAXIgTAaQgCACABACQAAAEACABQADADAFgCQACgBADgGQAQgaAoggQAFgEgDgGQgBgBAAAAQAAAAgBgBQgBAAAAAAQgBAAgBgBIgCAAIgDABgAHnwqIgTAhQgEAFAHADQAFADAEgFIARgeQAEgGgFgEQgCgBgDAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAg");
	this.shape_1697.setTransform(107.85,235.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1675},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1670},{t:this.shape_1669},{t:this.shape_1668},{t:this.shape_1667},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664},{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657},{t:this.shape_1656},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,451.7,397.7);


// stage content:
(lib._3_CLEMENT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,95,96];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.boutton_refroidissement.on('click', function(){
		/*
		Déplace la tête de lecture jusqu’au numéro d’image spécifié dans le scénario et arrête le clip.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		*/
		_this.gotoAndStop(96);
		});
	}
	this.frame_95 = function() {
		var _this = this;
		/*
		Arrêter un clip/une vidéo
		Permet d’arrêter la vidéo ou le clip spécifié.
		*/
		_this.stop();
	}
	this.frame_96 = function() {
		var _this = this;
		/*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
		_this.button_2.on('click', function(){
		/*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
		window.open('2_SOPHIA.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(95).call(this.frame_95).wait(1).call(this.frame_96).wait(1));

	// Bouton_X
	this.button_2 = new lib.bouton_Xai();
	this.button_2.name = "button_2";
	this.button_2.setTransform(1619.8,1335.05);
	this.button_2._off = true;
	new cjs.ButtonHelper(this.button_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(96).to({_off:false},0).wait(1));

	// refroidissement
	this.instance = new lib.Refroidissement();
	this.instance.setTransform(500.75,1362.7,1,1,0,0,0,195,310.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},96).wait(1));

	// Bateau
	this.instance_1 = new lib.Bateaux2ai("synched",0);
	this.instance_1.setTransform(441.1,628.5,1.6465,1.6465,0,0,0,225.6,198.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:567.85,y:672.85},4).to({x:631.25,y:723.6},5).to({x:523.5,y:761.65},5).to({x:586.9,y:802.85},5).to({x:650.3,y:837.75},35).to({_off:true},42).wait(1));

	// Whirpool
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA98BD").s().p("AAFAQIgUgEQgJgHADgJIAXgPIAUAZIgDAMQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgDAAgIgEg");
	this.shape.setTransform(321.901,785.913);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA98BD").s().p("AAAAQIgYgFQgFgCgBgKQgCgMAEgDIA5ABQACAFABAIQAAAHgBAEQgCAFgMACIgLABIgGgBg");
	this.shape_1.setTransform(305.0838,770.4821);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA98BD").s().p("AhbAUQALgHAPABIAIgPQADgFAmAAQAnAAAUgdQAZgDAiAKIguALQgKACgIASQgNAKgdALQgcAJgUADQgCAAgHgJQgGgHgCABIgNAMQgDACgPACQgCgKALgHg");
	this.shape_2.setTransform(311.7852,781.189);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA98BD").s().p("AAJAQQgKAAgOgEQgFgBgBgJQgBgIAEgCQAQgHAKAAQAHgBAFAMQAEAJgDAIQgCADgIAAIgCAAg");
	this.shape_3.setTransform(422.0259,1125.6267);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DA98BD").s().p("AgogBIAkgIQAUgEAGAAQAFABAHAHQAHAFAAAEQgQAKgSAAQgWAAgZgPg");
	this.shape_4.setTransform(514.85,1137.7482);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA98BD").s().p("AAHAJQAAgPgHABIgaACQgHAAgNgPIA7ADQABgGADgFQADgHAFgBQAEgBAJAHQAJAGAAAFIgHAvIgnAFQAGgKAAgQg");
	this.shape_5.setTransform(473.7263,1125.1183);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DA98BD").s().p("AgwAgIgDgCIABgFIABgFIAJgIQABgCgEgDIgMgHIA7gMIAsgUQgBAQgEABIgTAIIAgAJIgnAZQgIAFgQAAQgQAAgKgEIgLAFIgBAAIgDgBg");
	this.shape_6.setTransform(496.775,1137.4833);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DA98BD").s().p("AhjAhIAfgDQASgDAIgCQAIgDARgZQAPgZAIABIAcAFIALgTQACgDAIAAQAHAAAIADIgXAmQAOADAnAGIg7ASIgXgVIgiAYQgTAPgXACIgIABQgUAAgNgMg");
	this.shape_7.setTransform(484.55,1128);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DA98BD").s().p("AAHAAQgEgDgGAEIgOAIIABgQQABgDgGgDIgNgGIAoADQAKABAKANQALANgDAJg");
	this.shape_8.setTransform(404.75,826.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DA98BD").s().p("AACAeQgIgGgIgRIgMgcQgDgDAKgEQAKgEACAEIAKAVIAYAQQAEADgMALQgJAIgFAAIgDgBg");
	this.shape_9.setTransform(443.2762,865.3563);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DA98BD").s().p("AgNAcQgTgBACgRQABgZgFgJIAngDIAJAPIAQgNIAFA1g");
	this.shape_10.setTransform(450.2,868.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DA98BD").s().p("AAAAiIgKg3IgeggQgWgYgMgTQAKgEAKgBQALgBACADIASAYIAcAmQAMAVgOARQAkgFAVAhQATAfgGAqg");
	this.shape_11.setTransform(463.6117,877.4125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DA98BD").s().p("AgvDBQhTgehBg4QhIg+gShDIgMgxQgHgXAAgNQgBgTAHgRIAYg6IATgBQAFAAgDAPQgCAuAeAUQAOAdAaAcQATATAiAcIAfAcQBFA/A1gKQAHAdBRAVQBCAQA7ABIBHAAQgUAPg1AGQgzAGgSAOQgTAPgMAFQgPAHgWAAIhIAEIgIAAQglAAgZgKg");
	this.shape_12.setTransform(389.8688,986.4043);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DA98BD").s().p("AAWATIgSgTQgDgDgLACIgYAEQgCgDAJgIQAJgHAKgDQAHgCALAIQAJAGAHAIIAJALQABABgHADIgGADIgBgBg");
	this.shape_13.setTransform(418.8545,1061.9675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DA98BD").s().p("AgMAoQgEgOAKgfIgCgVQABgNATgCQAEAPgIAXQgHAUAGAQQACAEgJADIgIACQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_14.setTransform(593.3074,911.5875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DA98BD").s().p("AgQgHQARgdAjgVIhHBzQgBgkAUgdg");
	this.shape_15.setTransform(620.9726,951);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DA98BD").s().p("AgiAdIAKgmIAPADIAsgcIgfBFg");
	this.shape_16.setTransform(591.575,943.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DA98BD").s().p("AgdAiIAhhSIAUABQADAAACAHQACAGgBADIgPA9IgZATg");
	this.shape_17.setTransform(631.6393,935.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DA98BD").s().p("AgbAoQgNAAgBgEQgCgFABgIQACgJADgEIAwgyIAgAiIg1ArQgEAEgKAAIgDgBg");
	this.shape_18.setTransform(561.53,1042.8528);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DA98BD").s().p("AgggGIAGgoIAAgMQAAgIADgBIAcgKIgfgNQABgDAMgDQALgDACADIASATQAIAMAGAPIgOgBQgJgBADAGIAMATQAUAigYAfIADAJQABAGgBABIgRAMQgCACgCAJQgCAJgBABIgeALg");
	this.shape_19.setTransform(592.8795,961.3682);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DA98BD").s().p("AghgSQAXgBAQAHQAUAKAIAVQgfgIgkgdg");
	this.shape_20.setTransform(380.775,928.4625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DA98BD").s().p("AgSAMQgGgDgCgKQgBgIACgLQAUAHAMALQALAIAKAPQgjgCgLgHg");
	this.shape_21.setTransform(342.7929,1048.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DA98BD").s().p("AgUAUQgEgMADgEIAcgkIAQA+IgjACIAAABQgFAAgDgNg");
	this.shape_22.setTransform(271.7607,1012.051);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DA98BD").s().p("AgDAcIgRgHQgDgBAOgKIgUgNIAVgEIgWgEQgEgBAIgIQAJgIABAAIAwAfIgQAIIAAAOQAAADgIABIgEAAIgHgBg");
	this.shape_23.setTransform(286.4749,1026.7298);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DA98BD").s().p("AAwBYQgRgLgLgZQgKgYgQgJQgggQgQgdQgQgcACgiIBaBLQATAyAcAnQABAEgJAFQgGAEgEAAIgDgBg");
	this.shape_24.setTransform(314.7189,1037.5536);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DA98BD").s().p("AgKBJIgngXQADgYgFgGIgogpQAPgGAbAQQAbAPATgIIgigQQgRgJgGgJQgIgLACgRQABgSAOgHQAIgFARAFQAOAFAJAHQANAMgCArIBUBAIgRARQgEADgagHQgXgIgBAIQgCAPAMAJQALAIAAAIQgHACgGAAQgUAAgTgWg");
	this.shape_25.setTransform(334.025,1051.3982);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DA98BD").s().p("ABlEyIgbgqQg1gqg5hNIgSgYQgKgNgBgQQgBgGgHgMQgGgLgGgHQAFgXgCgiQgDgfAGgrQAJgxADgZQADgVgGgbIgLgwIgEgTQgBgCgIgBIgLgCIgngQIABgtIAIgJQACgCADAGQADAEABAEIAGAQQABADAGgEIAOgJIAUAiIApgFIASAZQAEgQAOgMQAOgNARAAIACAZQAAACAGAAIAJAAQADAEAHADQAHADAEgCQAGgCACgHQADgHgBgFIgLglIAkADIAMAXQADAFAYgHIgOAlIgNgWIgnAUIgEAEQgDADABACIAEAHQACACAMgMIAZARQAKAPgJAPIgVA+QgHAWAJAmQAMA0ABAJIAEA/IgEBEQgBAcgIAYIAfA5IAQAQQACACgFAHIgIAKQACAngLAjIgJAbg");
	this.shape_26.setTransform(289.5286,994.4733);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DA98BD").s().p("AAgg/QADAigTAnQgSAqgdAMg");
	this.shape_27.setTransform(150.3209,977.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DA98BD").s().p("AAhAUQgQgCgJgGQgXAKgNgEQgPgFgNgSQAVACAagKQAUgIACACIAQANIARACQAEAAAEAHQAEAJgCADQgDAFgMAAIgIAAg");
	this.shape_28.setTransform(369.0583,849.7532);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DA98BD").s().p("AgoAWQgIgMAEgGQANgWAZgNQAagOAbAKQgVApgzAiQgJgHgGgLg");
	this.shape_29.setTransform(219.8443,858.8167);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DA98BD").s().p("AghAnQACgVgBgLQAAgZAGgNQAHgQAVgPIAgAOIgTAkIgYBLQgVgGgDgSg");
	this.shape_30.setTransform(141.3,994.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DA98BD").s().p("Ai4CMIAcgeIAVgfQANgVAJgIQBmhTBCgnQAQgJAogUQAmgTARgLIAOgJQADgBABAHQACAHgCABIiZBjIhPA9QgjAbgcAoIgJgKIgSAjQgMgYAEALIgNAYQgDAEgNAAIgJgBg");
	this.shape_31.setTransform(199.6444,903.2106);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DA98BD").s().p("AggC6QgRgOgJgaQgKgcADgbIAKhZQAHg0AJgkIgKgXIAQAJIAHgVQABgDAPgCQAOgtAdgRQAFgDAKAHQAKAHABAGQABASgJAGQgRAMAbAZQAGAGgBATIgDAbIgCBRIgHBMIgDAHIgEAGQgDACgGgBQgGgBABgCIADgRQABgCgGACQgFACAAACQABAzgZAaQgOAQgKAAQgFAAgFgEg");
	this.shape_32.setTransform(178.0054,958.1079);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DA98BD").s().p("AgHABQgCgXAEgZIALA2QADANgBAJQAAAKgHAJQgGgdgCgSg");
	this.shape_33.setTransform(150.2292,1069.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DA98BD").s().p("AgnAaQAfgfAngXQAKANgBAAIgPAHQgVAIgSAWQgHAHgHAAQgFAAgGgDg");
	this.shape_34.setTransform(148.5348,829.523);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DA98BD").s().p("AgRgIQgOgDABgCIAIgOQAQALAZAKQAMgDAAAFQAAAEgJACIgQgFQgCAAAAAEQgBAGACAAQAVAGgBADIgEAMg");
	this.shape_35.setTransform(214.7718,939.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DA98BD").s().p("AgHARIgZgoIAgAMQAMAEAHAHQAIAJAGAPg");
	this.shape_36.setTransform(444.775,856.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DA98BD").s().p("AgUACIAKguQAUAqALAvg");
	this.shape_37.setTransform(168.825,1088.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DA98BD").s().p("AgGgEQgFgSAAgKQABgPAJgLQANA6AAA7g");
	this.shape_38.setTransform(202.9259,1058.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DA98BD").s().p("AgYAaQgEgHAEgOQAEgMAHgJIAJgLQABgBADABQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIgEAOIANgEQAFgCAJAMIgiAJIAHATQABADgMABIgGABQgHAAAAgDg");
	this.shape_39.setTransform(463.1933,1063.235);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DA98BD").s().p("AAFAGQgMgLgTgEQAKgIgCgCIgIgKIAXACQADAAANgHIgPAZIAUAAIAJAsQgOgVgIgIg");
	this.shape_40.setTransform(394.5,951.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DA98BD").s().p("AgUAQQAHgOANgKIAGgkQAAgDAJABQAKABAAACIgNAgQgKAcgVAeQgIgOAHgRg");
	this.shape_41.setTransform(576.7435,948.5125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DA98BD").s().p("AgqACIAigQQAjgTAQARQgUAEgIAEQgLAFgHAHIgeAVgAgqACIAAAAIAAAAg");
	this.shape_42.setTransform(262.525,798.7236);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DA98BD").s().p("AgEASIgsg4IATAJQADABAGgDIAJgGQACAAADAHQADAIACAAIAUAGIAeA3IgHAAQgeAAgQgVg");
	this.shape_43.setTransform(565.475,824.487);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DA98BD").s().p("AgfABQANgGAKgHIBCAIQgcANgMABIhLADIAagMg");
	this.shape_44.setTransform(272.075,799);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DA98BD").s().p("AgDgeQgaANANgXIApAJIghBEIgQAEg");
	this.shape_45.setTransform(173.2,993.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DA98BD").s().p("AgDAUQgKgMgGgOQgHgTACgQIAxA+QADADgLASg");
	this.shape_46.setTransform(236.6836,1122.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DA98BD").s().p("AALAVQgHgFgPgPIgfgTIAkgOQAGgCAEAWIAnAtQgSgDgOgJg");
	this.shape_47.setTransform(224.275,1100.3875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DA98BD").s().p("AgCATQgOgBgKgKQgKgKACgNQATgFASAEQATAEANAMQgRATgSAAIgCAAg");
	this.shape_48.setTransform(368.5583,1092.6789);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DA98BD").s().p("AgcAHQgQgFgngfQAegCAbAIQAbAJAFAPQALgBAQABQASABALAFIARAGQADABACAFQABAFgCAAIgSAHg");
	this.shape_49.setTransform(392.2281,782.681);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DA98BD").s().p("Ag0AIIAigWIBHAGQgUASgfAEIgOABQgUAAgUgHg");
	this.shape_50.setTransform(367,782.5721);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DA98BD").s().p("AgyAnIgVgVQAmgDAYgTIAZgFQAEgBACgHIAEgNQADgKATABQASACAGAJIgjAuIgKgNQgIgJgCACIgJANIgGAEIgFADQgBABAAAFIADAQg");
	this.shape_51.setTransform(543.425,1007.1702);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DA98BD").s().p("AANAeQgQgHgDgDQgCgBgCgFIgCgIIgmgvQAXgCANANQAIAIAGAUIAaATQAOALALAOg");
	this.shape_52.setTransform(277.975,1076.2798);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DA98BD").s().p("AANAPIgTgaIgxgGIALgRIACgEIADgMIBEA6QAZAUACAXg");
	this.shape_53.setTransform(564.525,832.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DA98BD").s().p("AgRAWIgVg8QgEgBAJAAQAJAAACACIAGAOIA4A/QgjgFgWgNg");
	this.shape_54.setTransform(390.3527,1122.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DA98BD").s().p("AAGBQIgEgGIgCgFIgIhKIgGgmQgCgTAGgSIANA6IAMAKQADACgJAMIABBNQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgDgBg");
	this.shape_55.setTransform(575.414,865.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DA98BD").s().p("AACApQgRgNgUgcIgSgaQgIgOADgOIA1AqIAHAGQAGAEgCABIgRAMQAIAOAgACQAcABADAYQgJADgJAAQgVAAgTgOg");
	this.shape_56.setTransform(482.4438,828.1018);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DA98BD").s().p("AAUAVIgNABQgCAAAFgNIgRABIABgLQABgCgWgEIAIgGQgVgNgTgWQAnAHAIAFIA2AkQAGADAGAJQAGAJAAAGQgBAGgKAIQgKAIgIAAg");
	this.shape_57.setTransform(400.2268,1131.975);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DA98BD").s().p("AgbAYQAAgEAIgEQAJgEAEAAQgGgZAEgTIAIgvIASA4IAKA3QgUAXgOABIgKAYg");
	this.shape_58.setTransform(276.3736,1063.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DA98BD").s().p("AAwA9Ihth8IAsAKQADAJAGAMQAIAMAHAIIAUATIgGgTQgCgGABgEQAAgGAMgHQAMgHAGAEQgMAWAAAMQgBANAPANIgEAGQgDADABACIAQAeQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgNgDg");
	this.shape_59.setTransform(399.328,792.6696);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DA98BD").s().p("Ag9AiQgUgKgOgUIADgfIARAHQACABgCAGIgHAMQgCAGASgCQARgBACgFQABgEgCgJQgDgJgDgCIgdgLQAKgFAPAGQANAEALAKICCgEQgQAIgVADIgpADIgyAEIgGARQgBACgWAEIAvAZQgIADgJAAQgPAAgPgIg");
	this.shape_60.setTransform(315,845.8887);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DA98BD").s().p("AgCA9QgHgFgCAAIgVAAQgDAAgCgFQgBgEAAgDQABgCAEgDQAEgDACABIAOAJQAAAAAAAAQABAAAAgBQABAAAAgBQAAgBABgBQABgEAAgCIgGgnIgYgvQgCgEATgGQAUgFAIAFQAIAFgFASQgDAQAFAAIAdgCQACARgHAUQgIAVgMAPIgKANIgBABQgCAAgEgDg");
	this.shape_61.setTransform(218.3787,924.683);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DA98BD").s().p("ACEA0QgJAAgPgDIg/gLQgDAAgIgIIgJgHIgsAHIAJAKQACACABAEQAAACABAAQAAABAAABQgBAAAAABQAAAAgBAAIgRABQgfABgUgTIgQAMQgIAFABgTQABgggCgLIAUgFIgxgPIgMAAQgKAAABgCIAGgTIAzAMIACAIQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAUgSQAKgBgBABIgNAMIAlAeQACACgBAFQgCAFgCAAIgTgBIgJgBQgGAAgBACIgIANQgBADAIAEQAHAEAFABQAZAAAEgFQAGgGADgWIAmAMQAFACANgFIAQgIIAHAPQABADAJABIAOADIBLAdQgIACgIAAIgEgBg");
	this.shape_62.setTransform(363.2487,1106.855);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DA98BD").s().p("AgVg5IAvAUIAjgSIAHAIIhCAlIgDAoIAfASQgRALgVgOQgXgNgEADIgfAXQAEg4Apg7g");
	this.shape_63.setTransform(560.25,976.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DA98BD").s().p("Agmg5IACgyIBBAtQgMARAEARQACANAQATIgTAZQADAAAGABQABABAAAAQABABAAAAQABABAAAAQAAAAgBAAIgPAPQgBAngKAWg");
	this.shape_64.setTransform(502.25,851.55);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DA98BD").s().p("AA7BvQgUgRgZgLQgKgFgEgKQgGgKADgJQgfgFgagoQgXgigGglIgHgvIAUAKQgFgIACgLQACgLAJgEQgCgDACgEQAEgGAHADIAIALQgSATAHAVQAEAKAUAaIAKAhQAHAVAHALIAfA3QAoAaALAMQAZAYACAdQgagcgMgLg");
	this.shape_65.setTransform(179.625,1045.9276);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#DA98BD").s().p("Ah9ArQgMgGgDgHIAjgBQAFAAAJgJIAPgQIALARIAUgMQADgCAHADIAMAHQALgLABgGQAAgDgHgIQgGgHgHgGIAGgTQABgEANACQALABAEAEQAmAdAqAEQAgADAGAMQABABAKADQAJADgBACIgIASQgCAGgUgOIheAGIgdgDQgVgCgJACIg/ARIgEAAQgHAAgJgEg");
	this.shape_66.setTransform(479.23,1060.9417);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DA98BD").s().p("AhrAXIgGgEIgHAEQgOAHAagoQAZgmAdgEIg5BDIAGADIAigLQAGgXAXgWQAVgUAdgOIgKgVQgCgDAHgGQAHgFAEgCIgGARQgBACAEAHQAFAFADgBIAYgHQAegKAJgZIAFAUQAfAIAIAEIgVASQgEAEgNgMQgIATgFgDIgYgLQgEAFAMAhIAFAMQABAFgOgFQgWgIgRAEQgLACgCAYQgEAUgGgBIgdgCIgdBKIgHARQgEAIgLAIg");
	this.shape_67.setTransform(362.4686,948);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#DA98BD").s().p("Ah5B1IAVgYQAFgFATgIIAbgMIAlgWQAVgqAxgFQgJgRAFgRQAEgPAPgJQgBgiAfgmQADALgFARIgJAcQgHAkAlAeIgJANQgCAFgKgQIgnA2QgVADgDATIhDAlQguAYgdACg");
	this.shape_68.setTransform(415.875,960.225);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DA98BD").s().p("A1RFMIARgNIAkgfIASgEQALgEAAgFQAAgGgLgJQgLgIgGADQgFACgKAKQgLALgDACIgVANQgKAHgEAJIgnADQAGgVAcgFIAaghIgSgGQBNgcAqgkIA+g2QAagXAlgLQBkgdBNg3QAXgyAugzQArgcApgIQAdgGA6ABQAmABArgJQAqgKAhgQIBHgjQAdAVA8gdQAjgRA/guQA2goBDgSQBFgTBFAJICiAFQAwACBFAgQAKAEBCAoQAtAbAiAGQAmAIAyACQAeABA8ABIgLAKQgCABAFAGIAHAJQgegRgZgDQgcgDgKASIg7ACIgDAIIAxAAIADAeQBBAFBSgHQAMgBAnAIQAiAIAQgFIBvgiIAxANIASAFQAMADABAEQACAGgDAXIAoAFIAzA/QAPATAMAGQAQAIAXgFQgOgVACgXIASAZIAoAtIgcgKQAHA7A6AXIAfgPQAsAXBCAUIAVglQABgDAGgDQAGgDACABQAQAIAjAKQAYAHAHAKIg7ACIAaAYIgHAOQgBACAGAEIAFAEQglAKgHAKQgKANAEAfQgEABgIgDQgJgDgDgDQgDgEgCgKQgCgJABgHIAGgnIApACQgPgMg5gOQg8gOgngaQgGAfAmAHQA/AMAMAHQgXAUABAHIAIAnIgrgpQgDgCgJAEQgKAFABADIAFAaIgYgQQgIgFASgZIghgHQgRgFgMgGIkBiMQgIgFgTgFQgQgGgMgCIjJglIAcgGIgcgGIAJgUQAEgHgTgBQgdAAgQgIIgRAPQgEAEgIgUIgSAKQgDABgHgCQgHgCgDgDQgBgBAAgEIACgFQABgBgGAAQgHgBAAACIAAAOQgVAFgxgIQgrgHgcAMIg0gFIgHAYIg+APIArAHIg+AMQgEABgLgCIgQgCQgmABg1ALQg6ANgdADIiKASQAQgLAIgJQAJgLADgOIgZABQgEAAgFgQIgGgVIg3AKIgQANIgWAAIhfAaIgUAFQgNAEgEAEQgFAEgCAJIgEATIg1ANQgPgKACgCIATgMQgcgFgfAGIi1AdQhEALgrAKQg7APgwAUQgtAUgTAKQgjATgUAVQgmAogjAaQgpAfgwAUQgKAEgbAXQgYAVgPACIgmAGIgLABIgCAFQgDAEgBABIhQAWQACgEAJgHgAESiaQgDAJAJAHIAVAEQAMAHACgEIADgMIgUgbgABnixQgMAHACAKQAQgCACgCIAOgMQACgBAGAHQAHAJABAAQAVgDAcgJQAdgLANgKQAIgTALgCIAtgLQgigKgZADQgUAdgoAAQglAAgDAFIgIAQIgEAAQgNAAgJAGgABgkyQACALAFACIAYAFQAHACALgCQAMgCABgFQACgEgBgIQAAgIgDgFIg6gBQgDADABAMg");
	this.shape_69.setTransform(292.325,800.9777);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DA98BD").s().p("AgvGmQg4gGgrgWQiDhEh3AJIiIALIh2AXIgCgjIgXAeIALAPIgjgGIADgMQACgHgDgCIgYgNIBhgdIgRAiIA8gXIgogQIBDAEIApgOIAMAIQACABAFABQABAAABAAQAAAAABAAQABgBAAAAQAAAAAAgBIAAgMIBFAJIBJAIQAnADAigKIAhgJIh9ADIgFgXQgogHgeAGIhRANQgKABgrgDQgkgDgTAJIhEAfQgmAQgegIQAMgJgCgDQgBgDgJADIgMAGIgGgPIgRAPIgrgQIgQgEQgLgDABgDIADgcIgoAAQgGAAgIgLIgMgSIgngzIg8gLIAYA5IhehKQgOgBABgEIAFgKIABgBIABAAIAAAAIAFABIAHADIArAYIgag/IhCgXIgygYQgcgNgbAJIAuATIAFADIAcAEQASAFATATQAQARAKATIgBAAQgSgGgOgMIgYgaIgOAKIgYgaIgGgBIgFgBQgUgHgegEQgigFgmABQgWABgDgGIA4gQQACgPADAAIAdABIAGgqIAkAeIAXgNQADgBAHAFIAMAHIBLAaICKA6ICJBHQAagCAdAFQAeAGATANQAPgDAVABQAYABALAFQACAAAAAIIAAAHIAIABQACABgCgOQAhgIAZAKQAkAPAKABIgaASIgTgGIgNADIgGgNQgJAGgOAOIgXAYQgCACAFAHQAFAIADgCIARgKQBCgOAVABIAxABQAWgCAYgEIA4gMQASgEBKgDIgHgZIAwgXQAPgHARgEQAVgFAIACIAcAfIgLgaIAlgaIEXg/QAPgDAkgQQAfgNATgBIBKgFIgXAOIAzAAIAWAAQANAAAKgEIgXgeICRgWIgMANQgBABAEAEIALAKIg7AKQAgALAlgKQAWgFArgPQCrgqBYgjQCWg8AxhQQAWgkARgTQAYgaAhgRIAogdIAYghQARgTAPgEQAdgHATgIQAVgIAVgPIAPgLQACgCAFAGQAGAGgBADQgCAKgNADQgQAEgHAKQgCAEAFAIQAFAJAEgBIAcgGQACgBAFAHQAFAIgCACIgTAWIAJAKQADAEgPAIQgqAWgkAoQgVAXgmA1QgOATgmARQgxAWgKAHIhJAxQgVAPgKAmQgPA4gxAmQg1Aqg/gGQgbATgdgKQhyAZhCBKIgQACIgCgPQgMABgOADQgQAEgIAGIg4AoQg5A4gfAVQgsAfhCAVQgrANg1gBQhCgCgjAFQggAGgeAAQgUAAgTgDgAAIFzIg7AMIAMAIQAEADgBABIgJAIIgBAFIgBAFIADADIAEAAIALgFQAKAEAQAAQAQAAAIgFIAngYIgggKIATgIQAEgCABgPgAiHEcQgRAbgIADQgIACgSACIgfADQAQAPAZgDQAWgDAUgOIAigYIAYAUIA7gRQgngGgOgFIAXgmQgIgCgHAAQgIAAgCADIgMATIgbgFIgBAAQgJAAgOAXgAjaENQAAAQgHAKIAogFIAGgwQABgFgJgGQgJgHgFABQgEABgEAHQgDAFAAAGIg8gDQANAPAHAAIAZgCIABAAQAHAAABAPgArfD5QgKAAgQAHQgFACABAJQACAJAFABQAOAEAKAAQALABACgEQADgIgFgKQgFgLgGAAIgBAAg");
	this.shape_70.setTransform(496.3917,1099.108);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#DA98BD").s().p("AhOUyIjAgIIghgEQgTgCgNACQgFABgHgDQgGgEgCgEIg6gDQghgXgqADIg3gTIAigGIgagIQgDgBgEgGIgGgKIgPALQgHAFgpgKQgqgKgMgMIhkhfIgcghQgWgbgqgaIAJAWIhwhAIA4gbIAGAdIAxgHQAGgBAHgEQAIgFAAgDQgBgDgEgHQgEgHgEgDIg2gvIhYgMQgMgCgqADIAKAeIgrAIIgLgBIAWACIgDAQQgpABgngMQgrgOgQgZIgXgNQgOgJgDgJQgJghgsggQgtggglAAIgag2QgOgcgXgJQgWgJgGALQgDAGAJAWIgbgVQgEgDgDgGQgDgGACgDIAPgTIgDAVQAAAEAVgEQAEgBAGgGQAFgGgCgDQgGgHgTgDIgGgsQAAgCgGgFQgHgGgBACIgMALIgphQQgCgEgIgGQgJgFgEABIhCAWIAjAVQAWAFAKANIAtAxQgbAHgPgJQgHgEgRgVQgLgCgTALQgSAKgDAJQAgANAJAmIgPARIAWAYIANgVQARAhAAA/IAOAFQACABACAHQABADgLgCIgFAjIAegWIAVAaQgVALgDAMQgCAIARAQIAQAOQADADAJgCIARgDIgHASIAZgSIABAPQACAJAEACIAjAMQgFAXgvAHQAhAgAzAMIgKgZIAIgFIA9BIIBHAwQADAPAFAGQADAFAPAJQATAMAjAkIAGAFQAWAHANAOQAOAPgCATQAMADgFAMQgBAFgJANQABANgBAGQgCAJgIAEIABg5IgJAQQAAABgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgJgLIgVglIAQABQADAAADgFQADgEgBgCIgVgSIgFgFIgGAFQgJAKAAgCIADgSQgRgTgmgRIgWgPQgZADgMgTIgLgQIgMAIIgvgWQgFgMgTgKQgRgKAAgCIACgZIgngMQgFgBgDgLQgCgNgCgEIhhhkIgEASQgtgVgcgmQgWgegSgwQgIgWgUgcIgggtIgcgnQgQgUgRgQQgGgFgPgWIAyARQAGgRgIgZIgSgrIgYg5QgCgEgIgGQgJgFgCACQABAegcAWQgaAUAHATIAWAAQAFABAGAPIAEANQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQgEABgCgBIgNgGQAEAQAHgBIAVgCQgFAUALATQAEAHAaAfIAzB4QACAEgBAIQgCAJgDABIgSAEIAEgNQABgCgNgDIgKgoIgbAFQg+grgRgpQgihPAJhXIAKhqIADhHIAChCQAAgQAOgLQAOgLATgDIAagkIgJgBQgKAAABgBIAOgOIgUghIgahKQANgJAFgFQAFgGADgIQAVguACg6QADg1AKgPQAEgGAUgJIAbgMIAtgvQAagcAPgWQAdg2ARgaQAeguAqgQIBpgoIAbgxIgVgkQAIgXAYgJQAXgJAdAIQA8gXA7g0QABgEgCgIQgCgHgDgFQgEgEgPgBQgMAAgIACIgsAPIAGAvQgPALgSACQgRACgXgEQgXgFgoAeQgeAXgOgXQgxAKgXAhQgVAfAIApQgaBEhjA3QgMAGgJAfQgPAFgJANQgHAKgIAVQgQg/BRhBIAggaQAOgLAYg2QAag7AogoQAogoAvgWQAxgXA8gGQAfgDAigQQAUgJAngWQBNgnBTANIBMAMQAzAJBSgRQAUgSAWgHQAWgHAdADQBVgTBPAFQBYAGBCAlQAaAOAeAnQAhAsASANQAEAEAKgGQAJgGgBgFIgCghQAwAcgEA2IgDAuIA1AcIAuAOQASAcgEAqIgHBNIgjhMQgEgHgWgVIAiCkIAbADIAPhBQAKANAFAPIAIAaIAaBHIgQgFIgDALIgQAsQAGAKgGAJQgGAIgNAFQgFgPAEgNQADgNALgQIgVgMIgGAOQgCADgKgCQgKgCABgDQAfgrgFgYIguA0QgDADgXgEIAMATIgdgCQgLAAgLAXQgOAegPALIgBAMQAAACgHABQgIAAABgCQABgEgJgBQgIgBgBADIgGASIAQgEQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAABQABABAAAAQAAABAAABQAAAAgBABQAAAAgBAAIgMAEIguAYIgvAOIgmAKQgUAFgPACIALgMIgKgNIAqACIgVgOIAegYQAZAFAWgLQAXgMgBgUIgGheIADgMQAEgJgDgCQgDgGgcgJIgBAfQgXgJgUAFQgUAFgHARQAGAGgCAFQgCAEgGgGIgPgSQgCgCgHAGIgKAIIgtATIgjgfIAOgaQACgEgJgGQgJgFgHAAQgKAAgLASQgNgSgXgGQgOgDgCgQQgDgQAKgIQAOgLAOgRIBWAcIgRArQAPgDAHABQAHACAFAHQAFAIgDAIQgEAJgIAAQgCABgBAEQgBAEABACQAEAOAJgPQAMgVAGgBIAZgFIgXgbIgGAMQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBIgDgbIA+AnQAFADAKADIAQAEQAGABALgIQALgHABgFQAHgogVgsQgWgugdAFIApA/IgWAlIg3ggIhzgmQhRgqhVADQhZAEhFA1QgTAPgvAYQgoAWgWAKQglASgdAEQggAGgTAIQgWAJgUARIg+A5QgiAjgOAkICKhoIAkgbQAVgOAWgFIhJB8IgRAXQgMAQgCAJIgKA9IASgCQAEgBAAALQAAALgCADQglAtgQAxQgPAuAAA+QAAAmgJAtQgGAZgPA3QgOAzAOBHQALA6AcA/QAHARATARQAKAJAYARQAWARAeAEQATADApgDQAfgBAiAIQAmAKARARIBQBRQAYAYA4AXQA/AbASANIBKA1QApAbAmATQAGgTgCgUQgBgOgHgVIgDgGQgNgFgngEQgbgCgHgQIAdAJQABgKARADQARADABgCIACgHQACgFACAAQAIACAHAMQAHAMgCAIIACAEIAVAOQADACAHgGQAHgFgBgCQgFgdAYANQA7AiAKAEQAZAJAgAYQAjAaASAIICBA/IAEAAIBaARIAnAOQAFgNAEABIAUALQgCACATgJQAugHAogPQhIAFgbgCQgtgDgjgpIgwgHQAAASgFACIgZAIIASgkQgWgEgjAEIgRggIgPAUQgCACgJgBQgIAAgDgDQgDgCABgGIACgPIgagVIgEgFIgEgEIgNAKIgMg5IAjANIgUgSQA/gMBKAQIBiAXQAXAGBEAhQA0AaAwgCIgPgHIgEgFQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIA6gCQAHgBAJADQAJACADADIgWADQgEABABAPIDIgfQAnANA3AEQA6AFAlgJQBLgQBBgkQBCgkAxgzQAXgYAXgpIAmhFIAthOIgoAMIAHgeQgJACgHADQgIADAAAEIAAAtQAAACgFACIgMAEIgjgDIgkAYIhNB8IgvAyIgVgUIgDhTQgOgEAIgJQADgEAYgSQA1gpABgkQABgxAggcIBBgEQACgCAGgCQAGgCAAACIABAQIADgUQABgDAHgEIAKgFIBXhmIANAmIgdAKIAUAMIgTAXIBDgfQAbgIAbgNQAhgPAMgNIAKgFQAHgDgCgCIgOgNQgLgKAJgIIATgOIAzg1QAggeAegQQAKgVAegPQgBgDgDgFQgEgGgDgBIgcgCIAUgTQgDgBgKAFQgKAGAAAEQAAASgCAFQgDAEgLABQgKABgKgBIAAAdIgWAAIgOAgQgSgOgVAEQgNACgaAOIguAZQgEACgJgCQgKgBAAgDIACgJIAEgJIBOhWQADgDAMgDIARgFIBTgjQAFgYAmgXQA7gjASgQIA9g3IAqhPIAQg+IALAQQgKgZANgbQAMgYgHgJIglABIAUgYQgHgVANgiQAKgagOgIQgHgEgMAAQgNgBgLADIAHgqIAcgvQAfg1AFgMQARgmgHghQgDgOAFgNQgggngwgfIATg2IAPAWIAdgQQAFgDADgLQACgLgDgFQgFgHgcgEIAEg+IAGgNQABgDgOgJIgWglIgMAVIgdgvIgMAJQALgegFgzQgDgeAWACIAYhcIgPAEIgIAAIgHgBIASgKQAIgFgCgDIgIgbIgEggIAEg5IgJAIQgGAEgCgCIgcgQIgBgCQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIASAGIALgTQADgFgVgJQgVgIAFgGIAVgXIABgEQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgNACQgDABgDgJQgCgIAEgCIAXgLIgDgPQAAAAAAgBQAAAAABgBQAAgBAAAAQABgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAIANALIAsAsQAcAdAMAqQAIAdADAuQAOADgDADIgMAJQgEADgMgkQgPgqgTgIIAbBxQgYAXATAiIARgLIAgBbQAEAMABAiQAAAfAGANIAUAuQADAHAHADQAHADgBgTQAAgTAQACQAJABAIAEQAIAEABAFQAAAFgHAHQgGAFgJAEIgaAKQgEACAFALQAFAKAFAEIAcgXIAJAkQgJAAgKACQgLADAAAEIgFA6IApgRQACATADABQAHADAIgCQAIgDACgGIgbgFIAdhrQAGgVgJgZQgGgTAOgNIgfgPIAXgTQAFgFgLgUIgHATQgDAJgTghQgcgvgQgSQgXgUgJgLQgPgSAFgYIAQAZQAlAcAOANQAbAaAKAbQAlAcAPApQAOApgMArIAEAOQABABgOACQAEAMgBAOQgCARgJABQgMACgGANQgGAMADAOIAKgTQAHAFAFAPQAFAQgHAEIgPAIQgKAFgBADQgBAFACAIQACAIADACIAEgRQABgCAHABQAHAAAAACQABARgIAWQgJAYgNAHIgOAHQgDACgFgRIgJAJQgCABgMgKIAAAhIgPgdIAFBEIgWAOQgDACAFAKIAIANIgfAXQgFAEgGAIQgGAHgCAGQgBAFAEAKQADAIAEAFIgKAWQgBAEALgBQAJAAAHgCQAIADABACQAAADgLgCIgOAHQgCABAFADIAJACIAqAFIAdg3QADgEAPAFQAPAFAAAFQgCAWgeAuQgYAkARAdQADAEABAHQACAIgDACIgQAMIAMA6QACAKATANQAPAKgEAYQgCANgGAXQgFAugHAeQgLAmgTAgIgsBGQgiA4hGAyIhTBAIgOADQgCAAgDAEIgDAHIg8AgQgMAOgJAHQgIAGgUALQAKAEANgDQANgCAIgIQARgQAVgMQANgIAfgOIBPg4QBMg1BChbQBGhgAJhIQADgfgEg/QgEg+AEgfIATiIQAFgkAjgvIBBhXQAGgJAHgRQAIgNAUgGIgFhJIgmAnIgFiKIgPh3IgniaQgOg2ABgUIA3iWQAHgVgEgfQgHgmgCgWQAmAtAUA5IgfgNIgNBYIgKCfQgBAWAGAdIAMAzIAkCfIAPALIgKAfIATgOQADgCAFAGQAEAHAAAFIAcATIgJg2IgEgJQgDgHACgBIAPgMIgWg4QgOgkAAgXQABgTgFgVIgJgmIgGgwIgEh1IAIg7IARAaIAFghQAKAXACA7QACAnAfAUIgOgDQgHgBAAADIAGBQIAOgGQgFgUAGABIATADQATAEAjgVIAUA1IgLAGIgYgnIgKARQgBACgEgDIgNgKIgdArIADAKIACAGQABABAAABQABABAAAAQABAAAAAAQABAAAAAAIAPgNIgMAiQAEAgAeAhQARATAlAlQAPATAJAlQAMA0ADAIQAOAkgBAjQgEAsAOAkIhHDoQgIAcg4AaQgmAQgVAlQgpAZgPA7IgRBAIAGBxQABAZgQAiQgIATgTAkIgXA1IgVAjIgqAvIARABQACAAgIATQgMAbgFAZQgEASgKASIgWAhQgWAigQATQgWAbgbAUIjECWQg0AohYATIhRARIhyBRIhqBiQgrAnhNAOIACgOQACgIgDABIgTAFIgxAMQgfAHgSAJQg0AahUgHIhagHQgKgBgPADIgZAFIjGARIiIAfQg0AMgogNQgigMAGgJIAMgRIgSgEQgDAAgMAGIg8gYIgHgCIhAgBQgiAQgZADQgfAFgfgMIgnACQgKgZgXgPQgRgLghgNQglgNgcAVIgJgIIgEgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABIADAWIgRADIAYAVQATARAcAIIgKAMQgDADANAMIAJAIQAAAAAAAAQABABAAAAQAAABAAABQAAAAgBABQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgRgKQgDgDgCAJQgCAIAEABIAYAGQAHABAMAdQALAYAdgFQgCgPgGgCIgegHIAXgPIArAnQACACgNAHQAhAFAPAJQAZAOAjAKQAUAGArAKIBhAaIgDgNQABAAAHgDQABAAAHAJIBBAYQAngHAZALQAWAKgFADIANgGQAiAJAtgGIAPgDQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBgBgBIgBgKQAXgIAcALIALgaQAGgPAIgIQAIgJAPgIIANgMQADgCAEAHQAEAGgDACQgRARgDAGQgDAGALAIQALAHALAAQABAIgCAAIgRAAIh3AnQgeAKggAAIgJAAgAk0OXIATAUQABABAGgDQAGgDgBgCIgJgLQgHgIgJgHQgLgIgHACQgLADgJAIQgJAHADAFIAXgFIAJgBQAFAAABACgAzkMXIAoAqQAFAHgDAXIAnAYQAaAdAbgKQAAgHgLgJQgMgIACgPQABgIAXAHQAaAIAEgEIARgQIhUhCQACgrgOgMQgJgHgOgEQgRgGgIAFQgOAIgBASQgCAQAIAMQAGAJARAJIAiAQQgTAJgbgQQgTgMgOAAQgFAAgEABgAxLMSQACAKAGAEQALAGAjACQgKgPgLgJQgNgKgUgHQgCAKACAJgAQ0LiQgDAEgCAJQgBAIACAFQABAEANABQANAAAEgEIA2grIgggigA2AKJQAQAdAgAQQARAJAKAYQALAZARALQAEACAJgFQAJgFgBgEQgcgmgTgzIhbhLQgCAiAQAcgA5+IiQgJAIAFABIAVAEIgUAEIAUAOQgPAKADABIARAHQAFABAHAAQAJgBAAgDIAAgOIAQgIIgxggIAAAAQgCAAgIAIgA8NGpQgDAEAEAMQAEAMAFAAIAkgCIgRg/gAWFi2QgLADgBADIAfAMIgcAKQgDABgBAIIAAAMIgFAoIAABpIAegMQADAAACgIQACgKACgBIAQgMQACgBgCgGIgDgJQAYgfgUgkIgLgTQgDgGAIABIAPACQgGgPgIgMIgTgUQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgKACgAabjGQgTAfABAkIBHh0QgiAUgTAdgAVkjoIAmAGIAfhGIgtAcIgPgDgAnHmCQgFAMAGABIAfAFIAQAfQAVAJAIAXQAHAUgGAVIAKAWIAegQQgBgbAJgPQAKgSgCgWIgIgmQgJgqgEgQQgKgegQgXQgXgfgPgQQgXgZgZgPIhEgqQgpgZhQgHQhUgGgYAXQggAeg6AEQg2AEgLAOQBNABA6AKQBFALA3AbIgEAVQgBADAHAEQAHAEABgBQABgaA7AfQA2AdAgAhQATAUAaAQIAAAAQgEAAgFAMgAb5k2IATAPIAagTIAPg+QABgDgCgHQgCgGgDAAIgUgCgArWmxQAkAdAfAIQgHgWgVgJQgOgHgSAAIgHABgAWPpiIACAUQgKAgAEAPQABADALgDQAKgEgCgDQgGgQAHgWQAIgXgEgOQgUABgBAOg");
	this.shape_71.setTransform(450.1058,970.034);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#DA98BD").s().p("AyWV4QgUgWAFgRIgOABQgDABgFgFIgGgIIgUgaIgGgFQgEgEABgCIAFgTIAeAOIAWAcQAKgQgLgMQgIgKgRgEQgTgngggdIhRjfQgLgXgEgjQgSgJgEgjQgFgmgWgRQgYADgOgDQgRgDgLgOIARgTQADgDAKAHQAIAFADAEIAIgmQABgDgBgHQgBgHgDgBIgXgCIAChDIgQAEQgIACgDgCIgRgOIgJgGQgGgFABgCIAEgZIgoAJQAKgjAHgNIAgg2IADAfQACALAOANIghAZIAmARQAPAMANAFQAPAFAXgBIgQiKQgMASgFAXIgggDQADgaAKgcIAEgqIAUgGQADAAgBgHQgCgIgCAAIgOgBIgdA1QgNgfAagtIgHglQgBgFABgHQABgIACgDQAEgEAJgBQAKgCACAEQALASADAAIASAEIgFgcIAJAGQACACAIACIACgRQAAgCARACIgMglIAfgEQgLgHgKgBQgIgBgSADIALgqIAJAWIAOgpIgZggQgCACgEAKQgEAJgBAIQgQAKgJARQgLATADASIgRANIACgjIgOAXQgBACgIgEIgLgIIAOAgQgMAGgGAGQgFAGgEAKIgEANQgBACgHAAQgHAAABgCIAGgQQADgIABgPQABgQgCgIIgWhPIgVg7QgZhFAKhHQAKhFArg+IA2hPQADgDAPgMQAOgJgBgDQgbABAGgJIAKgUQABgDAEAAIALgBIAXhLQgoAogfAxQgaApgaA4IgoBYQgVAygDAoQgEAvAJBOQALBdABAgIgJBjQgCATgIAZQgJAZgKAQQgqAvgVA+QgEAKgKASQgHARAGAOIgEApQAMAIACgHQADgHgJgHQAQgJAGgSQAGgSgGgRQAHABACgBIAPgIIgIArQgDASAEAaIAHAsIAQBTQALA+AlBgIAcBHIAbBXIgsC2QgPgQACgWQACgOAKgVIgLhkIgXiPIgghfQgfhYgKg5IgKAmIg8hGQACARAGAWIADAWIATBEIArBlIgKArQATAIAHALQAGAKgCARQgCAJADAMIAFAWIAXB2IABAzIgVgKIgghJQgEgJgQhYQgKg+gigSIAJgLQAGgIgdgjQgfgkgegKQgYgWgSgnQgTgtgKgWQgQghgLg+QgMg8AEgeIANhsQAJhXAUg9IA1g2IAmgiQAogjAJgfIAUhEQAJgegFglQgthuA9htIAHgfQALgxAog/QA0hPAOghIAohZQgGgkAcgdIAXgyQANgfANgSIA2hHQAggoAigWIA/gqQAsgeBVg+QBNgyBGgIIBMgJQBxgmBOg3IA7gyIAuggQA3gmA/gDQAQAPAWAAQAMgBAegIQBfgiBrATQAdAFA6ANQA1AKApgBIBBAAIAMgBQAIABABACIAIATIAKgVQAjADAZgEICQgVQAagEArAJQAYAGArAMQAQARAXAQIARALQACABAEgEIAFgFIALATQADAEATgDIBWgSIBHASQALADASAQIAcAYIAtAcQAIAFAVgEQAQgDAOgEIAVAgIARgbQgFguhPgeIAPgMQAGgFAAgEQAAgNgfgGQglgHgJgSIAXgNQAEgCgGgHQgGgIgFgBQgXgCgCAEIgJASQgRgggtgXQgpgVgwgGIgogYQglgBgsgPQgsgQgWAAIg2gRQgXAHgJgDQgJgDgEgGQgDgFgBgKQgEAChBAJQgjAFgVAdQgOAAAAACIACAPIgKABQgCAAgIAJQgFAEgPgCQgOgDgGgFIAjgLQAGgCgFgLQgFgLgIgGQBTgmBYABICsATIBOAIQAzAGAKAIQARAMAPAGQANAGAWAGIAtAwIADAOQADAIAEADQAEACAMADQAMACAAgBIAngmIASAVQACADAHgEIAMgJIAmAeQAJAHAJAMIAQAUQAEAGAUAQQASAOAFAIQAaAkAJALQAXAZAZALQAjAPAYARIASAOQADACgHAGQgHAHgFACQgEABgEgCIgMgKQgbgEgrAFQAPAYATARQAWAVAXAFIBcAWQAGACAKAIQAIAHAEAGIAHgMQABgCAFADQAGACgBACIgKANIAyA6QAFAFAMgCQAMgCAHgGIA8AUIgthLQgMgUgQgIQgOgGAAgEIAAgJQAAgEAVAHIADgJQABgCAFgEIAFgDIAFALQADAFACgBIAQgBIAhA7IgLABQgBAAAAABQAAAAAAABQAAAAAAABQAAABABABIAEAGIAaAbIAHgKQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgCAKQgBAFAXAOQAXAPAQAEIAoAJIgDAyQAAAAABAAQAAABAAAAQABABAAAAQABABABAAIAGACIADAOQABAEASgEIABADQACAFACAAIAagEQAHAHgEARQgDAOgHALQANAMAEAIQAEAKgGAPQgDAIAAAQIAAAYIgHAtIgGAJQgEAGACACIAOANIgPADQgDABgCAFQgDAGADAAIASAGQABAAAAAAQAAABABAAQAAABAAABQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIgMAAQAXAcgJAwIAVgBIgPAcIgFBBQgDApAFAbIALA3QAFAWgIAbIgOAuIgWBXQgCAJAdACQAhACACAUQgDAIADAAQACABAFgGIANgmQABgDAKgKQADgCAKARQADADALgBQALgBACgEIANgXQAkgGAdAVQAQALATARQAGADAMgPQAKgLAGAPQALgVgHgCIgugLQgFgBAOgLIgegOQgSgdgDgiQgBgWAGgpIAMhSQACgSgFgLQAJgLACgPQACgQgGgNIgQgBQgEgBgDgRQgFgZgRgaIghgxIhEhOIgfhDIAeAXIAFARQAEANAFAEQAKAIATAFIAAANQAWgGAHgWQAGgWgOgMIgrglIAdgTIArBBQADAEAJAGQAJAGAFAAQAIABAQgQIgiABIACgRQAAgCgQgEIAZgbQACgGgOgKQgQgLgEgEIgqhiIAGgzQgwghgPgjQgFgMABgHQACgHAGADIARAKQAEAAgFgJQgEgJgFgDQgIgDgTACIgXgFIAEgmQALgNgDgNQgEgMgPgJIgugaQgOAGAPAOQAWAWABARQgHADgLgCQgMgCgEgFQgCgDACgFIAFgLIhRhhIgtgWIAPgYIgngTIhIgtIgLAHIhEAHQgUAEgJAAQgNAAgQgJQgMgHgeAAIASgOQADgCAJAGQALAGADAAIBkABQAFgGgBgKQgCgLgGgLIgIgqIAXACQgDgBALgOQAKgNADAGIAIAPIAZAbQAAAMgFALQgDAHgLAUIAcgiQARAKAJASQAHAOADAWIA5A3QACACALADQAKAEAAACIADASQAhgBAOAGIAaAJQAFACACAJQADAHAAAGIgBAQQAAACANABQANABACACQARAMAUAYQASAWANAXIAbAaIAPABQAEAAAIAKIASAbIACAFQABAAAAABQAAABABAAQAAAAAAAAQAAAAAAAAIANgOIAWAlIA2ByIBMCGIAJAeQAWgNADAEIAMAZIAIAEIgHgpQgVgdgLgUQgMgagDgaIAVAEIAUAHIAHgGQAeAQAZAvQAZAugCAhIgRCiIgEBXQAAAKgEALQgFAOgHACIgqAJQgLADgCAUQgBATAGAMIAHAPQABACAPgDIAGA1IATAgQgKAAgNADQgPAEgCAGQAHAVgDATQgEAVgSAMIAEAyIhGAzQgZAchABnQgtBIgqATIhJAhQgxAWAgBFQABAag6AKQgiAGgcAZQgPAOgeAnIAegHIgGAWIAugBIAVgyIgDgVQgBgCAxgBQA2gBAQgfIAUAZIA2gqQAMgKADgPQACgOgGgPIAOgwQAKgkAigjQAXgXAtgiQgBgpAKgaIAiAJQAHACgFAjIgMAJQgDAWgsAvQgvAzgJAaIgVBBQhHBshSAeQgVAIgjAFQgeAFgKAGIhqA9QgkAUggAHQghAHgrgDIhagGQgcgCgjAGQglAFgYAKQgwAVgLAEQggALgeAEIhvAMIhKgEQgCAAgGgEQgFgEgBABIgIAIQgZgugfACIADARQAAADgIADQgHACgEgCQgYgJgbgYIgsgrIgxgwIgiAiQgLgFgJgJQgKgLAAgJQALgBACgCQACgCgKgEQgJgaAIgoQgfgihMgOQgTgmACgTIANhRIASAqQAMAYAUAQIgZh/QAAgSgBgIQgDgNgUgJIgZBIIgmhnQgIgWAXgsIARAXQgHgfACgNQACgWAYgNIgGAwIgEAbQAAAPAQAKIABgVQABgDAGgCQAHgDABADQAGAOgMAUQgOAWAFATQALgHAJgOIANgYQAUgeAygIQAGgDgDgLQgCgLgHgHIAlgZQAEgCAKgPQAJgPAGgCQADABAIALQAGAJADgCIAQgOIgdgKIAtgMIAlgJQAVgGANgIQAUgMAUAEQAUADAJAQQgRAIgDgCIgQgQQgEAAgFAKQgGALACAEQAIAOAUAPIgPAxIgPgqQgGgHgQgEQgQgDgOABQgUABgWAWQgSATgFgCIgXgLIgHACIAGAgIAUgKQAFgDAMAUIARgVIACByQAOAAAOgJIAXgRIA0gBQgIgTgBgHQAAgHAMgGQAMgGAIAEIgVAVQAXAAABgGIAFgbIAXAwIAFgpQAIAHAJgHQAWAiANAKIATAMQADADgNAOIBBARQAEABAGAGQAHAGgBADQgBAMgWAHQgWAGgQgEQAPgDADgDQADgEgIgEIggACIAbAhIg0gEQgGgOgIgGQgHgFgUgHIApgSIgKgEIgggEQgFAAgHAHIgMAPIgqgdQgKgHgRAAQgTAAgEALQgJAcAKAgQAFATATAmQAJARAeAGIgbgmQgLgPABgSQABgUAPgMQAKABANAIIAVAOQAVAPApALQA0AOANAGQBHAfBBADQBLADA+giIBYg5QACgBAKACQAKABACgBIAMgNQAZgcAxgQQAcgJA7gOQAigKA5g3QA8g5AEgiIidB6QgkAcgiAGIA4hNIAagwIARgaQAJgNADgNQAGgaAAgGQgCgQgTgNQAEgOAXgbQATgYANghQALgfACgfIAFhOQACglAbg6IAMhHQAJAJADAAQACAAAAgGIgsiuQgGgYgXgYQgWgYgZgNQgTgJhHgIQgzgGgcgkIgkgwQgWgdgUgPQgSgOgrgXQgpgWgTgPIhdhLIgugfQgKAbADAVQADAWARAVIA+AIQADAAACAFQADAGgBABQgMAIgGAAIgygDIgug6QgCgCgGADIgIADIgQAOQgFAEAaAOIgLAJQgVgZg5gdQg3gbgVgdIhZgvIgegRQgRgIgPgEIhigYQg3gJgvAOIBDAKQALABAPAMIAXAUIApAgQAWgOAKACQAHACACAHQADAHgHAFIAYAZIAQAFQADABgEgOQABgHACgBQACgBABALIAnAJIAMAiIAGgiIAQgCQACAAABAFIAAAHIgGAoIACAdIgRgIQgFgCgGASQhAgDhAgQQhEgQg1gbIgsgXIgqgGQAPgCADgDQADgDgLgDQgZgOgZgDQgcgEgSAMIgUAVIgMgNIAYgMQATgJhMgCQhngBgZgEIhbgVQg2gMgoABIhTANQgdAEgfAOQgSAIglAVIhCAlQgOAJgPALQgTAPgHAKIhOBwIgpBCIAmgHQAGgBAGgMIAIgRQAQAAAKgDQAKgCALgHIgCAJQgGAWAmgjQAkghAlgxQArg4A2glQAEADACAHQABAHgBAHIgNBAQgEASABAEQABAKAMAPIgqAYQgbAPgPAdQgMAWgIAiIgjApIhMAFIgVARQgDACgGgCQgGgDgBgBIhXBXQgCABgFgCIgFgDIARgfIguABIASgjQgZAEgWANQgQAKgVATIgHAEIAGAMIgMAjIAoADIgQAMQgDACAPAHIhmA6QgGAAgFgKQgGgLACgHQACgHAJgJQAKgJAFgBIAFAYQAAADAJAAQAHAAACgCIAagzQgagWgtAoIiQB8IgLAKQgIAGgDgCIgVgQIgJAFQgGADgDAAIgbgDIAaATIgMARIAlgRQAQANAMACQAIABAIgHIALgOQAXgZA1glQAgARAvgXQA4gcAcADIg1A9QghAjgTAIIgoARQgaACgMAJIisB5IgnAlQgxAugaA+QgEAJgDARQgEAQgEAKIgVA2IgSBAIgagNIAQAlQAMgBAHgKQAFgJgBgMIAQAQIgDgPQAAgCAFgDQACgBAAAAQABAAABAAQAAAAABAAQAAAAAAABIgDAxIgPATQAbATgGAYQgJAhAEALIAJgaIAEAPQABADAEgCQAEgCABgDIARgyQgDgWACgKQACgRAagHQABAfgHAbQgKAggWAUIAZAyIgNgDQgIgBgCABIgTALIgJASIALABIgPBNQgBADgPAaQgLATAIATIAdghIAQAMQgFANgPAHQgQAGgVgDQgDAIAAAPQABAOAFAJIAlgmQAFARgeAUQglAZgHAjIAzgTQADAJgEAPQgDAPgHgDIgVgKQgDgCgGAKQgFAJACAEIAVAyIgPAGIA4AwQABADgGAGQgGAGgEgCIgdgOIABAhQgJAJgFAOQgFANADAFQAMgFAJgCIATgBIABgLQABgDAFgEQAGgEAAACIgCAaIAPgOQADgDASgGIgbArIAGA8IgKAUIAvBQIAOggQADAkAGAXIAPAyQABAFgDAKQAAADgRgGQACAdgNASQgIANADAOIAGAYIADA4IATBGIgDAbQAAAHAZANQAPAJAAARQgBAOAJAAIAOgBQgLAWAaAaQAaAagIATIgQgUQgCgCgFAIQgFAIABACIArA9IgCAAQgQAAgSgVgAFxCVIgZA6QgHARABATQABANAGAXIANAxQASBEBHA+QBBA4BTAeQAcALArgBIBIgEQAWAAAQgHQALgFATgPQATgOAzgGQA0gGAVgPIhIAAQg6gBhDgQQhRgVgHgdQg1AKhGg/IgfgdQgigcgSgTQgagcgOgdQgegUABguQADgPgEAAgA9NGTQgFANAAAaQABALgCAVQADASAVAGIAZhMIASgkIgfgOQgWAPgIAQgA73FDQAdgLATgrQATgngDgjgA3qgSQgJAjgHA1IgKBZQgDAbAKAcQAJAaARAOQANALAWgXQAZgagBgzQAAgCAFgCQAGgCgBACIgDARQgBACAGABQAGABADgCIAEgGIADgHIAHhMIAChSIADgaQABgTgGgGQgbgZARgMQAJgGgBgSQgBgGgKgHQgKgHgFADQgdARgPAtQgPACgBADIgHAVIgQgJgAw2ptIgOAJQgRALgmATQgoAUgQAJQhDAnhmBUQgJAIgNAVIgVAfIgcAeQAWACADgFIANgYQgEgLAMAYIASgjIAJAKQAcgoAjgbIBQg+ICZhjQACgBgCgHQgBgGgCAAIgBAAgAtuqiIgKAGIgfAMQgDABABAJIADAQIAmgNIgVACQgDABgDgFQgEgEADgBIAlgGIAEgEIgDgPIgBgBIgHACgAUutIQgKABgKAEQAMATAWAYIAeAgIAKA4IBKBEQAGgqgTgfQgVgigkAGQAOgSgMgVIgdgmIgSgYQgCgCgGAAIgFAAgAS8tUQAFAJgCAaQgBARASAAIAyABIgGg2IgQANIgIgPgASGt4QgLAEADADIANAdQAIASAIAFQAFAEAMgLQANgKgFgEIgYgRIgKgVQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgIACgAwnu8QgZANgNAXQgEAGAIAMQAGALAJAHQA0giAVgqQgLgEgLAAQgQAAgQAIgAHVvjQASACAFgHQACgDgEgIQgEgJgEAAIgSgBIgPgOQgDgCgVAJQgZAKgWgCQAOATAPAFQAMADAYgJQAKAGAQABgAMfzcIAbAVQADgJgKgOQgKgOgKgBIgpgDIAMAHQAGADgBACIgBASIAOgJQAFgDADAAIADACg");
	this.shape_72.setTransform(325.5205,951.3493);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},96).wait(1));

	// Bouton_Refroidissement
	this.boutton_refroidissement = new lib.Bouton_Refroidissement();
	this.boutton_refroidissement.name = "boutton_refroidissement";
	this.boutton_refroidissement.setTransform(979.4,1378.65,1,1,0,0,0,259.9,84.9);
	new cjs.ButtonHelper(this.boutton_refroidissement, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.boutton_refroidissement).to({_off:true},96).wait(1));

	// Video_Refroidissement
	this.instance_2 = new lib.an_Video({'id': 'instance_2', 'src':'videos/refroidissement.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance_2.setTransform(1002.1,676,4.4711,3.5999,0,0,0,200.1,150.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({_off:false},0).wait(1));

	// Fond_Frame
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E4496B").s().p("EBIpADuQyKjYrXhVQwEh6tzAfQlXALlyAnQlDAhmHA8IyeCyQ5OCn0jjqQgOgDgDgRQgDgOAFgLQAFgMAMgJQAQgKARADQNrCbQKgbQPFgZOwiyQPQi4PcgGQN+gFQyCPIY7EKQANADAEAVQADAVgIAGQgXAWgWAAIgJgBg");
	this.shape_73.setTransform(1108.0982,946.0058);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E4496B").s().p("AMkAUQw4i/v0ALQr2AIqyBHQu2BiwDC+QgoAIgZgGQgfgHgXgbQAVgYAcgLQATgHAogGIXwjqQN+hwNmgRQR3gWQ0DCQQPC6PAAiQQqAmOliZQAYgEAUAaQATAZgLAVQpwBxrhAPQh7ACh8AAQynAAzKjbg");
	this.shape_74.setTransform(1431.5734,838.78);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E4496B").s().p("Ag8BkIuLiQQwqjGxIA7QvzA2xtEVQgjAJgagMQgdgNgIgoQENhGFLhBQDRgpGIhFIA6gKQFVgqCrgRQEbgeDqgLQRKg1RdDQQJBBrJuBGQI9BBJ8AjQPgA4OEgxQPDg1OQiwQAbgFAWAUQAWAVgJAaIvlCiQtqBou6AAQzUAA1Yivg");
	this.shape_75.setTransform(691.9786,1076.3392);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E4496B").s().p("AmTBkQgKgGgHgJQgHgHAEgSQADgTANgCINBiRIAABUIskCBIgEAAQgJAAgMgHg");
	this.shape_76.setTransform(2055.5888,863.4432);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E4496B").s().p("ALmCAIkNgoQk0g3l7glQj0gZm9ghIABhMQOdA5NNCZQAjAGABASQABAog2ADIgEAAQgbAAhOgLg");
	this.shape_77.setTransform(90.227,972.2788);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E4496B").s().p("A+bCUQs1hMwXjIQgNgCgIgNQgIgMABgIQADgiA5ABQAVABBcAPIUmDOQJVBIIuAUQJPAVI4gkIUJieIMQhoQNshSOlBLIAABIIlVgVQmWgRlKAGQmGAHlYApImTAwInUBDQmvA/ixAWQlSArkRARQlfAVlnAAQpDAApZg3g");
	this.shape_78.setTransform(1713.7691,977.5833);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E4496B").s().p("AI1DtQpphZoniBQmqhimCg/QmjhDmTgdQtqg/vZBFQtHA7vsChIAAhUQAYAKAggEQATgCAqgKQQEinN3gzQPug6OZBUQFQAfFkA+QE+A2FvBWQHrByIpBWQN8CKQfgJQPPgIPQiDIX8j0QAPgCASAHIAZAJQAIABACAaQADAagJABQxEDKtWBfQtQBetiABIghAAQudAAruhsg");
	this.shape_79.setTransform(593.8772,861.2964);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E45988").s().p("Eh0sAfUQgWAXgigIQgngOgSAAIsogCQgHAAgTAJQgSAHgGgCQg9gZhfAUQheATgcgLQgtgTg7AFQhCAJglABIlHADIh1gOIxigFMgABggcQG9AhD0AZQF8AmE0A3IENAnQBUAMAZgBQA2gDgBgoQgBgRgjgHQtMiYufg5IAAvYQPsiiNHg7QPYhENrA+QGTAdGiBEQGDA+GpBkQIoCAJpBZQL8BvOxgCQNigCNQheQNVhfREjKQAIgCgCgZQgCgagJgCIgYgJQgTgHgOADI38D0QvPCDvPAIQwfAJt9iKQophVnsh0QluhVk+g3Qlkg9lQgfQuZhVvuA6Qt3AzwECoQgqAJgTADQggAEgYgLIAAsjMFH2AALIAAMkItCCSQgNACgEATQgDASAHAHQAHAJAKAGQAOAJALgCIMliCIAAPmQulhMtsBTIsQBnI0LCfQo3AkpPgVQougUpWhII0ljPQhdgPgUAAQg6gBgCAhQgBAJAHALQAJANANADQQWDHM2BMQPNBaOVg4QESgRFRgqQCygXGvg+IHUhEIGTgvQFXgpGGgIQFKgGGXASIFVAVMAAAAgLMhpSgACQgLAAgyALQghAHgbgMQgZgMgvABQgtABgaAJQgZAJgagGQglgIgIAAI23ADQgFAAhPAMQguAIgqgTQgWgLgvACQgbABgxAGIhpAOImdgDIiDgKQhbgHgTAAQhAABgsAVQhVgdilASQi4AVhZgPQgigGgmABQgsAEgcABIkSAFQgHAAgZgLQgXgKgHADQg9Ach9gSQiOgVhMARQghAIhQgBIiQgBIhoAEIlqgCQgGAAhKgNQgwgIgfAQQgZAMgfgGIg2gJIkvgDMg5DgACIhcADIrzAAIhsgGQhAgEgqANQgYAHgYgCQgdgFgTAAIlEgJQhaAthvguQgyAYgvAAQgqAAgpgUgEhG5APWIOLCRUAl4AE2AfYgDvIPliiQAJgbgXgVQgVgUgbAFQuRCxvBA1QuFAxvfg4Qp8gjo9hBQpwhHpAhrQxejQxJA1QjrALkaAeQirARlWAqIg5AKQmIBFjSApQlKBCkNBGQAIAoAdANQAZAMAkgJQRtkWPzg2QD8gND7AAQNGAAM1CYgEA0WgFTQLYBWSKDYQAaAFAcgaQAHgGgCgVQgEgVgNgDI47kLQwyiPt/AFQvbAGvQC4QuxCzvEAZQwLAbtribQgRgDgPAKQgMAJgFAMQgFALADAOQACARAPADQUjDpZOimIScizQGIg8FEghQFygnFXgLQCxgHC3AAQLZAAM1BigEBIWgUvQVIDxUfgZQLigOJwhyQALgVgTgZQgVgZgXAEQulCYwqgmQvAgiwPi7Qw1jBx3AWQtmARt+BwI3wDqQgoAGgSAHQgcALgWAZQAYAbAeAHQAaAFAogIQQCi9O1hjQKyhIL3gIIBuAAQPAAAP/C2g");
	this.shape_80.setTransform(1049,973.6397);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#46893D").s().p("AgdD8QgRgIAAgSIgDm/QgBghAsgCQA0gDAAAmIAEG4QAAAhgmAFIgOABQgPAAgMgGg");
	this.shape_81.setTransform(468.2742,675.6923);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#45853C").s().p("AAJB0QiEgEhLAAIDIjjIDFDcQhHALhmAAIgRAAg");
	this.shape_82.setTransform(374.45,571.5038);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#45853C").s().p("AAFhyIDGDhImUAEg");
	this.shape_83.setTransform(637.9,613.05);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#45853C").s().p("AAAhwIDMDgImYABg");
	this.shape_84.setTransform(1857.9,613.425);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#46893D").s().p("AAChyIDHDhImSAEg");
	this.shape_85.setTransform(106.4,675.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#45853C").s().p("AgBhyIDIDhImNAEg");
	this.shape_86.setTransform(1984.725,680.775);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#45853C").s().p("AAEhxIDJDiImZABg");
	this.shape_87.setTransform(293.125,675.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#46893D").s().p("AgBh0IDRDnImfACg");
	this.shape_88.setTransform(1702.775,573.15);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#46893D").s().p("AAGh2IDHDmImaAGg");
	this.shape_89.setTransform(1490.75,600.55);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#46893D").s().p("AgoEBQgegFACgNIApnLQACgSAHgHQAIgKATgCQAagCARAKQASAKgBATIgjG2QgBAPgLAKQgEADgPAHQgJAFgPAAIgTgBg");
	this.shape_90.setTransform(824.852,584.6886);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#46893D").s().p("AgED9QgbgLgCgeIgimxQgCgQALgJQALgJAWgBQAZAAALAIQAMAIACAUIAsHLQABAMgdAFIgUABQgPAAgKgEg");
	this.shape_91.setTransform(769.8946,584.7477);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#46893D").s().p("AANEDQglgEgDggIgqnMQgBgNAfgGQAfgGAPAJQAOAHAGAKQAIAKABAQQACAfAVDAQAOCGgEBZQAAAOgWAGQgMADgMAAIgKAAg");
	this.shape_92.setTransform(131.3167,599.9836);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#46893D").s().p("AAEhzIDIDjImXAEg");
	this.shape_93.setTransform(1134.825,637.025);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#46893D").s().p("AgtD/QgbgHACgSIAtnJQACgPATgJQARgIASACQAXADAKALQAIAJgBASIgiGrQgBAUgIAKQgHAJgSAGQgKADgMAAQgNAAgNgEg");
	this.shape_94.setTransform(1398.4237,658.849);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#46893D").s().p("AgZEDQgaAAgLgQQgJgNACgSQATiVAGhDQALh4gDhiQgBgkA1AAQA5gCgDAmIgkG4QgEAqg1AAIgCgBg");
	this.shape_95.setTransform(495.8815,675.7999);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#46893D").s().p("AgBEBQgcgGgBgNIgqnRQgCgOASgKQAPgIAQgBQA5gCAEAsIAlGqQADAjgiAOQgJAEgLAAQgLAAgMgEg");
	this.shape_96.setTransform(1343.2811,659.0521);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#45853C").s().p("AgQEDQgbgEAAgLIgLnVQAAgeAqgDQAbgDAMAIQANAIAAAUIAPG3QAAAdgjAOQgHADgNAAIgQgBg");
	this.shape_97.setTransform(159.8751,600.0265);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#45853C").s().p("Ag5D9QgQgJACgTIAvnLQACgOAUgHQARgHASACQATACALAKQALALgBAQIgnHBQgCARgSAJQgNAGgTABIgFABQgWAAgMgJg");
	this.shape_98.setTransform(1754.1979,679.7578);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#46893D").s().p("AgeDfIgsm+QgCgPAKgKQAKgJAUgCQATgCAUAHQAYAIACAPIAvHOQABAMgUAJQgRAIgRAAQgwAAgFglg");
	this.shape_99.setTransform(440.7953,675.8539);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#46893D").s().p("Ag1D7QgVgMADgRQAThjALiAIANjjQABgMATgIQAOgHAQAAQA2gCgDAlIgkG+QgBAQgQALQgNAIgQACIgKABQgSAAgQgJg");
	this.shape_100.setTransform(186.6896,600.0042);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#46893D").s().p("AgbD/QgZgJAAgTIgBm9QAAgWAVgMQALgHAZABQAcACAAAKIAVHFQABATgIANQgIAMgOAEQgNAEgLAAQgOAAgNgEg");
	this.shape_101.setTransform(1726.7556,679.4748);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#46893D").s().p("AAEEFQgXgEgIgOQgFgHgCgXIgpmyQgCggAhgIQAYgFAVAIQAYAIACASIAxHOQACAXgbAHQgMAEgNAAQgKAAgMgDg");
	this.shape_102.setTransform(1698.9266,679.7513);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#45853C").s().p("AgREAQgigLAAgcIACm8QAAgQASgJQAQgHASABQAbACAJAMQAHAIAAAUIAGHJQAAALgcAFQgMACgJAAQgLAAgJgDg");
	this.shape_103.setTransform(1370.775,658.8014);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#45853C").s().p("AgbD8QgZgJAAgSIABnUQAAgIAcgDQAagDALAEQAOAEAJAJQAKALABALIAFGoQAAAngfAIQgMAEgLAAQgNAAgNgFg");
	this.shape_104.setTransform(797.325,584.624);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#43813A").s().p("AgYD/QgXgFAAgLIgCnMQAAgQAMgJQALgJATgCQAagCAPAJQAQAJAAATIAAHAQAAAOgNAHQgIAFgSAFIgMABQgKAAgNgDg");
	this.shape_105.setTransform(1756.325,1388.266);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#43813A").s().p("AAChwIDODdImeAEg");
	this.shape_106.setTransform(1972.55,1402.525);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#43813A").s().p("AgDhvQA4AqA2A8QAgAjBFBTImfACg");
	this.shape_107.setTransform(83.125,1333.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#43813A").s().p("AAJh1IDFDfImcAMg");
	this.shape_108.setTransform(289.6,1283.225);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#43813A").s().p("AgEhxIDRDiImZABg");
	this.shape_109.setTransform(822.875,1411.65);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#43813A").s().p("AjLBzIDNjmIDKDng");
	this.shape_110.setTransform(616.35,1320.325);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#43813A").s().p("AABByQiEgEhJgBIDMjfIDNDbQhLAKheAAIgjgBg");
	this.shape_111.setTransform(1822.925,1257.5654);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#43813A").s().p("AAIBzQi0gCgiABIDWjkIDHDbQhDAKhjAAIghAAg");
	this.shape_112.setTransform(1457.775,1383.2888);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#45853C").s().p("AAHhwIDGDcImZAEg");
	this.shape_113.setTransform(504.9,1263.35);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#43813A").s().p("AABh0IDODnImeABg");
	this.shape_114.setTransform(160.1,1388.15);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#43813A").s().p("AjOByIDWjjIDHDjg");
	this.shape_115.setTransform(1236.625,1363.45);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#45853C").s().p("AgRECQg4gDAEgnIAtm8QABgPASgJQAPgHATACQAbABAJALQAHAJgCATIghG4QgBASgSAKQgOAHgRAAIgEAAg");
	this.shape_116.setTransform(1429.0779,1241.1673);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#45853C").s().p("AgJhvIDcDbImlAFg");
	this.shape_117.setTransform(290.075,1332.45);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#45853C").s().p("AAKEEQgfgBgBgIIgunTQgCgPAIgLQAHgLAQgEQAagGAWAIQAXAJACASIAjG1QADAfgWAQQgHAFgWAAIgLgBg");
	this.shape_118.setTransform(1372.8178,1241.2193);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#45853C").s().p("AgDD/QgagJgBgKIgtnPQgCgNAOgKQAMgIAQgBQAbgDAQAIQASAIACATIAwG4QACASgPANQgMAKgRAFQgEACgGAAQgLAAgQgGg");
	this.shape_119.setTransform(1728.2792,1388.8119);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#45853C").s().p("AgYECQgaAAgNgNQgMgMACgUIArnJQABgJAcgDQAagDALAFQAoAQgCAUIgmG1QgBAUgTALQgPAIgUAAIgFAAg");
	this.shape_120.setTransform(975.4385,1316.2735);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#45853C").s().p("AAPEFQgZAAgNgKQgMgKgBgTIgjm+QgBgPAMgKQANgKAUgBQAYgBAOAJQAPAJACATIAsG3QADAXgSAMQgQALgYAAIgCAAg");
	this.shape_121.setTransform(919.9365,1316.6458);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#45853C").s().p("AgJEAQgTgIgCgPIgsnJQgBgOAKgKQAJgJAQgDQAWgFAVAGQAaAHABAQIAtHaQABAPgVAGQgOAEgRAAQgTAAgOgHg");
	this.shape_122.setTransform(139.1201,1262.4238);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#45853C").s().p("AgtD9QgbgJABgPIAtnbQABgKATgCIAZAAQAPgCASAIQAVAIgBAMIglG/QgCAUgKALQgJAJgSADIgKABQgOAAgRgGg");
	this.shape_123.setTransform(195.4234,1262.3034);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#45853C").s().p("Ag3D7QgQgLABgSIAnnDQABgNAQgIQAOgIARAAQAZgBAOAIQAQAJgCATIgiHAQgCAQgSAJQgOAHgRACIgGAAQgUAAgOgIg");
	this.shape_124.setTransform(1784.3504,1388.5047);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#45853C").s().p("AgWD+QgYgHAAgNIgHnGQAAgPAHgJQAIgIATgEQATgDAVAHQAYAHAAAQIAJHGQABANgMAIQgJAHgNADQgJACgJAAQgMAAgNgEg");
	this.shape_125.setTransform(947.3995,1316.3087);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#43813A").s().p("AgREBQgdgEgBgLIgInJQgBgmAkgFQAagDAVAKQAVAKAAASIAIGxQABAjgiAMQgHACgLAAQgJAAgNgCg");
	this.shape_126.setTransform(1401.249,1241.05);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#45853C").s().p("AAAEFQgbgBgMgJQgOgJAAgUIAAm9QAAgOAJgJQAJgKARgCQAUgEAUAHQAWAHABAQIAJHGQABAUgPAKQgNAJgXAAIgEAAg");
	this.shape_127.setTransform(167.4258,1262.3433);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#477F39").s().p("EChEACAIzEADIhKgDMhv5AACMjA3gAFIAAkDMFH1AALIAAEDg");
	this.shape_128.setTransform(1049.025,759.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#63B352").s().p("Eij6ARFMAAAgiUMFH1AALMAAAAiUgEBk2AClQghAIACAhIApGyQACAXAFAHQAIAOAYAEQAaAFAVgGQAbgHgCgWIgxnQQgCgRgYgJQgNgFgOAAQgKAAgJACgEBuJACrQgUAIgCANIgwHMQgCATAQAJQAOAJAagBQATgBAOgGQASgJABgQIAnnDQACgQgLgKQgLgLgUgCIgIAAQgOAAgNAFgEBpYACrQgUAMAAAWIAAG+QAAATAaAJQAZAIAbgIQAOgEAIgLQAIgOgBgSIgVnHQgBgKgbgCIgHAAQgVAAgKAGgEhfnACAQgTADgKAIQgKAKABAPIAtHAQAEAlAyAAQAQgBARgHQAVgKgCgLIgvnQQgBgPgZgHQgQgGgQAAIgIAAgEhWKACAQg3AAACAkQACBigKB4QgHBEgSCVQgDATAKANQALAQAZAAQA5ABAEgrIAkm5QADgkg2AAIgDAAgEha2ACBQgrACABAhIACHBQABARARAJQAQAHAZgDQAngFgBghIgDm5QgBgjgtAAIgIAAgECPGAIoIGOgDIjJjigEiWbAHyIGTgDIjIjigEh5TAHxIGagBIjJjjgEAtlgAoQgRABgPAIQgRAKABAOIArHRQABANAcAHQAbAGAQgHQAjgOgDgjIgmmrQgEgpg0AAIgFAAgEA2hgAhQgTAJgCAPIgtHJQgCARAbAIQAZAHAYgHQASgFAHgJQAIgKABgVIAimrQABgRgIgJQgKgLgXgEIgHAAQgOAAgPAHgEAxygAiQgTAJAAAQIgCG8QAAAcAjAKQAPAGAbgEQAcgFAAgLIgHnKQAAgTgHgIQgJgMgagCIgHAAQgPAAgNAGgAKOB0IGYgEIjIjjgEiGYgJ1QgQAAgQAHQgTAIAAAMIgODjQgKCAgUBjQgDASAWAMQAUALAXgDQASgCAMgJQAQgKACgRIAjm+QADgkgxAAIgEABgEiLIgJ0QgqADABAeIAKHWQAAALAbADQAaAEAMgGQAjgNgBgeIgOm3QgBgUgMgIQgKgGgSAAIgNABgEiQAgJzQgfAHABAMIAqHNQADAhAmADQARACARgFQAWgGAAgNQAEhZgOiHQgVjAgCggQgBgPgIgLQgGgJgOgIQgKgFgPAAQgKAAgMACgEB7MgB6IGZgBIjOjhgEhDZgB8IGVgEIjFjigEBB0gD2IGbgGIjIjngEgi3gMMQgUABgJAKQgHAHgBASIgqHMQgBANAdAFQAdAEAPgHQAPgIAEgDQAMgKABgPIAim3QACgTgTgKQgOgIgUAAIgIABgEgshgMBQgLAJABAQIAiGxQACAeAbAMQASAGAcgEQAegEgCgMIgsnNQgCgTgLgJQgLgHgaAAQgWABgLAJgEgnsgMLQgcADAAAIIgBHWQAAASAZAJQAYAIAagHQAfgIAAgnIgFmpQgBgLgKgLQgJgJgOgFQgGgCgMAAIgUABgEBi5gIJIGhgCIjTjogEhsggIfQBLABCFAEQBxABBOgMIjGjeg");
	this.shape_129.setTransform(1049.025,637.05);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#63B352").s().p("Eij6Ab6MAAAg3tQAJACAggCQAigDALACQA5ANBOgFICDgIQAoABBaAGQBQADAxgRQAJgCAjAIQAnAJAMAAMA2CAABQA/gVBSAFQAuADBgAIIHpAGQCIgrB+AuQCjgkEMATIDCAOQBmAFA+gKQBggOCBAAIDbACQAygBBSAFQBcAFApABIN0AHQDSgvDBA1QAngbBNAIQBjALAIgBQA9gKBCAEIB2AGMBCvAABQCVghEIAVIC1ANQBZAEAtgLQBDgQBTAGICPAMIPVACQAYAAAugHQArgFAhAMQAVAIAwgKQA6gNAJAAIUdgDQBJAYBpgGQA7gDB3gJIMbgHQDfAuELgsIWVAAIBzASQBlgUBZAAQBfAABcAVQASgDAngJQAjgHAYAAIPYADMAAAA3+gEgmhAMIIGZgBIjSjjgEBpkACuQgPABgMAIQgOAKABANIAtHQQABAKAbAJQAZAIAMgEQASgFALgKQAQgNgCgSIgxm5QgCgTgSgIQgNgGgSAAIgNABgEBzLACsQgSAAgOAIQgRAIgBANIgmHEQgCASARALQAPAJAYgBQASgCAOgHQATgJABgQIAjnBQABgTgPgJQgNgHgVAAIgFAAgEBuZACrQgTABgLAJQgMAJAAAQIACHNQAAALAXAGQAVAEAPgDQASgEAIgFQANgIAAgOIAAnAQAAgUgQgJQgMgHgUAAIgKABgECNEAKsIGfgEIjOjegEiOIAIgIGfgCIjOjngEA//AHuQB6ACBOgNIjIjcIjXDlIAgAAIC3ACgAaFEmIGeAAIjHjkgEiaKgAKIGggDQhFhSgggkQg2g9g5gpgEh53gAQIGlgFIjcjcgA0mokQgUABgNAKQgMAKABAPIAjG/QABATAMAKQANAKAaAAQAaABAQgMQASgMgDgXIgsm4QgCgTgPgJQgNgIgVAAIgFAAgArhokQgcADgBAKIgrHKQgCATAMAMQANANAaABQAYABARgKQATgKABgVIAmm2QACgUgogQQgHgDgNAAIgSABgAwMojQgSAEgIAIQgIAJABAPIAGHHQABANAYAHQAWAGAVgEQAOgDAJgHQALgIAAgNIgJnHQgBgQgYgHQgOgFgNAAIgOABgEhGygCHIGYABIjJjogEh54gH3IGdgMIjFjggEiOzgRCQgQADgJAJQgKAKABAOIAsHKQACAPATAIQAPAHATAAQARAAAOgEQAVgGgBgPIgtnbQgBgQgagHQgMgDgMAAQgKAAgKACgEiKCgRBQgRACgJAKQgJAJAAAOIAAG+QAAAUAOAJQAMAJAbABQAbABAOgKQAPgKgBgUIgJnHQgBgQgWgHQgNgEgNAAIgPABgEiFegRBQgTACgBAKIgtHcQgBAPAbAJQAXAIASgDQATgDAJgJQAKgLACgUIAlnAQABgMgVgIQgSgIgPACIgPAAIgLAAgEhYNgLDIGagFIjGjcgEB1ugMAQBJABCFAEQB0ACBYgLIjNjcgEAx+gUTQgQAEgHALQgIALACAPIAuHUQABAIAgABQAfACAJgGQAWgQgDgfIgjm2QgCgSgXgJQgNgFgNAAQgLAAgMADgEA7TgUOQgSAIgCAPIgtG+QgDAnA3ADQAVABAPgIQASgKACgTIAhm4QABgUgHgIQgJgLgbgCIgGAAQgPAAgNAGgEA2tgUVQgkAEABAmIAIHKQABALAdAEQAbAFAOgFQAigMgBgiIgImzQAAgSgVgKQgQgHgTAAIgNABg");
	this.shape_130.setTransform(1049.025,1345.425);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AEwCmQmYgrj6g/Ql+hfgxiSQGfAAGVA4QG1A8E6BtIhyCKg");
	this.shape_131.setTransform(1480.575,49.05);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AwGBjQAdgvBIgdQFSiFJjg0QHngpIeARQgYAVgrAaQg7AlgKAHQhNA1gHBHQoVgFmeAgQnzAnmQBgQgMgEgNAFQgQgyAcgrg");
	this.shape_132.setTransform(1317.7807,26.953);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AClCVQougQmRhaQiAgdhTgiQhkgrgsg3QAGgFgDgHQJbgmIsAeQLWAoFBCVQAsAVAUAOQAdAVgDASIgCALQmzAQkyAAQiFAAhtgDg");
	this.shape_133.setTransform(731.3436,235.4774);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AHOEtIleghQjfgXicgZQm6hHimiKQhPhBAnhUQAnhQB3gpQAbgJAJgKQAIgJgFgOIBPACIHKAfQGDAaFIBUQGpBsghCMQgRBNiGA1QhDAZgcAMQguATgJASQgZgBg7AGQgiADgXAAIgWgBg");
	this.shape_134.setTransform(261.8709,85.5696);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AKND3QgTgOgtgVQlAiWrVgnQougepaAmQgOgpAngnQAmgmBJgYQHDiXMAgUQKjgSJkBTQEgAoCtBLQDPBahxBYQh1BdkeA3Qi0Ajk/AcQAEgTgegVg");
	this.shape_135.setTransform(778.3852,219.3404);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AsvD1Qk8gfjthDQkvhWA5hhQA+hrFFhEQDUgsFVgdQAsA3BkArQBTAjCAAdQGQBaIvAQQFnAKJwgXQAJAwgyArQguAnhYAbQmfB/qtAZQieAFidAAQmoAAmogog");
	this.shape_136.setTransform(683.8496,252.0765);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("Aj6GAQAKgRAugUQAbgLBEgZQCEg2AShNQAgiNmohrQlHhTmFgaInKgfQEFhdGhgvQGOgsG3AHQG+AIFqA8QGFBBDLBvQBpA5AKBMQAJBMheA7QjrCSoeBEQlpAul4AAQhTAAhTgDg");
	this.shape_137.setTransform(349.4186,76.5034);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AiYFVQmkgKkZgZQl3ghkohGQhpgZhlguQh1g1AWgcQGQheHzgnQGfggITAEQAIhHBNg2QAJgHA8gkQArgbAXgVQAXABAhgGIA3gKQAUALAhAFQAYAEAsADQGDAYEkAxQGUBFCVBrQBDAwgSA4QgTA4hfAsIB2A5QA7AhAOAmIlTAAIBziJQk7hvm1g7QmVg3mgAAQAyCQF9BgQD7A/GYArQgNAWgbAEQlSAmkUARQjwAOjgAAQhPAAhOgBg");
	this.shape_138.setTransform(1398.6325,40.9425);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AghCQQorgrmRhvIAAiWQMAggKmBrQDrAlCMA1QC4BHgfBVQi+AHi6AAQlKAAk4gYg");
	this.shape_139.setTransform(100.1668,112.9336);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("A39HyIAAm2QGRBwIqArQHoAlITgVQAehVi4hGQiLg2jrgkQqnhrr/AgIAAj5QF4hiIjgrQHkgnHgAOQAEAOgIAJQgJAKgbAJQh3ApgmBQQgnBUBPBCQCmCKG6BGQCbAZDhAXIFdAhQjIA9k6AhQjLAWlkARIhSBKQkrCJphAuQkVAVkmAAQjUAAjdgLg");
	this.shape_140.setTransform(154.625,105.8835);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("As/JTQpngHpMhcQlMg0jWhUQkVhsAQiEQALhZC1hQQBkgsDFhBQANgFAMAEQgVAcB0A1QBlAtBpAZQEpBGF3AhQEYAYGlAKQEnAHFGgTQEUgRFSgnQAagDAOgWIFwAPIFSABQgNgng7gfIh2g5QBfgsASg5QASg5hDgwQiVhrmUhEQkjgxmDgZQgsgCgXgEQghgGgUgLQAKgNAhgKQAsgOAKgFMAnMAAAIC6BNQB1AsA2BFQA8BNg+BDQiPCbnrBVQlzA/nJALQB1Cul0CMQkVBom3A4QoiBFoqAAIhtgBg");
	this.shape_141.setTransform(1448.7504,62.0837);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#4D6E7D","#E5F3F6"],[0,1],0,-770,0,770).s().p("Eij1AqkMAAAhVHMFHqAAAMAAABVHg");
	this.shape_142.setTransform(1049.75,274.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]}).to({state:[]},96).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1048.9,763.5,1049.4,761.4000000000001);
// library properties:
lib.properties = {
	id: '1E2366F731964506B80A9F07A3AC83ED',
	width: 2098,
	height: 1522,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1780316546098", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1780316546098", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1780316546098", id:"an.Video"}
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
an.compositions['1E2366F731964506B80A9F07A3AC83ED'] = {
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