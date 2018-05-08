import React from 'react';
import marked from 'marked';

class MD extends React.Component {

  constructor(req){
    super();
    this.req  = req ;
  }

  componentDidMount(){
    this.init()
  }

  init(){
    this.readMdFile("md/"+this.req.match.params.md_url+".md");
  }

  readMdFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
          this.refs.md.innerHTML = marked(rawFile.responseText);
				}
			}
		};
		rawFile.send(null);
	};

  render() {
    return (
      <div class="container-fluid" ref='md'>
      </div>
    );
  }
}

export default MD;
