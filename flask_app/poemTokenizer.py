import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer

def extract_significant_words(poem):
    # Tokenize the poem into words
    words = word_tokenize(poem)

    # Remove stop words and punctuation
    stop_words = set(stopwords.words('english'))
    words = [word.lower() for word in words if word.isalnum() and word.lower() not in stop_words]

    # Calculate TF-IDF scores
    tfidf = TfidfVectorizer()
    tfidf_matrix = tfidf.fit_transform([' '.join(words)])
    feature_names = tfidf.get_feature_names_out()
    scores = tfidf_matrix.toarray()[0]

    # Combine TF-IDF scores with word frequency
    word_scores = {word: score for word, score in zip(feature_names, scores)}

    # Rank words based on significance scores
    ranked_words = sorted(word_scores.items(), key=lambda x: x[1], reverse=True)

    # Select top 6 words
    top_words = [word for word, _ in ranked_words[:6]]

    return top_words

# Example usage
# poem = "Your poem text here..."
# significant_words = extract_significant_words(poem)
# print("Significant Words:", significant_words)
