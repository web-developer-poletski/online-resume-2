import React, {
  Component,
  Fragment
} from 'react';

import {
  Abilities,
  Careers,
  Educations,
  Personal,
  Projects,
  Header,
  Footer
} from './components';

class App extends Component {
  state = {
    isLoading: false
  }

  componentDidMount = () => {
    this.handleResumeRequest();
  }

  get personalInfo() {
    return this.extractPersonalInfo(this.state);
  }

  handleResumeRequest = async () => {
    this.setState({
      isLoading: true
    });
    try {
      const resume = await this
        .props
        .firebase
        .getResume();

      this.handleResumeRequestSuccess({
        resume
      });
    } catch (err) {
      this.handleResumeRequestFail({
        message: err.message
      });
    }
  }

  handleResumeRequestSuccess = ({
    resume
  }) => {
    this.setState({
      isLoading: false,
      ...this.mapResumeToState(resume)
    });
  }

  handleResumeRequestFail = ({
    message
  }) => {
    this.setState({
      isLoading: false,
      errMessage: message
    });
  }

  /**
   * Extracts required person`s fields from a person storing object
   */
  extractPersonalInfo = ({
    firstName,
    lastName,
    personalStatement,
    location,
    photoURL
  }) => {
    return {
      firstName,
      lastName,
      personalStatement,
      location,
      photoURL
    };
  }

  mapResumeToState = ({
    collections_meta,
    personal_info,
    careers,
    educations,
    projects,
    technical_skills,
  }) => {
    const technicalSkillsMeta = collections_meta.find(({ collectionName }) => {
      return collectionName === 'technical_skills';
    });

    return {
      ...this.extractPersonalInfo(personal_info[0]),
      careers,
      educations,
      projects,
      technicalSkills: technical_skills,
      technicalSkillsOrderByIds: technicalSkillsMeta.skillsOrderByIds,
    };
  }

  render() {
    const {
      careers,
      educations,
      projects,
      technicalSkills,
      technicalSkillsOrderByIds,
    } = this.state;

    return (
      <Fragment>
        <Header />
        <Personal {...this.personalInfo} />
        <Abilities
          technicalSkills={technicalSkills}
          technicalSkillsOrderByIds={technicalSkillsOrderByIds}
        />
        <Careers careers={careers} />
        <Educations educations={educations} />
        <Projects projects={projects} />
        <Footer />
      </Fragment>
  );
}
}

export default App;
