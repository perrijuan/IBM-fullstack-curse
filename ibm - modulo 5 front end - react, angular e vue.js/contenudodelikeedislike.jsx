
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0,
            handlelike: () => {
                this.setState((prevState) => ({
                    likes: prevState.likes + 1,
                    totalcontdores: prevState.likes + 1
                }));
            },

            handldislike: () => {
                this.setState((prevState) => ({
                    dislikes: prevState.dislikes + 1,
                    totalcontdores: prevState.dislikes + 1
                }));
            }
        };
    }



render() {
    return (
        <>
            <div className='content-rating'>
                <p>

                    A história do JavaScript é a seguinte:

                    Criado em 1995
                    Brendan Eich, um funcionário da Netscape Corporation, criou o JavaScript para validar formulários HTML.

                    Lançado no Netscape Navigator 2.0
                    Em setembro de 1995, o JavaScript foi lançado no Netscape Navigator 2.0.
                    Suporte no Internet Explorer 3.0
                    Em agosto de 1996, o Internet Explorer 3.0 introduziu o suporte ao JavaScript, mas com o nome JScript.
                    Padronização
                    Em 1997, a primeira versão padronizada do JavaScript foi lançada sob o nome ECMAScript.
                    Node.js
                    O Node.js é um interpretador multiplataforma que permite o uso do JavaScript fora do navegador.
                    ECMAScript 3 (ES3)
                    Em 1999, o ES3 introduziu recursos importantes, como suporte para expressões regulares, novos métodos de Array e objetos nativos.
                    ECMAScript 2020 (ES2020)
                    A décima primeira edição do padrão ECMA-262, que especifica o ECMAScript, está disponível desde junho de 2020.

                    O JavaScript é uma linguagem de programação client-side que tornou as aplicações web mais dinâmicas. Ele permite que os navegadores respondam às interações do usuário e alterem o layout do conteúdo da página.
                    O JavaScript é a linguagem para a web mais popular e é utilizado em milhões de páginas.

                </p>
                <div className='rating-buttons'></div>
                <button className="gostei-button">
                    gostei({this.state.likes})
                </button>
                <button className="naogostei-button">
                    nao gostei({this.state.dislikes})
                </button>
                <button className="like-button" onClick={this.state. handlelike}>
                    curtir ({this.state.likes})
                </button>
                <button className="dislike-button" onClick={this.state. handldislike}>
                    Não Curtir ({this.state.dislikes})
                </button>
                <p>
                    valor total : {this.state.totalcontdores}
                </p>

            </div>
        </>
    );
    }
}

export default ContentRating;
