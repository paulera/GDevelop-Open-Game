gdjs.SettingsCode = {};
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects2= [];
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects3= [];
gdjs.SettingsCode.GDsettingshadowsObjects1= [];
gdjs.SettingsCode.GDsettingshadowsObjects2= [];
gdjs.SettingsCode.GDsettingshadowsObjects3= [];
gdjs.SettingsCode.GDshadowsObjects1= [];
gdjs.SettingsCode.GDshadowsObjects2= [];
gdjs.SettingsCode.GDshadowsObjects3= [];
gdjs.SettingsCode.GDVolumeObjects1= [];
gdjs.SettingsCode.GDVolumeObjects2= [];
gdjs.SettingsCode.GDVolumeObjects3= [];
gdjs.SettingsCode.GDSettingsObjects1= [];
gdjs.SettingsCode.GDSettingsObjects2= [];
gdjs.SettingsCode.GDSettingsObjects3= [];
gdjs.SettingsCode.GDsettingsoundObjects1= [];
gdjs.SettingsCode.GDsettingsoundObjects2= [];
gdjs.SettingsCode.GDsettingsoundObjects3= [];
gdjs.SettingsCode.GDsoundObjects1= [];
gdjs.SettingsCode.GDsoundObjects2= [];
gdjs.SettingsCode.GDsoundObjects3= [];
gdjs.SettingsCode.GDsettingfullscreenObjects1= [];
gdjs.SettingsCode.GDsettingfullscreenObjects2= [];
gdjs.SettingsCode.GDsettingfullscreenObjects3= [];
gdjs.SettingsCode.GDFullscreenObjects1= [];
gdjs.SettingsCode.GDFullscreenObjects2= [];
gdjs.SettingsCode.GDFullscreenObjects3= [];
gdjs.SettingsCode.GDvolplusObjects1= [];
gdjs.SettingsCode.GDvolplusObjects2= [];
gdjs.SettingsCode.GDvolplusObjects3= [];
gdjs.SettingsCode.GDvolminusObjects1= [];
gdjs.SettingsCode.GDvolminusObjects2= [];
gdjs.SettingsCode.GDvolminusObjects3= [];
gdjs.SettingsCode.GDbackObjects1= [];
gdjs.SettingsCode.GDbackObjects2= [];
gdjs.SettingsCode.GDbackObjects3= [];
gdjs.SettingsCode.GDvolumevolumeObjects1= [];
gdjs.SettingsCode.GDvolumevolumeObjects2= [];
gdjs.SettingsCode.GDvolumevolumeObjects3= [];
gdjs.SettingsCode.GDminusObjects1= [];
gdjs.SettingsCode.GDminusObjects2= [];
gdjs.SettingsCode.GDminusObjects3= [];
gdjs.SettingsCode.GDplusObjects1= [];
gdjs.SettingsCode.GDplusObjects2= [];
gdjs.SettingsCode.GDplusObjects3= [];
gdjs.SettingsCode.GDgobackObjects1= [];
gdjs.SettingsCode.GDgobackObjects2= [];
gdjs.SettingsCode.GDgobackObjects3= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};
gdjs.SettingsCode.condition3IsTrue_0 = {val:false};
gdjs.SettingsCode.conditionTrue_1 = {val:false};
gdjs.SettingsCode.condition0IsTrue_1 = {val:false};
gdjs.SettingsCode.condition1IsTrue_1 = {val:false};
gdjs.SettingsCode.condition2IsTrue_1 = {val:false};
gdjs.SettingsCode.condition3IsTrue_1 = {val:false};


gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackObjects2Objects = Hashtable.newFrom({"back": gdjs.SettingsCode.GDbackObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackObjects2Objects = Hashtable.newFrom({"back": gdjs.SettingsCode.GDbackObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.SettingsCode.GDbackObjects1});gdjs.SettingsCode.eventsList0xe8ebd4 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDvolumevolumeObjects2.createFrom(runtimeScene.getObjects("volumevolume"));
{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Volume")));
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Volume")) == 100;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDvolumevolumeObjects2.createFrom(runtimeScene.getObjects("volumevolume"));
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects2[i].setString("100");
}
}{runtimeScene.getGame().getVariables().get("Volume").setNumber(100);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Volume")) > 100;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDvolumevolumeObjects2.createFrom(runtimeScene.getObjects("volumevolume"));
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects2[i].setString("100");
}
}{runtimeScene.getGame().getVariables().get("Volume").setNumber(100);
}}

}


{

gdjs.SettingsCode.GDbackObjects2.createFrom(runtimeScene.getObjects("back"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDbackObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDbackObjects2[i].setAnimationName("pressed");
}
}}

}


{

gdjs.SettingsCode.GDbackObjects2.createFrom(runtimeScene.getObjects("back"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackObjects2Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDbackObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDbackObjects2[i].setAnimationName("nopressed");
}
}}

}


{

gdjs.SettingsCode.GDbackObjects1.createFrom(runtimeScene.getObjects("back"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.SettingsCode.eventsList0xe8ebd4
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingshadowsObjects2Objects = Hashtable.newFrom({"settingshadows": gdjs.SettingsCode.GDsettingshadowsObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingshadowsObjects2Objects = Hashtable.newFrom({"settingshadows": gdjs.SettingsCode.GDsettingshadowsObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingshadowsObjects1Objects = Hashtable.newFrom({"settingshadows": gdjs.SettingsCode.GDsettingshadowsObjects1});gdjs.SettingsCode.eventsList0xe8b18c = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("shadowsetting")) == "untoggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDshadowsObjects2.createFrom(runtimeScene.getObjects("shadows"));
{for(var i = 0, len = gdjs.SettingsCode.GDshadowsObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDshadowsObjects2[i].setString("Shadows: On");
}
}{runtimeScene.getGame().getVariables().get("shadowsetting").setString("toggled");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("shadowsetting")) == "toggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDshadowsObjects1.createFrom(runtimeScene.getObjects("shadows"));
{for(var i = 0, len = gdjs.SettingsCode.GDshadowsObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDshadowsObjects1[i].setString("Shadows: Off");
}
}{runtimeScene.getGame().getVariables().get("shadowsetting").setString("untoggled");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


}; //End of gdjs.SettingsCode.eventsList0xe8b18c
gdjs.SettingsCode.eventsList0xe8d134 = function(runtimeScene) {

{

gdjs.SettingsCode.GDsettingshadowsObjects2.createFrom(runtimeScene.getObjects("settingshadows"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingshadowsObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDsettingshadowsObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDsettingshadowsObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDsettingshadowsObjects2[i].setAnimationName("pressed");
}
}}

}


{

gdjs.SettingsCode.GDsettingshadowsObjects2.createFrom(runtimeScene.getObjects("settingshadows"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingshadowsObjects2Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDsettingshadowsObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDsettingshadowsObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDsettingshadowsObjects2[i].setAnimationName("nopressed");
}
}}

}


{

gdjs.SettingsCode.GDsettingshadowsObjects1.createFrom(runtimeScene.getObjects("settingshadows"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingshadowsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition2IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15242588);
}
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("");
}
{ //Subevents
gdjs.SettingsCode.eventsList0xe8b18c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.SettingsCode.eventsList0xe8d134
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingsoundObjects2Objects = Hashtable.newFrom({"settingsound": gdjs.SettingsCode.GDsettingsoundObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingsoundObjects2Objects = Hashtable.newFrom({"settingsound": gdjs.SettingsCode.GDsettingsoundObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingsoundObjects1Objects = Hashtable.newFrom({"settingsound": gdjs.SettingsCode.GDsettingsoundObjects1});gdjs.SettingsCode.eventsList0xe81b6c = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("soundsetting")) == "untoggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDsoundObjects2.createFrom(runtimeScene.getObjects("sound"));
{for(var i = 0, len = gdjs.SettingsCode.GDsoundObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDsoundObjects2[i].setString("Sound: On");
}
}{runtimeScene.getGame().getVariables().get("soundsetting").setString("toggled");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("soundsetting")) == "toggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDsoundObjects1.createFrom(runtimeScene.getObjects("sound"));
{for(var i = 0, len = gdjs.SettingsCode.GDsoundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDsoundObjects1[i].setString("Sound: Off");
}
}{runtimeScene.getGame().getVariables().get("soundsetting").setString("untoggled");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


}; //End of gdjs.SettingsCode.eventsList0xe81b6c
gdjs.SettingsCode.eventsList0xe8b894 = function(runtimeScene) {

{

gdjs.SettingsCode.GDsettingsoundObjects2.createFrom(runtimeScene.getObjects("settingsound"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingsoundObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDsettingsoundObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDsettingsoundObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDsettingsoundObjects2[i].setAnimationName("pressed");
}
}}

}


{

gdjs.SettingsCode.GDsettingsoundObjects2.createFrom(runtimeScene.getObjects("settingsound"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingsoundObjects2Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDsettingsoundObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDsettingsoundObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDsettingsoundObjects2[i].setAnimationName("nopressed");
}
}}

}


{

gdjs.SettingsCode.GDsettingsoundObjects1.createFrom(runtimeScene.getObjects("settingsound"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingsoundObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition2IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15227636);
}
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setString("");
}
{ //Subevents
gdjs.SettingsCode.eventsList0xe81b6c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.SettingsCode.eventsList0xe8b894
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolplusObjects2Objects = Hashtable.newFrom({"volplus": gdjs.SettingsCode.GDvolplusObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolplusObjects2Objects = Hashtable.newFrom({"volplus": gdjs.SettingsCode.GDvolplusObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolplusObjects1Objects = Hashtable.newFrom({"volplus": gdjs.SettingsCode.GDvolplusObjects1});gdjs.SettingsCode.eventsList0xe8ee64 = function(runtimeScene) {

{

gdjs.SettingsCode.GDvolplusObjects2.createFrom(runtimeScene.getObjects("volplus"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolplusObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDvolplusObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDvolplusObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolplusObjects2[i].setAnimationName("pressed");
}
}}

}


{

gdjs.SettingsCode.GDvolplusObjects2.createFrom(runtimeScene.getObjects("volplus"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolplusObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition2IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15239444);
}
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
gdjs.SettingsCode.GDvolumevolumeObjects2.createFrom(runtimeScene.getObjects("volumevolume"));
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Volume")));
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Volume")));
}
}{runtimeScene.getGame().getVariables().get("Volume").add(1);
}}

}


{

gdjs.SettingsCode.GDvolplusObjects1.createFrom(runtimeScene.getObjects("volplus"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolplusObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDvolplusObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDvolplusObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolplusObjects1[i].setAnimationName("nopressed");
}
}}

}


}; //End of gdjs.SettingsCode.eventsList0xe8ee64
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolminusObjects2Objects = Hashtable.newFrom({"volminus": gdjs.SettingsCode.GDvolminusObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolminusObjects2Objects = Hashtable.newFrom({"volminus": gdjs.SettingsCode.GDvolminusObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolminusObjects1Objects = Hashtable.newFrom({"volminus": gdjs.SettingsCode.GDvolminusObjects1});gdjs.SettingsCode.eventsList0xe862dc = function(runtimeScene) {

{

gdjs.SettingsCode.GDvolminusObjects2.createFrom(runtimeScene.getObjects("volminus"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolminusObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDvolminusObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDvolminusObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolminusObjects2[i].setAnimationName("pressed");
}
}}

}


{

gdjs.SettingsCode.GDvolminusObjects2.createFrom(runtimeScene.getObjects("volminus"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolminusObjects2Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDvolminusObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDvolminusObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolminusObjects2[i].setAnimationName("nopressed");
}
}}

}


{

gdjs.SettingsCode.GDvolminusObjects1.createFrom(runtimeScene.getObjects("volminus"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolminusObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition2IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15211844);
}
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
gdjs.SettingsCode.GDvolumevolumeObjects1.createFrom(runtimeScene.getObjects("volumevolume"));
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Volume")));
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Volume")));
}
}{runtimeScene.getGame().getVariables().get("Volume").sub(1);
}}

}


}; //End of gdjs.SettingsCode.eventsList0xe862dc
gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingfullscreenObjects2Objects = Hashtable.newFrom({"settingfullscreen": gdjs.SettingsCode.GDsettingfullscreenObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingfullscreenObjects2Objects = Hashtable.newFrom({"settingfullscreen": gdjs.SettingsCode.GDsettingfullscreenObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingfullscreenObjects1Objects = Hashtable.newFrom({"settingfullscreen": gdjs.SettingsCode.GDsettingfullscreenObjects1});gdjs.SettingsCode.eventsList0xe8857c = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("fullscreen")) == "untoggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDFullscreenObjects2.createFrom(runtimeScene.getObjects("Fullscreen"));
{for(var i = 0, len = gdjs.SettingsCode.GDFullscreenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDFullscreenObjects2[i].setString("Fullscreen: On");
}
}{runtimeScene.getGame().getVariables().get("fullscreen").setString("toggled");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("fullscreen")) == "toggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDFullscreenObjects1.createFrom(runtimeScene.getObjects("Fullscreen"));
{for(var i = 0, len = gdjs.SettingsCode.GDFullscreenObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDFullscreenObjects1[i].setString("Fullscreen: Off");
}
}{runtimeScene.getGame().getVariables().get("fullscreen").setString("untoggled");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


}; //End of gdjs.SettingsCode.eventsList0xe8857c
gdjs.SettingsCode.eventsList0xe819a4 = function(runtimeScene) {

{

gdjs.SettingsCode.GDsettingfullscreenObjects2.createFrom(runtimeScene.getObjects("settingfullscreen"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingfullscreenObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDsettingfullscreenObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDsettingfullscreenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDsettingfullscreenObjects2[i].setAnimationName("pressed");
}
}}

}


{

gdjs.SettingsCode.GDsettingfullscreenObjects2.createFrom(runtimeScene.getObjects("settingfullscreen"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingfullscreenObjects2Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDsettingfullscreenObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDsettingfullscreenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDsettingfullscreenObjects2[i].setAnimationName("nopressed");
}
}}

}


{

gdjs.SettingsCode.GDsettingfullscreenObjects1.createFrom(runtimeScene.getObjects("settingfullscreen"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDsettingfullscreenObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition2IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15213428);
}
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setString("");
}
{ //Subevents
gdjs.SettingsCode.eventsList0xe8857c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.SettingsCode.eventsList0xe819a4
gdjs.SettingsCode.userFunc0xe86718 = function(runtimeScene) {
"use strict";
runtimeScene.getRenderer()._pixiRenderer.cursorStyles = {
    "default": "auto",
    "hover-btn": "pointer"
}
runtimeScene.getRenderer()._pixiRenderer.view.style.cursor = "url('crossair_black.png'), pointer";

};
gdjs.SettingsCode.eventsList0xe86b74 = function(runtimeScene) {

{


gdjs.SettingsCode.userFunc0xe86718(runtimeScene);

}


}; //End of gdjs.SettingsCode.eventsList0xe86b74
gdjs.SettingsCode.eventsList0xe8802c = function(runtimeScene) {

{



}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}
{ //Subevents
gdjs.SettingsCode.eventsList0xe86b74(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageUp");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageDown");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
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


}; //End of gdjs.SettingsCode.eventsList0xe8802c
gdjs.SettingsCode.eventsList0x5b7a48 = function(runtimeScene) {

{


gdjs.SettingsCode.eventsList0xe8ebd4(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0xe8d134(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0xe8b894(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0xe8ee64(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0xe862dc(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0xe819a4(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0xe8802c(runtimeScene);
}


}; //End of gdjs.SettingsCode.eventsList0x5b7a48


gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects2.length = 0;
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects3.length = 0;
gdjs.SettingsCode.GDsettingshadowsObjects1.length = 0;
gdjs.SettingsCode.GDsettingshadowsObjects2.length = 0;
gdjs.SettingsCode.GDsettingshadowsObjects3.length = 0;
gdjs.SettingsCode.GDshadowsObjects1.length = 0;
gdjs.SettingsCode.GDshadowsObjects2.length = 0;
gdjs.SettingsCode.GDshadowsObjects3.length = 0;
gdjs.SettingsCode.GDVolumeObjects1.length = 0;
gdjs.SettingsCode.GDVolumeObjects2.length = 0;
gdjs.SettingsCode.GDVolumeObjects3.length = 0;
gdjs.SettingsCode.GDSettingsObjects1.length = 0;
gdjs.SettingsCode.GDSettingsObjects2.length = 0;
gdjs.SettingsCode.GDSettingsObjects3.length = 0;
gdjs.SettingsCode.GDsettingsoundObjects1.length = 0;
gdjs.SettingsCode.GDsettingsoundObjects2.length = 0;
gdjs.SettingsCode.GDsettingsoundObjects3.length = 0;
gdjs.SettingsCode.GDsoundObjects1.length = 0;
gdjs.SettingsCode.GDsoundObjects2.length = 0;
gdjs.SettingsCode.GDsoundObjects3.length = 0;
gdjs.SettingsCode.GDsettingfullscreenObjects1.length = 0;
gdjs.SettingsCode.GDsettingfullscreenObjects2.length = 0;
gdjs.SettingsCode.GDsettingfullscreenObjects3.length = 0;
gdjs.SettingsCode.GDFullscreenObjects1.length = 0;
gdjs.SettingsCode.GDFullscreenObjects2.length = 0;
gdjs.SettingsCode.GDFullscreenObjects3.length = 0;
gdjs.SettingsCode.GDvolplusObjects1.length = 0;
gdjs.SettingsCode.GDvolplusObjects2.length = 0;
gdjs.SettingsCode.GDvolplusObjects3.length = 0;
gdjs.SettingsCode.GDvolminusObjects1.length = 0;
gdjs.SettingsCode.GDvolminusObjects2.length = 0;
gdjs.SettingsCode.GDvolminusObjects3.length = 0;
gdjs.SettingsCode.GDbackObjects1.length = 0;
gdjs.SettingsCode.GDbackObjects2.length = 0;
gdjs.SettingsCode.GDbackObjects3.length = 0;
gdjs.SettingsCode.GDvolumevolumeObjects1.length = 0;
gdjs.SettingsCode.GDvolumevolumeObjects2.length = 0;
gdjs.SettingsCode.GDvolumevolumeObjects3.length = 0;
gdjs.SettingsCode.GDminusObjects1.length = 0;
gdjs.SettingsCode.GDminusObjects2.length = 0;
gdjs.SettingsCode.GDminusObjects3.length = 0;
gdjs.SettingsCode.GDplusObjects1.length = 0;
gdjs.SettingsCode.GDplusObjects2.length = 0;
gdjs.SettingsCode.GDplusObjects3.length = 0;
gdjs.SettingsCode.GDgobackObjects1.length = 0;
gdjs.SettingsCode.GDgobackObjects2.length = 0;
gdjs.SettingsCode.GDgobackObjects3.length = 0;

gdjs.SettingsCode.eventsList0x5b7a48(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
