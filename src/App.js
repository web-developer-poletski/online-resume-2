import React, {Component, Fragment} from 'react';

import {
  Abilities,
  Careers,
  Educations,
  Personal,
  Projects,
  Header,
  Footer
} from './components';
import {sortCollectionByIds} from './helpers';
import { SkillGroup } from './ui';

class App extends Component {
  state = {
    isLoading: false
  }

  componentDidMount = () => {
    this.fetchResume();
  }

  get personalInfo() {
    return this.extractPersonalInfo(this.state);
  }

  fetchResume = async() => {
    this.setState({isLoading: true});

    try {
      const resume = await this
        .props
        .firebase
        .getResume();

      this.handleResumeFetchSuccess({resume});
    } catch (err) {
      this.handleResumeFetchFail({message: err.message});
    }
  }

  handleResumeFetchSuccess = ({resume}) => {
    this.setState({
      isLoading: false,
      ...this.mapResumeToState(resume)
    });
  }

  handleResumeFetchFail = ({message}) => {
    this.setState({isLoading: false, errMessage: message});
  }

  /**
   * Extracts required person`s fields from a person storing object
   */
  extractPersonalInfo = ({firstName, lastName, personalStatement, location, photoURL}) => {
    return {firstName, lastName, personalStatement, location, photoURL};
  }

  mapResumeToState = ({
    collections_meta,
    personal_info,
    careers,
    educations,
    projects,
    technical_skills
  }) => {
    const technicalSkillsMeta = collections_meta.find(({collectionName}) => {
      return collectionName === 'technical_skills';
    });

    return {
      ...this.extractPersonalInfo(personal_info[0]),
      careers,
      educations,
      projects,
      technicalSkills: sortCollectionByIds(
        technical_skills,
        technicalSkillsMeta.skillsOrderByIds
      ),
    };
  }

  render() {
    const {careers, educations, projects, technicalSkills} = this.state;

    return (
      <Fragment>
        <Header/>
        <Personal {...this.personalInfo}/>

        <Abilities>
          <SkillGroup
            title="Techical skills"
            skills={technicalSkills}
          />
        </Abilities>

        <Careers careers={careers}/>
        <Educations educations={educations}/>
        <Projects projects={projects}/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
