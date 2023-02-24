'use strict'
import profileData from '../profile-data.json' assert {type: 'json'};

// todo: Shuffle array before returning.
export const getAllProfiles = () => profileData.map(profile => (
  {
    id: profile.id,
    headshot: profile.headshot.url,
    fullName: `${profile.firstName} ${profile.lastName}`
  }
));
