var coreflow = {
    designSurface : function (elementPath, opts, definitionObj) {
        var app = new Vue({
            el: elementPath,
            template: `<div v-cloak style="background-color:#EAEAEA;width:100%;height:100%; position:absolute">
                            <div  style="margin:0 auto">
                                <draggable v-model="definition.activities" item-key="id" style="display:block;min-height:20px; padding:5px; align-self:center">
                                    <div v-for="(element,index) in definition.activities" :key="element.id" style="position:static;display:flex">
                                        <div style="margin:0 auto">
                                            <component :key="element.id"
                                                            :is="element.type"
                                                            v-model="element">
                                            </component>
                                            <div style="position:relative">
                                                <img v-if="index != definition.activities.length - 1" style="height:35px;  opacity:0.8; width:100%; bottom:0px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ3Ni4yMTMgNDc2LjIxMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc2LjIxMyA0NzYuMjEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cG9seWdvbiBwb2ludHM9IjM0Ny41LDMyNC4zOTMgMjUzLjM1Myw0MTguNTQxIDI1My4zNTMsMCAyMjMuMzUzLDAgMjIzLjM1Myw0MTkuMDMzIDEyOC43MTMsMzI0LjM5MyAxMDcuNSwzNDUuNjA3IA0KCTIzOC4xMDcsNDc2LjIxMyAzNjguNzEzLDM0NS42MDYgIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="/>
                                                <img v-if="index != definition.activities.length - 1" style="height:15px; padding-left:25px; width:100%; bottom:10px; position:absolute; top:8px; left:0px; right:0px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTI4MC4wMDAwMDBwdCIgaGVpZ2h0PSIxMjgwLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMTI4MC4wMDAwMDAgMTI4MC4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPG1ldGFkYXRhPgpDcmVhdGVkIGJ5IHBvdHJhY2UgMS4xNSwgd3JpdHRlbiBieSBQZXRlciBTZWxpbmdlciAyMDAxLTIwMTcKPC9tZXRhZGF0YT4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTI4MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik02MDMwIDEyNzkzIGMtNzUzIC00NCAtMTUzNCAtMjMzIC0yMjIwIC01MzggLTE2NTAgLTczMyAtMjkxMSAtMjExOAotMzQ4MCAtMzgyNSAtMTU3IC00NjkgLTI1MSAtOTEzIC0zMDcgLTE0NTAgLTI1IC0yMzYgLTI1IC05NDYgMCAtMTE3NSAxMTMKLTEwNDAgNDEwIC0xOTI0IDkzNCAtMjc3NSA4NjIgLTEzOTcgMjI0OCAtMjQxOCAzODM3IC0yODI1IDU2MSAtMTQ0IDEwNDMKLTIwNSAxNjExIC0yMDUgODgzIDAgMTcwOSAxNzAgMjUyMyA1MTkgMTM2NSA1ODUgMjQ5NCAxNjQxIDMxNzEgMjk2NiAzMjggNjQxCjU0OSAxMzUwIDY0NSAyMDY5IDQ1IDMyOSA1MSA0NDEgNTAgODY2IDAgNDMxIC04IDU1NCAtNTkgOTA4IC0yMDAgMTM4MCAtODY5CjI2OTAgLTE4NzMgMzY2MyAtMTA5OSAxMDY3IC0yNTE1IDE2OTQgLTQwNjAgMTc5OSAtMTM4IDkgLTYzNCAxMSAtNzcyIDN6Cm03MTUgLTEyNDMgYzQ4OCAtMzUgOTk5IC0xNDQgMTQzOSAtMzA3IDk5OSAtMzcwIDE4NTIgLTEwMzAgMjQ1MyAtMTg5NiA1MDAKLTcyMiA4MDIgLTE1MzUgOTAwIC0yNDI3IDI1IC0yMjkgMjUgLTgwNiAwIC0xMDMwIC03MiAtNjQ1IC0yMjkgLTExOTUgLTUwMQotMTc1NSAtNjY2IC0xMzcwIC0xOTA1IC0yMzcyIC0zMzk1IC0yNzQ1IC00MjIgLTEwNiAtNzU2IC0xNDUgLTEyMzYgLTE0NQotMzQ2IDAgLTQ2MiA3IC03MzAgNDYgLTExMDYgMTU5IC0yMTMyIDY2OSAtMjkxNCAxNDQ4IC03NTQgNzUyIC0xMjYzIDE3MjcKLTE0NDYgMjc3MSAtNTcgMzI5IC02OSA0NzYgLTY5IDg3NSAwIDQwNiAxMCA1MzkgNjQgODYzIDIyMSAxMzEwIDkyMSAyNDY5CjE5NzAgMzI2NCA3OTMgNjAwIDE3NjIgOTY2IDI3NDIgMTAzNyAxNjUgMTIgNTYxIDEyIDcyMyAxeiIvPgo8cGF0aCBkPSJNNTkyNCA5Mjk5IGMtMTggLTIwIC0xOSAtNTcgLTIyIC0xMjEwIGwtMiAtMTE4OSAtMTE4OSAtMiBjLTExNTMgLTMKLTExOTAgLTQgLTEyMTAgLTIyIC0yMSAtMTkgLTIxIC0yNCAtMjEgLTQ3NiAwIC00NTIgMCAtNDU3IDIxIC00NzYgMjAgLTE4IDU3Ci0xOSAxMjEwIC0yMiBsMTE4OSAtMiAyIC0xMTg5IGMzIC0xMTUzIDQgLTExOTAgMjIgLTEyMTAgMTkgLTIxIDI0IC0yMSA0NzYKLTIxIDQ1MiAwIDQ1NyAwIDQ3NiAyMSAxOCAyMCAxOSA1NyAyMiAxMjEwIGwyIDExODkgMTE4OSAyIGMxMTUzIDMgMTE5MCA0CjEyMTAgMjIgMjEgMTkgMjEgMjQgMjEgNDc2IDAgNDUyIDAgNDU3IC0yMSA0NzYgLTIwIDE4IC01NyAxOSAtMTIxMCAyMgpsLTExODkgMiAtMiAxMTg5IGMtMyAxMTUzIC00IDExOTAgLTIyIDEyMTAgLTE5IDIxIC0yNCAyMSAtNDc2IDIxIC00NTIgMAotNDU3IDAgLTQ3NiAtMjF6Ii8+CjwvZz4KPC9zdmc+Cg=="/>
                                            </div>
                                        </div>
                                    </div>
                                </draggable>
                            </div>
                    </div>`,
                data: function () {
                    return {
                        definition: definitionObj
                    };
                },

          })



    }
}


Vue.component('activityHeader', {
    template: `
    <div v-bind:style="{'background-color': this.color, 'border-bottom':'1px solid #CAC8C7'}">
        <div style="height:44px; position:relative; border-bottom:0px solid transparent; display:block">
            <div style="border:0px;font-size:14px;font-family:wf_segoe-ui_semilight, Segoe UI Semilight, Segoe WP Semilight, Segoe UI, Segoe WP, Tahoma, Arial, sans-serif;position:absolute;color:black;background-color: rgba(255,255,255,0.85); padding-left:7px; top:0px; bottom:0px; padding-top:10px; left:44px; right:0px">{{this.title}}</div>
            <div style="position:absolute; height:44px">
                <img style="width:30px; height:30px; color:white; margin:7px" :src="this.icon"/>
            </div>
        </div>
    </div>`,
    data: function () {
        return {
           
        }
    },
    props:["title","color","icon"]
});