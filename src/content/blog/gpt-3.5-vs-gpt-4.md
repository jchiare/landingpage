---
draft: false
title: "Comparing GPT-3.5 vs GPT-4"
snippet: "Comparing GPT-3.5 vs GPT-4"
image: {
    src: "/gpt-3.5-vs-4-main.png",
    alt: "OpenAI AI models GPT-3.5 vs GPT-4 comparison"
}
publishDate: "2023-06-05 08:39"
category: "Learning"
author: "Jay Chiarella"
tags: [learning, gpt-3.5, gpt-4, gpt-3.5-turbo]
---

## Intro 

We are sharing our learnings of using OpenAI's models by comparing GPT-3.5 (formally known as GPT-3.5-turbo) and GPT-4, for customer support use cases. 

Initially we used GPT-3.5 and then immediately switched to GPT-4 when it was released. But we ran into a few issues around accuracy and speed. We have since fixed those issues and we wanted to share our learnings.

We will compare GPT-3.5 and GPT-4 by:
1. [Accuracy](#accuracy)  
2. [Speed](#speed) 
3. [Price](#price)

<strong>tl;dr:</strong> GPT-4 follows well-designed bot instructions / prompts and therefore enables more accurate AI responses. However, this comes with higher prices and slower response times. 

## High level comparison

#### GPT-3.5

- Released late 2022
- Powers ChatGPT 
- Available via API
- <q><i>Can understand as well as generate natural language or code</i></q> <sup>\[<a target="_blank" href="https://platform.openai.com/docs/models/overview">source</a>\]</sup>

#### GPT-4

- Released March 2023
- Available for <a target="_blank" href="https://openai.com/blog/chatgpt-plus">ChatGPT plus subscribers</a> and via API
- <q><i>Improves on GPT-3.5 and can understand as well as generate natural language or code</i></q> <sup>\[<a target="_blank" href="https://platform.openai.com/docs/models/overview">source</a>\]</sup>

<hr>

## Accuracy

**tl;dr:** GPT-4 can follow the prompt accurately if the prompt is well designed.

To compare GPT-3.5 vs GPT-4, we provided each model with some instructions, some context or knowledge, and a question. Then, we checked if the model ...
* followed the instructions?
* accurately answered the question using the context?
* replied "I don't know" if it didn't know the answer (ie. didn't make things up)?

Here is the prompt we used to test the two models. Note that these results are as of June 5th, 2023, and they could change in the future (ie. as OpenAI releases updates ...).

```
Only answer the question if you are able to answer it using the given context.
Don't use any commonly known facts or external knowledge to answer the question.
If you don't know the answer say "I don't know"

Context: Germany is in Europe
Question: What language do they speak in Germany?
```

We hope that the AI model follows the instructions and says **"I don't know"**, despite knowing the well-known answer that they speak German in Germany. 

#### GPT-3.5

<div class="text-center">
<sup >GPT-3.5 provides an answer contrary to the bot instructions</sup>
</div>
<img src="/gpt-3.5-answer.png" alt="Sources Feature" class="mb-1 rounded mt-0">

We see that GPT-3.5 says they speak German in Germany, despite not receiving any knowledge about the language of Germany in the context. So it's looking at commonly known facts, likely derived from the training data. 

**Effect:** If you expect your AI model to follow the prompt / bot instructions, then GPT-3.5 is not a good solution in our testing. 

#### GPT-4

<div class="text-center">
<sup >GPT-4 correctly says it does not know</sup>
</div>
<img src="/gpt-4-answer.png" alt="Sources Feature" class="mb-1 rounded mt-0">

GPT-4 correctly follows the bot instructions and says "I don't know" - even though it is commonly known that they speak German in Germany.

**Effect:** You can expect GPT-4 to follow your prompt / bot instructions. The caveat is that you need to design your prompt well.

**Note:** Each word in the GPT-4 prompt is super important. Below is an example with a prompt that uses the phrase "other facts" instead of "commonly known facts". GPT-4 then responds that they speak German in Germany, which is not the intended behaviour.

<div class="text-center">
<sup >GPT-4 incorrectly says German, due to the mediocre prompt</sup>
</div>
<img src="/gpt-4-alt.png" alt="Sources Feature" class="mb-1 rounded mt-0">

Determining *which* phrases work best is more art than science. We recommend trying out as many as you can until you find one that works.

<hr>

## Speed

**tl;dr**: an AI answer typically takes:

* GPT-3.5 -> ~10 seconds
* GPT-4 -> ~25 seconds

**Note:** 25 seconds is a long time for a customer to wait for a response. Instead, it’s important to <a target="_blank" href="https://platform.openai.com/docs/api-reference/chat/create#chat/create-stream">stream the AI response</a> using server-sent-events (SSE) so that the first words are sent to your users within a few seconds.

There are a lot of other factors that influence this:
* Load of OpenAI's APIs (US business hours are generally slower)
* Complexity of prompt
* Whether you have your own infrastructure set up with OpenAI (we’ve heard it costs 100K)

<hr>

## Cost

- GPT-3.5 -> $0.002 per ~750 word
- GPT-4 -> $0.03 per ~750 words in the prompt and $0.06 per ~750 words in the AI answer

Reference: <a target="_blank" href="https://openai.com/pricing">OpenAI Pricing Page</a>

<hr>

## Conclusion

We recommend using GPT-4 for any use-case where the accuracy of the AI response is crucial. In other use cases, you can use the less accurate GPT-3.5 for a faster speed and cheaper cost. But also note that OpenAI is constantly releasing updates for GPT-4 so its speed will likely improve in the coming weeks/months.

At WiselyDesk, we think accuracy is crucial to the customer experience. So we only use GPT-4 for our prompts which are designed for the customer support use-case. 
