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
