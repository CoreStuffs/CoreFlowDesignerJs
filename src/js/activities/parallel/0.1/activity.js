Vue.component('parallel', {
    template: `<div>
                    <div style="margin:0 auto;border:1px solid #CAC8C7; min-height:20px;background-color:white; width:400px">
                        <activityHeader :title="definition.title" icon="img/move.svg" color="#0077FF"></activityHeader>
                    </div>
                    <div style="width:100%">
                        <svg style="height:10px; margin:0 auto; width:100%; margin-top:-16px" version="1.1" id="Layer_1" height="10px" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve">
                            <line id="svg_1" y2="0" x2="50%" y1="10" x1="50%" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"/>
                        </svg>                    
                    </div>
                    <div style="display:flex; margin:0 auto;margin-top:-15px">
                            <div v-for="(element,index) in activities" :key="element.id">
                                <div style="opacity:0.8; width:100%; bottom:0px">
                                    <svg version="1.1" id="Layer_1" height="25px" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            xml:space="preserve">
                                        <!-- Left -->
                                        <line v-if="index===0" id="svg_1" y2="1" x2="100%" y1="1" x1="50%" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"/>
                                        <!-- Right -->
                                        <line v-else-if="activities.length===index+1" id="svg_1" y2="1" x2="50%" y1="1" x1="0%" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"/>
                                        <!-- Middle (but not single) -->
                                        <line v-else-if="activities.length!=1" id="svg_1" y2="1" x2="100%" y1="1" x1="0%" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"/>


                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0" height="25" viewBox="0 0 17 25" xml:space="preserve">
                                            <polyline  stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none" points="1,16 8.5,23 16,16"/>
                                            <line  y2="0" x2="8.5" y1="23" x1="8.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"/>
                                        </svg>
                                    </svg>
                                </div>
                                <div style="margin-left:5px; margin-right:5px">
                                    <component :key="element.id"
                                                    :is="element.type"
                                                    v-model="element">
                                    </component>
                                </div>
                            </div>                    
                    </div>
                </div>`,
    data: function () {
        return {
            definition : this.value,
            activities : this.value.activities
        }
    },
    props:["value"],
    computed: {
        dragOptions() {
          return {
            animation: 200,
            group: "description",
            disabled: false,
            ghostClass: "ghost"
          };
        }
    }
});