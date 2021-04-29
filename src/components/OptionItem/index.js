import React from 'react' 

const OptionItem = ({ value, nome, idade, sexo }) => (
    <option data-testid="option" value={value}>
        {nome}, {idade} anos - ({sexo})
    </option>
)

export default OptionItem