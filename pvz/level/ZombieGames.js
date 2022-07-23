﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oSplitPea, oJalapeno, oSpikeweed, oRepeater, oTallNut, oPumpkinHead, oSquash, oFlowerPot, oTorchwood, oThreepeater, oGatlingPea, oTwinSunflower, oSpikerock, oFumeShroom, oCoffeeBean, oGloomShroom, oSunShroom, oPuffShroom, oScaredyShroom, oGraveBuster, oStarfruit, oLilyPad, oHypnoShroom, oIceShroom, oDoomShroom, oTangleKlep, oSeaShroom, oPlantern, oCactus, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper, oFlamesMushroom], 
    ZName: [oZombie, oPoleVaultingZombie, oHeiFootballZombie, oFootballZombie, oDolphinRiderZombie],
    PicArr: ["images/interface/background3.jpg"],
    backgroundImage: "images/interface/background3.jpg",
    CanSelectCard: 1,
    LF: [0, 1, 1, 2, 2, 1, 1],
    Coord: 2,
    SunNum: 1500,
    LevelName: "小游戏：僵尸运动会",
    LvlEName: "ZombieGames",
    LargeWaveFlag: {
        10 : $("imgFlag2"),
        20 : $("imgFlag1")
    },
    StartGameMusic: "GAMEPK"
},
{
    AZ: [[oZombie, 5, 1], [oPoleVaultingZombie, 3, 3], [oHeiFootballZombie, 2, 10, [10, 20]], [oFootballZombie, 2, 5, [5, 15, 20]], [oDolphinRiderZombie, 2, 20, [20]]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [3, 5, 9],
        a2: [3, 4, 5, 10]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(0)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});