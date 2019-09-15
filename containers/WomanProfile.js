import React, {Fragment, Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


class Alert extends Component {
  state = { isShowing: false }

  time = setInterval(() => {
    this.setState({ isShowing: !this.state.isShowing })
  }, 1000);

  render() {
    return this.state.isShowing ? <Text style={styles.alert}>Ela é foda!!!</Text> : <Text style={styles.alert2}>Ela é foda!!!</Text>
  }
}

// imagem, nome, descricao
export class WomanProfile extends Component {

    state = {}

    componentDidMount() {
        const res = pegaDoBackend()
        this.setState
    }

  return(){
    return
    <Fragment>
      <View style={styles.headerProfileContainer}>
        <Image source={{uri: props.imgUrl}} style={styles.image}/>
        <View>
          <Text>{props.nome}</Text>  
          <Text>{props.description}</Text> 
        </View>
      </View>
      <Alert/>
    </Fragment>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  headerProfileContainer: {
    flexDirection: "row",
  },
  alert: {
    fontSize: 72,
    color: 'pink',
  },
  alert2: {
    color: 'purple',
    fontSize: 72,
  }
});
