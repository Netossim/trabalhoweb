class MyPaintWorklet {
	static get inputProperties() {
		return [];
	}
	paint(ctx, size, properties) {
	}
}
registerPaint('my-paint', 
MyPaintWorklet);


