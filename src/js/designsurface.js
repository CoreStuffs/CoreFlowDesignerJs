
var coreflow = {
    designSurface : function (elementPath, opts, definitionObj) {
        var app = new Vue({
            el: elementPath,
            template: `<div class="cs-cf" v-cloak>
                            <div id="formContainer" data-ref="root" class=" nested-sortable uk-form-stacked" style="padding:10px;min-height:60px">
                                <component v-for="activity in definition.activity.activities"
                                            :key="activity.id"
                                            :is="activity.type"
                                            v-bind="activity">{{activity.title}}
                                </component>
                            </div>
                    </div>`,
                data: function () {
                    return {
                        definition: definitionObj
                    };
                }
          })



    }
}
