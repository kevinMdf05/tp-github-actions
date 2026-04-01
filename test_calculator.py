from calculator import moyenne


def test_moyenne_simple():
    assert moyenne([1, 2, 3, 4, 5]) == 3.0


def test_moyenne_un_element():
    assert moyenne([10]) == 10.0


def test_moyenne_liste_vide():
    assert moyenne([]) == 0


def test_moyenne_decimales():
    assert moyenne([1.5, 2.5, 3.0]) == 2.3333333333333335


def test_moyenne_negatifs():
    assert moyenne([-1, -2, -3]) == -2.0
