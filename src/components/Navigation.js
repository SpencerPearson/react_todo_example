import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GoChecklist } from 'react-icons/go'

export default function Navigation() {
  return (
    <Navbar expand='lg' variant='dark' bg='dark' className='p-3'> 
        <Navbar.Brand href='/'><GoChecklist /><span className="brand-text"> ReactJS ToDo</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
                <Link to='/todos' className='nav-link'>To Dos</Link>
                <Link to='/categories' className='nav-link'>Categories</Link>
                <Link to='/about' className='nav-link'>About</Link>
                <Link to='/login' className='nav-link'>Login</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
