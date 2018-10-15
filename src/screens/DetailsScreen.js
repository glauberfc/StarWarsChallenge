import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  padding: 24px 24px 0;
  background-color: #fff;
`

const Label = styled.Text`
  font-size: 16px;
  color: #555;
`

const Title = styled.Text`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Detalhes do personagem'
  }

  state = {
    personDetails: {}
  }

  componentDidMount() {
    const { people, navigation } = this.props
    const index = navigation.state.params.personIndex
    this.setState({
      personDetails: people[index]
    })
  }

  render() {
    const { personDetails } = this.state
    return (
      <Container>
        <Label>Nome:</Label>
        <Title>{personDetails.name}</Title>
        <Label>Ano de aniversário:</Label>
        <Title>{personDetails.birth_year}</Title>
        <Label>Sexo:</Label>
        <Title>{personDetails.gender}</Title>
        <Label>Peso:</Label>
        <Title>{personDetails.mass} kg</Title>
        <Label>Altura:</Label>
        <Title>{personDetails.height} cm</Title>
        <Label>Cor dos olhos:</Label>
        <Title>{personDetails.eye_color}</Title>
        <Label>Cor da pele:</Label>
        <Title>{personDetails.skin_color}</Title>
      </Container>
    )
  }
}

const mapStateToProps = ({ people }) => ({ people })

export default connect(mapStateToProps)(DetailsScreen)
