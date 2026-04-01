def moyenne(liste):
    """Calcule la moyenne des valeurs d'une liste."""
    if not liste:
        return 0
    return sum(liste) / len(liste)
