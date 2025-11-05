# AP Classroom Answer Parser

Retrieve correct answers from AP Classroom network requests.

![GitHub License](https://img.shields.io/github/license/misaka10987/ap-classroom-answer-parser)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/misaka10987/ap-classroom-answer-parser)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/misaka10987/ap-classroom-answer-parser/build.yml)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/misaka10987/ap-classroom-answer-parser)

## Usage

Because browsers restrict user scripts' access to the network request history, currently the script is not able to intercept network communications and thus data shall be manually retrieved.

- Navigate to and open a specific assignment webpage in the AP Classroom.
- [Open the browser DevTools](https://chatgpt.com/share/690a02e8-28f4-8012-bd35-9fef9a3e8de0) and switch to the *Network* tab.
- Find the network request with an `activity?` parameter using the URL search bar. If it is not present, try refreshing the page.
- Go to the request and switch to the *Response* tab. Copy the raw JSON text in the response body.
- Click *Run* in the script manager menu and paste the text.
