import React from 'react'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map(p => (
                <div key={p}>
                    <Row>
                <Col sm={3}>
                {p}
                </Col>
                </Row>
                </div>
            ))}
        </div>
    )
}
