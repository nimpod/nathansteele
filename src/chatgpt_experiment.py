from openai import OpenAI

client = OpenAI(
  api_key="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"
)          

completion = client.chat.completions.create(
  model="gpt-4o-mini",
  store=True,
  messages=[
    {"role": "user", "content": "write a haiku about ai"}
  ]
)

print(completion.choices[0].message.content);
