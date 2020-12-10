var coreflow = {
    designSurface : function (elementPath, opts, definitionObj) {
        var app = new Vue({
            el: elementPath,
            template: `<div v-cloak style="background-color:#EAEAEA;width:100%;height:100%; position:absolute">
                            <div style="display:Flex;justify-content: center;align-items: center;">
                                <draggable v-model="definition.activities" item-key="id" style="min-height:20px; padding:5px">
                                    <div v-for="(element,index) in definition.activities" :key="element.id">
                                        <component :key="element.id"
                                                        :is="element.type"
                                                        v-model="element">
                                        </component>
                                        <img v-if="index != definition.activities.length - 1" style="height:35px;  opacity:0.8; width:100%; bottom:0px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ3Ni4yMTMgNDc2LjIxMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc2LjIxMyA0NzYuMjEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cG9seWdvbiBwb2ludHM9IjM0Ny41LDMyNC4zOTMgMjUzLjM1Myw0MTguNTQxIDI1My4zNTMsMCAyMjMuMzUzLDAgMjIzLjM1Myw0MTkuMDMzIDEyOC43MTMsMzI0LjM5MyAxMDcuNSwzNDUuNjA3IA0KCTIzOC4xMDcsNDc2LjIxMyAzNjguNzEzLDM0NS42MDYgIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="/>
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
        <div style="height:44px; position:relative; border-bottom:0px solid transparent">
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