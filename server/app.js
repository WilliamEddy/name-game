'use strict'

import path from "path";
import AutoLoad from "@fastify/autoload";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);


  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
