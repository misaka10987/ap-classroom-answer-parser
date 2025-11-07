/// <reference types="tampermonkey" />

import { assertParse } from 'typia/lib/json'

interface QuestionData {
  data: {
    apiActivity: {
      items: {
        questions: [
          {
            validation: {
              valid_response: {
                value: [string]
              }
            }
            options: [
              {
                value: string
              }
            ]
          }
        ]
      }[]
    }
  }
}

const parseAnswer = (json: string): string[] => {
  const data = assertParse<QuestionData>(json)
  const answer = data.data.apiActivity.items
    .map((item) => item.questions[0])
    .map((question) => {
      const key = question.validation.valid_response.value[0]
      const key_idx = question.options.findIndex((opt) => opt.value == key)
      if (key_idx >= 26) return 'UNKNOWN'
      // 'A' = 65
      return String.fromCharCode(65 + key_idx)
    })
  return answer
}

GM_registerMenuCommand('Run', () => {
  const json = prompt(
    'Enter the JSON response body from the `activity?` request'
  )
  if (!json) return
  try {
    const answer = parseAnswer(json)
    const message = answer.map((item, idx) => `Q${idx + 1}: ${item}`).join('\n')
    alert(message)
  } catch (e) {
    alert(`Invalid JSON: ${e}`)
  }
})

GM_registerMenuCommand('Usage Help', () => {
  GM.openInTab(
    'https://github.com/misaka10987/ap-classroom-answer-parser?tab=readme-ov-file#usage'
  )
})
