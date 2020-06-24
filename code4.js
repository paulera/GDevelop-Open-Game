gdjs.RoomsCode = {};
gdjs.RoomsCode.stopDoWhile2 = false;

gdjs.RoomsCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.RoomsCode.GDfade_95tiled_95spriteObjects2= [];
gdjs.RoomsCode.GDfade_95tiled_95spriteObjects3= [];
gdjs.RoomsCode.GDfade_95tiled_95spriteObjects4= [];
gdjs.RoomsCode.GDwallsObjects1= [];
gdjs.RoomsCode.GDwallsObjects2= [];
gdjs.RoomsCode.GDwallsObjects3= [];
gdjs.RoomsCode.GDwallsObjects4= [];
gdjs.RoomsCode.GDkitchenObjects1= [];
gdjs.RoomsCode.GDkitchenObjects2= [];
gdjs.RoomsCode.GDkitchenObjects3= [];
gdjs.RoomsCode.GDkitchenObjects4= [];
gdjs.RoomsCode.GDfurnitureObjects1= [];
gdjs.RoomsCode.GDfurnitureObjects2= [];
gdjs.RoomsCode.GDfurnitureObjects3= [];
gdjs.RoomsCode.GDfurnitureObjects4= [];
gdjs.RoomsCode.GDfloorObjects1= [];
gdjs.RoomsCode.GDfloorObjects2= [];
gdjs.RoomsCode.GDfloorObjects3= [];
gdjs.RoomsCode.GDfloorObjects4= [];
gdjs.RoomsCode.GDPlaceholderObjects1= [];
gdjs.RoomsCode.GDPlaceholderObjects2= [];
gdjs.RoomsCode.GDPlaceholderObjects3= [];
gdjs.RoomsCode.GDPlaceholderObjects4= [];
gdjs.RoomsCode.GDNikoObjects1= [];
gdjs.RoomsCode.GDNikoObjects2= [];
gdjs.RoomsCode.GDNikoObjects3= [];
gdjs.RoomsCode.GDNikoObjects4= [];
gdjs.RoomsCode.GDroom2outObjects1= [];
gdjs.RoomsCode.GDroom2outObjects2= [];
gdjs.RoomsCode.GDroom2outObjects3= [];
gdjs.RoomsCode.GDroom2outObjects4= [];
gdjs.RoomsCode.GDroom1outObjects1= [];
gdjs.RoomsCode.GDroom1outObjects2= [];
gdjs.RoomsCode.GDroom1outObjects3= [];
gdjs.RoomsCode.GDroom1outObjects4= [];
gdjs.RoomsCode.GDgun1Objects1= [];
gdjs.RoomsCode.GDgun1Objects2= [];
gdjs.RoomsCode.GDgun1Objects3= [];
gdjs.RoomsCode.GDgun1Objects4= [];
gdjs.RoomsCode.GDgun2Objects1= [];
gdjs.RoomsCode.GDgun2Objects2= [];
gdjs.RoomsCode.GDgun2Objects3= [];
gdjs.RoomsCode.GDgun2Objects4= [];
gdjs.RoomsCode.GDbulletObjects1= [];
gdjs.RoomsCode.GDbulletObjects2= [];
gdjs.RoomsCode.GDbulletObjects3= [];
gdjs.RoomsCode.GDbulletObjects4= [];
gdjs.RoomsCode.GDammoObjects1= [];
gdjs.RoomsCode.GDammoObjects2= [];
gdjs.RoomsCode.GDammoObjects3= [];
gdjs.RoomsCode.GDammoObjects4= [];
gdjs.RoomsCode.GDflowerObjects1= [];
gdjs.RoomsCode.GDflowerObjects2= [];
gdjs.RoomsCode.GDflowerObjects3= [];
gdjs.RoomsCode.GDflowerObjects4= [];
gdjs.RoomsCode.GDcrossairObjects1= [];
gdjs.RoomsCode.GDcrossairObjects2= [];
gdjs.RoomsCode.GDcrossairObjects3= [];
gdjs.RoomsCode.GDcrossairObjects4= [];
gdjs.RoomsCode.GDAmmoTextObjects1= [];
gdjs.RoomsCode.GDAmmoTextObjects2= [];
gdjs.RoomsCode.GDAmmoTextObjects3= [];
gdjs.RoomsCode.GDAmmoTextObjects4= [];
gdjs.RoomsCode.GDroomIndicObjects1= [];
gdjs.RoomsCode.GDroomIndicObjects2= [];
gdjs.RoomsCode.GDroomIndicObjects3= [];
gdjs.RoomsCode.GDroomIndicObjects4= [];

gdjs.RoomsCode.conditionTrue_0 = {val:false};
gdjs.RoomsCode.condition0IsTrue_0 = {val:false};
gdjs.RoomsCode.condition1IsTrue_0 = {val:false};
gdjs.RoomsCode.condition2IsTrue_0 = {val:false};
gdjs.RoomsCode.condition3IsTrue_0 = {val:false};
gdjs.RoomsCode.condition4IsTrue_0 = {val:false};
gdjs.RoomsCode.conditionTrue_1 = {val:false};
gdjs.RoomsCode.condition0IsTrue_1 = {val:false};
gdjs.RoomsCode.condition1IsTrue_1 = {val:false};
gdjs.RoomsCode.condition2IsTrue_1 = {val:false};
gdjs.RoomsCode.condition3IsTrue_1 = {val:false};
gdjs.RoomsCode.condition4IsTrue_1 = {val:false};


gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDroomIndicObjects2Objects = Hashtable.newFrom({"roomIndic": gdjs.RoomsCode.GDroomIndicObjects2});gdjs.RoomsCode.eventsList0xeadfbc = function(runtimeScene) {

}; //End of gdjs.RoomsCode.eventsList0xeadfbc
gdjs.RoomsCode.eventsList0xe8e0ec = function(runtimeScene) {

{


gdjs.RoomsCode.stopDoWhile2 = false;
do {gdjs.RoomsCode.GDroomIndicObjects2.length = 0;

gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("iteration")) == gdjs.evtsExt__RoomManager__allRooms.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + 1);
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDroomIndicObjects2Objects, gdjs.evtsExt__RoomManager__getX.func(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("iteration")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__RoomManager__getY.func(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("iteration")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "");
}{for(var i = 0, len = gdjs.RoomsCode.GDroomIndicObjects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDroomIndicObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("iteration"))));
}
}{runtimeScene.getVariables().get("iteration").add(1);
}
{ //Subevents: 
gdjs.RoomsCode.eventsList0xeadfbc(runtimeScene);} //Subevents end.
}
} else gdjs.RoomsCode.stopDoWhile2 = true; 
} while ( !gdjs.RoomsCode.stopDoWhile2 );

}


}; //End of gdjs.RoomsCode.eventsList0xe8e0ec
gdjs.RoomsCode.eventsList0xe8440c = function(runtimeScene) {

{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition1IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15236932);
}
}}
if (gdjs.RoomsCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("iteration").setNumber(1);
}
{ //Subevents
gdjs.RoomsCode.eventsList0xe8e0ec(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.RoomsCode.eventsList0xe8440c
gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDPlaceholderObjects2Objects = Hashtable.newFrom({"Placeholder": gdjs.RoomsCode.GDPlaceholderObjects2});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDroom2outObjects2ObjectsGDgdjs_46RoomsCode_46GDroom1outObjects2Objects = Hashtable.newFrom({"room2out": gdjs.RoomsCode.GDroom2outObjects2, "room1out": gdjs.RoomsCode.GDroom1outObjects2});gdjs.RoomsCode.eventsList0xe83a9c = function(runtimeScene) {

{

gdjs.RoomsCode.GDPlaceholderObjects2.createFrom(runtimeScene.getObjects("Placeholder"));
gdjs.RoomsCode.GDfade_95tiled_95spriteObjects2.createFrom(runtimeScene.getObjects("fade_tiled_sprite"));
gdjs.RoomsCode.GDroom1outObjects2.createFrom(runtimeScene.getObjects("room1out"));
gdjs.RoomsCode.GDroom2outObjects2.createFrom(runtimeScene.getObjects("room2out"));

gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
gdjs.RoomsCode.condition2IsTrue_0.val = false;
gdjs.RoomsCode.condition3IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDPlaceholderObjects2Objects, gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDroom2outObjects2ObjectsGDgdjs_46RoomsCode_46GDroom1outObjects2Objects, false, runtimeScene, false);
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("fade")) == 0;
}if ( gdjs.RoomsCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.RoomsCode.GDfade_95tiled_95spriteObjects2.length;i<l;++i) {
    if ( gdjs.RoomsCode.GDfade_95tiled_95spriteObjects2[i].getOpacity() > 250 ) {
        gdjs.RoomsCode.condition2IsTrue_0.val = true;
        gdjs.RoomsCode.GDfade_95tiled_95spriteObjects2[k] = gdjs.RoomsCode.GDfade_95tiled_95spriteObjects2[i];
        ++k;
    }
}
gdjs.RoomsCode.GDfade_95tiled_95spriteObjects2.length = k;}if ( gdjs.RoomsCode.condition2IsTrue_0.val ) {
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition3IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15259236);
}
}}
}
}
if (gdjs.RoomsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.RoomsCode.GDPlaceholderObjects2 */
/* Reuse gdjs.RoomsCode.GDroom1outObjects2 */
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects2[i].setAngle((( gdjs.RoomsCode.GDroom1outObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDroom1outObjects2[0].getAngle()));
}
}{gdjs.evtsExt__BackgroundScene__switchBack.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getVariables().get("niko_movement").setNumber(0);
}}

}


{



}


{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
gdjs.RoomsCode.GDPlaceholderObjects1.createFrom(runtimeScene.getObjects("Placeholder"));
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects1.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects1[i].setPosition(gdjs.evtsExt__RoomManager__getX.func(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("currentRoomID")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)),gdjs.evtsExt__RoomManager__getY.func(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("currentRoomID")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


}; //End of gdjs.RoomsCode.eventsList0xe83a9c
gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDPlaceholderObjects2Objects = Hashtable.newFrom({"Placeholder": gdjs.RoomsCode.GDPlaceholderObjects2});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDroom2outObjects2ObjectsGDgdjs_46RoomsCode_46GDroom1outObjects2Objects = Hashtable.newFrom({"room2out": gdjs.RoomsCode.GDroom2outObjects2, "room1out": gdjs.RoomsCode.GDroom1outObjects2});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDfade_9595tiled_9595spriteObjects2Objects = Hashtable.newFrom({"fade_tiled_sprite": gdjs.RoomsCode.GDfade_95tiled_95spriteObjects2});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDfade_9595tiled_9595spriteObjects1Objects = Hashtable.newFrom({"fade_tiled_sprite": gdjs.RoomsCode.GDfade_95tiled_95spriteObjects1});gdjs.RoomsCode.eventsList0xe8c66c = function(runtimeScene) {

{

gdjs.RoomsCode.GDPlaceholderObjects2.createFrom(runtimeScene.getObjects("Placeholder"));
gdjs.RoomsCode.GDroom1outObjects2.createFrom(runtimeScene.getObjects("room1out"));
gdjs.RoomsCode.GDroom2outObjects2.createFrom(runtimeScene.getObjects("room2out"));

gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDPlaceholderObjects2Objects, gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDroom2outObjects2ObjectsGDgdjs_46RoomsCode_46GDroom1outObjects2Objects, false, runtimeScene, false);
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("fade").setNumber(0);
}}

}


{


{
}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("fade")) == 0;
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
gdjs.RoomsCode.GDfade_95tiled_95spriteObjects2.createFrom(runtimeScene.getObjects("fade_tiled_sprite"));
{gdjs.evtsExt__fade__Fadeout.func(runtimeScene, gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDfade_9595tiled_9595spriteObjects2Objects, "New scene", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition0IsTrue_0;
gdjs.RoomsCode.condition0IsTrue_1.val = false;
gdjs.RoomsCode.condition1IsTrue_1.val = false;
{
gdjs.RoomsCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if( gdjs.RoomsCode.condition0IsTrue_1.val ) {
    gdjs.RoomsCode.conditionTrue_1.val = true;
}
}
{
gdjs.RoomsCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if( gdjs.RoomsCode.condition1IsTrue_1.val ) {
    gdjs.RoomsCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("niko_movement").setNumber(1);
}{runtimeScene.getVariables().get("fade").setNumber(1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "fade");
}}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("fade")) == 1;
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
gdjs.RoomsCode.GDfade_95tiled_95spriteObjects1.createFrom(runtimeScene.getObjects("fade_tiled_sprite"));
{gdjs.evtsExt__fade__Fadein.func(runtimeScene, gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDfade_9595tiled_9595spriteObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


}; //End of gdjs.RoomsCode.eventsList0xe8c66c
gdjs.RoomsCode.userFunc0xe8d4e8 = function(runtimeScene) {
"use strict";
runtimeScene.getRenderer()._pixiRenderer.cursorStyles = {
    "default": "auto",
    "hover-btn": "pointer"
}
runtimeScene.getRenderer()._pixiRenderer.view.style.cursor = "url('crossair_black.png'), pointer";

};
gdjs.RoomsCode.eventsList0xe8cd2c = function(runtimeScene) {

{


gdjs.RoomsCode.userFunc0xe8d4e8(runtimeScene);

}


}; //End of gdjs.RoomsCode.eventsList0xe8cd2c
gdjs.RoomsCode.eventsList0xe899c4 = function(runtimeScene) {

{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}
{ //Subevents
gdjs.RoomsCode.eventsList0xe8cd2c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageUp");
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageDown");
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
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


}; //End of gdjs.RoomsCode.eventsList0xe899c4
gdjs.RoomsCode.eventsList0xe8b1a4 = function(runtimeScene) {

{


{
{}{}{}}

}


}; //End of gdjs.RoomsCode.eventsList0xe8b1a4
gdjs.RoomsCode.eventsList0xe85a84 = function(runtimeScene) {

{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("niko_movement")) == 0);
}}
if (gdjs.RoomsCode.condition1IsTrue_0.val) {
gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects3[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("niko_movement")) == 0);
}}
if (gdjs.RoomsCode.condition1IsTrue_0.val) {
gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects3[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("niko_movement")) == 0);
}}
if (gdjs.RoomsCode.condition1IsTrue_0.val) {
gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects3[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("niko_movement")) == 0);
}}
if (gdjs.RoomsCode.condition1IsTrue_0.val) {
gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects3[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


{
}

}


}; //End of gdjs.RoomsCode.eventsList0xe85a84
gdjs.RoomsCode.eventsList0xe82e0c = function(runtimeScene) {

{

gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));

gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.RoomsCode.GDPlaceholderObjects3.length;i<l;++i) {
    if ( gdjs.RoomsCode.GDPlaceholderObjects3[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.RoomsCode.condition0IsTrue_0.val = true;
        gdjs.RoomsCode.GDPlaceholderObjects3[k] = gdjs.RoomsCode.GDPlaceholderObjects3[i];
        ++k;
    }
}
gdjs.RoomsCode.GDPlaceholderObjects3.length = k;}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.RoomsCode.condition1IsTrue_0.val) {
gdjs.RoomsCode.GDNikoObjects3.createFrom(runtimeScene.getObjects("Niko"));
{for(var i = 0, len = gdjs.RoomsCode.GDNikoObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDNikoObjects3[i].setAnimation(1);
}
}}

}


{

gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));

gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.RoomsCode.GDPlaceholderObjects3.length;i<l;++i) {
    if ( !(gdjs.RoomsCode.GDPlaceholderObjects3[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.RoomsCode.condition0IsTrue_0.val = true;
        gdjs.RoomsCode.GDPlaceholderObjects3[k] = gdjs.RoomsCode.GDPlaceholderObjects3[i];
        ++k;
    }
}
gdjs.RoomsCode.GDPlaceholderObjects3.length = k;}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.RoomsCode.condition1IsTrue_0.val) {
gdjs.RoomsCode.GDNikoObjects3.createFrom(runtimeScene.getObjects("Niko"));
{for(var i = 0, len = gdjs.RoomsCode.GDNikoObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDNikoObjects3[i].setAnimation(0);
}
}}

}


{


{
}

}


}; //End of gdjs.RoomsCode.eventsList0xe82e0c
gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDkitchenObjects3Objects = Hashtable.newFrom({"kitchen": gdjs.RoomsCode.GDkitchenObjects3});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDfurnitureObjects3Objects = Hashtable.newFrom({"furniture": gdjs.RoomsCode.GDfurnitureObjects3});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDwallsObjects3Objects = Hashtable.newFrom({"walls": gdjs.RoomsCode.GDwallsObjects3});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDflowerObjects3Objects = Hashtable.newFrom({"flower": gdjs.RoomsCode.GDflowerObjects3});gdjs.RoomsCode.eventsList0xe81f64 = function(runtimeScene) {

{


{
gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));
gdjs.RoomsCode.GDflowerObjects3.createFrom(runtimeScene.getObjects("flower"));
gdjs.RoomsCode.GDfurnitureObjects3.createFrom(runtimeScene.getObjects("furniture"));
gdjs.RoomsCode.GDkitchenObjects3.createFrom(runtimeScene.getObjects("kitchen"));
gdjs.RoomsCode.GDwallsObjects3.createFrom(runtimeScene.getObjects("walls"));
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects3[i].separateFromObjectsList(gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDkitchenObjects3Objects, false);
}
}{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects3[i].separateFromObjectsList(gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDfurnitureObjects3Objects, false);
}
}{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects3[i].separateFromObjectsList(gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDwallsObjects3Objects, false);
}
}{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects3[i].separateFromObjectsList(gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDflowerObjects3Objects, false);
}
}}

}


{


{
}

}


}; //End of gdjs.RoomsCode.eventsList0xe81f64
gdjs.RoomsCode.eventsList0xe86b54 = function(runtimeScene) {

{


{
gdjs.RoomsCode.GDNikoObjects3.createFrom(runtimeScene.getObjects("Niko"));
gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.RoomsCode.GDNikoObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDNikoObjects3[i].setPosition((( gdjs.RoomsCode.GDPlaceholderObjects3.length === 0 ) ? 0 :gdjs.RoomsCode.GDPlaceholderObjects3[0].getPointX("")),(( gdjs.RoomsCode.GDPlaceholderObjects3.length === 0 ) ? 0 :gdjs.RoomsCode.GDPlaceholderObjects3[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.RoomsCode.GDNikoObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDNikoObjects3[i].setAngle((( gdjs.RoomsCode.GDPlaceholderObjects3.length === 0 ) ? 0 :gdjs.RoomsCode.GDPlaceholderObjects3[0].getAngle()));
}
}}

}


{


{
gdjs.RoomsCode.GDPlaceholderObjects2.createFrom(runtimeScene.getObjects("Placeholder"));
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects2[i].hide();
}
}}

}


}; //End of gdjs.RoomsCode.eventsList0xe86b54
gdjs.RoomsCode.eventsList0xe86f8c = function(runtimeScene) {

{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Camera_zoom")) > 0.9;
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Camera_zoom").sub(0.0005);
}}

}


}; //End of gdjs.RoomsCode.eventsList0xe86f8c
gdjs.RoomsCode.eventsList0xe821cc = function(runtimeScene) {

{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Camera_zoom")) < 1;
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Camera_zoom").add(0.0005);
}}

}


}; //End of gdjs.RoomsCode.eventsList0xe821cc
gdjs.RoomsCode.eventsList0xe88074 = function(runtimeScene) {

{


{
gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.RoomsCode.GDPlaceholderObjects3.length !== 0 ? gdjs.RoomsCode.GDPlaceholderObjects3[0] : null), true, "", 0);
}}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Camera_zoom").setNumber(1);
}}

}


{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Camera_zoom")), "", 0);
}}

}


{

gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));

gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.RoomsCode.GDPlaceholderObjects3.length;i<l;++i) {
    if ( gdjs.RoomsCode.GDPlaceholderObjects3[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.RoomsCode.condition0IsTrue_0.val = true;
        gdjs.RoomsCode.GDPlaceholderObjects3[k] = gdjs.RoomsCode.GDPlaceholderObjects3[i];
        ++k;
    }
}
gdjs.RoomsCode.GDPlaceholderObjects3.length = k;}if (gdjs.RoomsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RoomsCode.eventsList0xe86f8c(runtimeScene);} //End of subevents
}

}


{

gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));

gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.RoomsCode.GDPlaceholderObjects3.length;i<l;++i) {
    if ( !(gdjs.RoomsCode.GDPlaceholderObjects3[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.RoomsCode.condition0IsTrue_0.val = true;
        gdjs.RoomsCode.GDPlaceholderObjects3[k] = gdjs.RoomsCode.GDPlaceholderObjects3[i];
        ++k;
    }
}
gdjs.RoomsCode.GDPlaceholderObjects3.length = k;}if (gdjs.RoomsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RoomsCode.eventsList0xe821cc(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.RoomsCode.eventsList0xe88074
gdjs.RoomsCode.eventsList0xe825e4 = function(runtimeScene) {

{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition0IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15214292);
}
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
gdjs.RoomsCode.GDPlaceholderObjects2.createFrom(runtimeScene.getObjects("Placeholder"));
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects2[i].getBehavior("TopDownMovement").setRotateObject(true);
}
}}

}


}; //End of gdjs.RoomsCode.eventsList0xe825e4
gdjs.RoomsCode.eventsList0xe8847c = function(runtimeScene) {

{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition0IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15229252);
}
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RoomsCode.GDPlaceholderObjects2 */
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects2[i].getBehavior("TopDownMovement").setRotateObject(false);
}
}}

}


}; //End of gdjs.RoomsCode.eventsList0xe8847c
gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDPlaceholderObjects2Objects = Hashtable.newFrom({"Placeholder": gdjs.RoomsCode.GDPlaceholderObjects2});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDgun1Objects2Objects = Hashtable.newFrom({"gun1": gdjs.RoomsCode.GDgun1Objects2});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDPlaceholderObjects2Objects = Hashtable.newFrom({"Placeholder": gdjs.RoomsCode.GDPlaceholderObjects2});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDgun2Objects2Objects = Hashtable.newFrom({"gun2": gdjs.RoomsCode.GDgun2Objects2});gdjs.RoomsCode.eventsList0xe81d84 = function(runtimeScene) {

{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition0IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15212148);
}
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
gdjs.RoomsCode.GDAmmoTextObjects2.createFrom(runtimeScene.getObjects("AmmoText"));
gdjs.RoomsCode.GDNikoObjects2.createFrom(runtimeScene.getObjects("Niko"));
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.RoomsCode.GDNikoObjects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDNikoObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.RoomsCode.GDAmmoTextObjects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDAmmoTextObjects2[i].hide();
}
}}

}


}; //End of gdjs.RoomsCode.eventsList0xe81d84
gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDbulletObjects3Objects = Hashtable.newFrom({"bullet": gdjs.RoomsCode.GDbulletObjects3});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDgun1Objects2Objects = Hashtable.newFrom({"gun1": gdjs.RoomsCode.GDgun1Objects2});gdjs.RoomsCode.eventsList0xe811e4 = function(runtimeScene) {

{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition0IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15264172);
}
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
gdjs.RoomsCode.GDAmmoTextObjects3.createFrom(runtimeScene.getObjects("AmmoText"));
gdjs.RoomsCode.GDNikoObjects3.createFrom(runtimeScene.getObjects("Niko"));
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{for(var i = 0, len = gdjs.RoomsCode.GDNikoObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDNikoObjects3[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.RoomsCode.GDAmmoTextObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDAmmoTextObjects3[i].hide(false);
}
}}

}


{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
gdjs.RoomsCode.condition2IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 0;
}if ( gdjs.RoomsCode.condition1IsTrue_0.val ) {
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition2IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15263628);
}
}}
}
if (gdjs.RoomsCode.condition2IsTrue_0.val) {
gdjs.RoomsCode.GDNikoObjects3.createFrom(runtimeScene.getObjects("Niko"));
gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));
gdjs.RoomsCode.GDbulletObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDbulletObjects3Objects, (( gdjs.RoomsCode.GDNikoObjects3.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects3[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects3.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects3[0].getPointY("shoot")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\gun_shot_1.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.RoomsCode.GDbulletObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDbulletObjects3[i].setZOrder(70000);
}
}{for(var i = 0, len = gdjs.RoomsCode.GDbulletObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDbulletObjects3[i].setAngle((( gdjs.RoomsCode.GDPlaceholderObjects3.length === 0 ) ? 0 :gdjs.RoomsCode.GDPlaceholderObjects3[0].getAngle()));
}
}{for(var i = 0, len = gdjs.RoomsCode.GDbulletObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDbulletObjects3[i].addPolarForce((( gdjs.RoomsCode.GDPlaceholderObjects3.length === 0 ) ? 0 :gdjs.RoomsCode.GDPlaceholderObjects3[0].getAngle()), 800, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(1);
}}

}


{



}


{

gdjs.RoomsCode.GDNikoObjects2.createFrom(runtimeScene.getObjects("Niko"));
gdjs.RoomsCode.GDflowerObjects2.createFrom(runtimeScene.getObjects("flower"));
gdjs.RoomsCode.GDfurnitureObjects2.createFrom(runtimeScene.getObjects("furniture"));
gdjs.RoomsCode.GDkitchenObjects2.createFrom(runtimeScene.getObjects("kitchen"));
gdjs.RoomsCode.GDwallsObjects2.createFrom(runtimeScene.getObjects("walls"));

gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
gdjs.RoomsCode.condition2IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.RoomsCode.GDwallsObjects2.length;i<l;++i) {
    if ( !(gdjs.RoomsCode.GDwallsObjects2[i].isCollidingWithPoint((( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointY("shoot")))) ) {
        gdjs.RoomsCode.condition1IsTrue_0.val = true;
        gdjs.RoomsCode.GDwallsObjects2[k] = gdjs.RoomsCode.GDwallsObjects2[i];
        ++k;
    }
}
gdjs.RoomsCode.GDwallsObjects2.length = k;for(var i = 0, k = 0, l = gdjs.RoomsCode.GDflowerObjects2.length;i<l;++i) {
    if ( !(gdjs.RoomsCode.GDflowerObjects2[i].isCollidingWithPoint((( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointY("shoot")))) ) {
        gdjs.RoomsCode.condition1IsTrue_0.val = true;
        gdjs.RoomsCode.GDflowerObjects2[k] = gdjs.RoomsCode.GDflowerObjects2[i];
        ++k;
    }
}
gdjs.RoomsCode.GDflowerObjects2.length = k;for(var i = 0, k = 0, l = gdjs.RoomsCode.GDfurnitureObjects2.length;i<l;++i) {
    if ( !(gdjs.RoomsCode.GDfurnitureObjects2[i].isCollidingWithPoint((( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointY("shoot")))) ) {
        gdjs.RoomsCode.condition1IsTrue_0.val = true;
        gdjs.RoomsCode.GDfurnitureObjects2[k] = gdjs.RoomsCode.GDfurnitureObjects2[i];
        ++k;
    }
}
gdjs.RoomsCode.GDfurnitureObjects2.length = k;for(var i = 0, k = 0, l = gdjs.RoomsCode.GDkitchenObjects2.length;i<l;++i) {
    if ( !(gdjs.RoomsCode.GDkitchenObjects2[i].isCollidingWithPoint((( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointY("shoot")))) ) {
        gdjs.RoomsCode.condition1IsTrue_0.val = true;
        gdjs.RoomsCode.GDkitchenObjects2[k] = gdjs.RoomsCode.GDkitchenObjects2[i];
        ++k;
    }
}
gdjs.RoomsCode.GDkitchenObjects2.length = k;}if ( gdjs.RoomsCode.condition1IsTrue_0.val ) {
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition2IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15270044);
}
}}
}
if (gdjs.RoomsCode.condition2IsTrue_0.val) {
/* Reuse gdjs.RoomsCode.GDNikoObjects2 */
gdjs.RoomsCode.GDPlaceholderObjects2.createFrom(runtimeScene.getObjects("Placeholder"));
gdjs.RoomsCode.GDgun1Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDgun1Objects2Objects, (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointY("shoot")), "");
}{for(var i = 0, len = gdjs.RoomsCode.GDgun1Objects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDgun1Objects2[i].setZOrder(70000);
}
}{for(var i = 0, len = gdjs.RoomsCode.GDgun1Objects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDgun1Objects2[i].setAngle((( gdjs.RoomsCode.GDPlaceholderObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDPlaceholderObjects2[0].getAngle()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


}; //End of gdjs.RoomsCode.eventsList0xe811e4
gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDbulletObjects3Objects = Hashtable.newFrom({"bullet": gdjs.RoomsCode.GDbulletObjects3});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDgun2Objects2Objects = Hashtable.newFrom({"gun2": gdjs.RoomsCode.GDgun2Objects2});gdjs.RoomsCode.eventsList0xe8a2bc = function(runtimeScene) {

{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gun2_shoot");
}}

}


{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition0IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15241916);
}
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
gdjs.RoomsCode.GDAmmoTextObjects3.createFrom(runtimeScene.getObjects("AmmoText"));
gdjs.RoomsCode.GDNikoObjects3.createFrom(runtimeScene.getObjects("Niko"));
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{for(var i = 0, len = gdjs.RoomsCode.GDNikoObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDNikoObjects3[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.RoomsCode.GDAmmoTextObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDAmmoTextObjects3[i].hide(false);
}
}}

}


{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
gdjs.RoomsCode.condition2IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 0;
}if ( gdjs.RoomsCode.condition1IsTrue_0.val ) {
{
gdjs.RoomsCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "gun2_shoot");
}}
}
if (gdjs.RoomsCode.condition2IsTrue_0.val) {
gdjs.RoomsCode.GDNikoObjects3.createFrom(runtimeScene.getObjects("Niko"));
gdjs.RoomsCode.GDPlaceholderObjects3.createFrom(runtimeScene.getObjects("Placeholder"));
gdjs.RoomsCode.GDbulletObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDbulletObjects3Objects, (( gdjs.RoomsCode.GDNikoObjects3.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects3[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects3.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects3[0].getPointY("shoot")), "");
}{for(var i = 0, len = gdjs.RoomsCode.GDbulletObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDbulletObjects3[i].setZOrder(70000);
}
}{for(var i = 0, len = gdjs.RoomsCode.GDbulletObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDbulletObjects3[i].setAngle((( gdjs.RoomsCode.GDPlaceholderObjects3.length === 0 ) ? 0 :gdjs.RoomsCode.GDPlaceholderObjects3[0].getAngle()));
}
}{for(var i = 0, len = gdjs.RoomsCode.GDbulletObjects3.length ;i < len;++i) {
    gdjs.RoomsCode.GDbulletObjects3[i].addPolarForce((( gdjs.RoomsCode.GDPlaceholderObjects3.length === 0 ) ? 0 :gdjs.RoomsCode.GDPlaceholderObjects3[0].getAngle()), 800, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gun2_shoot");
}}

}


{



}


{

gdjs.RoomsCode.GDNikoObjects2.createFrom(runtimeScene.getObjects("Niko"));
gdjs.RoomsCode.GDflowerObjects2.createFrom(runtimeScene.getObjects("flower"));
gdjs.RoomsCode.GDfurnitureObjects2.createFrom(runtimeScene.getObjects("furniture"));
gdjs.RoomsCode.GDkitchenObjects2.createFrom(runtimeScene.getObjects("kitchen"));
gdjs.RoomsCode.GDwallsObjects2.createFrom(runtimeScene.getObjects("walls"));

gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
gdjs.RoomsCode.condition2IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.RoomsCode.GDwallsObjects2.length;i<l;++i) {
    if ( !(gdjs.RoomsCode.GDwallsObjects2[i].isCollidingWithPoint((( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointY("shoot")))) ) {
        gdjs.RoomsCode.condition1IsTrue_0.val = true;
        gdjs.RoomsCode.GDwallsObjects2[k] = gdjs.RoomsCode.GDwallsObjects2[i];
        ++k;
    }
}
gdjs.RoomsCode.GDwallsObjects2.length = k;for(var i = 0, k = 0, l = gdjs.RoomsCode.GDflowerObjects2.length;i<l;++i) {
    if ( !(gdjs.RoomsCode.GDflowerObjects2[i].isCollidingWithPoint((( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointY("shoot")))) ) {
        gdjs.RoomsCode.condition1IsTrue_0.val = true;
        gdjs.RoomsCode.GDflowerObjects2[k] = gdjs.RoomsCode.GDflowerObjects2[i];
        ++k;
    }
}
gdjs.RoomsCode.GDflowerObjects2.length = k;for(var i = 0, k = 0, l = gdjs.RoomsCode.GDfurnitureObjects2.length;i<l;++i) {
    if ( !(gdjs.RoomsCode.GDfurnitureObjects2[i].isCollidingWithPoint((( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointY("shoot")))) ) {
        gdjs.RoomsCode.condition1IsTrue_0.val = true;
        gdjs.RoomsCode.GDfurnitureObjects2[k] = gdjs.RoomsCode.GDfurnitureObjects2[i];
        ++k;
    }
}
gdjs.RoomsCode.GDfurnitureObjects2.length = k;for(var i = 0, k = 0, l = gdjs.RoomsCode.GDkitchenObjects2.length;i<l;++i) {
    if ( !(gdjs.RoomsCode.GDkitchenObjects2[i].isCollidingWithPoint((( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointY("shoot")))) ) {
        gdjs.RoomsCode.condition1IsTrue_0.val = true;
        gdjs.RoomsCode.GDkitchenObjects2[k] = gdjs.RoomsCode.GDkitchenObjects2[i];
        ++k;
    }
}
gdjs.RoomsCode.GDkitchenObjects2.length = k;}if ( gdjs.RoomsCode.condition1IsTrue_0.val ) {
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition2IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15260284);
}
}}
}
if (gdjs.RoomsCode.condition2IsTrue_0.val) {
/* Reuse gdjs.RoomsCode.GDNikoObjects2 */
gdjs.RoomsCode.GDPlaceholderObjects2.createFrom(runtimeScene.getObjects("Placeholder"));
gdjs.RoomsCode.GDgun2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDgun2Objects2Objects, (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointX("shoot")), (( gdjs.RoomsCode.GDNikoObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDNikoObjects2[0].getPointY("shoot")), "");
}{for(var i = 0, len = gdjs.RoomsCode.GDgun2Objects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDgun2Objects2[i].setZOrder(70000);
}
}{for(var i = 0, len = gdjs.RoomsCode.GDgun2Objects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDgun2Objects2[i].setAngle((( gdjs.RoomsCode.GDPlaceholderObjects2.length === 0 ) ? 0 :gdjs.RoomsCode.GDPlaceholderObjects2[0].getAngle()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


}; //End of gdjs.RoomsCode.eventsList0xe8a2bc
gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDPlaceholderObjects2Objects = Hashtable.newFrom({"Placeholder": gdjs.RoomsCode.GDPlaceholderObjects2});gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDammoObjects2Objects = Hashtable.newFrom({"ammo": gdjs.RoomsCode.GDammoObjects2});gdjs.RoomsCode.eventsList0xe8edac = function(runtimeScene) {

{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RoomsCode.eventsList0xe825e4(runtimeScene);} //End of subevents
}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {
gdjs.RoomsCode.GDPlaceholderObjects2.createFrom(runtimeScene.getObjects("Placeholder"));
{for(var i = 0, len = gdjs.RoomsCode.GDPlaceholderObjects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDPlaceholderObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{ //Subevents
gdjs.RoomsCode.eventsList0xe8847c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.RoomsCode.GDPlaceholderObjects2.createFrom(runtimeScene.getObjects("Placeholder"));
gdjs.RoomsCode.GDgun1Objects2.createFrom(runtimeScene.getObjects("gun1"));

gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
gdjs.RoomsCode.condition2IsTrue_0.val = false;
gdjs.RoomsCode.condition3IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDPlaceholderObjects2Objects, gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDgun1Objects2Objects, false, runtimeScene, false);
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if ( gdjs.RoomsCode.condition1IsTrue_0.val ) {
{
gdjs.RoomsCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs.RoomsCode.condition2IsTrue_0.val ) {
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition3IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15223324);
}
}}
}
}
if (gdjs.RoomsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.RoomsCode.GDgun1Objects2 */
{for(var i = 0, len = gdjs.RoomsCode.GDgun1Objects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDgun1Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.RoomsCode.GDPlaceholderObjects2.createFrom(runtimeScene.getObjects("Placeholder"));
gdjs.RoomsCode.GDgun2Objects2.createFrom(runtimeScene.getObjects("gun2"));

gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
gdjs.RoomsCode.condition2IsTrue_0.val = false;
gdjs.RoomsCode.condition3IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDPlaceholderObjects2Objects, gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDgun2Objects2Objects, false, runtimeScene, false);
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if ( gdjs.RoomsCode.condition1IsTrue_0.val ) {
{
gdjs.RoomsCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs.RoomsCode.condition2IsTrue_0.val ) {
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition3IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15215740);
}
}}
}
}
if (gdjs.RoomsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.RoomsCode.GDgun2Objects2 */
{for(var i = 0, len = gdjs.RoomsCode.GDgun2Objects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDgun2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}}

}


{



}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RoomsCode.eventsList0xe81d84(runtimeScene);} //End of subevents
}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RoomsCode.eventsList0xe811e4(runtimeScene);} //End of subevents
}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RoomsCode.eventsList0xe8a2bc(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.RoomsCode.GDPlaceholderObjects2.createFrom(runtimeScene.getObjects("Placeholder"));
gdjs.RoomsCode.GDammoObjects2.createFrom(runtimeScene.getObjects("ammo"));

gdjs.RoomsCode.condition0IsTrue_0.val = false;
gdjs.RoomsCode.condition1IsTrue_0.val = false;
gdjs.RoomsCode.condition2IsTrue_0.val = false;
gdjs.RoomsCode.condition3IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDPlaceholderObjects2Objects, gdjs.RoomsCode.mapOfGDgdjs_46RoomsCode_46GDammoObjects2Objects, false, runtimeScene, false);
}if ( gdjs.RoomsCode.condition0IsTrue_0.val ) {
{
gdjs.RoomsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs.RoomsCode.condition1IsTrue_0.val ) {
{
gdjs.RoomsCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}if ( gdjs.RoomsCode.condition2IsTrue_0.val ) {
{
{gdjs.RoomsCode.conditionTrue_1 = gdjs.RoomsCode.condition3IsTrue_0;
gdjs.RoomsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15382060);
}
}}
}
}
if (gdjs.RoomsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.RoomsCode.GDammoObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(3).add(2);
}{for(var i = 0, len = gdjs.RoomsCode.GDammoObjects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDammoObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.RoomsCode.GDAmmoTextObjects1.createFrom(runtimeScene.getObjects("AmmoText"));
{for(var i = 0, len = gdjs.RoomsCode.GDAmmoTextObjects1.length ;i < len;++i) {
    gdjs.RoomsCode.GDAmmoTextObjects1[i].setString("Ammo: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


}; //End of gdjs.RoomsCode.eventsList0xe8edac
gdjs.RoomsCode.eventsList0xe895a4 = function(runtimeScene) {

{



}


{


gdjs.RoomsCode.eventsList0xe8b1a4(runtimeScene);
}


{


gdjs.RoomsCode.eventsList0xe85a84(runtimeScene);
}


{


gdjs.RoomsCode.eventsList0xe82e0c(runtimeScene);
}


{


gdjs.RoomsCode.eventsList0xe81f64(runtimeScene);
}


{


gdjs.RoomsCode.eventsList0xe86b54(runtimeScene);
}


{


gdjs.RoomsCode.eventsList0xe88074(runtimeScene);
}


{


gdjs.RoomsCode.eventsList0xe8edac(runtimeScene);
}


}; //End of gdjs.RoomsCode.eventsList0xe895a4
gdjs.RoomsCode.eventsList0xe8bc84 = function(runtimeScene) {

{


{
gdjs.RoomsCode.GDroom1outObjects2.createFrom(runtimeScene.getObjects("room1out"));
gdjs.RoomsCode.GDroom2outObjects2.createFrom(runtimeScene.getObjects("room2out"));
{for(var i = 0, len = gdjs.RoomsCode.GDroom2outObjects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDroom2outObjects2[i].hide();
}
for(var i = 0, len = gdjs.RoomsCode.GDroom1outObjects2.length ;i < len;++i) {
    gdjs.RoomsCode.GDroom1outObjects2[i].hide();
}
}}

}


{


gdjs.RoomsCode.condition0IsTrue_0.val = false;
{
gdjs.RoomsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("fade")) == 1;
}if (gdjs.RoomsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RoomsCode.eventsList0xe895a4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.RoomsCode.eventsList0xe8bc84
gdjs.RoomsCode.eventsList0x5b7a48 = function(runtimeScene) {

{



}


{


gdjs.RoomsCode.eventsList0xe8440c(runtimeScene);
}


{


gdjs.RoomsCode.eventsList0xe83a9c(runtimeScene);
}


{


gdjs.RoomsCode.eventsList0xe8c66c(runtimeScene);
}


{


gdjs.RoomsCode.eventsList0xe899c4(runtimeScene);
}


{


gdjs.RoomsCode.eventsList0xe8bc84(runtimeScene);
}


}; //End of gdjs.RoomsCode.eventsList0x5b7a48


gdjs.RoomsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RoomsCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.RoomsCode.GDfade_95tiled_95spriteObjects2.length = 0;
gdjs.RoomsCode.GDfade_95tiled_95spriteObjects3.length = 0;
gdjs.RoomsCode.GDfade_95tiled_95spriteObjects4.length = 0;
gdjs.RoomsCode.GDwallsObjects1.length = 0;
gdjs.RoomsCode.GDwallsObjects2.length = 0;
gdjs.RoomsCode.GDwallsObjects3.length = 0;
gdjs.RoomsCode.GDwallsObjects4.length = 0;
gdjs.RoomsCode.GDkitchenObjects1.length = 0;
gdjs.RoomsCode.GDkitchenObjects2.length = 0;
gdjs.RoomsCode.GDkitchenObjects3.length = 0;
gdjs.RoomsCode.GDkitchenObjects4.length = 0;
gdjs.RoomsCode.GDfurnitureObjects1.length = 0;
gdjs.RoomsCode.GDfurnitureObjects2.length = 0;
gdjs.RoomsCode.GDfurnitureObjects3.length = 0;
gdjs.RoomsCode.GDfurnitureObjects4.length = 0;
gdjs.RoomsCode.GDfloorObjects1.length = 0;
gdjs.RoomsCode.GDfloorObjects2.length = 0;
gdjs.RoomsCode.GDfloorObjects3.length = 0;
gdjs.RoomsCode.GDfloorObjects4.length = 0;
gdjs.RoomsCode.GDPlaceholderObjects1.length = 0;
gdjs.RoomsCode.GDPlaceholderObjects2.length = 0;
gdjs.RoomsCode.GDPlaceholderObjects3.length = 0;
gdjs.RoomsCode.GDPlaceholderObjects4.length = 0;
gdjs.RoomsCode.GDNikoObjects1.length = 0;
gdjs.RoomsCode.GDNikoObjects2.length = 0;
gdjs.RoomsCode.GDNikoObjects3.length = 0;
gdjs.RoomsCode.GDNikoObjects4.length = 0;
gdjs.RoomsCode.GDroom2outObjects1.length = 0;
gdjs.RoomsCode.GDroom2outObjects2.length = 0;
gdjs.RoomsCode.GDroom2outObjects3.length = 0;
gdjs.RoomsCode.GDroom2outObjects4.length = 0;
gdjs.RoomsCode.GDroom1outObjects1.length = 0;
gdjs.RoomsCode.GDroom1outObjects2.length = 0;
gdjs.RoomsCode.GDroom1outObjects3.length = 0;
gdjs.RoomsCode.GDroom1outObjects4.length = 0;
gdjs.RoomsCode.GDgun1Objects1.length = 0;
gdjs.RoomsCode.GDgun1Objects2.length = 0;
gdjs.RoomsCode.GDgun1Objects3.length = 0;
gdjs.RoomsCode.GDgun1Objects4.length = 0;
gdjs.RoomsCode.GDgun2Objects1.length = 0;
gdjs.RoomsCode.GDgun2Objects2.length = 0;
gdjs.RoomsCode.GDgun2Objects3.length = 0;
gdjs.RoomsCode.GDgun2Objects4.length = 0;
gdjs.RoomsCode.GDbulletObjects1.length = 0;
gdjs.RoomsCode.GDbulletObjects2.length = 0;
gdjs.RoomsCode.GDbulletObjects3.length = 0;
gdjs.RoomsCode.GDbulletObjects4.length = 0;
gdjs.RoomsCode.GDammoObjects1.length = 0;
gdjs.RoomsCode.GDammoObjects2.length = 0;
gdjs.RoomsCode.GDammoObjects3.length = 0;
gdjs.RoomsCode.GDammoObjects4.length = 0;
gdjs.RoomsCode.GDflowerObjects1.length = 0;
gdjs.RoomsCode.GDflowerObjects2.length = 0;
gdjs.RoomsCode.GDflowerObjects3.length = 0;
gdjs.RoomsCode.GDflowerObjects4.length = 0;
gdjs.RoomsCode.GDcrossairObjects1.length = 0;
gdjs.RoomsCode.GDcrossairObjects2.length = 0;
gdjs.RoomsCode.GDcrossairObjects3.length = 0;
gdjs.RoomsCode.GDcrossairObjects4.length = 0;
gdjs.RoomsCode.GDAmmoTextObjects1.length = 0;
gdjs.RoomsCode.GDAmmoTextObjects2.length = 0;
gdjs.RoomsCode.GDAmmoTextObjects3.length = 0;
gdjs.RoomsCode.GDAmmoTextObjects4.length = 0;
gdjs.RoomsCode.GDroomIndicObjects1.length = 0;
gdjs.RoomsCode.GDroomIndicObjects2.length = 0;
gdjs.RoomsCode.GDroomIndicObjects3.length = 0;
gdjs.RoomsCode.GDroomIndicObjects4.length = 0;

gdjs.RoomsCode.eventsList0x5b7a48(runtimeScene);
return;

}

gdjs['RoomsCode'] = gdjs.RoomsCode;
