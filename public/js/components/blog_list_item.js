import React,{Component} from 'react';
import { Link } from 'react-router'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBlog} from '../actions/index'
import {parseTimeMs} from '../utils/AppUtils'

class BlogListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      blog:this.props.blog,
      date:parseTimeMs(this.props.blog.date),
      section: {__html:this.props.blog.text.split("\n").join('<br />')}
    }
  }
  render() {
    return (
      <li className="blog_item">
        <div className="blog_title">{this.state.blog.title}
          <span className="blog_date">{this.state.date}</span>
        </div>
        <div dangerouslySetInnerHTML={ this.state.section } className="blog_section" />
        <div onClick={()=>this.props.selectBlog(this.props.blog)}>
          <Link to={`/edit/${this.state.blog._id}`}>Edit</Link>
        </div>

    </li>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBlog},dispatch);
}

export default connect(null, mapDispatchToProps)(BlogListItem);

