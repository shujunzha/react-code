import React,{Component} from "react";
import '../App.css'
import DataBook from "./DataBook";
class MoviesView extends Component{
    constructor(){
        super()
        this.state={
            movies:['大话西游','流浪地球','西游记','红楼梦'],
            activeIndex:0,
            isTrue:false,
            frient:{name:'josn',age:18}

        }
    }
    handelClick (index){
        this.setState({activeIndex:index})
    }
    render(){
        const {movies,activeIndex,isTrue,frient} = this.state;

        let showElement
        if(isTrue){
            showElement=<div>开始战斗</div>
        }else{
            showElement=<div>结束战斗</div>

        }

        const movie = movies.map(
            (item,index)=>
            <li 
            key={item} 
            className={activeIndex === index?'red-color':''} 
            onClick={()=>this.handelClick(index)}>
                
                {item}
            </li>
            )
        return(
            <>
            <ul>{movie}</ul>
            <div>{showElement}</div>
            <div>{frient&&<div>{frient.name+''+frient.age}</div> }</div>
            <DataBook/>
            </>
        )
    }
}
export default MoviesView;