import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';

export default class EditTask extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            text: this.props.item.task,
            changeText: false,
        }
    }

    componentDidUpdate(){
        const{changeText, text } = this.state;
        const {item} = this.props;
        if(item.task != text && !changeText){
            this.setState({text: item.task});
        }
    }

    render(){
        const {visible } = this.props;
        const {text} = this.state;

        return(
            <View>
                <Modal animationType="slide" visible={true} transparent={true}>
                    <View style={styles.container}>
                        <View style={styles.modalView}>
                            <Text style={[styles.modalText, styles.sizeText]}>Editar Tarefa </Text>
                            <View styles={styles.container}>
                                <Text style={styles.sizeText}>Tarefa: </Text>
                                <TextInput style={styles.input} value={text} onChangeText={text => this.setState({text, changeText: true})}/>
                            </View>

                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.btnText}>Excluir</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.btnText}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.btnText}>Atualizar</Text>
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
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center"
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
    modalText:{
        marginBottom: 15,
        fontWeight: "bold"
    },
    sizeText:{
        fontSize: 15
    },
    inputContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    input:{
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 15,
        height: 25,
        paddingHorizontal: 5,
        borderRadius: 3
    },
    btnContainer:{
        flexDirection: "row",
        justifyContent: "center"
    },
    button:{
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        backgroundColor: "#2196F3",
        marginTop: 20,
        marginLeft:10
    },
    btnText:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }

});