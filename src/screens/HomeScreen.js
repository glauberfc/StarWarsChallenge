import React, { Component } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchPeople } from '../actions'

const Container = styled.View`
  display: flex;
  justify-content: center;
`

const Title = styled.Text`
  margin: 12px;
  font-size: 16px;
  color: #333;
`

const Card = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4px 12px;
  padding: 16px;
  border-radius: 4px;
  background-color: #fff;
`

const Info = styled.View``

const PersonName = styled.Text`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
  color: #555;
`

const PersonBirthYear = styled.Text`
  font-size: 16px;
  color: #555;
`

const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 4px;
  background-color: #555;
`

const ButtonTitle = styled.Text`
  font-size: 16px;
  color: #fff;
`

const DetailsButton = ({ title, onPress }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonTitle>{title}</ButtonTitle>
  </ButtonContainer>
)

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Star Wars',
    headerBackTitle: null
  }

  componentDidMount() {
    this.props.fetchPeople()
  }

  render() {
    return (
      <Container>
        <Title>Personagens</Title>

        <FlatList
          data={this.props.people}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item, index }) => (
            <Card>
              <Info>
                <PersonName>{item.name}</PersonName>
                <PersonBirthYear>Birth year: {item.birth_year}</PersonBirthYear>
              </Info>

              <DetailsButton
                title="Ver detalhes"
                onPress={() =>
                  this.props.navigation.push('Details', {
                    personIndex: index
                  })
                }
              />
            </Card>
          )}
        />
      </Container>
    )
  }
}

const mapStateToProps = ({ people }) => ({ people })

const mapDispatchToProps = dispatch => ({
  fetchPeople: () => dispatch(fetchPeople())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
