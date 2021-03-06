Vue.component('sequence', {
    template: `<div>
        <div style="border:1px solid #CAC8C7; min-height:20px;background-color:white; width:400px; margin:0 auto">
            <activityHeader :title="definition.title" icon="img/move.svg" color="#0077FF"></activityHeader>
        </div>
        <draggable v-model="activities" item-key="id" v-bind="dragOptions" style="min-height:20px;border:1px dashed silver; padding:5px">
            <div v-for="(element,index) in activities" :key="element.id">
                <component :key="element.id"
                                :is="element.type"
                                v-model="element">
                </component>
                <img v-if="index != activities.length - 1" style="height:35px; background-color:white; opacity:0.8; width:100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ3Ni4yMTMgNDc2LjIxMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc2LjIxMyA0NzYuMjEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cG9seWdvbiBwb2ludHM9IjM0Ny41LDMyNC4zOTMgMjUzLjM1Myw0MTguNTQxIDI1My4zNTMsMCAyMjMuMzUzLDAgMjIzLjM1Myw0MTkuMDMzIDEyOC43MTMsMzI0LjM5MyAxMDcuNSwzNDUuNjA3IA0KCTIzOC4xMDcsNDc2LjIxMyAzNjguNzEzLDM0NS42MDYgIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="/>
            </div>
        </draggable>
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