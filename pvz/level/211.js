﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper], 
    ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oCXZombie, oJackinTheBoxZombie, oFootballZombie, oCConeheadZombie, oPoleVaultingZombie, oCPoleVaultingZombie, oHeiFootballZombie, oXBZombie, oCZombie, oCBucketheadZombie, oMustacheZombie, oTrashZombie, oJX, oNewspaperZombie, oCNewspaperZombie, oCJackinTheBoxZombie, oCFootballZombie, oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDuckyTubeZombie1],
    PicArr: function() {
        return ["images/interface/background3.jpg"]
    } (),
    backgroundImage: "images/interface/background3.jpg",
    CanSelectCard: 1,
    Coord: 2,
    DKind: 0,
    LevelName: "常青之塔 61层",
    LvlEName: 211,
    SunNum: 9900,
    CanSelectCard: 1,
    Coord: 2,
    HaveFog: 5,
    LF: [0, 1, 1, 2, 2, 1, 1],
    StartGameMusic: "Kitanai Sekai",
    LargeWaveFlag: {
        4 : $("imgFlag3"),
        8 : $("imgFlag2"),
        12 : $("imgFlag1")
    }
},
{
    AZ: [[oZombie, 1, 1], [oConeheadZombie, 1, 2], [oBucketheadZombie, 1, 3], [oCXZombie, 1, 4], [oJackinTheBoxZombie, 1, 5], [oFootballZombie, 1, 6],  [oCConeheadZombie, 1, 7], [oPoleVaultingZombie, 1, 8], [oHeiFootballZombie, 1, 9], [oCZombie, 1, 10], [oXBZombie, 1, 11], [oCBucketheadZombie, 1, 12], [oMustacheZombie, 1, 11], [oTrashZombie, 1, 10], [oJX, 1, 9], [oNewspaperZombie, 1, 8], [oCJackinTheBoxZombie, 1, 7], [oCFootballZombie, 1, 6], [oCNewspaperZombie, 1, 5], [oCPoleVaultingZombie, 1, 4], [oDuckyTubeZombie2, 1, 1], [oDuckyTubeZombie3, 1, 1], [oDuckyTubeZombie1, 1, 1], [oDuckyTubeZombie4, 1, 1]],
    FlagNum: 12,
    FlagToSumNum: {
        a1: [65, 128, 192, 190, 199, 216, 215, 231, 220],
        a2: [65, 128, 192, 190, 199, 216, 215, 231, 239]
    },
    FlagToMonitor: {
        3 : [ShowLargeWave, 0],
        8 : [ShowLargeWave, 0],
        11 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(212)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});