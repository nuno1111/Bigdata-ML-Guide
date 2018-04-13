import React from 'react';

// d3-mindmap 로딩
import d3 from 'd3/d3.js';
import '../../tool/d3-flextree.js';
import markmap from '../../tool/view.mindmap.js';
import '../../tool/view.mindmap.css';

// mindmap data 생성
import fs from 'fs';
import parse from '../../tool/parse.markdown';
import transform from '../../tool/transform.headings';

class ML extends React.Component {

  componentDidMount(){
    this.init()
  }

  init(){

    d3.text("mindmap/ml_mindmap.md", "text/plain" ,function(error, data) {
      if (error) throw error;

      var json_data = transform(parse(data));

      markmap('svg#mindmap', json_data, {
        preset: 'default', // or colorful
        linkShape: 'diagonal' // or bracket
      });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Machine Learning</h1>
        <p>데이터 분석( 머신러닝 ) 이론과 소스코드 (R, Python, SparkML) 정리</p>
        <svg id="mindmap" ></svg>
      </div>
    );
  }
}

export default ML;
