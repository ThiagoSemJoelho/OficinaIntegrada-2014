function CommomButton(x, y, imagesrc, here, next){
	this.x = x;
	this.y = y;
	this.w = 208;
	this.h = 109;
	this.image = new Image();
	this.image.src = "resources/images/button/" + imagesrc + ".png";
	this.buttonAudio = new Audio();
	this.buttonAudio.src = "resources/audios/button/click.mp3";
	
	this.draw = function(){
		context.drawImage(this.image, this.x, this.y, this.w, this.h);
	}
	
	this.mouseOver = function(e){
		if(here == "PAUSE"){
			if(manager.pause){
				this.innitialX = x;
				this.innitialY = y;
				this.innitialW = 208;
				this.innitialH = 109;
				
				if ((e.offsetX > this.x) && (e.offsetX < this.x + this.w) &&
					(e.offsetY > this.y) && (e.offsetY < this.y + this.h)) {
					this.x = this.innitialX - 5;
					this.y = this.innitialY - 5;
					this.w = this.innitialW + 10;
					this.h = this.innitialH + 10;		
				} else {
					this.x = this.innitialX;
					this.y = this.innitialY;
					this.w = this.innitialW;
					this.h = this.innitialH;
				}
			}
		} else {
			if(screen.scene == here){
				this.innitialX = x;
				this.innitialY = y;
				this.innitialW = 208;
				this.innitialH = 109;
				
				if ((e.offsetX > this.x) && (e.offsetX < this.x + this.w) &&
					(e.offsetY > this.y) && (e.offsetY < this.y + this.h)) {
					this.x = this.innitialX - 5;
					this.y = this.innitialY - 5;
					this.w = this.innitialW + 10;
					this.h = this.innitialH + 10;		
				} else {
					this.x = this.innitialX;
					this.y = this.innitialY;
					this.w = this.innitialW;
					this.h = this.innitialH;
				}
			}
		}
	}
	
	this.click = function(e){
		if(here == "PAUSE"){
			if (manager.pause) {
				if ((e.offsetX > this.x) && (e.offsetX < this.x + this.w) &&
					(e.offsetY > this.y) && (e.offsetY < this.y + this.h)) {
					screen.scene = next;
					manager.pause = false;
					
					if(manager.soundOn) {
						this.buttonAudio.play();
					}
				}
			}
		} else {
			if (screen.scene == here) {
				if ((e.offsetX > this.x) && (e.offsetX < this.x + this.w) &&
					(e.offsetY > this.y) && (e.offsetY < this.y + this.h)) {
					if(next == "CURRENTLEVEL"){
						if(manager.currentLevel == "levelOne"){
							screen.scene = "LEVEL1";
						} else if(manager.currentLevel == "levelTwo"){
							screen.scene = "LEVEL2";
						} else if(manager.currentLevel == "levelThree"){
							screen.scene = "LEVEL3";
						}
					} else {
						screen.scene = next;
					}
					
					if(manager.soundOn) {
						this.buttonAudio.play();
					}
				}
			}
		}
	}
}

function DifferentButton(x, y, w, h, imagesrc, here, next){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.image = new Image();
	this.image.src = "resources/images/button/" + imagesrc + ".png";
	this.buttonAudio = new Audio();
	this.buttonAudio.src = "resources/audios/button/click.mp3";
	
	this.draw = function(){
		context.drawImage(this.image, this.x, this.y, this.w, this.h);
	}
	
	this.mouseOver = function(e){
		if(screen.scene == here){
			this.innitialX = x;
			this.innitialY = y;
			this.innitialW = w;
			this.innitialH = h;
			
			if ((e.offsetX > this.x) && (e.offsetX < this.x + this.w) &&
				(e.offsetY > this.y) && (e.offsetY < this.y + this.h)) {
				this.x = this.innitialX - 5;
				this.y = this.innitialY - 5;
				this.w = this.innitialW + 10;
				this.h = this.innitialH + 10;	
			} else {
				this.x = this.innitialX;
				this.y = this.innitialY;
				this.w = this.innitialW;
				this.h = this.innitialH;
			}
		}
	}
	
	this.click = function(e){
		if (screen.scene == here) {
			if ((e.offsetX > this.x) && (e.offsetX < this.x + this.w) &&
				(e.offsetY > this.y) && (e.offsetY < this.y + this.h)) {
				screen.scene = next;
				
				if(manager.soundOn) {
					this.buttonAudio.play();
				}
			}
		}
	}
}

function SoundButton(x, y, w, h, imagesrc, imagesrcOff, here){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = y;
	this.imageOn = new Image();
	this.imageOn.src = "resources/images/button/" + imagesrc + ".png";
	this.imageOff = new Image();
	this.imageOff.src = "resources/images/button/" + imagesrcOff + ".png";
	this.buttonAudio = new Audio();
	this.buttonAudio.src = "resources/audios/button/click.mp3";
	
	this.draw = function(){
		if(manager.soundOn){
			context.drawImage(this.imageOn, this.x, this.y, this.w, this.h);
		} else {
			context.drawImage(this.imageOff, this.x, this.y, this.w, this.h);
		}
	}
	
	this.mouseOver = function(e){
		if(screen.scene == here || manager.pause){
			this.innitialX = x;
			this.innitialY = y;
			this.innitialW = w;
			this.innitialH = h;
			
			if ((e.offsetX > this.x) && (e.offsetX < this.x + this.w) &&
				(e.offsetY > this.y) && (e.offsetY < this.y + this.h)) {
				this.x = this.innitialX - 5;
				this.y = this.innitialY - 5;
				this.w = this.innitialW + 10;
				this.h = this.innitialH + 10;	
			} else {
				this.x = this.innitialX;
				this.y = this.innitialY;
				this.w = this.innitialW;
				this.h = this.innitialH;
			}
		}
	}
	
	this.click = function(e){
		if (screen.scene == here || manager.pause) {
			if ((e.offsetX > this.x) && (e.offsetX < this.x + this.w) &&
				(e.offsetY > this.y) && (e.offsetY < this.y + this.h)) {
				manager.soundOn = !manager.soundOn;
				
				if(manager.soundOn) {
					this.buttonAudio.play();
				}
			}
		}
	}
}