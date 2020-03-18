import React, { Component } from "react";
import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

export default class ModelerPage extends Component {
  modeler = new BpmnJS({
    keyboard: {
      bindTo: window
    }
  });
  modelerContainer;

  componentDidMount() {
    this.modeler.attachTo(this.modelerContainer);
    this.modeler.createDiagram();
  }

  componentWillUnmount() {
    this.modeler.detach();
  }

  render() {
    return (
      <div className="block--modeler">
        <h1>BPM Modeler</h1>
        <div
          className="block--modeler-container"
          ref={ref => (this.modelerContainer = ref)}
        />
      </div>
    );
  }
}
