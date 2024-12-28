import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import footer from './footer';


const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>bem vindo ao planejador de eventos </h1>
                </header>
                <section className='description'>
            </section>
            <section className="events_categories">
            </section>
            <section className="features">
            </section>
            <section className="testimonials">
            </section>
            <section className="contact">
            </section>
        
            <section className="events_categories">
        <ul>
        <h2>Eventos Sociais:</h2>
        <li>Festas de aniversário</li>
         <li>Celebrações de aniversário de casamento</li>
         <li>Recepções de casamento</li>
         <li>Chás de bebê</li>
         <li>Festas de formatura</li>
         <li>Reuniões de família</li>
       </ul>

                <ul>
                    <h2> Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exhibitions</li>
                    <li>Cultural events</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
       </section>
       <section className="features">
                <h2>Features</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            <section className='testemunhas'>
            <h2>testemunhas</h2>
            <div className='testemunhas'>
            <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
       <p className="author">- michael jackson, rusbee</p>
            </div>
            <div className='testemunhas'>
            <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- lule e bolsonare</p>
            </div>
            </section>
            <section className="contact">
                <h2>Entre em Contato Conosco</h2>
                <form>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Mensagem"></textarea>
                    <button className="submit-button">Enviar</button>
                </form>
            </section>
            <footer/>
        </div>
      

    );
};

export default EventPlanner;