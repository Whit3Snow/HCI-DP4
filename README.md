Additonal modules. 
-- 
React, Bootstrap, lodash, JQuery, material-ui/core, google-maps-react, react-dom, react-router-dom, history.

Notice
--  
When you send the challenge card in the Hello Badminton. Then choose the BADMINTON LOVER. Or opposite. Because there are just 2 account.

HELLO BADMINTON  
ID: victoria0406@kaist.ac.kr  
Pw: 12340987

BADMINTON LOVER  
ID: kmin6381@kaist.ac.kr  
Pw: 222222  


9 JavaScript File(Main feature implementation)
--------------------------
1. **Map.js**  
Map.js is a file for maps on the group selection page. We implemented Map.js to check the tree size and information of our team's trees and other teams near our area.

2. **dairy.js**    
dairy.js is a file implemented to show the list of posts of the team and search for posts through tags on the diary page. And also, if user click on the tag of each post, they can see the posts that have same tag, and if user click on a post itself, they can see the contents of that posts.

3. **component.js**    
component.js is a page that post the record. In there, user can choose the editor box they want, and write the contents freely. If the user click the confirm button, then it save!

4. **openDairy.js**  
openDairy.js is a page that confirm the posting after post the contents from the component.js.

5. **Management.js**   
Management.js implemented everything in the management page. It has been implemented so that the user can check the date, match group, bet mileage, and status related to the challenge. When user send or accept a challenge, user can check it in management. We implemented in management.js so that when a user clicks win after winning a match, he gets mileage as much as he bet, and when he clicks lose after losing, he loses as much bet mileage.  

6. **mileage.js**   
mileage.js implements all of the mileage pages. Ranking and goals were implemented. Regarding goals, new additions or success, fail can be set.

7. **challenge.js**   
challenge.js is a page that fill the information about mileage of betting, opposite group and contents. So user can fill the information and click the send button for sending a challenge card.

8. **challenge-send.js**    
challenge-send is a page that confirm the challenge card after write the challenge information from the challenge.js. If the information is right, then user can click the “ Yes” button, if not then click the “No” button.

  

9. **main.js**   
main.js is a main page that confirm many information. User can confirm their tree and mileage. And confirm the challenge card message from the opposite group’s. And importantly, user can check their posting in the calendar.  









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
