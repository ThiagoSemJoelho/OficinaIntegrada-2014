function Screen() {
	this.scene = "SPLASHSCREEN";
	
	this.soundOn = true;
	this.winning = false;
	this.pause = false;
	this.nextLevel = false;
	this.levelOne = true;
	this.levelTwo = false;
	this.levelThree = false;
	
	this.deathToll = localStorage.getItem("mortes") === null ? 0 : localStorage.getItem("mortes");
	
	this.menuBackground = new Image();
	this.menuBackground.src = "IMAGEM/Menu/Fundo_Estatico.png";
	
	this.optionsContent = new Image();
	this.optionsContent.src = "IMAGEM/Menu/Tela_Instru.png";
	
	this.creditsContent = new Image();
	this.creditsContent.src = "IMAGEM/Menu/Tela_Cred.png";
	
	this.clouds = new Image();
	this.clouds.src = "IMAGEM/Menu/Nuvens_Menu.png";
	this.cloudsX = -800;
	this.cloudsX2 = 0;
	this.cloudsY = 80;
	this.cloudsW = 800;
	this.cloudsH = 198;
	this.cloudsSpeed = 2;
	
	this.cloudsUpdate = function() {
		this.cloudsX += this.cloudsSpeed;
		if (this.cloudsX >= 800) {
			this.cloudsX = -800;
		}
		
		this.cloudsX2 += this.cloudsSpeed;
		if (this.cloudsX2 >= 800) {
			this.cloudsX2 = -800;
		}
	}
	
	this.barMap = new Image();
	this.barMap.src = "IMAGEM/Jogo/Fundo/barra.png";
	this.barMapX = 200;
	this.barMapY = 0;
	this.barMapW = 582;
	this.barMapH = 102;
	
	this.playerMap = new Image();
	this.playerMap.src = "IMAGEM/Jogo/Fundo/pedro_barra.png";
	this.playerMapX = 200;
	this.playerMapY = 0;
	this.playerMapW = 582;
	this.playerMapH = 102;
	this.playerMapSpeed = 0.88;
		
	this.mountain = new Image();
	this.mountain.src = "IMAGEM/Jogo/Fundo/montanha.png";
	this.mountainX = 0;
	this.mountainX2 = 1600;
	this.mountainY = 0;
	this.mountainW = 1600;
	this.mountainH = 500;
	this.mountainSpeed = 4;
	
	this.castelPilars = new Image();
	this.castelPilars.src = "IMAGEM/Jogo/Fundo/background.png";
	this.castelPilarsX = 0;
	this.castelPilarsY = 0;
	this.castelPilarsW = 1600;
	this.castelPilarsH = 500;
	this.castelPilarsSpeed = 7;
	
	this.moon = new Image();
	this.moon.src = "IMAGEM/Jogo/Fundo/lua.png";
	this.moonX = 400;
	this.moonY = 100;
	this.moonW = 672;
	this.moonH = 249;
	this.moonSpeed = 0.5;
	
	this.levelOneSky = new Image();
	this.levelOneSky.src = "IMAGEM/Jogo/Fundo/Sky_FASE1.png";
	this.levelOneSkyX = 0;
	this.levelOneSkyX2 = 1600;
	this.levelOneSkyY = 0;
	this.levelOneSkyW = 1605;
	this.levelOneSkyH = 600;
	this.levelOneSkySpeed = 1.5;
	
	this.levelOneBackground = new Image();
	this.levelOneBackground.src = "IMAGEM/Jogo/Fundo/Fundo2_Fase1.png";
	this.levelOneBackgroundX = 0;
	this.levelOneBackgroundX2 = 1600;
	this.levelOneBackgroundY = 0;
	this.levelOneBackgroundW = 1605;
	this.levelOneBackgroundH = 600;
	this.levelOneBackgroundSpeed = 3;
	
	this.levelOneTrees = new Image();
	this.levelOneTrees.src = "IMAGEM/Jogo/Fundo/Fundo1_Fase1.png";
	this.levelOneTreesX = 0;
	this.levelOneTreesX2 = 1600;
	this.levelOneTreesY = 0;
	this.levelOneTreesW = 1605;
	this.levelOneTreesH = 600;
	this.levelOneTreesSpeed = 5;
	
	this.levelTwoSky = new Image();
	this.levelTwoSky.src = "IMAGEM/Jogo/Fundo/Fundo1_fase2.png";
	this.levelTwoSkyX = 0;
	this.levelTwoSkyX2 = 1600;
	this.levelTwoSkyY = 0;
	this.levelTwoSkyW = 1605;
	this.levelTwoSkyH = 600;
	this.levelTwoSkySpeed = 1.5;
	
	this.levelTwoBackground = new Image();
	this.levelTwoBackground.src = "IMAGEM/Jogo/Fundo/Fundo2_Fase2.png";
	this.levelTwoBackgroundX = 0;
	this.levelTwoBackgroundX2 = 1600;
	this.levelTwoBackgroundY = 0;
	this.levelTwoBackgroundW = 1605;
	this.levelTwoBackgroundH = 600;
	this.levelTwoBackgroundSpeed = 3;
	
	this.levelTwoTrees = new Image();
	this.levelTwoTrees.src = "IMAGEM/Jogo/Fundo/Fundo3_Fase2.png";
	this.levelTwoTreesX = 0;
	this.levelTwoTreesX2 = 1600;
	this.levelTwoTreesY = 0;
	this.levelTwoTreesW = 1605;
	this.levelTwoTreesH = 600;
	this.levelTwoTreesSpeed = 5;
	
	this.rain = new Image();
	this.rain.src = "IMAGEM/Jogo/Fundo/Chuva.png";
	this.rainX = 0;
	this.rainX2 = 3200;
	this.rainY = 0;
	this.rainW = 3200;
	this.rainH = 1200;
	this.rainSpeed = 40;
	
	this.backgroundUpdate = function() {
		if(!this.pause) {
			if(!this.winning) {
				if(runner.x < 100) {
					runner.velocidade_cavalo = 10;
					this.mountainSpeed = 0;
					this.moonSpeed = 0;
					this.castelPilarsSpeed = 0;
				} else {
					runner.velocidade_cavalo = 7;
					this.mountainSpeed = 4;
					this.moonSpeed = 0.5;
					this.castelPilarsSpeed = 7;
				}
			}	
			
			if(!this.winning) {
				if(runner.x < 100) {
					runner.velocidade_cavalo = 10;
					this.levelOneSkySpeed = 0;
					this.levelOneBackgroundSpeed = 0;
					this.levelOneTreesSpeed = 0;
				} else {
					runner.velocidade_cavalo = 7;
					this.levelOneSkySpeed = 1.5;
					this.levelOneBackgroundSpeed = 3;
					this.levelOneTreesSpeed = 5;
				}
			}
			
			if(!this.winning) {
				if(runner.x < 100) {
					runner.velocidade_cavalo = 10;
					this.levelTwoSkySpeed = 0;
					this.levelTwoBackgroundSpeed = 0;
					this.levelTwoTreesSpeed = 0;
				} else {
					runner.velocidade_cavalo = 7;
					this.levelTwoSkySpeed = 1.5;
					this.levelTwoBackgroundSpeed = 3;
					this.levelTwoTreesSpeed = 5;
				}
			}
			
			this.levelOneSkyX -= this.levelOneSkySpeed;
			this.levelOneSkyX2 -= this.levelOneSkySpeed;
			this.levelOneBackgroundX -= this.levelOneBackgroundSpeed;
			this.levelOneBackgroundX2 -= this.levelOneBackgroundSpeed;
			this.levelOneTreesX -= this.levelOneTreesSpeed;
			this.levelOneTreesX2 -= this.levelOneTreesSpeed;
			
			this.levelTwoSkyX -= this.levelTwoSkySpeed;
			this.levelTwoSkyX2 -= this.levelTwoSkySpeed;
			this.levelTwoBackgroundX -= this.levelTwoBackgroundSpeed;
			this.levelTwoBackgroundX2 -= this.levelTwoBackgroundSpeed;
			this.levelTwoTreesX -= this.levelTwoTreesSpeed;
			this.levelTwoTreesX2 -= this.levelTwoTreesSpeed;
			this.rainX -= this.rainSpeed;
			this.rainX2 -= this.rainSpeed;
			
			this.castelPilarsX -= this.castelPilarsSpeed;
			this.mountainX -= this.mountainSpeed;
			this.mountainX2 -= this.mountainSpeed;
			this.moonX -= this.moonSpeed;
		
			if (this.levelOneSkyX + this.levelOneSkyW <= 0) {
				this.levelOneSkyX = 1600;
			}
			if (this.levelOneSkyX2 + this.levelOneSkyW <= 0) {
				this.levelOneSkyX2 = 1600;
			}
			if (this.levelOneBackgroundX + this.levelOneBackgroundW <= 0) {
				this.levelOneBackgroundX = 1600;
			}
			if (this.levelOneBackgroundX2 + this.levelOneBackgroundW <= 0) {
				this.levelOneBackgroundX2 = 1600;
			}
			if (this.levelOneTreesX + this.levelOneTreesW <= 0) {
				this.levelOneTreesX = 1600;
			}
			if (this.levelOneTreesX2 + this.levelOneTreesW <= 0) {
				this.levelOneTreesX2 = 1600;
			}
			
			if (this.levelTwoSkyX + this.levelTwoSkyW <= 0) {
				this.levelTwoSkyX = 1600;
			}
			if (this.levelTwoSkyX2 + this.levelTwoSkyW <= 0) {
				this.levelTwoSkyX2 = 1600;
			}
			if (this.levelTwoBackgroundX + this.levelTwoBackgroundW <= 0) {
				this.levelTwoBackgroundX = 1600;
			}
			if (this.levelTwoBackgroundX2 + this.levelTwoBackgroundW <= 0) {
				this.levelTwoBackgroundX2 = 1600;
			}
			if (this.levelTwoTreesX + this.levelTwoTreesW <= 0) {
				this.levelTwoTreesX = 1600;
			}
			if (this.levelTwoTreesX2 + this.levelTwoTreesW <= 0) {
				this.levelTwoTreesX2 = 1600;
			}
			if (this.rainX + this.rainW <= 0) {
				this.rainX = 3200;
			}
			if (this.rainX2 + this.rainW <= 0) {
				this.rainX2 = 3200;
			}
			
			if (this.castelPilarsX <= -800) {
				this.castelPilarsX = 0;
			}	
			if (this.mountainX + this.mountainW <= 0) {
				this.mountainX = 1600;
			}
			if (this.mountainX2 + this.mountainW <= 0) {
				this.mountainX2 = 1600;
			}
		}
		
		if (this.winning) {
			this.mountainSpeed = 0;
			this.moonSpeed = 0;
			this.castelPilarsSpeed = 0;
			
			this.levelOneSkySpeed = 0;
			this.levelOneBackgroundSpeed = 0;
			this.levelOneTreesSpeed = 0;
			
			this.levelTwoSkySpeed = 0;
			this.levelTwoBackgroundSpeed = 0;
			this.levelTwoTreesSpeed = 0;
		}
		
		if(this.scene == "LEVEL1" && runner.x >= 100 && !screen.pause) {
			this.playerMapX += this.playerMapSpeed;
		}
		
		if(this.scene == "LEVEL2" && runner.x >= 100 && !screen.pause) {
			this.playerMapX += this.playerMapSpeed;
		}
		
		if(this.scene == "LEVEL3" && runner.x >= 100 && !screen.pause) {
			this.playerMapX += this.playerMapSpeed;
		}
		
		if(this.playerMapX >= 704) {
			this.playerMapX = 704;
		}
		
		if(this.scene == "LEVEL1" && this.winning){
			this.playerMapSpeed = 0;
			this.playerMapX = 704;
		} else {
			this.playerMapSpeed = 0.88;
		}
		
		if(this.scene == "LEVEL2" && this.winning){
			this.playerMapSpeed = 0;
			this.playerMapX = 704;
		} else {
			this.playerMapSpeed = 0.5;
		}
		
		if(this.scene == "LEVEL3" && this.winning){
			this.playerMapSpeed = 0;
			this.playerMapX = 704;
		} else {
			this.playerMapSpeed = 0.38;
		}
		
		if(this.scene == "LEVEL1"){
			this.playerMapSpeed = 0.88;
		}
		if(this.scene == "LEVEL2"){
			this.playerMapSpeed = 0.5;
		}
		if(this.scene == "LEVEL3"){
			this.playerMapSpeed = 0.38;
		}
	}
	this.levelOneFloor = new Image();
	this.levelOneFloor.src = "IMAGEM/Jogo/Fundo/Ground_Fase1.png";
	this.levelOneFloorX = 0;
	this.levelOneFloorX2 = 1600;
	this.levelOneFloorY = 0;
	this.levelOneFloorW = 1605;
	this.levelOneFloorH = 600;
	this.levelOneFloorSpeed = 15;
	
	this.levelTwoFloor = new Image();
	this.levelTwoFloor.src = "IMAGEM/Jogo/Fundo/Ground_Fase2.png";
	this.levelTwoFloorX = 0;
	this.levelTwoFloorX2 = 1600;
	this.levelTwoFloorY = 0;
	this.levelTwoFloorW = 1605;
	this.levelTwoFloorH = 600;
	this.levelTwoFloorSpeed = 15;
	
	this.levelThreeFloor = new Image();
	this.levelThreeFloor.src = "IMAGEM/Jogo/Fundo/floor.png";
	this.levelThreeFloorX = 0;
	this.levelThreeFloorX2 = 1600;
	this.levelThreeFloorY = 500;
	this.levelThreeFloorW = 1605;
	this.levelThreeFloorH = 104;
	this.levelThreeFloorSpeed = 15;
	
	this.floorUpdate = function() {
		if(!this.pause) {
			if(!this.winning) {
				if(runner.x < 100) {
					this.levelOneFloorSpeed = 0;
				} else {
					this.levelOneFloorSpeed = 15;
				}
			}
			
			if(!this.winning) {
				if(runner.x < 100) {
					this.levelTwoFloorSpeed = 0;
				} else {
					this.levelTwoFloorSpeed = 15;
				}
			}
			
			if(!this.winning) {
				if(runner.x < 100) {
					this.levelThreeFloorSpeed = 0;
				} else {
					this.levelThreeFloorSpeed = 15;
				}
			}
			
			this.levelOneFloorX -= this.levelOneFloorSpeed;
			this.levelOneFloorX2 -= this.levelOneFloorSpeed;
			
			if (this.levelOneFloorX + this.levelOneFloorW <= 0) {
				this.levelOneFloorX = 1600;
			}
			
			if (this.levelOneFloorX2 + this.levelOneFloorW <= 0) {
				this.levelOneFloorX2 = 1600;
			}
			
			this.levelTwoFloorX -= this.levelTwoFloorSpeed;
			this.levelTwoFloorX2 -= this.levelTwoFloorSpeed;
			
			if (this.levelTwoFloorX + this.levelTwoFloorW <= 0) {
				this.levelTwoFloorX = 1600;
			}
			
			if (this.levelTwoFloorX2 + this.levelTwoFloorW <= 0) {
				this.levelTwoFloorX2 = 1600;
			}
			
			this.levelThreeFloorX -= this.levelThreeFloorSpeed;
			this.levelThreeFloorX2 -= this.levelThreeFloorSpeed;
			
			if (this.levelThreeFloorX + this.levelThreeFloorW <= 0) {
				this.levelThreeFloorX = 1600;
			}
			
			if (this.levelThreeFloorX2 + this.levelThreeFloorW <= 0) {
				this.levelThreeFloorX2 = 1600;
			}
		}
		
		if(this.winning) {
			this.levelThreeFloorSpeed = 0;
			this.levelOneFloorSpeed = 0;
			this.levelTwoFloorSpeed = 0;
		}
	}
	
	this.logo = new Image();
	this.logo.src = "IMAGEM/Menu/Fundo_Logo.png";
	
	this.pauseContent = new Image();
	this.pauseContent.src = "IMAGEM/Jogo/pause/Tela_Pause.png";
	
	this.broomX = 0;
	this.broomY = -600;
	
	this.start = (new Date()).getTime();
	this.current;
	this.currentFrame = 0;
	this.currentFrame2 = 0;
	this.currentFrame3 = 0;
	this.currentFrame4 = 0;
	this.currentFrame5 = 0;
	
	this.castleAnimation = new Array();
	this.castleFrames = 2;
	this.pressSpaceAnimation = new Array();
	this.pressSpaceFrames = 13;
	this.lossAnimation = new Array();
	this.lossFrames = 9;
	this.broomAnimation = new Array();
	this.broomFrames = 15;
	this.fadeAnimation = new Array();
	this.fadeFrames = 25;
	
	
	this.castleX = 490;
	this.castleY = 137;
	
	for (var i = 0; i < this.castleFrames; i++) {
		this.castleAnimation[i] = new Image();
		this.castleAnimation[i].src = "IMAGEM/Menu/Castelo/Castelo" + (i + 1) + ".png";
	}
	
	for (var i = 0; i < this.pressSpaceFrames; i++) {
		this.pressSpaceAnimation[i] = new Image();
		this.pressSpaceAnimation[i].src = "IMAGEM/Menu/Press_Space/Espace_" + (i + 1) + ".png";
	}
	
	for (var i = 0; i < this.lossFrames; i++) {
		this.lossAnimation[i] = new Image();
		this.lossAnimation[i].src = "IMAGEM/Jogo/Loose/Tela_Lose_" + (i + 1) + ".png";
	}
	
	for (var i = 0; i < this.broomFrames; i++) {
		this.broomAnimation[i] = new Image();
		this.broomAnimation[i].src = "IMAGEM/Jogo/winning/Vassoura/vassoura" + (i + 1) + ".png";
	}
	
	for (var i = 0; i < this.fadeFrames; i++) {
		this.fadeAnimation[i] = new Image();
		this.fadeAnimation[i].src = "IMAGEM/Jogo/winning/Ending/ending" + (i + 1) + ".png";
	}
		
	this.deltaTime = function() {
		this.current = (new Date()).getTime();
		this.elapsed = this.current - this.start;
		this.start = this.current;
		var delta = this.elapsed / 1000;
		return delta;
	}
	
	this.animationUpdate = function() {
		var delta = this.deltaTime();
		
		this.currentFrame += delta * 4;
		this.currentFrame2 += delta * 8;
		this.currentFrame3 += delta * 10;
		this.currentFrame4 += delta * 10;
		
		if(screen.scene == "LEVEL1" && runner.x >= 840) {
			this.currentFrame5 += delta * 15;
		}
		
		if(screen.scene == "LEVEL2" && runner.x >= 840) {
			this.currentFrame5 += delta * 15;
		}
		
		if(screen.scene == "LEVEL3" && this.broomY >= 0) {
			this.currentFrame5 += delta * 15;
		}
	}
	
	this.fadeUpdate = function() {
		if(Math.floor(this.currentFrame5) % this.fadeFrames == 24 && this.scene == "LEVEL1") {
			this.scene = "LEVEL2";
			this.winning = false;
			this.currentFrame5 = 0;
			this.nextLevel = true;
		}
		
		if(Math.floor(this.currentFrame5) % this.fadeFrames == 24 && this.scene == "LEVEL2") {
			this.scene = "LEVEL3";
			this.winning = false;
			this.currentFrame5 = 0;
			this.nextLevel = true;
		}
		
		if(Math.floor(this.currentFrame5) % this.fadeFrames == 24 && this.scene == "LEVEL3") {
			this.scene = "MENU";
			this.winning = false;
			this.currentFrame5 = 0;
			this.nextLevel = true;
		}
	}
	
	this.broomUpdate = function() {
		if (runner.x >= 337 && this.scene == "LEVEL3") {
			this.broomY += 10;
		}
				
		if(this.broomY >= 0) {
			this.broomY = 0;
		}
				
		if(this.scene == "MENU") {
			this.broomY = -600;
		}	
	}
		
	
	this.botao_musica_x = 10;
	this.botao_musica_y = 10;
	this.botao_musica_w = 54;
	this.botao_musica_h = 57;
	this.botao_musica_on = new Image();
	this.botao_musica_on.src = "IMAGEM/Botoes/som_on.png";
	this.botao_musica_off = new Image();
	this.botao_musica_off.src = "IMAGEM/Botoes/som_off.png";
	
	this.botao_opcoes_x = 55;
	this.botao_opcoes_y = 436;
	this.botao_opcoes_w = 208;
	this.botao_opcoes_h = 109;
	this.botao_opcoes = new Image();
	this.botao_opcoes.src = "IMAGEM/Botoes/Icon_Instru.png";

	this.botao_creditos_x = 537;
	this.botao_creditos_y = 436;
	this.botao_creditos_w = 208;
	this.botao_creditos_h = 109;
	this.botao_creditos = new Image();
	this.botao_creditos.src = "IMAGEM/Botoes/Icon_Cred.png";

	this.botao_play_x = 288;
	this.botao_play_y = 150;
	this.botao_play_w = 224;
	this.botao_play_h = 222;
	this.botao_play = new Image();
	this.botao_play.src = "IMAGEM/Botoes/Icon_Play.png";
	
	this.botao_voltar_x = 572;
	this.botao_voltar_y = 20;
	this.botao_voltar_w = 208;
	this.botao_voltar_h = 109;
	this.botao_voltar = new Image();
	this.botao_voltar.src = "IMAGEM/Botoes/Icon_Voltar.png";
	
	this.botao_loose_sair_x = 100;
	this.botao_loose_sair_y = 436;
	this.botao_loose_sair_w = 208;
	this.botao_loose_sair_h = 109;
	this.botao_loose_sair = new Image();
	this.botao_loose_sair.src = "IMAGEM/Botoes/Icon_Menu.png";
		
	this.botao_loose_voltar_x = 492;
	this.botao_loose_voltar_y = 436;
	this.botao_loose_voltar_w = 208;
	this.botao_loose_voltar_h = 109;
	this.botao_loose_voltar = new Image();
	this.botao_loose_voltar.src = "IMAGEM/Botoes/Icon_Recomecar.png";
	
	this.botao_pause_sair_x = 296;
	this.botao_pause_sair_y = 250;
	this.botao_pause_sair_w = 208;
	this.botao_pause_sair_h = 109;
	this.botao_pause_sair = new Image();
	this.botao_pause_sair.src = "IMAGEM/Botoes/Icon_Menu.png";
	
	this.menu_audio = new Audio();
	this.menu_audio.src = "AUDIO/Menu/Menu.wav";
	this.botao_audio = new Audio();
	this.botao_audio.src = "AUDIO/Botoes/Click.wav";
	this.loose_audio = new Audio();
	this.loose_audio.src = "AUDIO/Jogo/Morreu/Perdeu.mp3";
	this.win_audio = new Audio();
	this.win_audio.src = "AUDIO/Jogo/Ganhou/Ganhou.mp3";
	this.win_audio2 = new Audio();
	this.win_audio2.src = "AUDIO/Jogo/Ganhou/Ganhou2.mp3";
	this.jogo_audio = new Audio();
	this.jogo_audio.src = "AUDIO/Jogo/Som_Ambiente/Fase.mp3";
	this.bateu_audio = new Audio();
	this.bateu_audio.src = "AUDIO/Jogo/Morreu/bateu.mp3";
	this.fase1_musica = new Audio();
	this.fase1_musica.src = "AUDIO/Jogo/Som_Ambiente/fase1_musica.mp3";
	this.fase2_musica = new Audio();
	this.fase2_musica.src = "AUDIO/Jogo/Som_Ambiente/fase2_musica.mp3";
	this.fase2_audio = new Audio();
	this.fase2_audio.src = "AUDIO/Jogo/Som_Ambiente/fase2_chuva.mp3";
	this.pause_click_audio = new Audio();
	this.pause_click_audio.src = "AUDIO/Jogo/pause/pause_click.mp3";
	this.cavalo_morreu_audio = new Audio();
	this.cavalo_morreu_audio.src = "AUDIO/Jogo/Morreu/Cavalo_morreu.wav";
	this.cavalo_audio = new Audio();
	this.cavalo_audio.src = "AUDIO/Jogo/Cavalo/Cavalo_Som.mp3";
	this.espadada_erro_audio = new Audio();
	this.espadada_erro_audio.src = "AUDIO/Jogo/Espadada/espada_erro.mp3";
	this.espadada_audio = new Audio();
	this.espadada_audio.src = "AUDIO/Jogo/Espadada/espadada.mp3";
	this.morcego_audio = new Audio();
	this.morcego_audio.src = "AUDIO/Jogo/Morreu/morcego.mp3";
	this.morcego_morto_audio = new Audio();
	this.morcego_morto_audio.src = "AUDIO/Jogo/Espadada/morcego_morto.mp3";
	this.cavalo_pulo_audio = new Audio();
	this.cavalo_pulo_audio.src = "AUDIO/Jogo/Cavalo/pulo_cavalo.mp3";
	
	this.update = function() {
		this.animationUpdate();
		this.cloudsUpdate();
		this.backgroundUpdate();
		this.floorUpdate();
		this.broomUpdate();
		this.fadeUpdate();
		if(this.scene == "LEVEL1") {
			this.levelOne = true;
		}
		if(this.scene == "LEVEL2") {
			this.levelTwo = true;
		}
		if(this.scene == "LEVEL3") {
			this.levelThree = true;
		}
	}
	
	this.draw = function() {
		if(this.scene == "SPLASHSCREEN") {
			context.clearRect(0,0,canvas.width,canvas.height);
			context.drawImage(this.menuBackground, 0, 0, canvas.width, canvas.height);
			context.drawImage(this.clouds, this.cloudsX, this.cloudsY, this.cloudsW, this.cloudsH);
			context.drawImage(this.clouds, this.cloudsX2, this.cloudsY, this.cloudsW, this.cloudsH);
			context.drawImage(this.castleAnimation[Math.floor(this.currentFrame) % this.castleFrames], this.castleX, this.castleY);
			context.drawImage(this.pressSpaceAnimation[Math.floor(this.currentFrame2) % this.pressSpaceFrames], 0, 75);
			context.drawImage(this.logo, 0, 0);			
		}
		if (this.scene == "MENU"){
			context.clearRect(0,0,canvas.width,canvas.height);
			context.drawImage(this.menuBackground, 0, 0, canvas.width, canvas.height);
			context.drawImage(this.clouds, this.cloudsX, this.cloudsY, this.cloudsW, this.cloudsH);
			context.drawImage(this.clouds, this.cloudsX2, this.cloudsY, this.cloudsW, this.cloudsH);
			context.drawImage(this.castleAnimation[Math.floor(this.currentFrame) % this.castleFrames], this.castleX, this.castleY);
			context.drawImage(this.botao_opcoes, this.botao_opcoes_x, this.botao_opcoes_y, this.botao_opcoes_w, this.botao_opcoes_h);
			context.drawImage(this.botao_creditos, this.botao_creditos_x, this.botao_creditos_y, this.botao_creditos_w, this.botao_creditos_h);
			context.drawImage(this.botao_play, this.botao_play_x, this.botao_play_y, this.botao_play_w, this.botao_play_h);
			if(this.soundOn) {
				context.drawImage(this.botao_musica_on, this.botao_musica_x, this.botao_musica_y, this.botao_musica_w, this.botao_musica_h);
			} else {
				context.drawImage(this.botao_musica_off, this.botao_musica_x, this.botao_musica_y, this.botao_musica_w, this.botao_musica_h);
			}
		}
		if (this.scene == "OPTIONS"){
			context.clearRect(0,0,canvas.width,canvas.height);
			context.drawImage(this.menuBackground, 0, 0, canvas.width, canvas.height);
			context.drawImage(this.clouds, this.cloudsX, this.cloudsY, this.cloudsW, this.cloudsH);
			context.drawImage(this.clouds, this.cloudsX2, this.cloudsY, this.cloudsW, this.cloudsH);
			context.drawImage(this.castleAnimation[Math.floor(this.currentFrame) % this.castleFrames], this.castleX, this.castleY);
			context.drawImage(this.optionsContent, 0, 0);
			context.drawImage(this.botao_voltar, this.botao_voltar_x, this.botao_voltar_y, this.botao_voltar_w, this.botao_voltar_h);
		}
		if (this.scene == "CREDITS"){
			context.clearRect(0,0,canvas.width,canvas.height);
			context.drawImage(this.menuBackground, 0, 0, canvas.width, canvas.height);
			context.drawImage(this.clouds, this.cloudsX, this.cloudsY, this.cloudsW, this.cloudsH);
			context.drawImage(this.clouds, this.cloudsX2, this.cloudsY, this.cloudsW, this.cloudsH);
			context.drawImage(this.creditsContent, 0, 0);
			context.drawImage(this.castleAnimation[Math.floor(this.currentFrame) % this.castleFrames], this.castleX, this.castleY);
			context.drawImage(this.botao_voltar, this.botao_voltar_x, this.botao_voltar_y, this.botao_voltar_w, this.botao_voltar_h);
		}
		if (this.scene == "LEVEL1"){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(this.levelOneSky, this.levelOneSkyX, this.levelOneSkyY, this.levelOneSkyW, this.levelOneSkyH);
			context.drawImage(this.levelOneSky, this.levelOneSkyX2, this.levelOneSkyY, this.levelOneSkyW, this.levelOneSkyH);
			context.drawImage(this.levelOneBackground, this.levelOneBackgroundX, this.levelOneBackgroundY, this.levelOneBackgroundW, this.levelOneBackgroundH);
			context.drawImage(this.levelOneBackground, this.levelOneBackgroundX2, this.levelOneBackgroundY, this.levelOneBackgroundW, this.levelOneBackgroundH);
			context.drawImage(this.levelOneTrees, this.levelOneTreesX, this.levelOneTreesY, this.levelOneTreesW, this.levelOneTreesH);
			context.drawImage(this.levelOneTrees, this.levelOneTreesX2, this.levelOneTreesY, this.levelOneTreesW, this.levelOneTreesH);
			context.drawImage(this.levelOneFloor, this.levelOneFloorX, this.levelOneFloorY, this.levelOneFloorW, this.levelOneFloorH);
			context.drawImage(this.levelOneFloor, this.levelOneFloorX2, this.levelOneFloorY, this.levelOneFloorW, this.levelOneFloorH);
			context.drawImage(this.barMap, this.barMapX, this.barMapY, this.barMapW, this.barMapH);
			context.drawImage(this.playerMap, this.playerMapX, this.playerMapY, this.playerMapW, this.playerMapH);
			context.fillStyle = "WHITE";
			context.font = "30px Arial";
			context.fillText("Mortes: " + this.deathToll, 40, 57);
			
			runner.draw();
			
			for (var a in n_arbusto) {
				n_arbusto[a].draw();
			}
			
			if (this.winning) {
				if(runner.x >= 840) {
					context.drawImage(this.fadeAnimation[Math.floor(this.currentFrame5) % this.fadeFrames], 0, 0);
				}
			}
		}
		if (this.scene == "LEVEL2"){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(this.levelTwoSky, this.levelTwoSkyX, this.levelTwoSkyY, this.levelTwoSkyW, this.levelTwoSkyH);
			context.drawImage(this.levelTwoSky, this.levelTwoSkyX2, this.levelTwoSkyY, this.levelTwoSkyW, this.levelTwoSkyH);
			context.drawImage(this.levelTwoBackground, this.levelTwoBackgroundX, this.levelTwoBackgroundY, this.levelTwoBackgroundW, this.levelTwoBackgroundH);
			context.drawImage(this.levelTwoBackground, this.levelTwoBackgroundX2, this.levelTwoBackgroundY, this.levelTwoBackgroundW, this.levelTwoBackgroundH);
			context.drawImage(this.levelTwoTrees, this.levelTwoTreesX, this.levelTwoTreesY, this.levelTwoTreesW, this.levelTwoTreesH);
			context.drawImage(this.levelTwoTrees, this.levelTwoTreesX2, this.levelTwoTreesY, this.levelTwoTreesW, this.levelTwoTreesH);
			context.drawImage(this.rain, this.rainX, this.rainY, this.rainW, this.rainH);
			context.drawImage(this.rain, this.rainX2, this.rainY, this.rainW, this.rainH);
			context.drawImage(this.levelTwoFloor, this.levelTwoFloorX, this.levelTwoFloorY, this.levelTwoFloorW, this.levelTwoFloorH);
			context.drawImage(this.levelTwoFloor, this.levelTwoFloorX2, this.levelTwoFloorY, this.levelTwoFloorW, this.levelTwoFloorH);
			context.drawImage(this.barMap, this.barMapX, this.barMapY, this.barMapW, this.barMapH);
			context.drawImage(this.playerMap, this.playerMapX, this.playerMapY, this.playerMapW, this.playerMapH);
			context.fillStyle = "WHITE";
			context.font = "30px Arial";
			context.fillText("Mortes: " + this.deathToll, 40, 57);
			
			runner.draw();
			
			for (var p in n_pedra) {
				n_pedra[p].draw();
			}
			
			for (var m in n_morcego2) {
				n_morcego2[m].draw();
			}
			
			if (this.winning) {
				if(runner.x >= 840) {
					context.drawImage(this.fadeAnimation[Math.floor(this.currentFrame5) % this.fadeFrames], 0, 0);
				}
			}
		}
		if (this.scene == "LEVEL3"){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(this.mountain, this.mountainX, this.mountainY, this.mountainW, this.mountainH);
			context.drawImage(this.mountain, this.mountainX2, this.mountainY, this.mountainW, this.mountainH);
			context.drawImage(this.moon, this.moonX, this.moonY, this.moonW, this.moonH);
			context.drawImage(this.castelPilars, this.castelPilarsX, this.castelPilarsY, this.castelPilarsW, this.castelPilarsH);
			context.drawImage(this.levelThreeFloor, this.levelThreeFloorX, this.levelThreeFloorY, this.levelThreeFloorW, this.levelThreeFloorH);
			context.drawImage(this.levelThreeFloor, this.levelThreeFloorX2, this.levelThreeFloorY, this.levelThreeFloorW, this.levelThreeFloorH);
			context.fillStyle = "WHITE";
			context.font = "30px Arial";
			context.fillText("Mortes: " + this.deathToll, 40, 57);
			
			runner.draw();
			
			for (var b in n_barril) {
				n_barril[b].draw();
			}
			
			for (var m in n_morcego) {
				n_morcego[m].draw();
			}
			
			if (this.winning) {
				context.drawImage(this.broomAnimation[Math.floor(this.currentFrame4) % this.broomFrames], this.broomX, this.broomY);
			}
			
			context.drawImage(this.barMap, this.barMapX, this.barMapY, this.barMapW, this.barMapH);
			context.drawImage(this.playerMap, this.playerMapX, this.playerMapY, this.playerMapW, this.playerMapH);
			
			if(this.broomY >= 0) {
				context.drawImage(this.fadeAnimation[Math.floor(this.currentFrame5) % this.fadeFrames], 0, 0);
			}
		}
		if (this.scene == "PAUSE"){
			context.clearRect(0, 0, canvas.width, canvas.height);
		}
		if (this.scene == "LOSS"){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(this.lossAnimation[Math.floor(this.currentFrame3) % this.lossFrames], 0, 0);
			context.drawImage(this.botao_loose_sair, this.botao_loose_sair_x, this.botao_loose_sair_y, this.botao_loose_sair_w, this.botao_loose_sair_h);
			context.drawImage(this.botao_loose_voltar, this.botao_loose_voltar_x, this.botao_loose_voltar_y, this.botao_loose_voltar_w, this.botao_loose_voltar_h);
		}
		if (this.pause) {
			context.drawImage(this.pauseContent, 0, 0, canvas.width, canvas.height);
			context.drawImage(this.botao_pause_sair, this.botao_pause_sair_x, this.botao_pause_sair_y, this.botao_pause_sair_w, this.botao_pause_sair_h);
		
			if(this.soundOn) {
				context.drawImage(this.botao_musica_on, this.botao_musica_x, this.botao_musica_y, this.botao_musica_w, this.botao_musica_h);
			} else {
				context.drawImage(this.botao_musica_off, this.botao_musica_x, this.botao_musica_y, this.botao_musica_w, this.botao_musica_h);
			}
		}
		if(this.soundOn) {
			if (this.scene == "SPLASHSCREEN" || this.scene == "MENU" || this.scene == "OPTIONS" || this.scene == "CREDITS") {
				this.menu_audio.play();
			} else {
				this.menu_audio.pause();
			}
			if (this.scene == "LOSS") {
				this.loose_audio.play();
			} else {
				this.loose_audio.pause();
			}
			if (this.scene == "LEVEL3" && !screen.winning) {
				this.jogo_audio.play();
			} else {
				this.jogo_audio.pause();
			}
			if(runner.caseJump && this.scene == "LEVEL3" && !screen.pause) {
				this.cavalo_audio.play();
			} else {
				this.cavalo_audio.pause();
			}
			if (this.scene == "LEVEL2" && !screen.winning) {
				this.fase2_audio.play();
				this.fase2_musica.play();
			} else {
				this.fase2_audio.pause();
				this.fase2_musica.pause();
			}
			if (this.scene == "LEVEL1" && !screen.winning) {
				this.fase1_musica.play();
			} else {
				this.fase1_musica.pause();
			}
			if (screen.scene == "LEVEL1" && screen.winning || screen.scene == "LEVEL2" && screen.winning) {
				this.win_audio.play();
			} else {
				this.win_audio.pause();
			}
			if (screen.scene == "LEVEL3" && screen.winning) {
				this.win_audio2.play();
			} else {
				this.win_audio2.pause();
			}
			if (this.scene == "LEVEL3" && runner.x >= 337) {
				this.cavalo_audio.pause();
			}
		} else {
			this.menu_audio.pause();
			this.fase2_audio.pause();
			this.fase1_musica.pause();
			this.jogo_audio.pause();	
		}
	}
}