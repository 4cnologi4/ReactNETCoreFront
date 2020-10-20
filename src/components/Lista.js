import React, {useState, useEffect} from "react";
import axios from 'axios';

import { Button,Card, Table, Modal, ModalBody, ModalFooter } from 'react-bootstrap';

export default class ListaUsuarios extends React.Component {
  state = {
    users: [],
    roles: []
  }

  componentDidMount() {
    this.usersRequest();
    this.rolesRequest();
  }
 
  usersRequest = () => {
    axios.get(`https://localhost:5001/api/Users`)
    .then(res => {
      const users = res.data.datos;
      this.setState({ users });
    })
  }

  rolesRequest = () => {
    axios.get(`https://localhost:5001/api/Rol`)
    .then(res => {
      const roles = res.data.datos;
      this.setState({ roles });
    })
  }

  render() {
    return (
        <>
        <Button variant="success">+</Button>{' '}
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Usuario</th>
            <th>Edad</th>
            <th>Rol</th>
            <th>Status</th>
            <th>Ejecutivo</th>
            </tr>
        </thead>
        <tbody>
        { this.state.users.map(user => 
            <tr>
            <td>{user._UserName}</td>
            <td>{user._LastName}</td>
            <td>{user._UserName[0] + user._LastName}</td>
            <td>{user._Age}</td>
            <td>
                <select>
                { this.state.roles.map(rol =>
                    <option value={rol._RolId}>{rol._RolName}</option>
                )}
                </select>
            </td>
            <td>{user._Status}</td>
            <td><Button variant="success">Actualizar</Button>{' '}</td>
            </tr>) }
        </tbody>
        </Table>

        </>
    )
  }
}
