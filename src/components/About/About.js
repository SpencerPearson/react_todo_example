import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image from '../../images/s-pearson.png'
import './About.css'

export default function About() {
  return (
    <section className="about">
      <article className="bg-purple p-4 mb-5 text-white">
        <h1 className='text-center'>About the Developer</h1>
      </article>
      <Container>
        <Row>
          <Col lg={6} className='mt-5'>
            <img src={image} alt='Spencer Pearson, React Web Developer' className='profilePic' />
          </Col>
          <Col lg={6} className='about-text mt-5'>
            <h3>Welcome to my app!</h3>
            <p>
              Hi, I'm Spencer Pearson. Thanks for checking out my ToDo app! This app is written in
              <a href="https://reactjs.org/" target='_blank' rel='noreferrer' className="p-link"> ReactJS 18</a>
              &nbsp; and communicates with a&nbsp;  
              <a href="https://learn.microsoft.com/en-us/sql/t-sql/language-reference?view=sql-server-ver16" target='_blank' rel='noreferrer' className="p-link">T-SQL</a>
              &nbsp;database via an&nbsp; 
              <a href="https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0"
              target='_blank' rel='noreferrer' className="p-link">ASP.NET Core 6 Web API</a>. 
              Several npm packages were implemented in this app for advanced functionality, including routing via&nbsp;
              <a href="https://reactrouter.com/en/main" target='_blank' rel='noreferrer' className="p-link">
                React Router Dom</a>,
              API request handling through&nbsp;
              <a href="https://axios-http.com/" target='_blank' rel='noreferrer' className="p-link">Axios</a>,
              authorization via <a href="https://firebase.google.com/products/auth"
              target='_blank' rel='noreferrer' className="p-link"> Google Firebase</a>
              &nbsp;and form handling and schema validation using a combination of&nbsp; 
              <a href="https://formik.org/docs/overview" target='_blank' rel='noreferrer'
              className="p-link">Formik</a>
              &nbsp;and <a href="https://github.com/jquense/yup" target='_blank' rel='noreferrer' className="p-link"> Yup</a>.
              The full source code is <a href="https://github.com/SpencerPearson/react_todo_example" target='_blank' rel='noreferrer' className="p-link">available here on GitHub</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
