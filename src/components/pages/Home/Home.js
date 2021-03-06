import React from 'react';
import marked from 'marked';

class Home extends React.Component {

  componentDidMount(){
    this.init()
  }

  init(){
    this.readMdFile("md/Home.md");
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

export default Home;
