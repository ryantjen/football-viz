import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';

const appState = {
    offenseScheme: null,
    pressureResponse: null,
    targetReceiver: null,
    realTimeToThrow: null,   // filled later from data
};

let currentSceneIndex = 0;
const scenes = [
    sceneIntro,
    sceneOffenseChoice,
    scenePressureChoice,
    sceneCoverageChoice,
    sceneSimulation,
    sceneResults
];

function goToScene(i) {
    d3.select("#scene-container").html("");
    currentSceneIndex = i;
    scenes[i](d3.select("#scene-container"));
}

function nextScene() {
    goToScene(currentSceneIndex + 1);
}