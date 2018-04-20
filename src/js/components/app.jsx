import React from 'react';
import ReactDom from 'react-dom';
import { getArticle } from '../services/articles';
import marked from 'marked';
import matter from 'gray-matter';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postNum: 1,
            date: '',
            title: '',
            article: ''
        }
    }

    componentDidMount() {
        getArticle()
            .then(data => {
                let contents = matter(data.data)
                this.setState({
                    postNum: contents.data.postNumber,
                    date: contents.data.date,
                    title: contents.data.title,
                    article: marked(contents.content)
                })
            })
            .catch(console.log);
    }

    render() {
        return <article className="h-100 overflow-y-auto montserrat">

            <a href="https://github.com/gemmadlou/gemmadlou.github.io">
                <img className="absolute right-2 top-1 z-3" 
                    src="assets/github.png" width="100" />
            </a>
            <div className="relative vh-100 dt w-100 bg-dark-gray white cover" 
                style={{background: `url(https://images.unsplash.com/photo-1514792368985-f80e9d482a02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b067b70aaa4390e9c1ad2133f406a377&auto=format&fit=crop&w=1050&q=80) no-repeat center`}}>
                <div className="absolute top-0 w-100 left-0 vh-100 bg-black-50 z-0"></div>
                <div className="dtc v-mid z-1 relative">
                    <div className="pa5 mw8 w-100 center">
                        <header className="center w-100">
                            <h2 className="f6 fw1 ttu tracked mb2 lh-title">Post No. {this.state.postNum}</h2>
                        </header>
                        <h1 className="center w-100">
                            <div className="f1 fw4 mw6">
                                {this.state.title}
                            </div>
                        </h1>
                        <blockquote className="ph0 mh0 f4 lh-copy center">
                            <div className="f6 ttu tracked fs-normal">
                                {this.state.date}
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>

            <div className="bg-white nt6-m relative s-body-copy montserrat center mw8 f4 pa5 lh-copy">
                <div className="w-80-ns"
                    dangerouslySetInnerHTML={{__html: this.state.article }}></div>
            </div>
        </article>;
    }
}