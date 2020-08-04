import React from 'react';

import whatsappImg from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/13890456?s=460&u=2235f7b320a11f6366783e9bed084da140da4003&v=4" alt="Arthur Silva"></img>
                <div>
                    <strong>Arthur Silva</strong>
                    <span>Tecnologia</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias tecnologicas do Brasil e do mundo.
            <br /><br />
            Apaixonado por tecnologar tecnologias e por mudar a vida das pessoas por meio da tecnologia. Mais de 200 pessoas já se tecnologizaram
        </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$20.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappImg} alt='whatsapp'></img>
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;