function sceneOffenseChoice(container) {
    container.append("h2").text("Choose an Offensive Scheme");

    const schemes = ["Trips Right", "Spread", "Bunch", "I Formation"];

    const buttons = container.append("div")
        .attr("class", "button-row");

    schemes.forEach(s => {
        buttons.append("button")
            .text(s)
            .on("click", () => {
                appState.offenseScheme = s;
                nextScene();
            });
    });

    // Add a D3 visualization (example placeholder)
    const svg = container.append("svg")
        .attr("width", 800)
        .attr("height", 400);

    drawFormation(svg, appState.offenseScheme);
}