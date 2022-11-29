import { Button } from "reactstrap";
import { ParentComponent } from "../../components/ParentComponent";
import { LoginService } from "../../services/LoginService";

class Login extends ParentComponent {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        };
        this.service = new LoginService();
    }
    handleChange = (e) =>{
        const{name,value} = e.target;
        this.setState({[name]:value});
    };
    handleSubmit = (e) => {
        console.log("12313123===");
        this.loginFunc();
    };
    loginFunc = async () => {
        console.log("111111111===");
        await this.service.loginFunc(this.state.data).then((res) => {
            
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='username' required onChange={this.handleChange}/>
                    <input type='password' name='password' required onChange={this.handleChange}/>
                    <Button onClick={this.handleSubmit}>Login</Button>
                </form>
            </div>
        );
    }
}

export default Login;