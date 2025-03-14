from openai import OpenAI

"""
[Trying to automate blog post txt content into jsx file]
Instructions for ChatGPT:

Convert the following text into HTML code.
Please obide by these rules:
1) Do not apply any CSS code. 
2) Apply the <a> links appropriately to the related text above it.
3) If you see a URL that refers to a .jpeg, please make it into an <img> element.

Divide each section into <div> block elements.

I would like you to do the following 5 tasks whilst iterating the HTML content:
1) Give each div a className of className="blog-subsection"
2) Give each div incrementing ID's like id="section1", id="section2", id="section3", etc...
3) Change the first heading in each <div> to be a <h3> element, with className="subgroup-title"
4) Change any subsequent headings in the same div to a <p> element.
5) Change the className of the final <div> element to be className="blog-references references-text"
6) Change any <h3> headings into <p> elements

Can you combine the first 3 div blocks, and then reconfgigure the ID's of all subsequent div blocks?

"""

client = OpenAI(
  api_key="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"
)          

completion = client.chat.completions.create(
  model="gpt-4o-mini",
  store=True,
  messages=[
    {"role": "user", "content": "Convert the follwing text into HTML code."}
  ]
)

print(completion.choices[0].message.content)



"""
[Trying to automate album review txt content into jsx file]
Instructions for ChatGPT:

Convert the following text into HTML code.
Please obide by these rules:
1) Do not apply any CSS code. 
2) Apply the <a> links appropriately to the related text above it.
3) If you see a URL that refers to a .jpeg, please make it into an <img> element.

Divide each section into <div> block elements.

1) There should be 3 sections, please divide them up into indivudual div blocks with appropriate classnames.
2) At the end of the track ratings, there is a slot for my average rating of all the tracks. Can you calculate this, and display the value to 2 decimal places?
3) Change the headings at the beginning of each div block, to <h3 className="subgroup-title">
4) Remove the <h1> heading
5) Change the first div block to <div className="review-intro">
6) Change the first div block to <div className="review-trackRatings">
7) Change the first div block to <div className="review-summary"
8) Encapsulate all this content within the "review-content" div block, please keep the import statement and export statement.
9) Remove the 'export default review' line at the bottom.

import React from 'react';

export const review = () => (
    <div className='review-content'>

    </div>
)

"""
