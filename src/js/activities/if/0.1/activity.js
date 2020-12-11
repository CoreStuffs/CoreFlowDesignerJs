Vue.component('if', {
    template: `<div>
                    <div style="margin:0 auto;border:1px solid #CAC8C7; min-height:20px;background-color:white; width:500px">
                        <activityHeader :title="definition.title" icon="img/move.svg" color="#0077FF"></activityHeader>
                    </div>
                    <div style="display:flex">
                        <div>
                            <img style="height:35px;  opacity:0.8; width:100%; bottom:0px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ3Ni4yMTMgNDc2LjIxMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc2LjIxMyA0NzYuMjEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cG9seWdvbiBwb2ludHM9IjM0Ny41LDMyNC4zOTMgMjUzLjM1Myw0MTguNTQxIDI1My4zNTMsMCAyMjMuMzUzLDAgMjIzLjM1Myw0MTkuMDMzIDEyOC43MTMsMzI0LjM5MyAxMDcuNSwzNDUuNjA3IA0KCTIzOC4xMDcsNDc2LjIxMyAzNjguNzEzLDM0NS42MDYgIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="/>
                            <div style="border:1px solid #CAC8C7; min-height:20px;background-color:white; min-width:500px; margin-right:5px">
                                <activityHeader title="Then" icon="img/move.svg" color="#00FF00"></activityHeader>
                            </div>
                        </div>
                        <div>
                            <div style="height:35px;  opacity:0.8; width:100%; bottom:0px">
                                <svg version="1.1" id="Layer_1" height="35px" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        xml:space="preserve">
                                    <line id="svg_1" y2="0" x2="1" y1="10" x1="1" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"/>
                                    <line id="svg_1" y2="10" x2="50%" y1="10" x1="0%" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"/>
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="9" height="27" viewBox="0 0 25 25" xml:space="preserve">
                                        <polyline  stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none" points="0,10 12.5,23 25,10"/>
                                        <line  y2="0" x2="12.5" y1="23" x1="12.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"/>
                                        </svg>
                                </svg>
                            </div>
                            <div style="margin-left:5px; border:1px solid #CAC8C7; min-height:20px;background-color:white; min-width:500px">
                                <activityHeader title="Else" icon="img/move.svg" color="#FF0044"></activityHeader>
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