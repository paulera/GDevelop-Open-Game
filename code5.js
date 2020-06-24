gdjs.FunctionsIncludesCode = {};
gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects2= [];

gdjs.FunctionsIncludesCode.conditionTrue_0 = {val:false};
gdjs.FunctionsIncludesCode.condition0IsTrue_0 = {val:false};
gdjs.FunctionsIncludesCode.condition1IsTrue_0 = {val:false};


gdjs.FunctionsIncludesCode.userFunc0xea6cc0 = function(runtimeScene) {
"use strict";
runtimeScene.getRenderer()._pixiRenderer.cursorStyles = {
    "default": "auto",
    "hover-btn": "pointer"
}
runtimeScene.getRenderer()._pixiRenderer.view.style.cursor = "url('crossair_black.png'), pointer";

};
gdjs.FunctionsIncludesCode.eventsList0xe8e0ec = function(runtimeScene) {

{


gdjs.FunctionsIncludesCode.userFunc0xea6cc0(runtimeScene);

}


}; //End of gdjs.FunctionsIncludesCode.eventsList0xe8e0ec
gdjs.FunctionsIncludesCode.eventsList0x5b7a48 = function(runtimeScene) {

{



}


{



}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}
{ //Subevents
gdjs.FunctionsIncludesCode.eventsList0xe8e0ec(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageUp");
}if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageDown");
}if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
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


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(true);
}if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__BackgroundScene__loadBGScene.func(runtimeScene, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__BackgroundScene__switchBack.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__BackgroundScene__switchToBGScene.func(runtimeScene, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RoomManager__goToRoom.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RoomManager__registerRoom.func(runtimeScene, 0, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


}; //End of gdjs.FunctionsIncludesCode.eventsList0x5b7a48


gdjs.FunctionsIncludesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects2.length = 0;

gdjs.FunctionsIncludesCode.eventsList0x5b7a48(runtimeScene);
return;

}

gdjs['FunctionsIncludesCode'] = gdjs.FunctionsIncludesCode;
