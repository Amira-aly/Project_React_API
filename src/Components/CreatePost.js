import { Component } from "react";



class CreatePost extends Component{

    state = {
        post : {
            id : Math.round(Math.random() *1000),
            title : '',
            body : '',
        }
    }



   handleChnage = (event) => {
        this.setState({
            post : {
                ...this.state.post ,
                [event.target.id] : event.target.value 
            }
        })
    }

    handleSubmit = () => {

        document.querySelector('#title').style.border = "";
        document.querySelector('#body').style.border  = "";
        let is_valied = true;

        if (this.state.post.title === '') {
            is_valied = false;
            document.querySelector('#title').style.border = "1px solid red";
        }

        if (this.state.post.body === '') {
            is_valied = false;
            document.querySelector('#body').style.border = "1px solid red";
        }

        if (is_valied) {
            this.props.createNewPost(this.state.post);
            this.setState({
                post : {
                    title : '',
                    body : ''
                }
            });

            this.props.history.push('/')
            
            
            
        }
    }

 

    render (){
        return(
            <div className="Createposts">
                <div className="container mt-3">

                    <div className="row justify-content-center">
                        <div className="col-md-8">
                        
                        
                            <h3>Create New Post</h3>
                            <hr />

                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group mt-2">
                                        <label>Title</label>
                                        <input className="form-control" id="title"  onChange={ this.handleChnage } value={this.state.post.title} />
                                    </div>

                                    <div className="form-group mt-2">
                                        <label>Content</label>
                                        <textarea className="form-control" id="body" onChange={ this.handleChnage } value={this.state.post.body} />
                                    </div>

                                    <div className="d-grid gap-2 col-12 mx-auto  mt-5">
                                        <button onClick={ this.handleSubmit }  className="btn btn-block btn-primary">Create Post</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreatePost;