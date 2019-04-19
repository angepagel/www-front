import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import './projects.scss';

class Projects extends Component {
  render() {
    return (
        <div id="projects">
        
          <Helmet>
            <title>Ange Pagel – Projets</title>
          </Helmet>

          <h1 className="page-title">Projets</h1>
          <section>
            <Container>
              <article>
                <Row className="project">
                    <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/www.png')})`}} />
                    <Col xl='12' className="project-description">
                      <h2>www.angepagel.fr</h2>
                      <div className="infos">
                        <span className="category">Site internet</span>
                        <span className="date">Février - Mars 2019</span>
                      </div>
                      <p>
                        Mon site internet personnel, conçu à l'aide de <a rel="noopener noreferrer" href="https://nodejs.org" target="_blank">Node.js</a> et des frameworks <a rel="noopener noreferrer" href="https://reactjs.org/" target="_blank">React</a> (front-end) et <a rel="noopener noreferrer" href="https://expressjs.com/" target="_blank">Express</a> (back-end, REST API). Son développement s'appuie sur une multitude de technologies web (<a rel="noopener noreferrer" href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, <a rel="noopener noreferrer" href="https://jwt.io/" target="_blank">JWT</a>, <a rel="noopener noreferrer" href="https://sass-lang.com/" target="_blank">Sass</a>, <a rel="noopener noreferrer" href="https://reacttraining.com/react-router/" target="_blank">React Router</a>, etc.) qui me permettent de présenter mon profil professionnel de manière soignée et originale tout en mettant à ma disposition un support d'expression personnel.
                      </p>
                      <a className="main mr-4" rel="noopener noreferrer" href="https://github.com/angepagel/www-front" target="_blank">Front-end (GitHub)</a>
                      <a className="main mt-2" rel="noopener noreferrer" href="https://github.com/angepagel/www-back" target="_blank">Back-end (GitHub)</a>
                    </Col>
                </Row>
              </article>
              <Row>
              <Col xs='12' md='6'>
                  <article>
                    <Row className="project">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/lab.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>ThreeJS Lab</h2>
                        <div className="infos">
                          <span className="category">Infographie 3D</span>
                          <span className="date">Avril 2019</span>
                        </div>
                        <p>
                          Le ThreeJS Lab est un projet expérimental basé sur la bibliothèque JavaScript <a rel="noopener noreferrer" href="https://threejs.org/" target="_blank">three.js</a> qui me permet de développer mes compétences en infographie tridimensionnelle.
                        </p>
                        <a className="main" rel="noopener noreferrer" href="https://github.com/angepagel/ThreeJS-Lab" target="_blank">Voir sur GitHub</a>
                      </Col>
                    </Row>
                  </article>
                </Col>
                <Col xs='12' md='6'>
                  <article id="project-durandal">
                    <Row className="project">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/durandal.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>Durandal</h2>
                        <div className="infos">
                          <span className="category">Bot Discord</span>
                          <span className="date">Novembre 2018</span>
                        </div>
                        <p>
                          Durandal est un bot <a rel="noopener noreferrer" href="https://discordapp.com/" target="_blank">Discord</a> développé en Python. Il est capable d'effectuer des actions basiques et de répondre à diverses commandes.
                        </p>
                        <a className="main" rel="noopener noreferrer" href="https://github.com/angepagel/Durandal" target="_blank">Voir sur GitHub</a>
                      </Col>
                    </Row>
                  </article>
                </Col>
              </Row>
              <Row>
                <Col xs='12' md='6'>
                  <article id="project-durandal">
                    <Row className="project">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/civilization-zero.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>Civilization Zero</h2>
                        <div className="infos">
                          <span className="category">Jeu vidéo</span>
                          <span className="date">Nov. - Déc. 2017</span>
                        </div>
                        <p>
                          Civilization Zero est un jeu en ligne de commande développé en Pascal et inspiré de la célèbre série de jeux vidéo Civilization. Le joueur construit et améliore des bâtiments pour produire diverses ressources et se développer. Il doit également se protéger et diriger son armée contre les ennemis qui l'assaillissent.
                        </p>
                        <a className="main" rel="noopener noreferrer" href="https://github.com/angepagel/Civilization-Zero-Lamaths-UE" target="_blank">Voir sur GitHub</a>
                      </Col>
                    </Row>
                  </article>
                </Col>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/projects/spaceships.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>Spaceships</h2>
                        <div className="infos">
                          <span className="category">Jeu vidéo</span>
                          <span className="date">Avril - Juin 2017</span>
                        </div>
                        <p>
                          Spaceships est un jeu vidéo type « Asteroids » développé en Python à l'aide de la bibliothèque Pygame. Il propose différents modes de jeux, un éditeur de niveaux et une personnalisation avancée du vaisseau dont il est possible de changer la forme, la couleur et l'arme équipée.
                        </p>
                      </Col>
                    </Row>
                  </article>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
    );
  }
}

export default Projects;
