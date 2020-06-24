gdjs.IntroCode = {};
gdjs.IntroCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.IntroCode.GDfade_95tiled_95spriteObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.userFunc0xe8d0d0 = function(runtimeScene) {
"use strict";
runtimeScene.getRenderer()._pixiRenderer.cursorStyles = {
    "default": "auto",
    "hover-btn": "pointer"
}
runtimeScene.getRenderer()._pixiRenderer.view.style.cursor = "url('crossair_black.png'), pointer";

};
gdjs.IntroCode.eventsList0xe8c51c = function(runtimeScene) {

{


gdjs.IntroCode.userFunc0xe8d0d0(runtimeScene);

}


}; //End of gdjs.IntroCode.eventsList0xe8c51c
gdjs.IntroCode.eventsList0x5b7a48 = function(runtimeScene) {

{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}
{ //Subevents
gdjs.IntroCode.eventsList0xe8c51c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageUp");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageDown");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}}

}


{



}


{


{
{}}

}


{


{
{}}

}


{



}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


{
}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(true);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__RoomManager__registerRoom.func(runtimeScene, -(1), 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


}; //End of gdjs.IntroCode.eventsList0x5b7a48


gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.IntroCode.GDfade_95tiled_95spriteObjects2.length = 0;

gdjs.IntroCode.eventsList0x5b7a48(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
