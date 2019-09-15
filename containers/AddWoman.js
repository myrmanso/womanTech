import React, { Component, Fragment } from 'react'
import { TextInput, Button } from 'react-native'

export class AddWoman extends Component {
    state = {
        name: '',
        description: '',
        imgUrl: '',
    }

    render() {

        const { name, description, imgUrl } = this.state
        console.log(this.state)

        return <Fragment>
            <TextInput
                placeholder='Nome'
                value={name}
                onChangeText={text => this.setState({ name: `${text}` })}
            />
            <TextInput
                placeholder='Descrição'
                value={description}
                onChangeText={text => this.setState({ description: `${text}` })}
            />
            <TextInput
                placeholder='Link da imagem'
                value={imgUrl}
                onChangeText={text => this.setState({ imgUrl: `${text}` })}
            />
            <Button

                onPress = {() => alert('Oi, bb!') }
                title = 'Salvar'

            />

        </Fragment>

    }
}
