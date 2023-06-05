---
draft: false
title: "OpenAI GPT-3.5 vs GPT-4"
snippet: "We're excited to launch a new feature, Sources."
image: {
    src: "/sources.png",
    alt: "Sources"
}
publishDate: "2023-06-02 08:39"
category: "Feature"
author: "Jay Chiarella"
tags: [learning, comparison, gpt-3.5-turbo vs gpt-4]
---

## Intro 

We share our learnings of using OpenAI's AI models by comparing OpenAI's GPT-3.5 (formally known as GPT-3.5-turbo) and GPT-4 for customer support use cases. 

We'll compare them by:
1. [Accuracy](#accuracy)  
2. [Speed](#speed) 
3. [Price](#price)

<strong>tl;dr:</strong> GPT-4 follows well-designed bot instructions / prompts and therefore enables more accurate AI responses. However, this comes with higher prices and slower response times. 

## High level comparison

#### GPT-3.5

- Released late 2022
- The AI model powering the standard ChatGPT 
- Available via API
- <q><i>Can understand as well as generate natural language or code</i></q> <sup>\[<a target="_blank" href="https://platform.openai.com/docs/models/overview">source</a>\]</sup>

#### GPT-4

- Released March 2023
- Available for <a target="_blank" href="https://openai.com/blog/chatgpt-plus">ChatGPT plus subscribers</a> and via API
- <q><i>Improves on GPT-3.5 and can understand as well as generate natural language or code</i></q> <sup>\[<a target="_blank" href="https://platform.openai.com/docs/models/overview">source</a>\]</sup>

<hr>

## Accuracy

**tl;dr:** GPT-4 can follow the prompt accurately if it's well designed, while a mediocre prompt or GPT-3.5 does not follow the prompt accurately.

Evaluation process:

We provide the AI model with some instructions, some context or knowledge, and a question. Then, we check if the AI model ...
* follow the instructions?
* accurately answer the question using the context?
* say it doesn't know if it does not know the answer?

The prompt is:

```
Only answer the question if you are able to answer it using the given context. Don't use any commonly known facts or external knowledge to answer the question. If you don't know the answer say "I don't know"

Context: Germany is in Europe
Question: What language do they speak in Germany?
```

We hope that the AI model follows the instructions and says **"I don't know"**, despite knowing the commonly known answer that they speak German in Germany. 

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

**Effect:** You can expect GPT-4 to follow your prompt / bot instructions. Caveat is that you need to design your prompt well.

**Note:** Each word in the GPT-4 prompt is super important. Below is an example with a prompts that instructs with "other facts" instead of "commonly known facts". GPT-4 then responds that they speak German in Germany, which is not the intended behaviour.

<div class="text-center">
<sup >GPT-4 incorrectly says German, due to the mediocre prompt</sup>
</div>
<img src="/gpt-4-alt.png" alt="Sources Feature" class="mb-1 rounded mt-0">

<hr>

## Speed

To keep it simple, a fully completed AI answer takes:

* GPT-3.5 usually ~10 seconds
* GPT-4 usually ~25 seconds

There are a lot of factors that influence this that we won't control or experiment with, such as:
* Load of OpenAI's APIs (US business hours are generally slower)
* Complexity of prompt
* Whether you have your own infrastructure set up with OpenAI (heard it costs 100K)

**Note:** 25 seconds is a long time for a customer to wait for a response. Instead, it's important to stream (sends the words one by one instead of all at once) the AI response so that the first words are sent to your users within a few seconds.

<hr>

## Cost

GPT-3.5 costs $0.002 per ~750 words. GPT-4 costs $0.03 per ~750 words in the prompt and $0.06 per ~750 words in the AI answer. 

Reference: <a target="_blank" href="https://openai.com/pricing">OpenAI Pricing Page</a>

<hr>

## Outro

We recommend using GPT-4 for any use-case where accuracy of the AI response is crucial. In other use cases, you can use the less accurate GPT-3.5 for a faster speed and cheaper cost.

At WiselyDesk, we think accuracy is crucial to the customer experience. So we only use the GPT-4 and have crafted prompts designed for the customer support use-case. 