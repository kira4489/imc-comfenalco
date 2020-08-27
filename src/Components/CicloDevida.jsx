import React, { Component } from 'react'
import axios from "axios"

export class CicloDevida extends Component {
  shouldComponentUpdate(nextProps,nextState){
 console.log(nextProps)
 console.log(nextState)
 return true
  }
  Willupdate(nextProps,nextState){
    console.log(nextProps)
    console.log(nextState)
    return true
     }
     componentDidUpdate(prevProps,prevState){
      console.log(prevProps)
      console.log(prevState)
     }
    render(){ 
        console.log("Se ejecuto el render")
        return(
          <article>
            <p>Hola desde class component</p>
            <p><b>Nombre: </b> {this.nombre}</p>
            
            {this.state.quotes.length>0? this.state.quotes[0].quote:""}
            
            <ul>
              {this.state.quotes.map((element,index) => {
                  return <li>
                        <b>Autor: {element.author}</b>
                        {element.quote}
                        </li>
                })
               }
             </ul>
          </article>
        );
      }
       componentWillMount(){
        console.log("Se ejecuto componentWillMount")
        this.nombre = "Oscar"
        this.setState({quotes : []}) 
      }
      async componentDidMount(){
        console.log("Se ejecuto el componentDidMount"); 
      /*$.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", {}, (data,status,jqXHR) => {
        console.log(status,jqXHR)
        this.setState({quotes:data.quotes})
      }, "json" ) */
       /*
        let  respuesta =  await $.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
        let data = JSON.parse(respuesta)
       this.setState({quotes : data.quotes}) */
      /* let  respuesta =  await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
        let data = await respuesta.json();
        this.setState({quotes : data.quotes}) */
        let  respuesta =  await axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
        this.setState({quotes : respuesta.data.quotes}) 
      }
      }
      function MyComponent(){
      return (
        <section>
          <p>Hola desde CodePen!!!</p>
        </section>
      );
    }
    
export default CicloDevida

