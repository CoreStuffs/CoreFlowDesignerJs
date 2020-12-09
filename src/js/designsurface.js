var coreflow = {
    designSurface : function (elementPath, opts, definitionObj) {
        var app = new Vue({
            el: elementPath,
            template: `<div class="cs-cf" v-cloak>
                            <component 
                                :key="definition.activity.id"
                                :is="definition.activity.type"
                                v-model="definition.activity">
                            </component>
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
    <div v-bind:style="{'background-color': this.color, 'border-bottom':'1px solid gray'}">
        <div style="height:30px; position:relative; border-bottom:0px solid transparent">
            <div style="border:0px;font-size:8pt;position:absolute;background-color: rgba(255,255,255,0.95); padding-left:7px; top:0px; bottom:0px; padding-top:6px; left:30px; right:0px">{{this.title}}</div>
            <div style="position:absolute; height:30px">
                <img style="width:26px; height:26px; color:white; margin:2px" :src="this.icon"/>
            </div>
        </div>
    </div>`,
    data: function () {
        return {
           
        }
    },
    props:["title","color","icon"]
});