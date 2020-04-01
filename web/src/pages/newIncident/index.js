import React from 'react'
import './style.css'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function Register() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para um encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02021" />
            Voltar para o Home
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais" />

          <button className="button" type="Submit"> 
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}