/// <reference types="tampermonkey" />

const parseAnswer = (json: string): [string] => {
  const retrieved = JSON.parse(json)

  const resolve = (question: any) => {
    const key = question.validation.valid_response.value[0]
    const key_idx = question.options.findIndex((opt: any) => opt.value == key)
    switch (key_idx) {
      case 0:
        return 'A'
      case 1:
        return 'B'
      case 2:
        return 'C'
      case 3:
        return 'D'
    }
    return 'NOT ABCD'
  }

  const answer = retrieved.data.apiActivity.items.map((item: any) =>
    resolve(item.questions[0])
  )

  return answer
}

GM_registerMenuCommand('Run', () => {
  const json = prompt(
    'Enter the JSON response body from the `activity?` request'
  )
  const answer = parseAnswer(`${json}`)
  const message = answer.map((item, idx) => `Q${idx + 1}: ${item}`).join('\n')
  alert(message)
})
