import React, { Component } from 'react';
import Card from './Card';

class Categories extends Component {

  constructor() {
    super();
    console.log('here');
  }


  render() {
    return (
      <div className="panel panel-white panel-no-padding padding-leader-1 padding-trailer-1">
      <div className="grid-container">
        <aside className="column-6 post-1">
          <nav className="js-accordion accordion">
            <div className="accordion-section is-active">
              <h4 className="accordion-title ">Categories</h4>
              <div className="accordion-content">
                <a href="#" className="side-nav-link">Category 1</a>
                <a href="#" className="side-nav-link">Category 2</a>
                <a href="#" className="side-nav-link">Category 3</a>
                <a href="#" className="side-nav-link">Category 4</a>
              </div>
            </div>
          </nav>
        </aside>
        <main className="column-17" role="main">
          <div className="input-group">
            <input className="input-group-input" type="text" placeholder="Find a great widget for your app!" />
            <span className="input-group-button">
              <button className="btn">Search</button>
            </span>
          </div>



          <div className="block-group block-group-3-up tablet-block-group-2-up phone-block-group-1-up">
            {this.props.widgetsJson.map((c, i) => {
              return <Card title={c.url} key={i}></Card>;
            })}
          </div>
        </main>
      </div>
      </div>
    );
  }
}

export default Categories;
