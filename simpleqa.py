import random
import re
from datasets import load_dataset

# Load dataset once
dataset = load_dataset("OpenEvals/SimpleQA", split="test")

def get_random_prompt():
    item = random.choice(dataset)
    return item["problem"], item["answer"]

def get_number_prompts(num_prompts):
    prompts = []
    answers = []
    for i in range(num_prompts):
        item = dataset[i]
        prompts.append(item["problem"])
        answers.append(item["answer"])
    return prompts, answers
def normalize(text):
    text = text.lower().strip()
    text = re.sub(r"[^\w\s]", "", text)  # remove punctuation
    text = re.sub(r"\s+", " ", text)
    return text

def check_answer(model_answer, correct_answer):
    return normalize(model_answer) == normalize(correct_answer)

# Example usage
def run_example():
  q, a = get_random_prompt()
  print("Question:", q)
  print("Answer:", a)

  qs,ans = get_number_prompts(5)
  print(qs)
  print(ans)
