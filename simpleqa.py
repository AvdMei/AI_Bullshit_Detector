import random
from datasets import load_dataset
import json

# Load dataset once
dataset = load_dataset("OpenEvals/SimpleQA", split="test")

def get_random_prompt():
    item = random.choice(dataset)
    return item["problem"], item["answer"]

def get_number_prompts(num_prompts):
    prompts = []
    answers = []
    print(len(dataset))
    for i in range(num_prompts):
        item = dataset[i]
        prompts.append(item["problem"])
        answers.append(item["answer"])
    return prompts, answers

def save_prompts_to_json_file(filename, prompts, answers):
    data = [{"question": q, "answer": a} for q, a in zip(prompts, answers)]
    with open(filename, 'w') as f:
        json.dump(data, f, indent=2)

# Example usage
def run_example():
  q, a = get_random_prompt()
  print("Question:", q)
  print("Answer:", a)

  qs,ans = get_number_prompts(4321)
  save_prompts_to_json_file("simpleqa_prompts.json", qs, ans)