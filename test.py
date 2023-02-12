def wordPattern(pattern: str, s: str) -> bool:
    map = {}
    i = 0
    for word in s.split():
        print(word + " " + pattern[i])
        if (pattern[i] in map):
            if (word != map[pattern[i]]):
                return False
        else:
            map[pattern[i]] = word
        
        i += 1

    print("yes")
    return True

wordPattern("abba", "dog cat cat dog")