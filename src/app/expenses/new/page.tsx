"use client"
import "@/app/global.css"

import Link from 'next/link'
import React, { useState } from 'react'

type FormValue = {
  description: string;
  amount: string;
  date: string;
  category: string;
}

const Home: React.FC = () => {

  const [formData, setFormData] = useState<FormValue>({
    category: "HOGAR",
    date: "",
    description: "",
    amount: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
        ...formData,
        [name]: value,
    })
}

const handleSubmit = (e) => {
  e.preventDefault();
  fetch("/api/expenses", {
    method: "POST",
    body: JSON.stringify(formData)
  })
  console.log(formData)
}

  return (
    <div className='flex justify-center bg-slate-200'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-7 mt-12'>
        <label htmlFor="category">Categoría:</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange}>
          <option value="HOGAR">Hogar</option>
          <option value="COMIDA">Comida</option>
          <option value="DEPORTE">Deporte</option>
          <option value="OCIO">Ocio</option>
          <option value="OTROS">Otros</option>
        </select>

        <label htmlFor="date">Fecha:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

        <label htmlFor="description">Descripción:</label>
        <input type="text" id="description" name="description" placeholder='Cual fue el gasto' value={formData.description} onChange={handleChange} required />

        <label htmlFor="amount">Cantidad:</label>
        <input type="number" id="amount" name="amount" placeholder='Cuanto fue el gasto' value={formData.amount} onChange={handleChange} required />

        <button className="btn-gastos" type="submit">Agregar Gasto</button>
      </form>

      <Link href="/expenses/list">Ver todos los gastos</Link>
    </div>
  )
}

export default Home;