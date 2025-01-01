import React, { useState } from 'react';
import './FeedbackForm.css'; // Importar CSS para estilização

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
          Nome: ${formData.name}
          Email: ${formData.email}
          Feedback: ${formData.feedback}
        `;
        const isConfirmed = window.confirm(`Por favor, confirme seus detalhes:\n\n${confirmationMessage}`);
        if (isConfirmed) {
          console.log('Enviando feedback:', formData);
          setFormData({
            name: '',
            email: '',
            feedback: '',
            rating: ''
          });
          alert('Obrigado pelo seu feedback valioso!');
        }
      };
  return (
    <>
    <nav>
    Diga-nos o que você pensa
    </nav>
    <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Adoraríamos ouvir de você!</h2>
        <p>Por favor, compartilhe seu feedback conosco.</p>
        <input
          type="text"
          name="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Seu Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Seu Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
                 <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                    <span>Avalie-nos:</span>
                    <p><input
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={handleChange}
                    /> 1</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={handleChange}
                    /> 2</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleChange}
                    /> 3</p>
                   <p> <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleChange}
                    /> 4</p>
                    <p><input
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={handleChange}
                    /> 5</p>
                </div>
        <button type="submit">Enviar Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;