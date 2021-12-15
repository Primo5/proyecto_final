import React, { Component } from 'react';
import {DashboardComponent} from './DashBoardComponent';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container,  Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
const data =[];


export const App=class App extends Component {
  state={
    data:data,
    form:{
      id:'',
      nombre:'',
      apellidos:'',
      ci:'',
      cargahoraria:''
    },
    modalInsertar: false,
    modalEditar: false,
  };

  handlerChange = e =>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true});
  }

  ocultarModalInsertar=()=>{
    this.setState({modalInsertar: false})
  }

  insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id = this.state.data.length+1;
    var  lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsertar: false})
  }

  mostrarModalEditar=(dato)=>{
    this.setState({form: dato, modalEditar: true});
  }

  ocultarModalEditar=()=>{
    this.setState({modalEditar: false})
  }

  editar=(dato)=>{
    var contador = 0;
    var lista = this.state.data;
    lista.map((registro)=>{
      if(dato.id == registro.id){
        lista[contador].nombre = dato.nombre;
        lista[contador].apellidos = dato.apellidos;
        lista[contador].ci = dato.ci;
        lista[contador].cargahoraria = dato.cargahoraria;
      }
      contador++;
    });
    this.setState({data: lista, modalEditar: false});
  }

  eliminar = (dato)=>{
    var opcion = window.confirm("Esta seguro que desea eliminar a "+dato.nombre+" "+ dato.apellidos);
    if(opcion == true){
      var contador = 0;
      var lista = this.state.data;
      lista.map((registro)=>{
        if(dato.id == registro.id){
          lista.splice(contador, 1);
        }
        contador++;
      });
      this.setState({data: lista, modalEditar: false});
    }
  }

  render(){
    return(
    <>

    <Container>
    <Button color = "success" onClick={()=>this.mostrarModalInsertar()}>Agregar Nuevo Docente</Button>
    <br/><br/>

    <Table background-color="dark">
      <thead><tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>CI</th>
      <th>Carga Horaria</th>
      </tr></thead>
      
      <tbody>
        {this.state.data.map((dato)=>(
          <tr>
            <td>{dato.id}</td>
            <td>{dato.nombre}</td>
            <td>{dato.apellidos}</td>
            <td>{dato.ci}</td>
            <td>{dato.cargahoraria}</td>
            <td>
              <Button color="success" onClick={()=>this.mostrarModalEditar(dato)}>Editar</Button>
              {" "}
              <Button color="danger" onClick={()=>this.eliminar(dato)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>

    <Modal isOpen={this.state.modalInsertar}>
      <ModalHeader>
        <div><h3>Insertar Registro</h3></div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>ID:</label>
          <input className="form-control" readOnly type="number" value={this.state.data.length+1}/>
        </FormGroup>

        <FormGroup>
          <label>Nombre:</label>
          <input className="form-control" name="nombre" type="text" onChange={this.handlerChange}/>
        </FormGroup>

        <FormGroup>
          <label>Apellidos:</label>
          <input className="form-control" name="apellidos" type="text" onChange={this.handlerChange}/>
        </FormGroup>

        <FormGroup>
          <label>CI:</label>
          <input className="form-control" name="ci" type="text" onChange={this.handlerChange}/>
        </FormGroup>

        <FormGroup>
          <label>Carga Horaria:</label>
          <input className="form-control" name="cargahoraria" type="number" onChange={this.handlerChange}/>
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={()=>this.insertar()}>Insertar</Button>
        <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
      </ModalFooter>
    </Modal>


    <Modal isOpen={this.state.modalEditar}>
      <ModalHeader>
        <div><h3>Editar Registro</h3></div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>ID:</label>
          <input className="form-control" readOnly type="number" value={this.state.form.id}/>
        </FormGroup>

        <FormGroup>
          <label>Nombre:</label>
          <input className="form-control" name="nombre" type="text" onChange={this.handlerChange} value={this.state.form.nombre}/>
        </FormGroup>

        <FormGroup>
          <label>Apellidos:</label>
          <input className="form-control" name="apellidos" type="text" onChange={this.handlerChange} value={this.state.form.apellidos}/>
        </FormGroup>

        <FormGroup>
          <label>CI:</label>
          <input className="form-control" name="ci" type="text" onChange={this.handlerChange} value={this.state.form.ci}/>
        </FormGroup>

        <FormGroup>
          <label>Carga Horaria:</label>
          <input className="form-control" name="cargahoraria" type="number" onChange={this.handlerChange} value={this.state.form.cargahoraria}/>
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={()=>this.editar(this.state.form)} >Editar</Button>
        <Button color="danger" onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
      </ModalFooter>
    </Modal>
    </>)
  }
}
export default App;