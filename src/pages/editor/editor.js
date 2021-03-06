import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import {
  Image as ImageIcon,
  UserCheck as UserCheckIcon,
  Tag as TagIcon,
  Edit3 as EditIcon,
  AlignLeft as AlignLeftIcon
} from 'react-feather';
import * as API from '../../api/APIUtils';
import APICodes from '../../api/APICodes';
import './editor.scss';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      category: '',
      title: '',
      image: '',
      body: '',
      apicode: ''
    }
    this.hydrate = this.hydrate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  hydrate(post) {
    this.setState({
      category: post.category,
      title: post.title,
      image: post.image,
      body: post.body,
      img_credit: post.img_credit
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    const post = this.state;
    let apicode;
    
    try {
      if (this.state.edit)
        apicode = await API.updatePost(this.props.match.params.id, post);
      else
        apicode = await API.createPost(post);
    }
    catch(error) {
      apicode = error;
    }

    this.setState({
      apicode: apicode
    })
  }

  async componentDidMount() {
    if (this.props.match) {
      try {
        const id = this.props.match.params.id
        const post = await API.getPost(id);
        this.setState({
          edit: true
        })
        this.hydrate(post);
      }
      catch(error) {
        this.setState({
          apicode: error
        })
      }
    }
  }

  render() {
    return (
      <div id="postEditor">

        <h1 className="page-title">Éditeur</h1>

        <Container>

          <h2>Prévisualisation</h2>
          <hr/>

          <article>
            <Row className="post">

              <Col xl='12' className="image" style={{backgroundImage: `url(${this.state.image})`}}>
                <span className="credits">Photo par {this.state.img_credit}</span>
              </Col>

              <Col xl='10' className="body mx-auto">

                <h1 className="title">{this.state.title}</h1>

                <div className="infos">
                    <span className="category">{this.state.category}</span>
                    <span className="date">Publié le 01/01/2020</span>
                </div>

                <hr/>

                <div dangerouslySetInnerHTML={{__html:this.state.body}} />

              </Col>

            </Row>
          </article>

          <Row>
            <Col className="mx-auto" lg='8'>

              <Alert className="mb-4"
                color={this.state.apicode === 'post_created' || 'post_updated' ? 'success' : 'danger'}
                isOpen={this.state.apicode !== ''}>
                {APICodes[this.state.apicode]}
              </Alert>

              <Form onSubmit={this.handleSubmit}>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="required" for="image">
                        <ImageIcon/>
                        Image d'en-tête
                      </Label>
                      <Input required type="text" name="image" onChange={this.handleChange} value={this.state.image} />
                    </FormGroup>
                  </Col>

                  <Col>
                    <FormGroup>
                      <Label for="img_credit">
                        <UserCheckIcon/>
                        Crédit photo
                      </Label>
                      <Input type="text" name="img_credit" onChange={this.handleChange} value={this.state.img_credit} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="required" for="title">
                        <EditIcon/>
                        Titre
                      </Label>
                      <Input required type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                    </FormGroup>
                  </Col>

                  <Col>
                    <FormGroup>
                      <Label className="required" for="category">
                        <TagIcon/>
                        Catégorie
                      </Label>
                      <Input required type="text" name="category" onChange={this.handleChange} value={this.state.category} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="required" for="body">
                        <AlignLeftIcon/>
                        Corps
                      </Label>
                      <Input required type="textarea" name="body" onChange={this.handleChange} value={this.state.body} />
                    </FormGroup>
                  </Col>
                </Row>

                <div className="required_fields">
                  Champs requis
                </div>

                <Button type="submit">
                  {this.state.edit ? 'Modifier' : 'Publier'}
                </Button>

              </Form>

            </Col>
          </Row>

        </Container>
        
      </div>
    );
  }

}

export default Editor;
