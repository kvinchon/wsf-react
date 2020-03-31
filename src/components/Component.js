import React from 'react'

function ComponentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/dragonite')
        .then(results => {
            return results.json()
        }).then(res => {
            this.setState({
                 data: res
           })
        })
}

export default Header