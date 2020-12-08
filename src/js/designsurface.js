
var coreflow = {
    designSurface : function (element, opts, definition) {
        element.innerHtml = "<v-designsurface id='___flowapp___' ref='___flowapp___'/>";
        var vue = __createVue(element, opts);
        vue.methods.saveFlowDefinition=function(definition, callback){
            opts.onSavingDefinition(definition, callback);
        }        
        var v = new Vue(vue);
        if(definition)v.definition = definition;
        return{
            setDefinition:function(definition){
                v.definition = definition; 
                return this;             
            },
            getDefinition:function(){
                return v.definition;              
            }
        }
    }
}

Vue.component('v-designsurface', {
    template: `<div class="cs-cf" v-cloak>
                    <div class="uk-card uk-card-default uk-card-body">
                            <fieldset class="uk-fieldset">
                                <h3 class="uk-card-title">{{definition.title}}</h3>
                                <small>version {{definition.version}}</small>

                                <ul uk-tab="active : 0">
                                  <li><a href="#">Flow designer</a></li>
                                </ul>
                                <ul class="uk-switcher uk-margin-bottom embeddedElementsParent">
                                    <li>
                                        <form id="formContainer" data-ref="root" class=" uk-form-stacked">
                                            <div class="uk-margin">
                                                <label class="uk-form-label" for="formName">Name:</label>
                                                <div class="uk-form-controls">
                                                    <input id="formName" class="uk-input uk-form-small" v-model="schema.name" />
                                                </div>
                                            </div>
                                            <div class="uk-margin">
                                                <label class="uk-form-label" for="formTitle">Title:</label>
                                                <div class="uk-form-controls">
                                                    <input id="formTitle" class="uk-input uk-form-small" v-model="schema.title" />
                                                </div>
                                            </div>
                                        </form>
                                    </li>
                                    <li>
                                        <cf_variableTable :variables="schema.variables"/>
                                    </li>
                                    <li>    
                                        <div class="uk-grid-collapse" uk-grid>
                                            <div class="uk-width-expand@s">
                                                <div id="formContainer" data-ref="root" class=" nested-sortable uk-form-stacked" style="padding:10px;min-height:60px">
                                                    <component v-for="field in schema.fields"
                                                                :key="field.id"
                                                                :is="field.type"
                                                                :schema="field"
                                                                v-bind="field"
                                                                v-model="data[field.variable]">
                                                    </component>
                                                </div>
                                            </div>
                                            <div class="uk-width-1-5@s">
                                                <div class="uk-sticky uk-active uk-sticky-bottom uk-sticky-fixed"  uk-sticky="bottom: 100000">
                                                    <div id="mnuComponents">
                                                            <div class="draggable" data-type="textField"">
                                                                <span uk-icon="tag" class="uk-margin-small-right"></span>
                                                                Text input
                                                            </div>
                                                            <div class="draggable" data-type="passwordField">
                                                                <span uk-icon="tag" class="uk-margin-small-right"></span>                                                        
                                                                Password input
                                                            </div>
                                                            <div class="draggable" data-type="checkboxField">
                                                                <span uk-icon="tag" class="uk-margin-small-right"></span>                                                                                                                
                                                                Decision
                                                            </div>
                                                            <div class="draggable" data-type="richtextField">
                                                                <span uk-icon="tag" class="uk-margin-small-right"></span>                                                        
                                                                Richtext Field
                                                            </div>
                                                            <div class="draggable" data-type="datetimeField">
                                                                <span uk-icon="tag" class="uk-margin-small-right"></span>                                                                                                                
                                                                Date & Time Field
                                                            </div>
                                                            <div class="draggable" data-type="selectField">
                                                                <span uk-icon="tag" class="uk-margin-small-right"></span>                                                                                                                
                                                                List selector
                                                            </div>
                                                            <div class="draggable" data-type="grid">
                                                                <span uk-icon="tag" class="uk-margin-small-right"></span>                                                                                                                
                                                                Columns
                                                            </div>
                                                    </div>
                                                    <a @click="saveSchema()" style="font-size:12px">
                                                        <span uk-icon="icon: check" class="uk-margin-small-right uk-text-left"></span>
                                                        <span class="uk-text-middle">Test validators</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    <li>
                                        <ul uk-accordion="multiple: true">
                                            <li class="uk-open">
                                                <a class="uk-accordion-title" href="#">Schema</a>
                                                <div class="uk-accordion-content"><pre><code style="font-size:12px">{{ schema }}</code></pre></div>
                                            </li>
                                            <li>
                                                <a class="uk-accordion-title" href="#">Data</a>
                                                <div class="uk-accordion-content"><pre><code style="font-size:12px">{{ data }}</code></pre></div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                

                                <button class="uk-button uk-button-primary uk-button-small" @click="saveSchema()">
                                    <span uk-icon="icon: upload" class="uk-margin-small-right uk-text-left"></span>
                                    <span class="uk-text-middle">Save</span>
                                </button>
                            </fieldset>

                          
                    </div>
                    <cf_editfieldmodal ref="editFormModal" />
                    <cf_editvariablemodal ref="editVariableModal" />
                </div>`,
    data: function () {
        return this.$parent;
    },
    validations: function () {
        var obj = { data: {} };

        for (const varid in this.schema.variables) {
            var variable = this.schema.variables[varid];
            obj.data[variable.name] = {};
            var rv = obj.data[variable.name];
            var i = 0;
            for (const valid in variable.validations) {
                var v = variable.validations[valid];
                rv["v" + i] = formValidators[v.type].build(v);
                i++;
            }

        };
        return obj;
    },
    methods: {


    },
    created: function () {
        // `this` est une reference a l'instance de vm
        for (let [key, value] of registeredFields.entries()) {
            this.$options.components[key] = value.fieldTemplate;
        }
        for (let [key, value] of Object.entries(this.$options.components)) {
            value.components = this.$options.components;
        }

        var urlParams = new URLSearchParams(window.location.search);
        var schemaId = urlParams.get('schemaid');
        var root = this;
        if (schemaId !== null && typeof (schemaId) !== 'undefined' && schemaId !== "") {
            $.ajax({
                url: "/Form/" + schemaId + "/schema",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    root.schema = root.sanitizeSchemaModel(data);
                }
            });
        }


    },
    updated: function () {
        this.$nextTick(function () {
            // Update events to ensure that toolbar will appear for newly added items
            this.applyToolbarEvents();
            this.sanitizeSchemaModel();
        })
    },
    mounted: function () {
        this.$nextTick(function () {
            // Update events to ensure that toolbar will appear for newly added items
            this.applyToolbarEvents();
           
            var toolbar = document.getElementById('mnuComponents');
            new Sortable(toolbar, {
                group: {
                    name: 'share',
                    pull: 'clone', // To clone: set pull to 'clone'
                    put: false
                },
                draggale: '.draggable',
                animation: 0,
                fallbackOnBody: true,
                sort: false,
                dragClass: 'yellow-background-class',
            });

            this.configureNestedTables();


        })
    }
});








