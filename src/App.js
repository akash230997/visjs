import './App.css';
import React, { useEffect } from 'react';
import vis from 'vis-network';
// import MyComponent from '../src/BackgroundCanvas';

function App() {
  useEffect(() => {
    const draw = () => {
      // create some nodes
      var nodes = [
        { id: 0, label: "Base", group: 0 },
        { id: 1, label: "Group1", group: 1 },
        { id: 2, label: "Group1", group: 1 },
        { id: 3, label: "Group1", group: 1 },
        { id: 4, label: "Group1", group: 1 },
        { id: 5, label: "Group1", group: 1 },
        { id: 6, label: "Group1", group: 1 },
        { id: 7, label: "Group1", group: 1 },
        { id: 8, label: "Group1", group: 1 },
        { id: 9, label: "Group1", group: 1 },
        { id: 10, label: "Group2", group: 2 },
        { id: 11, label: "Group2", group: 2 },
        { id: 12, label: "Group3", group: 3 },
        { id: 13, label: "Group2", group: 2 },
        { id: 14, label: "Group2", group: 2 },
        { id: 15, label: "Group2", group: 2 },
        { id: 16, label: "Group3", group: 3 },
        { id: 17, label: "Group3", group: 3 },
        { id: 18, label: "Group3", group: 3 },
        { id: 19, label: "Group3", group: 3 },
        { id: 20, label: "Group3", group: 3 },
        { id: 21, label: "Group3", group: 3 },
        { id: 22, label: "Group3", group: 3 },
        { id: 23, label: "Group3", group: 3 },
        { id: 24, label: "Group4", group: 4 },
        { id: 25, label: "Group4", group: 4 },
        { id: 26, label: "Group5", group: 5 },
        { id: 27, label: "Group4", group: 4 },
        { id: 28, label: "Group0", group: 0 },
        { id: 29, label: "Group2", group: 2 },
        { id: 30, label: "Group3", group: 3 },
        { id: 31, label: "Group2", group: 2 },
        { id: 32, label: "Group2", group: 2 },
        { id: 33, label: "Group2", group: 2 },
        { id: 34, label: "Group2", group: 2 },
        { id: 35, label: "Group2", group: 2 },
        { id: 36, label: "Group2", group: 2 },
        { id: 37, label: "Group2", group: 2 },
        { id: 38, label: "Group2", group: 2 },
        { id: 39, label: "Group4", group: 4 },
        { id: 40, label: "Group6", group: 6 },
        { id: 41, label: "Group4", group: 4 },
        { id: 42, label: "Group4", group: 4 },
        { id: 43, label: "Group4", group: 5 },
        { id: 44, label: "Group0", group: 0 },
        { id: 45, label: "Group0", group: 0 },
        { id: 46, label: "Group7", group: 7 },
        { id: 47, label: "Group7", group: 7 },
        { id: 48, label: "Group7", group: 8 },
        { id: 49, label: "Group5", group: 5 },
        { id: 50, label: "Group5", group: 5 },
        // { id: 51, label: "Mlle.Gillenormand", group: 5 },
        // { id: 52, label: "Mme.Pontmercy", group: 5 },
        // { id: 53, label: "Mlle.Vaubois", group: 5 },
        // { id: 54, label: "Lt.Gillenormand", group: 5 },
        // { id: 55, label: "Marius", group: 8 },
        // { id: 56, label: "BaronessT", group: 5 },
        // { id: 57, label: "Mabeuf", group: 8 },
        // { id: 58, label: "Enjolras", group: 8 },
        // { id: 59, label: "Combeferre", group: 8 },
        // { id: 60, label: "Prouvaire", group: 8 },
        // { id: 61, label: "Feuilly", group: 8 },
        // { id: 62, label: "Courfeyrac", group: 8 },
        // { id: 63, label: "Bahorel", group: 8 },
        // { id: 64, label: "Bossuet", group: 8 },
        // { id: 65, label: "Joly", group: 8 },
        // { id: 66, label: "Grantaire", group: 8 },
        // { id: 67, label: "MotherPlutarch", group: 9 },
        // { id: 68, label: "Gueulemer", group: 4 },
        // { id: 69, label: "Babet", group: 4 },
        // { id: 70, label: "Claquesous", group: 4 },
        // { id: 71, label: "Montparnasse", group: 4 },
        // { id: 72, label: "Toussaint", group: 5 },
        // { id: 73, label: "Child1", group: 10 },
        // { id: 74, label: "Child2", group: 10 },
        // { id: 75, label: "Brujon", group: 4 },
        // { id: 76, label: "Mme.Hucheloup", group: 8 },
      ];


      // create some edges
      const edges = [
        // { from: 3, to: 1, to: 0 },
        { from: 3, to: 1 },
        { from: 2, to: 0 },
        { from: 0 },
        { from: 3, to: 2 },
        { from: 4, to: 0 },
        { from: 5, to: 0 },
        { from: 6, to: 0 },
        { from: 7, to: 0 },
        { from: 8, to: 0 },
        { from: 9, to: 0 },
        { from: 11, to: 10 },
        { from: 11, to: 3 },
        { from: 11, to: 2 },
        { from: 11, to: 0 },
        { from: 12, to: 11 },
        { from: 13, to: 11 },
        { from: 14, to: 11 },
        { from: 15, to: 11 },
        { from: 17, to: 16 },
        { from: 18, to: 16 },
        { from: 18, to: 17 },
        { from: 19, to: 16 },
        { from: 19, to: 17 },
        { from: 19, to: 18 },
        { from: 20, to: 16 },
        { from: 20, to: 17 },
        { from: 20, to: 18 },
        { from: 20, to: 19 },
        { from: 21, to: 16 },
        { from: 21, to: 17 },
        { from: 21, to: 18 },
        { from: 21, to: 19 },
        { from: 21, to: 20 },
        { from: 22, to: 16 },
        { from: 22, to: 17 },
        { from: 22, to: 18 },
        { from: 22, to: 19 },
        { from: 22, to: 20 },
        { from: 22, to: 21 },
        { from: 23, to: 16 },
        { from: 23, to: 17 },
        { from: 23, to: 18 },
        { from: 23, to: 19 },
        { from: 23, to: 20 },
        { from: 23, to: 21 },
        { from: 23, to: 22 },
        { from: 23, to: 12 },
        { from: 23, to: 11 },
        { from: 24, to: 23 },
        { from: 24, to: 11 },
        { from: 25, to: 24 },
        { from: 25, to: 23 },
        { from: 25, to: 11 },
        { from: 26, to: 24 },
        { from: 26, to: 11 },
        { from: 26, to: 16 },
        { from: 26, to: 25 },
        { from: 27, to: 11 },
        { from: 27, to: 23 },
        { from: 27, to: 25 },
        { from: 27, to: 24 },
        { from: 27, to: 26 },
        { from: 28, to: 11 },
        { from: 28, to: 27 },
        { from: 29, to: 23 },
        { from: 29, to: 27 },
        { from: 29, to: 11 },
        { from: 30, to: 23 },
        { from: 31, to: 30 },
        { from: 31, to: 11 },
        { from: 31, to: 23 },
        { from: 31, to: 27 },
        { from: 32, to: 11 },
        { from: 33, to: 11 },
        { from: 33, to: 27 },
        { from: 34, to: 11 },
        { from: 34, to: 29 },
        { from: 35, to: 11 },
        { from: 35, to: 34 },
        { from: 35, to: 29 },
        { from: 36, to: 34 },
        { from: 36, to: 35 },
        { from: 36, to: 11 },
        { from: 36, to: 29 },
        { from: 37, to: 34 },
        { from: 37, to: 35 },
        { from: 37, to: 36 },
        { from: 37, to: 11 },
        { from: 37, to: 29 },
        { from: 38, to: 34 },
        { from: 38, to: 35 },
        { from: 38, to: 36 },
        { from: 38, to: 37 },
        { from: 38, to: 11 },
        { from: 38, to: 29 },
        { from: 39, to: 25 },
        { from: 40, to: 25 },
        { from: 41, to: 24 },
        { from: 41, to: 25 },
        { from: 42, to: 41 },
        { from: 42, to: 25 },
        { from: 42, to: 24 },
        { from: 43, to: 11 },
        { from: 43, to: 26 },
        { from: 43, to: 27 },
        { from: 44, to: 28 },
        { from: 44, to: 11 },
        { from: 45, to: 28 },
        { from: 47, to: 46 },
        { from: 48, to: 47 },
        { from: 48, to: 25 },
        { from: 48, to: 27 },
        { from: 48, to: 11 },
        { from: 49, to: 26 },
        { from: 49, to: 11 },
        { from: 50, to: 49 },
        // { from: 50, to: 24 },
        // { from: 51, to: 49 },
        // { from: 51, to: 26 },
        // { from: 51, to: 11 },
        // { from: 52, to: 51 },
        // { from: 52, to: 39 },
        // { from: 53, to: 51 },
        // { from: 54, to: 51 },
        // { from: 54, to: 49 },
        // { from: 54, to: 26 },
        // { from: 55, to: 51 },
        // { from: 55, to: 49 },
        // { from: 55, to: 39 },
        // { from: 55, to: 54 },
        // { from: 55, to: 26 },
        // { from: 55, to: 11 },
        // { from: 55, to: 16 },
        // { from: 55, to: 25 },
        // { from: 55, to: 41 },
        // { from: 55, to: 48 },
        // { from: 56, to: 49 },
        // { from: 56, to: 55 },
        // { from: 57, to: 55 },
        // { from: 57, to: 41 },
        // { from: 57, to: 48 },
        // { from: 58, to: 55 },
        // { from: 58, to: 48 },
        // { from: 58, to: 27 },
        // { from: 58, to: 57 },
        // { from: 58, to: 11 },
        // { from: 59, to: 58 },
        // { from: 59, to: 55 },
        // { from: 59, to: 48 },
        // { from: 59, to: 57 },
        // { from: 60, to: 48 },
        // { from: 60, to: 58 },
        // { from: 60, to: 59 },
        // { from: 61, to: 48 },
        // { from: 61, to: 58 },
        // { from: 61, to: 60 },
        // { from: 61, to: 59 },
        // { from: 61, to: 57 },
        // { from: 61, to: 55 },
        // { from: 62, to: 55 },
        // { from: 62, to: 58 },
        // { from: 62, to: 59 },
        // { from: 62, to: 48 },
        // { from: 62, to: 57 },
        // { from: 62, to: 41 },
        // { from: 62, to: 61 },
        // { from: 62, to: 60 },
        // { from: 63, to: 59 },
        // { from: 63, to: 48 },
        // { from: 63, to: 62 },
        // { from: 63, to: 57 },
        // { from: 63, to: 58 },
        // { from: 63, to: 61 },
        // { from: 63, to: 60 },
        // { from: 63, to: 55 },
        // { from: 64, to: 55 },
        // { from: 64, to: 62 },
        // { from: 64, to: 48 },
        // { from: 64, to: 63 },
        // { from: 64, to: 58 },
        // { from: 64, to: 61 },
        // { from: 64, to: 60 },
        // { from: 64, to: 59 },
        // { from: 64, to: 57 },
        // { from: 64, to: 11 },
        // { from: 65, to: 63 },
        // { from: 65, to: 64 },
        // { from: 65, to: 48 },
        // { from: 65, to: 62 },
        // { from: 65, to: 58 },
        // { from: 65, to: 61 },
        // { from: 65, to: 60 },
        // { from: 65, to: 59 },
        // { from: 65, to: 57 },
        // { from: 65, to: 55 },
        // { from: 66, to: 64 },
        // { from: 66, to: 58 },
        // { from: 66, to: 59 },
        // { from: 66, to: 62 },
        // { from: 66, to: 65 },
        // { from: 66, to: 48 },
        // { from: 66, to: 63 },
        // { from: 66, to: 61 },
        // { from: 66, to: 60 },
        // { from: 67, to: 57 },
        // { from: 68, to: 25 },
        // { from: 68, to: 11 },
        // { from: 68, to: 24 },
        // { from: 68, to: 27 },
        // { from: 68, to: 48 },
        // { from: 68, to: 41 },
        // { from: 69, to: 25 },
        // { from: 69, to: 68 },
        // { from: 69, to: 11 },
        // { from: 69, to: 24 },
        // { from: 69, to: 27 },
        // { from: 69, to: 48 },
        // { from: 69, to: 41 },
        // { from: 70, to: 25 },
        // { from: 70, to: 69 },
        // { from: 70, to: 68 },
        // { from: 70, to: 11 },
        // { from: 70, to: 24 },
        // { from: 70, to: 27 },
        // { from: 70, to: 41 },
        // { from: 70, to: 58 },
        // { from: 71, to: 27 },
        // { from: 71, to: 69 },
        // { from: 71, to: 68 },
        // { from: 71, to: 70 },
        // { from: 71, to: 11 },
        // { from: 71, to: 48 },
        // { from: 71, to: 41 },
        // { from: 71, to: 25 },
        // { from: 72, to: 26 },
        // { from: 72, to: 27 },
        // { from: 72, to: 11 },
        // { from: 73, to: 48 },
        // { from: 74, to: 48 },
        // { from: 74, to: 73 },
        // { from: 75, to: 69 },
        // { from: 75, to: 68 },
        // { from: 75, to: 25 },
        // { from: 75, to: 48 },
        // { from: 75, to: 41 },
        // { from: 75, to: 70 },
        // { from: 75, to: 71 },
        // { from: 76, to: 64 },
        // { from: 76, to: 65 },
        // { from: 76, to: 66 },
        // { from: 76, to: 63 },
        // { from: 76, to: 62 },
        // { from: 76, to: 48 },
        // { from: 76, to: 58 },
      ];

      // create a network
      var container = document.getElementById("mynetwork");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {
        nodes: {
          shape: "square",
          size: 25,
        },
        physics: {
          forceAtlas2Based: {
            gravitationalConstant: -26,
            centralGravity: 0.005,
            springLength: 230,
            springConstant: 0.18,
          },
          maxVelocity: 146,
          solver: "forceAtlas2Based",
          timestep: 0.35,
          stabilization: { iterations: 150 },
        },
      };
      var network = new vis.Network(container, data, options);
      console.log(network)
    };

    window.addEventListener("load", draw);

    return () => {
      window.removeEventListener("load", draw);
    };
  }, []);
  return (
    <div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      {/* <MyComponent /> */}
      <div id="mynetwork"></div>
    </div>
  );
}

export default App;
