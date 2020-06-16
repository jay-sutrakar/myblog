import React, { Component } from 'react';
import { Button, Form, FormGroup, Input,} from 'reactstrap';
import './ModalForm.css'
class modelform extends Component {
    state = {
            title : null,
            content : null
    }
    setContent = (e) => {
        this.setState({content:e.target.value})
    }
    setTitle = (e) => {
        this.setState({title:e.target.value})
    }
    postHandler = () => {
    const blog = {
            title : this.state.title,
            content : this.state.content
        }
        this.props.blog(blog)
        
    }
    render(){
    return (
        <div>
            
            <Form>
                <FormGroup>
                    <Input type='file'></Input>
                </FormGroup>
                <FormGroup>
                    <Input type='text' placeholder='Title' onChange={this.setTitle}></Input>
                </FormGroup>
                <FormGroup>
                    <Input type='textarea' placeholder='Content' onChange={this.setContent}></Input>
                </FormGroup>
                <FormGroup>
                    <Button onClick={this.postHandler}>Submit</Button>
                </FormGroup>
            </Form>    
        </div>
    )}
}
export default modelform