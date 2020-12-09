var coreflow = {
    designSurface : function (elementPath, opts, definitionObj) {
        var app = new Vue({
            el: elementPath,
            template: `<div class="cs-cf" v-cloak style="background-color:#EAEAEA">
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