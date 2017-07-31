# Jobbatical-clone
Clone the [jobbatical](https://jobbatical.com/) website as part of Chingu Voyage project

1-Jobbatical.html contains the original site's home page source code for reference

2- The index.html file contains the clone's HTML structure

3- The Css folder contains bootstrap style sheets and a custom-style css

## Demo
Coming soon

## Development
```
npm run build:client  # build the client app for production
npm run build:server  # build the server app for production
npm run clean         # remove all compiled assets
npm run build         # clean && build:client && build:server
npm run dev           # start the development server
                      # MONGO_URL should be correctly set in the
                      # environment before running this command
                      # default: mongodb://localhost:27017/jobbatical-clone
npm run lint          # lint all source code statically
npm start             # start the production server
                      # need to build first
npm test              # run tests
npm run test:watch    # run tests and watch for changes in files
npm run test:coverage # run tests and generate coverage report
```

## License
MIT
