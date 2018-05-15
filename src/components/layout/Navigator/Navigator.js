import React from 'react';
import { Link } from 'react-router-dom'

class Navigator extends React.Component {
  render(){
    return(
      <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
              <li className="sidebar-brand">
                  <Link to="/">데이터 분석 방법론</Link>
              </li>
              <li>
                  <Link to="/ML">데이터 탐색 및 전처리</Link>
              </li>
          </ul>
      </div>
    )
  }
}

export default Navigator;
