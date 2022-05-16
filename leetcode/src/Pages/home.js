import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";
import './styles/navbar.css'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leetCodeList: [],
            questionList: [],
            activeItem: {
                id: null,
                name: '',
                language: '',
                topics: '',
                link: '',
                notes: ''
            },
        }
        this.fetchLeetcodeList = this.fetchLeetcodeList.bind(this)
    };

    componentDidMount() {
        this.fetchLeetcodeList()
        this.fetchQuestion()
    }

    fetchLeetcodeList() {
        console.log('Fetching...');
        fetch('http://127.0.0.1:8000/api/codes/')
            .then(response => response.json())
            .then(data2 =>
                this.setState({
                    leetCodeList: data2
                })
            )
    }

    fetchQuestion() {
        console.log('Fetching...');
        fetch('http://127.0.0.1:8000/api/question/')
            .then(response => response.json())
            .then(data =>
                // console.log(data)
                this.setState({
                    questionList: data
                })
            )
    }

    render() {
        var codesDetails = this.state.leetCodeList
        var ques = this.state.questionList
        var num = 1
        return (
            <>
                <Navbar />
                <div className="container mt-4">
                    <div className="alert alert-primary" role="alert">
                        <div className="d-flex justify-content-center">
                            {ques.length} New Question Arrived
                        </div>
                    </div>
                    <div className="tableFormat mt-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Language</th>
                                    <th scope="col">Topics</th>
                                    <th scope="col">Link</th>
                                    <th scope="col">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {codesDetails.map(function(code, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{num++}</td>
                                            <td>{code.name}</td>
                                            <td>{code.language}</td>
                                            <td>{code.topics}</td>
                                            <td><a href={code.link} className="links">{code.link}</a></td>
                                            <td>{code.notes}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;