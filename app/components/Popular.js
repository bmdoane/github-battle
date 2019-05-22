import React from 'react'

export default class Popular extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }
  }
  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage
    })

    this.updateLanguage = this.updateLanguage.bind(this)
  }
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    // console.log(this);
    return (
      <ul className='flex-center'>
        {languages.map((language) => (
          <li key={language}>
            <button
              className='btn-clear nav-link'
              style={language === this.state.selectedLanguage ? { color: '#E7000C'} : null}
              onClick={() => this.updateLanguage(language)}>
              {language}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}