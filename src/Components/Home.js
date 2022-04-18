import { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component{



    


    
    render (){
        let parsed_Posts = this.props.posts.map(post => {
            
            return(
                
                <div key={post.id} className="card mt-2 mb-2">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-8">
                                "{post.title}"
                            </div>
                            <div className="col-4 text-right">
                                <button  onClick={() => this.props.deletePost(post.id)} className="btn btn-danger btn-sm float-right">
                                    <span className="material-icons-sharp">delete</span>
                                </button>
                                <Link to={'/edit_post/'+ post.id} className="btn btn-warning btn-sm float-right mx-2">
                                    <span className="material-icons-sharp">edit</span>
                                </Link>
                            </div>
                        </div>   
                    </div>
                    <div className="card-body">
                            <p className="p-2">{post.body}</p>
                    </div>
                </div>
            )
        })
        return(
            <div className="container">
                {
                    this.props.show_success_msg ?
                    <div className="alert alert-success alert-dismissible fade show mt-3" id="successMessg" role="alert">
                        <strong>
                            success : 
                        </strong> 
                         You Created Post Successfuly.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div> 
                    : null
                }
                           
                <div className="card  my-5 ">
                    <div className="card-header text-left">
                        <div className="row">
                            <div className="col-6">
                                All Posts
                            </div>
                            <div className="col-6 text-right">
                                <Link to="/create_post"  >
                                    <span className="material-icons-sharp">add_circle_outline</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {parsed_Posts}
                
            </div>
            
        );
    }
}
export default Home;
