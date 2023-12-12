import  React  from "react"

class WelcomeState extends React.Component {
    constructor(props){
    super(props) 
    this.state={
        msg:"Welcome"
    }
    }
    render()
    {
    return(
    <div>
        <h1>{this.state.msg}</h1> 
        <button onClick={()=>{
            this.setState({msg:'Hello'})
        }}>
             ClickMe
        </button>
    </div>
    )
    }
}
export default  WelcomeState;