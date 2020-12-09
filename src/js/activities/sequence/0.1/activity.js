Vue.component('sequence', {
    template: `
    <div style="border:1px solid gray; min-height:20px; margin:5px; margin-bottom:10px">
        <activityHeader :title="definition.title" icon="img/move.svg" color="#0000FF"></activityHeader>
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