import { v4 as uuidv4 } from 'uuid';
import {getAllProfiles} from "../../services/profile-service.js";


const sessions = {

  /*
   * id: XXXXXXXX
   * profiles: [...]
   */

};

export default async function (fastify, opts) {
  fastify.post('/start', async function(request, response) {
    const identifier = uuidv4();
    sessions[identifier] = getAllProfiles();

    return identifier;
  })

  fastify.get('/:id/profiles', async function(request, response) {
    const {id} = request.params;

    const profiles = sessions[id].slice(0, 5);
    sessions[id] = sessions[id].slice(6);

    return profiles;
  })
}