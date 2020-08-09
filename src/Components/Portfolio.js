import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>  
      })
    };
    if(this.props.data){
      var works = this.props.data.works.map(function(works){
        var projectImage = 'images/portfolio/'+works.image;
        return <div key={works.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={works.url} title={works.title}>
               <img alt={works.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{works.title}</h5>
                     <p>{works.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>  
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Projects and Works</h1>

            <div className="row education">
         <div className="three columns header-col">
            <h3><span>Projects</span></h3>
         </div>

        
      </div>

            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                {projects}
            </div>

            
          </div>
          
         <div className="twelve columns collapsed">

<h1></h1>

<div className="row education">
<div className="three columns header-col">
<h3><span>Works</span></h3>
</div>


</div>

<div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
    {works}
</div>


</div>
      </div>
   </section>

   
    );
  }
}

export default Portfolio;
