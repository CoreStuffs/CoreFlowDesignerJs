Vue.component('sequence', {
    template: `<div>
    <div style="border:1px solid #CAC8C7; min-height:20px; margin:5px; margin-bottom:10px">
        <activityHeader :title="definition.title" icon="img/move.svg" color="#0077FF"></activityHeader>
        <draggable v-model="activities" item-key="id" v-bind="dragOptions" style="min-height:20px;background-color:white">
            <component v-for="element in activities"
                            :key="element.id"
                            :is="element.type"
                            v-model="element">
            </component>
        </draggable>
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