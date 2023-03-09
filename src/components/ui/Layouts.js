import React from 'react'
import { Outlet } from 'react-router-dom'
import { Row, Col,Nav } from 'react-bootstrap'
import Header from '../Header'
import Footer from '../Footer'
import Aside from '../Aside'


export default function Layouts() {
  return (
    <>
        <Header />
        <main>
            <Row className='h-100'>
                <Col sm={2} className='s_tbdr'>
                        <Aside />
                </Col>
                <Col sm={10} className='s_tbdr'>
                        <Outlet />
                </Col>
            </Row>
        </main>
        <Footer />
    </>
  )
}
