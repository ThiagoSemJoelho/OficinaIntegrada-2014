function LevelOne(){
	this.sky = new Image();
	this.sky.src = "resources/images/gameplay/background/levelOne/sky.png";
	this.skyX = 0;
	this.skyX2 = 1600;
	this.skyY = 0;
	this.skyW = 1605;
	this.skyH = 600;
	this.skySpeed = 1.5;
	
	this.background = new Image();
	this.background.src = "resources/images/gameplay/background/levelOne/background.png";
	this.backgroundX = 0;
	this.backgroundX2 = 1600;
	this.backgroundY = 0;
	this.backgroundW = 1605;
	this.backgroundH = 600;
	this.backgroundSpeed = 3;
	
	this.trees = new Image();
	this.trees.src = "resources/images/gameplay/background/levelOne/trees.png";
	this.treesX = 0;
	this.treesX2 = 1600;
	this.treesY = 0;
	this.treesW = 1605;
	this.treesH = 600;
	this.treesSpeed = 5;
	
	this.floor = new Image();
	this.floor.src = "resources/images/gameplay/background/levelOne/floor.png";
	this.floorX = 0;
	this.floorX2 = 1600;
	this.floorY = 0;
	this.floorW = 1605;
	this.floorH = 600;
	this.floorSpeed = 15;
	
	this.update = function(){
		if(!manager.pause){
			if(!manager.winning) {
				if(runner.x < 100) {
					this.skySpeed = 0;
					this.backgroundSpeed = 0;
					this.treesSpeed = 0;
					this.floorSpeed = 0;
				} else {
					this.skySpeed = 1.5;
					this.backgroundSpeed = 3;
					this.treesSpeed = 5;
					this.floorSpeed = 15;
				}
			}
			
			this.skyX -= this.skySpeed;
			this.skyX2 -= this.skySpeed;
			this.backgroundX -= this.backgroundSpeed;
			this.backgroundX2 -= this.backgroundSpeed;
			this.treesX -= this.treesSpeed;
			this.treesX2 -= this.treesSpeed;
			this.floorX -= this.floorSpeed;
			this.floorX2 -= this.floorSpeed;
			
			if (this.skyX + this.skyW <= 0) {
				this.skyX = 1600;
			}
			if (this.skyX2 + this.skyW <= 0) {
				this.skyX2 = 1600;
			}
			if (this.backgroundX + this.backgroundW <= 0) {
				this.backgroundX = 1600;
			}
			if (this.backgroundX2 + this.backgroundW <= 0) {
				this.backgroundX2 = 1600;
			}
			if (this.treesX + this.treesW <= 0) {
				this.treesX = 1600;
			}
			if (this.treesX2 + this.treesW <= 0) {
				this.treesX2 = 1600;
			}
			if (this.floorX + this.floorW <= 0) {
				this.floorX = 1600;
			}
			
			if (this.floorX2 + this.floorW <= 0) {
				this.floorX2 = 1600;
			}
		}
		
		if (manager.winning) {	
			this.skySpeed = 0;
			this.backgroundSpeed = 0;
			this.treesSpeed = 0;
			this.floorSpeed = 0;
		}
	}
	
	this.draw = function(){
		if (screen.scene == "LEVEL1"){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(this.sky, this.skyX, this.skyY, this.skyW, this.skyH);
			context.drawImage(this.sky, this.skyX2, this.skyY, this.skyW, this.skyH);
			context.drawImage(this.background, this.backgroundX, this.backgroundY, this.backgroundW, this.backgroundH);
			context.drawImage(this.background, this.backgroundX2, this.backgroundY, this.backgroundW, this.backgroundH);
			context.drawImage(this.trees, this.treesX, this.treesY, this.treesW, this.treesH);
			context.drawImage(this.trees, this.treesX2, this.treesY, this.treesW, this.treesH);
			context.drawImage(this.floor, this.floorX, this.floorY, this.floorW, this.floorH);
			context.drawImage(this.floor, this.floorX2, this.floorY, this.floorW, this.floorH);
		}
	}
}