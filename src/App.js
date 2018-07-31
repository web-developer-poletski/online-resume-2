import React, {Component, Fragment} from 'react';

import {
  Abilities,
  Careers,
  Educations,
  Personal,
  Projects,
  Socials,
} from './components';
import {sortCollectionByIds} from './helpers';
import { Footer, Header, NavBar, SkillGroup } from './ui';

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
    socials,
    technical_skills
  }) => {
    const technicalSkillsMeta = collections_meta.find(({ collectionName }) => {
      return collectionName === 'technical_skills';
    });

    const socialsMeta = collections_meta.find(({ collectionName }) => {
      return collectionName === 'socials';
    });

    return {
      ...this.extractPersonalInfo(personal_info[0]),
      careers,
      educations,
      projects,
      socials: sortCollectionByIds(
        socials,
        socialsMeta.itemsOrderById,
      ),
      technicalSkills: sortCollectionByIds(
        technical_skills,
        technicalSkillsMeta.itemsOrderById
      ),
    };
  }

  render() {
    const {
      careers,
      educations,
      projects,
      socials,
      technicalSkills
    } = this.state;

    return (
      <Fragment>
        <Header>
          <NavBar />
        </Header>

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

        <Footer>
          <Socials socials={socials} />
        </Footer>
      </Fragment>
    );
  }
}

export default App;
