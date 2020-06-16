import React from 'react';
import './Blog.css'
import {MdDelete} from 'react-icons/md'
import {
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle,
  Button, 
  
} from 'reactstrap';
    
const blog = (props) => {
  return (
    <div className='Blog'>
      <Card className='Content'>
        <CardImg top width="100%" height="250px"  src="https://images.assetsdelivery.com/compings_v2/nadianb/nadianb1610/nadianb161000367.jpg" alt="Card image cap" />
        <CardBody>
            <CardTitle className='title'>{props.title}</CardTitle>
            <CardText className='content'>{props.content}</CardText>
            <MdDelete onClick={()=>{props.remove(props.index)}}></MdDelete>
        </CardBody>
        
      </Card>
    </div>
  );
};

export default blog;
