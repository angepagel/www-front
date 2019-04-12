import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { GitHubIcon } from '../../components/svg/icons';
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
                    <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/www.png')})`}} />
                    <Col xl='12' className="project-description">
                      <h2>www.angepagel.fr</h2>
                      <div className="infos">
                        <span className="category">Site internet</span>
                        <span className="date">Février - Mars 2019</span>
                      </div>
                      <p>
                        Mon site internet personnel, conçu à l'aide de Node.js et des frameworks React (front-end) et Express (back-end, REST API). Son développement s'appuie sur une multitude de technologies web (Bootstrap, JSON Web Tokens, Sass, React Router, etc.) qui me permettent de présenter mon profil professionnel de manière soignée et originale tout en mettant à ma disposition un support d'expression personnel.
                      </p>
                      <a className="main mr-4" rel="noopener noreferrer" href="https://github.com/angepagel/www-front" target="_blank">Front-end (GitHub <GitHubIcon/>)</a>
                      <a className="main mt-2" rel="noopener noreferrer" href="https://github.com/angepagel/www-back" target="_blank">Back-end (GitHub <GitHubIcon/>)</a>
                    </Col>
                </Row>
              </article>
              <Row>
                <Col xs='12' md='6'>
                  <article id="project-durandal">
                    <Row className="project">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/durandal.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>Durandal</h2>
                        <div className="infos">
                          <span className="category">Bot Discord</span>
                          <span className="date">Novembre 2018</span>
                        </div>
                        <p>
                          Durandal est un bot Discord développé en Python. Il est capable d'effectuer des actions basiques et de répondre à diverses commandes.
                        </p>
                        <a className="main" rel="noopener noreferrer" href="https://github.com/angepagel/Durandal" target="_blank">Voir sur GitHub <GitHubIcon/></a>
                      </Col>
                    </Row>
                  </article>
                </Col>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project">
                      <Col xl='12' className="project-image" />
                      <Col xl='12' className="project-description">
                        <h2>Projet 3</h2>
                        <div className="infos">
                          <span className="category">Catégorie</span>
                          <span className="date">Date</span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices venenatis eros quis porta. Maecenas eget elit nec velit egestas rhoncus. Suspendisse sem lacus, convallis eget malesuada at, viverra eget nisi. Donec finibus ac erat eu molestie.
                        </p>
                      </Col>
                    </Row>
                  </article>
                </Col>
              </Row>
              <Row>
                <Col xs='12' md='6'>
                  <article id="project-durandal">
                    <Row className="project">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/civilization-zero.png')})`}} />
                      <Col xl='12' className="project-description">
                        <h2>Civilization Zero</h2>
                        <div className="infos">
                          <span className="category">Jeu vidéo</span>
                          <span className="date">Nov. - Déc. 2017</span>
                        </div>
                        <p>
                          Civilization Zero est un jeu en ligne de commande développé en Pascal et inspiré de la célèbre série de jeux vidéo Civilization. Le joueur construit et améliore des bâtiments pour produire diverses ressources et se développer. Il doit également se protéger et diriger son armée contre les ennemis qui l'assaillissent.
                        </p>
                        <a className="main" rel="noopener noreferrer" href="https://github.com/angepagel/Civilization-Zero-Lamaths-UE" target="_blank">Voir sur GitHub <GitHubIcon/></a>
                      </Col>
                    </Row>
                  </article>
                </Col>
                <Col xs='12' md='6'>
                  <article>
                    <Row className="project">
                      <Col xl='12' className="project-image" style={{backgroundImage: `url(${require('../../media/spaceships.png')})`}} />
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
