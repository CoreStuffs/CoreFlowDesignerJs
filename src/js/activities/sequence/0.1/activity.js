Vue.component('sequence', {
    template: `
    <div style="border:1px solid black; min-height:20px; padding:2px; margin-bottom:10px">
        <div>{{definition.title}}</div>
        <draggable v-model="activities" item-key="id">
            <component v-for="element in activities"
                            :key="element.id"
                            :is="element.type"
                            v-model="element">
            </component>
        </draggable>
    </div>`,
    data: function () {
        return {
            definition : this.value,
            activities : this.value.activities
        }
    },
    props:["value"]
});