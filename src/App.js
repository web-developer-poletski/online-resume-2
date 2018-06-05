import React, { Component, Fragment } from 'react';

import {
  Abilities,
  Careers,
} from './components';

class App extends Component {
  state = {
    isLoading: false,
  }

  componentDidMount = () => {
    this.handleResumeRequest();
  }

  handleResumeRequest = async () => {
    this.setState({ isLoading: true });
    try {
      const resume = await this.props.firebase.getResume();
      this.handleResumeRequestSuccess({ resume });
    } catch (err) {
      this.handleResumeRequestFail({ message: err.message });
    }
  }

  handleResumeRequestSuccess = ({ resume }) => {
    this.setState({
      isLoading: false,
      ...this.mapResumeToState(resume),
    });
  }

  handleResumeRequestFail = ({ message }) => {
    this.setState({
      isLoading: false,
      errMessage: message,
    });
  }

  mapResumeToState = ({
    personal_info,
    careers,
    educations,
  }) => {
    return {
      personalInfo: personal_info,
      careers,
      educations,
    };
  }

  render() {
    return (
      <Fragment>
        <Abilities />
        <Careers />
      </Fragment>
    );
  }
}

export default App;
