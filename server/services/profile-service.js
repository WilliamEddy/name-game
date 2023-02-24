'use strict'
import profileData from '../profile-data.json' assert {type: 'json'};

export const getAllProfiles = () => profileData.map(profile => (
  {
    id: profile.id,
    headshot: profile.headshot.url,
    fullName: `${profile.firstName} ${profile.lastName}`
  }
));
