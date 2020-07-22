import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './img/image.png'

class Header extends React.Component{
    render() {
        return(
          <header>
            <h1>S2</h1>
            <a href="../Sign_in/Sign_in.html">
              <p>Войти</p>
            </a>
          </header>
        )
    }
}

class Logo extends React.Component{
    render(){
        return(
          <div class="logo">
            <img src={logo} alt="logo.img" />
            <p>S2</p>
          </div>
        )
    }
}

class Description extends React.Component{
    render() {
        return(
          <div> 
            <h2 class="description">
              <span>S2</span> - сервис автоматизации <br /> процесса взаимодействия между оптовыми клиентами и торговым
              предприятием
            </h2>
            <a href="../Sign_in/Sign_in.html"><button>Начать &rarr;</button></a>
          </div>
        )
    }
}

class Facilities extends React.Component{
    render(){
        return(
          <div class="facillities">
            <Column id="first" />
            <Column id="second" />
            <Column id="third" />
          </div>
        );
    }
}

function Column(props){
    let colums ={
        first:{
            heading: <h3>Товароучетная система</h3>,
            text: <h5>
            Управление товарами и ценами. 
            Планирование закупок и контроль остатков. 
            Резервы. Модификации.Инвентаризации.
            </h5>,
        },

        second:{
            heading: <h3>CRM для торговли</h3>,
            text:  <h5>
            История покупок, сегментация базы клиентов, 
            бонусные программы лояльности. Статистика.
            </h5>,
        },

        third:{
            heading: <h3>Интеграция</h3>,
            text:   <h5>
            CMS, CRM, рассылки, аналитика, банки, службы доставки.
            Экспорт в 1С:Бухгалтерию. 
            Помощь с настройками.
            </h5>,
        },
    };

    return(
        <div class="column">
            {colums[props.id].heading}
            <br />
            {colums[props.id].text}
        </div>
    )
}

class LandingPage extends React.Component {
    render() {
        return (
            <main>
              <Header />
              <Logo />
              <Description />
              <Facilities />
            </main>
        );
    }
}


ReactDOM.render(<LandingPage />,document.getElementById('root'));