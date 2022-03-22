import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';

export default class NewTask extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          text: "",
        }
      }
    

    btnCancelar =() =>{
        this.props.onCancel();
        this.setState({text: ''});
    }  

    btnAdicionar =() =>{
        const {text} = this.state;
        if(!text) return;

        this.props.onAdd(text);
        this.setState({text: ''});
    }  
    
    render(){
        const { visible } = this.props;

      return(
          <View>
            <Modal
                animationType="slide"
                visible={visible}
                transparent={true}
                onRequestClose={this.btnCancelar}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={[styles.modalText, styles.sizeTextalo]}>Nova Tarefa</Text>
                            
                            <View style={styles.inputContainer}> 
                                <Text style={styles.sizeText}>Tarefa: </Text>
                                <TextInput style={styles.input} onChangeText={text => this.setState({text})}/>
                            </View>

                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.btn} onPress={this.btnCancelar}>
                                    <Text style={styles.btnText}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btn} onPress={this.btnAdicionar}>
                                    <Text style={styles.btnText}>Adicionar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </Modal>
          </View>
      )
    }
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalView:{
        flex: 1,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius: 4,
        elevation: 5
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    btn:{
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        backgroundColor: "#2196F3",
        marginTop: 20,
        marginLeft: 10
    },
    btnText:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: "center"
    },
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalText:{
        marginBottom: 15,
        fontWeight:'bold'
    },
    sizeText:{
        fontSize: 15
    },
    input:{
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 15,
        height: 25,
        paddingHorizontal: 5,
        borderRadius: 3
    }
  });
  