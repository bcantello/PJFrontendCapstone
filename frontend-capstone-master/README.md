# PJ POS
Welcome to the frontend portion of the capstone. You will be making a small Point of Sale frontend web application in this section.  
## Mock Server
You will be interacting with a mock server in this project. This server was created with python and uses some libraries you will need to install before running.

#### Installation
1. Run `mkvirtualenv frontend-capstone-server` to create a virtual environment.
    1. If you don't have `mkvirtualenv` installed, make sure PIP is installed from Self Service, then install "virtualenvwrapper Install" from self service. Don't forget to source your `bash_profile`. If you are still having issues you may need to run `pip install --user virtualenvwrapper` and then source.
2. Run `pip install -r ./server/requirements.txt`

#### Running Server
1. Start server by running `python ./server/server.py`
2. Visit `http://127.0.0.1:5000/transactions` in Chrome and you should see a list of transactions in json format.

Note: If you terminate a terminal session, this will terminate the virtual env. So if you try running the server you will see import errors such as: `ImportError: No module named flask`. Don't panic, just run `mkvirtualenv frontend-capstone-server` again.

#### API

See [documentation](server/API_DOCS.md).

## AngularJS
This project is more complex than previous ones so we set you up with some frontend boilerplate. Below you will find instructions on how to get up and running with the AngularJS project.

#### Setup
1. Install [nvm](https://github.com/nvm-sh/nvm)
2. `cd ./angularjs`
3. `nvm i`
4. `npm i`

#### Developing locally
1. `npm start`
2. This should automatically open Chrome and go to `localhost:8080`.
3. If you open up Chrome developer tools you should be able to see `Hello world!` in the console with no errors.

#### Running Karma tests
1. `npm run test`
2. This should open up a separate Chrome browser that displays: "Karma v4.3.0 - connected".
3. Terminal should run the tests and you should see `Executed 1 of 1 SUCCESS (0.002 secs / 0.002 secs)` near the bottom.
