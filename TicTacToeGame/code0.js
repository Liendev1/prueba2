gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.forEachIndex2 = 0;

gdjs.Untitled_32sceneCode.forEachObjects2 = [];

gdjs.Untitled_32sceneCode.forEachTemporary2 = null;

gdjs.Untitled_32sceneCode.forEachTotalCount2 = 0;

gdjs.Untitled_32sceneCode.GDcuboObjects1= [];
gdjs.Untitled_32sceneCode.GDcuboObjects2= [];
gdjs.Untitled_32sceneCode.GDcuboObjects3= [];
gdjs.Untitled_32sceneCode.GDcuboObjects4= [];
gdjs.Untitled_32sceneCode.GDcuboObjects5= [];
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects1= [];
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects2= [];
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects3= [];
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects4= [];
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects5= [];
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects1= [];
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2= [];
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects3= [];
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects4= [];
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects5= [];
gdjs.Untitled_32sceneCode.GDLine1Objects1= [];
gdjs.Untitled_32sceneCode.GDLine1Objects2= [];
gdjs.Untitled_32sceneCode.GDLine1Objects3= [];
gdjs.Untitled_32sceneCode.GDLine1Objects4= [];
gdjs.Untitled_32sceneCode.GDLine1Objects5= [];
gdjs.Untitled_32sceneCode.GDLine2Objects1= [];
gdjs.Untitled_32sceneCode.GDLine2Objects2= [];
gdjs.Untitled_32sceneCode.GDLine2Objects3= [];
gdjs.Untitled_32sceneCode.GDLine2Objects4= [];
gdjs.Untitled_32sceneCode.GDLine2Objects5= [];
gdjs.Untitled_32sceneCode.GDLine3Objects1= [];
gdjs.Untitled_32sceneCode.GDLine3Objects2= [];
gdjs.Untitled_32sceneCode.GDLine3Objects3= [];
gdjs.Untitled_32sceneCode.GDLine3Objects4= [];
gdjs.Untitled_32sceneCode.GDLine3Objects5= [];
gdjs.Untitled_32sceneCode.GDLine4Objects1= [];
gdjs.Untitled_32sceneCode.GDLine4Objects2= [];
gdjs.Untitled_32sceneCode.GDLine4Objects3= [];
gdjs.Untitled_32sceneCode.GDLine4Objects4= [];
gdjs.Untitled_32sceneCode.GDLine4Objects5= [];
gdjs.Untitled_32sceneCode.GDLine5Objects1= [];
gdjs.Untitled_32sceneCode.GDLine5Objects2= [];
gdjs.Untitled_32sceneCode.GDLine5Objects3= [];
gdjs.Untitled_32sceneCode.GDLine5Objects4= [];
gdjs.Untitled_32sceneCode.GDLine5Objects5= [];
gdjs.Untitled_32sceneCode.GDLine6Objects1= [];
gdjs.Untitled_32sceneCode.GDLine6Objects2= [];
gdjs.Untitled_32sceneCode.GDLine6Objects3= [];
gdjs.Untitled_32sceneCode.GDLine6Objects4= [];
gdjs.Untitled_32sceneCode.GDLine6Objects5= [];
gdjs.Untitled_32sceneCode.GDLine7Objects1= [];
gdjs.Untitled_32sceneCode.GDLine7Objects2= [];
gdjs.Untitled_32sceneCode.GDLine7Objects3= [];
gdjs.Untitled_32sceneCode.GDLine7Objects4= [];
gdjs.Untitled_32sceneCode.GDLine7Objects5= [];
gdjs.Untitled_32sceneCode.GDLine8Objects1= [];
gdjs.Untitled_32sceneCode.GDLine8Objects2= [];
gdjs.Untitled_32sceneCode.GDLine8Objects3= [];
gdjs.Untitled_32sceneCode.GDLine8Objects4= [];
gdjs.Untitled_32sceneCode.GDLine8Objects5= [];
gdjs.Untitled_32sceneCode.GDbtnResetObjects1= [];
gdjs.Untitled_32sceneCode.GDbtnResetObjects2= [];
gdjs.Untitled_32sceneCode.GDbtnResetObjects3= [];
gdjs.Untitled_32sceneCode.GDbtnResetObjects4= [];
gdjs.Untitled_32sceneCode.GDbtnResetObjects5= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects4= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects5= [];
gdjs.Untitled_32sceneCode.GDFonfoObjects1= [];
gdjs.Untitled_32sceneCode.GDFonfoObjects2= [];
gdjs.Untitled_32sceneCode.GDFonfoObjects3= [];
gdjs.Untitled_32sceneCode.GDFonfoObjects4= [];
gdjs.Untitled_32sceneCode.GDFonfoObjects5= [];
gdjs.Untitled_32sceneCode.GDLogoObjects1= [];
gdjs.Untitled_32sceneCode.GDLogoObjects2= [];
gdjs.Untitled_32sceneCode.GDLogoObjects3= [];
gdjs.Untitled_32sceneCode.GDLogoObjects4= [];
gdjs.Untitled_32sceneCode.GDLogoObjects5= [];


gdjs.Untitled_32sceneCode.userFunc0xc8d4e8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Obtén todas las instancias del objeto "cubo"
let cubos = runtimeScene.getObjects("cubo");

// Itera sobre cada cubo y asigna una ID única
for (let i = 0; i < cubos.length; i++) {
    let cubo = cubos[i];
    
    // Asigna una variable ID única a cada cubo
    cubo.getVariables().get("Id").setNumber(i + 1);
}
};
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Line1"), gdjs.Untitled_32sceneCode.GDLine1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Line2"), gdjs.Untitled_32sceneCode.GDLine2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Line3"), gdjs.Untitled_32sceneCode.GDLine3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Line4"), gdjs.Untitled_32sceneCode.GDLine4Objects2);
gdjs.copyArray(runtimeScene.getObjects("Line5"), gdjs.Untitled_32sceneCode.GDLine5Objects2);
gdjs.copyArray(runtimeScene.getObjects("Line6"), gdjs.Untitled_32sceneCode.GDLine6Objects2);
gdjs.copyArray(runtimeScene.getObjects("Line7"), gdjs.Untitled_32sceneCode.GDLine7Objects2);
gdjs.copyArray(runtimeScene.getObjects("Line8"), gdjs.Untitled_32sceneCode.GDLine8Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine1Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine3Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine3Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine4Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine4Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine5Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine5Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine6Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine6Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine7Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine7Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine8Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine8Objects2[i].hide();
}
}}

}


{


gdjs.Untitled_32sceneCode.userFunc0xc8d4e8(runtimeScene);

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects = Hashtable.newFrom({"cubo": gdjs.Untitled_32sceneCode.GDcuboObjects3});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects3, gdjs.Untitled_32sceneCode.GDcuboObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects4[k] = gdjs.Untitled_32sceneCode.GDcuboObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "circulo";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").setAnimationName("Circulo");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("x");
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].setColor("255;0;0");
}
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "x";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").setAnimationName("X");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("circulo");
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].setColor("25;13;255");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects = Hashtable.newFrom({"cubo": gdjs.Untitled_32sceneCode.GDcuboObjects3});
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects3, gdjs.Untitled_32sceneCode.GDcuboObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects4[k] = gdjs.Untitled_32sceneCode.GDcuboObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "circulo";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").setAnimationName("Circulo");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("x");
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].setColor("255;0;0");
}
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "x";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").setAnimationName("X");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("circulo");
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(2);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].setColor("25;13;255");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects = Hashtable.newFrom({"cubo": gdjs.Untitled_32sceneCode.GDcuboObjects3});
gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects3, gdjs.Untitled_32sceneCode.GDcuboObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects4[k] = gdjs.Untitled_32sceneCode.GDcuboObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "circulo";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").setAnimationName("Circulo");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("x");
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].setColor("255;0;0");
}
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "x";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").setAnimationName("X");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("circulo");
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(2);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].setColor("25;13;255");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects = Hashtable.newFrom({"cubo": gdjs.Untitled_32sceneCode.GDcuboObjects3});
gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects3, gdjs.Untitled_32sceneCode.GDcuboObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects4[k] = gdjs.Untitled_32sceneCode.GDcuboObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "circulo";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").setAnimationName("Circulo");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("x");
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].setColor("255;0;0");
}
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "x";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").setAnimationName("X");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("circulo");
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(2);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].setColor("25;13;255");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects = Hashtable.newFrom({"cubo": gdjs.Untitled_32sceneCode.GDcuboObjects3});
gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects3, gdjs.Untitled_32sceneCode.GDcuboObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects4[k] = gdjs.Untitled_32sceneCode.GDcuboObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "circulo";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").setAnimationName("Circulo");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("x");
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].setColor("255;0;0");
}
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "x";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").setAnimationName("X");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("circulo");
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(2);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].setColor("25;13;255");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects = Hashtable.newFrom({"cubo": gdjs.Untitled_32sceneCode.GDcuboObjects3});
gdjs.Untitled_32sceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects3, gdjs.Untitled_32sceneCode.GDcuboObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects4[k] = gdjs.Untitled_32sceneCode.GDcuboObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "circulo";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").setAnimationName("Circulo");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("x");
}{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].setColor("255;0;0");
}
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "x";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").setAnimationName("X");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("circulo");
}{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(2);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].setColor("25;13;255");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects = Hashtable.newFrom({"cubo": gdjs.Untitled_32sceneCode.GDcuboObjects3});
gdjs.Untitled_32sceneCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects3, gdjs.Untitled_32sceneCode.GDcuboObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects4[k] = gdjs.Untitled_32sceneCode.GDcuboObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "circulo";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").setAnimationName("Circulo");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("x");
}{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].setColor("255;0;0");
}
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "x";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").setAnimationName("X");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("circulo");
}{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(2);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].setColor("25;13;255");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects = Hashtable.newFrom({"cubo": gdjs.Untitled_32sceneCode.GDcuboObjects3});
gdjs.Untitled_32sceneCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects3, gdjs.Untitled_32sceneCode.GDcuboObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects4[k] = gdjs.Untitled_32sceneCode.GDcuboObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "circulo";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").setAnimationName("Circulo");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("x");
}{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].setColor("255;0;0");
}
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "x";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").setAnimationName("X");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("circulo");
}{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(2);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].setColor("25;13;255");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects = Hashtable.newFrom({"cubo": gdjs.Untitled_32sceneCode.GDcuboObjects3});
gdjs.Untitled_32sceneCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects3, gdjs.Untitled_32sceneCode.GDcuboObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects4[k] = gdjs.Untitled_32sceneCode.GDcuboObjects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "circulo";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].getBehavior("Animation").setAnimationName("Circulo");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("x");
}{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects4[i].setColor("255;0;0");
}
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").getAnimationName() == "Vacio" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "x";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcuboObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getBehavior("Animation").setAnimationName("X");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("circulo");
}{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(2);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcuboObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcuboObjects3[i].setColor("25;13;255");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects2, gdjs.Untitled_32sceneCode.GDcuboObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects2, gdjs.Untitled_32sceneCode.GDcuboObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects2, gdjs.Untitled_32sceneCode.GDcuboObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects2, gdjs.Untitled_32sceneCode.GDcuboObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects2, gdjs.Untitled_32sceneCode.GDcuboObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects2, gdjs.Untitled_32sceneCode.GDcuboObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects2, gdjs.Untitled_32sceneCode.GDcuboObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects2, gdjs.Untitled_32sceneCode.GDcuboObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDcuboObjects2, gdjs.Untitled_32sceneCode.GDcuboObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcuboObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDcuboObjects3[i].getVariables().getFromIndex(0)) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcuboObjects3[k] = gdjs.Untitled_32sceneCode.GDcuboObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcuboObjects3Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("cubo"), gdjs.Untitled_32sceneCode.GDcuboObjects1);

for (gdjs.Untitled_32sceneCode.forEachIndex2 = 0;gdjs.Untitled_32sceneCode.forEachIndex2 < gdjs.Untitled_32sceneCode.GDcuboObjects1.length;++gdjs.Untitled_32sceneCode.forEachIndex2) {
gdjs.Untitled_32sceneCode.GDcuboObjects2.length = 0;


gdjs.Untitled_32sceneCode.forEachTemporary2 = gdjs.Untitled_32sceneCode.GDcuboObjects1[gdjs.Untitled_32sceneCode.forEachIndex2];
gdjs.Untitled_32sceneCode.GDcuboObjects2.push(gdjs.Untitled_32sceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "comienzo";
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.Untitled_32sceneCode.eventsList19(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Untitled_32sceneCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line1"), gdjs.Untitled_32sceneCode.GDLine1Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine1Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaC");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line2"), gdjs.Untitled_32sceneCode.GDLine2Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine2Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaC");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line3"), gdjs.Untitled_32sceneCode.GDLine3Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine3Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine3Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaC");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line4"), gdjs.Untitled_32sceneCode.GDLine4Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine4Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine4Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaC");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line5"), gdjs.Untitled_32sceneCode.GDLine5Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine5Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine5Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaC");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line6"), gdjs.Untitled_32sceneCode.GDLine6Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine6Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine6Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaC");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line7"), gdjs.Untitled_32sceneCode.GDLine7Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine7Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine7Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaC");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line8"), gdjs.Untitled_32sceneCode.GDLine8Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine8Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine8Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaC");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Untitled_32sceneCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) == 2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line1"), gdjs.Untitled_32sceneCode.GDLine1Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine1Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaX");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) == 2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line2"), gdjs.Untitled_32sceneCode.GDLine2Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine2Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaX");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)) == 2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line3"), gdjs.Untitled_32sceneCode.GDLine3Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine3Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine3Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaX");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)) == 2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line4"), gdjs.Untitled_32sceneCode.GDLine4Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine4Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine4Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaX");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) == 2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line5"), gdjs.Untitled_32sceneCode.GDLine5Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine5Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine5Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaX");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)) == 2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line6"), gdjs.Untitled_32sceneCode.GDLine6Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine6Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine6Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaX");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)) == 2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line7"), gdjs.Untitled_32sceneCode.GDLine7Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine7Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine7Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaX");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)) == 2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Line8"), gdjs.Untitled_32sceneCode.GDLine8Objects2);
gdjs.copyArray(runtimeScene.getObjects("txtVictory"), gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLine8Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLine8Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("victoriaX");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Untitled_32sceneCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12577452);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


};gdjs.Untitled_32sceneCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12578988);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


};gdjs.Untitled_32sceneCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtPrubea"), gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("comienzo");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects1[i].getBehavior("Text").setText("O = " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].getBehavior("Text").setText("X = " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.eventsList20(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList21(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList22(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "victoriaC";
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("x");
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList23(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "victoriaX";
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("circulo");
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList24(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnReset"), gdjs.Untitled_32sceneCode.GDbtnResetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbtnResetObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbtnResetObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDbtnResetObjects1[k] = gdjs.Untitled_32sceneCode.GDbtnResetObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbtnResetObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Untitled scene");
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDcuboObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcuboObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDcuboObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDcuboObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine1Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine1Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine2Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine3Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine3Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine4Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine4Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine4Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine5Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine5Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine5Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine6Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine6Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine6Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine7Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine7Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine7Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine8Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine8Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine8Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine8Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine8Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDbtnResetObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbtnResetObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbtnResetObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbtnResetObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbtnResetObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDFonfoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFonfoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFonfoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFonfoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFonfoObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects5.length = 0;

gdjs.Untitled_32sceneCode.eventsList25(runtimeScene);
gdjs.Untitled_32sceneCode.GDcuboObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcuboObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcuboObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDcuboObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDcuboObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDTxtPrubeaObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDtxtVictoryObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine1Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine1Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine2Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine3Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine3Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine4Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine4Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine4Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine5Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine5Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine5Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine6Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine6Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine6Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine7Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine7Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine7Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLine8Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDLine8Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLine8Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLine8Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDLine8Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDbtnResetObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbtnResetObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbtnResetObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbtnResetObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbtnResetObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDFonfoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFonfoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFonfoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFonfoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFonfoObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects5.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
