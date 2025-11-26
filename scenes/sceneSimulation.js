function sceneSimulation(container) {
    container.append("h2").text("Simulation Based on Real NFL Data");

    const key = `${appState.offenseScheme}_${appState.pressureResponse}_${appState.targetReceiver}`;

    appState.realTimeToThrow = qbTimes[key] ?? leagueAverage;

    container.append("p")
      .text(`Average real NFL time to throw in this situation: ${appState.realTimeToThrow.toFixed(2)}s`);

    const svg = container.append("svg")
        .attr("width", 800)
        .attr("height", 400);

    playSimulation(svg, appState);
}