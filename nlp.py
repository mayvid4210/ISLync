def process_tokens(tokens):
    if tokens == ["HELP", "DOCTOR"]:
        return "I need help from a doctor"
    elif tokens == ["HELLO"]:
        return "Hello"
    elif tokens == ["THANK YOU"]:
        return "Thank you"
    
    return " ".join(tokens)