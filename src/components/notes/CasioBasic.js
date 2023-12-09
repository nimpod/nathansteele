import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-scroll';

class CasioBasic extends Component {

    render() {
        return(
            <div className="page-wrapper notes-page">
                <div className="sidebar">
                    <ul>
                        <Link to="introduction" spy={true} smooth={true} offset={0} duration={400}><li>Introduction to Casio BASIC</li></Link>
                        <Link to="hello-world" spy={true} smooth={true} offset={0} duration={400}><li>Hello World</li></Link>
                        <Link to="variables" spy={true} smooth={true} offset={0} duration={400}><li>Variables</li></Link>
                        <Link to="math-operators" spy={true} smooth={true} offset={0} duration={400}><li>Math Operators</li></Link>
                        
                        <a href="#introduction"><li>User input</li></a>
                        <a href="#introduction"><li>Loops</li></a>
                        <a href="#introduction"><li>Conditionals</li></a>
                        <a href="#introduction"><li>Logical operators</li></a>
                        <a href="#introduction"><li>Subroutines</li></a>
                        <a href="#introduction"><li>Graphics</li></a>
                    </ul>
                </div>
                <div className="section-inner">
                    <div id="introduction" className="subsection">
                        <h1>Introduction to Casio BASIC</h1>
                        <p>Casio BASIC is a variant of the <a href='https://en.wikipedia.org/wiki/BASIC'>BASIC language</a>.</p>
                        <p>BASIC does not literally mean 'basic', instead it stands for Beginners All-purpose Symbolic Instruction Code.</p>
                        <p>Casio BASIC is a progrmaming language embedded inside programmmable graphing calculators, allowing us to code on the go!</p>
                    </div>
                    <div id="hello-world" className="subsection">
                        <h1>Hello World</h1>
                        <p>Casio BASIC probably has the easiest 'Hello World' program in the history of programming..</p>
                        <p>Here you go!</p>
                        <pre className="prettyprint language-java">
                            "Hello World!"
                        </pre>
                        <p>Yeah that's it. That's all you need to do in order to print something.</p>
                    </div>
                    <div id="variables" className="subsection">
                        <h1>Variables</h1>
                        <p>This is how you create and assign variables.</p>
                        <pre className="prettyprint language-java">
                            1 -&gt; A
                        </pre>
                        <p>Now A has the value 1</p>
                        <p>The mysterious symbol <code>-&gt;</code> is called the 'Assignment Operator'.</p>
                        <p>You can also assign values to more than one variable at a time.</p>
                        <p>For example, suppose you have four variables that you want to all hold the value 1. This can be achieved by using the following notation:</p>
                        <pre className="prettyprint language-java">
                            1 -&gt; A~D
                        </pre>
                        <p>That little squiggly line between the A and the D indicates that all values between A and D (inclusive) should be assigned the value of 1</p>
                    </div>
                    <div id="math-operators" className="subsection">
                        <h1>Math Operators</h1>
                        <h5>Increment/Decrement</h5>
                        <p>Incrementing and decrementing gets a bit funky in Casio BASIC, most other languages do n++ and n-- or something alike.</p>
                        <p>Incrementing and decrementing the value of a variable can be done in two ways.</p>
                        <p>Option 1:</p>
                        <pre className="prettyprint language-java">
A+1 -&gt; A     /* incrementing */ 
B+1 -&gt; B     /* decrementing */
                        </pre>
                        <p>Option 2:</p>
                        <pre className="prettyprint language-java">
Isz A     /* incrementing */ 
Dsz B     /* decrementing */
                        </pre>
                        <p>Personally, I prefer option 1 because it's more intuitive syntax. It also gives you the flexibility to change how much you are incrementing by.</p>
                    </div>

                </div>
            </div>
        )
    }

}

export default withRouter(CasioBasic)
