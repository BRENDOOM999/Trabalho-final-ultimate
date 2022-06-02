import React, { useEffect, useState } from 'react'
import { Table,Card,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NomeReCService from '../../services/rpg/NomeReCService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const TelaInicial = () => {


console.log(nomeReC);

  return (
    <div>
    <Card>
      <Col >
        <h1><p class='text-center'> Ficha de RPG </p></h1>

        <Link className='btn btn-danger mb-3' to={'/nomeReC/create'}><FaPlus />Nova Ficha</Link>
      
      </Col>
    </Card>
    
    </div>
  )
}

export default TelaInicial