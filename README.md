## Geting strated 

 ### `cd scenario`
 To enter the root directory

### `yarn install`

This will install packages to the app

## Amplify Script
 After the `yarn install` run the following comments to configure the amplify 

 ## Install the Amplify CLI if not installed 

 ### `npm install -g @aws-amplify/cli`

This will install the amplify cli to the system and allows to use the amplify commands

## Configure the amplify 
### `amplify configure`

This will ask few configuration deatils which has to be set it up 
for more information revirew the `https://docs.amplify.aws/cli/start/install/#option-1-watch-the-video-guide`

## Add amplify to the app 
### `amplify init`

This will configure the amplify with thexisting setup to the amplify craeted 
For more review `https://docs.amplify.aws/cli/start/workflows/`

## Push changes
### `amplify push`

This will push the changes and the cognito setup in aws console 




## API update
Update the api to the `api` file in the `constant`
### `GETURL---> getrecommandation`
### `POSTURL ----> createrecommandation`



## Start App
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Available Scripts


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.