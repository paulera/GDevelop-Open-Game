gdjs.MenuCode = {};
gdjs.MenuCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.MenuCode.GDfade_95tiled_95spriteObjects2= [];
gdjs.MenuCode.GDfade_95tiled_95spriteObjects3= [];
gdjs.MenuCode.GDButtonBeginGameObjects1= [];
gdjs.MenuCode.GDButtonBeginGameObjects2= [];
gdjs.MenuCode.GDButtonBeginGameObjects3= [];
gdjs.MenuCode.GDTextBeginGameObjects1= [];
gdjs.MenuCode.GDTextBeginGameObjects2= [];
gdjs.MenuCode.GDTextBeginGameObjects3= [];
gdjs.MenuCode.GDButtonQuitGameObjects1= [];
gdjs.MenuCode.GDButtonQuitGameObjects2= [];
gdjs.MenuCode.GDButtonQuitGameObjects3= [];
gdjs.MenuCode.GDTextQuitGameObjects1= [];
gdjs.MenuCode.GDTextQuitGameObjects2= [];
gdjs.MenuCode.GDTextQuitGameObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.userFunc0xe89540 = function(runtimeScene) {
"use strict";
runtimeScene.getRenderer()._pixiRenderer.cursorStyles = {
    "default": "auto",
    "hover-btn": "pointer"
}
runtimeScene.getRenderer()._pixiRenderer.view.style.cursor = "url('crossair_black.png'), pointer";

};
gdjs.MenuCode.eventsList0xe8bebc = function(runtimeScene) {

{


gdjs.MenuCode.userFunc0xe89540(runtimeScene);

}


}; //End of gdjs.MenuCode.eventsList0xe8bebc
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonBeginGameObjects2Objects = Hashtable.newFrom({"ButtonBeginGame": gdjs.MenuCode.GDButtonBeginGameObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonQuitGameObjects2Objects = Hashtable.newFrom({"ButtonQuitGame": gdjs.MenuCode.GDButtonQuitGameObjects2});gdjs.MenuCode.eventsList0xe896fc = function(runtimeScene) {

{

gdjs.MenuCode.GDButtonBeginGameObjects2.createFrom(runtimeScene.getObjects("ButtonBeginGame"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonBeginGameObjects2Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", true);
}}

}


{

gdjs.MenuCode.GDButtonQuitGameObjects2.createFrom(runtimeScene.getObjects("ButtonQuitGame"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonQuitGameObjects2Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


{
gdjs.MenuCode.GDButtonBeginGameObjects1.createFrom(runtimeScene.getObjects("ButtonBeginGame"));
gdjs.MenuCode.GDButtonQuitGameObjects1.createFrom(runtimeScene.getObjects("ButtonQuitGame"));
{for(var i = 0, len = gdjs.MenuCode.GDButtonBeginGameObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonBeginGameObjects1[i].setAnimationName("unpressed");
}
}{for(var i = 0, len = gdjs.MenuCode.GDButtonQuitGameObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonQuitGameObjects1[i].setAnimationName("unpressed");
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xe896fc
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonQuitGameObjects2Objects = Hashtable.newFrom({"ButtonQuitGame": gdjs.MenuCode.GDButtonQuitGameObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonBeginGameObjects1Objects = Hashtable.newFrom({"ButtonBeginGame": gdjs.MenuCode.GDButtonBeginGameObjects1});gdjs.MenuCode.eventsList0xe8d32c = function(runtimeScene) {

{

gdjs.MenuCode.GDButtonQuitGameObjects2.createFrom(runtimeScene.getObjects("ButtonQuitGame"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonQuitGameObjects2Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDButtonQuitGameObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDButtonQuitGameObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonQuitGameObjects2[i].setAnimationName("pressed");
}
}}

}


{

gdjs.MenuCode.GDButtonBeginGameObjects1.createFrom(runtimeScene.getObjects("ButtonBeginGame"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonBeginGameObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDButtonBeginGameObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDButtonBeginGameObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonBeginGameObjects1[i].setAnimationName("pressed");
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xe8d32c
gdjs.MenuCode.eventsList0x5b7a48 = function(runtimeScene) {

{



}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}
{ //Subevents
gdjs.MenuCode.eventsList0xe8bebc(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageUp");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageDown");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
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


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xe896fc(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15243604);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xe8d32c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0x5b7a48


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.MenuCode.GDfade_95tiled_95spriteObjects2.length = 0;
gdjs.MenuCode.GDfade_95tiled_95spriteObjects3.length = 0;
gdjs.MenuCode.GDButtonBeginGameObjects1.length = 0;
gdjs.MenuCode.GDButtonBeginGameObjects2.length = 0;
gdjs.MenuCode.GDButtonBeginGameObjects3.length = 0;
gdjs.MenuCode.GDTextBeginGameObjects1.length = 0;
gdjs.MenuCode.GDTextBeginGameObjects2.length = 0;
gdjs.MenuCode.GDTextBeginGameObjects3.length = 0;
gdjs.MenuCode.GDButtonQuitGameObjects1.length = 0;
gdjs.MenuCode.GDButtonQuitGameObjects2.length = 0;
gdjs.MenuCode.GDButtonQuitGameObjects3.length = 0;
gdjs.MenuCode.GDTextQuitGameObjects1.length = 0;
gdjs.MenuCode.GDTextQuitGameObjects2.length = 0;
gdjs.MenuCode.GDTextQuitGameObjects3.length = 0;

gdjs.MenuCode.eventsList0x5b7a48(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
