import React, {Component} from 'react';
// import 'react-day-picker/lib/style.css';
// import "react-filter-box/lib/react-filter-box.css";
import "bootstrap3/dist/css/bootstrap.min.css";
import "./App.css";
import {reportType, mainData} from "./data";

import _ from "lodash";

import VisualSearch from 'react_visual_search';
import 'react_visual_search/libs/css/visual_search.css';
import nv from 'nvd3';
import 'nvd3/build/nv.d3.css';
import * as d3 from 'd3';

VisualSearch.prototype.clearFilter = function() {
  this.setState({selectedValue: []});
};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainData: mainData,
      reportType: reportType,
      selectedGraphData: mainData.Login,
      filterData: mainData.Login.data
    }
    this.defaultVal = [
      {
        name: "userType",
        value: "admin"
      }
    ]
  }

  graphTypeChanged(e) {
    let selectedGraphData = this.state.mainData[this.state.reportType[e.target.selectedIndex].name];
    this.setState({selectedGraphData: selectedGraphData, filterData: selectedGraphData.data});
    this.VisualSearch.clearFilter();
    d3.select(this.graph).select('g').remove();
  }

  getFilterData(filters) {
    var newFilterData = [];
    window.abc = this.state.filterData;
    _.each(filters, (obj) => {
      var filterObj = {};
      filterObj[obj.name] = obj.value;
      newFilterData = newFilterData.concat(_.filter(this.state.filterData, filterObj));
    })
    return newFilterData;
  }

  onFilter(filters) {
    let self = this;
    if (this.state.selectedGraphData.graphType == "Bar") {
      let data = this.getFilterData(filters);
      nv.addGraph(function() {
        var chart = nv.models.discreteBarChart().x(function(d) {
          return d.name
        }).y(function(d) {
          return d.loggedIn
        });
        chart.staggerLabels(true).showValues(true);

        d3.select(self.graph).datum([
          {
            key: "Login",
            values: data
          }
        ]).call(chart);
        nv.utils.windowResize(chart.update);
        return chart;
      });
    } else {
      let data = this.getFilterData(filters);
      nv.addGraph(function() {
        var chart = nv.models.discreteBarChart().x(function(d) {
          return d.name
        }).y(function(d) {
          return d.goalAComplete
        });
        chart.staggerLabels(true).showValues(true);

        d3.select(self.graph).datum([
          {
            key: "Login",
            values: data
          }
        ]).call(chart);
        nv.utils.windowResize(chart.update);
        return chart;
      });
    }

  }

  componentDidMount() {
    this.onFilter(this.defaultVal)
  }

  render() {
    const {selectedGraphData} = this.state;
    return <div className="container">
      <h2>React Filter Box</h2>
      <select className="select" onChange={this.graphTypeChanged.bind(this)}>
        {
          this.state.reportType.map(function(obj, i) {
            return <option key={i} value={obj.id}>{obj.name}</option>
          })
        }
      </select>
      <VisualSearch defaultValue={this.defaultVal} ref={(ref) => this.VisualSearch = ref} className="react_visual_search" category={selectedGraphData.filters} onFilter={this.onFilter.bind(this)}/>
      <a target="_blank" class="btn btn-primary download" href="http://localhost:3001/export/pdf">Download report</a>
      <br></br>
      <div className="container">
        <svg height="400px" ref={(ref) => this.graph = ref}></svg>
      </div>
    </div>
  }
}
