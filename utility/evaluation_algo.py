from sentence_transformers import SentenceTransformer, util

# Load pre-trained BERT model
model = SentenceTransformer('all-MiniLM-L6-v2')  

def grade_with_rubric_bert(user_answer, rubric_criteria):
    total_weight = sum(weight for _, weight in rubric_criteria)
    score = 0
    matched_criteria = []

    for concept, weight in rubric_criteria:
        embeddings = model.encode([user_answer, concept])
        similarity = util.pytorch_cos_sim(embeddings[0], embeddings[1]).item() * 100  # Convert to percentage
        
        if similarity > 60:  # Threshold for partial match
            score += weight
            matched_criteria.append(f"{concept} ({similarity:.1f}%)")

    final_score = (score / total_weight) * 10  # Scale to 10 marks
    feedback = f"Score: {final_score:.1f}/10. Matched criteria: {', '.join(matched_criteria)}."
    return feedback

# Example Usage
user_response = "Force equals mass times acceleration according to Newton's second law."
rubric = [
    ("Mention F = ma formula", 5),
    ("Explain force and acceleration relation", 3),
    ("Provide a real-world example", 2),
]

print(grade_with_rubric_bert(user_response, rubric))
