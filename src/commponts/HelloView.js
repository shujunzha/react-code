import  React,{Component}  from "react";
class App extends Component{
    constructor(){
        super()
        this.state = {
            message:'Hello,韩先生',
            count:1,
            aaa:undefined,
            bbb:null,
            ccc:true,
            frient:{name:'小明'},
            firstName:'John',
            lastName:'Smith',
            age:16,
            movies:['浏览和给地球','月球保卫山','上海堡垒']
        }
    }
    render(){
        const {message,count} = this.state
        const {aaa,bbb,ccc} = this.state
        const {frient,firstName,lastName} = this.state
        const {age,movies} = this.state
        const fullName=firstName+' '+lastName
        const ageValue = age>18?'成年人':'未成年'
        const movie = movies.map(item=>{
            return <li>{item}</li>
        })
        return(
            <div>
                <p>{message}</p>
                <p>{count+''}</p>
                <p>{aaa}</p>
                <p>{bbb}</p>
                <p>{ccc}</p>
                <p>{frient.name}</p>
                <p>{Object.keys(frient)[1]}</p>
                <p>{Object.keys(frient)}</p>
                <p>{fullName}</p>
                <p>{ageValue}</p>
                <ul>
                    {movie}
                </ul>
                <ul>{this.getMovit()}</ul>
            </div>
        )
    }
    getMovit(){
        const rdit= this.state.movies.map(movie=><li>{movie}</li>)
         return rdit
     }
}

function HelloView(){
    return(
        <div>
            <h2>测试</h2>
            <App/>
        </div>
    )
}

export default HelloView;