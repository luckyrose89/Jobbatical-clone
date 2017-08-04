# Jobbatical-clone
Clone the [jobbatical](https://jobbatical.com/) website as part of [Chingu Voyage](https://github.com/Chingu-cohorts/Chingu-dev-adventures)

The MERN stack (MongoDB, Express, React, Node) is used for this project with hot reloading enabled for both client side and server side modules in development

## Demo
Coming soon

## Development

### Configurations
Since this application supports login using Facebook/Google accounts, `FACEBOOK_CLIENT_ID`, `FACEBOOK_CLIENT_SECRET`, `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` need to be set as environment variables before starting the server. You can specify them in the `.env` file in development. For more details about how to obtain them, please refer to [Facebook's](https://developers.facebook.com) and [Google's](https://developers.google.com/identity/sign-in/web/devconsole-project) website

### Scripts
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

## Main contributors
- [avidrutham](https://github.com/luckyrose89)
- [cbchien46](https://cbchien.github.io/portfolio/)
- [ksmai](https://github.com/ksmai)

## License
MIT
