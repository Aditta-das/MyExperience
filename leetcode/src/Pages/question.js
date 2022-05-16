import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class QuestionForm extends React.Component {
    constructor() {
        super();
        this.state = {
            activeItem: {
                visitor: '',
                problem_name: '',
                question: ''
            },
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getCookie = this.getCookie.bind(this);
    };

    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    handleChange(e) {
        this.setState({
            activeItem:{
                ...this.state.activeItem,
                [e.target.name]:e.target.value
            }
        });
    }



    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.activeItem)
        var csrftoken = this.getCookie('csrftoken')
        var url = "http://127.0.0.1:8000/api/question/"
        fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(this.state.activeItem)
        }).then((response) => {
            this.setState({
                activeItem: {
                    visitor: '',
                    problem_name: '',
                    question: ''
                }
            })
        }).catch(function(error){
            console.log("ERROR", error)
        })
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="container col-md-6">
                    <div className="SendMe">
                        <form onSubmit={this.handleSubmit} id="form">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" onChange={this.handleChange} name="visitor" value={this.state.activeItem.visitor} className="form-control" id="name" placeholder="@SomeOne" aria-label="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Problem Name</label>
                                <input type="text" onChange={this.handleChange} className="form-control" name="problem_name" value={this.state.activeItem.problem_name} id="prblmname" placeholder="Problem Name" aria-label="prblmname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Question Here</label>
                                <textarea className="form-control" onChange={this.handleChange} name="question" value={this.state.activeItem.question} id="exampleFormControlTextarea1" rows="3"></textarea>
                                {/* <CKEditor editor={ClassicEditor} onChange={this.handleChange} value={this.state.activeItem.question}/> */}
                            </div>
                            <div className="mb-3">
                                <input type="submit" onClick={this.handleSubmit} id="submit" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default QuestionForm;