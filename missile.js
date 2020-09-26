class Missile{
     constructor(){
          this.mis = createSprite(player.x,player.y+50,20,8);
          this.mis.velocityY = 15;
          this.mis.addImage("this.mis", misImg)
          this.mis.scale = 0.1;
          bulletsGroup.add(this.mis);
     }
}